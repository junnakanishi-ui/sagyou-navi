"use client";

import type { ReactNode } from "react";
import { track } from "@vercel/analytics";
import { EC_GUIDES, ecGuideUrl, type EcGuideKey } from "@/lib/ec-guides";

export function EcGuideLink({ guideKey, placement, productId, className, children }: {
  guideKey: EcGuideKey;
  placement: string;
  productId?: string;
  className?: string;
  children: ReactNode;
}) {
  return <a href={ecGuideUrl(guideKey, placement, productId)} className={className} onClick={() => {
    if (process.env.NODE_ENV === "production") {
      track("ec_guide_shop_click", {
        article: EC_GUIDES[guideKey].slug,
        placement,
        product: productId ?? "collection",
      });
    }
  }}>{children}</a>;
}
