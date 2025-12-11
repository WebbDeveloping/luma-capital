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

export default function WhyUs() {
  return (
    <div className="overflow-hidden bg-[#f3eadb] py-24 sm:py-32 dark:bg-[#000]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Copy */}
          <div className="lg:ml-auto lg:pt-4 lg:pl-4 font-serif">
            <div className="lg:max-w-lg">
              {/* Eyebrow */}
              <p className="text-base/7 font-semibold text-tl-brown dark:text-tl-gold font-serif">
                The gap we’re built to fill
              </p>

              {/* Heading */}
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#21140a] sm:text-5xl dark:text-white font-serif">
                When rural businesses and land have nowhere stable to go
              </h2>

              {/* Body */}
              <p className="mt-6 text-lg/8 text-[#4f4537] dark:text-gray-300 font-serif">
                TerraLuma Capital steps in when a good rural business or
                homestead project needs more than a traditional loan, but less
                than a sale to an outside buyer. We help owners exit well,
                operators step up, and local lenders stay at the center of the
                table.
              </p>

              {/* Features */}
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-[#5a4a36] lg:max-w-none dark:text-gray-300 font-serif">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-[#21140a] dark:text-white font-serif">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-tl-brown dark:text-tl-gold"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline font-serif">{feature.description}</dd>
                  </div>
                ))}
              </dl>

              {/* CTA — stays sans for UI clarity */}
              <div className="mt-10 font-sans">
                <a
                  href="/our-model"
                  className="text-base/7 font-semibold text-tl-brown hover:text-tl-brown/80 dark:text-tl-gold dark:hover:text-tl-gold/80"
                >
                  Learn how TerraLuma is structured to help &rarr;
                </a>
              </div>

              {/* Mobile video */}
              <div className="md:hidden mt-10">
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-tl-black shadow-xl ring-1 ring-tl-brown/25 dark:bg-[#111111] dark:ring-tl-gold/25">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Um63OQz3bjo"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky video block (desktop) */}
          <div className="hidden md:flex items-start justify-end lg:order-first">
            <div className="w-full lg:w-auto lg:sticky lg:top-24">
              <div className="aspect-video w-3xl max-w-none rounded-xl overflow-hidden shadow-xl ring-1 ring-tl-brown/25 dark:ring-tl-gold/25">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Um63OQz3bjo"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
