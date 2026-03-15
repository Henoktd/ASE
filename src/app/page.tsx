import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description:
    "ASE establishes an engineering systems platform that advances infrastructure design, optimization, and delivery.",
};

const heroFeatures = [
  {
    label: "Featured Project",
    title: "Metropolitan Transit Hub",
    summary:
      "Long-span concourse engineered with post-tensioned systems for rapid delivery.",
    href: "/projects",
  },
  {
    label: "Platform Initiative",
    title: "Structural Optimization Program",
    summary:
      "Performance-led methodology reducing material usage across infrastructure assets.",
    href: "/platform",
  },
  {
    label: "Engineering Insight",
    title: "Structural Efficiency as Strategy",
    summary:
      "How system-level design choices unlock resilience and adaptability.",
    href: "/insights",
  },
];

const narrative = [
  {
    title: "We are the engineering systems platform.",
    description:
      "ASE consolidates engineering intelligence into repeatable systems that accelerate infrastructure performance.",
    href: "/platform",
    linkLabel: "Platform Model",
  },
  {
    title: "We have the engineering environment.",
    description:
      "A collaborative ecosystem where systems are researched, tested, and prepared for delivery.",
    href: "/engineering-environment",
    linkLabel: "Engineering Environment",
  },
  {
    title: "We enable delivery partners.",
    description:
      "EASE implements ASE systems on live projects with clear governance, standards, and execution support.",
    href: "/projects",
    linkLabel: "Project Delivery",
  },
];

const platformStages = [
  {
    title: "System Development",
    description:
      "Define infrastructure challenges, build system frameworks, and validate performance.",
  },
  {
    title: "Validation and Testing",
    description:
      "Simulation, peer review, and prototyping ensure systems are delivery-ready.",
  },
  {
    title: "Delivery Enablement",
    description:
      "Implementation planning aligned with project partners and build sequencing.",
  },
  {
    title: "Knowledge Transfer",
    description:
      "Insights, documentation, and training embedded into every deployment.",
  },
];

const alliances = [
  {
    name: "EASE",
    role: "Delivery Partner",
    description:
      "Implements ASE engineering systems in live infrastructure projects with field-tested execution.",
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

const projectHighlights = [
  {
    name: "Regional Logistics Gateway",
    location: "Trade Infrastructure",
    focus: "Large-span systems for adaptable layouts.",
  },
  {
    name: "Coastal Infrastructure Corridor",
    location: "Resilience Program",
    focus: "Optimized precast systems and durability planning.",
  },
  {
    name: "Metropolitan Transit Hub",
    location: "Urban Mobility",
    focus: "Post-tensioned structural systems for speed and capacity.",
  },
];

const cultureFocus = [
  {
    title: "Multi-disciplinary collaboration",
    description:
      "Engineers, analysts, and delivery teams working under a shared system model.",
  },
  {
    title: "Validation and performance testing",
    description:
      "Simulation, peer review, and testing embedded into system development.",
  },
  {
    title: "Delivery readiness",
    description:
      "Implementation planning is built into every system to ensure deployment.",
  },
];

const perspectiveHighlights = [
  {
    title: "Post-tensioning Systems in High-Performance Builds",
    label: "Technical Brief",
  },
  {
    title: "Material Optimization for Future Infrastructure",
    label: "Research Note",
  },
  {
    title: "Infrastructure Systems for Rapid Delivery",
    label: "Perspective",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-ase-black text-ase-white">
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
        <div className="pointer-events-none absolute -top-24 right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
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
              Engineering systems that scale infrastructure delivery.
            </h1>
            <p
              className="ase-fade-up max-w-2xl text-lg text-ase-gray"
              style={{ animationDelay: "300ms" }}
            >
              ASE is the engineering systems platform advancing infrastructure
              performance, delivery readiness, and technical governance. SVH
              leads platform strategy. EASE implements ASE systems on projects.
            </p>
            <div
              className="ase-fade-up flex flex-wrap gap-4"
              style={{ animationDelay: "400ms" }}
            >
              <Link href="/platform" className="ase-btn ase-btn-primary">
                Explore Platform
              </Link>
              <Link
                href="/contact"
                className="ase-btn ase-btn-ghost ase-btn-invert"
              >
                Contact
              </Link>
            </div>
          </div>
          <div
            className="ase-fade-up grid gap-4"
            style={{ animationDelay: "450ms" }}
          >
            <div className="ase-rotator ase-grid rounded-3xl border border-white/10 bg-white/5 p-6">
              <img
                src="/Brand/01%20Logo/SVG/White/white-SYMBOL.svg"
                alt="ASE symbol"
                loading="lazy"
              />
              <img
                src="/Brand/01%20Logo/SVG/White/white-VERTICAL.svg"
                alt="ASE vertical mark"
                loading="lazy"
              />
              <img
                src="/Brand/01%20Logo/SVG/White/white-HORIZONTAL.svg"
                alt="ASE horizontal mark"
                loading="lazy"
              />
            </div>
            {heroFeatures.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="border border-white/15 bg-white/5 px-6 py-6 transition-colors hover:bg-white/10"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                  {item.label}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ase-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ase-gray">{item.summary}</p>
                <span className="mt-4 inline-flex text-xs uppercase tracking-[0.3em] text-ase-white">
                  View
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="ase-container pb-12">
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-ase-gray">
            <span>Scroll</span>
            <span className="h-px w-20 bg-ase-gray/60" />
          </div>
        </div>
      </section>

      <section className="bg-ase-white">
        <div className="ase-container grid gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Strategic Alliances
            </span>
            <h2 className="text-3xl font-semibold text-ase-black">
              ASE works with EASE and SVH to deliver infrastructure systems.
            </h2>
            <p className="text-sm text-ase-muted">
              The ASE platform operates with a clear hierarchy and partnership
              model: SVH defines strategy, ASE develops systems, and EASE
              executes delivery.
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
                <h3 className="text-xl font-semibold">{partner.name}</h3>
                <p className="text-sm text-ase-muted">{partner.description}</p>
                <span className="text-xs uppercase tracking-[0.3em] text-ase-black">
                  Visit Website
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ase-white">
        <div className="ase-container grid gap-8 pb-20 lg:grid-cols-3">
          {narrative.map((item) => (
            <div key={item.title} className="ase-card">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-ase-muted">{item.description}</p>
              <Link
                href={item.href}
                className="text-xs uppercase tracking-[0.3em] text-ase-black"
              >
                {item.linkLabel}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ase-black text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Platform Stages
            </span>
            <h2 className="text-3xl font-semibold">
              A clear path from system development to delivery.
            </h2>
            <p className="text-sm text-ase-gray">
              ASE follows a disciplined progression that ensures engineering
              systems are validated, documented, and ready for live deployment.
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
              <div key={stage.title} className="border border-white/15 px-6 py-5">
                <h3 className="text-lg font-semibold">{stage.title}</h3>
                <p className="text-sm text-ase-gray">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ase-graphite text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Project Highlights
            </span>
            <h2 className="text-3xl font-semibold">
              Engineering systems proven in live infrastructure projects.
            </h2>
            <p className="text-sm text-ase-gray">
              ASE systems are deployed through EASE to deliver structural
              efficiency, faster build cycles, and measurable performance.
            </p>
            <Link
              href="/projects"
              className="ase-btn ase-btn-ghost ase-btn-invert"
            >
              View Projects
            </Link>
          </div>
          <div className="grid gap-4">
            {projectHighlights.map((project) => (
              <div key={project.name} className="border border-white/15 px-6 py-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-ase-gray">
                  <span>{project.location}</span>
                  <span>Featured</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm text-ase-gray">{project.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Engineering Environment
            </span>
            <h2 className="text-3xl font-semibold text-ase-black">
              A culture of collaboration, validation, and delivery readiness.
            </h2>
            <p className="text-sm text-ase-muted">
              ASE engineering teams operate within a structured environment that
              prioritizes technical rigor, system testing, and delivery planning.
            </p>
            <Link
              href="/engineering-environment"
              className="ase-btn ase-btn-ghost"
            >
              Explore Environment
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {cultureFocus.map((item) => (
              <div key={item.title} className="ase-card">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-ase-muted">{item.description}</p>
              </div>
            ))}
            <div className="ase-card ase-grid-dark flex min-h-[160px] flex-col justify-between">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                Engineering Systems
              </span>
              <span className="text-sm text-ase-muted">
                Structured methodologies, tested systems, and performance
                insights drive every ASE engagement.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ase-black text-ase-white">
        <div className="ase-container grid gap-8 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Engineering Insights
            </span>
            <h2 className="text-3xl font-semibold">
              Technical insight from ASE engineering systems.
            </h2>
            <p className="text-sm text-ase-gray">
              Research updates, structural intelligence, and system-specific
              knowledge published to advance infrastructure development.
            </p>
            <Link
              href="/insights"
              className="ase-btn ase-btn-ghost ase-btn-invert"
            >
              Read Insights
            </Link>
          </div>
          <div className="grid gap-4">
            {perspectiveHighlights.map((item) => (
              <div
                key={item.title}
                className="border border-white/15 px-5 py-5"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                  {item.label}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ase-graphite text-ase-white">
        <div className="ase-container flex flex-col gap-6 py-20 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
            Partner with ASE
          </span>
          <h2 className="text-3xl font-semibold">
            Build the next generation of infrastructure systems.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-ase-gray">
            ASE works with infrastructure developers, engineering firms, and
            project owners to deliver systems that unlock efficiency and
            long-term performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="ase-btn ase-btn-primary">
              Start a Conversation
            </Link>
            <Link
              href="/projects"
              className="ase-btn ase-btn-ghost ase-btn-invert"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
