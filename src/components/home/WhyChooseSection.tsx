// components/home/WhyChooseSection.tsx

import Container from "@/components/Container";
import {
  MonitorSmartphone,
  Network,
  Banknote,
  LifeBuoy,
} from "lucide-react";

const features = [
  {
    title: "Easy to Use",
    description:
      "Simple tools and a clean interface built for fast onboarding and daily operations.",
    icon: MonitorSmartphone,
  },
  {
    title: "Scalable Solution",
    description:
      "Built to support growing businesses across single and multiple store locations.",
    icon: Network,
  },
  {
    title: "Affordable Pricing",
    description:
      "Flexible pricing plans designed for startups, growing brands, and established businesses.",
    icon: Banknote,
  },
  {
    title: "Dedicated Support",
    description:
      "Reliable support whenever your business needs guidance, setup assistance, or technical help.",
    icon: LifeBuoy,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="overflow-hidden bg-[#Fff] py-12 md:py-16 lg:py-24">
      <Container>
        <div className="flex flex-col items-center">
          {/* HEADING */}
          <h2 className="text-center text-[38px] font-light leading-[100%] tracking-[-0.04em] text-black sm:text-[48px] md:text-[60px] md:leading-[68px]">
            Why Businesses Choose {" "}
            <span className="font-semibold text-[#39A935]">
            HBOXPay
            </span>
          </h2>

          {/* CARDS */}
          <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="rounded-[24px] bg-[#EAEAEA] p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* ICON */}
                  <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[16px] bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)]">
                    <Icon className="h-[28px] w-[28px] stroke-[2] text-black" />
                  </div>

                  {/* CONTENT */}
                  <h3 className="mt-10 text-[24px] font-semibold leading-[100%] tracking-[-0.04em] text-black">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.45] tracking-[-0.03em] text-black/70">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}