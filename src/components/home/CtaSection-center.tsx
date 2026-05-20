// components/home/CtaSection.tsx

"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

import Container from "@/components/Container";
import BookDemoModal from "@/components/modals/BookDemoModal";

const CTA_BACKGROUND =
  "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624963.png";

const ease = [0.25, 0.1, 0.25, 1] as const;

const cardMotion = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
} satisfies Variants;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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

export default function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="overflow-hidden bg-white py-8 md:py-10 lg:py-12">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={cardMotion}
          className="relative overflow-hidden rounded-[32px] bg-cover bg-center px-6 py-16 sm:px-10 md:px-16 md:py-24 lg:px-20"
          style={{
            backgroundImage: `url("${CTA_BACKGROUND}")`,
          }}
        >
          {/* CONTENT */}
          <div className="relative z-10 mx-auto flex max-w-[980px] flex-col items-center text-center">
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
              className="font-inter text-fluid-h2 font-light text-white"
            >
              Start Growing Your Business{" "}
              <span className="font-semibold text-[#A3EC6B]">
                with hbox pay
              </span>
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
              className="mt-6 max-w-[760px] font-inter text-fluid-body font-normal tracking-[-0.03em] text-white"
            >
              From payments and POS systems to inventory, analytics, and
              customer management, hbox pay gives businesses the tools to operate
              smarter and grow faster.
            </motion.p>

            {/* BUTTON */}
            <motion.button
              type="button"
              aria-label="Get started today"
              onClick={() => setIsModalOpen(true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{ scale: 0.96 }}
              transition={{
                duration: 0.25,
                delay: 0.3,
                ease,
              }}
              className="group mt-8 flex h-[46px] items-center gap-[10px] rounded-full bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] px-6 text-fluid-button font-medium text-black transition-all duration-300 sm:h-[50px] sm:px-7"
            >
              <span>Get Started Today</span>

              <motion.span
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className="h-[18px] w-[18px] stroke-[2.2]" />
              </motion.span>
            </motion.button>
          </div>

          {/* SOFT FLOATING GLOW */}
          <motion.div
            animate={{
              opacity: [0.15, 0.3, 0.15],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-10 -top-10 h-[180px] w-[180px] rounded-full bg-white/10 blur-3xl"
          />

          <motion.div
            animate={{
              opacity: [0.1, 0.22, 0.1],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -bottom-10 -left-10 h-[200px] w-[200px] rounded-full bg-[#8CEE54]/10 blur-3xl"
          />
        </motion.div>
      </Container>

      <BookDemoModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}