import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils"

interface FormTextAreaProps {
  label?: string;
  name: string;
  control: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  rows?: number;
  placeholder?: string;
  className?: string;
}

const FormTextArea = ({ label, name, control, rows = 4, placeholder = "Enter text...", className }: FormTextAreaProps) => {
  return (
    <>
      {label && (
        <FormLabel className={cn("text-sm font-medium", "text-primary", className)}>
          {label}
        </FormLabel>
      )}
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea
                placeholder={placeholder}
                {...field}
                rows={rows}
                className=" px-4 py-6 w-full rounded-xl bg-[#F7F7F7] focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
              />
            </FormControl>
            <FormMessage className="text-xs text-red-500 mt-1" />
          </FormItem>
        )}
      />
    </>
  );
};

export default FormTextArea;