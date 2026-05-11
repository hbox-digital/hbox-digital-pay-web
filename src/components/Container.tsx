import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={cn("mx-auto w-full max-w-[1536px] px-4 sm:px-6 md:px-20", className)}>
      {children}
    </div>
  );
};

export default Container;