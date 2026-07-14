import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SystemIcon from "@/components/SystemIcon";
import { createMetadata } from "@/lib/seo";
import { buildingSystems } from "@/lib/systems";

export const metadata: Metadata = createMetadata({
  title: "Solutions — ASE Building Systems",
  description:
    "ASE Building Systems: engineered construction systems spanning structural, foundation, vertical, infrastructure, housing, and post-tensioning solutions, underpinned by digital engineering and engineering services.",
  path: "/solutions",
});

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

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        kicker="Solutions"
        title="ASE Building Systems"
        lede="Complete building systems, engineered end to end. This is an architecture, not a set of products — new systems are added within it as they are developed, and the underlying structure does not change."
      />

      <section className="ase-section-light">
        <div className="ase-container py-16 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {buildingSystems.map((system) => (
              <Link
                key={system.slug}
                href={`/solutions/${system.slug}`}
                className="ase-card-quiet ase-card-link"
              >
                <span className="ase-system-icon">
                  <SystemIcon type={system.icon} />
                </span>
                <h2 className="text-xl font-semibold text-ase-black">
                  {system.name}
                </h2>
                <p className="text-base leading-7 text-ase-muted">
                  {system.short}
                </p>
                <span className="mt-auto pt-2 text-xs font-semibold uppercase tracking-[0.24em] text-ase-blue">
                  View System →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-dark text-ase-white">
        <div className="ase-container py-16 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <span className="ase-kicker text-white/70">
              ASE Engineering Assurance Ecosystem
            </span>
            <h2 className="ase-section-title mt-4">
              Supporting platforms that stand behind every system.
            </h2>
            <p className="ase-body-lg mt-4 text-white/78">
              Distinct from the structural systems portfolio, these platforms
              provide engineering assurance and traceability across every
              system adopted within a project.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {assurancePlatforms.map((platform) => (
              <div key={platform.name} className="ase-panel-dark px-6 py-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/64">
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

      <section className="ase-section-light">
        <div className="ase-container flex flex-col gap-6 py-16 text-center lg:py-20">
          <span className="ase-kicker text-ase-blue">Next Step</span>
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
