/**
 * Wix Headless CMS Adapter.
 *
 * Implements CMSProvider using @wix/sdk and @wix/data for server-side data fetching.
 *
 * Requirements:
 *  - Uses @wix/sdk and @wix/data.
 *  - Authenticates via WIX_API_KEY and WIX_SITE_ID (server-side env vars).
 *  - Maps Wix collection fields to application domain types using wix-field-map.ts.
 *  - Returns application-level types (from @/types) — never Wix SDK objects.
 */

import { createClient } from "@wix/sdk";
import type { CMSProvider } from "./types";
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
  LocationItem,
  ApplicationTile,
  ProcessContent,
} from "@/types";
import { COLLECTIONS } from "./wix-field-map";
import { projects as mockProjects } from "@/data/projects";
import { applications as mockApplications } from "@/data/applications";
import { whyStudioData as mockWhyStudioData, type WhyStudioContent } from "@/data/why-studio";
import { processContent as mockProcessContent } from "@/data/process";

import { getWixClient } from "@/lib/wix/client";

// Helper to strip simple HTML tags if rich text is returned as HTML string
function stripHtml(html: unknown): string {
  if (typeof html !== "string") return "";
  return html.replace(/<[^>]*>?/gm, "").trim();
}

interface WixItem {
  _id?: string;
  data?: Record<string, unknown>;
  [key: string]: unknown;
}

function extractItemData(item: unknown): { id: string; d: Record<string, unknown> } {
  const obj = (item || {}) as WixItem;
  const d = (obj.data || obj) as Record<string, unknown>;
  return { id: String(obj._id || ""), d };
}

function extractImageSrc(val: unknown): string {
  if (typeof val === "string") return val;
  if (val && typeof val === "object" && "src" in val) {
    return String((val as { src?: unknown }).src || "");
  }
  return "";
}

function extractSlug(ref: unknown): string {
  if (typeof ref === "object" && ref !== null) {
    const obj = ref as { slug?: unknown; _id?: unknown };
    return String(obj.slug || obj._id || "");
  }
  if (typeof ref === "string") return ref;
  return "";
}

export class WixCMSProvider implements CMSProvider {
  private client: ReturnType<typeof createClient>;

  constructor() {
    this.client = getWixClient();
  }

  // ---------------------------------------------------------------------------
  // Products
  // ---------------------------------------------------------------------------

  async getProducts(): Promise<Product[]> {
    try {
      const { items: results } = await this.client.items
        .query(COLLECTIONS.products)
        .eq("active", true)
        .ascending("sortOrder")
        .limit(1000)
        .find();

      return (results as unknown[]).map((item) => {
        const { id, d } = extractItemData(item);
        const categorySlug = extractSlug(d.category);
        const subcategorySlug = extractSlug(d.subcategory);
        const galleryRaw = Array.isArray(d.gallery) ? d.gallery : [];

        return {
          id,
          name: String(d.name || ""),
          slug: String(d.slug || ""),
          category: categorySlug,
          subcategory: subcategorySlug,
          shortDescription: String(d.shortDescription || ""),
          description: stripHtml(d.description),
          heroImage: extractImageSrc(d.mainImage),
          gallery: galleryRaw.map((g) => extractImageSrc(g)),
          featured: Boolean(d.featured),
          sortOrder: typeof d.sortOrder === "number" ? d.sortOrder : 0,
        };
      });
    } catch (error) {
      console.error("WixCMSProvider.getProducts error:", error);
      return [];
    }
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    try {
      const { items: results } = await this.client.items
        .query(COLLECTIONS.products)
        .eq("slug", slug)
        .eq("active", true)
        .limit(1)
        .find();

      if (results.length === 0) return null;
      const { id, d } = extractItemData(results[0]);
      const categorySlug = extractSlug(d.category);
      const subcategorySlug = extractSlug(d.subcategory);
      const galleryRaw = Array.isArray(d.gallery) ? d.gallery : [];

      return {
        id,
        name: String(d.name || ""),
        slug: String(d.slug || ""),
        category: categorySlug,
        subcategory: subcategorySlug,
        shortDescription: String(d.shortDescription || ""),
        description: stripHtml(d.description),
        heroImage: extractImageSrc(d.mainImage),
        gallery: galleryRaw.map((g) => extractImageSrc(g)),
        featured: Boolean(d.featured),
        sortOrder: typeof d.sortOrder === "number" ? d.sortOrder : 0,
      };
    } catch (error) {
      console.error("WixCMSProvider.getProductBySlug error:", error);
      return null;
    }
  }

  async getFeaturedProducts(): Promise<Product[]> {
    const all = await this.getProducts();
    return all.filter((p) => p.featured);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    const all = await this.getProducts();
    return all.filter((p) => p.category === category);
  }

  async getProductsBySubcategory(subcategory: string): Promise<Product[]> {
    const all = await this.getProducts();
    return all.filter((p) => p.subcategory === subcategory);
  }

  // ---------------------------------------------------------------------------
  // Product Categories
  // ---------------------------------------------------------------------------

  async getProductCategories(): Promise<ProductCategory[]> {
    try {
      const { items: results } = await this.client.items
        .query(COLLECTIONS.categories)
        .eq("active", true)
        .ascending("sortOrder")
        .limit(1000)
        .find();

      return (results as unknown[]).map((item) => {
        const { id, d } = extractItemData(item);
        return {
          id,
          name: String(d.name || ""),
          slug: String(d.slug || ""),
          description: String(d.description || ""),
          image: extractImageSrc(d.image),
          sortOrder: typeof d.sortOrder === "number" ? d.sortOrder : 0,
        };
      });
    } catch (error) {
      console.error("WixCMSProvider.getProductCategories error:", error);
      return [];
    }
  }

  async getProductCategoryBySlug(slug: string): Promise<ProductCategory | null> {
    const all = await this.getProductCategories();
    return all.find((c) => c.slug === slug) ?? null;
  }

  // ---------------------------------------------------------------------------
  // Product Subcategories (Derived dynamically from Products collection)
  // ---------------------------------------------------------------------------

  async getProductSubcategories(): Promise<ProductSubcategory[]> {
    try {
      const products = await this.getProducts();
      const subcatMap = new Map<string, ProductSubcategory>();

      let sortOrder = 1;
      for (const p of products) {
        if (!p.subcategory) continue;
        const key = `${p.category}:${p.subcategory}`;
        if (!subcatMap.has(key)) {
          const name = p.subcategory
            .split("-")
            .map((word) => {
              const lower = word.toLowerCase();
              if (lower === "cnc") return "CNC";
              if (lower === "sd") return "SD";
              return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join(" ");

          subcatMap.set(key, {
            id: `subcat-${p.subcategory}`,
            name,
            slug: p.subcategory,
            category: p.category,
            description: `${name} material items.`,
            image: p.heroImage || "",
            sortOrder: sortOrder++,
          });
        }
      }

      return Array.from(subcatMap.values());
    } catch (error) {
      console.error("WixCMSProvider.getProductSubcategories error:", error);
      return [];
    }
  }

  async getProductSubcategoriesByCategory(category: string): Promise<ProductSubcategory[]> {
    const all = await this.getProductSubcategories();
    return all.filter((s) => s.category === category);
  }

  async getProductSubcategoryBySlug(slug: string): Promise<ProductSubcategory | null> {
    const all = await this.getProductSubcategories();
    return all.find((s) => s.slug === slug) ?? null;
  }

  // ---------------------------------------------------------------------------
  // Projects (Unchanged legacy support using mock fallback)
  // ---------------------------------------------------------------------------

  async getProjects(): Promise<Project[]> {
    return [...mockProjects].sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return mockProjects.filter((p) => p.featured).sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async getProjectBySlug(slug: string): Promise<Project | null> {
    return mockProjects.find((p) => p.slug === slug) ?? null;
  }

  // ---------------------------------------------------------------------------
  // Testimonials
  // ---------------------------------------------------------------------------

  async getTestimonials(): Promise<Testimonial[]> {
    try {
      const { items: results } = await this.client.items
        .query(COLLECTIONS.testimonials)
        .eq("active", true)
        .ascending("sortOrder")
        .find();

      return (results as unknown[]).map((item) => {
        const { id, d } = extractItemData(item);
        return {
          id,
          name: String(d.name || ""),
          company: String(d.company || ""),
          role: String(d.role || ""),
          quote: stripHtml(d.quote),
          image: extractImageSrc(d.image),
        };
      });
    } catch (error) {
      console.error("WixCMSProvider.getTestimonials error:", error);
      return [];
    }
  }

  // ---------------------------------------------------------------------------
  // Site Settings
  // ---------------------------------------------------------------------------

  async getSiteSettings(): Promise<SiteSettings> {
    try {
      const { items: results } = await this.client.items
        .query(COLLECTIONS.siteSettings)
        .limit(1)
        .find();

      let locResults: unknown[] = [];
      try {
        const { items } = await this.client.items
          .query(COLLECTIONS.locations)
          .eq("active", true)
          .ascending("sortOrder")
          .find();
        locResults = items;
      } catch {
        // intentionally ignore missing locations collection
      }

      const locations: LocationItem[] = locResults.map((item) => {
        const { d } = extractItemData(item);
        return {
          name: String(d.name || ""),
          address: String(d.address || ""),
          phone: String(d.phone || ""),
          email: typeof d.email === "string" ? d.email : undefined,
          contactPerson: typeof d.contactPerson === "string" ? d.contactPerson : undefined,
        };
      });

      if (results.length > 0) {
        const { d } = extractItemData(results[0]);
        return {
          companyName: String(d.companyName || "Rocks Studio"),
          phone: String(d.phone || ""),
          email: String(d.email || ""),
          address: String(d.address || ""),
          whatsapp: String(d.whatsapp || ""),
          instagram: String(d.instagramUrl || ""),
          facebook: typeof d.facebookUrl === "string" ? d.facebookUrl : undefined,
          locations,
        };
      }
    } catch (error) {
      console.error("WixCMSProvider.getSiteSettings error:", error);
    }

    return {
      companyName: "Rocks Studio",
      phone: "",
      email: "",
      address: "",
      whatsapp: "",
      instagram: "",
      facebook: undefined,
      locations: [],
    };
  }

  // ---------------------------------------------------------------------------
  // About Content
  // ---------------------------------------------------------------------------

  async getAboutContent(): Promise<AboutContent> {
    try {
      const { items: results } = await this.client.items
        .query(COLLECTIONS.aboutContent)
        .limit(1)
        .find();

      if (results.length > 0) {
        const d = results[0].data || results[0];
        return {
          intro: stripHtml(d.introDescription),
          foundation: {
            title: d.manufacturingTitle || "",
            description: stripHtml(d.manufacturingDescription),
            image: typeof d.manufacturingImage === "string" ? d.manufacturingImage : d.manufacturingImage?.src || "",
          },
          sourcing: stripHtml(d.sourcingDescription),
          quality: stripHtml(d.qualityDescription),
          capabilities: stripHtml(d.capabilitiesDescription),
        };
      }
    } catch (error) {
      console.error("WixCMSProvider.getAboutContent error:", error);
    }

    return {
      intro: "",
      foundation: {
        title: "",
        description: "",
        image: "",
      },
      sourcing: "",
      quality: "",
      capabilities: "",
    };
  }

  async getAboutPreview(): Promise<AboutPreviewContent> {
    try {
      const { items: results } = await this.client.items
        .query(COLLECTIONS.homeContent)
        .limit(1)
        .find();

      if (results.length > 0) {
        const d = results[0].data || results[0];
        return {
          sectionNumber: "01",
          label: "ABOUT ROCKS STUDIO",
          headline: d.aboutTitle || "Natural stone, chosen with intention.",
          body: stripHtml(d.aboutDescription),
          image: typeof d.aboutImage === "string" ? d.aboutImage : d.aboutImage?.src || "/images/about/about-preview.jpg",
          cta: {
            label: d.aboutLinkText || "Know More",
            href: "/about",
          },
        };
      }
    } catch (error) {
      console.error("WixCMSProvider.getAboutPreview error:", error);
    }

    return {
      sectionNumber: "",
      label: "",
      headline: "",
      body: "",
      image: "",
      cta: {
        label: "",
        href: "",
      },
    };
  }

  // ---------------------------------------------------------------------------
  // Hero Content
  // ---------------------------------------------------------------------------

  async getHeroContent(): Promise<HeroContent> {
    try {
      const { items: results } = await this.client.items
        .query(COLLECTIONS.homeContent)
        .limit(1)
        .find();

      if (results.length > 0) {
        const d = results[0].data || results[0];
        return {
          headline: d.heroTitle || "The right stone changes everything.",
          description: d.heroDescription || "Curated materials selected to bring depth, character, and permanence to every space.",
          backgroundImage: typeof d.heroImage === "string" ? d.heroImage : d.heroImage?.src || "/images/projects/Hero_3.png",
          primaryCta: {
            label: "Explore Materials",
            href: "/products",
          },
          secondaryCta: {
            label: "Get a Quote",
            href: "/contact",
          },
          bottomLeftText: "AHMEDABAD · INDIA",
          bottomRightText: "SCROLL TO EXPLORE",
          bottomCta: {
            title: d.ctaTitle || "",
            description: d.ctaDescription || "",
            image: typeof d.ctaImage === "string" ? d.ctaImage : d.ctaImage?.src || "",
            buttonText: d.ctaButtonText || "",
          },
        };
      }
    } catch (error) {
      console.error("WixCMSProvider.getHeroContent error:", error);
    }

    return {
      headline: "",
      description: "",
      backgroundImage: "",
      primaryCta: {
        label: "",
        href: "",
      },
      secondaryCta: {
        label: "",
        href: "",
      },
      bottomCta: {
        title: "",
        description: "",
        image: "",
        buttonText: "",
      },
    };
  }

  // ---------------------------------------------------------------------------
  // Applications
  // ---------------------------------------------------------------------------

  async getApplications(): Promise<ApplicationTile[]> {
    return [...mockApplications];
  }

  // ---------------------------------------------------------------------------
  // Why Studio
  // ---------------------------------------------------------------------------

  async getWhyStudioContent(): Promise<WhyStudioContent> {
    return { ...mockWhyStudioData };
  }

  // ---------------------------------------------------------------------------
  // Process
  // ---------------------------------------------------------------------------

  async getProcessContent(): Promise<ProcessContent> {
    return { ...mockProcessContent };
  }
}


