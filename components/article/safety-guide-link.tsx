"use client";

import type { ReactNode } from "react";
import { track } from "@vercel/analytics";
import { safetyGuideUrl } from "@/lib/safety-guides";

export function SafetyGuideLink({ destination, article, placement, className, children }: {
  destination: string;
  article: string;
  placement: string;
  className?: string;
  children: ReactNode;
}) {
  return <a href={safetyGuideUrl(destination, article, placement)} className={className} onClick={() => {
    if (process.env.NODE_ENV === "production") {
      track("safety_guide_outbound_click", {
        article, placement, destination: new URL(destination).pathname,
        site: new URL(destination).hostname === "gc-anzen.com" ? "gc_anzen" : "gc_select",
      });
    }
  }}>{children}</a>;
}
