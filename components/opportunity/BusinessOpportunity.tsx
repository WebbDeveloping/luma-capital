"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BusinessOpportunity() {
  return (
    <div className="overflow-hidden bg-[#f5f3f0] pt-24 sm:pt-32">
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
            The Opportunity in Small Business Acquisition ({`"Silver Tsunami"`})
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
                Demographic Forces at Work
              </h3>

              <p className="mt-6 text-lg/8 text-[#5a4a36] font-sans">
                The term {`"Silver Tsunami"`} refers to the large cohort of
                aging business owners approaching retirement and preparing to
                exit ownership.
              </p>

              <ul className="mt-6 space-y-4 text-base/7 text-[#5a4a36] font-sans">
                <li className="flex gap-x-3">
                  <span className="text-[#624315] font-semibold">•</span>
                  <span>
                    Millions of Baby Boomer-owned businesses will need new
                    leadership in the next decade.{" "}
                    <span className="text-sm italic">BizBuySell+1</span>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-[#624315] font-semibold">•</span>
                  <span>
                    Roughly 2.3 million small businesses nationwide are owned by
                    aging owners likely to consider exit or succession options.{" "}
                    <span className="text-sm italic">Project Equity</span>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-[#624315] font-semibold">•</span>
                  <span>
                    Surveys show nearly 48% of business owners aged 45-75 want
                    to exit their company within the next three years — a
                    remarkably high near-term intent signal.{" "}
                    <span className="text-sm italic">
                      cornerstone-business.com
                    </span>
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
              alt="Small business"
              src="/images/opportunity/meat-shop-hero.png"
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
          <p className="text-base/7 text-[#5a4a36] font-sans">
            Many of these businesses do not have formal succession plans,
            increasing the likelihood of sales or closures.{" "}
            <span className="text-sm italic">Teamshares</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
