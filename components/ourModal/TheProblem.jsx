import {
  UserGroupIcon,
  BanknotesIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Owners nearing transition",
    description:
      "Many long-standing operators are ready to retire, but succession plans are unclear, creating pressure to sell quickly or shut down.",
    icon: UserGroupIcon,
  },
  {
    name: "Capital mismatch",
    description:
      "Community lenders know the towns and the people, but mandates, timelines, and collateral constraints often don’t fit real transitions.",
    icon: BanknotesIcon,
  },
  {
    name: "Growth without infrastructure",
    description:
      "Rural land demand is rising, but development often arrives without the services that make a community functional and resilient.",
    icon: BuildingStorefrontIcon,
  },
];

export default function TheProblem() {
  return (
    <section className="relative isolate overflow-hidden bg-[--background] py-24 sm:py-32 text-[#1b1308]">
      {/* subtle top divider */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-black/10"
      />

      {/* Background pattern (match your “nice” hero style) */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-20 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-[#e2d4c1]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="tl-problem-pattern"
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
          fill="url(#tl-problem-pattern)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      {/* Gold glow (same blob system as your reference) */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      >
        <div
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
          className="aspect-801/1036 w-200.25 bg-linear-to-tr from-tl-gold to-tl-brown opacity-30"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-left lg:text-center">
          <p className="text-xs font-semibold tracking-[0.14em] text-tl-brown uppercase font-sans">
            The Problem
          </p>

          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#20140a] sm:text-5xl">
            What’s breaking in rural markets
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5a4a36]">
            Rural communities don’t fail loudly—they lose capacity one business
            at a time.
          </p>
        </div>

        <dl className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:mt-20 lg:mt-24 lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative rounded-2xl border border-black/10 bg-white/70 p-8 shadow-sm backdrop-blur transition hover:bg-white"
            >
              <dt className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-tl-brown">
                  <feature.icon
                    aria-hidden="true"
                    className="h-6 w-6 text-tl-gold"
                  />
                </div>

                <p className="text-base font-semibold text-[#20140a]">
                  {feature.name}
                </p>
              </dt>

              <dd className="mt-4 text-base leading-7 text-[#5a4a36]">
                {feature.description}
              </dd>

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-black/10" />
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
