import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "TerraLuma Capital",
  description: "Rural business & land investment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}
