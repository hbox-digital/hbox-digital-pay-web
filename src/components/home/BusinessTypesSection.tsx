// components/home/BusinessTypesSection.tsx

"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ShoppingCart,
  Store,
} from "lucide-react";

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
  return (
    <section className="overflow-hidden bg-[#Fff] py-12 md:py-16 lg:py-20">
      <Container>
        <div className="flex flex-col gap-8">
          {/* TOP HEADER */}
          <div className="flex items-start justify-between gap-5">
            <h2 className="text-[38px] font-light leading-[100%] tracking-[-0.04em] text-black sm:text-[48px] md:text-[60px] md:leading-[68px]">
              Built for Every {" "}
              <span className="font-semibold text-[#3DA532]">
               Type of Business
              </span>
            </h2>

            {/* ARROWS */}
            <div className="hidden items-center gap-2 md:flex">
              <button className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-black text-white">
                <ArrowLeft className="h-[16px] w-[16px]" />
              </button>

              <button className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-black text-white">
                <ArrowRight className="h-[16px] w-[16px]" />
              </button>
            </div>
          </div>

          {/* INFINITE SLIDER */}
          <div className="group relative w-full overflow-hidden">
            <div className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused]">
              {duplicatedCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <div
                    key={index}
                    className="w-[92vw] shrink-0 rounded-[28px] bg-[#EAEAEA] p-4 sm:w-[720px]"
                  >
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-center">
                      {/* LEFT CONTENT */}
                      <div className="flex h-full flex-col justify-between lg:col-span-5">
                        <div>
                          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[12px]">
                            <Icon className="h-[22px] w-[22px] stroke-[1.8] text-black" />
                          </div>

                          <h3 className="mt-16 text-[42px] font-semibold leading-[100%] tracking-[-0.04em] text-black">
                            {card.title}
                          </h3>

                          <p className="mt-4 max-w-[320px] text-[14px] leading-[1.45] tracking-[-0.03em] text-black/70">
                            {card.description}
                          </p>
                        </div>

                        <Link href="/" className="mt-7">
                          <button className="group/button flex h-[40px] w-fit items-center gap-[10px] rounded-full bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] px-5 text-[13px] font-medium leading-[100%] tracking-[-0.03em] text-black transition-all duration-300 hover:scale-[1.02]">
                            <span>
                              Explore {card.title} Solutions
                            </span>

                            <ArrowUpRight className="h-[16px] w-[16px] stroke-[2.2] transition-transform duration-300 group-hover/button:rotate-45" />
                          </button>
                        </Link>
                      </div>

                      {/* RIGHT IMAGE */}
                      <div className="lg:col-span-7">
                        <div className="relative h-[260px] overflow-hidden rounded-[24px] bg-[#F5F5F5] sm:h-[340px] lg:h-[420px]">
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-contain p-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE ARROWS */}
          <div className="flex items-center justify-end gap-2 md:hidden">
            <button className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-black text-white">
              <ArrowLeft className="h-[16px] w-[16px]" />
            </button>

            <button className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-black text-white">
              <ArrowRight className="h-[16px] w-[16px]" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}