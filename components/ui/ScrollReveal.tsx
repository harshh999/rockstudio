"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
  stagger?: number;
  staggerSelector?: string;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  yOffset = 30,
  duration = 0.8,
  stagger = 0,
  staggerSelector,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Respect prefers-reduced-motion
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const element = containerRef.current;
    const isMobile = window.innerWidth < 768;
    const actualY = isMobile ? Math.min(yOffset, 18) : yOffset;

    let ctx = gsap.context(() => {
      if (staggerSelector && stagger > 0) {
        const items = element.querySelectorAll(staggerSelector);
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: actualY },
            {
              opacity: 1,
              y: 0,
              duration,
              delay,
              stagger,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                once: true,
              },
            }
          );
          return;
        }
      }

      gsap.fromTo(
        element,
        { opacity: 0, y: actualY },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay, duration, stagger, staggerSelector, yOffset]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
