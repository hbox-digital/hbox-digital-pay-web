// components/common/IndustriesSupportSection.tsx

"use client";

import { motion } from "framer-motion";
import Container from "../Container";
import {
  Store,
  UtensilsCrossed,
  Coffee,
  ShoppingBasket,
  Hotel,
  BriefcaseBusiness,
  Building2,
  TentTree,
} from "lucide-react";

const icons = {
  store: Store,
  restaurant: UtensilsCrossed,
  cafe: Coffee,
  supermarket: ShoppingBasket,
  hotel: Hotel,
  service: BriefcaseBusiness,
  enterprise: Building2,
  event: TentTree,
};

interface IndustryItem {
  title: string;
  icon: keyof typeof icons;
}

interface IndustriesSupportSectionProps {
  title: string;
  highlightText: string;
  description: string;
  industries: IndustryItem[];
}

export default function IndustriesSupportSection({
  title,
  highlightText,
  description,
  industries,
}: IndustriesSupportSectionProps) {
  return (
    <section className="overflow-hidden bg-[#Fff] py-14 sm:py-16 md:py-20 lg:py-24">
      <Container>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[760px] text-center"
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

          <p
            className="
              mx-auto
              mt-4
              max-w-[560px]
              font-inter
              text-[15px]
              font-normal
              leading-[1.5]
              tracking-[-0.03em]
              text-black

              sm:text-[16px]

              md:text-[20px]
            "
          >
            {description}
          </p>
        </motion.div>

        {/* GRID */}
        <div
          className="
            mx-auto
            mt-14
            grid
            max-w-[980px]
            grid-cols-2
            gap-4

            sm:grid-cols-3

            lg:grid-cols-4
          "
        >
          {industries.map((industry, index) => {
            const Icon = icons[industry.icon];

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
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="
                  flex
                  min-h-[180px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[22px]
                  bg-[#F5F5F5]
                  p-5
                  text-center
                  transition-all
                  duration-300
                "
              >
                {/* ICON */}
                <div
                  className="
                    flex
                    h-[58px]
                    w-[58px]
                    items-center
                    justify-center
                    rounded-[18px]
                    bg-[linear-gradient(180deg,#98EA6C_0%,#D8F6C7_100%)]
                  "
                >
                  <Icon
                    className="
                      h-[28px]
                      w-[28px]
                      stroke-[2]
                      text-black
                    "
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-5
                    font-inter
                    text-[15px]
                    font-medium
                    leading-[1.35]
                    tracking-[-0.03em]
                    text-black

                    sm:text-[16px]

                    md:text-[18px]
                  "
                >
                  {industry.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}