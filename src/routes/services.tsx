import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/site";

const title = "Services | Graphic Design, Social Media & Printing in Iringa";
const description =
  "Graphic design, brand identity, social media management, banner printing in the Southern Highlands and custom stickers and packaging in Tanzania — from Impakt Digital, Iringa.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Services</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
        Everything your brand needs, <span className="gradient-text">designed and produced</span>{" "}
        in-house.
      </h1>
      <p className="mt-6 max-w-2xl text-base text-muted-foreground">
        One partner for strategy, creative, social and print — a graphic design company in Iringa
        with a full production floor behind it.
      </p>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {SERVICES.map((s) => (
          <article
            key={s.slug}
            className="glass-card group relative overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:glow-ring"
          >
            <div
              className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity group-hover:opacity-100"
              style={{ backgroundImage: "var(--gradient-brand)" }}
              aria-hidden="true"
            />
            <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {s.items.map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline"
            >
              Request a quote →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
