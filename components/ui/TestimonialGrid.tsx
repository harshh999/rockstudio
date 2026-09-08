"use client";

import { useState, useRef, TouchEvent } from "react";
import type { Testimonial } from "@/types";
import TestimonialCard from "@/components/ui/TestimonialCard";

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

export default function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  if (!testimonials || testimonials.length === 0) return null;

  const count = testimonials.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? count - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === count - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  return (
    <div className="relative w-full overflow-hidden py-4 select-none">
      {/* Track Container */}
      <div
        className="w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex gap-[20px] transition-transform duration-500 ease-out items-center"
          style={{
            transform: `translateX(calc(50% - (${activeIndex} * (clamp(280px, 80vw, 360px) + 20px)) - (clamp(280px, 80vw, 360px) / 2)))`,
          }}
        >
          {testimonials.map((t, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={t.id || idx}
                onClick={() => setActiveIndex(idx)}
                className={`shrink-0 w-[clamp(280px,80vw,360px)] transition-all duration-500 cursor-pointer ${
                  isActive
                    ? "opacity-100 scale-100 shadow-sm z-10"
                    : "opacity-40 scale-[0.93] hover:opacity-75 z-0"
                }`}
              >
                <TestimonialCard testimonial={t} className="h-full min-h-[300px]" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-700 bg-white/80 transition-all hover:border-stone-900 hover:bg-stone-900 hover:text-white"
          aria-label="Previous testimonial"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-1.5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "w-6 bg-stone-900"
                  : "w-1.5 bg-stone-300 hover:bg-stone-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-700 bg-white/80 transition-all hover:border-stone-900 hover:bg-stone-900 hover:text-white"
          aria-label="Next testimonial"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
