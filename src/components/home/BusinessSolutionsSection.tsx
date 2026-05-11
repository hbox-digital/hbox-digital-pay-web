// components/home/BusinessSolutionsSection.tsx

import Container from "@/components/Container";
import Image from "next/image";

const cards = [
  {
    title: "POS System",
    description:
      "Smart POS built to simplify billing, sales, and daily business operations with speed and accuracy.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/Layer%200%201.png",
  },
  {
    title: "Mobile POS",
    description:
      "Accept payments, manage orders, and run your business from anywhere with a flexible mobile setup.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/payment-terminal-mockup%201.png",
  },
  {
    title: "Dashboard",
    description:
      "Track sales, performance, and customer activity with real time insights built for smarter decisions.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/Group%201597884660.png",
  },
  {
    title: "Payments",
    description:
      "Accept cards, QR payments, and digital wallets through a fast, secure, and reliable payment system.",
    image:
      "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20961.png",
  },
];

export default function BusinessSolutionsSection() {
  return (
    <section className="bg-[#F3F3F3] py-12 md:py-16 lg:py-20">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
            <div className="max-w-[800px]">
              <h2 className="max-w-[820px] md:text-[60px] text-[40px] font-light leading-[40px] md:leading-[68px] tracking-[-0.04em] text-black">
                Everything You Need to 
                <br />
                <span className="font-medium text-[#53B033] text-[40px] leading-[40px] md:text-[60px] font-semibold md:leading-[68px] tracking-[-0.04em]">
                 Run Your Business
                </span>
              </h2>
            </div>

            <div className="max-w-[420px] lg:ml-auto">
              <p className="text-[15px] font-normal leading-[1.45] tracking-[-0.03em] text-black/80 sm:text-[16px]">
                HBOXPay brings together payments, operations, reporting, and customer management into one connected ecosystem. From processing transactions to tracking inventory and monitoring business performance, everything works together so your team can move faster, serve better, and scale without operational chaos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="rounded-[20px] bg-[#EAEAEA] p-5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative mb-6 md:mb-12 lg:mb-16 flex h-[180px] items-center justify-center overflow-hidden rounded-[16px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-[28px] font-semibold leading-[1] tracking-[-0.04em] text-black">
                  {card.title}
                </h3>

                <p className="mt-4 text-[14px] leading-[1.45] tracking-[-0.03em] text-black/70">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}