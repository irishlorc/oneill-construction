# O’Neill Construction — website

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Motion. Ready for Vercel.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where things live

| What | File |
| --- | --- |
| Company details (name, phone, email, address, LinkedIn, site URL) | `lib/site.ts` |
| Divisions, projects, FAQs, approach, values, insights | `lib/content.ts` |
| Photography registry | `lib/images.ts` → files in `public/images/` |
| Colours, type scale, spacing | `app/globals.css` |
| Logo mark, buttons, image wrapper | `components/ui.tsx` |
| Enquiry form + endpoint | `components/ContactForm.tsx`, `app/api/enquiry/route.ts` |

## Before launch

- [ ] Replace every placeholder in `lib/site.ts` (search the project for `PLACEHOLDER`).
- [ ] Replace the sample projects and sample articles in `lib/content.ts` with approved content.
- [ ] Fill the company facts and people placeholders on `app/about/page.tsx`.
- [ ] Connect `app/api/enquiry/route.ts` to an email service or CRM — it validates submissions but does not deliver them yet.
- [ ] Add further photography: the five supplied photographs are reused at different crops across the site.
- [ ] Confirm the brand name: the supplied logo reads “O’Neill Group”; the site wordmark reads “O’Neill Construction” (change in `components/ui.tsx` and `lib/site.ts`).
