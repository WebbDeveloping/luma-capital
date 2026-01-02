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
    <section className="relative isolate overflow-hidden bg-[#f9f5ee] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base/7 font-semibold text-[#624315] font-sans">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[#1b1308] sm:text-5xl lg:text-balance font-serif">
            {title}
          </h2>
          <p className="mt-6 text-lg/8 text-[#5a4a36] font-sans">{lead}</p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div
            className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start ${
              reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl bg-[#f1e6d6] ring-1 ring-black/10">
              <img
                alt={imageAlt}
                src={image}
                className="h-80 w-full object-cover sm:h-96"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/85 via-white/10 to-transparent"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/10 ring-inset" />
            </div>

            <div className="space-y-10">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;

