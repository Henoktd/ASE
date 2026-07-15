"use client";

import { createElement, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SplitTitleProps = {
  as?: "h1" | "h2";
  className?: string;
  children: string;
  delay?: number;
};

/**
 * Masked word-by-word title reveal. Server-renders plain words (SEO and
 * no-JS safe); on mount each word slides up out of its own overflow mask.
 */
export default function SplitTitle({
  as = "h2",
  className,
  children,
  delay = 0,
}: SplitTitleProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const words = el.querySelectorAll<HTMLElement>(".st-inner");
    const tween = gsap.from(words, {
      yPercent: 118,
      duration: 1.05,
      ease: "power4.out",
      stagger: 0.05,
      delay,
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay]);

  return createElement(
    as,
    { ref, className },
    children.split(" ").map((word, index) => (
      <span className="st-word" key={`${word}-${index}`}>
        <span className="st-inner">{word}</span>{" "}
      </span>
    )),
  );
}
