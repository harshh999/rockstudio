import fs from "fs";
import path from "path";

// Load .env.local prior to importing client / SDK modules
const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  envContent.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const parts = trimmed.split("=");
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const val = parts.slice(1).join("=").trim().replace(/^["']|["']$/g, "");
      if (key && !process.env[key]) {
        process.env[key] = val;
      }
    }
  });
}

import { getWixClient } from "../lib/wix/client";
import { categories, products } from "../data/catalogue-taxonomy";
import { COLLECTIONS } from "../lib/cms/wix-field-map";

interface MigrationStats {
  found: number;
  inserted: number;
  updated: number;
  failed: number;
  errors: Array<{ slug: string; name: string; code: string; message: string }>;
}

async function migrateCatalogueToWix() {
  console.log("=================================================");
  console.log("  Rocks Studio Wix Catalogue Migration Execution ");
  console.log("=================================================");

  const siteId = process.env.WIX_SITE_ID;
  const apiKey = process.env.WIX_API_KEY;

  console.log(`Configured WIX_SITE_ID: ${siteId || "MISSING"}`);
  console.log(`Wix API Key: ${apiKey ? "CONFIGURED (Hidden)" : "MISSING"}`);
  console.log(`Target Category Collection: '${COLLECTIONS.categories}'`);
  console.log(`Target Product Collection:  '${COLLECTIONS.products}'\n`);

  if (!siteId || !apiKey) {
    console.error("FATAL: Missing WIX_SITE_ID or WIX_API_KEY in environment.");
    process.exit(1);
  }

  const client = getWixClient();

  const categoryStats: MigrationStats = {
    found: categories.length,
    inserted: 0,
    updated: 0,
    failed: 0,
    errors: [],
  };

  const productStats: MigrationStats = {
    found: products.length,
    inserted: 0,
    updated: 0,
    failed: 0,
    errors: [],
  };

  // ---------------------------------------------------------------------------
  // 1. Migrate Categories
  // ---------------------------------------------------------------------------
  console.log(`--- 1. Migrating Categories (${categories.length} records) ---`);

  for (const cat of categories) {
    const payload = {
      name: cat.name,
      slug: cat.slug,
      description: cat.description || "",
      image: cat.image || "",
      sortOrder: cat.sortOrder,
      active: true,
    };

    try {
      // Query existing by slug
      const existingQuery = await client.items
        .query(COLLECTIONS.categories)
        .eq("slug", cat.slug)
        .limit(1)
        .find();

      if (existingQuery.items && existingQuery.items.length > 0) {
        const existing = existingQuery.items[0];
        console.log(`[CATEGORY UPDATE] '${cat.name}' (${cat.slug}) -> Updating existing ID '${existing._id}'`);
        await client.items.update(COLLECTIONS.categories, {
          _id: existing._id,
          ...payload,
        });
        categoryStats.updated++;
      } else {
        console.log(`[CATEGORY INSERT] '${cat.name}' (${cat.slug}) -> Inserting new item`);
        const res = await client.items.insert(COLLECTIONS.categories, payload);
        console.log(`  + Category inserted with ID '${(res as any)._id}'`);
        categoryStats.inserted++;
      }
    } catch (err: any) {
      const code = err?.details?.applicationError?.code || err?.code || "UNKNOWN";
      const message = err?.details?.applicationError?.description || err?.message || String(err);
      console.error(`[CATEGORY FAILED] '${cat.name}' (${cat.slug}) -> Code: ${code} | Message: ${message}`);
      categoryStats.failed++;
      categoryStats.errors.push({ slug: cat.slug, name: cat.name, code, message });
    }
  }

  // ---------------------------------------------------------------------------
  // 2. Migrate Products
  // ---------------------------------------------------------------------------
  console.log(`\n--- 2. Migrating Products (${products.length} records) ---`);

  for (let i = 0; i < products.length; i++) {
    const prod = products[i];
    const payload = {
      name: prod.name,
      slug: prod.slug,
      category: prod.category,
      subcategory: prod.subcategory,
      shortDescription: prod.shortDescription || "",
      description: prod.description || "",
      mainImage: prod.heroImage || "",
      gallery: prod.gallery || [],
      featured: Boolean(prod.featured),
      sortOrder: prod.sortOrder,
      active: true,
    };

    try {
      const existingQuery = await client.items
        .query(COLLECTIONS.products)
        .eq("slug", prod.slug)
        .limit(1)
        .find();

      if (existingQuery.items && existingQuery.items.length > 0) {
        const existing = existingQuery.items[0];
        if (i % 25 === 0 || i === products.length - 1) {
          console.log(`[PRODUCT UPDATE ${i + 1}/${products.length}] '${prod.name}' (${prod.slug}) -> Updating ID '${existing._id}'`);
        }
        await client.items.update(COLLECTIONS.products, {
          _id: existing._id,
          ...payload,
        });
        productStats.updated++;
      } else {
        if (i % 25 === 0 || i === products.length - 1) {
          console.log(`[PRODUCT INSERT ${i + 1}/${products.length}] '${prod.name}' (${prod.slug}) -> Inserting new item`);
        }
        const res = await client.items.insert(COLLECTIONS.products, payload);
        productStats.inserted++;
      }
    } catch (err: any) {
      const code = err?.details?.applicationError?.code || err?.code || "UNKNOWN";
      const message = err?.details?.applicationError?.description || err?.message || String(err);
      console.error(`[PRODUCT FAILED ${i + 1}/${products.length}] '${prod.name}' (${prod.slug}) -> Code: ${code} | Message: ${message}`);
      productStats.failed++;
      productStats.errors.push({ slug: prod.slug, name: prod.name, code, message });
    }
  }

  // ---------------------------------------------------------------------------
  // 3. Post-Migration Verification Queries
  // ---------------------------------------------------------------------------
  console.log("\n=================================================");
  console.log("  Post-Migration Wix CMS Verification Queries    ");
  console.log("=================================================");

  let actualCategoryCount = 0;
  let actualProductCount = 0;

  try {
    const catQuery = await client.items.query(COLLECTIONS.categories).limit(1000).find();
    actualCategoryCount = catQuery.totalCount ?? catQuery.items.length;
    console.log(`Categories Collection ('${COLLECTIONS.categories}'): ${actualCategoryCount} total records verified on Wix.`);
  } catch (err: any) {
    console.error("Categories verification query failed:", err?.message || err);
  }

  try {
    const prodQuery = await client.items.query(COLLECTIONS.products).limit(1000).find();
    actualProductCount = prodQuery.totalCount ?? prodQuery.items.length;
    console.log(`Products Collection ('${COLLECTIONS.products}'): ${actualProductCount} total records verified on Wix.`);
  } catch (err: any) {
    console.error("Products verification query failed:", err?.message || err);
  }

  // Test representative products by slug
  console.log("\n--- Verification of Representative Products by Slug ---");
  const testSlugs = ["zed-black", "blue-onyx", "statuario", "assam-green"];

  for (const slug of testSlugs) {
    try {
      const res = await client.items.query(COLLECTIONS.products).eq("slug", slug).limit(1).find();
      if (res.items && res.items.length > 0) {
        const item = res.items[0];
        const data = (item as any).data || item;
        console.log(`✅ [FOUND] Product '${slug}' -> Name: "${data.name}", Category: "${data.category}", Subcategory: "${data.subcategory}"`);
      } else {
        console.log(`❌ [NOT FOUND] Product '${slug}' not returned by Wix query.`);
      }
    } catch (err: any) {
      console.error(`Error querying product '${slug}':`, err?.message || err);
    }
  }

  // ---------------------------------------------------------------------------
  // 4. Migration Summary Report
  // ---------------------------------------------------------------------------
  console.log("\n=================================================");
  console.log("      Rocks Studio Migration Summary Report      ");
  console.log("=================================================");
  console.log(`Categories:`);
  console.log(`  Discovered in Repo: ${categoryStats.found}`);
  console.log(`  Inserted:           ${categoryStats.inserted}`);
  console.log(`  Updated:            ${categoryStats.updated}`);
  console.log(`  Failed:             ${categoryStats.failed}`);
  console.log(`  Actual Wix Count:   ${actualCategoryCount}`);

  console.log(`\nProducts:`);
  console.log(`  Discovered in Repo: ${productStats.found}`);
  console.log(`  Inserted:           ${productStats.inserted}`);
  console.log(`  Updated:            ${productStats.updated}`);
  console.log(`  Failed:             ${productStats.failed}`);
  console.log(`  Actual Wix Count:   ${actualProductCount}`);

  if (categoryStats.errors.length > 0) {
    console.log(`\nCategory Errors (${categoryStats.errors.length}):`);
    categoryStats.errors.forEach((e) => console.log(`  - ${e.slug}: [${e.code}] ${e.message}`));
  }

  if (productStats.errors.length > 0) {
    console.log(`\nProduct Errors (${productStats.errors.length}):`);
    productStats.errors.forEach((e) => console.log(`  - ${e.slug}: [${e.code}] ${e.message}`));
  }

  console.log("=================================================\n");
}

migrateCatalogueToWix().catch((err) => {
  console.error("FATAL execution failure:", err?.message || err);
  process.exit(1);
});
