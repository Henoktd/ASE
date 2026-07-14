import type { SystemIconKey } from "@/components/SystemIcon";

export type BuildingSystem = {
  slug: string;
  name: string;
  icon: SystemIconKey;
  short: string;
  problem: string;
  engineering: string;
  includes: string[];
  outcomes: string[];
};

export const buildingSystems: BuildingSystem[] = [
  {
    slug: "structural-systems",
    name: "Structural Systems",
    icon: "structural",
    short:
      "Floor, hybrid, long span, and roof systems built on prestressed hollow-core technology.",
    problem:
      "Conventional floor construction is slow, heavy, and inconsistent — every slab is a site-built prototype, and spans are limited by what can be poured and propped in place.",
    engineering:
      "ASE engineers the complete structural system: load paths, connections, diaphragm behavior, and erection sequence. Prestressed hollow-core technology moves precision into the factory, and hybrid configurations combine manufactured and in-situ elements where each performs best.",
    includes: [
      "Structural floor systems (prestressed hollow-core technology)",
      "Hybrid structural systems",
      "Long span systems",
      "Roof systems",
    ],
    outcomes: [
      "Faster floor cycles",
      "Consistent factory quality",
      "Longer spans with lower dead load",
      "Less propping, safer sites",
    ],
  },
  {
    slug: "foundation-systems",
    name: "Foundation Systems",
    icon: "foundation",
    short:
      "Foundation optimization, ground improvement, and optimized shallow and deep solutions.",
    problem:
      "Foundations are where projects quietly lose money — conservative designs oversize concrete and steel, while poor ground turns schedules unpredictable.",
    engineering:
      "ASE treats the foundation as an engineered system: ground conditions, structure, and construction method optimized together rather than designed in isolation.",
    includes: [
      "Foundation optimization",
      "Ground improvement",
      "Optimized shallow foundation solutions",
      "Optimized deep foundation solutions",
    ],
    outcomes: [
      "Reduced concrete and steel below ground",
      "Predictable programs on difficult ground",
      "Foundations matched to the structure above",
    ],
  },
  {
    slug: "vertical-systems",
    name: "Vertical Systems",
    icon: "vertical",
    short:
      "Wall, core, column, lift core, and shear wall systems engineered as one vertical structure.",
    problem:
      "Vertical elements set the pace of every floor cycle — and site-formed walls and cores are slow, labor-intensive, and hard to keep straight and consistent.",
    engineering:
      "ASE engineers vertical elements as systems with defined tolerances, connections, and erection sequences, so walls, cores, and columns rise with the same discipline as the floors they carry.",
    includes: [
      "Wall systems",
      "Core systems",
      "Column systems",
      "Lift cores",
      "Shear wall systems",
    ],
    outcomes: [
      "Faster vertical cycles",
      "Dimensional consistency floor after floor",
      "Integrated lateral stability",
    ],
  },
  {
    slug: "infrastructure-systems",
    name: "Infrastructure Systems",
    icon: "infrastructure",
    short:
      "Heavy pavement, bridge, industrial structural, and rail systems for demanding programs.",
    problem:
      "Infrastructure fails differently than buildings — heavier loads, harsher exposure, and remote sites where in-situ methods struggle to hold quality and schedule.",
    engineering:
      "ASE applies the same systems discipline to infrastructure: manufactured components, engineered connections, and erection methods designed for the realities of each site.",
    includes: [
      "Industrial heavy pavement systems",
      "Bridge systems",
      "Industrial structural systems",
      "Rail systems",
    ],
    outcomes: [
      "Durable structures under heavy service",
      "Faster construction in constrained locations",
      "Engineering control far from the factory",
    ],
  },
  {
    slug: "housing-systems",
    name: "Housing Systems",
    icon: "housing",
    short:
      "Affordable, industrial, modular, and rural housing solutions for delivery at scale.",
    problem:
      "Housing demand across Africa outpaces what conventional construction can deliver — unit by unit, site by site, cost creeps up and quality drifts down.",
    engineering:
      "ASE engineers housing as a repeatable system: standardized structures, manufactured components, and delivery methods that hold cost and quality steady from the first unit to the thousandth.",
    includes: [
      "Affordable housing solutions",
      "Industrial housing",
      "Modular housing",
      "Rural housing solutions",
    ],
    outcomes: [
      "Cost held down by repetition, not compromise",
      "Consistent quality at volume",
      "Delivery speed that matches demand",
    ],
  },
  {
    slug: "post-tensioning-systems",
    name: "Post-Tensioning Systems",
    icon: "post-tensioning",
    short:
      "Building, bridge, water-retaining, and industrial post-tensioning solutions.",
    problem:
      "Long spans and heavy loads built conventionally demand deep sections, congested reinforcement, and heavy foundations — weight fighting weight.",
    engineering:
      "ASE engineers post-tensioning as an integrated solution — tendon layouts, anchorage details, stressing sequences, and long-term behavior designed with the structure, not added to it.",
    includes: [
      "Building post-tensioning",
      "Bridge post-tensioning",
      "Water-retaining structures",
      "Industrial post-tensioning solutions",
    ],
    outcomes: [
      "Longer spans from shallower structure",
      "Reduced material and dead load",
      "Crack control for watertight structures",
    ],
  },
  {
    slug: "digital-engineering",
    name: "Digital Engineering",
    icon: "digital",
    short:
      "BIM, digital twins, parametric design, automation, and digital libraries.",
    problem:
      "Construction loses information at every handover — design intent degrades through drawings, requotes, and rework until the built structure no longer matches the model.",
    engineering:
      "ASE keeps every system digital from research to operation: modeled once, checked automatically, manufactured from the model, and handed over as a digital twin.",
    includes: [
      "BIM",
      "Digital twins",
      "Parametric design",
      "Automation",
      "Digital libraries",
    ],
    outcomes: [
      "One source of truth from design to site",
      "Faster, checked, repeatable engineering",
      "Structures that hand over with their data",
    ],
  },
  {
    slug: "engineering-services",
    name: "Engineering Services",
    icon: "services",
    short:
      "Structural and value engineering, constructability review, optimization, and independent review.",
    problem:
      "Most projects are committed — structurally and commercially — before anyone asks whether the design could be fundamentally better to build.",
    engineering:
      "ASE engineering services bring systems thinking to any project, whichever way it is built: interrogating the design for value, buildability, and performance before the cost is locked in.",
    includes: [
      "Structural engineering",
      "Value engineering",
      "Constructability review",
      "Optimization",
      "Peer review",
      "Independent design review",
    ],
    outcomes: [
      "Better structures for the same budget",
      "Designs that build the way they were drawn",
      "Independent assurance on critical decisions",
    ],
  },
];

export function getSystem(slug: string): BuildingSystem | undefined {
  return buildingSystems.find((system) => system.slug === slug);
}
