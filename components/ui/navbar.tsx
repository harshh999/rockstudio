"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export interface NavCategory {
  id: number;
  title: string;
  slug: string;
}

export interface NavItem {
  id: number;
  title: string;
  url: string;
  dropdown?: boolean;
  categories?: NavCategory[];
}

export const NAVIGATION_DATA: NavItem[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
    dropdown: false,
  },
  {
    id: 2,
    title: "About Us",
    url: "/about",
    dropdown: false,
  },
  {
    id: 3,
    title: "Products",
    url: "/products",
    dropdown: true,
    categories: [
      { id: 31, title: "Marble", slug: "marble" },
      { id: 32, title: "Granite", slug: "granite" },
      { id: 33, title: "CNC", slug: "cnc" },
      { id: 34, title: "Onyx", slug: "onyx" },
      { id: 35, title: "Sand Stone", slug: "sandstone" },
      { id: 36, title: "Wall Cladding", slug: "wall-cladding" },
      { id: 37, title: "Kota", slug: "kota" },
      { id: 38, title: "Kaddapa", slug: "kaddapa" },
    ],
  },
  {
    id: 4,
    title: "Process",
    url: "/process",
    dropdown: false,
  },
  {
    id: 5,
    title: "Contact Us",
    url: "/contact",
    dropdown: false,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const headerRef = useRef<HTMLHeadingElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const [prevPath, setPrevPath] = useState(pathname);
  const [navClick, setNavClick] = useState(false);

  useEffect(() => {
    if (navClick) {
      const timer = setTimeout(() => setNavClick(false), 600);
      return () => clearTimeout(timer);
    }
  }, [pathname, navClick]);

  const activeLayoutId = navClick ? "navbar-active" : `navbar-active-${pathname}`;

  const handleHeaderClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) {
      setNavClick(true);
    }
  };

  // Close menus and reset visibility on route change
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setIsVisible(true);
    setMobileOpen(false);
    setMobileProductsOpen(false);
    setIsDropdownHovered(false);
  }

  const toggleMobileMenu = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  }, []);

  // Desktop Dropdown hover handlers with slight delay for smooth UX
  const handleMouseEnterProducts = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsDropdownHovered(true);
  };

  const handleMouseLeaveProducts = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownHovered(false);
    }, 150);
  };

  // Auto-hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const delta = currentScrollY - lastScrollY.current;

          if (currentScrollY <= 40) {
            setIsVisible(true);
          } else if (delta > 10 && !mobileOpen && !isDropdownHovered) {
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
  }, [mobileOpen, isDropdownHovered]);

  // Outside click handler for mobile menu and dropdown
  useEffect(() => {
    if (!mobileOpen && !isDropdownHovered) return;

    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
        setIsDropdownHovered(false);
      }
    };

    const timer = setTimeout(() => {
      window.addEventListener("pointerdown", handleOutsideClick);
    }, 10);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [mobileOpen, isDropdownHovered]);

  const showNavbar = isVisible || mobileOpen || isDropdownHovered;

  // Split categories for 2-column desktop dropdown
  const productsItem = NAVIGATION_DATA.find((item) => item.dropdown);
  const categories = productsItem?.categories || [];
  const col1 = categories.slice(0, 4);
  const col2 = categories.slice(4, 8);

  return (
    <header
      ref={headerRef}
      onClick={handleHeaderClick}
      className={`fixed top-4 md:top-[32px] left-1/2 z-[100] w-[calc(100vw-24px)] md:w-auto max-w-[calc(100vw-24px)] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
        showNavbar
          ? "-translate-x-1/2 translate-y-0"
          : "-translate-x-1/2 -translate-y-[calc(100%+40px)]"
      }`}
    >
      <nav className="flex lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] items-center justify-between rounded-full bg-white py-[6px] pl-[20px] pr-[6px] border border-stone-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] gap-4 lg:gap-4 xl:gap-8 transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] w-full box-border relative">
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
              className="h-[28px] md:h-[30px] lg:h-[32px] w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation (Center) */}
        <ul className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1.5 min-w-0 whitespace-nowrap">
          {NAVIGATION_DATA.filter((item) => item.title !== "Contact Us").map((item) => {
            const isActive =
              pathname === item.url ||
              (item.url === "/products" && pathname.startsWith("/products"));

            if (item.dropdown) {
              return (
                <li
                  key={item.id}
                  className="relative"
                  onMouseEnter={handleMouseEnterProducts}
                  onMouseLeave={handleMouseLeaveProducts}
                >
                  <Link
                    href={item.url}
                    className={`inline-flex items-center gap-1.5 px-3 xl:px-4 py-2 rounded-full text-[14px] lg:text-[15px] font-medium whitespace-nowrap transition-all duration-180 ease-out hover:bg-[#F3F3F1] ${
                      isActive
                        ? "text-[#171717] font-semibold"
                        : "text-[#171717] hover:text-[#171717]"
                    }`}
                  >
                    <span>{item.title}</span>
                    <svg
                      className={`w-3.5 h-3.5 text-stone-500 transition-transform duration-200 ${
                        isDropdownHovered ? "rotate-180 text-stone-900" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {/* Active Indicator Pill */}
                  {isActive && (
                    <motion.div
                      layoutId={activeLayoutId}
                      className="absolute inset-0 rounded-full bg-[#F3F3F1] -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Products Desktop Dropdown Menu */}
                  <AnimatePresence>
                    {isDropdownHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[380px]"
                      >
                        <div className="rounded-[24px] bg-white border border-stone-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-5">
                          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-400 mb-3 px-2">
                            Material Categories
                          </div>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                            <div className="flex flex-col space-y-1">
                              {col1.map((cat) => (
                                <Link
                                  key={cat.id}
                                  href={`/products?category=${encodeURIComponent(cat.slug)}#catalogue`}
                                  className="px-3 py-2 rounded-xl text-[14px] font-medium text-stone-700 hover:text-stone-900 hover:bg-[#F3F3F1] transition-colors duration-180 ease-out"
                                  onClick={() => setIsDropdownHovered(false)}
                                >
                                  {cat.title}
                                </Link>
                              ))}
                            </div>
                            <div className="flex flex-col space-y-1">
                              {col2.map((cat) => (
                                <Link
                                  key={cat.id}
                                  href={`/products?category=${encodeURIComponent(cat.slug)}#catalogue`}
                                  className="px-3 py-2 rounded-xl text-[14px] font-medium text-stone-700 hover:text-stone-900 hover:bg-[#F3F3F1] transition-colors duration-180 ease-out"
                                  onClick={() => setIsDropdownHovered(false)}
                                >
                                  {cat.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            return (
              <li key={item.id} className="relative">
                <Link
                  href={item.url}
                  className={`inline-flex items-center px-3 xl:px-4 py-2 rounded-full text-[14px] lg:text-[15px] font-medium whitespace-nowrap transition-all duration-180 ease-out hover:bg-[#F3F3F1] ${
                    isActive
                      ? "text-[#171717] font-semibold"
                      : "text-[#171717] hover:text-[#171717]"
                  }`}
                >
                  {item.title}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId={activeLayoutId}
                    className="absolute inset-0 rounded-full bg-[#F3F3F1] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA (Right) */}
        <div className="hidden lg:flex shrink-0 items-center justify-end min-w-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#171717] hover:bg-[#222222] text-white px-[32px] xl:px-[42px] py-[14px] text-[14px] font-medium whitespace-nowrap transition-colors duration-180 ease-out"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-stone-100 text-stone-900 transition-all hover:bg-stone-200 active:scale-95 lg:hidden ml-auto shrink-0 cursor-pointer"
          onClick={toggleMobileMenu}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu-panel"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5 transition-transform duration-200"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6.75h16M4 12h16M4 17.25h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu-panel"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-2.5 w-full rounded-[24px] bg-white border border-stone-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-4 sm:p-5 md:hidden"
          >
            <nav aria-label="Mobile Navigation">
              <ul className="flex flex-col space-y-1">
                {NAVIGATION_DATA.filter((item) => item.title !== "Contact Us").map((item) => {
                  const isActive =
                    pathname === item.url ||
                    (item.url === "/products" && pathname.startsWith("/products"));

                  if (item.dropdown) {
                    return (
                      <li key={item.id} className="flex flex-col">
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.url}
                            className={`flex-1 rounded-full px-4 py-3 text-[15px] font-medium transition-colors ${
                              isActive
                                ? "bg-stone-100 text-[#111111] font-semibold"
                                : "text-[#171717] hover:bg-stone-50 hover:text-black"
                            }`}
                            onClick={closeMobileMenu}
                          >
                            {item.title}
                          </Link>
                          <button
                            type="button"
                            className="p-3 text-stone-500 hover:text-stone-900 focus:outline-none"
                            onClick={(e) => {
                              e.stopPropagation();
                              setMobileProductsOpen((prev) => !prev);
                            }}
                            aria-label="Toggle Products Categories"
                            aria-expanded={mobileProductsOpen}
                          >
                            <svg
                              className={`w-4 h-4 transition-transform duration-200 ${
                                mobileProductsOpen ? "rotate-180 text-stone-900" : ""
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>

                        {/* Mobile Categories Accordion */}
                        <AnimatePresence>
                          {mobileProductsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4 pr-2 pt-1 pb-2"
                            >
                              <div className="grid grid-cols-2 gap-1.5 pt-1 border-t border-stone-100">
                                {categories.map((cat) => (
                                  <Link
                                    key={cat.id}
                                    href={`/products?category=${encodeURIComponent(cat.slug)}#catalogue`}
                                    className="px-3 py-2 rounded-xl text-[13px] font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                                    onClick={closeMobileMenu}
                                  >
                                    {cat.title}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  }

                  return (
                    <li key={item.id}>
                      <Link
                        href={item.url}
                        className={`block rounded-full px-4 py-3 text-[15px] font-medium transition-colors ${
                          isActive
                            ? "bg-stone-100 text-[#111111] font-semibold"
                            : "text-[#171717] hover:bg-stone-50 hover:text-black"
                        }`}
                        onClick={closeMobileMenu}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-3 pt-3 border-t border-stone-100">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-full bg-[#171717] py-3 text-[14px] font-medium text-white transition-colors hover:bg-black"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
