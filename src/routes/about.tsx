import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-16">
          <div className="overflow-hidden rounded-xl bg-surface">
            <img
              src="/brand/logo.jpg"
              alt="Illustrated mark for Tyra's Hair Biz Boutique"
              className="w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold-deep">
              The boutique
            </p>
            <h1 className="mt-2 font-display text-5xl italic leading-[0.95] sm:text-6xl">
              Tyra's Hair Biz Boutique
            </h1>
            <p className="mt-2 text-[0.8rem] uppercase tracking-[0.2em] text-muted">
              Style Unleashed
            </p>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
              <p>
                The site at tyrashairbizboutique.com was sitting on a blank 404 —
                domain live, boutique not. This is the house put back together:
                a place to shop the hair, book the chair, and see the work.
              </p>
              <p>
                We sell single-donor virgin bundles, HD lace units, and the
                installs that make them look like they grew there. Texture is
                matched in the studio, not guessed in a warehouse. If the lace
                doesn't melt, it doesn't ship.
              </p>
              <p>
                Follow the day-to-day on Instagram and TikTok at
                @tyrashairbizboutique_ — then book a consult when you're ready
                for the real thing.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/shop">Shop the collection</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/book">Book Tyra</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
