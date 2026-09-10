"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import type { ApplicationTile } from "@/types";

interface ApplicationsProps {
  tiles: ApplicationTile[];
}

const FALLBACK_IMAGES: Record<string, string> = {
  kitchens: "/HeroPage/Kitchens.jpg",
  bathrooms: "/HeroPage/Bathrooms.jpg",
  "living-spaces": "/HeroPage/LivingSpaces.jpg",
  "feature-walls": "/HeroPage/FeatureWalls.jpg",
  facades: "/HeroPage/Facades.jpg",
  "commercial-spaces": "/HeroPage/CommercialSpaces.jpg",
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
            <Link
              key={tile.slug}
              href={`/products?application=${tile.slug}`}
              className="group relative block w-full aspect-[1.55/1] rounded-[18px] sm:rounded-[20px] lg:rounded-[22px] overflow-hidden bg-stone-200/60"
            >
              {/* Editorial Index Number */}
              <span className="absolute top-4 left-4 sm:top-5 sm:left-5 lg:top-6 lg:left-6 z-10 font-sans text-[11px] sm:text-[12px] font-medium tracking-[0.12em] uppercase text-white/80 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Background Photography */}
              <Image
                src={FALLBACK_IMAGES[tile.slug] || tile.image}
                alt={`${tile.title} natural stone application`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* Subtle Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6 z-10 text-left">
                <h3 className="font-serif text-[20px] sm:text-[23px] lg:text-[25px] font-normal leading-tight text-white">
                  {tile.title}
                </h3>
                <span className="mt-1 inline-flex items-center font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.08em] uppercase text-white/80">
                  EXPLORE &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

