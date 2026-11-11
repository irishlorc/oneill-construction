"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { projectCategories, projects, type ProjectCategory } from "@/lib/content";
import { ProjectCard } from "./sections";

type Filter = "All" | ProjectCategory;
const filters: Filter[] = ["All", ...projectCategories];

export function ProjectsBrowser() {
  const [filter, setFilter] = useState<Filter>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {filters.map((f) => {
          const active = f === filter;
          const count = f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={`inline-flex h-11 shrink-0 items-center gap-2.5 rounded-lg px-4 text-sm font-semibold transition-colors duration-300 ${
                active ? "bg-ink text-white" : "bg-stone text-ink hover:bg-line"
              }`}
            >
              {f}
              <span className={`text-xs tabular-nums ${active ? "text-orange" : "text-mute"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? "project" : "projects"}
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={filter === "All" && i === 0 ? "md:col-span-2" : ""}
            >
              <ProjectCard
                project={p}
                wide={filter === "All" && i === 0}
                sizes={filter === "All" && i === 0 ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
