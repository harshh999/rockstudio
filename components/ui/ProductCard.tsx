import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative block aspect-[3/4] overflow-hidden rounded-[24px] bg-stone-200"
    >
      {/* Primary Material Photograph */}
      <Image
        src={product.heroImage}
        alt={product.name}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Subtle Neutral Translucent Overlay Panel at Bottom */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent p-5 pt-12 transition-all duration-300">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-300/90">
          {product.category}
        </span>
        <h3 className="mt-1 font-serif text-lg font-normal tracking-wide text-white transition-colors group-hover:text-warm-beige">
          {product.name}
        </h3>
      </div>
    </Link>
  );
}
