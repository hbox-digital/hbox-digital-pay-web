// components/home/KitchenDisplaySection.tsx

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
    x: 50,
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

export default function KitchenDisplaySection() {
  return (
    <section className="overflow-hidden bg-white py-12 md:py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            className="lg:col-span-5"
          >
            <div className="max-w-[520px]">
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
                <span className="font-semibold text-[#3DA532]">
                  Kitchen
                </span>{" "}
                Display System
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
                className="mt-6 max-w-[470px] font-inter text-fluid-body font-normal tracking-[-0.03em] text-black"
              >
                Keep orders organized with a connected kitchen display system
                built to reduce delays, improve accuracy, and support faster
                service operations.
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
                  href="/products/kitchen-display-system"
                  className="group inline-flex h-[42px] items-center gap-[10px] rounded-full bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] px-5 text-fluid-button font-medium text-black transition-all duration-300 hover:scale-[1.03]"
                >
                  <span>Upgrade Your Operations</span>

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
            className="lg:col-span-7"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
                ease,
              }}
              className="relative h-[260px] overflow-hidden rounded-[28px] sm:h-[360px] md:h-[420px] lg:h-[500px]"
            >
              <Image
                src="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624986.png"
                alt="Kitchen Display System"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}