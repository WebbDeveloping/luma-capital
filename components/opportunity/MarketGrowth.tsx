"use client";

import { motion } from "framer-motion";

export default function MarketGrowth() {
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
            Growth in Nashville, Huntsville, Knoxville, and Chattanooga
          </h2>
          <motion.p 
            className="mt-6 text-lg/8 text-[#5a4a36] font-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.0, 0, 0.2, 1] }}
          >
            These Southeastern markets — where TerraLuma Capital focuses
            investing — are experiencing above-average growth and economic
            dynamism
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

