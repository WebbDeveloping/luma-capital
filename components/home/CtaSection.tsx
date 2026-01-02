"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.6,
        ease: [0.0, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section ref={ref} className="bg-tl-brown dark:bg-tl-brown">
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl font-serif"
            variants={itemVariants}
          >
            Build lasting value in rural communities.
          </motion.h2>

          <motion.p
            className="font-sans mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-[#f4e7d6] dark:text-tl-gold/80"
            variants={itemVariants}
          >
            TerraLuma partners with operators, lenders, and land stewards to
            preserve local enterprises and strengthen the future of rural
            economies.
          </motion.p>

          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6 font-sans"
            variants={itemVariants}
          >
            <a
              href="#contact"
              className="rounded-md bg-tl-gold px-3.5 py-2.5 text-sm font-semibold text-tl-brown shadow-xs hover:bg-[#f7e3a8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tl-gold"
            >
              Connect with our team
            </a>

            <a
              href="#about"
              className="text-sm/6 font-semibold text-white hover:text-tl-gold"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
