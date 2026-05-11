// components/home/FaqSection.tsx

"use client";

import Container from "@/components/Container";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

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
    <section className="overflow-hidden bg-[#Fff] py-12 md:py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-[1200px]">
          {/* HEADING */}
          <h2 className="text-center text-[38px] font-light leading-[100%] tracking-[-0.04em] text-black sm:text-[48px] md:text-[60px] md:leading-[68px]">
            Frequently Asked{" "}
            <span className="font-semibold text-[#39A935]">
              Questions
            </span>
          </h2>

          {/* FAQ LIST */}
          <div className="mt-10 flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-[18px] bg-[#EAEAEA]"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition-all duration-300"
                  >
                    <span className="text-[15px] font-medium leading-[1.4] tracking-[-0.03em] text-black sm:text-[16px] md:text-[18px]">
                      {faq.question}
                    </span>

                    <div className="shrink-0">
                      {isOpen ? (
                        <Minus className="h-[18px] w-[18px] text-black/70" />
                      ) : (
                        <Plus className="h-[18px] w-[18px] text-black/70" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5">
                        <p className="max-w-[900px] text-[14px] leading-[1.6] tracking-[-0.03em] text-black/65 sm:text-[15px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}