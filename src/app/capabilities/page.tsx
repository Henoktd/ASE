import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "ASE develops engineering systems designed for performance, efficiency, and repeatability.",
};

const capabilities = [
  {
    title: "Structural Engineering & Design",
    description:
      "Structural systems optimized for load performance, material efficiency, and constructability.",
  },
  {
    title: "Post-Tensioning & Structural Optimization",
    description:
      "Systems enabling longer spans, reduced structural mass, and greater design flexibility.",
  },
  {
    title: "Engineering Systems & Standardization",
    description:
      "Reusable structural logic, design methodologies, and system-based engineering frameworks.",
  },
  {
    title: "Engineering Advisory",
    description:
      "Early-stage technical input to improve feasibility, reduce structural risk, and optimize cost-performance.",
  },
];

const approach = ["Designed", "Applied", "Tested", "Refined"];

export default function CapabilitiesPage() {
  return (
    <>
      <section className="ase-section-dark text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Capabilities
            </span>
            <h1 className="text-4xl font-semibold">
              Engineering capabilities built for performance and repeatability.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-ase-gray">
              ASE develops engineering systems designed for performance,
              efficiency, and repeatability across structurally complex
              applications.
            </p>
          </div>
          <div className="ase-grid h-64 rounded-3xl border border-white/10" />
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container grid gap-6 py-20 md:grid-cols-2">
          {capabilities.map((item) => (
            <article key={item.title} className="ase-card">
              <h2 className="text-xl font-semibold text-ase-black">
                {item.title}
              </h2>
              <p className="text-base leading-7 text-ase-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Approach
            </span>
            <h2 className="text-3xl font-semibold text-ase-black">
              Engineering evolves through use, not theory.
            </h2>
            <p className="text-base leading-7 text-ase-muted">
              Every ASE system moves through a repeatable cycle that sharpens
              performance through application.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {approach.map((step) => (
              <div key={step} className="ase-card">
                <span className="text-xs uppercase tracking-[0.3em] text-ase-red">
                  Process
                </span>
                <h3 className="text-2xl font-semibold text-ase-black">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
