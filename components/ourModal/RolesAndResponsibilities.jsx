// components/RolesAndResponsibilities.tsx

import { CheckIcon } from "@heroicons/react/20/solid";

const lenderItems = [
  "Originate and manage core credit relationships",
  "Provide local underwriting insight and community context",
  "Maintain long-term relationships with operators",
];

const terralumaItems = [
  "Provide transition-aligned, patient capital",
  "Support operator succession and continuity planning",
  "Connect business continuity with adjacent rural development",
];

export default function RolesAndResponsibilities() {
  return (
    <section className="bg-[#e8dbc7] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5 lg:items-start">
          {/* Left copy */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase font-sans text-tl-brown">
              Roles & Responsibilities
            </p>

            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#1b1308] sm:text-5xl">
              Clear roles. Aligned incentives.
            </h2>

            <p className="mt-6 font-sans text-base leading-7 text-[#1b1308]/75">
              TerraLuma complements local lenders—bringing additional
              flexibility, patience, and alignment to transitions.
            </p>

            <p className="mt-4 font-sans text-base leading-7 text-[#1b1308]/75">
              Local banks remain central to rural economies. TerraLuma is
              designed to work with them—not around them—by adding a long-term
              capital layer that supports continuity, responsible development,
              and stable community growth.
            </p>
          </div>

          {/* Right checklist split */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Local Lenders */}
              <div className="rounded-2xl border border-black/10 bg-[#f9f5ee] p-7 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-[#1b1308]">
                  Local Lenders
                </h3>

                <ul className="mt-6 space-y-4">
                  {lenderItems.map((item) => (
                    <li key={item} className="relative pl-10">
                      <span className="absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-tl-brown/10">
                        <CheckIcon className="h-4 w-4 text-tl-brown" />
                      </span>
                      <p className="font-sans text-sm leading-6 text-[#1b1308]/80">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* TerraLuma */}
              <div className="rounded-2xl border border-black/10 bg-[#f9f5ee] p-7 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-[#1b1308]">
                  TerraLuma Capital
                </h3>

                <ul className="mt-6 space-y-4">
                  {terralumaItems.map((item) => (
                    <li key={item} className="relative pl-10">
                      {/* gold check needs contrast */}
                      <span className="absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-tl-brown">
                        <CheckIcon className="h-4 w-4 text-tl-gold" />
                      </span>
                      <p className="font-sans text-sm leading-6 text-[#1b1308]/80">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
