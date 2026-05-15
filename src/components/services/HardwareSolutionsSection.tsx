// components/common/HardwareSolutionsSection.tsx

"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import { useState } from "react";

interface HardwareItem {
  name: string;
  description: string;
  idealFor: string[];
  keyBenefits: string[];
}

interface HardwareSolutionsSectionProps {
  title: string;
  highlightText: string;
  hardware: HardwareItem[];
}

export default function HardwareSolutionsSection({
  title,
  highlightText,
  hardware,
}: HardwareSolutionsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeHardware = hardware[activeIndex];

  return (
    <section className="overflow-hidden bg-[#Fff] py-10 sm:py-12 md:py-14 lg:py-16">
      <Container>
        {/* HEADER */}
        <motion.div
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
            duration: 0.7,
          }}
        >
          <h2
            className="
              font-inter
              text-[36px]
              font-light
              leading-[1.1]
              tracking-[-0.04em]
              text-black

              md:text-[56px]
            "
          >
            {title}{" "}

            <span className="font-semibold text-[#3A922B]">
              {highlightText}
            </span>
          </h2>

          <div className="mt-6 h-px w-full bg-black/10" />
        </motion.div>

        {/* CONTENT */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* LEFT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="
              lg:col-span-4
              lg:border-r
              lg:border-black/10
              lg:pr-8
            "
          >
            <div className="space-y-4">
              {hardware.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    flex
                    h-[72px]
                    w-full
                    items-center
                    rounded-full
                    px-7
                    text-left
                    font-inter
                    text-[18px]
                    font-medium
                    transition-all
                    duration-300

                    ${
                      activeIndex === index
                        ? "bg-[linear-gradient(90deg,#98EA6C_0%,#EEF7E8_100%)] text-black"
                        : "bg-[#ECECEC] text-black hover:bg-[#E5E5E5]"
                    }
                  `}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            key={activeIndex}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="lg:col-span-8"
          >
            {/* DESCRIPTION */}
            <p
              className="
                max-w-[900px]
                font-inter
                text-[15px]
                font-normal
                leading-[1.7]
                tracking-[-0.03em]
                text-black/85

                md:text-[18px]
              "
            >
              {activeHardware.description}
            </p>

            {/* LISTS */}
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              {/* IDEAL FOR */}
              <div>
                <h3
                  className="
                    font-inter
                    text-[22px]
                    font-semibold
                    leading-[100%]
                    tracking-[-0.03em]
                    text-black
                  "
                >
                  Ideal For
                </h3>

                <ul className="mt-5 space-y-3">
                  {activeHardware.idealFor.map((item, index) => (
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

                        md:text-[16px]
                      "
                    >
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* BENEFITS */}
              <div>
                <h3
                  className="
                    font-inter
                    text-[22px]
                    font-semibold
                    leading-[100%]
                    tracking-[-0.03em]
                    text-black
                  "
                >
                  Key Benefits
                </h3>

                <ul className="mt-5 space-y-3">
                  {activeHardware.keyBenefits.map((item, index) => (
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

                        md:text-[16px]
                      "
                    >
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}