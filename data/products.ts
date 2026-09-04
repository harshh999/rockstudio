import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "prod-001",
    name: "Statuario White Marble",
    slug: "statuario-white-marble",
    category: "marble",
    shortDescription:
      "Iconic Italian-origin white marble with bold grey veining, prized for luxury interiors.",
    description:
      "Statuario White Marble is one of the most sought-after natural stones in the world. Characterised by its bright white background and dramatic grey-to-gold veining, it transforms any surface into a statement of refined luxury. Ideal for feature walls, kitchen islands, bathroom vanities, and flooring in premium residential and commercial projects.",
    heroImage: "/images/products/statuario-white.jpg",
    gallery: [
      "/images/products/statuario-white.jpg",
      "/images/products/statuario-white-2.jpg",
    ],
    featured: true,
    sortOrder: 1,
  },
  {
    id: "prod-002",
    name: "Calacatta Gold Marble",
    slug: "calacatta-gold-marble",
    category: "marble",
    shortDescription:
      "Warm white marble with distinctive gold and grey veining for opulent interiors.",
    description:
      "Calacatta Gold Marble features a warm white base enriched with sweeping veins of gold and soft grey. This rare marble is the material of choice for architects and designers seeking timeless elegance. Frequently specified for grand foyers, luxury kitchens, and high-end bathroom installations.",
    heroImage: "/images/products/calacatta-gold.jpg",
    gallery: [
      "/images/products/calacatta-gold.jpg",
      "/images/products/calacatta-gold-2.jpg",
    ],
    featured: true,
    sortOrder: 2,
  },
  {
    id: "prod-003",
    name: "Emperador Dark Marble",
    slug: "emperador-dark-marble",
    category: "marble",
    shortDescription:
      "Rich brown marble with fine white veining, adding warmth to contemporary spaces.",
    description:
      "Emperador Dark Marble presents a deep brown background interlaced with delicate white and cream veins. Its warm tones make it ideal for creating inviting yet sophisticated environments. Commonly used for floor cladding, countertops, and accent walls in both residential and hospitality settings.",
    heroImage: "/images/products/emperador-dark.jpg",
    gallery: [
      "/images/products/emperador-dark.jpg",
      "/images/products/emperador-dark-2.jpg",
    ],
    featured: false,
    sortOrder: 3,
  },
  {
    id: "prod-004",
    name: "Black Galaxy Granite",
    slug: "black-galaxy-granite",
    category: "granite",
    shortDescription:
      "Jet-black granite studded with golden flecks, a classic choice for durable surfaces.",
    description:
      "Black Galaxy Granite is a timeless natural stone featuring a deep black background speckled with shimmering gold and bronze flecks. Renowned for its exceptional hardness and low maintenance, it is widely used for kitchen countertops, bar tops, and commercial flooring where both beauty and durability are essential.",
    heroImage: "/images/products/black-galaxy.jpg",
    gallery: [
      "/images/products/black-galaxy.jpg",
      "/images/products/black-galaxy-2.jpg",
    ],
    featured: true,
    sortOrder: 4,
  },
  {
    id: "prod-005",
    name: "Kashmir White Granite",
    slug: "kashmir-white-granite",
    category: "granite",
    shortDescription:
      "Light-toned granite with soft garnet accents, versatile for residential projects.",
    description:
      "Kashmir White Granite is a light-coloured stone with a subtle interplay of grey, cream, and soft garnet-red mineral deposits. Its neutral palette makes it extremely versatile — equally at home in modern minimalist kitchens and traditional architectural facades. Highly durable and resistant to staining.",
    heroImage: "/images/products/kashmir-white.jpg",
    gallery: [
      "/images/products/kashmir-white.jpg",
      "/images/products/kashmir-white-2.jpg",
    ],
    featured: false,
    sortOrder: 5,
  },
  {
    id: "prod-006",
    name: "Tan Brown Granite",
    slug: "tan-brown-granite",
    category: "granite",
    shortDescription:
      "Warm brown granite with dark mineral patterns, ideal for countertops and cladding.",
    description:
      "Tan Brown Granite showcases a rich brown surface with intricate patterns of dark brown and black mineral deposits. This stone combines visual warmth with outstanding physical resilience. Popular for kitchen countertops, exterior cladding, and staircase treads in both residential and commercial applications.",
    heroImage: "/images/products/tan-brown.jpg",
    gallery: [
      "/images/products/tan-brown.jpg",
      "/images/products/tan-brown-2.jpg",
    ],
    featured: false,
    sortOrder: 6,
  },
  {
    id: "prod-007",
    name: "Silver Quartzite",
    slug: "silver-quartzite",
    category: "quartzite",
    shortDescription:
      "Silvery grey quartzite with a natural shimmer, combining beauty with extreme hardness.",
    description:
      "Silver Quartzite is a premium natural stone prized for its silvery grey tones and subtle mica shimmer. Harder than granite, it offers exceptional resistance to scratching and heat, making it ideal for heavy-use surfaces such as kitchen worktops, outdoor cladding, and high-traffic flooring.",
    heroImage: "/images/products/silver-quartzite.jpg",
    gallery: [
      "/images/products/silver-quartzite.jpg",
      "/images/products/silver-quartzite-2.jpg",
    ],
    featured: true,
    sortOrder: 7,
  },
  {
    id: "prod-008",
    name: "Rainbow Sandstone",
    slug: "rainbow-sandstone",
    category: "sandstone",
    shortDescription:
      "Multi-toned sandstone with warm earthy bands, perfect for exterior and landscape design.",
    description:
      "Rainbow Sandstone features layered bands of pink, gold, cream, and terracotta that create a naturally artistic surface. This durable sedimentary stone is widely used for exterior wall cladding, garden paving, pool surrounds, and landscape features where a warm, organic aesthetic is desired.",
    heroImage: "/images/products/rainbow-sandstone.jpg",
    gallery: [
      "/images/products/rainbow-sandstone.jpg",
      "/images/products/rainbow-sandstone-2.jpg",
    ],
    featured: false,
    sortOrder: 8,
  },
  {
    id: "prod-009",
    name: "Architectural CNC Relief Panel",
    slug: "architectural-cnc-relief-panel",
    category: "cnc",
    shortDescription:
      "Precision carved natural stone fluting and geometric textures for statement feature walls.",
    description:
      "Crafted with advanced 5-axis CNC machining, our architectural carved stone panels bring tactile dimension and bespoke artistry to luxury interiors and facades.",
    heroImage: "/images/categories/cnc.jpg",
    gallery: ["/images/categories/cnc.jpg"],
    featured: false,
    sortOrder: 9,
  },
  {
    id: "prod-010",
    name: "Golden Honey Onyx",
    slug: "golden-honey-onyx",
    category: "onyx",
    shortDescription:
      "Translucent amber onyx with crystalline veining, optimized for backlit applications.",
    description:
      "Exquisite natural onyx featuring warm honey, cream, and caramel bands. Highly translucent, making it ideal for illuminated bars, reception portals, and feature panels.",
    heroImage: "/images/categories/onyx.jpg",
    gallery: ["/images/categories/onyx.jpg"],
    featured: false,
    sortOrder: 10,
  },
  {
    id: "prod-011",
    name: "Split-Face Linear Cladding",
    slug: "split-face-linear-cladding",
    category: "wall-cladding",
    shortDescription:
      "Textural stacked natural stone strips for exterior facades and interior feature walls.",
    description:
      "Naturally split stone arranged in linear courses, providing rich shadow play and earthy organic texture for contemporary architectural surfaces.",
    heroImage: "/images/categories/wall-cladding.jpg",
    gallery: ["/images/categories/wall-cladding.jpg"],
    featured: false,
    sortOrder: 11,
  },
  {
    id: "prod-012",
    name: "Blue-Grey Kota Limestone",
    slug: "blue-grey-kota-limestone",
    category: "kota",
    shortDescription:
      "Authentic fine-grained Kota stone with smooth honed finish for flooring and paving.",
    description:
      "Quarried in Rajasthan, Kota stone is celebrated for its natural cool blue-grey tones, fine non-porous structure, and exceptional longevity across heavy-traffic zones.",
    heroImage: "/images/categories/kota.jpg",
    gallery: ["/images/categories/kota.jpg"],
    featured: false,
    sortOrder: 12,
  },
  {
    id: "prod-013",
    name: "Natural Split Kaddapa Stone",
    slug: "natural-split-kaddapa-stone",
    category: "kaddapa",
    shortDescription:
      "Deep charcoal-black limestone with natural cleft texture for durable flooring and steps.",
    description:
      "Authentic South Indian Kaddapa black limestone, known for its deep charcoal hue, non-slip natural split face, and resilience in interior and landscape installations.",
    heroImage: "/images/categories/kaddapa.jpg",
    gallery: ["/images/categories/kaddapa.jpg"],
    featured: false,
    sortOrder: 13,
  },
];
