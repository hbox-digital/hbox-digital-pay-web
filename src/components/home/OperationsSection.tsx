// components/home/OperationsSection.tsx

"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const featureCards = [
  {
    title: "Fast & Secure\nPayments ",
    description:
      "Process transactions quickly with secure payment technology built for everyday business operations.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20947.png",
  },
  {
    title: "Real Time\nInsights ",
    description:
      "Monitor sales, business activity, and performance with live reporting from anywhere.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20944.png",
  },
];

export default function OperationsSection() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
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
                }}
                className="text-[38px] font-light leading-[100%] tracking-[-0.04em] text-black sm:text-[48px] md:text-[40px] md:leading-[68px]"
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
                }}
                className="mt-5 max-w-[480px] text-[15px] leading-[1.5] tracking-[-0.03em] text-black/75 sm:text-[16px]"
              >
                From payment systems to custom software and mobile applications,
                HBOX Digital builds technology solutions that help businesses
                operate smarter and scale faster.
              </motion.p>

              {/* ARROWS */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="mt-7 flex items-center gap-3"
              >
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-[36px] w-[36px] items-center justify-center rounded-[8px] bg-black text-white"
                >
                  <ArrowLeft className="h-[18px] w-[18px]" />
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.08,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-[36px] w-[36px] items-center justify-center rounded-[8px] bg-black text-white"
                >
                  <ArrowRight className="h-[18px] w-[18px]" />
                </motion.button>
              </motion.div>
            </div>

            {/* SMALL CARDS */}
            <div className="mt-8 md:mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {featureCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative overflow-hidden rounded-[26px] bg-[#EAEAEA] p-4"
                >
                  {/* IMAGE */}
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                    }}
                    className="relative mb-5 h-[150px] overflow-hidden rounded-[18px] bg-[#fff]"
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain w-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>

                  {/* CONTENT */}
                  <h3 className="whitespace-pre-line text-[24px] font-semibold leading-[100%] tracking-[-0.04em] text-black">
                    {card.title}
                  </h3>

                  <p className="mt-4 max-w-[200px] text-[14px] leading-[1.45] tracking-[-0.03em] text-black/65">
                    {card.description}
                  </p>

                  {/* BUTTON */}
                  <Link
                    href="/"
                    className="absolute bottom-4 right-4"
                  >
                    <motion.button
                      whileHover={{
                        scale: 1.08,
                        rotate: 3,
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-[46px] w-[46px] items-center justify-center rounded-[16px] bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)]"
                    >
                      <ExternalLink className="h-[20px] w-[20px] stroke-[2.2] text-black" />
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="lg:col-span-7"
          >
            <motion.div
              whileHover={{
                y: -4,
              }}
              className="flex h-full flex-col overflow-hidden rounded-[28px] bg-[#EAEAEA] p-4 md:p-5"
            >
              {/* IMAGE */}
              <motion.div
                whileHover={{
                  scale: 1.01,
                }}
                className="relative h-[320px] overflow-hidden rounded-[24px] bg-[#Fff] sm:h-[420px] lg:h-[520px]"
              >
                <Image
                  src="https://cdn.hboxdigital.com/public/hbox-pay/images/image%20945.png"
                  alt="Offline Mode"
                  fill
                  className="object-contain p-5 transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              {/* CONTENT */}
              <div className="flex items-end justify-between gap-5 pt-6">
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                    }}
                    className="text-[38px] font-semibold leading-[100%] tracking-[-0.04em] text-black sm:text-[48px]"
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
                    }}
                    className="mt-4 max-w-[520px] text-[15px] leading-[1.45] tracking-[-0.03em] text-black/70 sm:text-[16px]"
                  >
                    Keep accepting payments and managing sales even during
                    internet interruptions.
                  </motion.p>
                </div>

                <Link href="/">
                  <motion.button
                    whileHover={{
                      scale: 1.08,
                      rotate: 3,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[20px] bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)]"
                  >
                    <ExternalLink className="h-[22px] w-[22px] stroke-[2.2] text-black" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}