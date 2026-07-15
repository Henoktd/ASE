import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Project Delivery",
  description:
    "ASE systems are delivered through a structured network: EASE Engineering in Ethiopia and strategic implementation partners in other markets, all working to ASE standards.",
  path: "/project-delivery",
});

const deliveryModels = [
  {
    title: "Direct adoption",
    description:
      "Clients with internal delivery capability adopt ASE systems and engineering support directly, and deliver with their own teams.",
  },
  {
    title: "Implementation partners",
    description:
      "Where clients need delivery capacity, ASE identifies and engages a suitable implementation partner working to ASE systems and standards.",
  },
  {
    title: "Consultant specification",
    description:
      "Consultants specify ASE systems into projects they advise, with ASE providing the engineering behind the specification.",
  },
];

const deliveryNetwork = [
  {
    name: "EASE Engineering",
    role: "Implementation partner — Ethiopia",
    description:
      "EASE Engineering delivers projects in Ethiopia using ASE systems, applying ASE engineering and standards on site.",
    href: "https://www.ease-int.com",
  },
  {
    name: "Strategic implementation partners",
    role: "Other African markets",
    description:
      "Expansion into additional countries is delivered through strategic implementation partners under the ASE market development framework — matched to each market rather than duplicated from one model.",
    href: null,
  },
];

const deliveryOutcomes = [
  "One engineering standard from design to erection",
  "Delivery partners qualified and supported by ASE",
  "Feedback from every completed building returned to engineering",
];

export default function ProjectDeliveryPage() {
  return (
    <>
      <PageHeader
        kicker="Project Delivery"
        title="Engineered systems deserve engineered delivery."
        lede="A system only creates value when it is delivered as designed. ASE projects are delivered through a structured network of implementation partners, each working to ASE systems, standards, and engineering supervision."
      />

      <section className="ase-section-light">
        <div className="ase-container py-16 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <span className="ase-kicker text-ase-blue">Delivery Models</span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              Matched to each client and each market.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3" data-anim-group>
            {deliveryModels.map((item) => (
              <article key={item.title} className="ase-card-quiet">
                <h3 className="text-lg font-semibold text-ase-black">
                  {item.title}
                </h3>
                <p className="text-base leading-7 text-ase-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container py-16 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <span className="ase-kicker text-ase-blue">Delivery Network</span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              Who delivers ASE systems today.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2" data-anim-group>
            {deliveryNetwork.map((item) => (
              <article key={item.name} className="ase-card-quiet">
                <span className="text-xs uppercase tracking-[0.3em] text-ase-blue">
                  {item.role}
                </span>
                <h3 className="text-xl font-semibold text-ase-black">
                  {item.name}
                </h3>
                <p className="text-base leading-7 text-ase-muted">
                  {item.description}
                </p>
                {item.href ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm uppercase tracking-[0.28em] text-ase-blue"
                  >
                    Visit EASE
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container grid gap-10 py-16 lg:grid-cols-[1fr_1.1fr] lg:py-20">
          <div className="flex flex-col gap-4">
            <span className="ase-kicker text-ase-blue">Outcome</span>
            <h2 className="ase-section-title text-ase-black">
              The system arrives on site the way it left the drawing.
            </h2>
            <p className="ase-body-lg text-ase-muted">
              Because engineering, manufacturing, and delivery operate under
              one set of standards, clients get the performance the system was
              engineered to provide — on schedule and with verified quality.
            </p>
          </div>
          <div className="grid gap-4" data-anim-group>
            {deliveryOutcomes.map((item) => (
              <div key={item} className="ase-card-quiet">
                <p className="text-base leading-7 text-ase-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container flex flex-col gap-6 py-16 text-center lg:py-20" data-anim-group>
          <span className="ase-kicker text-ase-blue">Next Step</span>
          <h2 className="ase-section-title text-ase-black">
            Discuss the right delivery model for your project.
          </h2>
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
