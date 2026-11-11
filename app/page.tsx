import Link from "next/link";
import { Faq } from "@/components/Faq";
import { Parallax, Reveal, Rise } from "@/components/motion";
import { ContactCta, ProjectCard, SectionHeader } from "@/components/sections";
import { Arrow, ButtonLink, Photo, SampleTag, TextLink } from "@/components/ui";
import { approach, divisions, faqs, featuredProjects, insights } from "@/lib/content";

const sectors = ["Commercial", "Residential", "Industrial", "Civil & Infrastructure"];

export default function Home() {
  return (
    <>
      {/* ------------------------------------------------------------- Hero */}
      <section className="relative isolate flex min-h-[44rem] flex-col overflow-hidden bg-ink text-white sm:h-svh sm:max-h-[66rem]">
        <Parallax className="-z-10">
          <Photo
            name="crane"
            alt="Site team in hi-vis and hard hats watching a tower crane lift materials between two buildings under construction"
            sizes="100vw"
            preload
            position="50% 40%"
          />
        </Parallax>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/45 to-ink/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-transparent to-ink/45" />

        <div className="shell flex flex-1 flex-col justify-center pb-10 pt-36">
          <Rise delay={0.1}>
            <p className="eyebrow eyebrow-light">National Irish construction group</p>
          </Rise>
          <Rise delay={0.2}>
            <h1 className="h-display mt-7 max-w-[11ch]">Building Ireland’s Future.</h1>
          </Rise>
          <Rise delay={0.35}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/85 lg:text-xl lg:leading-relaxed">
              From ambitious developments to essential infrastructure, O’Neill Construction
              delivers the expertise, people and precision to bring projects to life across
              Ireland.
            </p>
          </Rise>
          <Rise delay={0.5} className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/projects">Explore Our Projects</ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Get in Touch
            </ButtonLink>
          </Rise>
        </div>

        <Rise delay={0.7}>
          <div className="shell">
            <ul className="grid grid-cols-2 border-t border-white/20 lg:grid-cols-4">
              {sectors.map((s, i) => (
                <li
                  key={s}
                  className="flex items-baseline gap-3 py-5 text-sm font-semibold tracking-[-0.01em] lg:py-7 lg:text-[0.9375rem]"
                >
                  <span className="text-xs font-bold tabular-nums text-orange">0{i + 1}</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Rise>
      </section>

      {/* ------------------------------------------------------------ About */}
      <section className="section">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col lg:col-span-6">
            <Reveal>
              <p className="eyebrow">About O’Neill</p>
              <h2 className="h-section mt-5 max-w-[16ch]">Our Reputation Is Built on Solid Ground.</h2>
              <p className="lede mt-6 max-w-lg">
                Clients come back to O’Neill because we deliver what we promise. We bring
                construction expertise, straight answers and steady hands to every project — and
                we build partnerships that last well beyond handover.
              </p>
              <ButtonLink href="/about" className="mt-8">
                Discover Our Story
              </ButtonLink>
            </Reveal>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-auto lg:pt-16">
              {[
                {
                  title: "Built on Experience",
                  text: "Seasoned site teams who have seen the hard problems before and know how to solve them.",
                  icon: <path d="M4 20h16M6 20V9l6-5 6 5v11M10 20v-6h4v6" />,
                },
                {
                  title: "Committed to Quality",
                  text: "Work that is checked, recorded and right first time, from the foundations up.",
                  icon: <path d="M4 5h16v14H4zM4 10h16M9 10v9M12.5 14.5l1.5 1.5 3-3" />,
                },
              ].map((card, i) => (
                <Reveal key={card.title} delay={0.1 * i} className="h-full">
                  <div className="h-full rounded-[1.25rem] bg-stone p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-orange">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {card.icon}
                      </svg>
                    </span>
                    <h3 className="h-card mt-10">{card.title}</h3>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-mute">{card.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
              <Photo
                name="gridLead"
                alt="O’Neill site operative in orange hi-vis and hard hat walking across a stormwater attenuation installation"
                sizes="(min-width: 1024px) 40vw, 100vw"
                position="40% 50%"
                className="transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.04]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------- Expertise */}
      <section className="section bg-paper">
        <div className="shell">
          <SectionHeader align="center" eyebrow="Our expertise" title="Construction Without Compromise." />

          <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-20 lg:gap-7">
            {divisions.map((d, i) => (
              <Reveal
                key={d.id}
                delay={0.12 * i}
                className={["", "md:mt-12", "md:mt-24"][i]}
              >
                <Link
                  href={`/expertise#${d.id}`}
                  className={`group relative isolate flex overflow-hidden rounded-[1.5rem] bg-ink text-white ${
                    ["h-[30rem] lg:h-[35rem]", "h-[30rem] lg:h-[31rem]", "h-[30rem] md:h-[27rem]"][i]
                  }`}
                >
                  <Photo
                    name={d.image}
                    alt=""
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="-z-10 transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                  <div className="mt-auto p-6 lg:p-8">
                    <h3 className="text-2xl font-semibold leading-tight tracking-[-0.025em] lg:text-[1.75rem]">
                      {d.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-[0.9375rem] leading-relaxed text-white/80">{d.short}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                      Explore Expertise
                      <Arrow />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Projects */}
      <section className="section">
        <div className="shell">
          <SectionHeader align="center" eyebrow="Featured projects" title="Shaping Places. Building Progress." />

          <div className="mt-14 grid items-end gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.slug} delay={0.1 * i} className={i === 2 ? "md:col-span-2 lg:col-span-1" : ""}>
                <ProjectCard project={p} feature={i === 2} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-line pt-8 sm:flex-row">
            <p className="text-sm text-mute">
              Sample projects shown for illustration until O’Neill case studies are added.
            </p>
            <TextLink href="/projects">View all projects</TextLink>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------------- Approach */}
      <section className="section bg-paper">
        <div className="shell">
          <SectionHeader
            align="center"
            eyebrow="Our approach"
            title={
              <>
                The Right People. The Right Approach. <span className="text-orange">Every Project.</span>
              </>
            }
          />

          <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-12 lg:gap-6">
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-6 lg:gap-6">
              {approach.map((step, i) => (
                <Reveal key={step.n} delay={0.1 * i} className={i === 2 ? "sm:col-span-2" : ""}>
                  <div className="flex h-full flex-col rounded-[1.25rem] bg-stone p-7 lg:p-8">
                    <p className="text-[3.5rem] font-semibold leading-none tracking-[-0.05em] text-ink lg:text-[4.25rem]">
                      {step.n}
                    </p>
                    <h3 className="h-card mt-8">{step.title}</h3>
                    <p className={`mt-2.5 text-[0.9375rem] leading-relaxed text-mute ${i === 2 ? "max-w-md" : ""}`}>
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15} className="flex flex-col lg:col-span-6">
              <p className="lede max-w-xl lg:pl-4">
                Good buildings come from good decisions, made early and made together. Our teams
                plan carefully, communicate openly and stay accountable from the first drawing to
                the final snag.
              </p>
              <div className="group relative mt-8 min-h-[18rem] flex-1 overflow-hidden rounded-[1.5rem]">
                <Photo
                  name="blueprint"
                  alt="Three members of a site team reviewing construction drawings in front of a concrete frame and tower crane at sunset"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  position="30% 50%"
                  className="transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- FAQ */}
      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow">Questions</p>
              <h2 className="h-section mt-5">A Few Common Questions.</h2>
              <p className="lede mt-5 max-w-md">
                The things clients most often ask before a first conversation. If yours isn’t
                here, we’re happy to answer it directly.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10">
              <Faq items={faqs} />
            </Reveal>
          </div>
          <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8">
            <div className="group relative aspect-[4/5] h-full min-h-[24rem] w-full overflow-hidden rounded-[1.75rem] lg:aspect-auto">
              <Photo
                name="rebar"
                alt="Steel fixer in a yellow hard hat tying reinforcement bars on a construction site"
                sizes="(min-width: 1024px) 40vw, 100vw"
                position="48% 50%"
                className="transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.04]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------------- CTA */}
      <div className="bg-paper">
        <ContactCta />
      </div>

      {/* --------------------------------------------------------- Insights */}
      <section className="section">
        <div className="shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader eyebrow="Insights & news" title="From the Site." />
            <Reveal>
              <p className="max-w-xs text-sm text-mute sm:text-right">
                Sample articles — editorial content to follow.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6 lg:mt-16 lg:gap-8">
            {insights.map((post, i) => {
              const centre = i === 1;
              const media = (
                <div className={`relative overflow-hidden rounded-[1rem] ${centre ? "aspect-[4/3.6]" : "aspect-[4/3.3]"}`}>
                  <Photo
                    name={post.image}
                    alt=""
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.06]"
                  />
                  <div className="absolute bottom-3 left-3">
                    <SampleTag>Sample article</SampleTag>
                  </div>
                </div>
              );
              const text = (
                <div className={centre ? "px-3 pb-4 pt-6" : "pb-6"}>
                  <p
                    className={`text-xs font-bold uppercase tracking-[0.14em] ${centre ? "text-white" : "text-mute"}`}
                  >
                    {post.category}
                  </p>
                  <h3 className="mt-3 max-w-[16ch] text-2xl font-semibold leading-[1.15] tracking-[-0.025em] lg:text-[1.75rem]">
                    {post.title}
                  </h3>
                  <p
                    className={`mt-5 border-t pt-4 text-sm font-semibold ${centre ? "border-white/35" : "border-line text-mute"}`}
                  >
                    Coming soon
                  </p>
                </div>
              );
              return (
                <Reveal key={post.title} delay={0.1 * i} className={centre ? "" : "md:mt-10"}>
                  <article
                    className={`group flex h-full flex-col ${
                      centre ? "rounded-[1.5rem] bg-orange p-3 text-white" : ""
                    }`}
                  >
                    {centre ? (
                      <>
                        {media}
                        {text}
                      </>
                    ) : (
                      <>
                        {text}
                        <div className="mt-auto">{media}</div>
                      </>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
