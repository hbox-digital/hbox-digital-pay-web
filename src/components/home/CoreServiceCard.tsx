// components/common/CoreServiceCard.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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

export default function CoreServiceCard({
  title,
  subtitle,
  description,
  image,
  buttonText = "Learn More",
  href = "/",
  imagePosition = "left",
  className,
}: CoreServiceCardProps) {
  return (
    <Container>
    <div
      className={cn(
        "overflow-hidden rounded-[24px] bg-[#F5F5F5] p-3 md:p-4 m-5",
        className
      )}
    >
      <div
        className={cn(
          "grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-center",
          imagePosition === "right" ? "lg:[&>*:first-child]:order-2" : ""
        )}
      >
        {/* IMAGE SIDE */}
        <div className="lg:col-span-4">
          <div className="relative h-[220px] overflow-hidden rounded-[18px] sm:h-[260px] lg:h-[230px]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="flex flex-col justify-center lg:col-span-8 lg:px-2">
          <span className="text-[16px] font-semibold uppercase leading-[100%] tracking-[0.05em] text-[#53B033]">
            {subtitle}
          </span>

          <h2 className="mt-2 text-[28px] font-semibold leading-[100%] tracking-[-0.04em] text-black sm:text-[34px]">
            {title}
          </h2>

          <p className="mt-4 max-w-[700px] text-[14px] md:text-[20px] font-normal leading-[1.5] tracking-[-0.03em] text-black/70 sm:text-[15px]">
            {description}
          </p>

          {/* <Link href={href} className="mt-5">
            <button className="group flex h-[40px] items-center gap-[10px] rounded-full bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] px-5 text-[14px] font-medium leading-[100%] tracking-[-0.03em] text-black transition-all duration-300 hover:scale-[1.02]">
              <span>{buttonText}</span>

              <ArrowUpRight className="h-[16px] w-[16px] stroke-[2.2] transition-transform duration-300 group-hover:rotate-45" />
            </button>
          </Link> */}
        </div>
      </div>
    </div>
    </Container>
  );
}