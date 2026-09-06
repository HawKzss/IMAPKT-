import { createFileRoute, Link } from "@tanstack/react-router";
import { Gauge, Lightbulb, Target, TrendingUp, MapPin } from "lucide-react";
import { SITE } from "@/data/site";

const title = "About Impakt Digital | Creative & Print Agency in Iringa";
const description =
  "Impakt Digital is rooted in Iringa, Tanzania — combining digital innovation with physical print excellence for clients in Iringa, Mbeya, Dar es Salaam and nationwide.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  { icon: Target, title: "Precision", text: "Colour-accurate print, pixel-accurate design, on-brief every time." },
  { icon: Lightbulb, title: "Innovation", text: "Strategy and creative built on live data, not guesswork." },
  { icon: Gauge, title: "Speed", text: "Same-week turnaround on most print and design production." },
  { icon: TrendingUp, title: "Regional Brand Growth", text: "Built for the Southern Highlands and scaled nationwide." },
];

function About() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">About us</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
        Digital innovation meets <span className="gradient-text">print excellence</span> in Iringa.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
        Impakt Digital started in a small studio in Iringa with one belief: Tanzanian brands deserve
        creative work that competes internationally. Today we run a full digital marketing agency
        alongside a precision print floor — meaning the campaign we design is the campaign we
        produce, from the first social post to the last teardrop flag on your event ground.
      </p>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
        That combination is rare. Most agencies outsource print, and most printers can't strategise.
        We do both, in-house, which is why turnaround is measured in days rather than weeks.
      </p>

      <section className="glass-card mt-14 grid gap-8 p-6 lg:grid-cols-2 lg:p-10" aria-labelledby="hq">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <MapPin className="size-3.5 text-primary" aria-hidden="true" />
            Regional headquarters
          </span>
          <h2 id="hq" className="mt-5 font-display text-2xl font-bold sm:text-3xl">
            Our Iringa HQ, serving Tanzania nationwide
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {SITE.address}. Walk in for artwork approvals, press checks and packaging samples — or
            work with us remotely from Mbeya, Dodoma, Arusha and Dar es Salaam.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {["Iringa", "Mbeya", "Dar es Salaam", "Nationwide delivery"].map((c) => (
              <li key={c} className="rounded-lg border border-border px-3 py-2">
                {c}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="gradient-fill mt-7 inline-flex rounded-full px-5 py-3 text-sm font-semibold hover:glow-ring"
          >
            Visit or book a consultation
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Impakt Digital office location in Iringa, Tanzania"
            src={SITE.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full lg:h-full"
          />
        </div>
      </section>

      <section className="mt-16" aria-labelledby="values">
        <h2 id="values" className="font-display text-3xl font-bold">
          Core values
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <article key={v.title} className="glass-card p-6 transition-transform hover:-translate-y-1">
              <v.icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16" aria-labelledby="story">
        <h2 id="story" className="font-display text-3xl font-bold">
          Our story
        </h2>
        <ol className="mt-8 space-y-5 border-l border-border pl-6">
          {STORY.map((s) => (
            <li key={s.year} className="relative">
              <span className="gradient-fill absolute -left-[31px] top-1.5 size-3 rounded-full" />
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">{s.year}</p>
              <h3 className="mt-1 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16" aria-labelledby="team">
        <h2 id="team" className="font-display text-3xl font-bold">
          The team
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Strategists, designers and press operators under one roof in Iringa. Photos coming soon.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <article key={m.name} className="glass-card p-6 text-center">
              <span className="gradient-fill mx-auto grid size-16 place-items-center rounded-full font-display text-xl font-bold">
                {m.initials}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold">{m.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-card mt-16 flex flex-wrap items-center justify-between gap-6 p-8">
        <div>
          <h2 className="font-display text-2xl font-bold">Ready to work with us?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Tell us about your project and get a free quote within one business day.
          </p>
        </div>
        <Link
          to="/contact"
          className="gradient-fill inline-flex rounded-full px-5 py-3 text-sm font-semibold hover:glow-ring"
        >
          Get a free quote
        </Link>
      </section>
    </div>
  );
}

const STORY = [
  { year: "2018", title: "A one-room design studio", text: "Impakt Digital opens in Iringa with a single workstation and local retail clients." },
  { year: "2020", title: "Print floor added", text: "Large-format printing brought in-house, cutting client turnaround from weeks to days." },
  { year: "2022", title: "Southern Highlands reach", text: "Regular production for brands across Mbeya, Njombe and Dodoma." },
  { year: "2026", title: "150+ projects delivered", text: "Full-service branding, social media and packaging teams serving clients nationwide." },
];

const TEAM = [
  { name: "Team member", role: "Creative Director", initials: "CD" },
  { name: "Team member", role: "Brand Designer", initials: "BD" },
  { name: "Team member", role: "Social Media Lead", initials: "SM" },
  { name: "Team member", role: "Print Production Manager", initials: "PM" },
];
