// app/page.tsx
import Hero from "@/components/home/Hero";
import LogoCloud from "@/components/home/LogoCloud";
import WhyUs from "@/components/home/WhyUs";
import OurModal from "@/components/home/OurModal";
import MarketPotentialSection from "@/components/home/MarketPotential";
import CTASection from "@/components/home/CtaSection";
import FAQ from "@/components/home/FAQ";
import InvestorCTA from "@/components/home/InvestorCTA";

import type { Metadata } from "next";

// app/page.tsx
export const metadata: Metadata = {
  title: "Investing in Rural Businesses & Land",
  description:
    "TerraLuma Capital supports rural business transitions, land stewardship, and sustainable growth across the Southeast. We help owners, operators, and communities thrive.",
  openGraph: {
    title: "Investing in Rural Businesses & Land",
    description:
      "TerraLuma Capital supports rural business transitions, land stewardship, and sustainable growth across the Southeast. We help owners, operators, and communities thrive.",
    images: [
      {
        url: "/images/metadata/home-terraluma-capital.png",
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
      <InvestorCTA />

      <OurModal />
      {/* <Vision /> */}
      <MarketPotentialSection />
      <FAQ />
      <CTASection />
    </main>
  );
}
