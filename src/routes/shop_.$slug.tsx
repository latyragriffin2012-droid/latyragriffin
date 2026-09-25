import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { priceFor, productBySlug } from "@/lib/catalog";
import { cn, money } from "@/lib/utils";

export const Route = createFileRoute("/shop_/$slug")({
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = productBySlug(slug);
  if (!product) throw notFound();

  const [length, setLength] = useState(product.lengths[0] ?? '16"');
  const [active, setActive] = useState(0);
  const add = useCart((s) => s.add);
  const unit = priceFor(product, length);
  const image = product.images[active] ?? product.image;

  return (
    <>
      <SiteHeader />
      <main className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-14">
        <div>
          <div className="overflow-hidden rounded-xl bg-surface">
            <img
              src={image}
              alt={product.name}
              className="aspect-portrait w-full object-cover"
            />
          </div>
          {product.images.length > 1 ? (
            <div className="mt-3 grid grid-cols-4 gap-2">
              {product.images.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "overflow-hidden rounded-md",
                    i === active
                      ? "shadow-[0_0_0_1.5px_var(--color-ink)]"
                      : "opacity-70 hover:opacity-100",
                  )}
                >
                  <img src={src} alt="" className="aspect-square w-full object-cover" />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold-deep">
            {product.category === "wigs"
              ? "Units"
              : product.category === "lace"
                ? "Lace"
                : "Bundles"}
          </p>
          <h1 className="mt-2 font-display text-4xl italic leading-tight sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-2 text-ink-soft">{product.tagline}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {product.bestseller ? <Badge>Bestseller</Badge> : null}
            {product.new ? <Badge>New</Badge> : null}
          </div>
          <p className="mt-6 font-display text-3xl tabular-nums">{money(unit)}</p>
          {product.compareAt && length === product.lengths[0] ? (
            <p className="text-sm text-muted line-through">
              {money(product.compareAt)}
            </p>
          ) : null}

          <fieldset className="mt-8">
            <legend className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
              Length
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.lengths.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLength(l)}
                  className={cn(
                    "h-11 min-w-14 rounded-md px-3 text-sm tabular-nums transition-[background-color,color] duration-150",
                    length === l
                      ? "bg-ink text-cream"
                      : "bg-surface text-ink hover:bg-line",
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="sm:flex-1"
              onClick={() => {
                add(product.slug, length);
                toast.success(`${product.name} · ${length} added to bag`);
              }}
            >
              Add to bag — {money(unit)}
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/book">Book install</Link>
            </Button>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-ink-soft">
            {product.description}
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink-soft">
            {product.details.map((d) => (
              <li key={d} className="flex gap-3">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-gold" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
