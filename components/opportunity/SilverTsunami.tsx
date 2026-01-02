import Section from "./Section";

const bizProof = [
  {
    title: "Millions of Baby Boomer-owned businesses need new leadership",
    body: "Millions of Baby Boomer-owned businesses will need new leadership in the next decade.",
    source: "BizBuySell",
  },
  {
    title: "2.3 million small businesses owned by aging owners",
    body: "Roughly 2.3 million small businesses nationwide are owned by aging owners likely to consider exit or succession options.",
    source: "Project Equity",
  },
  {
    title: "48% want to exit within 3 years",
    body: "Surveys show nearly 48% of business owners aged 45-75 want to exit their company within the next three years — a remarkably high near-term intent signal.",
    source: "cornerstone-business.com",
  },
  {
    title: "Many lack formal succession plans",
    body: "Many of these businesses do not have formal succession plans, increasing the likelihood of sales or closures.",
    source: "Teamshares",
  },
];

const bizWhy = [
  {
    title: "Real opportunities in acquisitions",
    body: "Established businesses with profitability and systems in place are rare and valuable.",
  },
  {
    title: "Succession gaps create scarcity",
    body: "When owners retire without a transition plan, capable buyers can step in and preserve value.",
  },
  {
    title: "Strong employment and revenue base at stake",
    body: "In specific regions, tens of thousands of businesses with collective billions in payroll and revenue are owned by those nearing exit.",
    source: "wncbusiness.com",
  },
  {
    title: "Cash flows and operational upside",
    body: "Acquiring businesses in this environment — particularly with disciplined underwriting and operational support — allows investors to capture both ongoing cash flows and strategic upside from operational improvements.",
  },
];

export default function SilverTsunami() {
  return (
    <Section
      eyebrow="The Opportunity in Small Business Acquisition"
      title={`The "Silver Tsunami"`}
      lead='The term "Silver Tsunami" refers to the large cohort of aging business owners approaching retirement and preparing to exit ownership.'
      reverse
      image="/images/land-business/5.png"
      imageAlt="Small business team meeting"
    >
      <div className="rounded-2xl bg-white p-8 ring-1 ring-black/10">
        <h3 className="text-base/7 font-semibold text-[#1b1308] font-serif">
          Demographic Forces at Work
        </h3>
        <dl className="mt-8 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 font-sans">
          {bizProof.map((item) => (
            <div key={item.title} className="flex flex-col">
              <dt className="text-sm/6 font-semibold text-[#1b1308]">
                {item.title}
              </dt>
              <dd className="mt-2 text-sm/6 text-[#5a4a36]">{item.body}</dd>
              <dd className="mt-2 text-xs/5 text-[#5a4a36]/70">
                {item.source}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="rounded-2xl bg-[#f1e6d6] p-8 ring-1 ring-black/10">
        <h3 className="text-base/7 font-semibold text-[#1b1308] font-serif">
          Why This Is Compelling for Investors
        </h3>
        <dl className="mt-6 space-y-6 text-sm/6 text-[#5a4a36] font-sans">
          {bizWhy.map((item, index) => (
            <div key={index} className="relative pl-9">
              <dt className="inline font-semibold text-[#1b1308]">
                <span
                  className="absolute top-1 left-1 size-5 text-[#624315]"
                  aria-hidden="true"
                >
                  •
                </span>
                {item.title}
              </dt>{" "}
              <dd className="inline">{item.body}</dd>
              {item.source && (
                <dd className="mt-2 text-xs/5 text-[#5a4a36]/70">
                  {item.source}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

