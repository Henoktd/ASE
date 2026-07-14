export const site = {
  name: "ASE",
  fullName: "ASE International",
  tagline: "Engineering Better Ways to Build",
  url: "https://ase-int.com",
  ogImage: "/Brand/01%20Logo/Full%20Color/fullcolor-HORIZONTAL.png",
  description:
    "ASE is an engineering group that develops, manufactures, and delivers engineered construction systems. ASE Building Systems is the platform through which engineering, digital technology, industrial manufacturing, and project delivery come together.",
};

export const contactEmail = "info@ase-int.com";
export const contactPhone = "Phone to be confirmed";
export const locationLabel = "Addis Ababa, Ethiopia";

export const linkedInUrl = "https://www.linkedin.com/company/ase";

export const partnerLinks = [
  {
    name: "EASE",
    url: "https://www.ease-int.com",
    role: "Implementation Partner — Ethiopia",
  },
  {
    name: "SVH",
    url: "https://www.sol-ventures.com",
    role: "Strategic Platform Developer",
  },
];

export const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/engineering", label: "Engineering" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/project-delivery", label: "Delivery" },
  { href: "/projects", label: "Projects" },
  { href: "/knowledge", label: "Knowledge" },
  { href: "/about", label: "About" },
  { href: "/engage", label: "Engage" },
];

export type NavGroup = {
  label: string;
  href?: string;
  items?: { href: string; label: string }[];
};

export const navGroups: NavGroup[] = [
  { label: "Systems", href: "/solutions" },
  { label: "Sectors", href: "/industries" },
  {
    label: "How We Work",
    items: [
      { href: "/engineering", label: "Engineering" },
      { href: "/manufacturing", label: "Manufacturing" },
      { href: "/project-delivery", label: "Project Delivery" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Knowledge", href: "/knowledge" },
  {
    label: "Company",
    items: [
      { href: "/about", label: "About ASE" },
      { href: "/engage", label: "Engage" },
    ],
  },
];
