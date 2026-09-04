/**
 * Wix Headless CMS Adapter — STUB.
 *
 * This file is a placeholder for the future Wix CMS integration.
 * When credentials are available, implement this class to replace MockCMSProvider.
 *
 * Requirements:
 *  - Use @wix/sdk and @wix/data for server-side data fetching.
 *  - Authenticate via WIX_API_KEY (server-side env var, NEVER NEXT_PUBLIC_).
 *  - Map Wix collection fields to application types using the field map
 *    defined in ./wix-field-map.ts.
 *  - Return application-level types (from @/types) — never Wix SDK objects.
 *
 * Environment variables required:
 *  - WIX_API_KEY   (server-side only)
 *  - WIX_SITE_ID   (server-side only)
 */

// import { createClient, ApiKeyStrategy } from "@wix/sdk";
// import { items } from "@wix/data";
// import type { CMSProvider } from "./types";
// import type { Product, ProductCategory, ... } from "@/types";
// import { COLLECTIONS, mapProduct, mapCategory, ... } from "./wix-field-map";

// export class WixCMSProvider implements CMSProvider {
//
//   private client;
//
//   constructor() {
//     this.client = createClient({
//       auth: ApiKeyStrategy({
//         apiKey: process.env.WIX_API_KEY!,
//         siteId: process.env.WIX_SITE_ID!,
//       }),
//       modules: { items },
//     });
//   }
//
//   async getProducts(): Promise<Product[]> {
//     const { items: results } = await this.client.items
//       .queryDataItems({ dataCollectionId: COLLECTIONS.products })
//       .ascending("sortOrder")
//       .find();
//     return results.map(mapProduct);
//   }
//
//   // ... implement remaining CMSProvider methods
// }
