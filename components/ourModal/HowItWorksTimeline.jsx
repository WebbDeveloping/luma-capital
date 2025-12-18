// components/HowTerraLumaWorks.tsx

const steps = [
  {
    step: "01",
    name: "Identify essential businesses at risk",
    description:
      "We focus on trades, services, and small manufacturing that communities rely on every day.",
  },
  {
    step: "02",
    name: "Partner with embedded local lenders",
    description:
      "We work alongside community banks and local lenders who already understand the borrowers, collateral, and real constraints.",
  },
  {
    step: "03",
    name: "Structure transition-aligned capital",
    description:
      "Patient financing designed to match succession timelines and real operating cash flows—without forcing short-term decisions.",
  },
  {
    step: "04",
    name: "Support capable operators",
    description:
      "Backing new or existing operators who will sustain the business, serve the community, and protect reputation.",
  },
  {
    step: "05",
    name: "Align homestead development to demand",
    description:
      "Low-density, high-quality rural living works best when essential services are in place—creating a reinforcing local ecosystem.",
  },
];

export default function HowTerraLumaWorks() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f3eadb] py-24 sm:py-32">
      {/* subtle pattern like Tailwind Plus */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(90%_80%_at_20%_10%,white,transparent)] stroke-[#e2d4c1]"
      >
        <defs>
          <pattern
            id="tl-works-grid"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tl-works-grid)" />
      </svg>

      {/* warm glow */}
      <div
        aria-hidden="true"
        className="absolute -top-10 right-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-tl-gold/25 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-xs font-semibold tracking-[0.14em] text-tl-brown uppercase font-sans">
            How it works
          </p>

          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#20140a] sm:text-5xl">
            How the TerraLuma model works
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5a4a36] font-sans">
            A repeatable process designed to keep essential businesses open and
            communities stable.
          </p>
        </div>

        {/* Steps (Tailwind Plus-style “stacked cards” with vertical rail) */}
        <div className="mx-auto mt-16 max-w-3xl sm:mt-20">
          <ol className="relative border-l border-black/10 pl-6">
            {steps.map((s) => (
              <li key={s.step} className="relative pb-12 last:pb-0">
                {/* step marker */}
                <span className="absolute -left-[14px] top-1 flex h-7 w-7 items-center justify-center rounded-full bg-tl-brown text-tl-gold text-xs font-semibold font-sans shadow-sm ring-4 ring-[--background z-15">
                  {s.step}
                </span>

                <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-7">
                  <h3 className="font-serif text-lg font-semibold text-[#20140a]">
                    {s.name}
                  </h3>
                  <p className="mt-2 font-sans text-base leading-7 text-[#5a4a36]">
                    {s.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
