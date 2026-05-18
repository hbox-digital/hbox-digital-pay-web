// components/home/HeroSection.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import BookDemoModal from "@/components/modals/BookDemoModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="overflow-hidden bg-[#Fff] pb-10 pt-6 sm:pb-12 sm:pt-8 md:pb-16 md:pt-10 lg:pb-20">
      <Container>
        <div className="flex flex-col">
          {/* TOP CONTENT */}
          <div className="mb-7 flex flex-col gap-7 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="max-w-[900px]"
            >
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                }}
                className="font-inter text-[42px] font-light leading-[46px] tracking-[-0.04em] text-black sm:text-[52px] sm:leading-[58px] md:text-[60px] md:leading-[68px] lg:text-[60px] lg:leading-[68px]"
              >
                Run Your{" "}
                <span className="font-semibold text-[#53B033]">
                  Business
                </span>
                <br />
                Smarter with{" "}
                <span className="font-semibold text-[#53B033]">
                  HBOX Pay
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="mt-5 max-w-[760px] font-inter text-[17px] font-normal leading-[1.35] tracking-[-0.04em] text-[#000000] sm:text-[20px] md:mt-6 md:text-[24px] md:leading-[1.2] lg:text-[28px] lg:leading-[100%]"
              >
                Payments, inventory, analytics, and business operations unified
                into one powerful platform built for modern businesses.
              </motion.p>
            </motion.div>

            {/* RIGHT BUTTON */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="flex lg:justify-end"
            >
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                className="group flex h-[54px] items-center gap-3 rounded-full bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] px-6 text-[15px] font-medium tracking-[-0.03em] text-black shadow-[0px_8px_30px_rgba(140,238,84,0.28)] transition-all duration-300 sm:h-[58px] sm:px-7 sm:text-[16px]"
              >
                <span>Book a demo</span>

                <motion.div
                  whileHover={{ rotate: 8 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                  }}
                  className="flex h-[36px] w-[36px] items-center justify-center rounded-full transition-all duration-300 "
                >
                  <ExternalLink className="h-[20px] w-[20px] stroke-[2.2]" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* HERO MEDIA */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="relative"
          >
            {/* VIDEO WRAPPER */}
            <motion.div
              whileHover={{
                scale: 1.005,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative overflow-hidden rounded-[28px] sm:rounded-[34px]"
            >
              {/* VIDEO */}
              <div className="relative h-[260px] overflow-hidden sm:h-[420px] md:h-[500px] lg:h-[600px] xl:h-[600px]">
                <motion.video
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                  }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source
                    src="https://cdn.hboxdigital.com/public/hbox-pay/video/6267593_Business_Pos_3840x2160.mp4"
                    type="video/mp4"
                  />
                </motion.video>
              </div>

              {/* BOTTOM RIGHT CUT SHAPE */}
              <div className="absolute bottom-0 right-0 z-[5] h-[80px] w-[260px] rounded-tl-[34px] bg-[#Fff] sm:h-[90px] sm:w-[320px] md:h-[100px] md:w-[360px]" />

              {/* CURVE FIX TOP */}
              <div className="absolute bottom-[79px] right-0 z-[6] hidden h-[34px] w-[34px] rounded-br-[34px] bg-transparent shadow-[10px_10px_0_10px_#Fff] md:block" />

              {/* CURVE FIX LEFT */}
              <div className="absolute bottom-0 right-[259px] z-[6] hidden h-[34px] w-[34px] rounded-br-[34px] bg-transparent shadow-[10px_10px_0_10px_#Fff] md:block" />

              {/* CLIENT CARD */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                }}
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                className="absolute bottom-[16px] right-[2px] z-20 sm:bottom-[18px] sm:right-[2px] md:bottom-[20px] md:right-[12px]"
              >
                <div className="flex h-[54px] items-center rounded-full bg-[#B9F28F] pl-2 pr-5 shadow-[0px_12px_40px_rgba(0,0,0,0.14)] sm:h-[62px] sm:pl-2.5 sm:pr-6">
                  {/* AVATARS */}
                  <div className="flex items-center">
                    {[
                      "https://cdn.hboxdigital.com/public/hbox-pay/images/65a52b403cbfccd8bca878c3_talha%201.png",
                      "https://cdn.hboxdigital.com/public/hbox-pay/images/65a52b40ebda8d7f67ffb003_sair%201.png",
                      "https://cdn.hboxdigital.com/public/hbox-pay/images/65a52b4006d8db04840faa82_khaled%201.png",
                      "https://cdn.hboxdigital.com/public/hbox-pay/images/65a52ad36e85bb6be400d772_shanuak%201.png",
                    ].map((img, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.45 + index * 0.08,
                        }}
                        whileHover={{
                          y: 3,
                          scale: 1.05,
                        }}
                        className={`relative h-[34px] w-[34px] overflow-hidden rounded-full border-[5px] border-white bg-[#fff] sm:h-[42px] sm:w-[42px] ${
                          index !== 0 ? "-ml-3" : ""
                        }`}
                      >
                        <Image
                          src={img}
                          alt="Client"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* TEXT */}
                  <motion.p
                    animate={{
                      opacity: [1, 0.9, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="ml-3 whitespace-nowrap text-[13px] font-medium tracking-[-0.03em] text-black sm:ml-4 sm:text-[16px]"
                  >
                    100+ Global Clients
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Book Demo Modal */}
      <BookDemoModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}