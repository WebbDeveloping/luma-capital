"use client";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function OurModal() {
  return (
    <div className="relative isolate overflow-hidden bg-[#f3eadb] px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 dark:bg-tl-black">
      {/* patterned background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-[#e2d4c1] dark:stroke-[#262019]"
        >
          <defs>
            <pattern x="50%" y={-1} id="e813992c-7d03-4cc4-a2bd-151760b470a0">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg
            x="50%"
            y={-1}
            className="overflow-visible fill-[#f7f0e4] dark:fill-[#17130d]"
          >
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* Heading block */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-tl-brown dark:text-tl-gold font-serif">
                Our model
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-[#21140a] sm:text-5xl dark:text-white font-serif">
                A capital stack designed for rural reality
              </h1>
              <p className="mt-6 text-xl/8 text-[#4f4537] dark:text-gray-300 font-serif">
                TerraLuma Capital sits alongside community banks and local
                operators to solve succession, fund growth, and keep ownership
                rooted in the communities that built these businesses and
                homesteads.
              </p>
            </div>
          </div>
        </div>

        {/* Video / sticky card */}
        <VideoBlock />

        {/* Body copy + bullets */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 font-sans">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-[#5a4a36] lg:max-w-lg dark:text-gray-300">
              <p>
                Most rural transitions are not “sell it or shut it down”
                decisions. They’re questions of time, structure, and alignment:
                how to let an owner step back, an operator step up, and a local
                lender stay in the deal without overextending their mandate.
                TerraLuma’s model is built for that middle ground.
              </p>

              <ul
                role="list"
                className="mt-8 space-y-8 text-[#5a4a36] dark:text-gray-300"
              >
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-tl-brown dark:text-tl-gold"
                  />
                  <span>
                    <strong className="font-semibold text-[#21140a] dark:text-white">
                      Aligned with local lenders.
                    </strong>{" "}
                    We structure our capital to sit beside community banks,
                    preserving existing relationships while adding flexible
                    equity or mezzanine layers to make transitions and expansion
                    actually pencil.
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <LockClosedIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-tl-brown dark:text-tl-gold"
                  />
                  <span>
                    <strong className="font-semibold text-[#21140a] dark:text-white">
                      Shared protections, not predatory terms.
                    </strong>{" "}
                    Governance, covenants, and collateral are designed to
                    protect the business, the land, and the families involved —
                    not just the last dollar of return.
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <ServerIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-tl-brown dark:text-tl-gold"
                  />
                  <span>
                    <strong className="font-semibold text-[#21140a] dark:text-white">
                      Long-term orientation.
                    </strong>{" "}
                    We underwrite to staying power: durable cash flow,
                    stewardship of working land, and continuity for employees
                    and customers — not quick flips or financial engineering.
                  </span>
                </li>
              </ul>

              <p className="mt-8">
                In practice, that means TerraLuma can help buy out a retiring
                owner over time, recapitalize a strong operator for thoughtful
                growth, or support homestead and rural land projects that banks
                believe in but can’t fully finance on their own.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-[#21140a] dark:text-white font-serif">
                Where TerraLuma fits in a transaction
              </h2>

              <p className="mt-6">
                We are not a replacement for local banks or a distant private
                equity fund. We are a purpose-built partner that shares risk
                with owners, operators, and lenders so that essential rural
                businesses and land can change hands without leaving the people
                and places they serve behind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoBlock() {
  return (
    <div className="lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
      {/* Mobile video – full width, sm and below */}
      <div className="md:hidden mt-8">
        <video
          className="w-full rounded-xl bg-tl-black shadow-xl ring-1 ring-tl-brown/25 dark:bg-[#111111] dark:ring-tl-gold/25"
          src="/videos/video-1.mov"
          controls
          playsInline
        />
      </div>

      {/* Desktop / larger video – hidden until md+ */}
      <div className="hidden md:block -mt-12 -ml-12 p-12">
        <video
          className="w-3xl max-w-none rounded-xl bg-tl-black shadow-xl ring-1 ring-tl-brown/25 sm:w-228 dark:bg-[#111111] dark:ring-tl-gold/25"
          src="/videos/video-1.mov"
          controls
          playsInline
        />
      </div>
    </div>
  );
}
