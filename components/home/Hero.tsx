"use client";

export default function HeroSection() {
  return (
    <div className="bg-[#f9f5ee] text-[#1b1308] dark:bg-[#1F1A14] dark:text-white font-serif">
      <div className="relative isolate">
        {/* Background pattern */}
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-[#e2d4c1] dark:stroke-white/10"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>

          <svg
            x="50%"
            y={-1}
            className="overflow-visible fill-[#fdf7ee] dark:fill-[#17130d]"
          >
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>

          <rect
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>

        {/* Gold glow */}
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

        {/* CONTENT */}
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                {/* HEADLINE — serif */}
                <h1 className="text-5xl font-semibold tracking-tight text-pretty text-[#20140a] sm:text-7xl dark:text-white font-serif">
                  Investing in the Future of Rural America
                </h1>

                {/* PARAGRAPH — serif */}
                <p className="mt-8 text-lg text-pretty text-[#5a4a36] sm:max-w-md sm:text-xl/8 lg:max-w-none dark:text-gray-300 font-serif">
                  We help rural businesses transition to the next generation and
                  support thoughtful land development that strengthens local
                  communities. Our approach blends responsible capital, local
                  partnerships, and long-term stewardship.
                </p>

                {/* BUTTONS — keep sans for clarity */}
                <div className="mt-10 flex items-center gap-x-6 font-sans">
                  <a
                    href="#"
                    className="rounded-md bg-tl-brown px-3.5 py-2.5 text-sm font-semibold text-tl-gold shadow-xs hover:bg-[#4f3511] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tl-brown dark:bg-tl-gold dark:text-tl-black dark:hover:bg-[#ffe080] dark:focus-visible:outline-tl-gold"
                  >
                    Who We Support
                  </a>

                  <a
                    href="#"
                    className="text-sm/6 font-semibold text-[#3c3227] hover:text-tl-brown dark:text-tl-gold dark:hover:text-white"
                  >
                    Live demo <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              {/* IMAGE GRID — no font changes needed */}
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                  <div className="relative">
                    <img
                      alt=""
                      src="/images/stock/1.png"
                      className="aspect-2/3 w-full rounded-xl bg-black/5 object-cover shadow-lg dark:bg-white/5"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/15" />
                  </div>
                </div>

                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <img
                      alt=""
                      src="/images/stock/3.png"
                      className="aspect-2/3 w-full rounded-xl bg-black/5 object-cover shadow-lg dark:bg-white/5"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/15" />
                  </div>
                  <div className="relative">
                    <img
                      alt=""
                      src="/images/stock/2.png"
                      className="aspect-2/3 w-full rounded-xl bg-black/5 object-cover shadow-lg dark:bg-white/5"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/15" />
                  </div>
                </div>

                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <img
                      alt=""
                      src="/images/stock/7.png"
                      className="aspect-2/3 w-full rounded-xl bg-black/5 object-cover shadow-lg dark:bg-white/5"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/15" />
                  </div>
                  <div className="relative">
                    <img
                      alt=""
                      src="/images/stock/4.png"
                      className="aspect-2/3 w-full rounded-xl bg-black/5 object-cover shadow-lg dark:bg-white/5"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/15" />
                  </div>
                </div>
              </div>
              {/* END IMG GRID */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
