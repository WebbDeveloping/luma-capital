"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Capital solutions",
    description: "Flexible, patient capital for rural business transitions.",
    href: "#capital",
    icon: ChartPieIcon,
  },
  {
    name: "Operator support",
    description: "Hands-on support for new and existing owners.",
    href: "#who-we-serve",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Risk & stewardship",
    description: "Responsible structures that protect land and livelihoods.",
    href: "#process",
    icon: FingerPrintIcon,
  },
  {
    name: "Lender partnerships",
    description: "Collaborations with regional banks and co-ops.",
    href: "#partnerships",
    icon: SquaresPlusIcon,
  },
];

const callsToAction = [
  { name: "Watch overview", href: "#insights", icon: PlayCircleIcon },
  { name: "Schedule a call", href: "#contact", icon: PhoneIcon },
  { name: "View all solutions", href: "#capital", icon: RectangleGroupIcon },
];

function TerraLumaLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-tl-brown text-tl-gold text-sm font-semibold">
        TL
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-semibold tracking-[0.22em] uppercase text-tl-brown dark:text-tl-gold">
          TerraLuma
        </span>
        <span className="text-[11px] text-[#5a4a36] dark:text-gray-400">
          Capital
        </span>
      </div>
    </div>
  );
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative isolate z-10 bg-[#f9f5ee] text-[#21140a] dark:bg-tl-black dark:text-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* LOGO */}
        <div className="flex lg:flex-1">
          <a href="#top" className="-m-1.5 p-1.5">
            <span className="sr-only">TerraLuma Capital</span>
            <TerraLumaLogo />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#3f3122] dark:text-gray-300"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* DESKTOP NAV */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-10">
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-[#21140a] hover:text-tl-brown dark:text-white dark:hover:text-tl-gold">
              Solutions
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-[#9a8566] dark:text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-16 bg-[#fdf7ee] transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in dark:bg-tl-black"
            >
              {/* shadow background */}
              <div
                aria-hidden="true"
                className="absolute inset-0 top-1/2 bg-[#fdf7ee] shadow-lg ring-1 ring-black/5 dark:bg-tl-black dark:shadow-none dark:ring-white/15"
              />
              <div className="relative bg-[#fdf7ee] dark:bg-tl-black">
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative rounded-lg p-6 text-sm/6 hover:bg-[#f1e3d1] dark:hover:bg-white/5"
                    >
                      <div className="flex size-11 items-center justify-center rounded-lg bg-[#f4e7d6] group-hover:bg-[#fffaf2] dark:bg-[#22201a] dark:group-hover:bg-[#2c261c]">
                        <item.icon
                          aria-hidden="true"
                          className="size-6 text-tl-brown group-hover:text-tl-brown dark:text-tl-gold dark:group-hover:text-white"
                        />
                      </div>
                      <a
                        href={item.href}
                        className="mt-6 block font-semibold text-[#21140a] dark:text-white"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-[#5a4a36] dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-[#f4e7d6] dark:bg-[#17130d]">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-3 divide-x divide-black/5 border-x border-black/5 dark:divide-white/10 dark:border-white/10">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-[#21140a] hover:bg-[#e8d6c0] dark:text-white dark:hover:bg-[#201a11]"
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-5 flex-none text-[#9a8566] dark:text-gray-400"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          <a
            href="#who-we-serve"
            className="text-sm/6 font-semibold text-[#21140a] hover:text-tl-brown dark:text-white dark:hover:text-tl-gold"
          >
            Who we serve
          </a>
          <a
            href="#process"
            className="text-sm/6 font-semibold text-[#21140a] hover:text-tl-brown dark:text-white dark:hover:text-tl-gold"
          >
            Process
          </a>
          <a
            href="#about"
            className="text-sm/6 font-semibold text-[#21140a] hover:text-tl-brown dark:text-white dark:hover:text-tl-gold"
          >
            About
          </a>
          <a
            href="#insights"
            className="text-sm/6 font-semibold text-[#21140a] hover:text-tl-brown dark:text-white dark:hover:text-tl-gold"
          >
            Insights
          </a>
        </PopoverGroup>

        {/* DESKTOP CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#contact"
            className="text-sm/6 font-semibold text-[#21140a] hover:text-tl-brown dark:text-tl-gold dark:hover:text-white"
          >
            Contact <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      {/* MOBILE NAV */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#f9f5ee] p-6 sm:max-w-sm sm:ring-1 sm:ring-black/10 dark:bg-tl-black dark:sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#top" className="-m-1.5 p-1.5">
              <span className="sr-only">TerraLuma Capital</span>
              <TerraLumaLogo />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-[#3f3122] dark:text-gray-300"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-black/10 dark:divide-white/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#21140a] hover:bg-[#f1e3d1] dark:text-white dark:hover:bg-white/5">
                    Solutions
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#21140a] hover:bg-[#f1e3d1] dark:text-white dark:hover:bg-white/5"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <a
                  href="#who-we-serve"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#21140a] hover:bg-[#f1e3d1] dark:text-white dark:hover:bg-white/5"
                >
                  Who we serve
                </a>
                <a
                  href="#process"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#21140a] hover:bg-[#f1e3d1] dark:text-white dark:hover:bg-white/5"
                >
                  Process
                </a>
                <a
                  href="#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#21140a] hover:bg-[#f1e3d1] dark:text-white dark:hover:bg-white/5"
                >
                  About
                </a>
                <a
                  href="#insights"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#21140a] hover:bg-[#f1e3d1] dark:text-white dark:hover:bg-white/5"
                >
                  Insights
                </a>
              </div>

              <div className="py-6">
                <a
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-[#21140a] hover:bg-[#f1e3d1] dark:text-tl-gold dark:hover:bg-white/5"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
