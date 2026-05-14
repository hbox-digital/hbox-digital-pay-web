// components/common/InfoSplitSection.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Container from "../Container";

interface InfoSplitSectionProps {
  eyebrow?: string;

  title: string;
  highlightText?: string;

  descriptionOne: string;
  descriptionTwo?: string;
  descriptionThree?: string;

  image: string;
  imageAlt?: string;

  imagePosition?: "left" | "right";

  keyBenefits?: string[];

  extraLists?: {
    title: string;
    items: string[];
  }[];

  className?: string;
}

export default function InfoSplitSectiontthree({
  eyebrow,
  title,
  highlightText,

  descriptionOne,
  descriptionTwo,
  descriptionThree,

  image,
  imageAlt = "Section Image",

  imagePosition = "left",

  keyBenefits,
  extraLists,

  className,
}: InfoSplitSectionProps) {
  const isRight = imagePosition === "right";

  return (
    <section
      className={cn(
        "overflow-hidden bg-[#fff] py-8 sm:py-10 md:py-14 lg:py-16",
        className
      )}
    >
      <Container>
        <div
          className={cn(
            "grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16",
            isRight ? "lg:[&>*:first-child]:order-2" : ""
          )}
        >
          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: isRight ? 120 : -120,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="lg:col-span-5"
          >
            <div
              className="
                relative
                mx-auto
                h-[320px]
                w-full
                max-w-[320px]
                overflow-hidden
                rounded-[22px]

                sm:h-[420px]
                sm:max-w-[420px]

                md:h-[520px]
                md:max-w-[520px]

                lg:h-[620px]
                lg:max-w-[520px]
              "
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: isRight ? -80 : 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="lg:col-span-7"
          >
            {/* EYEBROW */}
            {eyebrow && (
              <span
                className="
                  inline-block
                  font-inter
                  text-[14px]
                  font-medium
                  leading-[100%]
                  tracking-[-0.03em]
                  text-[#3A922B]

                  sm:text-[16px]

                  md:text-[18px]
                "
              >
                {eyebrow}
              </span>
            )}

            {/* TITLE */}
            <h2
              className="
                mt-3
                font-inter
                text-[34px]
                font-light
                leading-[38px]
                tracking-[-0.04em]
                text-black

                sm:text-[42px]
                sm:leading-[46px]

                md:text-[56px]
                md:leading-[58px]
              "
            >
              {title}{" "}

              {highlightText && (
                <span className="font-semibold text-[#3A922B]">
                  {highlightText}
                </span>
              )}
            </h2>

            {/* DESCRIPTION */}
            <div className="mt-7 space-y-5">
              <p
                className="
                  max-w-[860px]
                  font-inter
                  text-[15px]
                  font-normal
                  leading-[1.65]
                  tracking-[-0.03em]
                  text-black

                  sm:text-[16px]

                  md:text-[20px]
                  md:leading-[26px]
                "
              >
                {descriptionOne}
              </p>

              {descriptionTwo && (
                <p
                  className="
                    max-w-[860px]
                    font-inter
                    text-[15px]
                    font-normal
                    leading-[1.65]
                    tracking-[-0.03em]
                    text-black

                    sm:text-[16px]

                    md:text-[20px]
                    md:leading-[26px]
                  "
                >
                  {descriptionTwo}
                </p>
              )}

              {descriptionThree && (
                <p
                  className="
                    max-w-[860px]
                    font-inter
                    text-[15px]
                    font-normal
                    leading-[1.65]
                    tracking-[-0.03em]
                    text-black

                    sm:text-[16px]

                    md:text-[20px]
                    md:leading-[26px]
                  "
                >
                  {descriptionThree}
                </p>
              )}
            </div>

            {/* KEY BENEFITS */}
            {keyBenefits && keyBenefits.length > 0 && (
              <div className="mt-8">
                <h4
                  className="
                    font-inter
                    text-[18px]
                    font-semibold
                    text-black

                    md:text-[30px]
                  "
                >
                  Key Benefits
                </h4>

                <ul className="mt-4 space-y-2">
                  {keyBenefits.map((item, index) => (
                    <li
                      key={index}
                      className="
                        flex
                        items-start
                        gap-3

                        font-inter
                        text-[14px]
                        leading-[1.6]
                        tracking-[-0.03em]
                        text-black

                        md:text-[20px]
                      "
                    >
                      <span className="mt-[8px] h-[5px] w-[5px] rounded-full bg-[#000]" />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* EXTRA LISTS */}
            {extraLists && extraLists.length > 0 && (
              <div
                className="
                  mt-10
                  grid
                  gap-8

                  sm:grid-cols-2
                "
              >
                {extraLists.map((list, index) => (
                  <div key={index}>
                    <h5
                      className="
                        font-inter
                        text-[15px]
                        font-semibold
                        text-black

                        md:text-[20px]
                      "
                    >
                      {list.title}
                    </h5>

                    <ul className="mt-4 space-y-2">
                      {list.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="
                            flex
                            items-start
                            gap-3

                            font-inter
                            text-[20px]
                            leading-[1.6]
                            tracking-[-0.03em]
                            text-black
                          "
                        >
                          <span className="mt-[8px] h-[5px] w-[5px] rounded-full bg-[#000]" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}