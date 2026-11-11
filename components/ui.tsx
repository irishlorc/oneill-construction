import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { images, type ImageKey } from "@/lib/images";
import { site } from "@/lib/site";

/* --------------------------------------------------------------------- Logo */

const MARK =
  "M164 270C164 243 165 219 165 216C168 198 185 180 203 175L209 173L262 173L316 174L290 200C276 215 263 230 260 232L255 237L233 237L211 237L211 255L211 272L188 295C176 308 165 318 165 318C164 318 164 296 164 270ZM136 294C128 287 114 275 106 267C97 259 89 252 89 250C88 249 88 238 88 227L88 206L65 206L42 206L25 189L8 173L64 173L119 174L126 177L134 181L139 187C142 190 145 195 147 198L150 204L150 244C150 266 150 289 150 295L150 307L136 294ZM5 156C8 152 64 92 67 91L70 89L91 89L112 89L112 70L112 51L114 48C115 47 125 36 137 24L158 4L159 56L159 110L157 116C152 132 134 151 118 156L112 158L58 158L4 158L5 156ZM204 156C188 150 177 136 174 120C173 112 173 19 174 19C175 19 233 79 235 81L236 84L236 105L236 126L258 126L281 126L285 130C288 132 295 139 302 146L313 158L261 158L210 158L204 156Z";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 322" className={className} fill="currentColor" aria-hidden="true">
      <path d={MARK} />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-8 w-8 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap text-[1.0625rem] font-bold tracking-[-0.02em]">O’Neill Construction</span>
        <span className="mt-1 hidden whitespace-nowrap text-[0.625rem] font-semibold uppercase tracking-[0.2em] opacity-70 sm:block">
          Irish Construction Partner
        </span>
      </span>
      <span className="sr-only">{site.name} — home</span>
    </span>
  );
}

/* -------------------------------------------------------------------- Arrow */

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`h-4 w-4 shrink-0 transition-transform duration-500 ease-out-expo group-hover:translate-x-1 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

/* ------------------------------------------------------------------- Button */

type Variant = "primary" | "white" | "outline" | "outline-dark";

const variants: Record<Variant, string> = {
  primary: "bg-orange text-white hover:bg-ink",
  white: "bg-white text-ink hover:bg-orange hover:text-white",
  outline: "border border-white/45 text-white hover:bg-white hover:text-ink backdrop-blur-[2px]",
  "outline-dark": "border border-ink/20 text-ink hover:bg-ink hover:text-white",
};

export function buttonClass(variant: Variant = "primary", size: "md" | "sm" = "md") {
  return [
    "group inline-flex items-center justify-center gap-2.5 rounded-lg font-semibold tracking-[-0.01em]",
    "transition-colors duration-300 ease-out",
    size === "md" ? "h-[3.25rem] px-6 text-[0.9375rem]" : "h-11 px-5 text-sm",
    variants[variant],
  ].join(" ");
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "sm";
  className?: string;
}) {
  return (
    <Link href={href} className={`${buttonClass(variant, size)} ${className}`}>
      {children}
      <Arrow />
    </Link>
  );
}

/** Understated text link with a sliding arrow */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-[0.9375rem] font-semibold underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors duration-300 hover:decoration-orange ${className}`}
    >
      {children}
      <Arrow />
    </Link>
  );
}

/* -------------------------------------------------------------------- Photo */

export function Photo({
  name,
  alt,
  sizes,
  preload = false,
  position,
  className = "",
}: {
  name: ImageKey;
  alt: string;
  sizes: string;
  preload?: boolean;
  position?: string;
  className?: string;
}) {
  return (
    <Image
      src={images[name]}
      alt={alt}
      fill
      sizes={sizes}
      preload={preload}
      placeholder="blur"
      className={`object-cover ${className}`}
      style={position ? { objectPosition: position } : undefined}
    />
  );
}

/* --------------------------------------------------------------- Sample tag */

export function SampleTag({ children = "Sample project" }: { children?: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-white/92 px-2.5 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ink backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-orange" />
      {children}
    </span>
  );
}
