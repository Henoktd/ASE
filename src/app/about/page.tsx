import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
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
    description: "Delivers projects in Ethiopia using ASE systems.",
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
      <PageHeader
        kicker="About ASE"
        title="An engineering company that develops systems."
        lede="ASE develops, manufactures, and delivers engineered construction systems as an integrated engineering group. Manufacturing is one component of the value chain — the value itself is the engineering."
      />

      <section className="ase-section-light">
        <div className="ase-container py-16 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <span className="ase-kicker text-ase-blue">
              Group Operating Model
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              One group. Clear roles. One set of standards.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2" data-anim-group>
            {groupModel.map((entity) => (
              <article key={entity.name} className="ase-card-quiet">
                <span className="text-xs uppercase tracking-[0.3em] text-ase-blue">
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

      <section className="ase-section-paper">
        <div className="ase-container py-16 lg:py-20">
          <div className="mb-12 text-center">
            <span className="ase-kicker text-ase-blue">
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
          <div className="ase-chevron-flow" data-anim-group>
            {brandArchitecture.map((level, index) => (
              <div
                key={level}
                className="ase-chevron"
                style={{
                  backgroundColor: `rgba(56, 70, 157, ${1 - index * 0.14})`,
                }}
              >
                {level}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container grid gap-10 py-16 lg:grid-cols-[0.45fr_0.55fr] lg:items-center lg:py-20">
          <div className="flex flex-col gap-4">
            <span className="ase-kicker text-ase-blue">How ASE Grows</span>
            <h2 className="ase-section-title text-ase-black">
              A stable architecture that compounds engineering knowledge.
            </h2>
            <p className="ase-body-lg text-ase-muted">
              New systems are added within the same architecture as they are
              developed. Feedback from every operational building returns to
              research and engineering, so capability compounds rather than
              resets with each project.
            </p>
            <Link href="/engineering" className="ase-btn ase-btn-ghost w-fit">
              Inside the Engineering
            </Link>
          </div>
          <div className="ase-card-quiet min-h-[240px] justify-center">
            <p className="ase-body-lg text-ase-black">
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
