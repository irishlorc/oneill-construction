/**
 * Single source of truth for company details.
 * Everything marked PLACEHOLDER must be replaced with real, verified
 * information before launch. Nothing here is a real claim about the company.
 */
export const site = {
  name: "O’Neill Construction",
  shortName: "O’Neill",
  tagline: "Building Ireland’s Future.",
  description:
    "O’Neill Construction is a national Irish construction group delivering commercial, residential, industrial and civil infrastructure projects across Ireland.",
  // PLACEHOLDER — set to the production domain (used for canonical URLs, sitemap and Open Graph).
  url: "https://www.example.ie",
  contact: {
    // PLACEHOLDERS
    phone: "+353 (0)0 000 0000",
    phoneHref: "",
    email: "hello@yourdomain.ie",
    addressLines: ["Head office address", "Town, County", "Ireland"],
    linkedin: "https://www.linkedin.com/",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export const projectTypes = [
  "Commercial",
  "Residential",
  "Industrial",
  "Civil & Infrastructure",
  "Other / not sure yet",
] as const;
