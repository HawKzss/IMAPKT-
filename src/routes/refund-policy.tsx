import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/data/site";

const title = "Refund Policy | Impakt Digital";
const description =
  "Refund and reprint terms for design, branding and print production projects delivered by Impakt Digital in Iringa, Tanzania.";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
  component: RefundPolicy,
});

function RefundPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
      <h1 className="font-display text-4xl font-bold">Refund Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: September 2026</p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground">Design projects</h2>
          <p className="mt-2">
            If work has not started, deposits are refunded in full. Once concepts have been
            presented, the deposit covers the creative time already invested and is non-refundable.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground">Print production</h2>
          <p className="mt-2">
            Printed items are produced to your approved proof and cannot be refunded for change of
            mind. If we make a production error, we reprint at our cost.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground">Reporting an issue</h2>
          <p className="mt-2">
            Report any defect within 7 days of collection or delivery, with photos, to{" "}
            <a className="text-primary hover:underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>{" "}
            or call {SITE.phone}.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground">Retainers</h2>
          <p className="mt-2">
            Monthly retainers can be cancelled with 14 days' notice. Unused work in a paid month is
            not carried over or refunded.
          </p>
        </div>
      </div>
    </div>
  );
}
