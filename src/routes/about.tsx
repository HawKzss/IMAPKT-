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
    </div>
  );
}
