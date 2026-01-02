"use client";

import { motion } from "framer-motion";

const logos = [
  {
    name: "Logo 1",
    src: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
    alt: "Logo 1",
  },
  {
    name: "Logo 2",
    src: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
    alt: "Logo 2",
  },
  {
    name: "Logo 3",
    src: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
    alt: "Logo 3",
  },
  {
    name: "Logo 4",
    src: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
    alt: "Logo 4",
  },
  {
    name: "Logo 5",
    src: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
    alt: "Logo 5",
  },
];

export default function LogoMarquee() {
  return (
    <div className="bg-[#f9f5ee] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-[#1b1308] font-sans">
          As Seen On
        </h2>
        
        {/* Scrolling marquee */}
        <div className="mt-10 overflow-hidden">
          <motion.div
            className="flex gap-x-8 sm:gap-x-10"
            animate={{
              x: [0, -50 + "%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{ width: "max-content" }}
          >
            {/* Render logos twice for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0"
                style={{ width: "158px" }}
              >
                <img
                  alt={logo.alt}
                  src={logo.src}
                  width={158}
                  height={48}
                  className="max-h-12 w-full object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

