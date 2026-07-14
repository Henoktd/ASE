import Image from "next/image";

const steps = [
  "Research",
  "Engineering",
  "System Development",
  "Digital Engineering",
  "Manufacturing",
  "Project Delivery",
  "Operational Building",
  "Knowledge Feedback",
  "Continuous Improvement",
];

export default function CycleDiagram() {
  const radius = 39;

  return (
    <div>
      <div className="ase-cycle hidden md:block">
        <div className="ase-cycle-ring" aria-hidden="true" />
        <div className="ase-cycle-center">
          <Image
            src="/Brand/01%20Logo/Full%20Color/fullcolor-SYMBOL.png"
            alt=""
            width={64}
            height={64}
            className="h-12 w-auto"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ase-black">
            ASE Building
            <br />
            Systems
          </p>
        </div>
        {steps.map((step, index) => {
          const angle = (-90 + index * (360 / steps.length)) * (Math.PI / 180);
          const left = 50 + radius * Math.cos(angle);
          const top = 50 + radius * Math.sin(angle);
          const isLoop = index === steps.length - 1;

          return (
            <span
              key={step}
              className={`ase-cycle-node ${isLoop ? "ase-cycle-node-loop" : ""}`}
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              {step}
            </span>
          );
        })}
      </div>

      <ol className="ase-cycle-list md:hidden" aria-label="ASE engineering cycle">
        {steps.map((step) => (
          <li key={step} className="ase-cycle-list-item">
            {step}
          </li>
        ))}
      </ol>

      <p className="mt-6 text-center text-sm leading-6 text-ase-muted">
        Knowledge from every operational building returns to research — the
        cycle closes, and the systems get stronger.
      </p>
    </div>
  );
}
