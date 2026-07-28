export function RadiusDiagram() {
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label="Diagram showing the 5 kilometre free delivery radius around the Elvash Hardware yard"
      className="h-auto w-full"
    >
      <defs>
        <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
          <path
            d="M25 0H0V25"
            fill="none"
            stroke="var(--concrete)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#grid)" />

      <circle
        cx="200"
        cy="200"
        r="150"
        fill="color-mix(in oklab, var(--safety) 8%, transparent)"
        stroke="var(--safety)"
        strokeWidth="2"
        strokeDasharray="8 6"
      />
      <circle
        cx="200"
        cy="200"
        r="90"
        fill="none"
        stroke="var(--steel)"
        strokeWidth="1"
        strokeDasharray="4 6"
      />
      <circle
        cx="200"
        cy="200"
        r="30"
        fill="none"
        stroke="var(--steel)"
        strokeWidth="1"
        strokeDasharray="4 6"
      />

      <line
        x1="200"
        y1="200"
        x2="350"
        y2="200"
        stroke="var(--ink)"
        strokeWidth="2"
      />
      <rect x="188" y="188" width="24" height="24" fill="var(--ink)" />
      <text
        x="200"
        y="205"
        textAnchor="middle"
        fill="var(--caution)"
        fontFamily="var(--font-mono)"
        fontSize="14"
      >
        E
      </text>

      <text
        x="275"
        y="190"
        textAnchor="middle"
        fill="var(--ink)"
        fontFamily="var(--font-mono)"
        fontSize="15"
      >
        5 KM
      </text>
      <text
        x="200"
        y="236"
        textAnchor="middle"
        fill="var(--ink)"
        fontFamily="var(--font-mono)"
        fontSize="11"
        letterSpacing="2"
      >
        THE YARD
      </text>
      <text
        x="200"
        y="372"
        textAnchor="middle"
        fill="var(--safety)"
        fontFamily="var(--font-mono)"
        fontSize="12"
        letterSpacing="2"
      >
        FREE DELIVERY ZONE
      </text>
    </svg>
  );
}
