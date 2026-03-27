import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Engineering systems built for real performance.",
};

const capabilities = [
  {
    title: "Structural Systems That Perform Under Load",
    description:
      "Systems designed for structural clarity, constructability, and performance in demanding conditions.",
    icon: "load",
  },
  {
    title: "Engineering Longer Spans with Less Material",
    description:
      "Engineering approaches that extend span potential while reducing structural mass.",
    icon: "span",
  },
  {
    title: "Repeatable Engineering Systems",
    description:
      "Reusable frameworks and methodologies that improve through repeated application.",
    icon: "systems",
  },
  {
    title: "Engineering Input That Reduces Risk Early",
    description:
      "Technical direction that improves feasibility, optimization, and alignment before delivery pressure builds.",
    icon: "advisory",
  },
];

const approach = ["Designed", "Applied", "Tested", "Refined"];

function CapabilityIcon({ type }: { type: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-12 w-12 text-ase-black"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "load" ? (
        <>
          <path d="M12 18h40" />
          <path d="M16 32h32" />
          <path d="M20 46h24" />
          <path d="M14 18v28" />
          <path d="M50 18v28" />
        </>
      ) : null}
      {type === "span" ? (
        <>
          <path d="M10 42h44" />
          <path d="M16 42c5-13 11-20 16-20s11 7 16 20" />
          <path d="M20 18v8" />
          <path d="M44 18v8" />
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

export default function CapabilitiesPage() {
  return (
    <>
      <section className="ase-section-dark relative overflow-hidden text-ase-white">
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
              Capabilities
            </span>
            <h1 className="mt-5 text-4xl font-semibold text-ase-white">
              Engineering Systems Built for Real Performance
            </h1>
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container grid gap-6 py-20 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item) => (
            <article key={item.title} className="ase-card">
              <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl border border-ase-border">
                <CapabilityIcon type={item.icon} />
              </div>
              <h2 className="text-xl font-semibold text-ase-black">
                {item.title}
              </h2>
              <p className="text-base leading-7 text-ase-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="mb-10 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Approach
            </span>
            <h2 className="text-3xl font-semibold text-ase-black">
              Designed → Applied → Tested → Refined
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
            {approach.map((step, index) => (
              <div
                key={step}
                className={index < approach.length - 1 ? "contents" : ""}
              >
                <div className="ase-card text-center">
                  <h3 className="text-xl font-semibold text-ase-black">{step}</h3>
                </div>
                {index < approach.length - 1 ? (
                  <div className="flex items-center justify-center text-2xl text-ase-blue">
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
