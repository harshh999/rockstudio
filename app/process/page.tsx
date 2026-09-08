import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProcessContent } from "@/lib/data";
import QuoteCTA from "@/components/ui/QuoteCTA";

export const metadata: Metadata = {
  title: "Process | Rocks Studio",
  description:
    "Explore how Rocks Studio sources, processes and finishes premium natural stone for architectural and interior applications.",
};

export default async function ProcessPage() {
  const content = await getProcessContent();

  return (
    <div className="bg-[#FAFAF8] text-stone-900">
      {/* ============================================================ */}
      {/* FULL-WIDTH EDITORIAL HERO (70-80vh)                           */}
      {/* ============================================================ */}
      <section className="relative h-[75vh] min-h-[580px] max-h-[760px] w-full overflow-hidden bg-stone-950">
        {/* Background Image with Gradient Overlay */}
        <Image
          src={content.hero.image}
          alt="Natural stone quarry and architectural processing"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/20" />

        {/* Hero Content (Bottom-Left Aligned with Navbar Clearance) */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-14 sm:pb-20 pt-36 lg:px-8">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-warm-beige">
            {content.hero.eyebrow}
          </span>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.04]">
            {content.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl font-sans text-base sm:text-lg leading-relaxed text-stone-300">
            {content.hero.description}
          </p>
        </div>
      </section>


      {/* ============================================================ */}
      {/* SECTION 01: MINING & SOURCING (Full Viewport Editorial Split) */}
      {/* ============================================================ */}
      <section
        id="mining-sourcing"
        className="w-full bg-[#FAFAF8] text-[#171717] px-6 sm:px-10 lg:px-[6.5vw] py-14 sm:py-16 lg:py-20"
      >
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-8 lg:gap-[50px] items-center">
            {/* Left Column (38% Column, max 500px) */}
            <div className="flex flex-col justify-center max-w-[500px] w-full">
              {/* Eyebrow metadata row */}
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A867D]">
                ORIGIN &amp; EXTRACTION
              </div>

              {/* Display Serif Heading */}
              <h2 className="mt-[34px] mb-[26px] font-serif text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-normal leading-[0.98] tracking-[-0.035em] text-[#171717]">
                {content.miningSourcing.title}
              </h2>

              {/* Description */}
              <p className="max-w-[490px] font-sans text-[15px] sm:text-[16px] leading-[1.65] text-[#6D6A64]">
                {content.miningSourcing.description}
              </p>

              {/* Horizontal Divider Line */}
              <div className="mt-[30px] mb-[22px] h-[1px] w-full bg-[#DDDAD4]" />

              {/* Sourcing Standards */}
              <div>
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#292825] mb-[18px]">
                  SOURCING STANDARDS
                </h3>
                <ul className="space-y-[12px]">
                  {content.miningSourcing.supportingPoints.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[13px] text-[#6D6A64] leading-[1.45]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#171717]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Visual Collage: Asymmetric Editorial Quarry Masonry */}
            <div className="w-full flex flex-col gap-3 md:gap-3.5 lg:gap-4 h-auto sm:h-[580px] lg:h-[660px]">
              {/* Top Row: Dominant Quarry Extraction (68%) + Vertical Raw Block Selection (32%) */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-3.5 lg:gap-4 w-full h-auto sm:h-[55%] min-h-0">
                {/* Slot 01: Quarry Extraction (Dominant largest image ~68% width) */}
                <div className="w-full sm:w-[68%] h-[230px] sm:h-full min-w-0 min-h-0 relative overflow-hidden rounded-[8px] border border-[#DDDAD4]/60 bg-stone-200 group">
                  <Image
                    src={content.miningSourcing.images[0] || "/images/hero-architectural.jpg"}
                    alt="Active natural stone quarry extraction"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 65vw, 42vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-[18px] left-[18px] z-10 flex items-center gap-[10px]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      QUARRY EXTRACTION
                    </span>
                    <span className="w-[30px] h-[1px] bg-white/60 shrink-0" />
                  </div>
                </div>

                {/* Slot 02: Raw Block Selection (Narrow vertical ~32% width) */}
                <div className="w-full sm:w-[32%] h-[180px] sm:h-full min-w-0 min-h-0 relative overflow-hidden rounded-[8px] border border-[#DDDAD4]/60 bg-stone-200 group">
                  <Image
                    src={content.miningSourcing.images[1] || "/images/categories/sandstone.jpg"}
                    alt="Extracted raw natural stone block selection"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 35vw, 20vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-[18px] left-[18px] z-10 flex items-center gap-[10px]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      RAW BLOCK SELECTION
                    </span>
                    <span className="w-[30px] h-[1px] bg-white/60 shrink-0" />
                  </div>
                </div>
              </div>

              {/* Bottom Row: Offset Quarry Operations (54%) + Natural Stone Character (46%) */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-3.5 lg:gap-4 w-full h-auto sm:h-[45%] min-h-0">
                {/* Slot 03: Quarry Operations (Medium/wide image ~54% width) */}
                <div className="w-full sm:w-[54%] h-[200px] sm:h-full min-w-0 min-h-0 relative overflow-hidden rounded-[8px] border border-[#DDDAD4]/60 bg-stone-200 group">
                  <Image
                    src={content.miningSourcing.images[2] || "/images/about/manufacturing.jpg"}
                    alt="Quarry operations and machinery"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 34vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-[18px] left-[18px] z-10 flex items-center gap-[10px]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      QUARRY OPERATIONS
                    </span>
                    <span className="w-[30px] h-[1px] bg-white/60 shrink-0" />
                  </div>
                </div>

                {/* Slot 04: Natural Stone Character (Medium/wide image ~46% width) */}
                <div className="w-full sm:w-[46%] h-[190px] sm:h-full min-w-0 min-h-0 relative overflow-hidden rounded-[8px] border border-[#DDDAD4]/60 bg-stone-200 group">
                  <Image
                    src={content.miningSourcing.images[3] || "/images/categories/kaddapa.jpg"}
                    alt="Geological stone formation and natural texture"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 28vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-[18px] left-[18px] z-10 flex items-center gap-[10px]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      NATURAL STONE CHARACTER
                    </span>
                    <span className="w-[30px] h-[1px] bg-white/60 shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 02: MANUFACTURING (Images Left / Text Right)         */}
      {/* ============================================================ */}
      <section
        id="manufacturing"
        className="w-full bg-[#FAFAF8] text-[#171717] px-6 sm:px-10 lg:px-[6.5vw] py-14 sm:py-16 lg:py-20"
      >
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[62%_38%] gap-8 lg:gap-[50px] items-center">
            {/* Left Visual Collage: Asymmetric Editorial Manufacturing Matrix (Order 2 on mobile, Order 1 on Desktop) */}
            <div className="order-2 lg:order-1 w-full flex flex-col gap-3 md:gap-3.5 lg:gap-4 h-auto sm:h-[580px] lg:h-[660px]">
              {/* Top Row: Dominant Processing Facility (68%) + Vertical Precision Cutting (32%) */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-3.5 lg:gap-4 w-full h-auto sm:h-[55%] min-h-0">
                {/* Slot 01: Processing Facility (~68% width) */}
                <div className="w-full sm:w-[68%] h-[230px] sm:h-full min-w-0 min-h-0 relative overflow-hidden rounded-[8px] border border-[#DDDAD4]/60 bg-stone-200 group">
                  <Image
                    src={content.manufacturing.images[0] || "/images/about/manufacturing.jpg"}
                    alt="Manufacturing facility interior"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 65vw, 42vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-[18px] left-[18px] z-10 flex items-center gap-[10px]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      PROCESSING FACILITY
                    </span>
                    <span className="w-[30px] h-[1px] bg-white/60 shrink-0" />
                  </div>
                </div>

                {/* Slot 02: Precision Cutting (~32% width) */}
                <div className="w-full sm:w-[32%] h-[180px] sm:h-full min-w-0 min-h-0 relative overflow-hidden rounded-[8px] border border-[#DDDAD4]/60 bg-stone-200 group">
                  <Image
                    src={content.manufacturing.images[1] || "/images/categories/cnc.jpg"}
                    alt="Precision stone cutting machinery"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 35vw, 20vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-[18px] left-[18px] z-10 flex items-center gap-[10px]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      PRECISION CUTTING
                    </span>
                    <span className="w-[30px] h-[1px] bg-white/60 shrink-0" />
                  </div>
                </div>
              </div>

              {/* Bottom Row: Offset Stone Processing (54%) + Finishing & Quality (46%) */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-3.5 lg:gap-4 w-full h-auto sm:h-[45%] min-h-0">
                {/* Slot 03: Stone Processing (~54% width) */}
                <div className="w-full sm:w-[54%] h-[200px] sm:h-full min-w-0 min-h-0 relative overflow-hidden rounded-[8px] border border-[#DDDAD4]/60 bg-stone-200 group">
                  <Image
                    src={content.manufacturing.images[2] || "/images/categories/granite.jpg"}
                    alt="Factory production scene and slab processing"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 34vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-[18px] left-[18px] z-10 flex items-center gap-[10px]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      STONE PROCESSING
                    </span>
                    <span className="w-[30px] h-[1px] bg-white/60 shrink-0" />
                  </div>
                </div>

                {/* Slot 04: Finishing & Quality (~46% width) */}
                <div className="w-full sm:w-[46%] h-[190px] sm:h-full min-w-0 min-h-0 relative overflow-hidden rounded-[8px] border border-[#DDDAD4]/60 bg-stone-200 group">
                  <Image
                    src={content.manufacturing.images[3] || "/images/categories/onyx.jpg"}
                    alt="Finished stone and quality inspection detail"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 28vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-[18px] left-[18px] z-10 flex items-center gap-[10px]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      FINISHING &amp; QUALITY
                    </span>
                    <span className="w-[30px] h-[1px] bg-white/60 shrink-0" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Column (Order 1 on mobile, Order 2 on Desktop) */}
            <div className="order-1 lg:order-2 flex flex-col justify-center max-w-[500px] w-full lg:ml-auto">
              {/* Eyebrow metadata row */}
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A867D]">
                PROCESSING &amp; MANUFACTURING
              </div>

              {/* Display Serif Heading */}
              <h2 className="mt-[34px] mb-[26px] font-serif text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-normal leading-[0.98] tracking-[-0.035em] text-[#171717]">
                {content.manufacturing.title}
              </h2>

              {/* Description */}
              <p className="max-w-[490px] font-sans text-[15px] sm:text-[16px] leading-[1.65] text-[#6D6A64]">
                {content.manufacturing.description}
              </p>

              {/* Facility Capabilities */}
              <div className="mt-[30px] border-t border-[#DDDAD4] pt-[22px]">
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#292825] mb-[18px]">
                  FACILITY CAPABILITIES
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[24px] gap-y-[12px] text-[13px] leading-[1.45] text-[#6D6A64]">
                  {[
                    "Multi-cutter systems",
                    "Single cutter processing",
                    "Line polishing and finishing",
                    "Epoxy and resin treatment",
                    "Tile cutting and calibration",
                    "Surface finishing and quality inspection"
                  ].map((capability, idx) => (
                    <div key={idx} className="flex items-start gap-[8px]">
                      <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#171717]" />
                      <span>{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Production Capacity Metric */}
              <div className="mt-[30px]">
                <div className="font-serif text-[32px] text-[#171717] leading-none">
                  15,000+
                </div>
                <div className="mt-[8px] text-[9px] font-semibold tracking-[0.16em] uppercase text-[#292825]">
                  SQ. MTR. MONTHLY CAPACITY
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 03: SURFACE & FINISHING (Text Left / Images Right)   */}
      {/* ============================================================ */}
      <section
        id="processing-finishing"
        className="w-full bg-[#FAFAF8] text-[#171717] px-6 sm:px-10 lg:px-[6.5vw] py-14 sm:py-16 lg:py-20"
      >
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-8 lg:gap-[50px] items-center">
            {/* Left Content Column (Order 1 on mobile & desktop) */}
            <div className="order-1 flex flex-col justify-center max-w-[500px] w-full">
              {/* Eyebrow metadata row */}
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A867D]">
                SURFACE &amp; FINISHING
              </div>

              {/* Display Serif Heading */}
              <h2 className="mt-[34px] mb-[26px] font-serif text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-normal leading-[0.98] tracking-[-0.035em] text-[#171717]">
                Surface, Texture &amp; Finish
              </h2>

              {/* Description */}
              <p className="max-w-[490px] font-sans text-[15px] sm:text-[16px] leading-[1.65] text-[#6D6A64]">
                Every stone responds differently to processing. Our finishing capabilities allow us to refine the natural character of each material through precision calibration, polishing, honing and textured surface treatments, creating finishes suited to both architectural and interior applications.
              </p>

              {/* Finishing Capabilities */}
              <div className="mt-[30px] border-t border-[#DDDAD4] pt-[22px]">
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#292825] mb-[18px]">
                  FINISHING CAPABILITIES
                </h3>
                <div className="flex flex-col">
                  {[
                    {
                      name: "Polished",
                      description: "A refined reflective surface that enhances colour, veining and natural depth."
                    },
                    {
                      name: "Honed",
                      description: "A smooth low-sheen surface with a softer, understated appearance."
                    },
                    {
                      name: "Leathered",
                      description: "A tactile textured finish that preserves the character of the stone while adding depth."
                    },
                    {
                      name: "Flamed / Textured",
                      description: "Surface treatments that create additional texture and visual variation for architectural applications."
                    }
                  ].map((finish, idx) => (
                    <div key={idx} className="grid grid-cols-[100px_1fr] py-[10px] border-b border-[#E5E2DC] last:border-b-0">
                      <div className="text-[13px] font-semibold text-[#292825]">
                        {finish.name}
                      </div>
                      <div className="text-[13px] leading-[1.5] text-[#6D6A64]">
                        {finish.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supporting Text */}
              <p className="mt-[18px] max-w-[490px] text-[12px] leading-[1.5] text-[#8A867D]">
                Finishes are selected according to the material, intended application and desired visual character.
              </p>
            </div>

            {/* Right Visual Collage: Asymmetric Editorial Surface & Finishing Matrix (Order 2 on mobile & desktop) */}
            <div className="order-2 w-full flex flex-col gap-3 md:gap-3.5 lg:gap-4 h-auto sm:h-[580px] lg:h-[660px]">
              {/* Top Row: Dominant Polished Finish (68%) + Vertical Honed/Matte (32%) */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-3.5 lg:gap-4 w-full h-auto sm:h-[55%] min-h-0">
                {/* Slot 01: Polished Finish (~68% width) */}
                <div className="w-full sm:w-[68%] h-[230px] sm:h-full min-w-0 min-h-0 relative overflow-hidden rounded-[8px] border border-[#DDDAD4]/60 bg-stone-200 group">
                  <Image
                    src="/images/categories/granite.jpg"
                    alt="Polished natural stone surface finish"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 65vw, 42vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-[18px] left-[18px] z-10 flex items-center gap-[10px]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      POLISHED FINISH
                    </span>
                    <span className="w-[30px] h-[1px] bg-white/60 shrink-0" />
                  </div>
                </div>

                {/* Slot 02: Honed / Matte (~32% width) */}
                <div className="w-full sm:w-[32%] h-[180px] sm:h-full min-w-0 min-h-0 relative overflow-hidden rounded-[8px] border border-[#DDDAD4]/60 bg-stone-200 group">
                  <Image
                    src="/images/categories/sandstone.jpg"
                    alt="Honed and matte stone surface finish"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 35vw, 20vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-[18px] left-[18px] z-10 flex items-center gap-[10px]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      HONED / MATTE
                    </span>
                    <span className="w-[30px] h-[1px] bg-white/60 shrink-0" />
                  </div>
                </div>
              </div>

              {/* Bottom Row: Offset Surface Processing (54%) + Textured Finish (46%) */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-3.5 lg:gap-4 w-full h-auto sm:h-[45%] min-h-0">
                {/* Slot 03: Surface Processing (~54% width) */}
                <div className="w-full sm:w-[54%] h-[200px] sm:h-full min-w-0 min-h-0 relative overflow-hidden rounded-[8px] border border-[#DDDAD4]/60 bg-stone-200 group">
                  <Image
                    src="/images/about/manufacturing.jpg"
                    alt="Stone surface being processed by machinery"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 34vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-[18px] left-[18px] z-10 flex items-center gap-[10px]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      SURFACE PROCESSING
                    </span>
                    <span className="w-[30px] h-[1px] bg-white/60 shrink-0" />
                  </div>
                </div>

                {/* Slot 04: Textured Finish (~46% width) */}
                <div className="w-full sm:w-[46%] h-[190px] sm:h-full min-w-0 min-h-0 relative overflow-hidden rounded-[8px] border border-[#DDDAD4]/60 bg-stone-200 group">
                  <Image
                    src="/images/categories/wall-cladding.jpg"
                    alt="Textured and flamed stone finish detail"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 28vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
                  <div className="absolute bottom-[18px] left-[18px] z-10 flex items-center gap-[10px]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      TEXTURED FINISH
                    </span>
                    <span className="w-[30px] h-[1px] bg-white/60 shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 04: QUALITY CONTROL (Image Right)                    */}
      {/* ============================================================ */}
      <section id="quality-control" className="bg-white px-6 sm:px-10 lg:px-[6.5vw] py-14 sm:py-16 lg:py-20 overflow-hidden">
        <style>{`
          @keyframes slide-marker {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            100% { top: 65%; opacity: 1; }
          }
          .animate-slide-marker {
            animation: slide-marker 2.5s ease-in-out forwards;
          }
        `}</style>
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            {/* Text & Sequential Stages */}
            <div className="w-full">
              <div className="max-w-[520px] space-y-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-stone-500">
                  QUALITY
                </div>
                <h2 className="font-serif text-3xl font-light tracking-tight text-stone-900 sm:text-4xl">
                  {content.qualityControl.title}
                </h2>
                <p className="font-sans text-base leading-relaxed text-stone-600">
                  {content.qualityControl.description}
                </p>

                {/* 5 Quality Stages */}
                <div className="mt-8 space-y-3 pt-4 border-t border-stone-200/80">
                  {content.qualityControl.stages.map((stage) => (
                    <div
                      key={stage.number}
                      className="flex items-start gap-4 p-3 rounded-[4px] border border-stone-200/60 bg-[#FAFAF8]"
                    >
                      <span className="font-serif text-xs font-semibold text-stone-500 pt-0.5">
                        {stage.number}
                      </span>
                      <div>
                        <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                          {stage.name}
                        </h4>
                        <p className="mt-0.5 text-xs text-stone-500 leading-relaxed font-sans">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Column (Vertical Marble with Inspection Marker) */}
            <div className="w-full relative h-[480px] lg:h-[580px]">
              <div className="relative w-full h-full overflow-hidden rounded-[4px] bg-[#EAE8E3]">
                <Image
                  src={content.qualityControl.image}
                  alt="Quality inspection and slab calibration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                
                {/* Thin Inspection Overlay */}
                <div className="absolute right-[25%] top-[10%] bottom-[10%] w-[1px] bg-white/30 z-10 pointer-events-none">
                  {/* Sliding Marker */}
                  <div className="absolute left-[-2.5px] w-[6px] h-[6px] rounded-full bg-white opacity-0 animate-slide-marker" style={{ animationDelay: '0.4s' }}>
                     <div className="absolute left-[14px] top-[-5px] whitespace-nowrap text-[9px] font-medium tracking-[0.2em] text-white/90">
                       VEIN CONTINUITY
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 05: BUILT FOR SCALE (Light Editorial)                 */}
      {/* ============================================================ */}
      <section id="capabilities" className="w-full bg-[#FAFAF8] text-[#171717] px-6 sm:px-10 lg:px-[6.5vw] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="max-w-[700px] space-y-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-stone-400">
              CAPABILITY
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[52px] font-light tracking-[-0.02em] text-stone-900 leading-[1.05]">
              {content.capabilities.title}
            </h2>
            <p className="font-sans text-[15px] sm:text-lg leading-[1.6] text-stone-600 max-w-[500px]">
              {content.capabilities.description}
            </p>
          </div>

          {/* Editorial Capability List */}
          <div className="flex flex-col w-full mt-12 lg:mt-16">
            <div className="border-t border-[#DDDAD4]" />
            {content.capabilities.focus.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col md:flex-row md:items-start border-b border-[#DDDAD4] py-7 lg:py-9"
              >
                {/* Number */}
                <div className="md:w-[12%] flex-shrink-0 mb-3 md:mb-0">
                  <span className="font-serif text-[22px] lg:text-[26px] font-normal text-warm-beige/80 transition-colors duration-500 group-hover:text-warm-beige">
                    0{idx + 1}
                  </span>
                </div>
                
                {/* Title */}
                <div className="md:w-[35%] lg:w-[38%] flex-shrink-0 mb-3 md:mb-0 pr-6 pt-1">
                  <h3 className="font-serif text-xl sm:text-[22px] lg:text-[26px] font-normal tracking-[-0.01em] text-stone-900">
                    {item.title}
                  </h3>
                </div>
                
                {/* Description */}
                <div className="md:flex-1 pt-1">
                  <p className="font-sans text-[15px] sm:text-base leading-[1.65] text-stone-600 max-w-[450px]">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Scale Photography Banner */}
          <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[2.35/1] min-h-[320px] md:min-h-[420px] w-full overflow-hidden rounded-[6px] border border-[#DDDAD4] bg-stone-100 mt-14 lg:mt-20">
            <Image
              src={content.capabilities.image}
              alt="Project scale natural stone supply"
              fill
              sizes="100vw"
              className="object-cover opacity-90 transition-transform duration-[2s] hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                    */}
      {/* ============================================================ */}
      <QuoteCTA
        title={content.cta.title}
        subtitle={content.cta.description}
        buttonText={content.cta.buttonText}
      />
    </div>
  );
}
