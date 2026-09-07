import Link from "next/link";
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
      <WhyStudio content={whyStudio} />

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
