import { createFileRoute, Link } from "@tanstack/react-router";
import { PORTFOLIO } from "@/data/site";

const title = "Portfolio | Branding, Packaging & Print Work — Impakt Digital";
const description =
  "Selected branding, packaging, campaign and print projects delivered by Impakt Digital for clients in Iringa, Mbeya, Dar es Salaam and across Tanzania.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Portfolio</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
        Work that moved <span className="gradient-text">real numbers</span>.
      </h1>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO.map((p, index) => (
          <article key={p.title} className="glass-card group overflow-hidden">
            <div
              className="grid-overlay flex h-48 items-end p-5"
              style={{
                backgroundImage: `radial-gradient(120% 100% at ${index % 2 ? "80%" : "20%"} 0%, color-mix(in oklab, var(--brand-${index % 2 ? "yellow" : "orange"}) 26%, transparent), transparent 70%)`,
              }}
            >
              <span className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] uppercase tracking-wide text-muted-foreground">
                {p.location}
              </span>
            </div>
            <div className="border-t border-border p-5">
              <h2 className="font-display text-lg font-semibold group-hover:text-primary">{p.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.category}</p>
            </div>
          </article>
        ))}
      </div>

      <Link
        to="/contact"
        className="gradient-fill mt-12 inline-flex rounded-full px-6 py-3.5 text-sm font-semibold hover:glow-ring"
      >
        Start your project
      </Link>
    </div>
  );
}
