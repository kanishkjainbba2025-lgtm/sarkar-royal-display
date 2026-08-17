import { useState } from "react";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";

const links = [
  "Men Collection",
  "Women Collection",
  "New Arrivals",
  "Best Sellers",
  "Offers",
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        <button
          className="-ml-2 p-2 text-foreground md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <a
          href="/"
          className="font-display text-2xl font-bold tracking-[0.28em] text-foreground uppercase md:text-3xl"
        >
          Sarkar
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-royal"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-3">
          <button aria-label="Search" className="p-2 text-foreground transition-colors hover:text-royal">
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button aria-label="Account" className="p-2 text-foreground transition-colors hover:text-royal">
            <User className="h-[18px] w-[18px]" />
          </button>
          <button aria-label="Cart" className="relative p-2 text-foreground transition-colors hover:text-royal">
            <ShoppingBag className="h-[18px] w-[18px]" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-burgundy ring-2 ring-background" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-4 py-3 md:hidden">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="block py-2.5 text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase"
            >
              {l}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
