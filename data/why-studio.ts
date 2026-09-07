import type { WhyStudioTile } from "@/types";

export interface WhyStudioContent {
  eyebrow: string;
  title: string;
  intro: string;
  tiles: WhyStudioTile[];
}

export const whyStudioData: WhyStudioContent = {
  eyebrow: "WHY ROCKS STUDIO",
  title: "Stone, selected with purpose.",
  intro:
    "From sourcing to final delivery, we bring together quality materials, careful processing, and dependable execution for architectural and interior projects.",
  tiles: [
    {
      type: "image",
      title: "Premium Materials",
      description:
        "Established sourcing relationships and carefully selected natural stone.",
      image: "/images/products/statuario-white.jpg",
    },
    {
      type: "image",
      title: "Made for Architecture",
      description:
        "Natural stone that gives interiors and architectural spaces depth, texture and character.",
      image: "/images/projects/villa-flooring.jpg",
    },
    {
      type: "image",
      title: "Reliable Supply",
      description:
        "Dependable fulfilment for residential, hospitality, commercial and larger architectural requirements.",
      image: "/images/projects/corporate-office.jpg",
    },
  ],
};
