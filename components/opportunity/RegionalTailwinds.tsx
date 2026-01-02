import Section from "./Section";

const markets = ["Nashville", "Huntsville", "Knoxville", "Chattanooga"];

const regionPillars = [
  {
    number: "1.",
    title: "Population & Migration Trends",
    body: "Many individuals and families are moving to these regions due to lower cost of living, business-friendly climates, and quality of life. Economic data consistently shows these metro areas growing faster than national averages due to inbound migration of workers and families.",
  },
  {
    number: "2.",
    title: "Strong Business Demand",
    body: "Growth in construction, trades, manufacturing support services, and logistics underpins demand for flex/light industrial real estate — where many small businesses operate and service regional needs.",
  },
  {
    number: "3.",
    title: "Land & Development Tailwinds",
    body: "Continued expansion of residential and commercial growth corridors creates long-term opportunity for land value appreciation. Rural and exurban land near expanding metros can benefit from development pressure even as ag/land use remains intact.",
  },
  {
    number: "4.",
    title: "Workforce and Small Business Ecosystems",
    body: "These regions have diversified economies with entrepreneurial activity, which supports the demand for acquisition of established businesses that serve local communities.",
  },
];

export default function RegionalTailwinds() {
  return (
    <Section
      eyebrow="Growth in Nashville, Huntsville, Knoxville, and Chattanooga"
      title="Regional Dynamics That Support Your Investment Strategy"
      lead="These Southeastern markets — where TerraLuma Capital focuses investing — are experiencing above-average growth and economic dynamism:"
      image="/images/stock/2.png"
      imageAlt="Southeastern city skyline at golden hour"
    >
      <div className="rounded-2xl bg-white p-8 ring-1 ring-black/10">
        <dl className="space-y-8 text-sm/6 text-[#5a4a36] font-sans">
          {regionPillars.map((item) => (
            <div key={item.title}>
              <dt className="font-semibold text-[#1b1308]">
                <span className="text-[#624315]">{item.number} </span>
                {item.title}
              </dt>
              <dd className="mt-2">{item.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

