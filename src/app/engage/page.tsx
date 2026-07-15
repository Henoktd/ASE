import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
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
      <PageHeader
        kicker="Engage"
        title="Bring us the challenge. We bring the engineering."
        lede="Every engagement starts with your project — what it must achieve and what stands in the way. From there, ASE engineers the system and the delivery model that answers it."
      />

      <section className="ase-section-light">
        <div className="ase-container grid gap-10 py-16 lg:grid-cols-[1fr_1fr] lg:py-20">
          <div className="flex flex-col gap-4">
            <span className="ase-kicker text-ase-blue">Who Engages ASE</span>
            <h2 className="ase-section-title text-ase-black">
              Positioned by relationship, not project size.
            </h2>
            <p className="ase-body-lg text-ase-muted">
              Whether you deliver with your own teams or need ASE to engage an
              implementation partner, the engineering and the standards are the
              same.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2" data-anim-group>
            {engageAudience.map((item) => (
              <div key={item} className="ase-card-quiet">
                <p className="text-base leading-7 text-ase-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container py-16 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <span className="ase-kicker text-ase-blue">
              How the Conversation Runs
            </span>
            <h2 className="ase-section-title mt-4 text-ase-black">
              Four questions before any technology is discussed.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2" data-anim-group>
            {conversationFrame.map((item) => (
              <article key={item.question} className="ase-card-quiet">
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

      <section className="ase-section-light">
        <div className="ase-container grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <span className="ase-kicker text-ase-blue">Engage with ASE</span>
              <h2 className="ase-section-title text-ase-black">
                Start with your project challenge.
              </h2>
              <p className="text-base leading-7 text-ase-muted">
                Describe what your project needs to achieve. An ASE engineer —
                not a salesperson — will respond.
              </p>
            </div>
            <div className="ase-card-quiet">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-blue">
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
