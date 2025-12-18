import {
  MapIcon,
  ArrowTrendingDownIcon,
  BoltIcon,
  BeakerIcon,
} from "@heroicons/react/20/solid";

const criteria = [
  {
    name: "20 to 500+ acres",
    description: "Rural land and development parcels with meaningful scale.",
    icon: MapIcon,
  },
  {
    name: "Purchased below retail value",
    description: "Acquired at a significant discount to completed-lot pricing.",
    icon: ArrowTrendingDownIcon,
  },
  {
    name: "Strong road access",
    description:
      "Reliable ingress and egress suitable for development or long-term holding.",
    icon: MapIcon,
  },
  {
    name: "Power and water availability",
    description: "Existing utilities or clearly feasible access.",
    icon: BoltIcon,
  },
  {
    name: "Minimal flood exposure & passable soil",
    description:
      "Usable topography with acceptable flood risk and perc/soil tests where applicable.",
    icon: BeakerIcon,
  },
];

export default function LandBlock() {
  return (
    <section id="land" className="relative isolate bg-[#f9f5ee] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* LEFT: Sticky visual */}
          <div className="lg:sticky lg:top-10">
            <div className="relative isolate overflow-hidden rounded-3xl bg-[#20140a] px-6 pt-10 sm:px-8 sm:pt-12 shadow-xl ring-1 ring-black/10">
              {/* Warm glow */}
              <div
                aria-hidden="true"
                className="absolute -top-24 left-0 -z-10 h-80 w-80 -translate-x-1/3 rounded-full bg-[#FFE898]/20 blur-3xl"
              />

              {/* Subtle texture */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-25"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,232,152,0.18) 1px, transparent 0)",
                  backgroundSize: "22px 22px",
                }}
              />

              <div className="overflow-hidden rounded-tr-2xl rounded-bl-2xl bg-black/30 ring-1 ring-[#FFE898]/20">
                <div className="relative aspect-[3/4] w-full">
                  <img
                    src="/images/land-business/3.png"
                    alt="Rural land"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#20140a]/30" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-serif text-xl text-[#FFE898]">
                      Real land. Real utility.
                    </p>
                    <p className="mt-2 font-sans text-sm text-white/75">
                      Thoughtful acquisition and stewardship.
                    </p>
                  </div>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/10 ring-inset"
              />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="font-serif">
            <p className="text-base/7 font-semibold text-[#624315]">Land</p>

            <h2 className="mt-2 font-serif text-4xl font-semibold text-pretty text-[#21140a] sm:text-5xl">
              We Acquire Rural Land with Long-Term Potential.
            </h2>

            <p className="mt-6 text-lg/8 text-[#4f4537]">
              We acquire rural land and development parcels that meet clear
              investment and stewardship criteria—favoring usable land with
              strong fundamentals and responsible upside.
            </p>

            <dl className="mt-10 space-y-8 text-base/7 text-[#5a4a36]">
              {criteria.map((item) => (
                <div key={item.name} className="relative pl-9">
                  <dt className="inline font-semibold text-[#21140a]">
                    <item.icon
                      aria-hidden="true"
                      className="absolute left-0 top-1 size-5 text-[#624315]"
                    />
                    {item.name}
                  </dt>{" "}
                  <dd className="inline">{item.description}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-10 text-lg/8 text-[#4f4537]">
              Whether you’re considering selling now or simply exploring
              options, we make land transitions straightforward and
              professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
