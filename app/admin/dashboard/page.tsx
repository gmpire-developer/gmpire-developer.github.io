import { InventoryTable } from '@/components/admin/InventoryTable';

export default function AdminDashboardPage() {
  return (
    <section className="min-h-[70vh] rounded-2xl border border-slate-700 bg-slate-950 p-5 text-slate-100 sm:p-6">
      <header className="mb-5 space-y-2 border-b border-slate-800 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Secure Workspace</p>
        <h1 className="text-2xl font-semibold">Inventory Management Dashboard</h1>
        <p className="text-sm text-slate-300">Internal controls for mattress pricing and storefront visibility.</p>
      </header>
      <InventoryTable />
    </section>
  );
}
