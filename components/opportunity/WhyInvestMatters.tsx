"use client";

import {
  ArrowTrendingUpIcon,
  BuildingOfficeIcon,
  CubeIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const features = [
  {
    name: "Scarcity and long-term demand",
    description:
      "As population grows and development pressures increase, holding quality land becomes more valuable.",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Institutional under-participation",
    description:
      "Large institutional capital often overlooks smaller land markets where disciplined buyers can capture outsized value.",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Physical, tangible asset class",
    description:
      "Farmland and rural acreage can provide stability when public markets are volatile.",
    icon: CubeIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function WhyInvestMatters() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="text-base/7 font-semibold text-[#624315] font-serif">
            Investment perspective
          </p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#1b1308] sm:text-5xl lg:text-balance font-serif">
            Why This Matters for Investors
          </h2>
        </motion.div>
        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="flex flex-col"
                variants={itemVariants}
              >
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-[#1b1308] font-sans">
                  <feature.icon
                    aria-hidden="true"
                    className="size-5 flex-none text-[#624315]"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-[#5a4a36] font-sans">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}
