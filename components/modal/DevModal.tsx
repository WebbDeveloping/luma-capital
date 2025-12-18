// components/modal/DevModal.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type DevModalProps = {
  delayMs?: number;

  /** show on exact routes */
  include?: string[];

  /** show on route prefixes ("/opportunity" matches "/opportunity/*") */
  includeStartsWith?: string[];

  /** hide on exact routes */
  exclude?: string[];

  /** hide on route prefixes */
  excludeStartsWith?: string[];
};

export default function DevModal({
  delayMs = 1000,
  include = ["/opportunity", "/faq"],
  includeStartsWith = ["/opportunity/"],
  exclude = [],
  excludeStartsWith = [],
}: DevModalProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const enabled = useMemo(() => {
    if (!pathname) return false;

    const isExcluded =
      exclude.includes(pathname) ||
      excludeStartsWith.some((p) => pathname.startsWith(p));

    if (isExcluded) return false;

    const isIncluded =
      include.includes(pathname) ||
      includeStartsWith.some((p) => pathname.startsWith(p));

    return isIncluded;
  }, [pathname, include, includeStartsWith, exclude, excludeStartsWith]);

  useEffect(() => {
    if (!enabled) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpen(false);
      return;
    }
    const t = setTimeout(() => setOpen(true), delayMs);
    return () => clearTimeout(t);
  }, [enabled, delayMs]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#f9f5ee] p-8 shadow-2xl border border-black/15">
        {/* Attention ribbon */}
        <div className="mb-6 inline-flex items-center rounded-full bg-[#624315]/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#624315]">
          Client preview notice
        </div>

        <h3 className="text-2xl font-semibold font-serif tracking-tight text-[#1b1308]">
          This page is a wireframe
        </h3>

        <p className="mt-4 text-base leading-7 text-black/80">
          You are viewing an in-progress layout intended to communicate
          structure, hierarchy, and content direction — not final design.
        </p>

        <p className="mt-4 text-base leading-7 text-black/80">
          Visual refinement, imagery, and final polish will be applied after
          layout and messaging are confirmed.
        </p>

        <div className="mt-8 flex justify-end">
          <button
            onClick={() => setOpen(false)}
            className="rounded-xl bg-[#624315] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#53370f]"
          >
            I understand — continue
          </button>
        </div>
      </div>
    </div>
  );
}
