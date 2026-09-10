"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NAV_ITEMS } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!open || !mounted) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs md:hidden"
        onClick={onClose}
        aria-hidden
      />

      {/* Dropdown Floating Panel */}
      <div className="absolute top-[74px] left-0 right-0 z-50 w-full overflow-hidden rounded-3xl bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.12)] md:hidden animate-fade-in-up">
        {/* Brand header */}
        <div className="mb-3 pb-3 border-b border-stone-100 flex items-center justify-between px-2">
          <Link href="/" onClick={onClose} className="inline-block" aria-label="Rocks Studio Home">
            <Image
              src="/images/logo.png"
              alt="Rocks Studio"
              width={701}
              height={302}
              className="h-7 w-auto object-contain"
            />
          </Link>
          <span className="text-[11px] font-medium tracking-wider uppercase text-stone-400">Menu</span>
        </div>

        <nav className="flex flex-col gap-2">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.route;
              return (
                <li key={item.route}>
                  <Link
                    href={item.route}
                    className={`block rounded-2xl px-4 py-3 text-[16px] font-medium transition-colors ${
                      isActive
                        ? "bg-stone-100 text-[#111111] font-semibold"
                        : "text-[#202020] hover:bg-stone-50 hover:text-[#666666]"
                    }`}
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-2 pt-3 border-t border-stone-100">
            <Link
              href="/contact"
              className="flex w-full items-center justify-center rounded-full bg-[#1B1B1B] py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-black"
              onClick={onClose}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </>,
    document.body
  );
}

