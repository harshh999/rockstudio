"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { NAV_ITEMS } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (!open) {
        gsap.set(menuRef.current, { display: "none", opacity: 0, y: -10 });
      }
    }

    if (open) {
      gsap.killTweensOf(menuRef.current);
      gsap.set(menuRef.current, { display: "block" });
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );
    } else if (!isFirstRender.current) {
      gsap.killTweensOf(menuRef.current);
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: "power2.inOut",
        onComplete: () => {
          if (menuRef.current) {
            gsap.set(menuRef.current, { display: "none" });
          }
        },
      });
    }
  }, [open]);

  return (
    <div
      ref={menuRef}
      id="mobile-menu-panel"
      className="mt-2.5 w-full rounded-[24px] bg-white border border-stone-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-4 sm:p-5 md:hidden"
      style={{ display: open ? "block" : "none" }}
    >
      <nav aria-label="Mobile Navigation">
        <ul className="flex flex-col space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.route;
            return (
              <li key={item.route}>
                <Link
                  href={item.route}
                  className={`block rounded-full px-4 py-3 text-[15px] font-medium transition-colors ${
                    isActive
                      ? "bg-stone-100 text-[#111111] font-semibold"
                      : "text-[#171717] hover:bg-stone-50 hover:text-black"
                  }`}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-3 pt-3 border-t border-stone-100">
          <Link
            href="/contact"
            className="flex w-full items-center justify-center rounded-full bg-[#171717] py-3 text-[14px] font-medium text-white transition-colors hover:bg-black"
            onClick={onClose}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
}
