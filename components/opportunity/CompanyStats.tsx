import Image from "next/image";

export default function MarketFactors() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* First Item: Population & Migration Trends */}
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-[#1b1308] shadow-2xl lg:max-w-lg aspect-[4/3]">
              <Image
                alt=""
                src="/images/stock/3.png"
                fill
                className="rounded-3xl object-cover"
              />
            </div>
          </div>
          <div>
            <div className="text-base/7 text-[#5a4a36] lg:max-w-lg font-sans">
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#1b1308] sm:text-5xl font-serif">
                Population & Migration Trends
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Many individuals and families are moving to these regions due
                  to lower cost of living, business-friendly climates, and
                  quality of life.
                </p>
                <p className="mt-8">
                  Economic data consistently shows these metro areas growing
                  faster than national averages due to inbound migration of
                  workers and families.
                </p>
              </div>
            </div>
          </div>

          {/* Second Item: Strong Business Demand */}
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-[#1b1308] shadow-2xl lg:max-w-lg aspect-[4/3]">
              <Image
                alt=""
                src="/images/stock/4.png"
                fill
                className="rounded-3xl object-cover"
              />
            </div>
          </div>
          <div>
            <div className="text-base/7 text-[#5a4a36] lg:max-w-lg font-sans">
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#1b1308] sm:text-5xl font-serif">
                Strong Business Demand
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Growth in construction, trades, manufacturing support
                  services, and logistics underpins demand for flex/light
                  industrial real estate — where many small businesses operate
                  and service regional needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
