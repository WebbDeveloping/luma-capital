import React from "react";
import OurModalHero from "@/components/ourModal/OurModalHero";
import TheProblem from "@/components/ourModal/TheProblem";
import HowItWorksTimeline from "@/components/ourModal/HowItWorksTimeline";
import RolesAndResponsibilities from "@/components/ourModal/RolesAndResponsibilities";
import CapitalOrientation from "@/components/ourModal/CapitalOrientation";

function page() {
  return (
    <div>
      <OurModalHero />
      <TheProblem />
      <HowItWorksTimeline />
      <RolesAndResponsibilities />
      <CapitalOrientation />
    </div>
  );
}

export default page;
