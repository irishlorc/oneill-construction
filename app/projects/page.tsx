import type { Metadata } from "next";
import { Reveal } from "@/components/motion";
import { ProjectsBrowser } from "@/components/ProjectsBrowser";
import { ContactCta, PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A portfolio of commercial, residential, industrial and civil infrastructure projects by O’Neill Construction across Ireland.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Shaping places. Building progress."
        intro="A selection of work across our sectors. Each project page sets out the brief, the scope and how it was delivered."
        image="craneBuilding"
        alt="Glass-fronted commercial building under construction beneath a tower crane"
        position="50% 60%"
      />
      <section className="section">
        <div className="shell">
          <Reveal>
            <p className="mb-10 max-w-2xl rounded-xl bg-stone px-5 py-4 text-sm leading-relaxed text-mute">
              <strong className="font-semibold text-ink">Sample portfolio.</strong> These projects are
              illustrative and demonstrate how O’Neill case studies will be presented once real
              project information and photography are supplied.
            </p>
          </Reveal>
          <ProjectsBrowser />
        </div>
      </section>
      <div className="bg-paper">
        <ContactCta />
      </div>
    </>
  );
}
