// components/home/KitchenDisplaySection.tsx

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function KitchenDisplaySection() {
  return (
    <section className="overflow-hidden bg-[#Fff] py-12 md:py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-5">
            <div className="max-w-[520px]">
              <h2 className="text-[42px] font-light leading-[100%] tracking-[-0.04em] text-black sm:text-[52px] md:text-[40px] md:leading-[68px]">
                <span className="font-semibold text-[#3DA532]">
                  Kitchen 
                </span>{" "}
                Display System
              </h2>

              <p className="mt-6 max-w-[470px] text-[15px] leading-[1.5] tracking-[-0.03em] text-black/70 sm:text-[16px]">
                Keep orders organized with a connected kitchen display system built to reduce delays, improve accuracy, and support faster service operations.
              </p>

              <Link href="/" className="mt-8 inline-flex">
                <button className="group flex h-[42px] items-center gap-[10px] rounded-full bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] px-5 text-[13px] font-medium leading-[100%] tracking-[-0.03em] text-black transition-all duration-300 hover:scale-[1.02]">
                  <span>Upgrade Your Operations </span>

                  <ArrowUpRight className="h-[16px] w-[16px] stroke-[2.2] transition-transform duration-300 group-hover:rotate-45" />
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-7">
            <div className="relative h-[260px] overflow-hidden rounded-[28px] sm:h-[360px] md:h-[420px] lg:h-[500px]">
              <Image
                src="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624986.png"
                alt="Kitchen Display System"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}