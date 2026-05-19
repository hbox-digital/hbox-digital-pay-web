// components/home/BusinessTypesSection.tsx

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ShoppingCart,
  Store,
  type LucideIcon,
} from "lucide-react";

import Container from "@/components/Container";

interface BusinessCard {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  href: string;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
} satisfies Variants;

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
} satisfies Variants;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
} satisfies Variants;

const businessCards: BusinessCard[] = [
  {
    title: "Retail",
    description:
      "Manage inventory, sales, and customer experiences with one connected retail platform.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20948.png",
    icon: ShoppingCart,
    href: "/solutions/retail",
  },
  {
    title: "Salons & Spas",
    description:
      "Manage appointments, payments, staff schedules, and customer relationships from one platform.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20948.png",
    icon: Store,
    href: "/solutions/salons-spas",
  },
];

const duplicatedCards = [...businessCards, ...businessCards];

function SliderArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  const Icon = direction === "left" ? ArrowLeft : ArrowRight;

  return (
    <motion.button
      type="button"
      aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
      whileHover={{
        scale: 1.08,
        y: -2,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onClick}
      className="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-black text-white"
    >
      <Icon className="h-[18px] w-[18px]" />
    </motion.button>
  );
}

export default function BusinessTypesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    sliderRef.current?.scrollBy({
      left: direction === "left" ? -500 : 500,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const interval = window.setInterval(() => {
      const reachedEnd =
        slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10;

      if (reachedEnd) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: 500,
          behavior: "smooth",
        });
      }
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      <Container>
        <div className="flex flex-col gap-8">
          {/* TOP HEADER */}
          <div className="flex items-start justify-between gap-5">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
              className="max-w-[920px] font-inter text-fluid-hero font-light text-black"
            >
              Built for Every{" "}
              <span className="font-semibold text-[#3DA532]">
                Type of Business
              </span>
            </motion.h2>

            {/* DESKTOP ARROWS */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="hidden shrink-0 items-center gap-2 md:flex"
            >
              <SliderArrowButton
                direction="left"
                onClick={() => scrollSlider("left")}
              />

              <SliderArrowButton
                direction="right"
                onClick={() => scrollSlider("right")}
              />
            </motion.div>
          </div>

          {/* SLIDER */}
          <motion.div
            ref={sliderRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="no-scrollbar flex gap-5 overflow-x-auto scroll-smooth"
          >
            {duplicatedCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={`${card.title}-${index}`}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.35,
                    ease,
                  }}
                  className="w-[calc(100vw-2rem)] shrink-0 rounded-[32px] bg-[#F5F5F5] p-4 sm:w-[720px]"
                >
                  <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-center">
                    {/* LEFT CONTENT */}
                    <div className="flex h-full flex-col justify-between lg:col-span-5">
                      <div>
                        {/* ICON */}
                        <motion.div
                          whileHover={{
                            scale: 1.08,
                            rotate: 3,
                          }}
                          transition={{
                            duration: 0.3,
                            ease,
                          }}
                          className="flex h-[42px] w-[42px] items-center justify-center rounded-[14px] bg-white"
                        >
                          <Icon className="h-[22px] w-[22px] stroke-[1.8] text-black" />
                        </motion.div>

                        {/* TITLE */}
                        <h3 className="mt-10 font-inter text-fluid-h3 font-semibold text-black lg:mt-40">
                          {card.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="mt-4 max-w-[320px] font-inter text-fluid-body font-normal tracking-[-0.03em] text-black">
                          {card.description}
                        </p>
                      </div>

                      {/* BUTTON */}
                      {/* <Link
                        href={card.href}
                        className="group/button mt-7 inline-flex h-[44px] w-fit items-center gap-[10px] rounded-full bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] px-5 text-fluid-button font-medium text-black transition-all duration-300 hover:scale-[1.03]"
                      >
                        <span>Explore {card.title} Solutions</span>

                        <motion.span whileHover={{ rotate: 45 }}>
                          <ArrowUpRight className="h-[16px] w-[16px] stroke-[2.2]" />
                        </motion.span>
                      </Link> */}
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="lg:col-span-7">
                      <motion.div
                        whileHover={{
                          scale: 1.02,
                        }}
                        transition={{
                          duration: 0.35,
                          ease,
                        }}
                        className="relative h-[260px] overflow-hidden rounded-[24px] bg-white sm:h-[340px] lg:h-[420px]"
                      >
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 720px"
                          className="object-contain p-6"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {/* MOBILE ARROWS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-center justify-end gap-2 md:hidden"
          >
            <SliderArrowButton
              direction="left"
              onClick={() => scrollSlider("left")}
            />

            <SliderArrowButton
              direction="right"
              onClick={() => scrollSlider("right")}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}