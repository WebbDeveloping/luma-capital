// app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import LogoCloud from "@/components/home/LogoCloud";
import WhyUs from "@/components/home/WhyUs";
import OurModal from "@/components/home/OurModal";
import Vision from "@/components/home/Vision";
import MarketPotentialSection from "@/components/home/MarketPotential";
import CTASection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "TerraLuma Capital | Rural Business & Land Investment",
  description:
    "Patient capital for rural businesses and homestead land development across Tennessee, North Georgia, and North Alabama.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] font-sans text-tl-black">
      <Hero />
      <LogoCloud />
      <WhyUs />
      <OurModal />
      <Vision />
      <MarketPotentialSection />
      <CTASection />
    </main>
  );
}
