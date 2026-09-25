import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { PageHero } from "@/components/page-hero";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { services } from "@/lib/catalog";
import { money } from "@/lib/utils";

type BookSearch = { service?: string };

export const Route = createFileRoute("/book")({
  validateSearch: (s: Record<string, unknown>): BookSearch => ({
    service: typeof s.service === "string" ? s.service : undefined,
  }),
  component: BookPage,
});

function BookPage() {
  const { service: preset } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const [service, setService] = useState(preset ?? services[0]?.slug ?? "");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const record = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      instagram: String(data.get("instagram") ?? ""),
      service: String(data.get("service") ?? ""),
      date: String(data.get("date") ?? ""),
      notes: String(data.get("notes") ?? ""),
      at: new Date().toISOString(),
    };
    const prev = JSON.parse(localStorage.getItem("tyra-bookings") ?? "[]") as unknown[];
    localStorage.setItem("tyra-bookings", JSON.stringify([record, ...prev]));
    setSent(true);
    toast.success("Request received. We'll confirm by email.");
  }

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="Appointments"
          title="Book the chair"
          lede="Tell us the service and a date that works. We confirm within one business day — a retainer holds the time."
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1fr_20rem]">
          {sent ? (
            <div className="rounded-xl bg-surface p-8">
              <h2 className="font-display text-3xl italic">You're on the list.</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                We'll email a confirmation with the retainer link. If you need
                something sooner, DM @tyrashairbizboutique_.
              </p>
              <Button className="mt-6" onClick={() => setSent(false)}>
                Send another request
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" htmlFor="name">
                  <Input id="name" name="name" required autoComplete="name" />
                </Field>
                <Field label="Email" htmlFor="email">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </Field>
              </div>
              <Field label="Instagram" htmlFor="instagram">
                <Input
                  id="instagram"
                  name="instagram"
                  placeholder="@yourhandle"
                  autoComplete="off"
                />
              </Field>
              <Field label="Service" htmlFor="service">
                <select
                  id="service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="flex h-11 w-full rounded-md bg-cream px-3.5 text-sm text-ink shadow-[inset_0_0_0_1px_var(--color-line)] focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-gold)]"
                >
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.name} — from {money(s.fromPrice)}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred date" htmlFor="date">
                <Input id="date" name="date" type="date" required />
              </Field>
              <Field label="Notes" htmlFor="notes">
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="Texture, length, event, travel, anything we should know."
                />
              </Field>
              <Button type="submit" size="lg">
                Request appointment
              </Button>
            </form>
          )}
          <aside className="h-fit rounded-xl bg-surface p-6">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold-deep">
              House rules
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
              <li>Appointments are confirmed after a 50% retainer.</li>
              <li>Arrive with washed, detangled hair unless we plan otherwise.</li>
              <li>A 15-minute grace window; after that the chair is released.</li>
              <li>Bring your unit if you already own one — we'll still melt it.</li>
            </ul>
          </aside>
        </div>
      </main>
    </>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
