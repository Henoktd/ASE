import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform",
  description: "The ASE-EASE closed-loop engineering platform.",
};

const platformStructure = [
  {
    title: "ASE: Engineering Intelligence",
    description:
      "Defines problems, designs solutions, builds systems, and retains knowledge.",
  },
  {
    title: "EASE: Execution Engine",
    description:
      "Applies systems, delivers projects, generates feedback, and validates performance.",
  },
  {
    title: "Closed-Loop System",
    description:
      "System developed, applied in project, data generated, and system refined.",
  },
  {
    title: "Strategic Advantage",
    description:
      "Engineering becomes repeatable, knowledge compounds, and capability scales across markets.",
  },
];

const outcomes = [
  "From project-based engineering",
  "To system-based engineering platform",
  "Regional EPC execution through EASE across East Africa",
  "Compounding engineering capability over time",
];

export default function PlatformPage() {
  return (
    <>
      <section className="ase-section-dark text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Platform
            </span>
            <h1 className="text-4xl font-semibold">The ASE-EASE Model</h1>
            <p className="text-base leading-7 text-ase-gray">
              ASE and EASE form a closed-loop engineering platform where
              engineering intelligence is developed, applied, tested, and
              improved through execution.
            </p>
          </div>
          <div className="ase-diagram ase-grid h-64 rounded-3xl" />
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container grid gap-8 py-20 md:grid-cols-2">
          {platformStructure.map((item) => (
            <article key={item.title} className="ase-card">
              <h2 className="text-lg font-semibold text-ase-black">
                {item.title}
              </h2>
              <p className="text-base leading-7 text-ase-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ase-section-graphite text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Outcome
            </span>
            <h2 className="text-3xl font-semibold">
              A strategic platform rather than isolated project work.
            </h2>
            <p className="text-base leading-7 text-ase-gray">
              The differentiator is not only who delivers, but how engineering
              knowledge is created, retained, and improved across projects.
            </p>
          </div>
          <div className="grid gap-4">
            {outcomes.map((step) => (
              <div key={step} className="border border-white/15 px-6 py-5">
                <p className="text-base leading-7 text-ase-gray">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
