import fs from "fs";
import path from "path";

// 1. Load .env.local
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
import { items } from "@wix/data";
import { heroContent } from "../data/hero";
import { aboutContent, aboutPreviewContent } from "../data/about";
import { siteSettings } from "../data/site-settings";
import { testimonials } from "../data/testimonials";

const wixApiKey = process.env.WIX_API_KEY;
const wixSiteId = process.env.WIX_SITE_ID;

if (!wixApiKey || !wixSiteId) {
  console.error("Missing WIX_API_KEY or WIX_SITE_ID.");
  process.exit(1);
}

const client = createClient({
  modules: { items },
  auth: ApiKeyStrategy({
    apiKey: wixApiKey,
    siteId: wixSiteId,
  }),
});

async function saveOrUpdateItem(collectionId: string, id: string, data: any) {
  try {
    const existingQuery = await client.items.query(collectionId).eq("_id", id).find();
    if (existingQuery.items && existingQuery.items.length > 0) {
      await client.items.update(collectionId, { _id: id, ...data });
      return "updated";
    } else {
      await client.items.insert(collectionId, { _id: id, ...data });
      return "inserted";
    }
  } catch (err: any) {
    if (err.message?.includes("does not exist") || err.details?.applicationError?.code === 'WDE0025') {
      throw new Error("COLLECTION_MISSING");
    }
    throw err;
  }
}

async function seedContent() {
  console.log("=== WIX CMS CONTENT SEED ===");
  let counters = { testimonials: 0, home: 0, about: 0, settings: 0, locations: 0 };
  let updatedCounters = { testimonials: 0, home: 0, about: 0, settings: 0, locations: 0 };
  let missingCollections: string[] = [];

  // 1. Seed Testimonials
  console.log("\nSeeding [Testimonials]...");
  let sortOrder = 1;
  for (const t of testimonials) {
    const itemData = {
      name: t.name,
      company: t.company || "",
      role: t.role,
      quote: t.quote,
      image: t.image || null,
      sortOrder: sortOrder++,
      active: true,
    };

    try {
      const res = await saveOrUpdateItem("Testimonials", t.id, itemData);
      console.log(`  ✓ ${res === 'updated' ? 'Updated' : 'Inserted'} testimonial: ${t.name}`);
      if (res === 'inserted') counters.testimonials++; else updatedCounters.testimonials++;
    } catch (err: any) {
      if (err.message === "COLLECTION_MISSING") {
        missingCollections.push("Testimonials");
        console.warn(`  ! Testimonials collection does not exist in Wix. Skipping.`);
        break;
      }
      console.error(`  x Error saving testimonial ${t.name}:`, err.message || err);
    }
  }

  // 2. Seed HomeContent
  console.log("\nSeeding [HomeContent]...");
  const homeData = {
    heroTitle: heroContent.headline,
    heroDescription: heroContent.description,
    heroImage: heroContent.backgroundImage,
    aboutTitle: aboutPreviewContent.headline,
    aboutDescription: aboutPreviewContent.body,
    aboutImage: aboutPreviewContent.image,
    aboutLinkText: aboutPreviewContent.cta.label,
    ctaTitle: "Ready to Start Your Project?",
    ctaDescription: "Get in touch with our team to discuss your requirements and receive a personalised quote.",
    ctaImage: "/images/projects/villa-flooring.jpg",
    ctaButtonText: "Get a Quote",
  };
  try {
    const res = await saveOrUpdateItem("HomeContent", "home-content-single", homeData);
    console.log(`  ✓ ${res === 'updated' ? 'Updated' : 'Inserted'} HomeContent item`);
    if (res === 'inserted') counters.home++; else updatedCounters.home++;
  } catch (err: any) {
    if (err.message === "COLLECTION_MISSING") {
      missingCollections.push("HomeContent");
      console.warn(`  ! HomeContent collection does not exist in Wix. Skipping.`);
    } else {
      console.error("  x Error saving HomeContent:", err.message || err);
    }
  }

  // 3. Seed AboutContent
  console.log("\nSeeding [AboutContent]...");
  const aboutData = {
    introTitle: "About Rocks Studio",
    introDescription: aboutContent.intro,
    manufacturingTitle: aboutContent.foundation.title,
    manufacturingDescription: aboutContent.foundation.description,
    manufacturingImage: aboutContent.foundation.image,
    sourcingTitle: "Core Principles",
    sourcingDescription: aboutContent.sourcing,
    sourcingImage: null,
    qualityTitle: "Quality Control",
    qualityDescription: aboutContent.quality,
    qualityImage: null,
    capabilitiesTitle: "Project Capabilities",
    capabilitiesDescription: aboutContent.capabilities,
    capabilitiesImage: null,
    ctaTitle: "Let's Discuss Your Project",
    ctaDescription: "Connect with our stone specialists in Ahmedabad...",
    ctaImage: null,
  };
  try {
    const res = await saveOrUpdateItem("AboutContent", "about-content-single", aboutData);
    console.log(`  ✓ ${res === 'updated' ? 'Updated' : 'Inserted'} AboutContent item`);
    if (res === 'inserted') counters.about++; else updatedCounters.about++;
  } catch (err: any) {
    if (err.message === "COLLECTION_MISSING") {
      missingCollections.push("AboutContent");
      console.warn(`  ! AboutContent collection does not exist in Wix. Skipping.`);
    } else {
      console.error("  x Error saving AboutContent:", err.message || err);
    }
  }

  // 4. Seed SiteSettings
  console.log("\nSeeding [SiteSettings]...");
  const settingsData = {
    companyName: siteSettings.companyName,
    logo: null,
    phone: siteSettings.phone,
    email: siteSettings.email,
    whatsapp: siteSettings.whatsapp,
    address: siteSettings.address,
    instagramUrl: siteSettings.instagram,
    facebookUrl: siteSettings.facebook || "",
    googleMapsUrl: "",
  };
  try {
    const res = await saveOrUpdateItem("SiteSettings", "site-settings-single", settingsData);
    console.log(`  ✓ ${res === 'updated' ? 'Updated' : 'Inserted'} SiteSettings item`);
    if (res === 'inserted') counters.settings++; else updatedCounters.settings++;
  } catch (err: any) {
    if (err.message === "COLLECTION_MISSING") {
      missingCollections.push("SiteSettings");
      console.warn(`  ! SiteSettings collection does not exist in Wix. Skipping.`);
    } else {
      console.error("  x Error saving SiteSettings:", err.message || err);
    }
  }

  // 5. Seed Locations
  console.log("\nSeeding [Locations]...");
  if (siteSettings.locations) {
    let locIndex = 1;
    for (const loc of siteSettings.locations) {
      const locId = `loc-00${locIndex}`;
      const itemData = {
        name: loc.name,
        address: loc.address,
        contactPerson: loc.contactPerson || "",
        phone: loc.phone,
        email: loc.email || "",
        sortOrder: locIndex,
        active: true,
      };

      try {
        const res = await saveOrUpdateItem("Locations", locId, itemData);
        console.log(`  ✓ ${res === 'updated' ? 'Updated' : 'Inserted'} location: ${loc.name}`);
        if (res === 'inserted') counters.locations++; else updatedCounters.locations++;
      } catch (err: any) {
        if (err.message === "COLLECTION_MISSING") {
          missingCollections.push("Locations");
          console.warn(`  ! Locations collection does not exist in Wix. Skipping location seed.`);
          break; // Stop trying to insert more locations
        } else {
          console.error(`  x Error saving location ${loc.name}:`, err.message || err);
        }
      }
      locIndex++;
    }
  }

  console.log("\n=== Wix CMS Seed Completed ===");
  console.log("Verifying actual counts in Wix CMS...");
  
  const getCount = async (coll: string) => {
    try {
      const res = await client.items.query(coll).find();
      return res.items.length;
    } catch {
      return 0;
    }
  };

  const hCount = await getCount("HomeContent");
  const aCount = await getCount("AboutContent");
  const sCount = await getCount("SiteSettings");
  const tCount = await getCount("Testimonials");

  console.log(`\nFinal Verification Results:`);
  console.log(`- HomeContent: ${hCount} items found (Inserted: ${counters.home}, Updated: ${updatedCounters.home})`);
  console.log(`- AboutContent: ${aCount} items found (Inserted: ${counters.about}, Updated: ${updatedCounters.about})`);
  console.log(`- SiteSettings: ${sCount} items found (Inserted: ${counters.settings}, Updated: ${updatedCounters.settings})`);
  console.log(`- Testimonials: ${tCount} items found (Inserted: ${counters.testimonials}, Updated: ${updatedCounters.testimonials})`);
  
  if (missingCollections.length > 0) {
    console.log(`\nFields/Collections that could not be seeded (missing in Wix):`);
    missingCollections.forEach(c => console.log(`- ${c}`));
  }
}

seedContent().catch(console.error);
