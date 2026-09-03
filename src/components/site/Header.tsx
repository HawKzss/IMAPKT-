import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { NAV } from "@/data/site";
import { useLang } from "@/lib/lang";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/70 backdrop-blur-xl"
          : "border-transparent bg-background/30 backdrop-blur-md"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8"
      >
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="gradient-fill grid size-9 place-items-center rounded-xl font-display text-lg font-bold">
            I
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Impakt <span className="gradient-text">Digital</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-foreground bg-secondary" }}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {lang === "sw" ? item.sw : item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div
            className="hidden items-center rounded-full border border-border p-0.5 text-xs sm:flex"
            role="group"
            aria-label="Language switcher"
          >
            {(["en", "sw"] as const).map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`rounded-full px-2.5 py-1 font-semibold uppercase transition-colors ${
                  lang === code ? "gradient-fill" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          <Link
            to="/contact"
            className="gradient-fill hidden items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.03] hover:glow-ring sm:inline-flex"
          >
            <Sparkles className="size-4" aria-hidden="true" />
            {lang === "sw" ? "Pata Bei Bure" : "Get a Free Quote"}
          </Link>

          <button
            className="rounded-lg border border-border p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-foreground" }}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {lang === "sw" ? item.sw : item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="gradient-fill mt-3 block rounded-full px-4 py-3 text-center text-sm font-semibold"
          >
            {lang === "sw" ? "Pata Bei Bure" : "Get a Free Quote"}
          </Link>
        </div>
      )}
    </header>
  );
}
