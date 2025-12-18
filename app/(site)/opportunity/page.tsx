"use client";

import Link from "next/link";

const landProof = [
  {
    title: "300–350M acres expected to transfer",
    body: "Estimated farmland ownership transfer over the next ~20 years as older landowners and operators retire.",
    source: "Senate Special Committee on Aging",
  },
  {
    title: "~40% of farmland in transition",
    body: "Demographic shifts and generational change suggest a large share of American farmland could change hands soon.",
    source: "Farm Management",
  },
];

const landRealities = [
  {
    title: "More land coming to market",
    body: "A larger supply of parcels creates entry points for disciplined buyers.",
  },
  {
    title: "Conversion risk",
    body: "Development pressure increases the chance of land shifting to non-agricultural uses.",
  },
];

const landWhy = [
  {
    title: "Scarcity + long-term demand",
    body: "As population grows and development pressures increase, quality land tends to become more valuable over time.",
  },
  {
    title: "Institutional under-participation",
    body: "Smaller land markets are often overlooked, creating room for disciplined underwriting and execution.",
  },
  {
    title: "Physical, tangible asset class",
    body: "Farmland and rural acreage can provide stability when public markets are volatile.",
  },
];

const bizProof = [
  {
    title: "Millions of owners nearing exit",
    body: "A large cohort of Baby Boomer-owned businesses will require new leadership in the coming decade.",
    source: "BizBuySell",
  },
  {
    title: "~2.3M businesses owned by aging owners",
    body: "Millions of small businesses are owned by sellers likely to consider exit or succession options.",
    source: "Project Equity",
  },
  {
    title: "~48% want to exit within 3 years",
    body: "Surveys show unusually high near-term intent to sell among owners aged 45–75.",
    source: "cornerstone-business.com",
  },
  {
    title: "Succession planning gaps",
    body: "Many businesses lack formal plans, increasing the likelihood of sales or closures.",
    source: "Teamshares",
  },
];

const bizWhy = [
  {
    title: "Real opportunities in acquisitions",
    body: "Established, profitable businesses with systems in place are rare—and valuable.",
  },
  {
    title: "Succession gaps create scarcity",
    body: "When owners retire without a transition plan, capable buyers can preserve and grow value.",
  },
  {
    title: "Employment + revenue base at stake",
    body: "In many regions, large portions of payroll and revenue sit inside businesses nearing transition.",
  },
  {
    title: "Cash flows + operational upside",
    body: "Disciplined underwriting plus operational support can capture ongoing cash flow and improvement upside.",
  },
];

const markets = ["Nashville", "Huntsville", "Knoxville", "Chattanooga"];

const regionPillars = [
  {
    title: "Population & migration trends",
    body: "Inbound migration driven by cost of living, business-friendly climates, and quality of life supports durable demand.",
  },
  {
    title: "Strong business demand",
    body: "Construction, trades, manufacturing support services, and logistics drive demand for the facilities where many operators work.",
  },
  {
    title: "Land & development tailwinds",
    body: "Expanding growth corridors can support land appreciation; rural and exurban parcels near metros may benefit from pressure over time.",
  },
  {
    title: "Workforce and small business ecosystems",
    body: "Diversified economies and entrepreneurial activity support demand for acquiring established community-serving businesses.",
  },
];

function Section({
  eyebrow,
  title,
  lead,
  reverse,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  reverse?: boolean;
  image: string;
  imageAlt: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600">{eyebrow}</h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
          {title}
        </p>
        <p className="mt-6 text-lg/8 text-gray-600">{lead}</p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <div
          className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl bg-gray-50 ring-1 ring-gray-900/10">
            <img
              alt={imageAlt}
              src={image}
              className="h-80 w-full object-cover sm:h-96"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-white/85 via-white/10 to-transparent"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
          </div>

          <div className="space-y-10">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">
            Sorry. Still being built
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Opportunity Page
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            This page is almost completed. check back soon
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

// return (
//   <div className="bg-white">
//     <main className="isolate">
//       <div className="relative isolate overflow-hidden bg-white">
//         <svg
//           aria-hidden="true"
//           className="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200"
//         >
//           <defs>
//             <pattern
//               x="50%"
//               y={-1}
//               id="tl-grid-hero"
//               width={200}
//               height={200}
//               patternUnits="userSpaceOnUse"
//             >
//               <path d="M.5 200V.5H200" fill="none" />
//             </pattern>
//           </defs>
//           <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
//             <path
//               d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
//               strokeWidth={0}
//             />
//           </svg>
//           <rect
//             fill="url(#tl-grid-hero)"
//             width="100%"
//             height="100%"
//             strokeWidth={0}
//           />
//         </svg>

//         <div
//           aria-hidden="true"
//           className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
//         >
//           <div
//             style={{
//               clipPath:
//                 "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
//             }}
//             className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#80caff] to-[#4f46e5] opacity-20"
//           />
//         </div>

//         <div className="mx-auto max-w-7xl px-6 pt-24 pb-24 sm:pt-32 sm:pb-32 lg:px-8 lg:pt-32 lg:pb-32">
//           <div className="mx-auto max-w-2xl lg:text-center">
//             <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
//               Opportunity driven by demographic transition
//             </h1>
//             <p className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
//               TerraLuma targets durable, real-economy opportunities created by
//               ownership transitions—across land and essential small
//               businesses—in high-growth Southeastern markets.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <a
//                 href="#"
//                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Request the fund overview
//               </a>
//               <a href="#" className="text-sm/6 font-semibold text-gray-900">
//                 Learn more <span aria-hidden="true">→</span>
//               </a>
//             </div>
//           </div>

//           <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-gray-900 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-4">
//             {[
//               { label: "Land transition tailwind", value: "300–350M acres" },
//               { label: "Potential farmland in transition", value: "~40%" },
//               { label: "Seller intent signal", value: "~48%" },
//               { label: "Focus markets", value: markets.length.toString() },
//             ].map((stat) => (
//               <div
//                 key={stat.label}
//                 className="flex flex-col gap-y-3 border-l border-gray-900/15 pl-6"
//               >
//                 <dt className="text-sm/6 text-gray-600">{stat.label}</dt>
//                 <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
//                   {stat.value}
//                 </dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </div>

//       <Section
//         eyebrow="The opportunity in land"
//         title="A wave of land ownership transition"
//         lead="A meaningful portion of U.S. farmland is expected to change hands in the coming decades—driven by aging owners, succession dynamics, and land use pressures."
//         image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80"
//         imageAlt="Farmland and rural landscape"
//       >
//         <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-900/10">
//           <h3 className="text-base/7 font-semibold text-gray-900">
//             What the research indicates
//           </h3>
//           <dl className="mt-6 space-y-6 text-sm/6 text-gray-600">
//             {landProof.map((item) => (
//               <div key={item.title}>
//                 <dt className="font-semibold text-gray-900">{item.title}</dt>
//                 <dd className="mt-2">{item.body}</dd>
//                 <dd className="mt-2 text-xs/5 text-gray-500">
//                   {item.source}
//                 </dd>
//               </div>
//             ))}
//           </dl>
//         </div>

//         <div className="rounded-2xl bg-white p-8 ring-1 ring-gray-900/10">
//           <h3 className="text-base/7 font-semibold text-gray-900">
//             Two realities this creates
//           </h3>
//           <dl className="mt-8 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
//             {landRealities.map((item) => (
//               <div key={item.title} className="flex flex-col">
//                 <dt className="text-sm/6 font-semibold text-gray-900">
//                   {item.title}
//                 </dt>
//                 <dd className="mt-2 text-sm/6 text-gray-600">{item.body}</dd>
//               </div>
//             ))}
//           </dl>

//           <div className="mt-10 rounded-xl bg-gray-50 p-6 ring-1 ring-gray-900/10">
//             <h4 className="text-sm/6 font-semibold text-gray-900">
//               Why this matters for investors
//             </h4>
//             <dl className="mt-4 space-y-4 text-sm/6 text-gray-600">
//               {landWhy.map((item) => (
//                 <div key={item.title} className="relative pl-9">
//                   <dt className="inline font-semibold text-gray-900">
//                     <span
//                       className="absolute top-1 left-1 size-5 text-indigo-600"
//                       aria-hidden="true"
//                     >
//                       •
//                     </span>
//                     {item.title}
//                   </dt>{" "}
//                   <dd className="inline">{item.body}</dd>
//                 </div>
//               ))}
//             </dl>
//             <p className="mt-4 text-sm/6 text-gray-600">
//               This wave is anchored in demographic realities and farm
//               succession dynamics documented by agricultural research and
//               national land nonprofits.
//             </p>
//           </div>
//         </div>
//       </Section>

//       <Section
//         eyebrow="The opportunity in small business acquisition"
//         title="The “Silver Tsunami”"
//         lead="A large cohort of aging owners is approaching retirement—creating a durable pipeline of potential acquisitions for disciplined operators."
//         reverse
//         image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80"
//         imageAlt="Small business team meeting"
//       >
//         <div className="rounded-2xl bg-white p-8 ring-1 ring-gray-900/10">
//           <h3 className="text-base/7 font-semibold text-gray-900">
//             Demographic forces at work
//           </h3>
//           <dl className="mt-8 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
//             {bizProof.map((item) => (
//               <div key={item.title} className="flex flex-col">
//                 <dt className="text-sm/6 font-semibold text-gray-900">
//                   {item.title}
//                 </dt>
//                 <dd className="mt-2 text-sm/6 text-gray-600">{item.body}</dd>
//                 <dd className="mt-2 text-xs/5 text-gray-500">
//                   {item.source}
//                 </dd>
//               </div>
//             ))}
//           </dl>
//         </div>

//         <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-900/10">
//           <h3 className="text-base/7 font-semibold text-gray-900">
//             Why this is compelling for investors
//           </h3>
//           <dl className="mt-6 space-y-6 text-sm/6 text-gray-600">
//             {bizWhy.map((item) => (
//               <div key={item.title} className="relative pl-9">
//                 <dt className="inline font-semibold text-gray-900">
//                   <span
//                     className="absolute top-1 left-1 size-5 text-indigo-600"
//                     aria-hidden="true"
//                   >
//                     •
//                   </span>
//                   {item.title}
//                 </dt>{" "}
//                 <dd className="inline">{item.body}</dd>
//               </div>
//             ))}
//           </dl>

//           <div className="mt-10 flex items-center gap-x-6">
//             <a
//               href="#"
//               className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               View acquisition criteria
//             </a>
//             <a href="#" className="text-sm/6 font-semibold text-gray-900">
//               Learn more <span aria-hidden="true">→</span>
//             </a>
//           </div>
//         </div>
//       </Section>

//       <Section
//         eyebrow="Regional tailwinds"
//         title="Growth in Nashville, Huntsville, Knoxville, and Chattanooga"
//         lead="These Southeastern markets are experiencing above-average growth and economic dynamism that supports both land value appreciation and small business acquisition."
//         image="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=80"
//         imageAlt="Southeastern city skyline at golden hour"
//       >
//         <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-900/10">
//           <h3 className="text-base/7 font-semibold text-gray-900">
//             Focus markets
//           </h3>
//           <div className="mt-6 flex flex-wrap gap-2">
//             {markets.map((city) => (
//               <span
//                 key={city}
//                 className="inline-flex items-center rounded-full bg-gray-50 px-3 py-1 text-sm/6 font-semibold text-gray-900 ring-1 ring-gray-900/10"
//               >
//                 {city}
//               </span>
//             ))}
//           </div>

//           <div className="mt-8 rounded-xl bg-white p-6 ring-1 ring-gray-900/10">
//             <p className="text-sm/6 text-gray-600">
//               If you want, we can add specific charts, census figures, and
//               recent migration/economic statistics for each market directly
//               into this section.
//             </p>
//           </div>
//         </div>

//         <div className="rounded-2xl bg-white p-8 ring-1 ring-gray-900/10">
//           <h3 className="text-base/7 font-semibold text-gray-900">
//             Regional dynamics that support the strategy
//           </h3>
//           <dl className="mt-6 space-y-6 text-sm/6 text-gray-600">
//             {regionPillars.map((item) => (
//               <div key={item.title} className="relative pl-9">
//                 <dt className="inline font-semibold text-gray-900">
//                   <span
//                     className="absolute top-1 left-1 size-5 text-indigo-600"
//                     aria-hidden="true"
//                   >
//                     •
//                   </span>
//                   {item.title}
//                 </dt>{" "}
//                 <dd className="inline">{item.body}</dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </Section>
//     </main>
//   </div>
// );
