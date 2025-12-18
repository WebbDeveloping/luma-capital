// components/OurModelHero.tsx
"use client";

export default function OurModelHero() {
  return (
    <section className="relative isolate overflow-hidden bg-tl-black px-6 py-24 sm:py-32 lg:px-8 text-white">
      {/* Background image */}
      <img
        alt=""
        src="/images/stock/bg/1.png"
        className="absolute inset-0 -z-20 size-full object-cover opacity-20"
      />

      {/* dark overlay for legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-tl-black/80"
      />

      {/* subtle brand glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-tl-brown opacity-20 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-6xl">
          A model built for rural continuity.
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl">
          TerraLuma Capital partners with local lenders to support essential
          rural businesses through generational transition—and align low-density
          homestead development with the services that make rural life work.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-tl-gold px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:opacity-90 sm:w-auto"
          >
            Talk to TerraLuma
          </a>

          <a
            href="/investment-focus"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            View Investment Focus
          </a>
        </div>

        <p className="mt-6 text-sm text-white/60">
          Focused on essential services, durable local economies, and long-term
          stewardship.
        </p>
      </div>

      {/* bottom divider */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10"
      />
    </section>
  );
}
