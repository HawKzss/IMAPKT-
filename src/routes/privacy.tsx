import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/data/site";

const title = "Privacy Policy | Impakt Digital";
const description =
  "How Impakt Digital collects, uses and protects personal information submitted through our website and client projects.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
      <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: September 2026</p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          Impakt Digital ("we", "us") respects your privacy. This policy explains what information
          we collect when you contact us or use this website, and how we handle it.
        </p>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground">What we collect</h2>
          <p className="mt-2">
            Contact details you submit through our quote form or newsletter (name, email, phone),
            project briefs you share with us, and basic anonymous analytics about site usage.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground">How we use it</h2>
          <p className="mt-2">
            Only to respond to your enquiry, deliver work you commissioned, send updates you asked
            for, and improve our services. We never sell your data.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground">Cookies</h2>
          <p className="mt-2">
            We use essential cookies plus optional analytics cookies. You can accept or decline
            optional cookies from the banner shown on your first visit.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground">Your rights</h2>
          <p className="mt-2">
            You may request a copy of your data or ask us to delete it at any time by emailing{" "}
            <a className="text-primary hover:underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
