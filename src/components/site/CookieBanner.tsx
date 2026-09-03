import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const KEY = "impakt-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setVisible(true);
  }, []);

  if (!visible) return null;

  const decide = (value: string) => {
    localStorage.setItem(KEY, value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="glass-card fixed bottom-4 left-4 z-50 max-w-md p-5 sm:bottom-6 sm:left-6"
    >
      <p className="text-sm text-muted-foreground">
        We use cookies to analyse traffic and improve your experience, in line with Tanzanian data
        protection law and the GDPR. Read our{" "}
        <Link to="/privacy" className="text-primary hover:underline">
          Privacy & Cookie Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => decide("all")}
          className="gradient-fill rounded-full px-4 py-2 text-sm font-semibold"
        >
          Accept all
        </button>
        <button
          onClick={() => decide("essential")}
          className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
        >
          Essential only
        </button>
      </div>
    </div>
  );
}
