import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Owners without a next generation.",
    description:
      "Many long-standing rural businesses are led by owners nearing retirement with no clear successor, creating pressure to sell quickly or shut down entirely.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Banks limited by their mandate.",
    description:
      "Community lenders know the operators and the towns, but are often constrained by regulations, collateral limits, or timelines that don’t fit real-world transitions.",
    icon: LockClosedIcon,
  },
  {
    name: "Families caught in the middle.",
    description:
      "Employees, customers, and local families depend on these businesses and the land beneath them—yet have little control over how ownership changes hands.",
    icon: ServerIcon,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-[#f3eadb] py-24 sm:py-32 dark:bg-tl-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Copy */}
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-tl-brown dark:text-tl-gold">
                The gap we’re built to fill
              </p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#21140a] sm:text-5xl dark:text-white">
                When rural businesses and land have nowhere stable to go
              </h2>
              <p className="mt-6 text-lg/8 text-[#4f4537] dark:text-gray-300">
                TerraLuma Capital steps in when a good rural business or
                homestead project needs more than a traditional loan, but less
                than a sale to an outside buyer. We help owners exit well,
                operators step up, and local lenders stay at the center of the
                table.
              </p>

              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-[#5a4a36] lg:max-w-none dark:text-gray-300">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-[#21140a] dark:text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-tl-brown dark:text-tl-gold"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10">
                <a
                  href="/our-model"
                  className="text-base/7 font-semibold text-tl-brown hover:text-tl-brown/80 dark:text-tl-gold dark:hover:text-tl-gold/80"
                >
                  Learn how TerraLuma is structured to help &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Sticky video block */}
          <div className="flex items-start justify-end lg:order-first">
            <div className="w-full lg:w-auto lg:sticky lg:top-24">
              <video
                className="w-3xl max-w-none rounded-xl bg-tl-black shadow-xl ring-1 ring-tl-brown/25 sm:w-228 dark:bg-[#111111] dark:ring-tl-gold/25"
                src="/videos/video-1.mov"
                controls
                playsInline
                // poster="/images/stock/bg/terraluma-poster-1.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
