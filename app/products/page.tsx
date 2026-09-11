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
  title: "Catalogue | Rocks Studio",
  description:
    "Explore Rocks Studio's natural stone material catalogue categorized by Granite, CNC, Marble, Onyx, Sandstone, and Wall Cladding.",
};

interface ProductsPageProps {
  searchParams: Promise<{ category?: string; subcategory?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category, subcategory } = await searchParams;
  const categories = await getProductCategories();

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

  const activeCategory = categories.find((c) => c.slug === category);
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
