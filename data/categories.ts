import type { ProductCategory } from "@/types";

export const categories: ProductCategory[] = [
  {
    id: "cat-001",
    name: "Marble",
    slug: "marble",
    description:
      "Timeless natural marble sourced from premier quarries. Available in a wide range of colours, veining patterns, and finishes for luxury interiors and architectural facades.",
    image: "/images/categories/marble.jpg",
    sortOrder: 1,
  },
  {
    id: "cat-002",
    name: "Granite",
    slug: "granite",
    description:
      "Exceptionally durable granite slabs suitable for countertops, flooring, and exterior cladding. Resistant to heat, scratching, and staining.",
    image: "/images/categories/granite.jpg",
    sortOrder: 2,
  },
  {
    id: "cat-003",
    name: "CNC",
    slug: "cnc",
    description:
      "Precision CNC-cut and carved natural stone architectural panels, fluting, reliefs, and bespoke stonecraft.",
    image: "/images/categories/cnc.jpg",
    sortOrder: 3,
  },
  {
    id: "cat-004",
    name: "Onyx",
    slug: "onyx",
    description:
      "Translucent luxury onyx featuring dramatic crystalline veining and warm luminescence, ideal for backlit feature installations.",
    image: "/images/categories/onyx.jpg",
    sortOrder: 4,
  },
  {
    id: "cat-005",
    name: "Sandstone",
    slug: "sandstone",
    description:
      "Warm, naturally textured sandstone for exterior cladding, landscape design, and rustic interior applications. Adds organic character to any project.",
    image: "/images/categories/sandstone.jpg",
    sortOrder: 5,
  },
  {
    id: "cat-006",
    name: "Wall Cladding",
    slug: "wall-cladding",
    description:
      "Textural split-face and stacked natural stone cladding panels designed for dramatic interior and exterior feature walls.",
    image: "/images/categories/wall-cladding.jpg",
    sortOrder: 6,
  },
  {
    id: "cat-007",
    name: "Kota",
    slug: "kota",
    description:
      "Fine-grained natural limestone from Kota, Rajasthan, renowned for its calm greenish-grey palette and exceptional durability.",
    image: "/images/categories/kota.jpg",
    sortOrder: 7,
  },
  {
    id: "cat-008",
    name: "Kaddapa",
    slug: "kaddapa",
    description:
      "Authentic dark charcoal-black natural limestone with a rich cleft or honed finish, ideal for resilient architectural paving and interiors.",
    image: "/images/categories/kaddapa.jpg",
    sortOrder: 8,
  },
];
