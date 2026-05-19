"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BookDemoFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

interface BookDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookDemoModal({
  open,
  onOpenChange,
}: BookDemoModalProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BookDemoFormData>({
    defaultValues: {
      consent: false,
    },
  });

  const consent = watch("consent");

  const onSubmit = async (data: BookDemoFormData) => {
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

      // Close modal and redirect to thank you page
      onOpenChange(false);
      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogOverlay className="bg-black/70" />
        <DialogContent className="max-w-[90vw] sm:max-w-[800px] md:max-w-[900px] lg:max-w-[900px] xl:max-w-[1578px] px-6 p-0 bg-white overflow-hidden border-0 gap-0">
          {/* Left Image Section */}
          <div className="flex flex-col md:flex-row">
            {/* Left side - Image/Logo */}
            <div className="relative hidden items-start justify-start bg-[url('/images/form-image.jpg')] bg-cover bg-center p-8 md:flex md:w-[40%]">
              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10">
                <img
                  src="https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/HBOX%20Pay%20logo%20(1).png"
                  alt="HBOX Pay Logo"
                  className="h-auto w-[130px] object-contain"
                />
              </div>
            </div>

            {/* Right side - Form */}
            <div className="flex-1 p-6 sm:p-8 relative">
              {/* Close button */}
              {/* <button
                onClick={() => onOpenChange(false)}
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button> */}

              <DialogHeader className="mb-6">
                <DialogTitle className="text-2xl sm:text-3xl font-normal text-left">
                  Start the{" "}
                  <span className="text-[#53B033] font-semibold">
                    Conversation
                  </span>
                </DialogTitle>
                <DialogDescription className="text-left text-sm text-gray-600 mt-2">
                  We'll connect with you soon to schedule a meeting to discuss
                  your goals.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    placeholder=""
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                    className="h-11 bg-gray-50 border-gray-200 focus:border-[#53B033] focus:ring-[#53B033]"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder=""
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="h-11 bg-gray-50 border-gray-200 focus:border-[#53B033] focus:ring-[#53B033]"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder=""
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className="h-11 bg-gray-50 border-gray-200 focus:border-[#53B033] focus:ring-[#53B033]"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm text-gray-700">
                    Tell us how we can help you...{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder=""
                    {...register("message", {
                      required: "Please tell us how we can help",
                    })}
                    className="min-h-[100px] bg-gray-50 border-gray-200 focus:border-[#53B033] focus:ring-[#53B033] resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(checked) =>
                      setValue("consent", checked as boolean)
                    }
                    className="mt-0.5 data-[state=checked]:bg-[#53B033] data-[state=checked]:border-[#53B033]"
                  />
                  <Label
                    htmlFor="consent"
                    className="text-xs  text-black font-normal leading-relaxed cursor-pointer"
                  >
                    By submitting this form, you agree to receive support and
                    informational text messages from HBOX LLC at your number.
                    [10:06 PM]replace HBOX Pay LLC with "HBOX LLC" for the
                    entire website
                  </Label>
                </div>
                <div>
                  <Link
                    href="/privacy-policy"
                    className="text-black underline hover:text-[#469929]"
                  >
                    Privacy Policy
                  </Link>{" "}
                  &{" "}
                  <Link
                    href="/terms-conditions"
                    className="text-black underline hover:text-[#469929]"
                  >
                    Terms & Conditions
                  </Link>
                </div>
                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting || !consent}
                  className="w-full h-12 bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] hover:bg-[linear-gradient(178.88deg,#7DD944_-38.35%,#F0F0F0_285.31%)] text-black font-medium text-base rounded-full shadow-[0px_8px_30px_rgba(140,238,84,0.28)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
