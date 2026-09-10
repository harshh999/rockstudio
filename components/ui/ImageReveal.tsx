"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function ImageReveal({
  children,
  className = "",
  delay = 0,
  duration = 1.0,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const element = containerRef.current;

    let ctx = gsap.context(() => {
      // Find img or inner element
      const target = element.querySelector("img") || element;

      gsap.fromTo(
        element,
        { opacity: 0 },
        {
          opacity: 1,
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

      if (target) {
        gsap.fromTo(
          target,
          { scale: 1.04 },
          {
            scale: 1.0,
            duration: duration * 1.2,
            delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [delay, duration]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
