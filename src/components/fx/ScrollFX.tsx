"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide animation engine, driven by data attributes so pages stay
 * server-rendered:
 *
 *   data-anim            fade-up reveal on scroll (data-delay="0.15" optional)
 *   data-anim-group      staggered fade-up of the element's children
 *   data-parallax="-14"  scrubbed vertical drift (yPercent) while in view
 *   data-counter="8"     count from 0 to N when scrolled into view
 *   data-hscroll         pinned section whose [data-hscroll-track] pans
 *                        horizontally with scroll (desktop only)
 *
 * Everything is gated behind prefers-reduced-motion and reverted cleanly
 * on route changes.
 */
export default function ScrollFX() {
  const pathname = usePathname();

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>("[data-anim]").forEach((el) => {
        gsap.from(el, {
          y: 44,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          delay: Number(el.dataset.delay || 0),
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-anim-group]").forEach((group) => {
        gsap.from(group.children, {
          y: 36,
          autoAlpha: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: group, start: "top 87%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.to(el, {
          yPercent: Number(el.dataset.parallax || -12),
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement ?? el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
        const target = Number(el.dataset.counter || 0);
        const state = { value: 0 };
        gsap.to(state, {
          value: target,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = String(Math.round(state.value));
          },
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        });
      });

      const header = document.querySelector<HTMLElement>("header");
      if (header) {
        ScrollTrigger.create({
          start: "top top",
          end: "max",
          onUpdate: (self) => {
            const hide = self.direction === 1 && self.scroll() > 160;
            gsap.to(header, {
              yPercent: hide ? -110 : 0,
              duration: 0.4,
              ease: "power2.out",
              overwrite: "auto",
            });
          },
        });
      }
    });

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.utils.toArray<HTMLElement>("[data-hscroll]").forEach((section) => {
          const track = section.querySelector<HTMLElement>(
            "[data-hscroll-track]",
          );
          if (!track) return;
          const distance = () => track.scrollWidth - section.clientWidth;
          gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => "+=" + distance(),
              scrub: 1,
              pin: true,
              pinType: "fixed",
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
        });

        const cleanups: (() => void)[] = [];
        document.querySelectorAll<HTMLElement>(".ase-btn").forEach((btn) => {
          const onMove = (event: MouseEvent) => {
            const rect = btn.getBoundingClientRect();
            const x = event.clientX - (rect.left + rect.width / 2);
            const y = event.clientY - (rect.top + rect.height / 2);
            gsap.to(btn, {
              x: x * 0.26,
              y: y * 0.26,
              duration: 0.4,
              ease: "power3.out",
            });
          };
          const onLeave = () =>
            gsap.to(btn, {
              x: 0,
              y: 0,
              duration: 0.7,
              ease: "elastic.out(1, 0.45)",
            });
          btn.addEventListener("mousemove", onMove);
          btn.addEventListener("mouseleave", onLeave);
          cleanups.push(() => {
            btn.removeEventListener("mousemove", onMove);
            btn.removeEventListener("mouseleave", onLeave);
          });
        });
        return () => cleanups.forEach((fn) => fn());
      },
    );

    const settle = setTimeout(() => ScrollTrigger.refresh(), 400);

    return () => {
      clearTimeout(settle);
      mm.revert();
    };
  }, [pathname]);

  return null;
}
