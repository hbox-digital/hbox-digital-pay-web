// components/sections/HardwareSystemFeatures.tsx

"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Monitor,
  CreditCard,
  Receipt,
  Wifi,
  Utensils,
  Settings,
  Workflow,
  ShieldCheck,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Interactive Touchscreen Display",
    description:
      "Large responsive touchscreen designed for smooth customer navigation, product browsing, and simplified self ordering experiences.",
    icon: Monitor,
  },
  {
    title: "Integrated Payment Terminal",
    description:
      "Built-in payment system supporting secure card transactions, contactless payments, digital wallets, and modern payment methods.",
    icon: CreditCard,
  },
  {
    title: "Built In Receipt Printer",
    description:
      "Integrated receipt printing functionality designed for faster order confirmation and smoother customer transactions.",
    icon: Receipt,
  },
  {
    title: "Contactless Payment Support",
    description:
      "Support tap to pay transactions and digital payment experiences for faster and more convenient customer checkouts.",
    icon: Wifi,
  },
  {
    title: "Self Ordering Functionality",
    description:
      "Allows customers to browse menus, customize orders, and complete transactions independently through a user friendly interface.",
    icon: Utensils,
  },
  {
    title: "Flexible Mounting Options",
    description:
      "Designed to support different business environments through flexible kiosk placement and mounting configurations.",
    icon: Settings,
  },
  {
    title: "Optimized Customer Flow",
    description:
      "Built to reduce queues, improve ordering speed, and create a more organized customer movement during busy operating hours.",
    icon: Workflow,
  },
  {
    title: "Modern & Durable Design",
    description:
      "Engineered for daily commercial use with a sleek and professional hardware design suitable for modern business environments.",
    icon: ShieldCheck,
  },
];

export default function HardwareSystemFeatures() {
  return (
    <section className="bg-[#F5F5F5] py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[1.75rem] font-normal leading-tight tracking-[-0.04em] text-black md:text-[2.625rem]">
            Hardware &{" "}
            <span className="font-semibold text-[#2F7D22]">
              System Features
            </span>
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className="group rounded-[16px] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* ICON */}
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] bg-[#A3EC68] transition-all duration-300 group-hover:scale-105">
                  <Icon className="h-[24px] w-[24px] text-[#1F6217]" />
                </div>

                {/* CONTENT */}
                <div className="mt-8">
                  <h3 className="max-w-[180px] text-[1rem] font-semibold leading-[1.12] tracking-[-0.04em] text-black">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-[0.78rem] leading-[1.25] tracking-[-0.03em] text-black/75">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}