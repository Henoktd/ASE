import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description:
    "Project environments where ASE engineering systems are applied — bridges, commercial structures, housing, and infrastructure across demanding conditions.",
  path: "/projects",
});

const projectEnvironments = [
  {
    title: "Long-span bridge crossings",
    context:
      "Crossing conditions where structural continuity, load behavior, and engineering control must stay dependable in demanding terrain.",
    image: "/media/Profile%20images/Profile%20images/Omo%20bridge.png",
  },
  {
    title: "Urban bridge infrastructure",
    context:
      "City crossings where construction speed and traffic disruption decide the delivery approach.",
    image:
      "/media/Profile%20images/Profile%20images/Meskel%20flower%20bridge.png",
  },
  {
    title: "River and regional crossings",
    context:
      "Remote conditions where manufactured components and engineered erection sequences replace slow in-situ work.",
    image:
      "/media/Profile%20images/Profile%20images/Wabi%20shebelle%20bridge.png",
  },
  {
    title: "Commercial and mixed-use structures",
    context:
      "Dense programs where repeatable floor systems align multiple structures, teams, and delivery pressures.",
    image: "/media/Profile%20images/Profile%20images/refenti.png",
  },
  {
    title: "Residential development",
    context:
      "Housing programs where speed and consistent quality determine whether demand is met.",
    image: "/media/Profile%20images/Profile%20images/KD%20real%20estate.png",
  },
  {
    title: "Institutional and civic buildings",
    context:
      "Public structures where durability, safety, and lifecycle performance are the acceptance criteria.",
    image: "/media/Profile%20images/Profile%20images/yeka.webp",
  },
];

export default function ProjectsPage() {
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
              Projects
            </span>
            <h1 className="ase-page-title mt-5 text-ase-white">
              Evidence, built.
            </h1>
            <p className="ase-body-lg mt-5 max-w-3xl text-white/82">
              ASE systems prove themselves in delivered structures. These are
              the environments where the engineering is applied — and where
              every completed building feeds knowledge back into the systems
              used on the next one.
            </p>
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectEnvironments.map((project) => (
              <article key={project.title} className="ase-card overflow-hidden p-0">
                <div className="aspect-[4/3] overflow-hidden border-b border-ase-border-soft bg-white">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <h2 className="text-xl font-semibold text-ase-black">
                    {project.title}
                  </h2>
                  <p className="text-base leading-7 text-ase-muted">
                    {project.context}
                  </p>
                </div>
              </article>
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
            Put the same engineering behind your project.
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
