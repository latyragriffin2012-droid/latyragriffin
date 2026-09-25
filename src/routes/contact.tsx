import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { PageHero } from "@/components/page-hero";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { email, instagram, tiktok, youtube } from "@/lib/catalog";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const record = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      at: new Date().toISOString(),
    };
    const prev = JSON.parse(localStorage.getItem("tyra-messages") ?? "[]") as unknown[];
    localStorage.setItem("tyra-messages", JSON.stringify([record, ...prev]));
    setSent(true);
    toast.success("Message sent.");
  }

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="Studio"
          title="Contact"
          lede="Wholesale, press, custom colors, or a question the shop didn't answer — write us."
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-2">
          {sent ? (
            <div className="rounded-xl bg-surface p-8">
              <h2 className="font-display text-3xl italic">Got it.</h2>
              <p className="mt-3 text-sm text-ink-soft">
                We read every note. If it's urgent, Instagram is faster.
              </p>
              <Button className="mt-6" onClick={() => setSent(false)}>
                Write another
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required autoComplete="name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" required />
              </div>
              <Button type="submit" size="lg">
                Send
              </Button>
            </form>
          )}
          <aside className="h-fit rounded-xl bg-ink p-8 text-cream">
            <p className="font-display text-3xl italic">Reach the boutique</p>
            <ul className="mt-6 space-y-3 text-sm text-cream/80">
              <li>
                <a href={`mailto:${email}`} className="hover:text-cream">
                  {email}
                </a>
              </li>
              <li>
                <a href={instagram} target="_blank" rel="noreferrer" className="hover:text-cream">
                  Instagram · @tyrashairbizboutique_
                </a>
              </li>
              <li>
                <a href={tiktok} target="_blank" rel="noreferrer" className="hover:text-cream">
                  TikTok · @tyrashairbizboutique_
                </a>
              </li>
              <li>
                <a href={youtube} target="_blank" rel="noreferrer" className="hover:text-cream">
                  YouTube
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </main>
    </>
  );
}
