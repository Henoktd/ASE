import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About ASE",
  description:
    "ASE is an engineering group that develops, manufactures, and delivers engineered construction systems through a clear group operating model.",
  path: "/about",
});

const groupModel = [
  {
    name: "ASE",
    role: "Engineering and standards",
    description:
      "Develops engineering systems and standards, and owns the associated intellectual property. ASE is the engineering authority of the group.",
  },
  {
    name: "Technowall Manufacturing PLC",
    role: "Manufacturing",
    description:
      "Manufactures engineered components in accordance with ASE standards and specifications.",
  },
  {
    name: "EASE Engineering",
    role: "Project delivery — Ethiopia",
    description:
      "Delivers projects in Ethiopia using ASE systems.",
  },
  {
    name: "Strategic implementation partners",
    role: "Other markets",
    description:
      "Deploy ASE systems in additional markets under the ASE market development framework, matched to each market individually.",
  },
];

const brandArchitecture = [
  "ASE",
  "ASE Building Systems",
  "Engineering Systems",
  "Components",
  "Projects",
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
              ASE International
            </p>
            <h1 className="ase-page-title mt-6">
              An engineering company that develops systems.
            </h1>
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="ase-kicker text-ase-gray">
              Philosophy
            </span>
            <p className="mt-6 text-2xl font-medium leading-tight text-ase-black sm:text-3xl">
              ASE develops, manufactures, and delivers engineered construction
              systems as an integrated engineering group. Manufacturing is one
              component of the value chain — the value itself is the
              engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container py-20">
          <div className="mb-10 max-w-3xl">
            <span className="ase-kicker text-ase-gray">
              Group Operating Model
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              One group. Clear roles. One set of standards.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {groupModel.map((entity, index) => (
              <article
                key={entity.name}
                className={`ase-card ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                  {entity.role}
                </span>
                <h3 className="text-xl font-semibold text-ase-black">
                  {entity.name}
                </h3>
                <p className="text-base leading-7 text-ase-muted">
                  {entity.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="mb-12 text-center">
            <span className="ase-kicker text-ase-gray">
              Brand Architecture
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              From the master brand to the built project.
            </h2>
            <p className="ase-body-lg mx-auto mt-4 max-w-3xl text-ase-muted">
              ASE is the master brand. ASE Building Systems is the commercial
              platform. Engineering systems sit beneath it; only components are
              products; projects are the proof.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
            {brandArchitecture.map((level, index) => (
              <div key={level} className={index < brandArchitecture.length - 1 ? "contents" : ""}>
                <div className="ase-card ase-flow-card text-center">
                  <p className="text-base font-semibold leading-7 text-ase-black">
                    {level}
                  </p>
                </div>
                {index < brandArchitecture.length - 1 ? (
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
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
          <div className="flex flex-col gap-4">
            <span className="ase-kicker text-ase-gray">
              How ASE Grows
            </span>
            <h2 className="ase-section-title text-ase-black">
              A stable architecture that compounds engineering knowledge.
            </h2>
            <p className="ase-body-lg text-ase-muted">
              New systems are added within the same architecture as they are
              developed. Feedback from every operational building returns to
              research and engineering, so capability compounds rather than
              resets with each project.
            </p>
            <Link href="/engineering" className="ase-btn ase-btn-primary w-fit">
              Inside the Engineering
            </Link>
          </div>
          <div className="ase-card ase-card-tint-blue min-h-[260px] justify-center">
            <p className="text-base leading-7 text-ase-black">
              The long-term purpose of ASE is to make better ways to build
              repeatable: engineered systems, industrial manufacturing, and
              disciplined delivery, applied across Africa through partners who
              share the same standards.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
