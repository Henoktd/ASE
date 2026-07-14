export type SystemIconKey =
  | "structural"
  | "foundation"
  | "vertical"
  | "infrastructure"
  | "housing"
  | "post-tensioning"
  | "digital"
  | "services";

export default function SystemIcon({ type }: { type: SystemIconKey }) {
  const common = "h-6 w-6";
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "structural":
      return (
        <svg viewBox="0 0 24 24" {...stroke} className={common} aria-hidden="true">
          <rect x="3" y="9" width="18" height="6" rx="1" />
          <circle cx="7.5" cy="12" r="1.4" />
          <circle cx="12" cy="12" r="1.4" />
          <circle cx="16.5" cy="12" r="1.4" />
        </svg>
      );
    case "foundation":
      return (
        <svg viewBox="0 0 24 24" {...stroke} className={common} aria-hidden="true">
          <path d="M4 10h16" />
          <path d="M7 10v7M12 10v7M17 10v7" />
          <path d="M3 19h18" />
          <path d="M12 4v6M9.5 6.5 12 4l2.5 2.5" />
        </svg>
      );
    case "vertical":
      return (
        <svg viewBox="0 0 24 24" {...stroke} className={common} aria-hidden="true">
          <rect x="6" y="3" width="5" height="18" rx="1" />
          <rect x="14" y="7" width="4" height="14" rx="1" />
          <path d="M3 21h18" />
        </svg>
      );
    case "infrastructure":
      return (
        <svg viewBox="0 0 24 24" {...stroke} className={common} aria-hidden="true">
          <path d="M3 12h18" />
          <path d="M3 12c3 0 3-5 9-5s6 5 9 5" />
          <path d="M7 12v5M12 12v5M17 12v5" />
          <path d="M3 17h18" />
        </svg>
      );
    case "housing":
      return (
        <svg viewBox="0 0 24 24" {...stroke} className={common} aria-hidden="true">
          <path d="m4 11 8-6 8 6" />
          <path d="M6 10v9h12v-9" />
          <path d="M10 19v-5h4v5" />
        </svg>
      );
    case "post-tensioning":
      return (
        <svg viewBox="0 0 24 24" {...stroke} className={common} aria-hidden="true">
          <path d="M3 8c4 8 14 8 18 0" />
          <rect x="2" y="6" width="3" height="4" rx="0.8" />
          <rect x="19" y="6" width="3" height="4" rx="0.8" />
          <path d="M3 18h18" />
        </svg>
      );
    case "digital":
      return (
        <svg viewBox="0 0 24 24" {...stroke} className={common} aria-hidden="true">
          <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />
          <path d="M12 12 4 7.5M12 12l8-4.5M12 12v9" />
        </svg>
      );
    case "services":
      return (
        <svg viewBox="0 0 24 24" {...stroke} className={common} aria-hidden="true">
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2M6.6 6.6 5.2 5.2M18.8 18.8l-1.4-1.4M6.6 17.4l-1.4 1.4M18.8 5.2l-1.4 1.4" />
        </svg>
      );
  }
}
