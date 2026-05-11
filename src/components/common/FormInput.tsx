import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils"

interface FormInputProps {
  label?: string;
  name: string;
  control: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  placeholder: string;
  className?: string;
}

const FormInput = ({ label, name, control , placeholder, className }: FormInputProps) => {
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
              <Input
                placeholder={placeholder}
                {...field}
                className="px-4 py-5 w-full rounded-xl bg-[#F7F7F7] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </FormControl>
            <FormMessage className="text-xs text-red-500 mt-1" />
          </FormItem>
        )}
      />
    </>
  );
};

export default FormInput;