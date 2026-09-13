"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import type { ApplicationTile } from "@/types";
import { InteractiveTravelCard } from "@/components/ui/3d-card";

interface ApplicationsProps {
  tiles: ApplicationTile[];
}

const FALLBACK_IMAGES: Record<string, string> = {
  kitchens: "/HeroPage/Kitchens.jpg",
  bathrooms: "/HeroPage/Bathrooms.jpg",
  "living-spaces": "/HeroPage/LivingSpaces.jpg",
  "feature-walls": "/HeroPage/FeatureWalls.jpg",
  facades: "/HeroPage/Facades.jpg",
  "commercial-spaces": "/HeroPage/commercial.png",
};

export default function Applications({ tiles }: ApplicationsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      }

      if (gridRef.current) {
        const tileElements = gridRef.current.children;
        gsap.fromTo(
          tileElements,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.15,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-[90px] sm:py-[100px] lg:py-[110px]"
    >
      <div className="w-[95%] max-w-none mx-auto">
        {/* Wide Horizontal Editorial Header */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8 mb-[40px] sm:mb-[46px] lg:mb-[50px]"
        >
          {/* Left Title & Eyebrow */}
          <div className="max-w-[650px] text-left">
            <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] uppercase text-[#1B1B19] mb-2 sm:mb-3 block">
              APPLICATIONS
            </span>
            <h2 className="font-serif text-[36px] sm:text-[44px] lg:text-[52px] font-normal leading-[1.05] tracking-[-0.035em] text-[#1B1B19]">
              Stone, Made for Every Space.
            </h2>
          </div>

          {/* Right Descriptive Paragraph */}
          <div className="max-w-[420px] lg:text-right lg:ml-auto">
            <p className="text-[14px] sm:text-[15px] font-sans font-normal leading-[1.65] text-[#68635C]">
              From refined interiors to architectural exteriors, natural stone brings depth, character and permanence to the spaces it shapes.
            </p>
          </div>
        </div>

        {/* Full-width Equal 3x2 Architectural Image Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[8px] sm:gap-[10px] lg:gap-[12px]"
        >
          {tiles.map((tile, index) => (
            <InteractiveTravelCard
              key={tile.slug}
              title={tile.title}
              image={FALLBACK_IMAGES[tile.slug] || tile.image}
              href={`/products?application=${tile.slug}`}
              index={index}
              actionText="EXPLORE →"
            />
          ))}
        </div>
      </div>
    </section>
  );
}


