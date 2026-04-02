import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-[var(--utoss-border)] px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "text-[var(--utoss-text)]",
        accent: "border-[#1f6feb66] text-[#58a6ff]",
        success: "border-[#3fb95066] text-[var(--utoss-green)]",
        warning: "border-[#d2992266] text-[var(--utoss-yellow)]",
        danger: "border-[#f8514966] text-[var(--utoss-red)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };



