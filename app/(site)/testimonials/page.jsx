import CTASection from "../../../components/home/CtaSection";

// app/investors/testimonials/page.tsx (or components/InvestorTestimonialsWireframe.tsx)
export default function InvestorTestimonialsWireframe() {
  const testimonials = [
    {
      name: "Tom",
      title: "First Investor • Business Founder",
      bio: `Tom was TerraLuma Capital’s very first investor and has played a critical role in funding two successful acquisition projects. As a seasoned business founder, he recognized the strategic value of TerraLuma’s approach early on. Through his diversified investment portfolio — including his involvement with TerraLuma — Tom enjoys greater flexibility and a semi-retired lifestyle, working only on entrepreneurial projects of his choosing, and travelling the world.`,
    },
    {
      name: "Greg",
      title: "Professional Lender • Alternative Assets Investor",
      bio: `Greg built his career as a professional lender, with the first two decades spent in mortgage lending. Over time, he saw firsthand the value of alternative assets and developed a vision closely aligned with TerraLuma’s strategy. His expertise in lending across diverse asset classes gives him a deep understanding of where private markets can outperform traditional fixed income.`,
    },
  ];

  return (
    <>
      <InvestorTestimonialsHero />
      <InvestorTestimonialsBlock />
      <CTASection />
    </>
  );
}

function InvestorTestimonialsHero() {
  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      {/* Background image + dark overlay (same sizing model as original) */}
      <div className="absolute inset-0 -z-20">
        <img
          alt=""
          src="/images/land-business/bg/4.png"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#20140a]/55" />
      </div>

      {/* Bottom gradient fade */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[#20140a]/40"
      />

      {/* Content (kept similar to your original sizing) */}
      <div className="mx-auto max-w-2xl text-center font-serif">
        <p className="text-sm font-semibold tracking-wide text-[#FFE898]">
          Investor Testimonials
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Chosen by Investors Who Think Long Term
        </h1>

        <p className="mt-6 text-lg text-[#f3eadb] sm:text-xl/8">
          Investor perspectives on alignment, structure, and TerraLuma’s
          stewardship-driven mandate.
        </p>
      </div>
    </div>
  );
}

function InvestorTestimonialsBlock() {
  const testimonials = [
    {
      name: "Tom",
      title: "First Investor • Business Founder",
      bio: `Tom was TerraLuma Capital’s very first investor and has played a critical role in funding two successful acquisition projects. As a seasoned business founder, he recognized the strategic value of TerraLuma’s approach early on. Through his diversified investment portfolio — including his involvement with TerraLuma — Tom enjoys greater flexibility and a semi-retired lifestyle, working only on entrepreneurial projects of his choosing, and travelling the world.`,
    },
    {
      name: "Greg",
      title: "Professional Lender • Alternative Assets Investor",
      bio: `Greg built his career as a professional lender, with the first two decades spent in mortgage lending. Over time, he saw firsthand the value of alternative assets and developed a vision closely aligned with TerraLuma’s strategy. His expertise in lending across diverse asset classes gives him a deep understanding of where private markets can outperform traditional fixed income.`,
    },
  ];

  return (
    <div className="bg-[#f9f5ee] text-[#1b1308] font-serif">
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        {/* SVG grid background (same as your referenced section) */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-[#e2d4c1]"
        >
          <defs>
            <pattern
              x="50%"
              y="-1"
              id="tl-pattern"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>

          <svg x="50%" y="-1" className="overflow-visible fill-[#fdf7ee]">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth="0"
            />
          </svg>

          <rect
            fill="url(#tl-pattern)"
            width="100%"
            height="100%"
            strokeWidth="0"
          />
        </svg>

        {/* Gradient blob (same placement + clip-path) */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        >
          <div
            className="aspect-[801/1036] w-[200px] bg-gradient-to-tr from-[#FFE898] to-[#624315] opacity-30"
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-wide text-[#624315]">
              Investor Perspectives
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#20140a] sm:text-5xl">
              Aligned capital, shared conviction
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5a4a36]">
              Selected investor bios describing why TerraLuma’s long-term
              mandate resonated with them.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* LEFT */}
            <div className="flex flex-col pb-10 sm:pb-16 lg:pr-8 lg:pb-0 xl:pr-20">
              {/* <div className="h-12 w-40 rounded-lg border border-black/10 bg-white/60" /> */}

              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-[#1b1308]">
                  <p>“{testimonials[0].bio}”</p>
                </blockquote>

                <figcaption className="mt-10 flex items-center gap-x-6">
                  <div className="size-14 rounded-full border border-black/10 bg-white/70" />

                  <div className="text-base">
                    <div className="font-semibold text-[#1b1308]">
                      {testimonials[0].name}
                    </div>
                    <div className="mt-1 text-[#5a4a36]">
                      {testimonials[0].title}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col border-t border-black/10 pt-10 sm:pt-16 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 xl:pl-20">
              {/* <div className="h-12 w-40 rounded-lg border border-black/10 bg-white/60" /> */}

              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-[#1b1308]">
                  <p>“{testimonials[1].bio}”</p>
                </blockquote>

                <figcaption className="mt-10 flex items-center gap-x-6">
                  <div className="size-14 rounded-full border border-black/10 bg-white/70" />

                  <div className="text-base">
                    <div className="font-semibold text-[#1b1308]">
                      {testimonials[1].name}
                    </div>
                    <div className="mt-1 text-[#5a4a36]">
                      {testimonials[1].title}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          {/* Shared disclaimer */}
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <p className="text-xs leading-5 text-black/50">
              Disclaimer: Testimonials reflect individual experiences and
              opinions and are not indicative of future results. They are
              provided for informational purposes only.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
