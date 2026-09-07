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
  },
  {
    value: "INDIA + GLOBAL",
    label: "SOURCING NETWORK",
    supporting: "Established quarry partners",
  },
  {
    value: "END-TO-END",
    label: "STONE EXPERTISE",
    supporting: "Sourcing to final dispatch",
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
      className="relative bg-[#F5F3EF] py-[100px] lg:py-[130px] overflow-hidden"
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
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-[40px]">
        {/* Main 2-Column Grid (42% / 58%) */}
        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] items-center gap-12 lg:gap-[64px]">
          {/* Left Column: Text Block */}
          <div ref={textRef} className="max-w-[480px] self-center">
            {/* Primary Display Headline */}
            <h2 className="font-serif text-[38px] sm:text-[46px] lg:text-[clamp(42px,3.8vw,58px)] font-normal leading-[1.04] tracking-[-0.04em] text-[#1B1B19]">
              {headline}
            </h2>

            {/* Paragraph Description */}
            <p className="mt-[26px] text-[15px] font-normal leading-[1.7] text-[#68635C] max-w-[420px]">
              {body}
            </p>

            {/* CTA Link */}
            <div className="mt-[32px]">
              <Link
                href={linkHref}
                className="inline-flex items-center text-[14px] font-medium tracking-wide text-[#1B1B19] border-b border-[#1B1B19] pb-[5px] transition-opacity duration-200 hover:opacity-60"
              >
                {linkLabel}
              </Link>
            </div>
          </div>

          {/* Right Column: Dominant Architectural Image (Tall 4:5 Crop) */}
          <div ref={imageRef} className="w-full flex justify-start lg:justify-end">
            <div className="relative w-full max-w-[560px] aspect-[4/5] rounded-[14px] overflow-hidden bg-stone-200/60 shadow-sm border border-stone-300/30">
              <Image
                src={imageSrc}
                alt="Refined natural stone architectural detail"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>

        {/* Integrated KPI / Information Strip */}
        <div
          ref={kpisRef}
          className="mt-16 lg:mt-20 pt-10 border-t border-stone-300/60 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {KPIS.map((kpi, idx) => (
            <div
              key={kpi.label}
              className={`kpi-item ${
                idx === 2 ? "col-span-2 md:col-span-1" : "col-span-1"
              }`}
            >
              <div className="font-sans text-[20px] sm:text-[24px] lg:text-[26px] font-light tracking-tight text-[#1B1B19] uppercase">
                {kpi.value}
              </div>
              <div className="mt-1 text-[11px] font-semibold tracking-[0.14em] text-[#1B1B19] uppercase">
                {kpi.label}
              </div>
              <div className="mt-1 text-[13px] text-[#68635C] font-normal">
                {kpi.supporting}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

