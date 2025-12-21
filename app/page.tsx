// app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import LogoCloud from "@/components/home/LogoCloud";
import WhyUs from "@/components/home/WhyUs";
import OurModal from "@/components/home/OurModal";
// import Vision from "@/components/home/Vision";
import MarketPotentialSection from "@/components/home/MarketPotential";
import CTASection from "@/components/home/CtaSection";
import FAQ from "@/components/home/FAQ";

// app/page.tsx
export const metadata = {
  title: "Investing in Rural Businesses & Land",
  description:
    "TerraLuma Capital supports rural business transitions, land stewardship, and sustainable growth across the Southeast. We help owners, operators, and communities thrive.",
  openGraph: {
    images: [
      {
        url: "/images/stock/1.png",
        width: 1200,
        height: 630,
        alt: "Rural business and land investment",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-tl-black">
      <Hero />
      <LogoCloud />
      <WhyUs />
      <section className="relative isolate overflow-hidden">
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

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Long-term capital for investors seeking durable real-asset exposure.
          </h2>

          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0 font-sans">
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
          </div>
        </div>
      </section>

      <OurModal />
      {/* <Vision /> */}
      <MarketPotentialSection />
      <FAQ />
      <CTASection />
    </main>
  );
}
