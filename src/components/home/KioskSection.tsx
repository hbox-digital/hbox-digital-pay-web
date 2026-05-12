// components/home/KioskSection.tsx

"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function KioskSection() {
  return (
    <section className="overflow-hidden border-b-[4px] border-[#39A935] bg-[#F3F3F3] py-12 md:py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="lg:col-span-4"
          >
            <div className="max-w-[420px]">
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                className="text-[42px] font-light leading-[100%] tracking-[-0.04em] text-black sm:text-[52px] md:text-[60px] md:leading-[68px]"
              >
                <span className="font-semibold text-[#39A935]">
                  Kiosk
                </span>
                <br />
                Self Ordering for Restaurants
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="mt-6 max-w-[360px] text-[15px] leading-[1.5] tracking-[-0.03em] text-black/70 sm:text-[16px]"
              >
                Speed up ordering with a self service kiosk built for
                restaurants, featuring fast payments, smooth ordering flows,
                and a simple customer experience.
              </motion.p>

              <Link href="/" className="mt-8 inline-flex">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="group flex h-[42px] items-center gap-[10px] rounded-full bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] px-5 text-[13px] font-medium leading-[100%] tracking-[-0.03em] text-black transition-all duration-300 hover:scale-[1.02]"
                >
                  <span>Contact Sales</span>

                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="h-[16px] w-[16px] stroke-[2.2]" />
                  </motion.div>
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="lg:col-span-8"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative h-[320px] w-full sm:h-[420px] md:h-[520px] lg:h-[620px]"
            >
              <Image
                src="https://cdn.hboxdigital.com/public/hbox-pay/images/image%20955.png"
                alt="Kiosk"
                fill
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