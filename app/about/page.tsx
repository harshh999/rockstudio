import type { Metadata } from "next";
import Image from "next/image";
import { getAboutContent } from "@/lib/data";
import QuoteCTA from "@/components/ui/QuoteCTA";
import WhoWeAreSection from "@/components/ui/WhoWeAreSection";
import OurApproachSection from "@/components/ui/OurApproachSection";
import FoundationSection from "@/components/ui/FoundationSection";

export const metadata: Metadata = {
  title: "About Us | Rocks Studio",
  description:
    "Learn about Rocks Studio — an Ahmedabad-based natural stone company sourcing, processing, and supplying premium marble, granite, quartzite, and sandstone for architectural and interior applications.",
};

export default async function AboutPage() {
  const about = await getAboutContent();

  const approachItems = [
    {
      number: "01",
      title: "Sourcing",
      description:
        "Access to a broad range of natural stone from established sources.",
    },
    {
      number: "02",
      title: "Selection",
      description:
        "Material is evaluated for colour, veining, consistency, thickness and suitability.",
    },
    {
      number: "03",
      title: "Processing",
      description:
        "Cutting and finishing capabilities allow materials to be prepared according to project requirements.",
    },
    {
      number: "04",
      title: "Supply",
      description:
        "Centralised coordination supports reliable delivery for residential, commercial and hospitality applications.",
    },
  ];

  const principles = [
    {
      number: "01",
      title: "Material Integrity",
      description:
        "Respect the natural character and variation of every stone.",
    },
    {
      number: "02",
      title: "Consistent Quality",
      description:
        "Maintain careful control from selection through finishing.",
    },
    {
      number: "03",
      title: "Project Understanding",
      description:
        "Recommend material according to the requirements and intended application.",
    },
    {
      number: "04",
      title: "Reliable Supply",
      description:
        "Coordinate material and processing around project requirements.",
    },
    {
      number: "05",
      title: "Long-Term Thinking",
      description:
        "Choose materials and finishes intended to endure.",
    },
  ];

  return (
    <div className="bg-white text-stone-900">
      <section className="relative flex flex-col justify-end min-h-[380px] lg:min-h-[460px] px-6 pt-32 pb-16 lg:px-8 lg:pt-40 lg:pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-stone-900">
          <Image
            src="/images/about/about-hero-new.jpg"
            alt="About Rocks Studio Hero Background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Cinematic Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-10" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-warm-beige">
            ABOUT ROCKS STUDIO
          </span>
          <h1 className="mt-4 font-serif text-4xl font-light tracking-tight text-white md:text-5xl">
            Natural Stone, Chosen with Intention
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-200">
            Rocks Studio sources, processes and supplies natural stone for architectural and interior applications.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 02. WHO WE ARE (Editorial Introduction)                      */}
      {/* ============================================================ */}
      <WhoWeAreSection />

      {/* ============================================================ */}
      {/* 03. OUR APPROACH (Numbered Editorial List)                   */}
      {/* ============================================================ */}
      <OurApproachSection items={approachItems} />

      {/* ============================================================ */}
      {/* 04. MATERIAL PHILOSOPHY (Visual Statement Section)           */}
      {/* ============================================================ */}
      <section className="border-t border-[#DDDAD4]/70 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
          {/* Header Statement */}
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16 items-start mb-12 lg:mb-16">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-warm-gold">
                MATERIAL PHILOSOPHY
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-light tracking-tight text-stone-900 leading-[1.08]">
                Every slab has a character of its own.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-8">
              <p className="font-sans text-[15px] sm:text-base leading-relaxed text-stone-600">
                We believe natural stone should not be treated as a uniform surface.
                Veining, texture, tone and variation are part of what makes each
                material unique. Our role is to understand those characteristics
                and help select stone that works with the architecture rather than
                simply covering it.
              </p>
            </div>
          </div>

          {/* Large Architectural Stone Image */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.4/1] w-full overflow-hidden rounded-[8px] border border-[#DDDAD4]/60 bg-stone-100">
            <Image
              src="/images/about/middle.png"
              alt="Natural stone architectural surface with organic veining"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 05. WHAT GUIDES US (Editorial Principles List)               */}
      {/* ============================================================ */}
      <section className="border-t border-[#DDDAD4]/70 bg-stone-50/40">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Left Column: Heading */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-32">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-warm-gold">
                WHAT GUIDES US
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light tracking-tight text-stone-900 leading-[1.1]">
                A considered approach to every material.
              </h2>
              <p className="font-sans text-[15px] sm:text-base leading-relaxed text-stone-600 max-w-md">
                Our principles define how we evaluate raw blocks, coordinate finishing, and support architectural requirements.
              </p>
            </div>

            {/* Right Column: Editorial Principles Rows */}
            <div className="lg:col-span-7 flex flex-col w-full border-t border-[#DDDAD4]">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="group flex flex-col sm:flex-row sm:items-start border-b border-[#DDDAD4] py-6 sm:py-7 transition-colors hover:bg-stone-100/40"
                >
                  <div className="sm:w-[15%] shrink-0 mb-2 sm:mb-0">
                    <span className="font-serif text-lg sm:text-xl font-normal text-warm-gold">
                      {principle.number}
                    </span>
                  </div>
                  <div className="sm:w-[38%] shrink-0 mb-2 sm:mb-0 pr-4">
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-stone-900">
                      {principle.title}
                    </h3>
                  </div>
                  <div className="sm:flex-1">
                    <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-stone-600">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 06. THE FOUNDATION (Closing Statement & Processing Facility) */}
      {/* ============================================================ */}
      <FoundationSection
        title={about.foundation?.title}
        description={about.foundation?.description}
      />

      {/* ============================================================ */}
      {/* 07. UNIVERSAL START A PROJECT CTA                            */}
      {/* ============================================================ */}
      <QuoteCTA />
    </div>
  );
}


