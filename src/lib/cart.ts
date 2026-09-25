import { create } from "zustand";
import { persist } from "zustand/middleware";
import { priceFor, productBySlug, type Product } from "./catalog";

export type CartLine = {
  id: string;
  slug: string;
  length: string;
  qty: number;
};

type CartState = {
  lines: CartLine[];
  add: (slug: string, length: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      add: (slug, length, qty = 1) => {
        const id = `${slug}::${length}`;
        const existing = get().lines.find((l) => l.id === id);
        if (existing) {
          set({
            lines: get().lines.map((l) =>
              l.id === id ? { ...l, qty: l.qty + qty } : l,
            ),
          });
          return;
        }
        set({ lines: [...get().lines, { id, slug, length, qty }] });
      },
      setQty: (id, qty) => {
        if (qty <= 0) {
          set({ lines: get().lines.filter((l) => l.id !== id) });
          return;
        }
        set({
          lines: get().lines.map((l) => (l.id === id ? { ...l, qty } : l)),
        });
      },
      remove: (id) => set({ lines: get().lines.filter((l) => l.id !== id) }),
      clear: () => set({ lines: [] }),
    }),
    { name: "tyra-cart-v1" },
  ),
);

export function hydrateLine(line: CartLine): {
  line: CartLine;
  product: Product;
  unit: number;
  total: number;
} | null {
  const product = productBySlug(line.slug);
  if (!product) return null;
  const unit = priceFor(product, line.length);
  return { line, product, unit, total: unit * line.qty };
}

export function cartCount(lines: CartLine[]) {
  return lines.reduce((n, l) => n + l.qty, 0);
}

export function cartSubtotal(lines: CartLine[]) {
  return lines.reduce((n, l) => {
    const h = hydrateLine(l);
    return n + (h?.total ?? 0);
  }, 0);
}
