export default function ValidationSection() {
  return (
    <section className="relative z-20 bg-tl-brown dark:bg-[#080808] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <h2 className="text-center font-[var(--font-tl-sans)] text-tl-sub font-semibold text-tl-gold">
          Trusted by organizations aligned with our mission
        </h2>

        {/* LOGO GRID */}
        <div
          className="mx-auto mt-12 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10
                     sm:max-w-xl sm:grid-cols-6 sm:gap-x-10
                     lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          {/* temp white logos (swap later) */}
          <img
            alt="Transistor"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-95"
          />

          <img
            alt="Reform"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-95"
          />

          <img
            alt="Tuple"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 opacity-95"
          />

          <img
            alt="SavvyCal"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 opacity-95"
          />

          <img
            alt="Statamic"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 opacity-95"
          />
        </div>
      </div>
    </section>
  );
}
