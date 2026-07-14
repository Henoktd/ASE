import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { createMetadata } from "@/lib/seo";
import { contactEmail, locationLabel } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Engage",
  description:
    "Engage with ASE. Bring your project challenge — ASE engineers the system, and the right delivery model, that answers it.",
  path: "/engage",
});

const engageAudience = [
  "Developers",
  "Contractors",
  "Consultants",
  "Industrial clients",
  "Government and institutions",
  "Clients seeking delivery partners",
];

const conversationFrame = [
  {
    question: "What is your project challenge?",
    detail: "Speed, spans, cost certainty, quality, or scale — we start there.",
  },
  {
    question: "Why does it matter?",
    detail:
      "We quantify what the challenge costs your project if it stays unsolved.",
  },
  {
    question: "How does ASE engineer the solution?",
    detail:
      "The right system from the ASE Building Systems catalogue, engineered to your project.",
  },
  {
    question: "What measurable value is created?",
    detail:
      "Outcomes first — schedule, quality, safety, and efficiency — with commercial terms addressed in a project-specific proposal.",
  },
];

export default function EngagePage() {
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
              Engage
            </span>
            <h1 className="ase-page-title mt-5 text-ase-white">
              Bring us the challenge. We bring the engineering.
            </h1>
            <p className="ase-body-lg mt-5 max-w-3xl text-white/82">
              Every engagement starts with your project — what it must achieve
              and what stands in the way. From there, ASE engineers the system
              and the delivery model that answers it.
            </p>
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-4">
            <span className="ase-kicker text-ase-gray">
              Who Engages ASE
            </span>
            <h2 className="ase-section-title text-ase-black">
              Positioned by relationship, not project size.
            </h2>
            <p className="ase-body-lg text-ase-muted">
              Whether you deliver with your own teams or need ASE to engage an
              implementation partner, the engineering and the standards are the
              same.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {engageAudience.map((item, index) => (
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

      <section className="ase-section-light">
        <div className="ase-container py-20">
          <div className="mb-10 max-w-3xl">
            <span className="ase-kicker text-ase-gray">
              How the Conversation Runs
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              Four questions before any technology is discussed.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {conversationFrame.map((item, index) => (
              <article
                key={item.question}
                className={`ase-card ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
              >
                <h3 className="text-lg font-semibold text-ase-black">
                  {item.question}
                </h3>
                <p className="text-base leading-7 text-ase-muted">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <span className="ase-kicker text-ase-gray">
                Engage with ASE
              </span>
              <h2 className="ase-section-title text-ase-black">
                Start with your project challenge.
              </h2>
              <p className="text-base leading-7 text-ase-muted">
                Describe what your project needs to achieve. An ASE engineer —
                not a salesperson — will respond.
              </p>
            </div>
            <div className="ase-card">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                Contact
              </span>
              <span className="text-lg font-semibold text-ase-black">
                {contactEmail}
              </span>
              <span className="text-base leading-7 text-ase-muted">
                {locationLabel}
              </span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
