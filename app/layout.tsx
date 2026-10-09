import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rocks-studio.com"),
  title: {
    default: "Rocks Studio — Premium Natural Stone",
    template: "%s | Rocks Studio",
  },
  description:
    "Premium natural stone manufacturer based in Ahmedabad, Gujarat. Marble, granite, quartzite, and sandstone for architectural and interior applications.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Rocks Studio",
  },
};

import { getSiteSettings } from "@/lib/data";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import JsonLd from "@/components/seo/JsonLd";

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const settings = await getSiteSettings();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-auto overflow-visible antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="flex min-h-screen h-auto overflow-visible flex-col font-sans">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1 h-auto min-h-screen overflow-visible">{children}</main>
          <Footer settings={settings} />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
