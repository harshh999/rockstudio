"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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
  index,
  actionText = "EXPLORE \u2192",
  className = "",
}: InteractiveTravelCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for tracking cursor position (normalized 0 to 1)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Map mouse coordinates to 3D rotation range (-10.5deg to 10.5deg)
  const rotateXRaw = useTransform(mouseY, [0, 1], [10.5, -10.5]);
  const rotateYRaw = useTransform(mouseX, [0, 1], [-10.5, 10.5]);

  // Spring physics for smooth tactile 3D movement
  const springConfig = { damping: 15, stiffness: 150 };
  const rotateX = useSpring(rotateXRaw, springConfig);
  const rotateY = useSpring(rotateYRaw, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full aspect-[1.55/1] ${className}`}
      style={{ perspective: 1000 }}
    >
      <Link href={href} className="block w-full h-full">
        <motion.div
          className="relative w-full h-full rounded-[18px] sm:rounded-[20px] lg:rounded-[22px] overflow-hidden bg-stone-200/60 shadow-sm transition-shadow duration-300 group"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          {/* Depth Layer 0: Background Photography & Dark Overlay */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ transform: "translateZ(0px)", transformStyle: "preserve-3d" }}
          >
            <Image
              src={image}
              alt={`${title} natural stone application`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {/* Subtle Bottom Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />
          </div>

          {/* Depth Layer 30: Editorial Index Number */}
          <div
            className="absolute top-4 left-4 sm:top-5 sm:left-5 lg:top-6 lg:left-6 z-10 select-none pointer-events-none"
            style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
          >
            <span className="font-sans text-[11px] sm:text-[12px] font-medium tracking-[0.12em] uppercase text-white/80">
              {formattedIndex}
            </span>
          </div>

          {/* Depth Layer 50 & 40: Title & EXPLORE Action Text */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6 z-10 text-left pointer-events-none">
            {/* Depth Layer 50: Title */}
            <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
              <h3 className="font-serif text-[20px] sm:text-[23px] lg:text-[25px] font-normal leading-tight text-white">
                {title}
              </h3>
            </div>

            {/* Depth Layer 40: EXPLORE Content */}
            <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}>
              <span className="mt-1 inline-flex items-center font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.08em] uppercase text-white/80 transition-opacity duration-300 group-hover:opacity-100">
                {actionText}
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}

export default InteractiveTravelCard;
