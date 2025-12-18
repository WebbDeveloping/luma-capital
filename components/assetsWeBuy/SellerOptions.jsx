import { CheckCircleIcon } from "@heroicons/react/20/solid";

const sellerOptions = [
  {
    name: "Cash close",
    description: "Fast certainty with a straightforward transaction.",
  },
  {
    name: "Seller financing",
    description: "Ongoing income if you prefer to stay financially involved.",
  },
  {
    name: "Creative financing",
    description: "Flexible structures tailored to your goals and timeline.",
  },
];

export default function SellerOptionsBlock() {
  return (
    <section className="overflow-hidden bg-[#f9f5ee] py-24 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 rounded-3xl bg-white/80 px-6 py-16 shadow-lg ring-1 ring-[#e2d4c1] sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            {/* Visual */}
            <img
              alt="Confidential business transition"
              src="/images/stock/3.png"
              className="h-96 w-full flex-none rounded-2xl object-cover lg:aspect-square lg:h-auto lg:max-w-sm"
            />

            {/* Copy */}
            <div className="w-full flex-auto">
              <p className="text-sm font-semibold tracking-wide text-[#624315]">
                How we work with sellers
              </p>

              <h2 className="mt-2 font-serif text-4xl font-semibold tracking-tight text-[#21140a] sm:text-5xl">
                Flexible paths to a successful transition
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#4f4537]">
                Every business owner’s situation is different. We structure
                transactions to provide clarity, alignment, and outcomes that
                make sense for you—not a one-size-fits-all approach.
              </p>

              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 text-base leading-7 text-[#21140a] sm:grid-cols-2"
              >
                {sellerOptions.map((option) => (
                  <li key={option.name} className="flex gap-x-3">
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="h-7 w-5 flex-none text-[#624315]"
                    />
                    <span>
                      <span className="font-semibold">{option.name}</span>{" "}
                      <span className="text-[#4f4537]">
                        — {option.description}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex">
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-md bg-[#FFE898] px-5 py-3 text-sm font-semibold text-[#20140a] shadow-sm hover:bg-[#f7e3a8]"
                >
                  Tell us about your business
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle gold background glow */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex justify-center overflow-hidden blur-3xl"
        >
          <div
            className="aspect-[1318/752] w-[82rem] flex-none bg-gradient-to-r from-[#FFE898]/40 to-[#624315]/40 opacity-30"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
