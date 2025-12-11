import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Push to deploy",
    description:
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export default function VisionComponent() {
  return (
    <section className="bg-[#e8dbc7] py-24 sm:py-32 dark:bg-[#1F1A14]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 font-serif">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-tl-brown dark:text-tl-gold font-serif">
            Investment Focus
          </h2>

          <p className="mt-2 text-4xl font-semibold tracking-tight text-[#21140a] sm:text-5xl lg:text-balance dark:text-white font-serif">
            Supporting rural operators and long-term land stewards
          </p>

          <p className="mt-6 text-lg/8 text-[#5a4a36] dark:text-gray-300 font-sans">
            TerraLuma invests in high-integrity, service-driven rural businesses
            where patient capital and operational support create resilience,
            growth, and continuity.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                {/* Feature Name */}
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-[#21140a] dark:text-white font-serif">
                  <feature.icon
                    aria-hidden="true"
                    className="size-5 flex-none text-tl-brown dark:text-tl-gold"
                  />
                  {feature.name}
                </dt>

                {/* Description */}
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-[#5a4a36] dark:text-gray-400 font-serif">
                  <p className="flex-auto font-sans">{feature.description}</p>

                  {/* CTA — stays sans */}
                  <p className="mt-6 font-sans">
                    <a
                      href={feature.href}
                      className="text-sm/6 font-semibold text-tl-brown hover:text-tl-brown/80 dark:text-tl-gold dark:hover:text-tl-gold/80"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
