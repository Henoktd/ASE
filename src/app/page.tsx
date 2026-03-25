import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: "Engineering systems for Africa's most demanding structures.",
};

const capabilityHighlights = [
  {
    title: "Structural Engineering & System Design",
    summary:
      "Optimized structural systems designed for performance and constructability.",
  },
  {
    title: "Post-Tensioning & Material Efficiency",
    summary:
      "Systems enabling longer spans and reduced structural mass.",
  },
  {
    title: "Engineering Systems & Standardization",
    summary: "Reusable methodologies and design frameworks.",
  },
  {
    title: "Engineering Advisory",
    summary: "Technical input to shape feasibility and reduce risk.",
  },
];

const platformStages = [
  {
    title: "Systems are designed",
    description: "Structural solutions are defined with system-level logic.",
  },
  {
    title: "Applied in live projects",
    description: "Engineering is taken into active execution environments.",
  },
  {
    title: "Tested under real conditions",
    description: "Performance is observed against practical constraints.",
  },
  {
    title: "Refined through feedback",
    description: "Project learning compounds into stronger future systems.",
  },
];

const alliances = [
  {
    name: "EASE",
    role: "Execution Engine",
    description:
      "Applies systems, delivers projects, generates feedback, and validates performance across East Africa.",
    url: "https://www.ease-int.com",
  },
  {
    name: "SVH",
    role: "Strategic Platform Developer",
    description:
      "Directs platform strategy, investment alignment, and long-term infrastructure positioning.",
    url: "https://www.sol-ventures.com",
  },
];

const applications = [
  {
    name: "Large-Span Structures",
    focus: "Extended spans with reduced material use.",
  },
  {
    name: "Commercial Developments",
    focus: "Flexible structural systems for urban environments.",
  },
  {
    name: "Infrastructure Projects",
    focus: "Solutions for complex logistical conditions.",
  },
];

const valuePoints = [
  "Reduced structural mass without compromising performance",
  "Engineering aligned with accelerated construction timelines",
  "Design grounded in real construction conditions",
  "Each project strengthens future performance",
];

const positioning = [
  "Not a contractor",
  "Not a generic engineering firm",
  "The engineering intelligence system behind a regional execution platform",
];

export default function Home() {
  return (
    <>
      <section className="ase-section-dark relative overflow-hidden text-ase-white">
        <div className="pointer-events-none absolute inset-0 ase-hero-media">
          <video
            className="ase-hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          >
            <source src="/media/ase-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="pointer-events-none absolute inset-0 ase-hero-overlay ase-grid opacity-40" />
        <div className="ase-container relative z-10 grid gap-12 py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-8">
            <div
              className="ase-fade-up text-xs uppercase tracking-[0.4em] text-ase-gray"
              style={{ animationDelay: "100ms" }}
            >
              {site.tagline}
            </div>
            <h1
              className="ase-fade-up font-display text-4xl sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "200ms" }}
            >
              Engineering Systems for Africa&apos;s Most Demanding Structures
            </h1>
            <p
              className="ase-fade-up max-w-2xl text-lg text-ase-gray"
              style={{ animationDelay: "300ms" }}
            >
              ASE develops structural systems that enable projects to span
              farther, build faster, and use less material, engineered for
              real-world constraints.
            </p>
            <div
              className="ase-fade-up flex flex-wrap gap-4"
              style={{ animationDelay: "400ms" }}
            >
              <Link href="/capabilities" className="ase-btn ase-btn-primary">
                Explore Capabilities
              </Link>
              <Link
                href="/projects"
                className="ase-btn ase-btn-ghost ase-btn-invert"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div
            className="ase-fade-up grid gap-4"
            style={{ animationDelay: "450ms" }}
          >
            <div className="ase-rotator ase-panel-dark ase-grid p-6">
              <Image
                src="/Brand/01%20Logo/SVG/White/white-SYMBOL.svg"
                alt="ASE symbol"
                width={640}
                height={640}
              />
              <Image
                src="/Brand/01%20Logo/SVG/White/white-VERTICAL.svg"
                alt="ASE vertical mark"
                width={640}
                height={640}
              />
              <Image
                src="/Brand/01%20Logo/SVG/White/white-HORIZONTAL.svg"
                alt="ASE horizontal mark"
                width={640}
                height={640}
              />
            </div>
            {capabilityHighlights.map((item) => (
              <div key={item.title} className="ase-panel-dark px-6 py-6">
                <h2 className="text-lg font-semibold text-ase-white">
                  {item.title}
                </h2>
                <p className="mt-2 text-base leading-7 text-ase-gray">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container grid gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Positioning
            </span>
            <h2 className="text-3xl font-semibold text-ase-black">
              ASE is the engineering intelligence layer of an integrated
              engineering-delivery platform.
            </h2>
            <p className="text-base leading-7 text-ase-muted">
              It defines structural solutions, develops engineering systems, and
              builds a growing body of technical capability continuously refined
              through real project application.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {alliances.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                className="ase-card transition-colors hover:border-ase-black"
                target="_blank"
                rel="noreferrer"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                  {partner.role}
                </div>
                <h3 className="text-xl font-semibold text-ase-black">
                  {partner.name}
                </h3>
                <p className="text-base leading-7 text-ase-muted">{partner.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-dark text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Platform Model
            </span>
            <h2 className="text-3xl font-semibold">
              Engineering is developed and validated through a closed loop.
            </h2>
            <p className="text-base leading-7 text-ase-gray">
              This creates cumulative engineering capability, not isolated
              outputs.
            </p>
            <Link
              href="/platform"
              className="ase-btn ase-btn-ghost ase-btn-invert"
            >
              Explore Platform
            </Link>
          </div>
          <div className="grid gap-4">
            {platformStages.map((stage) => (
              <div key={stage.title} className="ase-panel-dark px-6 py-5">
                <h3 className="text-lg font-semibold">{stage.title}</h3>
                <p className="text-base leading-7 text-ase-gray">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Projects
            </span>
            <h2 className="text-3xl font-semibold text-ase-black">
              Engineering in application.
            </h2>
            <p className="text-base leading-7 text-ase-muted">
              ASE systems are validated through real-world execution
              environments. Projects serve as testing grounds for performance,
              efficiency, and adaptability.
            </p>
            <Link href="/projects" className="ase-btn ase-btn-ghost">
              View Projects
            </Link>
          </div>
          <div className="grid gap-4">
            {applications.map((project) => (
              <div key={project.name} className="ase-card">
                <span className="text-xs uppercase tracking-[0.3em] text-ase-red">
                  Application
                </span>
                <h3 className="text-lg font-semibold text-ase-black">
                  {project.name}
                </h3>
                <p className="text-base leading-7 text-ase-muted">{project.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Value Proposition
            </span>
            <h2 className="text-3xl font-semibold text-ase-black">
              Structural engineering that compounds in value over time.
            </h2>
            <p className="text-base leading-7 text-ase-muted">
              Material efficiency, faster delivery, execution alignment, and
              cumulative capability define the ASE model.
            </p>
            <Link href="/about" className="ase-btn ase-btn-ghost">
              Learn About ASE
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {valuePoints.map((item) => (
              <div key={item} className="ase-card">
                <h3 className="text-lg font-semibold text-ase-black">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-graphite text-ase-white">
        <div className="ase-container grid gap-8 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Closing
            </span>
            <h2 className="text-3xl font-semibold">
              Engineering that improves with every application.
            </h2>
            <p className="text-base leading-7 text-ase-gray">
              ASE is building a system-based engineering platform behind
              regional execution, not a generic consultancy or contractor
              model.
            </p>
            <Link
              href="/contact"
              className="ase-btn ase-btn-ghost ase-btn-invert"
            >
              Engage with ASE
            </Link>
          </div>
          <div className="grid gap-4">
            {positioning.map((item) => (
              <div key={item} className="ase-panel-dark px-5 py-5">
                <span className="text-xs uppercase tracking-[0.3em] text-ase-red">
                  Positioning
                </span>
                <h3 className="mt-3 text-lg font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-dark text-ase-white">
        <div className="ase-container flex flex-col gap-6 py-20 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
            Engage
          </span>
          <h2 className="text-3xl font-semibold">
            Bring ASE in at feasibility, design, or optimization stage.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-ase-gray">
            ASE supports developers, contractors, and infrastructure
            stakeholders in solving structurally complex challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="ase-btn ase-btn-primary">
              Engage with ASE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
