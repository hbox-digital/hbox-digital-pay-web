// components/home/KioskSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

import Container from "@/components/Container";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
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
      duration: 0.9,
      ease,
    },
  },
} satisfies Variants;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
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

export default function KioskSection() {
  return (
    <section className="overflow-hidden border-b-[4px] border-[#39A935] bg-[#F5F5F5] py-12 md:py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            className="lg:col-span-4"
          >
            <div className="max-w-[420px]">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease,
                }}
                className="font-inter text-fluid-h2 font-light text-black"
              >
                <span className="font-semibold text-[#39A935]">Kiosk</span>
                <br />
                Self Ordering for Restaurants
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease,
                }}
                className="mt-6 max-w-[360px] font-inter text-fluid-body font-normal tracking-[-0.03em] text-black/70"
              >
                Speed up ordering with a self service kiosk built for
                restaurants, featuring fast payments, smooth ordering flows, and
                a simple customer experience.
              </motion.p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                  ease,
                }}
                className="mt-8"
              >
                <Link
                  href="/products/self-order-kiosk"
                  className="group inline-flex h-[42px] items-center gap-[10px] rounded-full bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] px-5 text-fluid-button font-medium text-black transition-all duration-300 hover:scale-[1.03]"
                >
                  <span>Explore Service Solutions</span>

                  <motion.span
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="h-[16px] w-[16px] stroke-[2.2]" />
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
            className="lg:col-span-8"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
                ease,
              }}
              className="relative h-[320px] w-full sm:h-[420px] md:h-[520px] lg:h-[620px]"
            >
              <Image
                src="https://cdn.hboxdigital.com/public/hbox-pay/images/image%20955.png"
                alt="Kiosk"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}