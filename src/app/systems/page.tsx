import type { Metadata } from "next";

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
  "Application in real-world environments",
  "Feedback from execution",
  "Measured performance outcomes",
];

export default function SystemsPage() {
  return (
    <>
      <section className="ase-section-dark ase-section-transition relative overflow-hidden text-ase-white">
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
              <div key={step} className={index < evolution.length - 1 ? "contents" : ""}>
                <div className="ase-card ase-flow-card text-center">
                  <p className="text-base leading-7 text-ase-black">{step}</p>
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
