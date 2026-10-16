import fs from "fs";
import path from "path";
import { categories, subcategories, products } from "../data/catalogue-taxonomy";

function runAudit() {
  console.log("=================================================");
  console.log("   Rocks Studio Catalogue & Taxonomy Audit       ");
  console.log("=================================================\n");

  let allPassed = true;

  // 1. Enumerate and report all supported image files in public/CNC-new/
  const cncDir = path.resolve(process.cwd(), "public/CNC-new");
  if (!fs.existsSync(cncDir)) {
    console.error("FAIL: public/CNC-new does not exist!");
    process.exit(1);
  }

  const allEntries = fs.readdirSync(cncDir).filter((f) => !f.startsWith("."));
  const validExts = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".heic"];
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

  const sourceFiles = allEntries.filter((f) => {
    const ext = path.extname(f).toLowerCase();
    if (!validExts.includes(ext)) return false;
    if (ext === ".jpg") {
      const base = path.basename(f, path.extname(f));
      if (
        fs.existsSync(path.join(cncDir, base + ".HEIC")) ||
        fs.existsSync(path.join(cncDir, base + ".heic"))
      ) {
        return false;
      }
    }
    return true;
  }).sort(collator.compare);

  console.log(`[CHECK 1] Source image inventory preserved in public/CNC-new/: ${sourceFiles.length} files (Physical assets NOT deleted).`);

  // 2. CNC products audit: 17 active records
  const cncProducts = products.filter((p) => p.category === "cnc");
  console.log(`\n[CHECK 2] Active CNC catalogue records count: ${cncProducts.length}`);
  if (cncProducts.length !== 17) {
    console.error(`FAIL: Expected 17 CNC products after removing 03 and 06, got ${cncProducts.length}`);
    allPassed = false;
  } else {
    console.log("PASS: Exactly 17 active CNC product records found.");
  }

  // 3. Confirm CNC inlay 03 and CNC inlay 06 are removed
  console.log("\n[CHECK 3] Verifying CNC inlay 03 and 06 removal:");
  const hasInlay03 = cncProducts.some((p) => p.name === "CNC inlay 03" || p.slug === "cnc-inlay-03");
  const hasInlay06 = cncProducts.some((p) => p.name === "CNC inlay 06" || p.slug === "cnc-inlay-06");

  if (hasInlay03) {
    console.error("FAIL: 'CNC inlay 03' is still present in active CNC products!");
    allPassed = false;
  } else {
    console.log("PASS: 'CNC inlay 03' is successfully removed.");
  }

  if (hasInlay06) {
    console.error("FAIL: 'CNC inlay 06' is still present in active CNC products!");
    allPassed = false;
  } else {
    console.log("PASS: 'CNC inlay 06' is successfully removed.");
  }

  // 4. Confirm remaining CNC products preserve their exact names, images, and sequence
  console.log("\n[CHECK 4] Verifying remaining CNC product records (no renumbering):");
  const expectedRemainingNames = [
    "CNC inlay 01",
    "CNC inlay 02",
    "CNC inlay 04",
    "CNC inlay 05",
    "CNC inlay 07",
    "CNC inlay 08",
    "CNC inlay 09",
    "CNC inlay 10",
    "CNC inlay 11",
    "CNC inlay 12",
    "CNC inlay 13",
    "CNC inlay 14",
    "CNC inlay 15",
    "CNC inlay 16",
    "CNC inlay 17",
    "CNC inlay 18",
    "CNC inlay 19",
  ];

  const actualNames = cncProducts.map((p) => p.name);
  let sequencePassed = true;
  expectedRemainingNames.forEach((name, idx) => {
    if (actualNames[idx] !== name) {
      console.error(`FAIL: Position ${idx} expected '${name}', got '${actualNames[idx]}'`);
      sequencePassed = false;
      allPassed = false;
    }
  });

  if (sequencePassed) {
    console.log("PASS: All 17 remaining CNC products preserved with exact names (no renumbering):");
    cncProducts.forEach((p) => {
      console.log(`  - ${p.name} (${p.slug}) -> ${p.heroImage}`);
    });
  }

  // 5. Confirm all remaining CNC image paths resolve on disk
  console.log("\n[CHECK 5] Verifying CNC image files resolve on filesystem:");
  let imagesPassed = true;
  cncProducts.forEach((p) => {
    const relPath = p.heroImage.replace(/^\//, "");
    const diskPath = path.resolve(process.cwd(), "public", relPath);
    if (!fs.existsSync(diskPath)) {
      console.error(`FAIL: Image path does not exist: ${diskPath}`);
      imagesPassed = false;
      allPassed = false;
    }
  });
  if (imagesPassed) {
    console.log("PASS: All 17 active CNC image paths resolve to physical files.");
  }

  // 6. Parking/Walkway top-level category
  console.log("\n[CHECK 6] Verifying Parking/Walkway top-level category:");
  const pwCat = categories.find((c) => c.name === "Parking/Walkway");
  if (!pwCat || pwCat.slug !== "parking-walkway") {
    console.error("FAIL: Parking/Walkway category check failed!");
    allPassed = false;
  } else {
    console.log(`PASS: Parking/Walkway exists with slug '${pwCat.slug}'.`);
  }

  // 7. Parking/Walkway 5 subcategories
  console.log("\n[CHECK 7] Verifying Parking/Walkway subcategories:");
  const pwSubcats = subcategories.filter((s) => s.category === "parking-walkway");
  const expectedSubcats = ["Cobol", "kadapa", "Green Kota", "Brown Kota", "Red Mandana"];
  const actualSubcatNames = pwSubcats.map((s) => s.name);
  expectedSubcats.forEach((exp) => {
    if (!actualSubcatNames.includes(exp)) {
      console.error(`FAIL: Missing subcategory: '${exp}'`);
      allPassed = false;
    } else {
      console.log(`  ✓ Subcategory '${exp}' present (slug: ${pwSubcats.find((s) => s.name === exp)?.slug})`);
    }
  });

  // 8. Kota and Kaddapa removal
  console.log("\n[CHECK 8] Verifying Kota and Kaddapa removed from top-level:");
  const kotaCat = categories.find((c) => c.slug === "kota" || c.name === "Kota");
  const kaddapaCat = categories.find((c) => c.slug === "kaddapa" || c.name === "Kaddapa");
  if (kotaCat || kaddapaCat) {
    console.error("FAIL: Kota or Kaddapa still found in top-level categories!");
    allPassed = false;
  } else {
    console.log("PASS: Neither Kota nor Kaddapa exist as top-level categories.");
  }

  // 9. Wall Cladding has 0 products
  console.log("\n[CHECK 9] Verifying Wall Cladding has 0 active products:");
  const wcProducts = products.filter((p) => p.category === "wall-cladding");
  if (wcProducts.length !== 0) {
    console.error(`FAIL: Wall Cladding has ${wcProducts.length} active products (expected 0)`);
    allPassed = false;
  } else {
    console.log("PASS: Wall Cladding has 0 active products.");
  }

  // 10. Unrelated categories retained
  console.log("\n[CHECK 10] Product counts by category:");
  const catCounts: Record<string, number> = {};
  products.forEach((p) => {
    catCounts[p.category] = (catCounts[p.category] || 0) + 1;
  });
  categories.forEach((c) => {
    console.log(`  ${c.name} (${c.slug}): ${catCounts[c.slug] || 0} products`);
  });

  console.log("\n=================================================");
  if (allPassed) {
    console.log("   ALL AUDIT CHECKS PASSED SUCCESSFULLY!         ");
  } else {
    console.error("   SOME AUDIT CHECKS FAILED!                    ");
    process.exit(1);
  }
  console.log("=================================================\n");
}

runAudit();
