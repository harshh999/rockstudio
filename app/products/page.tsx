import type { Metadata } from "next";
import { Suspense } from "react";
import { getProducts, getProductCategories, getProductsByCategory } from "@/lib/data";
import ProductGrid from "@/components/ui/ProductGrid";
import CategoryFilter from "@/components/ui/CategoryFilter";
import QuoteCTA from "@/components/ui/QuoteCTA";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our complete range of premium marble, granite, quartzite, and sandstone products. Natural stone for every architectural application.",
};

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category } = await searchParams;
  const categories = await getProductCategories();

  const products =
    category && category !== "all"
      ? await getProductsByCategory(category)
      : await getProducts();

  const activeCategory = categories.find((c) => c.slug === category);

  return (
    <>
      {/* Page Header */}
      <section className="bg-stone-900 px-6 pt-36 pb-20 lg:px-8 lg:pt-44 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-warm-beige">
            Our Collection
          </span>
          <h1 className="mt-4 font-serif text-4xl font-light tracking-tight text-white md:text-5xl">
            {activeCategory ? activeCategory.name : "All Products"}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-400">
            {activeCategory
              ? activeCategory.description
              : "Explore our complete range of premium natural stone, available in various finishes and dimensions."}
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <Suspense fallback={null}>
          <CategoryFilter categories={categories} />
        </Suspense>

        <div className="mt-12">
          <ProductGrid products={products} />
        </div>
      </section>

      {/* CTA */}
      <QuoteCTA
        title="Can't Find What You're Looking For?"
        subtitle="Our range extends beyond what's shown here. Contact us with your specific requirements."
      />
    </>
  );
}
