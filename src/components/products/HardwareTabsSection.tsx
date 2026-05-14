// components/common/HardwareTabsSection.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Container from "../Container";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  eyebrow?: string;
  contentTitle: string;
  highlightText?: string;
  descriptionOne: string;
  descriptionTwo?: string;
  image: string;
};

interface HardwareTabsSectionProps {
  tabs: Tab[];
  className?: string;
}

export default function HardwareTabsSection({
  tabs,
  className,
}: HardwareTabsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const activeTab = tabs[activeIndex];

  useEffect(() => {
    startAutoPlay();

    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();

    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) =>
        prev === tabs.length - 1 ? 0 : prev + 1
      );
    }, 4500);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  return (
    <section
      className={cn(
        "overflow-hidden bg-[#Fff] py-8 sm:py-7 md:py-10 lg:py-12 ",
        className
      )}
    >
      <Container>
        <div
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
          className="
            rounded-[34px]
            bg-[#ECECEC]

            p-4

            sm:p-5

            md:p-6

            lg:p-7
          "
        >
          <div className="grid gap-6 lg:grid-cols-12">
            {/* LEFT TABS */}
            <div className="lg:col-span-4">
              <div className="space-y-3">
                {tabs.map((tab, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        `
                          flex
                          min-h-[72px]
                          w-full
                          items-center
                          rounded-[16px]
                          px-6
                          text-left
                          transition-all
                          duration-300

                          md:min-h-[82px]
                        `,
                        isActive
                          ? "bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.04)]"
                          : "bg-[#E3E3E3] hover:bg-white/70"
                      )}
                    >
                      <span
                        className={cn(
                          `
                            font-inter
                            text-[16px]
                            font-normal
                            leading-[1.4]
                            tracking-[-0.03em]

                            md:text-[18px]
                          `,
                          isActive
                            ? "font-semibold text-[#3A922B]"
                            : "text-black/80"
                        )}
                      >
                        {tab.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className="
                    flex
                    h-full
                    flex-col
                    justify-between
                  "
                >
                  {/* IMAGE TOP RIGHT */}
                  <div className="flex justify-center md:justify-end">
                    <div
                      className="
                        relative
                        h-[220px]
                        w-full
                        max-w-[260px]

                        sm:h-[280px]
                        sm:max-w-[320px]

                        md:h-[360px]
                        md:max-w-[420px]

                        lg:h-[420px]
                        lg:max-w-[500px]
                      "
                    >
                      <Image
                        src={activeTab.image}
                        alt={activeTab.contentTitle}
                        fill
                        priority
                        className="object-contain object-top"
                      />
                    </div>
                  </div>

                  {/* CONTENT BOTTOM */}
                  <div className="mt-6 md:-mt-4 lg:-mt-10">
                    {activeTab.eyebrow && (
                      <span
                        className="
                          font-inter
                          text-[15px]
                          font-medium
                          leading-[100%]
                          tracking-[-0.03em]
                          text-[#3A922B]

                          md:text-[18px]
                        "
                      >
                        {activeTab.eyebrow}
                      </span>
                    )}

                    <h2
                      className="
                        mt-3
                        font-inter
                        text-[36px]
                        font-light
                        leading-[40px]
                        tracking-[-0.04em]
                        text-black

                        sm:text-[44px]
                        sm:leading-[48px]

                        md:text-[42px]
                        md:leading-[50px]
                      "
                    >
                      {activeTab.contentTitle}{" "}

                      {activeTab.highlightText && (
                        <span className="font-semibold text-[#3A922B]">
                          {activeTab.highlightText}
                        </span>
                      )}
                    </h2>

                    <div className="mt-5 space-y-5">
                      <p
                        className="
                          max-w-[860px]
                          font-inter
                          text-[15px]
                          font-normal
                          leading-[1.65]
                          tracking-[-0.03em]
                          text-black

                          md:text-[24px]
                          md:leading-[25px]
                        "
                      >
                        {activeTab.descriptionOne}
                      </p>

                      {activeTab.descriptionTwo && (
                        <p
                          className="
                            max-w-[860px]
                            font-inter
                            text-[15px]
                            font-normal
                            leading-[1.65]
                            tracking-[-0.03em]
                            text-black

                            md:text-[24px]
                            md:leading-[25px]
                          "
                        >
                          {activeTab.descriptionTwo}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}