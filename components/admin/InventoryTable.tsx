'use client';

import { useMemo, useState } from 'react';
import { products as initialProducts } from '@/lib/products';
import type { Product } from '@/types/product';

type NewProductDraft = {
  name: string;
  price: string;
  type: Product['type'];
};

export function InventoryTable() {
  const [items, setItems] = useState<Product[]>(initialProducts);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [draft, setDraft] = useState<NewProductDraft>({ name: '', price: '', type: 'Hybrid' });

  const visibleCount = useMemo(() => items.filter((item) => item.visible).length, [items]);

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-300">Visible Products: {visibleCount}</p>
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white"
        >
          Add New Mattress Product
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-700">
        <table className="min-w-full divide-y divide-slate-700 text-sm">
          <thead className="bg-slate-800">
            <tr>
              <th className="px-3 py-2 text-left font-semibold">Product</th>
              <th className="px-3 py-2 text-left font-semibold">Type</th>
              <th className="px-3 py-2 text-left font-semibold">Edit Price</th>
              <th className="px-3 py-2 text-left font-semibold">Toggle Visibility</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 bg-slate-900/60">
            {items.map((item) => (
              <tr key={item.id}>
                <td className="px-3 py-3 font-medium">{item.name}</td>
                <td className="px-3 py-3">{item.type}</td>
                <td className="px-3 py-3">
                  <input
                    type="number"
                    value={item.price}
                    min={0}
                    onChange={(event) => {
                      const updatedPrice = Number(event.target.value);
                      setItems((prev) => prev.map((product) => (product.id === item.id ? { ...product, price: Number.isNaN(updatedPrice) ? product.price : updatedPrice } : product)));
                    }}
                    className="w-28 rounded-md border border-slate-600 bg-slate-950 px-2 py-1 text-slate-50"
                  />
                </td>
                <td className="px-3 py-3">
                  <button
                    type="button"
                    onClick={() =>
                      setItems((prev) => prev.map((product) => (product.id === item.id ? { ...product, visible: !product.visible } : product)))
                    }
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${item.visible ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}`}
                  >
                    {item.visible ? 'Visible' : 'Hidden'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`fixed inset-0 z-50 transition ${drawerOpen ? 'pointer-events-auto bg-slate-900/50 opacity-100' : 'pointer-events-none opacity-0'}`}>
        <aside className={`absolute right-0 top-0 h-full w-full max-w-sm bg-slate-950 p-5 text-slate-100 transition-transform ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Add New Mattress Product</h3>
            <button type="button" onClick={() => setDrawerOpen(false)} className="text-sm text-slate-300 hover:text-white">
              Close
            </button>
          </div>
          <div className="space-y-3">
            <label className="block text-sm">
              Product Name
              <input
                value={draft.name}
                onChange={(event) => setDraft((prev) => ({ ...prev, name: event.target.value }))}
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              Starting Price
              <input
                type="number"
                min={0}
                value={draft.price}
                onChange={(event) => setDraft((prev) => ({ ...prev, price: event.target.value }))}
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              Type
              <select
                value={draft.type}
                onChange={(event) => setDraft((prev) => ({ ...prev, type: event.target.value as Product['type'] }))}
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2"
              >
                <option>Memory Foam</option>
                <option>Hybrid</option>
                <option>Pocket Coil</option>
              </select>
            </label>
          </div>
          <button
            type="button"
            onClick={() => {
              const parsedPrice = Number(draft.price);
              if (!draft.name.trim() || Number.isNaN(parsedPrice)) {
                return;
              }
              const id = `${draft.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${items.length + 1}`;
              setItems((prev) => [
                ...prev,
                {
                  id,
                  name: draft.name.trim(),
                  type: draft.type,
                  price: parsedPrice,
                  sizes: ['Queen'],
                  firmness: ['Medium'],
                  description: 'New mattress draft added from admin panel.',
                  image: '/images/placeholder.jpg',
                  inStockOttawa: true,
                  visible: true,
                },
              ]);
              setDraft({ name: '', price: '', type: 'Hybrid' });
              setDrawerOpen(false);
            }}
            className="mt-5 w-full rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
          >
            Save Product
          </button>
        </aside>
      </div>
    </>
  );
}
