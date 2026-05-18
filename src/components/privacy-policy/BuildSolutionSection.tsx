"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

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

export default function BuildSolutionSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      {/* Background Grid */}
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
          className="grid items-center gap-10 lg:grid-cols-[35%_65%]"
        >
          {/* LEFT CONTENT */}
          <div className="max-w-[390px]">
            <h2 className="text-[34px] font-light leading-[1.05] tracking-[-0.045em] text-[#171717] sm:text-[42px] md:text-[46px]">
              Let&apos;s Build the{" "}
              <span className="font-semibold text-[#2F8429]">
                Right Solution for Your Business
              </span>
            </h2>

            <p className="mt-5 text-[16px] leading-[1.25] tracking-[-0.02em] text-[#333333]">
              Our team will help you explore the right hardware, software, and
              payment solutions based on your business requirements, industry,
              and operational goals.
            </p>
          </div>

          {/* FORM CARD */}
          <div className="rounded-[16px] bg-[#F4F4F4] p-5 shadow-sm md:p-6 lg:max-w-[610px]">
            <form className="space-y-4">
              {/* ROW 1 */}
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="h-[48px] w-full rounded-[12px] border border-transparent bg-white px-5 text-[12px] text-black outline-none transition duration-300 placeholder:text-[#333333] focus:border-[#A9EF7D] focus:ring-4 focus:ring-[#A9EF7D]/20"
                />

                <input
                  type="text"
                  placeholder="Last Name *"
                  className="h-[48px] w-full rounded-[12px] border border-transparent bg-white px-5 text-[12px] text-black outline-none transition duration-300 placeholder:text-[#333333] focus:border-[#A9EF7D] focus:ring-4 focus:ring-[#A9EF7D]/20"
                />
              </div>

              {/* ROW 2 */}
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="h-[48px] w-full rounded-[12px] border border-transparent bg-white px-5 text-[12px] text-black outline-none transition duration-300 placeholder:text-[#333333] focus:border-[#A9EF7D] focus:ring-4 focus:ring-[#A9EF7D]/20"
                />

                <input
                  type="email"
                  placeholder="Business Email Address *"
                  className="h-[48px] w-full rounded-[12px] border border-transparent bg-white px-5 text-[12px] text-black outline-none transition duration-300 placeholder:text-[#333333] focus:border-[#A9EF7D] focus:ring-4 focus:ring-[#A9EF7D]/20"
                />
              </div>

              {/* ROW 3 */}
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className="h-[48px] w-full rounded-[12px] border border-transparent bg-white px-5 text-[12px] text-black outline-none transition duration-300 placeholder:text-[#333333] focus:border-[#A9EF7D] focus:ring-4 focus:ring-[#A9EF7D]/20"
                />

                <input
                  type="text"
                  placeholder="Service Interested In *"
                  className="h-[48px] w-full rounded-[12px] border border-transparent bg-white px-5 text-[12px] text-black outline-none transition duration-300 placeholder:text-[#333333] focus:border-[#A9EF7D] focus:ring-4 focus:ring-[#A9EF7D]/20"
                />
              </div>

              {/* MESSAGE */}
              <textarea
                rows={3}
                placeholder="Tell us more about your needs and how we can help you... *"
                className="min-h-[48px] w-full resize-none rounded-[12px] border border-transparent bg-white px-5 py-4 text-[12px] text-black outline-none transition duration-300 placeholder:text-[#333333] focus:border-[#A9EF7D] focus:ring-4 focus:ring-[#A9EF7D]/20"
              />

              {/* CONSENT */}
              <div className="flex items-start gap-3 pt-2">
                <div className="mt-[2px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#A9EF7D]">
                  <Check className="h-3 w-3 text-white" />
                </div>

                <p className="text-[10px] leading-[1.45] text-[#333333]">
                  By submitting this form, you agree to receive support and
                  informational text messages from HBOX LLC at your number.
                  <br />
                  View our{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline underline-offset-2 transition hover:text-[#2F8429]"
                  >
                    Privacy Policy
                  </Link>{" "}
                  &{" "}
                  <Link
                    href="/terms-conditions"
                    className="underline underline-offset-2 transition hover:text-[#2F8429]"
                  >
                    Terms & Conditions
                  </Link>
                </p>
              </div>

              {/* BUTTON */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="inline-flex h-[34px] items-center justify-center gap-2 rounded-full bg-[#A9EF7D] px-5 text-[11px] font-semibold text-black transition duration-300 hover:scale-[1.03] hover:bg-[#9BE96C]"
                >
                  Connect with Sales
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}