import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Solutions — ASE Building Systems",
  description:
    "ASE Building Systems: engineered construction systems spanning structural, foundation, vertical, infrastructure, housing, and post-tensioning solutions, underpinned by digital engineering and engineering services.",
  path: "/solutions",
});

const systemsCatalogue = [
  {
    title: "Structural Systems",
    description:
      "Structural floor systems built on prestressed hollow-core technology, hybrid structural systems, long span systems, and roof systems — engineered for speed, consistency, and span capability.",
  },
  {
    title: "Foundation Systems",
    description:
      "Foundation optimization, ground improvement, and optimized shallow and deep foundation solutions that reduce cost and risk below ground.",
  },
  {
    title: "Vertical Systems",
    description:
      "Wall systems, core systems, column systems, lift cores, and shear wall systems engineered as one coherent vertical structure.",
  },
  {
    title: "Infrastructure Systems",
    description:
      "Industrial heavy pavement systems, bridge systems, industrial structural systems, and rail systems for demanding infrastructure programs.",
  },
  {
    title: "Housing Systems",
    description:
      "Affordable housing, industrial housing, modular housing, and rural housing solutions engineered for repeatable, large-scale delivery.",
  },
  {
    title: "Post-Tensioning Systems",
    description:
      "Building, bridge, water-retaining, and industrial post-tensioning solutions that extend spans and reduce material demand.",
  },
  {
    title: "Digital Engineering",
    description:
      "BIM, digital twins, parametric design, automation, and digital libraries connecting every system to a single digital backbone.",
  },
  {
    title: "Engineering Services",
    description:
      "Structural engineering, value engineering, constructability review, optimization, peer review, and independent design review — engineering underpins every system rather than standing alongside them.",
  },
];

const assurancePlatforms = [
  {
    name: "Verify",
    role: "Engineering assurance",
    description:
      "Independent verification that every engineered system performs as designed.",
  },
  {
    name: "Assure",
    role: "Quality assurance",
    description:
      "Quality assurance across manufacturing and delivery, applied to every component and connection.",
  },
  {
    name: "Record",
    role: "Digital and project records",
    description:
      "Digital records and project traceability maintained across the full life of the structure.",
  },
];

const outcomes = [
  "Construction speed",
  "Quality consistency",
  "Span capability",
  "Site safety",
  "Lower dead load",
];

export default function SolutionsPage() {
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
        <div className="ase-container relative z-10 py-24 lg:py-28">
          <div className="max-w-4xl">
            <span className="ase-kicker text-ase-gray">
              Solutions — ASE Building Systems
            </span>
            <h1 className="ase-page-title mt-5 text-ase-white">
              Complete building systems, engineered end to end.
            </h1>
            <p className="ase-body-lg mt-5 max-w-3xl text-white/82">
              Buildings fail on cost, schedule, and quality when they are
              assembled from disconnected products. ASE Building Systems is the
              platform through which ASE delivers engineered construction
              systems that combine engineering, digital technology, industrial
              manufacturing, and project delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container py-20">
          <div className="max-w-3xl">
            <span className="ase-kicker text-ase-gray">
              One Architecture
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              A stable architecture that grows with every new system.
            </h2>
            <p className="ase-body-lg mt-4 text-ase-muted">
              This catalogue describes an architecture rather than a set of
              products. New systems are added within it as they are developed;
              the underlying structure does not change. Every future innovation
              strengthens the same framework.
            </p>
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="mb-10 max-w-3xl">
            <span className="ase-kicker text-ase-gray">
              The Systems Portfolio
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              The ASE Building Systems catalogue.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {systemsCatalogue.map((system, index) => (
              <article
                key={system.title}
                className={`ase-card ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
              >
                <h3 className="text-xl font-semibold text-ase-black">
                  {system.title}
                </h3>
                <p className="text-base leading-7 text-ase-muted">
                  {system.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-dark ase-section-transition text-ase-white">
        <div className="ase-container py-20">
          <div className="mb-10 max-w-3xl">
            <span className="ase-kicker text-ase-gray">
              ASE Engineering Assurance Ecosystem
            </span>
            <h2 className="ase-section-title">
              Supporting platforms that stand behind every system.
            </h2>
            <p className="ase-body-lg mt-4 text-ase-gray">
              Distinct from the structural systems portfolio, the ASE
              engineering assurance ecosystem provides engineering assurance
              and traceability across every system adopted within a project.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {assurancePlatforms.map((platform) => (
              <div key={platform.name} className="ase-panel-dark px-6 py-6">
                <p className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                  {platform.role}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-ase-white">
                  {platform.name}
                </h3>
                <p className="mt-3 text-base leading-7 text-white/82">
                  {platform.description}
                </p>
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
              What engineered systems deliver on site.
            </h2>
            <p className="ase-body-lg text-ase-muted">
              Every ASE system is developed to create measurable value in
              delivery — before any component reaches a project.
            </p>
            <Link href="/projects" className="ase-btn ase-btn-primary w-fit">
              See the Evidence
            </Link>
          </div>
          <div className="grid gap-4">
            {outcomes.map((item, index) => (
              <div
                key={item}
                className={`ase-card ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
              >
                <p className="text-base leading-7 text-ase-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container flex flex-col gap-6 py-20 text-center">
          <span className="ase-kicker text-ase-gray">
            Next Step
          </span>
          <h2 className="ase-section-title text-ase-black">
            Start with your project challenge.
          </h2>
          <p className="ase-body-lg mx-auto max-w-2xl text-ase-muted">
            Tell us what your project needs to achieve. ASE engineers the
            system that delivers it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/engage" className="ase-btn ase-btn-primary">
              Engage with ASE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
