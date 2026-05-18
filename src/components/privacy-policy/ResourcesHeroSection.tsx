"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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

export default function ResourcesHeroSection() {
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
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto flex max-w-[680px] flex-col items-center text-center"
        >
          <h2 className="text-[34px] font-light leading-[1.12] tracking-[-0.04em] text-[#171717] sm:text-[42px] md:text-[46px]">
            Resources Designed for
            <br />
            <span className="font-semibold text-[#2F8429]">
              Growing Businesses
            </span>
          </h2>

          <p className="mt-5 max-w-[650px] text-[18px] font-normal leading-[1.55] tracking-[-0.02em] text-[#3f3f3f] md:text-[20px]">
            Explore practical guides, payment insights, operational tips, and
            business resources designed to help small businesses simplify
            operations, improve customer experiences, and grow with confidence.
          </p>

          {/* <Link
            href="/resources"
            className="mt-8 inline-flex h-[30px] items-center justify-center gap-2 rounded-full bg-[#A9EF7D] px-5 text-[10px] font-semibold text-black shadow-sm transition duration-300 hover:scale-[1.04] hover:bg-[#9BE96C]"
          >
            Explore Resources
            <ArrowUpRight className="h-3 w-3" />
          </Link> */}
        </motion.div>
      </div>
    </section>
  );
}