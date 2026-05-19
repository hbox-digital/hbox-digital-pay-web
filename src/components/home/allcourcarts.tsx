"use client";

import { motion, type Variants } from "framer-motion";

import CoreServiceCard from "./CoreServiceCard";
import Container from "../Container";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
} satisfies Variants;

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.15,
      ease,
    },
  },
} satisfies Variants;

const services = [
  {
    title: "POS Software",
    subtitle: "CORE SERVICES",
    description:
      "Manage sales, billing, staff activity, and daily operations through a fast and reliable POS system built for modern businesses.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624934.png",
    imagePosition: "left",
    href:"/pos-software"
  },
  {
    title: "Payment Processing",
    subtitle: "CORE SERVICES",
    description:
      "Accept card payments, QR transactions, and digital wallets with secure processing designed for smooth everyday transactions.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624936.png",
    imagePosition: "right",
    href:"/payment-processing"
  },
  {
    title: "Hardware Solutions",
    subtitle: "CORE SERVICES",
    description:
      "Modern POS hardware designed for fast checkouts, seamless operations, and reliable performance across busy business environments.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624939.png",
    imagePosition: "left",
    href:"/hardware-solutions"
  },
  {
    title: "Inventory Management",
    subtitle: "BUSINESS MANAGEMENT SERVICES",
    description:
      "Track stock levels, monitor product movement, and manage inventory in real time with better operational visibility.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624940.png",
    imagePosition: "right",
    href:"/inventory-management"
  },
  {
    title: "Analytics & Reporting",
    subtitle: "BUSINESS MANAGEMENT SERVICES",
    description:
      "Access clear business insights, sales reports, and performance data that help teams make smarter business decisions.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624946.png",
    imagePosition: "left",
    href:"/analytics-reporting"
  },
  {
    title: "Employee Management",
    subtitle: "BUSINESS MANAGEMENT SERVICES",
    description:
      "Manage staff schedules, permissions, attendance, and daily activity from one connected business management platform.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624948.png",
    imagePosition: "right",
    href:"/employee-management"
  },
  {
    title: "Multi Store Management",
    subtitle: "BUSINESS MANAGEMENT SERVICES",
    description:
      "Monitor multiple locations, manage operations centrally, and keep your business connected across every store.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624947.png",
    imagePosition: "left",
    href:"/multi-store-management"
  },
  {
    title: "Customer Management (CRM)",
    subtitle: "GROWTH SERVICES",
    description:
      "Build stronger customer relationships with tools designed for customer tracking, engagement, and repeat business growth.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624949.png",
    imagePosition: "right",
    href:"customer-management-crm"
  },
  {
    title: "Loyalty Programs",
    subtitle: "BUSINESS MANAGEMENT SERVICES",
    description:
      "Create rewarding customer experiences with loyalty programs that encourage repeat visits and long term retention.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624952.png",
    imagePosition: "left",
    href:"/loyalty-programs"
  },
  {
    title: "E-commerce Integration",
    subtitle: "GROWTH SERVICES",
    description:
      "Connect your online store with payments, inventory, and business operations through one seamless platform.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624953.png",
    imagePosition: "right",
    href:"/ecommerce-integration"
  },
  {
    title: "Invoicing & Accounting",
    subtitle: "ADVANCED SERVICES",
    description:
      "Generate invoices, manage transactions, and simplify accounting workflows with accurate financial reporting tools.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624956.png",
    imagePosition: "left",
    href:"/invoicing-accounting"
  },
  {
    title: "Business Financing",
    subtitle: "ADVANCED SERVICES",
    description:
      "Access flexible business financing solutions designed to support cash flow, expansion, and long term business growth.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624957.png",
    imagePosition: "right",
    href:"/business-financing"
  },
] as const;

export default function Allcourcarts() {
  return (
    <>
      <section className="overflow-hidden bg-white py-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
              className="max-w-[820px]"
            >
              <h2 className="font-inter text-fluid-hero font-light text-black">
                Powerful Solutions
                <br />
                <span className="font-semibold text-[#53B033]">
                  Built for Your Business
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="max-w-[720px] lg:ml-auto"
            >
              <p className="font-inter text-fluid-subtitle font-normal text-black/80">
                From payments to operations, HBOXPay gives businesses the tools
                to manage sales, simplify workflows, and grow with confidence.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{
            opacity: 0,
            x: service.imagePosition === "left" ? -60 : 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.03,
            ease,
          }}
        >
          <CoreServiceCard
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
            image={service.image}
            imagePosition={service.imagePosition}
            href={service.href}
          />
        </motion.div>
      ))}
    </>
  );
}