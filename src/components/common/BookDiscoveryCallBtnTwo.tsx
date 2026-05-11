"use client";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useBookCallModal } from "@/contexts/BookCallModalContext";

interface BookDiscoveryCallBtnTwoProps {
  className?: string;
   text?: string;
  title?: string;
  size?: "lg" | "default" | "sm" | "icon" | "icon-sm" | "icon-lg" | null | undefined
}

const BookDiscoveryCallBtnTwo = ({
  className,
  title = "Book A Discovery Call",
  size="lg",
}: BookDiscoveryCallBtnTwoProps) => {
  const { openModal } = useBookCallModal();
  
  return (
    <Button
      size={size}
      className={cn(
        "bg-yellow-400 text-black hover:bg-black hover:text-white transition-colors duration-300 dark:border-yellow-400 border rounded-md px-6 py-5 md:px-8 md:py-6 text-sm md:text-base lg:text-lg font-semibold w-full sm:w-auto",
        className,
      )}
      onClick={openModal}
    >
      {title}
    </Button>
  );
};

export default BookDiscoveryCallBtnTwo;
