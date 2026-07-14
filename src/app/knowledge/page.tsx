import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Knowledge Centre",
  description:
    "The ASE Knowledge Centre educates the market on construction challenges before presenting engineered systems as the solution.",
  path: "/knowledge",
});

const articles = [
  {
    topic: "Engineering Insight",
    title: "Structural Efficiency as Infrastructure Strategy",
    challenge:
      "Material cost and carbon now decide project viability as much as structural capacity does.",
    summary:
      "How system-level design choices reduce material usage and elevate long-term performance.",
  },
  {
    topic: "Technical Brief",
    title: "Post-Tensioning Systems for Complex Spans",
    challenge:
      "Long spans built conventionally demand deep sections, heavy foundations, and slow cycles.",
    summary:
      "Design principles, implementation guidance, and lifecycle considerations for post-tensioned structures.",
  },
  {
    topic: "Research Note",
    title: "Infrastructure Material Optimization",
    challenge:
      "Durability, cost, and sustainability pull designs in different directions.",
    summary:
      "Engineering methods that balance all three within one optimization framework.",
  },
  {
    topic: "Perspective",
    title: "Future Infrastructure Systems",
    challenge:
      "Construction demand is growing faster than conventional delivery can scale.",
    summary:
      "Emerging trends in modular systems, data-driven design, and delivery automation.",
  },
];

export default function KnowledgePage() {
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
              Knowledge Centre
            </span>
            <h1 className="ase-page-title mt-5 text-ase-white">
              Understand the challenge before the system.
            </h1>
            <p className="ase-body-lg mt-5 max-w-3xl text-white/82">
              ASE publishes engineering knowledge to help the market understand
              construction challenges — and only then presents the systems that
              solve them.
            </p>
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container grid gap-6 py-20 md:grid-cols-2">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className={`ase-card ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                {article.topic}
              </span>
              <h2 className="text-xl font-semibold text-ase-black">
                {article.title}
              </h2>
              <p className="text-sm font-medium leading-6 text-ase-black">
                The challenge: {article.challenge}
              </p>
              <p className="text-base leading-7 text-ase-muted">
                {article.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container flex flex-col gap-6 py-20 text-center">
          <span className="ase-kicker text-ase-gray">
            Next Step
          </span>
          <h2 className="ase-section-title text-ase-black">
            Facing one of these challenges on a live project?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/solutions" className="ase-btn ase-btn-primary">
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
