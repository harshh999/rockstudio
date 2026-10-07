#!/usr/bin/env python3
import os
import sys
import json
import shutil
import re

SOURCE_DIR = 'public/products/Granite-original-images'
DEST_DIR = 'public/images/products/Granite'
TAXONOMY_FILE = 'data/catalogue-taxonomy.ts'

# Normalized filename mapping dictionary
# Maps exact source filename in Granite-original-images to product name in catalogue
MAPPING_RULES = {
  'adhunik brown granite.jpeg': 'Adhunik Brown',
  'astodia ivory granite.jpeg': 'Astodia Ivory',
  'astodia ivory granitee.jpeg': 'Astodia Ivory 2',
  'bess paradise granite.jpeg': 'Bess Paradise',
  'black marquina r granite.jpeg': 'Black Marquina R',
  'burgandy white granite.jpeg': 'Burgandy White ',
  'classic ivory granite.jpeg': 'Classic Ivory',
  'coffee pearl granite.jpeg': 'Coffee Pearl',
  'D gray granite.jpeg': 'D Gray',
  'diamond pearl granite.jpeg': 'Diamond Pearl',
  'dyna blue granite.jpeg': 'Dyna Blue ',
  'forest brown granite.jpeg': 'Forest Brown',
  'godhra grey granite.jpeg': 'Godhra gray',
  'grey paradise granite.jpeg': 'Gray Paradise',
  'hocco brown granite.jpeg': 'Hocco Brown ',
  'kashmiri white granite.jpeg': 'Kashmiri White',
  'kotda black granite.jpeg': 'Kotda Black',
  'kupam white granite.jpeg': 'Kupam White',
  'lakha red granite.jpeg': 'Lakha Red',
  'lava grey granite.jpeg': 'Lava Gray',
  'melton brown granite.jpeg': 'Melton Brown',
  'mountain brown granite-2.jpeg': 'Mountain Brown 2',
  'mountain brown granite.jpeg': 'Mountain Brown',
  'P white granite.jpeg': 'P White ',
  'pebble black granite.jpeg': 'Pebble Black',
  'platinum gray granite.jpeg': 'Platinum Gray',
  'prada gold granite.jpeg': 'Prada Gold',
  'rajyog brown granite.jpeg': 'Rajyog Brown',
  'raw silk granite.jpeg': 'Raw Silk',
  'river white granite.jpeg': 'River White',
  'royal brown granite.jpeg': 'Royal Brown',
  'royal gold granite.jpeg': 'Royal Gold',
  'silky silver granite.jpeg': 'Silky Silver',
  'silver river granite.jpeg': 'Silver River',
  'sk blue granite.jpeg': 'SK Blue',
  'steel gray granite.jpeg': 'Steel gray',
  'swiss brown granite .jpeg': 'Swiss Brown',
  'symphony ivory granite.jpeg': 'Symphony Ivory ',
  'walet paradise granite.jpeg': 'Walet Paradise',
  'granite ytd last.jpeg': 'YTD 6',
  'zubrana grey granite.jpeg': 'Zubrana Gray'
}

def generate_report():
    source_files = sorted([f for f in os.listdir(SOURCE_DIR) if not f.startswith('.')])
    target_files = sorted([f for f in os.listdir(DEST_DIR) if not f.startswith('.') and f.endswith('.png')])

    matched_list = []
    matched_products = set()

    for sf, prod in MAPPING_RULES.items():
        if os.path.exists(os.path.join(SOURCE_DIR, sf)):
            dest = f'public/products/Granite/{prod}.jpeg'
            matched_list.append({
                'source': sf,
                'product': prod,
                'destination': dest
            })
            matched_products.add(prod)

    unmatched_sources = [f for f in source_files if f not in MAPPING_RULES]
    all_products = set([os.path.splitext(tf)[0] for tf in target_files])
    products_without_sources = sorted(list(all_products - matched_products))

    return {
        'total_source_images': len(source_files),
        'total_granite_products': len(target_files),
        'matched_count': len(matched_list),
        'matched': matched_list,
        'unmatched_source_images': unmatched_sources,
        'products_without_source_images': products_without_sources
    }

def execute_replacement():
    report = generate_report()
    print(f"Executing replacement for {len(report['matched'])} matched Granite product images...")

    # Copy files
    for item in report['matched']:
        src_path = os.path.join(SOURCE_DIR, item['source'])
        dest_filename = f"{item['product']}.jpeg"
        dest_path = os.path.join(DEST_DIR, dest_filename)
        shutil.copy2(src_path, dest_path)
        print(f"Copied: {item['source']} -> {dest_path}")

    # Update taxonomy file references from .png to .jpeg for Granite products
    with open(TAXONOMY_FILE, 'r') as f:
        taxonomy_content = f.read()

    updated_content = taxonomy_content
    for item in report['matched']:
        prod_name = item['product']
        # URL encode spaces if present
        url_png = f"/products/Granite/{prod_name.replace(' ', '%20')}.png"
        url_jpeg = f"/products/Granite/{prod_name.replace(' ', '%20')}.jpeg"
        updated_content = updated_content.replace(url_png, url_jpeg)

    with open(TAXONOMY_FILE, 'w') as f:
        f.write(updated_content)

    print("Updated data/catalogue-taxonomy.ts image references to .jpeg successfully.")

if __name__ == '__main__':
    mode = sys.argv[1] if len(sys.argv) > 1 else 'report'
    if mode == 'report':
        rep = generate_report()
        print(json.dumps(rep, indent=2))
    elif mode == 'execute':
        execute_replacement()
    else:
        print("Usage: python3 scripts/replace_granite_originals.py [report|execute]")
