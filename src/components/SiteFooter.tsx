import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8 md:py-20">
        <div>
          <p className="font-display text-2xl font-bold tracking-[0.28em] uppercase">Sarkar</p>
          <p className="mt-4 max-w-xs text-sm text-ink-foreground/60">
            Fine fragrances crafted for those who arrive with presence.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: MessageCircle, label: "WhatsApp" },
              { Icon: Facebook, label: "Facebook" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="rounded-full border border-ink-foreground/15 p-2.5 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">Help</h3>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/70">
            {["Contact Us", "Refund Policy", "Privacy Policy", "Terms of Service"].map((l) => (
              <li key={l}>
                <a href="#" className="transition-colors hover:text-gold">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">Newsletter</h3>
          <p className="mt-5 text-sm text-ink-foreground/70">Subscribe for exclusive offers</p>
          <form
            className="mt-4 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              required
              placeholder="Your email address"
              aria-label="Email address"
              className="h-11 border-ink-foreground/20 bg-transparent text-ink-foreground placeholder:text-ink-foreground/40"
            />
            <Button type="submit" variant="gold" className="h-11 shrink-0 px-6">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10 px-4 py-6 text-center text-xs text-ink-foreground/50 md:px-8">
        © {new Date().getFullYear()} Sarkar Parfums. All rights reserved.
      </div>
    </footer>
  );
}
