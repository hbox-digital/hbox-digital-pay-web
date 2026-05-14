// components/common/SupportProcessSection.tsx

"use client";

import { motion } from "framer-motion";
import Container from "../Container";
import {
  Headphones,
  Users,
  BadgeCheck,
} from "lucide-react";

const icons = {
  headphones: Headphones,
  users: Users,
  badgeCheck: BadgeCheck,
};

interface ProcessCard {
  title: string;
  description: string;
  icon: keyof typeof icons;
}

interface SupportProcessSectionProps {
  title: string;
  highlightText: string;
  description: string;
  cards: ProcessCard[];
}

export default function SupportProcessSection({
  title,
  highlightText,
  description,
  cards,
}: SupportProcessSectionProps) {
  return (
    <section className="overflow-hidden bg-[#Fff] py-14 sm:py-16 md:py-20 lg:py-24">
      <Container>
        {/* TOP */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <h2
              className="
                font-inter
                text-[38px]
                font-light
                leading-[42px]
                tracking-[-0.04em]
                text-black

                sm:text-[48px]
                sm:leading-[54px]

                md:text-[60px]
                md:leading-[68px]
              "
            >
              {title}{" "}

              <span className="font-semibold text-[#3A922B]">
                {highlightText}
              </span>
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="lg:col-span-6"
          >
            <p
              className="
                max-w-[860px]
                font-inter
                text-[16px]
                font-normal
                leading-[1.6]
                tracking-[-0.03em]
                text-black

                sm:text-[20px]

                md:text-[24px]
                md:leading-[36px]
              "
            >
              {description}
            </p>
          </motion.div>
        </div>

        {/* CARDS */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = icons[card.icon];

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-[30px]
                  bg-[#ECECEC]
                  p-6

                  sm:p-8

                  md:min-h-[340px]
                "
              >
                {/* ICON */}
                <div
                  className="
                    flex
                    h-[92px]
                    w-[92px]
                    items-center
                    justify-center
                    rounded-[24px]
                    bg-[linear-gradient(180deg,#98EA6C_0%,#D8F6C7_100%)]
                  "
                >
                  <Icon
                    className="
                      h-[38px]
                      w-[38px]
                      stroke-[2]
                      text-[#1D1D1D]
                    "
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-10
                    font-inter
                    text-[20px]
                    md:text-[25px]
                    font-medium
                    leading-[1.1]
                    tracking-[-0.04em]
                    text-black

                    lg:text-[28px]
                  "
                >
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-5
                    font-inter
                    text-[16px]
                    font-normal
                    leading-[1.5]
                    tracking-[-0.03em]
                    text-black/80

                    md:text-[18px]
                  "
                >
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}