"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navGroups, navLinks, site } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();

  const isGroupActive = (group: (typeof navGroups)[number]) => {
    if (group.href) {
      return pathname === group.href || pathname.startsWith(`${group.href}/`);
    }
    return group.items?.some(
      (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
    );
  };

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
          {navGroups.map((group) =>
            group.href ? (
              <Link
                key={group.label}
                href={group.href}
                className={`ase-nav-link ${isGroupActive(group) ? "ase-nav-link-active" : ""}`}
              >
                {group.label}
              </Link>
            ) : (
              <div key={group.label} className="ase-nav-group">
                <button
                  type="button"
                  className={`ase-nav-link ${isGroupActive(group) ? "ase-nav-link-active" : ""}`}
                  aria-haspopup="true"
                >
                  {group.label}
                  <svg
                    viewBox="0 0 12 12"
                    className="ml-1.5 h-2.5 w-2.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="m2.5 4.5 3.5 3 3.5-3" />
                  </svg>
                </button>
                <div className="ase-nav-dropdown">
                  {group.items?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`ase-nav-dropdown-link ${
                        pathname === item.href ||
                        pathname.startsWith(`${item.href}/`)
                          ? "ase-nav-dropdown-link-active"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ),
          )}
          <Link href="/engage" className="ase-btn ase-btn-primary ml-2 !px-5 !py-2.5">
            Engage
          </Link>
        </nav>
      </div>
      <div className="ase-container pb-4 lg:hidden">
        <nav className="ase-mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`ase-mobile-nav-link ${
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "ase-mobile-nav-link-active"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
