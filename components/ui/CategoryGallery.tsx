"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ProductCategory } from "@/types";

interface CategoryGalleryProps {
  categories?: ProductCategory[];
}

// Explicit 8-category ordering:
// 1. Marble, 2. Granite, 3. CNC, 4. Wall Cladding, 5. Onyx, 6. Sandstone, 7. Kota, 8. Kaddapa
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
  sandstone: "Sand Stone",
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
    containerClass: "col-span-2 row-span-2 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2",
    titleSizeClass: "text-[22px] sm:text-[26px] lg:text-[28px]",
    priority: true,
  },
  granite: {
    containerClass: "col-span-1 row-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2",
    titleSizeClass: "text-[18px] sm:text-[22px] lg:text-[24px]",
    priority: true,
  },
  cnc: {
    containerClass: "col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    titleSizeClass: "text-[15px] sm:text-[18px] lg:text-[20px]",
  },
  "wall-cladding": {
    containerClass: "col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    titleSizeClass: "text-[15px] sm:text-[18px] lg:text-[20px]",
  },
  onyx: {
    containerClass: "col-span-2 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    titleSizeClass: "text-[15px] sm:text-[18px] lg:text-[20px]",
  },
  sandstone: {
    containerClass: "col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    titleSizeClass: "text-[15px] sm:text-[18px] lg:text-[20px]",
  },
  kota: {
    containerClass: "col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    titleSizeClass: "text-[15px] sm:text-[18px] lg:text-[20px]",
  },
  kaddapa: {
    containerClass: "col-span-2 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
    titleSizeClass: "text-[15px] sm:text-[18px] lg:text-[20px]",
  },
};

const normalizeKey = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, "");

export default function CategoryGallery({ categories = [] }: CategoryGalleryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const lightSweepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const headerEl = headerRef.current;
      const cardElements = gridRef.current
        ? (Array.from(gridRef.current.querySelectorAll(".category-card")) as HTMLElement[])
        : [];
      const lightSweepEl = lightSweepRef.current;

      const galleryEase = "cubic-bezier(0.22, 1, 0.36, 1)";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // 1. Heading subtle reveal
      if (headerEl) {
        tl.fromTo(
          headerEl,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: galleryEase,
          },
          0
        );
      }

      // 2. Set initial state of cards
      gsap.set(cardElements, {
        opacity: 0.78,
        filter: "brightness(0.72) saturate(0.65)",
      });

      // 3. Subtle horizontal light sweep pass across gallery
      if (lightSweepEl) {
        gsap.set(lightSweepEl, { xPercent: -100, opacity: 0.12 });

        tl.to(
          lightSweepEl,
          {
            xPercent: 350,
            duration: 1.8,
            ease: galleryEase,
          },
          0
        );

        tl.to(
          lightSweepEl,
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          1.3
        );
      }

      // 4. Gallery Flow reveal progression
      tl.to(
        cardElements,
        {
          opacity: 1,
          filter: "brightness(1) saturate(1)",
          duration: 0.85,
          stagger: 0.12,
          ease: galleryEase,
        },
        0.05
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categoryMap = new Map<string, ProductCategory>();
  if (categories) {
    categories.forEach((c) => {
      if (c.slug) categoryMap.set(normalizeKey(c.slug), c);
      if (c.name) categoryMap.set(normalizeKey(c.name), c);
    });
  }

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

      {/* Grid Container */}
      <div className="relative w-[94%] sm:w-[95%] max-w-[1536px] mx-auto px-1 sm:px-2 flex-1 flex flex-col justify-center overflow-hidden">
        {/* Subtle soft illumination light sweep overlay */}
        <div
          ref={lightSweepRef}
          className="pointer-events-none absolute inset-y-0 left-0 w-[40%] z-20 opacity-0 blur-3xl bg-gradient-to-r from-transparent via-white/12 to-transparent"
        />

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
                className={`category-card group relative block w-full h-full min-h-[130px] sm:min-h-[150px] lg:min-h-0 overflow-hidden rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] bg-stone-900 ${config.containerClass}`}
              >
                {/* Full-bleed category image wrapper */}
                <div className="category-image-wrap absolute inset-0 w-full h-full overflow-hidden">
                  <Image
                    src={category.image}
                    alt={`${category.name} natural stone category`}
                    fill
                    priority={config.priority}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="category-image object-cover object-center transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:group-hover:scale-[1.025]"
                  />
                </div>

                {/* Subtle dark gradient overlay at bottom for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/85" />

                {/* Bottom-Left Category Title & EXPLORE Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
                  <h3
                    className={`font-serif font-medium tracking-tight text-white leading-tight ${config.titleSizeClass}`}
                  >
                    {category.name}
                  </h3>
                  <span className="mt-1 sm:mt-1.5 inline-flex items-center text-[10px] sm:text-[11px] font-medium tracking-[0.08em] text-stone-300 uppercase opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                    <span>EXPLORE</span>
                    <span className="inline-block transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:group-hover:translate-x-[5px] ml-1">
                      &rarr;
                    </span>
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
