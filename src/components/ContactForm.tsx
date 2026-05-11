"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import FormInput from "@/components/common/FormInput";
import FormDropDown from "@/components/common/FormDropDown";
import FormTextArea from "@/components/common/FormTextArea";
import { Loader2 } from "lucide-react";
import { PolicyModal } from "@/components/common/policy-modal";
import Link from "next/link";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),

  company: z
    .string()
    .min(2, {
      message: "Company name must be at least 2 characters.",
    })
    .optional()
    .or(z.literal("")), // ✅ Optional but still validates if filled

  country: z
    .string()
    .min(1, {
      message: "Please select a country.",
    })
    .optional()
    .or(z.literal("")), // ✅ Optional but still validates if selected

  helpWith: z.string().min(1, {
    message: "Please select an option.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  nda: z.boolean(),
});
const countryOptions = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "pk", label: "Pakistan" },
  { value: "in", label: "India" },
  { value: "other", label: "Other" },
];

const helpOptions = [
  {
    title: "MOBILE APP DEVELOPMENT",
    items: [
      { value: "ios-app-development", label: "iOS App Development" },
      { value: "android-app-development", label: "Android App Development" },
      { value: "cross-platform-app-development", label: "Cross Platform App Development" },
      { value: "mvp-startup-development", label: "MVP Startup Development" },
      { value: "ar-development", label: "AR Development" },
      { value: "vr-development", label: "VR Development" },
      { value: "app-maintenance-support-services", label: "App Maintenance Support Services" },
      { value: "web-application-development-company", label: "Web Application Development Company" },
    ],
  },
  {
    title: "GAME DEVELOPMENT",
    items: [
      { value: "2d-game-development", label: "2D Game Development" },
      { value: "3d-game-development", label: "3D Game Development" },
      { value: "web3-game-development", label: "Web3 Game Development" },
    ],
  },
  {
    title: "STAFF AUGMENTATION",
    items: [
      { value: "hire-android-app-developers", label: "Hire Android App Developers" },
      { value: "hire-ios-app-developers", label: "Hire iOS App Developers" },
      { value: "hire-nodejs-developers", label: "Hire Node.js Developers" },
    ],
  },
  {
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    items: [
      { value: "erp-developers", label: "ERP Developers" },
      { value: "crm-developers", label: "CRM Developers" },
      { value: "cms-developers", label: "CMS Developers" },
    ],
  },
  {
    title: "DIGITAL MARKETING AGENCY",
    items: [
      { value: "social-media-marketing-services", label: "Social Media Marketing Services" },
      { value: "search-engine-marketing", label: "Search Engine Marketing" },
      { value: "search-engine-optimization", label: "Search Engine Optimization" },
    ],
  },
  {
    title: "BLOCKCHAIN APP DEVELOPMENT",
    items: [
      { value: "metaverse-development", label: "Metaverse Development" },
      { value: "nft-development", label: "NFT Development" },
    ],
  },
  {
    title: "ARTIFICIAL INTELLIGENCE",
    items: [
      { value: "generative-ai", label: "Generative AI" },
      { value: "natural-language-processing-services", label: "Natural Language Processing Services" },
      { value: "ai-agent-development", label: "AI Agent Development" },
    ],
  },
];

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      country: "",
      helpWith: "",
      message: "",
      nda: false,
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      });
      form.reset();
      router.push("/thank-you")
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact us directly.",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const ndaChecked = form.watch("nda");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <FormInput
              label="First Name *"
              name="firstName"
              control={form.control}
              placeholder="John"
            />
          </div>
          <div className="space-y-2">
            <FormInput
              label="Last Name *"
              name="lastName"
              control={form.control}
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <FormInput
              label="Email *"
              name="email"
              control={form.control}
              placeholder="john.doe@example.com"
            />
          </div>
          <div className="space-y-2">
            <FormInput
              label="Phone"
              name="phone"
              control={form.control}
              placeholder="+1 234 567 8901"
            />
          </div>
        </div>

        {/* Company and Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <FormInput
              label="Company"
              name="company"
              control={form.control}
              placeholder="Acme Corp"
            />
          </div>
          <div className="space-y-2">
            <FormDropDown
              label="Country"
              name="country"
              control={form.control}
              items={countryOptions}
            />
          </div>
        </div>

        {/* How can we help */}
        <div className="space-y-2">
          <FormDropDown
            label="How can we help you? *"
            name="helpWith"
            control={form.control}
            groups={helpOptions}
            placeholder="All Services"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <FormTextArea
            label="Message *"
            name="message"
            control={form.control}
            rows={4}
            placeholder="Tell us more about your needs and how we can help you..."
          />
        </div>

        {/* NDA Checkbox */}
        <div className="space-y-2">
          <div className={`flex items-start space-x-4 p-4 rounded-lg border ${form.formState.errors.nda ? 'border-red-500 bg-red-50 dark:bg-red-950/20' : 'border-transparent'}`}>
            <Checkbox
              className={`mt-2 ${form.formState.errors.nda ? 'border-red-500' : ''}`}
              id="nda"
              checked={ndaChecked}
              onCheckedChange={(checked) => {
                if (checked) {
                  // setIsPolicyModalOpen(true);
                  form.setValue("nda", true, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                } else {
                  form.setValue("nda", false, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }
              }}
            />
            <Label
              htmlFor="nda"
              className={`text-md leading-relaxed cursor-pointer ${form.formState.errors.nda ? 'text-red-600 dark:text-red-400' : 'text-primary'}`}
              // onClick={(e) => {
              //   e.preventDefault();
              //   if (!ndaChecked) {
              //     setIsPolicyModalOpen(true);
              //   } else {
              //     form.setValue("nda", false, { shouldValidate: true, shouldDirty: true });
              //   }
              // }}
            >
              <div className="text-sm space-y-2">
                <p className="leading-relaxed">
                  By submitting this form, you agree to receive support and informational text messages from HBOX LLC at your number.
                </p>
                <p className="text-xs">
                  View our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-primary hover:underline font-medium"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/terms-and-conditions"
                    className="text-primary hover:underline font-medium"
                  >
                    Terms & Conditions
                  </Link>
                  .
                </p>
              </div>
            </Label>
          </div>
          {form.formState.errors.nda && (
            <p className="text-sm font-medium text-red-600 dark:text-red-400">
              {form.formState.errors.nda.message}
            </p>
          )}
        </div>

        {/* Policy Modal */}
        <PolicyModal
          isOpen={isPolicyModalOpen}
          onAgree={() => {
            form.setValue("nda", true, {
              shouldValidate: true,
              shouldDirty: true,
            });
            setIsPolicyModalOpen(false);
          }}
          onDisagree={() => {
            form.setValue("nda", false, {
              shouldValidate: true,
              shouldDirty: true,
            });
            setIsPolicyModalOpen(false);
          }}
        />

        {/* Success/Error Message */}
        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-yellow-400 text-black hover:bg-black hover:text-white transition-colors duration-300 dark:border-yellow-400 border w-full md:w-auto px-8 py-6 text-base font-medium rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Start the Conversation"
          )}
        </Button>
      </form>
    </Form>
  );
};
