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
    name: "Large-Span Structures",
    focus: "Extended spans with reduced material use.",
    image: "/media/project-construction-1.svg",
  },
  {
    name: "Commercial Developments",
    focus: "Flexible structural systems for urban environments.",
    image: "/media/project-construction-2.svg",
  },
  {
    name: "Infrastructure Projects",
    focus: "Solutions for complex logistical conditions.",
    image: "/media/project-construction-3.svg",
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

export default function Home() {
  return (
    <>
      <section className="ase-section-dark relative overflow-hidden text-ase-white">
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
          <div
            className="ase-fade-up grid gap-4"
            style={{ animationDelay: "450ms" }}
          >
            <div className="ase-panel-dark px-6 py-6">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                ASE Positioning
              </span>
              <div className="mt-4 grid gap-3">
                <div className="border-b border-white/10 pb-3 text-base leading-7 text-white/88">
                  Not a contractor
                </div>
                <div className="border-b border-white/10 pb-3 text-base leading-7 text-white/88">
                  Not a generic engineering firm
                </div>
                <div className="text-base leading-7 text-white/88">
                  An engineering system that builds capability over time
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ase-section-light">
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
            {capabilityHighlights.map((item) => (
              <article key={item.title} className="ase-card">
                <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl border border-ase-border">
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

      <section className="ase-section-dark text-ase-white">
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
              className="ase-btn ase-btn-ghost ase-btn-invert"
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
            <Link href="/about" className="ase-btn ase-btn-ghost">
              Learn About ASE
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {valuePoints.map((item) => (
              <div key={item.title} className="ase-card">
                <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl border border-ase-border">
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

      <section className="ase-section-dark text-ase-white">
        <div className="ase-container flex flex-col gap-6 py-20 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
            Engage
          </span>
          <h2 className="text-3xl font-semibold">
            Bring ASE in at feasibility, design, or optimization stage.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-ase-gray">
            ASE supports developers, contractors, and infrastructure
            stakeholders in solving structurally complex challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="ase-btn ase-btn-primary">
              Engage with ASE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
