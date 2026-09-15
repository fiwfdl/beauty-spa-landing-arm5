export function SignatureArt() {
  return (
    <div role="img" aria-label="Illustration of eucalyptus sprigs over layered spa stones" className="relative mx-auto aspect-square w-full max-w-md">
      <svg viewBox="0 0 400 400" className="drift h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id="groveGlow" cx="50%" cy="42%" r="65%">
            <stop offset="0%" className="[stop-color:hsl(var(--secondary))]" />
            <stop offset="100%" className="[stop-color:hsl(var(--background))]" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="190" r="165" fill="url(#groveGlow)" />
        <ellipse cx="200" cy="300" rx="110" ry="26" className="fill-muted" />
        <ellipse cx="200" cy="284" rx="88" ry="22" className="fill-secondary" />
        <ellipse cx="200" cy="268" rx="64" ry="17" className="fill-card stroke-border" />
        <g className="stroke-primary" strokeWidth="5" strokeLinecap="round" fill="none">
          <path d="M200 250 C 196 190, 190 130, 168 84" />
          <path d="M200 250 C 206 196, 216 140, 238 100" />
        </g>
        <g className="fill-primary" opacity="0.9">
          <ellipse cx="178" cy="150" rx="26" ry="15" transform="rotate(-38 178 150)" />
          <ellipse cx="190" cy="112" rx="22" ry="13" transform="rotate(-30 190 112)" />
          <ellipse cx="222" cy="158" rx="26" ry="15" transform="rotate(34 222 158)" />
          <ellipse cx="232" cy="120" rx="20" ry="12" transform="rotate(28 232 120)" />
        </g>
        <g className="fill-accent" opacity="0.85">
          <circle cx="150" cy="230" r="7" />
          <circle cx="252" cy="216" r="6" />
          <circle cx="205" cy="66" r="6" />
        </g>
        <g aria-hidden="true">
          <circle cx="120" cy="300" r="3" className="fill-primary" opacity="0.5" />
          <circle cx="284" cy="290" r="4" className="fill-accent" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}
