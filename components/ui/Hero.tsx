"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import type { HeroContent } from "@/types";

interface HeroProps {
  content: HeroContent;
}

const HERO_IMAGES = [
  "/HeroPage/h1.png",
  "/HeroPage/h2.png",
  "/HeroPage/h3.png",
];

export default function Hero({ content }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        return;
      }
    }

    // GSAP Hero Entrance Animation
    let ctx = gsap.context(() => {
      const headline = heroRef.current?.querySelector("h1");
      const description = heroRef.current?.querySelector("p");
      const ctas = heroRef.current?.querySelector(".hero-ctas");

      if (headline) {
        gsap.fromTo(
          headline,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 1.0, delay: 0.1, ease: "power2.out" }
        );
      }
      if (description) {
        gsap.fromTo(
          description,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
        );
      }
      if (ctas) {
        gsap.fromTo(
          ctas,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.28, ease: "power2.out" }
        );
      }
    }, heroRef);

    // 9-second interval between image transitions
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 9000);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative h-[100svh] min-h-[720px] overflow-hidden bg-white rounded-b-[40px] lg:rounded-b-[60px]">
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

      {/* Layer 1: Uniform Black Overlay for Text Readability */}
      <div
        className="absolute inset-0 z-[1] bg-black/[0.22] pointer-events-none"
        aria-hidden="true"
      />

      {/* Layer 1.5: Left-to-Right Localized Gradient Overlay for Text Contrast */}
      <div
        className="absolute inset-y-0 left-0 w-[65%] z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.30) 32%, rgba(0,0,0,0.10) 58%, rgba(0,0,0,0) 78%)"
        }}
        aria-hidden="true"
      />

      {/* Layer 2: Left-Aligned Editorial Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col justify-center px-6 sm:px-10 pt-[72px] pb-[10vh] lg:pl-[10vw] lg:pr-12">
        <div className="max-w-[760px]">
          {/* Headline */}
          <h1 
            className="max-w-[760px] font-serif text-[44px] sm:text-[60px] md:text-[72px] lg:text-[clamp(58px,6vw,88px)] font-medium leading-[0.95] tracking-[-0.045em] text-white"
            style={{ textShadow: "0 2px 14px rgba(0,0,0,0.22)" }}
          >
            Stone, selected for the way you live.
          </h1>

          {/* Description */}
          <p 
            className="mt-[24px] max-w-[500px] text-[15px] sm:text-[16px] font-medium leading-[1.55]"
            style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 8px rgba(0,0,0,0.28)" }}
          >
            Thoughtfully sourced natural stone for architecture, interiors and spaces with character.
          </p>

          {/* CTAs */}
          <div className="hero-ctas mt-[28px] flex flex-wrap items-center gap-3 sm:gap-3.5">
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


