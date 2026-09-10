"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { HeroContent } from "@/types";

interface HeroProps {
  content: HeroContent;
}

const HERO_IMAGES = [
  "/Hero_1.png",
  "/Hero_2.png",
  "/Hero_3.png",
];

export default function Hero({ content }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        return;
      }
    }

    // 9-second interval between image transitions
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[720px] overflow-hidden bg-white rounded-b-[40px] lg:rounded-b-[60px]">
      {/* Layer 0: 3-Image Layered Background Slideshow with 2s Crossfade */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={src}
              alt={content.headline.replace("\n", " ")}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center scale-[1.01]"
            />
          </div>
        ))}
      </div>

      {/* Layer 1: Static Black Scrim Overlay for Natural Stone Vibrancy & Legibility */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-black/[0.20] via-black/[0.11] to-black/[0.05] pointer-events-none"
        aria-hidden="true"
      />

      {/* Layer 2: Left-Aligned Editorial Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col justify-center px-6 sm:px-10 lg:px-16 pt-[72px] pb-16 pl-[clamp(48px,8vw,120px)] pr-12">
        <div className="max-w-[720px]">
          {/* Headline */}
          <h1 className="font-serif text-[44px] sm:text-[60px] md:text-[72px] lg:text-[clamp(58px,6vw,88px)] font-normal leading-[0.96] tracking-[-0.045em] text-[#1B1B19]">
            {content.headline.includes("\n") ? (
              content.headline.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))
            ) : (
              content.headline
            )}
          </h1>

          {/* Description */}
          <p className="mt-[26px] max-w-[430px] text-[15px] sm:text-[16px] font-normal leading-[1.6] text-[#625E57]">
            {content.description}
          </p>

          {/* CTAs */}
          <div className="mt-[30px] flex flex-wrap items-center gap-3 sm:gap-3.5">
            <Link
              href={content.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-[#1B1B19] px-[25px] py-[15px] text-[14px] font-medium text-white transition-all duration-200 hover:bg-black hover:scale-[1.01] shadow-xs"
            >
              {content.primaryCta.label}
            </Link>

            {content.secondaryCta && (
              <Link
                href={content.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-[rgba(27,27,25,0.28)] bg-transparent px-[24px] py-[14px] text-[14px] font-medium text-[#1B1B19] transition-all duration-200 hover:bg-stone-900/5 hover:border-[#1B1B19]"
              >
                {content.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Peripheral Details */}
      <div className="absolute bottom-8 left-[clamp(48px,8vw,120px)] z-10 hidden sm:block pointer-events-none select-none">
        <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.16em] text-[rgba(27,27,25,0.55)]">
          {content.bottomLeftText || "AHMEDABAD · INDIA"}
        </span>
      </div>

      <div className="absolute bottom-8 right-[clamp(48px,8vw,120px)] z-10 hidden sm:block pointer-events-none select-none">
        <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.16em] text-[rgba(27,27,25,0.55)]">
          {content.bottomRightText || content.bottomIndicator || "SCROLL TO EXPLORE"}
        </span>
      </div>

      {/* Mobile-Only Bottom Metadata */}
      <div className="absolute bottom-6 left-6 z-10 sm:hidden pointer-events-none select-none">
        <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[rgba(27,27,25,0.55)]">
          {content.bottomLeftText || "AHMEDABAD · INDIA"}
        </span>
      </div>
    </section>
  );
}


