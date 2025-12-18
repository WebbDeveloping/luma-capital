const blocks = [
  {
    name: "Rural land that works",
    description:
      "Demand is increasing for rural land that supports everyday living—space, access, and flexibility, not dense subdivision.",
    support:
      "Families moving toward rural and exurban life are looking for land that fits how they live day to day, not land optimized for resale or theoretical development.",
    detail:
      "That means properties where people can settle in, make improvements over time, and use the land in practical ways without constantly working around its limitations.",
    imageSrc: "/images/stock/4.png",
    imageAlt: "Rural land and homestead infrastructure",
    prompt: "Documentary photo of practical rural acreage...",
  },
  {
    name: "What “usable” means",
    description:
      "Usable land has reliable access, basic infrastructure, and a layout that supports homes, workshops, storage, and small operations—without major changes.",
    support:
      "These are properties where the fundamentals are already in place, or can be improved incrementally, rather than requiring full redevelopment to be functional.",
    detail:
      "Usable land reduces friction for owners and operators, allowing the property to support real activity and adapt naturally as needs change over time.",
    imageSrc: "/images/stock/2.png",
    imageAlt: "Workshop and outbuildings on rural property",
    prompt: "Documentary photo of a working rural property...",
  },
  {
    name: "Why it strengthens local towns",
    description:
      "As new families move in, demand for local services grows. Practical land helps local businesses meet that demand—supporting jobs and everyday needs.",
    support:
      "Land that supports real use enables small businesses, service providers, and trades to remain viable as communities grow.",
    detail:
      "When housing, land use, and local services evolve together, towns can grow in a way that feels steady, familiar, and grounded rather than disruptive.",
    imageSrc: "/images/stock/8.png",
    imageAlt: "Small-town main street and local services",
    prompt: "Documentary photo of a small rural town service corridor...",
  },
];

export default function LandAndLifestyle() {
  return (
    <section className="bg-[#f9f5ee] py-24 sm:py-32 text-[#1b1308]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            Land that supports real life
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#1b1308]/75">
            We focus on rural land that can be lived on, worked from, and
            sustained over time.
          </p>
        </div>

        {/* Alternating split blocks */}
        <div className="mx-auto mt-16 space-y-16 sm:mt-20 lg:mt-24">
          {blocks.map((b, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={b.name}
                className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12"
              >
                {/* Image */}
                <div
                  className={[
                    "lg:col-span-5",
                    isEven ? "lg:order-1" : "lg:order-2",
                  ].join(" ")}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-[#e2d4c1] bg-[#f3eadb] shadow-sm">
                    <div className="aspect-[3/4]">
                      <img
                        src={b.imageSrc}
                        alt={b.imageAlt}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[#1b1308]/12" />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div
                  className={[
                    "lg:col-span-7",
                    isEven ? "lg:order-2" : "lg:order-1",
                  ].join(" ")}
                >
                  <div className="max-w-xl">
                    <p className="inline-flex rounded-full border border-[#e2d4c1] bg-[#f3eadb] px-3 py-1 text-xs font-semibold tracking-wide text-[#624315]">
                      {String(idx + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-4 font-serif text-2xl font-semibold sm:text-3xl">
                      {b.name}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-[#1b1308]/70 sm:text-lg">
                      {b.description}
                    </p>

                    <p className="mt-4 text-base leading-7 text-[#1b1308]/65">
                      {b.support}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 border-t border-[#e2d4c1]" />
      </div>
    </section>
  );
}
