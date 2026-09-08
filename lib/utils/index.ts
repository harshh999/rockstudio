/**
 * Generic utilities.
 * No CMS-specific logic belongs here.
 */

import { clsx, type ClassValue } from "clsx";

/**
 * Merges class names conditionally using clsx.
 * Provides a convenient utility similar to shadcn/ui's cn().
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Navigation items used by Navbar and Footer.
 * Kept here as static config — not CMS-driven.
 */
export const NAV_ITEMS = [
  { label: "Home", route: "/" },
  { label: "About Us", route: "/about" },
  { label: "Products", route: "/products" },
  { label: "Process", route: "/process" },
  { label: "Contact Us", route: "/contact" },
] as const;

