import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
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
      <PageHeader
        kicker="Manufacturing"
        title="Manufacturing industrializes ASE engineering."
        lede="Site-built construction struggles to hold quality and schedule at scale. ASE moves precision into the factory: components are engineered by ASE, then manufactured under industrial quality control to ASE standards."
      />

      <section className="ase-section-light">
        <div className="ase-container py-16 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <span className="ase-kicker text-ase-blue">How It Works</span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              One component of the value chain — not the value proposition.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {manufacturingPrinciples.map((item) => (
              <article key={item.title} className="ase-card-quiet">
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
        <div className="ase-container py-16 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <span className="ase-kicker text-ase-blue">Who Manufactures</span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              Manufactured to ASE standards.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {manufacturers.map((item) => (
              <article key={item.name} className="ase-card-quiet">
                <span className="text-xs uppercase tracking-[0.3em] text-ase-blue">
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
        <div className="ase-container flex flex-col gap-6 py-16 text-center lg:py-20">
          <span className="ase-kicker text-ase-blue">Next Step</span>
          <h2 className="ase-section-title text-ase-black">
            From factory to structure.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/project-delivery" className="ase-btn ase-btn-primary">
              Project Delivery
            </Link>
            <Link href="/solutions" className="ase-btn ase-btn-ghost">
              ASE Building Systems
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
