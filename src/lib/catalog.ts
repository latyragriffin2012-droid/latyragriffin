export type Category = "bundles" | "wigs" | "lace";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  compareAt?: number;
  category: Category;
  texture: string;
  lengths: string[];
  lengthSurcharge: Record<string, number>;
  image: string;
  images: string[];
  featured?: boolean;
  bestseller?: boolean;
  new?: boolean;
  description: string;
  details: string[];
};

export type Service = {
  slug: string;
  name: string;
  duration: string;
  fromPrice: number;
  description: string;
  includes: string[];
};

export const LENGTHS = ['16"', '18"', '20"', '22"', '24"'] as const;

export const products: Product[] = [
  {
    slug: "luxe-body-wave-bundles",
    name: "Luxe Body Wave Bundles",
    tagline: "The signature S-wave",
    price: 198,
    compareAt: 245,
    category: "bundles",
    texture: "Body Wave",
    lengths: [...LENGTHS],
    lengthSurcharge: { '16"': 0, '18"': 28, '20"': 52, '22"': 78, '24"': 108 },
    image: "/images/products/body-wave-bundles.jpg",
    images: [
      "/images/products/body-wave-bundles.jpg",
      "/images/lookbook/tex-body.jpg",
      "/images/lifestyle/hero.jpg",
    ],
    featured: true,
    bestseller: true,
    description:
      "Soft, lived-in body wave with movement that still photographs like glass. Cut from single-donor virgin hair so the cuticle stays aligned — it blends, it lasts, and it takes color without throwing a tantrum.",
    details: [
      "3 wefts, 100g each",
      "Single-donor virgin human hair",
      "Double-drawn from midshaft",
      "Can be colored, curled, or blown straight",
      "Ships in 2–4 business days",
    ],
  },
  {
    slug: "bone-straight-bundles",
    name: "Bone Straight Bundles",
    tagline: "Silk-pressed without the heat",
    price: 188,
    category: "bundles",
    texture: "Straight",
    lengths: [...LENGTHS],
    lengthSurcharge: { '16"': 0, '18"': 28, '20"': 52, '22"': 78, '24"': 108 },
    image: "/images/products/straight-bundles.jpg",
    images: [
      "/images/products/straight-bundles.jpg",
      "/images/lookbook/tex-straight.jpg",
    ],
    featured: true,
    description:
      "A true bone-straight finish with a liquid shine. These wefts stay sleek in humidity and still bounce back after a wash — the weekday uniform that looks like a salon blowout.",
    details: [
      "3 wefts, 100g each",
      "Virgin human hair, natural black",
      "Minimal shedding when sewn or taped",
      "Holds a silk press for weeks",
      "Ships in 2–4 business days",
    ],
  },
  {
    slug: "chocolate-deep-wave-bundles",
    name: "Chocolate Deep Wave Bundles",
    tagline: "Dimensional brunette, heavy wave",
    price: 214,
    category: "bundles",
    texture: "Deep Wave",
    lengths: [...LENGTHS],
    lengthSurcharge: { '16"': 0, '18"': 30, '20"': 58, '22"': 86, '24"': 118 },
    image: "/images/products/deep-wave-bundles.jpg",
    images: [
      "/images/products/deep-wave-bundles.jpg",
      "/images/lookbook/tex-deep.jpg",
    ],
    featured: true,
    new: true,
    description:
      "A richer brunette with a defined deep wave that looks expensive wet or dry. The chocolate tone already has dimension — no toner appointment required.",
    details: [
      "3 wefts, 100g each",
      "Pre-toned chocolate brunette",
      "Defined wave that lasts 6–8 weeks",
      "Best with a 5x5 closure or 13x4 frontal",
      "Ships in 2–4 business days",
    ],
  },
  {
    slug: "defined-curl-bundles",
    name: "Defined Curl Bundles",
    tagline: "Pattern that actually matches",
    price: 228,
    category: "bundles",
    texture: "Curl",
    lengths: ['16"', '18"', '20"', '22"'],
    lengthSurcharge: { '16"': 0, '18"': 32, '20"': 62, '22"': 94 },
    image: "/images/products/curly-bundles.jpg",
    images: [
      "/images/products/curly-bundles.jpg",
      "/images/lookbook/tex-curl.jpg",
    ],
    description:
      "Tight, springy curl with a matching pattern from weft to weft. Built for women who want volume without a 90-minute wash day — a little mousse and it blooms.",
    details: [
      "3 wefts, 100g each",
      "Virgin hair, natural dark brown",
      "Pattern-matched across the set",
      "Diffuses into a defined wash-and-go",
      "Ships in 2–4 business days",
    ],
  },
  {
    slug: "13x6-hd-body-wave-unit",
    name: "13×6 HD Body Wave Unit",
    tagline: "The melt-away hairline",
    price: 348,
    compareAt: 420,
    category: "wigs",
    texture: "Body Wave",
    lengths: ['16"', '18"', '20"', '22"', '24"'],
    lengthSurcharge: { '16"': 0, '18"': 40, '20"': 70, '22"': 105, '24"': 140 },
    image: "/images/products/hd-frontal-wig.jpg",
    images: [
      "/images/products/hd-frontal-wig.jpg",
      "/images/products/wig-detail.jpg",
      "/images/products/hd-lace.jpg",
      "/images/lifestyle/hero.jpg",
    ],
    featured: true,
    bestseller: true,
    description:
      "A glueless-ready 13×6 HD lace unit with a pre-plucked hairline and baby hairs that disappear under studio light. Wear it with melt or without — the lace does the work.",
    details: [
      "13×6 HD Swiss lace frontal",
      "Adjustable straps + combs",
      "Pre-plucked, bleached knots",
      "150–180% density",
      "Ready to wear in under 10 minutes",
    ],
  },
  {
    slug: "glueless-hd-body-wave",
    name: "Glueless HD Body Wave",
    tagline: "On in the car, off at midnight",
    price: 318,
    category: "wigs",
    texture: "Body Wave",
    lengths: ['16"', '18"', '20"', '22"'],
    lengthSurcharge: { '16"': 0, '18"': 36, '20"': 64, '22"': 96 },
    image: "/images/products/wig-detail.jpg",
    images: [
      "/images/products/wig-detail.jpg",
      "/images/products/hd-frontal-wig.jpg",
      "/images/products/hd-lace.jpg",
    ],
    new: true,
    description:
      "The same HD melt with a snug elastic band so you can skip the glue. Perfect for gym-to-dinner days and anyone who wants a unit that respects their edges.",
    details: [
      "Elastic band + 3 combs",
      "5×5 HD lace closure construction",
      "Pre-styled body wave",
      "No adhesive required",
      "Travel pouch included",
    ],
  },
  {
    slug: "hd-5x5-closure",
    name: "HD 5×5 Closure",
    tagline: "The clean leave-out alternative",
    price: 89,
    category: "lace",
    texture: "Body Wave",
    lengths: ['14"', '16"', '18"', '20"'],
    lengthSurcharge: { '14"': 0, '16"': 12, '18"': 24, '20"': 38 },
    image: "/images/products/hd-lace.jpg",
    images: [
      "/images/products/hd-lace.jpg",
      "/images/products/wig-detail.jpg",
    ],
    bestseller: true,
    description:
      "An HD 5×5 that actually disappears. Pair it with any of our bundle sets for a sew-in that looks grown, not installed.",
    details: [
      "5×5 HD Swiss lace",
      "Pre-plucked hairline",
      "Bleached knots",
      "Matches Luxe Body Wave",
      "Ships in 2–4 business days",
    ],
  },
  {
    slug: "13x4-hd-frontal",
    name: "13×4 HD Frontal",
    tagline: "Ear-to-ear freedom",
    price: 138,
    category: "lace",
    texture: "Body Wave",
    lengths: ['14"', '16"', '18"', '20"'],
    lengthSurcharge: { '14"': 0, '16"': 16, '18"': 32, '20"': 48 },
    image: "/images/products/hd-frontal-wig.jpg",
    images: [
      "/images/products/hd-frontal-wig.jpg",
      "/images/products/hd-lace.jpg",
    ],
    description:
      "A 13×4 HD frontal for high ponytails, deep side parts, and anything a closure can't do. The lace is thin enough to melt, strong enough to last a season.",
    details: [
      "13×4 HD Swiss lace",
      "Natural density at the hairline",
      "Can be parted anywhere",
      "Pairs with all bundle textures",
      "Ships in 2–4 business days",
    ],
  },
];

export const services: Service[] = [
  {
    slug: "custom-unit",
    name: "Custom Unit Consult",
    duration: "30 min",
    fromPrice: 25,
    description:
      "Density, lace tint, cap size, and texture — we map the unit to your lifestyle before a single weft is ordered. The fee applies to your purchase.",
    includes: ["Cap measurement", "Texture matching", "Color consult", "Lead-time plan"],
  },
  {
    slug: "glueless-install",
    name: "Glueless Install",
    duration: "90 min",
    fromPrice: 150,
    description:
      "A precision melt without the adhesive. We tint the lace, lay the hairline, and send you out with a unit you can take off the same night.",
    includes: ["Lace tint", "Hairline pluck", "Style", "Aftercare kit"],
  },
  {
    slug: "frontal-install",
    name: "Frontal / Closure Install",
    duration: "3–5 hrs",
    fromPrice: 185,
    description:
      "Full sew-in with an HD frontal or closure. Protective, seamless, and built to last 6–8 weeks with the right at-home care.",
    includes: ["Braid down", "Sew-in", "Lace melt", "Silk press or curl set"],
  },
  {
    slug: "glam-style",
    name: "Glam Style",
    duration: "75 min",
    fromPrice: 85,
    description:
      "Hollywood waves, a sculpted pony, or a sleek middle part on your own hair or a unit you bring. The night-out appointment.",
    includes: ["Consult", "Heat style", "Hold spray", "Edge finish"],
  },
  {
    slug: "bridal",
    name: "Bridal Glam",
    duration: "Half day",
    fromPrice: 285,
    description:
      "Trial plus wedding-day hair for the bride — and the option to add the party. We travel for a fee; studio dates are limited.",
    includes: ["Style trial", "Wedding-day hair", "Emergency kit", "Touch-up window"],
  },
];

export const testimonials = [
  {
    quote:
      "The 13×6 melted with no glue and still looked expensive at 2 a.m. I have never had lace do that.",
    name: "Jasmine K.",
    detail: "13×6 HD Body Wave Unit",
  },
  {
    quote:
      "I ordered the chocolate deep wave on a Thursday and wore it Saturday. Texture matched my leave-out. That never happens.",
    name: "Nia R.",
    detail: "Chocolate Deep Wave Bundles",
  },
  {
    quote:
      "Tyra talked me out of a density that would have looked costume. That's a stylist, not a salesperson.",
    name: "Aaliyah M.",
    detail: "Custom Unit Consult",
  },
];

export const lookbook = [
  {
    src: "/images/lookbook/cascade.jpg",
    alt: "Voluminous jet-black body wave falling down the back",
    label: "Body wave, 22 inch",
  },
  {
    src: "/images/lookbook/shoulder.jpg",
    alt: "Champagne light catching a deep side part",
    label: "Luxe melt",
  },
  {
    src: "/images/products/hd-frontal-wig.jpg",
    alt: "HD lace body wave unit on display",
    label: "13×6 HD unit",
  },
  {
    src: "/images/lookbook/tex-body.jpg",
    alt: "Close-up of body wave texture",
    label: "Signature S-wave",
  },
  {
    src: "/images/lookbook/tex-straight.jpg",
    alt: "Bone straight wefts in studio light",
    label: "Bone straight",
  },
  {
    src: "/images/lookbook/tex-deep.jpg",
    alt: "Chocolate deep wave wefts",
    label: "Chocolate deep wave",
  },
  {
    src: "/images/products/wig-detail.jpg",
    alt: "HD lace hairline detail",
    label: "HD hairline",
  },
  {
    src: "/images/lookbook/tex-curl.jpg",
    alt: "Defined curl pattern",
    label: "Defined curl",
  },
];

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "bundles", label: "Bundles" },
  { id: "wigs", label: "Units" },
  { id: "lace", label: "Lace" },
];

export function productBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function serviceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function priceFor(product: Product, length: string) {
  return product.price + (product.lengthSurcharge[length] ?? 0);
}

export const instagram = "https://instagram.com/tyrashairbizboutique_";
export const tiktok = "https://tiktok.com/@tyrashairbizboutique_";
export const youtube = "https://youtube.com/@tyrashairbizboutique";
export const email = "hello@tyrashairbizboutique.com";
