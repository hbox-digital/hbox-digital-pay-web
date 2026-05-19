// components/home/BusinessSolutionsSection.tsx

"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

import Container from "@/components/Container";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
} satisfies Variants;

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 25,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 0.2,
      ease,
    },
  },
} satisfies Variants;

const cards = [
  {
    title: "POS System",
    description:
      "Smart POS built to simplify billing, sales, and daily business operations with speed and accuracy.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/Layer%200%201.png",
  },
  {
    title: "Mobile POS",
    description:
      "Accept payments, manage orders, and run your business from anywhere with a flexible mobile setup.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/payment-terminal-mockup%201.png",
  },
  {
    title: "Dashboard",
    description:
      "Track sales, performance, and customer activity with real time insights built for smarter decisions.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/Group%201597884660.png",
  },
  {
    title: "Payments",
    description:
      "Accept cards, QR payments, and digital wallets through a fast, secure, and reliable payment system.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20961.png",
  },
];

export default function BusinessSolutionsSection() {
  return (
    <section className="overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      <Container>
        <div className="flex flex-col gap-10">
          {/* HEADER */}
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-[870px]"
            >
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease,
                }}
                className="font-inter text-fluid-hero font-light text-black"
              >
                Everything You Need
                <br />
                <span className="font-semibold text-[#53B033]">
                  to Run Your Business
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="max-w-[620px] lg:ml-auto"
            >
              <p className="font-inter text-fluid-subtitle font-normal text-black">
                HBOXPay brings together payments, operations, reporting, and
                customer management into one connected ecosystem.
              </p>
            </motion.div>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {cards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group rounded-[20px] bg-[#F5F5F5] p-5 transition-all duration-300"
              >
                {/* IMAGE */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="relative mb-8 flex h-[180px] items-center justify-center overflow-hidden rounded-[16px] md:mb-12 lg:mb-16"
                >
                  <motion.div
                    initial={{ scale: 1.08, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1 + index * 0.08,
                      ease,
                    }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>

                  <motion.div
                    animate={{
                      opacity: [0.08, 0.18, 0.08],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(83,176,51,0.12),transparent_70%)]"
                  />
                </motion.div>

                {/* CONTENT */}
                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.06,
                    ease,
                  }}
                  className="font-inter text-fluid-h3 font-semibold text-black"
                >
                  {card.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + index * 0.06,
                    ease,
                  }}
                  className="mt-4 font-inter text-fluid-body font-normal tracking-[-0.03em] text-black"
                >
                  {card.description}
                </motion.p>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}