"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 ",
          // className,
        )}
        {...props}
      >
                                      <span>{children}</span>

        {/* {children} */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="14"
          viewBox="0 0 24 16"
          fill="none"
          className="pointer-events-none shrink-0 translate-y-0.5 transition-transform duration-200"
        >
          <path
            d="M12.9365 15.5656L23.6166 3.4459C23.8638 3.16559 24 2.7914 24 2.39241C24 1.99341 23.8638 1.61922 23.6166 1.33891L22.8303 0.446376C22.3179 -0.1344 21.4851 -0.1344 20.9735 0.446376L12.005 10.6236L3.02651 0.435083C2.77929 0.154769 2.44974 -9.41992e-07 2.09832 -9.57353e-07C1.74652 -9.7273e-07 1.41696 0.154769 1.16955 0.435082L0.383411 1.32761C0.136194 1.60815 0 1.98212 0 2.38111C0 2.7801 0.136194 3.1543 0.383411 3.43461L11.0733 15.5656C11.3213 15.8466 11.6524 16.0009 12.0044 16C12.3578 16.0009 12.6887 15.8466 12.9365 15.5656Z"
            fill="#FFE100"
          />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
