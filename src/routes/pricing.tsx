import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PRICING } from "@/data/site";

const title = "Pricing | Design, Social Media & Print Packages in Tanzania";
const description =
  "Transparent pricing from Impakt Digital, Iringa: project-based design, monthly social media management retainers and custom enterprise branding and packaging.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Pricing</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
        Clear pricing. <span className="gradient-text">No surprise invoices.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-base text-muted-foreground">
        Print production is quoted per specification (size, stock, finish and quantity). Every quote
        is fixed before artwork begins.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {PRICING.map((tier) => (
          <article
            key={tier.name}
            className={`glass-card relative flex flex-col p-7 ${tier.featured ? "glow-ring" : ""}`}
          >
            {tier.featured && (
              <span className="gradient-fill absolute -top-3 left-7 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide">
                Most popular
              </span>
            )}
            <h2 className="font-display text-xl font-semibold">{tier.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
            <p className="mt-6">
              <span className="gradient-text font-display text-3xl font-bold">{tier.price}</span>
              <span className="text-sm text-muted-foreground">{tier.period}</span>
            </p>
            <ul className="mt-6 flex-1 space-y-2.5">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`mt-7 rounded-full px-5 py-3 text-center text-sm font-semibold ${
                tier.featured
                  ? "gradient-fill"
                  : "border border-border text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {tier.price === "Custom" ? "Talk to us" : "Get started"}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
