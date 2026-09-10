"use client";

import { useState, useRef, useEffect, TouchEvent } from "react";
import type { Testimonial } from "@/types";
import TestimonialCard from "@/components/ui/TestimonialCard";

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

export default function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  if (!testimonials || testimonials.length === 0) return null;

  const N = testimonials.length;
  // Calculate repeat count to ensure at least 30 cards for a dense, seamless infinite track
  const repeatCount = Math.max(3, Math.ceil(30 / N));
  const clonedTestimonials = Array(repeatCount).fill(testimonials).flat();

  // Start in the middle set of testimonials so left/prev navigation works seamlessly on load
  const middleSetIndex = Math.floor(repeatCount / 2);
  const startIndex = middleSetIndex * N;

  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Sync start index if testimonials array length changes dynamically
  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [N, startIndex]);

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    // Calculate normalized index within the base set
    const relativeOffset = ((currentIndex - startIndex) % N + N) % N;
    const targetIndex = startIndex + relativeOffset;

    if (targetIndex !== currentIndex) {
      setIsTransitioning(false);
      setCurrentIndex(targetIndex);
    }
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

  // Calculate 1-based display index for indicator
  const displayIndex = (((currentIndex - startIndex) % N + N) % N) + 1;

  return (
    <div className="w-[95%] max-w-[1500px] mx-auto select-none">
      {/* Track Viewport Container */}
      <div
        className="w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex gap-[20px] items-stretch"
          style={{
            transform: `translateX(calc(-1 * ${currentIndex} * (clamp(290px, 22vw, 340px) + 20px)))`,
            transition: isTransitioning
              ? "transform 600ms cubic-bezier(0.25, 1, 0.5, 1)"
              : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {clonedTestimonials.map((t, idx) => (
            <div
              key={`${t.id || idx}-${idx}`}
              className="shrink-0 w-[clamp(290px,22vw,340px)] transition-all duration-300"
            >
              <TestimonialCard testimonial={t} className="h-[280px] sm:h-[290px]" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls & Progress Indicator */}
      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          onClick={handlePrev}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-[#171717] bg-white shadow-none transition-all hover:bg-[#171717] hover:text-white hover:border-[#171717] active:scale-95 cursor-pointer"
          aria-label="Previous review"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Minimal Progress Indicator */}
        <div className="relative w-[48px] sm:w-[64px] h-[1px] bg-black/10 rounded-full overflow-hidden shrink-0">
          <div 
            className="absolute top-0 left-0 h-full bg-[#171717] rounded-full transition-transform duration-500 ease-out"
            style={{ 
              width: `${100 / N}%`,
              transform: `translateX(${(displayIndex - 1) * 100}%)`
            }}
          />
        </div>

        <button
          onClick={handleNext}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-[#171717] bg-white shadow-none transition-all hover:bg-[#171717] hover:text-white hover:border-[#171717] active:scale-95 cursor-pointer"
          aria-label="Next review"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
