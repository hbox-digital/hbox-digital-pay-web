// components/home/CtaSection.tsx

"use client";

import Container from "@/components/Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="overflow-hidden bg-[#Fff] py-12 md:py-16 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative overflow-hidden rounded-[32px] px-6 py-16 sm:px-10 md:px-16 md:py-24 lg:px-20"
          style={{
            backgroundImage:
              "url('https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624963.png')",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        >
          {/* OVERLAY */}
          {/* <div className="absolute inset-0 bg-black/30" /> */}

          {/* CONTENT */}
          <div className="relative z-10 mx-auto flex max-w-[980px] flex-col items-center text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="text-[42px] font-light leading-[100%] tracking-[-0.04em] text-white sm:text-[52px] md:text-[40px] md:leading-[74px]"
            >
              Start Growing Your Business{" "}
              <span className="font-semibold">
                with HBOXPay
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="mt-6 max-w-[760px] text-[15px] leading-[1.5] tracking-[-0.03em] text-white sm:text-[17px] md:text-[18px]"
            >
              From payments and POS systems to inventory, analytics, and
              customer management, HBOXPay gives businesses the tools to operate
              smarter and grow faster.
            </motion.p>

            {/* BUTTON */}
            <Link href="/" className="mt-8">
              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{ scale: 0.96 }}
                transition={{
                  duration: 0.25,
                }}
                className="group flex h-[46px] items-center gap-[10px] rounded-full bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] px-6 text-[14px] font-medium leading-[100%] tracking-[-0.03em] text-black transition-all duration-300 hover:scale-[1.02] sm:h-[50px] sm:px-7 sm:text-[16px]"
              >
                <span>Get Started Today</span>

                <motion.div
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="h-[18px] w-[18px] stroke-[2.2]" />
                </motion.div>
              </motion.button>
            </Link>
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
    </section>
  );
}