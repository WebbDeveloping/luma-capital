"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ValidationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
  return (
    <section
      ref={ref}
      className="relative z-20 bg-tl-brown dark:bg-[#000] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER — now using font-serif */}
        <motion.h2
          className="text-center font-serif text-tl-sub font-semibold text-tl-gold"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Trusted by organizations aligned with our mission
        </motion.h2>

        {/* LOGO GRID */}
        <motion.div
          className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10
                     sm:max-w-xl sm:grid-cols-6 sm:gap-x-10
                     lg:mx-0 lg:max-w-none lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.img
            alt="Logo 1"
            src="/images/logos/logo-4.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-95"
            variants={itemVariants}
          />

          <motion.img
            alt="Logo 2"
            src="/images/logos/logo-3.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-95"
            variants={itemVariants}
          />

          <motion.img
            alt="Logo 3"
            src="/images/logos/logo-2.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-95"
            variants={itemVariants}
          />

          <motion.img
            alt="Logo 4"
            src="/images/logos/logo-5.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 opacity-95"
            variants={itemVariants}
          />

          <motion.img
            alt="Logo 5"
            src="/images/logos/logo-1.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 opacity-95"
            variants={itemVariants}
          />
        </motion.div>
      </div>
    </section>
  );
}
