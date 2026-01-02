import type { Metadata } from "next";
import SimpleHero from "@/components/opportunity/SimpleHero";
import LogoCloud from "@/components/home/LogoCloud";
import LandOpportunity from "@/components/opportunity/LandOpportunity";
import BusinessOpportunity from "@/components/opportunity/BusinessOpportunity";
import WhyInvestMatters from "@/components/opportunity/WhyInvestMatters";
import WhyBusinessMatters from "@/components/opportunity/WhyBusinessMatters";
import MarketGrowth from "@/components/opportunity/MarketGrowth";
import MarketFactors from "@/components/opportunity/MarketFactors";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Investment Opportunity",
  description:
    "Explore demographic-driven opportunities in land ownership transition and rural business acquisition across high-growth Southeastern markets.",
  openGraph: {
    title: "Investment Opportunity",
    description:
      "Explore demographic-driven opportunities in land ownership transition and rural business acquisition across high-growth Southeastern markets.",
    images: [
      // TODO: Add appropriate OpenGraph image (1200x630px recommended)
      // {
      //   url: "/images/path/to/image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Investment opportunities in Southeastern land and rural businesses",
      // },
    ],
  },
};

export default function OpportunityPage() {
  return (
    <div className="bg-[#f9f5ee]">
      <main className="isolate">
        {/* Hero Section */}
        <SimpleHero />

        {/* LogoCloud Section */}
        <LogoCloud />

        {/* Land Opportunity Section */}
        <LandOpportunity />

        {/* Why This Matters for Investors Section */}
        <WhyInvestMatters />

        {/* Business Opportunity Section */}
        <BusinessOpportunity />

        {/* Why This Is Compelling for Investors Section */}
        <WhyBusinessMatters />

        {/* Market Growth Section */}
        <MarketGrowth />

        {/* Market Factors Section */}
        <MarketFactors />

        {/* CTA Section */}
        <CtaSection />
      </main>
    </div>
  );
}
