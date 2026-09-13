"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/ui/Hero";
import AboutPreview from "@/components/ui/AboutPreview";
import type { HeroContent, AboutPreviewContent } from "@/types";

interface HeroCurtainRevealProps {
  heroContent: HeroContent;
  aboutContent: AboutPreviewContent;
}

export default function HeroCurtainReveal({
  heroContent,
  aboutContent,
}: HeroCurtainRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const aboutWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    gsap.registerPlugin(ScrollTrigger);

    let isClamping = false;

    const ctx = gsap.context(() => {
      if (!containerRef.current || !heroWrapperRef.current) return;

      // GSAP ScrollTrigger scrub: maps scroll progress 1:1 over exactly 1 viewport height (100vh)
      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%", // Exactly 1 viewport height
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress; // 0.0 to 1.0

          // Translate the Hero layer vertically upward like a physical curtain (0% to -100%)
          gsap.set(heroWrapperRef.current, {
            yPercent: -progress * 100,
          });
        },
      });

      // Trackpad inertial scroll protection: absorbs excessive scroll delta so a trackpad swipe cannot skip past the About section
      const handleWheel = (e: WheelEvent) => {
        const vh = window.innerHeight;
        const currentScroll = window.scrollY;

        // If scroll originates in the hero curtain zone and user scrolls downward
        if (currentScroll < vh && e.deltaY > 0) {
          if (currentScroll + e.deltaY > vh + 15) {
            e.preventDefault();
            if (!isClamping) {
              isClamping = true;
              window.scrollTo({ top: vh, behavior: "smooth" });
              setTimeout(() => {
                isClamping = false;
              }, 350);
            }
          }
        }
      };

      window.addEventListener("wheel", handleWheel, { passive: false });

      return () => {
        window.removeEventListener("wheel", handleWheel);
        st.kill();
      };
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white"
    >
      {/* Hero Sticky Layer (z-20, sticky top-0, height 100vh, clips content) */}
      <div
        ref={heroWrapperRef}
        className="sticky top-0 z-20 w-full h-[100svh] min-h-[720px] bg-white overflow-hidden drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)] md:drop-shadow-[0_30px_50px_rgba(0,0,0,0.28)]"
      >
        <Hero content={heroContent} />
      </div>

      {/* About Section Layer (z-10, relative position, margin-top 0, directly underneath Hero curtain) */}
      <div
        ref={aboutWrapperRef}
        className="relative z-10 w-full bg-white"
      >
        <AboutPreview content={aboutContent} />
      </div>
    </div>
  );
}
