// components/common/FeatureCardsSection.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/Container";

interface FeatureCard {
  image: string;
  eyebrow: string;
  title: string;
  highlightText: string;
  description: string;
  listTitle: string;
  points: string[];
}

interface FeatureCardsSectionProps {
  cards: FeatureCard[];
}

export default function FeatureCardsSection({
  cards,
}: FeatureCardsSectionProps) {
  return (
    <section className="overflow-hidden bg-[#fff] py-10 sm:py-12 md:py-14 lg:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          {cards.map((card, index) => (
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
              className="w-full"
            >
              {/* IMAGE */}
              <div className="relative h-[240px] overflow-hidden rounded-[24px] sm:h-[300px] lg:h-[260px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="mt-5">
                {/* EYEBROW */}
                <span
                  className="
                    font-inter
                    text-[18px]
                    font-medium
                    leading-[100%]
                    tracking-[-0.03em]
                    text-[#3A922B]
                  "
                >
                  {card.eyebrow}
                </span>

                {/* TITLE */}
                <h2
                  className="
                    mt-2
                    font-inter
                    text-[25px]
                    font-light
                    leading-[1.1]
                    tracking-[-0.04em]
                    text-black
                    md:text-[27px]
                    lg:text-[35px]
                  
                  "
                >
                  {card.title}{" "}

                  <span className="font-semibold text-[#3A922B]">
                    {card.highlightText}
                  </span>
                </h2>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-4
                    max-w-[720px]
                    font-inter
                    text-[15px]
                    font-normal
                    leading-[1.6]
                    tracking-[-0.03em]
                    text-black/85

                    md:text-[18px]
                  "
                >
                  {card.description}
                </p>

                {/* LIST */}
                <div className="mt-8">
                  <h3
                    className="
                      font-inter
                      text-[18px]
                      font-semibold
                      leading-[100%]
                      tracking-[-0.03em]
                      text-black
                    "
                  >
                    {card.listTitle}
                  </h3>

                  <ul className="mt-5 space-y-3">
                    {card.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="
                          flex
                          items-start
                          gap-2
                          font-inter
                          text-[15px]
                          font-normal
                          leading-[1.5]
                          tracking-[-0.03em]
                          text-black

                          md:text-[17px]
                        "
                      >
                        <span className="mt-[2px]">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}