"use client";

import { useState } from "react";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#f9f5ee] text-[#1b1308] font-serif">
      {/* HERO */}
      <div className="relative isolate pt-14">
        {/* Background pattern */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-[#e2d4c1]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="tl-pattern"
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
            fill="url(#tl-pattern)"
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

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-14 lg:px-8 lg:py-32">
          {/* LEFT */}
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="text-5xl font-semibold tracking-tight text-pretty text-[#20140a] sm:text-7xl font-serif">
              Investing in the Future of Rural America
            </h1>

            <p className="mt-8 text-lg text-pretty text-[#5a4a36] sm:text-xl/8 font-serif">
              We help rural businesses transition to the next generation and
              support thoughtful land development that strengthens local
              communities. Our approach blends responsible capital, local
              partnerships, and long-term stewardship.
            </p>

            <div className="mt-10 flex items-center gap-x-6 font-sans">
              <a
                href="#"
                className="rounded-md bg-tl-brown px-3.5 py-2.5 text-sm font-semibold text-tl-gold shadow-xs hover:bg-[#4f3511] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tl-brown"
              >
                Who We Support
              </a>
              <a
                href="#"
                className="text-sm/6 font-semibold text-[#3c3227] hover:text-tl-brown"
              >
                Live demo <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT — VIDEO */}
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
            <div className="mx-auto max-w-xl lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl bg-black/5 ring-1 ring-black/10 shadow-lg">
                <div className="aspect-video w-full">
                  {/* <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Um63OQz3bjo"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe> */}
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/CqGflLHMy8M?si=74JzU5s1lk42fin7"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
