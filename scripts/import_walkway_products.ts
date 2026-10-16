import * as fs from "fs";
import * as path from "path";

interface ProductToAdd {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  gallery: string[];
  featured: boolean;
  sortOrder: number;
}

const walkwayProducts: ProductToAdd[] = [
  // 1. Cobol (5 products)
  {
    id: "prod-brown-cobbles",
    name: "Brown Cobbles",
    slug: "brown-cobbles",
    category: "parking-walkway",
    subcategory: "cobol",
    shortDescription: "Brown Cobbles - Cobol",
    description: "Natural split brown cobblestone pavers engineered for parking areas and exterior walkways.",
    heroImage: "/Walkway/Brown cobbles.jpg",
    gallery: ["/Walkway/Brown cobbles.jpg"],
    featured: false,
    sortOrder: 168,
  },
  {
    id: "prod-brown-cobbles-01",
    name: "Brown Cobbles 01",
    slug: "brown-cobbles-01",
    category: "parking-walkway",
    subcategory: "cobol",
    shortDescription: "Brown Cobbles 01 - Cobol",
    description: "Durable earth-toned natural cobblestones with textured split edges for driveway paving.",
    heroImage: "/Walkway/Brown cobbles(1).jpg",
    gallery: ["/Walkway/Brown cobbles(1).jpg"],
    featured: false,
    sortOrder: 169,
  },
  {
    id: "prod-grey-cobbles",
    name: "Grey Cobbles",
    slug: "grey-cobbles",
    category: "parking-walkway",
    subcategory: "cobol",
    shortDescription: "Grey Cobbles - Cobol",
    description: "Natural grey stone cobblestone pavers designed for high-traffic vehicular and pedestrian pathways.",
    heroImage: "/Walkway/Grey cobbles.JPG",
    gallery: ["/Walkway/Grey cobbles.JPG"],
    featured: false,
    sortOrder: 170,
  },
  {
    id: "prod-multi-cobbles",
    name: "Multi Cobbles",
    slug: "multi-cobbles",
    category: "parking-walkway",
    subcategory: "cobol",
    shortDescription: "Multi Cobbles - Cobol",
    description: "Multi-tonal natural cobblestone pavers offering warm organic color variation for landscape design.",
    heroImage: "/Walkway/Multi cobbles.JPG",
    gallery: ["/Walkway/Multi cobbles.JPG"],
    featured: false,
    sortOrder: 171,
  },
  {
    id: "prod-red-cobbles",
    name: "Red Cobbles",
    slug: "red-cobbles",
    category: "parking-walkway",
    subcategory: "cobol",
    shortDescription: "Red Cobbles - Cobol",
    description: "Deep red natural stone cobblestones providing striking architectural accents for walkways and courtyards.",
    heroImage: "/Walkway/Red cobbles.JPG",
    gallery: ["/Walkway/Red cobbles.JPG"],
    featured: false,
    sortOrder: 172,
  },

  // 2. kadapa (5 products)
  {
    id: "prod-black-kadapa-cobbles",
    name: "Black Kadapa Cobbles",
    slug: "black-kadapa-cobbles",
    category: "parking-walkway",
    subcategory: "kadapa",
    shortDescription: "Black Kadapa Cobbles - kadapa",
    description: "Natural Black Kadapa limestone cobblestone pavers for driveways, parking, and architectural borders.",
    heroImage: "/Walkway/Black Kadapa cobbles.JPG",
    gallery: ["/Walkway/Black Kadapa cobbles.JPG"],
    featured: false,
    sortOrder: 173,
  },
  {
    id: "prod-black-kadapa-cobbles-01",
    name: "Black Kadapa Cobbles 01",
    slug: "black-kadapa-cobbles-01",
    category: "parking-walkway",
    subcategory: "kadapa",
    shortDescription: "Black Kadapa Cobbles 01 - kadapa",
    description: "Hand-split Black Kadapa limestone cobblestone blocks engineered for high-load vehicle areas.",
    heroImage: "/Walkway/Black Kadapa cobbles(1).JPG",
    gallery: ["/Walkway/Black Kadapa cobbles(1).JPG"],
    featured: false,
    sortOrder: 174,
  },
  {
    id: "prod-black-kadapa-cobbles-02",
    name: "Black Kadapa Cobbles 02",
    slug: "black-kadapa-cobbles-02",
    category: "parking-walkway",
    subcategory: "kadapa",
    shortDescription: "Black Kadapa Cobbles 02 - kadapa",
    description: "Fine-textured Black Kadapa limestone cobblestones with natural cleft finish.",
    heroImage: "/Walkway/Black kaddapa cobbles.JPG",
    gallery: ["/Walkway/Black kaddapa cobbles.JPG"],
    featured: false,
    sortOrder: 175,
  },
  {
    id: "prod-kadapa",
    name: "Kadapa",
    slug: "kadapa",
    category: "parking-walkway",
    subcategory: "kadapa",
    shortDescription: "Kadapa - kadapa",
    description: "Authentic natural black Kadapa limestone paving slabs for enduring commercial and residential walkways.",
    heroImage: "/Walkway/Kadapa.JPG",
    gallery: ["/Walkway/Kadapa.JPG"],
    featured: false,
    sortOrder: 176,
  },
  {
    id: "prod-kadapa-river",
    name: "Kadapa River",
    slug: "kadapa-river",
    category: "parking-walkway",
    subcategory: "kadapa",
    shortDescription: "Kadapa River - kadapa",
    description: "River-wash finished Kadapa black limestone slabs featuring smooth water-weathered tactile surface.",
    heroImage: "/Walkway/Kadapa river.JPG",
    gallery: ["/Walkway/Kadapa river.JPG"],
    featured: false,
    sortOrder: 177,
  },

  // 3. Green Kota (1 product)
  {
    id: "prod-green-kota",
    name: "Green Kota",
    slug: "green-kota",
    category: "parking-walkway",
    subcategory: "green-kota",
    shortDescription: "Green Kota - Green Kota",
    description: "Traditional greenish-blue Kota limestone paving slabs for exterior corridors and public walkways.",
    heroImage: "/Walkway/Green kota.JPG",
    gallery: ["/Walkway/Green kota.JPG"],
    featured: false,
    sortOrder: 178,
  },

  // 4. Brown Kota (7 products)
  {
    id: "prod-brown-kota",
    name: "Brown Kota",
    slug: "brown-kota",
    category: "parking-walkway",
    subcategory: "brown-kota",
    shortDescription: "Brown Kota - Brown Kota",
    description: "Warm earth-toned Brown Kota limestone slabs with natural slip resistance for walkways and patios.",
    heroImage: "/Walkway/Brown kota.JPG",
    gallery: ["/Walkway/Brown kota.JPG"],
    featured: false,
    sortOrder: 179,
  },
  {
    id: "prod-brown-kota-01",
    name: "Brown Kota 01",
    slug: "brown-kota-01",
    category: "parking-walkway",
    subcategory: "brown-kota",
    shortDescription: "Brown Kota 01 - Brown Kota",
    description: "Natural split Brown Kota limestone pavers for exterior landscaping and parking borders.",
    heroImage: "/Walkway/Brown kota(1).JPG",
    gallery: ["/Walkway/Brown kota(1).JPG"],
    featured: false,
    sortOrder: 180,
  },
  {
    id: "prod-brown-kota-02",
    name: "Brown Kota 02",
    slug: "brown-kota-02",
    category: "parking-walkway",
    subcategory: "brown-kota",
    shortDescription: "Brown Kota 02 - Brown Kota",
    description: "Durable Brown Kota limestone paving slabs with uniform density.",
    heroImage: "/Walkway/Brown kota(2).JPG",
    gallery: ["/Walkway/Brown kota(2).JPG"],
    featured: false,
    sortOrder: 181,
  },
  {
    id: "prod-brown-kota-03",
    name: "Brown Kota 03",
    slug: "brown-kota-03",
    category: "parking-walkway",
    subcategory: "brown-kota",
    shortDescription: "Brown Kota 03 - Brown Kota",
    description: "Fine-grained Brown Kota limestone slabs suitable for commercial plazas and walkways.",
    heroImage: "/Walkway/Brown kota(3).JPG",
    gallery: ["/Walkway/Brown kota(3).JPG"],
    featured: false,
    sortOrder: 182,
  },
  {
    id: "prod-brown-kota-canvas",
    name: "Brown Kota Canvas",
    slug: "brown-kota-canvas",
    category: "parking-walkway",
    subcategory: "brown-kota",
    shortDescription: "Brown Kota Canvas - Brown Kota",
    description: "Canvas-textured finish Brown Kota limestone offering high slip resistance for wet outdoor areas.",
    heroImage: "/Walkway/Brown kota canvas.JPG",
    gallery: ["/Walkway/Brown kota canvas.JPG"],
    featured: false,
    sortOrder: 183,
  },
  {
    id: "prod-brown-kota-mirror",
    name: "Brown Kota Mirror",
    slug: "brown-kota-mirror",
    category: "parking-walkway",
    subcategory: "brown-kota",
    shortDescription: "Brown Kota Mirror - Brown Kota",
    description: "Mirror-polished Brown Kota limestone slabs displaying deep warm tones for covered entryways.",
    heroImage: "/Walkway/Brown kota mirror.JPG",
    gallery: ["/Walkway/Brown kota mirror.JPG"],
    featured: false,
    sortOrder: 184,
  },
  {
    id: "prod-brown-kota-outside",
    name: "Brown Kota Outside",
    slug: "brown-kota-outside",
    category: "parking-walkway",
    subcategory: "brown-kota",
    shortDescription: "Brown Kota Outside - Brown Kota",
    description: "Weather-resistant exterior-grade Brown Kota limestone paving slabs.",
    heroImage: "/Walkway/Brown kota outside .JPG",
    gallery: ["/Walkway/Brown kota outside .JPG"],
    featured: false,
    sortOrder: 185,
  },

  // 5. Red Mandana (3 products)
  {
    id: "prod-red-mandana",
    name: "Red Mandana",
    slug: "red-mandana",
    category: "parking-walkway",
    subcategory: "red-mandana",
    shortDescription: "Red Mandana - Red Mandana",
    description: "Extremely dense, acid-resistant natural Red Mandana stone paving slabs for driveways and industrial walkways.",
    heroImage: "/Walkway/Red mandana.jpg",
    gallery: ["/Walkway/Red mandana.jpg"],
    featured: false,
    sortOrder: 186,
  },
  {
    id: "prod-red-mandana-01",
    name: "Red Mandana 01",
    slug: "red-mandana-01",
    category: "parking-walkway",
    subcategory: "red-mandana",
    shortDescription: "Red Mandana 01 - Red Mandana",
    description: "Natural split Red Mandana stone paving slabs with rugged durability.",
    heroImage: "/Walkway/Red mandana .JPG",
    gallery: ["/Walkway/Red mandana .JPG"],
    featured: false,
    sortOrder: 187,
  },
  {
    id: "prod-red-mandana-leather",
    name: "Red Mandana Leather",
    slug: "red-mandana-leather",
    category: "parking-walkway",
    subcategory: "red-mandana",
    shortDescription: "Red Mandana Leather - Red Mandana",
    description: "Leather-textured Red Mandana stone slabs combining tactile slip-resistant surface with deep red hues.",
    heroImage: "/Walkway/Red mandana leather.JPG",
    gallery: ["/Walkway/Red mandana leather.JPG"],
    featured: false,
    sortOrder: 188,
  },
];

const walkwaySubcategories = [
  {
    id: "subcat-cobol",
    name: "Cobol",
    slug: "cobol",
    category: "parking-walkway",
    description: "Natural stone cobblestone pavers engineered for parking and driveway applications.",
    image: "/Walkway/Brown cobbles.jpg",
    sortOrder: 10,
  },
  {
    id: "subcat-kadapa",
    name: "kadapa",
    slug: "kadapa",
    category: "parking-walkway",
    description: "Natural black Kadapa limestone paving slabs and architectural surfaces.",
    image: "/Walkway/Kadapa.JPG",
    sortOrder: 11,
  },
  {
    id: "subcat-green-kota",
    name: "Green Kota",
    slug: "green-kota",
    category: "parking-walkway",
    description: "Traditional greenish-toned Kota limestone pavers for high-traffic walkways and exterior paving.",
    image: "/Walkway/Green kota.JPG",
    sortOrder: 12,
  },
  {
    id: "subcat-brown-kota",
    name: "Brown Kota",
    slug: "brown-kota",
    category: "parking-walkway",
    description: "Warm earth-toned Brown Kota limestone paving slabs and tactile finishes.",
    image: "/Walkway/Brown kota.JPG",
    sortOrder: 13,
  },
  {
    id: "subcat-red-mandana",
    name: "Red Mandana",
    slug: "red-mandana",
    category: "parking-walkway",
    description: "High-durability Red Mandana sandstone paving and natural split surfaces.",
    image: "/Walkway/Red mandana.jpg",
    sortOrder: 14,
  },
];

export function applyUpdates() {
  const taxonomyFile = path.join(process.cwd(), "data/catalogue-taxonomy.ts");
  let content = fs.readFileSync(taxonomyFile, "utf-8");

  // 1. Update rawCatalogueStructure to empty object for "Parking/Walkway"
  content = content.replace(
    /export const rawCatalogueStructure = \{[\s\S]*?"Wall Cladding": \{\}\s*\};/,
    `export const rawCatalogueStructure = {\n  "Parking/Walkway": {},\n  "Wall Cladding": {}\n};`
  );

  // 2. Append walkway products to realProducts
  // Look for end of realProducts: "sortOrder": 167\n  }\n];
  const productsJson = walkwayProducts.map(p => `  ${JSON.stringify(p, null, 2).replace(/\n/g, "\n  ")}`).join(",\n");
  
  const cncLastPattern = /(\{\s*"id":\s*"prod-cnc-inlay-19"[\s\S]*?"sortOrder":\s*167\s*\}\n)(\];)/;
  if (!cncLastPattern.test(content)) {
    throw new Error("Could not find end of realProducts array matching prod-cnc-inlay-19");
  }
  content = content.replace(cncLastPattern, `$1,\n${productsJson}\n$2`);

  // 3. Append walkwaySubcategories to realSubcategories
  // Look for end of realSubcategories: "subcat-cnc-inlay" block
  const subcatJson = walkwaySubcategories.map(s => `  ${JSON.stringify(s, null, 2).replace(/\n/g, "\n  ")}`).join(",\n");
  const cncSubcatPattern = /(\{\s*"id":\s*"subcat-cnc-inlay"[\s\S]*?"sortOrder":\s*9\s*\}\n)(\];)/;
  if (!cncSubcatPattern.test(content)) {
    throw new Error("Could not find end of realSubcategories array matching subcat-cnc-inlay");
  }
  content = content.replace(cncSubcatPattern, `$1,\n${subcatJson}\n$2`);

  fs.writeFileSync(taxonomyFile, content, "utf-8");
  console.log("Successfully updated data/catalogue-taxonomy.ts with 5 subcategories and 21 products!");
}

applyUpdates();
