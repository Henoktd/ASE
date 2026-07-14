import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import SystemIcon from "@/components/SystemIcon";
import { createMetadata } from "@/lib/seo";
import { buildingSystems, getSystem } from "@/lib/systems";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return buildingSystems.map((system) => ({ slug: system.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const system = getSystem(slug);
  if (!system) return {};

  return createMetadata({
    title: system.name,
    description: system.short,
    path: `/solutions/${system.slug}`,
  });
}

export default async function SystemDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const system = getSystem(slug);
  if (!system) notFound();

  const others = buildingSystems.filter((s) => s.slug !== system.slug);

  return (
    <>
      <PageHeader
        kicker="ASE Building Systems"
        title={system.name}
        lede={system.short}
      />

      <section className="ase-section-light">
        <div className="ase-container grid gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <div className="ase-card-quiet">
            <span className="ase-kicker text-ase-red">The Challenge</span>
            <p className="ase-body-lg text-ase-black">{system.problem}</p>
          </div>
          <div className="ase-card-quiet">
            <span className="ase-kicker text-ase-blue">How ASE Engineers It</span>
            <p className="ase-body-lg text-ase-black">{system.engineering}</p>
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container grid gap-12 py-16 lg:grid-cols-[1fr_1fr] lg:py-20">
          <div>
            <span className="ase-kicker text-ase-blue">The System</span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              What it includes
            </h2>
            <ul className="mt-8 grid gap-3">
              {system.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base leading-7 text-ase-black"
                >
                  <span
                    className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-ase-blue"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="ase-kicker text-ase-blue">The Outcome</span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              What it delivers
            </h2>
            <div className="mt-8 grid gap-4">
              {system.outcomes.map((item) => (
                <div key={item} className="ase-card-quiet">
                  <p className="text-base leading-7 text-ase-black">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container flex flex-col gap-6 py-16 text-center lg:py-20">
          <span className="ase-kicker text-ase-blue">Evidence</span>
          <h2 className="ase-section-title text-ase-black">
            See where ASE systems are applied.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/projects" className="ase-btn ase-btn-primary">
              Explore Projects
            </Link>
            <Link href="/engage" className="ase-btn ase-btn-ghost">
              Discuss This System
            </Link>
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container py-14">
          <p className="ase-kicker mb-6 text-ase-gray">
            More ASE Building Systems
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.slice(0, 4).map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="ase-card-quiet ase-card-link"
              >
                <span className="ase-system-icon">
                  <SystemIcon type={s.icon} />
                </span>
                <p className="text-base font-semibold text-ase-black">
                  {s.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
