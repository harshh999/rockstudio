import os
import re
import json
import urllib.parse

# Folders to scan
folders = [
    ('Granite', 'public/products/Granite', 'granite', 'Granite'),
    ('Marble', 'public/products/Marbles', 'marble', 'Marble'),
    ('Onyx', 'public/products/Onyx', 'onyx', 'Onyx'),
    ('Sandstone', 'public/products/Sandstone', 'sandstone', 'Sandstone')
]

def slugify(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_-]+', '-', text)
    return text.strip('-')

def classify_marble(name: str):
    if 'YTD' in name.upper():
        return 'yet-to-decide', 'Yet To Decide'
    if re.search(r'\bINDIAN\b', name, re.IGNORECASE):
        return 'indian-marble', 'Indian Marble'
    if re.search(r'\(\s*B\s*\)', name, re.IGNORECASE):
        return 'brazilian-marble', 'Brazilian Marble'
    if re.search(r'\(\s*IT', name, re.IGNORECASE):
        return 'italian-marble', 'Italian Marble'
    return 'marble-collection', 'Marble Collection'

slug_counts = {}

def get_unique_slug(base: str) -> str:
    s = slugify(base)
    if not s:
        s = 'product'
    cnt = slug_counts.get(s, 0) + 1
    slug_counts[s] = cnt
    return s if cnt == 1 else f"{s}-{cnt}"

real_products = []

subcat_defs = [
    ('brazilian-marble', 'Brazilian Marble', 'marble', 'Imported Brazilian marble slabs with unique veining and high polish.'),
    ('italian-marble', 'Italian Marble', 'marble', 'Classic Italian marble slabs, featuring elegant tones and distinct patterns.'),
    ('indian-marble', 'Indian Marble', 'marble', 'Fine domestic Indian marble sourced from premium quarries.'),
    ('yet-to-decide', 'Yet To Decide', 'marble', 'Unclassified / Yet To Decide marble selection.'),
    ('marble-collection', 'Marble Collection', 'marble', 'Curated marble slabs and natural stone tiles.'),
    ('granite-collection', 'Granite Collection', 'granite', 'High-density natural granite slabs.'),
    ('onyx-collection', 'Onyx Collection', 'onyx', 'Exotic translucent onyx material.'),
    ('sandstone-collection', 'Sandstone Collection', 'sandstone', 'Warm, textured sandstone blocks and tiles.')
]

real_subcats = []
for sub_id, sub_name, sub_cat, sub_desc in subcat_defs:
    real_subcats.append({
        'id': f"subcat-{sub_id}",
        'name': sub_name,
        'slug': sub_id,
        'category': sub_cat,
        'description': sub_desc,
        'image': '',
        'sortOrder': len(real_subcats) + 1
    })

sort_order = 1
category_counts = {'Granite': 0, 'Marble': 0, 'Onyx': 0, 'Sandstone': 0}

for cat_name, folder_path, cat_slug, cat_display in folders:
    if not os.path.exists(folder_path):
        print(f"Directory missing: {folder_path}")
        continue
    files = sorted([f for f in os.listdir(folder_path) if not f.startswith('.')])
    category_counts[cat_name] = len(files)
    
    for f in files:
        name_no_ext, _ = os.path.splitext(f)
        p_slug = get_unique_slug(name_no_ext)
        
        folder_url_name = 'Marbles' if cat_name == 'Marble' else cat_name
        encoded_filename = urllib.parse.quote(f)
        hero_image = f"/products/{folder_url_name}/{encoded_filename}"
        
        subcat_slug = f"{cat_slug}-collection"
        if cat_name == 'Marble':
            subcat_slug, _ = classify_marble(name_no_ext)
            
        real_products.append({
            'id': f"prod-{p_slug}",
            'name': name_no_ext,
            'slug': p_slug,
            'category': cat_slug,
            'subcategory': subcat_slug,
            'shortDescription': f"{name_no_ext} - {cat_display}",
            'description': f"Premium natural {cat_display} material: {name_no_ext}.",
            'heroImage': hero_image,
            'gallery': [hero_image],
            'featured': (sort_order % 12 == 0),
            'sortOrder': sort_order
        })
        sort_order += 1

ts_content = f"""import type {{ ProductCategory, ProductSubcategory, Product }} from "@/types";

export const rawCatalogueStructure = {{
  CNC: {{
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
  }},
  Kota: {{
    "Green": [],
    "Brown": [],
    "Andhra Gray": []
  }},
  "Wall Cladding": {{
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
  }}
}};

function slugify(text: string): string {{
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\\w\\s-]/g, "")
    .replace(/[\\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}}

const sampleMaterialImages: Record<string, string> = {{
  granite: "/HeroPage/Granite_1.png",
  cnc: "/HeroPage/CNC_1.jpg",
  marble: "/HeroPage/Marble_1.png",
  onyx: "/HeroPage/Onyx_1.jpg",
  sandstone: "/HeroPage/Sandstone_1.png",
  "wall-cladding": "/HeroPage/WallCladding_1.jpg",
}};

export const categories: ProductCategory[] = [
  {{
    id: "cat-marble",
    name: "Marble",
    slug: "marble",
    description: "Classic imported and Italian marble slabs, featuring distinct veins and elegant translucent tones.",
    image: sampleMaterialImages["marble"],
    sortOrder: 1,
  }},
  {{
    id: "cat-granite",
    name: "Granite",
    slug: "granite",
    description: "Durable, high-density natural granite sourced from top domestic and international quarries.",
    image: sampleMaterialImages["granite"],
    sortOrder: 2,
  }},
  {{
    id: "cat-cnc",
    name: "CNC",
    slug: "cnc",
    description: "Precision CNC carved, fluted, inlaid, and 3D architectural stone surfaces.",
    image: sampleMaterialImages["cnc"],
    sortOrder: 3,
  }},
  {{
    id: "cat-onyx",
    name: "Onyx",
    slug: "onyx",
    description: "Exotic translucent onyx varieties suited for backlit feature walls and luxury accents.",
    image: sampleMaterialImages["onyx"],
    sortOrder: 4,
  }},
  {{
    id: "cat-sandstone",
    name: "Sand Stone",
    slug: "sandstone",
    description: "Warm, textured sandstone blocks and cobbles for interior and exterior architectural accents.",
    image: sampleMaterialImages["sandstone"],
    sortOrder: 5,
  }},
  {{
    id: "cat-wall-cladding",
    name: "Wall Cladding",
    slug: "wall-cladding",
    description: "Tactile natural stone, slate, and travertine wall cladding panels and stacked tiles.",
    image: sampleMaterialImages["wall-cladding"],
    sortOrder: 6,
  }},
  {{
    id: "cat-kota",
    name: "Kota",
    slug: "kota",
    description: "Fine-grained blue-green and brown limestone flooring and paving slabs.",
    image: "/images/categories/kota.jpg",
    sortOrder: 7,
  }},
  {{
    id: "cat-kaddapa",
    name: "Kaddapa",
    slug: "kaddapa",
    description: "Deep black natural limestone suited for interior, exterior, and landscaping.",
    image: "/images/categories/kaddapa.jpg",
    sortOrder: 8,
  }},
];

// Generated real products for Granite, Marble, Onyx, Sandstone
const realProducts: Product[] = {json.dumps(real_products, indent=2)};

const realSubcategories: ProductSubcategory[] = {json.dumps(real_subcats, indent=2)};

export const subcategories: ProductSubcategory[] = [...realSubcategories];
export const products: Product[] = [...realProducts];

const slugCounts = new Map<string, number>();

// Register real product slugs to prevent collisions with CNC/Kota/Wall Cladding
realProducts.forEach((p) => slugCounts.set(slugify(p.name), 1));

function getUniqueSlug(baseText: string): string {{
  const baseSlug = slugify(baseText);
  const count = (slugCounts.get(baseSlug) || 0) + 1;
  slugCounts.set(baseSlug, count);
  return count === 1 ? baseSlug : `${{baseSlug}}-${{count}}`;
}}

let subcatSortOrder = realSubcategories.length + 1;
let productSortOrder = realProducts.length + 1;

for (const [categoryName, categoryContent] of Object.entries(rawCatalogueStructure)) {{
  const catSlug = slugify(categoryName);

  if (Array.isArray(categoryContent)) {{
    const subcatName = `${{categoryName}} Collection`;
    const subcatSlug = getUniqueSlug(subcatName);
    const subcatId = `subcat-${{subcatSlug}}`;

    subcategories.push({{
      id: subcatId,
      name: subcatName,
      slug: subcatSlug,
      category: catSlug,
      description: `${{categoryName}} material items and finishes.`,
      image: sampleMaterialImages[catSlug] || "",
      sortOrder: subcatSortOrder++,
    }});

    for (const itemName of categoryContent) {{
      const pSlug = getUniqueSlug(itemName);
      products.push({{
        id: `prod-${{pSlug}}`,
        name: itemName,
        slug: pSlug,
        category: catSlug,
        subcategory: subcatSlug,
        shortDescription: `${{itemName}} - ${{categoryName}}`,
        description: `Premium natural ${{categoryName}} material: ${{itemName}}.`,
        heroImage: sampleMaterialImages[catSlug] || "",
        gallery: [],
        featured: productSortOrder % 15 === 0,
        sortOrder: productSortOrder++,
      }});
    }}
  }} else {{
    for (const [subcatKey, subcatContent] of Object.entries(categoryContent)) {{
      if (Array.isArray(subcatContent)) {{
        const subcatSlug = getUniqueSlug(subcatKey);
        const subcatId = `subcat-${{subcatSlug}}`;

        subcategories.push({{
          id: subcatId,
          name: subcatKey,
          slug: subcatSlug,
          category: catSlug,
          description: `${{subcatKey}} range within ${{categoryName}}.`,
          image: sampleMaterialImages[catSlug] || "",
          sortOrder: subcatSortOrder++,
        }});

        for (const itemName of subcatContent) {{
          const pSlug = getUniqueSlug(itemName);
          products.push({{
            id: `prod-${{pSlug}}`,
            name: itemName,
            slug: pSlug,
            category: catSlug,
            subcategory: subcatSlug,
            shortDescription: `${{itemName}} (${{subcatKey}})`,
            description: `Curated natural stone material ${{itemName}} from our ${{subcatKey}} collection.`,
            heroImage: sampleMaterialImages[catSlug] || "",
            gallery: [],
            featured: productSortOrder % 15 === 0,
            sortOrder: productSortOrder++,
          }});
        }}
      }} else if (typeof subcatContent === "object" && subcatContent !== null) {{
        const groupName = subcatKey;
        for (const [nestedName, nestedItems] of Object.entries(subcatContent)) {{
          const fullSubcatName = `${{groupName}} - ${{nestedName}}`;
          const subcatSlug = getUniqueSlug(fullSubcatName);
          const subcatId = `subcat-${{subcatSlug}}`;

          subcategories.push({{
            id: subcatId,
            name: fullSubcatName,
            slug: subcatSlug,
            category: catSlug,
            description: `${{groupName}} (${{nestedName}}) natural stone selection.`,
            image: sampleMaterialImages[catSlug] || "",
            sortOrder: subcatSortOrder++,
          }});

          if (Array.isArray(nestedItems)) {{
            for (const itemName of nestedItems) {{
              const pSlug = getUniqueSlug(itemName);
              products.push({{
                id: `prod-${{pSlug}}`,
                name: itemName,
                slug: pSlug,
                category: catSlug,
                subcategory: subcatSlug,
                shortDescription: `${{itemName}} (${{fullSubcatName}})`,
                description: `Exquisite ${{fullSubcatName}} material: ${{itemName}}.`,
                heroImage: sampleMaterialImages[catSlug] || "",
                gallery: [],
                featured: productSortOrder % 15 === 0,
                sortOrder: productSortOrder++,
              }});
            }}
          }}
        }}
      }}
    }}
  }}
}}
"""

with open('data/catalogue-taxonomy.ts', 'w') as f:
    f.write(ts_content)

print("Updated data/catalogue-taxonomy.ts successfully!")
print(f"Generated {len(real_products)} real products across Granite, Marble, Onyx, Sandstone.")
print("Category counts:")
for cat, cnt in category_counts.items():
    print(f"  {cat}: {cnt}")
