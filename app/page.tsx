// app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import LogoCloud from "@/components/home/LogoCloud";
import WhyUs from "@/components/home/WhyUs";
import OurModal from "@/components/home/OurModal";
import Vision from "@/components/home/Vision";
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
      <OurModal />
      <Vision />
      <MarketPotentialSection />
      <FAQ />
      <CTASection />
    </main>
  );
}
