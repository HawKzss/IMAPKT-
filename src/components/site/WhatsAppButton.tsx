import { MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Impakt Digital on WhatsApp"
      className="gradient-fill fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold shadow-lg transition-transform hover:scale-105 hover:glow-ring"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">Chat with Impakt Digital</span>
    </a>
  );
}
