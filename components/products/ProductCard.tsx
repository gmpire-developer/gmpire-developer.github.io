import Link from 'next/link';
import type { Product } from '@/types/product';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-2xl border border-maple-earth/50 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] dark:border-[#31443a] dark:bg-[#19201d]">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-maple-forest dark:text-maple-earth">{product.name}</h3>
        {product.inStockOttawa ? (
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200">
            In Stock in Ottawa
          </span>
        ) : (
          <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900/50 dark:text-amber-200">
            Restocking Soon
          </span>
        )}
      </div>
      <p className="mb-4 text-sm text-maple-charcoal/75 dark:text-[#f3eee2]/80">{product.description}</p>
      <p className="mb-5 text-xl font-semibold text-maple-forest dark:text-maple-earth">CA${product.price.toLocaleString()}</p>
      <div className="flex items-center justify-between gap-2">
        <Link href={`/products/${product.id}`} className="rounded-full bg-maple-forest px-4 py-2 text-sm font-semibold text-maple-cream transition hover:bg-maple-moss">
          Quick View
        </Link>
        <span className="text-xs font-medium text-maple-charcoal/65 dark:text-[#f3eee2]/70">{product.type}</span>
      </div>
    </article>
  );
}
