import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white shadow-sm hover:bg-accent-strong focus-visible:ring-accent",
  secondary:
    "bg-zinc-950 text-white shadow-sm hover:bg-zinc-800 focus-visible:ring-zinc-700",
  ghost:
    "text-zinc-800 hover:bg-zinc-100 focus-visible:ring-zinc-300",
  outline:
    "border border-zinc-300 bg-white text-zinc-900 hover:border-zinc-500 focus-visible:ring-zinc-300",
};

const baseClass =
  "inline-flex h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(baseClass, variants[variant], className)}
      {...props}
    />
  );
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
};

export function ButtonLink({
  className,
  variant = "primary",
  href,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(baseClass, variants[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
