import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CycleDiagram from "@/components/CycleDiagram";
import SystemIcon from "@/components/SystemIcon";
import { createMetadata } from "@/lib/seo";
import { buildingSystems } from "@/lib/systems";

export const metadata: Metadata = createMetadata({
  title: "Engineering Better Ways to Build",
  description:
    "ASE develops, manufactures, and delivers engineered construction systems — combining engineering, digital technology, industrial manufacturing, and project delivery in one integrated group.",
  path: "/",
});

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
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <video
            className="ase-hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/media/ase-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="pointer-events-none absolute inset-0 ase-hero-media" />
        <div className="pointer-events-none absolute inset-0 ase-hero-overlay" />
        <div className="ase-container relative z-10 grid gap-12 py-24 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="flex flex-col gap-8">
            <h1 className="ase-hero-title">
              Engineering Better Ways to Build
            </h1>
            <p className="ase-body-lg max-w-xl text-white/82">
              ASE develops, manufactures, and delivers engineered construction
              systems — so buildings go up faster, safer, and with quality that
              is engineered in.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/solutions" className="ase-btn ase-btn-primary">
                Explore the Systems
              </Link>
              <Link href="/engage" className="ase-btn ase-btn-ghost ase-btn-invert">
                Engage
              </Link>
            </div>
          </div>

          <div className="flex w-full justify-center lg:justify-end">
            <div className="ase-hero-logo-stage">
              <div className="ase-hero-orb" />
              <Image
                src="/Brand/01%20Logo/SVG/White/white-VERTICAL.svg"
                alt="ASE"
                width={354}
                height={335}
                className="ase-logo-drift relative z-10 h-40 w-auto sm:h-48 lg:h-[19rem]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container grid gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
          <div className="flex flex-col gap-5">
            <span className="ase-kicker text-ase-red">The Challenge</span>
            <h2 className="ase-section-title text-ase-black">
              Construction is being asked to deliver more than conventional
              methods can give.
            </h2>
            <p className="ase-body-lg text-ase-muted">
              ASE answers these challenges with engineered systems — developed,
              manufactured, and delivered by one integrated engineering group,
              with every completed building feeding knowledge back into the
              next.
            </p>
            <Link href="/engineering" className="ase-btn ase-btn-ghost w-fit">
              Inside the Engineering
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
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

      <section className="ase-section-paper">
        <div className="ase-container py-16 lg:py-24">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="ase-kicker text-ase-blue">The System</span>
              <h2 className="ase-section-title mt-4 text-ase-black">
                ASE Building Systems — one platform, a growing catalogue.
              </h2>
            </div>
            <Link
              href="/solutions"
              className="text-sm uppercase tracking-[0.28em] text-ase-blue"
            >
              Full Catalogue
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {buildingSystems.map((system) => (
              <Link
                key={system.slug}
                href={`/solutions/${system.slug}`}
                className="ase-card-quiet ase-card-link"
              >
                <span className="ase-system-icon">
                  <SystemIcon type={system.icon} />
                </span>
                <p className="text-base font-semibold leading-7 text-ase-black">
                  {system.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container grid gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <span className="ase-kicker text-ase-blue">
              How the Group Works
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              One engineering cycle. Clear roles.
            </h2>
            <div className="mt-10 grid gap-4">
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
          <CycleDiagram />
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container py-16 lg:py-24">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4">
              <span className="ase-kicker text-ase-blue">The Evidence</span>
              <h2 className="ase-section-title text-ase-black">
                Environments where ASE systems are applied.
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm uppercase tracking-[0.28em] text-ase-blue"
            >
              Explore Projects
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {evidenceProjects.map((item) => (
              <article key={item.name} className="ase-card-quiet overflow-hidden p-0">
                <div className="aspect-[4/3] overflow-hidden border-b border-ase-border-soft bg-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={1200}
                    height={900}
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
          <div className="mt-16 flex flex-col items-center gap-5 text-center">
            <h2 className="ase-section-title text-ase-black">
              Tell us what your project needs to achieve.
            </h2>
            <p className="ase-body-lg max-w-2xl text-ase-muted">
              ASE engineers the system that delivers it — and stands behind it
              from research to the operational building.
            </p>
            <Link href="/engage" className="ase-btn ase-btn-primary">
              Engage with ASE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
