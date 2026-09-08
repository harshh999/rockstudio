"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import type { ApplicationTile } from "@/types";

interface ApplicationsProps {
  tiles: ApplicationTile[];
}

export default function Applications({ tiles }: ApplicationsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      }

      if (gridRef.current) {
        const tileElements = gridRef.current.children;
        gsap.fromTo(
          tileElements,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.15,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAF9F6] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-[720px] mb-10 lg:mb-12">
          <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#1B1B19]">
            APPLICATIONS
          </span>
          <h2 className="mt-3 font-serif text-[36px] sm:text-[44px] lg:text-[52px] font-normal leading-[1.05] tracking-[-0.035em] text-[#1B1B19]">
            Stone, Made for Every Space.
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#68635C]">
            From refined interiors to architectural exteriors, natural stone brings depth, character and permanence to the spaces it shapes.
          </p>
        </div>

        {/* 3-Column Editorial Grid with tighter 12px-16px gaps */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 lg:gap-4"
        >
          {tiles.map((tile) => (
            <Link
              key={tile.slug}
              href={`/products?application=${tile.slug}`}
              className="group relative block w-full aspect-[4/3] rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden bg-stone-200/60 transition-transform duration-500 hover:scale-[1.01]"
            >
              {/* Background Photography */}
              <Image
                src={tile.image}
                alt={`${tile.title} natural stone application`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/85 group-hover:via-black/30" />

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 transform transition-transform duration-500 group-hover:-translate-y-1">
                <h3 className="font-sans text-[20px] lg:text-[22px] font-medium tracking-tight text-white">
                  {tile.title}
                </h3>
                <span className="mt-1 inline-flex items-center text-[12px] font-medium tracking-widest text-stone-300 uppercase opacity-90 transition-opacity group-hover:opacity-100">
                  EXPLORE &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
