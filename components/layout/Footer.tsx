"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteSettings } from "@/data/site-settings";
import { categories } from "@/data/categories";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const isPrivacyActive = pathname === "/privacy-policy";

  // Derived category list sorted by sortOrder
  const categoryList = [...categories].sort(
    (a, b) => (a.sortOrder || 0) - (b.sortOrder || 0)
  );

  // Primary contacts
  const address = siteSettings.address || "Nr. CNG Petrol Pump, Gota Cross Road, Gota, Ahmedabad";
  const phone = siteSettings.phone || "+91 93777 16669";
  const email = siteSettings.email || "rocksstudio2017@gmail.com";

  // Secondary Locations (excluding the primary Rocks Studio headquarters)
  const secondaryLocations = (siteSettings.locations || []).filter(
    (loc) => loc.name !== "Rocks Studio"
  );

  return (
    <footer className="bg-[#171717] text-[#F5F3EE] pt-20 lg:pt-24 pb-12 sm:pb-14 select-none">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
        {/* Main 4-Column Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10 items-start">
          {/* Column 1: Brand (approx 30% / 3.5 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-80"
              aria-label="Rocks Studio Home"
            >
              <Image
                src="/images/logo-white.png"
                alt="Rocks Studio"
                width={701}
                height={302}
                className="h-[32px] sm:h-[36px] w-auto object-contain"
              />
            </Link>

            <p className="max-w-[320px] text-[15px] leading-[1.65] text-[#A8A6A0] font-normal">
              Natural stone for architecture, interiors and spaces made to last.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              {/* Facebook */}
              <a
                href={siteSettings.facebook || "https://facebook.com/rocksstudio"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 transition-all duration-300 hover:text-white hover:border-white/60 hover:bg-white/5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={siteSettings.instagram || "https://instagram.com/rocksstudio"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 transition-all duration-300 hover:text-white hover:border-white/60 hover:bg-white/5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation / MENU (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#F5F3EE] mb-5">
              MENU
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[15px] font-normal text-[#A8A6A0] hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: MATERIALS (approx 4 cols for 2-col category list) */}
          <div className="lg:col-span-4">
            <h4 className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#F5F3EE] mb-5">
              MATERIALS
            </h4>
            {(() => {
              const midpoint = Math.ceil(categoryList.length / 2);
              const col1 = categoryList.slice(0, midpoint);
              const col2 = categoryList.slice(midpoint);

              return (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 sm:gap-y-0">
                  <div className="space-y-3">
                    {col1.map((cat) => (
                      <Link
                        key={cat.id || cat.slug}
                        href={`/products?category=${cat.slug}`}
                        className="text-[15px] font-normal text-[#A8A6A0] hover:text-white transition-colors duration-200 block"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {col2.map((cat) => (
                      <Link
                        key={cat.id || cat.slug}
                        href={`/products?category=${cat.slug}`}
                        className="text-[15px] font-normal text-[#A8A6A0] hover:text-white transition-colors duration-200 block"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Column 4: CONTACT (approx 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#F5F3EE] mb-5">
              CONTACT
            </h4>
            <div className="space-y-3 text-[15px] text-[#A8A6A0] leading-[1.6]">
              <p className="max-w-[320px]">{address}</p>
              <p>
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  {phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${email}`}
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  {email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Locations Row (Quiet & Compact) */}
        {secondaryLocations.length > 0 && (
          <div className="mt-14 pt-8 border-t border-white/10">
            <h5 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-white/50 mb-4">
              ADDITIONAL LOCATIONS
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[13px] text-white/60">
              {secondaryLocations.map((loc) => (
                <div key={loc.name} className="space-y-1">
                  <span className="font-medium text-white/80 block">{loc.name}</span>
                  <p className="leading-snug text-white/50">{loc.address}</p>
                  <p>
                    <a
                      href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                      className="text-white/70 hover:text-white hover:underline transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Subtle Horizontal Divider */}
        <div className="mt-12 border-t border-white/10" />

        {/* Bottom Legal / Copyright Bar */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[13px] text-white/50">
          <div>
            <Link
              href="/privacy-policy"
              className={`transition-colors duration-200 ${
                isPrivacyActive
                  ? "text-white font-medium underline underline-offset-4 decoration-white/50"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              Privacy Policy
            </Link>
          </div>



          <div>
            <p>© {currentYear} Rocks Studio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
