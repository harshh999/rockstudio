import { createClient, ApiKeyStrategy } from "@wix/sdk";
import { items } from "@wix/data";
import fs from "fs";
import path from "path";

const WIX_SITE_ID = process.env.NEXT_PUBLIC_WIX_CLIENT_ID || process.env.WIX_SITE_ID;
const WIX_API_KEY = process.env.WIX_API_KEY;

const client = createClient({
  modules: { items },
  auth: ApiKeyStrategy({ siteId: WIX_SITE_ID as string, apiKey: WIX_API_KEY as string }),
});

async function runAudit() {
  console.log("Starting Rocks Studio Image Audit...");

  // 1. Audit HomeContent
  console.log("\n--- HomeContent ---");
  const home = await client.items.query("HomeContent").find();
  if (home.items.length > 0) {
    const d = home.items[0].data || home.items[0];
    console.log("Hero Image:", d.heroImage);
    console.log("About Preview Image:", d.aboutImage);
    console.log("CTA Image:", d.ctaImage);
  }

  // 2. Audit AboutContent
  console.log("\n--- AboutContent ---");
  const about = await client.items.query("AboutContent").find();
  if (about.items.length > 0) {
    const d = about.items[0].data || about.items[0];
    console.log("Foundation Image:", d.foundationImage);
  }

  // 3. Audit Categories
  console.log("\n--- Categories ---");
  try {
    const cats = await client.items.query("categories").find();
    cats.items.forEach(c => {
      const d = c.data || c;
      console.log(`[${d.title || d.name}] Image: ${d.image}`);
    });
  } catch (err: any) {
    console.error("Categories collection error:", err.message);
  }

  // 4. Audit Products
  console.log("\n--- Products ---");
  let hasNext = true;
  let skip = 0;
  const limit = 100;
  
  let validWix = 0;
  let validLocalFallback = 0;
  let missing = 0;
  let invalid = 0;
  let total = 0;

  const fallbackCounts: Record<string, number> = {};

  const localProductsDir = path.join(process.cwd(), "public", "images", "products");

  while (hasNext) {
    const res = await client.items.query("Products").limit(limit).skip(skip).find();
    
    for (const p of res.items) {
      const d = p.data || p;
      total++;
      
      const img = d.mainImage;
      if (!img) {
        missing++;
      } else if (img.startsWith("wix:image://")) {
        validWix++;
      } else if (img.startsWith("/")) {
        // local path
        const localPath = path.join(process.cwd(), "public", img);
        if (fs.existsSync(localPath)) {
          validLocalFallback++;
          fallbackCounts[img] = (fallbackCounts[img] || 0) + 1;
        } else {
          invalid++;
          console.log(`  [INVALID LOCAL] ${d.name} -> ${img}`);
        }
      } else {
        invalid++;
        console.log(`  [INVALID FORMAT] ${d.name} -> ${img}`);
      }
    }

    skip += limit;
    hasNext = res.hasNext();
  }

  console.log(`Total Products Evaluated: ${total}`);
  console.log(`  - Valid Wix Media: ${validWix}`);
  console.log(`  - Valid Local Fallback: ${validLocalFallback}`);
  console.log(`  - Missing/Empty: ${missing}`);
  console.log(`  - Broken/Invalid: ${invalid}`);
  console.log(`\nLocal Fallback Distribution:`);
  for (const [img, count] of Object.entries(fallbackCounts)) {
    console.log(`  ${count}x ${img}`);
  }

}

runAudit().catch(console.error);
