import Image from "next/image";
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
    <footer className="ase-section-dark ase-section-transition text-ase-white">
      <div className="ase-container grid gap-8 py-12 lg:grid-cols-[1fr_0.9fr]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <Image
              src="/Brand/01%20Logo/SVG/White/white-HORIZONTAL.svg"
              alt="ASE"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <span className="text-sm uppercase tracking-[0.28em] text-ase-gray">
            {site.fullName}
          </span>
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
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs uppercase tracking-[0.3em] text-ase-gray">
        (c) {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
