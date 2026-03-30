import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: "Engineering systems for Africa's most demanding structures.",
};

const capabilityHighlights = [
  {
    title: "Structural Systems That Perform Under Load",
    summary:
      "Optimized structural systems designed for performance and constructability.",
    icon: "load",
  },
  {
    title: "Engineering Longer Spans with Less Material",
    summary:
      "Systems enabling longer spans and reduced structural mass.",
    icon: "span",
  },
  {
    title: "Repeatable Engineering Systems",
    summary: "Reusable methodologies and design frameworks.",
    icon: "systems",
  },
  {
    title: "Engineering Input That Reduces Risk Early",
    summary: "Technical input to shape feasibility and reduce risk.",
    icon: "advisory",
  },
];

function CapabilityIcon({ type }: { type: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-12 w-12 text-ase-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "load" ? (
        <>
          <path d="M12 18h40" />
          <path d="M16 32h32" />
          <path d="M20 46h24" />
          <path d="M14 18v28" />
          <path d="M50 18v28" />
        </>
      ) : null}
      {type === "span" ? (
        <>
          <path d="M10 42h44" />
          <path d="M16 42c5-13 11-20 16-20s11 7 16 20" />
          <path d="M20 18v8" />
          <path d="M44 18v8" />
        </>
      ) : null}
      {type === "systems" ? (
        <>
          <rect x="10" y="14" width="16" height="16" rx="2" />
          <rect x="38" y="14" width="16" height="16" rx="2" />
          <rect x="24" y="36" width="16" height="16" rx="2" />
          <path d="M26 22h12" />
          <path d="M32 30v6" />
        </>
      ) : null}
      {type === "advisory" ? (
        <>
          <path d="M32 10l18 10v20L32 50 14 40V20z" />
          <path d="M32 10v20" />
          <path d="M50 20 32 30 14 20" />
        </>
      ) : null}
      {type === "efficiency" ? (
        <>
          <circle cx="32" cy="32" r="16" />
          <path d="M32 18v14l10 6" />
          <path d="M14 18l6 6" />
        </>
      ) : null}
      {type === "delivery" ? (
        <>
          <path d="M10 40h36" />
          <path d="M40 24h10l8 8v8H40z" />
          <circle cx="22" cy="46" r="5" />
          <circle cx="46" cy="46" r="5" />
        </>
      ) : null}
      {type === "alignment" ? (
        <>
          <path d="M14 22h18l10 10" />
          <path d="M50 22H32l-10 10" />
          <path d="M14 42h18l10-10" />
          <path d="M50 42H32l-10-10" />
          <circle cx="32" cy="32" r="5" />
        </>
      ) : null}
      {type === "capability" ? (
        <>
          <path d="M14 48V18" />
          <path d="M14 48h34" />
          <path d="M22 40l8-10 8 5 10-14" />
          <path d="M40 18h10v10" />
        </>
      ) : null}
    </svg>
  );
}

const platformStages = [
  {
    title: "Systems are designed",
    description: "Structural solutions are defined with system-level logic.",
  },
  {
    title: "Applied in live projects",
    description: "Engineering is taken into active execution environments.",
  },
  {
    title: "Tested under real conditions",
    description: "Performance is observed against practical constraints.",
  },
  {
    title: "Refined through feedback",
    description: "Project learning compounds into stronger future systems.",
  },
];

const applications = [
  {
    name: "Golden Star",
    focus: "Structural delivery shaped around real construction sequencing.",
    image:
      "/media/Profile%20images/Profile%20images/Golden%20Star.png",
  },
  {
    name: "SEMU Residence",
    focus: "Concrete-intensive project conditions supported by buildable engineering.",
    image: "/media/Profile%20images/Profile%20images/SEMU%20residence.png",
  },
  {
    name: "Refenti",
    focus: "Urban structural application coordinated through practical execution logic.",
    image:
      "/media/Profile%20images/Profile%20images/refenti.png",
  },
];

const valuePoints = [
  {
    title: "Material Efficiency",
    description: "Less material, same performance",
    icon: "efficiency",
  },
  {
    title: "Faster Delivery",
    description: "Aligned with construction timelines",
    icon: "delivery",
  },
  {
    title: "Execution Alignment",
    description: "Built for real conditions",
    icon: "alignment",
  },
  {
    title: "Cumulative Capability",
    description: "Improves with every project",
    icon: "capability",
  },
];

const companyOverview = [
  "Afrispecialized Engineering (ASE) is an engineering and infrastructure solutions provider delivering structural systems, heavy civil works, and concrete-intensive construction across complex projects.",
  "The company combines technical expertise, project execution capability, and integrated engineering services to deliver reliable, buildable outcomes at scale across the full project lifecycle.",
];

export default function Home() {
  return (
    <>
      <section className="ase-section-dark ase-section-transition relative overflow-hidden text-ase-white">
        <div className="pointer-events-none absolute inset-0 ase-hero-media">
          <video
            className="ase-hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          >
            <source src="/media/ase-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="pointer-events-none absolute inset-0 ase-hero-overlay" />
        <div className="ase-container relative z-10 grid gap-12 py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-8">
            <div
              className="ase-fade-up text-xs uppercase tracking-[0.4em] text-ase-gray"
              style={{ animationDelay: "100ms" }}
            >
              {site.tagline}
            </div>
            <h1
              className="ase-fade-up font-display text-4xl sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "200ms" }}
            >
              Engineering Systems That Make Complex Structures Possible
            </h1>
            <p
              className="ase-fade-up max-w-2xl text-sm uppercase tracking-[0.3em] text-white/78"
              style={{ animationDelay: "250ms" }}
            >
              ASE - Afrispecialized Engineering
            </p>
            <p
              className="ase-fade-up max-w-2xl text-lg text-ase-gray"
              style={{ animationDelay: "300ms" }}
            >
              Designed for real-world constraints. Built to perform at scale.
            </p>
            <div
              className="ase-fade-up flex flex-wrap gap-4"
              style={{ animationDelay: "400ms" }}
            >
              <Link href="/capabilities" className="ase-btn ase-btn-primary">
                Explore Capabilities
              </Link>
            </div>
          </div>
          <div className="ase-fade-up flex items-start pt-2 lg:pt-0" style={{ animationDelay: "450ms" }}>
            <div className="w-full max-w-xl">
              <div className="ase-hero-construct">
                <div className="ase-hero-orb" />
                <div className="flex justify-end pr-2 pt-2">
                  <Image
                    src="/Brand/01%20Logo/SVG/White/white-HORIZONTAL.svg"
                    alt="ASE"
                    width={700}
                    height={164}
                    className="ase-logo-drift relative z-10 h-24 w-auto sm:h-28 lg:h-32"
                    priority
                  />
                </div>
                <div className="ase-hero-gridline" />
                <div className="ase-hero-copy">
                  <div className="ase-hero-copy-card">
                    <span className="ase-hero-copy-label">What ASE Is</span>
                    <p className="ase-hero-copy-text">
                      An engineering and infrastructure solutions provider for
                      structurally demanding projects.
                    </p>
                  </div>
                  <div className="ase-hero-copy-card">
                    <span className="ase-hero-copy-label">Why It Matters</span>
                    <p className="ase-hero-copy-text">
                      Engineering knowledge is applied, tested, and improved
                      instead of being reset on every project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container pt-16">
          <div className="grid gap-6 rounded-[28px] border border-ase-border bg-white px-8 py-10 shadow-[0_24px_48px_-34px_rgba(39,39,41,0.18)] lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                About ASE
              </span>
              <h2 className="text-3xl font-semibold text-ase-black">
                Afrispecialized Engineering delivers engineering and infrastructure solutions at execution scale.
              </h2>
            </div>
            <div className="grid gap-4">
              {companyOverview.map((paragraph) => (
                <p key={paragraph} className="text-base leading-7 text-ase-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="ase-container grid gap-8 py-16 lg:grid-cols-[0.4fr_0.6fr] lg:items-center">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Positioning
            </span>
            <h2 className="text-3xl font-semibold text-ase-black">
              ASE defines how structural challenges are solved.
            </h2>
            <p className="text-base leading-7 text-ase-muted">
              ASE defines how structural challenges are solved, developing
              systems that are applied, tested, and refined through real-world
              execution.
            </p>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-ase-border bg-white">
            <Image
              src="/media/structural-connection.svg"
              alt="Illustration of a welded structural steel connection"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container py-20">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Capabilities Snapshot
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {capabilityHighlights.map((item, index) => (
              <article
                key={item.title}
                className={`ase-card ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
              >
                <div
                  className={`ase-icon-chip ${index % 2 === 0 ? "ase-icon-chip-blue" : "ase-icon-chip-red"}`}
                >
                  <CapabilityIcon type={item.icon} />
                </div>
                <h2 className="text-lg font-semibold text-ase-black">
                  {item.title}
                </h2>
                <p className="text-base leading-7 text-ase-muted">
                  {item.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-dark ase-section-transition text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Platform Model
            </span>
            <h2 className="text-3xl font-semibold">
              Engineering is developed and validated through a closed loop.
            </h2>
            <p className="text-base leading-7 text-ase-gray">
              This creates cumulative engineering capability, not isolated
              outputs.
            </p>
            <Link
              href="/platform"
              className="ase-btn ase-btn-primary"
            >
              Explore Platform
            </Link>
          </div>
          <div className="grid gap-4">
            {platformStages.map((stage) => (
              <div key={stage.title} className="ase-panel-dark px-6 py-5">
                <h3 className="text-lg font-semibold">{stage.title}</h3>
                <p className="text-base leading-7 text-ase-gray">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              What Sets ASE Apart
            </span>
            <h2 className="text-3xl font-semibold text-ase-black">
              Structural engineering that compounds in value over time.
            </h2>
            <p className="text-base leading-7 text-ase-muted">
              Material efficiency, faster delivery, execution alignment, and
              cumulative capability define the ASE model.
            </p>
            <Link href="/about" className="ase-btn ase-btn-primary">
              Learn About ASE
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {valuePoints.map((item, index) => (
              <div
                key={item.title}
                className={`ase-card ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
              >
                <div
                  className={`ase-icon-chip ${index % 2 === 0 ? "ase-icon-chip-blue" : "ase-icon-chip-red"}`}
                >
                  <CapabilityIcon type={item.icon} />
                </div>
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
        <div className="ase-container py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                Projects
              </span>
              <h2 className="text-3xl font-semibold text-ase-black">
                Engineering in application.
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm uppercase tracking-[0.28em] text-ase-blue"
            >
              View All Projects
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {applications.map((project) => (
              <article key={project.name} className="ase-card overflow-hidden p-0">
                <div className="aspect-[4/3] overflow-hidden border-b border-ase-border-soft bg-white">
                  <Image
                    src={project.image}
                    alt={`${project.name} construction phase visual`}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <h3 className="text-lg font-semibold text-ase-black">
                    {project.name}
                  </h3>
                  <p className="text-base leading-7 text-ase-muted">
                    {project.focus}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
