import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/catalog";
import { money } from "@/lib/utils";
import { Badge } from "./ui/badge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/shop/$slug"
      params={{ slug: product.slug }}
      className="group block"
    >
      <div className="overflow-hidden rounded-xl bg-surface">
        <div className="relative aspect-portrait overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {product.bestseller ? <Badge>Bestseller</Badge> : null}
            {product.new ? <Badge>New</Badge> : null}
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <p className="font-display text-xl leading-tight">{product.name}</p>
          <p className="mt-0.5 text-sm text-muted">{product.tagline}</p>
        </div>
        <p className="shrink-0 text-sm tabular-nums text-ink-soft">
          {product.compareAt ? (
            <span className="mr-1.5 text-muted line-through">
              {money(product.compareAt)}
            </span>
          ) : null}
          from {money(product.price)}
        </p>
      </div>
    </Link>
  );
}
