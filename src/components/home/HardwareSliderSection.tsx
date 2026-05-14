// components/home/HardwareSliderSection.tsx

"use client";

import Container from "@/components/Container";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

const hardwareItems = [
  {
    title: "PAX E800",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20956.png",
  },
  {
    title: "PAX A920",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20957.png",
  },
  {
    title: "PAX A920 PRO",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20958.png",
  },
  {
    title: "PAX E700",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20959.png",
  },
];

const duplicatedItems = [...hardwareItems, ...hardwareItems];

export default function HardwareSliderSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="overflow-hidden bg-[#Fff] py-12 md:py-16 lg:py-20">
      <Container>
        <div className="flex items-center gap-4">
          {/* LEFT ARROW */}
          <button
            onClick={scrollLeft}
            className="hidden h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#F5F5F5] text-black/40 transition-all duration-300 hover:bg-black hover:text-white xl:flex"
          >
            <ArrowLeft className="h-[18px] w-[18px]" />
          </button>

          {/* SLIDER */}
          <div className="relative flex-1 overflow-hidden">
            <div
              ref={sliderRef}
              className="hide-scrollbar flex gap-4 overflow-x-auto scroll-smooth"
            >
              {duplicatedItems.map((item, index) => (
                <div
                  key={index}
                  className="group min-w-[85%] rounded-[24px] bg-[#F5F5F5] p-5 transition-all duration-300 hover:-translate-y-1 sm:min-w-[48%] lg:min-w-[32%] xl:min-w-[calc(25%-12px)]"
                >
                  {/* IMAGE */}
                  <div className="relative flex h-[220px] items-center justify-center overflow-hidden rounded-[20px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={220}
                      height={220}
                      className="h-auto max-h-[190px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* TITLE */}
                  <div className="mt-5 text-center">
                    <h3 className="text-[18px] font-medium leading-[100%] tracking-[-0.03em] text-black">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={scrollRight}
            className="hidden h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#F5F5F5] text-black/40 transition-all duration-300 hover:bg-black hover:text-white xl:flex"
          >
            <ArrowRight className="h-[18px] w-[18px]" />
          </button>
        </div>

        {/* MOBILE BUTTONS */}
        <div className="mt-5 flex items-center justify-center gap-3 xl:hidden">
          <button
            onClick={scrollLeft}
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#F5F5F5] text-black/40 transition-all duration-300 hover:bg-black hover:text-white"
          >
            <ArrowLeft className="h-[18px] w-[18px]" />
          </button>

          <button
            onClick={scrollRight}
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#F5F5F5] text-black/40 transition-all duration-300 hover:bg-black hover:text-white"
          >
            <ArrowRight className="h-[18px] w-[18px]" />
          </button>
        </div>
      </Container>
    </section>
  );
}