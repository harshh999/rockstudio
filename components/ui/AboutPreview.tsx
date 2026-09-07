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
  const linkLabel = content?.cta?.label || "Discover Rocks Studio";
  const linkHref = content?.cta?.href || "/about";
  const imageSrc = content?.image || "/images/about/about-preview.jpg";

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F5F3EF] py-20 lg:py-24 overflow-hidden"
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

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12">
        {/* Unified 2-Column Composition (42% / 58%) */}
        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] items-stretch gap-8 lg:gap-14">
          {/* Left Column: Integrated Editorial & Proof Point Area */}
          <div ref={textRef} className="flex flex-col justify-between max-w-[540px]">
            {/* Editorial Story Header */}
            <div>
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#1B1B19] block mb-3">
                {eyebrow}
              </span>

              <h2 className="font-serif text-[38px] sm:text-[48px] lg:text-[60px] font-normal leading-[0.98] tracking-[-0.04em] text-[#1B1B19] max-w-[600px]">
                {headline}
              </h2>

              <p className="mt-5 text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#68635C] max-w-[520px]">
                {body}
              </p>

              <div className="mt-6">
                <Link
                  href={linkHref}
                  className="inline-flex items-center text-[14px] font-medium tracking-wide text-[#1B1B19] border-b border-[#1B1B19] pb-1 transition-opacity duration-200 hover:opacity-60"
                >
                  {linkLabel} &rarr;
                </Link>
              </div>
            </div>

            {/* Mobile-Only Architectural Image (Renders between text & KPIs on mobile) */}
            <div className="block lg:hidden my-6">
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

            {/* Integrated KPI Proof Points Block */}
            <div
              ref={kpisRef}
              className="mt-6 lg:mt-8 pt-6 border-t border-stone-300/70 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            >
              {KPIS.map((kpi, idx) => (
                <div
                  key={kpi.label}
                  className={`kpi-item text-left ${
                    idx !== 0 ? "pt-3 sm:pt-0 border-t sm:border-t-0 border-stone-300/40" : ""
                  }`}
                >
                  <div
                    className={`font-sans font-normal tracking-tight text-[#1B1B19] ${
                      kpi.isPrimaryNumeric
                        ? "text-[28px] sm:text-[32px] lg:text-[34px] leading-none"
                        : "text-[18px] sm:text-[19px] lg:text-[20px] leading-[1.1] sm:whitespace-nowrap"
                    }`}
                  >
                    {kpi.value}
                  </div>
                  <div className="mt-2 text-[9px] sm:text-[10px] font-semibold tracking-[0.16em] text-[#1B1B19] uppercase">
                    {kpi.label}
                  </div>
                  <div className="mt-1 text-[12px] sm:text-[13px] text-[#68635C] font-normal leading-[1.4]">
                    {kpi.supporting}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dominant Architectural Visual Anchor (Desktop) */}
          <div ref={imageRef} className="hidden lg:flex w-full justify-end">
            <div className="relative w-full h-[520px] lg:h-[560px] rounded-[24px] overflow-hidden bg-stone-200/60 shadow-xs border border-stone-300/30">
              <Image
                src={imageSrc}
                alt="Refined natural stone architectural detail"
                fill
                priority
                sizes="650px"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

