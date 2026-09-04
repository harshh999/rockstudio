/**
 * Application-level domain types.
 *
 * These types represent the data contracts consumed by the UI.
 * They are intentionally independent of any CMS implementation
 * (Wix, Sanity, Contentful, etc.) and must never reference
 * CMS-specific field names, SDK types, or response objects.
 */

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  gallery: string[];
  featured: boolean;
  sortOrder: number;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  sortOrder: number;
}

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  location: string;
  description: string;
  image: string;
  gallery: string[];
  featured: boolean;
  sortOrder: number;
}

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  quote: string;
  image: string;
}

// ---------------------------------------------------------------------------
// Site-wide
// ---------------------------------------------------------------------------

export interface LocationItem {
  name: string;
  address: string;
  phone: string;
  email?: string;
  contactPerson?: string;
}

export interface SiteSettings {
  companyName: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  instagram: string;
  facebook?: string;
  website?: string;
  locations?: LocationItem[];
}

export interface AboutContent {
  intro: string;
  manufacturing: string;
  sourcing: string;
  quality: string;
  capabilities: string;
}

export interface AboutPreviewContent {
  sectionNumber?: string;
  label: string;
  headline: string;
  body: string;
  image: string;
  secondaryImage?: string;
  cta: {
    label: string;
    href: string;
  };
}

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------

export interface HeroContent {
  eyebrow?: string;
  headline: string;
  description: string;
  backgroundImage: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  featuredMaterial?: {
    label: string;
    materialName: string;
    description: string;
    image: string;
    href: string;
    action: string;
  };
  bottomLeftText?: string;
  bottomRightText?: string;
  bottomIndicator?: string;
}

// ---------------------------------------------------------------------------
// Navigation (used by Navbar / Footer)
// ---------------------------------------------------------------------------

export interface NavItem {
  label: string;
  route: string;
}

