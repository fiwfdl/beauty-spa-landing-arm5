export function Booking() {
  return (
    <section id="booking" aria-labelledby="booking-heading" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="card-soft grid gap-8 bg-primary p-8 text-primary-foreground sm:p-10 md:grid-cols-2">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] opacity-90">Booking</p>
            <h2 id="booking-heading" className="mt-3 text-3xl font-medium sm:text-4xl">
              Reserve your hour of quiet
            </h2>
            <p className="mt-3 opacity-90">
              Call, write, or request online — we confirm every booking personally within a few hours.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <a
              href="tel:+15551234567"
              className="btn-lift inline-flex min-h-[44px] items-center justify-center rounded-full bg-card px-7 py-3.5 font-sans text-base font-semibold text-foreground"
            >
              Call +1 (555) 123-4567
            </a>
            <a
              href="mailto:hello@serenityspa.example"
              className="btn-lift inline-flex min-h-[44px] items-center justify-center rounded-full border border-primary-foreground/40 px-7 py-3.5 font-sans text-base font-semibold text-primary-foreground"
            >
              Email hello@serenityspa.example
            </a>
            <p className="text-center text-sm opacity-80">Tue–Sun · 9:00–20:00 · walk-ins welcome</p>
          </div>
        </div>
      </div>
    </section>
  );
}
