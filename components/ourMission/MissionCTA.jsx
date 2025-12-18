export default function MissionCTA() {
  return (
    <div className="bg-[#f9f5ee]">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-[#1b1308] px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-balance text-[#f9f5ee] sm:text-5xl">
            Let’s start a thoughtful conversation
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#f9f5ee]/80">
            Whether you’re planning a transition, advising an owner, or
            exploring long-term partnership, TerraLuma works best when
            conversations start early.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-[#FFE898] px-4 py-2.5 text-sm font-semibold text-[#1b1308] shadow-sm hover:bg-[#FFE898]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFE898]"
            >
              Get in touch
            </a>

            <a
              href="/our-model"
              className="text-sm font-semibold text-[#f9f5ee]/90 hover:text-[#f9f5ee]"
            >
              How we work <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Subtle brand glow */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="#624315"
              fillOpacity="0.35"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
