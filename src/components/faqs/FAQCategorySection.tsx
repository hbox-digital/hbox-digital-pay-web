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

const faqGroups = [
  {
    title: (
      <>
        Payment <span className="font-semibold text-[#2F8429]">processing</span>
      </>
    ),
    questions: [
      {
        question: "What payment methods does HBOX Pay support?",
        answer:
          "HBOX Pay supports card payments, contactless transactions, QR payments, and digital wallet payment solutions.",
      },
      {
        question: "Are HBOX Pay payment systems secure?",
        answer:
          "Yes. HBOX Pay uses secure transaction processing and advanced payment security technologies designed to help protect payment and customer data.",
      },
    ],
  },
  {
    title: (
      <>
        POS &{" "}
        <span className="font-semibold text-[#2F8429]">
          Business Management
        </span>
      </>
    ),
    questions: [
      {
        question: "Can HBOX Pay support multi location businesses?",
        answer:
          "Yes. HBOX Pay solutions support centralized management across multiple business locations and operations.",
      },
      {
        question: "Does HBOX Pay offer inventory management tools?",
        answer:
          "Yes. Businesses can manage inventory, monitor stock levels, and improve operational visibility through integrated inventory management solutions.",
      },
      {
        question:
          "Does HBOX Pay provide customer management and loyalty tools?",
        answer:
          "Yes. HBOX Pay offers CRM and loyalty program solutions designed to help businesses improve customer engagement and retention.",
        fullWidth: true,
      },
    ],
  },
  {
    title: (
      <>
        Hardware <span className="font-semibold text-[#2F8429]">& Devices</span>
      </>
    ),
    questions: [
      {
        question: "What hardware solutions does HBOX Pay offer?",
        answer:
          "HBOX Pay provides Android POS devices, portable payment terminals, countertop systems, kiosks, kitchen display systems, and supporting accessories.",
      },
      {
        question: "Are HBOX Pay devices suitable for mobile businesses?",
        answer:
          "Yes. Portable payment devices are available for mobile operations, restaurants, delivery services, and flexible business environments.",
      },
    ],
  },
    {
    title: (
      <>
        Support  <span className="font-semibold text-[#2F8429]"> & Assistance</span>
      </>
    ),
    questions: [
      {
        question: "How can I contact HBOX Pay support?",
        answer:
          "Customers can contact the HBOX Pay support team through the Help Centre or Contact page for technical assistance and business support.",
      },
      {
        question: "Does HBOX Pay provide setup assistance?",
        answer:
          "Yes. Support resources and setup guidance are available for hardware, software, and operational onboarding.",
      },
    ],
  },
];

export default function FAQCategorySection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-14">
      {/* Background Grid Lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="mx-auto grid h-full max-w-7xl grid-cols-4 border-x border-black/[0.04]">
          <div className="border-r border-black/[0.04]" />
          <div className="border-r border-black/[0.04]" />
          <div className="border-r border-black/[0.04]" />
          <div />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mx-auto max-w-[1050px] space-y-10"
        >
          {faqGroups.map((group) => (
            <div key={String(group.title)} className="space-y-5">
              <h2 className="text-[24px] font-light leading-tight tracking-[-0.04em] text-[#171717] md:text-[27px]">
                {group.title}
              </h2>

              <div className="grid gap-5 md:grid-cols-2">
                {group.questions.map((item) => (
                  <div
                    key={item.question}
                    className={`rounded-[12px] bg-[#F4F4F4] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#EFEFEF] hover:shadow-md ${
                      item.fullWidth ? "md:col-span-2" : ""
                    }`}
                  >
                    <h3 className="max-w-[560px] text-[21px] font-normal leading-[1.12] tracking-[-0.035em] text-[#111111] md:text-[23px]">
                      {item.question}
                    </h3>

                    <p className="mt-4 max-w-[560px] text-[13px] leading-[1.35] tracking-[-0.01em] text-[#303030] md:text-[14px]">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}