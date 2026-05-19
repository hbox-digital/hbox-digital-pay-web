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
  const isImageRight = imagePosition === "right";

  return (
    <section className="bg-white py-4">
      <Container>
        <div
          className={cn(
            "overflow-hidden rounded-[24px] bg-[#F5F5F5] p-3 md:p-4",
            className
          )}
        >
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-center">
            {/* IMAGE SIDE */}
            <div
              className={cn(
                "lg:col-span-4",
                isImageRight ? "lg:order-2" : "lg:order-1"
              )}
            >
              <div className="relative h-[220px] overflow-hidden rounded-[18px] sm:h-[260px] lg:h-[230px]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* CONTENT SIDE */}
            <div
              className={cn(
                "flex flex-col justify-center px-1 py-3 lg:col-span-8 lg:px-2 lg:py-0",
                isImageRight ? "lg:order-1" : "lg:order-2"
              )}
            >
              <span className="font-inter text-fluid-small font-semibold uppercase tracking-[0.05em] text-[#53B033]">
                {subtitle}
              </span>

              <h2 className="mt-2 font-inter text-fluid-h3 font-semibold text-black">
                {title}
              </h2>

              <p className="mt-4 max-w-[700px] font-inter text-fluid-body font-normal tracking-[-0.03em] text-black/70">
                {description}
              </p>

              <Link
                href={href}
                className="group mt-5 inline-flex h-[40px] w-fit items-center gap-[10px] rounded-full bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] px-5 text-fluid-button font-medium text-black transition-all duration-300 hover:scale-[1.02]"
              >
                <span>{buttonText}</span>

                <ArrowUpRight className="h-[16px] w-[16px] stroke-[2.2] transition-transform duration-300 group-hover:rotate-45" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}