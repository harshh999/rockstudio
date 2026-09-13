"use client";

import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  pageSize: number;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  pageSize,
  className = "",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  // Generate page numbers array with ellipses
  const getPageNumbers = (): (number | string)[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];

    if (currentPage <= 4) {
      for (let i = 1; i <= 5; i++) pages.push(i);
      pages.push("...");
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(1);
      pages.push("...");
      for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      pages.push("...");
      pages.push(currentPage - 1);
      pages.push(currentPage);
      pages.push(currentPage + 1);
      pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav
      aria-label="Catalogue pagination"
      className={`mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-200/80 pt-6 sm:pt-8 ${className}`}
    >
      {/* Item Range Summary */}
      <div className="text-xs font-medium text-stone-500 tracking-wide">
        Showing <span className="font-semibold text-stone-900">{startItem}–{endItem}</span> of{" "}
        <span className="font-semibold text-stone-900">{totalItems}</span> materials
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Go to previous page"
          className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-medium text-stone-700 transition-all hover:border-stone-400 hover:bg-stone-100 hover:text-stone-900 disabled:opacity-40 disabled:pointer-events-none disabled:hover:bg-transparent disabled:hover:border-stone-200 cursor-pointer disabled:cursor-not-allowed"
        >
          <span aria-hidden="true">&larr;</span>
          <span>Previous</span>
        </button>

        {/* Desktop Numbered Page Buttons */}
        <div className="hidden sm:flex items-center gap-1">
          {pageNumbers.map((page, idx) => {
            if (typeof page === "string") {
              return (
                <span
                  key={`ellipsis-${idx}`}
                  className="w-8 h-8 flex items-center justify-center text-xs text-stone-400 select-none"
                >
                  &hellip;
                </span>
              );
            }

            const isCurrent = page === currentPage;
            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                aria-current={isCurrent ? "page" : undefined}
                aria-label={`Page ${page}`}
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${
                  isCurrent
                    ? "bg-stone-900 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>

        {/* Mobile Compact Page Indicator */}
        <div className="flex sm:hidden items-center px-2 text-xs font-semibold text-stone-700">
          <span>
            {currentPage} / {totalPages}
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Go to next page"
          className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-medium text-stone-700 transition-all hover:border-stone-400 hover:bg-stone-100 hover:text-stone-900 disabled:opacity-40 disabled:pointer-events-none disabled:hover:bg-transparent disabled:hover:border-stone-200 cursor-pointer disabled:cursor-not-allowed"
        >
          <span>Next</span>
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </nav>
  );
}
