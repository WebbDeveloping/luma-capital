"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScrollDirection } from "@/hooks/useScrollDirection";
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
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  ArrowRightIcon,
  ChartBarSquareIcon,
  MapIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/20/solid";

// COMMENTED OUT: Dropdown data structures (kept for potential restoration)
/*
const products = [
  {
    name: "Private Businesses",
    description:
      "Established, profitable owner-operated businesses with clear paths to growth.",
    href: "/assets-we-buy",
    icon: ChartBarSquareIcon,
  },
  {
    name: "Land",
    description:
      "Rural land and development parcels aligned with stewardship and fundamentals.",
    href: "/assets-we-buy",
    icon: MapIcon,
  },
  {
    name: "Flex / Light Industrial",
    description:
      "Essential-use commercial properties serving local operators and trades.",
    href: "/assets-we-buy",
    icon: BuildingStorefrontIcon,
  },
];

const callsToAction = [
  { name: "Sell a Business", href: "/assets-we-buy", icon: ArrowRightIcon },
  { name: "Sell Land", href: "/assets-we-buy", icon: ArrowRightIcon },
  { name: "Submit Property", href: "/assets-we-buy", icon: ArrowRightIcon },
];
*/

function TerraLumaLogo() {
  return (
    <div className="flex items-center">
      <Image
        src="/images/logo-terraluma-capital.png"
        alt="TerraLuma Capital"
        width={140}
        height={32}
        priority
        className="h-8 w-auto"
      />
    </div>
  );
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection({ threshold: 10 });

  // Determine if nav should be hidden (only hide when scrolling down and mobile menu is closed)
  const isHidden = scrollDirection === "down" && !mobileMenuOpen;

  return (
    <header
      className={`sticky top-0 inset-x-0 z-50 bg-[#15100b] text-white dark:bg-tl-black transition-transform duration-300 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* LOGO */}
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5"
            aria-label="TerraLuma Capital Home"
          >
            <TerraLumaLogo />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* DESKTOP NAV */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-10">
          {/* COMMENTED OUT: Assets We Buy Dropdown (desktop) - kept for potential restoration */}
          {/*
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white/80 hover:text-tl-gold">
              Assets We Buy
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-tl-gold"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-16 bg-[#fdf7ee] transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in dark:bg-tl-black"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 top-1/2 bg-[#fdf7ee] shadow-lg ring-1 ring-black/5 dark:bg-tl-black dark:shadow-none dark:ring-white/15"
              />
              <div className="relative bg-[#fdf7ee] dark:bg-tl-black">
                <div className="mx-auto grid max-w-7xl grid-cols-3 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative rounded-lg p-6 text-sm/6 hover:bg-[#f1e3d1] dark:hover:bg-white/5"
                    >
                      <div className="flex size-11 items-center justify-center rounded-lg bg-[#f4e7d6] group-hover:bg-[#fffaf2] dark:bg-[#22201a] dark:group-hover:bg-[#2c261c]">
                        <item.icon
                          aria-hidden="true"
                          className="size-6 text-tl-brown dark:text-tl-gold"
                        />
                      </div>
                      <Link
                        href={item.href}
                        className="mt-6 block font-semibold text-[#21140a] dark:text-white"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
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
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-[#21140a] hover:bg-[#e8d6c0] dark:text-white dark:hover:bg-[#201a11]"
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-5 flex-none text-[#9a8566] dark:text-gray-400"
                          />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Popover>
          */}

          {/* Direct link to Home */}
          <Link
            href="/"
            className="text-sm/6 font-semibold text-white/80 hover:text-tl-gold"
          >
            Home
          </Link>

          {/* Direct link to Assets We Buy */}
          <Link
            href="/assets-we-buy"
            className="text-sm/6 font-semibold text-white/80 hover:text-tl-gold"
          >
            Assets We Buy
          </Link>

          <Link
            href="/testimonials"
            className="text-sm/6 font-semibold text-white/80 hover:text-tl-gold"
          >
            Investor Testimonials
          </Link>

          <Link
            href="/opportunity"
            className="text-sm/6 font-semibold text-white/80 hover:text-tl-gold"
          >
            Opportunity
          </Link>

          <Link
            href="/faq"
            className="text-sm/6 font-semibold text-white/80 hover:text-tl-gold"
          >
            FAQ&apos;s
          </Link>
        </PopoverGroup>

        {/* DESKTOP CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="text-sm/6 font-semibold text-white/80 hover:text-tl-gold"
          >
            Contact <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* MOBILE NAV */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/40" />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#15100b] p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 dark:bg-tl-black">
          <div className="flex items-center justify-between">
            {/* ✅ MOBILE LOGO NOW GOES HOME */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-1.5 p-1.5"
              aria-label="TerraLuma Capital Home"
            >
              <TerraLumaLogo />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {/* COMMENTED OUT: Assets We Buy (mobile dropdown) - kept for potential restoration */}
                {/*
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                    Assets We Buy
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none transition group-data-open:rotate-180"
                    />
                  </DisclosureButton>

                  <DisclosurePanel className="mt-2 space-y-1">
                    {products.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white/90 hover:bg-white/5"
                      >
                        {item.name}
                      </Link>
                    ))}

                    <div className="my-2 h-px bg-white/10" />

                    {callsToAction.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-white/5"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                */}

                {/* Direct link to Home (mobile) */}
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Home
                </Link>

                {/* Direct link to Assets We Buy (mobile) */}
                <Link
                  href="/assets-we-buy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Assets We Buy
                </Link>

                {/* ✅ EXACT DESKTOP LINKS + ORDER */}
                <Link
                  href="/testimonials"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Investor Testimonials
                </Link>

                <Link
                  href="/opportunity"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Opportunity
                </Link>

                <Link
                  href="/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  FAQ&apos;s
                </Link>
              </div>

              <div className="py-6">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-tl-gold hover:bg-white/5"
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
