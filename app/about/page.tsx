import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { buildUrl, STORE_LINKS } from "@/lib/product-links";

export const metadata: Metadata = {
  title: "運営者情報",
  description:
    "作業用品ナビの運営会社・編集方針・運営ストアについて。株式会社トレード（グリーンクロスグループ）が、看板・安全用品の販売実績をもとに作業用品の選び方を解説しています。",
};

const stores = [
  {
    name: "GCセレクト（自社EC）",
    url: STORE_LINKS.gcSelect,
    utm: "about_gc_select",
    description: "公式オンラインストア。作業用品・安全用品を幅広く取り扱い。",
  },
  {
    name: "楽天市場 anzenkiki",
    url: STORE_LINKS.rakuten,
    utm: "about_rakuten",
    description: "楽天市場での運営店舗。",
  },
  {
    name: "Yahoo!ショッピング signcity-yshop",
    url: STORE_LINKS.yahoo,
    utm: "about_yahoo",
    description: "Yahoo!ショッピングでの運営店舗。",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1">
        <nav className="mx-auto max-w-6xl px-4 pt-8 pb-4 text-sm text-muted-foreground md:px-6">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-primary">
                トップ
              </Link>
            </li>
            <li>
              <ChevronRight className="inline h-4 w-4" />
            </li>
            <li className="text-foreground">運営者情報</li>
          </ol>
        </nav>

        <article className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
          <header className="mb-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
              About
            </p>
            <h1 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">
              運営者情報
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              作業用品ナビは、株式会社トレードが運営する作業用品の選び方・比較・使い方を解説するメディアです。
            </p>
          </header>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-black text-foreground">
              運営会社
            </h2>
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <p className="text-lg font-bold text-foreground">
                株式会社トレード
              </p>
              <p className="mt-2 text-muted-foreground">
                グリーンクロスグループの一員として、看板・安全用品・作業用品の販売を行っています。
              </p>
              <a
                href="https://trade-sign.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
              >
                公式サイト trade-sign.jp
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-black text-foreground">
              なぜ「売り場を知る立場」から解説するのか
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                作業用品ナビは、カタログやメーカー資料だけを転載するサイトではありません。GCセレクト・楽天市場・Yahoo!ショッピングで実際に商品を販売している事業者が、「現場で何を確認すべきか」「サイズや耐荷重で迷いやすいポイントはどこか」を、購買担当者・現場リーダーの視点で整理しています。
              </p>
              <p>
                看板・安全用品の販売で培った法人向けの対応経験を活かし、工場・倉庫・建設・物流の現場に寄り添った解説を心がけています。
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-black text-foreground">
              運営ストア
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {stores.map((store) => (
                <a
                  key={store.name}
                  href={buildUrl(store.url, store.utm)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-border bg-card p-5 transition hover:border-primary/30 hover:shadow-md"
                >
                  <p className="font-bold text-foreground">{store.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {store.description}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary">
                    ストアを見る
                    <ExternalLink className="h-3 w-3" aria-hidden />
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-black text-foreground">
              編集方針
            </h2>
            <ul className="space-y-3 text-lg leading-relaxed text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-bold text-primary">・</span>
                メーカー公表情報・一般的な選定基準に基づき、選び方の観点を整理します。
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">・</span>
                耐荷重・サイズ・在庫・価格などの具体仕様は、各商品ページでの確認をおすすめします。
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">・</span>
                現場の安全基準や社内ルールに合わせた最終判断は、ご担当者様にお任せします。
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">・</span>
                記事内の商品リンクには、サイト改善のためのUTMパラメータを付与しています。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-black text-foreground">
              お問い合わせ
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              サイトに関するお問い合わせは、運営会社
              <a
                href="https://trade-sign.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-1 font-bold text-primary hover:underline"
              >
                株式会社トレード
              </a>
              までご連絡ください。
            </p>
          </section>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
