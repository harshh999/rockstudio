import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index?: number;
  aspectRatio?: string;
}

export default function ProductCard({
  product,
  index,
  aspectRatio = "aspect-[0.82/1]",
}: ProductCardProps) {
  const indexFormatted =
    typeof index === "number" ? String(index + 1).padStart(2, "0") : null;

  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group relative block w-full ${aspectRatio} overflow-hidden rounded-[18px] sm:rounded-[20px] lg:rounded-[22px] bg-stone-200/60`}
    >
      {/* Optional Editorial Index Number */}
      {indexFormatted && (
        <span className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 font-sans text-[11px] sm:text-[12px] font-medium tracking-[0.12em] uppercase text-white/75 select-none">
          {indexFormatted}
        </span>
      )}

      {/* Primary Material Photograph */}
      <Image
        src={product.heroImage}
        alt={product.name}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />

      {/* Subtle Bottom Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6 z-10 text-left">
        <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.12em] text-stone-300/90 block mb-1">
          {product.category}
        </span>
        <h3 className="font-serif text-[20px] sm:text-[22px] lg:text-[24px] font-normal leading-snug text-white tracking-[-0.01em]">
          {product.name}
        </h3>
      </div>
    </Link>
  );
}
