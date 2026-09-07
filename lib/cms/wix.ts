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
  Project,
  Testimonial,
  SiteSettings,
  AboutContent,
  AboutPreviewContent,
  HeroContent,
  LocationItem,
  ApplicationTile,
} from "@/types";
import { COLLECTIONS } from "./wix-field-map";
import { projects as mockProjects } from "@/data/projects";
import { applications as mockApplications } from "@/data/applications";
import { whyStudioData as mockWhyStudioData, type WhyStudioContent } from "@/data/why-studio";

// Helper to strip simple HTML tags if rich text is returned as HTML string
function stripHtml(html: string | undefined | null): string {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "").trim();
}

export class WixCMSProvider implements CMSProvider {
  private client: ReturnType<typeof createClient>;

  constructor() {
    const apiKey = process.env.WIX_API_KEY;
    const siteId = process.env.WIX_SITE_ID;

    if (!apiKey || !siteId) {
      // In runtime environments without keys, fallback safely or log warning
      console.warn(
        "WixCMSProvider: WIX_API_KEY or WIX_SITE_ID missing. Client operations may fail."
      );
    }

    this.client = createClient({
      auth: ApiKeyStrategy({
        apiKey: apiKey || "",
        siteId: siteId || "",
      }),
      modules: { items },
    });
  }

  // ---------------------------------------------------------------------------
  // Products
  // ---------------------------------------------------------------------------

  async getProducts(): Promise<Product[]> {
    try {
      const { items: results } = await this.client.items
        .queryDataItems({ dataCollectionId: COLLECTIONS.products })
        .eq("active", true)
        .ascending("sortOrder")
        .find();

      return results.map((item: any) => {
        const d = item.data || {};
        const catRef = d.category;
        const categorySlug =
          typeof catRef === "object" && catRef !== null
            ? catRef.slug || catRef._id || ""
            : typeof catRef === "string"
            ? catRef
            : "";

        return {
          id: item._id || "",
          name: d.name || "",
          slug: d.slug || "",
          category: categorySlug,
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
        .queryDataItems({ dataCollectionId: COLLECTIONS.products })
        .eq("slug", slug)
        .eq("active", true)
        .limit(1)
        .find();

      if (results.length === 0) return null;
      const item = results[0];
      const d = item.data || {};
      const catRef = d.category;
      const categorySlug =
        typeof catRef === "object" && catRef !== null
          ? catRef.slug || catRef._id || ""
          : typeof catRef === "string"
          ? catRef
          : "";

      return {
        id: item._id || "",
        name: d.name || "",
        slug: d.slug || "",
        category: categorySlug,
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

  // ---------------------------------------------------------------------------
  // Product Categories
  // ---------------------------------------------------------------------------

  async getProductCategories(): Promise<ProductCategory[]> {
    try {
      const { items: results } = await this.client.items
        .queryDataItems({ dataCollectionId: COLLECTIONS.categories })
        .eq("active", true)
        .ascending("sortOrder")
        .find();

      return results.map((item: any) => {
        const d = item.data || {};
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
        .queryDataItems({ dataCollectionId: COLLECTIONS.testimonials })
        .eq("active", true)
        .ascending("sortOrder")
        .find();

      return results.map((item: any) => {
        const d = item.data || {};
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
        .queryDataItems({ dataCollectionId: COLLECTIONS.siteSettings })
        .limit(1)
        .find();

      const { items: locResults } = await this.client.items
        .queryDataItems({ dataCollectionId: COLLECTIONS.locations })
        .eq("active", true)
        .ascending("sortOrder")
        .find();

      const locations: LocationItem[] = locResults.map((item: any) => {
        const d = item.data || {};
        return {
          name: d.name || "",
          address: d.address || "",
          phone: d.phone || "",
          email: d.email || undefined,
          contactPerson: d.contactPerson || undefined,
        };
      });

      if (results.length > 0) {
        const d = results[0].data || {};
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
      phone: "+91 93777 16669",
      email: "rocksstudio2017@gmail.com",
      address: "Nr. CNG Petrol Pump, Gota Cross Road, Gota, Ahmedabad",
      whatsapp: "+91 93777 16669",
      instagram: "https://instagram.com/rocksstudio",
      facebook: "https://facebook.com/rocksstudio",
      locations: [],
    };
  }

  // ---------------------------------------------------------------------------
  // About Content
  // ---------------------------------------------------------------------------

  async getAboutContent(): Promise<AboutContent> {
    try {
      const { items: results } = await this.client.items
        .queryDataItems({ dataCollectionId: COLLECTIONS.aboutContent })
        .limit(1)
        .find();

      if (results.length > 0) {
        const d = results[0].data || {};
        return {
          intro: stripHtml(d.introDescription),
          manufacturing: stripHtml(d.manufacturingDescription),
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
      manufacturing: "",
      sourcing: "",
      quality: "",
      capabilities: "",
    };
  }

  async getAboutPreview(): Promise<AboutPreviewContent> {
    try {
      const { items: results } = await this.client.items
        .queryDataItems({ dataCollectionId: COLLECTIONS.homeContent })
        .limit(1)
        .find();

      if (results.length > 0) {
        const d = results[0].data || {};
        return {
          sectionNumber: "01",
          label: "ABOUT ROCKS STUDIO",
          headline: d.aboutTitle || "Natural stone, chosen with intention.",
          body: stripHtml(d.aboutDescription),
          image: typeof d.aboutImage === "string" ? d.aboutImage : d.aboutImage?.src || "/images/about/about-preview.jpg",
          cta: {
            label: d.aboutLinkText || "Discover Rocks Studio",
            href: "/about",
          },
        };
      }
    } catch (error) {
      console.error("WixCMSProvider.getAboutPreview error:", error);
    }

    return {
      sectionNumber: "01",
      label: "ABOUT ROCKS STUDIO",
      headline: "Natural stone, chosen with intention.",
      body: "",
      image: "/images/about/about-preview.jpg",
      cta: {
        label: "Discover Rocks Studio",
        href: "/about",
      },
    };
  }

  // ---------------------------------------------------------------------------
  // Hero Content
  // ---------------------------------------------------------------------------

  async getHeroContent(): Promise<HeroContent> {
    try {
      const { items: results } = await this.client.items
        .queryDataItems({ dataCollectionId: COLLECTIONS.homeContent })
        .limit(1)
        .find();

      if (results.length > 0) {
        const d = results[0].data || {};
        return {
          headline: d.heroTitle || "Stone for spaces that endure.",
          description: d.heroDescription || "",
          backgroundImage: typeof d.heroImage === "string" ? d.heroImage : d.heroImage?.src || "/images/hero-calm.jpg",
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
        };
      }
    } catch (error) {
      console.error("WixCMSProvider.getHeroContent error:", error);
    }

    return {
      headline: "Stone for spaces that endure.",
      description: "",
      backgroundImage: "/images/hero-calm.jpg",
      primaryCta: {
        label: "Explore Materials",
        href: "/products",
      },
      secondaryCta: {
        label: "Get a Quote",
        href: "/contact",
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
}


