"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import type { AboutPreviewContent } from "@/types";

interface AboutPreviewProps {
  content: AboutPreviewContent;
}

const KPIS = [
  {
    value: "8+",
    label: "STONE CATEGORIES",
    supporting: "Curated natural materials",
    isPrimaryNumeric: true,
  },
  {
    value: "INDIA + GLOBAL",
    label: "SOURCING NETWORK",
    supporting: "Established quarry partners",
    isPrimaryNumeric: false,
  },
  {
    value: "END-TO-END",
    label: "STONE EXPERTISE",
    supporting: "Sourcing to final dispatch",
    isPrimaryNumeric: false,
  },
];

function MarbleVeinSvg() {
  return (
    <svg
      width="420"
      height="380"
      viewBox="0 0 420 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none select-none"
    >
      <path
        d="M20 40C80 90 140 70 200 130C260 190 230 270 320 310C360 330 390 350 410 370"
        stroke="#B7AFA3"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M130 90C160 120 180 160 220 170C260 180 290 150 340 180C370 200 390 240 410 270"
        stroke="#B7AFA3"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M240 190C280 230 310 260 360 275"
        stroke="#B7AFA3"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StoneContourSvg() {
  return (
    <svg
      width="320"
      height="280"
      viewBox="0 0 320 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none select-none"
    >
      <path
        d="M10 240C60 220 110 235 160 200C210 165 250 175 310 130"
        stroke="#B7AFA3"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 270C80 250 140 260 190 225C240 190 270 200 310 165"
        stroke="#B7AFA3"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 210C90 190 130 205 180 170C220 140 260 150 300 110"
        stroke="#B7AFA3"
        strokeWidth="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutPreview({ content }: AboutPreviewProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const kpisRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      }

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.98, y: 16 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.1 }
        );
      }

      if (kpisRef.current) {
        const kpiItems = kpisRef.current.querySelectorAll(".kpi-item");
        gsap.fromTo(
          kpiItems,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out", delay: 0.25 }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const eyebrow = content?.eyebrow || "ABOUT ROCKS STUDIO";
  const headline = content?.headline || "Natural stone, chosen with intention.";
  const body =
    content?.body ||
    "Rocks Studio is an Ahmedabad-based natural stone company sourcing and supplying marble, granite and other natural materials for architecture and interiors.";
  const linkLabel = content?.cta?.label || "Know More";
  const linkHref = content?.cta?.href || "/about";
  const imageSrc = content?.image || "/images/about/about-preview.jpg";

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 lg:py-28 overflow-hidden"
    >
      {/* Background Subtle Stone-Inspired SVG Linework Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Right: Large Marble Vein */}
        <div className="absolute -top-6 -right-10 opacity-60 sm:opacity-80 lg:opacity-[0.08] transform -rotate-12">
          <MarbleVeinSvg />
        </div>

        {/* Bottom Left: Subtle Geological Contour */}
        <div className="absolute -bottom-10 -left-10 opacity-50 sm:opacity-70 lg:opacity-[0.06] transform rotate-6">
          <StoneContourSvg />
        </div>
      </div>

      {/* Comfortable Inset Container (92-94% width, max-w-[1480px]) */}
      <div className="relative z-10 w-[92%] sm:w-[93%] max-w-[1480px] mx-auto">
        {/* 12-Column Grid: Left Content & Metrics (Cols 1-5) + Right Image Anchor (Cols 6-12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Content Zone (Cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <div ref={textRef}>
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#1B1B19] block mb-3">
                {eyebrow}
              </span>

              <h2 className="font-serif text-[38px] sm:text-[48px] lg:text-[54px] xl:text-[60px] font-normal leading-[0.98] tracking-[-0.04em] text-[#1B1B19] max-w-[420px]">
                {headline}
              </h2>

              <p className="mt-5 text-[15px] sm:text-[16px] font-normal leading-[1.55] text-[#68635C] max-w-[400px]">
                {body}
              </p>

              <div className="mt-7 sm:mt-8">
                <Link
                  href={linkHref}
                  className="inline-flex items-center text-[14px] font-medium tracking-wide text-[#1B1B19] border-b border-[#1B1B19] pb-1 transition-opacity duration-200 hover:opacity-60"
                >
                  Know More &rarr;
                </Link>
              </div>
            </div>

            {/* Mobile-Only Architectural Image */}
            <div className="block lg:hidden my-8">
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] max-h-[460px] rounded-[20px] overflow-hidden bg-stone-200/60 border border-stone-300/30">
                <Image
                  src={imageSrc}
                  alt="Refined natural stone architectural detail"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Supporting Metrics (3 Horizontal Editorial Columns Underneath Left Text Block) */}
            <div
              ref={kpisRef}
              className="mt-10 lg:mt-14 pt-9 border-t border-black/12 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-start w-full max-w-[540px]"
            >
              {/* Metric 1: 8+ STONE CATEGORIES */}
              <div className="kpi-item text-left flex flex-col justify-start">
                <div className="font-sans font-normal tracking-[-0.03em] text-[#1B1B19] text-[52px] sm:text-[58px] lg:text-[64px] leading-[0.9] mb-3 sm:mb-3.5">
                  8+
                </div>
                <div className="text-[11px] sm:text-[12px] font-medium tracking-[0.16em] text-[#1B1B19] uppercase">
                  STONE CATEGORIES
                </div>
                <div className="mt-1.5 sm:mt-2 text-[15px] sm:text-[16px] lg:text-[17px] text-[#68635C] font-normal leading-[1.45] max-w-[180px]">
                  Curated natural materials
                </div>
              </div>

              {/* Metric 2: INDIA + GLOBAL */}
              <div className="kpi-item text-left flex flex-col justify-start">
                <div className="font-sans font-normal tracking-tight text-[#1B1B19] text-[24px] sm:text-[26px] lg:text-[28px] leading-[1.1] mb-3 sm:mb-3.5">
                  INDIA + GLOBAL
                </div>
                <div className="text-[11px] sm:text-[12px] font-medium tracking-[0.16em] text-[#1B1B19] uppercase">
                  SOURCING NETWORK
                </div>
                <div className="mt-1.5 sm:mt-2 text-[15px] sm:text-[16px] lg:text-[17px] text-[#68635C] font-normal leading-[1.45] max-w-[190px]">
                  Established quarry partners
                </div>
              </div>

              {/* Metric 3: END-TO-END */}
              <div className="kpi-item text-left flex flex-col justify-start">
                <div className="font-sans font-normal tracking-tight text-[#1B1B19] text-[24px] sm:text-[26px] lg:text-[28px] leading-[1.1] mb-3 sm:mb-3.5">
                  END-TO-END
                </div>
                <div className="text-[11px] sm:text-[12px] font-medium tracking-[0.16em] text-[#1B1B19] uppercase">
                  STONE EXPERTISE
                </div>
                <div className="mt-1.5 sm:mt-2 text-[15px] sm:text-[16px] lg:text-[17px] text-[#68635C] font-normal leading-[1.45] max-w-[190px]">
                  Sourcing to final dispatch
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Zone (Cols 6-12 / Dominant Visual Anchor) */}
          <div ref={imageRef} className="hidden lg:flex lg:col-span-7 w-full justify-end">
            <div className="relative w-full h-[520px] lg:h-[560px] rounded-[20px] lg:rounded-[22px] overflow-hidden bg-stone-200/60 shadow-xs border border-stone-300/30">
              <Image
                src={imageSrc}
                alt="Refined natural stone architectural detail"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



