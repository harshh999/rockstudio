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
      {/* Rating (if any) */}
      {testimonial.rating && (
        <div className="flex items-center gap-[2px] mb-[12px]">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" className="text-[#F59E0B]">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      )}

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
          <div className="truncate font-sans text-[11px] font-normal leading-[1.4] tracking-normal text-[#55534F] mt-[2px] m-0 flex items-center gap-[4px]">
            {testimonial.source === "Google Review" ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="12px" height="12px">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c10.039,0,18.339-7.382,19.782-17H43.611z" />
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                </svg>
                <span>Google Review</span>
              </>
            ) : (
              <>
                <span>{testimonial.role}</span>
                {testimonial.company && <span>, {testimonial.company}</span>}
              </>
            )}
          </div>
        </div>
      </div>
    </blockquote>
  );
}

