import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Planning a development or exploring a construction partnership? Tell O’Neill Construction about your project.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { contact } = site;
  const details = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { label: "Phone", value: contact.phone },
    { label: "Head office", value: contact.addressLines.join(", ") },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s build something that lasts."
        intro="Planning a development or exploring a construction partnership? We’d be delighted to hear about your project."
        image="timber"
        alt="Carpenter fixing roof trusses on a timber-frame building"
        position="50% 40%"
      />

      <section className="section">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Get in touch</p>
            <h2 className="h-section mt-5">Start a conversation.</h2>
            <p className="lede mt-5">
              Share a short outline and the right person will come back to you. Early-stage
              enquiries are very welcome.
            </p>

            <dl className="mt-12 border-t border-line">
              {details.map((d) => (
                <div key={d.label} className="border-b border-line py-5">
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-mute">{d.label}</dt>
                  <dd className="mt-2 text-[1.0625rem] font-semibold tracking-[-0.015em] text-ink/55">
                    {d.href ? (
                      <a href={d.href} className="placeholder transition-colors hover:text-ink">
                        {d.value}
                      </a>
                    ) : (
                      <span className="placeholder">{d.value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-mute">Contact details are placeholders pending confirmation.</p>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-[0.9375rem] font-semibold underline decoration-orange decoration-2 underline-offset-[6px]"
            >
              Follow us on LinkedIn
            </a>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-7 lg:col-start-6">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
