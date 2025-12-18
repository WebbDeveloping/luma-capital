"use client";

export default function HomeHero() {
  return (
    <div className="bg-[#f9f5ee] text-[#1b1308]">
      <main>
        <div className="relative isolate overflow-hidden pt-14">
          {/* Background pattern (OLD STYLE) */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-[#e2d4c1]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="tl-pattern"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>

            <svg x="50%" y={-1} className="overflow-visible fill-[#fdf7ee]">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>

            <rect
              fill="url(#tl-pattern)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>

          {/* Gradient blob (OLD STYLE, but TerraLuma colors) */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-[801/1036] w-[200.25] bg-linear-to-tr from-[#FFE898] to-[#624315] opacity-30"
            />
          </div>

          {/* Keep your existing warm glows if you want a bit more depth */}
          <div
            aria-hidden="true"
            className="absolute -bottom-40 left-0 -z-10 h-96 w-96 -translate-x-1/3 rounded-full bg-[#624315]/10 blur-3xl"
          />

          <div className="mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-40 sm:pb-28 lg:px-8 lg:pt-28">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              {/* Copy */}
              <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                <p className="font-serif text-sm font-semibold tracking-wide text-[#624315]">
                  TerraLuma Capital
                </p>

                <h1 className="mt-3 font-serif text-5xl font-semibold tracking-tight text-[#1b1308] sm:text-7xl">
                  Invest and serve with purpose.
                </h1>

                <p className="mt-7 text-lg font-medium leading-8 text-[#5a4a36] sm:text-xl">
                  TerraLuma Capital specializes in acquiring real estate and
                  privately owned companies—alternative assets sourced directly
                  from owners and structured for long-term value creation.
                </p>

                {/* Buttons (OLD STYLE) */}
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-x-6">
                  <a
                    href="/contact"
                    className="rounded-md bg-[#624315] px-3.5 py-2.5 text-sm font-semibold text-[#FFE898] shadow-xs hover:bg-[#4f3511] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#624315]"
                  >
                    Schedule a confidential call
                  </a>

                  <a
                    href="/assets-we-buy"
                    className="text-sm font-semibold text-[#3c3227] hover:text-[#624315]"
                  >
                    View assets we buy <span aria-hidden="true">→</span>
                  </a>
                </div>

                <p className="mt-6 text-xs leading-5 text-black/55">
                  Accredited investors only. Testimonials are not indicative of
                  future results.
                </p>
              </div>

              {/* Image collage (UNCHANGED from your current version) */}
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                  <div className="relative">
                    <img
                      alt="Rural land and stewardship"
                      src="/images/stock/1.png"
                      className="aspect-2/3 w-full rounded-2xl bg-black/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/10 ring-inset" />
                  </div>
                </div>

                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <img
                      alt="Essential local businesses"
                      src="/images/land-business/5.png"
                      className="aspect-2/3 w-full rounded-2xl bg-black/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/10 ring-inset" />
                  </div>

                  <div className="relative">
                    <img
                      alt="Flex and light industrial real estate"
                      src="/images/land-business/6.png"
                      className="aspect-2/3 w-full rounded-2xl bg-black/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/10 ring-inset" />
                  </div>
                </div>

                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <img
                      alt="Southeastern growth corridors"
                      src="/images/stock/2.png"
                      className="aspect-2/3 w-full rounded-2xl bg-black/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/10 ring-inset" />
                  </div>

                  <div className="relative">
                    <img
                      alt="Long-term, real asset investing"
                      src="/images/land-business/1.png"
                      className="aspect-2/3 w-full rounded-2xl bg-black/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/10 ring-inset" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade (match bg) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-[#f9f5ee] to-transparent" />
        </div>
      </main>
    </div>
  );
}
