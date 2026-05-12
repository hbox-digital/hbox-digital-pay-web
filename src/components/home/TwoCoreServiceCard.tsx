// components/common/CoreServiceCard.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "../Container";

interface CoreServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText?: string;
  href?: string;
  imagePosition?: "left" | "right";
  className?: string;
}

export default function TwoCoreServiceCard({
  title,
  subtitle,
  description,
  image,
  buttonText = "Explore HBOX Digital",
  href = "/",
  imagePosition = "right",
  className,
}: CoreServiceCardProps) {
  return (
    <section className="py-4 md:py-6">
      <Container>
        <div
          className={cn(
            "relative overflow-hidden rounded-[34px] bg-[#0B0B0B]",
            className
          )}
        >
          {/* BACKGROUND GLOW */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(253,199,0,0.08),transparent_35%)]" />

          {/* CONTENT */}
          <div
            className={cn(
              "relative z-10 grid min-h-[420px] grid-cols-1 overflow-hidden lg:min-h-[470px] lg:grid-cols-12",
              imagePosition === "left"
                ? "lg:[&>*:first-child]:order-2"
                : ""
            )}
          >
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center px-6 py-10 sm:px-8 md:px-12 lg:col-span-7 lg:py-14 xl:px-14">
              <span className="w-fit rounded-full border border-[#FDC7001F] bg-[#FDC70014] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#FDC700]">
                {subtitle}
              </span>

              <h2 className="mt-5 max-w-[700px] font-inter text-[38px] font-light leading-[42px] tracking-[-0.05em] text-white sm:text-[48px] sm:leading-[52px] md:text-[60px] md:leading-[64px]">
                {title.split("HBOX Digital")[0]}

                <span className="font-semibold text-[#FDC700]">
                  HBOX Digital
                </span>
              </h2>

              <p className="mt-6 max-w-[760px] font-inter text-[16px] font-normal leading-[1.55] tracking-[-0.03em] text-white/70 sm:text-[18px] md:text-[22px] md:leading-[1.45]">
                {description}
              </p>

              <Link href={href} className="mt-8 w-fit">
                <button className="group flex h-[56px] items-center gap-3 rounded-full bg-[#F7D84D] px-6 text-[15px] font-medium tracking-[-0.03em] text-black transition-all duration-300 hover:scale-[1.03] sm:h-[60px] sm:px-7 sm:text-[16px]">
                  <span>{buttonText}</span>

                  <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#FFE98F] transition-all duration-300 group-hover:rotate-12">
                    <ExternalLink className="h-[18px] w-[18px] stroke-[2.2]" />
                  </div>
                </button>
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative lg:col-span-5">
              <div className="relative h-[320px] w-full sm:h-[380px] md:h-[460px] lg:h-full">
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  className="object-contain object-bottom"
                />
              </div>

              {/* RIGHT SIDE DARK FADE */}
              <div className="absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-[#0B0B0B] to-transparent" />

              {/* BOTTOM GLOW */}
              <div className="absolute bottom-0 left-0 h-[140px] w-full bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
            </div>
          </div>

          {/* DECORATIVE BLUR */}
          <div className="absolute -right-20 top-0 h-[300px] w-[300px] rounded-full bg-[#FDC700]/10 blur-[120px]" />
        </div>
      </Container>
    </section>
  );
}