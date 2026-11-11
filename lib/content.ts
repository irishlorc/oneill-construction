import type { ImageKey } from "./images";

/* ---------------------------------------------------------------- Expertise */

export type Division = {
  id: string;
  title: string;
  short: string;
  intro: string;
  capabilities: string[];
  image: ImageKey;
  detailImage: ImageKey;
};

export const divisions: Division[] = [
  {
    id: "commercial",
    title: "Commercial Construction",
    short: "Offices, business facilities and large-scale commercial developments.",
    intro:
      "Workplaces, business facilities and industrial buildings, delivered with the programme certainty that commercial clients depend on. We work alongside design teams from the earliest stage so that buildability, cost and sequence are settled before anyone is on site.",
    capabilities: [
      "Offices and workplaces",
      "Industrial, logistics and production facilities",
      "Retail and mixed-use schemes",
      "Fit-out, extension and refurbishment",
    ],
    image: "blueprintStructure",
    detailImage: "crane",
  },
  {
    id: "residential",
    title: "Residential Development",
    short: "High-quality residential schemes and modern living environments.",
    intro:
      "Homes and neighbourhoods built to be lived in for generations. From housing schemes to apartment developments, we bring the same discipline to the finish of a single home as we do to the infrastructure of the whole site.",
    capabilities: [
      "Housing developments",
      "Apartment and multi-unit schemes",
      "Timber frame and traditional construction",
      "Site infrastructure and public realm",
    ],
    image: "timber",
    detailImage: "timber",
  },
  {
    id: "civil",
    title: "Civil & Infrastructure",
    short: "Essential infrastructure, groundworks and complex civil engineering projects.",
    intro:
      "The work beneath and around every project: enabling works, drainage, structures and the infrastructure communities rely on. Carefully planned, safely delivered and built to perform for decades.",
    capabilities: [
      "Groundworks and enabling works",
      "Drainage and stormwater attenuation",
      "Reinforced concrete structures",
      "Roads, utilities and site infrastructure",
    ],
    image: "gridPanel",
    detailImage: "grid",
  },
];

/* ----------------------------------------------------------------- Projects */

export const projectCategories = [
  "Commercial",
  "Residential",
  "Industrial",
  "Civil & Infrastructure",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  location: string;
  summary: string;
  overview: string[];
  scope: string[];
  highlights: { title: string; text: string }[];
  image: ImageKey;
  gallery: ImageKey[];
};

/**
 * SAMPLE CONTENT. These projects are illustrative only and exist to
 * demonstrate the layout. Replace with real, approved case studies.
 */
export const projects: Project[] = [
  {
    slug: "docklands-quarter",
    name: "Docklands Quarter",
    category: "Commercial",
    location: "Dublin",
    summary: "A multi-storey office building on a constrained city-centre site.",
    overview: [
      "This sample case study shows how a commercial project would be presented: the brief, the constraints of the site and the way the team responded to them.",
      "Replace this text with a short, factual account of the real project — what was built, for whom, and what made it demanding.",
    ],
    scope: [
      "Main contractor",
      "Reinforced concrete frame",
      "Unitised glazed façade",
      "Shell and core with landlord fit-out",
    ],
    highlights: [
      { title: "City-centre logistics", text: "Deliveries and lifting planned around a live urban street network." },
      { title: "Early engagement", text: "Buildability advice provided to the design team ahead of tender." },
      { title: "Coordinated handover", text: "Phased completion aligned with the client’s occupation plan." },
    ],
    image: "craneBuilding",
    gallery: ["crane", "craneScaffold", "craneTeam"],
  },
  {
    slug: "corrib-attenuation-scheme",
    name: "Corrib Attenuation Scheme",
    category: "Civil & Infrastructure",
    location: "Galway",
    summary: "Below-ground stormwater attenuation and associated drainage works.",
    overview: [
      "This sample case study shows how a civil engineering project would be presented, from enabling works through to reinstatement.",
      "Replace this text with a short, factual account of the real scheme and the infrastructure it delivered.",
    ],
    scope: [
      "Bulk excavation and earthworks support",
      "Modular attenuation tank installation",
      "Drainage and outfall connections",
      "Backfill and surface reinstatement",
    ],
    highlights: [
      { title: "Ground conditions", text: "Excavation sequenced to manage groundwater and protect adjacent land." },
      { title: "Quality assurance", text: "Every stage inspected and recorded before being covered." },
      { title: "Safe systems of work", text: "Lifting, access and edge protection planned for each phase." },
    ],
    image: "grid",
    gallery: ["grid", "gridPanel", "gridLead"],
  },
  {
    slug: "marina-point",
    name: "Marina Point",
    category: "Commercial",
    location: "Cork",
    summary: "A mixed-use commercial building with ground-floor retail.",
    overview: [
      "This sample case study shows how a mixed-use commercial project would be presented.",
      "Replace this text with a short, factual account of the real building, its uses and its delivery.",
    ],
    scope: [
      "Main contractor",
      "Concrete frame and structural steel",
      "Envelope and roofing",
      "External works and public realm",
    ],
    highlights: [
      { title: "Sequenced structure", text: "Frame and envelope overlapped to bring the building weathertight sooner." },
      { title: "Neighbour liaison", text: "Regular communication with adjoining occupiers throughout the works." },
      { title: "Design coordination", text: "Services and structure coordinated in a shared model before installation." },
    ],
    image: "craneScaffold",
    gallery: ["blueprint", "blueprintStructure", "craneBuilding"],
  },
  {
    slug: "riverside-homes",
    name: "Riverside Homes",
    category: "Residential",
    location: "Kilkenny",
    summary: "A new neighbourhood of energy-efficient timber-frame homes.",
    overview: [
      "This sample case study shows how a residential development would be presented, from site infrastructure to finished homes.",
      "Replace this text with a short, factual account of the real scheme — its homes, its setting and its residents.",
    ],
    scope: [
      "Site infrastructure and services",
      "Timber-frame superstructure",
      "Roofing, envelope and finishes",
      "Landscaping and shared spaces",
    ],
    highlights: [
      { title: "Repeatable quality", text: "A consistent inspection regime applied to every home, not a sample." },
      { title: "Phased delivery", text: "Homes released in phases so residents could move in as the scheme grew." },
      { title: "Considered detailing", text: "Airtightness and insulation checked at each stage of construction." },
    ],
    image: "timber",
    gallery: ["timber", "blueprintTeam", "gridLead"],
  },
  {
    slug: "shannonside-logistics-hub",
    name: "Shannonside Logistics Hub",
    category: "Industrial",
    location: "Limerick",
    summary: "A large-format distribution facility with heavy-duty slabs and yards.",
    overview: [
      "This sample case study shows how an industrial project would be presented.",
      "Replace this text with a short, factual account of the real facility and the operational needs it was built around.",
    ],
    scope: [
      "Foundations and reinforced slabs",
      "Structural frame and cladding",
      "Service yards and access roads",
      "Drainage and utilities",
    ],
    highlights: [
      { title: "Built for operations", text: "Floor specification and yard layout developed with the end user." },
      { title: "Reinforcement control", text: "Steel fixing checked against drawings ahead of every pour." },
      { title: "Programme focus", text: "Critical-path activities tracked and reported weekly." },
    ],
    image: "rebar",
    gallery: ["rebar", "blueprintStructure", "craneTeam"],
  },
];

export const featuredProjects = ["docklands-quarter", "corrib-attenuation-scheme", "marina-point"].map(
  (slug) => projects.find((p) => p.slug === slug)!,
);

/* ----------------------------------------------------------------- Approach */

export const approach = [
  {
    n: "01",
    title: "Planning & Preparation",
    text: "Projects are won or lost before work starts. We resolve sequence, logistics and risk early, so the site runs to plan.",
  },
  {
    n: "02",
    title: "Quality & Safety",
    text: "Clear standards, checked at every stage, by people with the authority to stop and put things right.",
  },
  {
    n: "03",
    title: "Delivery & Partnership",
    text: "One accountable team from first conversation to handover — open about progress, straightforward about challenges and committed to the long-term relationship.",
  },
];

/* ---------------------------------------------------------------------- FAQ */

export const faqs = [
  {
    q: "What types of construction projects do you undertake?",
    a: "We work across commercial, residential, industrial and civil infrastructure projects — from new-build developments and fit-outs to groundworks, drainage and structural works. If you are unsure whether your project is a fit, the quickest way to find out is to ask us.",
  },
  {
    q: "Do you operate throughout Ireland?",
    a: "Yes. O’Neill Construction is a national group and takes on projects in every province. Tell us where your site is and we will confirm how we would resource it.",
  },
  {
    q: "Can we discuss a project at an early planning stage?",
    a: "Please do. Early conversations are often the most valuable: we can advise on buildability, sequencing, programme and budget while there is still room to shape the design.",
  },
  {
    q: "How do we request a project consultation?",
    a: "Use the enquiry form on our Contact page with a short outline of the project, its location and your timeline. A member of the team will come back to you to arrange a conversation.",
  },
];

/* ----------------------------------------------------------------- Insights */

/** SAMPLE ARTICLES — titles only, for layout. Replace with real editorial. */
export const insights: { title: string; category: string; image: ImageKey }[] = [
  { title: "Building for Ireland’s Future", category: "Perspective", image: "blueprintTeam" },
  { title: "The People Behind Every Project", category: "People", image: "rebar" },
  { title: "Quality from Planning to Completion", category: "Delivery", image: "craneTeam" },
];

/* ------------------------------------------------------------------- Values */

export const values = [
  {
    title: "Do what we say",
    text: "Commitments on programme, cost and quality are made carefully and then kept.",
  },
  {
    title: "Safety without shortcuts",
    text: "Everyone on an O’Neill site goes home safe. No deadline changes that.",
  },
  {
    title: "Build it properly",
    text: "We take pride in work that is right first time, including the parts nobody will ever see.",
  },
  {
    title: "Stay for the long term",
    text: "We would rather earn the next project than win an argument on this one.",
  },
];
