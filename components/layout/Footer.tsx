"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { siteSettings } from "@/data/site-settings";
import { gsap } from "gsap";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current || !brandRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        brandRef.current,
        { yPercent: 12, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#171717] text-[#F5F3EE] overflow-hidden relative pt-16 md:pt-20 select-none"
    >
      {/* Top Main Grid: 4 Columns */}
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Socials & Primary Business Contact */}
          <div className="flex flex-col justify-between">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href={siteSettings.facebook || "https://facebook.com/rocksstudio"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-[54px] h-[54px] rounded-full border border-white/65 flex items-center justify-center text-white transition-all duration-300 hover:scale-[1.04] hover:bg-white/10 hover:border-white shadow-xs"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={siteSettings.instagram || "https://instagram.com/rocksstudio"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-[54px] h-[54px] rounded-full border border-white/65 flex items-center justify-center text-white transition-all duration-300 hover:scale-[1.04] hover:bg-white/10 hover:border-white shadow-xs"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            {/* Verified Primary Contact */}
            <div className="mt-8 text-[19px] leading-[1.55] text-[#F5F3EE] font-normal space-y-1.5">
              <p>{siteSettings.address}</p>
              <p>
                <a href={`tel:${siteSettings.phone.replace(/\s+/g, "")}`} className="hover:underline">
                  {siteSettings.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteSettings.email}`} className="hover:underline">
                  {siteSettings.email}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: MENU */}
          <div>
            <h4 className="text-[15px] font-medium tracking-[0.02em] text-[#F5F3EE] uppercase mb-4">
              MENU
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-[18px] font-normal leading-[1.9] text-[#E8E6E1] hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[18px] font-normal leading-[1.9] text-[#E8E6E1] hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[18px] font-normal leading-[1.9] text-[#E8E6E1] hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[18px] font-normal leading-[1.9] text-[#E8E6E1] hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: MATERIALS */}
          <div>
            <h4 className="text-[15px] font-medium tracking-[0.02em] text-[#F5F3EE] uppercase mb-4">
              MATERIALS
            </h4>
            <ul className="space-y-2.5">
              {["Marble", "Granite", "Quartzite", "Sandstone"].map((m) => (
                <li key={m}>
                  <Link
                    href={`/products?category=${m.toLowerCase()}`}
                    className="text-[18px] font-normal leading-[1.9] text-[#E8E6E1] hover:text-white transition-colors duration-200"
                  >
                    {m}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: LOCATIONS */}
          <div>
            <h4 className="text-[15px] font-medium tracking-[0.02em] text-[#F5F3EE] uppercase mb-4">
              LOCATIONS
            </h4>
            <div className="space-y-4 text-sm text-[#A8A6A0]">
              {siteSettings.locations?.map((loc) => (
                <div key={loc.name} className="space-y-0.5">
                  <p className="font-medium text-[#F5F3EE] text-[15px]">{loc.name}</p>
                  <p className="text-[13px] leading-snug">{loc.address}</p>
                  <p className="text-[13px]">
                    <a href={`tel:${loc.phone.replace(/\s+/g, "")}`} className="hover:underline text-stone-300">
                      {loc.phone}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <div className="mx-6 sm:mx-10 lg:mx-12 my-8 border-t border-[rgba(255,255,255,0.28)]" />

      {/* Lower Information Row */}
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-4">
        <p className="max-w-[430px] text-[16px] leading-[1.5] text-[#A8A6A0]">
          Natural stone for architecture, interiors and spaces made to last.
        </p>

        <div className="flex items-center gap-4 text-[15px] text-[#E8E6E1]">
          <Link href="/contact" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-white transition-colors">
            Terms & Conditions
          </Link>
        </div>

        <p className="text-[14px] text-[#8E8C87]">
          © {new Date().getFullYear()} Rocks Studio. All rights reserved.
        </p>
      </div>

      {/* Oversized Brand Typography (Display Serif, Scaled to Fit) */}
      <div className="w-full overflow-hidden text-center mt-6 pt-2 relative select-none leading-none pb-4">
        <div ref={brandRef} className="inline-block">
          <span className="font-serif text-[clamp(44px,7.5vw,115px)] font-normal leading-[0.88] tracking-tight text-[#555555] whitespace-nowrap block">
            Rocks Studio
          </span>
        </div>
      </div>
    </footer>
  );
}
