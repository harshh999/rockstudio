/**
 * Application Data Access Layer.
 *
 * These functions are the public API that pages and server components use
 * to retrieve content. They delegate to the active CMS provider.
 *
 * Rules:
 *  - Pages import from here — never from lib/cms directly.
 *  - Return types are always application-level types.
 *  - Caching / revalidation can be added here later (e.g. unstable_cache).
 */

import cms from "@/lib/cms";
import type {
  Product,
  ProductCategory,
  Project,
  Testimonial,
  SiteSettings,
  AboutContent,
  AboutPreviewContent,
  HeroContent,
  ApplicationTile,
} from "@/types";
import type { WhyStudioContent } from "@/data/why-studio";

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

export async function getProducts(): Promise<Product[]> {
  return cms.getProducts();
}

export async function getProductBySlug(
  slug: string
): Promise<Product | null> {
  return cms.getProductBySlug(slug);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return cms.getFeaturedProducts();
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  return cms.getProductsByCategory(category);
}

// ---------------------------------------------------------------------------
// Product Categories
// ---------------------------------------------------------------------------

export async function getProductCategories(): Promise<ProductCategory[]> {
  return cms.getProductCategories();
}

export async function getProductCategoryBySlug(
  slug: string
): Promise<ProductCategory | null> {
  return cms.getProductCategoryBySlug(slug);
}

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export async function getProjects(): Promise<Project[]> {
  return cms.getProjects();
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return cms.getFeaturedProjects();
}

export async function getProjectBySlug(
  slug: string
): Promise<Project | null> {
  return cms.getProjectBySlug(slug);
}

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export async function getTestimonials(): Promise<Testimonial[]> {
  return cms.getTestimonials();
}

// ---------------------------------------------------------------------------
// Site
// ---------------------------------------------------------------------------

export async function getSiteSettings(): Promise<SiteSettings> {
  return cms.getSiteSettings();
}

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export async function getAboutContent(): Promise<AboutContent> {
  return cms.getAboutContent();
}

export async function getAboutPreview(): Promise<AboutPreviewContent> {
  return cms.getAboutPreview();
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export async function getHeroContent(): Promise<HeroContent> {
  return cms.getHeroContent();
}

// ---------------------------------------------------------------------------
// Applications
// ---------------------------------------------------------------------------

export async function getApplications(): Promise<ApplicationTile[]> {
  return cms.getApplications();
}

// ---------------------------------------------------------------------------
// Why Studio
// ---------------------------------------------------------------------------

export async function getWhyStudioContent(): Promise<WhyStudioContent> {
  return cms.getWhyStudioContent();
}



