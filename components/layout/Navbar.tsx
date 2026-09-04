"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const [prevPath, setPrevPath] = useState(pathname);

  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setIsVisible(true);
    setMobileOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const delta = currentScrollY - lastScrollY.current;

          if (currentScrollY <= 40) {
            setIsVisible(true);
          } else if (delta > 10) {
            setIsVisible(false);
          } else if (delta < -4) {
            setIsVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showNavbar = isVisible || mobileOpen;

  return (
    <header
      className={`fixed top-4 md:top-[32px] left-1/2 z-[100] w-[calc(100vw-24px)] sm:w-[calc(100vw-32px)] md:w-[min(820px,calc(100vw-48px))] lg:w-[820px] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
        showNavbar
          ? "-translate-x-1/2 translate-y-0"
          : "-translate-x-1/2 -translate-y-[calc(100%+40px)]"
      }`}
    >
      <nav className="flex h-[60px] md:h-[68px] lg:h-[72px] items-center justify-between rounded-full bg-white pl-4 pr-2 md:pl-[22px] md:pr-[8px] shadow-[0_4px_25px_rgba(0,0,0,0.07)] transition-shadow hover:shadow-[0_6px_30px_rgba(0,0,0,0.1)]">
        {/* Brand / Logo (Left) */}
        <div className="flex shrink-0 items-center">
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-85"
            aria-label="Rocks Studio Home"
          >
            <Image
              src="/images/logo.png"
              alt="Rocks Studio"
              width={701}
              height={302}
              className="h-[28px] md:h-[32px] lg:h-[34px] w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation (Center) */}
        <ul className="hidden items-center gap-4 lg:gap-[24px] md:flex shrink-0 whitespace-nowrap mx-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.route;
            return (
              <li key={item.route}>
                <Link
                  href={item.route}
                  className={`text-[14px] lg:text-[15px] font-medium whitespace-nowrap transition-colors duration-180 ${
                    isActive
                      ? "text-[#111111] font-semibold"
                      : "text-[#171717] hover:text-[#666666]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA (Right) */}
        <div className="hidden md:flex shrink-0 items-center ml-3">
          <Link
            href="/contact"
            className="inline-flex h-[48px] lg:h-[52px] w-[124px] lg:w-[132px] items-center justify-center rounded-full bg-[#191919] text-[14px] lg:text-[15px] font-medium text-white whitespace-nowrap transition-colors duration-180 hover:bg-black"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-900 transition-colors hover:bg-stone-200 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

