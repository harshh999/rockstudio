"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

interface FoundationSectionProps {
  title?: string;
  description?: string;
}

export default function FoundationSection({
  title = "Curating Materials for Spaces That Endure",
  description = "Our processing facility is equipped with modern stone-processing machinery, enabling precision cutting, calibration, and finishing of natural stone slabs and tiles. We maintain rigorous quality control at every stage of production to ensure dimensional accuracy and surface consistency across every batch.",
}: FoundationSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const section = sectionRef.current;
    if (!section) return;

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const isMobile = window.innerWidth < 640;

    const labelEl = labelRef.current;
    const headingEl = headingRef.current;
    const descEl = descRef.current;
    const linkEls = linksRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      // Set initial hidden states before section reveal triggers
      if (labelEl) gsap.set(labelEl, { opacity: 0, y: isMobile ? 12 : 16 });
      if (headingEl) gsap.set(headingEl, { opacity: 0, y: isMobile ? 20 : 30 });
      if (descEl) gsap.set(descEl, { opacity: 0, y: isMobile ? 14 : 20 });

      if (linkEls.length) {
        gsap.set(linkEls, { opacity: 0, y: isMobile ? 12 : 16 });
      }
    }, sectionRef);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Run animation once on viewport entry
            observer.unobserve(entry.target);

            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

            // Step 1: THE FOUNDATION label (delay 0, duration 0.5s, fade_up translateY 16px -> 0)
            if (labelEl) {
              tl.to(
                labelEl,
                {
                  opacity: 1,
                  y: 0,
                  duration: isMobile ? 0.45 : 0.5,
                },
                0
              );
            }

            // Step 2: Main heading (delay 0.08s, duration 0.85s, text_reveal translateY 30px -> 0)
            if (headingEl) {
              tl.to(
                headingEl,
                {
                  opacity: 1,
                  y: 0,
                  duration: isMobile ? 0.7 : 0.85,
                  ease: "cubic-bezier(0.22, 1, 0.36, 1)",
                },
                0.08
              );
            }

            // Step 3: Description (delay 0.18s, duration 0.7s, fade_up translateY 20px -> 0)
            if (descEl) {
              tl.to(
                descEl,
                {
                  opacity: 1,
                  y: 0,
                  duration: isMobile ? 0.6 : 0.7,
                  ease: "cubic-bezier(0.22, 1, 0.36, 1)",
                },
                0.18
              );
            }

            // Step 4: Action links (delay 0.28s, duration 0.6s, stagger 0.08s, fade_up translateY 16px -> 0)
            if (linkEls.length) {
              tl.to(
                linkEls,
                {
                  opacity: 1,
                  y: 0,
                  duration: isMobile ? 0.5 : 0.6,
                  stagger: 0.08,
                  ease: "cubic-bezier(0.22, 1, 0.36, 1)",
                },
                0.28
              );
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="border-t border-[#DDDAD4]/70 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Narrative Copy (~40% width) */}
          <div className="order-2 lg:order-1 lg:col-span-5 space-y-6">
            <div
              ref={labelRef}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-warm-gold transform-gpu"
            >
              THE FOUNDATION
            </div>
            <h2
              ref={headingRef}
              className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-light tracking-tight text-stone-900 leading-[1.1] transform-gpu"
            >
              {title}
            </h2>
            <p
              ref={descRef}
              className="font-sans text-[15px] sm:text-base leading-relaxed text-stone-600 transform-gpu"
            >
              {description}
            </p>

            <div className="pt-2 flex flex-wrap gap-6">
              <Link
                ref={(el) => {
                  linksRef.current[0] = el;
                }}
                href="/process"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-stone-900 border-b border-stone-900 pb-1 hover:text-warm-gold hover:border-warm-gold transition-colors transform-gpu"
              >
                Discover Our Process &rarr;
              </Link>
              <Link
                ref={(el) => {
                  linksRef.current[1] = el;
                }}
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-stone-600 border-b border-stone-300 pb-1 hover:text-stone-900 hover:border-stone-900 transition-colors transform-gpu"
              >
                Explore Material Library &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Processing Facility Image (~55% width) — Completely untouched */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[8px] border border-[#DDDAD4]/60 bg-stone-100">
              <Image
                src="/images/about/our-foundation.jpg"
                alt="Rocks Studio stone processing facility and manufacturing"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
