"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import type { WhyStudioContent } from "@/data/why-studio";

interface WhyStudioProps {
  content: WhyStudioContent;
}

function StoneVeinTextureSvg() {
  return (
    <svg
      width="380"
      height="300"
      viewBox="0 0 380 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none select-none absolute -right-6 -bottom-6 opacity-[0.025]"
    >
      <path
        d="M20 30C100 120 180 80 260 180C340 280 290 320 370 340"
        stroke="#1B1B19"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M130 50C190 110 220 190 300 200C360 210 370 270 380 290"
        stroke="#1B1B19"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function WhyStudio({ content }: WhyStudioProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const tiles = gridRef.current.children;
        gsap.fromTo(
          tiles,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const { eyebrow, title, intro, tiles } = content;

  // Extract tiles for 4-card bento layout
  const tile1 = tiles[0]; // Premium Materials (Image Card)
  const tile2 = tiles[1]; // Made for Architecture (Wide Image Card)
  const tile3 = tiles[2]; // Reliable Supply (Image Card)

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10 py-16 lg:py-24"
    >
      {/* Compact 4-Tile Editorial Bento Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5"
      >
        {/* Tile 1 (Top-Left): Large Intro Tile (Spans 2 cols on md/lg) */}
        <div className="relative md:col-span-2 bg-[#F5F3EF] rounded-[32px] p-7 sm:p-8 lg:p-10 flex flex-col justify-between overflow-hidden min-h-[240px] sm:min-h-[260px]">
          <StoneVeinTextureSvg />
          <div className="relative z-10">
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#1B1B19]">
              {eyebrow}
            </span>
            <h2 className="mt-3 font-serif text-[32px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.05] tracking-[-0.035em] text-[#1B1B19] max-w-[500px]">
              {title}
            </h2>
          </div>
          <p className="relative z-10 mt-6 text-[14px] sm:text-[15px] font-normal leading-[1.6] text-[#68635C] max-w-[480px]">
            {intro}
          </p>
        </div>

        {/* Tile 2 (Top-Right): Image-backed Card — Premium Materials */}
        <div className="group relative min-h-[240px] sm:min-h-[260px] rounded-[32px] overflow-hidden bg-stone-200">
          <Image
            src={tile1?.image || "/images/products/statuario-white.jpg"}
            alt={tile1?.title || "Premium Materials"}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/85" />
          <div className="absolute bottom-0 left-0 right-0 p-7 transform transition-transform duration-500 group-hover:-translate-y-1">
            <h3 className="font-serif text-[22px] lg:text-[24px] font-normal tracking-tight text-white">
              {tile1?.title}
            </h3>
            <p className="mt-2 text-[13px] leading-[1.5] text-stone-300">
              {tile1?.description}
            </p>
          </div>
        </div>

        {/* Tile 3 (Bottom-Left): Wide Image Tile — Made for Architecture (Spans 2 cols on md/lg) */}
        {tile2 && (
          <div className="group relative md:col-span-2 min-h-[260px] sm:min-h-[280px] rounded-[32px] overflow-hidden bg-stone-200">
            <Image
              src={tile2.image || "/images/projects/villa-flooring.jpg"}
              alt={tile2.title}
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80" />
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-8 transform transition-transform duration-500 group-hover:-translate-y-1">
              <h3 className="font-serif text-[22px] sm:text-[26px] font-normal tracking-tight text-white">
                {tile2.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-[1.5] text-stone-300 max-w-[440px]">
                {tile2.description}
              </p>
            </div>
          </div>
        )}

        {/* Tile 4 (Bottom-Right): Image-backed Card — Reliable Supply */}
        <div className="group relative min-h-[260px] sm:min-h-[280px] rounded-[32px] overflow-hidden bg-stone-200">
          <Image
            src={tile3?.image || "/images/projects/corporate-office.jpg"}
            alt={tile3?.title || "Reliable Supply"}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/85" />
          <div className="absolute bottom-0 left-0 right-0 p-7 transform transition-transform duration-500 group-hover:-translate-y-1">
            <h3 className="font-serif text-[22px] lg:text-[24px] font-normal tracking-tight text-white">
              {tile3?.title}
            </h3>
            <p className="mt-2 text-[13px] leading-[1.5] text-stone-300">
              {tile3?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
