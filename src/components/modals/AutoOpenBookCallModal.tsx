"use client";

import { useEffect, useRef } from "react";
import { useBookCallModal } from "@/contexts/BookCallModalContext";

const DEFAULT_DELAY_MS = 15000;

const AutoOpenBookCallModal = ({ delayMs = DEFAULT_DELAY_MS }: { delayMs?: number }) => {
  const { openModal } = useBookCallModal();
  const hasScheduledRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (hasScheduledRef.current) return;
    hasScheduledRef.current = true;

    const timer = setTimeout(() => {
      openModal();
    }, delayMs);

    return () => clearTimeout(timer);
  }, [openModal, delayMs]);

  return null;
};

export default AutoOpenBookCallModal;
