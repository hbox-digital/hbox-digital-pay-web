// components/home/TrustedBanner.tsx

import Container from "../Container";

export default function TrustedBanner() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)]">
        <Container>
      <div className="flex min-h-[52px] items-center justify-center px-4 py-3 sm:min-h-[60px] md:min-h-[74px] lg:min-h-[88px]">
        <p className="w-full text-center text-[13px] font-medium leading-[100%] tracking-[-0.04em] text-black sm:text-[16px] md:text-[22px] lg:text-[23px] xl:text-[26px]">
          Trusted by growing businesses across retail, restaurants, and modern service industries. 
        </p>
      </div>
      </Container>
    </section>
  );
}