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

  // Map category items with custom asymmetric grid spans for desktop
  // Categories: Marble, Granite, CNC, Onyx, Sandstone, Wall Cladding, Kota, Kaddapa
  const categoryConfigs = [
    {
      // 0: Marble — Dominant feature tile (Col 1-4, Row 1-2)
      slug: "marble",
      gridClasses: "col-span-2 md:col-span-4 md:row-span-2 min-h-[300px] md:min-h-[640px]",
    },
    {
      // 1: Granite — (Col 5-7, Row 1)
      slug: "granite",
      gridClasses: "col-span-1 md:col-span-3 md:row-span-1 min-h-[190px] md:min-h-[310px]",
    },
    {
      // 2: CNC — (Col 8-10, Row 1)
      slug: "cnc",
      gridClasses: "col-span-1 md:col-span-3 md:row-span-1 min-h-[190px] md:min-h-[310px]",
    },
    {
      // 3: Onyx — (Col 11-12, Row 1)
      slug: "onyx",
      gridClasses: "col-span-1 md:col-span-2 md:row-span-1 min-h-[190px] md:min-h-[310px]",
    },
    {
      // 4: Sandstone — (Col 5-7, Row 2)
      slug: "sandstone",
      gridClasses: "col-span-1 md:col-span-3 md:row-span-1 min-h-[190px] md:min-h-[310px]",
    },
    {
      // 5: Wall Cladding — (Col 8-9, Row 2)
      slug: "wall-cladding",
      gridClasses: "col-span-1 md:col-span-2 md:row-span-1 min-h-[190px] md:min-h-[310px]",
    },
    {
      // 6: Kota — (Col 10-11, Row 2)
      slug: "kota",
      gridClasses: "col-span-1 md:col-span-2 md:row-span-1 min-h-[190px] md:min-h-[310px]",
    },
    {
      // 7: Kaddapa — (Col 12, Row 2 -> Col 12 is 1 col or Col 10-12)
      // Let's refine the row 2 distribution: 3 cols (Sandstone) + 2.5/3? In 12-col grid:
      // Row 1: Marble (4 cols) + Granite (3 cols) + CNC (3 cols) + Onyx (2 cols) = 12 cols.
      // Row 2: Marble (4 cols) + Sandstone (3 cols) + Wall Cladding (2 cols) + Kota (1.5?) -> let's make it cleanly sum to 8 cols for Row 2 remaining!
      // Row 2 remainder after 4 cols of Marble: 8 cols total.
      // 8 cols divided among 4 items:
      // Sandstone: 2 cols
      // Wall Cladding: 2 cols
      // Kota: 2 cols
      // Kaddapa: 2 cols
      // Sum: 2 + 2 + 2 + 2 = 8 cols! Exactly 12 cols total!
      slug: "kaddapa",
      gridClasses: "col-span-1 md:col-span-2 md:row-span-1 min-h-[190px] md:min-h-[310px]",
    },
  ];

  // Map each category to its layout classes
  const getLayoutClasses = (index: number) => {
    switch (index) {
      case 0:
        // Marble: dominant visual anchor spanning 4 columns and both rows
        return "col-span-2 md:col-span-4 md:row-span-2 min-h-[280px] sm:min-h-[360px] md:min-h-[640px]";
      case 1:
        // Granite: Row 1, 3 columns
        return "col-span-1 md:col-span-3 md:row-span-1 min-h-[200px] sm:min-h-[240px] md:min-h-[310px]";
      case 2:
        // CNC: Row 1, 3 columns
        return "col-span-1 md:col-span-3 md:row-span-1 min-h-[200px] sm:min-h-[240px] md:min-h-[310px]";
      case 3:
        // Onyx: Row 1, 2 columns
        return "col-span-1 md:col-span-2 md:row-span-1 min-h-[200px] sm:min-h-[240px] md:min-h-[310px]";
      case 4:
        // Sandstone: Row 2, 2 columns
        return "col-span-1 md:col-span-2 md:row-span-1 min-h-[200px] sm:min-h-[240px] md:min-h-[310px]";
      case 5:
        // Wall Cladding: Row 2, 2 columns
        return "col-span-1 md:col-span-2 md:row-span-1 min-h-[200px] sm:min-h-[240px] md:min-h-[310px]";
      case 6:
        // Kota: Row 2, 2 columns
        return "col-span-1 md:col-span-2 md:row-span-1 min-h-[200px] sm:min-h-[240px] md:min-h-[310px]";
      case 7:
        // Kaddapa: Row 2, 2 columns
        return "col-span-1 md:col-span-2 md:row-span-1 min-h-[200px] sm:min-h-[240px] md:min-h-[310px]";
      default:
        return "col-span-1 md:col-span-3 min-h-[200px]";
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FAF9F6] py-16 sm:py-20 lg:py-24 overflow-x-hidden"
    >
      {/* Contained Centered Heading Area */}
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
        <div ref={headerRef} className="mx-auto max-w-[680px] text-center mb-9 sm:mb-11 lg:mb-12">
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

      {/* Near Full-Bleed 100vw Breakout Gallery (20-28px desktop breathing room) */}
      <div className="w-full px-3 sm:px-5 md:px-6 lg:px-[26px]">
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-12 md:grid-rows-2 gap-2 sm:gap-2.5 lg:gap-[10px] rounded-[24px] md:rounded-[32px] overflow-hidden"
        >
          {categories.map((category, index) => {
            const isFeatured = index === 0; // Marble

            return (
              <Link
                key={category.id}
                href={`/products?category=${category.slug}`}
                className={`group relative block overflow-hidden rounded-[16px] md:rounded-[24px] bg-stone-200 ${getLayoutClasses(
                  index
                )}`}
              >
                {/* Full-bleed category image */}
                <Image
                  src={category.image}
                  alt={`${category.name} natural stone category`}
                  fill
                  priority={isFeatured}
                  sizes={
                    isFeatured
                      ? "(max-width: 768px) 100vw, 35vw"
                      : "(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  }
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Subtle bottom gradient overlay for readable typography */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/85" />

                {/* Bottom-left Category Label */}
                <div
                  className={`absolute bottom-0 left-0 right-0 transform transition-transform duration-500 group-hover:-translate-y-0.5 ${
                    isFeatured
                      ? "p-6 sm:p-8 lg:p-10"
                      : "p-4 sm:p-5 lg:p-6"
                  }`}
                >
                  <h3
                    className={`font-serif font-medium tracking-tight text-white leading-tight ${
                      isFeatured
                        ? "text-[26px] sm:text-[30px] lg:text-[36px]"
                        : "text-[20px] sm:text-[22px] lg:text-[24px]"
                    }`}
                  >
                    {category.name}
                  </h3>
                  <span className="mt-1.5 inline-flex items-center text-[11px] sm:text-[12px] font-medium tracking-widest text-stone-300 uppercase opacity-85 transition-opacity duration-300 group-hover:opacity-100">
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
