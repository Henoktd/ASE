import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Industries",
  description:
    "ASE Building Systems applied across residential, commercial, industrial, and institutional construction — positioned by client relationship and delivery capability.",
  path: "/industries",
});

const industries = [
  {
    title: "Residential",
    description:
      "Housing programs where speed, affordability, and consistent quality decide whether demand can actually be met.",
    image: "/media/Profile%20images/Profile%20images/KD%20real%20estate.png",
  },
  {
    title: "Commercial",
    description:
      "Mixed-use and commercial structures where floor efficiency, span capability, and program certainty drive returns.",
    image:
      "/media/Profile%20images/Profile%20images/Refenti%20with%20roundabout.png",
  },
  {
    title: "Industrial",
    description:
      "Factories, logistics, and heavy industrial facilities where long spans, heavy loads, and fast commissioning matter most.",
    image: "/media/Profile%20images/Profile%20images/Prosperity.webp",
  },
  {
    title: "Institutional",
    description:
      "Public, educational, and healthcare buildings where durability, safety, and lifecycle performance are non-negotiable.",
    image: "/media/Profile%20images/Profile%20images/yeka.webp",
  },
];

const clientSegments = [
  {
    title: "Project clients",
    description:
      "Developers, contractors, consultants, and industrial clients seeking an engineering solution for a specific project.",
  },
  {
    title: "Clients with internal delivery capability",
    description:
      "Organizations that adopt ASE systems and engineering support directly and deliver with their own teams.",
  },
  {
    title: "Clients without internal delivery capability",
    description:
      "Clients for whom ASE identifies and engages a suitable implementation partner to carry the project.",
  },
  {
    title: "Consultants",
    description:
      "A specification and recommendation channel — consultants specify ASE systems into projects they advise.",
  },
  {
    title: "Government and institutional clients",
    description:
      "Engaged through the same engineering-first positioning as private clients, adapted to institutional procurement.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        kicker="Industries"
        title="Every sector builds differently. The engineering discipline is the same."
        lede="ASE positions engineering solutions by the nature of the client relationship and the delivery capability behind each project — not by project size or product type."
      />

      <section className="ase-section-light">
        <div className="ase-container py-16 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((item) => (
              <article key={item.title} className="ase-card-quiet overflow-hidden p-0">
                <div className="aspect-[4/3] overflow-hidden border-b border-ase-border-soft bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <h2 className="text-xl font-semibold text-ase-black">
                    {item.title}
                  </h2>
                  <p className="text-base leading-7 text-ase-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container py-16 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <span className="ase-kicker text-ase-blue">How Clients Engage</span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              Positioned by relationship, not by project size.
            </h2>
            <p className="ase-body-lg mt-4 text-ase-muted">
              Messaging adapts to each audience, but the philosophy is
              constant: understand the challenge, engineer the system, deliver
              the outcome.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {clientSegments.map((segment) => (
              <article key={segment.title} className="ase-card-quiet">
                <h3 className="text-lg font-semibold text-ase-black">
                  {segment.title}
                </h3>
                <p className="text-base leading-7 text-ase-muted">
                  {segment.description}
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
            Bring us the challenge your sector is facing.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/solutions" className="ase-btn ase-btn-ghost">
              Explore the Systems
            </Link>
            <Link href="/engage" className="ase-btn ase-btn-primary">
              Engage with ASE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
