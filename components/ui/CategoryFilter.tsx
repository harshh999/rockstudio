"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { ProductCategory } from "@/types";

interface CategoryFilterProps {
  categories: ProductCategory[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "all";

  function handleFilter(slug: string) {
    if (slug === "all") {
      router.push("/products", { scroll: false });
    } else {
      router.push(`/products?category=${slug}`, { scroll: false });
    }
  }

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => handleFilter("all")}
        className={`border px-5 py-2 text-sm tracking-wide transition-colors ${
          activeCategory === "all"
            ? "border-stone-900 bg-stone-900 text-white"
            : "border-stone-300 text-stone-600 hover:border-stone-900 hover:text-stone-900"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => handleFilter(cat.slug)}
          className={`border px-5 py-2 text-sm tracking-wide transition-colors ${
            activeCategory === cat.slug
              ? "border-stone-900 bg-stone-900 text-white"
              : "border-stone-300 text-stone-600 hover:border-stone-900 hover:text-stone-900"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
