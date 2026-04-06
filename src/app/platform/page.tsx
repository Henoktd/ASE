import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "The ASE platform develops and governs reusable structural engineering systems.",
};

const aseRole = [
  {
    title: "Design engineering systems and frameworks",
    description:
      "ASE defines how structural problems are approached and how engineering decisions are made.",
  },
  {
    title: "Establish structural standards and methodologies",
    description:
      "The platform provides consistent logic, parameters, and structural methods across applications.",
  },
  {
    title: "Capture performance feedback from application",
    description:
      "Real-world use produces data and constraints that help validate and strengthen the system.",
  },
  {
    title: "Continuously refine the system layer",
    description:
      "Each cycle improves the platform so engineering capability compounds over time.",
  },
];

const externalExecution = ["EASE", "Contractors", "Project teams"];

const lifecycle = [
  "System Design",
  "Application in Projects",
  "Feedback and Performance Evaluation",
  "System Refinement",
];

export default function PlatformPage() {
  return (
    <>
      <section className="ase-section-dark ase-section-transition relative overflow-hidden text-ase-white">
        <div className="pointer-events-none absolute inset-0 ase-hero-media" />
        <div className="pointer-events-none absolute inset-0 ase-hero-overlay" />
        <div className="ase-container relative z-10 py-24 lg:py-28">
          <div className="max-w-4xl">
            <span className="ase-kicker text-ase-gray">
              Platform
            </span>
            <h1 className="ase-page-title mt-5 text-ase-white">
              A structured platform governing engineering logic across projects
            </h1>
            <p className="ase-body-lg mt-5 max-w-3xl text-white/82">
              ASE is the system layer that develops, standardizes, and improves
              reusable structural systems. Its role is to govern engineering
              logic across applications and delivery environments.
            </p>
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container py-20">
          <div className="max-w-3xl">
            <span className="ase-kicker text-ase-gray">
              What the ASE Platform Is
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              A coherent system governing structural engineering logic.
            </h2>
            <p className="ase-body-lg mt-4 text-ase-muted">
              The platform defines how structural problems are approached, how
              engineering decisions are made, and how performance is measured
              and improved over time.
            </p>
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="max-w-3xl">
            <span className="ase-kicker text-ase-gray">
              Role of ASE
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              ASE creates a stable and evolving engineering foundation.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {aseRole.map((item, index) => (
              <article
                key={item.title}
                className={`ase-card ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
              >
                <h3 className="text-lg font-semibold text-ase-black">
                  {item.title}
                </h3>
                <p className="text-base leading-7 text-ase-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container py-20">
          <div className="mb-12 text-center">
            <span className="ase-kicker text-ase-gray">
              Execution Layer
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              Delivery entities apply the platform within project environments.
            </h2>
            <p className="ase-body-lg mx-auto mt-4 max-w-3xl text-ase-muted">
              Project execution is carried by delivery entities such as EASE,
              contractors, or project teams. ASE ensures the engineering within
              those environments remains structured, consistent, and capable of
              continuous improvement.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {externalExecution.map((item, index) => (
              <div
                key={item}
                className={`ase-card text-center ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
              >
                <p className="text-lg font-semibold text-ase-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="mb-12 text-center">
            <span className="ase-kicker text-ase-gray">
              System Lifecycle
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              System Design → Application → Evaluation → Refinement
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
            {lifecycle.map((step, index) => (
              <div key={step} className={index < lifecycle.length - 1 ? "contents" : ""}>
                <div className="ase-card ase-flow-card text-center">
                  <p className="text-base leading-7 text-ase-black">{step}</p>
                </div>
                {index < lifecycle.length - 1 ? (
                  <div className="ase-arrow">
                    <span aria-hidden="true">→</span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <span className="ase-kicker text-ase-gray">
              Outcome
            </span>
            <h2 className="ase-section-title text-ase-black">
              The platform turns engineering into structured, repeatable capability.
            </h2>
            <p className="ase-body-lg text-ase-muted">
              The differentiator is the way engineering knowledge is
              structured, retained, and improved across applications.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div className="ase-card text-center">
              <p className="text-base leading-7 text-ase-black">
                Isolated, project-based work
              </p>
            </div>
            <div className="flex items-center justify-center text-2xl text-ase-blue">
              <span aria-hidden="true">→</span>
            </div>
            <div className="ase-card ase-card-tint-blue text-center">
              <p className="text-base leading-7 text-ase-black">
                Structured, repeatable, system-driven capability
              </p>
            </div>
          </div>
          <div>
            <Link
              href="https://www.ease-int.com"
              className="text-sm uppercase tracking-[0.28em] text-ase-blue"
              target="_blank"
              rel="noreferrer"
            >
              Learn More About EASE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
