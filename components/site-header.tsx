const links = [
  { href: '#services', label: 'Treatments' },
  { href: '#about', label: 'Why Serenity' },
  { href: '#visit', label: 'Visit' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top-anchor" className="font-display text-xl font-semibold tracking-wide">
          Serenity Spa
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#booking"
          aria-label="Book an appointment"
          className="btn-lift inline-flex min-h-[44px] items-center rounded-full bg-primary px-5 py-2.5 font-sans text-sm font-semibold text-primary-foreground"
        >
          Book now
        </a>
      </div>
    </header>
  );
}
