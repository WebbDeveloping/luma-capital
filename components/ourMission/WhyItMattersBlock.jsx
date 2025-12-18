import {
  BuildingStorefrontIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Retiring owners with no clear successor.",
    description:
      "Many strong rural businesses are led by owners nearing retirement without a transition plan, creating pressure to sell quickly or shut down entirely.",
    icon: BuildingStorefrontIcon,
  },
  {
    name: "Families and employees left exposed.",
    description:
      "When ownership changes hands, the people who depend on these businesses often have little influence over what happens next.",
    icon: UserGroupIcon,
  },
  {
    name: "Communities lose the basics.",
    description:
      "When essential services disappear, rural regions lose skills, stability, and the everyday infrastructure that makes local life work.",
    icon: HeartIcon,
  },
];

export default function WhyItMattersBlock() {
  return (
    <div className="overflow-hidden bg-[#f3eadb] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          {/* Copy */}
          <div className="px-6 md:px-0 lg:pt-6 lg:pr-6 font-serif">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className="text-base/7 font-semibold text-[#624315]">
                Why this matters
              </p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#21140a] sm:text-5xl">
                When essential businesses close, rural life gets harder.
              </h2>
              <p className="mt-6 text-lg/8 text-[#4f4537]">
                Rural communities rely on trades, service, logistics, and
                specialty manufacturing every day. When a good business closes
                due to an unplanned exit, the loss reaches far beyond the
                owner—it affects families, employees, and the region’s ability
                to function.
              </p>

              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-[#5a4a36] lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-[#21140a]">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-[#624315]"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Visual (replace “code window” with image card) */}
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden rounded-3xl bg-[#20140a] px-6 pt-10 sm:mx-auto sm:max-w-2xl sm:pt-14 sm:pr-0 sm:pl-14 lg:mx-0 lg:max-w-none shadow-xl ring-1 ring-black/10">
              {/* Warm glow */}
              <div
                aria-hidden="true"
                className="absolute -top-24 right-0 -z-10 h-80 w-80 translate-x-1/3 rounded-full bg-[#FFE898]/20 blur-3xl"
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

              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <div className="overflow-hidden rounded-tl-2xl rounded-br-2xl bg-black/30 ring-1 ring-[#FFE898]/20">
                  <div className="relative aspect-[3/4] w-full">
                    <img
                      src="/images/stock/3.png"
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#20140a]/35" />

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="font-serif text-xl text-[#FFE898]">
                        Keeping essential work close to home.
                      </p>
                      <p className="mt-2 font-sans text-sm text-white/75">
                        Owner-operated businesses, real places.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/10 ring-inset"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
