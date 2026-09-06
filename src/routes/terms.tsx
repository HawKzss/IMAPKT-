import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/data/site";

const title = "Terms of Service | Impakt Digital";
const description =
  "The terms that apply to design, branding, social media and print production work delivered by Impakt Digital in Tanzania.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
      <h1 className="font-display text-4xl font-bold">Terms of Service</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: September 2026</p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground">Quotes and scope</h2>
          <p className="mt-2">
            Every quote lists the deliverables, revision rounds and timeline agreed. Work outside
            that scope is quoted separately before it begins.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground">Payment</h2>
          <p className="mt-2">
            Design projects begin on a 50% deposit, with the balance due before final files are
            released. Print and packaging runs are paid in full before production.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground">Approvals</h2>
          <p className="mt-2">
            Clients are responsible for approving artwork proofs. Once a proof is approved, print
            production cannot be reversed.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground">Ownership</h2>
          <p className="mt-2">
            Full ownership of final approved artwork transfers to the client on final payment. We
            may show the work in our portfolio unless you ask us not to.
          </p>
        </div>
        <p>
          Questions? Email{" "}
          <a className="text-primary hover:underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
