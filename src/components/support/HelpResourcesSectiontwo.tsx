"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import Container from "../Container";

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

const businessBenefits = [
  "Setup guides",
  "Hardware documentation",
  "Troubleshooting support",
  "Product resources",
  "Training content",
];

const supportFeatures = [
  "Common Payments",
  "Technical Assistance",
  "Hardware Support",
  "Business Consultation",
];

export default function HelpResourcesSectiontwo () {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      <Container>
        <div className="relative overflow-hidden">
          {/* Background Grid */}
          <div className="pointer-events-none absolute inset-0 z-0 grid grid-cols-4 border-x border-black/[0.04]">
            <div className="border-r border-black/[0.04]" />
            <div className="border-r border-black/[0.04]" />
            <div className="border-r border-black/[0.04]" />
            <div />
          </div>

          <div className="relative z-10">
            {/* TOP CONTENT */}
          <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.25 }}
  variants={fadeUp}
  className="text-center"
>
  <div className="mx-auto max-w-[820px]">
    <h2 className="text-[24px] font-light leading-tight tracking-[-0.04em] text-[#171717] md:text-[58px]">
      How Can{" "}
      <span className="font-semibold text-[#2F8429]">We Help You?</span>
    </h2>

    <p className="mt-4 text-[11px] leading-[1.45] tracking-[-0.01em] text-[#333333] md:text-[20px]">
      Find answers, support resources, guides, and troubleshooting information
      for HBOX Pay products and services.
    </p>

    <Link
      href="/contact-sales"
      className="mt-5 inline-flex h-[42px] items-center justify-center gap-1.5 rounded-full bg-[#A9EF7D] px-4 text-[15px] font-semibold text-black transition duration-300 hover:scale-[1.04] hover:bg-[#9BE96C]"
    >
      Talk to Sales
      <ArrowRight className="h-2.5 w-2.5" />
    </Link>
  </div>

  {/* Search Bar Center */}
  <div className="mx-auto mt-7 w-full max-w-[1020px] px-4">
    <div className="flex h-[60px] w-full items-center rounded-full bg-[#F4F4F4] px-5">
      <Search className="mr-3 h-[28px] w-[28px] shrink-0 text-[#171717]" />

      <input
        type="text"
        placeholder="Search for guides, support articles, or troubleshooting topics..."
        className="h-full w-full bg-transparent text-[15px] text-black outline-none placeholder:text-black/35"
      />
    </div>
  </div>
</motion.div>

            {/* RESOURCE BLOCK */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              className="mx-auto mt-10 grid  items-center gap-8 md:grid-cols-2"
            >
              <div className="relative h-[250px] overflow-hidden rounded-[8px] md:h-[570px]">
                <Image
                  src="https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/Rectangle%2034625008%20(17).png"
                  alt="HBOX Pay card payment support"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="max-w-[560px]">
                <h3 className="text-[22px] font-light leading-[1.05] tracking-[-0.045em] text-[#171717] md:text-[42px]">
                  Access Helpful Business &{" "}
                  <span className="font-semibold text-[#2F8429]">
                    Technical Resources
                  </span>
                </h3>

                <p className="mt-3 text-[15px] leading-[1.35] text-[#333333] md:text-[20px]">
                  Explore operational guides, setup documentation,
                  troubleshooting resources, and educational content designed to
                  help businesses manage HBOX Pay solutions more efficiently.
                </p>

                <div className="mt-4">
                  <h4 className="text-[15px] font-semibold text-black">
                    Business Benefits
                  </h4>

                  <ul className="mt-2 space-y-1.5 pl-4">
                    {businessBenefits.map((item) => (
                      <li
                        key={item}
                        className="list-disc text-[15px] leading-tight text-black"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* ADDITIONAL HELP BLOCK */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              className="mx-auto mt-10 grid  items-center gap-3 md:grid-cols-2"
            >
              <div className="max-w-[560px]">
                <h3 className="text-[22px] font-light leading-[1.05] tracking-[-0.045em] text-[#171717] md:text-[42px]">
                  Need{" "}
                  <span className="font-semibold text-[#2F8429]">
                    Additional Help?
                  </span>
                </h3>

                <p className="mt-3 text-[15px] leading-[1.35] text-[#333333] md:text-[20px]">
                  Dedicated Support for Your Business Operations. Our support
                  team is available to assist with setup guidance, technical
                  troubleshooting, payment support, and operational questions
                  related to HBOX Pay products and services.
                </p>

                <div className="mt-4">
                  <h4 className="text-[20px] font-semibold text-black">
                    Support Areas
                  </h4>

                  <ul className="mt-2 space-y-1.5 pl-4">
                    {supportFeatures.map((item) => (
                      <li
                        key={item}
                        className="list-disc text-[15px] leading-tight text-black"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <Link
                  href="/contact-sales"
                  className="mt-4 inline-flex h-[20px] items-center justify-center gap-1.5 rounded-full bg-[#A9EF7D] px-3 text-[8px] font-semibold text-black transition duration-300 hover:scale-[1.04] hover:bg-[#9BE96C]"
                >
                  Contact Support
                  <ArrowRight className="h-2.5 w-2.5" />
                </Link> */}
              </div>

              <div className="relative h-[250px] overflow-hidden rounded-[8px] md:h-[570px]">
                <Image
                  src="https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/Rectangle%2034625008%20(15).png"
                  alt="HBOX Pay terminal support"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}