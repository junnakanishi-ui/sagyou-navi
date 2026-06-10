import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Clock,
  ExternalLink,
  FileText,
  Scale,
  Wrench,
} from "lucide-react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { ARTICLES } from "@/lib/articles";
import {
  COMPACT_CATEGORIES,
  FEATURED_CATEGORIES,
  categoryImagePath,
} from "@/lib/categories";
import { buildUrl, STORE_LINKS } from "@/lib/product-links";

const siteFeatures = [
  {
    slug: "guide",
    label: "選び方ガイド",
    subtitle: "判断軸を整理",
    description:
      "サイズ・耐荷重・仕様など、現場で迷いやすいポイントを判断軸として整理します。",
    icon: BookOpen,
    href: "/articles?category=guide",
  },
  {
    slug: "compare",
    label: "比較・違い",
    subtitle: "似た商品を見極め",
    description:
      "シリーズ内の違いや、似たカテゴリ同士の使い分けを、表と解説で比較します。",
    icon: Scale,
    href: "/articles?category=compare",
  },
  {
    slug: "howto",
    label: "使い方・コツ",
    subtitle: "現場で長く使う",
    description:
      "日常運用・メンテナンス・保管のコツなど、現場で長持ちさせるポイントを解説します。",
    icon: Wrench,
    href: "/articles?category=howto",
  },
];

const problemCards = [
  "台車の耐荷重、どこまで必要かわからない",
  "似た商品が多くて、違いが判断できない",
  "現場で長持ちする選び方の基準が知りたい",
  "法人でまとめて買うとき、何を確認すべき？",
];

const heroStats = [
  { value: "25+", label: "取扱カテゴリ" },
  { value: "3", label: "運営ストア（GCセレクト/楽天/Yahoo!）" },
  { value: "販売事業者", label: "運営は株式会社トレード" },
];

const topFaqItems = [
  {
    q: "作業用品ナビはどんなサイトですか？",
    a: "作業用品ナビは、工場・倉庫・建設・物流現場で使う作業用品（台車・運搬具・工具・消耗品など）の選び方・違い・使い方を解説するメディアです。株式会社トレードが運営し、実際にGCセレクト・楽天・Yahoo!ショッピングで商品を販売している事業者が、現場担当者・購買担当者向けにナビゲートします。",
  },
  {
    q: "商品はどこで買えますか？",
    a: "記事内のリンクから、GCセレクト（自社EC）・楽天市場 anzenkiki・Yahoo!ショッピング signcity-yshop のいずれかでご購入いただけます。商品によって掲載ストアが異なる場合があります。価格・在庫・配送条件は各ストアの商品ページでご確認ください。",
  },
  {
    q: "カルティオとは何ですか？",
    a: "カルティオは、トラスコ中山（TRUSCO）の軽量樹脂台車シリーズのブランド名です。樹脂製の軽量台車として、工場・倉庫・店舗などでの荷物運搬に広く使われています。サイズ・耐荷重・キャスター仕様など、シリーズ内でも複数のバリエーションがあります。",
  },
  {
    q: "記事の情報は信頼できますか？",
    a: "運営元の株式会社トレードは、看板・安全用品の販売実績を持つ事業会社（グリーンクロスグループ）です。記事はメーカー公表情報と一般的な選定基準に基づいて執筆しています。具体の耐荷重・寸法・在庫は、必ず各商品ページでご確認ください。",
  },
  {
    q: "法人・大量購入の相談はできますか？",
    a: "GCセレクトや各モール店舗を通じてご購入いただけます。大口・法人向けのご相談については、運営会社である株式会社トレード（trade-sign.jp）までお問い合わせください。",
  },
  {
    q: "カテゴリページの商品はすべて在庫がありますか？",
    a: "カテゴリページに掲載されている商品は、各ストアの在庫状況に応じて変動します。在庫切れや入荷待ちの場合もあるため、ご購入前に各商品ページで在庫・納期をご確認ください。",
  },
  {
    q: "掲載していない商品の相談はできますか？",
    a: "サイトに掲載していない作業用品についても、運営会社である株式会社トレードへのお問い合わせでご相談いただけます。取扱カテゴリは25種以上あり、ストアに掲載のない商品もお取り寄せできる場合があります。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: topFaqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const storeCtas = [
  {
    name: "GCセレクト",
    description: "自社EC公式ストア。作業用品を幅広く取り扱い。",
    url: STORE_LINKS.gcSelect,
    utm: "top_cta_gc_select",
    buttonClass:
      "bg-store-gc-select hover:bg-store-gc-select-hover text-white",
  },
  {
    name: "楽天市場 anzenkiki",
    description: "楽天市場での運営店舗。",
    url: STORE_LINKS.rakuten,
    utm: "top_cta_rakuten",
    buttonClass:
      "bg-store-rakuten hover:bg-store-rakuten-hover text-white",
  },
  {
    name: "Yahoo!ショッピング",
    description: "signcity-yshop 運営店舗。",
    url: STORE_LINKS.yahoo,
    utm: "top_cta_yahoo",
    buttonClass:
      "bg-store-yahoo hover:bg-store-yahoo-hover text-white",
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand">
      {children}
    </p>
  );
}

function formatDate(date: string): string {
  const [year, month, day] = date.split("-");
  return `${year}年${Number(month)}月${Number(day)}日`;
}

export default function HomePage() {
  const availableArticles = ARTICLES.filter((a) => a.available);
  const featuredArticles = availableArticles.slice(0, 4);
  const showPlaceholders = availableArticles.length < 3;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />

      <main className="flex-1">
        {/* ① Hero */}
        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="order-2 lg:order-1">
                <p className="mb-5 inline-flex items-center rounded-full bg-foreground px-4 py-1.5 text-sm font-bold text-brand">
                  工場・倉庫・建設現場の調達担当者向け
                </p>
                <h1 className="text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
                  現場の
                  <span className="marker-highlight">「どれを選ぶ」</span>
                  を、ナビゲート。
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  作業用品ナビは、台車・作業台・工具・保護具など現場の作業用品25カテゴリの「選び方・違い・使い方」を、実際に販売する事業者が解説するメディアです。カタログの読み替えではなく、購買担当者・現場リーダーが迷うポイントを整理します。
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#categories"
                    className="inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 text-base font-bold text-brand transition hover:bg-foreground/90"
                  >
                    カテゴリから探す
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="/articles"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-foreground bg-background px-6 py-3 text-base font-bold text-foreground transition hover:bg-muted"
                  >
                    記事を読む
                  </Link>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src="/images/top/hero.jpg"
                    alt="作業用品ナビ — 現場の作業用品選びをナビゲート"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-6 border-t border-border pt-10 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black text-foreground underline decoration-brand decoration-4 underline-offset-4 md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-1 bg-stripe-caution" aria-hidden />
        </section>

        {/* ② Problems */}
        <section className="bg-base-soft py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionLabel>PROBLEMS</SectionLabel>
            <h2 className="text-2xl font-black text-foreground md:text-3xl">
              こんな&quot;選べない&quot;、ありませんか？
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {problemCards.map((text, i) => (
                <div
                  key={text}
                  className="relative rounded-2xl border-2 border-foreground bg-card p-6 shadow-sm"
                >
                  <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-black text-foreground">
                    {i + 1}
                  </span>
                  <p className="text-base font-bold leading-snug text-foreground">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-base font-medium text-muted-foreground">
              作業用品ナビは、売り場を知る事業者の目線でこの疑問に答えます。
            </p>
          </div>
        </section>

        {/* ③ Categories */}
        <section id="categories" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionLabel>CATEGORIES</SectionLabel>
            <h2 className="text-2xl font-black text-foreground md:text-3xl">
              作業用品カテゴリから探す
            </h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              台車・作業台・工具・保護具など、現場でよく使う作業用品を25カテゴリに整理しました。カテゴリページから商品を探せます。
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {FEATURED_CATEGORIES.map((category) => (
                <a
                  key={category.slug}
                  href={buildUrl(
                    category.yahooUrl,
                    `top_category_${category.slug}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-brand"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={categoryImagePath(category.slug)}
                      alt={category.name}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-black text-foreground">{category.name}</p>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                      {category.description}
                    </p>
                    <p className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-foreground group-hover:text-brand-strong">
                      商品を見る
                      <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-card p-5 md:p-6">
              <p className="mb-4 text-sm font-bold text-muted-foreground">
                その他のカテゴリ
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {COMPACT_CATEGORIES.map((category) => (
                  <a
                    key={category.slug}
                    href={buildUrl(
                      category.yahooUrl,
                      `top_category_${category.slug}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-foreground transition hover:bg-brand-soft"
                  >
                    <ChevronRight
                      className="h-4 w-4 shrink-0 text-brand"
                      aria-hidden
                    />
                    <span className="group-hover:underline-marker">
                      {category.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              商品はGCセレクト・楽天市場・Yahoo!ショッピングで購入できます →{" "}
              <a
                href="#stores"
                className="font-bold text-foreground underline decoration-brand decoration-2 underline-offset-2 hover:text-brand-strong"
              >
                ストア一覧へ
              </a>
            </p>
          </div>
        </section>

        {/* ④ Site features */}
        <section className="bg-foreground py-16 text-secondary-foreground md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionLabel>FEATURES</SectionLabel>
            <h2 className="text-2xl font-black text-white md:text-3xl">
              このサイトでできること
            </h2>
            <p className="mt-3 max-w-2xl text-footer-muted">
              作業用品の選び方・比較・使い方を、現場目線で整理した記事を公開しています。
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {siteFeatures.map((feature) => (
                <Link
                  key={feature.slug}
                  href={feature.href}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-brand/50 hover:bg-white/10"
                >
                  <feature.icon
                    className="mb-4 h-8 w-8 text-brand"
                    aria-hidden
                  />
                  <p className="text-lg font-black text-white">
                    {feature.label}
                    <span className="mt-1 block text-sm font-bold text-brand">
                      {feature.subtitle}
                    </span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-footer-muted">
                    {feature.description}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand">
                    記事を見る
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ⑤ Articles */}
        <section className="bg-base-soft py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <SectionLabel>ARTICLES</SectionLabel>
                <h2 className="text-2xl font-black text-foreground md:text-3xl">
                  新着・注目記事
                </h2>
                <p className="mt-2 text-muted-foreground">
                  現場でよく聞かれるテーマから順次公開しています。
                </p>
              </div>
              <Link
                href="/articles"
                className="hidden shrink-0 items-center gap-1 text-sm font-bold text-foreground hover:underline sm:inline-flex"
              >
                すべて見る
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={article.path}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:border-brand hover:shadow-md"
                >
                  <div className="relative h-44 bg-muted">
                    {article.thumbnail && (
                      <Image
                        src={article.thumbnail}
                        alt={article.shortTitle}
                        fill
                        className="object-cover transition group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    )}
                  </div>
                  <div className="p-5">
                    <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-bold text-foreground">
                      {article.categoryLabel}
                    </span>
                    <h3 className="mt-2 font-bold text-foreground group-hover:underline">
                      {article.shortTitle}
                    </h3>
                    <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{formatDate(article.date)}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}

              {showPlaceholders &&
                [0, 1].map((i) => (
                <div
                  key={`placeholder-${i}`}
                  className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-foreground bg-card px-6 py-16 text-center"
                >
                  <FileText
                    className="mb-3 h-10 w-10 text-brand"
                    aria-hidden
                  />
                  <p className="font-bold text-foreground">順次公開予定</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    選び方・比較・使い方の記事を準備中です
                  </p>
                </div>
                ))}
            </div>

            <Link
              href="/articles"
              className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-foreground hover:underline sm:hidden"
            >
              すべての記事を見る
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* ⑥ SEO text */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionLabel>GUIDE</SectionLabel>
            <h2 className="text-2xl font-black text-foreground md:text-3xl">
              失敗しない作業用品選び・3つの視点
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              作業用品はカテゴリが多く、似た名称の商品も並ぶため、「とりあえず安いもの」や「以前と同じ型番」で選ぶと、現場で耐荷重不足・騒音・保管スペースの問題につながることがあります。失敗を減らすには、用途・環境・安全の3つの視点で先に整理するのが有効です。
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="text-xl font-black text-foreground">
                  視点1：用途と負荷
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  用途と負荷とは、何を・どれだけ・どの頻度で運ぶ・使うかを具体的に定義することです。台車なら最大荷物のサイズと重量、1日の往復回数、複数人で使うかどうかが判断の起点になります。耐荷重は「最大荷重＋余裕」で選ぶのが基本で、例えば段ボール数箱の日常運搬と機材のまとめ運搬では、必要な耐荷重が大きく異なります。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black text-foreground">
                  視点2：現場環境
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  現場環境とは、屋内外・床面の材質・騒音配慮・保管スペースの有無を含む条件です。同じ台車でも、工場のコンクリート床と店舗のタイル床ではキャスターの選び方が変わります。折りたたみ式が必要なのは保管スペースが限られる現場、静音タイプが必要なのはオフィスや病院など音を抑えたい場所です。環境を先に書き出すと、候補商品を絞り込みやすくなります。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black text-foreground">
                  視点3：安全と規格
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  安全と規格とは、耐荷重表示の信頼性・保護具の規格適合・日常点検のしやすさを確認することです。作業用品はJISや各メーカーの公称値で性能が示されますが、実際の使用条件を超えないか必ず照合してください。保護具は用途に応じた規格（ヘルメット・手袋・保護メガネなど）を満たすものを選び、法人調達では納品書・規格表示の確認も重要です。点検しやすい構造かどうかも、長期運用のコストに直結します。
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-12 h-1 max-w-6xl bg-stripe-caution px-4 md:px-6" aria-hidden />
        </section>

        {/* ⑦ About */}
        <section
          id="about"
          className="bg-base-soft py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionLabel>ABOUT</SectionLabel>
            <h2 className="text-2xl font-black text-foreground md:text-3xl">
              作業用品ナビとは
            </h2>
            <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  作業用品ナビは、
                  <strong className="text-foreground">株式会社トレード</strong>
                  （グリーンクロスグループ）が運営するメディアです。看板・安全用品の販売実績を持つ事業会社が、GCセレクト・楽天市場・Yahoo!ショッピングで実際に作業用品を販売している立場から、「売り場を知る目線」で選び方を解説します。
                </p>
                <p>
                  台車の耐荷重は現場の荷物に足りているか、キャスターは静音タイプが必要か、ストッパーは片側でよいか——そうした実務的な疑問に答えることを目的としています。メーカー公表情報と一般的な選定基準に基づき、具体仕様は各商品ページでの確認をおすすめします。
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:underline"
                >
                  運営者情報を詳しく見る
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src="/images/top/about.jpg"
                  alt="作業用品ナビの運営 — 株式会社トレード"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ⑧ FAQ */}
        <section id="faq" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-2xl font-black text-foreground md:text-3xl">
              よくあるご質問
            </h2>
            <div className="mt-8 space-y-3">
              {topFaqItems.map((item) => (
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
          </div>
        </section>

        {/* ⑨ Store CTA */}
        <section
          id="stores"
          className="border-t border-border bg-footer-bg py-16 text-footer-text md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-2xl font-black text-white md:text-3xl">
              作業用品を探す
            </h2>
            <p className="mt-3 text-footer-muted">
              記事で紹介している商品は、以下のストアでご購入いただけます。同一商品でもストアにより価格・在庫が異なる場合があります。
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {storeCtas.map((store) => (
                <div
                  key={store.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="font-bold text-white">{store.name}</p>
                  <p className="mt-2 text-sm text-footer-muted">
                    {store.description}
                  </p>
                  <a
                    href={buildUrl(store.url, store.utm)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition ${store.buttonClass}`}
                  >
                    ストアを見る
                    <ExternalLink className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
