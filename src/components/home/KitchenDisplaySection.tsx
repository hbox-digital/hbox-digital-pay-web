// components/home/KitchenDisplaySection.tsx

"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function KitchenDisplaySection() {
  return (
    <section className="overflow-hidden bg-[#Fff] py-12 md:py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="lg:col-span-5"
          >
            <div className="max-w-[520px]">
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                className="text-[42px] font-light leading-[100%] tracking-[-0.04em] text-black sm:text-[52px] md:text-[40px] md:leading-[68px]"
              >
                <span className="font-semibold text-[#3DA532]">
                  Kitchen
                </span>{" "}
                Display System
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="mt-6 max-w-[470px] text-[15px] md:text-[20px] leading-[1.5] tracking-[-0.03em] text-black "
              >
                Keep orders organized with a connected kitchen display system
                built to reduce delays, improve accuracy, and support faster
                service operations.
              </motion.p>

              <Link href="/products/kitchen-display-system" className="mt-8 inline-flex">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="group flex h-[42px] items-center gap-[10px] rounded-full bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] px-5 text-[13px] font-medium leading-[100%] tracking-[-0.03em] text-black transition-all duration-300 hover:scale-[1.02]"
                >
                  <span>Upgrade Your Operations </span>

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
            initial={{ opacity: 0, x: 50 }}
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
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative h-[260px] overflow-hidden rounded-[28px] sm:h-[360px] md:h-[420px] lg:h-[500px]"
            >
              <Image
                src="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624986.png"
                alt="Kitchen Display System"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}