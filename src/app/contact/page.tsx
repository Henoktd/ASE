import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { contactEmail, linkedInUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with ASE for infrastructure partnerships, engineering collaboration, and platform inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ase-black text-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
              Contact
            </span>
            <h1 className="text-4xl font-semibold">
              Start a partnership conversation.
            </h1>
            <p className="text-sm text-ase-gray">
              Reach out to discuss infrastructure systems, engineering
              collaboration, and platform partnerships.
            </p>
          </div>
          <div className="ase-grid h-64 rounded-3xl border border-white/10" />
        </div>
      </section>

      <section className="bg-ase-white">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                Contact Email
              </span>
              <a
                href={`mailto:${contactEmail}`}
                className="text-lg font-semibold text-ase-black"
              >
                {contactEmail}
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                LinkedIn
              </span>
              <a
                href={linkedInUrl}
                className="text-sm text-ase-muted"
                target="_blank"
                rel="noreferrer"
              >
                {linkedInUrl}
              </a>
            </div>
            <div className="flex flex-col gap-2 text-sm text-ase-muted">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                Location
              </span>
              <span>Africa · Infrastructure Partnerships</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
