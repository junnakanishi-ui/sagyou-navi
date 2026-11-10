"use client";

import type { ReactNode } from "react";
import { track } from "@vercel/analytics";
import { rentalUrl, RENTAL_SLUG } from "@/lib/rental-links";

export function RentalLink({ children, placement, anchor, className }: {
  children: ReactNode;
  placement: string;
  anchor?: string;
  className?: string;
}) {
  return (
    <a href={rentalUrl(placement, anchor)} className={className}
      onClick={() => {
        if (process.env.NODE_ENV === "production") {
          track("rental_outbound_click", { article: RENTAL_SLUG, placement });
        }
      }}>
      {children}
    </a>
  );
}
