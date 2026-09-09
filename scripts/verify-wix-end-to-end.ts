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

import { WixCMSProvider } from "../lib/cms/wix";

async function verifyEndToEnd() {
  console.log("=== WIX CMS END-TO-END VERIFICATION ===");
  const cms = new WixCMSProvider();

  // 1. Categories
  const categories = await cms.getProductCategories();
  console.log(`\n--- Categories ---`);
  console.log(`Total Categories: ${categories.length} (Expected: 8)`);
  if (categories.length > 0) {
    console.log(`Sample Categories: ${categories.slice(0, 3).map(c => c.slug).join(", ")}`);
  }

  // 2. Products
  const products = await cms.getProducts();
  console.log(`\n--- Products ---`);
  console.log(`Total Products: ${products.length} (Expected: 289)`);

  // 3. Subcategories (Derived)
  const subcategories = await cms.getProductSubcategories();
  console.log(`\n--- Subcategories (Derived from Products) ---`);
  console.log(`Total Subcategories dynamically derived: ${subcategories.length}`);

  // 4. Test Subcategory combinations
  console.log(`\n--- Testing Category/Subcategory Combinations ---`);
  const combosToTest = [
    { cat: "granite", sub: "imported-granite" },
    { cat: "granite", sub: "indian-granite" },
    { cat: "granite", sub: "gujarat-granite" },
    { cat: "cnc", sub: "cnc-inlay" },
    { cat: "cnc", sub: "cnc-flute" },
  ];

  for (const combo of combosToTest) {
    const filtered = products.filter(
      p => p.category === combo.cat && p.subcategory === combo.sub
    );
    console.log(
      `Combo [${combo.cat} / ${combo.sub}]: Found ${filtered.length} products.`
    );
    if (filtered.length > 0) {
      console.log(`  Sample product: ${filtered[0].slug}`);
    }
  }

  // 5. Featured Products
  const featured = await cms.getFeaturedProducts();
  console.log(`\n--- Featured Products ---`);
  console.log(`Total Featured Products: ${featured.length}`);

  // 6. Test Single Product Resolution by Slug
  console.log(`\n--- Testing Single Product by Slug ---`);
  const sampleSlug = products.length > 0 ? products[0].slug : "zed-black";
  const singleProduct = await cms.getProductBySlug(sampleSlug);
  if (singleProduct) {
    console.log(`Successfully retrieved details for slug "${sampleSlug}" -> ID: ${singleProduct.id}`);
  } else {
    console.log(`Failed to retrieve details for slug "${sampleSlug}"`);
  }

  // 7. Verify Fallbacks
  console.log(`\n--- Testing Non-Existent Results ---`);
  const missingProduct = await cms.getProductBySlug("this-slug-does-not-exist");
  console.log(`Missing Product Query Result: ${missingProduct === null ? "null (Correct Intentional Handling)" : "Returned mock data! (INCORRECT)"}`);

  const siteSettings = await cms.getSiteSettings();
  console.log(`SiteSettings phone: "${siteSettings.phone}" (Empty string expected if not seeded in Wix)`);
  
  const heroContent = await cms.getHeroContent();
  console.log(`HeroContent headline: "${heroContent.headline}" (Empty string expected if not seeded in Wix)`);

  console.log(`\nVerification Complete.`);
}

verifyEndToEnd().catch(console.error);
