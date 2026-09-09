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

import { createClient, ApiKeyStrategy } from "@wix/sdk";
import { collections } from "@wix/data";
import { COLLECTIONS } from "../lib/cms/wix-field-map";

function getAdminWixClient() {
  const apiKey = process.env.WIX_API_KEY;
  const siteId = process.env.WIX_SITE_ID;

  if (!apiKey || !siteId) {
    throw new Error("Missing WIX_API_KEY or WIX_SITE_ID in environment.");
  }

  return createClient({
    auth: ApiKeyStrategy({
      apiKey,
      siteId,
    }),
    modules: {
      collections,
    },
  });
}

type FieldType =
  | "TEXT"
  | "NUMBER"
  | "DATE"
  | "DATETIME"
  | "IMAGE"
  | "BOOLEAN"
  | "DOCUMENT"
  | "URL"
  | "RICH_TEXT"
  | "VIDEO"
  | "ANY"
  | "ARRAY_STRING"
  | "ARRAY_DOCUMENT"
  | "AUDIO"
  | "TIME"
  | "LANGUAGE"
  | "RICH_CONTENT"
  | "MEDIA_GALLERY"
  | "ADDRESS"
  | "PAGE_LINK"
  | "REFERENCE"
  | "MULTI_REFERENCE"
  | "OBJECT";

interface FieldDefinition {
  id: string;
  type: FieldType;
}

interface CollectionConfig {
  id: string;
  displayName: string;
  fields: FieldDefinition[];
}

// 7 Required Collections matching prompt instructions & COLLECTIONS mapping in lib/cms/wix-field-map.ts
const REQUIRED_COLLECTIONS: CollectionConfig[] = [
  {
    id: COLLECTIONS.categories, // "Categories"
    displayName: "Categories",
    fields: [
      { id: "name", type: "TEXT" },
      { id: "slug", type: "TEXT" },
      { id: "description", type: "RICH_TEXT" },
      { id: "image", type: "IMAGE" },
      { id: "sortOrder", type: "NUMBER" },
      { id: "active", type: "BOOLEAN" },
    ],
  },
  {
    id: COLLECTIONS.products, // "Products"
    displayName: "Products",
    fields: [
      { id: "name", type: "TEXT" },
      { id: "slug", type: "TEXT" },
      { id: "category", type: "TEXT" },
      { id: "subcategory", type: "TEXT" },
      { id: "shortDescription", type: "TEXT" },
      { id: "description", type: "RICH_TEXT" },
      { id: "mainImage", type: "IMAGE" },
      { id: "gallery", type: "MEDIA_GALLERY" },
      { id: "featured", type: "BOOLEAN" },
      { id: "sortOrder", type: "NUMBER" },
      { id: "active", type: "BOOLEAN" },
    ],
  },
  {
    id: COLLECTIONS.testimonials, // "Testimonials"
    displayName: "Testimonials",
    fields: [
      { id: "name", type: "TEXT" },
      { id: "role", type: "TEXT" },
      { id: "company", type: "TEXT" },
      { id: "quote", type: "RICH_TEXT" },
      { id: "sortOrder", type: "NUMBER" },
      { id: "active", type: "BOOLEAN" },
    ],
  },
  {
    id: COLLECTIONS.homeContent, // "HomeContent"
    displayName: "Home Content",
    fields: [
      { id: "heroEyebrow", type: "TEXT" },
      { id: "heroTitle", type: "TEXT" },
      { id: "heroDescription", type: "RICH_TEXT" },
      { id: "heroImage", type: "IMAGE" },
      { id: "aboutEyebrow", type: "TEXT" },
      { id: "aboutTitle", type: "TEXT" },
      { id: "aboutDescription", type: "RICH_TEXT" },
      { id: "aboutImage", type: "IMAGE" },
    ],
  },
  {
    id: COLLECTIONS.aboutContent, // "AboutContent"
    displayName: "About Content",
    fields: [
      { id: "eyebrow", type: "TEXT" },
      { id: "title", type: "TEXT" },
      { id: "description", type: "RICH_TEXT" },
      { id: "mainImage", type: "IMAGE" },
    ],
  },
  {
    id: "ProcessContent",
    displayName: "Process Content",
    fields: [
      { id: "title", type: "TEXT" },
      { id: "description", type: "RICH_TEXT" },
      { id: "image", type: "IMAGE" },
    ],
  },
  {
    id: COLLECTIONS.siteSettings, // "SiteSettings"
    displayName: "Site Settings",
    fields: [
      { id: "companyName", type: "TEXT" },
      { id: "email", type: "TEXT" },
      { id: "phone", type: "TEXT" },
      { id: "address", type: "RICH_TEXT" },
      { id: "instagram", type: "URL" },
      { id: "linkedin", type: "URL" },
    ],
  },
];

const DEFAULT_PERMISSIONS = {
  read: "ANYONE" as const,
  insert: "ADMIN" as const,
  update: "ADMIN" as const,
  remove: "ADMIN" as const,
};

async function provisionWixCMS() {
  console.log("=================================================");
  console.log("   Rocks Studio Wix CMS Provisioning Script      ");
  console.log("=================================================");

  const siteId = process.env.WIX_SITE_ID;
  const apiKey = process.env.WIX_API_KEY;

  console.log(`Target Wix Site ID: ${siteId || "MISSING"}`);
  console.log(`Wix API Key: ${apiKey ? "CONFIGURED (Hidden)" : "MISSING"}\n`);

  if (!siteId || !apiKey) {
    console.error("FATAL: Missing WIX_SITE_ID or WIX_API_KEY environment variables.");
    process.exit(1);
  }

  const client = getAdminWixClient();
  const summaryResults: Array<{ id: string; status: "CREATED" | "EXISTS" | "UPDATED" | "ERROR"; detail: string }> = [];

  for (const config of REQUIRED_COLLECTIONS) {
    console.log(`\nChecking collection: '${config.id}'...`);

    let existingCollection: any = null;
    try {
      existingCollection = await client.collections.getDataCollection(config.id);
    } catch (err: any) {
      // Collection not found or does not exist yet
      existingCollection = null;
    }

    if (!existingCollection) {
      // Collection does not exist -> Create it with full schema and permissions
      console.log(`Creating collection '${config.id}' with ${config.fields.length} fields...`);
      try {
        const fieldsToCreate = config.fields.map((f) => ({
          key: f.id,
          type: f.type,
        }));

        await client.collections.createDataCollection({
          _id: config.id,
          displayName: config.displayName,
          fields: fieldsToCreate as any,
          permissions: DEFAULT_PERMISSIONS,
        });

        console.log(`[STATUS] '${config.id}': CREATED successfully.`);
        summaryResults.push({
          id: config.id,
          status: "CREATED",
          detail: `Collection created with ${config.fields.length} fields`,
        });
      } catch (createErr: any) {
        console.error(`[ERROR] Failed to create collection '${config.id}':`, createErr?.message || createErr);
        summaryResults.push({
          id: config.id,
          status: "ERROR",
          detail: createErr?.message || String(createErr),
        });
      }
    } else {
      // Collection exists -> Inspect existing fields and add missing ones
      console.log(`Collection '${config.id}' EXISTS. Inspecting existing fields...`);
      const existingFieldKeys = new Set(
        (existingCollection.fields || []).map((f: any) => f.key)
      );

      const missingFields = config.fields.filter((f) => !existingFieldKeys.has(f.id));

      if (missingFields.length === 0) {
        console.log(`[STATUS] '${config.id}': EXISTS (All ${config.fields.length} fields present).`);
        summaryResults.push({
          id: config.id,
          status: "EXISTS",
          detail: `All ${config.fields.length} fields present. No missing fields.`,
        });
      } else {
        console.log(`Found ${missingFields.length} missing fields in '${config.id}'. Adding missing fields...`);
        let addedCount = 0;
        let failCount = 0;

        for (const field of missingFields) {
          try {
            await client.collections.createDataCollectionField(config.id, {
              field: {
                key: field.id,
                type: field.type as any,
              },
            });
            console.log(`  + Added field '${field.id}' (${field.type}) to '${config.id}'`);
            addedCount++;
          } catch (fieldErr: any) {
            console.error(`  ! Failed to add field '${field.id}' to '${config.id}':`, fieldErr?.message || fieldErr);
            failCount++;
          }
        }

        console.log(`[STATUS] '${config.id}': UPDATED (${addedCount} added, ${failCount} failed).`);
        summaryResults.push({
          id: config.id,
          status: "UPDATED",
          detail: `Added ${addedCount} missing field(s).`,
        });
      }
    }
  }

  // Final Summary Report
  console.log("\n=================================================");
  console.log("        CMS Provisioning Summary Report          ");
  console.log("=================================================");
  summaryResults.forEach((res) => {
    console.log(`• [${res.status}] ${res.id.padEnd(16)} -> ${res.detail}`);
  });
  console.log("=================================================\n");
}

provisionWixCMS().catch((err) => {
  console.error("FATAL execution failure:", err?.message || err);
  process.exit(1);
});
