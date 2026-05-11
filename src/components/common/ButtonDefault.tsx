import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface ButtonDefaultProps {
  className?: string;
  name: string;
  link: string;
}

const ButtonDefault = ({ className, name, link }: ButtonDefaultProps) => {
  return (
    <Link href={link}>
      <Button
        size="lg"
        className={cn(
          "bg-yellow-400 text-black hover:bg-black hover:text-white transition-colors duration-300 dark:border-yellow-400 border rounded-md px-6 py-5 md:px-8 md:py-6 text-sm md:text-base lg:text-lg font-semibold w-full sm:w-auto",
          className
        )}
      >
        {name}
      </Button>
    </Link>
  );
};

export default ButtonDefault;
