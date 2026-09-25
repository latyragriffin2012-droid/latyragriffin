import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { lookbook } from "@/lib/catalog";

export const Route = createFileRoute("/lookbook")({ component: LookbookPage });

function LookbookPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="Worn"
          title="Lookbook"
          lede="Texture, melt, and movement — the hair leaving the boutique."
        />
        <div className="mx-auto columns-1 gap-4 px-4 pb-16 sm:columns-2 sm:px-6 lg:columns-3">
          {lookbook.map((shot) => (
            <figure key={shot.src} className="mb-4 break-inside-avoid">
              <div className="overflow-hidden rounded-xl bg-surface">
                <img src={shot.src} alt={shot.alt} className="w-full object-cover" />
              </div>
              <figcaption className="mt-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                {shot.label}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 pb-20 sm:px-6">
          <p className="font-display text-3xl italic">Want this on you?</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/shop">Shop units & bundles</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/book">Book the chair</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
