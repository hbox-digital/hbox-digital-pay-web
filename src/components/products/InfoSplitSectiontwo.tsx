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

  className?: string;
}

export default function InfoSplitSectiontwo({
  eyebrow,
  title,
  highlightText,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  image,
  imageAlt = "Section Image",
  imagePosition = "left",
  className,
}: InfoSplitSectionProps) {
  const isRight = imagePosition === "right";

  return (
    <section
      className={cn(
        "overflow-hidden bg-[#fff] py-8 sm:py-10 md:py-14 lg:py-16 ",
        className
      )}
    >
      <Container>
        <div
          className={cn(
            "grid items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-20",
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
                max-w-[340px]
                overflow-hidden
                rounded-[28px]

                sm:h-[440px]
                sm:max-w-[440px]

                md:h-[560px]
                md:max-w-[560px]

                lg:h-[620px]
                lg:max-w-[620px]
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
                  text-[16px]
                  font-medium
                  leading-[100%]
                  tracking-[-0.03em]
                  text-[#3A922B]

                  sm:text-[18px]

                  md:text-[32px]
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
                text-[40px]
                font-light
                leading-[40px]
                tracking-[-0.04em]
                text-black

                sm:text-[30px]
                sm:leading-[30px]

                md:text-[60px]
                md:leading-[60px]
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
            <div className="mt-7 space-y-6">
              <p
                className="
                  max-w-[860px]
                  font-inter
                  text-[16px]
                  font-normal
                  leading-[1.65]
                  tracking-[-0.03em]
                  text-black/85

                  sm:text-[18px]

                  md:text-[24px]
                  md:leading-[42px]
                "
              >
                {descriptionOne}
              </p>

              {descriptionTwo && (
                <p
                  className="
                    max-w-[860px]
                    font-inter
                    text-[16px]
                    font-normal
                    leading-[1.65]
                    tracking-[-0.03em]
                    text-black/85

                    sm:text-[18px]

                    md:text-[24px]
                    md:leading-[42px]
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
                    text-[16px]
                    font-normal
                    leading-[1.65]
                    tracking-[-0.03em]
                    text-black/85

                    sm:text-[18px]

                    md:text-[24px]
                    md:leading-[42px]
                  "
                >
                  {descriptionThree}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}