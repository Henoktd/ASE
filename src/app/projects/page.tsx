import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects",
  description: "Performance in real conditions.",
};

const performanceCards = [
  {
    title: "Large-Span Structures",
    description: "Applications that validate span performance under real structural demands.",
    icon: "span",
  },
  {
    title: "Structural Efficiency",
    description: "Measured against material use, constructability, and system response.",
    icon: "efficiency",
  },
  {
    title: "Commercial Developments",
    description: "Systems adapted to evolving urban environments and delivery constraints.",
    icon: "systems",
  },
  {
    title: "Delivery Speed",
    description: "Aligned with construction sequencing and time-critical execution realities.",
    icon: "delivery",
  },
  {
    title: "Infrastructure Projects",
    description: "Performance tested in complex logistical and technical conditions.",
    icon: "alignment",
  },
  {
    title: "Constructability",
    description: "Engineering assessed through practical buildability and field feedback.",
    icon: "advisory",
  },
];

const projects = [
  {
    title: "Meskel Flower Bridge",
    description: "Bridge structure and connection detailing under live infrastructure conditions.",
    image:
      "/media/Profile%20images/Profile%20images/Meskel%20flower%20bridge.png",
  },
  {
    title: "Omo Bridge",
    description: "Heavy infrastructure application showing structural performance in execution.",
    image: "/media/Profile%20images/Profile%20images/Omo%20bridge.png",
  },
  {
    title: "Wabi Shebelle Bridge",
    description: "Long-span bridge construction conditions aligned with system-led engineering.",
    image:
      "/media/Profile%20images/Profile%20images/Wabi%20shebelle%20bridge.png",
  },
];

function ProjectIcon({ type }: { type: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-12 w-12 text-ase-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "span" ? (
        <>
          <path d="M10 42h44" />
          <path d="M16 42c5-13 11-20 16-20s11 7 16 20" />
          <path d="M20 18v8" />
          <path d="M44 18v8" />
        </>
      ) : null}
      {type === "efficiency" ? (
        <>
          <circle cx="32" cy="32" r="16" />
          <path d="M32 18v14l10 6" />
          <path d="M14 18l6 6" />
        </>
      ) : null}
      {type === "systems" ? (
        <>
          <rect x="10" y="14" width="16" height="16" rx="2" />
          <rect x="38" y="14" width="16" height="16" rx="2" />
          <rect x="24" y="36" width="16" height="16" rx="2" />
          <path d="M26 22h12" />
          <path d="M32 30v6" />
        </>
      ) : null}
      {type === "delivery" ? (
        <>
          <path d="M10 40h36" />
          <path d="M40 24h10l8 8v8H40z" />
          <circle cx="22" cy="46" r="5" />
          <circle cx="46" cy="46" r="5" />
        </>
      ) : null}
      {type === "alignment" ? (
        <>
          <path d="M14 22h18l10 10" />
          <path d="M50 22H32l-10 10" />
          <path d="M14 42h18l10-10" />
          <path d="M50 42H32l-10-10" />
          <circle cx="32" cy="32" r="5" />
        </>
      ) : null}
      {type === "advisory" ? (
        <>
          <path d="M32 10l18 10v20L32 50 14 40V20z" />
          <path d="M32 10v20" />
          <path d="M50 20 32 30 14 20" />
        </>
      ) : null}
    </svg>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <section className="ase-section-dark ase-section-transition relative overflow-hidden text-ase-white">
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
        <div className="pointer-events-none absolute inset-0 ase-hero-overlay" />
        <div className="ase-container relative z-10 py-24 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Projects
            </span>
            <h1 className="mt-5 text-4xl font-semibold text-ase-white">
              Engineering in Application
            </h1>
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container py-20">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Performance in Real Conditions
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-ase-black">
              Applications and metrics combined in one operating view.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {performanceCards.map((item, index) => (
              <article
                key={item.title}
                className={`ase-card ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
              >
                <div
                  className={`ase-icon-chip ${index % 2 === 0 ? "ase-icon-chip-blue" : "ase-icon-chip-red"}`}
                >
                  <ProjectIcon type={item.icon} />
                </div>
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

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Project Grid
            </span>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={`${project.title}-${index}`} className="ase-card overflow-hidden p-0">
                <div className="aspect-[4/3] overflow-hidden border-b border-ase-border-soft bg-[linear-gradient(180deg,rgba(56,70,157,0.08),rgba(39,39,41,0.04))]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <h3 className="text-lg font-semibold text-ase-black">
                    {project.title}
                  </h3>
                  <p className="text-base leading-7 text-ase-muted">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
