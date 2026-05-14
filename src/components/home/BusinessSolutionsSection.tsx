// components/home/BusinessSolutionsSection.tsx

"use client";

import Container from "@/components/Container";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <section className="bg-[#Fff] py-12 md:py-16 lg:py-20 overflow-hidden">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="max-w-[800px]"
            >
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                className="max-w-[870px] xl:text-[60px]  xl:leading-[68px] md:leading-[40px] md:leading-[40px]  text-[40px] font-light tracking-[-0.04em] text-black"
              >
                Everything You Need 
                <br />
                <span className="font-medium text-[#53B033] text-[40px] leading-[40px] md:text-[60px] font-semibold md:leading-[68px] tracking-[-0.04em]">
                  {" "}
                  to Run Your Business
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="max-w-[620px] lg:ml-auto"
            >
          <p className="text-[14px] leading-[100%]  text-black sm:text-[16px] md:text-[30px] lg:text-[30px] xl:text-[30px]">
                HBOXPay brings together payments, operations, reporting, and
                customer management into one connected ecosystem. 
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                }}
                className="group rounded-[20px] bg-[#F5F5F5] p-5 transition-all duration-300 hover:-translate-y-1"
              >
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="relative mb-6 md:mb-12 lg:mb-16 flex h-[180px] items-center justify-center overflow-hidden rounded-[16px]"
                >
                  <motion.div
                    initial={{ scale: 1.08, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1 + index * 0.08,
                    }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>

                  {/* SUBTLE GLOW */}
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

                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.06,
                  }}
                  className="text-[28px] font-semibold leading-[1] tracking-[-0.04em] text-black"
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
                  }}
                  className="mt-4 text-[14px] md:text-[20px] leading-[1.45] tracking-[-0.03em] text-black"
                >
                  {card.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}