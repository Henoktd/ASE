import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Manufacturing",
  description:
    "Technowall Manufacturing PLC produces ASE-engineered components in accordance with ASE standards and specifications. Manufacturing industrializes ASE engineering systems.",
  path: "/manufacturing",
});

const manufacturingPrinciples = [
  {
    title: "Engineered first, manufactured second",
    description:
      "Every component is defined by ASE engineering standards and specifications before it is produced. Manufacturing industrializes ASE engineering systems; it does not define them.",
  },
  {
    title: "Industrial quality control",
    description:
      "Factory production replaces site variability with controlled conditions, repeatable processes, and inspected output.",
  },
  {
    title: "Components, not systems",
    description:
      "Manufactured items — prestressed slabs, panels, anchorages, connectors — are components. The system they form is an engineering product, designed and owned by ASE.",
  },
];

const manufacturers = [
  {
    name: "Technowall Manufacturing PLC",
    role: "Group manufacturer",
    description:
      "Manufactures ASE-engineered components in accordance with ASE standards and specifications.",
  },
  {
    name: "Approved manufacturing partners",
    role: "Future capacity",
    description:
      "As demand grows, additional manufacturing partners are approved and audited against the same ASE standards.",
  },
];

export default function ManufacturingPage() {
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
              Manufacturing
            </span>
            <h1 className="ase-page-title mt-5 text-ase-white">
              Manufacturing industrializes ASE engineering.
            </h1>
            <p className="ase-body-lg mt-5 max-w-3xl text-white/82">
              Site-built construction struggles to hold quality and schedule at
              scale. ASE moves precision into the factory: components are
              engineered by ASE, then manufactured under industrial quality
              control to ASE standards.
            </p>
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="mb-10 max-w-3xl">
            <span className="ase-kicker text-ase-gray">
              How It Works
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              One component of the value chain — not the value proposition.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {manufacturingPrinciples.map((item, index) => (
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
          <div className="mb-10 max-w-3xl">
            <span className="ase-kicker text-ase-gray">
              Who Manufactures
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              Manufactured to ASE standards.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {manufacturers.map((item, index) => (
              <article
                key={item.name}
                className={`ase-card ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                  {item.role}
                </span>
                <h3 className="text-xl font-semibold text-ase-black">
                  {item.name}
                </h3>
                <p className="text-base leading-7 text-ase-muted">
                  {item.description}
                </p>
              </article>
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
            From factory to structure.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/project-delivery" className="ase-btn ase-btn-primary">
              Project Delivery
            </Link>
            <Link href="/solutions" className="ase-btn ase-btn-primary">
              ASE Building Systems
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
