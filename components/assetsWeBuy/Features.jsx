"use client";

import {
  BuildingOffice2Icon,
  MapIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    name: "Private Businesses",
    description:
      "We acquire established businesses (7+ years) with verifiable financials, $500,000–$2,000,000 in EBITDA, and clear pathways to growth through better marketing, operational efficiencies, and technology.",
    href: "#businesses",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Land",
    description:
      "We acquire rural land and development parcels (20–500+ acres) with strong access, feasible utilities, minimal flood exposure, and pricing meaningfully below retail value—built for stewardship and long-term upside.",
    href: "#land",
    icon: MapIcon,
  },
  {
    name: "Flex / Light Industrial",
    description:
      "We acquire flex and light industrial properties with strong rental demand and value-add potential—typically in the $500,000–$5,000,000 range, serving blue-collar and service tenants in growing markets.",
    href: "#flex-industrial",
    icon: WrenchScrewdriverIcon,
  },
];

export default function AssetsOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.0, 0, 0.2, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.0, 0, 0.2, 1],
      },
    },
  };

  return (
    <section ref={ref} className="bg-[#f9f5ee] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            className="text-sm font-semibold tracking-wide text-[#624315]"
            variants={itemVariants}
          >
            What we acquire
          </motion.p>

          <motion.h2
            className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#20140a] sm:text-5xl"
            variants={itemVariants}
          >
            Three core asset categories
          </motion.h2>

          <motion.p
            className="mt-6 text-lg leading-8 text-[#20140a]/70"
            variants={itemVariants}
          >
            TerraLuma Capital buys Private Businesses, Land, and Flex / Light
            Industrial Real Estate—offering straightforward, confidential
            conversations and tailored structures for owners ready to transact.
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-14 max-w-2xl lg:mt-16 lg:max-w-none"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <dl className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="rounded-2xl border border-[#e2d4c1] bg-white p-8 shadow-sm"
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold text-[#20140a]">
                  <feature.icon
                    aria-hidden="true"
                    className="size-5 flex-none text-[#624315]"
                  />
                  {feature.name}
                </dt>

                <dd className="mt-4 text-base leading-7 text-[#20140a]/70">
                  <p>{feature.description}</p>

                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold text-[#624315] hover:text-[#20140a] hover:underline underline-offset-4"
                    >
                      View criteria <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
