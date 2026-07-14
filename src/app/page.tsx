import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

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
      "Site-built structures vary with every crew, season, and pour — quality is hoped for, not engineered.",
  },
  {
    title: "Cost certainty",
    description:
      "Fragmented delivery chains turn design intent into overruns, rework, and disputes.",
  },
  {
    title: "Safety",
    description:
      "The more work happens at height and in-situ, the more people are exposed to risk.",
  },
];

const ecosystemCycle = [
  "Research",
  "Engineering",
  "System Development",
  "Digital Engineering",
  "Manufacturing",
  "Project Delivery",
  "Operational Building",
  "Knowledge Feedback",
  "Continuous Improvement",
];

const systemsPreview = [
  "Structural Systems",
  "Foundation Systems",
  "Vertical Systems",
  "Infrastructure Systems",
  "Housing Systems",
  "Post-Tensioning Systems",
  "Digital Engineering",
  "Engineering Services",
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

const outcomes = [
  "Construction speed",
  "Quality consistency",
  "Span capability",
  "Site safety",
  "Lower dead load",
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
              is engineered in, not inspected in.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/solutions" className="ase-btn ase-btn-primary">
                Explore the Systems
              </Link>
              <Link href="/engage" className="ase-btn ase-btn-primary">
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
        <div className="ase-container py-20">
          <div className="mb-10 max-w-3xl">
            <span className="ase-kicker text-ase-gray">
              The Challenge
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              Construction is being asked to deliver more than conventional
              methods can give.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {challenges.map((item, index) => (
              <article
                key={item.title}
                className={`ase-card ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
              >
                <h3 className="text-xl font-semibold text-ase-black">
                  {item.title}
                </h3>
                <p className="text-base leading-7 text-ase-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div className="flex flex-col gap-4">
            <span className="ase-kicker text-ase-gray">
              The Engineering
            </span>
            <h2 className="ase-section-title text-ase-black">
              ASE is an engineering company that develops systems.
            </h2>
            <p className="ase-body-lg text-ase-muted">
              ASE answers construction challenges with engineered systems —
              developed, manufactured, and delivered as an integrated
              engineering group, with every completed building feeding
              knowledge back into the next.
            </p>
            <Link href="/engineering" className="ase-btn ase-btn-primary w-fit">
              Inside the Engineering
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {ecosystemCycle.map((step, index) => (
              <div
                key={step}
                className={`ase-card ase-flow-card text-center ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
              >
                <p className="text-sm font-semibold leading-6 text-ase-black">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="ase-kicker text-ase-gray">
                The System
              </span>
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
            {systemsPreview.map((system, index) => (
              <div
                key={system}
                className={`ase-card ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
              >
                <p className="text-base font-semibold leading-7 text-ase-black">
                  {system}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-dark ase-section-transition text-ase-white">
        <div className="ase-container py-20">
          <div className="mb-10 max-w-3xl">
            <span className="ase-kicker text-ase-gray">
              One Group, Clear Roles
            </span>
            <h2 className="ase-section-title">
              ASE engineers. Technowall manufactures. EASE delivers.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {operatingModel.map((entity) => (
              <div key={entity.name} className="ase-panel-dark px-6 py-6">
                <p className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                  {entity.role}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-ase-white">
                  {entity.name}
                </h3>
                <p className="mt-3 text-base leading-7 text-white/82">
                  {entity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <span className="ase-kicker text-ase-gray">
              The Outcome
            </span>
            <h2 className="ase-section-title text-ase-black">
              Value that is engineered before the first component is cast.
            </h2>
            <p className="ase-body-lg text-ase-muted">
              ASE systems are developed to create measurable value in delivery
              — speed, consistency, capability, and safety, project after
              project.
            </p>
          </div>
          <div className="grid gap-4">
            {outcomes.map((item, index) => (
              <div
                key={item}
                className={`ase-card ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
              >
                <p className="text-base leading-7 text-ase-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4">
              <span className="ase-kicker text-ase-gray">
                The Evidence
              </span>
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
              <article key={item.name} className="ase-card overflow-hidden p-0">
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
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container flex flex-col gap-6 py-20 text-center">
          <span className="ase-kicker text-ase-gray">
            Start the Conversation
          </span>
          <h2 className="ase-section-title text-ase-black">
            Tell us what your project needs to achieve.
          </h2>
          <p className="ase-body-lg mx-auto max-w-2xl text-ase-muted">
            ASE engineers the system that delivers it — and stands behind it
            from research to the operational building.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/engage" className="ase-btn ase-btn-primary">
              Engage with ASE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
