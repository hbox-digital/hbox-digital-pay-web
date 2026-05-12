"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ShoppingCart,
  Store,
} from "lucide-react";
import { useRef } from "react";

const businessCards = [
  {
    title: "Retail",
    description:
      "Manage inventory, sales, and customer experiences with one connected retail platform.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20948.png",
    icon: ShoppingCart,
  },
  {
    title: "Salons & Spas",
    description:
      "Manage appointments, payments, staff schedules, and customer relationships from one platform.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20948.png",
    icon: Store,
  },
];

const duplicatedCards = [...businessCards, ...businessCards];

export default function BusinessTypesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-hidden bg-[#Fff] py-12 md:py-16 lg:py-20">
      <Container>
        <div className="flex flex-col gap-8">
          {/* TOP HEADER */}
          <div className="flex items-start justify-between gap-5">
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="text-[38px] font-light leading-[100%] tracking-[-0.04em] text-black sm:text-[48px] md:text-[60px] md:leading-[68px]"
            >
              Built for Every{" "}
              <span className="font-semibold text-[#3DA532]">
                Type of Business
              </span>
            </motion.h2>

            {/* DESKTOP ARROWS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
              }}
              className="hidden items-center gap-2 md:flex"
            >
              <motion.button
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollLeft}
                className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-black text-white"
              >
                <ArrowLeft className="h-[16px] w-[16px]" />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollRight}
                className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-black text-white"
              >
                <ArrowRight className="h-[16px] w-[16px]" />
              </motion.button>
            </motion.div>
          </div>

          {/* SLIDER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            ref={sliderRef}
            className="
              flex
              gap-5
              overflow-x-auto
              scroll-smooth
              no-scrollbar
            "
          >
            {duplicatedCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="w-[100vw] shrink-0 rounded-[28px] bg-[#EAEAEA] p-4 sm:w-[720px]"
                >
                  <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-center">
                    {/* LEFT CONTENT */}
                    <div className="flex h-full flex-col justify-between lg:col-span-5">
                      <div>
                        <motion.div
                          whileHover={{
                            scale: 1.08,
                            rotate: 3,
                          }}
                          className="flex h-[38px] w-[38px] items-center justify-center rounded-[12px]"
                        >
                          <Icon className="h-[22px] w-[22px] stroke-[1.8] text-black" />
                        </motion.div>

                        <h3 className="mt-16 text-[42px] lg:mt-50 font-semibold leading-[100%] tracking-[-0.04em] text-black">
                          {card.title}
                        </h3>

                        <p className="mt-4 max-w-[320px] text-[14px] leading-[1.45] tracking-[-0.03em] text-black/70">
                          {card.description}
                        </p>
                      </div>

                      <Link href="/" className="mt-7">
                        <motion.button
                          whileHover={{
                            scale: 1.03,
                          }}
                          whileTap={{ scale: 0.96 }}
                          className="group/button flex h-[40px] w-fit items-center gap-[10px] rounded-full bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] px-5 text-[13px] font-medium leading-[100%] tracking-[-0.03em] text-black transition-all duration-300 hover:scale-[1.02]"
                        >
                          <span>
                            Explore {card.title} Solutions
                          </span>

                          <motion.div whileHover={{ rotate: 45 }}>
                            <ArrowUpRight className="h-[16px] w-[16px] stroke-[2.2]" />
                          </motion.div>
                        </motion.button>
                      </Link>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="lg:col-span-7">
                      <motion.div
                        whileHover={{
                          scale: 1.02,
                        }}
                        className="relative h-[260px] overflow-hidden rounded-[24px] bg-[#ffffff] sm:h-[340px] lg:h-[420px]"
                      >
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-contain p-6"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* MOBILE ARROWS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="flex items-center justify-end gap-2 md:hidden"
          >
            <motion.button
              whileHover={{
                scale: 1.08,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollLeft}
              className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-black text-white"
            >
              <ArrowLeft className="h-[16px] w-[16px]" />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.08,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollRight}
              className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-black text-white"
            >
              <ArrowRight className="h-[16px] w-[16px]" />
            </motion.button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}