"use client";

import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface HubSpotMeetingsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function HubSpotMeetingsModal({
  open,
  onOpenChange,
}: HubSpotMeetingsModalProps) {
  useEffect(() => {
    if (open) {
      // Trigger HubSpot Meetings embed to reload when modal opens
      const timer = setTimeout(() => {
        if (typeof window !== "undefined") {
          // Reinitialize the embed
          const script = document.createElement("script");
          script.src =
            "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
          script.async = true;
          document.head.appendChild(script);
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>Schedule a Meeting</DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-4">
          <div
            className="meetings-iframe-container"
            data-src="https://meetings-na2.hubspot.com/tariq-sohail?embed=true"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
