import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
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
      <PageHeader
        kicker="Projects"
        title="Evidence, built."
        lede="ASE systems prove themselves in delivered structures. These are the environments where the engineering is applied — and where every completed building feeds knowledge back into the systems used on the next one."
      />

      <section className="ase-section-light">
        <div className="ase-container py-16 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectEnvironments.map((project) => (
              <article key={project.title} className="ase-card-quiet overflow-hidden p-0">
                <div className="aspect-[4/3] overflow-hidden border-b border-ase-border-soft bg-white">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={900}
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
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
        <div className="ase-container flex flex-col gap-6 py-16 text-center lg:py-20">
          <span className="ase-kicker text-ase-blue">Next Step</span>
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
