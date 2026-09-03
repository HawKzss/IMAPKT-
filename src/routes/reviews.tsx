import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, BadgeCheck } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";

const title = "Client Reviews | Impakt Digital Tanzania";
const description =
  "Read verified client reviews for Impakt Digital — rated 4.9/5 by businesses in Iringa, Mbeya and Dar es Salaam for design, social media and print production.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

function Reviews() {
  const [index, setIndex] = useState(0);
  const active = TESTIMONIALS[index];
  const move = (dir: number) =>
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Reviews</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
        What clients say about <span className="gradient-text">Impakt Digital</span>.
      </h1>

      <div className="glass-card mt-10 flex flex-wrap items-center gap-4 p-5">
        <span className="font-display text-4xl font-bold">4.9</span>
        <div>
          <div className="flex gap-0.5" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-primary text-primary" aria-hidden="true" />
            ))}
          </div>
          <p className="mt-1 text-xs text-muted-foreground">87 Google reviews · Iringa, Tanzania</p>
        </div>
        <span className="ml-auto inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground">
          <BadgeCheck className="size-4 text-primary" aria-hidden="true" /> Verified business profile
        </span>
      </div>

      <section className="glass-card mt-8 p-7 sm:p-10" aria-label="Featured testimonial">
        <div className="flex gap-0.5" aria-label={`${active.rating} out of 5 stars`}>
          {Array.from({ length: active.rating }).map((_, i) => (
            <Star key={i} className="size-5 fill-primary text-primary" aria-hidden="true" />
          ))}
        </div>
        <blockquote className="mt-5 font-display text-xl leading-relaxed sm:text-2xl">
          "{active.quote}"
        </blockquote>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <span className="gradient-fill grid size-12 place-items-center rounded-full font-bold">
            {active.initials}
          </span>
          <div>
            <p className="font-semibold">{active.name}</p>
            <p className="text-sm text-muted-foreground">{active.company}</p>
          </div>
          <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            {active.tag}
          </span>
          <div className="ml-auto flex gap-2">
            <button
              onClick={() => move(-1)}
              aria-label="Previous testimonial"
              className="rounded-full border border-border p-2.5 hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={() => move(1)}
              aria-label="Next testimonial"
              className="rounded-full border border-border p-2.5 hover:border-primary hover:text-primary"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </section>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="glass-card p-6 transition-transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <span className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
                {t.tag}
              </span>
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
    </div>
  );
}
