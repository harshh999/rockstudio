"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function WhoWeAreSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const section = sectionRef.current;
    if (!section) return;

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const isMobile = window.innerWidth < 640;
    const moveLabel = isMobile ? 12 : 16;
    const moveHeading = isMobile ? 20 : 28;
    const moveParagraph = isMobile ? 14 : 18;

    const labelEl = labelRef.current;
    const headingEl = headingRef.current;
    const paragraphEls = paragraphsRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      // Set initial hidden states before section reveal triggers
      if (labelEl) gsap.set(labelEl, { opacity: 0, y: moveLabel });
      if (headingEl) gsap.set(headingEl, { opacity: 0, y: moveHeading });
      if (paragraphEls.length) gsap.set(paragraphEls, { opacity: 0, y: moveParagraph });
    }, sectionRef);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation once when section enters viewport
            observer.unobserve(entry.target);

            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

            // Step 1: WHO WE ARE label (delay 0, duration 0.6s, fade_up)
            if (labelEl) {
              tl.to(
                labelEl,
                {
                  opacity: 1,
                  y: 0,
                  duration: isMobile ? 0.5 : 0.6,
                },
                0
              );
            }

            // Step 2: Main heading (delay 0.1s, duration 0.9s, cubic-bezier(0.22, 1, 0.36, 1))
            if (headingEl) {
              tl.to(
                headingEl,
                {
                  opacity: 1,
                  y: 0,
                  duration: isMobile ? 0.75 : 0.9,
                  ease: "cubic-bezier(0.22, 1, 0.36, 1)",
                },
                0.10
              );
            }

            // Step 3: Paragraphs (delay 0.35s, duration 0.7s, stagger 0.12s, fade_up)
            if (paragraphEls.length) {
              tl.to(
                paragraphEls,
                {
                  opacity: 1,
                  y: 0,
                  duration: isMobile ? 0.6 : 0.7,
                  stagger: isMobile ? 0.10 : 0.12,
                },
                0.35
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
    <section ref={sectionRef} className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Architectural Stone Image (~55% width) — Preserved untouched */}
        <div className="lg:col-span-6 xl:col-span-7">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[8px] border border-[#DDDAD4]/60 bg-stone-100">
            <Image
              src="/images/about/who-we-are.jpg"
              alt="Rocks Studio natural stone architectural interior"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column: Narrative Copy (~40% width) with Editorial Text Reveal */}
        <div className="lg:col-span-6 xl:col-span-5 space-y-6">
          <div
            ref={labelRef}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-warm-gold transform-gpu"
          >
            WHO WE ARE
          </div>

          <h2
            ref={headingRef}
            className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light tracking-tight text-stone-900 leading-[1.1] transform-gpu"
          >
            Stone is natural. The way it is chosen is not.
          </h2>

          <div className="space-y-4 font-sans text-[15px] sm:text-base leading-relaxed text-stone-600">
            <p
              ref={(el) => {
                paragraphsRef.current[0] = el;
              }}
              className="transform-gpu"
            >
              Based in Ahmedabad, Gujarat, Rocks Studio works with architects,
              interior designers, and builders to source, detail, and supply
              natural stone for residential, commercial, and hospitality projects.
            </p>

            <p
              ref={(el) => {
                paragraphsRef.current[1] = el;
              }}
              className="transform-gpu"
            >
              Rather than offering undifferentiated materials, we evaluate each
              stone block for geological stability, color consistency, and natural
              character before it enters production.
            </p>

            <p
              ref={(el) => {
                paragraphsRef.current[2] = el;
              }}
              className="transform-gpu"
            >
              From raw block selection to precision calibration and finishing,
              our focus is ensuring the material performs reliably in its
              intended architectural context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
