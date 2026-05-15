// components/common/IndustriesSupportGrid.tsx

"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import {
  Store,
  UtensilsCrossed,
  Hotel,
  ShoppingBasket,
  BriefcaseBusiness,
  Building2,
} from "lucide-react";

const icons = {
  store: Store,
  restaurant: UtensilsCrossed,
  hotel: Hotel,
  supermarket: ShoppingBasket,
  service: BriefcaseBusiness,
  building: Building2,
};

interface IndustryCard {
  title: string;
  icon: keyof typeof icons;
}

interface IndustriesSupportGridProps {
  title: string;
  highlightText: string;
  description: string;
  industries: IndustryCard[];
}

export default function IndustriesSupportGrid({
  title,
  highlightText,
  description,
  industries,
}: IndustriesSupportGridProps) {
  return (
    <section className="overflow-hidden bg-[#Fff] py-10 sm:py-12 md:py-14 lg:py-16">
      <Container>
        {/* HEADER */}
        <motion.div
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
          }}
          className="mx-auto max-w-[900px] text-center"
        >
          <h2
            className="
              font-inter
              text-[36px]
              font-light
              leading-[1.1]
              tracking-[-0.04em]
              text-black

              md:text-[42px]
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
              max-w-[760px]
              font-inter
              text-[15px]
              font-normal
              leading-[1.5]
              tracking-[-0.03em]
              text-black/80

              md:text-[18px]
            "
          >
            {description}
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = icons[industry.icon];

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -4,
                }}
                className="
                  flex
                  items-center
                  gap-5
                  rounded-[22px]
                  bg-[#ECECEC]
                  p-5
                "
              >
                {/* ICON BOX */}
                <div
                  className="
                    flex
                    h-[56px]
                    w-[56px]
                    shrink-0
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
                      stroke-[2]
                      text-black
                    "
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    font-inter
                    text-[18px]
                    font-medium
                    leading-[1.3]
                    tracking-[-0.03em]
                    text-black

                    md:text-[22px]
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