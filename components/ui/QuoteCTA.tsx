"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

interface QuoteCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "dark" | "light";
  bgImage?: string;
}

export default function QuoteCTA({
  title = "Ready to Start Your Project?",
  subtitle = "Get in touch with our team to discuss your requirements and receive a personalised quote.",
  buttonText = "Get a Quote",
  buttonHref = "/contact",
  variant = "light",
  bgImage = "/images/hero-architectural.jpg",
}: QuoteCTAProps) {
  const isDark = variant === "dark";
  const sectionRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (bgImageRef.current) {
        gsap.fromTo(
          bgImageRef.current,
          { scale: 1.03 },
          { scale: 1, duration: 1.2, ease: "power2.out" }
        );
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.15 }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full overflow-hidden flex items-center justify-center min-h-[460px] md:min-h-[500px] ${
        isDark ? "bg-stone-900 text-white" : "bg-[#FAFAF8] text-stone-900"
      }`}
    >
      {/* Layer 0: Luxury Architectural Natural Stone Interior Background */}
      {!isDark && (
        <div ref={bgImageRef} className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={bgImage}
            alt="Luxury natural stone architectural interior space"
            fill
            className="object-cover object-center opacity-100"
            sizes="100vw"
            quality={85}
            priority={false}
          />
        </div>
      )}

      {/* Layer 1: Subtle Warm Tint & Localized Radial Readability Gradient */}
      {!isDark && (
        <>
          <div className="absolute inset-0 bg-[#FAFAF8]/15 pointer-events-none z-1" />
          <div
            className="absolute inset-0 z-1 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(250,250,248,0.72) 0%, rgba(250,250,248,0.32) 45%, rgba(250,250,248,0) 75%)",
            }}
          />
        </>
      )}

      {/* Layer 2: CTA Content */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-[760px] px-6 py-[100px] text-center md:px-8"
      >
        <h2
          className={`font-serif text-[36px] md:text-[48px] font-normal leading-[1.05] tracking-[-0.035em] m-0 ${
            isDark ? "text-white" : "text-[#171717]"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mx-auto mt-[20px] max-w-[620px] font-sans text-[16px] md:text-[18px] leading-[1.5] font-normal ${
            isDark ? "text-stone-300" : "text-[#55534F]"
          }`}
        >
          {subtitle}
        </p>
        <Link
          href={buttonHref}
          className={`mt-[34px] inline-block px-[34px] py-[15px] rounded-none text-[15px] font-medium tracking-wide transition-all duration-200 shadow-xs ${
            isDark
              ? "border border-white bg-white text-stone-900 hover:bg-stone-200"
              : "bg-[#181818] text-white hover:bg-[#2B2B2B] hover:-translate-y-0.5"
          }`}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
