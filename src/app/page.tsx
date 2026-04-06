import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: "Engineering systems for scalable structural delivery.",
};

const platformPillars = [
  {
    title: "Platform for Structural Engineering Systems",
    summary:
      "ASE develops reusable engineering systems built to stay relevant across multiple structural contexts.",
  },
  {
    title: "Standardization and Control Layer",
    summary:
      "Defined methodologies and decision frameworks keep structural logic consistent across projects.",
  },
  {
    title: "Independent System Layer",
    summary:
      "ASE supports multiple delivery environments while remaining focused on the engineering system layer.",
  },
  {
    title: "Continuous Learning Infrastructure",
    summary:
      "Real-world application, feedback, and data continuously improve the platform.",
  },
];

const lifecycleSteps = [
  "Systems are designed as reusable frameworks",
  "Applied across real project environments",
  "Evaluated through performance and constraints",
  "Refined through feedback and data",
];

const valuePoints = [
  "Repeatable engineering logic",
  "Standardized methodologies",
  "Greater consistency across applications",
  "Reduced variability over time",
];

const applicationAreas = [
  {
    name: "Large-span structures",
    focus: "Bridge and span conditions where structural efficiency, continuity, and engineering control are critical.",
    image: "/media/Profile%20images/Profile%20images/Omo%20bridge.png",
  },
  {
    name: "Commercial and mixed-use structures",
    focus: "Built environments where shared engineering logic improves coordination across complex structural programs.",
    image: "/media/Profile%20images/Profile%20images/refenti.png",
  },
  {
    name: "Infrastructure under constrained conditions",
    focus: "Structural applications where repeatable systems help teams respond to site conditions, constraints, and performance demands.",
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
            <div className="ase-kicker text-white/80">
              {site.tagline}
            </div>
            <h1 className="ase-hero-title">
              Engineering Systems for Scalable Structural Delivery
            </h1>
            <p className="max-w-2xl text-sm uppercase tracking-[0.3em] text-white/78">
              AfriSpecialized Engineering (ASE)
            </p>
            <p className="ase-body-lg max-w-2xl text-white/84">
              ASE develops the structural engineering systems that enable
              complex projects to be delivered with consistency, efficiency,
              and control. It operates as a platform, defining how engineering
              is structured, applied, and continuously improved across
              projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/platform" className="ase-btn ase-btn-primary">
                Explore the Platform
              </Link>
            </div>
          </div>

          <div className="w-full max-w-xl justify-self-end">
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
                    A structural engineering platform that designs,
                    standardizes, and improves reusable engineering systems.
                  </p>
                </div>
                <div className="ase-hero-copy-card">
                  <span className="ase-hero-copy-label">Operating Role</span>
                  <p className="ase-hero-copy-text">
                    ASE leads the engineering system architecture, while
                    project delivery remains with execution partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="grid gap-10 rounded-[28px] border border-ase-border bg-white px-8 py-10 shadow-[0_24px_48px_-34px_rgba(39,39,41,0.18)] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col gap-4">
              <span className="ase-kicker text-ase-gray">
                What ASE Is
              </span>
              <h2 className="ase-section-title text-ase-black">
                ASE exists as the system layer for structural engineering.
              </h2>
            </div>
            <div className="grid gap-4">
              <p className="ase-body-lg text-ase-muted">
                ASE defines how structural engineering is approached and
                applied through structured methodologies, standardized
                frameworks, and repeatable system logic.
              </p>
              <p className="ase-body-lg text-ase-muted">
                Execution takes place through delivery teams and project
                partners, while ASE maintains the engineering foundation that
                can be applied, tested, and improved over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div className="flex flex-col gap-4">
            <span className="ase-kicker text-ase-gray">
              Platform Overview
            </span>
            <h2 className="ase-section-title text-ase-black">
              A structured engineering platform used across execution environments.
            </h2>
            <p className="ase-body-lg text-ase-muted">
              ASE functions as a structured engineering platform used by
              multiple execution partners. It provides defined systems,
              standardized methodologies, and a mechanism for continuous
              improvement across projects and delivery environments.
            </p>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-ase-border bg-white">
            <Image
              src="/media/structural-connection.svg"
              alt="Abstract structural engineering detail"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="mb-10 max-w-3xl">
            <span className="ase-kicker text-ase-gray">
              Platform Snapshot
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              Four traits define the ASE platform.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {platformPillars.map((item, index) => (
              <article
                key={item.title}
                className={`ase-card ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-semibold text-ase-black">
                  {item.title}
                </h3>
                <p className="text-base leading-7 text-ase-muted">
                  {item.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-dark ase-section-transition text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col gap-4">
            <span className="ase-kicker text-ase-gray">
              How the System Works
            </span>
            <h2 className="ase-section-title">
              Each cycle strengthens the system and expands cumulative capability.
            </h2>
            <p className="ase-body-lg text-ase-gray">
              Engineering within ASE follows a structured lifecycle that builds
              cumulative capability through reuse, application, and feedback.
            </p>
            <Link href="/platform" className="ase-btn ase-btn-primary">
              See the Lifecycle
            </Link>
          </div>
          <div className="grid gap-4">
            {lifecycleSteps.map((step) => (
              <div key={step} className="ase-panel-dark px-6 py-5">
                <p className="ase-body-lg text-white/88">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <span className="ase-kicker text-ase-gray">
              Why It Matters
            </span>
            <h2 className="ase-section-title text-ase-black">
              ASE replaces fragmented engineering with structured capability.
            </h2>
            <p className="ase-body-lg text-ase-muted">
              Traditional engineering is often project-specific, inconsistent,
              and difficult to scale. ASE replaces that with a disciplined
              system of repeatability, standardization, and continuous
              improvement.
            </p>
          </div>
          <div className="grid gap-4">
            {valuePoints.map((item, index) => (
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
                Applications
              </span>
              <h2 className="ase-section-title text-ase-black">
                Structural environments where ASE systems are applied.
              </h2>
            </div>
            <Link
              href="/applications"
              className="text-sm uppercase tracking-[0.28em] text-ase-blue"
            >
              Explore Applications
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {applicationAreas.map((item) => (
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
            Engage
          </span>
          <h2 className="ase-section-title text-ase-black">
            Engineering that evolves through application and learning.
          </h2>
          <p className="ase-body-lg mx-auto max-w-2xl text-ase-muted">
            Engage with the ASE platform to apply structured engineering
            systems within complex structural environments.
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
