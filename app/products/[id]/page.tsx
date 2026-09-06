import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/lib/products';
import { MattressCustomizer } from '@/components/products/MattressCustomizer';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id && item.visible);

  if (!product) {
    notFound();
  }

  return (
    <section className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
      <div className="rounded-2xl border border-maple-earth/50 bg-gradient-to-br from-maple-earth/45 to-maple-cream p-6 dark:border-[#31443a] dark:from-[#25342d] dark:to-[#141a17]">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-maple-moss">Luxury Collection</p>
        <h1 className="mb-3 text-[clamp(1.75rem,6vw,2.6rem)] font-semibold text-maple-forest dark:text-maple-earth">{product.name}</h1>
        <p className="mb-4 text-maple-charcoal/80 dark:text-[#f3eee2]/80">{product.description}</p>
        <div className="grid gap-2 text-sm text-maple-charcoal/85 dark:text-[#f3eee2]/85">
          <p>
            <span className="font-semibold">Type:</span> {product.type}
          </p>
          <p>
            <span className="font-semibold">Available Sizes:</span> {product.sizes.join(', ')}
          </p>
          <p>
            <span className="font-semibold">Starting Price:</span> CA${product.price.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <MattressCustomizer product={product} />
        <Link href="/contact#booking" className="block rounded-2xl bg-maple-forest px-5 py-4 text-center text-sm font-semibold text-maple-cream transition hover:bg-maple-moss">
          Inquire &amp; Reserve for Showroom Viewing
        </Link>
      </div>
    </section>
  );
}
