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
      className="group block"
    >
      <div className="img-hover-scale aspect-[4/5] overflow-hidden bg-stone-100 rounded-[24px]">
        <Image
          src={product.heroImage}
          alt={product.name}
          width={600}
          height={750}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <p className="text-xs font-medium uppercase tracking-widest text-stone-400">
          {product.category}
        </p>
        <h3 className="mt-1 text-base font-medium tracking-tight text-stone-900 transition-colors group-hover:text-warm-gold">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-stone-500">
          {product.shortDescription}
        </p>
      </div>
    </Link>
  );
}
