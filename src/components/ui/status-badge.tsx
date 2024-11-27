import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
const statusBadgeVariants = cva("px-4 py-1 text-xs rounded-full text-white", {
  variants: {
    variant: {
      open: "bg-blue-500  hover:bg-blue-600",
      completed: "bg-green-500  hover:bg-green-600",
      closed: "bg-red-500  hover:bg-red-600",
    },
  },
  defaultVariants: {
    variant: "open",
  },
});
export interface StatusBadgeProps
  extends React.HTMLProps<HTMLSpanElement>,
    VariantProps<typeof statusBadgeVariants> {
  children: React.ReactNode;
}
export const StatusBadge = React.forwardRef<HTMLSpanElement, StatusBadgeProps>(
  ({ className, variant, children, ...props }, ref) => (
    <span
      ref={ref}
      className={statusBadgeVariants({ variant, className })}
      {...props}
    >
      {children}
    </span>
  )
);
StatusBadge.displayName = "StatusBadge";
