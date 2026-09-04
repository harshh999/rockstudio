/**
 * Wix Field Mapping — STUB.
 *
 * Centralises the mapping between Wix CMS collection field IDs and
 * application-level property names. This file is the ONLY place where
 * Wix-specific field names should appear.
 *
 * Rules:
 *  - Never import this file from UI components.
 *  - Never reference Wix field names (e.g. "Title", "Image") outside this file.
 *  - Only the Wix CMS adapter (./wix.ts) should consume these mappings.
 */

// ---------------------------------------------------------------------------
// Collection IDs
// ---------------------------------------------------------------------------

export const COLLECTIONS = {
  products: "MenuItems",
  categories: "Categories",
  projects: "Projects",
  testimonials: "Testimonials",
  siteSettings: "SiteSettings",
  about: "About",
} as const;

// ---------------------------------------------------------------------------
// Field Mappings
// ---------------------------------------------------------------------------

/**
 * Maps Wix CMS field IDs → application property names for the Products collection.
 *
 * Usage inside the Wix adapter:
 *   const product: Product = {
 *     name: wixItem[PRODUCT_FIELDS.name],
 *     heroImage: wixItem[PRODUCT_FIELDS.heroImage],
 *     ...
 *   };
 */
export const PRODUCT_FIELDS = {
  name: "Title",
  description: "description",
  price: "price",
  heroImage: "Image",
  category: "category",
  featured: "featured",
  slug: "slug",
  sortOrder: "sortOrder",
} as const;

export const CATEGORY_FIELDS = {
  name: "Title",
  slug: "slug",
  description: "description",
  image: "Image",
  sortOrder: "sortOrder",
} as const;

// Future: Add field maps for other collections as they are set up in Wix.
// export const PROJECT_FIELDS = { ... };
// export const TESTIMONIAL_FIELDS = { ... };
