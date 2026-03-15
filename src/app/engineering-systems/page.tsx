import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Systems",
  description:
    "ASE engineering systems including post-tensioned, precast, large span, and optimization methodologies.",
};

const systems = [
  {
    title: "Post-tensioned Structural Systems",
    overview:
      "High-performance structural solutions engineered for long spans and reduced material usage.",
    value: "Improved load distribution, faster construction sequencing.",
    application: "Transport hubs, bridges, and large public facilities.",
  },
  {
    title: "Precast Structural Solutions",
    overview:
      "Modular structural components optimized for repeatability and speed.",
    value: "Accelerated assembly with consistent quality control.",
    application: "Industrial facilities, transport corridors, and utilities.",
  },
  {
    title: "Large Span Structural Systems",
    overview:
      "System families designed for expansive coverage and architectural flexibility.",
    value: "Reduced columns, flexible layouts, and resilient performance.",
    application: "Airport terminals, logistics hubs, and civic infrastructure.",
  },
  {
    title: "Structural Optimization Methodologies",
    overview:
      "Analytical frameworks and computational tools for performance-driven design.",
    value: "Material efficiency, cost reduction, and long-term durability.",
    application: "Portfolio-wide upgrades and next-generation systems.",
  },
];

export default function EngineeringSystemsPage() {
  return (
    <>
      <section className="bg-ase-black text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Engineering Systems
            </span>
            <h1 className="text-4xl font-semibold">
              Systems engineered for performance and repeatability.
            </h1>
            <p className="text-sm text-ase-gray">
              ASE develops engineering systems that translate advanced research
              into repeatable infrastructure solutions. Each system is designed
              to deliver measurable engineering value and delivery readiness.
            </p>
          </div>
          <div className="ase-diagram ase-grid h-64 rounded-3xl" />
        </div>
      </section>

      <section className="bg-ase-white">
        <div className="ase-container grid gap-6 py-20">
          {systems.map((system) => (
            <div key={system.title} className="ase-card">
              <h2 className="text-xl font-semibold">{system.title}</h2>
              <p className="text-sm text-ase-muted">{system.overview}</p>
              <div className="grid gap-2 text-sm text-ase-muted">
                <p>
                  <span className="font-semibold text-ase-black">
                    Engineering Value:
                  </span>{" "}
                  {system.value}
                </p>
                <p>
                  <span className="font-semibold text-ase-black">
                    Application Examples:
                  </span>{" "}
                  {system.application}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
