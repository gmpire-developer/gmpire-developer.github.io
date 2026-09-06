import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-12 py-8 sm:space-y-16 sm:py-12">
      <section className="relative overflow-hidden rounded-3xl border border-maple-earth/50 bg-gradient-to-br from-maple-cream via-[#f2e8d4] to-maple-earth/60 p-6 shadow-card dark:border-[#2f4138] dark:from-[#16221c] dark:via-[#1a2a22] dark:to-[#22382d] sm:p-10">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-maple-earth/40 blur-3xl dark:bg-maple-moss/50" />
        <div className="absolute -bottom-20 -left-14 h-48 w-48 rounded-full bg-maple-moss/20 blur-3xl dark:bg-maple-earth/20" />
        <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-maple-moss">Ottawa Luxury Sleep Boutique</p>
            <h1 className="text-[clamp(2.2rem,8vw,4.5rem)] font-semibold leading-[1.05] text-maple-forest dark:text-maple-earth">
              Better sleep, crafted around you.
            </h1>
            <p className="max-w-xl text-[clamp(1rem,2.5vw,1.2rem)] leading-relaxed text-maple-charcoal/80 dark:text-[#f3eee2]/85">
              Explore premium mattresses, handcrafted bed frames, and one-on-one guidance to create a nightly routine that feels effortless.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/products"
                className="rounded-full bg-maple-forest px-6 py-3 text-sm font-semibold text-maple-cream transition hover:-translate-y-0.5 hover:bg-maple-moss focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maple-moss dark:bg-maple-earth dark:text-[#121614] dark:hover:bg-[#eed1a7]"
              >
                Browse Collection
              </Link>
              <Link
                href="/contact#booking"
                className="rounded-full border border-maple-forest/50 px-6 py-3 text-sm font-semibold text-maple-forest transition hover:bg-maple-earth/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maple-moss dark:border-maple-earth dark:text-maple-earth dark:hover:bg-[#30443a]"
              >
                Reserve Showroom Visit
              </Link>
            </div>
          </div>
          <div className="grid gap-3 rounded-2xl border border-maple-earth/50 bg-white/55 p-5 backdrop-blur dark:border-[#385145] dark:bg-[#121614]/60">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-maple-moss">Maple&apos;s Promise</p>
            <h2 className="text-2xl font-semibold text-maple-forest dark:text-maple-earth">Comfort that lasts for years.</h2>
            <ul className="space-y-2 text-sm text-maple-charcoal/80 dark:text-[#f3eee2]/85">
              <li>• Personalized fit consultations for every sleep style</li>
              <li>• Curated Canadian craftsmanship and premium materials</li>
              <li>• Delivery coordination and setup guidance included</li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-label="Highlights" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: 'Tailored Recommendations', body: 'We compare support profiles and finishes so you can feel confident before you buy.' },
          { title: 'Calm Showroom Experience', body: 'Book private appointments and explore products in a relaxed setting with expert guidance.' },
          { title: 'End-to-End Care', body: 'From selection to delivery, our team helps you build the right sleep setup for your home.' },
        ].map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-maple-earth/40 bg-white/70 p-5 shadow-card dark:border-[#2f4138] dark:bg-[#151b18]"
          >
            <h3 className="text-lg font-semibold text-maple-forest dark:text-maple-earth">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-maple-charcoal/80 dark:text-[#f3eee2]/85">{feature.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
