"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "../Container";

const categories = [
  "All",
  "Payment Technology",
  "Restaurant Solutions",
  "Retail Operations",
  "Business Growth",
  "Hardware & Devices",
] as const;

type Category = (typeof categories)[number];

const insightsData: Record<
  Category,
  {
    tag: string;
    title: string;
    description: string;
    image: string;
    href: string;
  }
> = {
  All: {
    tag: "Industry",
    title: "Five vertical SaaS insights from Sessions 2026",
    description:
      "Explore modern payment technology, POS solutions, restaurant innovation, retail operations, and business growth insights designed for today’s business operations.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/Rectangle%20161123935.png",
    href: "/blog",
  },
  "Payment Technology": {
    tag: "Payment Technology",
    title: "Smarter Payment Tools for Modern Businesses",
    description:
      "Learn how secure payment processing, contactless payments, digital wallets, and modern transaction systems help businesses serve customers faster and more confidently.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/Rectangle%20161123935.png",
    href: "/blog/payment-technology",
  },
  "Restaurant Solutions": {
    tag: "Restaurant Solutions",
    title: "How Restaurants Can Improve Daily Operations",
    description:
      "Discover POS tools, kitchen workflows, payment solutions, and operational systems designed to help restaurants improve speed, accuracy, and customer experience.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/Rectangle%20161123935.png",
    href: "/blog/restaurant-solutions",
  },
  "Retail Operations": {
    tag: "Retail Operations",
    title: "Retail Systems That Simplify Store Management",
    description:
      "Explore how inventory tools, reporting dashboards, checkout systems, and customer management solutions support smoother retail operations.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/Rectangle%20161123935.png",
    href: "/blog/retail-operations",
  },
  "Business Growth": {
    tag: "Business Growth",
    title: "Practical Growth Insights for Small Businesses",
    description:
      "Find helpful strategies for improving operations, increasing efficiency, managing customers, and choosing technology that supports long-term business growth.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/Rectangle%20161123935.png",
    href: "/blog/business-growth",
  },
  "Hardware & Devices": {
    tag: "Hardware & Devices",
    title: "Choosing the Right Hardware for Your Business",
    description:
      "Understand POS devices, payment terminals, kiosks, kitchen displays, and hardware systems that help businesses operate more efficiently.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/Rectangle%20161123935.png",
    href: "/blog/hardware-devices",
  },
};

export default function InsightsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const activeInsight = useMemo(() => {
    return insightsData[activeCategory];
  }, [activeCategory]);

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Green Vector Background */}
      <img
        src="https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/Vector%20353.png"
        alt=""
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-full w-full object-cover opacity-80"
      />

      <Container className="relative z-10">
        {/* Header */}
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-16">
          <h2 className="max-w-[520px] text-[34px] font-normal leading-[1.05] tracking-[-0.04em] text-[#1f1f1f] sm:text-[42px] lg:text-[52px]">
            Insights for Modern{" "}
            <span className="block font-semibold text-[#2C7A27]">
              Business Operations
            </span>
          </h2>

          <p className="max-w-[610px] text-[15px] leading-[1.7] text-[#222222] md:pt-2 lg:text-[17px]">
            Explore payment technology trends, POS solutions, restaurant
            innovation, retail operations, and business growth insights from
            HBOX Pay.
          </p>
        </div>

        {/* Featured Card */}
        <div className="mx-auto mt-10 max-w-[1090px] rounded-[22px] border border-black/5 bg-white p-3 shadow-[0_18px_70px_rgba(0,0,0,0.08)]">
          <div className="grid overflow-hidden rounded-[18px] bg-white md:grid-cols-[1.05fr_1fr]">
            <div className="flex flex-col justify-center px-5 py-7 sm:px-8 lg:px-10">
              <span className="mb-3 text-[13px] font-semibold text-[#2C9F35]">
                {activeInsight.tag}
              </span>

              <h3 className="max-w-[490px] text-[26px] font-bold leading-[1.06] tracking-[-0.035em] text-black sm:text-[32px] lg:text-[36px]">
                {activeInsight.title}
              </h3>

              <p className="mt-4 max-w-[490px] text-[13px] leading-[1.45] text-black/65 sm:text-[14px]">
                {activeInsight.description}
              </p>

              <Link
                href={activeInsight.href}
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#BFEFA3] px-4 py-2 text-[12px] font-semibold text-black transition hover:bg-[#AEE98D]"
              >
                Read more
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="min-h-[300px] p-2 md:min-h-[400px]">
              <div className="h-full w-full overflow-hidden rounded-[16px]">
                <img
                  src={activeInsight.image}
                  alt={activeInsight.title}
                  className="h-full w-full object-cover transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {categories.map((item) => {
            const active = activeCategory === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setActiveCategory(item)}
                className={`rounded-full px-4 py-2 text-[12px] font-medium transition duration-300 ${
                  active
                    ? "bg-[#BFEFA3] text-[#1F641F]"
                    : "bg-[#F3F3F3] text-black hover:bg-[#EAEAEA]"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}