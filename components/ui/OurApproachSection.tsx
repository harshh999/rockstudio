"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface ApproachItem {
  number: string;
  title: string;
  description: string;
}

interface OurApproachSectionProps {
  items: ApproachItem[];
}

export default function OurApproachSection({ items }: OurApproachSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const topLineRef = useRef<HTMLDivElement>(null);

  const rowContentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rowLineRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    const topLineEl = topLineRef.current;

    const rowContents = rowContentRefs.current.filter(Boolean);
    const rowLines = rowLineRefs.current.filter(Boolean);

    const ctx = gsap.context(() => {
      // Set initial hidden states before animation triggers
      if (labelEl) gsap.set(labelEl, { opacity: 0, y: isMobile ? 12 : 16 });
      if (headingEl) gsap.set(headingEl, { opacity: 0, y: isMobile ? 20 : 30 });
      if (descEl) gsap.set(descEl, { opacity: 0, y: isMobile ? 14 : 18 });

      if (topLineEl) {
        gsap.set(topLineEl, {
          scaleX: 0,
          opacity: 0,
          transformOrigin: "left center",
        });
      }

      rowContents.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0, y: isMobile ? 16 : 22 });
      });

      rowLines.forEach((el) => {
        if (el) {
          gsap.set(el, {
            scaleX: 0,
            opacity: 0,
            transformOrigin: "left center",
          });
        }
      });
    }, sectionRef);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Run animation once on viewport entry
            observer.unobserve(entry.target);

            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

            // Step 1: Introductory text reveal
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

            if (headingEl) {
              tl.to(
                headingEl,
                {
                  opacity: 1,
                  y: 0,
                  duration: isMobile ? 0.7 : 0.8,
                  ease: "cubic-bezier(0.22, 1, 0.36, 1)",
                },
                0.08
              );
            }

            if (descEl) {
              tl.to(
                descEl,
                {
                  opacity: 1,
                  y: 0,
                  duration: isMobile ? 0.55 : 0.65,
                },
                0.15
              );
            }

            // Step 2: First horizontal line reveal
            if (topLineEl) {
              tl.to(
                topLineEl,
                {
                  scaleX: 1,
                  opacity: 1,
                  duration: isMobile ? 0.6 : 0.7,
                  ease: "cubic-bezier(0.22, 1, 0.36, 1)",
                },
                0.50
              );
            }

            // Step 3: Progressive row & divider line reveals top to bottom
            rowContents.forEach((contentEl, i) => {
              const lineEl = rowLines[i];
              const rowStartTime = 0.75 + i * (isMobile ? 0.10 : 0.12);

              if (contentEl) {
                tl.to(
                  contentEl,
                  {
                    opacity: 1,
                    y: 0,
                    duration: isMobile ? 0.55 : 0.65,
                    ease: "cubic-bezier(0.22, 1, 0.36, 1)",
                  },
                  rowStartTime
                );
              }

              if (lineEl) {
                tl.to(
                  lineEl,
                  {
                    scaleX: 1,
                    opacity: 1,
                    duration: isMobile ? 0.48 : 0.55,
                    ease: "cubic-bezier(0.22, 1, 0.36, 1)",
                  },
                  rowStartTime
                );
              }
            });
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
    <section
      ref={sectionRef}
      className="border-t border-[#DDDAD4]/70 bg-stone-50/40 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
        {/* Section Heading */}
        <div className="max-w-2xl space-y-4">
          <div
            ref={labelRef}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-warm-gold transform-gpu"
          >
            OUR APPROACH
          </div>
          <h2
            ref={headingRef}
            className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light tracking-tight text-stone-900 leading-[1.1] transform-gpu"
          >
            From material to application.
          </h2>
          <p
            ref={descRef}
            className="font-sans text-[15px] sm:text-base leading-relaxed text-stone-600 transform-gpu"
          >
            Rocks Studio coordinates every stage from quarry sourcing and block
            evaluation through custom processing, surface finishing, and project delivery.
          </p>
        </div>

        {/* Full-width Numbered Rows with Synchronized Line Reveals */}
        <div className="mt-12 lg:mt-16 flex flex-col w-full">
          {/* Top Horizontal Line */}
          <div
            ref={topLineRef}
            className="w-full border-t border-[#DDDAD4] transform-gpu"
          />

          {items.map((item, index) => (
            <div key={item.number} className="w-full">
              {/* Row Content */}
              <div
                ref={(el) => {
                  rowContentRefs.current[index] = el;
                }}
                className="group flex flex-col sm:flex-row sm:items-start py-7 lg:py-9 transition-colors hover:bg-stone-100/40 transform-gpu"
              >
                {/* Number */}
                <div className="sm:w-[12%] lg:w-[10%] shrink-0 mb-2 sm:mb-0">
                  <span className="font-serif text-xl sm:text-2xl font-normal text-warm-gold">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <div className="sm:w-[35%] lg:w-[32%] shrink-0 mb-2 sm:mb-0 pr-6">
                  <h3 className="font-serif text-xl sm:text-[22px] font-normal tracking-tight text-stone-900">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="sm:flex-1">
                  <p className="font-sans text-[15px] sm:text-base leading-relaxed text-stone-600 max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Row Bottom Divider Line */}
              <div
                ref={(el) => {
                  rowLineRefs.current[index] = el;
                }}
                className="w-full border-b border-[#DDDAD4] transform-gpu"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
