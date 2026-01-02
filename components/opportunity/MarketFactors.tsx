"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function MarketFactors() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* First Item: Population & Migration Trends */}
          <motion.div className="lg:pr-4" variants={itemVariants}>
            <div className="relative overflow-hidden rounded-3xl bg-[#1b1308] shadow-2xl lg:max-w-lg aspect-[4/3]">
              <Image
                alt=""
                src="/images/opportunity/migration.png"
                fill
                className="rounded-3xl object-cover"
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="text-base/7 text-[#5a4a36] lg:max-w-lg font-sans">
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-[#1b1308] sm:text-3xl font-serif">
                Population & Migration Trends
              </h3>
              <div className="max-w-xl">
                <p className="mt-6 text-base/7 text-[#5a4a36]">
                  Many individuals and families are moving to these regions due
                  to lower cost of living, business-friendly climates, and
                  quality of life.
                </p>
                <p className="mt-8 text-base/7 text-[#5a4a36]">
                  Economic data consistently shows these metro areas growing
                  faster than national averages due to inbound migration of
                  workers and families.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Second Item: Strong Business Demand */}
          <motion.div className="lg:pr-4" variants={itemVariants}>
            <div className="relative overflow-hidden rounded-3xl bg-[#1b1308] shadow-2xl lg:max-w-lg aspect-[4/3]">
              <Image
                alt=""
                src="/images/opportunity/business-demand.png"
                fill
                className="rounded-3xl object-cover"
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="text-base/7 text-[#5a4a36] lg:max-w-lg font-sans">
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-[#1b1308] sm:text-3xl font-serif">
                Strong Business Demand
              </h3>
              <div className="max-w-xl">
                <p className="mt-6 text-base/7 text-[#5a4a36]">
                  Growth in construction, trades, manufacturing support
                  services, and logistics underpins demand for flex/light
                  industrial real estate — where many small businesses operate
                  and service regional needs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Third Item: Land & Development Tailwinds */}
          <motion.div className="lg:pr-4" variants={itemVariants}>
            <div className="relative overflow-hidden rounded-3xl bg-[#1b1308] shadow-2xl lg:max-w-lg aspect-[4/3]">
              <Image
                alt=""
                src="/images/opportunity/land-dev.png"
                fill
                className="rounded-3xl object-cover"
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="text-base/7 text-[#5a4a36] lg:max-w-lg font-sans">
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-[#1b1308] sm:text-3xl font-serif">
                Land & Development Tailwinds
              </h3>
              <div className="max-w-xl">
                <p className="mt-6 text-base/7 text-[#5a4a36]">
                  Continued expansion of residential and commercial growth
                  corridors creates long-term opportunity for land value
                  appreciation.
                </p>
                <p className="mt-8 text-base/7 text-[#5a4a36]">
                  Rural and exurban land near expanding metros can benefit from
                  development pressure even as ag/land use remains intact.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Fourth Item: Workforce and Small Business Ecosystems */}
          <motion.div className="lg:pr-4" variants={itemVariants}>
            <div className="relative overflow-hidden rounded-3xl bg-[#1b1308] shadow-2xl lg:max-w-lg aspect-[4/3]">
              <Image
                alt=""
                src="/images/opportunity/meat.png"
                fill
                className="rounded-3xl object-cover"
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="text-base/7 text-[#5a4a36] lg:max-w-lg font-sans">
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-[#1b1308] sm:text-3xl font-serif">
                Workforce and Small Business Ecosystems
              </h3>
              <div className="max-w-xl">
                <p className="mt-6 text-base/7 text-[#5a4a36]">
                  These regions have diversified economies with entrepreneurial
                  activity, which supports the demand for acquisition of
                  established businesses that serve local communities.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
