"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import type { ProductCategory } from "@/types";

interface CategoryGalleryProps {
  categories: ProductCategory[];
}

export default function CategoryGallery({ categories }: CategoryGalleryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
        );
      }

      if (gridRef.current) {
        const tiles = gridRef.current.children;
        gsap.fromTo(
          tiles,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "power2.out",
            delay: 0.1,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Filter & order for the exact 6 requested categories:
  // Row 1: Marble, Granite, Onyx
  // Row 2: CNC, Wall Cladding, Sand Stone
  const categoryMap = new Map(categories.map((c) => [c.slug, c]));
  const orderedSlugs = [
    "marble",
    "granite",
    "onyx",
    "cnc",
    "wall-cladding",
    "sandstone",
  ];

  const orderedCategories = orderedSlugs
    .map((slug) => categoryMap.get(slug))
    .filter((c): c is ProductCategory => c !== undefined);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FAF9F6] py-16 sm:py-20 lg:py-24 overflow-x-hidden"
    >
      {/* Contained Centered Heading Area */}
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
        <div ref={headerRef} className="mx-auto max-w-[680px] text-center mb-10 sm:mb-14 lg:mb-16">
          <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#1B1B19]">
            OUR MATERIALS
          </span>
          <h2 className="mt-2.5 font-serif text-[34px] sm:text-[42px] lg:text-[48px] font-normal leading-[1.05] tracking-[-0.035em] text-[#1B1B19]">
            Natural Stone Categories
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] font-normal leading-[1.6] text-[#68635C]">
            Explore our curated range of premium natural stone, sourced from established quarries.
          </p>
        </div>
      </div>

      {/* Edge-to-Edge Connected Architectural Gallery (3 Columns x 2 Rows Desktop, 2 Columns Mobile) */}
      <div className="w-full">
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 bg-stone-300 gap-px border-y border-stone-300"
        >
          {orderedCategories.map((category) => {
            const isMarble = category.slug === "marble";
            const isGranite = category.slug === "granite";

            return (
              <Link
                key={category.id}
                href={`/products?category=${category.slug}`}
                className="group relative block w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px] overflow-hidden bg-stone-900"
              >
                {/* Full-bleed category image */}
                <Image
                  src={category.image}
                  alt={`${category.name} natural stone category`}
                  fill
                  priority={isMarble || isGranite}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Subtle dark gradient overlay at bottom for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/85" />

                {/* Bottom-Left Category Title & EXPLORE Label */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-9 transform transition-transform duration-500 group-hover:-translate-y-0.5">
                  <h3
                    className={`font-serif font-medium tracking-tight text-white leading-tight ${
                      isMarble
                        ? "text-[28px] sm:text-[34px] lg:text-[40px]"
                        : isGranite
                        ? "text-[24px] sm:text-[28px] lg:text-[34px]"
                        : "text-[20px] sm:text-[24px] lg:text-[28px]"
                    }`}
                  >
                    {category.name}
                  </h3>
                  <span className="mt-2 inline-flex items-center text-[11px] sm:text-[12px] font-medium tracking-widest text-stone-300 uppercase opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                    EXPLORE &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

