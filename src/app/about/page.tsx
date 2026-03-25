import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ASE",
  description:
    "Learn how ASE defines structural solutions within an integrated engineering-delivery platform.",
};

const positioning = [
  {
    title: "Who We Are",
    description:
      "ASE is responsible for defining how structural problems are solved within an integrated engineering-delivery platform.",
  },
  {
    title: "What ASE Does",
    description:
      "ASE develops engineering systems, methodologies, and technical standards that are applied and refined through execution.",
  },
  {
    title: "Strategic Role",
    description:
      "ASE builds long-term capability through engineering systems, technical knowledge, and methodological consistency.",
  },
];

const outputs = [
  {
    title: "Structural systems",
    description:
      "Structural systems designed to solve recurring challenges with greater clarity and repeatability.",
  },
  {
    title: "Design logic",
    description:
      "Clear technical logic for choosing the most effective structural solution for a challenge.",
  },
  {
    title: "Technical frameworks",
    description:
      "Standardized approaches and frameworks that make engineering knowledge reusable rather than project-bound.",
  },
];

const hierarchy = [
  {
    title: "ASE",
    description: "Defines and develops engineering systems.",
  },
  {
    title: "EASE",
    description: "Applies and delivers these systems in projects.",
  },
  {
    title: "Feedback Loop",
    description: "Design, application, feedback, and refinement work as one cycle.",
  },
];

const rationale = [
  "Traditional engineering is project-based and non-repeatable.",
  "Traditional engineering often loses knowledge between projects.",
  "The ASE model is system-based and repeatable.",
  "The ASE model is designed for knowledge compounding over time.",
];

export default function AboutPage() {
  return (
    <>
      <section className="ase-section-dark text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              About ASE
            </span>
            <h1 className="text-4xl font-semibold">
              Defining how structural problems are solved.
            </h1>
            <p className="text-base leading-7 text-ase-gray">
              ASE defines structural solutions, develops engineering systems,
              and retains technical knowledge inside an integrated
              engineering-delivery platform.
            </p>
            <Link href="/platform" className="ase-btn ase-btn-ghost ase-btn-invert">
              See the Platform Model
            </Link>
          </div>
          <div className="ase-grid h-64 rounded-3xl border border-white/10" />
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container grid gap-8 py-20 md:grid-cols-3">
          {positioning.map((item) => (
            <article key={item.title} className="ase-card">
              <h2 className="text-lg font-semibold text-ase-black">{item.title}</h2>
              <p className="text-base leading-7 text-ase-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container grid gap-8 pb-20 md:grid-cols-3">
          {outputs.map((item) => (
            <article key={item.title} className="ase-card">
              <h2 className="text-lg font-semibold text-ase-black">{item.title}</h2>
              <p className="text-base leading-7 text-ase-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ase-section-graphite text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              How the Platform Works
            </span>
            <h2 className="text-3xl font-semibold">
              ASE and EASE operate as one system with distinct roles.
            </h2>
            <p className="text-base leading-7 text-ase-gray">
              ASE defines and develops engineering systems. EASE applies and
              delivers those systems in projects, creating a continuous loop of
              design, application, feedback, and refinement.
            </p>
          </div>
          <div className="grid gap-4">
            {hierarchy.map((item) => (
              <div key={item.title} className="border border-white/15 px-6 py-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-base leading-7 text-ase-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-dark text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Why This Model Exists
            </span>
            <h2 className="text-3xl font-semibold">
              From project-based engineering to system-based capability.
            </h2>
            <p className="text-base leading-7 text-ase-gray">
              Traditional engineering loses knowledge between projects. The ASE
              model is designed to make engineering repeatable so knowledge can
              compound over time.
            </p>
            <Link
              href="/capabilities"
              className="ase-btn ase-btn-ghost ase-btn-invert"
            >
              Explore Capabilities
            </Link>
          </div>
          <div className="grid gap-4">
            {rationale.map((item) => (
              <div key={item} className="border border-white/15 px-6 py-5">
                <p className="text-base leading-7 text-ase-gray">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
