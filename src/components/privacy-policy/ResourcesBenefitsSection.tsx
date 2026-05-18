"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
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

const benefits = [
  "Easy to understand business insights",
  "Practical operational guidance",
  "Modern commerce strategies",
  "Payment technology education",
  "Business growth support",
];

export default function ResourcesBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
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
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="grid items-center gap-10 lg:grid-cols-[45%_55%]"
        >
          {/* Left Image */}
          <div className="relative h-[260px] overflow-hidden rounded-[16px] sm:h-[300px] lg:h-[330px]">
            <Image
              src="https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/Rectangle%2034625008%20(15).png"
              alt="Customer making a payment using a POS terminal"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-[#A9EF7D]/20 via-transparent to-transparent" />
          </div>

          {/* Right Content */}
          <div className="max-w-[570px] lg:pl-10">
            <h2 className="text-[34px] font-light leading-[1.12] tracking-[-0.04em] text-[#171717] sm:text-[42px] md:text-[46px]">
              Why Businesses Use{" "}
              <span className="font-semibold text-[#2F8429]">
                HBOX Pay Resources
              </span>
            </h2>

            <p className="mt-5 text-[15px] leading-[1.45] tracking-[-0.01em] text-[#151515] md:text-[16px]">
              HBOX Pay resources are designed to provide practical insights,
              operational guidance, and modern business strategies that help
              small businesses make informed decisions and improve everyday
              operations.
            </p>

            <div className="mt-5">
              <h3 className="text-[15px] font-semibold text-black">
                Resource Benefits
              </h3>

              <ul className="mt-4 space-y-3 pl-5">
                {benefits.map((item) => (
                  <li
                    key={item}
                    className="list-disc text-[14px] leading-none text-black"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}