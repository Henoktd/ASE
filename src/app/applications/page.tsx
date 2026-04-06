import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "Where ASE systems are applied across structural environments.",
};

const applicationAreas = [
  {
    title: "Bridge and span environments",
    label: "01",
    description:
      "Long-span and crossing conditions where structural continuity, load behavior, and engineering control must remain dependable across demanding contexts.",
    image:
      "/media/Profile%20images/Profile%20images/Meskel%20flower%20bridge.png",
  },
  {
    title: "Dense urban structural programs",
    label: "02",
    description:
      "Mixed-use and commercial structures where repeatable engineering logic helps align multiple structural systems, teams, and delivery pressures.",
    image: "/media/Profile%20images/Profile%20images/Refenti%20with%20roundabout.png",
  },
  {
    title: "Concrete-intensive development zones",
    label: "03",
    description:
      "Structural applications where concrete systems, execution constraints, and practical buildability demand disciplined engineering frameworks.",
    image: "/media/Profile%20images/Profile%20images/KD%20real%20estate.png",
  },
];

const roleItems = [
  "Guide structural decision-making",
  "Define engineering approaches",
  "Ensure consistency across teams",
];

const learningItems = [
  "Performance data",
  "Identified constraints",
  "Execution feedback",
];

export default function ApplicationsPage() {
  return (
    <>
      <section className="ase-section-dark ase-section-transition relative overflow-hidden text-ase-white">
        <div className="pointer-events-none absolute inset-0 ase-hero-media" />
        <div className="pointer-events-none absolute inset-0 ase-hero-overlay" />
        <div className="ase-container relative z-10 py-24 lg:py-28">
          <div className="max-w-4xl">
            <span className="ase-kicker text-ase-gray">
              Applications
            </span>
            <h1 className="ase-page-title mt-5 text-ase-white">
              Where ASE systems become relevant in practice.
            </h1>
            <p className="ase-body-lg mt-5 max-w-3xl text-white/82">
              ASE systems are applied across structural environments where
              consistency, engineering control, and performance matter most.
              These applications help strengthen the platform through
              disciplined use and feedback.
            </p>
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container py-20">
          <div className="max-w-3xl">
            <span className="ase-kicker text-ase-gray">
              Where ASE Systems Are Applied
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              Structural environments where the platform becomes operationally relevant.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {applicationAreas.map((item) => (
              <article key={item.title} className="ase-card overflow-hidden p-0">
                <div className="aspect-[4/3] overflow-hidden border-b border-ase-border-soft">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                    {item.label}
                  </span>
                  <h3 className="text-xl font-semibold text-ase-black">
                    {item.title}
                  </h3>
                  <p className="text-base leading-7 text-ase-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <span className="ase-kicker text-ase-gray">
              Role in Application
            </span>
            <h2 className="ase-section-title text-ase-black">
              ASE brings system logic, decision structure, and consistency into application.
            </h2>
            <p className="ase-body-lg text-ase-muted">
              Within each application, the platform helps shape engineering
              approaches, align teams around shared logic, and improve future
              system performance through use.
            </p>
          </div>
          <div className="grid gap-4">
            {roleItems.map((item, index) => (
              <div
                key={item}
                className={`ase-card ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
              >
                <p className="text-base leading-7 text-ase-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container py-20">
          <div className="max-w-3xl">
            <span className="ase-kicker text-ase-gray">
              Learning Through Application
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              Each application contributes to system improvement.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
            {learningItems.map((step, index) => (
              <div key={step} className={index < learningItems.length - 1 ? "contents" : ""}>
                <div className="ase-card ase-flow-card text-center">
                  <p className="text-base leading-7 text-ase-black">{step}</p>
                </div>
                {index < learningItems.length - 1 ? (
                  <div className="ase-arrow">
                    <span aria-hidden="true">→</span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
