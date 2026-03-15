import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Technical insights and engineering knowledge from the ASE platform.",
};

const insights = [
  {
    title: "Structural Efficiency as Infrastructure Strategy",
    topic: "Engineering Insight",
    summary:
      "How system-level design choices reduce material usage and elevate long-term performance.",
  },
  {
    title: "Post-tensioning Systems for Complex Spans",
    topic: "Technical Brief",
    summary:
      "Design principles, implementation guidance, and lifecycle considerations.",
  },
  {
    title: "Infrastructure Material Optimization",
    topic: "Research Note",
    summary:
      "Engineering methods that balance durability, cost, and sustainability.",
  },
  {
    title: "Future Infrastructure Systems",
    topic: "Perspective",
    summary:
      "Emerging trends in modular systems, data-driven design, and delivery automation.",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="bg-ase-black text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Insights
            </span>
            <h1 className="text-4xl font-semibold">
              Technical articles and engineering intelligence.
            </h1>
            <p className="text-sm text-ase-gray">
              ASE publishes technical insights to share engineering methods,
              system performance data, and infrastructure knowledge with the
              broader ecosystem.
            </p>
          </div>
          <div className="ase-grid h-64 rounded-3xl border border-white/10" />
        </div>
      </section>

      <section className="bg-ase-white">
        <div className="ase-container grid gap-6 py-20 md:grid-cols-2">
          {insights.map((insight) => (
            <article key={insight.title} className="ase-card">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                {insight.topic}
              </span>
              <h2 className="text-xl font-semibold">{insight.title}</h2>
              <p className="text-sm text-ase-muted">{insight.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
