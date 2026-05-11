// components/home/KioskSection.tsx

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function KioskSection() {
  return (
    <section className="overflow-hidden border-b-[4px] border-[#39A935] bg-[#F3F3F3] py-12 md:py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-4">
            <div className="max-w-[420px]">
              <h2 className="text-[42px] font-light leading-[100%] tracking-[-0.04em] text-black sm:text-[52px] md:text-[60px] md:leading-[68px]">
                <span className="font-semibold text-[#39A935]">
                  Kiosk
                </span>
                <br />
                Self Ordering for Restaurants
              </h2>

              <p className="mt-6 max-w-[360px] text-[15px] leading-[1.5] tracking-[-0.03em] text-black/70 sm:text-[16px]">
                Speed up ordering with a self service kiosk built for restaurants, featuring fast payments, smooth ordering flows, and a simple customer experience.
              </p>

              <Link href="/" className="mt-8 inline-flex">
                <button className="group flex h-[42px] items-center gap-[10px] rounded-full bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] px-5 text-[13px] font-medium leading-[100%] tracking-[-0.03em] text-black transition-all duration-300 hover:scale-[1.02]">
                  <span>Contact Sales</span>

                  <ArrowUpRight className="h-[16px] w-[16px] stroke-[2.2] transition-transform duration-300 group-hover:rotate-45" />
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-8">
            <div className="relative h-[320px] w-full sm:h-[420px] md:h-[520px] lg:h-[620px]">
              <Image
                src="https://cdn.hboxdigital.com/public/hbox-pay/images/image%20955.png"
                alt="Kiosk"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}