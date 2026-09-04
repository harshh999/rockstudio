/**
 * CMS Provider Interface.
 *
 * Defines the data-access contract that every CMS implementation must satisfy.
 * The mock implementation and the future Wix adapter both implement this interface.
 *
 * Rules:
 *  - Return types are always application-level types (from @/types).
 *  - No CMS-specific objects may appear in the return types.
 *  - All methods are async to accommodate network-backed implementations.
 */

import type {
  Product,
  ProductCategory,
  Project,
  Testimonial,
  SiteSettings,
  AboutContent,
  AboutPreviewContent,
  HeroContent,
} from "@/types";

export interface CMSProvider {
  // Products
  getProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getFeaturedProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;

  // Product Categories
  getProductCategories(): Promise<ProductCategory[]>;
  getProductCategoryBySlug(slug: string): Promise<ProductCategory | null>;

  // Projects
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getProjectBySlug(slug: string): Promise<Project | null>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;

  // Site
  getSiteSettings(): Promise<SiteSettings>;

  // About
  getAboutContent(): Promise<AboutContent>;
  getAboutPreview(): Promise<AboutPreviewContent>;

  // Hero
  getHeroContent(): Promise<HeroContent>;
}
