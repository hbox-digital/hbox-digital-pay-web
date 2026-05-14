// components/common/WhyBusinessesSection.tsx

"use client";

import Container from "../Container";
import { motion } from "framer-motion";

interface WhyBusinessesSectionProps {
  title: string;
  highlightText: string;
  description: string;
  backgroundImage: string;
}

export default function WhyBusinessesSection({
  title,
  highlightText,
  description,
  backgroundImage,
}: WhyBusinessesSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
        }}
      />
      {/* CONTENT */}
      <Container className="relative z-10">
        <div className="flex min-h-[340px] items-center justify-center py-14 sm:min-h-[420px] sm:py-16 md:min-h-[520px] md:py-20">
          <div className="mx-auto max-w-[1180px] text-center">
            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                font-inter
                text-[34px]
                font-light
                leading-[40px]
                tracking-[-0.04em]
                text-white

                sm:text-[44px]
                sm:leading-[50px]

                md:text-[60px]
                md:leading-[68px]
              "
            >
              {title}{" "}

              <span className="font-semibold text-[#A3EC6B]">
                {highlightText}
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="
                mx-auto
                mt-7
                max-w-[1200px]
                font-inter
                text-[16px]
                font-normal
                leading-[30px]
                tracking-[-0.04em]
                text-white

                sm:text-[20px]
                sm:leading-[36px]

                md:text-[28px]
                md:leading-[46px]
              "
            >
              {description}
            </motion.p>
          </div>
        </div>
      </Container>
    </section>
  );
}