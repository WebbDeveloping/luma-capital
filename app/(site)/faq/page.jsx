"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import CTASection from "../../../components/home/CtaSection";

export const faqs = [
  {
    question: "What is TerraLuma Capital’s core investment philosophy?",
    answer:
      "TerraLuma Capital operates under a single guiding principle: invest and serve with purpose. This value guides every decision we make. It means our actions are designed to create lasting impact for people, teams, and communities; our time, resources, and energy are aligned with clear and meaningful objectives; we provide tools, knowledge, and opportunities that help others grow and succeed; and every investment and action aligns with ethical, honorable, and responsible practices. This is not a slogan—it is a filter for how we allocate capital, treat people, and build long-term value.",
  },
  {
    question: "Can anybody invest with TerraLuma Capital?",
    answer:
      "No. TerraLuma Capital works exclusively with accredited investors. Accreditation is determined by meeting specific financial criteria defined by securities regulations. Investors must meet at least one qualifying standard and provide third-party verification as part of the onboarding process.",
  },
  {
    question: "What qualifies someone as an accredited investor?",
    answer:
      "An individual qualifies as an accredited investor if they meet at least one of the following criteria: a net worth over $1 million, individually or jointly with a spouse, excluding the value of a primary residence; or individual income over $200,000 in each of the last two years (or $300,000 jointly with a spouse or partner), with a reasonable expectation of the same income level in the current year. TerraLuma Capital requires a verification letter from a CPA or qualified professional to confirm accredited status.",
  },
  {
    question: "What is TerraLuma Capital and how does it work?",
    answer:
      "TerraLuma Capital specializes in acquiring real estate and privately owned companies—alternative assets that are not publicly traded stocks, bonds, or ETFs. By focusing on private markets, we access opportunities unavailable to the general public. We source deals directly through our internal acquisition team by working with business owners and landowners, rather than competing in auction-style markets. This approach allows us to structure investments with attractive risk-adjusted returns and long-term value creation potential.",
  },
  {
    question: "What types of returns does TerraLuma Capital offer?",
    answer:
      "TerraLuma Capital offers two income-focused return structures: a 12% annual interest rate paid monthly, or a 15% annual interest rate paid quarterly. These payments are designed to provide consistent income and are not dependent on short-term public market volatility.",
  },
  {
    question: "Are the 12% and 15% interest rates true annual rates?",
    answer:
      "Yes. The stated interest rates are true annual interest rates. There are no management fees or hidden costs deducted from your interest payments. Your returns are not reduced by additional fees.",
  },
  {
    question: "How did TerraLuma Capital begin?",
    answer:
      "TerraLuma Capital was formed through firsthand experience in real assets. The founding team began in residential real estate and later expanded into land acquisition and development. While acquiring underutilized farms, they identified profitable, essential businesses shutting down due to owner retirement or lack of succession planning. TerraLuma Capital was created to preserve these businesses and efficiently scale capital across land, real estate, and operating companies with long-term value.",
  },
  {
    question: "Can I invest using funds from my IRA?",
    answer:
      "Yes. Investments can be made using a Self-Directed IRA. If you currently have a traditional IRA, TerraLuma Capital can help guide you through converting it to a Self-Directed IRA while maintaining the tax-advantaged status of your funds.",
  },
  {
    question: "What types of funds can I use to invest with TerraLuma Capital?",
    answer:
      "Investments can be made using funds from checking accounts, savings accounts, Self-Directed IRAs, and Self-Directed 401(k)s. If you have questions about a specific account type or structure, TerraLuma Capital recommends scheduling a call to discuss your situation.",
  },
  {
    question: "How does TerraLuma Capital approach investment risk?",
    answer:
      "No investment is 100% risk-free. TerraLuma Capital takes a disciplined approach by investing in U.S.-based real estate and privately owned businesses with tangible assets, proven operating history, and essential demand. We avoid speculative technology and focus on assets that generate real cash flow and real utility.",
  },
  {
    question:
      "What criteria does TerraLuma Capital use when acquiring businesses?",
    answer:
      "TerraLuma Capital targets businesses that have been operating for at least seven years, generate between $500,000 and $5 million in net profit on average over the last three years, and offer clear opportunities for growth through improved marketing, operational efficiencies, and proven software systems.",
  },
  {
    question: "What criteria does TerraLuma Capital use for land investments?",
    answer:
      "Land investments are typically acquired at less than 50% of the retail value of completed lots and feature quality road frontage, access to power and water, the ability to pass perc and soil tests, usable topography, and minimal flood zone exposure.",
  },
  {
    question:
      "What types of commercial real estate does TerraLuma Capital invest in?",
    answer:
      "TerraLuma Capital focuses on flex space and light industrial commercial assets with value-add opportunities in high-demand rental markets serving blue-collar tenants such as plumbers, HVAC professionals, and electricians. All properties must successfully complete a Phase I environmental study.",
  },
  {
    question:
      "Where does TerraLuma Capital focus its investments geographically?",
    answer:
      "TerraLuma Capital concentrates investments in the Chattanooga, Knoxville, Nashville, and Huntsville regions of the Southeastern United States.",
  },
  {
    question: "Who is TerraLuma Capital designed for?",
    answer:
      "TerraLuma Capital is designed for accredited investors seeking consistent income, annual returns in the 12–15% range, and capital deployment in private markets rather than public equities. It is intended for investors who value predictability, tangible assets, and long-term value creation.",
  },
  {
    question:
      "How long is my investment commitment, and what is the minimum investment?",
    answer:
      "The standard investment term is a 36-month commitment with a minimum investment of $500,000. This time horizon allows TerraLuma Capital to acquire assets deliberately, install the right teams and systems, and execute value creation strategies responsibly. Accredited investors interested in investing less than $500,000 may have additional options available.",
  },
  {
    question: "How do I get started with TerraLuma Capital?",
    answer:
      "TerraLuma Capital prioritizes direct relationships with investors. To get started, schedule a one-on-one call with the team to determine whether TerraLuma Capital is the right fit for both sides.",
  },
];

function FaqHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f3eadb] px-6 py-24 sm:py-32 lg:px-8 capitalize">
      {/* TerraLuma grid (same family as other sections) */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-[#d8c6ad]"
      >
        <defs>
          <pattern
            x="50%"
            y="-1"
            id="tl-pattern-faq"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* crosshair grid, matches your other blocks */}
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>

        {/* subtle filled tiles like your other hero */}
        <svg x="50%" y="-1" className="overflow-visible fill-[#efe1cd]">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth="0"
          />
        </svg>

        <rect
          fill="url(#tl-pattern-faq)"
          width="100%"
          height="100%"
          strokeWidth="0"
        />
      </svg>

      {/* warmer wash + depth (slightly darker than the page) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#20140a]/0 via-[#20140a]/0 to-[#20140a]/10"
      />

      {/* blob accent (same vibe as other sections) */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      >
        <div
          className="aspect-[801/1036] w-[200px] bg-gradient-to-tr from-[#FFE898] to-[#624315] opacity-25"
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base/7 font-semibold text-[#624315]">FAQs</p>

        <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight text-[#20140a] sm:text-6xl">
          Clarity for accredited investors
        </h1>

        <p className="mt-6 text-lg/8 text-[#5a4a36]">
          Straight answers on how TerraLuma is structured, what we acquire, and
          how we work with investors and local stakeholders.
        </p>
      </div>
    </section>
  );
}

function FaqAccordion() {
  return (
    <section className="bg-[#f9f5ee]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#1b1308] sm:text-4xl">
            Frequently asked questions
          </h2>

          <dl className="mt-12 divide-y divide-[#e2d4c1]">
            {faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="py-6 first:pt-0 last:pb-0"
              >
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between gap-x-6 text-left">
                    <span className="text-base leading-7 font-semibold text-[#1b1308]">
                      {faq.question}
                    </span>

                    <span className="flex h-7 items-center text-[#624315]">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-data-open:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-not-data-open:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>

                <DisclosurePanel as="dd" className="mt-3 pr-0 sm:pr-12">
                  <p className="text-base leading-7 text-[#1b1308]/70">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default function FaqPage() {
  return (
    <main className="bg-[#f9f5ee]">
      <FaqHero />
      <FaqAccordion />
      <CTASection />
    </main>
  );
}
