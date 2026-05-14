// components/common/CtaBannerSection.tsx

"use client";

import Container from "../Container";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CtaBannerSectionProps {
  title: string;
  highlightText?: string;
  description: string;

  backgroundImage: string;

  buttonText?: string;
  buttonHref?: string;

  className?: string;
}

export default function CtaBannerSection({
  title,
  highlightText,
  description,
  backgroundImage,
  buttonText = "Contact Sales",
  buttonHref = "/",
  className,
}: CtaBannerSectionProps) {
  return (
    <section
      className={cn(
        "overflow-hidden bg-[#Fff] py-10 sm:py-12 md:py-16",
        className
      )}
    >
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            relative
            overflow-hidden
            rounded-[28px]

            px-6
            py-14

            sm:px-10
            sm:py-16

            md:px-16
            md:py-10

            lg:px-20
            lg:py-12
          "
        >
          {/* BACKGROUND */}
          <div
            className="absolute inset-0 lg:h-[450px]"
            style={{
              backgroundImage: `url("${backgroundImage}")`,
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
            }}
          />

        
          {/* CONTENT */}
          <div className="relative z-10 mx-auto flex flex-col items-center text-center">
            {/* TITLE */}
            <motion.h2
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
                delay: 0.1,
              }}
              className="
                font-inter
                text-[34px]
                font-light
                leading-[40px]
                tracking-[-0.04em]
                text-white

                sm:text-[36px]
                sm:leading-[32px]
                max-w-[660px]
                md:text-[50px]
                md:leading-[60px]
              "
            >
              {title}{" "}

              {highlightText && (
                <span className="font-semibold text-[#A3EC6B]">
                  {highlightText}
                </span>
              )}
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="
                mt-6
                max-w-[760px]
                font-inter
                text-[16px]
                font-normal
                leading-[1.6]
                tracking-[-0.03em]
                text-white

                sm:text-[18px]

                md:text-[24px]
                md:leading-[30px]
              "
            >
              {description}
            </motion.p>

            {/* BUTTON */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="mt-8"
            >
              <Link href={buttonHref}>
                <button
                  className="
                    group
                    flex
                    h-[48px]
                    items-center
                    gap-3
                    rounded-full
                    bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)]

                    px-5

                    text-[14px]
                    font-medium
                    tracking-[-0.03em]
                    text-black

                    transition-all
                    duration-300

                    hover:scale-[1.03]

                    sm:h-[54px]
                    sm:px-7
                    sm:text-[16px]
                  "
                >
                  <span>{buttonText}</span>

                  <div
                    className="
                      flex
                      h-[28px]
                      w-[28px]
                      items-center
                      justify-center
                      rounded-full
                      transition-all
                      duration-300

                    "
                  >
                    <ExternalLink className="h-[15px] w-[15px] stroke-[2.2]" />
                  </div>
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}