import type { Metadata } from "next";

function EvolutionIcon({ type }: { type: "application" | "feedback" | "performance" }) {
  const common = "h-5 w-5";

  if (type === "application") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 9h8M8 13h6" />
      </svg>
    );
  }

  if (type === "feedback") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
        <path d="M7 8H4V5" />
        <path d="M4 8a8 8 0 0 1 13.66-4.66" />
        <path d="M17 16h3v3" />
        <path d="M20 16a8 8 0 0 1-13.66 4.66" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
      <path d="M5 19V9" />
      <path d="M10 19V5" />
      <path d="M15 19v-7" />
      <path d="M20 19V11" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Reusable structural engineering systems developed and managed by ASE.",
};

const systems = [
  {
    title: "Structural Systems",
    description:
      "Frameworks defining load distribution, stability, and constructability across varying structural conditions.",
  },
  {
    title: "Post-Tensioning Systems",
    description:
      "Standardized approaches enabling longer spans, reduced material usage, and improved structural efficiency.",
  },
  {
    title: "Optimization Systems",
    description:
      "Methodologies designed to balance performance, cost, and constructability within defined parameters.",
  },
];

const attributes = [
  "Repeatable across projects",
  "Adaptable to different conditions",
  "Scalable across regions and teams",
];

const evolution = [
  { label: "Application in real-world environments", icon: "application" as const },
  { label: "Feedback from execution", icon: "feedback" as const },
  { label: "Measured performance outcomes", icon: "performance" as const },
];

export default function SystemsPage() {
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
        <div className="ase-container relative z-10 py-24 lg:py-28">
          <div className="max-w-4xl">
            <span className="ase-kicker text-ase-gray">
              Systems
            </span>
            <h1 className="ase-page-title mt-5 text-ase-white">
              The product of ASE is engineering systems.
            </h1>
            <p className="ase-body-lg mt-5 max-w-3xl text-white/82">
              Each system is a structured framework that includes design logic,
              structural principles, performance parameters, and application
              guidelines that can be applied consistently across contexts.
            </p>
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container py-20">
          <div className="max-w-3xl">
            <span className="ase-kicker text-ase-gray">
              Engineering Systems
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              Structured systems replace one-off design logic.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {systems.map((system, index) => (
              <article
                key={system.title}
                className={`ase-card ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                  System {index + 1}
                </span>
                <h3 className="text-2xl font-semibold text-ase-black">
                  {system.title}
                </h3>
                <p className="text-base leading-7 text-ase-muted">
                  {system.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <span className="ase-kicker text-ase-gray">
              Standardization
            </span>
            <h2 className="ase-section-title text-ase-black">
              Systems are designed to remain repeatable without losing adaptability.
            </h2>
            <p className="ase-body-lg text-ase-muted">
              This reduces reliance on individual interpretation and improves
              engineering consistency across projects, regions, and teams.
            </p>
          </div>
          <div className="grid gap-4">
            {attributes.map((item, index) => (
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

      <section className="ase-section-paper">
        <div className="ase-container py-20">
          <div className="max-w-3xl">
            <span className="ase-kicker text-ase-gray">
              Continuous Evolution
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              Systems improve through disciplined application and measured feedback.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
            {evolution.map((step, index) => (
              <div key={step.label} className={index < evolution.length - 1 ? "contents" : ""}>
                <div className="ase-card ase-flow-card text-center">
                  <span className={`ase-icon-chip mx-auto ${index % 2 === 0 ? "ase-icon-chip-blue" : "ase-icon-chip-red"}`}>
                    <EvolutionIcon type={step.icon} />
                  </span>
                  <p className="text-base leading-7 text-ase-black">{step.label}</p>
                </div>
                {index < evolution.length - 1 ? (
                  <div className="ase-arrow">
                    <span aria-hidden="true">→</span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
