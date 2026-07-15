import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CycleDiagram from "@/components/CycleDiagram";
import SystemIcon from "@/components/SystemIcon";
import HeroScene from "@/components/fx/HeroScene";
import SplitTitle from "@/components/fx/SplitTitle";
import { createMetadata } from "@/lib/seo";
import { buildingSystems } from "@/lib/systems";

export const metadata: Metadata = createMetadata({
  title: "Engineering Better Ways to Build",
  description:
    "ASE develops, manufactures, and delivers engineered construction systems — combining engineering, digital technology, industrial manufacturing, and project delivery in one integrated group.",
  path: "/",
});

const stats = [
  { value: 8, label: "Engineered building systems" },
  { value: 9, label: "Stages in the engineering cycle" },
  { value: 4, label: "Sectors served" },
  { value: 3, label: "Assurance platforms behind every system" },
];

const challenges = [
  {
    title: "Speed",
    description:
      "Demand for buildings and infrastructure is growing faster than conventional construction can deliver.",
  },
  {
    title: "Quality",
    description:
      "Site-built structures vary with every crew, season, and pour.",
  },
  {
    title: "Cost certainty",
    description:
      "Fragmented delivery chains turn design intent into overruns and rework.",
  },
  {
    title: "Safety",
    description:
      "The more work happens at height and in-situ, the more people are exposed to risk.",
  },
];

const operatingModel = [
  {
    name: "ASE",
    role: "Engineers the systems",
    description:
      "Develops engineering systems and standards, and owns the associated intellectual property.",
  },
  {
    name: "Technowall Manufacturing PLC",
    role: "Manufactures the components",
    description:
      "Produces ASE-engineered components in accordance with ASE standards and specifications.",
  },
  {
    name: "EASE Engineering",
    role: "Delivers in Ethiopia",
    description:
      "Delivers projects in Ethiopia using ASE systems; other markets are served through strategic implementation partners.",
  },
];

const evidenceProjects = [
  {
    name: "Long-span bridge crossings",
    focus:
      "Structural continuity and engineering control under demanding span conditions.",
    image: "/media/Profile%20images/Profile%20images/Omo%20bridge.png",
  },
  {
    name: "Commercial and mixed-use structures",
    focus:
      "Repeatable floor systems aligning complex structural programs and teams.",
    image: "/media/Profile%20images/Profile%20images/refenti.png",
  },
  {
    name: "Infrastructure under constrained conditions",
    focus:
      "Engineered systems responding to site constraints and performance demands.",
    image: "/media/Profile%20images/Profile%20images/Wabi%20shebelle%20bridge.png",
  },
];

export default function Home() {
  return (
    <>
      <section className="ase-section-dark ase-section-transition relative overflow-hidden text-ase-white">
        <div className="pointer-events-none absolute inset-0 md:hidden">
          <Image
            src="/media/ase-hero-poster.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
            priority
          />
        </div>
        <HeroScene />
        <div className="pointer-events-none absolute inset-0 ase-hero-overlay" />
        <div className="ase-container relative z-10 flex min-h-[88vh] flex-col justify-center gap-10 py-28">
          <div className="max-w-5xl">
            <p className="ase-kicker text-white/70" data-anim>
              ASE — Africa&apos;s engineered construction group
            </p>
            <SplitTitle
              as="h1"
              className="ase-hero-xl mt-6 text-ase-white"
              delay={0.15}
            >
              Engineering Better Ways to Build
            </SplitTitle>
            <p
              className="ase-body-lg mt-8 max-w-xl text-white/82"
              data-anim
              data-delay="0.5"
            >
              ASE develops, manufactures, and delivers engineered construction
              systems — so buildings go up faster, safer, and with quality that
              is engineered in.
            </p>
          </div>
          <div className="flex flex-wrap gap-4" data-anim data-delay="0.65">
            <Link href="/solutions" className="ase-btn ase-btn-primary">
              Explore the Systems
            </Link>
            <Link href="/engage" className="ase-btn ase-btn-ghost ase-btn-invert">
              Engage
            </Link>
          </div>
          <div className="mt-6 flex items-center gap-5" data-anim data-delay="0.8">
            <span className="ase-scroll-cue" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">
              Scroll
            </span>
          </div>
        </div>
      </section>

      <section className="ase-section-light border-b border-ase-border-soft">
        <div className="ase-container grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20" data-anim-group>
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-3">
              <p className="ase-stat-value text-ase-blue">
                <span data-counter={stat.value}>0</span>
              </p>
              <p className="text-sm leading-6 text-ase-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container grid gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
          <div className="flex flex-col gap-5">
            <span className="ase-kicker text-ase-red" data-anim>
              The Challenge
            </span>
            <SplitTitle className="ase-section-title text-ase-black">
              Construction is being asked to deliver more than conventional
              methods can give.
            </SplitTitle>
            <p className="ase-body-lg text-ase-muted" data-anim>
              ASE answers these challenges with engineered systems — developed,
              manufactured, and delivered by one integrated engineering group,
              with every completed building feeding knowledge back into the
              next.
            </p>
            <div data-anim>
              <Link href="/engineering" className="ase-btn ase-btn-ghost w-fit">
                Inside the Engineering
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2" data-anim-group>
            {challenges.map((item) => (
              <div key={item.title} className="ase-card-quiet">
                <h3 className="text-lg font-semibold text-ase-black">
                  {item.title}
                </h3>
                <p className="text-base leading-7 text-ase-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-paper" data-hscroll>
        <div className="flex min-h-screen flex-col justify-center py-16">
          <div className="ase-container mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="ase-kicker text-ase-blue" data-anim>
                The System
              </span>
              <SplitTitle className="ase-section-title mt-4 text-ase-black">
                ASE Building Systems — one platform, a growing catalogue.
              </SplitTitle>
            </div>
            <Link
              href="/solutions"
              className="text-sm uppercase tracking-[0.28em] text-ase-blue"
              data-anim
            >
              Full Catalogue
            </Link>
          </div>
          <div className="ase-hscroll pl-[max(24px,calc((100vw-1200px)/2))]">
            <div className="ase-hscroll-track pr-10" data-hscroll-track>
              {buildingSystems.map((system, index) => (
                <Link
                  key={system.slug}
                  href={`/solutions/${system.slug}`}
                  className="ase-card-quiet ase-card-link ase-hscroll-card"
                >
                  <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                    {String(index + 1).padStart(2, "0")} / 08
                  </span>
                  <span className="ase-system-icon">
                    <SystemIcon type={system.icon} />
                  </span>
                  <h3 className="text-xl font-semibold text-ase-black">
                    {system.name}
                  </h3>
                  <p className="text-base leading-7 text-ase-muted">
                    {system.short}
                  </p>
                  <span className="mt-auto pt-2 text-xs font-semibold uppercase tracking-[0.24em] text-ase-blue">
                    View System →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container grid gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <span className="ase-kicker text-ase-blue" data-anim>
              How the Group Works
            </span>
            <SplitTitle className="ase-section-title mt-4 text-ase-black">
              One engineering cycle. Clear roles.
            </SplitTitle>
            <div className="mt-10 grid gap-4" data-anim-group>
              {operatingModel.map((entity) => (
                <div key={entity.name} className="ase-card-quiet">
                  <p className="text-xs uppercase tracking-[0.3em] text-ase-blue">
                    {entity.role}
                  </p>
                  <h3 className="text-lg font-semibold text-ase-black">
                    {entity.name}
                  </h3>
                  <p className="text-base leading-7 text-ase-muted">
                    {entity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div data-anim>
            <CycleDiagram />
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container py-16 lg:py-24">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4">
              <span className="ase-kicker text-ase-blue" data-anim>
                The Evidence
              </span>
              <SplitTitle className="ase-section-title text-ase-black">
                Environments where ASE systems are applied.
              </SplitTitle>
            </div>
            <Link
              href="/projects"
              className="text-sm uppercase tracking-[0.28em] text-ase-blue"
              data-anim
            >
              Explore Projects
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3" data-anim-group>
            {evidenceProjects.map((item) => (
              <article key={item.name} className="ase-card-quiet overflow-hidden p-0">
                <div className="aspect-[4/3] overflow-hidden border-b border-ase-border-soft bg-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={1200}
                    height={900}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <h3 className="text-lg font-semibold text-ase-black">
                    {item.name}
                  </h3>
                  <p className="text-base leading-7 text-ase-muted">
                    {item.focus}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-20 flex flex-col items-center gap-6 text-center">
            <SplitTitle className="ase-section-title max-w-3xl text-ase-black">
              Tell us what your project needs to achieve.
            </SplitTitle>
            <p className="ase-body-lg max-w-2xl text-ase-muted" data-anim>
              ASE engineers the system that delivers it — and stands behind it
              from research to the operational building.
            </p>
            <div data-anim>
              <Link href="/engage" className="ase-btn ase-btn-primary">
                Engage with ASE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
