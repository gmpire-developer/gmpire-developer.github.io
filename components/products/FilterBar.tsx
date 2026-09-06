'use client';

import { typeFilters, sizeFilters } from '@/lib/products';
import type { MattressSize, MattressType } from '@/types/product';

type Props = {
  selectedSize: MattressSize | 'All';
  selectedType: MattressType | 'All';
  onSizeChange: (size: MattressSize | 'All') => void;
  onTypeChange: (type: MattressType | 'All') => void;
};

const chipClass =
  'rounded-full border px-3 py-1.5 text-sm font-medium transition active:scale-[0.98]';

export function FilterBar({ selectedSize, selectedType, onSizeChange, onTypeChange }: Props) {
  return (
    <div className="sticky top-[64px] z-30 -mx-4 mb-6 border-y border-maple-earth/50 bg-maple-cream/95 px-4 py-3 backdrop-blur dark:border-[#2f4138] dark:bg-[#121614]/95 sm:mx-0 sm:rounded-2xl sm:border sm:px-4">
      <div className="space-y-3">
        <div className="flex gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => onSizeChange('All')}
            className={`${chipClass} ${selectedSize === 'All' ? 'border-maple-forest bg-maple-forest text-maple-cream' : 'border-maple-earth text-maple-forest dark:border-[#3c5247] dark:text-maple-earth'}`}
          >
            All Sizes
          </button>
          {sizeFilters.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => onSizeChange(size)}
              className={`${chipClass} ${selectedSize === size ? 'border-maple-forest bg-maple-forest text-maple-cream' : 'border-maple-earth text-maple-forest dark:border-[#3c5247] dark:text-maple-earth'}`}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => onTypeChange('All')}
            className={`${chipClass} ${selectedType === 'All' ? 'border-maple-forest bg-maple-forest text-maple-cream' : 'border-maple-earth text-maple-forest dark:border-[#3c5247] dark:text-maple-earth'}`}
          >
            All Types
          </button>
          {typeFilters.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => onTypeChange(type)}
              className={`${chipClass} ${selectedType === type ? 'border-maple-forest bg-maple-forest text-maple-cream' : 'border-maple-earth text-maple-forest dark:border-[#3c5247] dark:text-maple-earth'}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
