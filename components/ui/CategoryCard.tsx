import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/types";

interface CategoryCardProps {
  category: ProductCategory;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-[14px] sm:rounded-[16px] bg-stone-200"
    >
      <Image
        src={category.image}
        alt={`${category.name} natural stone`}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
      />
      {/* Subtle bottom-to-transparent dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
      {/* Bottom-left content */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-left">
        <h3 className="text-[20px] sm:text-[22px] font-medium leading-snug tracking-tight text-white">
          {category.name}
        </h3>
        <span className="mt-2 inline-flex items-center text-[11px] sm:text-[12px] uppercase tracking-[0.12em] text-white/80 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
          Explore →
        </span>
      </div>
    </Link>
  );
}

