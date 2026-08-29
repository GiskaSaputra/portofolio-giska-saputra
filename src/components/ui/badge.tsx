import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type BadgeVariant = "light" | "dark" | "accent" | "purple" | "pink";

export function Badge({
  className,
  variant = "light",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        variant === "light" &&
          "border-neutral-200 bg-white text-neutral-700",
        variant === "dark" &&
          "border-white/15 bg-white/10 text-white",
        variant === "accent" &&
          "border-indigo-200 bg-indigo-50 text-indigo-700",
        variant === "purple" &&
          "border-purple-200 bg-purple-50 text-purple-700",
        variant === "pink" &&
          "border-pink-200 bg-pink-50 text-pink-700",
        className
      )}
      {...props}
    />
  );
}
