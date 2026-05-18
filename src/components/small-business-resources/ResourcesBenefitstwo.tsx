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

export default function ResourcesBenefitstwo() {
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="grid items-center gap-8 md:grid-cols-[42%_58%] lg:gap-12"
        >
          {/* Left Image */}
          <div className="relative h-[380px] w-full overflow-hidden rounded-[12px] sm:h-[210px] md:h-[425px] lg:h-[365px]">
            <Image
              src="https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/Rectangle%2034625008%20(16).png"
              alt="Customer making a payment using a POS terminal"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-[#A9EF7D]/20 via-transparent to-transparent" />
          </div>

          {/* Right Content */}
          <div className="max-w-[480px]">
            <h2 className="text-[28px] font-light leading-[1.08] tracking-[-0.04em] text-[#171717] sm:text-[34px] md:text-[38px]">
              Why Businesses Use{" "}
              <span className="font-semibold text-[#2F8429]">
                HBOX
                <br />
                Pay Resources
              </span>
            </h2>

            <p className="mt-4 max-w-[470px] text-[13px] leading-[1.3] tracking-[-0.01em] text-[#171717] sm:text-[14px]">
              HBOX Pay resources are designed to provide practical insights,
              operational guidance, and modern business strategies that help
              small businesses make informed decisions and improve everyday
              operations.
            </p>

            <div className="mt-4">
              <h3 className="text-[13px] font-semibold text-black">
                Resource Benefits
              </h3>

              <ul className="mt-3 space-y-2 pl-4">
                {benefits.map((item) => (
                  <li
                    key={item}
                    className="list-disc text-[12px] leading-[1.15] text-black"
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