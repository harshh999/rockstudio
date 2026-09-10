"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { SiteSettings } from "@/types";

interface FooterProps {
  settings: SiteSettings;
}

export default function Footer({ settings }: FooterProps) {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const isPrivacyActive = pathname === "/privacy-policy";

  // Explicit 8 materials split into 2 sub-columns
  const materialsCol1 = [
    { label: "Marble", filter: "Marble" },
    { label: "Granite", filter: "Granite" },
    { label: "CNC", filter: "CNC" },
    { label: "Onyx", filter: "Onyx" },
  ];

  const materialsCol2 = [
    { label: "Sand Stone", filter: "Sand Stone" },
    { label: "Wall Cladding", filter: "Wall Cladding" },
    { label: "Kota", filter: "Kota" },
    { label: "Kaddapa", filter: "Kaddapa" },
  ];

  // Expertise items split into 2 sub-columns (3 items each)
  const expertiseCol1 = [
    { label: "Stone Sourcing", href: "/process" },
    { label: "Material Selection", href: "/products" },
    { label: "Precision Processing", href: "/process" },
  ];

  const expertiseCol2 = [
    { label: "Surface Finishing", href: "/process" },
    { label: "Quality Inspection", href: "/process" },
    { label: "Project Supply", href: "/about" },
  ];

  // Dynamic Location Data
  const primaryAddress = settings?.address || "Nr. CNG Petrol Pump, Gota Cross Road, Gota, Ahmedabad";
  const primaryPhone = settings?.phone || "+91 93777 16669";
  const primaryEmail = settings?.email || "rocksstudio2017@gmail.com";

  const secondaryLocations = (settings?.locations || []).filter(
    (loc) => loc.name !== "Rocks Studio"
  );

  const mahiKrupa = secondaryLocations.find((l) => l.name.includes("Mahi Krupa")) || {
    name: "Mahi Krupa Granite",
    address: "Survey No. 61/1 & 663, Gham Vadi, Panchmahal",
    phone: "+91 94279 55590",
    email: "ssidrivein@rediffmail.com",
  };

  const saharaGranito = secondaryLocations.find((l) => l.name.includes("Sahara")) || {
    name: "Sahara Granito",
    address: "Survey No. 906, Gambhoi Dhundhar Road, Sabarkantha, Gujarat",
    phone: "+91 85114 84878",
    email: "sahara.granito@yahoo.com",
  };

  const locationsList = [
    {
      num: "01",
      name: "Rocks Studio",
      address: primaryAddress,
      phone: primaryPhone,
      email: primaryEmail,
    },
    {
      num: "02",
      name: mahiKrupa.name,
      address: mahiKrupa.address,
      phone: mahiKrupa.phone,
      email: mahiKrupa.email,
    },
    {
      num: "03",
      name: saharaGranito.name,
      address: saharaGranito.address,
      phone: saharaGranito.phone,
      email: saharaGranito.email,
    },
  ];

  return (
    <footer className="relative bg-[#0D0D0D] text-white pt-16 lg:pt-20 pb-4 select-none overflow-hidden">
      {/* Background Texture - Dark Marble */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/HeroPage/footer.png" 
          fill 
          className="object-cover object-center" 
          alt="Dark Marble Texture" 
          priority
        />
      </div>
      {/* 58% Black Overlay: Subdues veins so marble remains visible & atmospheric without text interference */}
      <div className="absolute inset-0 z-0 bg-black/[0.58] pointer-events-none" />

      <ScrollReveal yOffset={15} className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        {/* Layer 01: Four Columns (Brand, Menu, Materials, Expertise) with optical track sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:[grid-template-columns:1fr_0.8fr_1.1fr_1.1fr] gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* Column 1: Brand */}
          <div className="flex flex-col min-w-0">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80 shrink-0 mb-6" aria-label="Rocks Studio Home">
              <Image
                src="/images/logo-white.png"
                alt="Rocks Studio"
                width={701}
                height={302}
                className="h-[28px] sm:h-[30px] w-auto object-contain"
              />
            </Link>
            <p className="text-[14px] sm:text-[15px] leading-[1.6] text-white/65 font-sans mb-6 max-w-[300px]">
              Natural stone for architecture, interiors and spaces made to last.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { label: "Instagram", href: "https://www.instagram.com/rocks.studio/", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { label: "Facebook", href: "https://www.facebook.com/Rocks.studio.ahmedabad/", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { label: "LinkedIn", href: "https://in.linkedin.com/company/rocksstudioahmedabad", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                { label: "YouTube", href: "https://www.youtube.com/channel/UCccAd6NQp7Vi5nC9imVcCfA", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 transition-all hover:bg-white/10 hover:border-white/50 hover:text-white"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: MENU */}
          <div className="flex flex-col min-w-0">
            <h4 className="text-[12px] font-medium tracking-[0.18em] uppercase text-white/90 mb-6">
              MENU
            </h4>
            <ul className="flex flex-col space-y-5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Process", href: "/process" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[14px] sm:text-[15px] font-normal text-white/65 hover:text-white transition-colors duration-200 block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: MATERIALS */}
          <div className="flex flex-col min-w-0">
            <h4 className="text-[12px] font-medium tracking-[0.18em] uppercase text-white/90 mb-6">
              MATERIALS
            </h4>
            <div className="grid grid-cols-2 gap-x-8 min-w-0">
              <div className="flex flex-col space-y-5 min-w-0">
                {materialsCol1.map((item) => (
                  <Link
                    key={item.label}
                    href={`/products?category=${encodeURIComponent(item.filter)}`}
                    className="text-[14px] sm:text-[15px] font-normal text-white/65 hover:text-white transition-colors duration-200 truncate"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-5 min-w-0">
                {materialsCol2.map((item) => (
                  <Link
                    key={item.label}
                    href={`/products?category=${encodeURIComponent(item.filter)}`}
                    className="text-[14px] sm:text-[15px] font-normal text-white/65 hover:text-white transition-colors duration-200 truncate"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4: EXPERTISE */}
          <div className="flex flex-col min-w-0">
            <h4 className="text-[12px] font-medium tracking-[0.18em] uppercase text-white/90 mb-6">
              EXPERTISE
            </h4>
            <div className="grid grid-cols-2 gap-x-8 min-w-0">
              <div className="flex flex-col space-y-5 min-w-0">
                {expertiseCol1.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[14px] sm:text-[15px] font-normal text-white/65 hover:text-white transition-colors duration-200 truncate"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-5 min-w-0">
                {expertiseCol2.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[14px] sm:text-[15px] font-normal text-white/65 hover:text-white transition-colors duration-200 truncate"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider 01 */}
        <div className="mt-14 lg:mt-16 mb-12 lg:mb-14 border-t border-white/15 w-full" />

        {/* Layer 02: LOCATIONS */}
        <div className="min-w-0">
          <h4 className="text-[12px] font-medium tracking-[0.18em] uppercase text-white/90 mb-[26px]">
            LOCATIONS
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start min-w-0">
            {locationsList.map((loc) => (
              <div key={loc.num} className="flex flex-col min-w-0">
                <h5 className="text-[15px] sm:text-[16px] font-medium text-white/90 mb-[14px] flex items-center gap-2.5">
                  <span className="text-white/40 font-mono text-[13px] sm:text-[14px]">{loc.num}</span>
                  <span>{loc.name}</span>
                </h5>
                <p className="text-[14px] sm:text-[15px] leading-[1.55] text-white/65 mb-[18px]">
                  {loc.address}
                </p>
                <div className="flex flex-wrap xl:flex-nowrap items-center gap-x-3 gap-y-1.5 text-[13px] text-white/75 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <svg className="w-3.5 h-3.5 text-white/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${loc.phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors whitespace-nowrap">
                      {loc.phone}
                    </a>
                  </div>
                  
                  <span className="hidden xl:inline text-white/30 select-none">|</span>
                  
                  <div className="flex items-center gap-1.5 min-w-0">
                    <svg className="w-3.5 h-3.5 text-white/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${loc.email}`} className="hover:text-white transition-colors whitespace-nowrap">
                      {loc.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider 02 */}
        <div className="mt-12 lg:mt-14 border-t border-white/15 w-full" />

        {/* Bottom Bar */}
        <div className="py-7 sm:py-8 flex flex-col sm:flex-row justify-between items-center gap-4 w-full text-[13px] sm:text-[14px]">
          <Link
            href="/privacy-policy"
            className={`transition-colors duration-200 ${
              isPrivacyActive
                ? "text-white underline underline-offset-4 decoration-white/50"
                : "text-white/60 hover:text-white"
            }`}
          >
            Privacy Policy
          </Link>
          <p className="text-white/60 font-normal">
            © {currentYear} Rocks Studio. All rights reserved.
          </p>
        </div>
      </ScrollReveal>
    </footer>
  );
}

