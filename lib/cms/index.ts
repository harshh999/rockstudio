/**
 * CMS Provider Registry.
 *
 * This module exports the currently active CMSProvider implementation.
 * To switch from mock data to Wix Headless CMS, change the import below
 * from MockCMSProvider to WixCMSProvider — no other files need to change.
 */

import type { CMSProvider } from "./types";
import { MockCMSProvider } from "./mock";
import { WixCMSProvider } from "./wix";

const isWixConfigured = Boolean(
  process.env.WIX_API_KEY && process.env.WIX_SITE_ID
);

const cms: CMSProvider = isWixConfigured
  ? new WixCMSProvider()
  : new MockCMSProvider();

export default cms;

