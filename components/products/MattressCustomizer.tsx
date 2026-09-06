'use client';

import { useMemo, useState } from 'react';
import type { Firmness, MattressSize, Product } from '@/types/product';

type Props = {
  product: Product;
};

export function MattressCustomizer({ product }: Props) {
  const [firmness, setFirmness] = useState<Firmness>(product.firmness[0]);
  const [size, setSize] = useState<MattressSize>(product.sizes[0]);

  const estimatedPrice = useMemo(() => {
    const sizeMultiplier: Record<MattressSize, number> = {
      Double: 0,
      Queen: 120,
      King: 260,
    };

    const firmnessMultiplier: Record<Firmness, number> = {
      Plush: 0,
      Medium: 40,
      Firm: 80,
    };

    return product.price + sizeMultiplier[size] + firmnessMultiplier[firmness];
  }, [firmness, product.price, size]);

  return (
    <div className="rounded-2xl border border-maple-earth/50 bg-white p-5 dark:border-[#31443a] dark:bg-[#19201d]">
      <h2 className="mb-4 text-lg font-semibold text-maple-forest dark:text-maple-earth">Mattress Customizer</h2>
      <div className="mb-4 space-y-2">
        <p className="text-sm font-medium">Firmness</p>
        <div className="flex flex-wrap gap-2">
          {product.firmness.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFirmness(option)}
              className={`rounded-full border px-3 py-1.5 text-sm transition ${firmness === option ? 'border-maple-forest bg-maple-forest text-maple-cream' : 'border-maple-earth text-maple-forest dark:border-[#3c5247] dark:text-maple-earth'}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5 space-y-2">
        <p className="text-sm font-medium">Dimensions</p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSize(option)}
              className={`rounded-full border px-3 py-1.5 text-sm transition ${size === option ? 'border-maple-forest bg-maple-forest text-maple-cream' : 'border-maple-earth text-maple-forest dark:border-[#3c5247] dark:text-maple-earth'}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-maple-charcoal/75 dark:text-[#f3eee2]/80">Estimated configured price</p>
      <p className="text-2xl font-semibold text-maple-forest dark:text-maple-earth">CA${estimatedPrice.toLocaleString()}</p>
    </div>
  );
}
