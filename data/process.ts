import type { ProcessContent } from "@/types";

export const processContent: ProcessContent = {
  hero: {
    eyebrow: "OUR PROCESS",
    title: "From Quarry to Your Home",
    description:
      "A considered process of sourcing, extraction, processing and finishing that brings natural stone from its origin to architectural and interior applications.",
    image: "/images/hero-architectural.jpg",
  },

  miningSourcing: {
    number: "01",
    title: "Mining & Sourcing",
    description:
      "We source natural stone from established quarries across India and select international origins, selecting materials based on geological consistency, character, quality and suitability for architectural applications.",
    supportingPoints: [
      "Established quarry sources across India and global origins",
      "Rigorous raw block selection and structural appraisal",
      "Material inspection before transit",
      "Assessment of geological consistency and veining integrity",
      "Responsible and regulated extraction practices",
    ],
    images: [
      "/images/process/Quarry Extraction.png",
      "/images/process/Raw Block Selection.png",
      "/images/process/Quarry Operations.png",
      "/images/process/Natural Stone Character.png",
    ],
  },

  manufacturing: {
    number: "02",
    title: "Modern Processing Facility",
    description:
      "Our processing facilities combine modern stone-processing machinery with experienced craftsmanship to deliver precision cutting, calibration, finishing and surface treatments across a wide range of natural stone.",
    supportingPoints: [
      "Block cutting & wire sawing",
      "Slab processing & resin netting",
      "Calibration & thickness control",
      "Multi-head line polishing",
      "Precision CNC profile cutting",
      "Final dry-lay & crate packing",
    ],
    facility: {
      name: "Himatnagar Unit",
      subtitle: "Integrated Processing & Manufacturing Facility",
      details: [
        "Plant & machinery",
        "Multi cutter",
        "Single cutter",
        "Line polish machine",
        "Epoxy machine",
        "Tile cutting machine",
        "Cobol machine",
        "Production capacity",
      ],
    },
    images: [
      "/images/process/Processing Facility.png",
      "/images/process/Precision Cutting.png",
      "/images/process/Stone Processing.png",
      "/images/process/Finishing & Quality.png",
    ],
  },

  processingFinishing: {
    number: "03",
    title: "Processing & Finishing",
    intro: {
      title: "One Material. Multiple Finishes.",
      description:
        "Different finishing techniques reveal different characteristics of natural stone, allowing the material to be tailored to architectural and interior applications.",
    },
    materialExamples: [
      {
        material: "Shiva Gold",
        description:
          "A warm, golden-buff granite exhibiting distinct character across polished, textured, and weathered finishes.",
        finishes: [
          {
            name: "Shiva Gold",
            image: "/images/categories/granite.jpg",
            description: "High-gloss polished surface accentuating natural mineral tones.",
          },
          {
            name: "Leather Shiva Gold",
            image: "/images/categories/sandstone.jpg",
            description: "Tactile satin texture with a soft, undulating surface feel.",
          },
          {
            name: "Canvas Shiva Gold",
            image: "/images/categories/quartzite.jpg",
            description: "Micro-honed matte finish suited for architectural flooring.",
          },
          {
            name: "Flame River Shiva Gold",
            image: "/images/projects/facade-cladding.jpg",
            description: "Thermal flamed treatment providing slip-resistant exterior texture.",
          },
          {
            name: "Shot Blast Shiva Gold",
            image: "/images/categories/wall-cladding.jpg",
            description: "Fine abrasive impact surface providing reliable traction.",
          },
        ],
      },
      {
        material: "Steel Grey",
        description:
          "A dark crystalline granite exhibiting understated elegance across polished, flamed, and brushed surface treatments.",
        finishes: [
          {
            name: "Steel Grey",
            image: "/images/categories/cnc.jpg",
            description: "Classic high-shine polish showcasing quartz grain structure.",
          },
          {
            name: "Leather Steel Grey",
            image: "/images/categories/onyx.jpg",
            description: "Smooth satin feel with subtle non-reflective depth.",
          },
          {
            name: "Canvas Steel Grey",
            image: "/images/categories/marble.jpg",
            description: "Calibrated micro-textured finish for high-traffic interiors.",
          },
          {
            name: "Flame River Wash Steel Grey",
            image: "/images/about/manufacturing.jpg",
            description: "Exfoliated and brushed texture ideal for wet outdoor paving.",
          },
          {
            name: "Flame Steel Grey",
            image: "/images/projects/villa-flooring.jpg",
            description: "Direct high-heat thermal finish creating a rustic non-slip face.",
          },
          {
            name: "Lapato Finish Steel Grey",
            image: "/images/hero-architectural.jpg",
            description: "Semi-polished finish creating subtle matte-lustre interplay.",
          },
        ],
      },
    ],
  },

  qualityControl: {
    number: "04",
    title: "Quality Control",
    description:
      "From raw block inspection through processing and final dispatch, systematic quality checks help ensure consistency in thickness, finish, appearance and structural integrity.",
    stages: [
      {
        number: "01",
        name: "Raw Block Inspection",
        description: "Assessing fissure integrity, grain density, and color tone uniformness before sawing.",
      },
      {
        number: "02",
        name: "Processing Checks",
        description: "Digital caliper monitoring to enforce strict dimensional calibration tolerances.",
      },
      {
        number: "03",
        name: "Surface & Finish Inspection",
        description: "Glossmeter and tactile evaluation for consistent polish and texture.",
      },
      {
        number: "04",
        name: "Final Quality Review",
        description: "Consecutive slab dry-lay to verify vein continuation and tonal harmony.",
      },
      {
        number: "05",
        name: "Dispatch Preparation",
        description: "Heavy-duty wooden crate packing with protective interleaving for transit.",
      },
    ],
    image: "/images/process/quality-inspection.jpg",
  },

  capabilities: {
    number: "05",
    title: "Built for Scale",
    description:
      "Bring together Rocks Studio's material range, processing infrastructure, finishing capabilities and ability to support project-scale requirements.",
    focus: [
      {
        title: "Material Breadth",
        detail: "Comprehensive stone supply across Granite, Marble, CNC profiles, Onyx, Sandstone, and Cladding.",
      },
      {
        title: "Processing Infrastructure",
        detail: "State-of-the-art Himatnagar facility with multi-cutters, line polishers, and bridge saws.",
      },
      {
        title: "Finishing Capabilities",
        detail: "Full spectrum of mechanical and thermal surface finishes tailored to project specifications.",
      },
      {
        title: "Central Logistics",
        detail: "Ahmedabad warehouse and processing hubs ensuring streamlined stock distribution.",
      },
      {
        title: "Project-Scale Supply",
        detail: "Proven capacity to deliver large commercial and hospitality volumes on schedule.",
      },
    ],
    image: "/images/projects/villa-flooring.jpg",
  },

  cta: {
    title: "Let's Work Together",
    description:
      "Tell us about your project requirements and explore the natural stone materials and finishes available through Rocks Studio.",
    buttonText: "Get a Quote",
    buttonHref: "/contact",
  },
};
