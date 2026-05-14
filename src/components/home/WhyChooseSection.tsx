// components/home/WhyChooseSection.tsx

"use client";

import Container from "@/components/Container";
import {
  MonitorSmartphone,
  Network,
  Banknote,
  LifeBuoy,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Easy to Use",
    description:
      "Simple tools and a clean interface built for fast onboarding and daily operations.",
    icon: MonitorSmartphone,
  },
  {
    title: "Scalable Solution",
    description:
      "Built to support growing businesses across single and multiple store locations.",
    icon: Network,
  },
  {
    title: "Affordable Pricing",
    description:
      "Flexible pricing plans designed for startups, growing brands, and established businesses.",
    icon: Banknote,
  },
  {
    title: "Dedicated Support",
    description:
      "Reliable support whenever your business needs guidance, setup assistance, or technical help.",
    icon: LifeBuoy,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="overflow-hidden bg-[#Fff] py-12 md:py-16 lg:py-24">
      <Container>
        <div className="flex flex-col items-center">
          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-center text-[38px] font-light leading-[100%] tracking-[-0.04em] text-black sm:text-[48px] md:text-[60px] md:leading-[68px]"
          >
            Why Businesses Choose{" "}
            <span className="font-semibold text-[#39A935]">
              HBOXPay
            </span>
          </motion.h2>

          {/* CARDS */}
          <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-[24px] bg-[#F5F5F5] p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 3,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="flex h-[56px] w-[56px] items-center justify-center rounded-[16px] bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)]"
                  >
                    <Icon className="h-[28px] w-[28px] stroke-[2] text-black" />
                  </motion.div>

                  {/* CONTENT */}
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15,
                    }}
                    className="mt-10 text-[24px] font-semibold leading-[100%] tracking-[-0.04em] text-black"
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                    }}
                    className="mt-4 text-[15px] leading-[1.45] tracking-[-0.03em] text-black/70"
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}