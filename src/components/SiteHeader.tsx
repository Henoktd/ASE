"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-[rgba(245,245,245,0.82)] text-ase-black backdrop-blur-2xl">
      <div className="ase-container flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/Brand/01%20Logo/Full%20Color/fullcolor-HORIZONTAL.png"
            alt="ASE"
            width={220}
            height={54}
            className="h-11 w-auto lg:h-12"
            priority
          />
          <span className="sr-only">{site.fullName}</span>
        </Link>

        <nav className="hidden items-center rounded-full border border-white/60 bg-white/72 p-2 shadow-[0_20px_40px_-30px_rgba(39,39,41,0.32)] lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`ase-nav-link ${pathname === link.href ? "ase-nav-link-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="ase-container pb-4 lg:hidden">
        <nav className="ase-mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`ase-mobile-nav-link ${pathname === link.href ? "ase-mobile-nav-link-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
