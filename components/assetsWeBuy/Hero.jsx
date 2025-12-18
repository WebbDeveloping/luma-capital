const links = [
  { name: "Private Businesses", href: "#businesses" },
  { name: "Land", href: "#land" },
  { name: "Flex / Light Industrial", href: "#flex-industrial" },
  { name: "Start a Confidential Conversation", href: "#contact" },
];

export default function AssetsWeBuyHero() {
  return (
    <section
      className="relative isolate overflow-hidden min-h-[70vh]"
      aria-label="Assets we buy hero"
    >
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

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center font-serif">
          <p className="text-sm font-semibold tracking-wide text-[#FFE898]">
            TerraLuma Capital
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Assets We Buy
          </h1>

          <p className="mt-6 text-lg text-[#f3eadb] sm:text-xl/8">
            TerraLuma Capital buys assets in three core categories: Private
            Businesses, Land, and Flex / Light Industrial Real Estate — with
            attractive, actionable options for owners ready to transact.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-x-6 font-sans">
            <a
              href="#contact"
              className="rounded-md bg-[#FFE898] px-4 py-2.5 text-sm font-semibold text-[#20140a] shadow-sm hover:bg-[#f7e3a8]"
            >
              Start a confidential discussion
            </a>

            <a
              href="#businesses"
              className="text-sm font-semibold text-[#FFE898] hover:underline"
            >
              See what we acquire →
            </a>
          </div>

          {/* Quick links row */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-sans text-sm font-semibold text-[#f3eadb]">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group inline-flex items-center gap-2 hover:text-white"
              >
                <span className="underline-offset-4 group-hover:underline">
                  {link.name}
                </span>
                <span aria-hidden="true" className="text-[#FFE898]">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
