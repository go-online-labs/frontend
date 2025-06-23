import { ButtonHTMLAttributes } from "react";

export function Button({
  children,
  className = "",
  variant = "default",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "link";
}) {
  const base = "rounded-2xl px-4 py-2 font-medium transition";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    link: "text-blue-600 underline hover:text-blue-800",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
