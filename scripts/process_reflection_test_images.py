#!/usr/bin/env python3
import os
import sys
import json
import cv2
import numpy as np

SOURCE_DIR = 'public/products/Granite-original-images'
OUTPUT_DIR = 'public/products/Granite-clean'
COMPARISON_DIR = 'public/products/Granite-clean-comparisons'

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR, exist_ok=True)
if not os.path.exists(COMPARISON_DIR):
    os.makedirs(COMPARISON_DIR, exist_ok=True)

TEST_IMAGES = [
    {"source": "adhunik brown granite.jpeg", "name": "Adhunik Brown"},
    {"source": "bess paradise granite.jpeg", "name": "Bess Paradise"},
    {"source": "black marquina r granite.jpeg", "name": "Black Marquina R"},
    {"source": "lakha red granite.jpeg", "name": "Lahka Red"},
    {"source": "grey paradise granite.jpeg", "name": "Gray Paradise"},
    {"source": "forest brown granite.jpeg", "name": "Forest Brown"},
    {"source": "royal gold granite.jpeg", "name": "Royal Gold"},
    {"source": "kashmiri white granite.jpeg", "name": "Kashmiri White"}
]

def process_image(src_filename, prod_name):
    src_path = os.path.join(SOURCE_DIR, src_filename)
    if not os.path.exists(src_path):
        print(f"Source file not found: {src_path}")
        return None

    img = cv2.imread(src_path)
    if img is None:
        return None

    h, w, c = img.shape
    
    # Color spaces
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    lab = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    v_chan = hsv[:, :, 2]
    s_chan = hsv[:, :, 1]
    l_chan = lab[:, :, 0]

    # Compute local mean luminance using Gaussian blur (ksize 51x51)
    local_mean_l = cv2.GaussianBlur(l_chan, (51, 51), 0)
    l_diff = l_chan.astype(np.int16) - local_mean_l.astype(np.int16)

    # 1. Specular Reflection Mask: High lightness, low saturation, high local delta
    specular_mask = (v_chan > 240) & (s_chan < 35) & (l_chan > 235) & (l_diff > 30)

    # 2. Geometric tube-light filter
    mask_u8 = (specular_mask * 255).astype(np.uint8)
    kernel_close = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    mask_grouped = cv2.morphologyEx(mask_u8, cv2.MORPH_CLOSE, kernel_close)

    contours, _ = cv2.findContours(mask_grouped, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    final_mask = np.zeros((h, w), dtype=np.uint8)
    reflection_count = 0
    total_reflection_pixels = 0

    for cnt in contours:
        area = cv2.contourArea(cnt)
        if area > 50:
            x, y, cw, ch = cv2.boundingRect(cnt)
            aspect = max(cw, ch) / (min(cw, ch) + 1e-5)
            # Filter geometric light strips or bright highlight spots
            if aspect > 2.0 or area > 400 or (v_chan[y:y+ch, x:x+cw].mean() > 248):
                cv2.drawContours(final_mask, [cnt], -1, 255, -1)
                total_reflection_pixels += area
                reflection_count += 1

    # Dilate mask slightly (5px) to enclose highlight edge glow
    kernel_dilate = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (7, 7))
    final_mask = cv2.dilate(final_mask, kernel_dilate, iterations=1)

    specular_pct = (total_reflection_pixels / (h * w)) * 100

    # Localized texture-aware inpainting
    if np.any(final_mask > 0):
        # Multi-scale Telea inpainting
        inpainted = cv2.inpaint(img, final_mask, inpaintRadius=5, flags=cv2.INPAINT_TELEA)
        # Re-inject local stone grain noise into inpainted region to avoid artificial smoothness
        gray_orig = gray.astype(float)
        grain_noise = gray_orig - cv2.GaussianBlur(gray_orig, (5, 5), 0)
        
        inpainted_float = inpainted.astype(float)
        for i in range(3):
            inpainted_float[:, :, i] += grain_noise * 0.3
        inpainted = np.clip(inpainted_float, 0, 255).astype(np.uint8)

        # STRICT RULE: Preserve 100% of unmasked original pixels bit-for-bit
        cleaned = img.copy()
        mask_bool = final_mask > 0
        cleaned[mask_bool] = inpainted[mask_bool]
    else:
        cleaned = img.copy()

    # Save output JPEG
    out_filename = f"{prod_name}.jpeg"
    out_path = os.path.join(OUTPUT_DIR, out_filename)
    cv2.imwrite(out_path, cleaned, [int(cv2.IMWRITE_JPEG_QUALITY), 95])

    # Generate 100% Zoom Crop Comparison Image
    crop_w, crop_h = 400, 400
    # Find center of main reflection or center of image
    if np.any(final_mask > 0):
        M = cv2.moments(final_mask)
        if M["m00"] > 0:
            cx = int(M["m10"] / M["m00"])
            cy = int(M["m01"] / M["m00"])
        else:
            cx, cy = w // 2, h // 2
    else:
        cx, cy = w // 2, h // 2

    left = max(0, min(w - crop_w, cx - crop_w // 2))
    top = max(0, min(h - crop_h, cy - crop_h // 2))

    orig_crop = img[top:top+crop_h, left:left+crop_w]
    clean_crop = cleaned[top:top+crop_h, left:left+crop_w]
    mask_crop = cv2.cvtColor(final_mask[top:top+crop_h, left:left+crop_w], cv2.COLOR_GRAY2BGR)

    # Label headers
    banner_h = 40
    header = np.zeros((banner_h, crop_w * 2 + 10, 3), dtype=np.uint8) + 30
    cv2.putText(header, f"ORIGINAL (100% Crop)", (20, 26), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
    cv2.putText(header, f"CLEANED (Reflection Removed)", (crop_w + 30, 26), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 128), 2)

    # Side-by-side composite
    sbs_body = np.zeros((crop_h, crop_w * 2 + 10, 3), dtype=np.uint8) + 20
    sbs_body[:, :crop_w] = orig_crop
    sbs_body[:, crop_w+10:] = clean_crop

    sbs_full = np.vstack([header, sbs_body])
    comp_path = os.path.join(COMPARISON_DIR, f"comp_{prod_name}.jpg")
    cv2.imwrite(comp_path, sbs_full, [int(cv2.IMWRITE_JPEG_QUALITY), 95])

    return {
        "product_name": prod_name,
        "source_filename": src_filename,
        "output_filename": out_filename,
        "output_path": out_path,
        "comparison_path": comp_path,
        "original_res": f"{w}x{h} px",
        "reflection_count": reflection_count,
        "specular_pct": f"{specular_pct:.2f}%",
        "has_reflection": reflection_count > 0
    }

def main():
    results = []
    print("Processing 8 test Granite images...")
    for item in TEST_IMAGES:
        res = process_image(item["source"], item["name"])
        if res:
            results.append(res)
            print(f"Processed: {item['name']:20s} | Res: {res['original_res']} | Refl Pct: {res['specular_pct']:6s} | Refl Count: {res['reflection_count']}")

    print("\nBatch processing of test images complete.")

if __name__ == '__main__':
    main()
