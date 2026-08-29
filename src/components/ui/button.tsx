import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform active:scale-95",
        variant === "primary" &&
          "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_4px_20px_rgba(79,70,229,0.35)] hover:opacity-90",
        variant === "secondary" &&
          "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50",
        variant === "ghost" && "text-neutral-700 hover:text-neutral-900",
        className
      )}
      {...props}
    />
  );
}
