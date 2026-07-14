import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Engineering",
  description:
    "ASE is an engineering company that develops systems. Structural engineering, value engineering, constructability review, optimization, peer review, and digital engineering underpin every ASE Building System.",
  path: "/engineering",
});

const ecosystemCycle = [
  "Research",
  "Engineering",
  "System Development",
  "Digital Engineering",
  "Manufacturing",
  "Project Delivery",
  "Operational Building",
  "Knowledge Feedback",
  "Continuous Improvement",
];

const engineeringServices = [
  {
    title: "Structural Engineering",
    description:
      "Design of the load paths, stability, and behavior of every ASE system, from component to complete structure.",
  },
  {
    title: "Value Engineering",
    description:
      "Engineering the same outcome for less — material, time, and cost — before a design is committed to site.",
  },
  {
    title: "Constructability Review",
    description:
      "Testing every design against how it will actually be built, manufactured, transported, and erected.",
  },
  {
    title: "Optimization",
    description:
      "Balancing performance, cost, and constructability within defined parameters across the whole structure.",
  },
  {
    title: "Peer Review",
    description:
      "Structured internal challenge of engineering decisions before they reach a client or a site.",
  },
  {
    title: "Independent Design Review",
    description:
      "Independent verification of third-party designs against performance, safety, and efficiency criteria.",
  },
];

const digitalEngineering = [
  {
    title: "BIM",
    description:
      "Building information models carry every system from design through manufacturing to delivery.",
  },
  {
    title: "Digital Twins",
    description:
      "Digital counterparts of delivered structures that support operation and feed knowledge back into research.",
  },
  {
    title: "Parametric Design",
    description:
      "Engineering logic encoded as parameters, so systems adapt to each project without redesign from zero.",
  },
  {
    title: "Automation",
    description:
      "Automated design, checking, and documentation that keep quality consistent as volume grows.",
  },
  {
    title: "Digital Libraries",
    description:
      "Standardized components, details, and specifications reused across every project and partner.",
  },
];

export default function EngineeringPage() {
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
              Engineering
            </span>
            <h1 className="ase-page-title mt-5 text-ase-white">
              ASE is an engineering company that develops systems.
            </h1>
            <p className="ase-body-lg mt-5 max-w-3xl text-white/82">
              Engineering is not a service alongside the systems — it is what
              defines them. ASE owns the engineering, structural design
              methodologies, standards, and intellectual property behind every
              ASE Building System.
            </p>
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container py-20">
          <div className="mb-12 max-w-3xl">
            <span className="ase-kicker text-ase-gray">
              The Engineering Cycle
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              Every system moves through the same cycle — and every completed
              building strengthens it.
            </h2>
            <p className="ase-body-lg mt-4 text-ase-muted">
              Feedback from completed, operational buildings is captured and
              returned to research and engineering, so each project strengthens
              the systems used in the next.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {ecosystemCycle.map((step, index) => (
              <div
                key={step}
                className={`ase-card ase-flow-card text-center ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                  0{index + 1}
                </span>
                <p className="text-base font-semibold leading-7 text-ase-black">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="mb-10 max-w-3xl">
            <span className="ase-kicker text-ase-gray">
              Engineering Services
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              The disciplines that underpin every system.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {engineeringServices.map((service, index) => (
              <article
                key={service.title}
                className={`ase-card ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
              >
                <h3 className="text-lg font-semibold text-ase-black">
                  {service.title}
                </h3>
                <p className="text-base leading-7 text-ase-muted">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-dark ase-section-transition text-ase-white">
        <div className="ase-container py-20">
          <div className="mb-10 max-w-3xl">
            <span className="ase-kicker text-ase-gray">
              Digital Engineering
            </span>
            <h2 className="ase-section-title">
              A digital backbone under every system.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {digitalEngineering.map((item) => (
              <div key={item.title} className="ase-panel-dark px-6 py-6">
                <h3 className="text-xl font-semibold text-ase-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-white/82">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container flex flex-col gap-6 py-20 text-center">
          <span className="ase-kicker text-ase-gray">
            Next Step
          </span>
          <h2 className="ase-section-title text-ase-black">
            See the systems this engineering produces.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/solutions" className="ase-btn ase-btn-primary">
              ASE Building Systems
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
