import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { FaqJsonLd } from "./scaffold";
import type { FaqItem, WithChildren } from "./types";

export function ArticleLayout({
  faq,
  articleJsonLd,
  children,
}: WithChildren & {
  faq?: FaqItem[];
  articleJsonLd?: Record<string, unknown>;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {faq && faq.length > 0 && <FaqJsonLd faq={faq} />}
      {articleJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      )}
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
