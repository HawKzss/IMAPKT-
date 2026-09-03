import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, CheckCircle2, MapPin } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { PORTFOLIO, SERVICES, SITE, STATS, TESTIMONIALS } from "@/data/site";
import { useLang } from "@/lib/lang";

const title = "Impakt Digital | Best Digital Marketing Agency in Iringa, Tanzania";
const description =
  "Impakt Digital is a full-service digital marketing, graphic design, branding and precision printing agency in Iringa, Tanzania — serving Mbeya, Dar es Salaam and nationwide.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const { lang } = useLang();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="grid-overlay pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 size-[38rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{ backgroundImage: "var(--gradient-brand)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <MapPin className="size-3.5 text-primary" aria-hidden="true" />
              Iringa · Southern Highlands · Tanzania
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Elevating Brands Across <span className="gradient-text">Iringa &amp; Tanzania</span> through
              Creative Strategy, Digital Growth &amp; Precision Printing.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {lang === "sw"
                ? "Masoko ya kidijitali, utambulisho wa chapa, vifungashio maalum na uchapishaji wa hali ya juu — yote chini ya paa moja Iringa."
                : "Digital marketing, brand identity, custom packaging and print production — engineered under one roof for businesses that refuse to blend in."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="gradient-fill inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.03] hover:glow-ring"
              >
                Explore Our Services
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Book a Free Consultation
              </Link>
            </div>

            <dl className="glass-card mt-10 grid max-w-xl grid-cols-3 divide-x divide-border p-1">
              {STATS.map((s) => (
                <div key={s.label} className="px-3 py-4 text-center">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="gradient-text block font-display text-2xl font-bold sm:text-3xl">
                      {s.value}
                    </span>
                    <span className="mt-1 block text-[11px] uppercase tracking-wide text-muted-foreground">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Impakt Digital creative studio visual — glowing yellow and orange brand monolith"
              width={1536}
              height={1024}
              className="glass-card w-full object-cover p-2"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8" aria-labelledby="services-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">What we do</p>
            <h2 id="services-heading" className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Full-service creative, digital &amp; print
            </h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-primary hover:underline">
            View all services →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.slug}
              className="glass-card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-ring"
            >
              <div
                className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ backgroundImage: "var(--gradient-brand)" }}
                aria-hidden="true"
              />
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {s.items.slice(0, 3).map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8" aria-labelledby="work-heading">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Selected work</p>
        <h2 id="work-heading" className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Brands we've built momentum for
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((p) => (
            <article key={p.title} className="glass-card group overflow-hidden">
              <div
                className="grid-overlay flex h-40 items-end p-5"
                style={{
                  backgroundImage:
                    "radial-gradient(120% 100% at 20% 0%, color-mix(in oklab, var(--brand-orange) 28%, transparent), transparent 70%)",
                }}
              >
                <span className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] uppercase tracking-wide text-muted-foreground">
                  {p.location}
                </span>
              </div>
              <div className="border-t border-border p-5">
                <h3 className="font-display text-lg font-semibold group-hover:text-primary">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.category}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8" aria-labelledby="reviews-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Client reviews</p>
            <h2 id="reviews-heading" className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Rated 4.9/5 by Tanzanian businesses
            </h2>
          </div>
          <div className="glass-card flex items-center gap-3 px-4 py-3">
            <span className="font-display text-2xl font-bold">4.9</span>
            <div>
              <div className="flex gap-0.5" aria-label="4.9 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Based on 87 Google reviews</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <figure key={t.name} className="glass-card p-6">
              <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="gradient-fill grid size-10 place-items-center rounded-full text-sm font-bold">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.company}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="glass-card relative overflow-hidden p-8 text-center sm:p-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{ backgroundImage: "var(--gradient-brand)" }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Ready to make an <span className="gradient-text">impakt</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Tell us about your brand and we'll come back with a scoped plan and a fixed quote within
              24 hours. Visit us at {SITE.address}.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="gradient-fill inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold hover:glow-ring"
              >
                Get a Free Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center rounded-full border border-border px-6 py-3.5 text-sm font-semibold hover:border-primary hover:text-primary"
              >
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
