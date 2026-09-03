export const SITE = {
  name: "Impakt Digital",
  tagline: "Creative Strategy, Digital Growth & Precision Printing",
  phone: "+255 764 000 120",
  phoneHref: "tel:+255764000120",
  whatsapp: "https://wa.me/255764000120?text=Hello%20Impakt%20Digital%2C%20I%27d%20like%20a%20quote",
  email: "hello@impaktdigital.co.tz",
  address: "Uhuru Avenue, Gangilonga, Iringa Municipality, Iringa, Tanzania",
  hours: "Mon – Fri: 8:00 – 18:00 · Sat: 9:00 – 14:00 · Sun: Closed",
  geo: { lat: -7.7707, lng: 35.6959 },
  mapEmbed:
    "https://www.google.com/maps?q=Iringa,%20Tanzania&z=13&output=embed",
  directions: "https://www.google.com/maps/dir/?api=1&destination=Iringa%2C+Tanzania",
} as const;

export const NAV = [
  { to: "/", label: "Home", sw: "Mwanzo" },
  { to: "/about", label: "About Us", sw: "Kuhusu Sisi" },
  { to: "/services", label: "Services", sw: "Huduma" },
  { to: "/portfolio", label: "Portfolio", sw: "Kazi Zetu" },
  { to: "/reviews", label: "Reviews", sw: "Maoni" },
  { to: "/pricing", label: "Pricing", sw: "Bei" },
  { to: "/contact", label: "Contact", sw: "Wasiliana" },
] as const;

export const SERVICES = [
  {
    slug: "graphic-design",
    title: "Graphic Design",
    blurb:
      "Marketing flyers, social media graphics, custom vector artwork, motion graphics and performance-ready digital ads.",
    items: ["Marketing flyers", "Social graphics", "Vector artwork", "Motion graphics", "Digital ad sets"],
  },
  {
    slug: "brand-identity",
    title: "Brand Identity Design",
    blurb:
      "Logo design, comprehensive brand guidelines, colour palettes, typography systems and full corporate identity kits.",
    items: ["Logo design", "Brand guidelines", "Colour & type systems", "Stationery", "Corporate identity kits"],
  },
  {
    slug: "social-media",
    title: "Social Media Management",
    blurb:
      "Content creation, strategy, community management and platform growth across Instagram, TikTok, LinkedIn and Facebook.",
    items: ["Content calendars", "Community management", "Paid social", "Creator shoots", "Analytics reporting"],
  },
  {
    slug: "print-marketing",
    title: "Print Marketing Materials",
    blurb:
      "High-resolution banner printing across the Southern Highlands: teardrop flags, brochures, business cards and event displays.",
    items: ["Banners & billboards", "Teardrop flags", "Brochures", "Business cards", "Event displays"],
  },
  {
    slug: "packaging-merchandise",
    title: "Custom Packaging & Merchandise",
    blurb:
      "Bespoke product packaging, custom die-cut stickers and labels, branded boxes and corporate merchandise runs.",
    items: ["Product packaging", "Die-cut stickers", "Labels", "Branded boxes", "Corporate merch"],
  },
] as const;

export const STATS = [
  { value: "150+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "#1", label: "Top-Rated Agency in Iringa" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Neema Mwakalinga",
    company: "Nyanda Coffee Co., Iringa",
    initials: "NM",
    rating: 5,
    tag: "Packaging & Labels",
    quote:
      "Impakt Digital redesigned our coffee packaging and label system. Retail sell-through in Iringa and Mbeya jumped within one season.",
  },
  {
    name: "Joseph Kimaro",
    company: "Highlands Agro Supplies",
    initials: "JK",
    rating: 5,
    tag: "Banner Printing",
    quote:
      "Teardrop flags and banners delivered in three days for our Nane Nane stand. Print quality was sharper than anything we had used before.",
  },
  {
    name: "Asha Mligo",
    company: "Tuse Fashion House",
    initials: "AM",
    rating: 5,
    tag: "Social Media Management",
    quote:
      "Our Instagram and TikTok grew from 900 to over 18,000 followers in six months, and orders now come straight through DMs.",
  },
  {
    name: "Daniel Sanga",
    company: "Ruaha Safari Lodge",
    initials: "DS",
    rating: 5,
    tag: "Brand Identity",
    quote:
      "A complete identity kit that finally matches the calibre of the lodge. The brand guidelines made every partner rollout effortless.",
  },
  {
    name: "Fatma Hassan",
    company: "Mbeya Fresh Foods",
    initials: "FH",
    rating: 5,
    tag: "Graphic Design",
    quote:
      "Fast, precise and genuinely creative. They understand both the digital side and the realities of printing in Tanzania.",
  },
  {
    name: "Emmanuel Lyimo",
    company: "Sanga Logistics, Dar es Salaam",
    initials: "EL",
    rating: 5,
    tag: "Full Rebrand",
    quote:
      "We work with agencies in Dar, but Impakt Digital out-delivered all of them on turnaround and attention to detail.",
  },
] as const;

export const PORTFOLIO = [
  { title: "Nyanda Coffee Co.", category: "Packaging & Label System", location: "Iringa" },
  { title: "Ruaha Safari Lodge", category: "Brand Identity Kit", location: "Iringa" },
  { title: "Tuse Fashion House", category: "Social Media Growth", location: "Iringa" },
  { title: "Highlands Agro Supplies", category: "Banner & Flag Printing", location: "Southern Highlands" },
  { title: "Mbeya Fresh Foods", category: "Campaign Design", location: "Mbeya" },
  { title: "Sanga Logistics", category: "Corporate Rebrand", location: "Dar es Salaam" },
] as const;

export const PRICING = [
  {
    name: "Starter",
    price: "TZS 350,000",
    period: "/ project",
    description: "For small businesses that need sharp, professional creative fast.",
    features: [
      "Logo or flyer design (3 concepts)",
      "2 revision rounds",
      "Print-ready + web files",
      "5 business days delivery",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "TZS 950,000",
    period: "/ month",
    description: "Our most popular retainer for brands scaling across Tanzania.",
    features: [
      "Full social media management (3 platforms)",
      "16 designed posts + 4 reels monthly",
      "Monthly analytics reporting",
      "Priority print production",
      "Dedicated brand strategist",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Full brand systems, packaging runs and multi-region campaigns.",
    features: [
      "Complete brand identity system",
      "Custom packaging & merchandise runs",
      "Nationwide print production",
      "Campaign strategy & media buying",
      "SLA-backed turnaround",
    ],
    featured: false,
  },
] as const;
