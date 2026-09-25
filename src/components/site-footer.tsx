import { Link } from "@tanstack/react-router";
import { email, instagram, tiktok, youtube } from "@/lib/catalog";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl italic">Tyra's</p>
          <p className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-blush">
            Hair Biz Boutique
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            Style unleashed. Virgin bundles, HD lace units, and installs for women
            who want hair that looks grown — not installed.
          </p>
        </div>
        <div>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-gold">
            Visit
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>
              <Link to="/shop" className="hover:text-cream">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/lookbook" className="hover:text-cream">
                Lookbook
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-cream">
                Services
              </Link>
            </li>
            <li>
              <Link to="/book" className="hover:text-cream">
                Book
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-cream">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-gold">
            Connect
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>
              <a href={instagram} target="_blank" rel="noreferrer" className="hover:text-cream">
                Instagram
              </a>
            </li>
            <li>
              <a href={tiktok} target="_blank" rel="noreferrer" className="hover:text-cream">
                TikTok
              </a>
            </li>
            <li>
              <a href={youtube} target="_blank" rel="noreferrer" className="hover:text-cream">
                YouTube
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`} className="hover:text-cream">
                {email}
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-cream">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Tyra's Hair Biz Boutique. Style Unleashed.</p>
          <p>Complimentary shipping on orders over $250.</p>
        </div>
      </div>
    </footer>
  );
}
