// components/CapitalOrientation.tsx

const principles = [
  {
    title: "Patient by design",
    description:
      "Structured to support multi-year transitions, not quick exits.",
  },
  {
    title: "Grounded in essentials",
    description: "Focused on businesses and land that serve real communities.",
  },
  {
    title: "Aligned with local stakeholders",
    description: "Built to complement banks, operators, and community needs.",
  },
];

export default function CapitalOrientation() {
  return (
    <section className="bg-[--background] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-left lg:text-center">
          <p className="text-xs font-semibold tracking-[0.14em] uppercase font-sans text-tl-brown">
            Capital orientation
          </p>

          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#1b1308] sm:text-5xl">
            Capital with a long-term mandate
          </h2>

          <p className="mt-6 font-sans text-base leading-7 text-[#1b1308]/75">
            Principles-first capital designed for continuity, stability, and
            long-horizon stewardship.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-black/10 bg-white/70 p-7 shadow-sm backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-2 w-2 rounded-full bg-tl-gold"
                  aria-hidden="true"
                />
                <p className="font-serif text-lg font-semibold text-[#1b1308]">
                  {p.title}
                </p>
              </div>

              <p className="mt-3 font-sans text-sm leading-6 text-[#1b1308]/75">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
