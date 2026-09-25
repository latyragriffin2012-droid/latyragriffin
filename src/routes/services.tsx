import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/catalog";
import { money } from "@/lib/utils";

export const Route = createFileRoute("/services")({ component: ServicesPage });

function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="The chair"
          title="Services"
          lede="Consults, glueless melts, sew-ins, and bridal glam — by appointment only."
        />
        <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <ul className="divide-y divide-line border-y border-line">
            {services.map((s) => (
              <li
                key={s.slug}
                className="grid gap-4 py-8 md:grid-cols-[1fr_auto] md:items-end"
              >
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 className="font-display text-3xl italic">{s.name}</h2>
                    <p className="text-sm text-muted">
                      {s.duration} · from {money(s.fromPrice)}
                    </p>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
                    {s.description}
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    {s.includes.join(" · ")}
                  </p>
                </div>
                <Button asChild>
                  <Link to="/book" search={{ service: s.slug }}>
                    Request {s.name}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-sm text-muted">
            A 50% retainer holds the chair. Cancellations inside 48 hours forfeit
            the retainer. Bring washed, detangled hair unless we agree otherwise.
          </p>
        </div>
      </main>
    </>
  );
}
