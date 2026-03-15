import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ase-black text-ase-white">
      <div className="ase-container flex items-center justify-between py-6">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/Brand/01%20Logo/SVG/White/white-HORIZONTAL.svg"
            alt="ASE"
            width={160}
            height={32}
            className="h-7 w-auto"
            priority
          />
          <span className="sr-only">{site.fullName}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.28em] text-ase-gray lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ase-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <nav className="ase-container flex gap-4 overflow-x-auto pb-5 text-xs uppercase tracking-[0.28em] text-ase-gray lg:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap transition-colors hover:text-ase-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
