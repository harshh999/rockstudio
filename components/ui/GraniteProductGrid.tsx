"use client";

import { useState } from "react";
import type { Product, ProductSubcategory } from "@/types";
import ProductCard from "./ProductCard";

interface GraniteProductGridProps {
  products: Product[];
  subcategories: ProductSubcategory[];
  activeSubcategorySlug?: string;
  onSubcategoryChange?: (slug: string) => void;
}

export default function GraniteProductGrid({
  products,
  subcategories,
  activeSubcategorySlug: externalActiveSlug,
  onSubcategoryChange,
}: GraniteProductGridProps) {
  const [internalActiveSubcategory, setInternalActiveSubcategory] =
    useState<string>("all");

  const currentActiveSlug =
    externalActiveSlug !== undefined
      ? externalActiveSlug
      : internalActiveSubcategory;

  const handleSubcategoryClick = (slug: string) => {
    if (onSubcategoryChange) {
      onSubcategoryChange(slug);
    } else {
      setInternalActiveSubcategory(slug);
    }
  };

  // Filter products based on selected granite subcategory
  const filteredProducts =
    currentActiveSlug === "all"
      ? products
      : products.filter((product) => product.subcategory === currentActiveSlug);

  return (
    <div className="w-full">
      {/* Grid Container matching standard ProductGrid layout */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center text-stone-500">
          No products found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
