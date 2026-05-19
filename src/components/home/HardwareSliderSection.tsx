// components/home/HardwareSliderSection.tsx

"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/Container";

const hardwareItems = [
  {
    title: "PAX E800",
    image: "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20956.png",
  },
  {
    title: "PAX A920",
    image: "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20957.png",
  },
  {
    title: "PAX A920 PRO",
    image: "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20958.png",
  },
  {
    title: "PAX E700",
    image: "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20959.png",
  },
];

const duplicatedItems = [...hardwareItems, ...hardwareItems];

function SliderButton({
  direction,
  onClick,
  className = "",
}: {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
}) {
  const Icon = direction === "left" ? ArrowLeft : ArrowRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
      className={`h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#F5F5F5] text-black/40 transition-all duration-300 hover:bg-black hover:text-white ${className}`}
    >
      <Icon className="h-[18px] w-[18px]" />
    </button>
  );
}

export default function HardwareSliderSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    sliderRef.current?.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      <Container>
        <div className="flex items-center gap-4">
          {/* LEFT ARROW */}
          <SliderButton
            direction="left"
            onClick={() => scrollSlider("left")}
            className="hidden xl:flex"
          />

          {/* SLIDER */}
          <div className="relative flex-1 overflow-hidden">
            <div
              ref={sliderRef}
              className="hide-scrollbar flex gap-4 overflow-x-auto scroll-smooth"
            >
              {duplicatedItems.map((item, index) => (
                <motion.article
                  key={`${item.title}-${index}`}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group min-w-[85%] rounded-[24px] bg-[#F5F5F5] p-5 transition-all duration-300 sm:min-w-[48%] lg:min-w-[32%] xl:min-w-[calc(25%-12px)]"
                >
                  {/* IMAGE */}
                  <div className="relative flex h-[220px] items-center justify-center overflow-hidden rounded-[20px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={220}
                      height={220}
                      sizes="220px"
                      className="h-auto max-h-[190px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* TITLE */}
                  <div className="mt-5 text-center">
                    <h3 className="font-inter text-fluid-subtitle font-medium tracking-[-0.03em] text-black">
                      {item.title}
                    </h3>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW */}
          <SliderButton
            direction="right"
            onClick={() => scrollSlider("right")}
            className="hidden xl:flex"
          />
        </div>

        {/* MOBILE BUTTONS */}
        <div className="mt-5 flex items-center justify-center gap-3 xl:hidden">
          <SliderButton
            direction="left"
            onClick={() => scrollSlider("left")}
            className="flex"
          />

          <SliderButton
            direction="right"
            onClick={() => scrollSlider("right")}
            className="flex"
          />
        </div>
      </Container>
    </section>
  );
}