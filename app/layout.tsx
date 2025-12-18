// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";
import DevModal from "@/components/modal/DevModal";

// app/layout.tsx
// app/layout.tsx
export const metadata = {
  title: {
    default: "TerraLuma Capital",
    template: "%s — TerraLuma Capital",
  },
  description:
    "TerraLuma Capital partners with rural business owners and land stewards to support generational transitions, sustainable operations, and long-term community value.",
  openGraph: {
    type: "website",
    siteName: "TerraLuma Capital",
    images: [
      {
        url: "/images/stock/1.png", // stock image for now
        width: 1200,
        height: 630,
        alt: "TerraLuma Capital",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-app text-app font-sans antialiased">
        <Navigation />
        {children}
        <Footer />
        <DevModal />
        {/* <ThemeToggle /> */}
      </body>
    </html>
  );
}
