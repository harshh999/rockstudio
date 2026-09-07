/**
 * Mock CMS Provider.
 *
 * Implements CMSProvider by reading from local TypeScript data files.
 * This is the active implementation during the frontend-only development phase.
 *
 * When the Wix Headless CMS is connected, a WixCMSProvider will replace this
 * implementation without requiring any changes to the UI layer.
 */

import type { CMSProvider } from "./types";
import type {
  Product,
  ProductCategory,
  Project,
  Testimonial,
  SiteSettings,
  AboutContent,
  AboutPreviewContent,
} from "@/types";

import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { siteSettings } from "@/data/site-settings";
import { aboutContent, aboutPreviewContent } from "@/data/about";
import { heroContent } from "@/data/hero";
import { applications } from "@/data/applications";
import { whyStudioData, type WhyStudioContent } from "@/data/why-studio";
import type { HeroContent, ApplicationTile } from "@/types";

export class MockCMSProvider implements CMSProvider {
  // ---------------------------------------------------------------------------
  // Products
  // ---------------------------------------------------------------------------

  async getProducts(): Promise<Product[]> {
    return [...products].sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    return products.find((p) => p.slug === slug) ?? null;
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return products
      .filter((p) => p.featured)
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return products
      .filter((p) => p.category === category)
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }

  // ---------------------------------------------------------------------------
  // Product Categories
  // ---------------------------------------------------------------------------

  async getProductCategories(): Promise<ProductCategory[]> {
    return [...categories].sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async getProductCategoryBySlug(
    slug: string
  ): Promise<ProductCategory | null> {
    return categories.find((c) => c.slug === slug) ?? null;
  }

  // ---------------------------------------------------------------------------
  // Projects
  // ---------------------------------------------------------------------------

  async getProjects(): Promise<Project[]> {
    return [...projects].sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return projects
      .filter((p) => p.featured)
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async getProjectBySlug(slug: string): Promise<Project | null> {
    return projects.find((p) => p.slug === slug) ?? null;
  }

  // ---------------------------------------------------------------------------
  // Testimonials
  // ---------------------------------------------------------------------------

  async getTestimonials(): Promise<Testimonial[]> {
    return [...testimonials];
  }

  // ---------------------------------------------------------------------------
  // Site
  // ---------------------------------------------------------------------------

  async getSiteSettings(): Promise<SiteSettings> {
    return { ...siteSettings };
  }

  // ---------------------------------------------------------------------------
  // About
  // ---------------------------------------------------------------------------

  async getAboutContent(): Promise<AboutContent> {
    return { ...aboutContent };
  }

  async getAboutPreview(): Promise<AboutPreviewContent> {
    return { ...aboutPreviewContent };
  }

  // ---------------------------------------------------------------------------
  // Hero
  // ---------------------------------------------------------------------------

  async getHeroContent(): Promise<HeroContent> {
    return { ...heroContent };
  }

  // ---------------------------------------------------------------------------
  // Applications
  // ---------------------------------------------------------------------------

  async getApplications(): Promise<ApplicationTile[]> {
    return [...applications];
  }

  // ---------------------------------------------------------------------------
  // Why Studio
  // ---------------------------------------------------------------------------

  async getWhyStudioContent(): Promise<WhyStudioContent> {
    return { ...whyStudioData };
  }
}


