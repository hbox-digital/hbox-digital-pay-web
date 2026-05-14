// components/common/FaqSection.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import Container from "../Container";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  highlightText?: string;
  faqs: FaqItem[];
  className?: string;
}

export default function FaqSectionreuse({
  title,
  highlightText,
  faqs,
  className,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={cn(
        "overflow-hidden bg-[#Ffff] py-7 sm:py-8 md:py-10 lg:py-12",
        className
      )}
    >
      <Container>
        <div className="mx-auto max-w-[1280px]">
          {/* HEADING */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              text-center
              font-inter
              text-[36px]
              font-light
              leading-[40px]
              tracking-[-0.04em]
              text-black

              sm:text-[48px]
              sm:leading-[54px]

              md:text-[60px]
              md:leading-[68px]
            "
          >
            {title}{" "}

            {highlightText && (
              <span className="font-semibold text-[#39A935]">
                {highlightText}
              </span>
            )}
          </motion.h2>

          {/* FAQ LIST */}
          <div className="mt-10 flex flex-col gap-3 md:mt-14">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="
                    overflow-hidden
                    rounded-[18px]
                    bg-[#ECECEC]
                  "
                >
                  {/* QUESTION */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-5

                      px-5
                      py-5

                      text-left

                      transition-all
                      duration-300

                      sm:px-6

                      md:px-7
                      md:py-6
                    "
                  >
                    <span
                      className="
                        font-inter
                        text-[15px]
                        font-medium
                        leading-[1.4]
                        tracking-[-0.03em]
                        text-black

                        sm:text-[16px]

                        md:text-[22px]
                      "
                    >
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
                        <Minus className="h-[18px] w-[18px] text-black/70 md:h-[22px] md:w-[22px]" />
                      ) : (
                        <Plus className="h-[18px] w-[18px] text-black/70 md:h-[22px] md:w-[22px]" />
                      )}
                    </motion.div>
                  </button>

                  {/* ANSWER */}
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
                          className="
                            px-5
                            pb-5

                            sm:px-6

                            md:px-7
                            md:pb-7
                          "
                        >
                          <p
                            className="
                              max-w-[1100px]
                              font-inter
                              text-[14px]
                              font-normal
                              leading-[1.7]
                              tracking-[-0.03em]
                              text-black/65

                              sm:text-[15px]

                              md:text-[20px]
                              md:leading-[38px]
                            "
                          >
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