"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

/**
 * Mounts the Three.js lattice only on desktop-class, motion-friendly
 * devices; everyone else keeps the CSS gradient / poster background.
 */
export default function HeroScene() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 768px)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cores = navigator.hardwareConcurrency ?? 8;
    setEnabled(wide && !calm && cores >= 4);
  }, []);

  if (!enabled) return null;

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Hero3D />
    </div>
  );
}
