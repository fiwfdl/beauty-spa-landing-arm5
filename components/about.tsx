const points = [
  { title: 'True quiet', text: 'Phone-free treatment rooms, soft light, and unhurried appointments — never double-booked.' },
  { title: 'Botanical only', text: 'Plant-based oils and clays, blended in-house. Kind to sensitive skin and the planet.' },
  { title: 'Therapists who listen', text: 'Your session starts with a consultation and ends only when you feel ready.' },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
        <div>
          <p className="eyebrow">Why Serenity</p>
          <h2 id="about-heading" className="mt-3 text-3xl font-medium sm:text-4xl">
            A slower kind of self-care
          </h2>
          <blockquote className="mt-5 border-l-4 border-primary pl-4 text-lg italic leading-relaxed">
            “I walked in wired and walked out weightless. The stone massage is the best hour in town.”
          </blockquote>
          <p className="mt-3 text-sm text-muted-foreground">— Maya R., regular since 2021</p>
        </div>
        <ul className="flex flex-col gap-4">
          {points.map((p) => (
            <li key={p.title} className="card-soft p-5">
              <h3 className="font-medium">{p.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
