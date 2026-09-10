import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, getProducts, getProductsByCategory } from "@/lib/data";
import ImageGallery from "@/components/ui/ImageGallery";
import ProductCard from "@/components/ui/ProductCard";
import QuoteCTA from "@/components/ui/QuoteCTA";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.heroImage }],
    },
  };
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Related products from the same category
  const relatedProducts = (await getProductsByCategory(product.category))
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-7xl px-6 pt-32 pb-4 lg:px-8 lg:pt-36">
        <ol className="flex items-center gap-2 text-xs text-stone-400">
          <li>
            <Link href="/" className="transition-colors hover:text-stone-700">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/products" className="transition-colors hover:text-stone-700">
              Products
            </Link>
          </li>
          <li>/</li>
          <li className="text-stone-700">{product.name}</li>
        </ol>
      </nav>

      {/* Product Detail */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Gallery */}
          <ImageGallery images={product.gallery} alt={product.name} />

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-warm-gold">
              {product.category}
            </span>
            <h1 className="mt-3 font-serif text-3xl font-light tracking-tight text-stone-900 md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-stone-600">
              {product.description}
            </p>

            {/* Quick details */}
            <div className="mt-8 space-y-4 border-t border-stone-200 pt-8">
              <div className="flex justify-between border-b border-stone-100 pb-3">
                <span className="text-sm text-stone-400">Category</span>
                <span className="text-sm font-medium capitalize text-stone-700">
                  {product.category}
                </span>
              </div>
              <div className="flex justify-between border-b border-stone-100 pb-3">
                <span className="text-sm text-stone-400">Finish</span>
                <span className="text-sm font-medium text-stone-700">
                  Polished
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-stone-400">Application</span>
                <span className="text-sm font-medium text-stone-700">
                  Interior &amp; Exterior
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="border border-stone-900 bg-stone-900 px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-transparent hover:text-stone-900"
              >
                Request a Quote
              </Link>
              <Link
                href="/products"
                className="border border-stone-300 px-8 py-3 text-sm font-medium tracking-wide text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-white px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-serif text-2xl font-light tracking-tight text-stone-900 md:text-3xl">
              Related Products
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <QuoteCTA />
    </>
  );
}
