"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ChevronLeft, Loader2 } from "lucide-react";
import { Dialog, DialogPortal, DialogOverlay } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { PolicyModal } from "@/components/common/policy-modal";
import Image from "next/image";

type Step = "initial" | "dedicated-services" | "team-augmentation" | "form";
type SourceType =
  | "Full Product Team"
  | "Dedicated Services"
  | "Team Augmentation";

const dedicatedServicesOptions = [
  "STRATEGY",
  "DESIGN",
  "DEVELOPMENT",
  "TESTING",
  "MAINTENANCE",
  "PITCH DECK",
];

const teamAugmentationOptions = [
  "PROJECT MANAGER",
  "CTO ON DEMAND",
  "Q/A ENGINEER",
  "PRODUCT MANAGER",
  "UI UX DESIGNER",
  "SOFTWARE DEVELOPER",
  "MOBILE APP DEVELOPER",
  "WEBSITE DEVELOPER",
];

export default function BigSavingsModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("initial");
  const [source, setSource] = useState<SourceType | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedProfessionals, setSelectedProfessionals] = useState<string[]>(
    []
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [formData, setFormData] = useState<{
    firstName: string;
    email: string;
    phone: string;
    message: string;
    consent: boolean;
  }>({
    firstName: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("modal-visited");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setOpen(true);
        // sessionStorage.setItem("modal-visited", "false");
      }, 8000); // 8 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleInitialChoice = (choice: SourceType) => {
    setSource(choice);
    if (choice === "Full Product Team") {
      setStep("form");
    } else if (choice === "Dedicated Services") {
      setStep("dedicated-services");
    } else if (choice === "Team Augmentation") {
      setStep("team-augmentation");
    }
  };

  const toggleSelection = (item: string, type: "service" | "professional") => {
    if (type === "service") {
      setSelectedServices((prev) =>
        prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item]
      );
    } else {
      setSelectedProfessionals((prev) =>
        prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item]
      );
    }
  };

  const handleNext = () => {
    setStep("form");
  };

  const handleBack = () => {
    if (
      step === "form" &&
      (source === "Dedicated Services" || source === "Team Augmentation")
    ) {
      setStep(
        source === "Dedicated Services"
          ? "dedicated-services"
          : "team-augmentation"
      );
    } else {
      setStep("initial");
      setSource(null);
      setSelectedServices([]);
      setSelectedProfessionals([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tag: "savings-form",
          firstName: formData.firstName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          consent: formData.consent,
          source,
          selectedServices,
          selectedProfessionals,
        }),
      });

      if (response.ok) {
        toast.success("Success!", {
          description: "Your inquiry has been submitted successfully. We'll contact you soon!",
        });
        setTimeout(() => {
          setOpen(false);
        }, 1500);
      } else {
        toast.error("Submission Failed", {
          description: "Failed to submit form. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error", {
        description: "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    // Reset state when closing
    setTimeout(() => {
      setStep("initial");
      setSource(null);
      setSelectedServices([]);
      setSelectedProfessionals([]);
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
      });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        {/* Custom overlay that doesn't block scroll */}
        <div className="fixed inset-0 bg-black/60 z-40 pointer-events-none" />
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full md:max-w-3xl lg:max-w-5xl my-auto"
          >
            {/* Decorative Elements */}
            {/* <div className="absolute -top-8 -left-8 w-16 h-16 z-10">
              <div className="w-full h-full bg-red-500 rounded-full" />
            </div>
            <div className="absolute top-4 -right-4 w-12 h-12 z-10">
              <div className="w-full h-full bg-red-600 rounded-full" />
            </div>
            <div className="absolute top-20 right-8 w-8 h-8 z-10">
              <svg viewBox="0 0 24 24" fill="#D4AF37" className="w-full h-full">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div className="absolute top-40 right-4 w-10 h-10 z-10">
              <svg viewBox="0 0 24 24" fill="#C9A961" className="w-full h-full">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div className="absolute bottom-20 right-8 w-14 h-14 z-10 flex gap-1">
              <div className="w-6 h-6 bg-red-500 rounded-full" />
              <div className="w-6 h-6 bg-red-600 rounded-full" />
            </div>
            <div className="absolute bottom-8 right-12 w-10 h-10 z-10">
              <svg viewBox="0 0 24 24" fill="#C41E3A" className="w-full h-full">
                <path d="M12 2L8 8l-6 2 4 6-1 6 7-3 7 3-1-6 4-6-6-2z" />
              </svg>
            </div> */}

            {/* Close Button - Outside modal, bigger size */}
            <Button
              onClick={handleClose}
              variant="ghost"
              size="icon"
              className="absolute -top-4 -right-4 md:-top-12 md:-right-12 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:bg-gray-100"
            >
              <X className="h-6 w-6 md:h-8 md:w-8" />
            </Button>

            {/* Modal Content */}
            <div className="rounded-3xl shadow-2xl overflow-hidden" style={{
                backgroundImage: "url('https://cdn.hboxdigital.com/public/images/modals/modal-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
              <div className="grid md:grid-cols-2 gap-0 md:min-h-[600px]">
                {/* Left Column - Image and Heading */}
                <div className="p-6 md:p-8 md:pb-12 flex flex-col">
                  {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                      <span className="text-red-600">{"Big Savings Across"}</span>
                      <br />
                      <span className="text-green-600">{"Everything We Build"}</span>
                    </h2>
                  </motion.div> */}

                  <div className="md:mt-4">
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight text-center md:mb-4">
                      <span className="text-red-600">
                        {"Big Savings Across"}
                      </span>
                      <br />
                      <span className="text-green-600">
                        {"Everything We Build"}
                      </span>
                    </h2>
                    <Image
                      src="https://cdn.hboxdigital.com/public/images/modals/Card.png"
                      alt="Mobile app showcase"
                      className="object-cover hidden md:block border border-gray-300 rounded-lg p-4"
                      width={500}
                      height={400}
                    />
                  </div>

                  {/* Decorative elements for left side */}

                  {/* <div className="absolute top-32 left-20 w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="#D4AF37" className="w-full h-full">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-32 left-4 w-12 h-12">
                    <svg viewBox="0 0 24 24" fill="#C9A961" className="w-full h-full">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-12 left-8 w-16 h-16">
                    <svg viewBox="0 0 24 24" fill="#C41E3A" className="w-full h-full">
                      <path d="M12 2L8 8l-6 2 4 6-1 6 7-3 7 3-1-6 4-6-6-2z" />
                    </svg>
                  </div> */}
                </div>

                {/* Right Column - Dynamic Content */}
                <div className="p-4 md:p-8 lg:p-12 relative flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {step === "initial" && (
                      <motion.div
                        key="initial"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <h3 className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-8">
                          {"Hire Skilled Professionals for Any Stage"}
                        </h3>
                        <div className="space-y-4">
                          <Button
                            onClick={() =>
                              handleInitialChoice("Full Product Team")
                            }
                            variant="outline"
                            className="w-full h-16 text-lg font-semibold hover:border-black transition-all"
                          >
                            {"Full Product Team"}
                          </Button>
                          <Button
                            onClick={() =>
                              handleInitialChoice("Dedicated Services")
                            }
                            variant="outline"
                            className="w-full h-16 text-lg font-semibold hover:border-black transition-all"
                          >
                            {"Dedicated Services"}
                          </Button>
                          <Button
                            onClick={() =>
                              handleInitialChoice("Team Augmentation")
                            }
                            variant="outline"
                            className="w-full h-16 text-lg font-semibold hover:border-black transition-all"
                          >
                            {"Team Augmentation"}
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === "dedicated-services" && (
                      <motion.div
                        key="dedicated-services"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <Button
                          onClick={handleBack}
                          variant="ghost"
                          size="icon"
                          className="mb-4"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <h3 className="text-xl font-bold text-center mb-2">
                          {
                            "Tell us how to reach you and one of our experts will contact you shortly."
                          }
                        </h3>
                        <h4 className="text-2xl font-bold text-center mb-6">
                          {"Choose Only What You Need"}
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {dedicatedServicesOptions.map((service) => (
                            <button
                              key={service}
                              onClick={() =>
                                toggleSelection(service, "service")
                              }
                              className={`relative h-20 rounded-xl font-semibold text-sm transition-all ${
                                selectedServices.includes(service)
                                  ? "bg-black text-white"
                                  : "bg-white text-black border-2 border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              {service}
                              {selectedServices.includes(service) && (
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                  <Check className="h-4 w-4 text-white" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                        <Button
                          onClick={handleNext}
                          className="w-full h-12 bg-black text-white hover:bg-gray-800 text-lg font-semibold mt-6"
                        >
                          {"N E X T"}
                        </Button>
                      </motion.div>
                    )}

                    {step === "team-augmentation" && (
                      <motion.div
                        key="team-augmentation"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <Button
                          onClick={handleBack}
                          variant="ghost"
                          size="icon"
                          className="mb-4"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <h3 className="text-xl font-bold text-center mb-2">
                          {
                            "Tell us how to reach you and one of our experts will contact you shortly."
                          }
                        </h3>
                        <h4 className="text-2xl font-bold text-center mb-6">
                          {"Hire Our Professionals"}
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {teamAugmentationOptions.map((professional) => (
                            <button
                              key={professional}
                              onClick={() =>
                                toggleSelection(professional, "professional")
                              }
                              className={`relative h-20 rounded-xl font-semibold text-xs transition-all ${
                                selectedProfessionals.includes(professional)
                                  ? "bg-black text-white"
                                  : "bg-white text-black border-2 border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              {professional}
                              {selectedProfessionals.includes(professional) && (
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                  <Check className="h-4 w-4 text-white" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                        <Button
                          onClick={handleNext}
                          className="w-full h-12 bg-black text-white hover:bg-gray-800 text-lg font-semibold mt-6"
                        >
                          {"N E X T"}
                        </Button>
                      </motion.div>
                    )}

                    {step === "form" && (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <Button
                          onClick={handleBack}
                          variant="ghost"
                          size="icon"
                          className="mb-4"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <h3 className="text-xl font-bold text-center mb-6">
                          {
                            "Tell us how to reach you and one of our experts will contact you shortly."
                          }
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <Label
                              htmlFor="firstName"
                              className="text-sm font-medium mb-2 block"
                            >
                              {"First Name *"}
                            </Label>
                            <Input
                              id="firstName"
                              placeholder="Your first name"
                              value={formData.firstName}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  firstName: e.target.value,
                                })
                              }
                              required
                              className="bg-white"
                            />
                          </div>
                          <div>
                            <Label
                              htmlFor="email"
                              className="text-sm font-medium mb-2 block"
                            >
                              {"Email *"}
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your.email@company.com"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                })
                              }
                              required
                              className="bg-white"
                            />
                          </div>
                          <div>
                            <Label
                              htmlFor="phone"
                              className="text-sm font-medium mb-2 block"
                            >
                              {"Phone"}
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+1 (555) 123-4567"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  phone: e.target.value,
                                })
                              }
                              className="bg-white"
                            />
                          </div>
                          <div>
                            <Label
                              htmlFor="message"
                              className="text-sm font-medium mb-2 block"
                            >
                              {"Message *"}
                            </Label>
                            <Textarea
                              id="message"
                              placeholder="Write a message..."
                              value={formData.message}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  message: e.target.value,
                                })
                              }
                              required
                              rows={4}
                              className="bg-white resize-none"
                            />
                          </div>
                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="consent"
                              checked={formData.consent}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setIsPolicyModalOpen(true);
                                } else {
                                  setFormData({
                                    ...formData,
                                    consent: false,
                                  });
                                }
                              }}
                            />
                            <Label
                              htmlFor="consent"
                              className="text-xs leading-relaxed cursor-pointer"
                            >
                              {
                                "by clicking this checkbox, that we can use your contact information and get in touch with you through sms"
                              }
                            </Label>
                          </div>
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-12 bg-black text-white hover:bg-gray-800 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                {"SUBMITTING..."}
                              </>
                            ) : (
                              "S U B M I T"
                            )}
                          </Button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </DialogPortal>

      {/* Policy Modal */}
      <PolicyModal
        isOpen={isPolicyModalOpen}
        onAgree={() => {
          setFormData({
            ...formData,
            consent: true,
          });
          setIsPolicyModalOpen(false);
        }}
        onDisagree={() => {
          setFormData({
            ...formData,
            consent: false,
          });
          setIsPolicyModalOpen(false);
        }}
      />
    </Dialog>
  );
}
