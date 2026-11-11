"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Arrow, Logo, buttonClass } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll and allow Escape to close while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-500 ease-out ${
        open
          ? "bg-white text-ink"
          : scrolled
            ? "bg-white/95 text-ink shadow-[0_1px_0_0_rgba(23,23,23,0.08)] backdrop-blur-md"
            : "text-white"
      }`}
    >
      <div
        className={`shell flex items-center justify-between transition-[height] duration-500 ease-out-expo ${
          scrolled ? "h-[4.5rem]" : "h-[5.5rem]"
        }`}
      >
        <Link href="/" onClick={() => setOpen(false)} className="relative z-10">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="group relative block py-2 text-[0.9375rem] font-medium"
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-orange transition-transform duration-500 ease-out-expo group-hover:scale-x-100 ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Link href="/contact" className={buttonClass("primary", "sm")}>
              Discuss a Project
              <Arrow />
            </Link>
          </div>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 grid h-11 w-11 place-items-center rounded-lg lg:hidden"
          >
            <span className="relative block h-3.5 w-6">
              <span
                className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 -z-10 flex flex-col bg-white px-5 pb-8 pt-28 sm:px-8 lg:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="border-t border-line">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-line"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className="flex items-center justify-between py-5 text-3xl font-semibold tracking-[-0.03em]"
                    >
                      {item.label}
                      {isActive(item.href) && <span className="h-2 w-2 rounded-full bg-orange" />}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={`${buttonClass("primary")} mt-auto w-full`}
            >
              Discuss a Project
              <Arrow />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
