import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { instagram, products, testimonials } from "@/lib/catalog";
import { money } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative isolate min-h-[88dvh] overflow-hidden bg-ink text-cream">
          <img
            src="/images/lifestyle/hero.jpg"
            alt="Voluminous body-wave hair in champagne studio light"
            className="absolute inset-0 size-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-ink/25" />
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-ink/60" />
          <div className="relative mx-auto flex min-h-[88dvh] max-w-6xl flex-col justify-end px-4 pb-16 sm:px-6 sm:pb-20">
            <p className="rise text-[0.7rem] font-medium uppercase tracking-[0.28em] text-gold">
              Style Unleashed
            </p>
            <h1 className="rise-2 mt-3 max-w-2xl font-display text-5xl leading-[0.92] italic sm:text-7xl">
              Hair that looks grown, not installed.
            </h1>
            <p className="rise-3 mt-5 max-w-md text-base leading-relaxed text-cream/80">
              Virgin bundles, HD lace units, and precise installs from Tyra's
              Hair Biz Boutique.
            </p>
            <div className="rise-4 mt-8 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg">
                <Link to="/shop">
                  Shop the collection
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="cream" size="lg">
                <Link to="/book">Book an install</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-px bg-line px-0 sm:grid-cols-3">
          {[
            { k: "Single-donor", v: "Virgin hair, aligned cuticle" },
            { k: "HD Swiss lace", v: "Melts without a filter" },
            { k: "Studio installs", v: "By appointment only" },
          ].map((item) => (
            <div key={item.k} className="bg-bg px-6 py-8 text-center">
              <p className="font-display text-2xl italic">{item.k}</p>
              <p className="mt-1 text-sm text-muted">{item.v}</p>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold-deep">
                The collection
              </p>
              <h2 className="mt-2 font-display text-4xl italic sm:text-5xl">
                What everyone is wearing
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/shop">View all</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>

        <section className="bg-ink text-cream">
          <div className="mx-auto grid max-w-6xl md:grid-cols-2">
            <img
              src="/images/lookbook/cascade.jpg"
              alt="Signature body wave cascade"
              className="h-full max-h-[720px] w-full object-cover"
            />
            <div className="flex flex-col justify-center px-6 py-14 sm:px-12">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold">
                The signature
              </p>
              <h2 className="mt-3 font-display text-4xl italic leading-tight sm:text-5xl">
                Body wave that still photographs like glass.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/75">
                Our Luxe Body Wave is the unit and the bundle set we built the
                boutique around — movement, shine, and a hairline that disappears
                under champagne light.
              </p>
              <div className="mt-8">
                <Button asChild variant="gold">
                  <Link
                    to="/shop/$slug"
                    params={{ slug: "luxe-body-wave-bundles" }}
                  >
                    Shop body wave — {money(198)}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold-deep">
            In the chair
          </p>
          <h2 className="mt-2 font-display text-4xl italic sm:text-5xl">
            From consult to melt.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                to: "/services" as const,
                title: "Custom unit",
                body: "Density, lace, cap — mapped to your lifestyle.",
              },
              {
                to: "/services" as const,
                title: "Glueless install",
                body: "A precision melt you can take off the same night.",
              },
              {
                to: "/services" as const,
                title: "Bridal glam",
                body: "Trial plus wedding-day hair, studio or travel.",
              },
            ].map((card) => (
              <Link
                key={card.title}
                to={card.to}
                className="rounded-xl bg-surface p-6 transition-transform duration-150 hover:-translate-y-0.5"
              >
                <h3 className="font-display text-2xl italic">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {card.body}
                </p>
                <p className="mt-6 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gold-deep">
                  See services
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-line bg-bg-elevated">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-3 sm:px-6 sm:py-20">
            {testimonials.map((t) => (
              <blockquote key={t.name}>
                <p className="font-display text-2xl leading-snug italic">
                  “{t.quote}”
                </p>
                <footer className="mt-4 text-sm text-muted">
                  {t.name}
                  <span className="mx-2 text-line">/</span>
                  {t.detail}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="overflow-hidden rounded-xl bg-surface md:grid md:grid-cols-2">
            <img
              src="/brand/logo.jpg"
              alt="Tyra's Hair Biz Boutique illustrated mark"
              className="h-full max-h-[480px] w-full object-cover object-top"
            />
            <div className="flex flex-col justify-center px-6 py-10 sm:px-10">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold-deep">
                Follow the work
              </p>
              <h2 className="mt-2 font-display text-4xl italic">
                @tyrashairbizboutique_
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Melts, textures, and the units leaving the studio — on Instagram
                and TikTok.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <a href={instagram} target="_blank" rel="noreferrer">
                    Open Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
