// components/home/OperationsSection.tsx

"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

import Container from "@/components/Container";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
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

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
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

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
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

const featureCards = [
  {
    title: "Fast & Secure\nPayments",
    description:
      "Process transactions quickly with secure payment technology built for everyday business operations.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20947.png",
  },
  {
    title: "Real Time\nInsights",
    description:
      "Monitor sales, business activity, and performance with live reporting from anywhere.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20944.png",
  },
];

export default function OperationsSection() {
  return (
    <section className="overflow-hidden bg-white py-8 md:py-10 lg:py-12">
      <Container>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* LEFT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            className="lg:col-span-5"
          >
            {/* TOP CONTENT */}
            <div className="max-w-[520px]">
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease,
                }}
                className="font-inter text-fluid-h2 font-light text-black"
              >
                Built by the Team
                <br />
                <span className="font-semibold text-[#3DA532]">
                  Behind HBOX Digital
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease,
                }}
                className="mt-5 max-w-full font-inter text-fluid-body font-normal tracking-[-0.03em] text-black"
              >
                From payment systems to custom software and mobile applications,
                HBOX Digital builds technology solutions that help businesses
                operate smarter and scale faster.
              </motion.p>
            </div>

            {/* SMALL CARDS */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16">
              {featureCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative overflow-hidden rounded-[26px] bg-[#F5F5F5] p-4"
                >
                  {/* IMAGE */}
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="relative mb-5 h-[150px] overflow-hidden rounded-[18px] bg-white"
                  >
                    <Image
                      src={card.image}
                      alt={card.title.replace("\n", " ")}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>

                  {/* CONTENT */}
                  <h3 className="font-inter text-fluid-subtitle font-semibold text-black ">
                    {card.title}
                  </h3>

                  <p className="mt-4   md:mb-0 font-inter text-fluid-body font-normal  text-black/70">
                    {card.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
            className="lg:col-span-7"
          >
            <motion.article
              whileHover={{
                y: -4,
              }}
              transition={{
                duration: 0.35,
              }}
              className="flex h-full flex-col overflow-hidden rounded-[28px] bg-[#F5F5F5] p-4 md:p-5"
            >
              {/* IMAGE */}
              <motion.div
                whileHover={{
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="relative h-[320px] overflow-hidden rounded-[24px] bg-white sm:h-[420px] lg:h-[520px]"
              >
                <Image
                  src="https://cdn.hboxdigital.com/public/hbox-pay/images/image%20945.png"
                  alt="Offline Mode"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-contain p-5 transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              {/* CONTENT */}
              <div className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                      ease,
                    }}
                    className="font-inter text-fluid-subtitle font-semibold text-black"
                  >
                    Offline Mode
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.3,
                      ease,
                    }}
                    className="mt-4 max-w-[520px] font-inter text-fluid-body font-normal tracking-[-0.03em] text-black/70"
                  >
                    Keep accepting payments and managing sales even during
                    internet interruptions.
                  </motion.p>
                </div>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}