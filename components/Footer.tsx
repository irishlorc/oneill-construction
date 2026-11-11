import Link from "next/link";
import { divisions } from "@/lib/content";
import { nav, site } from "@/lib/site";
import { ButtonLink, Logo } from "./ui";
import { Year } from "./Year";

const linkClass =
  "text-[0.9375rem] text-white/70 transition-colors duration-300 hover:text-white";

export function Footer() {
  const { contact } = site;
  return (
    <footer className="bg-ink text-[#f7f5f3]">
      <div className="shell">
        <div className="flex flex-col gap-8 border-b border-white/12 py-16 lg:flex-row lg:items-end lg:justify-between lg:py-20">
          <p className="max-w-3xl text-[clamp(2rem,4.6vw,4rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            Building Ireland’s <span className="text-orange">Future.</span>
          </p>
          <ButtonLink href="/contact" className="self-start lg:self-auto">
            Discuss a Project
          </ButtonLink>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-white/60">
              A national Irish construction group delivering commercial, residential, industrial
              and civil infrastructure projects.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2 lg:col-start-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Navigate</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Expertise" className="lg:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Expertise</h2>
            <ul className="mt-5 space-y-3">
              {divisions.map((d) => (
                <li key={d.id}>
                  <Link href={`/expertise#${d.id}`} className={linkClass}>
                    {d.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Contact</h2>
            <address className="mt-5 space-y-3 text-[0.9375rem] not-italic text-white/70">
              <p>
                {contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p>
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
                  {contact.email}
                </a>
              </p>
              <p>{contact.phone}</p>
            </address>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-3 text-[0.9375rem] font-semibold text-white"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 transition-colors duration-300 group-hover:bg-orange">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.6h.06c.53-.95 1.82-1.95 3.75-1.95 4 0 4.74 2.5 4.74 5.75v5.6h-4v-4.96c0-1.2-.02-2.73-1.75-2.73s-2.02 1.3-2.02 2.64v5.05h-4v-11Z" />
                </svg>
              </span>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/12 py-7 text-[0.8125rem] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <Year /> {site.name}. All rights reserved.
          </p>
          <p>Commercial · Residential · Industrial · Civil &amp; Infrastructure</p>
        </div>
      </div>
    </footer>
  );
}
