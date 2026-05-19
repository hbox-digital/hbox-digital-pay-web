"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import Link from "next/link";

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

interface BuildSolutionFormData {
  firstName: string;
  lastName: string;
  email: string;
  businessEmail: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
}

export default function BuildSolutionSection() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BuildSolutionFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      businessEmail: "",
      phone: "",
      service: "",
      message: "",
      consent: false,
    },
  });

  const consent = watch("consent");

  const onSubmit = async (data: BuildSolutionFormData) => {
    if (!data.consent) {
      alert("Please agree to receive support and informational messages");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        ...data,
        fullName: `${data.firstName} ${data.lastName}`,
        formType: "Build Solution",
      };

      const response = await fetch("/api/book-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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

  const inputClass =
    "h-[48px] w-full rounded-[12px] border border-transparent bg-white px-5 text-[12px] text-black outline-none transition duration-300 placeholder:text-[#333333] focus:border-[#A9EF7D] focus:ring-4 focus:ring-[#A9EF7D]/20";

  const errorInputClass =
    "border-red-400 focus:border-red-400 focus:ring-red-400/15";

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="mx-auto grid h-full max-w-7xl grid-cols-4 border-x border-black/[0.04]">
          <div className="border-r border-black/[0.04]" />
          <div className="border-r border-black/[0.04]" />
          <div className="border-r border-black/[0.04]" />
          <div />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="grid items-center gap-10 lg:grid-cols-[35%_65%]"
        >
          {/* LEFT CONTENT */}
          <div className="max-w-[390px]">
            <h2 className="text-[34px] font-light leading-[1.05] tracking-[-0.045em] text-[#171717] sm:text-[42px] md:text-[46px]">
              Let&apos;s Build the{" "}
              <span className="font-semibold text-[#2F8429]">
                Right Solution for Your Business
              </span>
            </h2>

            <p className="mt-5 text-[16px] leading-[1.25] tracking-[-0.02em] text-[#333333]">
              Our team will help you explore the right hardware, software, and
              payment solutions based on your business requirements, industry,
              and operational goals.
            </p>
          </div>

          {/* FORM CARD */}
          <div className="rounded-[16px] bg-[#F4F4F4] p-5 shadow-sm md:p-6 lg:max-w-[610px]">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* ROW 1 */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    placeholder="First Name *"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className={`${inputClass} ${
                      errors.firstName ? errorInputClass : ""
                    }`}
                  />

                  {errors.firstName && (
                    <p className="mt-1.5 text-[10px] font-medium text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Last Name *"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    className={`${inputClass} ${
                      errors.lastName ? errorInputClass : ""
                    }`}
                  />

                  {errors.lastName && (
                    <p className="mt-1.5 text-[10px] font-medium text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* ROW 2 */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    {...register("email", {
                      required: "Email address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`${inputClass} ${
                      errors.email ? errorInputClass : ""
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-1.5 text-[10px] font-medium text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Business Email Address *"
                    {...register("businessEmail", {
                      required: "Business email address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid business email address",
                      },
                    })}
                    className={`${inputClass} ${
                      errors.businessEmail ? errorInputClass : ""
                    }`}
                  />

                  {errors.businessEmail && (
                    <p className="mt-1.5 text-[10px] font-medium text-red-500">
                      {errors.businessEmail.message}
                    </p>
                  )}
                </div>
              </div>

              {/* ROW 3 */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className={`${inputClass} ${
                      errors.phone ? errorInputClass : ""
                    }`}
                  />

                  {errors.phone && (
                    <p className="mt-1.5 text-[10px] font-medium text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Service Interested In *"
                    {...register("service", {
                      required: "Service is required",
                    })}
                    className={`${inputClass} ${
                      errors.service ? errorInputClass : ""
                    }`}
                  />

                  {errors.service && (
                    <p className="mt-1.5 text-[10px] font-medium text-red-500">
                      {errors.service.message}
                    </p>
                  )}
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <textarea
                  rows={3}
                  placeholder="Tell us more about your needs and how we can help you... *"
                  {...register("message", {
                    required: "Please tell us how we can help",
                  })}
                  className={`min-h-[96px] w-full resize-none rounded-[12px] border border-transparent bg-white px-5 py-4 text-[12px] text-black outline-none transition duration-300 placeholder:text-[#333333] focus:border-[#A9EF7D] focus:ring-4 focus:ring-[#A9EF7D]/20 ${
                    errors.message ? errorInputClass : ""
                  }`}
                />

                {errors.message && (
                  <p className="mt-1.5 text-[10px] font-medium text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* CONSENT */}
              <div>
                <div className="flex items-start gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      setValue("consent", !consent, {
                        shouldValidate: true,
                      })
                    }
                    className={`mt-[2px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border transition ${
                      consent
                        ? "border-[#A9EF7D] bg-[#A9EF7D]"
                        : "border-black/20 bg-white"
                    }`}
                  >
                    {consent && <Check className="h-3 w-3 text-white" />}
                  </button>

                  <p className="text-[10px] leading-[1.45] text-[#333333]">
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
                  </p>
                </div>

                <input
                  type="checkbox"
                  className="hidden"
                  {...register("consent", {
                    required: "Please agree before submitting",
                  })}
                />

                {errors.consent && (
                  <p className="mt-1.5 text-[10px] font-medium text-red-500">
                    {errors.consent.message}
                  </p>
                )}
              </div>

              {/* BUTTON */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting || !consent}
                  className="inline-flex h-[38px] items-center justify-center gap-2 rounded-full bg-[#A9EF7D] px-5 text-[11px] font-semibold text-black transition duration-300 hover:scale-[1.03] hover:bg-[#9BE96C] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      Submitting...
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Connect with Sales
                      <ArrowRight className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}