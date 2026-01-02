"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LandOpportunity() {
  return (
    <div className="overflow-hidden bg-white pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered Title */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-[#1b1308] sm:text-5xl font-serif">
            The Opportunity in Land
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-2">
          <motion.div
            className="lg:pt-4 lg:pr-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="lg:max-w-lg">
              <h3 className="text-2xl font-semibold tracking-tight text-pretty text-[#624315] sm:text-3xl font-serif">
                A Wave of Land Ownership Transition
              </h3>

              <p className="mt-6 text-lg/8 text-[#5a4a36] font-sans">
                A significant portion of U.S. farmland is expected to change
                hands in the coming decades, driven by an aging population and
                evolving land use pressures:
              </p>

              <ul className="mt-6 space-y-4 text-base/7 text-[#5a4a36] font-sans">
                <li className="flex gap-x-3">
                  <span className="text-[#624315] font-semibold">•</span>
                  <span>
                    Experts estimate roughly 300–350 million acres of farmland
                    will transfer ownership over the next 20 years as older
                    landowners and operators retire.{" "}
                    <span className="text-sm italic">
                      Senate Special Committee on Aging
                    </span>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-[#624315] font-semibold">•</span>
                  <span>
                    Data suggests that 40% of American farmland could be in
                    transition soon, due to demographic shifts and generational
                    change.{" "}
                    <span className="text-sm italic">Farm Management</span>
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <Image
              alt="Farmland landscape"
              src="/images/opportunity/land-opp.png"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:ml-0"
            />
          </motion.div>
        </div>

        {/* Highlighted Callout Box - Edge to Edge */}
        <motion.div
          className="mx-auto mt-12 max-w-7xl rounded-lg bg-[#f9f5ee] border-l-4 border-[#624315] p-6 lg:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <h4 className="text-xl font-semibold tracking-tight text-pretty text-[#624315] sm:text-2xl font-serif mb-4">
            This transition presents two big realities:
          </h4>
          <ul className="space-y-3 text-base/7 text-[#5a4a36] font-sans">
            <li className="flex gap-x-3">
              <span className="text-[#624315] font-semibold mt-1">•</span>
              <span className="font-medium">More land coming to market</span>
            </li>
            <li className="flex gap-x-3">
              <span className="text-[#624315] font-semibold mt-1">•</span>
              <span className="font-medium">
                Risks of conversion to non-agricultural uses (development
                pressure)
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
