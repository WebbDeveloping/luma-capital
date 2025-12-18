export default function FlexIndustrialBlock() {
  return (
    <section className="relative isolate overflow-hidden bg-[#e8dbc7] py-24 sm:py-32 dark:bg-[#1F1A14]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center font-serif">
          <h2 className="text-base/7 font-semibold text-tl-brown dark:text-tl-gold">
            Flex / Light Industrial Real Estate
          </h2>

          <p className="mt-2 font-serif text-4xl font-semibold tracking-tight text-[#21140a] sm:text-5xl lg:text-balance dark:text-white">
            Commercial Properties Built for Essential Work
          </p>

          <p className="mt-6 text-lg/8 text-[#5a4a36] dark:text-gray-300 font-sans">
            We acquire flex and light industrial properties that support
            blue-collar and service-driven businesses in growing regional
            markets.
          </p>
        </div>

        <section className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          {/* Copy */}
          <div className="lg:pr-8 font-serif">
            <h3 className="text-2xl font-semibold tracking-tight text-[#21140a] dark:text-white">
              What we look for
            </h3>

            <ul className="mt-6 space-y-4 text-base/7 text-[#5a4a36] dark:text-gray-400 font-sans">
              <li className="flex gap-x-3">
                <span className="mt-2 size-1.5 flex-none rounded-full bg-tl-brown dark:bg-tl-gold" />
                <span>
                  <strong className="font-semibold text-[#21140a] dark:text-white">
                    $500,000–$5 million purchase range
                  </strong>
                </span>
              </li>

              <li className="flex gap-x-3">
                <span className="mt-2 size-1.5 flex-none rounded-full bg-tl-brown dark:bg-tl-gold" />
                <span>
                  <strong className="font-semibold text-[#21140a] dark:text-white">
                    Flex space for service & trade tenants
                  </strong>{" "}
                  <span className="text-[#5a4a36] dark:text-gray-400">
                    (HVAC, plumbing, electrical, logistics)
                  </span>
                </span>
              </li>

              <li className="flex gap-x-3">
                <span className="mt-2 size-1.5 flex-none rounded-full bg-tl-brown dark:bg-tl-gold" />
                <span>
                  <strong className="font-semibold text-[#21140a] dark:text-white">
                    Markets with population and business growth
                  </strong>
                </span>
              </li>
            </ul>

            <p className="mt-8 text-base/7 text-[#5a4a36] dark:text-gray-300 font-sans">
              These properties provide reliable utility, durable demand, and
              opportunities for responsible improvement over time.
            </p>
          </div>

          {/* Image grid — reused (unchanged) */}
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8">
              {[
                "/images/land-business/6.png",
                "/images/land-business/7.png",
                "/images/land-business/3.png",
                "/images/land-business/5.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className={`aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10 ${
                    i % 2 === 1 ? "lg:-mt-40 -mt-8" : ""
                  }`}
                >
                  <img
                    alt=""
                    src={`${src}?&auto=format&fit=crop&w=560&h=560&q=90`}
                    className="block size-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* At a glance */}
          <div className="max-lg:mt-16 lg:col-span-1">
            <p className="text-base/7 font-semibold text-tl-brown dark:text-tl-gold font-serif">
              At a glance
            </p>

            <hr className="mt-6 border-t border-[#d6c8b3] dark:border-white/10" />

            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <Stat label="Purchase range" value="$0.5–5M" />
              <Stat label="Asset type" value="Flex / Light" />
              <Stat label="Tenant profile" value="Trades" />
              <Stat label="Market focus" value="Growth" />
            </dl>
          </div>
        </section>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="flex flex-col gap-y-2 border-b border-dotted border-[#d6c8b3] pb-4 dark:border-white/10">
      <dt className="text-sm/6 text-[#5a4a36] dark:text-gray-400 font-sans">
        {label}
      </dt>
      <dd className="order-first text-5xl font-semibold tracking-tight text-[#21140a] dark:text-white font-serif">
        {value}
      </dd>
    </div>
  );
}
