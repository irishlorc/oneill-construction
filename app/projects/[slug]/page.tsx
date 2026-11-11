import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/sections";
import { Arrow, ButtonLink, Photo, SampleTag } from "@/components/ui";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name}, ${project.location}`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { label: "Category", value: project.category },
    { label: "Location", value: `${project.location}, Ireland` },
    { label: "Client", value: "To be confirmed", placeholder: true },
    { label: "Completion", value: "To be confirmed", placeholder: true },
  ];

  return (
    <>
      <PageHero
        eyebrow={`${project.category} / ${project.location}`}
        title={project.name}
        intro={project.summary}
        image={project.image}
        alt={`${project.name} — sample project image`}
      >
        <div className="mt-8">
          <SampleTag />
        </div>
      </PageHero>

      {/* Overview */}
      <section className="section">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow">Project overview</p>
            <div className="mt-6 space-y-5">
              {project.overview.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-2xl font-semibold leading-snug tracking-[-0.025em] lg:text-[1.75rem]"
                      : "lede"
                  }
                >
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <dl className="rounded-[1.5rem] bg-stone px-7 py-3 lg:px-8">
              {facts.map((f) => (
                <div key={f.label} className="flex items-baseline justify-between gap-6 border-b border-white py-5 last:border-0">
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-mute">{f.label}</dt>
                  <dd className={`text-right text-[1.0625rem] font-semibold tracking-[-0.015em] ${f.placeholder ? "text-ink/50" : ""}`}>
                    <span className={f.placeholder ? "placeholder" : ""}>{f.value}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section aria-label="Project gallery" className="pb-20 lg:pb-32">
        <div className="shell grid gap-4 md:grid-cols-3 lg:gap-6">
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] md:aspect-auto md:h-full">
              <Photo name={project.gallery[0]} alt={`${project.name} — gallery image 1`} sizes="(min-width: 768px) 66vw, 100vw" />
            </div>
          </Reveal>
          {project.gallery.slice(1, 3).map((g, i) => (
            <Reveal key={g} delay={0.1 * (i + 1)}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] md:aspect-[5/4]">
                <Photo name={g} alt={`${project.name} — gallery image ${i + 2}`} sizes="(min-width: 768px) 33vw, 100vw" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Scope & delivery */}
      <section className="section bg-paper">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Scope of works</p>
            <ul className="mt-8 border-t border-line">
              {project.scope.map((s) => (
                <li key={s} className="flex items-center gap-4 border-b border-line py-4 text-[0.9375rem] font-medium">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="eyebrow">Delivery highlights</p>
            </Reveal>
            <ol className="mt-8 grid gap-4 sm:grid-cols-3">
              {project.highlights.map((h, i) => (
                <li key={h.title}>
                  <Reveal delay={0.1 * i} className="h-full">
                    <div className="h-full rounded-[1.25rem] bg-white p-6">
                      <span className="text-sm font-bold tabular-nums text-orange-text">0{i + 1}</span>
                      <h3 className="mt-8 text-lg font-semibold leading-snug tracking-[-0.02em]">{h.title}</h3>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-mute">{h.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="section">
        <div className="shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <p className="eyebrow">Next project</p>
              <Link href={`/projects/${next.slug}`} className="group mt-5 flex w-fit items-center gap-5">
                <span className="h-page transition-colors duration-300 group-hover:text-orange">{next.name}</span>
                <Arrow className="!h-8 !w-8 text-orange" />
              </Link>
              <p className="mt-3 text-mute">
                {next.category} / {next.location}
              </p>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-wrap gap-3">
              <ButtonLink href="/projects" variant="outline-dark">
                All Projects
              </ButtonLink>
              <ButtonLink href="/contact">Discuss a Project</ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
