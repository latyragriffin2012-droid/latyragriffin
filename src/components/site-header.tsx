import { Link, useRouterState } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { cartCount, useCart } from "@/lib/cart";
import { useHydrated } from "@/lib/use-hydrated";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/shop", label: "Shop" },
  { to: "/lookbook", label: "Lookbook" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/book", label: "Book" },
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lines = useCart((s) => s.lines);
  const count = useHydrated() ? cartCount(lines) : 0;
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-bg/92 text-ink shadow-[0_1px_0_var(--color-line)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src="/brand/logo.jpg"
            alt="Tyra's Hair Biz Boutique"
            className="size-10 rounded-full object-cover sm:size-11"
          />
          <span className="min-w-0 leading-tight">
            <span className="block font-display text-xl italic leading-none sm:text-[1.35rem]">
              Tyra's
            </span>
            <span
              className="mt-0.5 block text-[0.6rem] font-medium uppercase tracking-[0.22em] text-muted"
            >
              Hair Biz Boutique
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-[0.8rem] font-medium uppercase tracking-[0.16em] transition-opacity duration-150 hover:opacity-70",
                pathname === item.to || pathname.startsWith(item.to + "/")
                  ? "opacity-100"
                  : "opacity-70",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Link
            to="/cart"
            aria-label={`Bag, ${count} items`}
            className="relative flex size-11 items-center justify-center"
          >
            <ShoppingBag className="size-[1.15rem]" strokeWidth={1.6} />
            {count > 0 ? (
              <span className="absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-gold text-[0.6rem] font-semibold text-ink tabular-nums">
                {count}
              </span>
            ) : null}
          </Link>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="flex size-11 items-center justify-center md:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" strokeWidth={1.6} />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col bg-bg px-6 py-6 text-ink shadow-border">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="font-display text-2xl italic">
                    Menu
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="flex size-11 items-center justify-center"
                      aria-label="Close menu"
                    >
                      <X className="size-5" strokeWidth={1.6} />
                    </button>
                  </Dialog.Close>
                </div>
                <nav className="mt-8 flex flex-col gap-1">
                  {NAV.map((item) => (
                    <Dialog.Close key={item.to} asChild>
                      <Link
                        to={item.to}
                        className="py-3 font-display text-3xl italic"
                      >
                        {item.label}
                      </Link>
                    </Dialog.Close>
                  ))}
                  <Dialog.Close asChild>
                    <Link to="/contact" className="py-3 font-display text-3xl italic">
                      Contact
                    </Link>
                  </Dialog.Close>
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
