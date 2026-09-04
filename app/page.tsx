import Link from "next/link";
import {
  getProductCategories,
  getFeaturedProducts,
  getTestimonials,
  getHeroContent,
  getAboutPreview,
} from "@/lib/data";
import Hero from "@/components/ui/Hero";
import AboutPreview from "@/components/ui/AboutPreview";
import SectionHeading from "@/components/ui/SectionHeading";
import CategoryCard from "@/components/ui/CategoryCard";
import ProductCard from "@/components/ui/ProductCard";
import TestimonialGrid from "@/components/ui/TestimonialGrid";
import QuoteCTA from "@/components/ui/QuoteCTA";

export default async function HomePage() {
  const [categories, featuredProducts, testimonials, hero, aboutPreview] =
    await Promise.all([
      getProductCategories(),
      getFeaturedProducts(),
      getTestimonials(),
      getHeroContent(),
      getAboutPreview(),
    ]);

  const selectedProducts = featuredProducts.slice(0, 4);

  return (
    <>
      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
      <Hero content={hero} />

      {/* ============================================================ */}
      {/* ABOUT US PREVIEW                                             */}
      {/* ============================================================ */}
      <AboutPreview content={aboutPreview} />

      {/* ============================================================ */}
      {/* PRODUCT CATEGORIES                                           */}
      {/* ============================================================ */}
      <section className="bg-[#FAF9F6] py-24 lg:py-32">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            label="Our Materials"
            title="Natural Stone Categories"
            subtitle="Explore our curated range of premium natural stone, sourced from established quarries."
          />
          <div className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SELECTED PRODUCTS                                            */}
      {/* ============================================================ */}
      <section className="bg-stone-100 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between">
            <SectionHeading
              label="Featured"
              title="Selected Products"
              align="left"
            />
            <Link
              href="/products"
              className="hidden border-b border-stone-900 pb-1 text-sm font-medium tracking-wide text-stone-900 transition-colors hover:border-warm-gold hover:text-warm-gold md:inline-block"
            >
              View All Products →
            </Link>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {selectedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/products"
              className="border-b border-stone-900 pb-1 text-sm font-medium tracking-wide text-stone-900"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHY ROCKS STUDIO                                             */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <SectionHeading
          label="Why Choose Us"
          title="Why Rocks Studio"
          subtitle="We combine quality materials, modern processing, and reliable service to support your projects."
        />
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Premium Materials",
              desc: "Natural stone sourced from established quarries, inspected for quality before entering our production line.",
            },
            {
              title: "Modern Processing",
              desc: "Our facility is equipped with precision cutting, calibration, and finishing equipment for consistent results.",
            },
            {
              title: "Reliable Supply",
              desc: "Capacity to handle orders from boutique installations to large-scale commercial requirements, delivered on schedule.",
            },
            {
              title: "Expert Guidance",
              desc: "Our team works closely with architects and project managers to fulfil material specifications.",
            },
            {
              title: "Quality Assurance",
              desc: "Systematic quality checks from raw block inspection through processing and final dispatch.",
            },
            {
              title: "Wide Range",
              desc: "Marble, granite, quartzite, and sandstone available in various finishes, sizes, and thicknesses.",
            },
          ].map((item) => (
            <div key={item.title} className="border-t border-stone-200 pt-6">
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
      {/* TESTIMONIALS                                                 */}
      {/* ============================================================ */}
      <section className="relative w-full bg-[#FAFAF8] py-[100px] overflow-hidden">
        {/* Header */}
        <div className="relative z-10 mx-auto max-w-[760px] px-6 text-center mb-[70px]">
          <h2 className="font-serif text-[36px] sm:text-[42px] lg:text-[48px] font-normal leading-[1.05] tracking-[-0.035em] text-[#171717] m-0">
            What Our Clients Are Saying
          </h2>
          <p className="mt-[22px] max-w-[650px] mx-auto text-[18px] leading-[1.5] font-normal text-[#4B4D54] font-sans">
            We take pride in delivering exceptional solutions that deliver great results. But don’t just take our word for it.
          </p>
        </div>

        {/* Testimonials Marquee Track */}
        <TestimonialGrid testimonials={testimonials} />
      </section>

      {/* ============================================================ */}
      {/* CONTACT CTA                                                  */}
      {/* ============================================================ */}
      <QuoteCTA variant="light" />
    </>
  );
}
