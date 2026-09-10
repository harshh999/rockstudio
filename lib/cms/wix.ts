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

import { createClient, ApiKeyStrategy } from "@wix/sdk";
import { items } from "@wix/data";
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
function stripHtml(html: string | undefined | null): string {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "").trim();
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

      return results.map((item: any) => {
        const d = item.data || item;
        const catRef = d.category;
        const categorySlug =
          typeof catRef === "object" && catRef !== null
            ? catRef.slug || catRef._id || ""
            : typeof catRef === "string"
            ? catRef
            : "";

        const subRef = d.subcategory;
        const subcategorySlug =
          typeof subRef === "object" && subRef !== null
            ? subRef.slug || subRef._id || ""
            : typeof subRef === "string"
            ? subRef
            : "";

        return {
          id: item._id || "",
          name: d.name || "",
          slug: d.slug || "",
          category: categorySlug,
          subcategory: subcategorySlug,
          shortDescription: d.shortDescription || "",
          description: stripHtml(d.description),
          heroImage: typeof d.mainImage === "string" ? d.mainImage : d.mainImage?.src || "",
          gallery: Array.isArray(d.gallery)
            ? d.gallery.map((g: any) => (typeof g === "string" ? g : g.src || ""))
            : [],
          featured: Boolean(d.featured),
          sortOrder: d.sortOrder ?? 0,
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
      const item = results[0];
      const d = item.data || item;
      const catRef = d.category;
      const categorySlug =
        typeof catRef === "object" && catRef !== null
          ? catRef.slug || catRef._id || ""
          : typeof catRef === "string"
          ? catRef
          : "";

      const subRef = d.subcategory;
      const subcategorySlug =
        typeof subRef === "object" && subRef !== null
          ? subRef.slug || subRef._id || ""
          : typeof subRef === "string"
          ? subRef
          : "";

      return {
        id: item._id || "",
        name: d.name || "",
        slug: d.slug || "",
        category: categorySlug,
        subcategory: subcategorySlug,
        shortDescription: d.shortDescription || "",
        description: stripHtml(d.description),
        heroImage: typeof d.mainImage === "string" ? d.mainImage : d.mainImage?.src || "",
        gallery: Array.isArray(d.gallery)
          ? d.gallery.map((g: any) => (typeof g === "string" ? g : g.src || ""))
          : [],
        featured: Boolean(d.featured),
        sortOrder: d.sortOrder ?? 0,
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

      return results.map((item: any) => {
        const d = item.data || item;
        return {
          id: item._id || "",
          name: d.name || "",
          slug: d.slug || "",
          description: d.description || "",
          image: typeof d.image === "string" ? d.image : d.image?.src || "",
          sortOrder: d.sortOrder ?? 0,
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

      return results.map((item: any) => {
        const d = item.data || item;
        return {
          id: item._id || "",
          name: d.name || "",
          company: d.company || "",
          role: d.role || "",
          quote: stripHtml(d.quote),
          image: typeof d.image === "string" ? d.image : d.image?.src || "",
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

      let locResults: any[] = [];
      try {
        const { items } = await this.client.items
          .query(COLLECTIONS.locations)
          .eq("active", true)
          .ascending("sortOrder")
          .find();
        locResults = items;
      } catch (err) {
        // intentionally ignore missing locations collection
      }

      const locations: LocationItem[] = locResults.map((item: any) => {
        const d = item.data || item;
        return {
          name: d.name || "",
          address: d.address || "",
          phone: d.phone || "",
          email: d.email || undefined,
          contactPerson: d.contactPerson || undefined,
        };
      });

      if (results.length > 0) {
        const d = results[0].data || results[0];
        return {
          companyName: d.companyName || "Rocks Studio",
          phone: d.phone || "",
          email: d.email || "",
          address: d.address || "",
          whatsapp: d.whatsapp || "",
          instagram: d.instagramUrl || "",
          facebook: d.facebookUrl || undefined,
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
          headline: d.heroTitle || "Stone for spaces that endure.",
          description: d.heroDescription || "",
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


