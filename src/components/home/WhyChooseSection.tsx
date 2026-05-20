// components/home/WhyChooseSection.tsx

"use client";

import {
  Banknote,
  LifeBuoy,
  MonitorSmartphone,
  Network,
  type LucideIcon,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

import Container from "@/components/Container";

interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
} satisfies Variants;

const features: FeatureItem[] = [
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
    <section className="overflow-hidden bg-white py-12 md:py-16 lg:py-24">
      <Container>
        <div className="flex flex-col items-center">
          {/* HEADING */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-[980px] text-center font-inter text-fluid-hero font-light text-black"
          >
            Why Businesses Choose{" "}
            <span className="font-semibold text-[#39A935]">hbox pay</span>
          </motion.h2>

          {/* CARDS */}
          <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    y: 45,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-[24px] bg-[#F5F5F5] p-6 transition-all duration-300"
                >
                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 3,
                    }}
                    transition={{
                      duration: 0.3,
                      ease,
                    }}
                    className="flex h-[56px] w-[56px] items-center justify-center rounded-[16px] bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)]"
                  >
                    <Icon className="h-[28px] w-[28px] stroke-[2] text-black" />
                  </motion.div>

                  {/* CONTENT */}
                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + index * 0.05,
                      ease,
                    }}
                    className="mt-10 font-inter text-fluid-subtitle font-semibold text-black"
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + index * 0.05,
                      ease,
                    }}
                    className="mt-4 font-inter text-fluid-body font-normal tracking-[-0.03em] text-black/70"
                  >
                    {feature.description}
                  </motion.p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}