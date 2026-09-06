import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="grid gap-8 py-8">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-maple-moss">Ottawa Luxury Sleep Boutique</p>
        <h1 className="text-[clamp(2rem,8vw,4rem)] font-semibold leading-tight text-maple-forest dark:text-maple-earth">
          Better nights begin at Maple&apos;s Leaf.
        </h1>
        <p className="max-w-2xl text-[clamp(1rem,2.6vw,1.2rem)] text-maple-charcoal/80 dark:text-[#f3eee2]/85">
          Discover premium beds and mattresses with tailored consultations in our Ottawa showroom.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link href="/products" className="rounded-full bg-maple-forest px-6 py-3 text-sm font-semibold text-maple-cream transition hover:scale-[1.01] hover:bg-maple-moss">
          Browse Collection
        </Link>
        <Link href="/contact#booking" className="rounded-full border border-maple-forest px-6 py-3 text-sm font-semibold text-maple-forest transition hover:bg-maple-earth/40 dark:border-maple-earth dark:text-maple-earth dark:hover:bg-[#30443a]">
          Reserve Showroom Visit
        </Link>
      </div>
    </section>
  );
}
