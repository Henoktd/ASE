import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { createMetadata } from "@/lib/seo";
import {
  contactEmail,
  locationLabel,
} from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Engage",
  description:
    "Engage with ASE to apply structured engineering systems within project environments and delivery workflows.",
  path: "/engage",
});

const engageAudience = [
  "Developers",
  "Contractors",
  "Infrastructure stakeholders",
  "Engineering teams",
];

const engageModel = [
  "Access to engineering systems",
  "Structured guidance frameworks",
  "Integration into project workflows",
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
              Engage with ASE at the system level.
            </h1>
            <p className="ase-body-lg mt-5 max-w-3xl text-white/82">
              ASE enables structured, consistent engineering within project
              environments by providing the system layer that guides
              application, alignment, and improvement.
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
              Engagement begins where structured engineering capability is needed.
            </h2>
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
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col gap-4">
            <span className="ase-kicker text-ase-gray">
              How Engagement Works
            </span>
            <h2 className="ase-section-title text-ase-black">
              Engagement starts with the system layer.
            </h2>
            <p className="ase-body-lg text-ase-muted">
              ASE provides access to engineering systems, structured guidance
              frameworks, and support for integrating them into project
              workflows.
            </p>
            <div className="grid gap-4 pt-2">
              {engageModel.map((item, index) => (
                <div
                  key={item}
                  className={`ase-card ${index % 2 === 0 ? "ase-card-tint-blue" : "ase-card-tint-red"}`}
                >
                  <p className="text-base leading-7 text-ase-black">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <div className="ase-card">
              <span className="text-xs uppercase tracking-[0.3em] text-ase-gray">
                Nature of Engagement
              </span>
              <p className="text-base leading-7 text-ase-muted">
                Engagement with ASE centers on system access, engineering
                frameworks, and structured integration into project workflows,
                alongside the delivery teams applying those systems in
                practice.
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
        </div>
      </section>

      <section className="ase-section-paper">
        <div className="ase-container grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <span className="ase-kicker text-ase-gray">
              Engage with ASE
            </span>
            <h2 className="ase-section-title text-ase-black">
              Apply structured engineering systems within your projects.
            </h2>
            <p className="text-base leading-7 text-ase-muted">
              Use the form to start a system-level conversation around platform
              access, structured frameworks, or engineering integration.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
