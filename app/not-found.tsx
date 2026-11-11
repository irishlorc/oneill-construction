import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-ink text-white">
      <div className="shell flex min-h-[80svh] flex-col justify-center pb-24 pt-44">
        <p className="eyebrow eyebrow-light">Page not found</p>
        <h1 className="h-page mt-6 max-w-3xl">This page isn’t on the drawings.</h1>
        <p className="mt-6 max-w-xl text-lg text-white/70">
          The page you’re looking for has moved or never existed. Let’s get you back on site.
        </p>
        <ButtonLink href="/" className="mt-10 self-start">
          Back to Home
        </ButtonLink>
      </div>
    </section>
  );
}
