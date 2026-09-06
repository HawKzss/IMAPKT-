import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { SERVICES, SITE } from "@/data/site";

const title = "Contact Impakt Digital | Design & Print Agency in Iringa";
const description =
  "Talk to Impakt Digital in Iringa, Tanzania. Get a free quote for branding, graphic design, social media management, banner printing and custom packaging.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
        Let's build your next <span className="gradient-text">campaign</span>.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Tell us what you need — a logo, a full rebrand, a social retainer or 200 teardrop flags by
        Friday. We reply to every enquiry within one business day.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        <section className="glass-card p-6 lg:col-span-3 lg:p-8" aria-labelledby="form-heading">
          <h2 id="form-heading" className="font-display text-2xl font-bold">
            Request a free quote
          </h2>
          {sent ? (
            <p className="mt-6 rounded-xl border border-border bg-secondary/50 p-5 text-sm">
              Thank you — your request has been noted. Please also reach us on WhatsApp or by phone
              for the fastest response.
            </p>
          ) : (
            <form
              className="mt-6 grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-1.5">
                <label htmlFor="name" className="text-sm font-medium">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="service" className="text-sm font-medium">
                  Service needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                >
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                  <option value="other">Something else</option>
                </select>
              </div>
              <div className="grid gap-1.5 sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="gradient-fill inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold hover:glow-ring sm:col-span-2"
              >
                <Send className="size-4" aria-hidden="true" />
                Send request
              </button>
            </form>
          )}
        </section>

        <aside className="lg:col-span-2">
          <div className="glass-card p-6">
            <h2 className="font-display text-xl font-bold">Reach us directly</h2>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {SITE.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <a className="hover:text-foreground" href={SITE.phoneHref}>
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <a className="hover:text-foreground" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {SITE.hours}
              </li>
            </ul>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-fill mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold hover:glow-ring"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Impakt Digital location map, Iringa, Tanzania"
              src={SITE.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full"
            />
          </div>
          <a
            href={SITE.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
          >
            Get directions →
          </a>
        </aside>
      </div>
    </div>
  );
}
