import {
  MapIcon,
  BuildingStorefrontIcon,
  ShieldCheckIcon,
} from "@heroicons/react/20/solid";

export default function OurModal() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f9f5ee] py-24 sm:py-32">
      {/* Warm motif blob */}
      <div
        aria-hidden="true"
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
      >
        <div
          style={{
            clipPath:
              "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
          }}
          className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#caa85a] to-[#624315] opacity-20"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top header */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base/7 font-semibold text-[#624315]">
            TerraLuma Capital
          </p>

          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#1b1308] sm:text-5xl">
            Our investment model is built for durability.
          </h2>

          <p className="mt-6 text-xl/8 text-[#5a4a36]">
            We acquire real, understandable assets at attractive valuations,
            improve performance through hands-on ownership, and hold for
            long-term value — not short-term exits.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          {/* Sticky quote */}
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              aria-hidden="true"
              className="absolute -top-160 left-1 -z-10 h-256 w-702 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)] stroke-[#1b1308]/10"
            >
              <defs>
                <pattern
                  id="tl-grid"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect
                fill="url(#tl-grid)"
                width="100%"
                height="100%"
                strokeWidth={0}
              />
            </svg>

            {/* sticky container */}
            <div className="lg:sticky lg:top-24">
              <figure className="border-l border-[#624315] pl-8">
                <blockquote className="text-xl/8 font-semibold tracking-tight text-[#1b1308]">
                  <p>
                    “We invest and operate with purpose — building durable value
                    for people, capital, and communities over the long term.”
                  </p>
                </blockquote>

                <figcaption className="mt-8 flex gap-x-4">
                  <div className="mt-1 size-10 flex-none rounded-full bg-[#e8dbc7] ring-1 ring-inset ring-black/10" />
                  <div className="text-sm/6">
                    <div className="font-semibold text-[#1b1308]">
                      TerraLuma Capital
                    </div>
                    <div className="text-[#5a4a36]">
                      Long-term, stewardship-driven ownership
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Body content */}
          <div className="max-w-xl text-base/7 text-[#5a4a36] lg:col-span-7">
            <p>
              TerraLuma Capital is a long-term investment firm focused on
              acquiring and stewarding tangible, cash-generating real assets
              across land, operating businesses, and select real estate. We
              partner with sellers, operators, and accredited investors who
              value permanence, alignment, and disciplined execution.
            </p>

            <ul role="list" className="mt-8 max-w-xl space-y-8 text-[#5a4a36]">
              <li className="flex gap-x-3">
                <MapIcon
                  aria-hidden="true"
                  className="mt-1 size-5 flex-none text-[#624315]"
                />
                <span>
                  <strong className="font-semibold text-[#1b1308]">
                    What we invest in.
                  </strong>{" "}
                  Rural land and development parcels, privately owned operating
                  businesses, and flex / light industrial real estate — asset
                  classes where patient capital and judgment create advantage.
                </span>
              </li>

              <li className="flex gap-x-3">
                <BuildingStorefrontIcon
                  aria-hidden="true"
                  className="mt-1 size-5 flex-none text-[#624315]"
                />
                <span>
                  <strong className="font-semibold text-[#1b1308]">
                    How we create value.
                  </strong>{" "}
                  Disciplined acquisitions, operational improvement, and
                  stewardship-led ownership — not financial engineering or
                  speculation.
                </span>
              </li>

              <li className="flex gap-x-3">
                <ShieldCheckIcon
                  aria-hidden="true"
                  className="mt-1 size-5 flex-none text-[#624315]"
                />
                <span>
                  <strong className="font-semibold text-[#1b1308]">
                    How we partner.
                  </strong>{" "}
                  Flexible seller solutions (cash close, seller financing,
                  creative structures) and aligned investor partnerships built
                  on conservative underwriting and transparency.
                </span>
              </li>
            </ul>

            <p className="mt-8">
              We avoid excessive leverage, short holding periods, and
              speculative assumptions. Our goal is to own assets we understand,
              improve what we control, and hold through cycles. Durability comes
              first.
            </p>

            <h3 className="mt-16 text-2xl font-bold tracking-tight text-[#1b1308]">
              A model designed to endure
            </h3>

            <p className="mt-6">
              TerraLuma invests its own capital alongside partners, ensuring
              incentives stay aligned. We deploy deliberately, focus on
              fundamentals, and prioritize continuity — for owners, operators,
              and communities connected to the assets we steward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
