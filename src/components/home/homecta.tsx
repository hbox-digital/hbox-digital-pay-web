"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion, type Variants } from "framer-motion";

import Container from "../Container";

interface BigIdeaSectionProps {
  titleOne: string;
  titleTwo: string;
  titleThree?: string;
  titleFour?: string;
  paragraph: string;
  imageSrc: string;
  sideImageSrc?: string;
  buttons: {
    text: string;
    href?: string;
  }[];
}

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
} satisfies Variants;

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
} satisfies Variants;

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
} satisfies Variants;

export default function BigIdeaSectionCTA({
  titleOne,
  titleTwo,
  titleThree,
  titleFour,
  paragraph,
  imageSrc,
  sideImageSrc,
  buttons,
}: BigIdeaSectionProps) {
  return (
    <section className="overflow-hidden bg-white py-8 sm:py-10 md:py-14 lg:py-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-[34px] bg-[#0B0B0B]"
        >
          {/* BACKGROUND */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("${imageSrc}")`,
            }}
          />

        
      

          {/* GOLD GLOW */}
          <div className="pointer-events-none absolute -left-10 top-0 h-[300px] w-[300px] rounded-full bg-[#FDC700]/10 blur-[120px]" />

          {/* MAIN GRID */}
          <div className="relative z-10 grid min-h-[350px] grid-cols-1 lg:min-h-[352px] lg:grid-cols-12">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center px-6 py-10 sm:px-8 md:px-12 lg:col-span-8 lg:px-14 lg:py-12">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeLeft}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease,
                }}
                className="max-w-[760px] font-inter text-fluid-h2 font-light text-white"
              >
                {titleOne}
                <br />

                <span className="font-semibold text-[#FDC700]">
                  {titleTwo}
                </span>

                {titleFour && (
                  <span className="font-semibold text-[#FDC700]">
                    {" "}
                    {titleFour}
                  </span>
                )}

                {titleThree && (
                  <>
                    <br />
                    {titleThree}
                  </>
                )}
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeLeft}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease,
                }}
                className="mt-5 max-w-[760px] font-inter text-fluid-body font-normal tracking-[-0.03em] text-white/72"
              >
                {paragraph}
              </motion.p>

              {buttons.length > 0 && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeLeft}
                  transition={{
                    duration: 0.7,
                    delay: 0.3,
                    ease,
                  }}
                  className="mt-7 flex flex-wrap items-center gap-4"
                >
                  {buttons.map((button) => (
                    <Link
                      key={button.text}
                      href={button.href || "/"}
                      className="group inline-flex h-[48px] items-center gap-3 rounded-full bg-[#F7D84D] px-5 text-fluid-button font-medium text-black transition-all duration-300 hover:scale-[1.03]"
                    >
                      <span>{button.text}</span>

                      <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#FFE98F] transition-all duration-300 group-hover:rotate-12">
                        <ExternalLink className="h-[16px] w-[16px] stroke-[2.2]" />
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            {/* RIGHT IMAGE */}
            {sideImageSrc && (
              <div className="relative hidden lg:col-span-4 lg:block">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeRight}
                  className="absolute bottom-0 right-6 h-full w-[72%]"
                >
                  <Image
                    src={sideImageSrc}
                    alt="HBOX Digital"
                    fill
                    priority
                    sizes="30vw"
                    className="object-contain object-bottom object-right"
                  />
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}