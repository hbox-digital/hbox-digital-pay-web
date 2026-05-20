// components/common/SingleFeatureSection.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/Container";

interface SingleFeatureSectionProps {
  image: string;
  eyebrow: string;
  title: string;
  highlightText: string;
  description: string;
  listTitle: string;
  points: string[];
}

export default function SingleFeatureSection({
  image,
  eyebrow,
  title,
  highlightText,
  description,
  listTitle,
  points,
}: SingleFeatureSectionProps) {
  return (
    <section className="overflow-hidden bg-[#Fff] py-10 sm:py-12 md:py-14 lg:py-16">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="lg:col-span-6"
          >
            <div className="relative h-[240px] overflow-hidden rounded-[22px] sm:h-[320px] lg:h-[520px]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="lg:col-span-6"
          >
            {/* EYEBROW */}
            <span
              className="
                font-inter
                text-[16px]
                font-medium
                leading-[100%]
                tracking-[-0.03em]
                text-[#3A922B]

                md:text-[18px]
              "
            >
              {eyebrow}
            </span>

            {/* TITLE */}
            <h2
              className="
                mt-3
                font-inter
                text-[34px]
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

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
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
              {description}
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
                {listTitle}
              </h3>

              <ul className="mt-5 space-y-3">
                {points.map((point, index) => (
                  <li
                    key={index}
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
          </motion.div>
        </div>
      </Container>
    </section>
  );
}