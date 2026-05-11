"use client";

import { useEffect } from "react";
import { initializeTracking } from "@/lib/tracking";

/**
 * TrackingInitializer Component
 * 
 * This component initializes UTM tracking when the app loads.
 * Add this component to your root layout to ensure tracking is captured
 * on every page load.
 */
export default function TrackingInitializer() {
  useEffect(() => {
    initializeTracking();
  }, []);

  return null; // This component doesn't render anything
}
