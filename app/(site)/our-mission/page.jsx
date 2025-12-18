"use client";

import WhyItMattersBlock from "../../../components/ourMission/WhyItMattersBlock";
import LandAndLifestyle from "../../../components/ourMission/LandAndLifestyle";
import PrinciplesAndMandate from "../../../components/ourMission/PrinciplesAndMandate";
import MissionCTA from "@/components/ourMission/MissionCTA";

// const painPoints = [
//   {
//     name: "Retiring owners with no clear successor.",
//     description:
//       "Many strong rural businesses are led by owners nearing retirement without a transition plan, creating pressure to sell quickly or shut down entirely.",
//     icon: BuildingStorefrontIcon,
//   },
//   {
//     name: "Families and employees left exposed.",
//     description:
//       "When ownership changes hands, the people who depend on these businesses often have little influence over what happens next.",
//     icon: UserGroupIcon,
//   },
//   {
//     name: "Communities lose the basics.",
//     description:
//       "When essential services disappear, rural regions lose skills, stability, and the everyday infrastructure that makes local life work.",
//     icon: HeartIcon,
//   },
// ];

// const principles = [
//   {
//     name: "Stewardship over extraction",
//     description:
//       "We prioritize long-term usefulness of land and businesses over short-term optimization or disruption.",
//     icon: HandRaisedIcon,
//   },
//   {
//     name: "Operators and families first",
//     description:
//       "We work alongside the people who know the business and the community best—so transitions are practical, respectful, and durable.",
//     icon: UserGroupIcon,
//   },
//   {
//     name: "Designed for lasting ownership",
//     description:
//       "We support transition paths that keep skills, jobs, and opportunity rooted locally whenever possible.",
//     icon: HomeModernIcon,
//   },
// ];

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#1b1308]">
      {/* HERO */}
      <div className="relative isolate overflow-hidden min-h-[70vh]">
        {/* Background image */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/stock/bg/3.png"
            alt=""
            className="h-full w-full object-cover"
          />
          {/* Warm dark overlay */}
          <div className="absolute inset-0 bg-[#20140a]/55" />
        </div>

        {/* Subtle vignette */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[#20140a]/40"
        />

        {/* Gradient glow */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        >
          <div
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
            className="aspect-[801/1036] w-[36rem] bg-gradient-to-tr from-[#FFE898] to-[#624315] opacity-10"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center font-serif">
            <p className="text-sm font-semibold tracking-wide text-[#FFE898]">
              Our Mission
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Keeping Rural Communities Working
            </h1>

            <p className="mt-6 text-lg text-[#f3eadb] sm:text-xl/8">
              TerraLuma helps strong rural businesses transition to the next
              generation and supports thoughtful land development—so local
              skills, services, and ownership stay rooted where they matter.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-x-6 font-sans">
              <a
                href="#why-it-matters"
                className="rounded-md bg-[#FFE898] px-4 py-2.5 text-sm font-semibold text-[#20140a] shadow-sm hover:bg-[#f7e3a8]"
              >
                The challenge we’re solving
              </a>
              <a
                href="#principles"
                className="text-sm font-semibold text-[#FFE898] hover:underline"
              >
                How we approach it →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Why it matters */}
      <WhyItMattersBlock />

      {/* SECTION: Homestead demand */}
      <LandAndLifestyle />
      <PrinciplesAndMandate />
      <MissionCTA />
    </main>
  );
}
