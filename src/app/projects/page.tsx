import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Infrastructure projects applying ASE engineering systems with EASE as delivery partner.",
};

const projects = [
  {
    name: "Metropolitan Transit Hub",
    description:
      "Integrated multimodal station designed for high-capacity urban movement.",
    challenge:
      "Delivering a long-span concourse without compromising structural efficiency.",
    solution:
      "ASE post-tensioned systems optimized for load distribution and rapid assembly.",
    approach:
      "EASE coordinated fabrication and delivery sequencing for phased deployment.",
  },
  {
    name: "Regional Logistics Gateway",
    description:
      "Large-scale logistics and warehousing complex supporting regional trade.",
    challenge:
      "Creating adaptable large-span layouts for evolving operational needs.",
    solution:
      "ASE large-span structural systems with modular expansion capability.",
    approach:
      "EASE managed installation planning and integrated supply-chain partners.",
  },
  {
    name: "Coastal Infrastructure Corridor",
    description:
      "Resilient infrastructure link between coastal economic zones.",
    challenge:
      "Optimizing material usage while meeting resilience requirements.",
    solution:
      "ASE structural optimization methodologies and precast solutions.",
    approach:
      "EASE implemented field testing and performance monitoring.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-ase-black text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Projects
            </span>
            <h1 className="text-4xl font-semibold">
              Engineering systems applied to real infrastructure delivery.
            </h1>
            <p className="text-sm text-ase-gray">
              ASE systems are implemented across infrastructure projects to
              prove performance, adaptability, and engineering value. EASE
              serves as the delivery partner for system implementation.
            </p>
            <Link
              href="/contact"
              className="ase-btn ase-btn-ghost ase-btn-invert"
            >
              Partner with ASE
            </Link>
          </div>
          <div className="ase-grid h-64 rounded-3xl border border-white/10" />
        </div>
      </section>

      <section className="bg-ase-white">
        <div className="ase-container grid gap-6 py-20">
          {projects.map((project) => (
            <div key={project.name} className="ase-card">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <p className="text-sm text-ase-muted">
                  {project.description}
                </p>
              </div>
              <div className="grid gap-2 text-sm text-ase-muted">
                <p>
                  <span className="font-semibold text-ase-black">
                    Engineering Challenge:
                  </span>{" "}
                  {project.challenge}
                </p>
                <p>
                  <span className="font-semibold text-ase-black">
                    Engineering Solution:
                  </span>{" "}
                  {project.solution}
                </p>
                <p>
                  <span className="font-semibold text-ase-black">
                    Implementation Approach:
                  </span>{" "}
                  {project.approach}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
