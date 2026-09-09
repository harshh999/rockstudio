import { createClient, ApiKeyStrategy } from "@wix/sdk";
import { items } from "@wix/data";

/**
 * Server-only Wix Headless SDK Client instance.
 *
 * Authenticates using server-side environment variables:
 * - WIX_SITE_ID
 * - WIX_API_KEY
 */
export function getWixClient() {
  const apiKey = process.env.WIX_API_KEY;
  const siteId = process.env.WIX_SITE_ID;

  if (!apiKey || !siteId) {
    throw new Error(
      `Wix Client Initialization Error: WIX_API_KEY (${apiKey ? "configured" : "missing"}) or WIX_SITE_ID (${siteId ? "configured" : "missing"}) environment variable is missing.`
    );
  }

  return createClient({
    auth: ApiKeyStrategy({
      apiKey,
      siteId,
    }),
    modules: {
      items,
    },
    // Prevent Next.js from aggressively caching the Wix SDK's internal fetch calls
    // so that `unstable_cache` in lib/data/index.ts can properly manage revalidation.
    fetch: (url, options) => fetch(url, { ...options, cache: "no-store" }),
  });
}

/**
 * Minimal server-side query test function to verify Wix CMS communication.
 */
export async function testWixConnection(collectionId: string = "Products") {
  try {
    const client = getWixClient();
    const result = await client.items.query(collectionId).limit(1).find();

    return {
      success: true,
      totalCount: result.totalCount ?? result.items.length,
      itemCount: result.items.length,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error?.message || String(error),
    };
  }
}
