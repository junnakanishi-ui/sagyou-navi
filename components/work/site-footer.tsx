import { ExternalLink, Wrench } from "lucide-react";
import Link from "next/link";
import { buildUrl, STORE_LINKS } from "@/lib/product-links";

export function SiteFooter() {
  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="h-1 bg-stripe-caution" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand">
                <Wrench className="h-5 w-5 text-foreground" aria-hidden />
              </div>
              <div className="leading-tight">
                <p className="text-base font-bold tracking-tight text-white">
                  作業用品<span className="text-brand">navi</span>
                </p>
                <p className="text-[11px] text-footer-muted">
                  台車・運搬具・現場用品の選び方
                </p>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-footer-muted">
              工場・倉庫・建設現場で使う作業用品の選び方・違い・使い方を解説するメディアです。実際に商品を販売する事業者が、現場目線でナビゲートします。
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand">
              サイト
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/articles" className="hover:text-brand">
                  記事一覧
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand">
                  運営者情報
                </Link>
              </li>
              <li>
                <Link href="/#categories" className="hover:text-brand">
                  カテゴリ
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-brand">
                  よくあるご質問
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand">
              運営・ストア
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="https://trade-sign.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-brand"
                >
                  株式会社トレード
                  <ExternalLink className="h-3 w-3" aria-hidden />
                </a>
              </li>
              <li>
                <a
                  href={buildUrl(STORE_LINKS.gcSelect, "footer_gc_select")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-brand"
                >
                  GCセレクト
                  <ExternalLink className="h-3 w-3" aria-hidden />
                </a>
              </li>
              <li>
                <a
                  href={buildUrl(STORE_LINKS.rakuten, "footer_rakuten")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-brand"
                >
                  楽天市場 anzenkiki
                  <ExternalLink className="h-3 w-3" aria-hidden />
                </a>
              </li>
              <li>
                <a
                  href={buildUrl(STORE_LINKS.yahoo, "footer_yahoo")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-brand"
                >
                  Yahoo!ショッピング signcity-yshop
                  <ExternalLink className="h-3 w-3" aria-hidden />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-xs leading-relaxed text-footer-muted">
          掲載内容は一般的な選定基準の整理を目的としています。耐荷重・サイズ・在庫などの具体仕様は、各商品ページでご確認ください。
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-footer-muted md:flex-row md:items-center md:px-6">
          <p>© {new Date().getFullYear()} 作業用品ナビ / 株式会社トレード</p>
          <p>運営：株式会社トレード</p>
        </div>
      </div>
    </footer>
  );
}
