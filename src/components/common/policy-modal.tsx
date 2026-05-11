"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PolicyModalProps {
  isOpen: boolean;
  onAgree: () => void;
  onDisagree: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  onAgree,
  onDisagree,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onDisagree}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl bg-background rounded-xl md:rounded-2xl shadow-2xl my-8"
            >
              {/* Close Button */}
              <button
                onClick={onDisagree}
                className="absolute top-3 right-3 md:top-4 md:right-4 p-2 rounded-full hover:bg-accent transition-colors z-10"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              {/* Content */}
              <div className="p-5 md:p-8 lg:p-10">
                {/* Main Heading */}
                <div className="mb-6 md:mb-8 text-center pr-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
                    CONSENT TO THE PROCESSING OF PERSONAL DATA
                  </h2>
                </div>

                {/* Scrollable Content */}
                <div className="max-h-[55vh] md:max-h-[60vh] overflow-y-auto pr-1 md:pr-2 space-y-4 md:space-y-6">
                  {/* Introduction */}
                  <div className=" rounded-lg py-4">
                    <p className="text-sm md:text-base leading-relaxed">
                      I, hereby give my explicit consent to HBOX LLC, its
                      subsidiaries, and partners to collect, process, store, and
                      use my personal data provided in this form, and any other
                      data that I may provide in the future.
                    </p>
                  </div>

                  {/* Data Collection */}
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-base md:text-xl font-bold">
                      DATA COLLECTION:
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                      The information collected may include: Personal
                      identification information (Name, email address, phone
                      number, etc.).
                    </p>
                  </div>

                  {/* Data Collection */}
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-base md:text-xl font-bold">
                      PURPOSES OF DATA PROCESSING:
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                      My data will be used to communicate important information
                      about services or changes to terms and conditions. No
                      mobile information will be shared with third
                      parties/affiliates for marketing/promotional purposes.
                      Information sharing to subcontractors in support services,
                      such as customer service, is permitted. All other use case
                      categories exclude text messaging originator opt-in data
                      and consent; this information will not be shared with any
                      third parties.
                    </p>
                  </div>

                  {/* Rights of the Data Subject */}
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-base md:text-xl font-bold">
                      RIGHTS OF THE DATA SUBJECT:
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                      I understand that I have rights related to this consent,
                      including the right to access, rectify, and erase my
                      personal data.
                    </p>
                  </div>

                  {/* Withdrawal of Consent */}
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-base md:text-xl font-bold">
                      WITHDRAWAL OF CONSENT:
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                      I understand that I can withdraw this consent at any time
                      by sending a written request to HBOX LLC at{" "}
                      <a
                        href="mailto:info@hboxdigital.com"
                        className="text-yellow-600 hover:text-yellow-700 hover:underline break-all"
                      >
                        info@hboxdigital.com
                      </a>
                      <span className="px-2">or</span>
                      <a
                        href="mailto:info@hbox.digital"
                        className="text-yellow-600 hover:text-yellow-700 hover:underline break-all"
                      >
                        info@hbox.digital
                      </a>
                    </p>
                  </div>

                  {/* Consent Duration */}
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-base md:text-xl font-bold">
                      CONSENT DURATION:
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                      My consent will remain in effect until I withdraw it or
                      until my data is no longer needed for the purposes listed
                      above.
                    </p>
                  </div>

                  {/* Confirmation Statement */}
                  <div className="bg-blue-50 dark:bg-black rounded-lg p-4 md:p-6 border-l-4 border-yellow-600">
                    <p className="text-sm md:text-base leading-relaxed">
                      By clicking the <strong>Agree</strong> button below, I
                      sign and confirm that I am over the age of 18, and that I
                      have read and understand this consent form and voluntarily
                      agree to its terms.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 pt-4 md:pt-6 border-t">
                  <Button
                    onClick={onAgree}
                    className="flex-1 py-4 md:py-6 text-sm md:text-base font-semibold rounded-lg md:rounded-xl transition-all"
                  >
                    I Agree
                  </Button>
                  <Button
                    onClick={onDisagree}
                    variant="outline"
                    className="flex-1 border-2 border-gray-300 py-4 md:py-6 text-sm md:text-base font-semibold rounded-lg md:rounded-xl transition-all"
                  >
                    I Disagree
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
