import { SignatureArt } from '@/components/signature-art';

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
        <div>
          <p className="eyebrow">Botanical spa retreat</p>
          <h1 id="hero-heading" className="mt-4 text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            Serenity Spa — come home to calm
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Botanical facials, deep-rest massage, and slow rituals that leave you rested, glowing, and yourself again.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#booking"
              className="btn-lift inline-flex min-h-[44px] items-center rounded-full bg-primary px-7 py-3.5 font-sans text-base font-semibold text-primary-foreground"
            >
              Book now
            </a>
            <a
              href="#services"
              className="btn-lift inline-flex min-h-[44px] items-center rounded-full border bg-card px-7 py-3.5 font-sans text-base font-semibold text-foreground"
            >
              Explore treatments
            </a>
          </div>
          <dl className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div><dt className="sr-only">Rating</dt><dd className="font-display text-2xl font-semibold text-foreground">4.9</dd><dd>loved by 2k+ guests</dd></div>
            <div><dt className="sr-only">Experience</dt><dd className="font-display text-2xl font-semibold text-foreground">12 yrs</dd><dd>master therapists</dd></div>
            <div><dt className="sr-only">Setting</dt><dd className="font-display text-2xl font-semibold text-foreground">100%</dd><dd>natural botanicals</dd></div>
          </dl>
        </div>
        <SignatureArt />
      </div>
    </section>
  );
}
