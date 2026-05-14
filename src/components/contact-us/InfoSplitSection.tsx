// components/common/InfoSplitSection.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Container from "../Container";

interface InfoSplitSectionProps {
  title: string;
  highlightText?: string;
  descriptionOne: string;
  descriptionTwo?: string;

  image: string;
  imageAlt?: string;

  imagePosition?: "left" | "right";

  className?: string;
}

export default function InfoSplitSection({
  title,
  highlightText,
  descriptionOne,
  descriptionTwo,
  image,
  imageAlt = "Section Image",
  imagePosition = "left",
  className,
}: InfoSplitSectionProps) {
  const isRight = imagePosition === "right";

  return (
    <section
      className={cn(
        "overflow-hidden bg-[#fff] py-6 sm:py-8 md:py-10 lg:py-12",
        className
      )}
    >
      <Container>
        <div
          className={cn(
            "grid items-center gap-5 lg:grid-cols-12 lg:gap-5 xl:gap-5",
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
            className="lg:col-span-6"
          >
            <div
              className="
                relative
                mx-auto
                h-[320px]
                w-full
                max-w-[320px]
                overflow-hidden
                rounded-[28px]

                sm:h-[420px]
                sm:max-w-[420px]

                md:h-[600px]
                md:max-w-[640px]

                lg:h-[600px]
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
            className="lg:col-span-6"
          >
            {/* TITLE */}
            <h2
              className="
                font-inter
                text-[34px]
                font-light
                leading-[40px]
                tracking-[-0.04em]
                text-black

                sm:text-[44px]
                sm:leading-[50px]

                md:text-[42px]
                md:leading-[40px]

                lg:text-[44px]
                lg:leading-[44px]
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
                  max-w-[760px]
                  font-inter
                  text-[16px]
                  font-normal
                  leading-[1.7]
                  tracking-[-0.03em]
                  text-black

                  sm:text-[18px]

                  md:text-[22px]
                  md:leading-[30px]

                  lg:text-[24px]
                  lg:leading-[30px]
                "
              >
                {descriptionOne}
              </p>

              {descriptionTwo && (
                <p
                  className="
                    max-w-[760px]
                    font-inter
                    text-[16px]
                    font-normal
                    leading-[1.7]
                    tracking-[-0.03em]
                    text-black

                    sm:text-[18px]

                    md:text-[22px]
                    md:leading-[30px]

                    lg:text-[24px]
                    lg:leading-[30px]
                  "
                >
                  {descriptionTwo}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}