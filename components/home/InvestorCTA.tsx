"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function InvestorCTA() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.0, 0, 0.2, 1] as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.0, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section ref={ref} className="relative isolate overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/land-business/bg/7.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#20140a]/55" />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[#20140a]/40"
      />

      <div
        aria-hidden="true"
        className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      >
        <div
          className="aspect-[801/1036] w-[36rem] bg-gradient-to-tr from-[#FFE898] to-[#624315] opacity-10"
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8 lg:gap-x-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="lg:flex-1"
        >
          <motion.h2
            className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl"
            variants={itemVariants}
          >
            Long-term capital for investors seeking durable real-asset exposure.
          </motion.h2>
        </motion.div>

        <motion.div
          className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0 font-sans"
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <a
            href="/contact"
            className="rounded-md bg-[#FFE898] px-4 py-2.5 text-sm font-semibold text-[#20140a] shadow-sm hover:bg-[#f7e3a8]"
          >
            Request investor access
          </a>

          <a
            href="/opportunity"
            className="text-sm font-semibold text-[#FFE898] hover:underline"
          >
            Review the investment approach <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

