export function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-heading" className="scroll-mt-20 bg-muted/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
        <div>
          <p className="eyebrow">Plan your visit</p>
          <h2 id="visit-heading" className="mt-3 text-3xl font-medium sm:text-4xl">
            Find your way to stillness
          </h2>
          <address className="mt-4 text-sm not-italic leading-relaxed text-muted-foreground">
            14 Grove Lane, Willow District<br />
            Open Tue–Sun, 9:00–20:00<br />
            <a href="tel:+15551234567" className="font-semibold text-primary underline underline-offset-4">
              +1 (555) 123-4567
            </a>
          </address>
        </div>
        <div role="img" aria-label="Stylized map showing Serenity Spa among grove paths" className="card-soft overflow-hidden">
          <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
            <rect width="400" height="240" className="fill-secondary" opacity="0.45" />
            <path d="M0 150 C 90 130, 150 170, 240 145 S 340 120, 400 140" className="stroke-primary" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.7" />
            <path d="M60 0 C 80 70, 60 150, 90 240" className="stroke-card" strokeWidth="8" fill="none" />
            <path d="M300 0 C 285 80, 310 160, 295 240" className="stroke-card" strokeWidth="8" fill="none" />
            <circle cx="200" cy="130" r="16" className="fill-accent" />
            <circle cx="200" cy="130" r="24" className="fill-accent" opacity="0.25" />
            <g className="fill-primary" opacity="0.6">
              <circle cx="120" cy="80" r="14" />
              <circle cx="290" cy="70" r="11" />
              <circle cx="330" cy="180" r="13" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
