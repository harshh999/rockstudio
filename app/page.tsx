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
      <section className="relative w-full bg-[#FAFAF8] pt-[110px] pb-[90px] overflow-hidden">
        {/* Header */}
        <div className="relative z-10 mx-auto max-w-[620px] px-6 text-center mb-[60px]">
          <p className="text-[12px] font-semibold tracking-[0.15em] text-[#55534F] uppercase mb-4">
            Client Feedback
          </p>
          <h2 className="font-serif text-[34px] sm:text-[46px] lg:text-[56px] font-normal leading-[1.0] tracking-[-0.035em] text-[#171717] m-0">
            What Our Clients Are Saying
          </h2>
          <p className="mt-[22px] mx-auto text-[16px] leading-[1.55] font-normal text-[#55534F] font-sans">
            Rocks Studio works closely with architects, designers, builders, and project teams to source and supply premium natural stone for exceptional spaces.
          </p>
        </div>

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
      {/* CONTACT CTA                                                  */}
      {/* ============================================================ */}
      <QuoteCTA 
        variant="light" 
        title={hero.bottomCta?.title}
        subtitle={hero.bottomCta?.description}
        bgImage={hero.bottomCta?.image || "/images/projects/villa-flooring.jpg"}
        buttonText={hero.bottomCta?.buttonText}
      />
    </>
  );
}
