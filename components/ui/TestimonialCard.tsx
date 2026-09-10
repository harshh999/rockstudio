"use client";

import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

function getInitials(name: string): string {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export default function TestimonialCard({
  testimonial,
  className = "",
}: TestimonialCardProps) {
  // Strip quotes if raw string includes surrounding quotation marks
  const cleanQuote = testimonial.quote.replace(/^["'“]/, "").replace(/["'”]$/, "");
  const initials = getInitials(testimonial.name);

  return (
    <blockquote
      className={`relative flex flex-col justify-between p-[24px] sm:p-[28px] text-left select-none overflow-hidden transition-all duration-300 bg-white ${className}`}
      style={{
        borderRadius: "16px",
        background: "#FFFFFF",
        border: "1px solid rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Main Quote */}
      <p
        className="text-[16px] sm:text-[17px] font-normal leading-[1.55] tracking-normal text-[#171717] m-0 line-clamp-5 sm:line-clamp-6"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        "{cleanQuote}"
      </p>

      {/* Author Identity Area with Monogram */}
      <div className="mt-[24px] flex items-center gap-[12px] border-t border-black/[0.06] pt-[16px]">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-100 font-sans text-[11px] font-semibold text-stone-700 border border-stone-200/60 select-none">
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-sans text-[13px] font-medium leading-[1.3] tracking-normal text-[#171717] m-0">
            {testimonial.name}
          </p>
          <p className="truncate font-sans text-[11px] font-normal leading-[1.4] tracking-normal text-[#55534F] mt-[2px] m-0">
            {testimonial.role}
            {testimonial.company && `, ${testimonial.company}`}
          </p>
        </div>
      </div>
    </blockquote>
  );
}

