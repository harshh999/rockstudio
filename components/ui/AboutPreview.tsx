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
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headingLinesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const kpisRef = useRef<HTMLDivElement>(null);
  const kpiItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const eyebrow = content?.eyebrow || "ABOUT ROCKS STUDIO";
  const headline = content?.headline || "Natural stone, chosen with intention.";
  const body =
    content?.body ||
    "Rocks Studio is an Ahmedabad-based natural stone company sourcing and supplying marble, granite and other natural materials for architecture and interiors.";
  const linkHref = content?.cta?.href || "/about";
  const imageSrc = content?.image || "/images/about/about-preview.jpg";

  // Split headline into lines preserving existing line breaks and typography
  const headingLines = headline.includes("\n")
    ? headline.split("\n")
    : headline.includes(", ")
    ? [headline.slice(0, headline.indexOf(",") + 1), headline.slice(headline.indexOf(",") + 1).trim()]
    : [headline];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const section = sectionRef.current;
    if (!section) return;

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    const isMobile = window.innerWidth < 640;
    const moveEyebrow = isMobile ? 16 : 20;
    const moveHeading = isMobile ? 20 : 28;
    const moveBody = isMobile ? 16 : 22;
    const moveLink = isMobile ? 10 : 12;
    const moveKpi = isMobile ? 16 : 20;

    const eyebrowEl = eyebrowRef.current;
    const headingEls = headingLinesRef.current.filter(Boolean);
    const bodyEl = bodyRef.current;
    const linkEl = linkRef.current;
    const kpiEls = kpiItemsRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      // Set initial hidden states before section reveal triggers
      if (eyebrowEl) gsap.set(eyebrowEl, { opacity: 0, y: moveEyebrow });
      if (headingEls.length) gsap.set(headingEls, { opacity: 0, y: moveHeading });
      if (bodyEl) gsap.set(bodyEl, { opacity: 0, y: moveBody });
      if (linkEl) gsap.set(linkEl, { opacity: 0, x: -moveLink });
      if (kpiEls.length) gsap.set(kpiEls, { opacity: 0, y: moveKpi });
    }, sectionRef);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ensure animation triggers only once when entering viewport at 0.3 threshold
            observer.unobserve(entry.target);

            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

            // Step 1: Eyebrow label (delay 0, duration 650ms, 20px upward reveal)
            if (eyebrowEl) {
              tl.to(
                eyebrowEl,
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.65,
                },
                0
              );
            }

            // Step 2: Main heading lines (delay 100ms, duration 750ms, 28px upward, stagger 120ms)
            if (headingEls.length) {
              tl.to(
                headingEls,
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.75,
                  stagger: 0.12,
                },
                0.10
              );
            }

            // Step 3: Description paragraph (delay 450ms, duration 700ms, 22px upward reveal)
            if (bodyEl) {
              tl.to(
                bodyEl,
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.70,
                },
                0.45
              );
            }

            // Step 4: Know More link (delay 600ms, duration 650ms, 12px left to right reveal)
            if (linkEl) {
              tl.to(
                linkEl,
                {
                  opacity: 1,
                  x: 0,
                  duration: 0.65,
                },
                0.60
              );
            }

            // Step 5: Statistics row cards reveal (delay 700ms, duration 650ms, stagger 120ms)
            if (kpiEls.length) {
              tl.to(
                kpiEls,
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.65,
                  stagger: 0.12,
                },
                0.70
              );
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 lg:py-28 overflow-hidden"
    >
      {/* Background Subtle Stone-Inspired SVG Linework Layer */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0 overflow-hidden">
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
            <div>
              {/* Step 1: Eyebrow label */}
              <span
                ref={eyebrowRef}
                className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#1B1B19] block mb-3 transform-gpu"
              >
                {eyebrow}
              </span>

              {/* Step 2: Main heading with line-by-line reveal */}
              <h2 className="font-serif text-[38px] sm:text-[48px] lg:text-[54px] xl:text-[60px] font-normal leading-[0.98] tracking-[-0.04em] text-[#1B1B19] max-w-[420px]">
                {headingLines.map((line, idx) => (
                  <span key={idx} className="block overflow-hidden py-0.5 -my-0.5">
                    <span
                      ref={(el) => {
                        headingLinesRef.current[idx] = el;
                      }}
                      className="block transform-gpu"
                    >
                      {line}
                    </span>
                  </span>
                ))}
              </h2>

              {/* Step 3: Description paragraph */}
              <p
                ref={bodyRef}
                className="mt-5 text-[15px] sm:text-[16px] font-normal leading-[1.55] text-[#68635C] max-w-[400px] transform-gpu"
              >
                {body}
              </p>

              {/* Step 4: Know More link */}
              <div ref={linkRef} className="mt-7 sm:mt-8 transform-gpu">
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

            {/* Supporting Metrics: static 8+ and other cards reveal together */}
            <div
              ref={kpisRef}
              className="mt-10 lg:mt-14 pt-9 border-t border-black/12 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-start w-full max-w-[540px]"
            >
              {KPIS.map((kpi, idx) => (
                <div
                  key={kpi.label}
                  ref={(el) => {
                    kpiItemsRef.current[idx] = el;
                  }}
                  className="kpi-item text-left flex flex-col justify-start transform-gpu"
                >
                  <div
                    className={`font-sans font-normal text-[#1B1B19] mb-3 sm:mb-3.5 sm:min-h-[70px] lg:min-h-[80px] ${
                      kpi.value === "8+"
                        ? "tracking-[-0.03em] text-[52px] sm:text-[58px] lg:text-[64px] leading-[0.9]"
                        : "tracking-tight text-[24px] sm:text-[26px] lg:text-[28px] leading-[1.1]"
                    }`}
                  >
                    {kpi.value}
                  </div>

                  <div className="flex flex-col justify-start">
                    <div className="text-[11px] sm:text-[12px] font-medium tracking-[0.16em] text-[#1B1B19] uppercase sm:min-h-[36px] lg:min-h-[40px]">
                      {kpi.label}
                    </div>
                    <div className="mt-1.5 sm:mt-2 text-[15px] sm:text-[16px] lg:text-[17px] text-[#68635C] font-normal leading-[1.45] max-w-[190px]">
                      {kpi.supporting}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Zone (Cols 6-12 / Dominant Visual Anchor - Preserved untouched) */}
          <div className="hidden lg:flex lg:col-span-7 w-full justify-end">
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
