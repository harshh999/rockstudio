import type { ProductCategory, ProductSubcategory, Product } from "@/types";

export const rawCatalogueStructure = {
  Granite: {
    "Indian Granite": [
      "Zed Black",
      "Telephone Black",
      "Super Black",
      "Silver River",
      "Silky Blue",
      "Shiva Gold Canvas",
      "S White",
      "S K Blue",
      "River White",
      "Rajasthan Black",
      "P White",
      "New Kashmir White",
      "Moon White",
      "Misty White",
      "Merry Gold",
      "Imperial Gold",
      "Imperial Black",
      "Hassan Green",
      "Hassan Gold",
      "Forest Black",
      "Colonial White"
    ],
    "Imported Granite": [
      "African Brown",
      "African Brown",
      "Blue In Night",
      "Blue Pearl",
      "European Gold",
      "Nano White",
      "Silver Pearl",
      "Volga Blue"
    ],
    "Gujarat Granite": [
      "Crystal Blue",
      "Crystal Red",
      "G D Brown",
      "G D Brown",
      "Godhra Grey"
    ]
  },
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
  Marble: {
    "Imported Marble": [
      "Agora Beige",
      "Agora Beige",
      "Antique Beige",
      "Armani Brown",
      "Beige Serfegenti",
      "Bela Pink",
      "Blue Bresia",
      "Bresia Color",
      "Bresia Onachita",
      "Brown William",
      "Burburry Beige",
      "Cetara Grey",
      "Crackjack Brown",
      "Crema Novel",
      "Dyna",
      "Dyna",
      "Dyna",
      "Embasy Brown",
      "Era Grey",
      "Era Grey",
      "Era Grey",
      "Firata Fisco",
      "Golden Brown",
      "Golden Spider",
      "Golder Spider",
      "Grey Breccia",
      "Grey Feather",
      "Grey William",
      "Grey William Italy",
      "Greyfito",
      "Gulati Dyna",
      "Light Emprador",
      "Michle Angelo",
      "Opera White",
      "Pietra Brown",
      "Repen Grey",
      "Rosso Pistolo",
      "Royal Grey",
      "Silver",
      "Silver River Light",
      "Silver River",
      "Sofitia",
      "Sonata Grey",
      "Sonata Grey",
      "Statuario",
      "Sugar Beige",
      "Venetino",
      "Wavy Grey",
      "White Pearl"
    ],
    "Italian Marble": {
      "Beige Flooring": [
        "Gulati Dyna",
        "Beige Serfegenti",
        "Bresia Onachita",
        "Bela Pink"
      ],
      "Onyx": [
        "Blue Onyx",
        "Crystal Mango",
        "Bricks Onyx",
        "Green Onyx"
      ],
      "Brown": [
        "Pietra Brown",
        "Embassy Brown",
        "Golden Brown",
        "Armani Brown"
      ],
      "White": [
        "White Pearl",
        "Opera White",
        "Michle Angelo",
        "Statuario"
      ],
      "Exterior Cladding": [
        "Noche Trevertino",
        "Beige Trevertino",
        "Silver Trevertino",
        "Golden Trevertino"
      ],
      "Exotic Marble - Bathroom - Staircase Cladding": [
        "Pure Black",
        "Armani Bronze",
        "Grey Orebico",
        "Cloudy Grey"
      ],
      "Grey Flooring": [
        "Levender Grey",
        "Grey William",
        "Cetara Grey",
        "Metallic Grey"
      ]
    }
  },
  Onyx: [
    "Blue Onyx",
    "Bricks Onyx",
    "Crystal Mango",
    "Green Onyx",
    "Pakistan Onyx",
    "Treva Onyx"
  ],
  Sandstone: [
    "Assam Green",
    "Brown Forest",
    "Brown Kandla Cobles",
    "Bundi Brown",
    "Bundi Chocolate",
    "Bundi Grey",
    "Chocolate Kota",
    "Dholpur Pink",
    "Dholpur Red"
  ],
  "Wall Cladding": {
    "Imported Wall Cladding": [
      "Beige Travertine",
      "Black Hole",
      "Golden Travertino",
      "Golden Travertino",
      "Noche Trevertino",
      "Red Trevertino",
      "Silver Trevertino",
      "Yellow Trevertino"
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

// Fallback high quality natural stone sample images for presentation prior to CMS uploads
const sampleMaterialImages: Record<string, string> = {
  granite: "/images/categories/granite.jpg",
  cnc: "/images/categories/cnc.jpg",
  marble: "/images/categories/marble.jpg",
  onyx: "/images/categories/onyx.jpg",
  sandstone: "/images/categories/sandstone.jpg",
  "wall-cladding": "/images/categories/wall-cladding.jpg",
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

// Process raw structure into subcategories & products arrays
export const subcategories: ProductSubcategory[] = [];
export const products: Product[] = [];

const slugCounts = new Map<string, number>();

function getUniqueSlug(baseText: string): string {
  const baseSlug = slugify(baseText);
  const count = (slugCounts.get(baseSlug) || 0) + 1;
  slugCounts.set(baseSlug, count);
  return count === 1 ? baseSlug : `${baseSlug}-${count}`;
}

let subcatSortOrder = 1;
let productSortOrder = 1;

for (const [categoryName, categoryContent] of Object.entries(rawCatalogueStructure)) {
  const catSlug = slugify(categoryName);

  if (Array.isArray(categoryContent)) {
    // Top-level array (e.g. Onyx, Sandstone)
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
    // Object containing subcategories
    for (const [subcatKey, subcatContent] of Object.entries(categoryContent)) {
      if (Array.isArray(subcatContent)) {
        // e.g. Granite -> "Imported Granites"
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
        // Nested subcategories (e.g. Marble -> Italian Marble -> [Beige Flooring, Onyx, etc.])
        const groupName = subcatKey; // e.g. "Italian Marble"
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
