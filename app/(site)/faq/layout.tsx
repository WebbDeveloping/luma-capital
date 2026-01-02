import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Get answers about TerraLuma Capital's investment philosophy, accredited investor requirements, returns, risk approach, and how to get started with rural business and land investments.",
  openGraph: {
    title: "Frequently Asked Questions",
    description:
      "Get answers about TerraLuma Capital's investment philosophy, accredited investor requirements, returns, risk approach, and how to get started with rural business and land investments.",
    images: [
      // TODO: Add appropriate OpenGraph image (1200x630px recommended)
      // {
      //   url: "/images/path/to/image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Frequently asked questions about TerraLuma Capital investments",
      // },
    ],
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

