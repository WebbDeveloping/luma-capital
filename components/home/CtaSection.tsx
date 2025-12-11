export default function CTASection() {
  return (
    <section className="bg-tl-brown dark:bg-tl-black">
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl font-serif">
            Build lasting value in rural communities.
          </h2>

          <p className="font-sans mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-[#f4e7d6] dark:text-tl-gold/80">
            TerraLuma partners with operators, lenders, and land stewards to
            preserve local enterprises and strengthen the future of rural
            economies.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6 font-sans">
            <a
              href="#contact"
              className="rounded-md bg-tl-gold px-3.5 py-2.5 text-sm font-semibold text-tl-brown shadow-xs hover:bg-[#f7e3a8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tl-gold"
            >
              Connect with our team
            </a>

            <a
              href="#about"
              className="text-sm/6 font-semibold text-white hover:text-tl-gold"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
