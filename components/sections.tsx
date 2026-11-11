import Link from "next/link";
import type { ReactNode } from "react";
import type { Project } from "@/lib/content";
import type { ImageKey } from "@/lib/images";
import { Parallax, Reveal, Rise } from "./motion";
import { Arrow, ButtonLink, LogoMark, Photo, SampleTag, buttonClass } from "./ui";

/* ---------------------------------------------------------------- Page hero */

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
  position,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  image: ImageKey;
  alt: string;
  position?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[34rem] items-end overflow-hidden bg-ink text-white lg:min-h-[40rem]">
      <Parallax className="-z-10">
        <Photo name={image} alt={alt} sizes="100vw" preload position={position} />
      </Parallax>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/55" />
      <div className="shell pb-14 pt-40 lg:pb-20">
        <Rise>
          <p className="eyebrow eyebrow-light">{eyebrow}</p>
          <h1 className="h-page mt-6 max-w-4xl text-balance">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{intro}</p>}
          {children}
        </Rise>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Section header */

export function SectionHeader({
  eyebrow,
  title,
  align = "left",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</p>
      <h2 className="h-section mt-5">{title}</h2>
      {children}
    </Reveal>
  );
}

/* ------------------------------------------------------------- Project card */

export function ProjectCard({
  project,
  feature = false,
  wide = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: {
  project: Project;
  feature?: boolean;
  /** Horizontal, image-led layout for a lead card */
  wide?: boolean;
  sizes?: string;
}) {
  return (
    <article
      className={`group relative flex h-full flex-col rounded-[1.5rem] bg-stone p-3 transition-colors duration-500 hover:bg-[#eae3df] ${
        wide ? "md:flex-row" : ""
      }`}
    >
      <div
        className={`relative shrink-0 overflow-hidden rounded-[1rem] ${
          wide
            ? "aspect-[4/3] md:aspect-auto md:min-h-[27rem] md:w-[62%]"
            : feature
              ? "aspect-[4/3.5]"
              : "aspect-[4/3]"
        }`}
      >
        <Photo
          name={project.image}
          alt={`${project.name}, ${project.location} — sample project image`}
          sizes={sizes}
          className="transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.06]"
        />
        <div className="absolute left-3 top-3">
          <SampleTag />
        </div>
      </div>
      <div
        className={`flex flex-1 flex-col px-3 pb-3 pt-6 sm:px-4 sm:pb-4 ${wide ? "md:justify-end md:px-8 md:pb-6" : ""}`}
      >
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-mute">
          {project.category} <span className="mx-1.5 text-orange">/</span> {project.location}
        </p>
        <h3
          className={`mt-3 font-semibold tracking-[-0.025em] ${feature || wide ? "text-[1.75rem] leading-[1.1] lg:text-[2rem]" : "text-2xl leading-tight"}`}
        >
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
            {project.name}
          </Link>
        </h3>
        <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-mute">{project.summary}</p>
        <span className={`${buttonClass("primary", "sm")} mt-6 self-start group-hover:bg-ink`} aria-hidden="true">
          View Project
          <Arrow />
        </span>
      </div>
    </article>
  );
}

/* ----------------------------------------------------------------- CTA band */

export function ContactCta({ image = "timber", position }: { image?: ImageKey; position?: string }) {
  return (
    <section className="section">
      <div className="shell grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-7">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] sm:aspect-[16/10]">
            <Photo
              name={image}
              alt="Carpenter fixing roof trusses on a timber-frame building"
              sizes="(min-width: 1024px) 58vw, 100vw"
              position={position}
              className="transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.04]"
            />
          </div>
        </Reveal>
        <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-stone text-orange">
            <LogoMark className="h-6 w-6" />
          </span>
          <p className="eyebrow mt-8">Start a project</p>
          <h2 className="h-section mt-5">Let’s Build Something That Lasts.</h2>
          <p className="lede mt-5">
            Planning a development or exploring a construction partnership? We’d be delighted to
            hear about your project.
          </p>
          <ButtonLink href="/contact" className="mt-8">
            Start a Conversation
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
