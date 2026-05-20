"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const sections = [
  {
    id: "access-control",
    title: "Your Access to and Control Over Information",
  },
  {
    id: "security",
    title: "Security",
  },
  {
    id: "cookies",
    title: "IP Address and Cookies",
  },
  {
    id: "products-services",
    title: "Information About Our Products and Services",
  },
  {
    id: "faqs",
    title: "FAQs",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
} satisfies Variants;

export default function PrivacyPolicySection() {
  return (
    <section className="scroll-smooth bg-[#F5F5F5] py-16 text-[#111111]">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        {/* HERO */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid gap-6 lg:grid-cols-[1fr_420px]"
        >
          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Privacy Policy
            </h2>

            <div className="mt-6 max-w-2xl space-y-5 text-[15px] leading-relaxed text-black/70">
              <p>
                This notice discloses the privacy practices for hbox pay.com.
                This privacy notice applies solely to information collected by
                this website. It will notify you of the following:
              </p>

              <div className="space-y-4">
                <p>
                  <span className="font-semibold text-black">
                    What personally identifiable information
                  </span>{" "}
                  is collected from you through the website, how it is used,
                  and with whom it may be shared.
                </p>

                <p>
                  <span className="font-semibold text-black">
                    What choices
                  </span>{" "}
                  are available to you regarding the use of your data.
                </p>

                <p>
                  <span className="font-semibold text-black">
                    The security procedures
                  </span>{" "}
                  in place to protect your information.
                </p>

                <p>
                  <span className="font-semibold text-black">
                    How you can correct
                  </span>{" "}
                  any inaccuracies in the information.
                </p>

                <p>Information collection, use, and sharing.</p>
              </div>
            </div>
          </div>

          {/* NOTICE CARD */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="rounded-[28px] border border-white/30 bg-gradient-to-br from-[#9EFF73]/90 to-[#7BE95A]/85 p-8 shadow-sm backdrop-blur-xl"
          >
            <div className="space-y-7 text-[15px] leading-relaxed text-black/80">
              <p>
                We only have access to information that you voluntarily give us
                via email, website or other direct contact from you. We will
                not sell or rent this information to anyone.
              </p>

              <p>
                We will use your information to respond to you, regarding the
                reason you contacted us. We will not share your information with
                any third party outside of our organization, other than as
                necessary to fulfill your request.
              </p>

              <p>
                Unless you ask us not to, we may contact you via email, text or
                phone to tell you about specials, new products or services, or
                changes to this privacy policy.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* MOBILE NAV */}
        <div className="mt-10 overflow-x-auto pb-2 lg:hidden">
          <div className="flex w-max gap-3">
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="whitespace-nowrap rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/70 shadow-sm transition-all duration-300 hover:bg-black hover:text-white"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>

        {/* BODY */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[30%_70%]">
          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-20">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-[26px] border border-white/40 bg-white/60 p-6 shadow-sm backdrop-blur-xl"
              >
                <h3 className="text-lg font-semibold">Contents</h3>

                <div className="mt-6 flex flex-col gap-5">
                  {sections.map((item, index) => (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      className="group relative w-fit text-sm font-medium text-black/60 transition-colors duration-300 hover:text-black"
                    >
                      <span>
                        {index + 1}. {item.title}
                      </span>

                      <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </aside>

          {/* CONTENT */}
          <div className="space-y-16">
            {/* ACCESS CONTROL */}
            <motion.div
              id="access-control"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                Your Access to and Control Over Information:
              </h3>

              <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-black/70">
                <p>
                  You may opt out of any future contacts from us at any time.
                  You can do any of the following actions at any time by
                  contacting us via the email address or phone number provided
                  on our website:
                </p>

                <ul className="space-y-4 pl-5">
                  <li className="list-disc">
                    See what data we have about you, if any.
                  </li>

                  <li className="list-disc">
                    Change/correct any data we have about you.
                  </li>

                  <li className="list-disc">
                    Have us delete any data we have about you.
                  </li>

                  <li className="list-disc">
                    Express any concern you have about our use of your data.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* SECURITY */}
            <motion.div
              id="security"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                Security:
              </h3>

              <p className="mt-5 text-[15px] leading-relaxed text-black/70">
                We protect your information offline. Only dedicated departments
                have access to the provided information. The computers/servers
                in which we store personally identifiable information are kept
                in a secure environment.
              </p>
            </motion.div>

            {/* COOKIES */}
            <motion.div
              id="cookies"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                IP Address and Cookies:
              </h3>

              <p className="mt-5 text-[15px] leading-relaxed text-black/70">
                Non-personal information such as your IP address is
                automatically recorded when you enter our website. This
                information is used only to diagnose server problems and site
                administration. Cookies are used on this site to enhance user
                experience and for collecting usage statistics.
              </p>
            </motion.div>

            {/* PRODUCTS */}
            <motion.div
              id="products-services"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                Information About Our Products and Services:
              </h3>

              <p className="mt-5 text-[15px] leading-relaxed text-black/70">
                We make every effort to be as accurate as possible in describing
                the services and products offered on hbox pay.com. We do not
                warrant that the product or service descriptions, or any other
                content on this site, is accurate, complete, reliable, current,
                or free of error. Please call or email us immediately if you
                feel that the product or service you received from us differs
                from the descriptions on this website.
              </p>
            </motion.div>

            {/* FAQS */}
            <motion.div
              id="faqs"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                FAQs
              </h3>

              <div className="mt-8 space-y-6">
                {/* FAQ ITEM */}
                <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
                  <h4 className="text-lg font-semibold text-black">
                    1. What personal information does hbox pay collect?
                  </h4>

                  <p className="mt-3 text-[15px] leading-relaxed text-black/70">
                    hbox pay may collect personal details such as your name,
                    email address, phone number, and transaction related
                    information when you use the platform.
                  </p>
                </div>

                {/* FAQ ITEM */}
                <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
                  <h4 className="text-lg font-semibold text-black">
                    2. How does hbox pay use my information?
                  </h4>

                  <p className="mt-3 text-[15px] leading-relaxed text-black/70">
                    Your information is used to provide services, improve user
                    experience, process transactions, and communicate important
                    updates related to the platform.
                  </p>
                </div>

                {/* FAQ ITEM */}
                <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
                  <h4 className="text-lg font-semibold text-black">
                    3. Does hbox pay share user data with third parties?
                  </h4>

                  <p className="mt-3 text-[15px] leading-relaxed text-black/70">
                    hbox pay does not sell user data. Information may only be
                    shared with trusted service providers or when legally
                    required.
                  </p>
                </div>

                {/* FAQ ITEM */}
                <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
                  <h4 className="text-lg font-semibold text-black">
                    4. How does hbox pay keep my information secure?
                  </h4>

                  <p className="mt-3 text-[15px] leading-relaxed text-black/70">
                    hbox pay uses appropriate security measures and industry
                    standard practices to help protect user information from
                    unauthorized access or misuse.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FOOTER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative mt-16 overflow-hidden rounded-[32px] border border-white/30 bg-gradient-to-br from-[#9EFF73] to-[#7BE95A] px-6 py-12 shadow-sm"
        >
          {/* WATERMARK */}
          <div className="pointer-events-none absolute inset-0 z-0 flex items-end justify-center overflow-hidden">
            <span className="translate-y-10 text-center text-[90px] font-extrabold uppercase tracking-tight text-black/[0.04] md:text-[140px]">
              Privacy Policy
            </span>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="text-lg font-medium leading-relaxed text-black/80">
              If you feel that we are not abiding by this privacy policy, you
              should contact us immediately via telephone at{" "}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="tel:+16052991570"
                className="inline-block font-semibold underline underline-offset-4"
              >
              +1-605-307-6026
              </motion.a>{" "}
              or contact us via email at{" "}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="mailto:info@hbox pay.com"
                className="inline-block font-semibold underline underline-offset-4"
              >
                 info@HBOXPay.com
              </motion.a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}