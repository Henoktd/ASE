import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ASE",
  description:
    "Learn how ASE positions engineering systems, platform strategy, and delivery partners across infrastructure projects.",
};

const positioning = [
  {
    title: "What ASE Is",
    description:
      "ASE is the engineering systems platform focused on building, testing, and deploying structural solutions for infrastructure.",
  },
  {
    title: "Role in Infrastructure Engineering",
    description:
      "ASE connects platform strategy, engineering capability, and delivery execution into one technical ecosystem.",
  },
  {
    title: "ASE Engineering Environment",
    description:
      "A structured environment where engineering systems are researched, validated, and prepared for implementation.",
  },
];

const aboutModules = [
  {
    title: "Our Story",
    description:
      "ASE was formed to formalize engineering systems as a platform, ensuring infrastructure projects benefit from repeatable technical intelligence.",
  },
  {
    title: "Leadership",
    description:
      "Engineering leadership sets system direction, validates performance, and aligns delivery partners to platform goals.",
  },
  {
    title: "Policies and Standards",
    description:
      "Platform governance, technical standards, and delivery protocols define how ASE operates across projects.",
  },
];

const hierarchy = [
  {
    title: "ASE",
    description: "Engineering systems platform defining technical direction.",
  },
  {
    title: "SVH",
    description:
      "Strategic platform developer guiding infrastructure vision and capital alignment.",
  },
  {
    title: "EASE",
    description: "Delivery partner implementing ASE systems in projects.",
  },
];

const initiatives = [
  "System validation programs for long-span infrastructure.",
  "Optimization methods that reduce material usage and carbon impact.",
  "Technical partnership network supporting specialized delivery.",
  "Engineering knowledge publications for the broader ecosystem.",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ase-black text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              About ASE
            </span>
            <h1 className="text-4xl font-semibold">
              Engineering systems anchored in platform strategy.
            </h1>
            <p className="text-sm text-ase-gray">
              ASE establishes a technical backbone for infrastructure, ensuring
              that engineering systems are designed with clarity, scalability,
              and delivery readiness.
            </p>
            <Link href="/platform" className="ase-btn ase-btn-ghost ase-btn-invert">
              Explore the Platform
            </Link>
          </div>
          <div className="ase-grid h-64 rounded-3xl border border-white/10" />
        </div>
      </section>

      <section className="bg-ase-white">
        <div className="ase-container grid gap-8 py-20 md:grid-cols-3">
          {positioning.map((item) => (
            <div key={item.title} className="ase-card">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-ase-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ase-white">
        <div className="ase-container grid gap-8 pb-20 md:grid-cols-3">
          {aboutModules.map((item) => (
            <div key={item.title} className="ase-card">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-ase-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ase-graphite text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Platform Hierarchy
            </span>
            <h2 className="text-3xl font-semibold">
              Clarity across strategy, platform, and delivery.
            </h2>
            <p className="text-sm text-ase-gray">
              ASE operates within a defined hierarchy to maintain strategic
              alignment and delivery accountability across infrastructure
              programs.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-ase-gray">
              <a
                href="https://www.sol-ventures.com"
                className="border border-white/20 px-3 py-2 text-ase-white transition-colors hover:text-ase-gray"
                target="_blank"
                rel="noreferrer"
              >
                SVH Website
              </a>
              <a
                href="https://www.ease-int.com"
                className="border border-white/20 px-3 py-2 text-ase-white transition-colors hover:text-ase-gray"
                target="_blank"
                rel="noreferrer"
              >
                EASE Website
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            {hierarchy.map((item) => (
              <div key={item.title} className="border border-white/15 px-6 py-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-ase-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ase-black text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Future Focus
            </span>
            <h2 className="text-3xl font-semibold">
              Initiatives and partnerships shaping infrastructure systems.
            </h2>
            <p className="text-sm text-ase-gray">
              ASE advances system innovation through targeted initiatives,
              research partnerships, and delivery collaboration across the
              infrastructure ecosystem.
            </p>
            <Link
              href="/platform"
              className="ase-btn ase-btn-ghost ase-btn-invert"
            >
              Platform Initiatives
            </Link>
          </div>
          <div className="grid gap-4">
            {initiatives.map((item) => (
              <div key={item} className="border border-white/15 px-6 py-5">
                <p className="text-sm text-ase-gray">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
