import Image from "next/image";
import Link from "next/link";
import type { AboutPreviewContent } from "@/types";

interface AboutPreviewProps {
  content: AboutPreviewContent;
}

function MarbleVeinSvg() {
  return (
    <svg
      width="420"
      height="380"
      viewBox="0 0 420 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none select-none"
    >
      <path
        d="M20 40C80 90 140 70 200 130C260 190 230 270 320 310C360 330 390 350 410 370"
        stroke="#B7AFA3"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M130 90C160 120 180 160 220 170C260 180 290 150 340 180C370 200 390 240 410 270"
        stroke="#B7AFA3"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M240 190C280 230 310 260 360 275"
        stroke="#B7AFA3"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StoneContourSvg() {
  return (
    <svg
      width="320"
      height="280"
      viewBox="0 0 320 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none select-none"
    >
      <path
        d="M10 240C60 220 110 235 160 200C210 165 250 175 310 130"
        stroke="#B7AFA3"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 270C80 250 140 260 190 225C240 190 270 200 310 165"
        stroke="#B7AFA3"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 210C90 190 130 205 180 170C220 140 260 150 300 110"
        stroke="#B7AFA3"
        strokeWidth="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArchitecturalStoneSvg() {
  return (
    <svg
      width="220"
      height="180"
      viewBox="0 0 220 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none select-none"
    >
      <path
        d="M20 160L20 40L140 40L140 160"
        stroke="#B7AFA3"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M140 40L190 15L190 135L140 160"
        stroke="#B7AFA3"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 40L70 15L190 15"
        stroke="#B7AFA3"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="20"
        y1="100"
        x2="140"
        y2="100"
        stroke="#B7AFA3"
        strokeWidth="0.6"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

export default function AboutPreview({ content }: AboutPreviewProps) {
  return (
    <section className="relative bg-[#F5F3EF] py-[120px] pb-[140px] overflow-hidden">
      {/* Background Subtle Stone-Inspired SVG Linework Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Right: Large Marble Vein */}
        <div className="absolute -top-6 -right-10 opacity-60 sm:opacity-80 lg:opacity-[0.08] transform -rotate-12">
          <MarbleVeinSvg />
        </div>

        {/* Bottom Left: Subtle Geological Contour */}
        <div className="absolute -bottom-10 -left-10 opacity-50 sm:opacity-70 lg:opacity-[0.06] transform rotate-6">
          <StoneContourSvg />
        </div>

        {/* Bottom Right: Architectural Stone Detail */}
        <div className="absolute bottom-10 right-10 hidden lg:block opacity-[0.05]">
          <ArchitecturalStoneSvg />
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-[40px]">
        {/* Asymmetric Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] items-center gap-12 lg:gap-[60px]">
          {/* Left Column: Text Block */}
          <div className="max-w-[500px] self-center">
            {/* Headline */}
            <h2 className="font-serif text-[44px] sm:text-[50px] lg:text-[clamp(46px,4.2vw,64px)] font-normal leading-[0.98] tracking-[-0.045em] text-[#1B1B19] max-w-[480px]">
              {content.headline}
            </h2>

            {/* Description */}
            <p className="mt-[30px] text-[15px] font-normal leading-[1.7] text-[#68635C] max-w-[430px]">
              {content.body}
            </p>

            {/* CTA Link */}
            <div>
              <Link
                href={content.cta.href}
                className="mt-[32px] inline-flex items-center text-[14px] font-medium text-[#1B1B19] border-b border-[#1B1B19] pb-[6px] transition-opacity duration-200 hover:opacity-60"
              >
                {content.cta.label}
              </Link>
            </div>
          </div>

          {/* Right Column: Single Primary Architectural Image */}
          <div className="flex justify-start lg:justify-end w-full mt-8 lg:mt-0">
            <div className="relative w-full max-w-[520px] h-[400px] sm:h-[480px] lg:h-[560px] rounded-[16px] lg:rounded-[18px] overflow-hidden bg-stone-200/50 shadow-sm">
              <Image
                src={content.image}
                alt="Refined natural stone architectural detail"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
