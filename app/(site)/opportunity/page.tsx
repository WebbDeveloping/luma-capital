// app/opportunity/page.tsx
import {
  BuildingStorefrontIcon,
  MapPinIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function OpportunityWireframePage() {
  return (
    <main className="bg-[#f9f5ee] text-[#1b1308] font-serif">
      {/* HERO (wireframe-styled, same spacing system as your site) */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <BgGrid />
        <BgBlob />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto h-3 w-36 rounded bg-black/10" />
            <div className="mx-auto mt-5 h-12 w-11/12 rounded bg-black/10 sm:h-16 sm:w-3/4" />
            <div className="mx-auto mt-5 h-4 w-5/6 rounded bg-black/10 sm:w-2/3" />

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <div className="h-11 w-48 rounded-xl bg-black/10" />
              <div className="h-11 w-56 rounded-xl border border-black/15 bg-white/50" />
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <div className="h-8 w-32 rounded-full border border-black/15 bg-white/50" />
              <div className="h-8 w-40 rounded-full border border-black/15 bg-white/50" />
              <div className="h-8 w-36 rounded-full border border-black/15 bg-white/50" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: LAND */}
      <WireSection
        id="land"
        eyebrow="2) Opportunity in Land"
        titleWidthClass="w-3/4"
        icon={<ArrowTrendingUpIcon className="size-6 text-black/30" />}
      />

      {/* SECTION: SMALL BUSINESS */}
      <WireSection
        id="business"
        eyebrow="3) Opportunity in Small Business"
        titleWidthClass="w-2/3"
        icon={<BuildingStorefrontIcon className="size-6 text-black/30" />}
        tone="alt"
      />

      {/* SECTION: REGIONAL FOCUS */}
      <WireRegionSection />

      {/* CLOSING CTA */}
      <section className="border-t border-black/10 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border border-black/10 bg-white/50 p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl border border-black/10 bg-white/60 p-3">
                <ShieldCheckIcon className="size-6 text-black/30" />
              </div>

              <div className="flex-1">
                <div className="h-7 w-72 rounded bg-black/10" />
                <div className="mt-4 space-y-2">
                  <div className="h-4 w-full rounded bg-black/10" />
                  <div className="h-4 w-11/12 rounded bg-black/10" />
                  <div className="h-4 w-4/5 rounded bg-black/10" />
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <div className="h-11 w-56 rounded-xl bg-black/10" />
                  <div className="h-11 w-32 rounded-xl border border-black/15 bg-white/50" />
                </div>
              </div>
            </div>
            <p className="mt-6 text-xs text-black/50">
              Wireframe note: final CTA wording and links will be set after copy
              approval.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------------------ */
/* Sections (wireframe)     */
/* ------------------------ */

function WireSection({
  id,
  eyebrow,
  titleWidthClass = "w-2/3",
  icon,
  tone,
}: {
  id: string;
  eyebrow: string;
  titleWidthClass?: string;
  icon: React.ReactNode;
  tone?: "alt";
}) {
  return (
    <section
      id={id}
      className={[
        "border-t border-black/10 py-24 sm:py-32",
        tone === "alt" ? "bg-white/30" : "",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT NARRATIVE */}
          <div className="lg:col-span-7">
            <div
              className={`mt-6 h-10 rounded bg-black/10 ${titleWidthClass}`}
            />
            <div className="mt-6 space-y-3">
              <div className="h-4 w-full rounded bg-black/10" />
              <div className="h-4 w-11/12 rounded bg-black/10" />
              <div className="h-4 w-10/12 rounded bg-black/10" />
              <div className="h-4 w-4/5 rounded bg-black/10" />
            </div>

            {/* bullets placeholder */}
            <div className="mt-10 rounded-2xl border border-black/10 bg-white/50 p-6">
              <div className="h-4 w-40 rounded bg-black/10" />
              <div className="mt-4 space-y-3">
                <div className="h-3 w-11/12 rounded bg-black/10" />
                <div className="h-3 w-10/12 rounded bg-black/10" />
                <div className="h-3 w-9/12 rounded bg-black/10" />
              </div>
            </div>
          </div>

          {/* RIGHT ASIDE (stats/cards wireframe) */}
          <aside className="lg:col-span-5">
            <div className="rounded-3xl border border-black/10 bg-white/60 p-6">
              <div className="h-3 w-28 rounded bg-black/10" />
              <div className="mt-6 space-y-4">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </aside>
        </div>

        {/* bottom 3-up cards */}
        <div className="mt-14 border-t border-black/10 pt-12">
          <div className="h-6 w-64 rounded bg-black/10" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </div>
          <div className="mt-8 h-4 w-3/4 rounded bg-black/10" />
        </div>
      </div>
    </section>
  );
}

function WireRegionSection() {
  return (
    <section id="region" className="border-t border-black/10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-black/10 bg-white/60 p-3">
            <MapPinIcon className="size-6 text-black/30" />
          </div>
          <div className="h-3 w-64 rounded bg-black/10" />
        </div>

        <div className="mt-6 h-10 w-3/4 rounded bg-black/10" />
        <div className="mt-6 h-4 w-2/3 rounded bg-black/10" />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 bg-white/50 p-6">
          <div className="h-4 w-5/6 rounded bg-black/10" />
          <div className="mt-2 h-4 w-2/3 rounded bg-black/10" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------ */
/* Skeleton bits            */
/* ------------------------ */

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

function MiniCard() {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/60 p-6">
      <div className="h-4 w-40 rounded bg-black/10" />
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full rounded bg-black/10" />
        <div className="h-3 w-11/12 rounded bg-black/10" />
        <div className="h-3 w-4/5 rounded bg-black/10" />
      </div>
    </div>
  );
}

/* ------------------------ */
/* TerraLuma background     */
/* ------------------------ */

function BgGrid() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-[#e2d4c1]"
    >
      <defs>
        <pattern
          x="50%"
          y="-1"
          id="tl-pattern"
          width="200"
          height="200"
          patternUnits="userSpaceOnUse"
        >
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" className="overflow-visible fill-[#fdf7ee]">
        <path
          d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
          strokeWidth="0"
        />
      </svg>
      <rect
        fill="url(#tl-pattern)"
        width="100%"
        height="100%"
        strokeWidth="0"
      />
    </svg>
  );
}

function BgBlob() {
  return (
    <div
      aria-hidden="true"
      className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
    >
      <div
        className="aspect-[801/1036] w-[200px] bg-gradient-to-tr from-[#FFE898] to-[#624315] opacity-30"
        style={{
          clipPath:
            "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
        }}
      />
    </div>
  );
}
