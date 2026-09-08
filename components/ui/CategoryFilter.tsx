"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { ProductCategory, ProductSubcategory } from "@/types";

interface CategoryFilterProps {
  categories: ProductCategory[];
  subcategories: ProductSubcategory[];
}

export default function CategoryFilter({
  categories,
  subcategories,
}: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "all";
  const activeSubcategory = searchParams.get("subcategory") ?? "all";

  function handleCategoryChange(categorySlug: string) {
    if (categorySlug === "all") {
      router.push("/products", { scroll: false });
    } else {
      router.push(`/products?category=${categorySlug}`, { scroll: false });
    }
  }

  function handleSubcategoryChange(subcategorySlug: string) {
    if (subcategorySlug === "all") {
      if (activeCategory === "all") {
        router.push("/products", { scroll: false });
      } else {
        router.push(`/products?category=${activeCategory}`, { scroll: false });
      }
    } else {
      router.push(
        `/products?category=${activeCategory}&subcategory=${subcategorySlug}`,
        { scroll: false }
      );
    }
  }

  return (
    <div className="space-y-6">
      {/* Primary Category Level */}
      <div className="flex flex-wrap items-center gap-2 border-b border-stone-200/80 pb-4">
        <button
          onClick={() => handleCategoryChange("all")}
          className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
            activeCategory === "all"
              ? "bg-stone-900 text-white shadow-sm"
              : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
          }`}
        >
          All Categories
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.slug)}
            className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
              activeCategory === cat.slug
                ? "bg-stone-900 text-white shadow-sm"
                : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Subcategory Level (Visible when a category is selected or when subcategories exist) */}
      {subcategories.length > 0 && activeCategory !== "all" && (
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="mr-2 text-xs font-medium uppercase tracking-widest text-stone-400">
            Subcategory:
          </span>
          <button
            onClick={() => handleSubcategoryChange("all")}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide transition-all ${
              activeSubcategory === "all"
                ? "border-stone-800 bg-stone-100 font-semibold text-stone-900"
                : "border-stone-200/80 text-stone-500 hover:border-stone-400 hover:text-stone-800"
            }`}
          >
            All {categories.find((c) => c.slug === activeCategory)?.name || ""}
          </button>
          {subcategories.map((sub) => (
            <button
              key={sub.id}
              onClick={() => handleSubcategoryChange(sub.slug)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide transition-all ${
                activeSubcategory === sub.slug
                  ? "border-stone-800 bg-stone-100 font-semibold text-stone-900"
                  : "border-stone-200/80 text-stone-500 hover:border-stone-400 hover:text-stone-800"
              }`}
            >
              {sub.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
