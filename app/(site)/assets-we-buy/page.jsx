import React from "react";
import Hero from "@/components/assetsWeBuy/Hero";
import Features from "@/components/assetsWeBuy/Features";
import BusinessesBlock from "../../../components/assetsWeBuy/Businesses";
// import SellerOptionsBlock from "../../../components/assetsWeBuy/SellerOptions";
import LandBlock from "../../../components/assetsWeBuy/LandBlock";
import FlexIndustrialBlock from "../../../components/assetsWeBuy/FlexIndustrialBlock";
import CtaSection from "../../../components/home/CtaSection";

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
