import type { Metadata } from "next";
import { Reveal } from "@/components/motion";
import { ContactCta, PageHero, SectionHeader } from "@/components/sections";
import { ButtonLink, Photo } from "@/components/ui";
import { approach, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "O’Neill Construction is a national Irish construction group built on dependable delivery, technical capability and long-term relationships.",
  alternates: { canonical: "/about" },
};

// PLACEHOLDERS — replace each value with verified company information.
const facts = [
  { label: "Established", value: "Year to be confirmed" },
  { label: "Our people", value: "Headcount to be confirmed" },
  { label: "Accreditations", value: "To be listed" },
  { label: "Head office", value: "Location to be confirmed" },
];

const regions = [
  { name: "Leinster", note: "Dublin and the east" },
  { name: "Munster", note: "Cork, Limerick and the south" },
  { name: "Connacht", note: "Galway and the west" },
  { name: "Ulster", note: "The north and north-west" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About O’Neill"
        title="A construction partner you can build on."
        intro="We are a national Irish construction group. Our work spans commercial, residential, industrial and civil infrastructure projects — and it is all delivered the same way: carefully, openly and properly."
        image="blueprint"
        alt="Site team reviewing drawings in front of a concrete-framed building under construction"
        position="50% 45%"
      />

      {/* Introduction */}
      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow">Who we are</p>
            <h2 className="h-section mt-5 max-w-[18ch]">Established, dependable and looking ahead.</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 lg:col-span-5 lg:col-start-8">
            <p className="lede">
              Construction is a business of promises: a date, a budget, a standard. O’Neill
              Construction exists to keep them. We combine the technical capability of a national
              contractor with the directness of a team that answers its own phone.
            </p>
            <p className="lede">
              Clients, design teams and supply-chain partners work with us repeatedly because the
              relationship is as well built as the project. That is the reputation we protect on
              every site, every day.
            </p>
          </Reveal>
        </div>

        <div className="shell mt-16 lg:mt-24">
          <Reveal>
            <dl className="grid overflow-hidden rounded-[1.5rem] bg-stone sm:grid-cols-2 lg:grid-cols-4">
              {facts.map((f) => (
                <div key={f.label} className="border-white p-7 max-lg:border-b lg:border-r lg:p-8 last:border-0">
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-mute">{f.label}</dt>
                  <dd className="mt-8 text-xl font-semibold tracking-[-0.02em] text-ink/55">
                    <span className="placeholder">{f.value}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-mute">
              Company details are placeholders and will be completed with verified information.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-paper">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionHeader eyebrow="Our values" title="What we stand for." />
          </div>
          <ol className="lg:col-span-7 lg:col-start-6">
            {values.map((v, i) => (
              <li key={v.title} className="border-t border-line last:border-b">
                <Reveal delay={0.06 * i} className="grid gap-3 py-8 sm:grid-cols-[4rem_1fr_1.2fr] sm:items-baseline sm:gap-6">
                  <span className="text-sm font-bold tabular-nums text-orange-text">0{i + 1}</span>
                  <h3 className="h-card">{v.title}</h3>
                  <p className="text-[0.9375rem] leading-relaxed text-mute">{v.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-7">
              <SectionHeader eyebrow="Our approach" title="Precision in every detail." />
            </div>
            <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
              <p className="lede">
                Three commitments shape how every O’Neill project is run, whatever its size or
                sector.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3 lg:gap-6">
            {approach.map((step, i) => (
              <Reveal key={step.n} delay={0.1 * i} className={["", "md:mt-10", "md:mt-20"][i]}>
                <div className="h-full rounded-[1.25rem] bg-stone p-7 lg:p-8">
                  <p className="text-[3.5rem] font-semibold leading-none tracking-[-0.05em]">{step.n}</p>
                  <h3 className="h-card mt-8">{step.title}</h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-mute">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* People */}
      <section className="section bg-ink text-white">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] lg:aspect-[5/4]">
              <Photo
                name="craneTeam"
                alt="Site team in hi-vis jackets and hard hats seen from behind, looking up at a building under construction"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12} className="flex flex-col justify-center lg:col-span-5 lg:col-start-8">
            <p className="eyebrow eyebrow-light">Our people</p>
            <h2 className="h-section mt-5">Projects are delivered by people, not by plant.</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Site managers, engineers, quantity surveyors, safety advisors and skilled operatives:
              the people who carry an O’Neill project are experienced, trusted and given the
              authority to make the right call.
            </p>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {["Leadership team", "Contracts & site management"].map((group) => (
                <li key={group} className="rounded-xl border border-dashed border-white/25 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">{group}</p>
                  <p className="mt-6 text-[0.9375rem] text-white/60">Names and profiles to be added.</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* National operations */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <SectionHeader eyebrow="National operations" title="At work in every province." />
            </div>
            <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
              <p className="lede">
                We resource projects across the island, pairing a consistent O’Neill management
                team with trusted local supply chains wherever the site happens to be.
              </p>
              <ButtonLink href="/projects" variant="outline-dark" className="mt-8">
                See Our Projects
              </ButtonLink>
            </Reveal>
          </div>
          <ul className="mt-14 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((r, i) => (
              <li key={r.name} className="border-b border-line py-8 sm:pr-8 lg:border-b-0">
                <Reveal delay={0.08 * i}>
                  <span className="text-xs font-bold tabular-nums text-orange-text">0{i + 1}</span>
                  <h3 className="mt-4 text-[2rem] font-semibold tracking-[-0.03em]">{r.name}</h3>
                  <p className="mt-2 text-[0.9375rem] text-mute">{r.note}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="bg-paper">
        <ContactCta />
      </div>
    </>
  );
}
