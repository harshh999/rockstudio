"use client";

import { useState, useEffect, useRef } from "react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export default function TestimonialCard({
  testimonial,
  className = "",
}: TestimonialCardProps) {
  const [hoverTransform, setHoverTransform] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const cardRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLQuoteElement>) => {
    if (prefersReducedMotion) return;
    if (e.pointerType === "touch") return; // Disabled on touch devices

    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    // Relative cursor position from card center (-0.5 to 0.5)
    const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (e.clientY - rect.top) / rect.height - 0.5;

    // Cursor 3D tilt (max 2deg)
    const rotateY = Math.max(-2, Math.min(2, xRatio * 4));
    const rotateX = Math.max(-2, Math.min(2, -yRatio * 4));

    setHoverTransform(
      `perspective(1000px) scale(1.015) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`
    );
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setHoverTransform(null);
  };

  return (
    <blockquote
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        borderRadius: "14px",
        background: "#FFFFFF",
        border: "1px solid rgba(20, 20, 20, 0.10)",
        transform: prefersReducedMotion || !isHovered ? "none" : (hoverTransform ?? "none"),
        boxShadow: isHovered
          ? "0 10px 30px rgba(0, 0, 0, 0.08)"
          : "0 2px 10px rgba(0, 0, 0, 0.025)",
        transition: isHovered
          ? "transform 220ms cubic-bezier(0, 0, 0.2, 1), box-shadow 220ms ease"
          : "transform 350ms cubic-bezier(0, 0, 0.2, 1), box-shadow 350ms ease",
        willChange: isHovered ? "transform" : "auto",
      }}
      className={`relative flex flex-col justify-between p-[26px_28px] text-left select-none overflow-hidden ${className}`}
    >
      {/* Quote */}
      <p className="text-[16px] leading-[1.5] text-[#292C33] font-normal max-w-[300px] m-0">
        {testimonial.quote}
      </p>

      {/* Author Info */}
      <div className="mt-auto pt-6">
        <p className="text-[15px] font-semibold text-[#25272B] leading-tight m-0">
          {testimonial.name}
        </p>
        <p className="text-[13px] font-normal text-[#747780] mt-[4px] leading-snug m-0">
          {testimonial.role}
        </p>
      </div>
    </blockquote>
  );
}
