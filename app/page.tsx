import Link from "next/link";
import Image from "next/image";
import {
  getProductCategories,
  getFeaturedProducts,
  getTestimonials,
  getHeroContent,
  getAboutPreview,
  getApplications,
  getWhyStudioContent,
} from "@/lib/data";
import Hero from "@/components/ui/Hero";
import AboutPreview from "@/components/ui/AboutPreview";
import CategoryGallery from "@/components/ui/CategoryGallery";
import Applications from "@/components/ui/Applications";
import WhyStudio from "@/components/ui/WhyStudio";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import TestimonialGrid from "@/components/ui/TestimonialGrid";
import QuoteCTA from "@/components/ui/QuoteCTA";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default async function HomePage() {
  const [categories, featuredProducts, testimonials, hero, aboutPreview, applicationTiles, whyStudio] =
    await Promise.all([
      getProductCategories(),
      getFeaturedProducts(),
      getTestimonials(),
      getHeroContent(),
      getAboutPreview(),
      getApplications(),
      getWhyStudioContent(),
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
      <CategoryGallery categories={categories} />

      {/* ============================================================ */}
      {/* APPLICATIONS                                                 */}
      {/* ============================================================ */}
      <Applications tiles={applicationTiles} />

      {/* ============================================================ */}
      {/* SELECTED PRODUCTS                                            */}
      {/* ============================================================ */}
      <section className="bg-white py-[75px] sm:py-[80px] lg:py-[85px]">
        <ScrollReveal className="w-[95%] max-w-[1500px] mx-auto">
          {/* Editorial Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-end justify-between mb-[40px] sm:mb-[44px] lg:mb-[48px]">
            {/* Left Column: Eyebrow + Title */}
            <div className="text-left">
              <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] uppercase text-[#1B1B19] mb-2 sm:mb-3 block">
                FEATURED
              </span>
              <h2 className="font-serif text-[42px] sm:text-[54px] lg:text-[60px] font-normal leading-[0.98] tracking-[-0.035em] text-[#1B1B19]">
                Selected Products
              </h2>
            </div>

            {/* Right Column: Description + View All Link */}
            <div className="lg:text-right lg:flex lg:flex-col lg:items-end lg:justify-end lg:ml-auto">
              <p className="max-w-[340px] text-[14px] sm:text-[15px] font-sans font-normal leading-[1.5] text-[#68635C] mb-5 lg:mb-6">
                A considered selection of materials from our collection.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center text-[14px] font-medium tracking-wide text-[#1B1B19] border-b border-[#1B1B19] pb-1 transition-opacity duration-200 hover:opacity-60"
              >
                View All Products &rarr;
              </Link>
            </div>
          </div>

          {/* 4 Equal-Sized Product Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[10px] sm:gap-[12px] lg:gap-[14px]">
            {selectedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ============================================================ */}
      {/* WHY ROCKS STUDIO                                             */}
      {/* ============================================================ */}
      <WhyStudio content={whyStudio} />

      {/* ============================================================ */}
      {/* TESTIMONIALS                                                 */}
      {/* ============================================================ */}
      <section className="relative w-full bg-white pt-[110px] pb-[90px] overflow-hidden">
        <ScrollReveal className="relative z-10 mx-auto max-w-[620px] px-6 text-center mb-[60px]">
          <p className="text-[12px] font-semibold tracking-[0.15em] text-[#55534F] uppercase mb-4">
            Client Feedback
          </p>
          <h2 className="font-serif text-[34px] sm:text-[46px] lg:text-[56px] font-normal leading-[1.0] tracking-[-0.035em] text-[#171717] m-0">
            What Our Clients Are Saying
          </h2>
          <p className="mt-[22px] mx-auto text-[16px] leading-[1.55] font-normal text-[#55534F] font-sans">
            Rocks Studio works closely with architects, designers, builders, and project teams to source and supply premium natural stone for exceptional spaces.
          </p>
        </ScrollReveal>

        {/* Testimonials Showcase */}
        <TestimonialGrid testimonials={testimonials} />

        {/* CTA */}
        <div className="relative z-10 mx-auto px-6 text-center mt-[50px]">
          <Link
            href="/about#testimonials"
            className="inline-block border-b border-[#171717] pb-1 text-[15px] font-medium tracking-wide text-[#171717] transition-colors hover:text-[#55534F] hover:border-[#55534F]"
          >
            See all Reviews
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CINEMATIC PRE-FOOTER CTA SECTION                             */}
      {/* ============================================================ */}
      <QuoteCTA />
    </>
  );
}
