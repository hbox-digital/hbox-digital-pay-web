"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import Container from "../Container";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
} satisfies Variants;

const offers = [
  {
    title: "POS\nSoftware",
    image: "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/image%20973%20(1).png",
    href: "/services/pos-software",
  },
  {
    title: "Payment\nProcessing",
    image: "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/image%20962%20(1).png",
    href: "/services/payment-processing",
  },
  {
    title: "Hardware\nSolutions",
    image: "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/image%20964%20(1).png",
    href: "/services/hardware-solutions",
  },
  {
    title: "Inventory\nManagement",
    image: "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/image%20965%20(1).png",
    href: "/services/inventory-management",
  },
  {
    title: "Analytics &\nReporting",
    image: "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/Group%201597884664%20(1).png",
    href: "/services/analytics-reporting",
  },
  {
    title: "Employee\nManagement",
    image: "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/image%20967%20(1).png",
    href: "/services/employee-management",
  },
  {
    title: "Multi Store\nManagement",
    image: "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/image%20966%20(1).png",
    href: "/services/multi-store-management",
  },
  {
    title: "Customer\nManagement (CRM)",
    image: "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/image%20971%20(1).png",
    href: "/services/customer-management-crm",
  },
  {
    title: "Loyalty\nPrograms",
    image: "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/image%20968%20(1).png",
    href: "/services/loyalty-programs",
  },
  {
    title: "E-commerce\nIntegration",
    image: "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/image%20970%20(1).png",
    href: "/services/ecommerce-integration",
  },
  {
    title: "Invoicing &\nAccounting",
    image: "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/image%20974%20(1).png",
    href: "/services/invoicing-accounting",
  },
  {
    title: "Business\nFinancing",
    image: "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/image%20972%20(1).png",
    href: "/services/business-financing",
  },
];

export default function WhatWeOfferSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="mx-auto grid h-full max-w-7xl grid-cols-4 border-x border-black/[0.04]">
          <div className="border-r border-black/[0.04]" />
          <div className="border-r border-black/[0.04]" />
          <div className="border-r border-black/[0.04]" />
          <div />
        </div>

        <div className="absolute left-0 top-[96px] h-px w-full bg-black/[0.035]" />
        <div className="absolute left-0 bottom-[72px] h-px w-full bg-black/[0.035]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto text-center"
        >
          <h2 className="text-[32px] font-light leading-tight tracking-[-0.04em] text-[#171717] sm:text-[40px] md:text-[44px]">
            What{" "}
            <span className="font-semibold text-[#2F8429]">
              We Offer
            </span>
          </h2>
        </motion.div>
    <Container>
        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mx-auto mt-8 grid  grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {offers.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative flex h-[82px] items-center justify-between overflow-hidden rounded-[12px] bg-[#F4F4F4] px-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#EFEFEF] hover:shadow-md"
            >
              {/* Text */}
              <h3 className="whitespace-pre-line text-[16px] font-medium leading-[1.05] tracking-[-0.03em] text-black md:text-[17px]">
                {item.title}
              </h3>

              {/* Image */}
              <div className="relative h-[64px] w-[94px] shrink-0 transition duration-300 group-hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.title.replace("\n", " ")}
                  fill
                  className="object-contain object-right"
                />
              </div>

              {/* Hover Glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#A9EF7D]/0 via-[#A9EF7D]/0 to-[#A9EF7D]/10 opacity-0 transition duration-300 group-hover:opacity-100" />
            </Link>
          ))}
        </motion.div>
        </Container>
      </div>
    </section>
  );
}