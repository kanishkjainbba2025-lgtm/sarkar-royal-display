import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  BadgeCheck,
  Droplet,
  Flame,
  Hourglass,
  Minus,
  Plus,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import img1 from "@/assets/regal-1.jpg";
import img2 from "@/assets/regal-2.jpg";
import img3 from "@/assets/regal-3.jpg";
import img4 from "@/assets/regal-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarkar Regal Parfum 100ml | Sweet Oud & Amber | Sarkar" },
      {
        name: "description",
        content:
          "Sarkar Regal Parfum 100ml — a sweet Oud & Amber parfum with 10-12 hour longevity. ₹1,199 (40% off). Free express shipping across India.",
      },
      { property: "og:title", content: "Sarkar Regal Parfum (100ml) — Sweet Oud & Amber" },
      {
        property: "og:description",
        content:
          "The ultimate party & date night fragrance. Smoky Oud, Amber and Vanilla with 10-12 hour longevity.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductPage,
});

const gallery = [
  { src: img1, alt: "Sarkar Regal crown-shaped deep purple 100ml perfume bottle" },
  { src: img3, alt: "Sarkar Regal purple outer box with gold typography beside the bottle" },
  { src: img2, alt: "Sarkar Regal matte black and purple cylindrical gift box" },
  { src: img4, alt: "Close-up of the gold crown cap of Sarkar Regal" },
];

const profile = [
  { Icon: Droplet, label: "Sweet Oud" },
  { Icon: Flame, label: "Amber" },
  { Icon: Hourglass, label: "Long Lasting" },
];

const trust = [
  { Icon: Truck, label: "Free Shipping" },
  { Icon: BadgeCheck, label: "100% Authentic" },
  { Icon: ShieldCheck, label: "Secure Checkout" },
];

function ProductPage() {
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-14">
        <p className="mb-8 text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
          Home / Best Sellers / <span className="text-foreground">Sarkar Regal</span>
        </p>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <section className="flex flex-col-reverse gap-4 md:flex-row">
            <div className="flex gap-3 overflow-x-auto md:flex-col md:overflow-visible">
              {gallery.map((g, i) => (
                <button
                  key={g.alt}
                  onClick={() => setActive(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`h-20 w-20 shrink-0 overflow-hidden rounded-sm border bg-muted transition-all md:h-24 md:w-24 ${
                    active === i
                      ? "border-royal ring-1 ring-royal"
                      : "border-border hover:border-royal/50"
                  }`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="flex-1 self-start overflow-hidden rounded-sm bg-muted">
              <img
                src={(gallery[active] ?? gallery[0]!).src}
                alt={(gallery[active] ?? gallery[0]!).alt}
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover"
              />
            </div>
          </section>

          {/* Details */}
          <section>
            <p className="text-[11px] tracking-[0.24em] text-royal uppercase">Sarkar Parfums</p>
            <h1 className="mt-3 text-3xl leading-tight font-semibold text-foreground md:text-[2.75rem]">
              Sarkar Regal Parfum (100ml)
            </h1>

            <div className="mt-4 flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(420+ Reviews)</span>
            </div>

            <div className="mt-6 flex flex-wrap items-end gap-3">
              <span className="text-4xl font-bold tracking-tight text-foreground">₹1,199</span>
              <span className="pb-1 text-lg text-muted-foreground line-through">₹1,999</span>
              <span className="mb-1.5 rounded-sm bg-burgundy px-2.5 py-1 text-[11px] font-semibold tracking-[0.1em] text-ink-foreground uppercase">
                Save 40%
              </span>
            </div>
            <p className="mt-1.5 text-xs text-muted-foreground">Inclusive of all taxes</p>

            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">
                The Ultimate Party &amp; Date Night Fragrance.
              </span>{" "}
              A sweet, warm, and seductive Oud &amp; Amber Parfum designed to make a statement.
              Excellent 10-12 hour longevity.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {profile.map(({ Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium tracking-wide text-foreground"
                >
                  <Icon className="h-3.5 w-3.5 text-royal" />
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-5">
              <span className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Quantity
              </span>
              <div className="flex items-center rounded-sm border border-border">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="p-3 text-foreground transition-colors hover:text-royal"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-sm font-semibold tabular-nums">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="p-3 text-foreground transition-colors hover:text-royal"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Button variant="ink" size="xl" className="w-full">
                Add to Cart
              </Button>
              <Button variant="royal" size="xl" className="w-full">
                Buy it Now
              </Button>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3 border-y border-border py-5">
              {trust.map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <Icon className="h-5 w-5 text-royal" />
                  <span className="text-[11px] font-medium tracking-wide text-muted-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <Accordion type="single" collapsible defaultValue="notes" className="mt-4">
              <AccordionItem value="notes">
                <AccordionTrigger className="text-sm font-semibold tracking-[0.08em] uppercase">
                  Fragrance Notes
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  Top Notes: Bergamot, Cinnamon, Apple. Heart: Sweet Woods. Base: Smoky Oud, Amber,
                  Vanilla.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="longevity">
                <AccordionTrigger className="text-sm font-semibold tracking-[0.08em] uppercase">
                  Longevity &amp; Performance
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  On Clothes: 10 to 12 hours. On Skin: 7 to 9 hours. Strong projection for the first
                  3-4 hours.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-sm font-semibold tracking-[0.08em] uppercase">
                  Shipping &amp; Returns
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  Free express shipping across India. Hassle-free 7-day returns on unopened boxes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
