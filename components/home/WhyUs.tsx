"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function WhyUs() {
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
        duration: 0.6,
        ease: [0.0, 0, 0.2, 1] as const,
      },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.0, 0, 0.2, 1] as const,
        delay: 0.4,
      },
    },
  };
  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-[#f9f5ee] py-24 sm:py-32">
      {/* subtle motif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/5 to-transparent" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#caa24a]/20 blur-3xl" />
        <div className="absolute -right-24 top-44 h-72 w-72 rounded-full bg-[#624315]/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            className="text-base/7 font-semibold text-[#624315]"
            variants={itemVariants}
          >
            TerraLuma Capital
          </motion.p>

          <motion.h2
            className="mt-2 text-4xl font-semibold tracking-tight text-[#1b1308] sm:text-5xl text-balance"
            variants={itemVariants}
          >
            Patient capital for rural land and real-world operators
          </motion.h2>

          <motion.div
            className="mt-10 grid max-w-xl grid-cols-1 gap-10 text-base/7 text-[#5a4a36] lg:max-w-none lg:grid-cols-2"
            variants={containerVariants}
          >
            <motion.div className="space-y-8" variants={itemVariants}>
              <p>
                TerraLuma Capital acquires and supports tangible, durable assets
                in overlooked markets—rural land, privately owned businesses,
                and selective flex / light industrial real estate. We're built
                for long-term stewardship: disciplined buying, operational
                support, and a mandate that prioritizes integrity and staying
                power over hype.
              </p>
              <p>
                Our approach is simple: target quality assets at attractive
                bases, improve fundamentals where we can, and hold with a
                patient, compounding mindset. We partner with owners and
                investors who value clarity, alignment, and long-run outcomes.
              </p>
            </motion.div>

            <motion.div className="space-y-8" variants={itemVariants}>
              <p>
                We're most active where others move too fast or stay too
                general—smaller land markets, owner-operated businesses, and
                essential-use properties that benefit from thoughtful execution.
              </p>
              <p>
                Whether you're an owner exploring a confidential sale or an
                investor looking for durable exposure to real assets, TerraLuma
                is designed to be a steady, high-conviction buyer and long-term
                operator.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center gap-x-4"
            variants={itemVariants}
          >
            <a
              href="#"
              className="rounded-md bg-[#624315] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#55380f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#624315]"
            >
              Learn about our approach
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-[#1b1308] hover:text-black/80"
            >
              See what we buy <span aria-hidden="true">→</span>
            </a>
          </motion.div>

          {/* video band (standalone, spaced) */}
          <motion.div
            className="mt-16 sm:mt-20 lg:mt-24"
            variants={videoVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Outer: rings/shadow */}
            <div className="relative rounded-3xl ring-1 ring-inset ring-black/10 shadow-2xl">
              {/* Inner: CLIP layer to guarantee rounded corners */}
              <div className="overflow-hidden rounded-3xl bg-[#1b1308]">
                <div className="aspect-[16/9] w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/20v7FD_x63U?controls=1&modestbranding=1&rel=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* subtle surface ring */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10"
              />
            </div>

            {/* standard bottom spacing inside the section */}
            <div className="h-16 sm:h-20 lg:h-24" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
