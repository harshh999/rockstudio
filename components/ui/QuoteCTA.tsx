"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function QuoteCTA() {
  return (
    <section className="relative w-full bg-white pt-[100px] lg:pt-[120px] pb-[55px] lg:pb-[70px]">
      <ScrollReveal className="w-[calc(100%-24px)] sm:w-[96%] lg:w-[98%] max-w-[1700px] mx-auto relative rounded-[24px] overflow-hidden h-[520px] sm:h-[480px] lg:h-[500px]">
        {/* Background Architectural Image */}
        <Image 
          src="/images/pre-footer.png" 
          alt="Rocks Studio Architectural Stone" 
          fill 
          className="object-cover object-center"
          sizes="(max-width: 1700px) 98vw, 1700px"
          priority
        />

        {/* Dark image overlay to ensure text contrast */}
        <div 
          className="absolute inset-0 pointer-events-none z-[1] bg-black/50" 
        />

        {/* Centered CTA Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 sm:px-12 py-8 max-w-[760px] mx-auto">
          {/* Eyebrow */}
          <p className="text-[11px] font-medium tracking-[0.22em] text-white/80 uppercase mb-[22px] font-sans">
            START A PROJECT
          </p>

          {/* Heading */}
          <h2 className="font-serif text-[36px] sm:text-[46px] lg:text-[54px] font-normal leading-[1.05] text-white m-0">
            Ready to Start Your Project?
          </h2>

          {/* Description */}
          <p className="mt-[20px] mb-[28px] text-[15px] sm:text-[17px] leading-[1.5] font-normal text-stone-200 max-w-[650px] mx-auto font-sans">
            Get in touch with our team to discuss your requirements and receive a personalised quote.
          </p>

          {/* Button */}
          <Link
            href="/contact"
            className="inline-block bg-white text-[#171717] text-[15px] font-medium px-[34px] py-[15px] rounded-none border-none transition-all duration-[180ms] ease-in-out hover:bg-stone-200 hover:-translate-y-[1px]"
          >
            Get a Quote
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
