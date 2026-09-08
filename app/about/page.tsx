import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAboutContent } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import QuoteCTA from "@/components/ui/QuoteCTA";

export const metadata: Metadata = {
  title: "About Us | Rocks Studio",
  description:
    "Learn about Rocks Studio — an Ahmedabad-based natural stone company curating and supplying premium marble, granite, quartzite, and sandstone for architecture and interiors.",
};

export default async function AboutPage() {
  const about = await getAboutContent();

  return (
    <>
      {/* ============================================================ */}
      {/* PAGE HEADER                                                  */}
      {/* ============================================================ */}
      <section className="bg-stone-900 px-6 pt-36 pb-20 lg:px-8 lg:pt-44 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-warm-beige">
            About Rocks Studio
          </span>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-light tracking-tight text-white md:text-5xl lg:text-6xl">
            Natural Stone, Chosen with Intention
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-stone-300">
            {about.intro}
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* COMPANY STORY & AHMEDABAD ROOTS                              */}
      {/* ============================================================ */}
      <section className="bg-[#FAFAF8] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-gold">
                Our Foundation
              </span>
              <h2 className="font-serif text-3xl font-light tracking-tight text-stone-900 sm:text-4xl">
                Curating Materials for Spaces That Endure
              </h2>
              <p className="text-base leading-relaxed text-stone-600">
                Based in Ahmedabad, Gujarat, Rocks Studio was founded on a simple conviction: natural stone is not merely a construction material, but a permanent architectural expression.
              </p>
              <p className="text-base leading-relaxed text-stone-600">
                We work collaboratively alongside leading architects, interior designers, builders, and discerning homeowners across India to curate, detail, and supply exceptional marble, granite, onyx, sandstone, and bespoke CNC carved stone surfaces.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/process"
                  className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-stone-900 border-b border-stone-900 pb-1 hover:text-warm-gold hover:border-warm-gold transition-colors"
                >
                  Discover Our Process →
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-stone-600 border-b border-transparent pb-1 hover:text-stone-900 transition-colors"
                >
                  Explore Material Library →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] bg-stone-100 shadow-sm">
                <Image
                  src="/images/about/about-preview.jpg"
                  alt="Rocks Studio stone curation gallery"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PHILOSOPHY & VALUES                                          */}
      {/* ============================================================ */}
      <section className="bg-white border-y border-stone-200/80 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-gold">
              Core Principles
            </span>
            <h2 className="font-serif text-3xl font-light tracking-tight text-stone-900 sm:text-4xl">
              How We Approach Stone Selection
            </h2>
            <p className="text-base leading-relaxed text-stone-600">
              Our principles define how we evaluate raw stone blocks, partner with regional and global quarries, and serve architectural design teams.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Material Integrity",
                desc: "We prioritize structural density, genuine geological character, and authentic natural veining over artificial enhancements.",
              },
              {
                number: "02",
                title: "Architectural Collaboration",
                desc: "We function as technical stone partners to design teams, assisting with finish specifications, dry-lays, and custom cut-to-size planning.",
              },
              {
                number: "03",
                title: "Reliable Project Scale",
                desc: "With established quarry partnerships and advanced manufacturing infrastructure, we ensure consistent quality from initial sample to final crate.",
              },
            ].map((value) => (
              <div
                key={value.number}
                className="rounded-[24px] border border-stone-200/80 bg-stone-50/50 p-8 transition-colors hover:bg-stone-50"
              >
                <span className="font-serif text-2xl font-light text-stone-400">
                  {value.number}
                </span>
                <h3 className="mt-4 font-serif text-xl font-normal text-stone-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* APPLICATIONS                                                 */}
      {/* ============================================================ */}
      <section className="bg-[#FAFAF8] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Project Capabilities"
            title="Serving Every Architectural Typology"
            subtitle="From private villas to large-scale commercial developments, our stone collections are specified for diverse spatial requirements."
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Luxury Residential",
                desc: "Grand foyers, kitchen countertops, bathroom slabs, feature walls, and custom bespoke furniture elements.",
              },
              {
                title: "Commercial & Corporate",
                desc: "High-traffic lobby flooring, reception statement portals, elevator cladding, and exterior stone facades.",
              },
              {
                title: "Hospitality & Wellness",
                desc: "Hotel entrances, lounge feature walls, spa areas, resort pool decks, and bespoke backlit onyx bars.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-stone-200/80 bg-white p-8 shadow-xs"
              >
                <h3 className="font-serif text-xl font-normal text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA                                                          */}
      {/* ============================================================ */}
      <QuoteCTA
        title="Let's Discuss Your Project"
        subtitle="Connect with our stone specialists in Ahmedabad to review material samples and architectural specifications."
      />
    </>
  );
}

