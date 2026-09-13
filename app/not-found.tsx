import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page or material you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[75vh] flex-col items-center justify-center px-6 py-32 sm:py-40 text-center bg-white text-stone-900">
      <div className="max-w-md mx-auto">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-warm-gold block mb-4">
          404 Error
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-stone-900 mb-6">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-stone-600 mb-10 leading-relaxed font-light">
          The architectural material, collection, or page you are looking for does not exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs uppercase tracking-[0.15em] font-medium bg-stone-900 text-white hover:bg-stone-800 transition-colors duration-200"
          >
            Return Home
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs uppercase tracking-[0.15em] font-medium border border-stone-300 text-stone-800 hover:border-stone-900 transition-colors duration-200"
          >
            Browse Materials
          </Link>
        </div>
      </div>
    </main>
  );
}
