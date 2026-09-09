import fs from "fs";
import path from "path";

// Load .env.local if present
const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  envContent.split("\n").forEach((line) => {
    const parts = line.split("=");
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const val = parts.slice(1).join("=").trim().replace(/^["']|["']$/g, "");
      if (key && !process.env[key]) {
        process.env[key] = val;
      }
    }
  });
}

import { testWixConnection } from "../lib/wix/client";

async function main() {
  console.log("Testing Wix Headless SDK connection...");
  const siteId = process.env.WIX_SITE_ID;
  console.log(`WIX_SITE_ID: ${siteId || "MISSING"}`);
  console.log(`WIX_API_KEY: ${process.env.WIX_API_KEY ? "CONFIGURED (hidden)" : "MISSING"}`);

  if (!siteId || !process.env.WIX_API_KEY) {
    console.error("ERROR: Missing WIX_SITE_ID or WIX_API_KEY in environment.");
    process.exit(1);
  }

  const res = await testWixConnection("Products");
  if (res.success) {
    console.log("SUCCESS: Wix Headless server connection verified!");
    console.log(`QueryResult Metadata -> Total Items/Count: ${res.totalCount}`);
  } else {
    console.warn("Connection test executed, response:", res.error);
  }
}

main().catch((err) => {
  console.error("Test execution failed:", err?.message || err);
  process.exit(1);
});
