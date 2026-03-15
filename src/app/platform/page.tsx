import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "ASE platform structure, engineering collaboration model, and innovation initiatives across infrastructure systems.",
};

const platformStructure = [
  {
    title: "Platform Structure",
    description:
      "A layered system aligning strategy, technical development, and delivery readiness.",
  },
  {
    title: "Engineering Collaboration",
    description:
      "Multi-disciplinary engineering teams connected through shared systems and workflows.",
  },
  {
    title: "Innovation Initiatives",
    description:
      "Continuous development of new structural systems, optimization methods, and testing protocols.",
  },
  {
    title: "Technical Partner Ecosystem",
    description:
      "Specialist partners delivering research, analysis, and implementation support.",
  },
];

const approach = [
  "Define infrastructure challenges with system-level thinking.",
  "Prototype and validate engineering systems for repeatable performance.",
  "Embed delivery partners early to ensure implementation readiness.",
  "Maintain technical governance across projects using ASE standards.",
];

export default function PlatformPage() {
  return (
    <>
      <section className="bg-ase-black text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Platform
            </span>
            <h1 className="text-4xl font-semibold">
              A structured engineering platform model.
            </h1>
            <p className="text-sm text-ase-gray">
              The ASE platform connects strategy, engineering systems, and
              project execution through a single technical framework. It enables
              infrastructure teams to innovate while remaining aligned to
              delivery realities.
            </p>
          </div>
          <div className="ase-diagram ase-grid h-64 rounded-3xl" />
        </div>
      </section>

      <section className="bg-ase-white">
        <div className="ase-container grid gap-8 py-20 md:grid-cols-2">
          {platformStructure.map((item) => (
            <div key={item.title} className="ase-card">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-ase-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ase-graphite text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Platform Approach
            </span>
            <h2 className="text-3xl font-semibold">
              Engineering systems aligned with delivery.
            </h2>
            <p className="text-sm text-ase-gray">
              ASE applies a rigorous, systems-first approach to infrastructure
              challenges. Each stage is designed to maintain performance,
              clarity, and accountability.
            </p>
          </div>
          <div className="grid gap-4">
            {approach.map((step) => (
              <div key={step} className="border border-white/15 px-6 py-5">
                <p className="text-sm text-ase-gray">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
