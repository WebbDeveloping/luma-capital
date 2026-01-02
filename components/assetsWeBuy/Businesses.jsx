"use client";

import {
  MapIcon,
  ArrowTrendingDownIcon,
  BoltIcon,
  BeakerIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const criteria = [
  {
    name: "20 to 500+ acres",
    description: "Rural land and development parcels with meaningful scale.",
    icon: MapIcon,
  },
  {
    name: "Purchased below retail value",
    description: "Acquired at a significant discount to completed-lot pricing.",
    icon: ArrowTrendingDownIcon,
  },
  {
    name: "Strong road access",
    description:
      "Reliable ingress and egress suitable for development or long-term holding.",
    icon: MapIcon,
  },
  {
    name: "Power and water availability",
    description: "Existing utilities or clearly feasible access.",
    icon: BoltIcon,
  },
  {
    name: "Minimal flood exposure & passable soil",
    description:
      "Usable topography with acceptable flood risk and perc/soil tests where applicable.",
    icon: BeakerIcon,
  },
];

export default function BusinessesBlock() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
        ease: [0.0, 0, 0.2, 1],
      },
    },
  };

  const criteriaVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.0, 0, 0.2, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      id="businesses"
      className="relative isolate bg-[#f3eadb] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* LEFT: Content */}
          <motion.div
            className="lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p
              className="text-base/7 font-semibold text-[#624315]"
              variants={itemVariants}
            >
              Private Businesses
            </motion.p>

            <motion.h2
              className="mt-2 font-serif text-4xl font-semibold text-pretty text-[#21140a] sm:text-5xl"
              variants={itemVariants}
            >
              We Acquire Strong, Privately Owned Businesses.
            </motion.h2>

            <motion.p
              className="mt-6 text-lg/8 text-[#4f4537]"
              variants={itemVariants}
            >
              We consider directly acquiring privately owned businesses that
              meet clear financial and operational criteria—then structure an
              outcome that fits the seller's goals.
            </motion.p>

            <motion.dl
              className="mt-10 space-y-8 text-base/7 text-[#5a4a36]"
              variants={containerVariants}
            >
              {criteria.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative pl-9"
                  variants={criteriaVariants}
                >
                  <dt className="inline font-semibold text-[#21140a]">
                    <item.icon
                      aria-hidden="true"
                      className="absolute left-0 top-1 size-5 text-[#624315]"
                    />
                    {item.name}
                  </dt>{" "}
                  <dd className="inline">{item.description}</dd>
                </motion.div>
              ))}
            </motion.dl>

            <motion.p
              className="mt-10 text-lg/8 text-[#4f4537]"
              variants={itemVariants}
            >
              We look for businesses with stable historic performance, clear
              operating leverage, and practical opportunities to grow.
            </motion.p>
          </motion.div>

          {/* RIGHT: Sticky visual */}
          <motion.div
            className="lg:sticky lg:top-10 lg:order-2 lg:w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.0, 0, 0.2, 1] }}
          >
            <div className="relative isolate overflow-hidden rounded-3xl bg-[#20140a] px-6 pt-10 sm:px-8 sm:pt-12 shadow-xl ring-1 ring-black/10">
              {/* Warm glow */}
              <div
                aria-hidden="true"
                className="absolute -top-24 right-0 -z-10 h-80 w-80 translate-x-1/3 rounded-full bg-[#FFE898]/20 blur-3xl"
              />

              {/* Subtle texture */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-25"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,232,152,0.18) 1px, transparent 0)",
                  backgroundSize: "22px 22px",
                }}
              />

              <div className="overflow-hidden rounded-tl-2xl rounded-br-2xl bg-black/30 ring-1 ring-[#FFE898]/20">
                <div className="relative aspect-[3/4] w-full">
                  <img
                    src="/images/stock/8.png"
                    alt="Private business partnership"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#20140a]/30" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-serif text-xl text-[#FFE898]">
                      A clean, confidential process.
                    </p>
                    <p className="mt-2 font-sans text-sm text-white/75">
                      Direct conversations, flexible structures, clear criteria.
                    </p>
                  </div>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/10 ring-inset"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
