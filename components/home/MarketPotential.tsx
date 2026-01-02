"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { id: 1, name: "Rural counties in focus region", value: "150+", numeric: 150 },
  { id: 2, name: "Succession-risk businesses", value: "30k+", numeric: 30000 },
  { id: 3, name: "Typical check size", value: "$1–5M", numeric: null },
  { id: 4, name: "Target hold period", value: "7–10 yrs", numeric: null },
];

function AnimatedCounter({ value, isInView: parentInView }: { value: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!parentInView || value === null) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [parentInView, value]);

  const displayValue = value >= 1000 ? `${(count / 1000).toFixed(0)}k` : count.toString();
  return <span>{displayValue}</span>;
}

export default function MarketPotentialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const statVariants = {
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
    <section ref={ref} className="relative isolate overflow-hidden bg-tl-black py-24 sm:py-32 text-white">
      {/* Background image / texture */}
      <img
        alt=""
        src="/images/stock/bg/1.png"
        className="absolute inset-0 -z-10 size-full object-cover opacity-15"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Soft brand gradient */}
        <div
          aria-hidden="true"
          className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1266/975 w-316.5 bg-linear-to-tr from-tl-brown to-tl-gold opacity-20"
          />
        </div>

        {/* Copy */}
        <motion.div
          className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-base/8 font-semibold text-tl-gold font-serif"
            variants={itemVariants}
          >
            Market potential
          </motion.h2>
          <motion.p
            className="mt-2 text-4xl font-semibold tracking-tight text-pretty font-serif text-white sm:text-5xl"
            variants={itemVariants}
          >
            Positioned at the center of a structural rural shift
          </motion.p>
          <motion.p
            className="mt-6 text-lg/8 text-white/70 font-sans"
            variants={itemVariants}
          >
            Demographic change, ownership transitions, and renewed interest in
            rural living are creating a durable pipeline of businesses and land
            assets in need of patient, aligned capital.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.dl
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="flex flex-col gap-y-3 border-l border-white/15 pl-6 font-sans"
              variants={statVariants}
            >
              <dt className="text-sm/6 text-white/70">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-tl-gold">
                {stat.numeric !== null ? (
                  <>
                    <AnimatedCounter value={stat.numeric} isInView={isInView} />+
                  </>
                ) : (
                  stat.value
                )}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
