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

export interface CMSProvider {
  // Products
  getProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getFeaturedProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProductsBySubcategory(subcategory: string): Promise<Product[]>;

  // Product Categories
  getProductCategories(): Promise<ProductCategory[]>;
  getProductCategoryBySlug(slug: string): Promise<ProductCategory | null>;

  // Product Subcategories
  getProductSubcategories(): Promise<ProductSubcategory[]>;
  getProductSubcategoriesByCategory(category: string): Promise<ProductSubcategory[]>;
  getProductSubcategoryBySlug(slug: string): Promise<ProductSubcategory | null>;

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

  // Applications
  getApplications(): Promise<ApplicationTile[]>;

  // Why Studio
  getWhyStudioContent(): Promise<WhyStudioContent>;

  // Process
  getProcessContent(): Promise<ProcessContent>;
}


