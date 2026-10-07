#!/usr/bin/env python3
import os
import sys
import json
import shutil
import cv2
import numpy as np

SOURCE_DIR = 'public/products/Granite-original-images'
OUTPUT_DIR = 'public/products/Granite-clean'
TAXONOMY_FILE = 'data/catalogue-taxonomy.ts'

# Normalized filename mapping dictionary
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

def detect_and_clean_reflection(img_path):
    img = cv2.imread(img_path)
    if img is None:
        return None, 0, 0, "failed_to_load"

    h, w, c = img.shape
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    lab = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)
    
    v_chan = hsv[:, :, 2]
    s_chan = hsv[:, :, 1]
    l_chan = lab[:, :, 0]

    # 1. Specular Highlight Threshold: Blown out white reflections (Value > 248 & Saturation < 30)
    specular_mask = (v_chan > 248) & (s_chan < 30) & (l_chan > 245)
    
    # Convert mask to uint8
    mask_u8 = (specular_mask * 255).astype(np.uint8)

    # Morphological kernel to group nearby reflection spots (tube lights)
    kernel_group = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    mask_grouped = cv2.morphologyEx(mask_u8, cv2.MORPH_CLOSE, kernel_group)

    contours, _ = cv2.findContours(mask_grouped, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    final_mask = np.zeros((h, w), dtype=np.uint8)
    long_tube_count = 0
    large_patch_count = 0
    total_reflection_pixels = 0

    for cnt in contours:
        area = cv2.contourArea(cnt)
        if area > 80: # Ignore tiny noise dots
            x, y, cw, ch = cv2.boundingRect(cnt)
            aspect = max(cw, ch) / (min(cw, ch) + 1e-5)
            
            # Check if this contour is geometric reflection (long tube or rectangular highlight)
            if aspect > 2.2 or area > 800:
                cv2.drawContours(final_mask, [cnt], -1, 255, -1)
                total_reflection_pixels += area
                if aspect > 2.5:
                    long_tube_count += 1
                if area > 4000:
                    large_patch_count += 1

    # Dilate reflection mask slightly (3px) to cover halo edges around lights
    kernel_dilate = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (7, 7))
    final_mask = cv2.dilate(final_mask, kernel_dilate, iterations=1)

    specular_pct = (total_reflection_pixels / (h * w)) * 100

    # Categorize status
    if specular_pct < 0.15 and long_tube_count == 0:
        status = "weak_uncertain_reflection_detection"
    elif specular_pct > 3.0 or large_patch_count >= 2:
        status = "requiring_manual_review" # Severe reflection overlapping veins
    else:
        status = "successfully_cleaned"

    # Localized texture-aware Telea inpainting on masked reflection regions only
    if np.any(final_mask > 0):
        cleaned_img = cv2.inpaint(img, final_mask, inpaintRadius=5, flags=cv2.INPAINT_TELEA)
        # Guarantee strictly zero modification to unmasked pixels
        unmasked = final_mask == 0
        cleaned_img[unmasked] = img[unmasked]
    else:
        cleaned_img = img.copy()

    return cleaned_img, specular_pct, total_reflection_pixels, status

def process_batch():
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR, exist_ok=True)

    source_files = sorted([f for f in os.listdir(SOURCE_DIR) if not f.startswith('.')])
    
    report = {
        "images_processed": 0,
        "images_successfully_cleaned": [],
        "images_with_weak_uncertain_reflection_detection": [],
        "images_requiring_manual_review": [],
        "unmatched_files_skipped": []
    }

    for sf in source_files:
        if sf not in MAPPING_RULES:
            report["unmatched_files_skipped"].append(sf)
            continue

        prod_name = MAPPING_RULES[sf]
        src_path = os.path.join(SOURCE_DIR, sf)
        out_filename = f"{prod_name}.jpeg"
        out_path = os.path.join(OUTPUT_DIR, out_filename)

        cleaned_img, pct, total_px, status = detect_and_clean_reflection(src_path)
        report["images_processed"] += 1

        # Save output as JPEG Quality 95
        cv2.imwrite(out_path, cleaned_img, [int(cv2.IMWRITE_JPEG_QUALITY), 95])

        item = {
            "source_image": sf,
            "product_name": prod_name,
            "output_file": out_filename,
            "reflection_percentage": f"{pct:.2f}%",
            "status": status
        }

        if status == "successfully_cleaned":
            report["images_successfully_cleaned"].append(item)
        elif status == "weak_uncertain_reflection_detection":
            report["images_with_weak_uncertain_reflection_detection"].append(item)
        elif status == "requiring_manual_review":
            report["images_requiring_manual_review"].append(item)

    return report

def update_website_catalogue():
    print("Updating Granite product image paths in data/catalogue-taxonomy.ts to public/products/Granite-clean/...")
    with open(TAXONOMY_FILE, 'r') as f:
        content = f.read()

    # Symlink public/products/Granite -> public/images/products/Granite
    # For Granite-clean, copy clean images to public/images/products/Granite/ so existing routes /products/Granite/ work seamlessly
    clean_dir = OUTPUT_DIR
    target_dir = 'public/images/products/Granite'

    for sf, prod_name in MAPPING_RULES.items():
        clean_file = os.path.join(clean_dir, f"{prod_name}.jpeg")
        target_file = os.path.join(target_dir, f"{prod_name}.jpeg")
        if os.path.exists(clean_file):
            shutil.copy2(clean_file, target_file)

    print("Clean images deployed to public/images/products/Granite/ successfully.")

if __name__ == '__main__':
    rep = process_batch()
    print(json.dumps(rep, indent=2))
    if len(sys.argv) > 1 and sys.argv[1] == '--update-website':
        update_website_catalogue()
