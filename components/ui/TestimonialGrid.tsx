"use client";

import { useEffect, useRef } from "react";
import type { Testimonial } from "@/types";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { gsap } from "gsap";

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

export default function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // Duplicate testimonials array for a true seamless infinite loop
  const marqueeItems = [...testimonials, ...testimonials];

  useEffect(() => {
    if (!trackRef.current || testimonials.length === 0) return;

    const ctx = gsap.context(() => {
      // Animate xPercent from 0 to -50% for seamless looping
      tweenRef.current = gsap.to(trackRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 35,
        ease: "none",
      });
    }, trackRef);

    return () => ctx.revert();
  }, [testimonials]);

  const handleMouseEnter = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, {
        timeScale: 0.35,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, {
        timeScale: 1,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  };

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div
      className="relative w-full overflow-hidden select-none py-3"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 140px, black calc(100% - 140px), transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 140px, black calc(100% - 140px), transparent 100%)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Edge gradient overlays for fallback & extra smoothness */}
      <div className="absolute left-0 top-0 bottom-0 w-[140px] max-md:w-[60px] bg-gradient-to-r from-[#FAFAF8] via-[#FAFAF8]/90 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-[140px] max-md:w-[60px] bg-gradient-to-l from-[#FAFAF8] via-[#FAFAF8]/90 to-transparent pointer-events-none z-10" />

      {/* GSAP Continuous Infinite Marquee Track */}
      <div ref={trackRef} className="flex gap-[24px] w-max">
        {marqueeItems.map((t, idx) => (
          <TestimonialCard
            key={`${t.id}-marquee-${idx}`}
            testimonial={t}
            className="w-[320px] sm:w-[360px] min-h-[230px] flex-none"
          />
        ))}
      </div>
    </div>
  );
}
