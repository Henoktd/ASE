import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering systems validated through real-world execution environments.",
};

const applications = [
  {
    name: "Large-Span Structures",
    description: "Extended spans with reduced material use.",
  },
  {
    name: "Commercial Developments",
    description: "Flexible structural systems for urban environments.",
  },
  {
    name: "Infrastructure Projects",
    description: "Solutions for complex logistical conditions.",
  },
];

const metrics = [
  "Structural efficiency",
  "Material use",
  "Constructability",
  "Delivery speed",
];

export default function ProjectsPage() {
  return (
    <>
      <section className="ase-section-dark text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Projects
            </span>
            <h1 className="text-4xl font-semibold">Engineering in Application</h1>
            <p className="text-base leading-7 text-ase-gray">
              ASE systems are validated through real-world execution
              environments. Projects serve as testing grounds for performance,
              efficiency, and adaptability.
            </p>
            <Link
              href="/contact"
              className="ase-btn ase-btn-ghost ase-btn-invert"
            >
              Partner with ASE
            </Link>
          </div>
          <div className="ase-grid h-64 rounded-3xl border border-white/10" />
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container grid gap-8 py-20 md:grid-cols-3">
          {applications.map((project) => (
            <article key={project.name} className="ase-card">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-red">
                Application
              </span>
              <h2 className="text-xl font-semibold text-ase-black">
                {project.name}
              </h2>
              <p className="text-base leading-7 text-ase-muted">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1fr_1fr]">
          <div className="ase-card">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Continuous Improvement
            </span>
            <h2 className="text-3xl font-semibold text-ase-black">
              Every project generates new engineering intelligence.
            </h2>
            <p className="text-base leading-7 text-ase-muted">
              Performance data, constraint insights, and execution feedback feed
              directly into system refinement.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div key={metric} className="ase-card">
                <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                  Evaluation Metric
                </span>
                <p className="text-lg font-semibold text-ase-black">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
