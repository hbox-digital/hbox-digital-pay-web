import Container from "../Container";

const BG_IMAGE =
  "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/Rectangle%20161123939%20(1).png";

export default function InsightsSubscribeSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#C9FFB0] py-16 md:py-20"
      style={{
        backgroundImage: `url("${BG_IMAGE}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container className="relative z-10">
        <div className="mx-auto flex max-w-[980px] flex-col items-center text-center">
          <h2 className="text-[32px] font-light leading-tight tracking-[-0.04em] text-black sm:text-[42px] lg:text-[48px]">
            Stay Updated with{" "}
            <span className="font-semibold">HBOX Pay Insights</span>
          </h2>

          <p className="mt-5 max-w-[760px] text-[15px] leading-[1.7] text-black sm:text-[17px]">
            Get the latest updates on payment technology, business operations,
            and modern commerce trends.
          </p>

          <form className="mt-10 flex w-full max-w-[620px] items-center rounded-[18px] bg-white p-2 shadow-[0_16px_50px_rgba(0,0,0,0.06)]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-[52px] flex-1 rounded-[14px] bg-transparent px-5 text-[15px] text-black outline-none placeholder:text-black/45"
            />

            <button
              type="submit"
              className="h-[52px] rounded-[14px] bg-[#91EC6C] px-8 text-[15px] font-medium text-black transition hover:bg-[#7FE75A]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}