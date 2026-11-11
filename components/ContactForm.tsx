"use client";

import { useState, type FormEvent } from "react";
import { projectTypes } from "@/lib/site";
import { Arrow, buttonClass } from "./ui";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "sending" | "sent" | "error";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const fieldClass =
  "mt-2 block w-full rounded-lg border border-line bg-white px-4 text-base text-ink placeholder:text-mute/60 transition-colors duration-300 hover:border-ink/40 focus:border-ink focus:outline-none focus:ring-2 focus:ring-orange/35 aria-[invalid=true]:border-orange-text";
const labelClass = "text-sm font-semibold";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const next: Errors = {};
    if ((data.name ?? "").trim().length < 2) next.name = "Please enter your name.";
    if (!EMAIL.test((data.email ?? "").trim())) next.email = "Please enter a valid email address.";
    if ((data.message ?? "").trim().length < 10) next.message = "Please tell us a little about the project.";
    setErrors(next);

    const first = Object.keys(next)[0];
    if (first) {
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok && body.ok) {
        setStatus("sent");
        form.reset();
      } else if (body.errors) {
        setErrors(body.errors);
        setStatus("idle");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex min-h-[28rem] flex-col justify-center rounded-[1.5rem] bg-stone p-8 lg:p-12">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-orange text-white">
          <svg viewBox="0 0 16 16" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m3 8.5 3.5 3.5L13 4.5" />
          </svg>
        </span>
        <h2 className="h-section mt-8">Thank you.</h2>
        <p className="lede mt-4 max-w-md">
          Your enquiry has been received. A member of the O’Neill team will be in touch shortly.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className={`${buttonClass("outline-dark", "sm")} mt-8 self-start`}>
          Send another enquiry
        </button>
      </div>
    );
  }

  const err = (key: keyof Errors) =>
    errors[key] ? (
      <p id={`${key}-error`} className="mt-2 text-sm font-medium text-orange-text">
        {errors[key]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[1.5rem] bg-stone p-6 sm:p-8 lg:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-orange-text" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`${fieldClass} h-[3.25rem]`}
          />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-orange-text" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${fieldClass} h-[3.25rem]`}
          />
          {err("email")}
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" className={`${fieldClass} h-[3.25rem]`} />
        </div>
        <div>
          <label htmlFor="projectType" className={labelClass}>
            Project type
          </label>
          <div className="relative">
            <select id="projectType" name="projectType" defaultValue="" className={`${fieldClass} h-[3.25rem] appearance-none pr-10`}>
              <option value="" disabled>
                Select a sector
              </option>
              {projectTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <svg viewBox="0 0 16 16" className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m4 6 4 4 4-4" />
            </svg>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="location" className={labelClass}>
            Project location
          </label>
          <input id="location" name="location" type="text" placeholder="Town or county" className={`${fieldClass} h-[3.25rem]`} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Message <span className="text-orange-text" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="A short outline of the project, its stage and your timeline."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${fieldClass} resize-y py-3.5 leading-relaxed`}
          />
          {err("message")}
        </div>
      </div>

      {/* Honeypot — hidden from people, tempting to bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-mute">
          <span className="text-orange-text" aria-hidden="true">*</span> Required fields
        </p>
        <button type="submit" disabled={status === "sending"} className={`${buttonClass("primary")} disabled:opacity-60`}>
          {status === "sending" ? "Sending…" : "Send Enquiry"}
          <Arrow />
        </button>
      </div>

      <p role="alert" className="mt-4 text-sm font-medium text-orange-text">
        {status === "error" ? "Sorry, something went wrong. Please try again or email us directly." : ""}
      </p>
    </form>
  );
}
