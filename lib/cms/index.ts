/**
 * CMS Provider Registry.
 *
 * This module exports the currently active CMSProvider implementation.
 * To switch from mock data to Wix Headless CMS, change the import below
 * from MockCMSProvider to WixCMSProvider — no other files need to change.
 */

import type { CMSProvider } from "./types";
import { MockCMSProvider } from "./mock";
// Future: import { WixCMSProvider } from "./wix";

const cms: CMSProvider = new MockCMSProvider();
// Future: const cms: CMSProvider = new WixCMSProvider();

export default cms;
