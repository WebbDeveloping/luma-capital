import Link from "next/link";

export default function OpportunityHero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* Background image + overlay */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/stock/bg/3.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#20140a]/55" />
      </div>

      {/* Bottom gradient fade */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[#20140a]/40"
      />

      {/* Warm gold glow accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      >
        <div
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
          className="aspect-[801/1036] w-[36rem] bg-gradient-to-tr from-[#FFE898] to-[#624315] opacity-10"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl lg:mx-0 lg:shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <h1 className="text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl font-serif">
              Earn a Fixed
              <br />
              <span className="text-[#FFE898]">8-12% APY</span>
            </h1>
            <p className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl font-serif">
              with TerraLuma Fixed-Income Investing
            </p>
          </div>

          <p className="mt-8 text-lg font-medium text-pretty text-[#f3eadb] sm:text-xl/8 font-sans">
            Invest as little as $500, get predictable cash flow, downside
            protection and no fees. Start earning interest on your investment
            immediately. First pay out in just 60 days.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-[#FFE898] px-6 py-3 text-base font-semibold text-[#20140a] shadow-sm hover:bg-[#f7e3a8] font-sans"
            >
              Invest
            </Link>
            <a
              href="#land-opportunity"
              className="text-sm/6 font-semibold text-[#FFE898] hover:underline font-sans"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
