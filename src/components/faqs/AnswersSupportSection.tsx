"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
} satisfies Variants;

const questions = [
  {
    question: "What is HBOX Pay?",
    answer:
      "HBOX Pay provides payment technology, POS systems, business management solutions, and smart hardware designed to support modern business operations across retail, hospitality, and enterprise environments.",
  },
  {
    question: "Which industries does HBOX Pay support?",
    answer:
      "HBOX Pay solutions are designed for retail stores, restaurants, cafes, hospitality businesses, supermarkets, service providers, and multi location operations.",
  },
  {
    question:
      "Does HBOX Pay provide both hardware and software solutions?",
    answer:
      "Yes. HBOX Pay offers integrated hardware and software solutions designed to work together seamlessly for smoother business operations.",
  },
];

export default function AnswersSupportSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-16">
      {/* Background Grid Lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="mx-auto grid h-full max-w-7xl grid-cols-4 border-x border-black/[0.04]">
          <div className="border-r border-black/[0.04]" />
          <div className="border-r border-black/[0.04]" />
          <div className="border-r border-black/[0.04]" />
          <div />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-8xl px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="mx-auto max-w-[720px] text-center"
        >
          <h2 className="text-[30px] font-light leading-[1.12] tracking-[-0.04em] text-[#171717] sm:text-[38px] md:text-[42px]">
            Answers & Support for
            <br />
            <span className="font-semibold text-[#2F8429]">
              Your Business Operations
            </span>
          </h2>

          <p className="mt-5 text-[15px] leading-[1.55] tracking-[-0.01em] text-[#3F3F3F] sm:text-[17px] md:text-[18px]">
            Find quick answers to common questions about HBOX Pay products,
            payment solutions, hardware systems, POS software, and business
            management services.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mx-auto mt-12 max-w-[1050px]"
        >
          <h3 className="text-[24px] font-light tracking-[-0.04em] text-[#171717] md:text-[26px]">
            General{" "}
            <span className="font-semibold text-[#2F8429]">
              Questions
            </span>
          </h3>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* First 2 Cards */}
            {questions.slice(0, 2).map((item) => (
              <div
                key={item.question}
                className="rounded-[12px] bg-[#F4F4F4] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#EFEFEF] hover:shadow-md"
              >
                <h4 className="text-[21px] font-normal leading-tight tracking-[-0.035em] text-[#111111] md:text-[23px]">
                  {item.question}
                </h4>

                <p className="mt-4 max-w-[470px] text-[13px] leading-[1.35] tracking-[-0.01em] text-[#303030] md:text-[14px]">
                  {item.answer}
                </p>
              </div>
            ))}

            {/* Full Width Card */}
            <div className="rounded-[12px] bg-[#F4F4F4] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#EFEFEF] hover:shadow-md md:col-span-2">
              <h4 className="text-[21px] font-normal leading-tight tracking-[-0.035em] text-[#111111] md:text-[23px]">
                {questions[2].question}
              </h4>

              <p className="mt-4 text-[13px] leading-[1.35] tracking-[-0.01em] text-[#303030] md:text-[14px]">
                {questions[2].answer}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}