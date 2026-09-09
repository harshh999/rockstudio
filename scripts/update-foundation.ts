import { createClient, ApiKeyStrategy } from "@wix/sdk";
import { items } from "@wix/data";

const WIX_SITE_ID = process.env.NEXT_PUBLIC_WIX_CLIENT_ID || process.env.WIX_SITE_ID;
const WIX_API_KEY = process.env.WIX_API_KEY;

const client = createClient({
  modules: { items },
  auth: ApiKeyStrategy({ siteId: WIX_SITE_ID as string, apiKey: WIX_API_KEY as string }),
});

async function run() {
  const about = await client.items.query("AboutContent").find();
  if (about.items.length > 0) {
    const item = about.items[0];
    item.foundationImage = "/images/about/manufacturing.jpg";
    await client.items.update("AboutContent", item);
    console.log("Updated AboutContent foundationImage to /images/about/manufacturing.jpg");
  } else {
    console.log("No AboutContent found");
  }
}

run().catch(console.error);
