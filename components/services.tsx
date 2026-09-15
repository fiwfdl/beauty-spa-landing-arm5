const treatments = [
  {
    name: 'Eucalyptus Renewal Facial',
    description: 'A 60-minute botanical facial with cool eucalyptus steam, gentle exfoliation, and deep hydration for a clear glow.',
    duration: '60 min',
    price: 'from $95',
  },
  {
    name: 'Deep-Rest Stone Massage',
    description: 'Warm basalt stones and slow strokes melt shoulder and back tension; you leave loose, warm, and deeply rested.',
    duration: '75 min',
    price: 'from $130',
  },
  {
    name: 'Clay & Cedar Body Ritual',
    description: 'Full-body clay polish, cedar-oil wrap, and scalp massage — our signature reset for tired skin and busy minds.',
    duration: '90 min',
    price: 'from $160',
  },
  {
    name: 'Morning Glow Express',
    description: 'A 30-minute brightening treatment for busy days: cleanse, vitamin mask, and a lifted, luminous finish.',
    duration: '30 min',
    price: 'from $55',
  },
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-20 bg-muted/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="eyebrow">Treatments</p>
        <h2 id="services-heading" className="mt-3 max-w-xl text-3xl font-medium sm:text-4xl">
          Signature rituals, paced slowly
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Every visit starts with herbal tea and a moment to breathe. Pick one ritual — or let us blend them for you.
        </p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {treatments.map((t) => (
            <li key={t.name} className="card-soft flex flex-col gap-3 p-6">
              <h3 className="text-xl font-medium">{t.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t.description}</p>
              <p className="mt-auto flex items-center justify-between pt-2 font-sans text-sm font-semibold">
                <span className="text-primary">{t.price}</span>
                <span className="text-muted-foreground">{t.duration}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
