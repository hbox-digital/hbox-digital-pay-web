"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full">
        <Card className="border-0 shadow-2xl overflow-hidden py-0">
          {/* Header */}
          <div className=" px-6 py-4 border-b-4 border-[#FFE100]">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">HBOX Digital</h1>
            </div>
          </div>

          <CardContent className="p-8 md:p-12 text-center space-y-8">
            {/* 404 Display */}
            <div className="space-y-4">
              <div className="text-8xl md:text-9xl font-black">404</div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Page Not Found
              </h2>
              <p className="text-lg md:text-xl text-primary max-w-2xl mx-auto">
                Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
              </p>
            </div>

            {/* Illustration/Icon */}
            {/* <div className="py-8">
              <div className="w-24 h-24 mx-auto bg-[#FFE100]/20 rounded-full flex items-center justify-center">
                <Search className="h-12 w-12 text-[#FFE100]" />
              </div>
            </div> */}

            {/* Helpful Suggestions */}
            <div className="bg-[#f8fbfe] rounded-2xl p-6 md:p-8 text-left border">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                What you can do:
              </h3>
              <ul className="space-y-3 text-base text-black">
                <li className="flex items-start gap-3 ">
                  <span className="w-2 h-2 bg-[#FFE100] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Check the URL for any typos or mistakes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#FFE100] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Go back to the previous page using your browser&apos;s back button</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#FFE100] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Visit our homepage and explore our services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#FFE100] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Contact our team if you need assistance</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                onClick={() => window.history.back()}
                className="bg-yellow-500 flex items-center text-black hover:bg-black hover:text-white px-6 py-6 text-base font-medium rounded-xl transition-all"
              >
                <ArrowLeft className="h-5 w-5" />
                Go Back
              </Button>
              <Link href="/">
                <Button className="flex items-center gap-2 bg-black text-white hover:bg-gray-800 px-6 py-6 text-base font-medium rounded-xl w-full sm:w-auto transition-all">
                  <Home className="h-5 w-5" />
                  Return to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Additional Help */}
        <div className="mt-8 text-center">
          <p className="text-sm text-primary">
            Need help? Contact us at{" "}
            <a
              href="mailto:info@hboxdigital.com"
              className=" font-semibold hover:underline"
            >
              info@hboxdigital.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
