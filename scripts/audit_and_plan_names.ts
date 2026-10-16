import { products, categories, subcategories } from "../data/catalogue-taxonomy";
import * as fs from "fs";
import * as path from "path";

// Function to clean product name
export function cleanProductName(name: string, category: string): { cleanedName: string; isAmbiguous: boolean; reason?: string } {
  const trimmed = name.trim();

  // Special case: White (IT) vs White (V)
  if (trimmed === "White (IT)" || trimmed === "White (V)") {
    return {
      cleanedName: trimmed,
      isAmbiguous: true,
      reason: "Stripping origin code leaves only 'White', colliding with another product and causing asset conflict. Retained for manual review."
    };
  }

  // Regex to remove origin suffixes/parentheticals:
  // e.g. (IT), (It), (b), (B), (INDIAN), (INDIAN EXOTIC), (IT0), (V)
  // Let's also handle "Snake Black INDIAN " or "Wavy Green Indian " or "CNC Fluted (INDIAN) YTD 2"
  
  let cleaned = trimmed;

  // Let's check for parenthetical origin codes:
  // (IT), (It), (B), (b), (INDIAN), (INDIAN EXOTIC), (IT0), (V)
  cleaned = cleaned.replace(/\s*\((?:IT|It|b|B|INDIAN|INDIAN EXOTIC|IT0|V)\)/g, "");

  // Handle specific trailing origin indicators like " INDIAN", " Indian", " Italian" if they are standalone internal tags
  // For example:
  // "Snake Black INDIAN " -> "Snake Black"
  // "Wavy Green Indian " -> "Wavy Green"
  // "Cream Italian " -> "Cream Italian" (Note: "Cream Italian" might be the actual stone name like "Italian Cream", or is Italian the origin? Let's check!)
  if (cleaned.endsWith(" INDIAN") || cleaned.endsWith(" Indian")) {
    cleaned = cleaned.replace(/\s+(?:INDIAN|Indian)$/, "");
  }

  // Fix known typos
  if (cleaned.includes("Traventine")) {
    cleaned = cleaned.replace(/Traventine/g, "Travertine");
  }

  // Consistent title casing: e.g. "finish" -> "Finish", "leather" -> "Leather", "white" -> "White", "gray" -> "Gray", "green" -> "Green"
  // Let's do title casing on specific common words or standard title case while preserving letters like "P"
  cleaned = cleaned
    .replace(/\s+/g, " ")
    .replace(/\bleather\b/gi, "Leather")
    .replace(/\bfinish\b/gi, "Finish")
    .replace(/\bgray\b/gi, "Gray")
    .replace(/\bwhite\b/gi, "White")
    .replace(/\bgreen\b/gi, "Green")
    .replace(/\bblue\b/gi, "Blue")
    .replace(/\bbrown\b/gi, "Brown")
    .replace(/\bblack\b/gi, "Black")
    .replace(/\bgold\b/gi, "Gold")
    .replace(/\bcream\b/gi, "Cream")
    .replace(/\brosa\b/gi, "Rosa")
    .replace(/\bred\b/gi, "Red")
    .replace(/\bpearl\b/gi, "Pearl")
    .replace(/\bparadise\b/gi, "Paradise")
    .replace(/\bivory\b/gi, "Ivory")
    .replace(/\bsilver\b/gi, "Silver")
    .replace(/\bhorizon\b/gi, "Horizon")
    .replace(/\bspider\b/gi, "Spider")
    .replace(/\bcanyon\b/gi, "Canyon")
    .replace(/\bmilano\b/gi, "Milano")
    .replace(/\bwave\b/gi, "Wave")
    .replace(/\bhorizon\b/gi, "Horizon")
    .replace(/\bglitter\b/gi, "Glitter")
    .replace(/\bextreme\b/gi, "Extreme")
    .replace(/\belegant\b/gi, "Elegant")
    .replace(/\bhydra\b/gi, "Hydra")
    .replace(/\bmonsoon\b/gi, "Monsoon")
    .replace(/\blizato\b/gi, "Lizato")
    .replace(/\bbresia\b/gi, "Bresia")
    .replace(/\bkaraman\b/gi, "Karaman")
    .replace(/\bmicro angelo\b/gi, "Micro Angelo")
    .replace(/\bmocha\b/gi, "Mocha")
    .replace(/\bmulti\b/gi, "Multi")
    .replace(/\bnoche\b/gi, "Noche")
    .replace(/\bnordic\b/gi, "Nordic")
    .replace(/\bocean\b/gi, "Ocean")
    .replace(/\bpanda\b/gi, "Panda")
    .replace(/\bpolar\b/gi, "Polar")
    .replace(/\bpolaris\b/gi, "Polaris")
    .replace(/\bpurple\b/gi, "Purple")
    .replace(/\brafelo\b/gi, "Rafelo")
    .replace(/\bregal\b/gi, "Regal")
    .replace(/\bsangrila\b/gi, "Sangrila")
    .replace(/\bsunset\b/gi, "Sunset")
    .replace(/\bsuper\b/gi, "Super")
    .replace(/\bturtle\b/gi, "Turtle")
    .replace(/\bvanilla\b/gi, "Vanilla")
    .replace(/\bvolacasa\b/gi, "Volacasa");

  cleaned = cleaned.trim();

  return {
    cleanedName: cleaned,
    isAmbiguous: false
  };
}

export function toUrlSafeFilename(name: string, ext: string): string {
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${base}${ext}`;
}

async function audit() {
  console.log("Auditing products across all categories...");
  
  const changes: Array<{
    id: string;
    category: string;
    oldName: string;
    newName: string;
    oldHero: string;
    newHero: string;
    isAmbiguous: boolean;
    reason?: string;
  }> = [];

  const newHeroSet = new Map<string, string>(); // newHero -> productId

  for (const p of products) {
    const { cleanedName, isAmbiguous, reason } = cleanProductName(p.name, p.category);
    
    // Check asset path
    const oldHero = p.heroImage;
    let newHero = oldHero;

    if (!isAmbiguous && p.category === "marble") {
      const ext = path.extname(oldHero);
      const newFilename = toUrlSafeFilename(cleanedName, ext);
      newHero = `/products/Marbles/${newFilename}`;
    }

    if (newHeroSet.has(newHero) && newHeroSet.get(newHero) !== p.id) {
      console.error(`COLLISION DETECTED for asset ${newHero}: between ${p.id} (${cleanedName}) and ${newHeroSet.get(newHero)}`);
    } else {
      newHeroSet.set(newHero, p.id);
    }

    if (p.name !== cleanedName || oldHero !== newHero || isAmbiguous) {
      changes.push({
        id: p.id,
        category: p.category,
        oldName: p.name,
        newName: cleanedName,
        oldHero,
        newHero,
        isAmbiguous,
        reason
      });
    }
  }

  console.log(`Total changes / audited items: ${changes.length}`);
  const ambiguous = changes.filter(c => c.isAmbiguous);
  console.log(`Ambiguous (left unchanged): ${ambiguous.length}`);
  for (const a of ambiguous) {
    console.log(` - ${a.id}: "${a.oldName}" -> Reason: ${a.reason}`);
  }

  const nameChanges = changes.filter(c => !c.isAmbiguous && c.oldName !== c.newName);
  console.log(`\nName changes count: ${nameChanges.length}`);
  for (const c of nameChanges) {
    console.log(`[${c.category}] "${c.oldName}" -> "${c.newName}"`);
  }

  const assetChanges = changes.filter(c => !c.isAmbiguous && c.oldHero !== c.newHero);
  console.log(`\nAsset changes count: ${assetChanges.length}`);
  for (const c of assetChanges) {
    console.log(`"${c.oldHero}" -> "${c.newHero}"`);
  }
}

audit();
