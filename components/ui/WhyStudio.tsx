"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const premRef = useRef<HTMLDivElement>(null);
  const archRef = useRef<HTMLDivElement>(null);
  const relRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!pinWrapperRef.current || !sectionRef.current) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {}, pinWrapperRef);

    const timer = setTimeout(() => {
      ctx.add(() => {
        const anchorEl = anchorRef.current;
        const premEl = premRef.current;
        const relEl = relRef.current;
        const archEl = archRef.current;

        if (!anchorEl || !premEl || !relEl || !archEl) return;

        const anchorRect = anchorEl.getBoundingClientRect();
        const premRect = premEl.getBoundingClientRect();
        const relRect = relEl.getBoundingClientRect();
        const archRect = archEl.getBoundingClientRect();

        // 1. Premium Materials starting offset: tucked completely behind Anchor's right side
        const premStartX = anchorRect.right - premRect.right;
        const premStartY = anchorRect.top - premRect.top;

        // 2. Reliable Supply starting offset: tucked completely behind Premium Materials
        const relStartX = premRect.left - relRect.left;
        const relStartY = premRect.top - relRect.top;

        // 3. Made for Architecture starting offset: tucked behind Reliable's right side
        const archStartX = relRect.right - archRect.right;
        const archStartY = relRect.top - archRect.top;

        // Set initial positions. All cards must be completely invisible initially.
        gsap.set(premEl, { x: premStartX, y: premStartY, opacity: 0 });
        gsap.set(relEl, { x: relStartX, y: relStartY, opacity: 0 });
        // Use clipPath for Architecture because it is wider than Reliable and its left side would peek out
        gsap.set(archEl, { 
          x: archStartX, 
          y: archStartY, 
          opacity: 0, 
          clipPath: "inset(0% 0% 0% 100% round 32px)" 
        });

        // Scroll-driven circuit timeline
        const tl = gsap.timeline();

        // Step 1: Premium Materials slides outward from behind Why Rocks Studio card to its upper-right slot
        tl.to(premEl, {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power2.out",
        });

        // Step 2: Reliable Supply emerges from behind Premium Materials and travels downward to its lower-right slot
        // Starts ONLY after Premium Materials is completely finished (no position parameter)
        tl.to(relEl, {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power2.out",
        });

        // Step 3: Made for Architecture emerges from behind Reliable Supply and travels leftward to its lower-left slot
        // Starts ONLY after Reliable Supply is completely finished
        tl.to(archEl, {
          x: 0,
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0% round 32px)",
          duration: 1.0,
          ease: "power2.out",
        });

        // Pin section and scrub timeline progressively over scroll distance
        ScrollTrigger.create({
          trigger: pinWrapperRef.current,
          start: "top top",
          end: "+=130%",
          pin: true,
          scrub: 0.6,
          animation: tl,
          invalidateOnRefresh: true,
        });
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  const { eyebrow, title, intro, tiles } = content;

  // Extract tiles for 4-card bento layout
  const tile1 = tiles[0]; // Premium Materials (Image Card)
  const tile2 = tiles[1]; // Made for Architecture (Wide Image Card)
  const tile3 = tiles[2]; // Reliable Supply (Image Card)

  return (
    <div>
      <div ref={pinWrapperRef} className="w-full bg-white relative">
        <section
          ref={sectionRef}
          className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10 py-16 lg:py-24 flex flex-col justify-center min-h-[100vh]"
        >
          {/* Compact 4-Tile Editorial Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 relative">
            {/* Tile 1 (Top-Left, Anchor): Large Intro Tile ("Why Rocks Studio") - z-40 */}
            <div
              ref={anchorRef}
              className="relative md:col-span-2 bg-stone-50/70 border border-stone-200/60 rounded-[32px] p-7 sm:p-8 lg:p-10 flex flex-col justify-between overflow-hidden min-h-[240px] sm:min-h-[260px] z-40"
            >
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

            {/* Tile 2 (Top-Right): Premium Materials - z-30 */}
            <div
              ref={premRef}
              className="group relative min-h-[240px] sm:min-h-[260px] rounded-[32px] overflow-hidden bg-stone-200 z-30"
            >
              <Image
                src={
                  tile1?.title === "Premium Materials"
                    ? "/HeroPage/PremiumMaterials.jpg"
                    : tile1?.image || "/images/products/statuario-white.jpg"
                }
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

            {/* Tile 3 (Bottom-Left): Made for Architecture - z-10 */}
            {tile2 && (
              <div
                ref={archRef}
                className="group relative md:col-span-2 min-h-[260px] sm:min-h-[280px] rounded-[32px] overflow-hidden bg-stone-200 z-10"
              >
                <Image
                  src={
                    tile2.title === "Made for Architecture"
                      ? "/HeroPage/MadeForArchitecture.png"
                      : tile2.image || "/images/projects/villa-flooring.jpg"
                  }
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

            {/* Tile 4 (Bottom-Right): Reliable Supply - z-20 */}
            <div
              ref={relRef}
              className="group relative min-h-[260px] sm:min-h-[280px] rounded-[32px] overflow-hidden bg-stone-200 z-20"
            >
              <Image
                src={
                  tile3?.title === "Reliable Supply"
                    ? "/HeroPage/ReliableSupply.png"
                    : tile3?.image || "/images/projects/corporate-office.jpg"
                }
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
      </div>
    </div>
  );
}

