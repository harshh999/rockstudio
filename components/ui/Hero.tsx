import Image from "next/image";
import Link from "next/link";
import type { HeroContent } from "@/types";

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className="relative h-[100svh] min-h-[720px] overflow-hidden bg-[#F5F3EF] rounded-b-[40px] lg:rounded-b-[60px]">
      {/* Full-Bleed Architectural Photograph (Calm, Soft & Naturally Lit) */}
      <Image
        src={content.backgroundImage}
        alt={content.headline.replace("\n", " ")}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-[1.01] transition-transform duration-1000 ease-out"
      />

      {/* Subtle Warm Scrim to ensure crisp legibility for dark typography */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#F5F3EF]/60 via-[#F5F3EF]/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Left-Aligned Editorial Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col justify-center px-6 sm:px-10 lg:px-16 pt-[72px] pb-16 pl-[clamp(48px,8vw,120px)] pr-12">
        <div className="max-w-[720px]">
          {/* Headline */}
          <h1 className="font-serif text-[44px] sm:text-[60px] md:text-[72px] lg:text-[clamp(58px,6vw,88px)] font-normal leading-[0.96] tracking-[-0.045em] text-[#1B1B19]">
            {content.headline.includes("\n") ? (
              content.headline.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))
            ) : (
              content.headline
            )}
          </h1>

          {/* Description */}
          <p className="mt-[26px] max-w-[430px] text-[15px] sm:text-[16px] font-normal leading-[1.6] text-[#625E57]">
            {content.description}
          </p>

          {/* CTAs */}
          <div className="mt-[30px] flex flex-wrap items-center gap-3 sm:gap-3.5">
            <Link
              href={content.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-[#1B1B19] px-[25px] py-[15px] text-[14px] font-medium text-white transition-all duration-200 hover:bg-black hover:scale-[1.01] shadow-xs"
            >
              {content.primaryCta.label}
            </Link>

            {content.secondaryCta && (
              <Link
                href={content.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-[rgba(27,27,25,0.28)] bg-transparent px-[24px] py-[14px] text-[14px] font-medium text-[#1B1B19] transition-all duration-200 hover:bg-stone-900/5 hover:border-[#1B1B19]"
              >
                {content.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Peripheral Details */}
      <div className="absolute bottom-8 left-[clamp(48px,8vw,120px)] z-10 hidden sm:block pointer-events-none select-none">
        <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.16em] text-[rgba(27,27,25,0.55)]">
          {content.bottomLeftText || "AHMEDABAD · INDIA"}
        </span>
      </div>

      <div className="absolute bottom-8 right-[clamp(48px,8vw,120px)] z-10 hidden sm:block pointer-events-none select-none">
        <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.16em] text-[rgba(27,27,25,0.55)]">
          {content.bottomRightText || content.bottomIndicator || "SCROLL TO EXPLORE"}
        </span>
      </div>

      {/* Mobile-Only Bottom Metadata */}
      <div className="absolute bottom-6 left-6 z-10 sm:hidden pointer-events-none select-none">
        <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[rgba(27,27,25,0.55)]">
          {content.bottomLeftText || "AHMEDABAD · INDIA"}
        </span>
      </div>
    </section>
  );
}
