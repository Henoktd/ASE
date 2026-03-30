import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ase-border bg-[rgba(245,245,245,0.96)] text-ase-black backdrop-blur-xl">
      <div className="ase-container flex items-center justify-between py-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/Brand/01%20Logo/Full%20Color/fullcolor-SYMBOL.png"
            alt="ASE"
            width={68}
            height={68}
            className="h-11 w-auto"
            priority
          />
          <span className="sr-only">{site.fullName}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.28em] text-ase-gray lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ase-black"
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
            className="whitespace-nowrap transition-colors hover:text-ase-black"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
