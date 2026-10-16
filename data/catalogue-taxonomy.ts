// ============================================================================
// 1. TYPES & INTERFACES
// ============================================================================
import type { ProductCategory, ProductSubcategory, Product } from "@/types";

// ============================================================================
// 4. PRODUCT / MATERIAL RECORDS
// ============================================================================
export const rawCatalogueStructure = {
  "Parking/Walkway": {
    Cobol: [],
    kadapa: [],
    "Green Kota": [],
    "Brown Kota": [],
    "Red Mandana": []
  },
  "Wall Cladding": {}
};

// ============================================================================
// 2. CATEGORY DEFINITIONS
// ============================================================================
const sampleMaterialImages: Record<string, string> = {
  granite: "/HeroPage/Granite_1.png",
  cnc: "/HeroPage/CNC_1.jpg",
  marble: "/HeroPage/Marble_1.png",
  onyx: "/HeroPage/Onyx_1.jpg",
  sandstone: "/HeroPage/Sandstone_1.png",
  "wall-cladding": "/HeroPage/WallCladding_1.jpg",
  "parking-walkway": "/HeroPage/Kota_1.jpg",
};

export const categories: ProductCategory[] = [
  {
    id: "cat-marble",
    name: "Marble",
    slug: "marble",
    description: "Classic imported and Italian marble slabs, featuring distinct veins and elegant translucent tones.",
    image: sampleMaterialImages["marble"],
    sortOrder: 1,
  },
  {
    id: "cat-granite",
    name: "Granite",
    slug: "granite",
    description: "Durable, high-density natural granite sourced from top domestic and international quarries.",
    image: sampleMaterialImages["granite"],
    sortOrder: 2,
  },
  {
    id: "cat-cnc",
    name: "CNC",
    slug: "cnc",
    description: "Precision CNC carved, fluted, inlaid, and 3D architectural stone surfaces.",
    image: sampleMaterialImages["cnc"],
    sortOrder: 3,
  },
  {
    id: "cat-onyx",
    name: "Onyx",
    slug: "onyx",
    description: "Exotic translucent onyx varieties suited for backlit feature walls and luxury accents.",
    image: sampleMaterialImages["onyx"],
    sortOrder: 4,
  },
  {
    id: "cat-sandstone",
    name: "Sand Stone",
    slug: "sandstone",
    description: "Warm, textured sandstone blocks and cobbles for interior and exterior architectural accents.",
    image: sampleMaterialImages["sandstone"],
    sortOrder: 5,
  },
  {
    id: "cat-wall-cladding",
    name: "Wall Cladding",
    slug: "wall-cladding",
    description: "Tactile natural stone, slate, and travertine wall cladding panels and stacked tiles.",
    image: sampleMaterialImages["wall-cladding"],
    sortOrder: 6,
  },
  {
    id: "cat-parking-walkway",
    name: "Parking/Walkway",
    slug: "parking-walkway",
    description: "Durable natural stone paving, cobbles, and limestone slabs engineered for high-traffic parking and walkway applications.",
    image: sampleMaterialImages["parking-walkway"],
    sortOrder: 7,
  },
];

// Generated real products for Granite, Marble, Onyx, Sandstone
const realProducts: Product[] = [
  {
    "id": "prod-adhunik-brown",
    "name": "Adhunik Brown",
    "slug": "adhunik-brown",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Adhunik Brown - Granite",
    "description": "Premium natural Granite material: Adhunik Brown.",
    "heroImage": "/products/Granite-fix/Adhunik brown.png",
    "gallery": [
      "/products/Granite-fix/Adhunik brown.png"
    ],
    "featured": false,
    "sortOrder": 1
  },
  {
    "id": "prod-astodia-ivory",
    "name": "Astodia Ivory",
    "slug": "astodia-ivory",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Astodia Ivory - Granite",
    "description": "Premium natural Granite material: Astodia Ivory.",
    "heroImage": "/products/Granite-fix/Astodia Ivory.jpeg",
    "gallery": [
      "/products/Granite-fix/Astodia Ivory.jpeg"
    ],
    "featured": false,
    "sortOrder": 2
  },
  {
    "id": "prod-bess-paradise",
    "name": "Bess Paradise",
    "slug": "bess-paradise",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Bess Paradise - Granite",
    "description": "Premium natural Granite material: Bess Paradise.",
    "heroImage": "/products/Granite-fix/bess paradise.png",
    "gallery": [
      "/products/Granite-fix/bess paradise.png"
    ],
    "featured": false,
    "sortOrder": 3
  },
  {
    "id": "prod-black-marquina-r",
    "name": "Black Marquina R",
    "slug": "black-marquina-r",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Black Marquina R - Granite",
    "description": "Premium natural Granite material: Black Marquina R.",
    "heroImage": "/products/Granite-fix/Black Marquina R.png",
    "gallery": [
      "/products/Granite-fix/Black Marquina R.png"
    ],
    "featured": false,
    "sortOrder": 4
  },
  {
    "id": "prod-burgandy-white",
    "name": "Burgandy White",
    "slug": "burgandy-white",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Burgandy White - Granite",
    "description": "Premium natural Granite material: Burgandy White.",
    "heroImage": "/products/Granite-fix/Burgandy White .jpeg",
    "gallery": [
      "/products/Granite-fix/Burgandy White .jpeg"
    ],
    "featured": false,
    "sortOrder": 5
  },
  {
    "id": "prod-classic-ivory",
    "name": "Classic Ivory",
    "slug": "classic-ivory",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Classic Ivory - Granite",
    "description": "Premium natural Granite material: Classic Ivory.",
    "heroImage": "/products/Granite-fix/Classic Ivory.png",
    "gallery": [
      "/products/Granite-fix/Classic Ivory.png"
    ],
    "featured": false,
    "sortOrder": 6
  },
  {
    "id": "prod-coffee-pearl",
    "name": "Coffee Pearl",
    "slug": "coffee-pearl",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Coffee Pearl - Granite",
    "description": "Premium natural Granite material: Coffee Pearl.",
    "heroImage": "/products/Granite-fix/Coffee Pearl.jpeg",
    "gallery": [
      "/products/Granite-fix/Coffee Pearl.jpeg"
    ],
    "featured": false,
    "sortOrder": 7
  },
  {
    "id": "prod-d-gray",
    "name": "D Gray",
    "slug": "d-gray",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "D Gray - Granite",
    "description": "Premium natural Granite material: D Gray.",
    "heroImage": "/products/Granite-fix/D Gray.jpeg",
    "gallery": [
      "/products/Granite-fix/D Gray.jpeg"
    ],
    "featured": false,
    "sortOrder": 8
  },
  {
    "id": "prod-diamond-pearl",
    "name": "Diamond Pearl",
    "slug": "diamond-pearl",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Diamond Pearl - Granite",
    "description": "Premium natural Granite material: Diamond Pearl.",
    "heroImage": "/products/Granite-fix/Diamond Pearl.jpeg",
    "gallery": [
      "/products/Granite-fix/Diamond Pearl.jpeg"
    ],
    "featured": false,
    "sortOrder": 9
  },
  {
    "id": "prod-dyna-blue",
    "name": "Dyna Blue",
    "slug": "dyna-blue",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Dyna Blue - Granite",
    "description": "Premium natural Granite material: Dyna Blue.",
    "heroImage": "/products/Granite-fix/dyna blue .png",
    "gallery": [
      "/products/Granite-fix/dyna blue .png"
    ],
    "featured": false,
    "sortOrder": 10
  },
  {
    "id": "prod-forest-brown",
    "name": "Forest Brown",
    "slug": "forest-brown",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Forest Brown - Granite",
    "description": "Premium natural Granite material: Forest Brown.",
    "heroImage": "/products/Granite-fix/Forest Brown.jpeg",
    "gallery": [
      "/products/Granite-fix/Forest Brown.jpeg"
    ],
    "featured": false,
    "sortOrder": 11
  },
  {
    "id": "prod-godhra-gray",
    "name": "Godhra Gray",
    "slug": "godhra-gray",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Godhra Gray - Granite",
    "description": "Premium natural Granite material: Godhra Gray.",
    "heroImage": "/products/Granite-fix/Godhra gray.jpeg",
    "gallery": [
      "/products/Granite-fix/Godhra gray.jpeg"
    ],
    "featured": true,
    "sortOrder": 12
  },
  {
    "id": "prod-gray-paradise",
    "name": "Gray Paradise",
    "slug": "gray-paradise",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Gray Paradise - Granite",
    "description": "Premium natural Granite material: Gray Paradise.",
    "heroImage": "/products/Granite-fix/Gray paradise .png",
    "gallery": [
      "/products/Granite-fix/Gray paradise .png"
    ],
    "featured": false,
    "sortOrder": 13
  },
  {
    "id": "prod-hocco-brown",
    "name": "Hocco Brown",
    "slug": "hocco-brown",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Hocco Brown - Granite",
    "description": "Premium natural Granite material: Hocco Brown.",
    "heroImage": "/products/Granite-fix/Hocco Brown .jpeg",
    "gallery": [
      "/products/Granite-fix/Hocco Brown .jpeg"
    ],
    "featured": false,
    "sortOrder": 14
  },
  {
    "id": "prod-kashmiri-white",
    "name": "Kashmiri White",
    "slug": "kashmiri-white",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Kashmiri White - Granite",
    "description": "Premium natural Granite material: Kashmiri White.",
    "heroImage": "/products/Granite-fix/kashmiri white.png",
    "gallery": [
      "/products/Granite-fix/kashmiri white.png"
    ],
    "featured": false,
    "sortOrder": 15
  },
  {
    "id": "prod-kotda-black",
    "name": "Kotda Black",
    "slug": "kotda-black",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Kotda Black - Granite",
    "description": "Premium natural Granite material: Kotda Black.",
    "heroImage": "/products/Granite-fix/Kotda Black.jpeg",
    "gallery": [
      "/products/Granite-fix/Kotda Black.jpeg"
    ],
    "featured": false,
    "sortOrder": 16
  },
  {
    "id": "prod-kupam-white",
    "name": "Kupam White",
    "slug": "kupam-white",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Kupam White - Granite",
    "description": "Premium natural Granite material: Kupam White.",
    "heroImage": "/products/Granite-fix/kupam white.png",
    "gallery": [
      "/products/Granite-fix/kupam white.png"
    ],
    "featured": false,
    "sortOrder": 17
  },
  {
    "id": "prod-lakha-red",
    "name": "Lakha Red",
    "slug": "lakha-red",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Lakha Red - Granite",
    "description": "Premium natural Granite material: Lakha Red.",
    "heroImage": "/products/Granite-fix/lakha red.png",
    "gallery": [
      "/products/Granite-fix/lakha red.png"
    ],
    "featured": false,
    "sortOrder": 18
  },
  {
    "id": "prod-lava-gray",
    "name": "Lava Gray",
    "slug": "lava-gray",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Lava Gray - Granite",
    "description": "Premium natural Granite material: Lava Gray.",
    "heroImage": "/products/Granite-fix/lava gray.png",
    "gallery": [
      "/products/Granite-fix/lava gray.png"
    ],
    "featured": false,
    "sortOrder": 19
  },
  {
    "id": "prod-melton-brown",
    "name": "Melton Brown",
    "slug": "melton-brown",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Melton Brown - Granite",
    "description": "Premium natural Granite material: Melton Brown.",
    "heroImage": "/products/Granite-fix/Melton Brown.jpeg",
    "gallery": [
      "/products/Granite-fix/Melton Brown.jpeg"
    ],
    "featured": false,
    "sortOrder": 20
  },
  {
    "id": "prod-mountain-brown",
    "name": "Mountain Brown",
    "slug": "mountain-brown",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Mountain Brown - Granite",
    "description": "Premium natural Granite material: Mountain Brown.",
    "heroImage": "/products/Granite-fix/mountain brown.png",
    "gallery": [
      "/products/Granite-fix/mountain brown.png"
    ],
    "featured": false,
    "sortOrder": 21
  },
  {
    "id": "prod-p-white",
    "name": "P White",
    "slug": "p-white",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "P White - Granite",
    "description": "Premium natural Granite material: P White.",
    "heroImage": "/products/Granite-fix/P White .jpeg",
    "gallery": [
      "/products/Granite-fix/P White .jpeg"
    ],
    "featured": false,
    "sortOrder": 22
  },
  {
    "id": "prod-pebble-black",
    "name": "Pebble Black",
    "slug": "pebble-black",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Pebble Black - Granite",
    "description": "Premium natural Granite material: Pebble Black.",
    "heroImage": "/products/Granite-fix/Pebble Black.jpeg",
    "gallery": [
      "/products/Granite-fix/Pebble Black.jpeg"
    ],
    "featured": false,
    "sortOrder": 23
  },
  {
    "id": "prod-platinum-gray",
    "name": "Platinum Gray",
    "slug": "platinum-gray",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Platinum Gray - Granite",
    "description": "Premium natural Granite material: Platinum Gray.",
    "heroImage": "/products/Granite-fix/Platinum Gray.jpeg",
    "gallery": [
      "/products/Granite-fix/Platinum Gray.jpeg"
    ],
    "featured": true,
    "sortOrder": 24
  },
  {
    "id": "prod-prada-gold",
    "name": "Prada Gold",
    "slug": "prada-gold",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Prada Gold - Granite",
    "description": "Premium natural Granite material: Prada Gold.",
    "heroImage": "/products/Granite-fix/Prada Gold.jpeg",
    "gallery": [
      "/products/Granite-fix/Prada Gold.jpeg"
    ],
    "featured": false,
    "sortOrder": 25
  },
  {
    "id": "prod-rajyog-brown",
    "name": "Rajyog Brown",
    "slug": "rajyog-brown",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Rajyog Brown - Granite",
    "description": "Premium natural Granite material: Rajyog Brown.",
    "heroImage": "/products/Granite-fix/Rajyog brown.png",
    "gallery": [
      "/products/Granite-fix/Rajyog brown.png"
    ],
    "featured": false,
    "sortOrder": 26
  },
  {
    "id": "prod-raw-silk",
    "name": "Raw Silk",
    "slug": "raw-silk",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Raw Silk - Granite",
    "description": "Premium natural Granite material: Raw Silk.",
    "heroImage": "/products/Granite-fix/Raw silk.png",
    "gallery": [
      "/products/Granite-fix/Raw silk.png"
    ],
    "featured": false,
    "sortOrder": 27
  },
  {
    "id": "prod-river-white",
    "name": "River White",
    "slug": "river-white",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "River White - Granite",
    "description": "Premium natural Granite material: River White.",
    "heroImage": "/products/Granite-fix/River white.png",
    "gallery": [
      "/products/Granite-fix/River white.png"
    ],
    "featured": false,
    "sortOrder": 28
  },
  {
    "id": "prod-royal-brown",
    "name": "Royal Brown",
    "slug": "royal-brown",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Royal Brown - Granite",
    "description": "Premium natural Granite material: Royal Brown.",
    "heroImage": "/products/Granite-fix/Royal brown.png",
    "gallery": [
      "/products/Granite-fix/Royal brown.png"
    ],
    "featured": false,
    "sortOrder": 29
  },
  {
    "id": "prod-royal-gold",
    "name": "Royal Gold",
    "slug": "royal-gold",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Royal Gold - Granite",
    "description": "Premium natural Granite material: Royal Gold.",
    "heroImage": "/products/Granite-fix/royal gold.png",
    "gallery": [
      "/products/Granite-fix/royal gold.png"
    ],
    "featured": false,
    "sortOrder": 30
  },
  {
    "id": "prod-sk-blue",
    "name": "SK Blue",
    "slug": "sk-blue",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "SK Blue - Granite",
    "description": "Premium natural Granite material: SK Blue.",
    "heroImage": "/products/Granite-fix/SK Blue.png",
    "gallery": [
      "/products/Granite-fix/SK Blue.png"
    ],
    "featured": false,
    "sortOrder": 31
  },
  {
    "id": "prod-silky-silver",
    "name": "Silky Silver",
    "slug": "silky-silver",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Silky Silver - Granite",
    "description": "Premium natural Granite material: Silky Silver.",
    "heroImage": "/products/Granite-fix/silky silver.png",
    "gallery": [
      "/products/Granite-fix/silky silver.png"
    ],
    "featured": false,
    "sortOrder": 32
  },
  {
    "id": "prod-silver-river",
    "name": "Silver River",
    "slug": "silver-river",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Silver River - Granite",
    "description": "Premium natural Granite material: Silver River.",
    "heroImage": "/products/Granite-fix/Silver River.jpeg",
    "gallery": [
      "/products/Granite-fix/Silver River.jpeg"
    ],
    "featured": false,
    "sortOrder": 33
  },
  {
    "id": "prod-steel-gray",
    "name": "Steel Gray",
    "slug": "steel-gray",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Steel Gray - Granite",
    "description": "Premium natural Granite material: Steel Gray.",
    "heroImage": "/products/Granite-fix/steel gray .png",
    "gallery": [
      "/products/Granite-fix/steel gray .png"
    ],
    "featured": false,
    "sortOrder": 34
  },
  {
    "id": "prod-swiss-brown",
    "name": "Swiss Brown",
    "slug": "swiss-brown",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Swiss Brown - Granite",
    "description": "Premium natural Granite material: Swiss Brown.",
    "heroImage": "/products/Granite-fix/swiss brown.png",
    "gallery": [
      "/products/Granite-fix/swiss brown.png"
    ],
    "featured": false,
    "sortOrder": 35
  },
  {
    "id": "prod-symphony-ivory",
    "name": "Symphony Ivory",
    "slug": "symphony-ivory",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Symphony Ivory - Granite",
    "description": "Premium natural Granite material: Symphony Ivory.",
    "heroImage": "/products/Granite-fix/Symphony Ivory .jpeg",
    "gallery": [
      "/products/Granite-fix/Symphony Ivory .jpeg"
    ],
    "featured": true,
    "sortOrder": 36
  },
  {
    "id": "prod-walet-paradise",
    "name": "Walet Paradise",
    "slug": "walet-paradise",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Walet Paradise - Granite",
    "description": "Premium natural Granite material: Walet Paradise.",
    "heroImage": "/products/Granite-fix/walet paradise.png",
    "gallery": [
      "/products/Granite-fix/walet paradise.png"
    ],
    "featured": false,
    "sortOrder": 37
  },
  {
    "id": "prod-ytd-6",
    "name": "YTD 6",
    "slug": "ytd-6",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "YTD 6 - Granite",
    "description": "Premium natural Granite material: YTD 6.",
    "heroImage": "/products/Granite-fix/YTD 6.jpeg",
    "gallery": [
      "/products/Granite-fix/YTD 6.jpeg"
    ],
    "featured": false,
    "sortOrder": 38
  },
  {
    "id": "prod-zubrana-gray",
    "name": "Zubrana Gray",
    "slug": "zubrana-gray",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Zubrana Gray - Granite",
    "description": "Premium natural Granite material: Zubrana Gray.",
    "heroImage": "/products/Granite-fix/Zubrana Gray.jpeg",
    "gallery": [
      "/products/Granite-fix/Zubrana Gray.jpeg"
    ],
    "featured": false,
    "sortOrder": 39
  },
  {
    "id": "prod-abu-black",
    "name": "Abu Black",
    "slug": "abu-black",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Abu Black - Marble",
    "description": "Premium natural Marble material: Abu Black.",
    "heroImage": "/products/Marbles/abu-black.png",
    "gallery": [
      "/products/Marbles/abu-black.png"
    ],
    "featured": false,
    "sortOrder": 40
  },
  {
    "id": "prod-agora-beige",
    "name": "Agora Beige",
    "slug": "agora-beige",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Agora Beige - Marble",
    "description": "Premium natural Marble material: Agora Beige.",
    "heroImage": "/products/Marbles/agora-beige.png",
    "gallery": [
      "/products/Marbles/agora-beige.png"
    ],
    "featured": false,
    "sortOrder": 41
  },
  {
    "id": "prod-arctic-white-b",
    "name": "Arctic White",
    "slug": "arctic-white-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Arctic White - Marble",
    "description": "Premium natural Marble material: Arctic White.",
    "heroImage": "/products/Marbles/arctic-white.png",
    "gallery": [
      "/products/Marbles/arctic-white.png"
    ],
    "featured": false,
    "sortOrder": 42
  },
  {
    "id": "prod-armani-bronze",
    "name": "Armani Bronze",
    "slug": "armani-bronze",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Armani Bronze - Marble",
    "description": "Premium natural Marble material: Armani Bronze.",
    "heroImage": "/products/Marbles/armani-bronze.png",
    "gallery": [
      "/products/Marbles/armani-bronze.png"
    ],
    "featured": false,
    "sortOrder": 43
  },
  {
    "id": "prod-armani-brown-it",
    "name": "Armani Brown",
    "slug": "armani-brown-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Armani Brown - Marble",
    "description": "Premium natural Marble material: Armani Brown.",
    "heroImage": "/products/Marbles/armani-brown.png",
    "gallery": [
      "/products/Marbles/armani-brown.png"
    ],
    "featured": false,
    "sortOrder": 44
  },
  {
    "id": "prod-ash-gray-it",
    "name": "Ash Gray",
    "slug": "ash-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Ash Gray - Marble",
    "description": "Premium natural Marble material: Ash Gray.",
    "heroImage": "/products/Marbles/ash-gray.png",
    "gallery": [
      "/products/Marbles/ash-gray.png"
    ],
    "featured": false,
    "sortOrder": 45
  },
  {
    "id": "prod-avocado-leather-finish-b",
    "name": "Avocado Leather Finish",
    "slug": "avocado-leather-finish-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Avocado Leather Finish - Marble",
    "description": "Premium natural Marble material: Avocado Leather Finish.",
    "heroImage": "/products/Marbles/avocado-leather-finish.png",
    "gallery": [
      "/products/Marbles/avocado-leather-finish.png"
    ],
    "featured": false,
    "sortOrder": 46
  },
  {
    "id": "prod-bardilo-gray-it",
    "name": "Bardilo Gray",
    "slug": "bardilo-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Bardilo Gray - Marble",
    "description": "Premium natural Marble material: Bardilo Gray.",
    "heroImage": "/products/Marbles/bardilo-gray.png",
    "gallery": [
      "/products/Marbles/bardilo-gray.png"
    ],
    "featured": false,
    "sortOrder": 47
  },
  {
    "id": "prod-belecimo-it",
    "name": "Belecimo",
    "slug": "belecimo-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Belecimo - Marble",
    "description": "Premium natural Marble material: Belecimo.",
    "heroImage": "/products/Marbles/belecimo.png",
    "gallery": [
      "/products/Marbles/belecimo.png"
    ],
    "featured": true,
    "sortOrder": 48
  },
  {
    "id": "prod-belecimo-new-it",
    "name": "Belecimo New",
    "slug": "belecimo-new-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Belecimo New - Marble",
    "description": "Premium natural Marble material: Belecimo New.",
    "heroImage": "/products/Marbles/belecimo-new.png",
    "gallery": [
      "/products/Marbles/belecimo-new.png"
    ],
    "featured": false,
    "sortOrder": 49
  },
  {
    "id": "prod-black-it",
    "name": "Black",
    "slug": "black-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Black - Marble",
    "description": "Premium natural Marble material: Black.",
    "heroImage": "/products/Marbles/black.png",
    "gallery": [
      "/products/Marbles/black.png"
    ],
    "featured": false,
    "sortOrder": 50
  },
  {
    "id": "prod-black-antique",
    "name": "Black Antique",
    "slug": "black-antique",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Black Antique - Marble",
    "description": "Premium natural Marble material: Black Antique.",
    "heroImage": "/products/Marbles/black-antique.png",
    "gallery": [
      "/products/Marbles/black-antique.png"
    ],
    "featured": false,
    "sortOrder": 51
  },
  {
    "id": "prod-black-marquina",
    "name": "Black Marquina",
    "slug": "black-marquina",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Black Marquina - Marble",
    "description": "Premium natural Marble material: Black Marquina.",
    "heroImage": "/products/Marbles/black-marquina.png",
    "gallery": [
      "/products/Marbles/black-marquina.png"
    ],
    "featured": false,
    "sortOrder": 52
  },
  {
    "id": "prod-black-rose-it",
    "name": "Black Rose",
    "slug": "black-rose-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Black Rose - Marble",
    "description": "Premium natural Marble material: Black Rose.",
    "heroImage": "/products/Marbles/black-rose.png",
    "gallery": [
      "/products/Marbles/black-rose.png"
    ],
    "featured": false,
    "sortOrder": 53
  },
  {
    "id": "prod-blue-bresiait",
    "name": "Blue Bresia",
    "slug": "blue-bresiait",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Blue Bresia - Marble",
    "description": "Premium natural Marble material: Blue Bresia.",
    "heroImage": "/products/Marbles/blue-bresia.png",
    "gallery": [
      "/products/Marbles/blue-bresia.png"
    ],
    "featured": false,
    "sortOrder": 54
  },
  {
    "id": "prod-brazillian-ytd-1",
    "name": "Brazillian YTD 1",
    "slug": "brazillian-ytd-1",
    "category": "marble",
    "subcategory": "yet-to-decide",
    "shortDescription": "Brazillian YTD 1 - Marble",
    "description": "Premium natural Marble material: Brazillian YTD 1.",
    "heroImage": "/products/Marbles/brazillian-ytd-1.png",
    "gallery": [
      "/products/Marbles/brazillian-ytd-1.png"
    ],
    "featured": false,
    "sortOrder": 55
  },
  {
    "id": "prod-cnc-fluted-indian-ytd-2",
    "name": "CNC Fluted YTD 2",
    "slug": "cnc-fluted-indian-ytd-2",
    "category": "marble",
    "subcategory": "yet-to-decide",
    "shortDescription": "CNC Fluted YTD 2 - Marble",
    "description": "Premium natural Marble material: CNC Fluted YTD 2.",
    "heroImage": "/products/Marbles/cnc-fluted-ytd-2.png",
    "gallery": [
      "/products/Marbles/cnc-fluted-ytd-2.png"
    ],
    "featured": false,
    "sortOrder": 56
  },
  {
    "id": "prod-cnc-white-ytd",
    "name": "CNC White YTD",
    "slug": "cnc-white-ytd",
    "category": "marble",
    "subcategory": "yet-to-decide",
    "shortDescription": "CNC White YTD - Marble",
    "description": "Premium natural Marble material: CNC White YTD.",
    "heroImage": "/products/Marbles/cnc-white-ytd.png",
    "gallery": [
      "/products/Marbles/cnc-white-ytd.png"
    ],
    "featured": false,
    "sortOrder": 57
  },
  {
    "id": "prod-calcutta-white-b",
    "name": "Calcutta White",
    "slug": "calcutta-white-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Calcutta White - Marble",
    "description": "Premium natural Marble material: Calcutta White.",
    "heroImage": "/products/Marbles/calcutta-white.png",
    "gallery": [
      "/products/Marbles/calcutta-white.png"
    ],
    "featured": false,
    "sortOrder": 58
  },
  {
    "id": "prod-camel-brown-it",
    "name": "Camel Brown",
    "slug": "camel-brown-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Camel Brown - Marble",
    "description": "Premium natural Marble material: Camel Brown.",
    "heroImage": "/products/Marbles/camel-brown.png",
    "gallery": [
      "/products/Marbles/camel-brown.png"
    ],
    "featured": false,
    "sortOrder": 59
  },
  {
    "id": "prod-cardian-gray-it",
    "name": "Cardian Gray",
    "slug": "cardian-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Cardian Gray - Marble",
    "description": "Premium natural Marble material: Cardian Gray.",
    "heroImage": "/products/Marbles/cardian-gray.png",
    "gallery": [
      "/products/Marbles/cardian-gray.png"
    ],
    "featured": true,
    "sortOrder": 60
  },
  {
    "id": "prod-cora-cabana-b",
    "name": "Cora Cabana",
    "slug": "cora-cabana-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Cora Cabana - Marble",
    "description": "Premium natural Marble material: Cora Cabana.",
    "heroImage": "/products/Marbles/cora-cabana.png",
    "gallery": [
      "/products/Marbles/cora-cabana.png"
    ],
    "featured": false,
    "sortOrder": 61
  },
  {
    "id": "prod-cream-italian",
    "name": "Cream Italian",
    "slug": "cream-italian",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Cream Italian - Marble",
    "description": "Premium natural Marble material: Cream Italian.",
    "heroImage": "/products/Marbles/cream-italian.png",
    "gallery": [
      "/products/Marbles/cream-italian.png"
    ],
    "featured": false,
    "sortOrder": 62
  },
  {
    "id": "prod-cream-karaman-it",
    "name": "Cream Karaman",
    "slug": "cream-karaman-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Cream Karaman - Marble",
    "description": "Premium natural Marble material: Cream Karaman.",
    "heroImage": "/products/Marbles/cream-karaman.png",
    "gallery": [
      "/products/Marbles/cream-karaman.png"
    ],
    "featured": false,
    "sortOrder": 63
  },
  {
    "id": "prod-crystal-lizato-b",
    "name": "Crystal Lizato",
    "slug": "crystal-lizato-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Crystal Lizato - Marble",
    "description": "Premium natural Marble material: Crystal Lizato.",
    "heroImage": "/products/Marbles/crystal-lizato.png",
    "gallery": [
      "/products/Marbles/crystal-lizato.png"
    ],
    "featured": false,
    "sortOrder": 64
  },
  {
    "id": "prod-cygnus-black-b",
    "name": "Cygnus Black",
    "slug": "cygnus-black-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Cygnus Black - Marble",
    "description": "Premium natural Marble material: Cygnus Black.",
    "heroImage": "/products/Marbles/cygnus-black.png",
    "gallery": [
      "/products/Marbles/cygnus-black.png"
    ],
    "featured": false,
    "sortOrder": 65
  },
  {
    "id": "prod-emotion-gray-it",
    "name": "Emotion Gray",
    "slug": "emotion-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Emotion Gray - Marble",
    "description": "Premium natural Marble material: Emotion Gray.",
    "heroImage": "/products/Marbles/emotion-gray.png",
    "gallery": [
      "/products/Marbles/emotion-gray.png"
    ],
    "featured": false,
    "sortOrder": 66
  },
  {
    "id": "prod-ess-gray-it",
    "name": "Ess Gray",
    "slug": "ess-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Ess Gray - Marble",
    "description": "Premium natural Marble material: Ess Gray.",
    "heroImage": "/products/Marbles/ess-gray.png",
    "gallery": [
      "/products/Marbles/ess-gray.png"
    ],
    "featured": false,
    "sortOrder": 67
  },
  {
    "id": "prod-extreme-gold-b",
    "name": "Extreme Gold",
    "slug": "extreme-gold-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Extreme Gold - Marble",
    "description": "Premium natural Marble material: Extreme Gold.",
    "heroImage": "/products/Marbles/extreme-gold.png",
    "gallery": [
      "/products/Marbles/extreme-gold.png"
    ],
    "featured": false,
    "sortOrder": 68
  },
  {
    "id": "prod-fairyland-blue-it",
    "name": "Fairyland Blue",
    "slug": "fairyland-blue-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Fairyland Blue - Marble",
    "description": "Premium natural Marble material: Fairyland Blue.",
    "heroImage": "/products/Marbles/fairyland-blue.png",
    "gallery": [
      "/products/Marbles/fairyland-blue.png"
    ],
    "featured": false,
    "sortOrder": 69
  },
  {
    "id": "prod-fendi-gray-it",
    "name": "Fendi Gray",
    "slug": "fendi-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Fendi Gray - Marble",
    "description": "Premium natural Marble material: Fendi Gray.",
    "heroImage": "/products/Marbles/fendi-gray.png",
    "gallery": [
      "/products/Marbles/fendi-gray.png"
    ],
    "featured": false,
    "sortOrder": 70
  },
  {
    "id": "prod-french-black-b",
    "name": "French Black",
    "slug": "french-black-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "French Black - Marble",
    "description": "Premium natural Marble material: French Black.",
    "heroImage": "/products/Marbles/french-black.png",
    "gallery": [
      "/products/Marbles/french-black.png"
    ],
    "featured": false,
    "sortOrder": 71
  },
  {
    "id": "prod-givenchy-white-b",
    "name": "Givenchy White",
    "slug": "givenchy-white-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Givenchy White - Marble",
    "description": "Premium natural Marble material: Givenchy White.",
    "heroImage": "/products/Marbles/givenchy-white.png",
    "gallery": [
      "/products/Marbles/givenchy-white.png"
    ],
    "featured": true,
    "sortOrder": 72
  },
  {
    "id": "prod-glitter-brown-b",
    "name": "Glitter Brown",
    "slug": "glitter-brown-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Glitter Brown - Marble",
    "description": "Premium natural Marble material: Glitter Brown.",
    "heroImage": "/products/Marbles/glitter-brown.png",
    "gallery": [
      "/products/Marbles/glitter-brown.png"
    ],
    "featured": false,
    "sortOrder": 73
  },
  {
    "id": "prod-golden-spider-it",
    "name": "Golden Spider",
    "slug": "golden-spider-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Golden Spider - Marble",
    "description": "Premium natural Marble material: Golden Spider.",
    "heroImage": "/products/Marbles/golden-spider.png",
    "gallery": [
      "/products/Marbles/golden-spider.png"
    ],
    "featured": false,
    "sortOrder": 74
  },
  {
    "id": "prod-gray-horizon-b",
    "name": "Gray Horizon",
    "slug": "gray-horizon-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Gray Horizon - Marble",
    "description": "Premium natural Marble material: Gray Horizon.",
    "heroImage": "/products/Marbles/gray-horizon.png",
    "gallery": [
      "/products/Marbles/gray-horizon.png"
    ],
    "featured": false,
    "sortOrder": 75
  },
  {
    "id": "prod-gray-milano-it",
    "name": "Gray Milano",
    "slug": "gray-milano-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Gray Milano - Marble",
    "description": "Premium natural Marble material: Gray Milano.",
    "heroImage": "/products/Marbles/gray-milano.png",
    "gallery": [
      "/products/Marbles/gray-milano.png"
    ],
    "featured": false,
    "sortOrder": 76
  },
  {
    "id": "prod-gray-wave-it",
    "name": "Gray Wave",
    "slug": "gray-wave-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Gray Wave - Marble",
    "description": "Premium natural Marble material: Gray Wave.",
    "heroImage": "/products/Marbles/gray-wave.png",
    "gallery": [
      "/products/Marbles/gray-wave.png"
    ],
    "featured": false,
    "sortOrder": 77
  },
  {
    "id": "prod-green-canyon-b",
    "name": "Green Canyon",
    "slug": "green-canyon-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Green Canyon - Marble",
    "description": "Premium natural Marble material: Green Canyon.",
    "heroImage": "/products/Marbles/green-canyon.png",
    "gallery": [
      "/products/Marbles/green-canyon.png"
    ],
    "featured": false,
    "sortOrder": 78
  },
  {
    "id": "prod-ice-gray-it",
    "name": "Ice Gray",
    "slug": "ice-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Ice Gray - Marble",
    "description": "Premium natural Marble material: Ice Gray.",
    "heroImage": "/products/Marbles/ice-gray.png",
    "gallery": [
      "/products/Marbles/ice-gray.png"
    ],
    "featured": false,
    "sortOrder": 79
  },
  {
    "id": "prod-imperial-gray-indian",
    "name": "Imperial Gray",
    "slug": "imperial-gray-indian",
    "category": "marble",
    "subcategory": "indian-marble",
    "shortDescription": "Imperial Gray - Marble",
    "description": "Premium natural Marble material: Imperial Gray.",
    "heroImage": "/products/Marbles/imperial-gray.png",
    "gallery": [
      "/products/Marbles/imperial-gray.png"
    ],
    "featured": false,
    "sortOrder": 80
  },
  {
    "id": "prod-lime-brown-it",
    "name": "Lime Brown",
    "slug": "lime-brown-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Lime Brown - Marble",
    "description": "Premium natural Marble material: Lime Brown.",
    "heroImage": "/products/Marbles/lime-brown.png",
    "gallery": [
      "/products/Marbles/lime-brown.png"
    ],
    "featured": false,
    "sortOrder": 81
  },
  {
    "id": "prod-lime-white",
    "name": "Lime White",
    "slug": "lime-white",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Lime White - Marble",
    "description": "Premium natural Marble material: Lime White.",
    "heroImage": "/products/Marbles/lime-white.png",
    "gallery": [
      "/products/Marbles/lime-white.png"
    ],
    "featured": false,
    "sortOrder": 82
  },
  {
    "id": "prod-london-gray-b",
    "name": "London Gray",
    "slug": "london-gray-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "London Gray - Marble",
    "description": "Premium natural Marble material: London Gray.",
    "heroImage": "/products/Marbles/london-gray.png",
    "gallery": [
      "/products/Marbles/london-gray.png"
    ],
    "featured": false,
    "sortOrder": 83
  },
  {
    "id": "prod-luna-gray-it",
    "name": "Luna Gray",
    "slug": "luna-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Luna Gray - Marble",
    "description": "Premium natural Marble material: Luna Gray.",
    "heroImage": "/products/Marbles/luna-gray.png",
    "gallery": [
      "/products/Marbles/luna-gray.png"
    ],
    "featured": true,
    "sortOrder": 84
  },
  {
    "id": "prod-maori-b",
    "name": "Maori",
    "slug": "maori-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Maori - Marble",
    "description": "Premium natural Marble material: Maori.",
    "heroImage": "/products/Marbles/maori.png",
    "gallery": [
      "/products/Marbles/maori.png"
    ],
    "featured": false,
    "sortOrder": 85
  },
  {
    "id": "prod-marco-polo",
    "name": "Marco Polo",
    "slug": "marco-polo",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Marco Polo - Marble",
    "description": "Premium natural Marble material: Marco Polo.",
    "heroImage": "/products/Marbles/marco-polo.png",
    "gallery": [
      "/products/Marbles/marco-polo.png"
    ],
    "featured": false,
    "sortOrder": 86
  },
  {
    "id": "prod-micro-angelo-it",
    "name": "Micro Angelo",
    "slug": "micro-angelo-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Micro Angelo - Marble",
    "description": "Premium natural Marble material: Micro Angelo.",
    "heroImage": "/products/Marbles/micro-angelo.png",
    "gallery": [
      "/products/Marbles/micro-angelo.png"
    ],
    "featured": false,
    "sortOrder": 87
  },
  {
    "id": "prod-mocha-gray-it",
    "name": "Mocha Gray",
    "slug": "mocha-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Mocha Gray - Marble",
    "description": "Premium natural Marble material: Mocha Gray.",
    "heroImage": "/products/Marbles/mocha-gray.png",
    "gallery": [
      "/products/Marbles/mocha-gray.png"
    ],
    "featured": false,
    "sortOrder": 88
  },
  {
    "id": "prod-moon-cream",
    "name": "Moon Cream",
    "slug": "moon-cream",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Moon Cream - Marble",
    "description": "Premium natural Marble material: Moon Cream.",
    "heroImage": "/products/Marbles/moon-cream.png",
    "gallery": [
      "/products/Marbles/moon-cream.png"
    ],
    "featured": false,
    "sortOrder": 89
  },
  {
    "id": "prod-moon-gray-it",
    "name": "Moon Gray",
    "slug": "moon-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Moon Gray - Marble",
    "description": "Premium natural Marble material: Moon Gray.",
    "heroImage": "/products/Marbles/moon-gray.png",
    "gallery": [
      "/products/Marbles/moon-gray.png"
    ],
    "featured": false,
    "sortOrder": 90
  },
  {
    "id": "prod-multi-red-it",
    "name": "Multi Red",
    "slug": "multi-red-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Multi Red - Marble",
    "description": "Premium natural Marble material: Multi Red.",
    "heroImage": "/products/Marbles/multi-red.png",
    "gallery": [
      "/products/Marbles/multi-red.png"
    ],
    "featured": false,
    "sortOrder": 91
  },
  {
    "id": "prod-mystic-green-indian-exotic",
    "name": "Mystic Green",
    "slug": "mystic-green-indian-exotic",
    "category": "marble",
    "subcategory": "indian-marble",
    "shortDescription": "Mystic Green - Marble",
    "description": "Premium natural Marble material: Mystic Green.",
    "heroImage": "/products/Marbles/mystic-green.png",
    "gallery": [
      "/products/Marbles/mystic-green.png"
    ],
    "featured": false,
    "sortOrder": 92
  },
  {
    "id": "prod-noche-travantine-it",
    "name": "Noche Travertine",
    "slug": "noche-travantine-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Noche Travertine - Marble",
    "description": "Premium natural Marble material: Noche Travertine.",
    "heroImage": "/products/Marbles/noche-travertine.png",
    "gallery": [
      "/products/Marbles/noche-travertine.png"
    ],
    "featured": false,
    "sortOrder": 93
  },
  {
    "id": "prod-nordic-gray-it",
    "name": "Nordic Gray",
    "slug": "nordic-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Nordic Gray - Marble",
    "description": "Premium natural Marble material: Nordic Gray.",
    "heroImage": "/products/Marbles/nordic-gray.png",
    "gallery": [
      "/products/Marbles/nordic-gray.png"
    ],
    "featured": false,
    "sortOrder": 94
  },
  {
    "id": "prod-ocean-blue-b",
    "name": "Ocean Blue",
    "slug": "ocean-blue-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Ocean Blue - Marble",
    "description": "Premium natural Marble material: Ocean Blue.",
    "heroImage": "/products/Marbles/ocean-blue.png",
    "gallery": [
      "/products/Marbles/ocean-blue.png"
    ],
    "featured": false,
    "sortOrder": 95
  },
  {
    "id": "prod-ocean-green-b",
    "name": "Ocean Green",
    "slug": "ocean-green-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Ocean Green - Marble",
    "description": "Premium natural Marble material: Ocean Green.",
    "heroImage": "/products/Marbles/ocean-green.png",
    "gallery": [
      "/products/Marbles/ocean-green.png"
    ],
    "featured": true,
    "sortOrder": 96
  },
  {
    "id": "prod-panda-white-it",
    "name": "Panda White",
    "slug": "panda-white-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Panda White - Marble",
    "description": "Premium natural Marble material: Panda White.",
    "heroImage": "/products/Marbles/panda-white.png",
    "gallery": [
      "/products/Marbles/panda-white.png"
    ],
    "featured": false,
    "sortOrder": 97
  },
  {
    "id": "prod-peach-white-p-b",
    "name": "Peach White P",
    "slug": "peach-white-p-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Peach White P - Marble",
    "description": "Premium natural Marble material: Peach White P.",
    "heroImage": "/products/Marbles/peach-white-p.png",
    "gallery": [
      "/products/Marbles/peach-white-p.png"
    ],
    "featured": false,
    "sortOrder": 98
  },
  {
    "id": "prod-peach-white-b",
    "name": "Peach White",
    "slug": "peach-white-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Peach White - Marble",
    "description": "Premium natural Marble material: Peach White.",
    "heroImage": "/products/Marbles/peach-white.png",
    "gallery": [
      "/products/Marbles/peach-white.png"
    ],
    "featured": false,
    "sortOrder": 99
  },
  {
    "id": "prod-pengia-indian-exotic",
    "name": "Pengia",
    "slug": "pengia-indian-exotic",
    "category": "marble",
    "subcategory": "indian-marble",
    "shortDescription": "Pengia - Marble",
    "description": "Premium natural Marble material: Pengia.",
    "heroImage": "/products/Marbles/pengia.png",
    "gallery": [
      "/products/Marbles/pengia.png"
    ],
    "featured": false,
    "sortOrder": 100
  },
  {
    "id": "prod-polaris-green-b",
    "name": "Polaris Green",
    "slug": "polaris-green-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Polaris Green - Marble",
    "description": "Premium natural Marble material: Polaris Green.",
    "heroImage": "/products/Marbles/polaris-green.png",
    "gallery": [
      "/products/Marbles/polaris-green.png"
    ],
    "featured": false,
    "sortOrder": 101
  },
  {
    "id": "prod-pulpis-brown",
    "name": "Pulpis Brown",
    "slug": "pulpis-brown",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Pulpis Brown - Marble",
    "description": "Premium natural Marble material: Pulpis Brown.",
    "heroImage": "/products/Marbles/pulpis-brown.png",
    "gallery": [
      "/products/Marbles/pulpis-brown.png"
    ],
    "featured": false,
    "sortOrder": 102
  },
  {
    "id": "prod-purple-nest-b",
    "name": "Purple Nest",
    "slug": "purple-nest-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Purple Nest - Marble",
    "description": "Premium natural Marble material: Purple Nest.",
    "heroImage": "/products/Marbles/purple-nest.png",
    "gallery": [
      "/products/Marbles/purple-nest.png"
    ],
    "featured": false,
    "sortOrder": 103
  },
  {
    "id": "prod-rafelo-b",
    "name": "Rafelo",
    "slug": "rafelo-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Rafelo - Marble",
    "description": "Premium natural Marble material: Rafelo.",
    "heroImage": "/products/Marbles/rafelo.png",
    "gallery": [
      "/products/Marbles/rafelo.png"
    ],
    "featured": false,
    "sortOrder": 104
  },
  {
    "id": "prod-regal-beige-it",
    "name": "Regal Beige",
    "slug": "regal-beige-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Regal Beige - Marble",
    "description": "Premium natural Marble material: Regal Beige.",
    "heroImage": "/products/Marbles/regal-beige.png",
    "gallery": [
      "/products/Marbles/regal-beige.png"
    ],
    "featured": false,
    "sortOrder": 105
  },
  {
    "id": "prod-srk-black",
    "name": "SRK Black",
    "slug": "srk-black",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "SRK Black - Marble",
    "description": "Premium natural Marble material: SRK Black.",
    "heroImage": "/products/Marbles/srk-black.png",
    "gallery": [
      "/products/Marbles/srk-black.png"
    ],
    "featured": false,
    "sortOrder": 106
  },
  {
    "id": "prod-sangrila-leather-finish-b",
    "name": "Sangrila Leather Finish",
    "slug": "sangrila-leather-finish-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Sangrila Leather Finish - Marble",
    "description": "Premium natural Marble material: Sangrila Leather Finish.",
    "heroImage": "/products/Marbles/sangrila-leather-finish.png",
    "gallery": [
      "/products/Marbles/sangrila-leather-finish.png"
    ],
    "featured": false,
    "sortOrder": 107
  },
  {
    "id": "prod-saran-koli",
    "name": "Saran Koli",
    "slug": "saran-koli",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Saran Koli - Marble",
    "description": "Premium natural Marble material: Saran Koli.",
    "heroImage": "/products/Marbles/saran-koli.png",
    "gallery": [
      "/products/Marbles/saran-koli.png"
    ],
    "featured": true,
    "sortOrder": 108
  },
  {
    "id": "prod-silver-traventine-it",
    "name": "Silver Travertine",
    "slug": "silver-traventine-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Silver Travertine - Marble",
    "description": "Premium natural Marble material: Silver Travertine.",
    "heroImage": "/products/Marbles/silver-travertine.png",
    "gallery": [
      "/products/Marbles/silver-travertine.png"
    ],
    "featured": false,
    "sortOrder": 109
  },
  {
    "id": "prod-snake-black-indian",
    "name": "Snake Black",
    "slug": "snake-black-indian",
    "category": "marble",
    "subcategory": "indian-marble",
    "shortDescription": "Snake Black - Marble",
    "description": "Premium natural Marble material: Snake Black.",
    "heroImage": "/products/Marbles/snake-black.png",
    "gallery": [
      "/products/Marbles/snake-black.png"
    ],
    "featured": false,
    "sortOrder": 110
  },
  {
    "id": "prod-snow-white-it",
    "name": "Snow White",
    "slug": "snow-white-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Snow White - Marble",
    "description": "Premium natural Marble material: Snow White.",
    "heroImage": "/products/Marbles/snow-white.png",
    "gallery": [
      "/products/Marbles/snow-white.png"
    ],
    "featured": false,
    "sortOrder": 111
  },
  {
    "id": "prod-spider-green",
    "name": "Spider Green",
    "slug": "spider-green",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Spider Green - Marble",
    "description": "Premium natural Marble material: Spider Green.",
    "heroImage": "/products/Marbles/spider-green.png",
    "gallery": [
      "/products/Marbles/spider-green.png"
    ],
    "featured": false,
    "sortOrder": 112
  },
  {
    "id": "prod-stataurio-it",
    "name": "Stataurio",
    "slug": "stataurio-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Stataurio - Marble",
    "description": "Premium natural Marble material: Stataurio.",
    "heroImage": "/products/Marbles/stataurio.png",
    "gallery": [
      "/products/Marbles/stataurio.png"
    ],
    "featured": false,
    "sortOrder": 113
  },
  {
    "id": "prod-sunset-blue-b",
    "name": "Sunset Blue",
    "slug": "sunset-blue-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Sunset Blue - Marble",
    "description": "Premium natural Marble material: Sunset Blue.",
    "heroImage": "/products/Marbles/sunset-blue.png",
    "gallery": [
      "/products/Marbles/sunset-blue.png"
    ],
    "featured": false,
    "sortOrder": 114
  },
  {
    "id": "prod-super-white-b",
    "name": "Super White",
    "slug": "super-white-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Super White - Marble",
    "description": "Premium natural Marble material: Super White.",
    "heroImage": "/products/Marbles/super-white.png",
    "gallery": [
      "/products/Marbles/super-white.png"
    ],
    "featured": false,
    "sortOrder": 115
  },
  {
    "id": "prod-swarowski-white-v",
    "name": "Swarowski White",
    "slug": "swarowski-white-v",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Swarowski White - Marble",
    "description": "Premium natural Marble material: Swarowski White.",
    "heroImage": "/products/Marbles/swarowski-white.png",
    "gallery": [
      "/products/Marbles/swarowski-white.png"
    ],
    "featured": false,
    "sortOrder": 116
  },
  {
    "id": "prod-turtle-green-b",
    "name": "Turtle Green",
    "slug": "turtle-green-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Turtle Green - Marble",
    "description": "Premium natural Marble material: Turtle Green.",
    "heroImage": "/products/Marbles/turtle-green.png",
    "gallery": [
      "/products/Marbles/turtle-green.png"
    ],
    "featured": false,
    "sortOrder": 117
  },
  {
    "id": "prod-vanilla-cream-it",
    "name": "Vanilla Cream",
    "slug": "vanilla-cream-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Vanilla Cream - Marble",
    "description": "Premium natural Marble material: Vanilla Cream.",
    "heroImage": "/products/Marbles/vanilla-cream.png",
    "gallery": [
      "/products/Marbles/vanilla-cream.png"
    ],
    "featured": false,
    "sortOrder": 118
  },
  {
    "id": "prod-volacasa-it",
    "name": "Volacasa",
    "slug": "volacasa-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Volacasa - Marble",
    "description": "Premium natural Marble material: Volacasa.",
    "heroImage": "/products/Marbles/volacasa.png",
    "gallery": [
      "/products/Marbles/volacasa.png"
    ],
    "featured": false,
    "sortOrder": 119
  },
  {
    "id": "prod-wavy-green-indian",
    "name": "Wavy Green",
    "slug": "wavy-green-indian",
    "category": "marble",
    "subcategory": "indian-marble",
    "shortDescription": "Wavy Green - Marble",
    "description": "Premium natural Marble material: Wavy Green.",
    "heroImage": "/products/Marbles/wavy-green.png",
    "gallery": [
      "/products/Marbles/wavy-green.png"
    ],
    "featured": true,
    "sortOrder": 120
  },
  {
    "id": "prod-white-it",
    "name": "White (IT)",
    "slug": "white-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "White (IT) - Marble",
    "description": "Premium natural Marble material: White (IT).",
    "heroImage": "/products/Marbles/White (IT).png",
    "gallery": [
      "/products/Marbles/White (IT).png"
    ],
    "featured": false,
    "sortOrder": 121
  },
  {
    "id": "prod-white-v",
    "name": "White (V)",
    "slug": "white-v",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "White (V) - Marble",
    "description": "Premium natural Marble material: White (V).",
    "heroImage": "/products/Marbles/White (V).png",
    "gallery": [
      "/products/Marbles/White (V).png"
    ],
    "featured": false,
    "sortOrder": 122
  },
  {
    "id": "prod-white-small-poker-v",
    "name": "White Small Poker",
    "slug": "white-small-poker-v",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "White Small Poker - Marble",
    "description": "Premium natural Marble material: White Small Poker.",
    "heroImage": "/products/Marbles/white-small-poker.png",
    "gallery": [
      "/products/Marbles/white-small-poker.png"
    ],
    "featured": false,
    "sortOrder": 123
  },
  {
    "id": "prod-ytd3-it",
    "name": "YTD3",
    "slug": "ytd3-it",
    "category": "marble",
    "subcategory": "yet-to-decide",
    "shortDescription": "YTD3 - Marble",
    "description": "Premium natural Marble material: YTD3.",
    "heroImage": "/products/Marbles/ytd3.png",
    "gallery": [
      "/products/Marbles/ytd3.png"
    ],
    "featured": false,
    "sortOrder": 124
  },
  {
    "id": "prod-ytd4-it",
    "name": "YTD4",
    "slug": "ytd4-it",
    "category": "marble",
    "subcategory": "yet-to-decide",
    "shortDescription": "YTD4 - Marble",
    "description": "Premium natural Marble material: YTD4.",
    "heroImage": "/products/Marbles/ytd4.png",
    "gallery": [
      "/products/Marbles/ytd4.png"
    ],
    "featured": false,
    "sortOrder": 125
  },
  {
    "id": "prod-yellow-traventine-it0",
    "name": "Yellow Travertine",
    "slug": "yellow-traventine-it0",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Yellow Travertine - Marble",
    "description": "Premium natural Marble material: Yellow Travertine.",
    "heroImage": "/products/Marbles/yellow-travertine.png",
    "gallery": [
      "/products/Marbles/yellow-travertine.png"
    ],
    "featured": false,
    "sortOrder": 126
  },
  {
    "id": "prod-crystal",
    "name": "Crystal",
    "slug": "crystal",
    "category": "onyx",
    "subcategory": "onyx-collection",
    "shortDescription": "Crystal - Onyx",
    "description": "Premium natural Onyx material: Crystal.",
    "heroImage": "/products/Onyx/Crystal.png",
    "gallery": [
      "/products/Onyx/Crystal.png"
    ],
    "featured": false,
    "sortOrder": 127
  },
  {
    "id": "prod-gray",
    "name": "Gray",
    "slug": "gray",
    "category": "onyx",
    "subcategory": "onyx-collection",
    "shortDescription": "Gray - Onyx",
    "description": "Premium natural Onyx material: Gray.",
    "heroImage": "/products/Onyx/Gray.png",
    "gallery": [
      "/products/Onyx/Gray.png"
    ],
    "featured": false,
    "sortOrder": 128
  },
  {
    "id": "prod-green",
    "name": "Green",
    "slug": "green",
    "category": "onyx",
    "subcategory": "onyx-collection",
    "shortDescription": "Green - Onyx",
    "description": "Premium natural Onyx material: Green.",
    "heroImage": "/products/Onyx/Green.png",
    "gallery": [
      "/products/Onyx/Green.png"
    ],
    "featured": false,
    "sortOrder": 129
  },
  {
    "id": "prod-mexican",
    "name": "Mexican",
    "slug": "mexican",
    "category": "onyx",
    "subcategory": "onyx-collection",
    "shortDescription": "Mexican - Onyx",
    "description": "Premium natural Onyx material: Mexican.",
    "heroImage": "/products/Onyx/Mexican.png",
    "gallery": [
      "/products/Onyx/Mexican.png"
    ],
    "featured": false,
    "sortOrder": 130
  },
  {
    "id": "prod-orion",
    "name": "Orion",
    "slug": "orion",
    "category": "onyx",
    "subcategory": "onyx-collection",
    "shortDescription": "Orion - Onyx",
    "description": "Premium natural Onyx material: Orion.",
    "heroImage": "/products/Onyx/Orion.png",
    "gallery": [
      "/products/Onyx/Orion.png"
    ],
    "featured": false,
    "sortOrder": 131
  },
  {
    "id": "prod-pink-onyx",
    "name": "Pink Onyx",
    "slug": "pink-onyx",
    "category": "onyx",
    "subcategory": "onyx-collection",
    "shortDescription": "Pink Onyx - Onyx",
    "description": "Premium natural Onyx material: Pink Onyx.",
    "heroImage": "/products/Onyx/Pink Onyx.png",
    "gallery": [
      "/products/Onyx/Pink Onyx.png"
    ],
    "featured": true,
    "sortOrder": 132
  },
  {
    "id": "prod-pink-pentagonia",
    "name": "Pink Pentagonia",
    "slug": "pink-pentagonia",
    "category": "onyx",
    "subcategory": "onyx-collection",
    "shortDescription": "Pink Pentagonia - Onyx",
    "description": "Premium natural Onyx material: Pink Pentagonia.",
    "heroImage": "/products/Onyx/Pink Pentagonia.png",
    "gallery": [
      "/products/Onyx/Pink Pentagonia.png"
    ],
    "featured": false,
    "sortOrder": 133
  },
  {
    "id": "prod-rainboz",
    "name": "Rainboz",
    "slug": "rainboz",
    "category": "onyx",
    "subcategory": "onyx-collection",
    "shortDescription": "Rainboz - Onyx",
    "description": "Premium natural Onyx material: Rainboz.",
    "heroImage": "/products/Onyx/Rainboz.png",
    "gallery": [
      "/products/Onyx/Rainboz.png"
    ],
    "featured": false,
    "sortOrder": 134
  },
  {
    "id": "prod-tiffany",
    "name": "Tiffany",
    "slug": "tiffany",
    "category": "onyx",
    "subcategory": "onyx-collection",
    "shortDescription": "Tiffany - Onyx",
    "description": "Premium natural Onyx material: Tiffany.",
    "heroImage": "/products/Onyx/Tiffany.png",
    "gallery": [
      "/products/Onyx/Tiffany.png"
    ],
    "featured": false,
    "sortOrder": 135
  },
  {
    "id": "prod-trevo",
    "name": "Trevo",
    "slug": "trevo",
    "category": "onyx",
    "subcategory": "onyx-collection",
    "shortDescription": "Trevo - Onyx",
    "description": "Premium natural Onyx material: Trevo.",
    "heroImage": "/products/Onyx/Trevo.png",
    "gallery": [
      "/products/Onyx/Trevo.png"
    ],
    "featured": false,
    "sortOrder": 136
  },
  {
    "id": "prod-volcano",
    "name": "Volcano",
    "slug": "volcano",
    "category": "onyx",
    "subcategory": "onyx-collection",
    "shortDescription": "Volcano - Onyx",
    "description": "Premium natural Onyx material: Volcano.",
    "heroImage": "/products/Onyx/Volcano.png",
    "gallery": [
      "/products/Onyx/Volcano.png"
    ],
    "featured": false,
    "sortOrder": 137
  },
  {
    "id": "prod-ytd-1",
    "name": "YTD 1",
    "slug": "ytd-1",
    "category": "onyx",
    "subcategory": "onyx-collection",
    "shortDescription": "YTD 1 - Onyx",
    "description": "Premium natural Onyx material: YTD 1.",
    "heroImage": "/products/Onyx/YTD 1.png",
    "gallery": [
      "/products/Onyx/YTD 1.png"
    ],
    "featured": false,
    "sortOrder": 138
  },
  {
    "id": "prod-3d-white-fluted",
    "name": "3D White Fluted",
    "slug": "3d-white-fluted",
    "category": "sandstone",
    "subcategory": "sandstone-collection",
    "shortDescription": "3D White Fluted - Sandstone",
    "description": "Premium natural Sandstone material: 3D White Fluted.",
    "heroImage": "/products/Sandstone/3D White Fluted.png",
    "gallery": [
      "/products/Sandstone/3D White Fluted.png"
    ],
    "featured": false,
    "sortOrder": 139
  },
  {
    "id": "prod-black-fluted",
    "name": "Black Fluted",
    "slug": "black-fluted",
    "category": "sandstone",
    "subcategory": "sandstone-collection",
    "shortDescription": "Black Fluted - Sandstone",
    "description": "Premium natural Sandstone material: Black Fluted.",
    "heroImage": "/products/Sandstone/Black Fluted.png",
    "gallery": [
      "/products/Sandstone/Black Fluted.png"
    ],
    "featured": false,
    "sortOrder": 140
  },
  {
    "id": "prod-black-hydra-finish",
    "name": "Black Hydra Finish",
    "slug": "black-hydra-finish",
    "category": "sandstone",
    "subcategory": "sandstone-collection",
    "shortDescription": "Black Hydra Finish - Sandstone",
    "description": "Premium natural Sandstone material: Black Hydra Finish.",
    "heroImage": "/products/Sandstone/Black Hydra Finish .png",
    "gallery": [
      "/products/Sandstone/Black Hydra Finish .png"
    ],
    "featured": false,
    "sortOrder": 141
  },
  {
    "id": "prod-graywood-hydra-finish",
    "name": "Graywood Hydra Finish",
    "slug": "graywood-hydra-finish",
    "category": "sandstone",
    "subcategory": "sandstone-collection",
    "shortDescription": "Graywood Hydra Finish - Sandstone",
    "description": "Premium natural Sandstone material: Graywood Hydra Finish.",
    "heroImage": "/products/Sandstone/Graywood Hydra Finish.png",
    "gallery": [
      "/products/Sandstone/Graywood Hydra Finish.png"
    ],
    "featured": false,
    "sortOrder": 142
  },
  {
    "id": "prod-graywood-sandplast-finish",
    "name": "Graywood Sandplast Finish",
    "slug": "graywood-sandplast-finish",
    "category": "sandstone",
    "subcategory": "sandstone-collection",
    "shortDescription": "Graywood Sandplast Finish - Sandstone",
    "description": "Premium natural Sandstone material: Graywood Sandplast Finish.",
    "heroImage": "/products/Sandstone/Graywood Sandplast Finish.png",
    "gallery": [
      "/products/Sandstone/Graywood Sandplast Finish.png"
    ],
    "featured": false,
    "sortOrder": 143
  },
  {
    "id": "prod-gwalior-mint-sandplast-finish",
    "name": "Gwalior Mint Sandplast Finish",
    "slug": "gwalior-mint-sandplast-finish",
    "category": "sandstone",
    "subcategory": "sandstone-collection",
    "shortDescription": "Gwalior Mint Sandplast Finish - Sandstone",
    "description": "Premium natural Sandstone material: Gwalior Mint Sandplast Finish.",
    "heroImage": "/products/Sandstone/Gwalior Mint Sandplast Finish.png",
    "gallery": [
      "/products/Sandstone/Gwalior Mint Sandplast Finish.png"
    ],
    "featured": true,
    "sortOrder": 144
  },
  {
    "id": "prod-indian-mocha",
    "name": "Indian Mocha",
    "slug": "indian-mocha",
    "category": "sandstone",
    "subcategory": "sandstone-collection",
    "shortDescription": "Indian Mocha - Sandstone",
    "description": "Premium natural Sandstone material: Indian Mocha.",
    "heroImage": "/products/Sandstone/Indian Mocha.png",
    "gallery": [
      "/products/Sandstone/Indian Mocha.png"
    ],
    "featured": false,
    "sortOrder": 145
  },
  {
    "id": "prod-jodhpur-finish",
    "name": "Jodhpur Finish",
    "slug": "jodhpur-finish",
    "category": "sandstone",
    "subcategory": "sandstone-collection",
    "shortDescription": "Jodhpur Finish - Sandstone",
    "description": "Premium natural Sandstone material: Jodhpur Finish.",
    "heroImage": "/products/Sandstone/Jodhpur Finish.png",
    "gallery": [
      "/products/Sandstone/Jodhpur Finish.png"
    ],
    "featured": false,
    "sortOrder": 146
  },
  {
    "id": "prod-monsoon-sunglass-finish",
    "name": "Monsoon Sunglass Finish",
    "slug": "monsoon-sunglass-finish",
    "category": "sandstone",
    "subcategory": "sandstone-collection",
    "shortDescription": "Monsoon Sunglass Finish - Sandstone",
    "description": "Premium natural Sandstone material: Monsoon Sunglass Finish.",
    "heroImage": "/products/Sandstone/Monsoon Sunglass Finish.png",
    "gallery": [
      "/products/Sandstone/Monsoon Sunglass Finish.png"
    ],
    "featured": false,
    "sortOrder": 147
  },
  {
    "id": "prod-monsoon-leather-finish",
    "name": "Monsoon Leather Finish",
    "slug": "monsoon-leather-finish",
    "category": "sandstone",
    "subcategory": "sandstone-collection",
    "shortDescription": "Monsoon Leather Finish - Sandstone",
    "description": "Premium natural Sandstone material: Monsoon Leather Finish.",
    "heroImage": "/products/Sandstone/Monsoon leather finish.png",
    "gallery": [
      "/products/Sandstone/Monsoon leather finish.png"
    ],
    "featured": false,
    "sortOrder": 148
  },
  {
    "id": "prod-cnc-inlay-01",
    "name": "CNC inlay 01",
    "slug": "cnc-inlay-01",
    "category": "cnc",
    "subcategory": "cnc-inlay",
    "shortDescription": "CNC inlay 01 - CNC Inlay",
    "description": "Precision CNC inlay architectural stone surface: CNC inlay 01.",
    "heroImage": "/CNC-new/4bfb215e-96b6-4791-a076-d4e9ec8f431c.JPG",
    "gallery": [
      "/CNC-new/4bfb215e-96b6-4791-a076-d4e9ec8f431c.JPG"
    ],
    "featured": false,
    "sortOrder": 149
  },
  {
    "id": "prod-cnc-inlay-02",
    "name": "CNC inlay 02",
    "slug": "cnc-inlay-02",
    "category": "cnc",
    "subcategory": "cnc-inlay",
    "shortDescription": "CNC inlay 02 - CNC Inlay",
    "description": "Precision CNC inlay architectural stone surface: CNC inlay 02.",
    "heroImage": "/CNC-new/4c168e87-7f03-4b92-9b6c-7d879e0da1ec.JPG",
    "gallery": [
      "/CNC-new/4c168e87-7f03-4b92-9b6c-7d879e0da1ec.JPG"
    ],
    "featured": false,
    "sortOrder": 150
  },
  {
    "id": "prod-cnc-inlay-04",
    "name": "CNC inlay 04",
    "slug": "cnc-inlay-04",
    "category": "cnc",
    "subcategory": "cnc-inlay",
    "shortDescription": "CNC inlay 04 - CNC Inlay",
    "description": "Precision CNC inlay architectural stone surface: CNC inlay 04.",
    "heroImage": "/CNC-new/image.png",
    "gallery": [
      "/CNC-new/image.png"
    ],
    "featured": false,
    "sortOrder": 152
  },
  {
    "id": "prod-cnc-inlay-05",
    "name": "CNC inlay 05",
    "slug": "cnc-inlay-05",
    "category": "cnc",
    "subcategory": "cnc-inlay",
    "shortDescription": "CNC inlay 05 - CNC Inlay",
    "description": "Precision CNC inlay architectural stone surface: CNC inlay 05.",
    "heroImage": "/CNC-new/IMG_2242.jpg",
    "gallery": [
      "/CNC-new/IMG_2242.jpg"
    ],
    "featured": false,
    "sortOrder": 153
  },
  {
    "id": "prod-cnc-inlay-07",
    "name": "CNC inlay 07",
    "slug": "cnc-inlay-07",
    "category": "cnc",
    "subcategory": "cnc-inlay",
    "shortDescription": "CNC inlay 07 - CNC Inlay",
    "description": "Precision CNC inlay architectural stone surface: CNC inlay 07.",
    "heroImage": "/CNC-new/IMG_2894.jpg",
    "gallery": [
      "/CNC-new/IMG_2894.jpg"
    ],
    "featured": false,
    "sortOrder": 155
  },
  {
    "id": "prod-cnc-inlay-08",
    "name": "CNC inlay 08",
    "slug": "cnc-inlay-08",
    "category": "cnc",
    "subcategory": "cnc-inlay",
    "shortDescription": "CNC inlay 08 - CNC Inlay",
    "description": "Precision CNC inlay architectural stone surface: CNC inlay 08.",
    "heroImage": "/CNC-new/IMG_2897.jpg",
    "gallery": [
      "/CNC-new/IMG_2897.jpg"
    ],
    "featured": false,
    "sortOrder": 156
  },
  {
    "id": "prod-cnc-inlay-09",
    "name": "CNC inlay 09",
    "slug": "cnc-inlay-09",
    "category": "cnc",
    "subcategory": "cnc-inlay",
    "shortDescription": "CNC inlay 09 - CNC Inlay",
    "description": "Precision CNC inlay architectural stone surface: CNC inlay 09.",
    "heroImage": "/CNC-new/IMG_2898.jpg",
    "gallery": [
      "/CNC-new/IMG_2898.jpg"
    ],
    "featured": false,
    "sortOrder": 157
  },
  {
    "id": "prod-cnc-inlay-10",
    "name": "CNC inlay 10",
    "slug": "cnc-inlay-10",
    "category": "cnc",
    "subcategory": "cnc-inlay",
    "shortDescription": "CNC inlay 10 - CNC Inlay",
    "description": "Precision CNC inlay architectural stone surface: CNC inlay 10.",
    "heroImage": "/CNC-new/IMG_3474.jpg",
    "gallery": [
      "/CNC-new/IMG_3474.jpg"
    ],
    "featured": false,
    "sortOrder": 158
  },
  {
    "id": "prod-cnc-inlay-11",
    "name": "CNC inlay 11",
    "slug": "cnc-inlay-11",
    "category": "cnc",
    "subcategory": "cnc-inlay",
    "shortDescription": "CNC inlay 11 - CNC Inlay",
    "description": "Precision CNC inlay architectural stone surface: CNC inlay 11.",
    "heroImage": "/CNC-new/IMG_8420.JPG",
    "gallery": [
      "/CNC-new/IMG_8420.JPG"
    ],
    "featured": false,
    "sortOrder": 159
  },
  {
    "id": "prod-cnc-inlay-12",
    "name": "CNC inlay 12",
    "slug": "cnc-inlay-12",
    "category": "cnc",
    "subcategory": "cnc-inlay",
    "shortDescription": "CNC inlay 12 - CNC Inlay",
    "description": "Precision CNC inlay architectural stone surface: CNC inlay 12.",
    "heroImage": "/CNC-new/IMG_8421.JPG",
    "gallery": [
      "/CNC-new/IMG_8421.JPG"
    ],
    "featured": false,
    "sortOrder": 160
  },
  {
    "id": "prod-cnc-inlay-13",
    "name": "CNC inlay 13",
    "slug": "cnc-inlay-13",
    "category": "cnc",
    "subcategory": "cnc-inlay",
    "shortDescription": "CNC inlay 13 - CNC Inlay",
    "description": "Precision CNC inlay architectural stone surface: CNC inlay 13.",
    "heroImage": "/CNC-new/IMG_8422.JPG",
    "gallery": [
      "/CNC-new/IMG_8422.JPG"
    ],
    "featured": false,
    "sortOrder": 161
  },
  {
    "id": "prod-cnc-inlay-14",
    "name": "CNC inlay 14",
    "slug": "cnc-inlay-14",
    "category": "cnc",
    "subcategory": "cnc-inlay",
    "shortDescription": "CNC inlay 14 - CNC Inlay",
    "description": "Precision CNC inlay architectural stone surface: CNC inlay 14.",
    "heroImage": "/CNC-new/IMG_8423.JPG",
    "gallery": [
      "/CNC-new/IMG_8423.JPG"
    ],
    "featured": false,
    "sortOrder": 162
  },
  {
    "id": "prod-cnc-inlay-15",
    "name": "CNC inlay 15",
    "slug": "cnc-inlay-15",
    "category": "cnc",
    "subcategory": "cnc-inlay",
    "shortDescription": "CNC inlay 15 - CNC Inlay",
    "description": "Precision CNC inlay architectural stone surface: CNC inlay 15.",
    "heroImage": "/CNC-new/IMG_8424.JPG",
    "gallery": [
      "/CNC-new/IMG_8424.JPG"
    ],
    "featured": false,
    "sortOrder": 163
  },
  {
    "id": "prod-cnc-inlay-16",
    "name": "CNC inlay 16",
    "slug": "cnc-inlay-16",
    "category": "cnc",
    "subcategory": "cnc-inlay",
    "shortDescription": "CNC inlay 16 - CNC Inlay",
    "description": "Precision CNC inlay architectural stone surface: CNC inlay 16.",
    "heroImage": "/CNC-new/IMG_8425.JPG",
    "gallery": [
      "/CNC-new/IMG_8425.JPG"
    ],
    "featured": false,
    "sortOrder": 164
  },
  {
    "id": "prod-cnc-inlay-17",
    "name": "CNC inlay 17",
    "slug": "cnc-inlay-17",
    "category": "cnc",
    "subcategory": "cnc-inlay",
    "shortDescription": "CNC inlay 17 - CNC Inlay",
    "description": "Precision CNC inlay architectural stone surface: CNC inlay 17.",
    "heroImage": "/CNC-new/WhatsApp Image 2026-10-16 at 16.42.13.jpeg",
    "gallery": [
      "/CNC-new/WhatsApp Image 2026-10-16 at 16.42.13.jpeg"
    ],
    "featured": false,
    "sortOrder": 165
  },
  {
    "id": "prod-cnc-inlay-18",
    "name": "CNC inlay 18",
    "slug": "cnc-inlay-18",
    "category": "cnc",
    "subcategory": "cnc-inlay",
    "shortDescription": "CNC inlay 18 - CNC Inlay",
    "description": "Precision CNC inlay architectural stone surface: CNC inlay 18.",
    "heroImage": "/CNC-new/WhatsApp Image 2026-10-16 at 16.42.14 (1).jpeg",
    "gallery": [
      "/CNC-new/WhatsApp Image 2026-10-16 at 16.42.14 (1).jpeg"
    ],
    "featured": false,
    "sortOrder": 166
  },
  {
    "id": "prod-cnc-inlay-19",
    "name": "CNC inlay 19",
    "slug": "cnc-inlay-19",
    "category": "cnc",
    "subcategory": "cnc-inlay",
    "shortDescription": "CNC inlay 19 - CNC Inlay",
    "description": "Precision CNC inlay architectural stone surface: CNC inlay 19.",
    "heroImage": "/CNC-new/WhatsApp Image 2026-10-16 at 16.42.14.jpeg",
    "gallery": [
      "/CNC-new/WhatsApp Image 2026-10-16 at 16.42.14.jpeg"
    ],
    "featured": false,
    "sortOrder": 167
  }
];

// ============================================================================
// 3. SUBCATEGORY DEFINITIONS
// ============================================================================
const realSubcategories: ProductSubcategory[] = [
  {
    "id": "subcat-brazilian-marble",
    "name": "Brazilian Marble",
    "slug": "brazilian-marble",
    "category": "marble",
    "description": "Imported Brazilian marble slabs with unique veining and high polish.",
    "image": "",
    "sortOrder": 1
  },
  {
    "id": "subcat-italian-marble",
    "name": "Italian Marble",
    "slug": "italian-marble",
    "category": "marble",
    "description": "Classic Italian marble slabs, featuring elegant tones and distinct patterns.",
    "image": "",
    "sortOrder": 2
  },
  {
    "id": "subcat-indian-marble",
    "name": "Indian Marble",
    "slug": "indian-marble",
    "category": "marble",
    "description": "Fine domestic Indian marble sourced from premium quarries.",
    "image": "",
    "sortOrder": 3
  },
  {
    "id": "subcat-yet-to-decide",
    "name": "Yet To Decide",
    "slug": "yet-to-decide",
    "category": "marble",
    "description": "Unclassified / Yet To Decide marble selection.",
    "image": "",
    "sortOrder": 4
  },
  {
    "id": "subcat-marble-collection",
    "name": "Marble Collection",
    "slug": "marble-collection",
    "category": "marble",
    "description": "Curated marble slabs and natural stone tiles.",
    "image": "",
    "sortOrder": 5
  },
  {
    "id": "subcat-granite-collection",
    "name": "Granite Collection",
    "slug": "granite-collection",
    "category": "granite",
    "description": "High-density natural granite slabs.",
    "image": "",
    "sortOrder": 6
  },
  {
    "id": "subcat-onyx-collection",
    "name": "Onyx Collection",
    "slug": "onyx-collection",
    "category": "onyx",
    "description": "Exotic translucent onyx material.",
    "image": "",
    "sortOrder": 7
  },
  {
    "id": "subcat-sandstone-collection",
    "name": "Sandstone Collection",
    "slug": "sandstone-collection",
    "category": "sandstone",
    "description": "Warm, textured sandstone blocks and tiles.",
    "image": "",
    "sortOrder": 8
  },
  {
    "id": "subcat-cnc-inlay",
    "name": "CNC Inlay",
    "slug": "cnc-inlay",
    "category": "cnc",
    "description": "Precision CNC carved and stone inlay surfaces.",
    "image": "/CNC-new/4bfb215e-96b6-4791-a076-d4e9ec8f431c.JPG",
    "sortOrder": 9
  }
];

// ============================================================================
// 5. DERIVED TAXONOMY & HELPERS
// ============================================================================
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\/\\]+/g, "-")
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ============================================================================
// 6. EXPORTS
// ============================================================================
export const subcategories: ProductSubcategory[] = [...realSubcategories];
export const products: Product[] = [...realProducts];

const slugCounts = new Map<string, number>();

// Register real product slugs to prevent collisions with CNC/Kota/Wall Cladding
realProducts.forEach((p) => slugCounts.set(slugify(p.name), 1));

function getUniqueSlug(baseText: string): string {
  const baseSlug = slugify(baseText);
  const count = (slugCounts.get(baseSlug) || 0) + 1;
  slugCounts.set(baseSlug, count);
  return count === 1 ? baseSlug : `${baseSlug}-${count}`;
}

let subcatSortOrder = realSubcategories.length + 1;
let productSortOrder = realProducts.length + 1;

for (const [categoryName, categoryContent] of Object.entries(rawCatalogueStructure)) {
  const catSlug = slugify(categoryName);

  if (Array.isArray(categoryContent)) {
    const subcatName = `${categoryName} Collection`;
    const subcatSlug = getUniqueSlug(subcatName);
    const subcatId = `subcat-${subcatSlug}`;

    subcategories.push({
      id: subcatId,
      name: subcatName,
      slug: subcatSlug,
      category: catSlug,
      description: `${categoryName} material items and finishes.`,
      image: sampleMaterialImages[catSlug] || "",
      sortOrder: subcatSortOrder++,
    });

    for (const itemName of categoryContent) {
      const pSlug = getUniqueSlug(itemName);
      products.push({
        id: `prod-${pSlug}`,
        name: itemName,
        slug: pSlug,
        category: catSlug,
        subcategory: subcatSlug,
        shortDescription: `${itemName} - ${categoryName}`,
        description: `Premium natural ${categoryName} material: ${itemName}.`,
        heroImage: sampleMaterialImages[catSlug] || "",
        gallery: [],
        featured: productSortOrder % 15 === 0,
        sortOrder: productSortOrder++,
      });
    }
  } else {
    for (const [subcatKey, subcatContent] of Object.entries(categoryContent)) {
      if (Array.isArray(subcatContent)) {
        const subcatSlug = getUniqueSlug(subcatKey);
        const subcatId = `subcat-${subcatSlug}`;

        subcategories.push({
          id: subcatId,
          name: subcatKey,
          slug: subcatSlug,
          category: catSlug,
          description: `${subcatKey} range within ${categoryName}.`,
          image: sampleMaterialImages[catSlug] || "",
          sortOrder: subcatSortOrder++,
        });

        for (const itemName of subcatContent) {
          const pSlug = getUniqueSlug(itemName);
          products.push({
            id: `prod-${pSlug}`,
            name: itemName,
            slug: pSlug,
            category: catSlug,
            subcategory: subcatSlug,
            shortDescription: `${itemName} (${subcatKey})`,
            description: `Curated natural stone material ${itemName} from our ${subcatKey} collection.`,
            heroImage: sampleMaterialImages[catSlug] || "",
            gallery: [],
            featured: productSortOrder % 15 === 0,
            sortOrder: productSortOrder++,
          });
        }
      } else if (typeof subcatContent === "object" && subcatContent !== null) {
        const groupName = subcatKey;
        for (const [nestedName, nestedItems] of Object.entries(subcatContent)) {
          const fullSubcatName = `${groupName} - ${nestedName}`;
          const subcatSlug = getUniqueSlug(fullSubcatName);
          const subcatId = `subcat-${subcatSlug}`;

          subcategories.push({
            id: subcatId,
            name: fullSubcatName,
            slug: subcatSlug,
            category: catSlug,
            description: `${groupName} (${nestedName}) natural stone selection.`,
            image: sampleMaterialImages[catSlug] || "",
            sortOrder: subcatSortOrder++,
          });

          if (Array.isArray(nestedItems)) {
            for (const itemName of nestedItems) {
              const pSlug = getUniqueSlug(itemName);
              products.push({
                id: `prod-${pSlug}`,
                name: itemName,
                slug: pSlug,
                category: catSlug,
                subcategory: subcatSlug,
                shortDescription: `${itemName} (${fullSubcatName})`,
                description: `Exquisite ${fullSubcatName} material: ${itemName}.`,
                heroImage: sampleMaterialImages[catSlug] || "",
                gallery: [],
                featured: productSortOrder % 15 === 0,
                sortOrder: productSortOrder++,
              });
            }
          }
        }
      }
    }
  }
}
