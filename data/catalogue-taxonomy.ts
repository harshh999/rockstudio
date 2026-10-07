import type { ProductCategory, ProductSubcategory, Product } from "@/types";

export const rawCatalogueStructure = {
  CNC: {
    "CNC Inlay": [
      "CNC Inlay 001",
      "CNC Inlay 002",
      "CNC Inlay 003",
      "CNC Inlay 004",
      "CNC Inlay 005"
    ],
    "CNC Flute": [
      "CNC Flute 001",
      "CNC Flute 002",
      "CNC Flute 003",
      "CNC Flute 004",
      "CNC Flute 005",
      "CNC Flute 006",
      "CNC Flute 007",
      "CNC Flute 008",
      "CNC Flute 009",
      "CNC Flute 0010",
      "CNC Flute 0011",
      "CNC Flute 0012",
      "CNC Flute 0013",
      "CNC Flute 0014",
      "CNC Flute 0015",
      "CNC Flute 0016",
      "CNC Flute 0017",
      "CNC Flute 0018",
      "CNC Flute 0019",
      "CNC Flute 0020",
      "CNC Flute 0021",
      "CNC Flute 0022"
    ],
    "CNC Design": [
      "CNC Design 001",
      "CNC Design 002",
      "CNC Design 003",
      "CNC Design 004",
      "CNC Design 005",
      "CNC Design 006",
      "CNC Design 007",
      "CNC Design 008",
      "CNC Design 009",
      "CNC Design 010",
      "CNC Design 011",
      "CNC Design 012",
      "CNC Design 013",
      "CNC Design 014",
      "CNC Design 015",
      "CNC Design 016",
      "CNC Design 017",
      "CNC Design 018",
      "CNC Design 019",
      "CNC Design 020",
      "CNC Design 021",
      "CNC Design 022",
      "CNC Design 023",
      "CNC Design 024"
    ],
    "SD": [
      "SD 001",
      "SD 002",
      "SD 003",
      "SD 004",
      "SD 005",
      "SD 006",
      "SD 007",
      "SD 008",
      "SD 009",
      "SD 010",
      "SD 011",
      "SD 012",
      "SD 013",
      "SD 014",
      "SD 015",
      "SD 016",
      "SD 017",
      "SD 018",
      "SD 019",
      "SD 020"
    ]
  },
  Kota: {
    "Green": [],
    "Brown": [],
    "Andhra Gray": []
  },
  "Wall Cladding": {
    "Flute": [],
    "CNC Flute": [],
    "Imported Wall Cladding": [
      "Beige Travertine",
      "Black Hole",
      "Golden Travertino",
      "Golden Travertino",
      "Noche Trevertino",
      "Red Trevertino",
      "Silver Trevertino",
      "Yellow Travertino"
    ],
    "Indian Wall Cladding": [
      "Black Bushed Finish",
      "Black Forest Antic",
      "Black Forest",
      "Brown Bushed Finish",
      "Chiseled Jodhpur Pink",
      "Chiseled",
      "Forest Brown",
      "Forest Green",
      "Glittering Star",
      "Glittering Star",
      "Golden Forest",
      "Grey Bushed Finish",
      "Hydra With Liquor",
      "Ita Gold",
      "Matrix Liquor",
      "Trumbled Polish",
      "Matrix",
      "Mix Slate Cladding",
      "Monsoon Blue Hydra",
      "Monsoon Blue Shot Blast",
      "Teak Wood Shotblast",
      "Tobacco Leather",
      "Trumbled River Wash",
      "Wall Cladding Design",
      "Wall Cladding Teak Wood"
    ],
    Slates: [
      "3D Shortblast Tiles",
      "Beidge Sandstone",
      "Black Carbon",
      "Black Volcana",
      "Black",
      "Chinese Multi Stacking",
      "CNC Mosaic Sandstone Mint Teak",
      "CNC Pattern 1",
      "CNC Wall Design Mint",
      "Copper Slate Set Pattern Mosaic",
      "Copper",
      "Copper2",
      "Deoli Green Slate",
      "English Willow",
      "Fantasy Brown Stacking",
      "Forest Brown Roman Mosaic",
      "Forest Fire Slate",
      "Forest Fire Stacking",
      "Forest Fire",
      "Ganesha Mural",
      "Golden",
      "Gray Stacking",
      "Groove Tile",
      "Himachal Multi Stacking 2",
      "Himachal White Stacking",
      "Jack Black",
      "Maple Leaf",
      "Mint Chiseled",
      "Mint Fossial Stacking",
      "Mint Maple Gold Mosaic",
      "Mix Sand Stacking",
      "Mural Radha Krishna",
      "Ocean Green",
      "Rainbow Chipout",
      "Rainbow Sawn Stacking",
      "Rainbow Stacking 2",
      "Rainbow Stacking",
      "Rainforest Green Box Pattern Mosaic",
      "Rustic Black Slate",
      "Silver Shine Stacking",
      "Silver Shine",
      "Silver Shine2",
      "Smokey Gray Stacking",
      "Star Black Marble Stacking",
      "Star BPODO",
      "Teak Brick",
      "Teak Mint Maple Mosaic",
      "Teakwood Galaxy Stacking",
      "Teakwood Gold Maple Leaf Mosaic",
      "Teakwood S_B Stacking",
      "Teakwood Stacking",
      "Traventine 3D",
      "White Marble Chiseled",
      "White Marble Sawn Stacking",
      "Wooden Fossial 3D Mosaic",
      "Wooden Fossial Stacking",
      "Zeera Green 1",
      "Zeera Green 2",
      "Zeera Green 3"
    ]
  }
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const sampleMaterialImages: Record<string, string> = {
  granite: "/HeroPage/Granite_1.png",
  cnc: "/HeroPage/CNC_1.jpg",
  marble: "/HeroPage/Marble_1.png",
  onyx: "/HeroPage/Onyx_1.jpg",
  sandstone: "/HeroPage/Sandstone_1.png",
  "wall-cladding": "/HeroPage/WallCladding_1.jpg",
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
    id: "cat-kota",
    name: "Kota",
    slug: "kota",
    description: "Fine-grained blue-green and brown limestone flooring and paving slabs.",
    image: "/images/categories/kota.jpg",
    sortOrder: 7,
  },
  {
    id: "cat-kaddapa",
    name: "Kaddapa",
    slug: "kaddapa",
    description: "Deep black natural limestone suited for interior, exterior, and landscaping.",
    image: "/images/categories/kaddapa.jpg",
    sortOrder: 8,
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
    "heroImage": "/products/rocks-crumbs/Adhunik%20brown.png",
    "gallery": [
      "/products/rocks-crumbs/Adhunik%20brown.png"
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
    "heroImage": "/products/Granite/Astodia%20Ivory.jpeg",
    "gallery": [
      "/products/Granite/Astodia%20Ivory.jpeg"
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
    "heroImage": "/products/rocks-crumbs/bess%20paradise.png",
    "gallery": [
      "/products/rocks-crumbs/bess%20paradise.png"
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
    "heroImage": "/products/Granite/Black%20Marquina%20R.png",
    "gallery": [
      "/products/Granite/Black%20Marquina%20R.png"
    ],
    "featured": false,
    "sortOrder": 4
  },
  {
    "id": "prod-burgandy-white",
    "name": "Burgandy White ",
    "slug": "burgandy-white",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Burgandy White  - Granite",
    "description": "Premium natural Granite material: Burgandy White .",
    "heroImage": "/products/Granite/Burgandy%20White%20.jpeg",
    "gallery": [
      "/products/Granite/Burgandy%20White%20.jpeg"
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
    "heroImage": "/products/Granite/Classic%20Ivory.png",
    "gallery": [
      "/products/Granite/Classic%20Ivory.png"
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
    "heroImage": "/products/Granite/Coffee%20Pearl.jpeg",
    "gallery": [
      "/products/Granite/Coffee%20Pearl.jpeg"
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
    "heroImage": "/products/Granite/D%20Gray.jpeg",
    "gallery": [
      "/products/Granite/D%20Gray.jpeg"
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
    "heroImage": "/products/Granite/Diamond%20Pearl.jpeg",
    "gallery": [
      "/products/Granite/Diamond%20Pearl.jpeg"
    ],
    "featured": false,
    "sortOrder": 9
  },
  {
    "id": "prod-dyna-blue",
    "name": "Dyna Blue ",
    "slug": "dyna-blue",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Dyna Blue  - Granite",
    "description": "Premium natural Granite material: Dyna Blue .",
    "heroImage": "/products/rocks-crumbs/dyna%20blue%20.png",
    "gallery": [
      "/products/rocks-crumbs/dyna%20blue%20.png"
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
    "heroImage": "/products/Granite/Forest%20Brown.jpeg",
    "gallery": [
      "/products/Granite/Forest%20Brown.jpeg"
    ],
    "featured": false,
    "sortOrder": 11
  },
  {
    "id": "prod-godhra-gray",
    "name": "Godhra gray",
    "slug": "godhra-gray",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Godhra gray - Granite",
    "description": "Premium natural Granite material: Godhra gray.",
    "heroImage": "/products/Granite/Godhra%20gray.jpeg",
    "gallery": [
      "/products/Granite/Godhra%20gray.jpeg"
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
    "heroImage": "/products/rocks-crumbs/Gray%20paradise%20.png",
    "gallery": [
      "/products/rocks-crumbs/Gray%20paradise%20.png"
    ],
    "featured": false,
    "sortOrder": 13
  },
  {
    "id": "prod-hocco-brown",
    "name": "Hocco Brown ",
    "slug": "hocco-brown",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Hocco Brown  - Granite",
    "description": "Premium natural Granite material: Hocco Brown .",
    "heroImage": "/products/Granite/Hocco%20Brown%20.jpeg",
    "gallery": [
      "/products/Granite/Hocco%20Brown%20.jpeg"
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
    "heroImage": "/products/rocks-crumbs/kashmiri%20white.png",
    "gallery": [
      "/products/rocks-crumbs/kashmiri%20white.png"
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
    "heroImage": "/products/Granite/Kotda%20Black.jpeg",
    "gallery": [
      "/products/Granite/Kotda%20Black.jpeg"
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
    "heroImage": "/products/rocks-crumbs/kupam%20white.png",
    "gallery": [
      "/products/rocks-crumbs/kupam%20white.png"
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
    "heroImage": "/products/rocks-crumbs/lakha%20red.png",
    "gallery": [
      "/products/rocks-crumbs/lakha%20red.png"
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
    "heroImage": "/products/rocks-crumbs/lava%20gray.png",
    "gallery": [
      "/products/rocks-crumbs/lava%20gray.png"
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
    "heroImage": "/products/Granite/Melton%20Brown.jpeg",
    "gallery": [
      "/products/Granite/Melton%20Brown.jpeg"
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
    "heroImage": "/products/rocks-crumbs/mountain%20brown.png",
    "gallery": [
      "/products/rocks-crumbs/mountain%20brown.png"
    ],
    "featured": false,
    "sortOrder": 21
  },
  {
    "id": "prod-p-white",
    "name": "P White ",
    "slug": "p-white",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "P White  - Granite",
    "description": "Premium natural Granite material: P White .",
    "heroImage": "/products/Granite/P%20White%20.jpeg",
    "gallery": [
      "/products/Granite/P%20White%20.jpeg"
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
    "heroImage": "/products/Granite/Pebble%20Black.jpeg",
    "gallery": [
      "/products/Granite/Pebble%20Black.jpeg"
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
    "heroImage": "/products/Granite/Platinum%20Gray.jpeg",
    "gallery": [
      "/products/Granite/Platinum%20Gray.jpeg"
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
    "heroImage": "/products/Granite/Prada%20Gold.jpeg",
    "gallery": [
      "/products/Granite/Prada%20Gold.jpeg"
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
    "heroImage": "/products/rocks-crumbs/Rajyog%20brown.png",
    "gallery": [
      "/products/rocks-crumbs/Rajyog%20brown.png"
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
    "heroImage": "/products/rocks-crumbs/Raw%20silk.png",
    "gallery": [
      "/products/rocks-crumbs/Raw%20silk.png"
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
    "heroImage": "/products/rocks-crumbs/River%20white.png",
    "gallery": [
      "/products/rocks-crumbs/River%20white.png"
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
    "heroImage": "/products/rocks-crumbs/Royal%20brown.png",
    "gallery": [
      "/products/rocks-crumbs/Royal%20brown.png"
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
    "heroImage": "/products/rocks-crumbs/royal%20gold.png",
    "gallery": [
      "/products/rocks-crumbs/royal%20gold.png"
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
    "heroImage": "/products/Granite/SK%20Blue.png",
    "gallery": [
      "/products/Granite/SK%20Blue.png"
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
    "heroImage": "/products/rocks-crumbs/silky%20silver.png",
    "gallery": [
      "/products/rocks-crumbs/silky%20silver.png"
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
    "heroImage": "/products/Granite/Silver%20River.jpeg",
    "gallery": [
      "/products/Granite/Silver%20River.jpeg"
    ],
    "featured": false,
    "sortOrder": 33
  },
  {
    "id": "prod-steel-gray",
    "name": "Steel gray",
    "slug": "steel-gray",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Steel gray - Granite",
    "description": "Premium natural Granite material: Steel gray.",
    "heroImage": "/products/rocks-crumbs/steel%20gray%20.png",
    "gallery": [
      "/products/rocks-crumbs/steel%20gray%20.png"
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
    "heroImage": "/products/rocks-crumbs/swiss%20brown.png",
    "gallery": [
      "/products/rocks-crumbs/swiss%20brown.png"
    ],
    "featured": false,
    "sortOrder": 35
  },
  {
    "id": "prod-symphony-ivory",
    "name": "Symphony Ivory ",
    "slug": "symphony-ivory",
    "category": "granite",
    "subcategory": "granite-collection",
    "shortDescription": "Symphony Ivory  - Granite",
    "description": "Premium natural Granite material: Symphony Ivory .",
    "heroImage": "/products/Granite/Symphony%20Ivory%20.jpeg",
    "gallery": [
      "/products/Granite/Symphony%20Ivory%20.jpeg"
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
    "heroImage": "/products/rocks-crumbs/walet%20paradise.png",
    "gallery": [
      "/products/rocks-crumbs/walet%20paradise.png"
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
    "heroImage": "/products/Granite/YTD%206.jpeg",
    "gallery": [
      "/products/Granite/YTD%206.jpeg"
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
    "heroImage": "/products/Granite/Zubrana%20Gray.jpeg",
    "gallery": [
      "/products/Granite/Zubrana%20Gray.jpeg"
    ],
    "featured": false,
    "sortOrder": 39
  },
  {
    "id": "prod-abu-black",
    "name": "Abu Black ",
    "slug": "abu-black",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Abu Black  - Marble",
    "description": "Premium natural Marble material: Abu Black .",
    "heroImage": "/products/Marbles/Abu%20Black%20.png",
    "gallery": [
      "/products/Marbles/Abu%20Black%20.png"
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
    "heroImage": "/products/Marbles/Agora%20Beige.png",
    "gallery": [
      "/products/Marbles/Agora%20Beige.png"
    ],
    "featured": false,
    "sortOrder": 41
  },
  {
    "id": "prod-arctic-white-b",
    "name": "Arctic White (B)",
    "slug": "arctic-white-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Arctic White (B) - Marble",
    "description": "Premium natural Marble material: Arctic White (B).",
    "heroImage": "/products/Marbles/Arctic%20White%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Arctic%20White%20%28B%29.png"
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
    "heroImage": "/products/Marbles/Armani%20Bronze.png",
    "gallery": [
      "/products/Marbles/Armani%20Bronze.png"
    ],
    "featured": false,
    "sortOrder": 43
  },
  {
    "id": "prod-armani-brown-it",
    "name": "Armani Brown (It)",
    "slug": "armani-brown-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Armani Brown (It) - Marble",
    "description": "Premium natural Marble material: Armani Brown (It).",
    "heroImage": "/products/Marbles/Armani%20Brown%20%28It%29.png",
    "gallery": [
      "/products/Marbles/Armani%20Brown%20%28It%29.png"
    ],
    "featured": false,
    "sortOrder": 44
  },
  {
    "id": "prod-ash-gray-it",
    "name": "Ash Gray (IT)",
    "slug": "ash-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Ash Gray (IT) - Marble",
    "description": "Premium natural Marble material: Ash Gray (IT).",
    "heroImage": "/products/Marbles/Ash%20Gray%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Ash%20Gray%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 45
  },
  {
    "id": "prod-avocado-leather-finish-b",
    "name": "Avocado Leather finish (B)",
    "slug": "avocado-leather-finish-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Avocado Leather finish (B) - Marble",
    "description": "Premium natural Marble material: Avocado Leather finish (B).",
    "heroImage": "/products/Marbles/Avocado%20Leather%20finish%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Avocado%20Leather%20finish%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 46
  },
  {
    "id": "prod-bardilo-gray-it",
    "name": "Bardilo Gray (IT)",
    "slug": "bardilo-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Bardilo Gray (IT) - Marble",
    "description": "Premium natural Marble material: Bardilo Gray (IT).",
    "heroImage": "/products/Marbles/Bardilo%20Gray%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Bardilo%20Gray%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 47
  },
  {
    "id": "prod-belecimo-it",
    "name": "Belecimo (IT)",
    "slug": "belecimo-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Belecimo (IT) - Marble",
    "description": "Premium natural Marble material: Belecimo (IT).",
    "heroImage": "/products/Marbles/Belecimo%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Belecimo%20%28IT%29.png"
    ],
    "featured": true,
    "sortOrder": 48
  },
  {
    "id": "prod-belecimo-new-it",
    "name": "Belecimo New (IT)",
    "slug": "belecimo-new-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Belecimo New (IT) - Marble",
    "description": "Premium natural Marble material: Belecimo New (IT).",
    "heroImage": "/products/Marbles/Belecimo%20New%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Belecimo%20New%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 49
  },
  {
    "id": "prod-black-it",
    "name": "Black (IT)",
    "slug": "black-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Black (IT) - Marble",
    "description": "Premium natural Marble material: Black (IT).",
    "heroImage": "/products/Marbles/Black%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Black%20%28IT%29.png"
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
    "heroImage": "/products/Marbles/Black%20Antique.png",
    "gallery": [
      "/products/Marbles/Black%20Antique.png"
    ],
    "featured": false,
    "sortOrder": 51
  },
  {
    "id": "prod-black-marquina",
    "name": "Black Marquina ",
    "slug": "black-marquina",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Black Marquina  - Marble",
    "description": "Premium natural Marble material: Black Marquina .",
    "heroImage": "/products/Marbles/Black%20Marquina%20.png",
    "gallery": [
      "/products/Marbles/Black%20Marquina%20.png"
    ],
    "featured": false,
    "sortOrder": 52
  },
  {
    "id": "prod-black-rose-it",
    "name": "Black Rose (IT)",
    "slug": "black-rose-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Black Rose (IT) - Marble",
    "description": "Premium natural Marble material: Black Rose (IT).",
    "heroImage": "/products/Marbles/Black%20Rose%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Black%20Rose%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 53
  },
  {
    "id": "prod-blue-bresiait",
    "name": "Blue Bresia(IT)",
    "slug": "blue-bresiait",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Blue Bresia(IT) - Marble",
    "description": "Premium natural Marble material: Blue Bresia(IT).",
    "heroImage": "/products/Marbles/Blue%20Bresia%28IT%29.png",
    "gallery": [
      "/products/Marbles/Blue%20Bresia%28IT%29.png"
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
    "heroImage": "/products/Marbles/Brazillian%20YTD%201.png",
    "gallery": [
      "/products/Marbles/Brazillian%20YTD%201.png"
    ],
    "featured": false,
    "sortOrder": 55
  },
  {
    "id": "prod-cnc-fluted-indian-ytd-2",
    "name": "CNC Fluted (INDIAN) YTD 2",
    "slug": "cnc-fluted-indian-ytd-2",
    "category": "marble",
    "subcategory": "yet-to-decide",
    "shortDescription": "CNC Fluted (INDIAN) YTD 2 - Marble",
    "description": "Premium natural Marble material: CNC Fluted (INDIAN) YTD 2.",
    "heroImage": "/products/Marbles/CNC%20Fluted%20%28INDIAN%29%20YTD%202.png",
    "gallery": [
      "/products/Marbles/CNC%20Fluted%20%28INDIAN%29%20YTD%202.png"
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
    "heroImage": "/products/Marbles/CNC%20White%20YTD.png",
    "gallery": [
      "/products/Marbles/CNC%20White%20YTD.png"
    ],
    "featured": false,
    "sortOrder": 57
  },
  {
    "id": "prod-calcutta-white-b",
    "name": "Calcutta White (B)",
    "slug": "calcutta-white-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Calcutta White (B) - Marble",
    "description": "Premium natural Marble material: Calcutta White (B).",
    "heroImage": "/products/Marbles/Calcutta%20White%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Calcutta%20White%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 58
  },
  {
    "id": "prod-camel-brown-it",
    "name": "Camel Brown (IT)",
    "slug": "camel-brown-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Camel Brown (IT) - Marble",
    "description": "Premium natural Marble material: Camel Brown (IT).",
    "heroImage": "/products/Marbles/Camel%20Brown%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Camel%20Brown%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 59
  },
  {
    "id": "prod-cardian-gray-it",
    "name": "Cardian Gray (IT)",
    "slug": "cardian-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Cardian Gray (IT) - Marble",
    "description": "Premium natural Marble material: Cardian Gray (IT).",
    "heroImage": "/products/Marbles/Cardian%20Gray%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Cardian%20Gray%20%28IT%29.png"
    ],
    "featured": true,
    "sortOrder": 60
  },
  {
    "id": "prod-cora-cabana-b",
    "name": "Cora Cabana (B)",
    "slug": "cora-cabana-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Cora Cabana (B) - Marble",
    "description": "Premium natural Marble material: Cora Cabana (B).",
    "heroImage": "/products/Marbles/Cora%20Cabana%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Cora%20Cabana%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 61
  },
  {
    "id": "prod-cream-italian",
    "name": "Cream Italian ",
    "slug": "cream-italian",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Cream Italian  - Marble",
    "description": "Premium natural Marble material: Cream Italian .",
    "heroImage": "/products/Marbles/Cream%20Italian%20.png",
    "gallery": [
      "/products/Marbles/Cream%20Italian%20.png"
    ],
    "featured": false,
    "sortOrder": 62
  },
  {
    "id": "prod-cream-karaman-it",
    "name": "Cream Karaman (IT)",
    "slug": "cream-karaman-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Cream Karaman (IT) - Marble",
    "description": "Premium natural Marble material: Cream Karaman (IT).",
    "heroImage": "/products/Marbles/Cream%20Karaman%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Cream%20Karaman%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 63
  },
  {
    "id": "prod-crystal-lizato-b",
    "name": "Crystal Lizato (B)",
    "slug": "crystal-lizato-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Crystal Lizato (B) - Marble",
    "description": "Premium natural Marble material: Crystal Lizato (B).",
    "heroImage": "/products/Marbles/Crystal%20Lizato%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Crystal%20Lizato%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 64
  },
  {
    "id": "prod-cygnus-black-b",
    "name": "Cygnus Black (B)",
    "slug": "cygnus-black-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Cygnus Black (B) - Marble",
    "description": "Premium natural Marble material: Cygnus Black (B).",
    "heroImage": "/products/Marbles/Cygnus%20Black%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Cygnus%20Black%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 65
  },
  {
    "id": "prod-emotion-gray-it",
    "name": "Emotion Gray (IT)",
    "slug": "emotion-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Emotion Gray (IT) - Marble",
    "description": "Premium natural Marble material: Emotion Gray (IT).",
    "heroImage": "/products/Marbles/Emotion%20Gray%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Emotion%20Gray%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 66
  },
  {
    "id": "prod-ess-gray-it",
    "name": "Ess Gray (IT)",
    "slug": "ess-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Ess Gray (IT) - Marble",
    "description": "Premium natural Marble material: Ess Gray (IT).",
    "heroImage": "/products/Marbles/Ess%20Gray%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Ess%20Gray%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 67
  },
  {
    "id": "prod-extreme-gold-b",
    "name": "Extreme Gold (B)",
    "slug": "extreme-gold-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Extreme Gold (B) - Marble",
    "description": "Premium natural Marble material: Extreme Gold (B).",
    "heroImage": "/products/Marbles/Extreme%20Gold%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Extreme%20Gold%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 68
  },
  {
    "id": "prod-fairyland-blue-it",
    "name": "Fairyland Blue (IT)",
    "slug": "fairyland-blue-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Fairyland Blue (IT) - Marble",
    "description": "Premium natural Marble material: Fairyland Blue (IT).",
    "heroImage": "/products/Marbles/Fairyland%20Blue%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Fairyland%20Blue%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 69
  },
  {
    "id": "prod-fendi-gray-it",
    "name": "Fendi Gray (IT)",
    "slug": "fendi-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Fendi Gray (IT) - Marble",
    "description": "Premium natural Marble material: Fendi Gray (IT).",
    "heroImage": "/products/Marbles/Fendi%20Gray%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Fendi%20Gray%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 70
  },
  {
    "id": "prod-french-black-b",
    "name": "French Black (B)",
    "slug": "french-black-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "French Black (B) - Marble",
    "description": "Premium natural Marble material: French Black (B).",
    "heroImage": "/products/Marbles/French%20Black%20%28B%29.png",
    "gallery": [
      "/products/Marbles/French%20Black%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 71
  },
  {
    "id": "prod-givenchy-white-b",
    "name": "Givenchy white (B)",
    "slug": "givenchy-white-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Givenchy white (B) - Marble",
    "description": "Premium natural Marble material: Givenchy white (B).",
    "heroImage": "/products/Marbles/Givenchy%20white%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Givenchy%20white%20%28B%29.png"
    ],
    "featured": true,
    "sortOrder": 72
  },
  {
    "id": "prod-glitter-brown-b",
    "name": "Glitter Brown (B)",
    "slug": "glitter-brown-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Glitter Brown (B) - Marble",
    "description": "Premium natural Marble material: Glitter Brown (B).",
    "heroImage": "/products/Marbles/Glitter%20Brown%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Glitter%20Brown%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 73
  },
  {
    "id": "prod-golden-spider-it",
    "name": "Golden Spider (IT)",
    "slug": "golden-spider-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Golden Spider (IT) - Marble",
    "description": "Premium natural Marble material: Golden Spider (IT).",
    "heroImage": "/products/Marbles/Golden%20Spider%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Golden%20Spider%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 74
  },
  {
    "id": "prod-gray-horizon-b",
    "name": "Gray Horizon (B)",
    "slug": "gray-horizon-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Gray Horizon (B) - Marble",
    "description": "Premium natural Marble material: Gray Horizon (B).",
    "heroImage": "/products/Marbles/Gray%20Horizon%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Gray%20Horizon%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 75
  },
  {
    "id": "prod-gray-milano-it",
    "name": "Gray Milano (IT)",
    "slug": "gray-milano-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Gray Milano (IT) - Marble",
    "description": "Premium natural Marble material: Gray Milano (IT).",
    "heroImage": "/products/Marbles/Gray%20Milano%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Gray%20Milano%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 76
  },
  {
    "id": "prod-gray-wave-it",
    "name": "Gray wave (IT)",
    "slug": "gray-wave-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Gray wave (IT) - Marble",
    "description": "Premium natural Marble material: Gray wave (IT).",
    "heroImage": "/products/Marbles/Gray%20wave%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Gray%20wave%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 77
  },
  {
    "id": "prod-green-canyon-b",
    "name": "Green Canyon (B)",
    "slug": "green-canyon-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Green Canyon (B) - Marble",
    "description": "Premium natural Marble material: Green Canyon (B).",
    "heroImage": "/products/Marbles/Green%20Canyon%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Green%20Canyon%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 78
  },
  {
    "id": "prod-ice-gray-it",
    "name": "Ice Gray (IT)",
    "slug": "ice-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Ice Gray (IT) - Marble",
    "description": "Premium natural Marble material: Ice Gray (IT).",
    "heroImage": "/products/Marbles/Ice%20Gray%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Ice%20Gray%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 79
  },
  {
    "id": "prod-imperial-gray-indian",
    "name": "Imperial Gray (INDIAN)",
    "slug": "imperial-gray-indian",
    "category": "marble",
    "subcategory": "indian-marble",
    "shortDescription": "Imperial Gray (INDIAN) - Marble",
    "description": "Premium natural Marble material: Imperial Gray (INDIAN).",
    "heroImage": "/products/Marbles/Imperial%20Gray%20%28INDIAN%29.png",
    "gallery": [
      "/products/Marbles/Imperial%20Gray%20%28INDIAN%29.png"
    ],
    "featured": false,
    "sortOrder": 80
  },
  {
    "id": "prod-lime-brown-it",
    "name": "Lime Brown (IT)",
    "slug": "lime-brown-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Lime Brown (IT) - Marble",
    "description": "Premium natural Marble material: Lime Brown (IT).",
    "heroImage": "/products/Marbles/Lime%20Brown%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Lime%20Brown%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 81
  },
  {
    "id": "prod-lime-white",
    "name": "Lime White ",
    "slug": "lime-white",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Lime White  - Marble",
    "description": "Premium natural Marble material: Lime White .",
    "heroImage": "/products/Marbles/Lime%20White%20.png",
    "gallery": [
      "/products/Marbles/Lime%20White%20.png"
    ],
    "featured": false,
    "sortOrder": 82
  },
  {
    "id": "prod-london-gray-b",
    "name": "London Gray (B)",
    "slug": "london-gray-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "London Gray (B) - Marble",
    "description": "Premium natural Marble material: London Gray (B).",
    "heroImage": "/products/Marbles/London%20Gray%20%28B%29.png",
    "gallery": [
      "/products/Marbles/London%20Gray%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 83
  },
  {
    "id": "prod-luna-gray-it",
    "name": "Luna Gray (IT)",
    "slug": "luna-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Luna Gray (IT) - Marble",
    "description": "Premium natural Marble material: Luna Gray (IT).",
    "heroImage": "/products/Marbles/Luna%20Gray%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Luna%20Gray%20%28IT%29.png"
    ],
    "featured": true,
    "sortOrder": 84
  },
  {
    "id": "prod-maori-b",
    "name": "Maori (B)",
    "slug": "maori-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Maori (B) - Marble",
    "description": "Premium natural Marble material: Maori (B).",
    "heroImage": "/products/Marbles/Maori%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Maori%20%28B%29.png"
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
    "heroImage": "/products/Marbles/Marco%20Polo.png",
    "gallery": [
      "/products/Marbles/Marco%20Polo.png"
    ],
    "featured": false,
    "sortOrder": 86
  },
  {
    "id": "prod-micro-angelo-it",
    "name": "Micro angelo (IT)",
    "slug": "micro-angelo-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Micro angelo (IT) - Marble",
    "description": "Premium natural Marble material: Micro angelo (IT).",
    "heroImage": "/products/Marbles/Micro%20angelo%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Micro%20angelo%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 87
  },
  {
    "id": "prod-mocha-gray-it",
    "name": "Mocha gray (IT)",
    "slug": "mocha-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Mocha gray (IT) - Marble",
    "description": "Premium natural Marble material: Mocha gray (IT).",
    "heroImage": "/products/Marbles/Mocha%20gray%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Mocha%20gray%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 88
  },
  {
    "id": "prod-moon-cream",
    "name": "Moon Cream ",
    "slug": "moon-cream",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Moon Cream  - Marble",
    "description": "Premium natural Marble material: Moon Cream .",
    "heroImage": "/products/Marbles/Moon%20Cream%20.png",
    "gallery": [
      "/products/Marbles/Moon%20Cream%20.png"
    ],
    "featured": false,
    "sortOrder": 89
  },
  {
    "id": "prod-moon-gray-it",
    "name": "Moon Gray (IT)",
    "slug": "moon-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Moon Gray (IT) - Marble",
    "description": "Premium natural Marble material: Moon Gray (IT).",
    "heroImage": "/products/Marbles/Moon%20Gray%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Moon%20Gray%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 90
  },
  {
    "id": "prod-multi-red-it",
    "name": "Multi Red (IT)",
    "slug": "multi-red-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Multi Red (IT) - Marble",
    "description": "Premium natural Marble material: Multi Red (IT).",
    "heroImage": "/products/Marbles/Multi%20Red%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Multi%20Red%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 91
  },
  {
    "id": "prod-mystic-green-indian-exotic",
    "name": "Mystic Green (INDIAN EXOTIC)",
    "slug": "mystic-green-indian-exotic",
    "category": "marble",
    "subcategory": "indian-marble",
    "shortDescription": "Mystic Green (INDIAN EXOTIC) - Marble",
    "description": "Premium natural Marble material: Mystic Green (INDIAN EXOTIC).",
    "heroImage": "/products/Marbles/Mystic%20Green%20%28INDIAN%20EXOTIC%29.png",
    "gallery": [
      "/products/Marbles/Mystic%20Green%20%28INDIAN%20EXOTIC%29.png"
    ],
    "featured": false,
    "sortOrder": 92
  },
  {
    "id": "prod-noche-travantine-it",
    "name": "Noche Travantine (IT)",
    "slug": "noche-travantine-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Noche Travantine (IT) - Marble",
    "description": "Premium natural Marble material: Noche Travantine (IT).",
    "heroImage": "/products/Marbles/Noche%20Travantine%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Noche%20Travantine%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 93
  },
  {
    "id": "prod-nordic-gray-it",
    "name": "Nordic Gray (IT)",
    "slug": "nordic-gray-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Nordic Gray (IT) - Marble",
    "description": "Premium natural Marble material: Nordic Gray (IT).",
    "heroImage": "/products/Marbles/Nordic%20Gray%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Nordic%20Gray%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 94
  },
  {
    "id": "prod-ocean-blue-b",
    "name": "OCean Blue (B)",
    "slug": "ocean-blue-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "OCean Blue (B) - Marble",
    "description": "Premium natural Marble material: OCean Blue (B).",
    "heroImage": "/products/Marbles/OCean%20Blue%20%28B%29.png",
    "gallery": [
      "/products/Marbles/OCean%20Blue%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 95
  },
  {
    "id": "prod-ocean-green-b",
    "name": "Ocean green (B)",
    "slug": "ocean-green-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Ocean green (B) - Marble",
    "description": "Premium natural Marble material: Ocean green (B).",
    "heroImage": "/products/Marbles/Ocean%20green%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Ocean%20green%20%28B%29.png"
    ],
    "featured": true,
    "sortOrder": 96
  },
  {
    "id": "prod-panda-white-it",
    "name": "Panda White (IT)",
    "slug": "panda-white-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Panda White (IT) - Marble",
    "description": "Premium natural Marble material: Panda White (IT).",
    "heroImage": "/products/Marbles/Panda%20White%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Panda%20White%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 97
  },
  {
    "id": "prod-peach-white-p-b",
    "name": "Peach White P (B)",
    "slug": "peach-white-p-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Peach White P (B) - Marble",
    "description": "Premium natural Marble material: Peach White P (B).",
    "heroImage": "/products/Marbles/Peach%20White%20P%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Peach%20White%20P%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 98
  },
  {
    "id": "prod-peach-white-b",
    "name": "Peach white (B)",
    "slug": "peach-white-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Peach white (B) - Marble",
    "description": "Premium natural Marble material: Peach white (B).",
    "heroImage": "/products/Marbles/Peach%20white%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Peach%20white%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 99
  },
  {
    "id": "prod-pengia-indian-exotic",
    "name": "Pengia Indian Exotic ",
    "slug": "pengia-indian-exotic",
    "category": "marble",
    "subcategory": "indian-marble",
    "shortDescription": "Pengia Indian Exotic  - Marble",
    "description": "Premium natural Marble material: Pengia Indian Exotic .",
    "heroImage": "/products/Marbles/Pengia%20Indian%20Exotic%20.png",
    "gallery": [
      "/products/Marbles/Pengia%20Indian%20Exotic%20.png"
    ],
    "featured": false,
    "sortOrder": 100
  },
  {
    "id": "prod-polaris-green-b",
    "name": "Polaris green (b)",
    "slug": "polaris-green-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Polaris green (b) - Marble",
    "description": "Premium natural Marble material: Polaris green (b).",
    "heroImage": "/products/Marbles/Polaris%20green%20%28b%29.png",
    "gallery": [
      "/products/Marbles/Polaris%20green%20%28b%29.png"
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
    "heroImage": "/products/Marbles/Pulpis%20Brown.png",
    "gallery": [
      "/products/Marbles/Pulpis%20Brown.png"
    ],
    "featured": false,
    "sortOrder": 102
  },
  {
    "id": "prod-purple-nest-b",
    "name": "Purple Nest (B)",
    "slug": "purple-nest-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Purple Nest (B) - Marble",
    "description": "Premium natural Marble material: Purple Nest (B).",
    "heroImage": "/products/Marbles/Purple%20Nest%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Purple%20Nest%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 103
  },
  {
    "id": "prod-rafelo-b",
    "name": "Rafelo (B)",
    "slug": "rafelo-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Rafelo (B) - Marble",
    "description": "Premium natural Marble material: Rafelo (B).",
    "heroImage": "/products/Marbles/Rafelo%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Rafelo%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 104
  },
  {
    "id": "prod-regal-beige-it",
    "name": "Regal Beige (IT)",
    "slug": "regal-beige-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Regal Beige (IT) - Marble",
    "description": "Premium natural Marble material: Regal Beige (IT).",
    "heroImage": "/products/Marbles/Regal%20Beige%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Regal%20Beige%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 105
  },
  {
    "id": "prod-srk-black",
    "name": "SRK Black ",
    "slug": "srk-black",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "SRK Black  - Marble",
    "description": "Premium natural Marble material: SRK Black .",
    "heroImage": "/products/Marbles/SRK%20Black%20.png",
    "gallery": [
      "/products/Marbles/SRK%20Black%20.png"
    ],
    "featured": false,
    "sortOrder": 106
  },
  {
    "id": "prod-sangrila-leather-finish-b",
    "name": "Sangrila leather finish (B)",
    "slug": "sangrila-leather-finish-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Sangrila leather finish (B) - Marble",
    "description": "Premium natural Marble material: Sangrila leather finish (B).",
    "heroImage": "/products/Marbles/Sangrila%20leather%20finish%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Sangrila%20leather%20finish%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 107
  },
  {
    "id": "prod-saran-koli",
    "name": "Saran Koli ",
    "slug": "saran-koli",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Saran Koli  - Marble",
    "description": "Premium natural Marble material: Saran Koli .",
    "heroImage": "/products/Marbles/Saran%20Koli%20.png",
    "gallery": [
      "/products/Marbles/Saran%20Koli%20.png"
    ],
    "featured": true,
    "sortOrder": 108
  },
  {
    "id": "prod-silver-traventine-it",
    "name": "Silver Traventine (IT)",
    "slug": "silver-traventine-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Silver Traventine (IT) - Marble",
    "description": "Premium natural Marble material: Silver Traventine (IT).",
    "heroImage": "/products/Marbles/Silver%20Traventine%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Silver%20Traventine%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 109
  },
  {
    "id": "prod-snake-black-indian",
    "name": "Snake Black INDIAN ",
    "slug": "snake-black-indian",
    "category": "marble",
    "subcategory": "indian-marble",
    "shortDescription": "Snake Black INDIAN  - Marble",
    "description": "Premium natural Marble material: Snake Black INDIAN .",
    "heroImage": "/products/Marbles/Snake%20Black%20INDIAN%20.png",
    "gallery": [
      "/products/Marbles/Snake%20Black%20INDIAN%20.png"
    ],
    "featured": false,
    "sortOrder": 110
  },
  {
    "id": "prod-snow-white-it",
    "name": "Snow White (IT)",
    "slug": "snow-white-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Snow White (IT) - Marble",
    "description": "Premium natural Marble material: Snow White (IT).",
    "heroImage": "/products/Marbles/Snow%20White%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Snow%20White%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 111
  },
  {
    "id": "prod-spider-green",
    "name": "Spider Green ",
    "slug": "spider-green",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Spider Green  - Marble",
    "description": "Premium natural Marble material: Spider Green .",
    "heroImage": "/products/Marbles/Spider%20Green%20.png",
    "gallery": [
      "/products/Marbles/Spider%20Green%20.png"
    ],
    "featured": false,
    "sortOrder": 112
  },
  {
    "id": "prod-stataurio-it",
    "name": "Stataurio (IT)",
    "slug": "stataurio-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Stataurio (IT) - Marble",
    "description": "Premium natural Marble material: Stataurio (IT).",
    "heroImage": "/products/Marbles/Stataurio%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Stataurio%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 113
  },
  {
    "id": "prod-sunset-blue-b",
    "name": "Sunset Blue (B)",
    "slug": "sunset-blue-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Sunset Blue (B) - Marble",
    "description": "Premium natural Marble material: Sunset Blue (B).",
    "heroImage": "/products/Marbles/Sunset%20Blue%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Sunset%20Blue%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 114
  },
  {
    "id": "prod-super-white-b",
    "name": "Super White (B)",
    "slug": "super-white-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Super White (B) - Marble",
    "description": "Premium natural Marble material: Super White (B).",
    "heroImage": "/products/Marbles/Super%20White%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Super%20White%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 115
  },
  {
    "id": "prod-swarowski-white-v",
    "name": "Swarowski White (V)",
    "slug": "swarowski-white-v",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "Swarowski White (V) - Marble",
    "description": "Premium natural Marble material: Swarowski White (V).",
    "heroImage": "/products/Marbles/Swarowski%20White%20%28V%29.png",
    "gallery": [
      "/products/Marbles/Swarowski%20White%20%28V%29.png"
    ],
    "featured": false,
    "sortOrder": 116
  },
  {
    "id": "prod-turtle-green-b",
    "name": "Turtle Green (B)",
    "slug": "turtle-green-b",
    "category": "marble",
    "subcategory": "brazilian-marble",
    "shortDescription": "Turtle Green (B) - Marble",
    "description": "Premium natural Marble material: Turtle Green (B).",
    "heroImage": "/products/Marbles/Turtle%20Green%20%28B%29.png",
    "gallery": [
      "/products/Marbles/Turtle%20Green%20%28B%29.png"
    ],
    "featured": false,
    "sortOrder": 117
  },
  {
    "id": "prod-vanilla-cream-it",
    "name": "Vanilla Cream (IT)",
    "slug": "vanilla-cream-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Vanilla Cream (IT) - Marble",
    "description": "Premium natural Marble material: Vanilla Cream (IT).",
    "heroImage": "/products/Marbles/Vanilla%20Cream%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Vanilla%20Cream%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 118
  },
  {
    "id": "prod-volacasa-it",
    "name": "Volacasa (IT)",
    "slug": "volacasa-it",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Volacasa (IT) - Marble",
    "description": "Premium natural Marble material: Volacasa (IT).",
    "heroImage": "/products/Marbles/Volacasa%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/Volacasa%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 119
  },
  {
    "id": "prod-wavy-green-indian",
    "name": "Wavy Green Indian ",
    "slug": "wavy-green-indian",
    "category": "marble",
    "subcategory": "indian-marble",
    "shortDescription": "Wavy Green Indian  - Marble",
    "description": "Premium natural Marble material: Wavy Green Indian .",
    "heroImage": "/products/Marbles/Wavy%20Green%20Indian%20.png",
    "gallery": [
      "/products/Marbles/Wavy%20Green%20Indian%20.png"
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
    "heroImage": "/products/Marbles/White%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/White%20%28IT%29.png"
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
    "heroImage": "/products/Marbles/White%20%28V%29.png",
    "gallery": [
      "/products/Marbles/White%20%28V%29.png"
    ],
    "featured": false,
    "sortOrder": 122
  },
  {
    "id": "prod-white-small-poker-v",
    "name": "White Small Poker (V)",
    "slug": "white-small-poker-v",
    "category": "marble",
    "subcategory": "marble-collection",
    "shortDescription": "White Small Poker (V) - Marble",
    "description": "Premium natural Marble material: White Small Poker (V).",
    "heroImage": "/products/Marbles/White%20Small%20Poker%20%28V%29.png",
    "gallery": [
      "/products/Marbles/White%20Small%20Poker%20%28V%29.png"
    ],
    "featured": false,
    "sortOrder": 123
  },
  {
    "id": "prod-ytd3-it",
    "name": "YTD3 (IT)",
    "slug": "ytd3-it",
    "category": "marble",
    "subcategory": "yet-to-decide",
    "shortDescription": "YTD3 (IT) - Marble",
    "description": "Premium natural Marble material: YTD3 (IT).",
    "heroImage": "/products/Marbles/YTD3%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/YTD3%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 124
  },
  {
    "id": "prod-ytd4-it",
    "name": "YTD4 (IT)",
    "slug": "ytd4-it",
    "category": "marble",
    "subcategory": "yet-to-decide",
    "shortDescription": "YTD4 (IT) - Marble",
    "description": "Premium natural Marble material: YTD4 (IT).",
    "heroImage": "/products/Marbles/YTD4%20%28IT%29.png",
    "gallery": [
      "/products/Marbles/YTD4%20%28IT%29.png"
    ],
    "featured": false,
    "sortOrder": 125
  },
  {
    "id": "prod-yellow-traventine-it0",
    "name": "Yellow Traventine (IT0",
    "slug": "yellow-traventine-it0",
    "category": "marble",
    "subcategory": "italian-marble",
    "shortDescription": "Yellow Traventine (IT0 - Marble",
    "description": "Premium natural Marble material: Yellow Traventine (IT0.",
    "heroImage": "/products/Marbles/Yellow%20Traventine%20%28IT0.png",
    "gallery": [
      "/products/Marbles/Yellow%20Traventine%20%28IT0.png"
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
    "heroImage": "/products/Onyx/Pink%20Onyx.png",
    "gallery": [
      "/products/Onyx/Pink%20Onyx.png"
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
    "heroImage": "/products/Onyx/Pink%20Pentagonia.png",
    "gallery": [
      "/products/Onyx/Pink%20Pentagonia.png"
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
    "heroImage": "/products/Onyx/YTD%201.png",
    "gallery": [
      "/products/Onyx/YTD%201.png"
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
    "heroImage": "/products/Sandstone/3D%20White%20Fluted.png",
    "gallery": [
      "/products/Sandstone/3D%20White%20Fluted.png"
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
    "heroImage": "/products/Sandstone/Black%20Fluted.png",
    "gallery": [
      "/products/Sandstone/Black%20Fluted.png"
    ],
    "featured": false,
    "sortOrder": 140
  },
  {
    "id": "prod-black-hydra-finish",
    "name": "Black Hydra Finish ",
    "slug": "black-hydra-finish",
    "category": "sandstone",
    "subcategory": "sandstone-collection",
    "shortDescription": "Black Hydra Finish  - Sandstone",
    "description": "Premium natural Sandstone material: Black Hydra Finish .",
    "heroImage": "/products/Sandstone/Black%20Hydra%20Finish%20.png",
    "gallery": [
      "/products/Sandstone/Black%20Hydra%20Finish%20.png"
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
    "heroImage": "/products/Sandstone/Graywood%20Hydra%20Finish.png",
    "gallery": [
      "/products/Sandstone/Graywood%20Hydra%20Finish.png"
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
    "heroImage": "/products/Sandstone/Graywood%20Sandplast%20Finish.png",
    "gallery": [
      "/products/Sandstone/Graywood%20Sandplast%20Finish.png"
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
    "heroImage": "/products/Sandstone/Gwalior%20Mint%20Sandplast%20Finish.png",
    "gallery": [
      "/products/Sandstone/Gwalior%20Mint%20Sandplast%20Finish.png"
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
    "heroImage": "/products/Sandstone/Indian%20Mocha.png",
    "gallery": [
      "/products/Sandstone/Indian%20Mocha.png"
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
    "heroImage": "/products/Sandstone/Jodhpur%20Finish.png",
    "gallery": [
      "/products/Sandstone/Jodhpur%20Finish.png"
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
    "heroImage": "/products/Sandstone/Monsoon%20Sunglass%20Finish.png",
    "gallery": [
      "/products/Sandstone/Monsoon%20Sunglass%20Finish.png"
    ],
    "featured": false,
    "sortOrder": 147
  },
  {
    "id": "prod-monsoon-leather-finish",
    "name": "Monsoon leather finish",
    "slug": "monsoon-leather-finish",
    "category": "sandstone",
    "subcategory": "sandstone-collection",
    "shortDescription": "Monsoon leather finish - Sandstone",
    "description": "Premium natural Sandstone material: Monsoon leather finish.",
    "heroImage": "/products/Sandstone/Monsoon%20leather%20finish.png",
    "gallery": [
      "/products/Sandstone/Monsoon%20leather%20finish.png"
    ],
    "featured": false,
    "sortOrder": 148
  }
];

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
  }
];

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
