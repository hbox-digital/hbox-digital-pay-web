"use client";

import initializeGA from "@/lib/google-analytics";
import { useEffect } from "react";
// import Cookies from "js-cookie";

declare global {
  interface Window {
    GA_INITIALIZED?: boolean;
  }
}

const GoogleAnalytics = () => {
  useEffect(() => {
    // const acceptCookies = Cookies.get("AcceptCookies");
    // // console.log(acceptCookies);
    // if (acceptCookies !== "true") {
    //   return;
    // }

    if (!window.GA_INITIALIZED) {
      initializeGA();
    }
    window.GA_INITIALIZED = true;
  }, []);
  return null;
};

export default GoogleAnalytics;
