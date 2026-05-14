// components/common/IndustriesSupportSection.tsx

"use client";

import { motion } from "framer-motion";
import Container from "../Container";
import {
  Store,
  UtensilsCrossed,
  BriefcaseBusiness,
  Building2,
} from "lucide-react";

const icons = {
  retail: Store,
  restaurant: UtensilsCrossed,
  service: BriefcaseBusiness,
  multiLocation: Building2,
};

interface IndustryCard {
  title: string;
  description: string;
  icon: keyof typeof icons;
}

interface IndustriesSupportSectionProps {
  title: string;
  highlightText: string;
  cards: IndustryCard[];
}

export default function IndustriesSupportSection({
  title,
  highlightText,
  cards,
}: IndustriesSupportSectionProps) {
  return (
    <section className="overflow-hidden bg-[#Fff] py-10 sm:py-12 md:py-16 lg:py-20">
      <Container>
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1000px] text-center"
        >
          <h2
            className="
              font-inter
              text-[38px]
              font-light
              leading-[42px]
              tracking-[-0.04em]
              text-black

              sm:text-[50px]
              sm:leading-[56px]

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

        {/* CARDS */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = icons[card.icon];

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-[28px]
                  bg-[#ECECEC]

                  px-6
                  py-6

                  sm:px-8
                  sm:py-8

                  md:min-h-[280px]
                "
              >
                {/* ICON */}
                <div
                  className="
                    flex
                    h-[82px]
                    w-[82px]
                    items-center
                    justify-center
                    rounded-[22px]
                    bg-[linear-gradient(180deg,#98EA6C_0%,#D8F6C7_100%)]
                  "
                >
                  <Icon
                    className="
                      h-[34px]
                      w-[34px]
                      stroke-[2]
                      text-black
                    "
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-8
                    font-inter
                    text-[28px]
                    font-medium
                    leading-[1.15]
                    tracking-[-0.04em]
                    text-black

                    sm:text-[34px]

                    md:text-[40px]
                  "
                >
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-5
                    max-w-[720px]

                    font-inter
                    text-[16px]
                    font-normal
                    leading-[1.5]
                    tracking-[-0.03em]
                    text-black/85

                    sm:text-[18px]

                    md:text-[22px]
                    md:leading-[34px]
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