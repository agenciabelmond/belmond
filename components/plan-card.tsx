"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PlanCardProps {
  name: string;
  price: string;
  priceLabel: string;
  ctaText: string;
  ctaLink: string;
  pixLink?: string;
  highlighted?: boolean;
  badge?: string;
  index?: number;
}

export function PlanCard({
  name,
  price,
  priceLabel,
  ctaText,
  ctaLink,
  pixLink,
  highlighted = false,
  badge,
}: PlanCardProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-xl flex flex-col rounded-2xl border p-6 md:p-8 transition-all duration-300 bg-white",
        highlighted
          ? "border-primary shadow-xl shadow-primary/20"
          : "border-neutral-200 hover:border-primary/50"
      )}
    >
      {/* BADGE */}
      {badge && (
        <div className="absolute -top-3 left-6">
          <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {badge}
          </span>
        </div>
      )}

      {/* HEADER */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
          {name}
        </h3>

        <div className="flex items-end justify-center gap-2">
          <span className="text-4xl md:text-5xl font-bold text-primary">
            {price}
          </span>

          <span className="text-neutral-500 text-sm mb-1">
            {priceLabel}
          </span>
        </div>
      </div>

      {/* BOTÕES */}
      <div className="mt-1 space-y-3">
        <Button
          asChild
          className="w-full py-6 text-base font-semibold rounded-xl bg-neutral-900 text-white hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <a href={ctaLink}>{ctaText}</a>
        </Button>

        {pixLink && (
          <Button
            asChild
            variant="outline"
            className="w-full py-6 text-base font-semibold rounded-xl border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <a href={pixLink} target="_blank" rel="noopener noreferrer">
              PAGAR ATRAVÉS DE PIX
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}