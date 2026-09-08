/**
 * Wix Field Mapping.
 *
 * Centralises the mapping between Wix CMS collection field IDs and
 * application-level property names. This file is the ONLY place where
 * Wix-specific field names should appear.
 *
 * Rules:
 *  - Never import this file from UI components.
 *  - Only the Wix CMS adapter (./wix.ts) should consume these mappings.
 */

// ---------------------------------------------------------------------------
// Collection IDs
// ---------------------------------------------------------------------------

export const COLLECTIONS = {
  categories: "Categories",
  subcategories: "Subcategories",
  products: "Products",
  testimonials: "Testimonials",
  homeContent: "HomeContent",
  aboutContent: "AboutContent",
  siteSettings: "SiteSettings",
  locations: "Locations",
  projects: "Projects",
} as const;

// ---------------------------------------------------------------------------
// Field Mappings
// ---------------------------------------------------------------------------

export const CATEGORY_FIELDS = {
  name: "name",
  slug: "slug",
  description: "description",
  image: "image",
  sortOrder: "sortOrder",
  active: "active",
} as const;

export const SUBCATEGORY_FIELDS = {
  name: "name",
  slug: "slug",
  category: "category",
  description: "description",
  image: "image",
  sortOrder: "sortOrder",
  active: "active",
} as const;

export const PRODUCT_FIELDS = {
  name: "name",
  slug: "slug",
  category: "category",
  subcategory: "subcategory",
  shortDescription: "shortDescription",
  description: "description",
  mainImage: "mainImage",
  gallery: "gallery",
  featured: "featured",
  sortOrder: "sortOrder",
  active: "active",
} as const;

export const TESTIMONIAL_FIELDS = {
  name: "name",
  role: "role",
  company: "company",
  quote: "quote",
  image: "image",
  sortOrder: "sortOrder",
  active: "active",
} as const;

export const HOME_CONTENT_FIELDS = {
  heroTitle: "heroTitle",
  heroDescription: "heroDescription",
  heroImage: "heroImage",
  aboutTitle: "aboutTitle",
  aboutDescription: "aboutDescription",
  aboutImage: "aboutImage",
  aboutLinkText: "aboutLinkText",
  ctaTitle: "ctaTitle",
  ctaDescription: "ctaDescription",
  ctaImage: "ctaImage",
  ctaButtonText: "ctaButtonText",
} as const;

export const ABOUT_CONTENT_FIELDS = {
  introTitle: "introTitle",
  introDescription: "introDescription",
  manufacturingTitle: "manufacturingTitle",
  manufacturingDescription: "manufacturingDescription",
  manufacturingImage: "manufacturingImage",
  sourcingTitle: "sourcingTitle",
  sourcingDescription: "sourcingDescription",
  sourcingImage: "sourcingImage",
  qualityTitle: "qualityTitle",
  qualityDescription: "qualityDescription",
  qualityImage: "qualityImage",
  capabilitiesTitle: "capabilitiesTitle",
  capabilitiesDescription: "capabilitiesDescription",
  capabilitiesImage: "capabilitiesImage",
  ctaTitle: "ctaTitle",
  ctaDescription: "ctaDescription",
  ctaImage: "ctaImage",
} as const;

export const SITE_SETTINGS_FIELDS = {
  companyName: "companyName",
  logo: "logo",
  phone: "phone",
  email: "email",
  whatsapp: "whatsapp",
  address: "address",
  instagramUrl: "instagramUrl",
  facebookUrl: "facebookUrl",
  googleMapsUrl: "googleMapsUrl",
} as const;

export const LOCATION_FIELDS = {
  name: "name",
  address: "address",
  contactPerson: "contactPerson",
  phone: "phone",
  email: "email",
  sortOrder: "sortOrder",
  active: "active",
} as const;
