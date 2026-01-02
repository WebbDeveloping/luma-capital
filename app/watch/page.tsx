"use client";

import {
  BuildingStorefrontIcon,
  MapIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ClockIcon,
  BanknotesIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const videoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const highlights = [
  {
    name: "Private Businesses",
    description:
      "We acquire owner-operated businesses in essential industries, preserving jobs and community continuity while improving operational fundamentals.",
    icon: BuildingStorefrontIcon,
  },
  {
    name: "Rural Land",
    description:
      "Strategic land acquisition in the Southeast, focusing on quality road frontage, development potential, and long-term value appreciation.",
    icon: MapIcon,
  },
  {
    name: "Flex Industrial Real Estate",
    description:
      "Light industrial and flex space properties serving blue-collar tenants in high-demand rental markets with value-add opportunities.",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Direct Sourcing",
    description:
      "We work directly with owners and landowners, avoiding auction-style markets to structure better deals for all parties involved.",
    icon: UserGroupIcon,
  },
  {
    name: "Long-term Stewardship",
    description:
      "Patient capital approach focused on durable assets, operational improvement, and compounding value over quick exits.",
    icon: ClockIcon,
  },
  {
    name: "Tangible Assets",
    description:
      "Real, understandable assets with proven cash flow and tangible collateral—not speculative investments tied to market volatility.",
    icon: BanknotesIcon,
  },
];

export default function WatchPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="bg-[#f9f5ee] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base/7 font-semibold text-tl-brown">
            TerraLuma Capital
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#1b1308] sm:text-5xl sm:text-balance">
            Learn about our approach
          </p>
          <p className="mt-6 text-lg/8 text-[#5a4a36]">
            Watch this video to understand how TerraLuma Capital acquires and
            operates real assets in private markets, creating value through
            patient capital and long-term stewardship.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            ref={ref}
            className="mt-16 sm:mt-20 lg:mt-24"
            variants={videoVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Outer: rings/shadow */}
            <div className="relative rounded-3xl ring-1 ring-inset ring-black/10 shadow-2xl">
              {/* Inner: CLIP layer to guarantee rounded corners */}
              <div className="overflow-hidden rounded-3xl bg-[#1b1308]">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/20v7FD_x63U?controls=1&modestbranding=1&rel=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* subtle surface ring */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10"
              />
            </div>

            {/* standard bottom spacing inside the section */}
            <div className="h-16 sm:h-20 lg:h-24" />
          </motion.div>
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-[#f9f5ee] pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-[#5a4a36] sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <div key={highlight.name} className="relative pl-9">
                <dt className="inline font-semibold text-[#1b1308]">
                  <Icon
                    aria-hidden="true"
                    className="absolute top-1 left-1 size-5 text-tl-brown"
                  />
                  {highlight.name}
                </dt>{" "}
                <dd className="inline">{highlight.description}</dd>
              </div>
            );
          })}
        </dl>
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-tl-brown px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#55380f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tl-brown transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
