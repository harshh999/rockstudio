"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Product } from "@/types";
import ProductCard from "@/components/ui/ProductCard";

interface SelectedProductsGridProps {
  products: Product[];
}

export default function SelectedProductsGrid({ products }: SelectedProductsGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  // Store translation offsets relative to Card 1 (index 0)
  const [offsets, setOffsets] = useState<{ x: number; y: number }[]>([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const [isMeasured, setIsMeasured] = useState(false);

  useEffect(() => {
    const calculateOffsets = () => {
      const card0 = cardRefs.current[0];
      if (!card0) return;
      const rect0 = card0.getBoundingClientRect();

      const newOffsets = cardRefs.current.map((card) => {
        if (!card) return { x: 0, y: 0 };
        const rect = card.getBoundingClientRect();
        return {
          x: rect0.left - rect.left,
          y: rect0.top - rect.top,
        };
      });

      setOffsets(newOffsets);
      setIsMeasured(true);
    };

    calculateOffsets();
    window.addEventListener("resize", calculateOffsets);
    return () => window.removeEventListener("resize", calculateOffsets);
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[10px] sm:gap-[12px] lg:gap-[14px] relative"
    >
      {products.map((product, index) => {
        const isFirst = index === 0;
        // Higher z-index for Card 1 so Cards 2, 3, 4 visually emerge from underneath it
        const zIndex = isFirst ? 20 : 10 - index;
        const offset = offsets[index] || { x: 0, y: 0 };

        // Timing: Card 1 enters immediately, Cards 2-4 emerge sequentially (stagger: 0.22s)
        const delay = isFirst ? 0 : 0.12 + (index - 1) * 0.22;

        return (
          <div
            key={product.id}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="relative"
            style={{ zIndex }}
          >
            <motion.div
              initial={
                isFirst
                  ? { opacity: 0, scale: 0.96 }
                  : { opacity: 0, scale: 0.96, x: offset.x, y: offset.y }
              }
              animate={
                isInView && isMeasured
                  ? { opacity: 1, scale: 1, x: 0, y: 0 }
                  : isFirst
                  ? { opacity: 0, scale: 0.96 }
                  : { opacity: 0, scale: 0.96, x: offset.x, y: offset.y }
              }
              transition={{
                duration: 1.0,
                delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full h-full"
            >
              <ProductCard product={product} index={index} />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
