import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import {
  getProducts,
  getProductCategories,
  getProductSubcategories,
  getProductSubcategoriesByCategory,
  getProductsByCategory,
  getProductsBySubcategory,
  getProductSubcategoryBySlug,
} from "@/lib/data";
import ProductGrid from "@/components/ui/ProductGrid";
import GraniteProductGrid from "@/components/ui/GraniteProductGrid";
import CategoryFilter from "@/components/ui/CategoryFilter";
import QuoteCTA from "@/components/ui/QuoteCTA";

export const metadata: Metadata = {
  title: "Natural Stone, Marble & Granite Collection | Rocks Studio",
  description:
    "Explore Rocks Studio's natural stone collection in Ahmedabad. Sourcing premium marble, granite, CNC textures, onyx, sandstone, wall cladding, Kota, and Kaddapa slabs for architecture.",
  keywords: [
    "natural stone collection",
    "marble supplier Ahmedabad",
    "granite supplier Ahmedabad",
    "natural stone supplier",
    "stone slabs",
    "marble and granite",
    "CNC stone cladding",
    "onyx slabs",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Natural Stone, Marble & Granite Collection | Rocks Studio",
    description:
      "Explore Rocks Studio's natural stone collection in Ahmedabad. Sourcing premium marble, granite, CNC textures, onyx, sandstone, wall cladding, Kota, and Kaddapa slabs.",
    url: "https://rocks-studio.com/products",
    siteName: "Rocks Studio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Natural Stone, Marble & Granite Collection | Rocks Studio",
    description:
      "Explore Rocks Studio's natural stone collection in Ahmedabad. Premium marble, granite, CNC textures, onyx, sandstone, and wall cladding.",
  },
};

interface ProductsPageProps {
  searchParams: Promise<{ category?: string; subcategory?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category: rawCategory, subcategory } = await searchParams;
  const categories = await getProductCategories();

  // Find matching category by slug or name (case-insensitive)
  const activeCategory = rawCategory && rawCategory !== "all"
    ? categories.find(
        (c) =>
          c.slug.toLowerCase() === rawCategory.trim().toLowerCase() ||
          c.name.toLowerCase() === rawCategory.trim().toLowerCase()
      )
    : null;

  const category = activeCategory ? activeCategory.slug : (rawCategory && rawCategory !== "all" ? rawCategory : "all");

  const subcategories =
    category && category !== "all"
      ? await getProductSubcategoriesByCategory(category)
      : await getProductSubcategories();

  let products = [];
  if (subcategory && subcategory !== "all") {
    products = await getProductsBySubcategory(subcategory);
  } else if (category && category !== "all") {
    products = await getProductsByCategory(category);
  } else {
    products = await getProducts();
  }

  const activeSubcategory = subcategory
    ? await getProductSubcategoryBySlug(subcategory)
    : null;

  const headerTitle = activeSubcategory
    ? activeSubcategory.name
    : activeCategory
    ? activeCategory.name
    : "Material Catalogue";

  const headerDescription = activeSubcategory
    ? activeSubcategory.description
    : activeCategory
    ? activeCategory.description
    : "Explore our curated material library of premium marble, granite, CNC textures, onyx, sandstone, and natural stone wall claddings.";

  return (
    <>
      {/* Page Header */}
      <section className="relative flex flex-col justify-end min-h-[380px] lg:min-h-[460px] bg-stone-900 px-6 pt-32 pb-16 lg:px-8 lg:pt-40 lg:pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-stone-900">
          <Image
            src="/images/products-hero.jpg"
            alt="Rocks Studio Products Catalogue"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Cinematic Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-10" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-warm-beige">
            Material Library
          </span>
          <h1 className="mt-4 font-serif text-4xl font-light tracking-tight text-white md:text-5xl">
            {headerTitle}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-400">
            {headerDescription}
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section id="catalogue" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Suspense fallback={null}>
          <CategoryFilter categories={categories} subcategories={subcategories} />
        </Suspense>

        <div className="mt-10">
          {category === "granite" ? (
            <GraniteProductGrid
              products={products}
              subcategories={subcategories}
              activeSubcategorySlug={subcategory ?? "all"}
            />
          ) : (
            <ProductGrid products={products} />
          )}
        </div>
      </section>

      {/* CTA */}
      <QuoteCTA />
    </>
  );
}
