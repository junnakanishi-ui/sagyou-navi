"use client";

import type { ReactNode } from "react";
import { track } from "@vercel/analytics";
import { safetyBannerUrl, SAFETY_BANNER_SLUG } from "@/lib/safety-banner-links";

export function SafetyBannerLink({ children, placement, productId, className }: {
  children: ReactNode;
  placement: string;
  productId?: string;
  className?: string;
}) {
  return <a href={safetyBannerUrl(placement, productId)} className={className} onClick={() => {
    if (process.env.NODE_ENV === "production") {
      track("safety_banner_shop_click", {
        article: SAFETY_BANNER_SLUG, placement, destination: productId ?? "collection",
      });
    }
  }}>{children}</a>;
}
