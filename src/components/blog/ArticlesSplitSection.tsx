import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "../Container";

const RIGHT_IMG =
  "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/Rectangle%20161123937.png";

const LEFT_IMG =
  "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/Rectangle%20161123938%20(4).png";

export default function ArticlesSplitSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <Container className="relative z-10">
        <div className="space-y-14 md:space-y-20">
          {/* Row 1 */}
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
            <ArticleContent
              label="Featured Articles"
              title="Giving agents the"
              highlight="Ability to pay"
            />

            <div className="relative h-[240px] overflow-hidden rounded-[14px] sm:h-[300px] md:h-[340px]">
              <Image
                src={RIGHT_IMG}
                alt="Featured article"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
            <div className="relative order-2 h-[240px] overflow-hidden rounded-[14px] sm:h-[300px] md:order-1 md:h-[340px]">
              <Image
                src={LEFT_IMG}
                alt="Latest article"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 md:order-2">
              <ArticleContent
                label="Latest Articles"
                title="Giving agents the"
                highlight="Ability to pay"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ArticleContent({
  label,
  title,
  highlight,
}: {
  label: string;
  title: string;
  highlight: string;
}) {
  return (
    <div className="max-w-[430px]">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-[30px] w-[4px] rounded-full bg-[#9BE26A]" />
        <span className="text-[13px] font-semibold text-[#2C9F35]">
          {label}
        </span>
      </div>

      <h2 className="text-[34px] font-light leading-[1.05] tracking-[-0.04em] text-[#1f1f1f] sm:text-[42px] lg:text-[48px]">
        {title}
        <span className="block font-semibold text-[#2C7A27]">{highlight}</span>
      </h2>

      <p className="mt-5 text-[14px] leading-[1.45] text-black/70 sm:text-[15px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <Link
        href="/giving-agents-the-ability-to-pay"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#BFEFA3] px-4 py-2 text-[12px] font-semibold text-black transition hover:bg-[#AEE98D]"
      >
        Read more
        <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}