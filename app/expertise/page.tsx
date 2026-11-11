import type { Metadata } from "next";
import { Reveal } from "@/components/motion";
import { ContactCta, PageHero } from "@/components/sections";
import { ButtonLink, Photo } from "@/components/ui";
import { divisions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Commercial construction, residential development, and civil and infrastructure works delivered across Ireland by O’Neill Construction.",
  alternates: { canonical: "/expertise" },
};

const alts: Record<string, string> = {
  commercial: "Tower crane lifting materials between two commercial buildings under construction",
  residential: "Carpenter fixing roof trusses on a timber-frame house",
  civil: "Two O’Neill operatives installing modular stormwater attenuation units in an excavation",
};

function Capabilities({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className={`mt-8 border-t ${light ? "border-white/20" : "border-line"}`}>
      {items.map((c) => (
        <li
          key={c}
          className={`flex items-center gap-4 border-b py-4 text-[0.9375rem] font-medium ${light ? "border-white/20" : "border-line"}`}
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
          {c}
        </li>
      ))}
    </ul>
  );
}

export default function ExpertisePage() {
  const [commercial, residential, civil] = divisions;
  return (
    <>
      <PageHero
        eyebrow="Expertise"
        title="Construction without compromise."
        intro="Three divisions, one standard. Whatever we are building, clients get the same planning discipline, the same quality of people and the same accountability."
        image="rebar"
        alt="Steel fixer tying reinforcement on a construction site"
        position="50% 35%"
      />

      {/* Overview */}
      <section className="border-b border-line">
        <div className="shell grid gap-8 py-14 lg:grid-cols-12 lg:py-20">
          <Reveal className="lg:col-span-5">
            <p className="max-w-md text-2xl font-semibold leading-snug tracking-[-0.025em] lg:text-[1.75rem]">
              From the first excavation to the final finish, under one accountable team.
            </p>
          </Reveal>
          <nav aria-label="Divisions" className="lg:col-span-6 lg:col-start-7">
            <ol>
              {divisions.map((d, i) => (
                <li key={d.id} className="border-t border-line last:border-b">
                  <a
                    href={`#${d.id}`}
                    className="group flex items-center justify-between gap-6 py-5 transition-colors duration-300 hover:text-orange-text"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="text-xs font-bold tabular-nums text-orange-text">0{i + 1}</span>
                      <span className="text-xl font-semibold tracking-[-0.02em]">{d.title}</span>
                    </span>
                    <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-y-1" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M8 2.5v11M3.5 9 8 13.5 12.5 9" />
                    </svg>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* 01 Commercial — wide image, text beneath in two columns */}
      <section id={commercial.id} className="section">
        <div className="shell">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] sm:aspect-[21/9]">
              <Photo name={commercial.detailImage} alt={alts.commercial} sizes="100vw" position="50% 30%" />
            </div>
          </Reveal>
          <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-6">
              <p className="eyebrow">01 — Division</p>
              <h2 className="h-section mt-5">{commercial.title}</h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
              <p className="lede">{commercial.intro}</p>
              <Capabilities items={commercial.capabilities} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 Residential — split on warm neutral */}
      <section id={residential.id} className="section bg-paper">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">02 — Division</p>
            <h2 className="h-section mt-5">{residential.title}</h2>
            <p className="lede mt-6">{residential.intro}</p>
            <Capabilities items={residential.capabilities} />
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
              <Photo
                name={residential.detailImage}
                alt={alts.residential}
                sizes="(min-width: 1024px) 50vw, 100vw"
                position="48% 50%"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 Civil — dark, image-led */}
      <section id={civil.id} className="section bg-ink text-white">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] lg:aspect-auto lg:h-full lg:min-h-[34rem]">
              <Photo
                name={civil.detailImage}
                alt={alts.civil}
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12} className="flex flex-col justify-center lg:col-span-4 lg:col-start-9">
            <p className="eyebrow eyebrow-light">03 — Division</p>
            <h2 className="h-section mt-5">{civil.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">{civil.intro}</p>
            <Capabilities items={civil.capabilities} light />
            <ButtonLink href="/projects" className="mt-10 self-start">
              See Related Projects
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
