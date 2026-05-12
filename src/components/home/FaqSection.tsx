// components/home/FaqSection.tsx

"use client";

import Container from "@/components/Container";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do I sign up with HBOXPay?",
    answer:
      "Getting started with HBOXPay is simple. Businesses can sign up, choose the right POS and payment solutions, complete setup, and start managing payments and operations from one platform.",
  },
  {
    question: "What businesses can use the HBOXPay system?",
    answer:
      "HBOXPay is designed for restaurants, retail stores, cafes, grocery stores, salons, and service based businesses looking to simplify operations, manage sales, and accept secure payments.",
  },
  {
    question:
      "Does HBOXPay support card, QR, and contactless payments?",
    answer:
      "Yes, HBOXPay supports card payments, QR payments, tap to pay, contactless transactions, and digital wallets for faster and more flexible payment processing.",
  },
  {
    question:
      "Can HBOXPay manage inventory and multiple store locations?",
    answer:
      "HBOXPay includes inventory management and multi store management tools that help businesses track stock, monitor sales, and manage operations across different locations.",
  },
  {
    question:
      "Is HBOXPay suitable for small businesses and growing brands?",
    answer:
      "Yes, HBOXPay is built for startups, small businesses, and growing brands that need scalable POS software, payment solutions, and business management tools.",
  },
  {
    question:
      "How long does it take to set up HBOXPay POS hardware and software?",
    answer:
      "Most HBOXPay systems can be set up quickly with guided onboarding, allowing businesses to start accepting payments and managing operations with minimal downtime.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="overflow-hidden bg-[#Fff] py-6 md:py-8 lg:py-8">
      <Container>
        <div className="mx-auto max-w-[1200px]">
          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-center text-[38px] font-light leading-[100%] tracking-[-0.04em] text-black sm:text-[48px] md:text-[60px] md:leading-[68px]"
          >
            Frequently Asked{" "}
            <span className="font-semibold text-[#39A935]">
              Questions
            </span>
          </motion.h2>

          {/* FAQ LIST */}
          <div className="mt-10 flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -2,
                  }}
                  className="overflow-hidden rounded-[18px] bg-[#EAEAEA]"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition-all duration-300"
                  >
                    <span className="text-[15px] font-medium leading-[1.4] tracking-[-0.03em] text-black sm:text-[16px] md:text-[18px]">
                      {faq.question}
                    </span>

                    <motion.div
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="shrink-0"
                    >
                      {isOpen ? (
                        <Minus className="h-[18px] w-[18px] text-black/70" />
                      ) : (
                        <Plus className="h-[18px] w-[18px] text-black/70" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          exit={{ y: -10 }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="px-6 pb-5"
                        >
                          <p className="max-w-[900px] text-[14px] leading-[1.6] tracking-[-0.03em] text-black/65 sm:text-[15px]">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}