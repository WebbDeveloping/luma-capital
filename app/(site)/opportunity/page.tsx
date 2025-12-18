// app/opportunity/page.tsx
export default function OpportunityPage() {
  return (
    <main className="bg-[#f9f5ee] text-[#1b1308]">
      {/* HERO */}
      <section className="px-6 py-20 sm:py-24 lg:px-8 border-b border-black/10">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold tracking-wide uppercase text-[#624315]">
            The Opportunity
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl font-serif">
            A generational shift in land and business ownership
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/70">
            Demographics, succession gaps, and regional growth are creating a
            rare window for disciplined, long-term capital.
          </p>

          {/* simple CTA row (wireframe) */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#land"
              className="inline-flex items-center justify-center rounded-xl bg-[#624315] px-5 py-3 text-sm font-semibold text-white"
            >
              Opportunity in Land
            </a>
            <a
              href="#business"
              className="inline-flex items-center justify-center rounded-xl border border-black/15 px-5 py-3 text-sm font-semibold"
            >
              Opportunity in Small Business
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — LAND */}
      <section id="land" className="px-6 py-18 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            {/* Left narrative */}
            <div className="flex-1">
              <p className="text-sm font-semibold tracking-wide uppercase text-[#624315]">
                2) The Opportunity in Land
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl font-serif">
                A wave of land ownership transition
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-black/70">
                <p>
                  A significant portion of U.S. farmland is expected to change
                  hands in the coming decades, driven by an aging population and
                  evolving land use pressures:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Experts estimate roughly{" "}
                    <span className="font-semibold text-black">
                      300–350 million acres
                    </span>{" "}
                    of farmland will transfer ownership over the next 20 years
                    as older landowners and operators retire.{" "}
                    <span className="text-black/50">
                      (Senate Special Committee on Aging)
                    </span>
                  </li>
                  <li>
                    Data suggests that{" "}
                    <span className="font-semibold text-black">
                      40% of American farmland
                    </span>{" "}
                    could be in transition soon, due to demographic shifts and
                    generational change.{" "}
                    <span className="text-black/50">(Farm Management)</span>
                  </li>
                </ul>

                <p className="font-semibold text-black">
                  This transition presents two big realities:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>More land coming to market</li>
                  <li>
                    Risks of conversion to non-agricultural uses (development
                    pressure)
                  </li>
                </ul>
              </div>
            </div>

            {/* Right stats stack */}
            <aside className="w-full lg:w-[360px]">
              <div className="rounded-2xl border border-black/10 bg-white/60 p-6">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-black/60">
                  Key signals
                </h3>

                <div className="mt-5 space-y-4">
                  <div className="rounded-xl border border-black/10 bg-white p-4">
                    <p className="text-xs font-semibold uppercase text-black/50">
                      Farmland transfers
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-black">
                      300–350M acres
                    </p>
                    <p className="mt-1 text-sm text-black/60">
                      Expected to transfer over the next 20 years.
                    </p>
                  </div>

                  <div className="rounded-xl border border-black/10 bg-white p-4">
                    <p className="text-xs font-semibold uppercase text-black/50">
                      Transition share
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-black">
                      ~40%
                    </p>
                    <p className="mt-1 text-sm text-black/60">
                      Of American farmland could be in transition soon.
                    </p>
                  </div>

                  <div className="rounded-xl border border-black/10 bg-white p-4">
                    <p className="text-xs font-semibold uppercase text-black/50">
                      Core risk
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-black">
                      Conversion pressure
                    </p>
                    <p className="mt-1 text-sm text-black/60">
                      Increased likelihood of non-ag development in growth
                      corridors.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Why land matters */}
          <div className="mt-14 border-t border-black/10 pt-12">
            <h3 className="text-2xl font-semibold tracking-tight font-serif">
              Why this matters for investors
            </h3>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white/60 p-6">
                <p className="text-sm font-semibold text-black">
                  Scarcity and long-term demand
                </p>
                <p className="mt-2 text-sm leading-6 text-black/70">
                  As population grows and development pressures increase,
                  holding quality land becomes more valuable.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/60 p-6">
                <p className="text-sm font-semibold text-black">
                  Institutional under-participation
                </p>
                <p className="mt-2 text-sm leading-6 text-black/70">
                  Large institutional capital often overlooks smaller land
                  markets where disciplined buyers can capture outsized value.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/60 p-6">
                <p className="text-sm font-semibold text-black">
                  Physical, tangible asset class
                </p>
                <p className="mt-2 text-sm leading-6 text-black/70">
                  Farmland and rural acreage can provide stability when public
                  markets are volatile.
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm leading-6 text-black/60">
              This wave is not theory — it’s anchored in demographic realities
              and farm succession dynamics documented by agricultural research
              and national land nonprofits.
              <span className="text-black/50"> (Farm Management)</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SMALL BUSINESS */}
      <section
        id="business"
        className="px-6 py-18 sm:py-24 lg:px-8 border-t border-black/10 bg-white/30"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            {/* Left narrative */}
            <div className="flex-1">
              <p className="text-sm font-semibold tracking-wide uppercase text-[#624315]">
                3) The Opportunity in Small Business Acquisition
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl font-serif">
                The “Silver Tsunami”
              </h2>

              <div className="mt-6 space-y-4 text-base leading-7 text-black/70">
                <p className="font-semibold text-black">
                  Demographic forces at work
                </p>
                <p>
                  The term “Silver Tsunami” refers to the large cohort of aging
                  business owners approaching retirement and preparing to exit
                  ownership.
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Millions of Baby Boomer-owned businesses will need new
                    leadership in the next decade.
                    <span className="text-black/50"> (BizBuySell)</span>
                  </li>
                  <li>
                    Roughly{" "}
                    <span className="font-semibold text-black">
                      2.3 million
                    </span>{" "}
                    small businesses nationwide are owned by aging owners likely
                    to consider exit or succession options.
                    <span className="text-black/50"> (Project Equity)</span>
                  </li>
                  <li>
                    Surveys show nearly{" "}
                    <span className="font-semibold text-black">48%</span> of
                    business owners aged 45–75 want to exit their company within
                    the next three years.
                    <span className="text-black/50">
                      {" "}
                      (cornerstone-business.com)
                    </span>
                  </li>
                  <li>
                    Many of these businesses do not have formal succession
                    plans, increasing the likelihood of sales or closures.
                    <span className="text-black/50"> (Teamshares)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: compelling for investors */}
            <aside className="w-full lg:w-[360px]">
              <div className="rounded-2xl border border-black/10 bg-white/60 p-6">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-black/60">
                  Why this is compelling
                </h3>

                <div className="mt-5 space-y-4 text-sm leading-6 text-black/70">
                  <div className="rounded-xl border border-black/10 bg-white p-4">
                    <p className="font-semibold text-black">
                      Real opportunities in acquisitions
                    </p>
                    <p className="mt-2">
                      Established businesses with profitability and systems in
                      place are rare and valuable.
                    </p>
                  </div>

                  <div className="rounded-xl border border-black/10 bg-white p-4">
                    <p className="font-semibold text-black">
                      Succession gaps create scarcity
                    </p>
                    <p className="mt-2">
                      When owners retire without a transition plan, capable
                      buyers can step in and preserve value.
                    </p>
                  </div>

                  <div className="rounded-xl border border-black/10 bg-white p-4">
                    <p className="font-semibold text-black">
                      Strong employment and revenue base at stake
                    </p>
                    <p className="mt-2">
                      In specific regions, tens of thousands of businesses with
                      collective billions in payroll and revenue are owned by
                      those nearing exit.
                      <span className="text-black/50"> (wncbusiness.com)</span>
                    </p>
                  </div>

                  <div className="rounded-xl border border-black/10 bg-white p-4">
                    <p className="font-semibold text-black">
                      Cash flows + operational upside
                    </p>
                    <p className="mt-2">
                      With disciplined underwriting and operational support,
                      investors can capture ongoing cash flows and strategic
                      upside from operational improvements.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SECTION 4 — REGIONAL FOCUS */}
      <section
        id="region"
        className="px-6 py-18 sm:py-24 lg:px-8 border-t border-black/10"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold tracking-wide uppercase text-[#624315]">
            4) Growth in Nashville, Huntsville, Knoxville, and Chattanooga
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl font-serif">
            Regional dynamics that support your investment strategy
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-black/70">
            These Southeastern markets — where TerraLuma Capital focuses
            investing — are experiencing above-average growth and economic
            dynamism:
          </p>

          {/* 4-up grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-black/10 bg-white/60 p-6">
              <p className="text-sm font-semibold text-black">
                1. Population &amp; Migration Trends
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-black/70 space-y-2">
                <li>
                  Many individuals and families are moving to these regions due
                  to lower cost of living, business-friendly climates, and
                  quality of life.
                </li>
                <li>
                  Economic data consistently shows these metro areas growing
                  faster than national averages due to inbound migration of
                  workers and families.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/60 p-6">
              <p className="text-sm font-semibold text-black">
                2. Strong Business Demand
              </p>
              <p className="mt-3 text-sm leading-6 text-black/70">
                Growth in construction, trades, manufacturing support services,
                and logistics underpins demand for flex/light industrial real
                estate — where many small businesses operate and service
                regional needs.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/60 p-6">
              <p className="text-sm font-semibold text-black">
                3. Land &amp; Development Tailwinds
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-black/70 space-y-2">
                <li>
                  Continued expansion of residential and commercial growth
                  corridors creates long-term opportunity for land value
                  appreciation.
                </li>
                <li>
                  Rural and exurban land near expanding metros can benefit from
                  development pressure even as ag/land use remains intact.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/60 p-6">
              <p className="text-sm font-semibold text-black">
                4. Workforce and Small Business Ecosystems
              </p>
              <p className="mt-3 text-sm leading-6 text-black/70">
                These regions have diversified economies with entrepreneurial
                activity, which supports the demand for acquisition of
                established businesses that serve local communities.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-black/10 bg-white/50 p-6">
            <p className="text-sm text-black/70">
              <span className="font-semibold text-black">(Note)</span> I will
              compile specific charts, census figures, and recent data for these
              markets next if you want exact migration and economic statistics
              to include on your site.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="px-6 py-20 sm:py-24 lg:px-8 border-t border-black/10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl font-serif">
            A convergence, not a cycle
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-black/70">
            Land transition, business succession, and regional growth are
            happening simultaneously. TerraLuma is structured to operate where
            they intersect.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="/mission"
              className="inline-flex items-center justify-center rounded-xl bg-[#624315] px-5 py-3 text-sm font-semibold text-white"
            >
              Explore TerraLuma’s mission
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-black/15 px-5 py-3 text-sm font-semibold"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
