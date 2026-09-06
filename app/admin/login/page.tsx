import Link from 'next/link';

export default function AdminLoginPage() {
  return (
    <section className="mx-auto max-w-lg rounded-2xl border border-slate-700 bg-slate-950 p-6 text-slate-100">
      <h1 className="mb-3 text-2xl font-semibold">Admin Access Required</h1>
      <p className="mb-4 text-sm text-slate-300">
        This secure area uses a placeholder session gate. Use the secure access link below to simulate authentication.
      </p>
      <Link
        href="/admin/dashboard?auth=maple-admin"
        className="inline-flex rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
      >
        Simulate Secure Sign-In
      </Link>
    </section>
  );
}
