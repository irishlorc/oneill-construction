"use client";

import { MotionConfig, motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Providers({ children }: { children: ReactNode }) {
  // Honours the visitor's "reduce motion" system preference everywhere.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Fades content up as it enters the viewport. Runs once. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -70px 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Page-load entrance used in heroes (not scroll-triggered). */
export function Rise({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Slow parallax drift for full-bleed hero photography. */
export function Parallax({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);
  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
