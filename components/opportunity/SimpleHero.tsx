"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function SimpleHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      {/* Dark background layer - shows when image fades */}
      <div className="absolute inset-0 -z-30 bg-[#20140a]" />
      
      {/* Background image + dark overlay */}
      <motion.div 
        className="absolute inset-0 -z-20"
        style={{ y, opacity }}
      >
        <img
          alt=""
          src="/images/opportunity/opp-hero.png"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#20140a]/55" />
      </motion.div>

      {/* Bottom gradient fade */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[#20140a]/40"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.h1 
            className="text-4xl font-semibold tracking-tight text-white sm:text-6xl font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.0, 0, 0.2, 1] }}
          >
            Investment Opportunity
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg text-[#f3eadb] sm:text-xl/8 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.0, 0, 0.2, 1] }}
          >
            TerraLuma Capital targets durable, real-economy opportunities
            created by ownership transitions—across land and essential small
            businesses—in high-growth Southeastern markets.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
