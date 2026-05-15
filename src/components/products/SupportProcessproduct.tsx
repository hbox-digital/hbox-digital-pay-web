// components/common/SupportProcessSection.tsx

"use client";

import { motion } from "framer-motion";
import Container from "../Container";
import {
  Cpu,
  Zap,
  Layers3,
  Building2,
} from "lucide-react";

const icons = {
  performance: Cpu,
  transaction: Zap,
  integration: Layers3,
  business: Building2,
};

interface ProcessCard {
  title: string;
  description: string;
  icon: keyof typeof icons;
}

interface SupportProcessSectionProps {
  title: string;
  highlightText: string;
  description?: string;
  cards: ProcessCard[];
  backgroundImage?: string;
}

export default function SupportProcessSectionpro({
  title,
  highlightText,
  description,
  cards,
  backgroundImage = "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625000.png",
}: SupportProcessSectionProps) {
  return (
    <section className="overflow-hidden py-8 sm:py-10 md:py-14 lg:py-16"
              style={{
            backgroundImage: `url("${backgroundImage}")`,
            backgroundSize: "cover",
            backgroundPosition: "100% 100%",
          }}>
      <Container>
        <div
          className="
            relative
            overflow-hidden
            

            px-5
            py-10

            sm:px-8
            sm:py-14

            md:px-10
            md:py-10

            lg:px-10
            lg:py-12
          "

        >

         

          {/* CONTENT */}
          <div className="relative z-10">
            {/* HEADING */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto  text-center"
            >
              <h2
                className="
                  font-inter
                  text-[34px]
                  font-light
                  leading-[40px]
                  tracking-[-0.04em]
                  text-white

                  sm:text-[48px]
                  sm:leading-[54px]

                  md:text-[clamp(2rem,4vw,2.625rem)]
                  md:leading-[48px]
                "
              >
                {title}{" "}

                <span className="font-semibold text-[#A3EC6B]">
                  {highlightText}
                </span>
              </h2>

              {description && (
                <p
                  className="
                    mx-auto
                    mt-5
                    max-w-[900px]

                    font-inter
                    text-[15px]
                    font-normal
                    leading-[1.7]
                    tracking-[-0.03em]
                    text-white

                    sm:text-[18px]

                    md:text-[24px]
                    md:leading-[42px]
                  "
                >
                  {description}
                </p>
              )}
            </motion.div>

            {/* CARDS */}
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {cards.map((card, index) => {
                const Icon = icons[card.icon];

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 40,
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
                      rounded-[24px]
                      border
                      border-white/10
                      bg-white/10
                      p-5
                      backdrop-blur-md

                      sm:p-6

                      lg:min-h-[240px]
                    "
                  >
                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-[56px]
                        w-[56px]
                        items-center
                        justify-center
                        rounded-[16px]
                        bg-[linear-gradient(180deg,#98EA6C_0%,#D8F6C7_100%)]
                      "
                    >
                      <Icon
                        className="
                          h-[26px]
                          w-[26px]
                          stroke-[2.2]
                          text-black
                        "
                      />
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                        mt-5
                        font-inter
                        text-[20px]
                        font-medium
                        leading-[1.25]
                        tracking-[-0.04em]
                        text-white

                        md:text-[24px]
                      "
                    >
                      {card.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-4
                        font-inter
                        text-[14px]
                        font-normal
                        leading-[1.55]
                        tracking-[-0.03em]
                        text-white

                        md:text-[20px]
                      "
                    >
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}