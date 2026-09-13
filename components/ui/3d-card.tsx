"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface InteractiveTravelCardProps {
  title: string;
  subtitle?: string;
  image: string;
  href: string;
  index: number;
  actionText?: string;
  className?: string;
}

export function InteractiveTravelCard({
  title,
  image,
  href,
  actionText = "EXPLORE \u2192",
  className = "",
}: InteractiveTravelCardProps) {
  return (
    <div className={`relative w-full aspect-[1.55/1] ${className}`}>
      <Link href={href} className="block w-full h-full group">
        <div className="relative w-full h-full rounded-[18px] sm:rounded-[20px] lg:rounded-[22px] overflow-hidden bg-stone-200/60 shadow-md">
          {/* Internal Image Layer — Only the image scales on hover, card container remains fixed */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <Image
              src={image}
              alt={`${title} natural stone application`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            {/* Bottom Dark Gradient Overlay - Minimal subtle deepening on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent transition-colors duration-500 ease-out group-hover:from-black/70 group-hover:via-black/20 pointer-events-none" />
          </div>

          {/* Title & EXPLORE Action Text */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6 z-10 text-left pointer-events-none">
            <div>
              <h3 className="font-serif text-[20px] sm:text-[23px] lg:text-[25px] font-normal leading-tight text-white">
                {title}
              </h3>
            </div>
            <div>
              <span className="mt-1 inline-flex items-center font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.08em] uppercase text-white/80 transition-opacity duration-300 group-hover:opacity-100">
                {actionText}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default InteractiveTravelCard;
