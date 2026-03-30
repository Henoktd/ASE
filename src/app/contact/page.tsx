import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import {
  contactEmail,
  contactPhone,
  linkedInUrl,
  locationLabel,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Engage with ASE on structurally complex challenges.",
};

export default function ContactPage() {
  return (
    <>
      <section className="ase-section-dark ase-section-transition text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Contact
            </span>
            <h1 className="text-4xl font-semibold">Engage with ASE</h1>
            <p className="text-base leading-7 text-ase-gray">
              ASE supports developers, contractors, and infrastructure
              stakeholders in solving structurally complex challenges.
            </p>
          </div>
          <div className="ase-grid h-64 rounded-3xl border border-white/10" />
        </div>
      </section>

      <section className="bg-ase-paper">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                Contact Email
              </span>
              <span className="text-lg font-semibold text-ase-black">
                {contactEmail}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                Phone
              </span>
              <span className="text-base leading-7 text-ase-muted">{contactPhone}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                LinkedIn
              </span>
              <a
                href={linkedInUrl}
                className="text-base leading-7 text-ase-muted"
                target="_blank"
                rel="noreferrer"
              >
                {linkedInUrl}
              </a>
            </div>
            <div className="flex flex-col gap-2 text-base leading-7 text-ase-muted">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                Location
              </span>
              <span>{locationLabel}</span>
            </div>
            <div className="flex flex-col gap-2 text-base leading-7 text-ase-muted">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                Engagement Model
              </span>
              <span>
                Engagement can begin at feasibility, design, or optimization
                stage and may involve coordination with execution teams
                depending on project scope.
              </span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
