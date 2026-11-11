"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`rounded-xl border transition-colors duration-500 ${
              isOpen ? "border-transparent bg-stone" : "border-line bg-white hover:border-ink/30"
            }`}
          >
            <h3>
              <button
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left text-[1.0625rem] font-semibold tracking-[-0.015em] sm:px-6"
              >
                {item.q}
                <span
                  className={`relative grid h-8 w-8 shrink-0 place-items-center rounded-lg transition-colors duration-500 ${
                    isOpen ? "bg-orange text-white" : "bg-stone text-ink"
                  }`}
                  aria-hidden="true"
                >
                  <span className="absolute h-0.5 w-3 bg-current" />
                  <span
                    className={`absolute h-3 w-0.5 bg-current transition-transform duration-500 ease-out-expo ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-xl px-5 pb-6 text-[0.9375rem] leading-relaxed text-mute sm:px-6">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
