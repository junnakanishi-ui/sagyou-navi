import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { ProductCard } from "@/components/work/product-card";
import { ARTICLES } from "@/lib/articles";
import { buildUrl, STORE_LINKS } from "@/lib/product-links";

export const metadata: Metadata = {
  title:
    "軽量樹脂台車カルティオの選び方｜サイズ・耐荷重・静音・ストッパーの違い",
  description:
    "トラスコ中山の軽量樹脂台車「カルティオ」の選び方を解説。サイズ・耐荷重・静音キャスター・ストッパーの違いと、工場・倉庫・店舗での選定ポイントを整理します。",
  openGraph: {
    title:
      "軽量樹脂台車カルティオの選び方｜サイズ・耐荷重・静音・ストッパーの違い",
    description:
      "カルティオ台車を選ぶときに確認すべきサイズ・耐荷重・キャスター・ストッパーのポイントを、現場担当者向けに解説。",
    type: "article",
  },
};

const faqItems = [
  {
    q: "カルティオは金属製台車と何が違いますか？",
    a: "カルティオは樹脂製の軽量台車シリーズで、金属製と比べて本体が軽く、錆びにくいのが特徴として挙げられることが多いです。一方で、耐荷重や衝撃への強さはモデルにより異なるため、運搬する荷物の重量・サイズに合わせて選ぶ必要があります。",
  },
  {
    q: "耐荷重はどのくらいあれば足りますか？",
    a: "運搬する荷物の最大重量に、余裕を持たせた耐荷重を選ぶのが基本です。段ボール数箱程度なら100kg前後のモデルでも足りることが多い一方、機材や資材のまとめ運搬では150kg〜200kgクラスを検討するケースもあります。実際の耐荷重は商品ページの仕様を必ずご確認ください。",
  },
  {
    q: "静音キャスターは必要ですか？",
    a: "オフィス・店舗・病院など床を傷つけたくない場所や、騒音を抑えたい環境では静音・ノーマーキングタイプのキャスターが選ばれます。工場内のコンクリート床で騒音が気にならない場合は、標準キャスターでも問題ないことが多いです。",
  },
  {
    q: "ストッパー付きはどんな場面で便利ですか？",
    a: "段差のある場所や傾斜、荷物の積み下ろし中に台車が動いてしまうのを防ぎたいときに有効です。作業エリアが平坦で動かす頻度が高い場合は、ストッパーなしでも運用できる現場もあります。",
  },
  {
    q: "サイズは何を基準に選べばよいですか？",
    a: "運搬する荷物の最大寸法（段ボール・機材ケース・資材のサイズ）に対して、台車の天板（荷台）が十分かを確認します。荷物がはみ出すと重心が不安定になり、転倒リスクが高まります。複数サイズを横並びで比較し、最も大きい荷物に合わせて選ぶのが安全です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "軽量樹脂台車カルティオの選び方｜サイズ・耐荷重・静音・ストッパーの違い",
  description:
    "トラスコ中山の軽量樹脂台車「カルティオ」の選び方を、サイズ・耐荷重・静音キャスター・ストッパーの観点から解説。",
  datePublished: "2026-06-10",
  author: {
    "@type": "Organization",
    name: "株式会社トレード",
    url: "https://trade-sign.jp/",
  },
  publisher: {
    "@type": "Organization",
    name: "株式会社トレード",
    url: "https://trade-sign.jp/",
  },
};

const relatedArticles = ARTICLES.filter(
  (a) => a.slug !== "carutio-cart-guide" && a.available
).slice(0, 3);

function ConclusionBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 border-2 border-conclusion-border bg-conclusion-bg px-5 py-4 text-base leading-relaxed text-foreground">
      {children}
    </div>
  );
}

export default function CarutioCartGuidePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-card py-3">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                トップ
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/articles" className="hover:text-primary">
                記事一覧
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground">カルティオ台車の選び方</span>
            </nav>
          </div>
        </div>

        {/* Article header */}
        <section className="bg-card py-12">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-category-guide-bg px-3 py-1 text-sm font-bold text-category-guide">
                選び方ガイド
              </span>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>約10分で読める</span>
              </div>
            </div>
            <h1 className="text-3xl font-black leading-tight text-foreground sm:text-4xl">
              軽量樹脂台車カルティオの選び方
              <br className="hidden sm:block" />
              <span className="text-2xl sm:text-3xl">
                ｜サイズ・耐荷重・静音・ストッパーの違い
              </span>
            </h1>
          </div>
        </section>

        {/* Main visual */}
        <section className="bg-card pb-10">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/carutio-cart-guide-hero.jpg"
                alt="軽量樹脂台車カルティオの選び方"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </div>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              トラスコ中山の軽量樹脂台車「カルティオ」シリーズ（イメージ）
            </p>
          </div>
        </section>

        {/* Body */}
        <article className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            工場・倉庫・店舗の現場では、段ボールや資材、機材の運搬に台車が欠かせません。トラスコ中山の軽量樹脂台車「カルティオ」は、樹脂製で軽量・錆びにくいという特徴から、多くの現場で採用されています。しかし、シリーズ内にもサイズ・耐荷重・キャスター・ストッパーなど複数のバリエーションがあり、「どれを選べばよいか分からない」と感じる方も少なくありません。
          </p>

          <ConclusionBox>
            <strong>結論：</strong>
            カルティオを選ぶときは、①運搬する荷物の最大サイズと重量、②床面（静音が必要か）、③ストッパーの要否の3点を先に整理すると、候補を絞り込みやすくなります。耐荷重・寸法の具体値はモデルごとに異なるため、最終判断は各商品ページの仕様でご確認ください。
          </ConclusionBox>

          {/* Section: Size */}
          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              サイズの選び方
            </h2>
            <ConclusionBox>
              天板（荷台）の幅×奥行は、運搬する最大荷物の寸法以上を目安に選びます。はみ出しすぎると重心が不安定になり、転倒や荷崩れのリスクが高まります。
            </ConclusionBox>
            <p className="text-lg leading-relaxed text-muted-foreground">
              カルティオには、コンパクトな小型から、段ボールを複数積める大型まで、いくつかのサイズ展開があります。倉庫の通路幅やエレベーターのサイズ、積み下ろし場所のスペースも合わせて確認してください。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              サイズ選定のチェックポイント
            </h3>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>・運搬する荷物の最大幅・奥行・高さ（積み重ねる場合は総高さも）</li>
              <li>・通路・ドア・エレベーターとのすき間</li>
              <li>・複数台車を並べて使う場合の収納スペース</li>
            </ul>
          </section>

          {/* Section: Load capacity */}
          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              耐荷重の選び方
            </h2>
            <ConclusionBox>
              耐荷重は「普段運ぶ荷物の最大重量＋α」で選びます。ギリギリの耐荷重で使い続けると、キャスターや本体への負担が増えるため、余裕を持った選定がおすすめです。
            </ConclusionBox>
            <p className="text-lg leading-relaxed text-muted-foreground">
              軽量樹脂台車は金属製より本体が軽い反面、モデルによっては耐荷重に上限があります。段ボール数箱の日常運搬と、機材・資材のまとめ運搬では、必要な耐荷重が大きく変わります。
            </p>

            <div className="mt-8 overflow-x-auto">
              <table className="min-w-[640px] w-full border-collapse text-left text-base">
                <thead>
                  <tr className="bg-foreground text-brand">
                    <th className="px-4 py-3 font-bold">用途イメージ</th>
                    <th className="px-4 py-3 font-bold">荷物の目安</th>
                    <th className="px-4 py-3 font-bold">耐荷重の考え方</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border bg-card">
                    <td className="px-4 py-3 font-medium text-foreground">
                      オフィス・店舗の日常運搬
                    </td>
                    <td className="px-4 py-3">段ボール1〜3箱、書類・備品</td>
                    <td className="px-4 py-3">100kg前後でも足りることが多い（要確認）</td>
                  </tr>
                  <tr className="border-b border-border bg-muted/30">
                    <td className="px-4 py-3 font-medium text-foreground">
                      倉庫・工場のピッキング
                    </td>
                    <td className="px-4 py-3">複数段ボール、部品箱</td>
                    <td className="px-4 py-3">150kgクラスを検討するケースあり</td>
                  </tr>
                  <tr className="border-b border-border bg-card">
                    <td className="px-4 py-3 font-medium text-foreground">
                      資材・機材のまとめ運搬
                    </td>
                    <td className="px-4 py-3">重量物・大型梱包</td>
                    <td className="px-4 py-3">200kgクラスや金属製台車の併用も検討</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              ※上表は一般的な選定観点の整理です。実際の耐荷重・使用条件は各商品ページでご確認ください。
            </p>
          </section>

          {/* Section: Casters */}
          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              静音キャスターと標準キャスターの違い
            </h2>
            <ConclusionBox>
              オフィス・店舗・病院など「音と床への傷」を気にする環境では静音・ノーマーキングキャスターが向きます。工場のコンクリート床で騒音が問題にならない場合は、標準タイプでも運用できることが多いです。
            </ConclusionBox>
            <p className="text-lg leading-relaxed text-muted-foreground">
              キャスターの材質や形状は、走行音・床への跡・耐久性に影響します。カルティオの一部モデルでは、静音タイプのキャスターが選べる場合があります。既存の床材（タイル・塩ビ・エポキシ等）に合わせて選ぶと、床のメンテナンス負担を抑えやすくなります。
            </p>

            <div className="mt-8 overflow-x-auto">
              <table className="min-w-[640px] w-full border-collapse text-left text-base">
                <thead>
                  <tr className="bg-foreground text-white">
                    <th className="px-4 py-3 font-bold">比較項目</th>
                    <th className="px-4 py-3 font-bold">標準キャスター</th>
                    <th className="px-4 py-3 font-bold">静音・ノーマーキング</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border bg-card">
                    <td className="px-4 py-3 font-medium text-foreground">走行音</td>
                    <td className="px-4 py-3">やや大きめになりやすい</td>
                    <td className="px-4 py-3">抑えめ</td>
                  </tr>
                  <tr className="border-b border-border bg-muted/30">
                    <td className="px-4 py-3 font-medium text-foreground">床への跡</td>
                    <td className="px-4 py-3">床材によっては跡がつくことも</td>
                    <td className="px-4 py-3">ノーマーキング設計が多い</td>
                  </tr>
                  <tr className="border-b border-border bg-card">
                    <td className="px-4 py-3 font-medium text-foreground">向いている現場</td>
                    <td className="px-4 py-3">工場・倉庫（コンクリート床）</td>
                    <td className="px-4 py-3">オフィス・店舗・病院・ホテル</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Stoppers */}
          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              ストッパー付きを選ぶべき場面
            </h2>
            <ConclusionBox>
              傾斜や段差のある場所、荷物の積み下ろし中に台車が動くのを防ぎたい場合は、ストッパー付きが有効です。平坦な屋内で常に動かす運用なら、ストッパーなしでも問題ない現場もあります。
            </ConclusionBox>
            <p className="text-lg leading-relaxed text-muted-foreground">
              ストッパーは片側2輪に付くタイプが一般的です。ブレーキをかけた状態で荷物を積み下ろすと、作業者の安全面でも安心感が増します。一方、頻繁に動かす作業では、ストッパーのオン・オフが手間になることもあるため、作業フローに合わせて選んでください。
            </p>
          </section>

          {/* Use case matrix */}
          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              現場別の選定早見表
            </h2>
            <ConclusionBox>
              現場の床面・荷物・作業動線を先に書き出すと、サイズ・耐荷重・キャスター・ストッパーの優先順位が見えてきます。
            </ConclusionBox>
            <div className="mt-6 overflow-x-auto">
              <table className="min-w-[640px] w-full border-collapse text-left text-base">
                <thead>
                  <tr className="bg-foreground text-brand">
                    <th className="px-4 py-3 font-bold">現場</th>
                    <th className="px-4 py-3 font-bold">サイズ</th>
                    <th className="px-4 py-3 font-bold">キャスター</th>
                    <th className="px-4 py-3 font-bold">ストッパー</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border bg-card">
                    <td className="px-4 py-3 font-medium text-foreground">倉庫・物流</td>
                    <td className="px-4 py-3">中〜大型</td>
                    <td className="px-4 py-3">標準で可</td>
                    <td className="px-4 py-3">あると便利</td>
                  </tr>
                  <tr className="border-b border-border bg-muted/30">
                    <td className="px-4 py-3 font-medium text-foreground">工場内</td>
                    <td className="px-4 py-3">荷物に合わせて</td>
                    <td className="px-4 py-3">標準で可</td>
                    <td className="px-4 py-3">積み下ろし多ければ推奨</td>
                  </tr>
                  <tr className="border-b border-border bg-card">
                    <td className="px-4 py-3 font-medium text-foreground">店舗・オフィス</td>
                    <td className="px-4 py-3">小型〜中型</td>
                    <td className="px-4 py-3">静音推奨</td>
                    <td className="px-4 py-3">任意</td>
                  </tr>
                  <tr className="border-b border-border bg-muted/30">
                    <td className="px-4 py-3 font-medium text-foreground">建設現場（屋内）</td>
                    <td className="px-4 py-3">資材サイズに合わせる</td>
                    <td className="px-4 py-3">床面次第</td>
                    <td className="px-4 py-3">推奨</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Product card */}
          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              商品の一例
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              カルティオシリーズの一例です。サイズ・耐荷重・キャスター仕様は商品ページでご確認ください。
            </p>
            <div className="mt-8 max-w-md">
              <ProductCard
                name="軽量樹脂台車 カルティオ（例）"
                description="トラスコ中山の軽量樹脂台車カルティオ。樹脂製で軽量、現場での日常運搬に使いやすいシリーズです。"
                imageId="167468"
                links={{
                  yahoo:
                    "https://store.shopping.yahoo.co.jp/signcity-yshop/167468.html",
                }}
                utmContent="carutio_cart_guide_167468"
                note="サイズ・耐荷重・在庫は商品ページでご確認ください。"
              />
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              よくあるご質問
            </h2>
            <div className="mt-6 space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-border bg-card"
                >
                  <summary className="cursor-pointer list-none px-6 py-4 font-bold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {item.q}
                      <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-open:rotate-90" />
                    </span>
                  </summary>
                  <div className="border-t border-border px-6 py-4 text-base leading-relaxed text-muted-foreground">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Summary */}
          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">まとめ</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              カルティオを選ぶときは、運搬する荷物のサイズと重量を起点に、耐荷重・キャスター（静音の要否）・ストッパーの順で確認するのが効率的です。樹脂製の軽量さは日常運搬の負担を減らす一方、用途を超えた重量物の運搬には向かない場合もあるため、荷物に合ったモデル選びが大切です。
            </p>
          </section>

          {/* Article CTA */}
          <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
            <h2 className="text-2xl font-black text-white">作業用品を探す</h2>
            <p className="mt-3 text-footer-muted">
              台車・運搬具は各ストアで取り扱いがあります。在庫・価格は商品ページでご確認ください。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={buildUrl(STORE_LINKS.gcSelect, "carutio_cart_guide_cta_gc")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-store-gc-select px-5 py-3 text-sm font-bold text-white transition hover:bg-store-gc-select-hover"
              >
                GCセレクト
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={buildUrl(
                  STORE_LINKS.rakuten,
                  "carutio_cart_guide_cta_rakuten"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-store-rakuten px-5 py-3 text-sm font-bold text-white transition hover:bg-store-rakuten-hover"
              >
                楽天市場
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={buildUrl(STORE_LINKS.yahoo, "carutio_cart_guide_cta_yahoo")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-5 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover"
              >
                Yahoo!ショッピング
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </section>

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-black text-foreground">関連記事</h2>
              <ul className="mt-4 space-y-2">
                {relatedArticles.map((article) => (
                  <li key={article.slug}>
                    <Link
                      href={article.path}
                      className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
                    >
                      {article.shortTitle}
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-10 text-center">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-bold text-foreground transition hover:border-primary/30"
            >
              記事一覧に戻る
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-12 border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground">
            運営：
            <a
              href="https://trade-sign.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:underline"
            >
              株式会社トレード
            </a>
            ｜掲載内容は一般的な選定基準の整理を目的としています。耐荷重・サイズ・在庫などの具体仕様は、各商品ページでご確認ください。
          </p>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
