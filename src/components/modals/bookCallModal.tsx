"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/common/FormInput";
import FormTextArea from "@/components/common/FormTextArea";
import { Loader2, X } from "lucide-react";
import Image from "next/image";
import { useBookCallModal } from "@/contexts/BookCallModalContext";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import { getTrackingData, formatTrackingDataForNotes } from "@/lib/tracking";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(7, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  nda: z.boolean(),
});

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookCallModal = ({ isOpen, onClose }: BookCallModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      nda: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Get current page URL and tracking data
      const currentUrl = window.location.href;
      const trackingData = getTrackingData();
      const trackingNotes = formatTrackingDataForNotes(trackingData);

      const firstName = values.fullName.split(" ")[0] || values.fullName;
      const lastName = values.fullName.split(" ").slice(1).join(" ") || "-";

      // Prepare data for both APIs
      const formData = {
        firstName,
        lastName,
        email: values.email,
        phone: values.phone || "",
        message: values.message,
      };

      // Submit to existing contact API
      const contactResponse = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          company: "N/A",
          country: "N/A",
          helpWith: "Book A Discovery Call",
          message: `${values.message}\n\nSubmitted from: ${currentUrl}${trackingNotes}`,
          nda: values.nda || false,
        }),
      });

      if (!contactResponse.ok) {
        throw new Error("Failed to send message to contact API");
      }

      // Submit to HubSpot API (non-blocking - don't fail if HubSpot fails)
      try {
        await fetch("/api/hubspot/submit-lead", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            trackingData,
            pageUri: currentUrl,
            pageName: "Book A Discovery Call",
          }),
        });
        console.log("HubSpot submission completed");
      } catch (hubspotError) {
        // Log but don't fail the submission
        console.error("HubSpot submission failed:", hubspotError);
      }

      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your request has been sent successfully. Redirecting...",
      });
      form.reset();

      // Close modal and redirect to thank you page after 1.5 seconds
      setTimeout(() => {
        onClose();
        setSubmitStatus({ type: null, message: "" });
        window.location.href = "/thank-you";
      }, 1500);
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
  };

  if (!isOpen) return null;
  const ndaChecked = form.watch("nda");

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative bg-background rounded-3xl shadow-2xl max-w-6xl w-full h-[96vh] 2xl:h-[90vh] flex justify-center overflow-hidden custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* <div className="absolute inset-0 z-0 hidden top-0 lg:block">
          <Image
                src="https://cdn.hboxdigital.com/public/images/home/book-call-illustration.png.png"
                alt="Mobile App Illustration"
                width={480}
                height={506}
                // fill
                className=""
                priority
              />
        </div> */}
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 z-10 bg-yellow-400 hover:bg-yellow-500 rounded-lg p-2 transition-colors duration-300 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-black" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Side - Content */}
          <div className="relative bg-background p-8 lg:p-12 flex flex-col justify-top overflow-hidden">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
              {/* Start the conversation <br /> */}
              <span className="text-yellow-400">Start the conversation</span>
            </h2>
            <p>
              We’ll connect with you soon to schedule a meeting to discuss your
              goals
            </p>

            {/* Image */}
            <Image
              src="https://cdn.hboxdigital.com/public/images/home/book-call-illustration.png.png"
              alt="Mobile App Illustration"
              width={600}
              height={450}
              className="h-[760px] min-w-[680px]
      absolute
      bottom-[-16%]
      left-[-10%]
      z-0
      hidden
      lg:block
      pointer-events-none
    "
              priority
            />
          </div>

          {/* Right Side - Form */}
          <div className="p-8 lg:p-12 overflow-y-auto">
            {/* <div className="mb-6">
              <p className="text-sm leading-relaxed">
                At HBOX, we use a carefully selected technology stack with the
                best tools & frameworks to build reliable, future-proof apps.
                From AI and AR/VR to modern development frameworks, we ensure
                every app delivers strong...
              </p>
            </div> */}

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Full Name */}
                <div className="space-y-2">
                  <FormInput
                    label="Full Name"
                    name="fullName"
                    control={form.control}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <FormInput
                    label="Email Address"
                    name="email"
                    control={form.control}
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <FormInput
                    label="Phone Number"
                    name="phone"
                    control={form.control}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <FormTextArea
                    label="Message"
                    name="message"
                    control={form.control}
                    rows={4}
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* NDA Checkbox */}
                <div className="space-y-2">
                  <div
                    className={`flex items-start space-x-4 p-4 rounded-lg border ${form.formState.errors.nda ? "border-red-500 bg-red-50 dark:bg-red-950/20" : "border-transparent"}`}
                  >
                    <Checkbox
                      className={`mt-2 shrink-0 ${form.formState.errors.nda ? "border-red-500" : ""}`}
                      id="nda"
                      checked={ndaChecked}
                      onCheckedChange={(checked) => {
                        form.setValue("nda", checked === true, {
                          shouldValidate: true,
                          shouldDirty: true,
                        });
                      }}
                    />
                    <div
                      className={`text-md leading-relaxed cursor-pointer ${form.formState.errors.nda ? "text-red-600 dark:text-red-400" : "text-primary"}`}
                      onClick={() => {
                        form.setValue("nda", !ndaChecked, {
                          shouldValidate: true,
                          shouldDirty: true,
                        });
                      }}
                    >
                      <div className="text-sm space-y-2">
                        <p className="leading-relaxed text-xs">
                          By submitting this form, you agree to receive support and informational text messages from HBOX LLC at your number.
                        </p>
                        <p className="text-xs">
                          View our{" "}
                          <Link
                            href="/privacy-policy"
                            className="text-primary hover:underline font-medium"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open('/privacy-policy', '_blank', 'noopener,noreferrer');
                            }}
                          >
                            Privacy Policy
                          </Link>{" "}
                          and{" "}
                          <Link
                            href="/terms-and-conditions"
                            className="text-primary hover:underline font-medium"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open('/terms-and-conditions', '_blank', 'noopener,noreferrer');
                            }}
                          >
                            Terms & Conditions
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                  {form.formState.errors.nda && (
                    <p className="text-sm font-medium text-red-600 dark:text-red-400">
                      {form.formState.errors.nda.message}
                    </p>
                  )}
                </div>

                {/* Success/Error Message */}
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg text-sm ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-400"
                        : "bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-400"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-yellow-400 text-black hover:bg-black hover:text-white transition-colors duration-300 w-full py-6 text-base font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Wrapper component that uses the context
export const BookCallModalWrapper = () => {
  const { isOpen, closeModal } = useBookCallModal();
  return <BookCallModal isOpen={isOpen} onClose={closeModal} />;
};

// Default export the wrapper
export default BookCallModalWrapper;
