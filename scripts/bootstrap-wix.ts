import { createClient, ApiKeyStrategy } from "@wix/sdk";
import { collections, items } from "@wix/data";
import { categories, subcategories, products } from "../data/catalogue-taxonomy";
import { testimonials } from "../data/testimonials";
import { siteSettings } from "../data/site-settings";
import { aboutContent } from "../data/about";
import { heroContent } from "../data/hero";

// Interface for field specification
interface FieldSpec {
  key: string;
  displayName: string;
  type: string;
  referencedCollectionId?: string;
}

// Interface for collection specification
interface CollectionSpec {
  id: string;
  displayName: string;
  fields: FieldSpec[];
  isSingleItem?: boolean;
}

const REQUIRED_COLLECTIONS: CollectionSpec[] = [
  {
    id: "Categories",
    displayName: "Categories",
    fields: [
      { key: "name", displayName: "Name", type: "TEXT" },
      { key: "slug", displayName: "Slug", type: "TEXT" },
      { key: "description", displayName: "Description", type: "TEXT" },
      { key: "image", displayName: "Image", type: "IMAGE" },
      { key: "sortOrder", displayName: "Sort Order", type: "NUMBER" },
      { key: "active", displayName: "Active", type: "BOOLEAN" },
    ],
  },
  {
    id: "Subcategories",
    displayName: "Subcategories",
    fields: [
      { key: "name", displayName: "Name", type: "TEXT" },
      { key: "slug", displayName: "Slug", type: "TEXT" },
      {
        key: "category",
        displayName: "Category",
        type: "REFERENCE",
        referencedCollectionId: "Categories",
      },
      { key: "description", displayName: "Description", type: "TEXT" },
      { key: "image", displayName: "Image", type: "IMAGE" },
      { key: "sortOrder", displayName: "Sort Order", type: "NUMBER" },
      { key: "active", displayName: "Active", type: "BOOLEAN" },
    ],
  },
  {
    id: "Products",
    displayName: "Products",
    fields: [
      { key: "name", displayName: "Name", type: "TEXT" },
      { key: "slug", displayName: "Slug", type: "TEXT" },
      {
        key: "category",
        displayName: "Category",
        type: "REFERENCE",
        referencedCollectionId: "Categories",
      },
      {
        key: "subcategory",
        displayName: "Subcategory",
        type: "REFERENCE",
        referencedCollectionId: "Subcategories",
      },
      { key: "shortDescription", displayName: "Short Description", type: "TEXT" },
      { key: "description", displayName: "Description", type: "RICH_TEXT" },
      { key: "mainImage", displayName: "Main Image", type: "IMAGE" },
      { key: "gallery", displayName: "Gallery", type: "MEDIA_GALLERY" },
      { key: "featured", displayName: "Featured", type: "BOOLEAN" },
      { key: "sortOrder", displayName: "Sort Order", type: "NUMBER" },
      { key: "active", displayName: "Active", type: "BOOLEAN" },
    ],
  },
  {
    id: "Testimonials",
    displayName: "Testimonials",
    fields: [
      { key: "name", displayName: "Name", type: "TEXT" },
      { key: "role", displayName: "Role", type: "TEXT" },
      { key: "company", displayName: "Company", type: "TEXT" },
      { key: "quote", displayName: "Quote", type: "RICH_TEXT" },
      { key: "image", displayName: "Image", type: "IMAGE" },
      { key: "sortOrder", displayName: "Sort Order", type: "NUMBER" },
      { key: "active", displayName: "Active", type: "BOOLEAN" },
    ],
  },
  {
    id: "HomeContent",
    displayName: "Home Content",
    isSingleItem: true,
    fields: [
      { key: "heroTitle", displayName: "Hero Title", type: "TEXT" },
      { key: "heroDescription", displayName: "Hero Description", type: "TEXT" },
      { key: "heroImage", displayName: "Hero Image", type: "IMAGE" },
      { key: "aboutTitle", displayName: "About Title", type: "TEXT" },
      { key: "aboutDescription", displayName: "About Description", type: "RICH_TEXT" },
      { key: "aboutImage", displayName: "About Image", type: "IMAGE" },
      { key: "aboutLinkText", displayName: "About Link Text", type: "TEXT" },
      { key: "ctaTitle", displayName: "CTA Title", type: "TEXT" },
      { key: "ctaDescription", displayName: "CTA Description", type: "RICH_TEXT" },
      { key: "ctaImage", displayName: "CTA Image", type: "IMAGE" },
      { key: "ctaButtonText", displayName: "CTA Button Text", type: "TEXT" },
    ],
  },
  {
    id: "AboutContent",
    displayName: "About Content",
    isSingleItem: true,
    fields: [
      { key: "introTitle", displayName: "Intro Title", type: "TEXT" },
      { key: "introDescription", displayName: "Intro Description", type: "RICH_TEXT" },
      { key: "manufacturingTitle", displayName: "Manufacturing Title", type: "TEXT" },
      { key: "manufacturingDescription", displayName: "Manufacturing Description", type: "RICH_TEXT" },
      { key: "manufacturingImage", displayName: "Manufacturing Image", type: "IMAGE" },
      { key: "sourcingTitle", displayName: "Sourcing Title", type: "TEXT" },
      { key: "sourcingDescription", displayName: "Sourcing Description", type: "RICH_TEXT" },
      { key: "sourcingImage", displayName: "Sourcing Image", type: "IMAGE" },
      { key: "qualityTitle", displayName: "Quality Title", type: "TEXT" },
      { key: "qualityDescription", displayName: "Quality Description", type: "RICH_TEXT" },
      { key: "qualityImage", displayName: "Quality Image", type: "IMAGE" },
      { key: "capabilitiesTitle", displayName: "Capabilities Title", type: "TEXT" },
      { key: "capabilitiesDescription", displayName: "Capabilities Description", type: "RICH_TEXT" },
      { key: "capabilitiesImage", displayName: "Capabilities Image", type: "IMAGE" },
      { key: "ctaTitle", displayName: "CTA Title", type: "TEXT" },
      { key: "ctaDescription", displayName: "CTA Description", type: "RICH_TEXT" },
      { key: "ctaImage", displayName: "CTA Image", type: "IMAGE" },
    ],
  },
  {
    id: "SiteSettings",
    displayName: "Site Settings",
    isSingleItem: true,
    fields: [
      { key: "companyName", displayName: "Company Name", type: "TEXT" },
      { key: "logo", displayName: "Logo", type: "IMAGE" },
      { key: "phone", displayName: "Phone", type: "TEXT" },
      { key: "email", displayName: "Email", type: "TEXT" },
      { key: "whatsapp", displayName: "WhatsApp", type: "TEXT" },
      { key: "address", displayName: "Address", type: "TEXT" },
      { key: "instagramUrl", displayName: "Instagram URL", type: "TEXT" },
      { key: "facebookUrl", displayName: "Facebook URL", type: "TEXT" },
      { key: "googleMapsUrl", displayName: "Google Maps URL", type: "TEXT" },
    ],
  },
  {
    id: "Locations",
    displayName: "Locations",
    fields: [
      { key: "name", displayName: "Name", type: "TEXT" },
      { key: "address", displayName: "Address", type: "TEXT" },
      { key: "contactPerson", displayName: "Contact Person", type: "TEXT" },
      { key: "phone", displayName: "Phone", type: "TEXT" },
      { key: "email", displayName: "Email", type: "TEXT" },
      { key: "sortOrder", displayName: "Sort Order", type: "NUMBER" },
      { key: "active", displayName: "Active", type: "BOOLEAN" },
    ],
  },
];

async function bootstrap() {
  console.log("=== Rocks Studio Wix CMS Bootstrap ===");

  const apiKey = process.env.WIX_API_KEY;
  const siteId = process.env.WIX_SITE_ID;

  if (!apiKey || apiKey.trim() === "" || apiKey === '""') {
    console.error("ERROR: WIX_API_KEY is not defined in environment or .env.local.");
    console.error("Please add your valid WIX_API_KEY to .env.local before running setup:wix.");
    process.exit(1);
  }

  if (!siteId || siteId.trim() === "") {
    console.error("ERROR: WIX_SITE_ID is missing.");
    process.exit(1);
  }

  console.log(`Authenticating with Wix Site ID: ${siteId}`);

  const client = createClient({
    auth: ApiKeyStrategy({ apiKey, siteId }),
    modules: { collections, items },
  });

  // Step 1: Fetch existing collections
  console.log("\n1. Fetching existing collections from Wix...");
  let existingCollectionsMap = new Map<string, any>();
  try {
    const listRes = await client.collections.listDataCollections();
    const existing = listRes.collections || [];
    for (const c of existing) {
      if (c._id) existingCollectionsMap.set(c._id, c);
    }
    console.log(`Found ${existingCollectionsMap.size} existing collections in Wix.`);
  } catch (err: any) {
    console.error("Failed to list collections:", err.message || err);
    process.exit(1);
  }

  // Step 2: Ensure collections & schemas exist idempotently
  console.log("\n2. Ensuring required collections & schemas...");
  for (const spec of REQUIRED_COLLECTIONS) {
    const existing = existingCollectionsMap.get(spec.id);

    if (existing) {
      console.log(`✓ Collection [${spec.id}] already exists. Validating schema compatibility...`);
      const existingFieldsMap = new Map<string, string>();
      (existing.fields || []).forEach((f: any) => {
        if (f.key && f.type) existingFieldsMap.set(f.key, f.type);
      });

      let mismatch = false;
      for (const reqField of spec.fields) {
        const existingType = existingFieldsMap.get(reqField.key);
        if (!existingType) {
          console.warn(`  - Missing field [${reqField.key}] in collection [${spec.id}]. Adding field...`);
          try {
            await client.collections.createDataCollectionField(spec.id, {
              field: {
                key: reqField.key,
                displayName: reqField.displayName,
                type: reqField.type as any,
                ...(reqField.type === "REFERENCE"
                  ? { typeMetadata: { reference: { referencedCollectionId: reqField.referencedCollectionId } } }
                  : {}),
              },
            });
            console.log(`    Successfully added field [${reqField.key}].`);
          } catch (fErr: any) {
            console.error(`    Failed to add field [${reqField.key}]: ${fErr.message}`);
          }
        } else if (existingType !== reqField.type) {
          console.error(`  - Schema mismatch in [${spec.id}]: field [${reqField.key}] is ${existingType}, expected ${reqField.type}.`);
          mismatch = true;
        }
      }

      if (mismatch) {
        console.error(`ABORTING: Incompatible schema detected for collection [${spec.id}]. Stopping safely.`);
        process.exit(1);
      }
    } else {
      console.log(`+ Creating collection [${spec.id}]...`);
      const collectionPayload: any = {
        _id: spec.id,
        displayName: spec.displayName,
        fields: spec.fields.map((f) => ({
          key: f.key,
          displayName: f.displayName,
          type: f.type,
          ...(f.type === "REFERENCE"
            ? { typeMetadata: { reference: { referencedCollectionId: f.referencedCollectionId } } }
            : {}),
        })),
        permissions: {
          read: "ANYONE",
          insert: "CMS_EDITOR",
          update: "CMS_EDITOR",
          remove: "CMS_EDITOR",
        },
      };

      try {
        await client.collections.createDataCollection(collectionPayload);
        console.log(`  Successfully created collection [${spec.id}].`);
      } catch (cErr: any) {
        console.error(`  Failed to create collection [${spec.id}]:`, cErr.message || cErr);
        process.exit(1);
      }
    }
  }

  // Step 3: Seed content idempotently
  console.log("\n3. Seeding content...");

  // Seed Categories
  console.log("Seeding [Categories]...");
  const categoryIdMap = new Map<string, string>(); // slug -> wix item _id
  for (const cat of categories) {
    const itemData = {
      _id: cat.id,
      name: cat.name,
      slug: cat.slug,
      description: cat.description,
      image: null,
      sortOrder: cat.sortOrder,
      active: true,
    };

    try {
      await (client.items as any).saveDataItem({
        dataCollectionId: "Categories",
        dataItem: { _id: cat.id, data: itemData },
      });
      categoryIdMap.set(cat.slug, cat.id);
      console.log(`  ✓ Saved category: ${cat.name} (${cat.id})`);
    } catch (err: any) {
      console.error(`  x Error saving category ${cat.name}:`, err.message || err);
    }
  }

  // Seed Subcategories
  console.log("\nSeeding [Subcategories]...");
  const subcategoryIdMap = new Map<string, string>(); // slug -> wix item _id
  for (const sub of subcategories) {
    const catWixId = categoryIdMap.get(sub.category) || sub.category;
    const itemData = {
      _id: sub.id,
      name: sub.name,
      slug: sub.slug,
      category: catWixId,
      description: sub.description,
      image: null,
      sortOrder: sub.sortOrder,
      active: true,
    };

    try {
      await (client.items as any).saveDataItem({
        dataCollectionId: "Subcategories",
        dataItem: { _id: sub.id, data: itemData },
      });
      subcategoryIdMap.set(sub.slug, sub.id);
      console.log(`  ✓ Saved subcategory: ${sub.name} (${sub.id})`);
    } catch (err: any) {
      console.error(`  x Error saving subcategory ${sub.name}:`, err.message || err);
    }
  }

  // Seed Products
  console.log("\nSeeding [Products]...");
  for (const prod of products) {
    const catWixId = categoryIdMap.get(prod.category) || prod.category;
    const subWixId = subcategoryIdMap.get(prod.subcategory) || prod.subcategory;
    const itemData = {
      _id: prod.id,
      name: prod.name,
      slug: prod.slug,
      category: catWixId,
      subcategory: subWixId,
      shortDescription: prod.shortDescription,
      description: prod.description,
      mainImage: null,
      gallery: [],
      featured: prod.featured,
      sortOrder: prod.sortOrder,
      active: true,
    };

    try {
      await (client.items as any).saveDataItem({
        dataCollectionId: "Products",
        dataItem: { _id: prod.id, data: itemData },
      });
      console.log(`  ✓ Saved product: ${prod.name} (${prod.id})`);
    } catch (err: any) {
      console.error(`  x Error saving product ${prod.name}:`, err.message || err);
    }
  }

  // Seed Testimonials
  console.log("\nSeeding [Testimonials]...");
  for (const t of testimonials) {
    const itemData = {
      _id: t.id,
      name: t.name,
      role: t.role,
      company: t.company,
      quote: t.quote,
      image: null,
      sortOrder: 1,
      active: true,
    };

    try {
      await (client.items as any).saveDataItem({
        dataCollectionId: "Testimonials",
        dataItem: { _id: t.id, data: itemData },
      });
      console.log(`  ✓ Saved testimonial: ${t.name} (${t.id})`);
    } catch (err: any) {
      console.error(`  x Error saving testimonial ${t.name}:`, err.message || err);
    }
  }

  // Seed HomeContent (Single-item)
  console.log("\nSeeding [HomeContent]...");
  const homeData = {
    _id: "home-content-single",
    heroTitle: heroContent.headline,
    heroDescription: heroContent.description,
    heroImage: null,
    aboutTitle: "ABOUT ROCKS STUDIO",
    aboutDescription: "Rocks Studio is an Ahmedabad-based natural stone company sourcing and supplying marble, granite and other natural materials for architecture and interiors.",
    aboutImage: null,
    aboutLinkText: "Discover Rocks Studio",
    ctaTitle: "Elevate your next architectural project",
    ctaDescription: "Connect with our stone specialists to discuss material specifications and custom sourcing.",
    ctaImage: null,
    ctaButtonText: "Get in Touch",
  };
  try {
    await (client.items as any).saveDataItem({
      dataCollectionId: "HomeContent",
      dataItem: { _id: "home-content-single", data: homeData },
    });
    console.log("  ✓ Saved HomeContent item");
  } catch (err: any) {
    console.error("  x Error saving HomeContent:", err.message || err);
  }

  // Seed AboutContent (Single-item)
  console.log("\nSeeding [AboutContent]...");
  const aboutData = {
    _id: "about-content-single",
    introTitle: "About Rocks Studio",
    introDescription: aboutContent.intro,
    manufacturingTitle: aboutContent.foundation.title,
    manufacturingDescription: aboutContent.foundation.description,
    manufacturingImage: aboutContent.foundation.image,
    sourcingTitle: "Global & Regional Sourcing",
    sourcingDescription: aboutContent.sourcing,
    sourcingImage: null,
    qualityTitle: "Quality Control & Selection",
    qualityDescription: aboutContent.quality,
    qualityImage: null,
    capabilitiesTitle: "Project Capabilities",
    capabilitiesDescription: aboutContent.capabilities,
    capabilitiesImage: null,
    ctaTitle: "Work with Rocks Studio",
    ctaDescription: "Contact our team for project inquiries and stone selection assistance.",
    ctaImage: null,
  };
  try {
    await (client.items as any).saveDataItem({
      dataCollectionId: "AboutContent",
      dataItem: { _id: "about-content-single", data: aboutData },
    });
    console.log("  ✓ Saved AboutContent item");
  } catch (err: any) {
    console.error("  x Error saving AboutContent:", err.message || err);
  }

  // Seed SiteSettings (Single-item)
  console.log("\nSeeding [SiteSettings]...");
  const settingsData = {
    _id: "site-settings-single",
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
    await (client.items as any).saveDataItem({
      dataCollectionId: "SiteSettings",
      dataItem: { _id: "site-settings-single", data: settingsData },
    });
    console.log("  ✓ Saved SiteSettings item");
  } catch (err: any) {
    console.error("  x Error saving SiteSettings:", err.message || err);
  }

  // Seed Locations
  console.log("\nSeeding [Locations]...");
  if (siteSettings.locations) {
    let locIndex = 1;
    for (const loc of siteSettings.locations) {
      const locId = `loc-00${locIndex}`;
      const itemData = {
        _id: locId,
        name: loc.name,
        address: loc.address,
        contactPerson: loc.contactPerson || "",
        phone: loc.phone,
        email: loc.email || "",
        sortOrder: locIndex,
        active: true,
      };

      try {
        await (client.items as any).saveDataItem({
          dataCollectionId: "Locations",
          dataItem: { _id: locId, data: itemData },
        });
        console.log(`  ✓ Saved location: ${loc.name} (${locId})`);
      } catch (err: any) {
        console.error(`  x Error saving location ${loc.name}:`, err.message || err);
      }
      locIndex++;
    }
  }

  console.log("\n=== Wix CMS Bootstrap Completed Successfully ===");
}

bootstrap().catch((err) => {
  console.error("Bootstrap script failed with error:", err);
  process.exit(1);
});
