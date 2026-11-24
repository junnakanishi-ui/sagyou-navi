"use client";

import type { ReactNode } from "react";
import { track } from "@vercel/analytics";

export type DxCta = {
  id: string;
  badge: string;
  icon: ReactNode;
  title: string;
  body: string;
  label: string;
  href: string;
  points?: string[];
};

function DxCtaLink({ cta, article, className }: { cta: DxCta; article: string; className: string }) {
  return (
    <a
      href={cta.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-cta-id={cta.id}
      data-cta-article={article}
      onClick={() => {
        if (process.env.NODE_ENV === "production") {
          track("article_cta_click", { article, cta: cta.id, destination: new URL(cta.href).hostname });
        }
      }}
    >
      {cta.label}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export function DxCtaCard({ cta, article }: { cta: DxCta; article: string }) {
  return (
    <aside className="dx-cta" aria-label={cta.badge}>
      <div className="dx-cta-badge">
        <span className="dx-cta-icon" aria-hidden="true">{cta.icon}</span>
        <span>{cta.badge}</span>
      </div>
      <div className="dx-cta-copy">
        <p className="dx-cta-title">{cta.title}</p>
        <p>{cta.body}</p>
      </div>
      <DxCtaLink cta={cta} article={article} className="dx-cta-button" />
    </aside>
  );
}

export function DxCtaPair({ items, article }: { items: [DxCta, DxCta]; article: string }) {
  return (
    <div className="dx-cta-pair">
      {items.map((cta) => (
        <aside className="dx-cta-pair-card" key={cta.id} aria-label={cta.badge}>
          <div className="dx-cta-badge">
            <span className="dx-cta-icon" aria-hidden="true">{cta.icon}</span>
            <span>{cta.badge}</span>
          </div>
          <p className="dx-cta-title">{cta.title}</p>
          <p className="dx-cta-pair-body">{cta.body}</p>
          {cta.points && (
            <ul>
              {cta.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          )}
          <DxCtaLink cta={cta} article={article} className="dx-cta-button" />
        </aside>
      ))}
    </div>
  );
}
