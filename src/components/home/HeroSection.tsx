// components/home/HeroSection.tsx

import Image from "next/image";
import Container from "@/components/Container";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#F3F3F3] py-8 sm:py-10 md:py-14">
      <Container>
        <div className="flex flex-col">
          <div className="mb-6 flex flex-col gap-6 md:mb-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[720px]">
              <h1 className="max-w-[820px] md:text-[60px] text-[40px] font-light leading-[40px] md:leading-[68px] tracking-[-0.04em] text-black">
                Run Your{" "}
                <span className="font-medium text-[#53B033] text-[40px] leading-[40px] md:text-[60px] font-semibold md:leading-[68px] tracking-[-0.04em]">
                  Business
                </span>
                <br />
                Smarter with{" "}
                <span className="font-medium text-[#53B033] text-[40px] leading-[40px]  md:text-[60px] font-semibold md:leading-[68px] tracking-[-0.04em]">
                  HBOXPay
                </span>
              </h1>

              <p className="mt-4 max-w-[640px] text-[15px] leading-[1.4] text-black/85 sm:text-[16px] md:mt-5 md:text-[18px]">
                Payments, inventory, analytics, and business operations unified
                into one powerful platform built for modern businesses.
              </p>
            </div>
            <Link href="./">
              <button className="group flex h-[46px] items-center gap-[14px] rounded-full bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] px-7 text-[16.28px] font-medium leading-[16px] tracking-[-0.03em] text-black transition-all duration-300 hover:scale-[1.02]">
                <span>Book a demo</span>

                <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full">
                  <ExternalLink className="h-[26px] w-[26px] stroke-[2]" />
                </div>
              </button>
            </Link>
          </div>

          <div className="relative overflow-visible">
            <div className="relative h-[240px] overflow-hidden rounded-[22px] sm:h-[360px] sm:rounded-[28px] md:h-[520px] lg:h-[620px] lg:rounded-[34px]">
              <Image
                src="https://cdn.hboxdigital.com/public/hbox-pay/images/Subtract%20(4).png"
                alt="Hbox Pay"
                fill
                priority
                className="100% 100%"
              />
            </div>

            <div className="absolute bottom-[-20px] right-2 sm:right-5 md:bottom-[14px] md:-right-7">
              <div className="flex items-center rounded-full bg-[#B9F28F] py-1.5 pl-1.5 pr-3 shadow-lg sm:py-2 sm:pl-2 sm:pr-5">
                <div className="flex items-center">
                  {[
                    "https://cdn.hboxdigital.com/public/hbox-pay/images/65a52b403cbfccd8bca878c3_talha%201.png",
                    "https://cdn.hboxdigital.com/public/hbox-pay/images/65a52b40ebda8d7f67ffb003_sair%201.png",
                    "https://cdn.hboxdigital.com/public/hbox-pay/images/65a52b4006d8db04840faa82_khaled%201.png",
                    "https://cdn.hboxdigital.com/public/hbox-pay/images/65a52ad36e85bb6be400d772_shanuak%201.png",
                  ].map((img, index) => (
                    <div
                      key={index}
                      className={`relative h-[34px] w-[34px] overflow-hidden rounded-full border-[2px] border-white bg-white sm:h-[42px] sm:w-[42px] sm:border-[3px] ${
                        index !== 0 ? "-ml-5 sm:-ml-3" : ""
                      }`}
                    >
                      <Image
                        src={img}
                        alt="Client"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <p className="ml-3 text-[11px] font-medium tracking-[-0.02em] text-black sm:ml-4 sm:text-[14px]">
                  100+ Global Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
