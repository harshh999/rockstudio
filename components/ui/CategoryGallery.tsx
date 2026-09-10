"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import type { ProductCategory } from "@/types";

interface CategoryGalleryProps {
  categories: ProductCategory[];
}

// Explicit 8-category ordering:
// Row 1 & 2: Marble (2x2), Granite (1x2), CNC (1x1 top-right), Wall Cladding (1x1 mid-right)
// Row 3: Onyx (1x1 bottom-left), Sandstone (1x1 bottom-mid-left), Kota (1x1 bottom-mid-right), Kaddapa (1x1 bottom-right)
const ORDERED_SLUGS = [
  "marble",
  "granite",
  "cnc",
  "wall-cladding",
  "onyx",
  "sandstone",
  "kota",
  "kaddapa",
];

const FALLBACK_IMAGES: Record<string, string> = {
  marble: "/HeroPage/Marble_1.png",
  granite: "/HeroPage/Granite_1.png",
  cnc: "/images/categories/cnc.jpg",
  "wall-cladding": "/HeroPage/WallCladding_1.jpg",
  onyx: "/HeroPage/Onyx_1.jpg",
  sandstone: "/HeroPage/Sandstone_1.png",
  kota: "/images/categories/kota.jpg",
  kaddapa: "/images/categories/kaddapa.jpg",
};

const DISPLAY_NAMES: Record<string, string> = {
  marble: "Marble",
  granite: "Granite",
  cnc: "CNC",
  "wall-cladding": "Wall Cladding",
  onyx: "Onyx",
  sandstone: "Sandstone",
  kota: "Kota",
  kaddapa: "Kaddapa",
};

// Compact Grid span and typography configurations per category role
const LAYOUT_CONFIG: Record<
  string,
  {
    containerClass: string;
    titleSizeClass: string;
    priority?: boolean;
  }
> = {
  marble: {
    // Dominant 2x2 hero card (Rows 1-2, Cols 1-2)
    containerClass: "col-span-2 row-span-2 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2",
    titleSizeClass: "text-[22px] sm:text-[26px] lg:text-[28px]",
    priority: true,
  },
  granite: {
    // Tall 1x2 vertical card balancing Marble (Rows 1-2, Col 3)
    containerClass: "col-span-1 row-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2",
    titleSizeClass: "text-[18px] sm:text-[22px] lg:text-[24px]",
    priority: true,
  },
  cnc: {
    // 1x1 top-right card (Row 1, Col 4)
    containerClass: "col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    titleSizeClass: "text-[15px] sm:text-[18px] lg:text-[20px]",
  },
  "wall-cladding": {
    // 1x1 mid-right card (Row 2, Col 4)
    containerClass: "col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    titleSizeClass: "text-[15px] sm:text-[18px] lg:text-[20px]",
  },
  onyx: {
    // 1x1 bottom-left card on desktop, 2x1 on mobile (Row 3, Col 1)
    containerClass: "col-span-2 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    titleSizeClass: "text-[15px] sm:text-[18px] lg:text-[20px]",
  },
  sandstone: {
    // 1x1 bottom-center card (Row 3, Col 2)
    containerClass: "col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    titleSizeClass: "text-[15px] sm:text-[18px] lg:text-[20px]",
  },
  kota: {
    // 1x1 bottom-right card (Row 3, Col 3)
    containerClass: "col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    titleSizeClass: "text-[15px] sm:text-[18px] lg:text-[20px]",
  },
  kaddapa: {
    // 1x1 bottom anchor card on desktop, 2x1 on mobile (Row 3, Col 4)
    containerClass: "col-span-2 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    titleSizeClass: "text-[15px] sm:text-[18px] lg:text-[20px]",
  },
};

const normalizeKey = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, "");

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
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        );
      }

      if (gridRef.current) {
        const tiles = gridRef.current.children;
        gsap.fromTo(
          tiles,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.04,
            ease: "power2.out",
            delay: 0.08,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Normalize and map categories to explicit 8-category order
  const categoryMap = new Map<string, ProductCategory>();
  categories.forEach((c) => {
    if (c.slug) categoryMap.set(normalizeKey(c.slug), c);
    if (c.name) categoryMap.set(normalizeKey(c.name), c);
  });

  const orderedCategories = ORDERED_SLUGS.map((slug) => {
    const norm = normalizeKey(slug);
    const found = categoryMap.get(norm);
    if (found) {
      return {
        ...found,
        slug,
        image: FALLBACK_IMAGES[slug] || found.image || "/images/categories/marble.jpg",
      };
    }
    return {
      id: `cat-${slug}`,
      name: DISPLAY_NAMES[slug] || slug,
      slug: slug,
      description: "",
      image: FALLBACK_IMAGES[slug] || "/images/categories/marble.jpg",
      sortOrder: 0,
    };
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-6 sm:py-8 lg:py-10 overflow-x-hidden flex flex-col justify-center min-h-0 lg:h-[100vh] lg:max-h-[920px]"
    >
      {/* Compact Heading Area */}
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="mx-auto max-w-[640px] text-center mb-5 sm:mb-6 lg:mb-7">
          <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] uppercase text-[#1B1B19]">
            OUR MATERIALS
          </span>
          <h2 className="mt-1 font-serif text-[28px] sm:text-[34px] lg:text-[38px] font-normal leading-[1.05] tracking-[-0.035em] text-[#1B1B19]">
            Natural Stone Categories
          </h2>
          <p className="mt-1.5 text-[14px] sm:text-[15px] font-normal leading-[1.5] text-[#68635C]">
            Explore our curated range of premium natural stone, sourced from established quarries.
          </p>
        </div>
      </div>

      {/* Compact 1-Screen Asymmetric Masonry Grid Container (~94-96% Width) */}
      <div className="w-[94%] sm:w-[95%] max-w-[1536px] mx-auto px-1 sm:px-2 flex-1 flex flex-col justify-center">
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-2.5 lg:gap-3 auto-rows-[minmax(140px,auto)] md:auto-rows-[minmax(160px,auto)] lg:grid-rows-3 lg:h-[calc(100vh-220px)] lg:max-h-[640px] lg:min-h-[460px]"
        >
          {orderedCategories.map((category) => {
            const config = LAYOUT_CONFIG[category.slug] || {
              containerClass: "col-span-1 row-span-1",
              titleSizeClass: "text-[15px] sm:text-[18px] lg:text-[20px]",
            };

            return (
              <Link
                key={category.id || category.slug}
                href={`/products?category=${category.slug}`}
                className={`group relative block w-full h-full min-h-[130px] sm:min-h-[150px] lg:min-h-0 overflow-hidden rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] bg-stone-900 ${config.containerClass}`}
              >
                {/* Full-bleed category image */}
                <Image
                  src={category.image}
                  alt={`${category.name} natural stone category`}
                  fill
                  priority={config.priority}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />

                {/* Subtle dark gradient overlay at bottom for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/85" />

                {/* Bottom-Left Category Title & EXPLORE Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6 transform transition-transform duration-500 group-hover:-translate-y-0.5">
                  <h3
                    className={`font-serif font-medium tracking-tight text-white leading-tight ${config.titleSizeClass}`}
                  >
                    {category.name}
                  </h3>
                  <span className="mt-1 sm:mt-1.5 inline-flex items-center text-[10px] sm:text-[11px] font-medium tracking-[0.08em] text-stone-300 uppercase opacity-90 transition-opacity duration-300 group-hover:opacity-100">
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



