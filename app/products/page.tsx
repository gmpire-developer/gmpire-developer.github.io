'use client';

import { useMemo, useState } from 'react';
import { products } from '@/lib/products';
import type { MattressSize, MattressType } from '@/types/product';
import { ProductCard } from '@/components/products/ProductCard';
import { FilterBar } from '@/components/products/FilterBar';

export default function ProductsPage() {
  const [size, setSize] = useState<MattressSize | 'All'>('All');
  const [type, setType] = useState<MattressType | 'All'>('All');

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesSize = size === 'All' || product.sizes.includes(size);
      const matchesType = type === 'All' || product.type === type;
      return product.visible && matchesSize && matchesType;
    });
  }, [size, type]);

  return (
    <section>
      <header className="mb-5 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-maple-moss">Curated for Ottawa</p>
        <h1 className="text-[clamp(1.75rem,7vw,3rem)] font-semibold text-maple-forest dark:text-maple-earth">Beds & Mattresses</h1>
      </header>
      <FilterBar selectedSize={size} selectedType={type} onSizeChange={setSize} onTypeChange={setType} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {!filtered.length && (
        <p className="mt-6 rounded-xl border border-maple-earth/50 bg-white p-4 text-sm dark:border-[#31443a] dark:bg-[#19201d]">
          No products matched this combination. Try another filter.
        </p>
      )}
    </section>
  );
}
