export default function PrinciplesAndMandate() {
  return (
    <div className="overflow-hidden bg-[#f3eadb] py-32 text-[#1b1308]">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              Principles &amp; mandate
            </h2>

            <p className="mt-6 text-xl leading-8 text-[#1b1308]/80">
              Built for the long run. TerraLuma takes a steady,
              relationship-first approach to ownership transitions—working
              closely with owners, operators, and local stakeholders.
            </p>

            <p className="mt-6 text-base leading-7 text-[#1b1308]/70">
              Our mandate is straightforward: keep essential businesses
              operating, keep land usable, and support local services—without
              forcing change that doesn’t fit the community.
            </p>

            <div className="mt-10 flex">
              <a
                href="/contact"
                className="rounded-md bg-[#624315] px-3.5 py-2.5 text-sm font-semibold text-[#f9f5ee] shadow-sm hover:bg-[#4f3611] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFE898]"
              >
                Start a conversation <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                alt="Rural business and land"
                src="/images/stock/1.png"
                className="aspect-7/5 w-148 max-w-none rounded-2xl bg-[#f9f5ee] object-cover ring-1 ring-[#e2d4c1]/80 max-sm:w-120"
              />
            </div>

            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto">
                <img
                  alt="Operators at work"
                  src="/images/stock/2.png"
                  className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-[#f9f5ee] object-cover ring-1 ring-[#e2d4c1]/80"
                />
              </div>

              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  alt="Practical infrastructure and trade"
                  src="/images/stock/3.png"
                  className="aspect-7/5 w-148 max-w-none flex-none rounded-2xl bg-[#f9f5ee] object-cover ring-1 ring-[#e2d4c1]/80 max-sm:w-120"
                />
              </div>

              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  alt="Small-town services and main street"
                  src="/images/stock/4.png"
                  className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-[#f9f5ee] object-cover ring-1 ring-[#e2d4c1]/80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
