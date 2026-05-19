"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Container from "../Container";
import { Checkbox } from "@/components/ui/checkbox";

interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  posSolution: string;
  message: string;
  consent: boolean;
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
} satisfies Variants;

const contactCards = [
  {
    icon: Phone,
    title: "+1-605-307-6026",
    description: "Speak directly with our payment specialists.",
    href: "tel:+16053076026",
  },
  {
    icon: Mail,
    title: "sales@hboxpay.com",
    description:
      "Send us your questions and our team will get back to you quickly.",
    href: "mailto:sales@hboxpay.com",
  },
  {
    icon: MapPin,
    title: "11 Apex Dr Suite 300 -A, Marlborough, MA 01752, United States",
    description: "Connect with our business solutions team.",
    href: "#",
  },
];

export default function CheckoutExperienceSection() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<CheckoutFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      businessName: "",
      businessType: "",
      posSolution: "",
      message: "",
      consent: false,
    },
  });

  const consent = watch("consent");

  const onSubmit = async (data: CheckoutFormData) => {
    if (!data.consent) {
      alert("Please agree to receive support and informational messages");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/book-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid items-center gap-10 lg:grid-cols-[38%_62%]"
        >
          {/* LEFT CONTENT */}
          <div className="max-w-[460px]">
            <h2 className="text-[34px] font-light leading-[1.08] tracking-[-0.045em] text-[#171717] sm:text-[42px] md:text-[48px]">
              Let&apos;s Modernize{" "}
              <span className="font-semibold text-[#2F8429]">
                Your Checkout Experience
              </span>
            </h2>

            <p className="mt-4 max-w-[420px] text-[14px] leading-[1.35] tracking-[-0.02em] text-[#222222] sm:text-[15px] md:text-[16px]">
              Whether you&apos;re upgrading your POS system, exploring payment
              solutions, or scaling your business operations, our team is here
              to help you find the right setup.
            </p>

            <div className="mt-8 space-y-4">
              {contactCards.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-[16px] bg-[#F4F4F4] p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#EFEFEF] hover:shadow-md"
                  >
                    <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[13px] bg-[#A9EF7D]">
                      <Icon className="h-5 w-5 text-[#2F8429]" />
                    </div>

                    <div>
                      <h3 className="text-[14px] font-semibold leading-tight text-black md:text-[15px]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[11px] leading-tight text-black/65 md:text-[12px]">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* FORM CARD */}
          <div className="rounded-[18px] bg-[#F4F4F4] p-5 shadow-sm sm:p-6 md:p-7 lg:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                {/* FULL NAME */}
                <div>
                  <input
                    type="text"
                    placeholder="Full Name *"
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                    className="h-[54px] w-full rounded-[12px] border border-transparent bg-white px-5 text-[12px] text-black outline-none transition placeholder:text-black/60 focus:border-[#A9EF7D] focus:ring-4 focus:ring-[#A9EF7D]/20"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-[11px] text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <input
                    type="email"
                    placeholder="Email *"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="h-[54px] w-full rounded-[12px] border border-transparent bg-white px-5 text-[12px] text-black outline-none transition placeholder:text-black/60 focus:border-[#A9EF7D] focus:ring-4 focus:ring-[#A9EF7D]/20"
                  />
                  {errors.email && (
                    <p className="mt-1 text-[11px] text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* PHONE */}
                <div>
                  <input
                    type="tel"
                    placeholder="Phone *"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className="h-[54px] w-full rounded-[12px] border border-transparent bg-white px-5 text-[12px] text-black outline-none transition placeholder:text-black/60 focus:border-[#A9EF7D] focus:ring-4 focus:ring-[#A9EF7D]/20"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-[11px] text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* BUSINESS NAME */}
                <div>
                  <input
                    type="text"
                    placeholder="Business Name *"
                    {...register("businessName", {
                      required: "Business name is required",
                    })}
                    className="h-[54px] w-full rounded-[12px] border border-transparent bg-white px-5 text-[12px] text-black outline-none transition placeholder:text-black/60 focus:border-[#A9EF7D] focus:ring-4 focus:ring-[#A9EF7D]/20"
                  />
                  {errors.businessName && (
                    <p className="mt-1 text-[11px] text-red-500">
                      {errors.businessName.message}
                    </p>
                  )}
                </div>

                {/* BUSINESS TYPE */}
                <div>
                  <div className="relative">
                    <select
                      {...register("businessType", {
                        required: "Please select your business type",
                      })}
                      className="h-[54px] w-full appearance-none rounded-[12px] border border-transparent bg-white px-5 text-[12px] text-black/70 outline-none transition focus:border-[#A9EF7D] focus:ring-4 focus:ring-[#A9EF7D]/20"
                    >
                      <option value="">Select your Business *</option>
                      <option value="Restaurant">Restaurant</option>
                      <option value="Retail">Retail</option>
                      <option value="Grocery Store">Grocery Store</option>
                      <option value="Cafe & Coffee Shop">
                        Cafe & Coffee Shop
                      </option>
                      <option value="Salon & Spa">Salon & Spa</option>
                      <option value="Hotel">Hotel</option>
                      <option value="Mobile Business">Mobile Business</option>
                      <option value="Clothing Store">Clothing Store</option>
                      <option value="Vape & Smoke Shop">
                        Vape & Smoke Shop
                      </option>
                      <option value="Jewelry Store">Jewelry Store</option>
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-black/60" />
                  </div>

                  {errors.businessType && (
                    <p className="mt-1 text-[11px] text-red-500">
                      {errors.businessType.message}
                    </p>
                  )}
                </div>

                {/* POS SOLUTION */}
                <div>
                  <div className="relative">
                    <select
                      {...register("posSolution", {
                        required: "Please choose your POS solution",
                      })}
                      className="h-[54px] w-full appearance-none rounded-[12px] border border-transparent bg-white px-5 text-[12px] text-black/70 outline-none transition focus:border-[#A9EF7D] focus:ring-4 focus:ring-[#A9EF7D]/20"
                    >
                      <option value="">Choose Your POS Solution *</option>
                      <option value="PAX 800">PAX 800</option>
                      <option value="Kiosk">Kiosk</option>
                      <option value="KDS">KDS</option>
                      <option value="Newland N910">Newland N910</option>
                      <option value="Poynt C">Poynt C</option>
                      <option value="PAX A920">PAX A920</option>
                      <option value="Clover Mini 3rd Generation">
                        Clover Mini 3rd Generation
                      </option>
                      <option value="A920 Pro">A920 Pro</option>
                      <option value="E700">E700</option>
                      <option value="E500">E500</option>
                      <option value="Clover Duo Station">
                        Clover Duo Station
                      </option>
                      <option value="Clover Solo Station">
                        Clover Solo Station
                      </option>
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-black/60" />
                  </div>

                  {errors.posSolution && (
                    <p className="mt-1 text-[11px] text-red-500">
                      {errors.posSolution.message}
                    </p>
                  )}
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <textarea
                  rows={3}
                  placeholder="Tell us about your business needs... *"
                  {...register("message", {
                    required: "Please tell us how we can help",
                  })}
                  className="min-h-[58px] w-full resize-none rounded-[12px] border border-transparent bg-white px-5 py-4 text-[12px] text-black outline-none transition placeholder:text-black/60 focus:border-[#A9EF7D] focus:ring-4 focus:ring-[#A9EF7D]/20"
                />

                {errors.message && (
                  <p className="mt-1 text-[11px] text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* CONSENT */}
              <div className="flex items-start gap-3 pt-2">
                <Checkbox
                  id="contact-consent"
                  checked={consent}
                  onCheckedChange={(checked) =>
                    setValue("consent", checked === true, {
                      shouldValidate: true,
                    })
                  }
                  className="mt-[2px] h-[18px] w-[18px] shrink-0 rounded-[5px] border-0 bg-[#A9EF7D] data-[state=checked]:bg-[#A9EF7D] data-[state=checked]:text-white"
                />

                <label
                  htmlFor="contact-consent"
                  className="cursor-pointer text-[11px] leading-[1.45] text-[#333333]"
                >
                  By submitting this form, you agree to receive support and
                  informational text messages from HBOX LLC at your number.
                  <br />
                  View our{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline underline-offset-2 transition hover:text-[#2F8429]"
                  >
                    Privacy Policy
                  </Link>{" "}
                  &{" "}
                  <Link
                    href="/terms-conditions"
                    className="underline underline-offset-2 transition hover:text-[#2F8429]"
                  >
                    Terms & Conditions
                  </Link>
                </label>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting || !consent}
                className="inline-flex h-[34px] items-center justify-center gap-2 rounded-full bg-[#A9EF7D] px-5 text-[11px] font-semibold text-black transition duration-300 hover:scale-[1.03] hover:bg-[#9BE96C] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
                {!isSubmitting && <ArrowRight className="h-3.5 w-3.5" />}
              </button>
            </form>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}