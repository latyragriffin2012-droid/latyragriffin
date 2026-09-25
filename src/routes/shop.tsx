import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { SiteHeader } from "@/components/site-header";
import { categories, products, type Category } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop")({ component: ShopPage });

function ShopPage() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const list = useMemo(
    () =>
      filter === "all" ? products : products.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="The boutique"
          title="Shop"
          lede="Virgin bundles, HD units, and lace — built to melt, color, and last."
        />
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 sm:px-6">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setFilter(c.id)}
              className={cn(
                "h-10 rounded-full px-4 text-[0.75rem] font-medium uppercase tracking-[0.14em] transition-[background-color,color] duration-150",
                filter === c.id
                  ? "bg-ink text-cream"
                  : "bg-surface text-ink-soft hover:bg-line",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <p className="mx-auto max-w-6xl px-4 pb-16 text-sm text-muted sm:px-6">
          Prefer a custom density or color?{" "}
          <Link to="/book" className="text-ink underline underline-offset-4">
            Book a consult
          </Link>
          .
        </p>
      </main>
    </>
  );
}
