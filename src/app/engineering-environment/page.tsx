import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engineering Environment",
  description:
    "The ASE Engineering Environment unites capability areas, collaboration, and advanced structural systems.",
};

const capabilities = [
  {
    title: "Structural Engineering Innovation",
    description:
      "Advanced frameworks for performance, redundancy, and durability in complex builds.",
  },
  {
    title: "Advanced Structural Systems",
    description:
      "System families focused on long spans, modular integration, and constructability.",
  },
  {
    title: "Engineering Optimization Methods",
    description:
      "Analytical and computational techniques that reduce material use and elevate resilience.",
  },
  {
    title: "Infrastructure Design Systems",
    description:
      "Repeatable design approaches that accelerate deployment across project portfolios.",
  },
  {
    title: "Performance Validation",
    description:
      "Testing, modeling, and peer review processes aligned to global standards.",
  },
  {
    title: "Technical Knowledge Exchange",
    description:
      "Insights, workshops, and training that strengthen engineering capability.",
  },
];

export default function EngineeringEnvironmentPage() {
  return (
    <>
      <section className="ase-section-dark text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Engineering Environment
            </span>
            <h1 className="text-4xl font-semibold">
              A collaborative ecosystem for engineering systems.
            </h1>
            <p className="text-sm text-ase-gray">
              The ASE Engineering Environment is where infrastructure systems
              are designed, validated, and refined. It enables cross-disciplinary
              collaboration with a shared focus on performance and delivery.
            </p>
            <Link
              href="/engineering-systems"
              className="ase-btn ase-btn-ghost ase-btn-invert"
            >
              View Engineering Systems
            </Link>
          </div>
          <div className="ase-grid h-64 rounded-3xl border border-white/10" />
        </div>
      </section>

      <section className="bg-ase-white">
        <div className="ase-container grid gap-8 py-20 md:grid-cols-2">
          {capabilities.map((item) => (
            <div key={item.title} className="ase-card">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-ase-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
