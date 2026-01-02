import React from "react";
import Hero from "@/components/assetsWeBuy/Hero";
import Features from "@/components/assetsWeBuy/Features";
import BusinessesBlock from "../../../components/assetsWeBuy/Businesses";
// import SellerOptionsBlock from "../../../components/assetsWeBuy/SellerOptions";
import LandBlock from "../../../components/assetsWeBuy/LandBlock";
import FlexIndustrialBlock from "../../../components/assetsWeBuy/FlexIndustrialBlock";
import CtaSection from "../../../components/home/CtaSection";

export const metadata = {
  title: "Assets We Buy",
  description:
    "TerraLuma Capital acquires private businesses, rural land, and flex/light industrial real estate. We offer attractive options for owners ready to transact in the Southeast.",
  openGraph: {
    title: "Assets We Buy",
    description:
      "TerraLuma Capital acquires private businesses, rural land, and flex/light industrial real estate. We offer attractive options for owners ready to transact in the Southeast.",
    images: [
      // TODO: Add appropriate OpenGraph image (1200x630px recommended)
      // {
      //   url: "/images/path/to/image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "TerraLuma Capital asset acquisition categories: private businesses, land, and industrial real estate",
      // },
    ],
  },
};

function page() {
  return (
    <div>
      <Hero />
      <Features />
      <BusinessesBlock />
      {/* <SellerOptionsBlock /> */}
      <LandBlock />
      <FlexIndustrialBlock />
      <CtaSection />
    </div>
  );
}

export default page;
