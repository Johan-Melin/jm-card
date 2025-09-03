import React, { ReactNode, ButtonHTMLAttributes } from "react";

type GlassPanelProps = {
  children: ReactNode;
  variant?: "default" | "button";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function GlassPanel({ children, variant = "default", ...props }: GlassPanelProps) {
  const baseStyles = "bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20";
  const variantStyles = {
    default: "",
    button: "cursor-pointer hover:bg-white/20",
  }[variant];

  return (
    <button className={`${baseStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  );
}