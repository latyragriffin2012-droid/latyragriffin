import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { PageHero } from "@/components/page-hero";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cartSubtotal, hydrateLine, useCart } from "@/lib/cart";
import { money } from "@/lib/utils";

export const Route = createFileRoute("/cart")({ component: CartPage });

function CartPage() {
  const lines = useCart((s) => s.lines);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const clear = useCart((s) => s.clear);
  const [placed, setPlaced] = useState<string | null>(null);
  const hydrated = lines.map(hydrateLine).filter((h) => h !== null);
  const subtotal = cartSubtotal(lines);
  const shipping = subtotal >= 250 || subtotal === 0 ? 0 : 12;
  const total = subtotal + shipping;

  function onCheckout(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const id = `THB-${Date.now().toString().slice(-7)}`;
    const order = {
      id,
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      items: hydrated.map((h) => ({
        name: h.product.name,
        length: h.line.length,
        qty: h.line.qty,
        total: h.total,
      })),
      total,
      at: new Date().toISOString(),
    };
    const prev = JSON.parse(localStorage.getItem("tyra-orders") ?? "[]") as unknown[];
    localStorage.setItem("tyra-orders", JSON.stringify([order, ...prev]));
    clear();
    setPlaced(id);
    toast.success("Order reserved. We'll email payment details.");
  }

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero kicker="Bag" title={placed ? "Reserved" : "Your bag"} />
        <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          {placed ? (
            <div className="rounded-xl bg-surface p-8">
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-gold-deep">
                {placed}
              </p>
              <h2 className="mt-2 font-display text-3xl italic">
                We'll take it from here.
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-soft">
                Your pieces are held. Payment and shipping details go out by email
                within one business day. Questions? DM @tyrashairbizboutique_.
              </p>
              <Button asChild className="mt-6">
                <Link to="/shop">Keep shopping</Link>
              </Button>
            </div>
          ) : hydrated.length === 0 ? (
            <div className="rounded-xl bg-surface p-8">
              <p className="font-display text-3xl italic">The bag is empty.</p>
              <p className="mt-2 text-sm text-muted">
                Bundles, units, and lace live in the shop.
              </p>
              <Button asChild className="mt-6">
                <Link to="/shop">Shop the collection</Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-12 lg:grid-cols-[1fr_22rem]">
              <ul className="divide-y divide-line border-y border-line">
                {hydrated.map(({ line, product, unit, total: lineTotal }) => (
                  <li key={line.id} className="flex gap-4 py-5">
                    <Link
                      to="/shop/$slug"
                      params={{ slug: product.slug }}
                      className="size-24 shrink-0 overflow-hidden rounded-md bg-surface"
                    >
                      <img
                        src={product.image}
                        alt=""
                        className="size-full object-cover"
                      />
                    </Link>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-display text-xl italic leading-tight">
                            {product.name}
                          </p>
                          <p className="mt-1 text-sm text-muted">
                            {line.length} · {money(unit)}
                          </p>
                        </div>
                        <p className="text-sm tabular-nums">{money(lineTotal)}</p>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <button
                          type="button"
                          className="flex size-10 items-center justify-center rounded-md bg-surface"
                          onClick={() => setQty(line.id, line.qty - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm tabular-nums">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          className="flex size-10 items-center justify-center rounded-md bg-surface"
                          onClick={() => setQty(line.id, line.qty + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="size-3.5" />
                        </button>
                        <button
                          type="button"
                          className="ml-2 flex size-10 items-center justify-center text-muted hover:text-ink"
                          onClick={() => remove(line.id)}
                          aria-label="Remove"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <aside className="h-fit rounded-xl bg-surface p-6">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold-deep">
                  Reserve
                </p>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted">Subtotal</dt>
                    <dd className="tabular-nums">{money(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">Shipping</dt>
                    <dd className="tabular-nums">
                      {shipping === 0 ? "Complimentary" : money(shipping)}
                    </dd>
                  </div>
                  <div className="flex justify-between border-t border-line pt-3 font-medium">
                    <dt>Total</dt>
                    <dd className="tabular-nums">{money(total)}</dd>
                  </div>
                </dl>
                <form onSubmit={onCheckout} className="mt-6 grid gap-3">
                  <div className="grid gap-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required autoComplete="name" />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                    />
                  </div>
                  <Button type="submit" size="lg">
                    Reserve order
                  </Button>
                  <p className="text-xs leading-relaxed text-muted">
                    We invoice by email. Nothing is charged until you approve the
                    total and shipping address.
                  </p>
                </form>
              </aside>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
