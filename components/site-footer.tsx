export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-display text-lg font-semibold">Serenity Spa</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-5 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground">Treatments</a>
          <a href="#about" className="hover:text-foreground">Why Serenity</a>
          <a href="#visit" className="hover:text-foreground">Visit</a>
          <a href="#booking" className="hover:text-foreground">Book now</a>
        </nav>
        <p className="text-sm text-muted-foreground">© 2026 Serenity Spa. Breathe easy.</p>
      </div>
    </footer>
  );
}
