import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<ButtonVariant, string> = {
  primary:
    "relative overflow-hidden bg-accent text-white shadow-[0_12px_28px_rgba(255,122,0,0.24)] before:absolute before:inset-y-0 before:-left-1/2 before:w-1/3 before:skew-x-[-18deg] before:bg-white/35 before:opacity-0 before:transition-all before:duration-700 hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-[0_18px_42px_rgba(255,122,0,0.34)] hover:before:left-[120%] hover:before:opacity-100 active:translate-y-0 focus-visible:ring-accent",
  secondary:
    "bg-ink text-white shadow-sm hover:bg-zinc-800 focus-visible:ring-zinc-700",
  ghost:
    "text-ink hover:bg-zinc-100 focus-visible:ring-zinc-300",
  outline:
    "border border-ink bg-white text-ink hover:bg-ink hover:text-white focus-visible:ring-zinc-300",
};

const baseClass =
  "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-extrabold uppercase transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

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
