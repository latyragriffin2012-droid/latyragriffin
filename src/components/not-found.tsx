import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex min-h-[60dvh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold-deep">
          404
        </p>
        <h1 className="mt-2 font-display text-5xl italic">That page is gone.</h1>
        <p className="mt-3 max-w-md text-sm text-ink-soft">
          The collection, the chair, and the lookbook are still here.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/shop">Shop</Link>
          </Button>
        </div>
      </main>
    </>
  );
}
