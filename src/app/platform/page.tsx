import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform",
  description: "A system that builds engineering capability over time.",
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
        <div className="ase-container relative z-10 py-24 lg:py-28">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Platform
            </span>
            <h1 className="mt-5 text-4xl font-semibold text-ase-white">
              A System That Builds Engineering Capability Over Time
            </h1>
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container py-20">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              What the Platform Is
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-ase-black">
              A closed engineering platform that develops systems through use.
            </h2>
            <p className="mt-4 text-base leading-7 text-ase-muted">
              The platform connects engineering definition, execution, and
              feedback into one operating model so structural capability grows
              stronger over time.
            </p>
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Why it Exists
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-ase-black">
              Engineering should not restart from zero on every project.
            </h2>
            <p className="mt-4 text-base leading-7 text-ase-muted">
              The model exists so knowledge can be retained, improved, and
              reused rather than remaining trapped inside isolated project
              outputs.
            </p>
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container py-20">
          <div className="mb-12 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              System Diagram
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-ase-black">
              Engineering → Execution → Feedback → Refinement
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
            <div className="ase-card text-center">
              <h3 className="text-xl font-semibold text-ase-black">Engineering</h3>
            </div>
            <div className="flex items-center justify-center text-2xl text-ase-blue">
              <span aria-hidden="true">→</span>
            </div>
            <div className="ase-card text-center">
              <h3 className="text-xl font-semibold text-ase-black">Execution</h3>
            </div>
            <div className="flex items-center justify-center text-2xl text-ase-blue">
              <span aria-hidden="true">→</span>
            </div>
            <div className="ase-card text-center">
              <h3 className="text-xl font-semibold text-ase-black">Feedback</h3>
            </div>
            <div className="flex items-center justify-center text-2xl text-ase-blue">
              <span aria-hidden="true">→</span>
            </div>
            <div className="ase-card text-center">
              <h3 className="text-xl font-semibold text-ase-black">Refinement</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container grid gap-8 py-20 md:grid-cols-2">
          {platformStructure.map((item) => (
            <article key={item.title} className="ase-card">
              <h2 className="text-lg font-semibold text-ase-black">
                {item.title}
              </h2>
              <p className="text-base leading-7 text-ase-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Outcome
            </span>
            <h2 className="text-3xl font-semibold text-ase-black">
              A strategic platform rather than isolated project work.
            </h2>
            <p className="text-base leading-7 text-ase-muted">
              The differentiator is not only who delivers, but how engineering
              knowledge is created, retained, and improved across projects.
            </p>
          </div>
          <div className="grid gap-4">
            {outcomes.map((step) => (
              <div key={step} className="ase-card">
                <p className="text-base leading-7 text-ase-black">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              ASE vs EASE
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <article className="ase-card">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                ASE
              </span>
              <h2 className="text-2xl font-semibold text-ase-black">
                Defines systems
              </h2>
              <p className="text-base leading-7 text-ase-muted">
                ASE defines structural problems, develops engineering systems,
                and retains technical logic inside the platform.
              </p>
            </article>

            <div className="flex flex-col items-center justify-center gap-3 text-ase-blue">
              <span className="text-3xl leading-none">→</span>
              <span className="text-sm uppercase tracking-[0.28em]">↺ Feedback</span>
            </div>

            <article className="ase-card">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                EASE
              </span>
              <h2 className="text-2xl font-semibold text-ase-black">
                Executes systems
              </h2>
              <p className="text-base leading-7 text-ase-muted">
                EASE applies those systems in projects, generating performance
                feedback that helps refine future engineering.
              </p>
              <a
                href="https://www.ease-int.com"
                target="_blank"
                rel="noreferrer"
                className="mt-2 text-sm uppercase tracking-[0.28em] text-ase-blue"
              >
                Know More About EASE
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
