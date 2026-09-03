import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV, SERVICES, SITE } from "@/data/site";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="relative mt-24 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="gradient-fill grid size-9 place-items-center rounded-xl font-display text-lg font-bold">
              I
            </span>
            <span className="font-display text-lg font-bold">
              Impakt <span className="gradient-text">Digital</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A full-service digital marketing, design and branding agency in Iringa, Tanzania —
            serving Mbeya, Dar es Salaam and the Southern Highlands.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 text-primary" aria-hidden="true" />
              {SITE.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-primary" aria-hidden="true" />
              <a className="hover:text-foreground" href={SITE.phoneHref}>
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-primary" aria-hidden="true" />
              <a className="hover:text-foreground" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground">Navigate</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted-foreground hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="text-muted-foreground hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground">Newsletter</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Monthly brand growth tips for Tanzanian businesses. No spam.
          </p>
          <form
            className="mt-4 flex flex-col gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
              setEmail("");
            }}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.co.tz"
              className="rounded-full border border-input bg-background px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <button className="gradient-fill rounded-full px-4 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02]">
              Subscribe
            </button>
            {done && <p className="text-xs text-primary">Asante! You're on the list.</p>}
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Impakt Digital, Iringa, Tanzania. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:text-primary">
              Privacy & Cookie Policy
            </Link>
            <Link to="/refund-policy" className="hover:text-primary">
              Refund & Cancellation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
