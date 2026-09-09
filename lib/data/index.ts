/**
 * Application Data Access Layer.
 *
 * These functions are the public API that pages and server components use
 * to retrieve content. They delegate to the active CMS provider.
 *
 * Rules:
 *  - Pages import from here — never from lib/cms directly.
 *  - Return types are always application-level types.
 *  - Uses Next.js unstable_cache to implement ISR (revalidation every 60s)
 *    so that Wix CMS changes propagate without manual redeployment.
 */

import { unstable_cache } from "next/cache";
import cms from "@/lib/cms";
import type {
  Product,
  ProductCategory,
  ProductSubcategory,
  Project,
  Testimonial,
  SiteSettings,
  AboutContent,
  AboutPreviewContent,
  HeroContent,
  ApplicationTile,
  ProcessContent,
} from "@/types";
import type { WhyStudioContent } from "@/data/why-studio";

const REVALIDATE_INTERVAL = 60; // 60 seconds

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

export const getProducts = unstable_cache(
  async (): Promise<Product[]> => cms.getProducts(),
  ["products"],
  { revalidate: REVALIDATE_INTERVAL }
);

export const getProductBySlug = unstable_cache(
  async (slug: string): Promise<Product | null> => cms.getProductBySlug(slug),
  ["productBySlug"],
  { revalidate: REVALIDATE_INTERVAL }
);

export const getFeaturedProducts = unstable_cache(
  async (): Promise<Product[]> => cms.getFeaturedProducts(),
  ["featuredProducts"],
  { revalidate: REVALIDATE_INTERVAL }
);

export const getProductsByCategory = unstable_cache(
  async (category: string): Promise<Product[]> => cms.getProductsByCategory(category),
  ["productsByCategory"],
  { revalidate: REVALIDATE_INTERVAL }
);

export const getProductsBySubcategory = unstable_cache(
  async (subcategory: string): Promise<Product[]> => cms.getProductsBySubcategory(subcategory),
  ["productsBySubcategory"],
  { revalidate: REVALIDATE_INTERVAL }
);

// ---------------------------------------------------------------------------
// Product Categories
// ---------------------------------------------------------------------------

export const getProductCategories = unstable_cache(
  async (): Promise<ProductCategory[]> => cms.getProductCategories(),
  ["productCategories"],
  { revalidate: REVALIDATE_INTERVAL }
);

export const getProductCategoryBySlug = unstable_cache(
  async (slug: string): Promise<ProductCategory | null> => cms.getProductCategoryBySlug(slug),
  ["productCategoryBySlug"],
  { revalidate: REVALIDATE_INTERVAL }
);

// ---------------------------------------------------------------------------
// Product Subcategories
// ---------------------------------------------------------------------------

export const getProductSubcategories = unstable_cache(
  async (): Promise<ProductSubcategory[]> => cms.getProductSubcategories(),
  ["productSubcategories"],
  { revalidate: REVALIDATE_INTERVAL }
);

export const getProductSubcategoriesByCategory = unstable_cache(
  async (category: string): Promise<ProductSubcategory[]> => cms.getProductSubcategoriesByCategory(category),
  ["productSubcategoriesByCategory"],
  { revalidate: REVALIDATE_INTERVAL }
);

export const getProductSubcategoryBySlug = unstable_cache(
  async (slug: string): Promise<ProductSubcategory | null> => cms.getProductSubcategoryBySlug(slug),
  ["productSubcategoryBySlug"],
  { revalidate: REVALIDATE_INTERVAL }
);

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export const getProjects = unstable_cache(
  async (): Promise<Project[]> => cms.getProjects(),
  ["projects"],
  { revalidate: REVALIDATE_INTERVAL }
);

export const getFeaturedProjects = unstable_cache(
  async (): Promise<Project[]> => cms.getFeaturedProjects(),
  ["featuredProjects"],
  { revalidate: REVALIDATE_INTERVAL }
);

export const getProjectBySlug = unstable_cache(
  async (slug: string): Promise<Project | null> => cms.getProjectBySlug(slug),
  ["projectBySlug"],
  { revalidate: REVALIDATE_INTERVAL }
);

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export const getTestimonials = unstable_cache(
  async (): Promise<Testimonial[]> => cms.getTestimonials(),
  ["testimonials"],
  { revalidate: REVALIDATE_INTERVAL }
);

// ---------------------------------------------------------------------------
// Site
// ---------------------------------------------------------------------------

export const getSiteSettings = unstable_cache(
  async (): Promise<SiteSettings> => cms.getSiteSettings(),
  ["siteSettings"],
  { revalidate: REVALIDATE_INTERVAL }
);

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export const getAboutContent = unstable_cache(
  async (): Promise<AboutContent> => cms.getAboutContent(),
  ["aboutContent"],
  { revalidate: REVALIDATE_INTERVAL }
);

export const getAboutPreview = unstable_cache(
  async (): Promise<AboutPreviewContent> => cms.getAboutPreview(),
  ["aboutPreview"],
  { revalidate: REVALIDATE_INTERVAL }
);

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export const getHeroContent = unstable_cache(
  async (): Promise<HeroContent> => cms.getHeroContent(),
  ["heroContent"],
  { revalidate: REVALIDATE_INTERVAL }
);

// ---------------------------------------------------------------------------
// Applications
// ---------------------------------------------------------------------------

export const getApplications = unstable_cache(
  async (): Promise<ApplicationTile[]> => cms.getApplications(),
  ["applications"],
  { revalidate: REVALIDATE_INTERVAL }
);

// ---------------------------------------------------------------------------
// Why Studio
// ---------------------------------------------------------------------------

export const getWhyStudioContent = unstable_cache(
  async (): Promise<WhyStudioContent> => cms.getWhyStudioContent(),
  ["whyStudioContent"],
  { revalidate: REVALIDATE_INTERVAL }
);

// ---------------------------------------------------------------------------
// Process
// ---------------------------------------------------------------------------

export const getProcessContent = unstable_cache(
  async (): Promise<ProcessContent> => cms.getProcessContent(),
  ["processContent"],
  { revalidate: REVALIDATE_INTERVAL }
);
