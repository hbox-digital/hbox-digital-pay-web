"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const sections = [
  { id: "eligibility", title: "Eligibility" },
  { id: "services", title: "Services" },
  { id: "account-security", title: "Account Registration and Security" },
  { id: "license", title: "License and Permitted Use" },
  { id: "fees", title: "Fees and Payment" },
  { id: "conduct", title: "User Conduct" },
  { id: "ip-rights", title: "Intellectual Property Rights" },
  { id: "privacy", title: "Data Privacy" },
  { id: "third-party", title: "Third-Party Services" },
  { id: "availability", title: "Service Availability" },
  { id: "termination", title: "Suspension and Termination" },
  { id: "warranty", title: "Disclaimer of Warranties" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "changes", title: "Changes to Terms" },
  { id: "law", title: "Governing Law and Jurisdiction" },
  { id: "contact", title: "Contact Information" },
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

export default function TermsAndConditionsSection() {
  return (
    <section className="bg-[#F5F5F5] py-16 text-[#111111]">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        {/* HERO */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl"
        >
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Terms and Conditions
          </h2>

          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-black/70">
            <p>
              Welcome to HBOXPay. These Terms and Conditions (“Terms”)
              govern your access to and use of the website located at
              https://HBOXpay.com (the “Website”), including all software,
              applications, point-of-sale (POS) systems, payment solutions,
              and related services provided by HBOXPay (collectively, the
              “Services”).
            </p>

            <p className="font-semibold text-black">
              By accessing or using the Services, you agree to be legally
              bound by these Terms. If you do not agree to these Terms, you
              must not use the Services.
            </p>
          </div>
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
                className="rounded-[28px] border border-white/40 bg-white/60 p-7 shadow-sm backdrop-blur-xl"
              >
                <h3 className="text-lg font-semibold">Contents</h3>

                <div className="mt-6 flex flex-col gap-4">
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
            {/* ELIGIBILITY */}
            <motion.div
              id="eligibility"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                Eligibility
              </h3>

              <p className="mt-5 text-[15px] leading-relaxed text-black/70">
                You must be at least 18 years old to use the Services. If
                you access or use the Services on behalf of a company,
                organization, or other legal entity, you represent and
                warrant that you have the authority to bind that entity to
                these Terms.
              </p>
            </motion.div>

            {/* SERVICES */}
            <motion.div
              id="services"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                Services
              </h3>

              <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-black/70">
                <p>
                  HBOXPay provides cloud-based POS software and
                  payment-related business solutions, including but not
                  limited to:
                </p>

                <ul className="space-y-3 pl-5">
                  <li className="list-disc">Point-of-sale systems</li>
                  <li className="list-disc">Payment integrations</li>
                  <li className="list-disc">Inventory management</li>
                  <li className="list-disc">Reporting and analytics</li>
                  <li className="list-disc">
                    Customer and staff management
                  </li>
                  <li className="list-disc">Loyalty and invoicing tools</li>
                  <li className="list-disc">Online ordering features</li>
                </ul>

                <p>
                  We reserve the right to modify, suspend, or discontinue
                  any part of the Services at any time without liability or
                  prior notice.
                </p>
              </div>
            </motion.div>

            {/* ACCOUNT */}
            <motion.div
              id="account-security"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                Account Registration and Security
              </h3>

              <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-black/70">
                <p>
                  To access certain features, you may be required to create
                  an account.
                </p>

                <div>
                  <p className="font-semibold text-black">
                    You agree to:
                  </p>

                  <ul className="mt-4 space-y-3 pl-5">
                    <li className="list-disc">
                      Provide accurate and complete information
                    </li>

                    <li className="list-disc">
                      Maintain the confidentiality of your login credentials
                    </li>

                    <li className="list-disc">
                      Accept responsibility for all activities under your
                      account
                    </li>

                    <li className="list-disc">
                      Notify us immediately of any unauthorized access or
                      security breach
                    </li>
                  </ul>
                </div>

                <p>
                  HBOXPay shall not be liable for any loss or damage
                  resulting from unauthorized use of your account.
                </p>
              </div>
            </motion.div>

            {/* LICENSE */}
            <motion.div
              id="license"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                License and Permitted Use
              </h3>

              <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-black/70">
                <p>
                  Subject to compliance with these Terms, HBOXPay grants
                  you a limited, non-exclusive, non-transferable,
                  revocable license to access and use the Services solely
                  for lawful internal business purposes.
                </p>

                <div>
                  <p className="font-semibold text-black">
                    You shall not:
                  </p>

                  <ul className="mt-4 space-y-3 pl-5">
                    <li className="list-disc">
                      Copy, modify, distribute, or reproduce the Services
                    </li>

                    <li className="list-disc">
                      Reverse engineer, decompile, or attempt to extract
                      source code
                    </li>

                    <li className="list-disc">
                      Resell, sublicense, or commercially exploit the
                      Services without written consent
                    </li>

                    <li className="list-disc">
                      Use the Services in violation of applicable laws or
                      regulations
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* FEES */}
            <motion.div
              id="fees"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                Fees and Payment
              </h3>

              <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-black/70">
                <p>
                  Certain Services may require payment of subscription
                  fees, transaction charges, or other applicable costs.
                </p>

                <div>
                  <p className="font-semibold text-black">
                    By using paid Services, you agree that:
                  </p>

                  <ul className="mt-4 space-y-3 pl-5">
                    <li className="list-disc">
                      All fees are payable in accordance with the selected
                      plan
                    </li>

                    <li className="list-disc">
                      Fees are non-refundable unless otherwise expressly
                      stated
                    </li>

                    <li className="list-disc">
                      We may revise pricing upon prior notice
                    </li>

                    <li className="list-disc">
                      Failure to make timely payments may result in
                      suspension or termination of Services
                    </li>
                  </ul>
                </div>

                <p>
                  You are solely responsible for all applicable taxes,
                  duties, and governmental charges.
                </p>
              </div>
            </motion.div>

            {/* CONDUCT */}
            <motion.div
              id="conduct"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                User Conduct
              </h3>

              <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-black/70">
                <p className="font-semibold text-black">
                  You agree not to:
                </p>

                <ul className="space-y-3 pl-5">
                  <li className="list-disc">
                    Use the Services for unlawful, fraudulent, or deceptive
                    purposes
                  </li>

                  <li className="list-disc">
                    Upload or distribute viruses, malware, or harmful code
                  </li>

                  <li className="list-disc">
                    Attempt unauthorized access to systems, accounts, or
                    data
                  </li>

                  <li className="list-disc">
                    Interfere with or disrupt the integrity or performance
                    of the Services
                  </li>

                  <li className="list-disc">
                    Violate any applicable laws, regulations, or third-party
                    rights
                  </li>
                </ul>

                <p>
                  HBOXPay reserves the right to investigate and take
                  appropriate legal action for violations of this section.
                </p>
              </div>
            </motion.div>

            {/* IP RIGHTS */}
            <motion.div
              id="ip-rights"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                Intellectual Property Rights
              </h3>

              <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-black/70">
                <p>
                  All rights, title, and interest in and to the Website and
                  Services, including all software, technology, trademarks,
                  logos, designs, text, graphics, and content, are the
                  exclusive property of HBOXPay or its licensors.
                </p>

                <p>
                  You retain ownership of the data you upload or process
                  through the Services.
                </p>
              </div>
            </motion.div>

            {/* PRIVACY */}
            <motion.div
              id="privacy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                Data Privacy
              </h3>

              <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-black/70">
                <p>
                  Your use of the Services is also governed by our Privacy
                  Policy available at:
                </p>

                <Link
                  href="/privacy-policy"
                  className="font-semibold text-black underline underline-offset-4"
                >
                  https://hboxpay.com/privacy-policy
                </Link>

                <p>
                  By using the Services, you consent to the collection,
                  use, and processing of your information in accordance
                  with our Privacy Policy.
                </p>
              </div>
            </motion.div>

            {/* THIRD PARTY */}
            <motion.div
              id="third-party"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                Third-Party Services
              </h3>

              <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-black/70">
                <p>
                  The Services may integrate with third-party platforms,
                  payment processors, or external service providers.
                </p>

                <div>
                  <p className="font-semibold text-black">
                    HBOXPay does not control and is not responsible for:
                  </p>

                  <ul className="mt-4 space-y-3 pl-5">
                    <li className="list-disc">
                      Third-party services or websites
                    </li>

                    <li className="list-disc">
                      Payment gateway interruptions or failures
                    </li>

                    <li className="list-disc">
                      External content or integrations
                    </li>

                    <li className="list-disc">
                      Third-party privacy or security practices
                    </li>
                  </ul>
                </div>

                <p>
                  Your use of third-party services is governed solely by
                  their respective terms and policies.
                </p>
              </div>
            </motion.div>

            {/* AVAILABILITY */}
            <motion.div
              id="availability"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                Service Availability
              </h3>

              <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-black/70">
                <p>
                  While we strive to provide reliable Services, we do not
                  guarantee uninterrupted, secure, or error-free operation.
                </p>

                <p>
                  The Services may be temporarily unavailable due to
                  maintenance, technical issues, updates, or circumstances
                  beyond our reasonable control.
                </p>
              </div>
            </motion.div>

            {/* TERMINATION */}
            <motion.div
              id="termination"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                Suspension and Termination
              </h3>

              <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-black/70">
                <p>
                  HBOXPay may suspend or terminate your access to the
                  Services immediately, with or without notice, if:
                </p>

                <ol className="space-y-3 pl-5">
                  <li className="list-decimal">
                    You violate these Terms
                  </li>

                  <li className="list-decimal">
                    You fail to pay applicable fees
                  </li>

                  <li className="list-decimal">
                    We suspect fraudulent, abusive, or unlawful activity
                  </li>

                  <li className="list-decimal">
                    Your use poses a security or operational risk
                  </li>
                </ol>

                <div>
                  <p className="font-semibold text-black">
                    Upon termination:
                  </p>

                  <ul className="mt-4 space-y-3 pl-5">
                    <li className="list-disc">
                      Your right to access the Services shall immediately
                      cease
                    </li>

                    <li className="list-disc">
                      Outstanding payment obligations remain enforceable
                    </li>

                    <li className="list-disc">
                      Provisions intended to survive termination shall
                      remain in effect
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* WARRANTY */}
            <motion.div
              id="warranty"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                Disclaimer of Warranties
              </h3>

              <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-black/70">
                <p>
                  The Services are provided on an “AS IS” and “AS
                  AVAILABLE” basis without warranties of any kind, whether
                  express, implied, statutory, or otherwise.
                </p>

                <p>
                  To the fullest extent permitted by law, HBOXPay
                  disclaims all warranties, including but not limited to:
                </p>

                <ul className="space-y-3 pl-5">
                  <li className="list-disc">Merchantability</li>
                  <li className="list-disc">
                    Fitness for a particular purpose
                  </li>
                  <li className="list-disc">Non-infringement</li>
                  <li className="list-disc">
                    Availability, accuracy, or reliability of the Services
                  </li>
                </ul>

                <p>
                  We do not warrant that the Services will be uninterrupted,
                  secure, or free from errors or harmful components.
                </p>
              </div>
            </motion.div>

            {/* LIABILITY */}
            <motion.div
              id="liability"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                Limitation of Liability
              </h3>

              <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-black/70">
                <p>
                  To the maximum extent permitted by law, HBOXPay and its
                  affiliates, officers, employees, partners, and licensors
                  shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages.
                </p>

                <ul className="space-y-3 pl-5">
                  <li className="list-disc">Loss of profits</li>
                  <li className="list-disc">
                    Loss of business or revenue
                  </li>
                  <li className="list-disc">Loss of data</li>
                  <li className="list-disc">Business interruption</li>
                  <li className="list-disc">System failures</li>
                </ul>

                <p>
                  In no event shall the total liability of HBOXPay exceed
                  the amount paid by you to HBOXPay during the twelve (12)
                  months preceding the event giving rise to the claim.
                </p>
              </div>
            </motion.div>

            {/* INDEMNIFICATION */}
            <motion.div
              id="indemnification"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                Indemnification
              </h3>

              <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-black/70">
                <p>
                  You agree to defend, indemnify, and hold harmless
                  HBOXPay, its affiliates, directors, employees, and
                  partners from and against any claims, damages,
                  liabilities, losses, costs, or expenses arising from:
                </p>

                <ul className="space-y-3 pl-5">
                  <li className="list-disc">
                    Your use or misuse of the Services
                  </li>

                  <li className="list-disc">
                    Your violation of these Terms
                  </li>

                  <li className="list-disc">
                    Your violation of any law or third-party rights
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* CHANGES */}
            <motion.div
              id="changes"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                Changes to Terms
              </h3>

              <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-black/70">
                <p>
                  We reserve the right to modify or update these Terms at
                  any time.
                </p>

                <p>
                  Updated Terms will be posted on this page with a revised
                  “Last Updated” date. Your continued use of the Services
                  after such changes constitutes acceptance of the revised
                  Terms.
                </p>
              </div>
            </motion.div>

            {/* LAW */}
            <motion.div
              id="law"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                Governing Law and Jurisdiction
              </h3>

              <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-black/70">
                <p>
                  These Terms shall be governed by and interpreted in
                  accordance with applicable laws and regulations.
                </p>

                <p>
                  Any disputes arising out of or relating to these Terms or
                  the Services shall be subject to the exclusive
                  jurisdiction of the competent courts.
                </p>
              </div>
            </motion.div>

            {/* CONTACT */}
            <motion.div
              id="contact"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="scroll-mt-28"
            >
              <h3 className="text-3xl font-bold tracking-tight">
                Contact Information
              </h3>

              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black/70">
                <p>
                  If you have any questions regarding these Terms, please
                  contact us:
                </p>

                <div className="space-y-2 rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
                  <p>
                    <span className="font-semibold text-black">
                      HBOXPay
                    </span>
                  </p>

                  <p>
                    <span className="font-semibold text-black">
                      Website:
                    </span>{" "}
                    https://hboxpay.com
                  </p>

                  <p>
                    <span className="font-semibold text-black">
                      Email:
                    </span>{" "}
                    info@hboxpay.com
                  </p>

                  <p>
                    <span className="font-semibold text-black">
                      Terms Page:
                    </span>{" "}
                    https://hboxpay.com/terms-and-conditions
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}