import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ASE",
  description:
    "Redefining how structural problems are solved.",
};

const whyItMatters = [
  {
    title: "Knowledge should not reset every project",
    description:
      "ASE builds engineering capability so learning is retained and strengthened over time.",
    icon: "knowledge",
  },
  {
    title: "Execution should improve engineering",
    description:
      "Application in real conditions feeds directly back into system refinement.",
    icon: "feedback",
  },
  {
    title: "Capability should compound",
    description:
      "The model turns isolated outputs into repeatable engineering advantage.",
    icon: "growth",
  },
];

function AboutIcon({ type }: { type: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-12 w-12 text-ase-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "knowledge" ? (
        <>
          <path d="M16 18h20l12 10v18H28L16 36z" />
          <path d="M36 18v18h12" />
          <path d="M22 28h8" />
          <path d="M22 34h12" />
        </>
      ) : null}
      {type === "feedback" ? (
        <>
          <path d="M18 24a16 16 0 0 1 26-4" />
          <path d="M46 40a16 16 0 0 1-26 4" />
          <path d="M40 14v8h-8" />
          <path d="M24 50v-8h8" />
        </>
      ) : null}
      {type === "growth" ? (
        <>
          <path d="M16 48V18" />
          <path d="M16 48h34" />
          <path d="M22 40l8-10 8 5 10-14" />
          <path d="M40 18h10v10" />
        </>
      ) : null}
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="ase-section-dark ase-section-transition relative overflow-hidden text-ase-white">
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
        <div className="ase-container relative z-10 py-24 lg:py-32">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.32em] text-ase-gray">
              About ASE
            </span>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/78">
              Afrispecialized Engineering
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Redefining How Structural Problems Are Solved
            </h1>
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Core Idea
            </span>
            <p className="mt-6 text-2xl font-medium leading-tight text-ase-black sm:text-3xl">
              ASE defines structural systems that are applied, tested, and
              improved through real-world execution.
            </p>
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              What ASE Does
            </span>
            <h2 className="text-3xl font-semibold text-ase-black">
              ASE develops the engineering logic behind execution.
            </h2>
            <p className="text-base leading-7 text-ase-muted">
              It defines structural systems, design logic, and technical
              frameworks that can be used across projects rather than recreated
              from scratch each time.
            </p>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-ase-border bg-white">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            >
              <source src="/media/ase-hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_220px] lg:items-start">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                Why This Model Exists
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-ase-black">
                Engineering matters more when knowledge compounds.
              </h2>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {whyItMatters.map((item, index) => (
                  <article
                    key={item.title}
                    className={`ase-card ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
                  >
                    <div
                      className={`ase-icon-chip ${index % 2 === 0 ? "ase-icon-chip-blue" : "ase-icon-chip-red"}`}
                    >
                      <AboutIcon type={item.icon} />
                    </div>
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
            <div className="pt-2 lg:text-right">
              <Link
                href="/platform"
                className="text-sm uppercase tracking-[0.28em] text-ase-blue"
              >
                Explore Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                System Model
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-ase-black">
                ASE defines systems. EASE executes them. Feedback improves the
                model.
              </h2>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_120px_1fr] lg:items-center">
              <div className="ase-card text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                  ASE
                </span>
                <h3 className="text-2xl font-semibold text-ase-black">Defines Systems</h3>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 text-ase-blue">
                <span className="text-4xl leading-none">→</span>
                <span className="text-sm uppercase tracking-[0.28em]">↺ Feedback</span>
              </div>

              <div className="ase-card text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                  EASE
                </span>
                <h3 className="text-2xl font-semibold text-ase-black">Executes Systems</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
