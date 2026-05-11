import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

interface FormDropDownProps {
  label?: string;
  name: string;
  control: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  items?: { value: string; label: string }[];
  groups?: { title: string; items: { value: string; label: string }[] }[];
  placeholder?: string; // ✅ Added placeholder support
}

const FormDropDown = ({
  label,
  name,
  control,
  items,
  groups,
  placeholder, // ✅ Receive placeholder
}: FormDropDownProps) => {
  return (
    <>
      {label && (
        <FormLabel className="text-sm font-medium text-primary">
          {label}
        </FormLabel>
      )}

      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <Select
              value={field.value}
              onValueChange={field.onChange}
            >
              <FormControl>
                <SelectTrigger className="px-4 py-5 w-full rounded-xl bg-[#F7F7F7] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary">
                  <SelectValue placeholder={placeholder || "All Statuses"} />
                </SelectTrigger>
              </FormControl>

              <SelectContent className="border border-primary max-h-[300px]">
                {groups ? (
                  groups.map((group, index) => (
                    <SelectGroup key={index}>
                      <SelectLabel className="text-xs">
                        {group.title}
                      </SelectLabel>
                      {group.items.map((item) => (
                        <SelectItem
                          key={item.value}
                          value={item.value}
                          className="text-sm py-2"
                        >
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  ))
                ) : (
                  items?.map((item) => (
                    <SelectItem
                      key={item.value}
                      value={item.value}
                      className="text-sm py-2"
                    >
                      {item.label}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    </>
  );
};

export default FormDropDown;