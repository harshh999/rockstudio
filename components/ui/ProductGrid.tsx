"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import type { Product } from "@/types";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

interface ProductGridProps {
  products: Product[];
  pageSize?: number;
}

export default function ProductGrid({
  products,
  pageSize = 20,
}: ProductGridProps) {
  const searchParams = useSearchParams();
  const gridRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef<boolean>(true);
  const isTransitioningRef = useRef<boolean>(false);

  const category = searchParams.get("category") || "all";
  const subcategory = searchParams.get("subcategory") || "all";
  const pageFromUrl = Number(searchParams.get("page")) || 1;

  // Single Source of Truth for active page state
  const [currentPage, setCurrentPage] = useState<number>(pageFromUrl);
  const [prevFilterKey, setPrevFilterKey] = useState<string>(
    `${category}:${subcategory}`
  );

  // Disable automatic browser scroll restoration to prevent scroll position conflict
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Reset to page 1 during render when category or subcategory filter changes
  const currentFilterKey = `${category}:${subcategory}`;
  if (currentFilterKey !== prevFilterKey) {
    setPrevFilterKey(currentFilterKey);
    setCurrentPage(1);
  }

  // Handle browser Back / Forward history navigation
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const page = Number(urlParams.get("page")) || 1;
      setCurrentPage(page);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const totalPages = Math.max(1, Math.ceil(products.length / pageSize));
  const safePage = Math.min(Math.max(1, currentPage), totalPages);

  // Deterministic Scroll-to-Top Lifecycle Effect:
  // Fires AFTER React commits the new page's product cards to the DOM.
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const scrollTarget = gridRef.current;
    if (!scrollTarget) return;

    const animFrame = requestAnimationFrame(() => {
      const win = window as unknown as {
        __lenis?: { scrollTo: (target: HTMLElement | number, opts?: { offset?: number }) => void };
      };
      if (win.__lenis) {
        win.__lenis.scrollTo(scrollTarget, { offset: -120 });
      } else {
        const elementPosition =
          scrollTarget.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 120; // Navbar offset
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      }
    });

    return () => cancelAnimationFrame(animFrame);
  }, [currentPage]);

  // Single Unified Page Change Handler
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === safePage) return;
    if (isTransitioningRef.current) return;

    isTransitioningRef.current = true;

    // 1. Immediately update state once (triggers DOM render of new 20 products)
    setCurrentPage(newPage);

    // 2. Quietly sync URL address bar for bookmarking/sharing without RSC server re-fetch
    const params = new URLSearchParams(window.location.search);
    if (newPage === 1) {
      params.delete("page");
    } else {
      params.set("page", String(newPage));
    }
    const queryString = params.toString();
    const newUrl = queryString
      ? `${window.location.pathname}?${queryString}`
      : window.location.pathname;

    window.history.pushState({ page: newPage }, "", newUrl);

    // Release rapid-click transition lock on next frame
    requestAnimationFrame(() => {
      isTransitioningRef.current = false;
    });
  };

  if (products.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="text-base font-light text-stone-500">
          No materials found matching the selected filter.
        </p>
      </div>
    );
  }

  // CRITICAL: Slice data before rendering cards into DOM
  const startIndex = (safePage - 1) * pageSize;
  const paginatedProducts = products.slice(startIndex, startIndex + pageSize);

  return (
    <div ref={gridRef} className="w-full">
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        currentPage={safePage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        totalItems={products.length}
        pageSize={pageSize}
      />
    </div>
  );
}
