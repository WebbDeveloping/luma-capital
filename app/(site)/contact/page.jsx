// app/contact/page.tsx
export default function ContactWireframe() {
  return (
    <main className="bg-white text-black">
      {/* HERO / INTRO */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <div className="mx-auto h-4 w-32 bg-black/10" />
          <div className="mx-auto mt-6 h-10 w-3/4 bg-black/10" />
          <div className="mx-auto mt-4 h-4 w-2/3 bg-black/10" />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT: CONTACT FORM WIREFRAME */}
          <div className="border border-dashed border-black/30 p-6">
            <div className="mb-6 h-5 w-48 bg-black/10" />

            <div className="space-y-4">
              <div className="h-10 w-full bg-black/10" />
              <div className="h-10 w-full bg-black/10" />
              <div className="h-10 w-full bg-black/10" />
              <div className="h-24 w-full bg-black/10" />
            </div>

            <div className="mt-6 h-10 w-40 bg-black/20" />
          </div>

          {/* RIGHT: CONTEXT / GUIDANCE */}
          <div className="border border-dashed border-black/30 p-6">
            <div className="h-5 w-56 bg-black/10" />

            <div className="mt-6 space-y-3">
              <div className="h-4 w-full bg-black/10" />
              <div className="h-4 w-11/12 bg-black/10" />
              <div className="h-4 w-10/12 bg-black/10" />
            </div>

            <div className="mt-8 border-t border-black/10 pt-6">
              <div className="h-4 w-40 bg-black/10" />
              <div className="mt-3 h-4 w-32 bg-black/10" />
              <div className="mt-3 h-4 w-48 bg-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-5xl px-6 py-10 text-center">
          <div className="mx-auto h-3 w-5/6 bg-black/10" />
          <div className="mx-auto mt-2 h-3 w-3/4 bg-black/10" />
        </div>
      </section>
    </main>
  );
}
