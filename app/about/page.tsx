import type { Metadata } from "next";
import Image from "next/image";
import { getAboutContent } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import QuoteCTA from "@/components/ui/QuoteCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rocks Studio — a natural stone company based in Ahmedabad, Gujarat, specialising in premium marble, granite, quartzite, and sandstone.",
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
            About Us
          </span>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-light tracking-tight text-white md:text-5xl">
            Rocks Studio
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-400">
            {about.intro}
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MANUFACTURING                                                */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
            <Image
              src="/images/about/manufacturing.jpg"
              alt="Stone manufacturing facility"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-gold">
              Manufacturing
            </span>
            <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-stone-900 md:text-4xl">
              Modern Processing Facility
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone-600">
              {about.manufacturing}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MINING & SOURCING                                            */}
      {/* ============================================================ */}
      <section className="bg-stone-100 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-gold">
                Mining &amp; Sourcing
              </span>
              <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-stone-900 md:text-4xl">
                Responsibly Sourced Stone
              </h2>
              <p className="mt-6 text-base leading-relaxed text-stone-600">
                {about.sourcing}
              </p>
            </div>
            <div className="relative order-1 aspect-[4/3] overflow-hidden bg-stone-200 lg:order-2">
              <Image
                src="/images/categories/quartzite.jpg"
                alt="Natural stone quarry"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROCESSING & QUALITY                                         */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
            <Image
              src="/images/categories/marble.jpg"
              alt="Quality stone finishing"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-gold">
              Processing &amp; Quality
            </span>
            <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-stone-900 md:text-4xl">
              Exacting Standards
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone-600">
              {about.quality}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CAPABILITIES                                                 */}
      {/* ============================================================ */}
      <section className="bg-stone-100 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            label="Capabilities"
            title="Built for Scale"
            subtitle={about.capabilities}
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* APPLICATIONS                                                 */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <SectionHeading
          label="Applications"
          title="Serving Every Project Type"
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Residential",
              desc: "Kitchens, bathrooms, flooring, feature walls, and custom installations for luxury homes.",
            },
            {
              title: "Commercial",
              desc: "Office lobbies, reception areas, conference rooms, and commercial facades.",
            },
            {
              title: "Hospitality",
              desc: "Hotel lobbies, restaurants, spas, and resort common areas.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-stone-200 p-8">
              <h3 className="text-lg font-medium tracking-tight text-stone-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA                                                          */}
      {/* ============================================================ */}
      <QuoteCTA
        title="Let's Work Together"
        subtitle="Contact us to discuss your project requirements and explore our range of premium natural stone."
      />
    </>
  );
}
