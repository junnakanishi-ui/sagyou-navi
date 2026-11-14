"use client";

import type { ReactNode } from "react";
import { track } from "@vercel/analytics";
import { marathonUrl, MARATHON_SLUG } from "@/lib/marathon-links";

export function MarathonLink({ children, placement, className }: {
  children: ReactNode;
  placement: string;
  className?: string;
}) {
  return (
    <a href={marathonUrl(placement)} className={className} onClick={() => {
      if (process.env.NODE_ENV === "production") {
        track("marathon_outbound_click", { article: MARATHON_SLUG, placement });
      }
    }}>{children}</a>
  );
}
