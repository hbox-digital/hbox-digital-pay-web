// components/home/CtaSection.tsx

import Container from "@/components/Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="overflow-hidden bg-[#Fff] py-12 md:py-16 lg:py-24">
      <Container>
        <div
          className="relative overflow-hidden rounded-[32px] px-6 py-16 sm:px-10 md:px-16 md:py-24 lg:px-20"
          style={{
            backgroundImage:
              "url('https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624963.png')",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        >
          {/* OVERLAY */}
          {/* <div className="absolute inset-0 bg-black/30" /> */}

          {/* CONTENT */}
          <div className="relative z-10 mx-auto flex max-w-[980px] flex-col items-center text-center">
            <h2 className="text-[42px] font-light leading-[100%] tracking-[-0.04em] text-white sm:text-[52px] md:text-[40px] md:leading-[74px]">
              Start Growing Your Business{" "}
              <span className="font-semibold">
                with HBOXPay
              </span>
            </h2>

            <p className="mt-6 max-w-[760px] text-[15px] leading-[1.5] tracking-[-0.03em] text-white sm:text-[17px] md:text-[18px]">
              From payments and POS systems to inventory, analytics, and customer management, HBOXPay gives businesses the tools to operate smarter and grow faster.
            </p>

            {/* BUTTON */}
            <Link href="/" className="mt-8">
              <button className="group flex h-[46px] items-center gap-[10px] rounded-full bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] px-6 text-[14px] font-medium leading-[100%] tracking-[-0.03em] text-black transition-all duration-300 hover:scale-[1.02] sm:h-[50px] sm:px-7 sm:text-[16px]">
                <span>Get Started Today</span>

                <ArrowUpRight className="h-[18px] w-[18px] stroke-[2.2] transition-transform duration-300 group-hover:rotate-45" />
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}