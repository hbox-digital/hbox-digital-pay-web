// components/common/PerformanceGridSection.tsx

"use client";

import { motion } from "framer-motion";
import Container from "../Container";
import {
  Zap,
  Smartphone,
  ShieldCheck,
  Workflow,
  Wifi,
} from "lucide-react";

const icons = {
  zap: Zap,
  smartphone: Smartphone,
  shield: ShieldCheck,
  workflow: Workflow,
  wifi: Wifi,
};

interface FeatureCard {
  title: string;
  description: string;
  icon: keyof typeof icons;
}

interface PerformanceGridSectionProps {
  title: string;
  highlightText: string;
  description: string;
  cards: FeatureCard[];
}

export default function PerformanceGridSection({
  title,
  highlightText,
  description,
  cards,
}: PerformanceGridSectionProps) {
  return (
    <section className="overflow-hidden bg-[#Fff] py-7 sm:py-8 md:py-10 lg:py-12">
      <Container>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto text-center"
        >
          <h2
            className="
              font-inter
              text-[36px]
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

          <p
            className="
              mx-auto
              mt-4
              max-w-[1000px]
              font-inter
              text-[15px]
              font-normal
              leading-[1.6]
              tracking-[-0.03em]
              text-black

              sm:text-[16px]
              lg:text-[24px]
              md:text-[20px]
            "
          >
            {description}
          </p>
        </motion.div>

        {/* GRID */}
        {/* GRID */}
<div className="mt-14 flex flex-wrap justify-center gap-5">
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
          w-full
          rounded-[26px]
          bg-[#F5F5F5]
          p-5

          sm:w-[320px]

          lg:w-[380px]
          lg:min-h-[250px]

          xl:w-[390px]
          2xl:w-[400px]
        "
      >
        {/* ICON */}
        <div
          className="
            flex
            h-[54px]
            w-[54px]
            items-center
            justify-center
            rounded-[16px]
            bg-[linear-gradient(180deg,#98EA6C_0%,#D8F6C7_100%)]
          "
        >
          <Icon
            className="
              h-[24px]
              w-[24px]
              stroke-[2.2]
              text-black
            "
          />
        </div>

        {/* TITLE */}
        <h3
          className="
            mt-6
            font-inter
            text-[20px]
            font-medium
            leading-[1.2]
            tracking-[-0.04em]
            text-black

            md:text-[26px]

            lg:text-[28px]
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
            leading-[1.5]
            tracking-[-0.03em]
            text-black

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