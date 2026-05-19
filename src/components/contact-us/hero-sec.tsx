// components/common/HeroSectionContact.tsx

"use client";

import { useState } from "react";
import Container from "../Container";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import BookDemoModal from "@/components/modals/BookDemoModal";

interface HeroSectionContactProps {
  titleOne: string;
  titleHighlight?: string;
  titleTwo?: string;
  description: string;
  backgroundImage: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function HeroSectionContact({
  titleOne,
  titleHighlight,
  titleTwo,
  description,
  backgroundImage,
  buttonText = "Get Started",
}: HeroSectionContactProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND */}
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
        <div className="flex min-h-[500px] items-center py-25 sm:min-h-[620px] md:min-h-[820px]">
          <div className="max-w-[820px]">
            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-inter text-[38px] font-light leading-[42px] tracking-[-0.04em] text-white min-[480px]:text-[44px] min-[480px]:leading-[48px] sm:text-[52px] sm:leading-[58px] md:text-[60px] md:leading-[68px] lg:text-[60px] lg:leading-[68px]"
            >
              {titleOne}

              {titleHighlight && (
                <span className="font-semibold text-[#A3EC6B]">
                  {" "}
                  {titleHighlight}
                </span>
              )}

              {titleTwo && (
                <span className="font-semibold text-[#A3EC6B]">
                  {titleTwo}
                </span>
              )}
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="mt-7 max-w-full font-inter text-[16px] font-normal leading-[30px] tracking-[-0.04em] text-white min-[480px]:text-[18px] min-[480px]:leading-[34px] sm:text-[20px] sm:leading-[38px] md:text-[24px] md:leading-[46px]"
            >
              {description}
            </motion.p>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="mt-10"
            >
              <motion.button
                type="button"
                onClick={() => setIsModalOpen(true)}
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{ scale: 0.96 }}
                className="group flex h-[48px] items-center gap-3 rounded-full bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] px-5 text-[14px] font-medium tracking-[-0.03em] text-black transition-all duration-300 sm:h-[52px] sm:px-6 sm:text-[15px]"
              >
                <span>{buttonText}</span>

                <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full transition-all duration-300">
                  <ExternalLink className="h-[15px] w-[15px] stroke-[2.2]" />
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Book Demo Modal */}
      <BookDemoModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}