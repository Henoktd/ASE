import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About ASE",
  description:
    "Learn why ASE exists as a structural engineering platform and system layer across delivery environments.",
  path: "/about",
});

const strategicRole = [
  {
    title: "System layer across engineering environments",
    description:
      "ASE organizes structural logic above project-specific execution so methodology remains coherent across applications.",
  },
  {
    title: "Capability-building platform",
    description:
      "Its purpose is to grow engineering capability through systems, standards, and controlled iteration.",
  },
  {
    title: "Repository of engineering knowledge",
    description:
      "ASE retains structured learning so engineering does not reset with every new project cycle.",
  },
];

export default function AboutPage() {
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
        <div className="ase-container relative z-10 py-24 lg:py-32">
          <div className="max-w-4xl">
            <span className="ase-kicker text-ase-gray">
              About ASE
            </span>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/78">
              Afrispecialized Engineering
            </p>
            <h1 className="ase-page-title mt-6">
              Why ASE exists as a structural engineering platform
            </h1>
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="ase-kicker text-ase-gray">
              Why ASE Exists
            </span>
            <p className="mt-6 text-2xl font-medium leading-tight text-ase-black sm:text-3xl">
              Engineering is often fragmented and project-specific. ASE exists
              to transform it into a structured, system-driven discipline.
            </p>
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
          <div className="flex flex-col gap-4">
            <span className="ase-kicker text-ase-gray">
              What ASE Builds
            </span>
            <h2 className="ase-section-title text-ase-black">
              Engineering systems, standardized methodologies, and structured frameworks for decision-making.
            </h2>
            <p className="ase-body-lg text-ase-muted">
              These form a reusable foundation for engineering across
              applications, allowing structural capability to grow in a more
              coherent and reusable way.
            </p>
          </div>
          <div className="ase-card ase-card-tint-blue min-h-[260px] justify-center">
            <p className="text-base leading-7 text-ase-black">
              The long-term purpose of ASE is to make structural engineering
              more repeatable, more coherent, and more scalable across teams,
              regions, and execution environments.
            </p>
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <span className="ase-kicker text-ase-gray">
                Strategic Role
              </span>
              <h2 className="ase-section-title mt-4 text-ase-black">
                ASE operates as a system layer across delivery environments.
              </h2>
            </div>
            <div className="lg:text-right">
              <Link
                href="/platform"
                className="text-sm uppercase tracking-[0.28em] text-ase-blue"
              >
                Explore Platform
              </Link>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {strategicRole.map((item, index) => (
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
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="ase-kicker text-ase-gray">
                Independence
              </span>
              <h2 className="ase-section-title mt-4 text-ase-black">
                ASE systems can be applied across multiple delivery partners,
                ensuring flexibility, scalability, and broader impact.
              </h2>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_120px_1fr] lg:items-center">
              <div className="ase-card ase-flow-card text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                  ASE
                </span>
                <h3 className="text-2xl font-semibold text-ase-black">
                  Defines Systems
                </h3>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 text-ase-blue">
                <span className="text-4xl leading-none">→</span>
                <span className="text-sm uppercase tracking-[0.28em]">
                  Independent Use
                </span>
              </div>

              <div className="ase-card ase-flow-card text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                  Delivery Partners
                </span>
                <h3 className="text-2xl font-semibold text-ase-black">
                  Apply Systems
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
