import Link from "next/link";
import {
  contactEmail,
  contactPhone,
  linkedInUrl,
  locationLabel,
  navLinks,
  site,
} from "@/lib/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="ase-section-dark text-ase-white">
      <div className="ase-container grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="font-display text-lg tracking-[0.4em]">ASE</span>
          </div>
          <span className="text-sm uppercase tracking-[0.28em] text-ase-gray">
            {site.fullName}
          </span>
          <p className="max-w-lg text-base leading-7 text-ase-gray">
            ASE is not a contractor or a generic engineering firm. It is an
            engineering system and platform that builds capability over time.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.3em] text-ase-gray">
            <span>Navigation</span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ase-white transition-colors hover:text-ase-gray"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 text-base leading-7 text-ase-gray">
            <span className="text-xs uppercase tracking-[0.3em]">
              Contact
            </span>
            <span className="text-ase-white">{contactEmail}</span>
            <span className="text-ase-white">{contactPhone}</span>
            <a
              href={linkedInUrl}
              className="text-ase-white transition-colors hover:text-ase-gray"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <span>{locationLabel}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-xs uppercase tracking-[0.3em] text-ase-gray">
        (c) {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
