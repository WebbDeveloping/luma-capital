import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Latest News & Press Releases",
  description:
    "Stay updated with TerraLuma Capital's latest developments, press releases, and initiatives in rural business and land investment across the Southeast.",
  openGraph: {
    title: "Latest News & Press Releases",
    description:
      "Stay updated with TerraLuma Capital's latest developments, press releases, and initiatives in rural business and land investment across the Southeast.",
    images: [
      // TODO: Add appropriate OpenGraph image (1200x630px recommended)
      // {
      //   url: "/images/path/to/image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "TerraLuma Capital latest news and press releases",
      // },
    ],
  },
};

const articles = [
  {
    title:
      "TerraLuma Capital Announces New Regional Lending Collaborations to Strengthen Rural Business and Land Development",
    href: "https://markets.businessinsider.com/news/stocks/terraluma-capital-announces-new-regional-lending-collaborations-to-strengthen-rural-business-and-land-development-1035619110",
    description:
      "TerraLuma Capital, a purpose-driven investment platform focused on supporting small business continuity and rural land development, has announced partnerships with regional lenders across Tennessee, North Georgia, and North Alabama. The collaboration aims to expand responsible capital access for rural service and manufacturing businesses while reinforcing the homestead land development pipeline that continues to grow alongside rising demand for rural living. As migration toward rural and exurban communities accelerates, families are seeking safer and more self-sufficient lifestyles.",
    date: "Dec 4, 2025",
    datetime: "2025-12-04",
    category: { title: "Press Release", href: "#" },
    source: "Business Insider",
    image: "/images/stock/1.png",
  },
  {
    title:
      "TerraLuma Capital Partners with Regional Lenders to Preserve Rural Businesses and Support Growing Homestead Demand",
    href: "https://markets.businessinsider.com/news/stocks/terraluma-capital-announces-new-regional-lending-collaborations-to-strengthen-rural-business-and-land-development-1035619110",
    description:
      "As thousands of rural businesses face closure due to retiring owners with no succession plans, TerraLuma Capital's new partnerships with regional lenders across Tennessee, North Georgia, and North Alabama provide structured transition pathways. These collaborations preserve essential rural businesses while supporting the rising demand for homestead-ready land, creating a connected economic system that strengthens rural community stability.",
    date: "Dec 4, 2025",
    datetime: "2025-12-04",
    category: { title: "Press Release", href: "#" },
    source: "Business Insider",
    image: "/images/stock/5.png",
  },
  {
    title:
      "TerraLuma Capital Announces New Regional Lending Collaborations to Strengthen Rural Business and Land Development",
    href: "https://www.marketwatch.com/press-release/terraluma-capital-announces-new-regional-lending-collaborations-to-strengthen-rural-business-and-land-development-e4b95bd9",
    description:
      "TerraLuma Capital, a purpose-driven investment platform focused on supporting small business continuity and rural land development, has announced partnerships with regional lenders across Tennessee, North Georgia, and North Alabama. The collaboration aims to expand responsible capital access for rural service and manufacturing businesses while reinforcing the homestead land development pipeline that continues to grow alongside rising demand for rural living.",
    date: "Dec 4, 2025",
    datetime: "2025-12-04",
    category: { title: "Press Release", href: "#" },
    source: "MarketWatch",
    image: "/images/stock/3.png",
  },
  {
    title:
      "TerraLuma Capital Announces New Regional Lending Collaborations to Strengthen Rural Business and Land Development",
    href: "https://finance.yahoo.com/news/terraluma-capital-announces-regional-lending-174800834.html",
    description:
      "TerraLuma Capital, a purpose-driven investment platform focused on supporting small business continuity and rural land development, has announced partnerships with regional lenders across Tennessee, North Georgia, and North Alabama. The collaboration aims to expand responsible capital access for rural service and manufacturing businesses while reinforcing the homestead land development pipeline that continues to grow alongside rising demand for rural living.",
    date: "Dec 4, 2025",
    datetime: "2025-12-04",
    category: { title: "Press Release", href: "#" },
    source: "Yahoo Finance",
    image: "/images/stock/4.png",
  },
];

export default function ArticlePage() {
  return (
    <div className="bg-[#f9f5ee] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-tl-brown sm:text-5xl font-serif">
            Latest News
          </h2>
          <p className="mt-2 text-lg/8 text-tl-brown/80">
            Stay updated with TerraLuma Capital&apos;s latest developments and
            initiatives.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles.map((article, index) => (
            <article
              key={index}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <Image
                  alt=""
                  src={article.image}
                  width={800}
                  height={600}
                  className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-tl-brown/10" />
              </div>
              <div className="flex max-w-xl grow flex-col justify-between w-full">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={article.datetime}
                    className="text-tl-brown/70"
                  >
                    {article.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-tl-gold/20 px-3 py-1.5 font-medium text-tl-brown">
                    {article.category.title}
                  </span>
                  <span className="text-tl-brown/60">{article.source}</span>
                </div>
                <div className="group relative grow">
                  <h3 className="mt-3 text-lg/6 font-semibold text-tl-brown group-hover:text-tl-brown/80 font-serif">
                    <a
                      href={article.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="absolute inset-0" />
                      {article.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-4 text-sm/6 text-tl-brown/80">
                    {article.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-tl-brown px-4 py-2.5 text-sm font-semibold text-tl-gold shadow-sm hover:bg-tl-brown/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tl-brown transition-colors"
                  >
                    Read Article →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
