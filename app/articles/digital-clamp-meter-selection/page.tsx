import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const slug = "digital-clamp-meter-selection";
const siteUrl = "https://www.sagyou-navi.com";
const canonicalUrl = `${siteUrl}/articles/${slug}`;
const UTM =
  "utm_source=sagyou_navi&utm_medium=article&utm_campaign=digital-clamp-meter-selection";
const heroImage = `/images/${slug}/digital-clamp-meter-selection-hero.webp`;
const IMG = {
  hero: heroImage,
  types: `/images/${slug}/clamp-meter-types-comparison.webp`,
  load: `/images/${slug}/clamp-meter-load-current-one-conductor.webp`,
  leak: `/images/${slug}/leakage-current-clamp-inspection.webp`,
  acdc: `/images/${slug}/ac-dc-clamp-meter-ev-maintenance.webp`,
  thermal: `/images/${slug}/electrical-panel-thermal-and-current-inspection.webp`,
  checklist: `/images/${slug}/clamp-meter-procurement-checklist.webp`,
};

const title =
  "デジタルクランプメーターの選び方｜AC/DC・漏れ電流・真の実効値の違い【2026年版】";
const description =
  "デジタルクランプメーターの選び方を、負荷電流用・漏れ電流用、AC専用・AC/DC両用、平均値・真の実効値、最大電流、クランプ径で比較。分電盤、空調設備、モーター、EV、漏電調査に合う代表機種を解説します。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "デジタルクランプメーターの選び方【2026年版】",
    description: "AC/DC・漏れ電流・真の実効値の違いを用途別に比較。",
    url: canonicalUrl,
    siteName: "作業用品ナビ",
    type: "article",
    publishedTime: "2026-07-31",
    modifiedTime: "2026-07-31",
    images: [
      {
        url: `${siteUrl}${heroImage}`,
        width: 1600,
        height: 900,
        alt: "夏の工場で電気設備担当者がデジタルクランプメーターを使って点検するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "デジタルクランプメーターの選び方【2026年版】",
    description: "AC/DC・漏れ電流・真の実効値の違いを比較",
    images: [`${siteUrl}${heroImage}`],
  },
};

type Product = {
  id: string;
  name: string;
  badge: string;
  type: string;
  current: string;
  rms: string;
  clamp: string;
  use: string;
  feature: string;
  check: string;
  image: string;
  url: string;
};

type Related = { name: string; role: string; image: string; url: string };

const withUtm = (url: string) => {
  if (url.includes("utm_source=")) return url;
  return `${url}${url.includes("?") ? "&" : "?"}${UTM}`;
};

const ctas = [
  {
    label: "デジタルクランプメータ一覧",
    priority: "main" as const,
    description: "負荷電流用・漏れ電流用・AC/DC・真の実効値から用途別に比較",
    url: withUtm(
      "https://search.rakuten.co.jp/search/mall/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E3%82%AF%E3%83%A9%E3%83%B3%E3%83%97%E3%83%A1%E3%83%BC%E3%82%BF/?sid=426972"
    ),
  },
  {
    label: "電気工事工具一覧",
    priority: "sub" as const,
    description: "電設作業で使う関連工具をまとめて確認",
    url: withUtm(
      "https://search.rakuten.co.jp/search/mall/%E9%9B%BB%E6%B0%97%E5%B7%A5%E4%BA%8B/?sid=426972"
    ),
  },
  {
    label: "絶縁工具一覧",
    priority: "sub" as const,
    description: "測定・保守時の絶縁工具を確認",
    url: withUtm(
      "https://search.rakuten.co.jp/search/mall/%E7%B5%B6%E7%B8%81/?sid=426972"
    ),
  },
];

const products: Product[] = [
  {
    id: "model104plus",
    name: "MULTI ミニ・クランプリーカー MODEL104PLUS",
    badge: "漏れ電流用",
    type: "漏れ電流用",
    current: "AC微小漏れ電流向け",
    rms: "漏れ電流測定向け",
    clamp: "小型クランプ",
    use: "絶縁劣化や漏電の一次調査",
    feature: "通常の負荷電流用では捉えにくい微小な漏れ電流を確認する用途向け。",
    check: "負荷電流用クランプメーターの代用にはせず、測定対象と必要分解能を確認。",
    image: `/images/${slug}/products/ta026483-model104plus.webp`,
    url: withUtm(
      "https://item.rakuten.co.jp/crecote-shop/ta026483-model104plus/"
    ),
  },
  {
    id: "model2020",
    name: "MULTI ミニクランプメーター MODEL2020",
    badge: "AC負荷電流用",
    type: "AC負荷電流用",
    current: "AC 30/300A",
    rms: "標準測定",
    clamp: "φ40mm",
    use: "一般設備の負荷電流・電圧・抵抗確認",
    feature: "1台で交流電流、電圧、抵抗を確認しやすい基本モデル。",
    check: "直流電流や漏れ電流が必要な用途には別タイプを選ぶ。",
    image: `/images/${slug}/products/ta026491-model2020.webp`,
    url: withUtm("https://item.rakuten.co.jp/crecote-shop/ta026491-model2020/"),
  },
  {
    id: "dcm400",
    name: "SANWA AC専用デジタルクランプメータ DCM400",
    badge: "AC負荷電流用",
    type: "AC負荷電流用",
    current: "AC 40/400A",
    rms: "平均値方式",
    clamp: "φ25mm",
    use: "商用電源・一般負荷・周波数確認",
    feature: "AC負荷電流と周波数、電圧、抵抗を確認できる汎用機。",
    check: "インバーターなど歪んだ波形では真の実効値モデルを優先。",
    image: `/images/${slug}/products/ta023022-dcm400.webp`,
    url: withUtm("https://item.rakuten.co.jp/crecote-shop/ta023022-dcm400/"),
  },
  {
    id: "dcm60r",
    name: "SANWA AC専用真の実効値クランプメータ DCM60R",
    badge: "AC負荷電流用",
    type: "AC負荷電流用",
    current: "AC 最大600A",
    rms: "真の実効値",
    clamp: "φ25mm",
    use: "インバーター機器・空調サービス・一般設備",
    feature: "基本機能に絞りながら、歪んだ交流波形を測りやすい真の実効値対応。",
    check: "直流電流は測れないため、EV・バッテリー・太陽光用途はAC/DCモデルを選ぶ。",
    image: `/images/${slug}/products/ta023025-dcm60r.webp`,
    url: withUtm("https://item.rakuten.co.jp/crecote-shop/ta023025-dcm60r/"),
  },
  {
    id: "dcm600dr",
    name: "SANWA AC/DC真の実効値クランプメータ DCM600DR",
    badge: "AC/DC負荷電流用",
    type: "AC/DC負荷電流用",
    current: "AC/DC 最大600A",
    rms: "真の実効値",
    clamp: "φ30mm",
    use: "HV・EV・自動車・インバーター・設備保全",
    feature: "AC/DC、真の実効値、ピークホールドを備え、用途の幅が広い。",
    check: "漏れ電流専用の微小分解能が必要ならリーククランプを別途選ぶ。",
    image: `/images/${slug}/products/ta023024-dcm600dr.webp`,
    url: withUtm("https://item.rakuten.co.jp/crecote-shop/ta023024-dcm600dr/"),
  },
  {
    id: "dcm400ad",
    name: "SANWA AC/DCデジタルクランプメータ DCM400AD",
    badge: "AC/DC負荷電流用",
    type: "AC/DC負荷電流用",
    current: "AC/DC 40/400A",
    rms: "平均値方式",
    clamp: "φ25mm",
    use: "自動車整備・バッテリー回路・一般保全",
    feature: "AC/DC両方を測定でき、電圧、抵抗、導通も確認しやすい。",
    check: "インバーターや非正弦波を重視する場合は真の実効値モデルを選ぶ。",
    image: `/images/${slug}/products/ta023023-dcm400ad.webp`,
    url: withUtm("https://item.rakuten.co.jp/crecote-shop/ta023023-dcm400ad/"),
  },
  {
    id: "qt4400",
    name: "Mother Tool AC/DCデジタルクランプメーター QT-4400",
    badge: "AC/DC負荷電流用",
    type: "AC/DC負荷電流用",
    current: "AC/DC対応",
    rms: "用途・仕様を確認",
    clamp: "購入前に仕様確認",
    use: "交流・直流を横断する一般保全",
    feature: "AC/DC両方を測る現場で候補にしやすい汎用モデル。",
    check: "最大電流、クランプ径、安全カテゴリを測定対象と照合。",
    image: `/images/${slug}/products/ta026807-qt4400.webp`,
    url: withUtm("https://item.rakuten.co.jp/crecote-shop/ta026807-qt4400/"),
  },
  {
    id: "dcm660r",
    name: "SANWA AC真の実効値クランプメータ DCM660R",
    badge: "AC負荷電流用",
    type: "AC負荷電流用",
    current: "AC 最大660A",
    rms: "真の実効値",
    clamp: "購入前に導体径確認",
    use: "空調設備・モーター・突入電流確認",
    feature: "真の実効値に加え、突入電流、MAX/MIN、周波数測定に対応。",
    check: "直流回路や漏れ電流には用途別モデルを使う。",
    image: `/images/${slug}/products/ta023026-dcm660r.webp`,
    url: withUtm("https://item.rakuten.co.jp/crecote-shop/ta023026-dcm660r/"),
  },
  {
    id: "mt119",
    name: "Mother Tool 微弱電流用AC/DCクランプメーター MT-119",
    badge: "AC/DC微弱電流用",
    type: "AC/DC微弱電流用",
    current: "微弱電流測定向け",
    rms: "真の実効値対応モデル",
    clamp: "小径配線向け",
    use: "待機電流・微弱直流・車載系・制御回路",
    feature: "一般的な大電流クランプでは読みづらい小さな電流を確認しやすい。",
    check: "大電流設備や漏れ電流専用測定との用途差を整理する。",
    image: `/images/${slug}/products/ta026555-mt119.webp`,
    url: withUtm("https://item.rakuten.co.jp/crecote-shop/ta026555-mt119/"),
  },
  {
    id: "mt120",
    name: "Mother Tool AC/DC真の実効値クランプメーター MT-120",
    badge: "AC/DC負荷電流用",
    type: "AC/DC負荷電流用",
    current: "AC/DC対応",
    rms: "真の実効値",
    clamp: "購入前に導体径確認",
    use: "自動車・設備・突入電流確認",
    feature: "AC/DC、真の実効値、ピークホールドを備え、汎用性が高い。",
    check: "必要な最大電流、安全カテゴリ、分解能を対象設備と照合。",
    image: `/images/${slug}/products/ta026556-mt120.webp`,
    url: withUtm("https://item.rakuten.co.jp/crecote-shop/ta026556-mt120/"),
  },
  {
    id: "dcm2000dr",
    name: "SANWA AC/DC真の実効値クランプメータ DCM2000DR",
    badge: "AC/DC大電流用",
    type: "AC/DC大電流用",
    current: "AC最大2000A・DC対応",
    rms: "真の実効値",
    clamp: "大電流設備向け",
    use: "受電設備・大容量モーター・幹線",
    feature: "大電流、真の実効値、VFD向け機能などを備える上位候補。",
    check: "CAT区分、導体サイズ、測定権限、作業手順を厳格に確認。",
    image: `/images/${slug}/products/ta023021-dcm2000dr.webp`,
    url: withUtm("https://item.rakuten.co.jp/crecote-shop/ta023021-dcm2000dr/"),
  },
  {
    id: "hioki328010f",
    name: "HIOKI ACクランプメータ 3280-10F",
    badge: "AC負荷電流用",
    type: "AC負荷電流用",
    current: "AC 最大1000A",
    rms: "平均値方式",
    clamp: "薄型・φ33mm",
    use: "狭い盤内・一般AC設備・携帯性重視",
    feature: "薄型・小型で、広い使用温度範囲を持つ携帯しやすいACモデル。",
    check: "歪み波形には真の実効値モデルを優先。直流電流は測れない。",
    image: `/images/${slug}/products/ta021785-328010f.webp`,
    url: withUtm("https://item.rakuten.co.jp/crecote-shop/ta021785-328010f/"),
  },
  {
    id: "ad5586",
    name: "A&D AC/DCクランプメーター AD-5586",
    badge: "AC/DC負荷電流用",
    type: "AC/DC負荷電流用",
    current: "AC/DC 最大400A",
    rms: "標準測定",
    clamp: "φ28mm",
    use: "汎用設備・車載・電圧抵抗も確認したい現場",
    feature: "AC/DC電流のほか、電圧、抵抗、周波数、導通などを確認できる多機能型。",
    check: "真の実効値が必要なインバーター用途は別モデルと比較。",
    image: `/images/${slug}/products/ta022368-ad5586.webp`,
    url: withUtm("https://item.rakuten.co.jp/crecote-shop/ta022368-ad5586/"),
  },
];

const byId = (id: string) => products.find((p) => p.id === id)!;
const earlyProducts = [
  byId("model104plus"),
  byId("dcm60r"),
  byId("dcm600dr"),
  byId("mt119"),
];

const related: Related[] = [
  {
    name: "HIOKI デジタルマルチメータ DT4255",
    role: "電圧・抵抗・導通などの詳細確認",
    image: `/images/${slug}/products/ta023170-dt4255.webp`,
    url: withUtm("https://item.rakuten.co.jp/crecote-shop/ta023170-dt4255/"),
  },
  {
    name: "FLIR コンパクトサーモグラフィ C5",
    role: "盤内や端子部の温度分布を非接触で確認",
    image: `/images/${slug}/products/ta022221-894010202.webp`,
    url: withUtm("https://item.rakuten.co.jp/crecote-shop/ta022221-894010202/"),
  },
  {
    name: "HIOKI 接地抵抗計 FT6031-50",
    role: "接地抵抗の確認",
    image: `/images/${slug}/products/ta023563-ft603150.webp`,
    url: withUtm("https://item.rakuten.co.jp/crecote-shop/ta023563-ft603150/"),
  },
  {
    name: "PANDUIT 電気工事用ロックアウトキット",
    role: "点検・保守時の誤投入防止",
    image: `/images/${slug}/products/ta063478-pslktcona.webp`,
    url: withUtm("https://item.rakuten.co.jp/crecote-shop/ta063478-pslktcona/"),
  },
];

const faqs = [
  {
    q: "クランプメーターは1本の電線だけを挟むのですか？",
    a: "負荷電流測定では、原則として測りたい導体1本を挟みます。往復線をまとめて挟むと磁界が打ち消し合います。漏れ電流測定では複数導体をまとめて挟む方法がありますが、目的と専用機が異なります。",
  },
  {
    q: "漏れ電流用と負荷電流用は兼用できますか？",
    a: "漏れ電流用の中には負荷電流も測れるモデルがありますが、一般の負荷電流用で微小な漏れ電流を測れるとは限りません。仕様を確認してください。",
  },
  {
    q: "AC/DC両用を買えば、どの設備でも使えますか？",
    a: "いいえ。真の実効値、漏れ電流、最大電流、周波数帯域、クランプ径、CAT区分は別の条件です。",
  },
  {
    q: "真の実効値は必ず必要ですか？",
    a: "一般的な正弦波に近い回路では平均値方式も選択肢です。インバーター、VFD、スイッチング電源など波形が歪みやすい設備では、真の実効値を優先します。",
  },
  {
    q: "クランプメーターとサーモグラフィーはどう使い分けますか？",
    a: "サーモグラフィーは異常発熱の候補を探し、クランプメーターは流れている電流を確認します。片方だけで原因を断定せず、設備情報や他の測定結果と組み合わせます。",
  },
  {
    q: "分電盤が熱いとき、自分で測定してもよいですか？",
    a: "盤を開ける、活線部へ近づく、高電圧回路を測る作業には重大な危険があります。無資格者や未教育者は行わず、電気工事店、電気主任技術者、保安管理担当へ相談してください。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: [`${siteUrl}${heroImage}`],
  datePublished: "2026-07-31",
  dateModified: "2026-07-31",
  author: { "@type": "Organization", name: "作業用品ナビ編集部", url: siteUrl },
  publisher: { "@type": "Organization", name: "作業用品ナビ", url: siteUrl },
  mainEntityOfPage: canonicalUrl,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: `${siteUrl}/articles` },
    {
      "@type": "ListItem",
      position: 3,
      name: "デジタルクランプメーターの選び方",
      item: canonicalUrl,
    },
  ],
};

function Mark({ children }: { children: ReactNode }) {
  return <mark className={cls.mark}>{children}</mark>;
}
function P({ children }: { children: ReactNode }) {
  return <p className={cls.body}>{children}</p>;
}
function H2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className={`${cls.h2} scroll-mt-24`}>
      {children}
    </h2>
  );
}
function H3({ children }: { children: ReactNode }) {
  return <h3 className={cls.h3}>{children}</h3>;
}
function Ul({ children }: { children: ReactNode }) {
  return <ul className={cls.list}>{children}</ul>;
}
function Ol({ children }: { children: ReactNode }) {
  return (
    <ol className="my-4 list-decimal space-y-2 pl-6 leading-[1.95] tracking-[0.04em] text-gray-900">
      {children}
    </ol>
  );
}
function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 900px"
        />
      </div>
    </figure>
  );
}
function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm">
      <span className="inline-flex rounded-full bg-gray-900 px-3 py-1 text-xs font-bold text-white">
        {product.badge}
      </span>
      <div className="mt-4 grid gap-5 md:grid-cols-[180px_1fr]">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          <Image
            src={product.image}
            alt={`${product.name}の商品画像`}
            width={720}
            height={540}
            className="h-full min-h-40 w-full object-contain p-3"
          />
        </div>
        <div>
          <h3 className="text-lg font-black text-gray-900">{product.name}</h3>
          <dl className="mt-4 space-y-3 text-[15px] leading-7 text-gray-900">
            <div>
              <dt className="font-bold">向く用途</dt>
              <dd>{product.use}</dd>
            </div>
            <div>
              <dt className="font-bold">特徴</dt>
              <dd>{product.feature}</dd>
            </div>
            <div>
              <dt className="font-bold">購入前確認</dt>
              <dd>{product.check}</dd>
            </div>
          </dl>
          <div className="mt-5">
            <a
              href={product.url}
              target="_blank"
              rel="nofollow sponsored"
              className="inline-flex rounded-lg bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
            >
              楽天市場で見る
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
function CategoryCard({
  item,
}: {
  item: (typeof ctas)[number];
}) {
  const main = item.priority === "main";
  return (
    <a
      href={item.url}
      target="_blank"
      rel="nofollow sponsored"
      className={`rounded-xl border p-5 shadow-sm transition hover:-translate-y-0.5 ${
        main
          ? "border-orange-300 bg-orange-50 hover:bg-orange-100"
          : "border-gray-300 bg-white hover:border-gray-900"
      }`}
    >
      <span
        className={`text-base font-bold ${main ? "text-orange-800" : "text-gray-900"}`}
      >
        {item.label}
      </span>
      <span className="mt-2 block text-sm leading-6 text-gray-900">
        {item.description}
      </span>
    </a>
  );
}
function ProductTableCell({ product }: { product: Product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="nofollow sponsored"
      className="group flex min-w-[16rem] items-start gap-3 font-bold underline underline-offset-4"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded border border-gray-200 bg-gray-50">
        <Image
          src={product.image}
          alt={`${product.name}の商品画像`}
          fill
          sizes="80px"
          className="object-contain p-1.5"
        />
      </span>
      <span>{product.name}</span>
    </a>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="bg-white text-gray-900">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
          <nav aria-label="パンくず" className="text-sm text-gray-800">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="underline underline-offset-4">
                  ホーム
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/articles" className="underline underline-offset-4">
                  記事一覧
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>デジタルクランプメーターの選び方</li>
            </ol>
          </nav>
        </div>

        <article>
          <header className="border-y border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
              <p className="mb-3 text-sm font-bold text-orange-800">
                2026年7月31日 公開・更新
              </p>
              <h1 className={cls.h1}>{title}</h1>
              <div className={`mt-5 ${cls.meta}`}>
                <span>作業用品ナビ編集部</span>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
            <P>
              夏の工場、倉庫、店舗、事務所では、空調設備や冷却機器の稼働が増え、分電盤、配電盤、モーター回路などの負荷確認が重要になります。電線を切断せず、通電状態の電流を測定できるデジタルクランプメーターは、電気工事や設備保全で使いやすい計測器です。
            </P>
            <P>しかし、クランプメーターはどれも同じではありません。</P>
            <Ul>
              <li>負荷電流用と漏れ電流用</li>
              <li>AC専用とAC/DC両用</li>
              <li>平均値方式と真の実効値方式</li>
              <li>一般電流用と微弱電流用</li>
              <li>400A、600A、1000A、2000Aなどの測定範囲</li>
            </Ul>
            <P>
              この違いを見ずに購入すると、「漏れ電流が測れない」「直流を測れない」「インバーター設備で値が合わない」「太い幹線を挟めない」といった失敗につながります。
            </P>
            <P>
              この記事では、デジタルクランプメーターを用途から逆算して選ぶ方法と、代表機種の違い、夏の電気設備点検での使い分け、安全上の注意を整理します。
            </P>
            <div className="my-6 rounded-2xl border border-red-300 bg-red-50 p-5">
              <P>
                <strong>重要：</strong>
                分電盤・配電盤・高電圧設備の測定には感電・アーク・火災の危険があります。無資格者や教育を受けていない人が盤を開けたり、活線部へ近づいたりしないでください。測定は法令、社内手順、メーカー取扱説明書、CAT区分、保護具、ロックアウト手順に従い、必要な資格・権限を持つ担当者が行います。
              </P>
            </div>
            <SectionImage
              src={IMG.hero}
              alt="夏の工場で電気設備担当者がデジタルクランプメーターを使って点検するイメージ"
            />

            <section className="my-8 rounded-2xl border border-emerald-300 bg-emerald-50 p-6 md:p-8">
              <p className="text-sm font-bold text-gray-900">
                AEO回答：クランプメーターは何を基準に選ぶ？
              </p>
              <P>
                最初に<Mark>負荷電流か漏れ電流か</Mark>を分けます。一般AC設備なら
                <Mark>AC負荷電流用</Mark>、バッテリー・EV・太陽光なら
                <Mark>AC/DC両用</Mark>、インバーターなら
                <Mark>真の実効値</Mark>、漏電調査なら
                <Mark>漏れ電流用</Mark>
                が基本です。その後、最大電流、導体径、CAT区分を測定場所へ合わせます。
              </P>
              <div className="mt-4 flex flex-wrap gap-3">
                {ctas.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="nofollow sponsored"
                    className={
                      item.priority === "main"
                        ? "rounded-lg bg-orange-600 px-5 py-3 text-sm font-bold text-white hover:bg-orange-700"
                        : "rounded-lg border border-orange-200 bg-white px-4 py-2 text-sm font-bold text-orange-800 hover:bg-orange-50"
                    }
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </section>

            <H2 id="conclusion">
              結論：デジタルクランプメーターは5つの質問で選べます
            </H2>
            <P>購入前に、次の順番で確認してください。</P>
            <Ol>
              <li>
                <strong>負荷電流を測るのか、漏れ電流を測るのか</strong>
              </li>
              <li>
                <strong>交流だけか、直流も測るのか</strong>
              </li>
              <li>
                <strong>インバーターなど歪んだ波形を測るのか</strong>
              </li>
              <li>
                <strong>最大何Aまで測るか、電線の太さはどの程度か</strong>
              </li>
              <li>
                <strong>測定場所に必要なCAT区分を満たすか</strong>
              </li>
            </Ol>
            <H3>用途別の基本回答</H3>
            <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>測定したいもの</th>
                    <th className={cls.th}>選ぶタイプ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["工場・ビルの一般的な商用電源、空調、モーター", "AC負荷電流用"],
                    ["EV、バッテリー、太陽光、車載回路", "AC/DC両用"],
                    ["インバーター、VFD、スイッチング電源", "真の実効値対応"],
                    ["絶縁劣化、接地線、漏電調査", "漏れ電流用クランプリーカー"],
                    ["待機電流や小さな直流", "微弱電流用"],
                    ["幹線・大容量設備", "大電流対応＋必要なクランプ径"],
                  ].map(([a, b]) => (
                    <tr key={a}>
                      <td className={cls.td}>{a}</td>
                      <td className={cls.td}>
                        <Mark>{b}</Mark>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <P>
              まず商品群全体を確認したい方は、デジタルクランプメータ一覧から、測定対象に合うタイプへ絞り込んでください。
            </P>
            <section className="my-8 rounded-2xl border border-orange-200 bg-orange-50 p-6">
              <H3>最初に確認する商品カテゴリ</H3>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {ctas.map((item) => (
                  <CategoryCard key={item.url} item={item} />
                ))}
              </div>
            </section>

            <section className="my-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-xl font-black text-gray-900">目次</h2>
              <ol className="mt-4 grid gap-2 text-sm leading-7 text-gray-900 md:grid-cols-2">
                <li>1. 記事前半で確認したい4つの代表タイプ</li>
                <li>2. クランプメーターとマルチメーターの違い</li>
                <li>3. 負荷電流用と漏れ電流用</li>
                <li>4. AC専用とAC/DC両用</li>
                <li>5. 真の実効値と平均値方式</li>
                <li>6. 最大電流・クランプ径・CAT区分</li>
                <li>7. 用途別比較と代表機種</li>
                <li>8. 夏の電気設備点検と関連用品</li>
                <li>9. 安全・失敗例・法人チェックリスト</li>
                <li>10. FAQ・まとめ</li>
              </ol>
            </section>

            <H2 id="early-products">記事前半で確認したい4つの代表タイプ</H2>
            <SectionImage
              src={IMG.types}
              alt="負荷電流用・漏れ電流用・AC/DC用のクランプメーターを比較するイメージ"
            />
            <H3>1. 漏れ電流を調べる：MULTI MODEL104PLUS</H3>
            <P>
              MODEL104PLUSは、微小なAC漏れ電流を調べるためのクランプリーカーです。通常の負荷電流用クランプメーターでは、漏れ電流のような小さな電流を十分に読めない場合があります。
            </P>
            <P>
              向く用途は、絶縁劣化の兆候確認、接地線に流れる電流の確認、漏電調査です。
            </P>
            <P>
              <strong>購入前確認：</strong>
              漏れ電流用か、負荷電流用かを混同しないこと。必要な最小分解能、クランプ径、フィルター機能を確認します。
            </P>
            <H3>2. AC設備とインバーターを測る：SANWA DCM60R</H3>
            <P>
              DCM60RはAC専用で、最大600A、真の実効値方式に対応する基本モデルです。一般的な商用電源だけでなく、インバーターなど波形が歪む設備の測定候補になります。
            </P>
            <P>
              向く用途は、空調サービス、モーター、工場設備、一般的なAC負荷です。
            </P>
            <P>
              <strong>購入前確認：</strong>
              直流電流は測れません。バッテリーやEV、太陽光を測る場合はAC/DC両用を選びます。
            </P>
            <H3>3. AC/DCと真の実効値を広く使う：SANWA DCM600DR</H3>
            <P>
              DCM600DRはAC/DC最大600A、真の実効値、ピークホールドに対応します。設備保全、HV・EV、自動車、インバーター回路など、複数用途を1台でカバーしたい現場に向きます。
            </P>
            <P>
              <strong>購入前確認：</strong>
              一般の負荷電流には向きますが、漏れ電流専用の微小分解能が必要な場合はリーククランプを別に用意します。
            </P>
            <H3>4. 小さな電流を測る：Mother Tool MT-119</H3>
            <P>
              MT-119は、一般的な大電流クランプでは読みづらい微弱電流を測りたいときの候補です。待機電流、車載系、制御回路、小さな直流電流を確認したい担当者に向きます。
            </P>
            <P>
              <strong>購入前確認：</strong>
              微弱電流と漏れ電流は目的が同じとは限りません。何を、どの単位・分解能で測るかを先に決めます。
            </P>
            <div className="mt-6 grid gap-5">
              {earlyProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <H2 id="what-is">クランプメーターとは｜マルチメーターとの違い</H2>
            <P>
              クランプメーターは、電線の周囲に発生する磁界を検出し、回路を切断せずに電流を測定する計測器です。
            </P>
            <P>
              一般的なマルチメーターで電流を測る場合、回路へ直列に接続する必要があります。クランプメーターは被覆電線をジョーで挟むため、設備を運転した状態の電流を確認しやすいのが特徴です。
            </P>
            <P>
              ただし、「直接接続しないから、誰でも安全」という意味ではありません。盤内へ近づくこと自体に危険があり、テストリードで電圧や抵抗を測るモデルでは直接接続も発生します。
            </P>
            <H3>役割の違い</H3>
            <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>計測器</th>
                    <th className={cls.th}>主な役割</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["クランプメーター", "電線を挟んで負荷電流・漏れ電流を測る"],
                    ["デジタルマルチメーター", "電圧、抵抗、導通などを詳しく確認する"],
                    ["絶縁抵抗計", "絶縁状態を確認する"],
                    ["接地抵抗計", "接地抵抗を確認する"],
                    ["サーモグラフィー", "温度分布から異常発熱の候補を探す"],
                  ].map(([a, b]) => (
                    <tr key={a}>
                      <td className={cls.td}>
                        <strong>{a}</strong>
                      </td>
                      <td className={cls.td}>{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <P>
              クランプメーターだけですべての電気診断を完結させるのではなく、目的に応じて計測器を使い分けます。
            </P>

            <H2 id="load-vs-leak">
              最初に分けるべき「負荷電流用」と「漏れ電流用」
            </H2>
            <P>
              クランプメーター選びで最も重要なのは、負荷電流と漏れ電流を分けることです。
            </P>
            <SectionImage
              src={IMG.load}
              alt="クランプメーターで1本の導体の負荷電流を測定するイメージ"
            />
            <H3>負荷電流用</H3>
            <P>
              モーター、空調設備、ヒーター、照明、機械などが運転時にどの程度の電流を使っているか確認します。A単位の比較的大きな電流を測る用途です。
            </P>
            <P>一般的な使用例は次のとおりです。</P>
            <Ul>
              <li>空調設備の運転電流確認</li>
              <li>三相モーターの相ごとの電流比較</li>
              <li>分岐回路の負荷確認</li>
              <li>設備増設前の現状把握</li>
              <li>異常発熱箇所と負荷電流の関係確認</li>
            </Ul>
            <H3>漏れ電流用</H3>
            <SectionImage
              src={IMG.leak}
              alt="漏れ電流用クランプメーターで設備を点検するイメージ"
            />
            <P>
              絶縁劣化などで本来の経路以外へ流れる小さな電流を確認します。mAやμAレベルの感度が必要になるため、通常の負荷電流用では測れないことがあります。
            </P>
            <P>
              HIOKIも、漏れ電流測定には漏れ電流用クランプ電流計を使用し、通常のACクランプ電流計では微小な漏れ電流を測れないと説明しています。
            </P>
            <H3>挟み方の意味も異なる</H3>
            <P>
              負荷電流の測定では、原則として測りたい導体1本を挟みます。往復する2本をまとめて挟むと、磁界が打ち消し合い、負荷電流を正しく読めません。
            </P>
            <P>
              漏れ電流の測定では、複数の導体をまとめて挟み、その差分を見る方法があります。これは漏れ電流用の測定原理に基づくものであり、一般の負荷電流測定とは目的が違います。
            </P>
            <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>タイプ</th>
                    <th className={cls.th}>測定対象</th>
                    <th className={cls.th}>注意</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={cls.td}>負荷電流用</td>
                    <td className={cls.td}>モーター・空調・分岐回路</td>
                    <td className={cls.td}>原則1本の導体を挟む</td>
                  </tr>
                  <tr>
                    <td className={cls.td}>漏れ電流用</td>
                    <td className={cls.td}>絶縁劣化・漏電調査</td>
                    <td className={cls.td}>微小電流用の分解能が必要</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <H2 id="ac-dc">AC専用とAC/DC両用は何が違う？</H2>
            <SectionImage
              src={IMG.acdc}
              alt="EVやバッテリー設備でAC/DCクランプメーターを使うイメージ"
            />
            <H3>AC専用が向く現場</H3>
            <Ul>
              <li>ビル・工場の一般的な交流配電</li>
              <li>商用電源につながる空調設備</li>
              <li>交流モーター</li>
              <li>照明や一般負荷</li>
            </Ul>
            <P>
              ACだけを測る現場では、AC専用モデルのほうが価格・操作・携帯性のバランスを取りやすい場合があります。
            </P>
            <P>
              代表候補は、MULTI MODEL2020、SANWA DCM400、DCM60R、DCM660R、HIOKI
              3280-10Fです。
            </P>
            <H3>AC/DC両用が必要な現場</H3>
            <Ul>
              <li>自動車、HV、EV</li>
              <li>バッテリー、蓄電池</li>
              <li>太陽光発電</li>
              <li>直流制御回路</li>
              <li>AC設備とDC設備を同じ担当者が点検する現場</li>
            </Ul>
            <P>
              代表候補は、SANWA DCM600DR、DCM400AD、DCM2000DR、Mother Tool
              QT-4400、MT-119、MT-120、A&D AD-5586です。
            </P>
            <P>
              「AC/DC両用ならすべての用途に使える」とは限りません。漏れ電流の分解能、真の実効値、最大電流、クランプ径、CAT区分は別に確認します。
            </P>

            <H2 id="true-rms">真の実効値はいつ必要？平均値方式との違い</H2>
            <P>
              交流電流は、いつもきれいな正弦波とは限りません。インバーター、可変周波数駆動、スイッチング電源、電子制御機器があると、波形が歪むことがあります。
            </P>
            <P>
              平均値方式は、正弦波に近い一般回路を測る用途では使いやすい一方、歪んだ波形では真の実効値方式と表示値がずれる場合があります。
            </P>
            <H3>真の実効値を優先したい場面</H3>
            <Ul>
              <li>インバーター駆動モーター</li>
              <li>VFD回路</li>
              <li>業務用空調やポンプの可変速制御</li>
              <li>UPS、スイッチング電源</li>
              <li>電子制御の多い設備</li>
              <li>測定値の差が保全判断へ影響する現場</li>
            </Ul>
            <H3>平均値方式でも検討しやすい場面</H3>
            <Ul>
              <li>波形が安定した一般交流負荷</li>
              <li>日常的な目安確認</li>
              <li>携帯性・価格を優先する巡回点検</li>
            </Ul>
            <P>
              真の実効値対応でも、測定周波数帯域や機種仕様が対象に合わない場合があります。メーカーの用途説明と取扱説明書を確認してください。
            </P>

            <H2 id="specs">最大電流・クランプ径・CAT区分の見方</H2>
            <H3>最大電流</H3>
            <P>
              最大電流は「大きいほどよい」とは限りません。大電流モデルは幹線に向きますが、微小な変化や小電流を重視する用途では、適切なレンジ・分解能を持つモデルが必要です。
            </P>
            <Ul>
              <li>
                <Mark>300〜400A</Mark>：一般設備、分岐回路、自動車整備
              </li>
              <li>
                <Mark>600〜660A</Mark>：空調、モーター、工場設備
              </li>
              <li>
                <Mark>1000A</Mark>：幹線や大容量AC設備
              </li>
              <li>
                <Mark>2000A</Mark>：大容量受電・幹線など専門用途
              </li>
            </Ul>
            <H3>クランプ径</H3>
            <P>
              測定したい導体がジョーに入らなければ測れません。ケーブル外径だけでなく、複数導体をまとめて挟む漏れ電流測定、大口径幹線、盤内の狭さを確認します。
            </P>
            <P>
              狭い盤内では薄型・小型ジョーが使いやすく、大容量幹線では大口径またはフレキシブルセンサー対応が候補になります。
            </P>
            <H3>CAT区分</H3>
            <P>
              測定カテゴリは、使用する電気環境の過渡過電圧リスクに関わります。単に最大電圧の数値だけで判断せず、測定場所に必要なCAT区分と定格電圧を満たす機種を使用します。
            </P>
            <P>
              高いCAT区分が必要な場所では、計測器本体だけでなく、テストリード、プローブ、保護具、作業方法も適合させる必要があります。絶縁工具の基礎は
              <Link
                href="/articles/insulated-tool-basics"
                className="font-bold underline underline-offset-4"
              >
                絶縁工具とは？
              </Link>
              、セット選定は
              <Link
                href="/articles/insulated-tool-set-selection"
                className="font-bold underline underline-offset-4"
              >
                絶縁工具セットの選び方
              </Link>
              も参照してください。
            </P>

            <H2 id="comparison">用途別デジタルクランプメーター比較</H2>
            <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
              <table className={`${cls.table} min-w-[1100px]`}>
                <thead>
                  <tr>
                    <th className={cls.th}>商品</th>
                    <th className={cls.th}>タイプ</th>
                    <th className={cls.th}>電流・方式</th>
                    <th className={cls.th}>主な用途</th>
                    <th className={cls.th}>選び方のポイント</th>
                    <th className={cls.th}>購入</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className={cls.td}>
                        <ProductTableCell product={product} />
                      </td>
                      <td className={cls.td}>{product.badge}</td>
                      <td className={cls.td}>
                        {product.current}
                        <br />
                        {product.rms}
                      </td>
                      <td className={cls.td}>{product.use}</td>
                      <td className={cls.td}>{product.check}</td>
                      <td className={cls.td}>
                        <a
                          href={product.url}
                          target="_blank"
                          rel="nofollow sponsored"
                          className="rounded bg-orange-600 px-3 py-2 text-center text-xs font-bold text-white hover:bg-orange-700"
                        >
                          商品を見る
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H2 id="by-use">用途別に選ぶ代表機種</H2>
            <H3>インバーターや空調設備を測る</H3>
            <P>
              AC設備だけなら、SANWA DCM60RやDCM660Rが候補です。どちらも真の実効値に対応し、DCM660Rは突入電流やMAX/MINも確認できます。
            </P>
            <P>
              AC/DCの両方が必要なら、DCM600DRやMT-120が候補になります。
            </P>
            <div className="mt-6 grid gap-5">
              {[byId("dcm60r"), byId("dcm660r"), byId("dcm600dr"), byId("mt120")].map(
                (product) => (
                  <ProductCard key={product.id} product={product} />
                )
              )}
            </div>
            <H3>自動車・HV・EV・バッテリーを測る</H3>
            <P>
              直流電流が必要なため、DCM600DR、DCM400AD、MT-120、AD-5586などのAC/DC両用を検討します。
            </P>
            <P>
              小さな待機電流を重視するならMT-119、大きな駆動電流を重視するなら最大電流に余裕のあるモデルを選びます。
            </P>
            <div className="mt-6 grid gap-5">
              {[byId("dcm400ad"), byId("mt119"), byId("ad5586")].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <H3>漏電・絶縁劣化の兆候を調べる</H3>
            <P>
              MODEL104PLUSのような漏れ電流用を選びます。通常の負荷電流用で表示が0Aでも、「漏れ電流がない」とは判断できません。
            </P>
            <P>
              漏電調査は、測定位置、複数導体の挟み方、フィルター、周辺磁界などの影響を受けます。教育を受けた担当者がメーカー手順に従って行います。
            </P>
            <H3>大容量幹線を測る</H3>
            <P>
              DCM2000DRや、1000A級の3280-10Fなどを比較します。最大電流だけでなく、導体径、盤内スペース、CAT区分、真の実効値の必要性を確認してください。
            </P>
            <div className="mt-6 grid gap-5">
              {[
                byId("model104plus"),
                byId("dcm2000dr"),
                byId("hioki328010f"),
                byId("model2020"),
                byId("dcm400"),
                byId("qt4400"),
              ].map((product) => (
                <ProductCard key={`more-${product.id}`} product={product} />
              ))}
            </div>

            <H2 id="summer-inspection">
              夏の電気設備点検では「熱」と「電流」を分けて確認する
            </H2>
            <SectionImage
              src={IMG.thermal}
              alt="サーモグラフィーとクランプメーターで分電盤を点検するイメージ"
            />
            <P>
              夏季は空調機、冷却設備、換気設備などの稼働が増え、設備負荷が高まりやすくなります。経済産業省も2026年度夏季に備え、電気工作物の入念な点検を呼びかけています。
            </P>
            <P>
              ただし、分電盤や端子が熱いからといって、電流だけが原因とは限りません。
            </P>
            <Ul>
              <li>過負荷</li>
              <li>相間の電流不平衡</li>
              <li>接続部の緩み・接触抵抗</li>
              <li>端子や機器の劣化</li>
              <li>盤内温度上昇</li>
              <li>冷却・換気不足</li>
            </Ul>
            <H3>点検の役割分担</H3>
            <Ol>
              <li>
                <strong>目視・臭気・異音</strong>で異常兆候を確認
              </li>
              <li>
                <strong>サーモグラフィー</strong>で温度分布をスクリーニング
              </li>
              <li>
                <strong>クランプメーター</strong>で負荷電流や相間差を確認
              </li>
              <li>
                <strong>マルチメーター・絶縁抵抗計・接地抵抗計</strong>
                で必要な詳細確認
              </li>
              <li>資格者が原因を評価し、増し締め、修理、負荷見直し、交換を判断</li>
              <li>測定値、外気温、負荷条件、日時を記録して比較</li>
            </Ol>
            <P>
              サーモグラフィーで高温箇所が見つかっても、画像だけで原因を断定しません。反対に、電流値が定格内でも、接触不良による局所発熱が起きる場合があります。夏季の作業環境改善は
              <Link
                href="/articles/worksite-rest-area-heat"
                className="font-bold underline underline-offset-4"
              >
                現場休憩所の熱中症対策
              </Link>
              や
              <Link
                href="/articles/mechanic-heatstroke-prevention"
                className="font-bold underline underline-offset-4"
              >
                整備工場の熱中症対策
              </Link>
              もあわせて確認してください。
            </P>

            <H2 id="related">一緒に準備したい関連計測器・安全用品</H2>
            <H3>デジタルマルチメーター</H3>
            <P>
              クランプメーターで電流を確認した後、電圧、抵抗、導通を詳しく調べる用途で使います。HIOKI
              DT4255など、現場に合う安全カテゴリと機能を確認してください。
            </P>
            <H3>サーモグラフィー</H3>
            <P>
              FLIR
              C5やボッシュGTCシリーズは、盤内や機械の温度分布を非接触で確認する用途に向きます。電流測定と組み合わせることで、過負荷と局所的な接触不良を切り分ける手がかりになります。
            </P>
            <H3>接地抵抗計</H3>
            <P>
              接地設備の確認には専用の接地抵抗計を使います。クランプメーターの代替ではありません。
            </P>
            <H3>ロックアウト用品・絶縁工具</H3>
            <P>
              点検・保守時の誤投入を防ぐロックアウトキットや、作業内容に適合する絶縁工具も重要です。計測器を購入するだけで安全管理が完了するわけではありません。
            </P>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {related.map((item) => (
                <article
                  key={item.url}
                  className="rounded-xl border border-gray-300 bg-white p-5"
                >
                  <Image
                    src={item.image}
                    alt={`${item.name}の商品画像`}
                    width={320}
                    height={240}
                    className="h-36 w-full object-contain"
                  />
                  <h3 className="mt-3 text-lg font-black text-gray-900">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-[15px] leading-7 text-gray-900">
                    {item.role}
                  </p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="nofollow sponsored"
                    className="mt-3 inline-block font-bold text-orange-700 underline underline-offset-4"
                  >
                    商品を見る
                  </a>
                </article>
              ))}
            </div>

            <H2 id="safety">測定時の安全上の注意</H2>
            <div className="my-6 rounded-2xl border border-red-300 bg-red-50 p-6">
              <Ul>
                <li>無資格者・未教育者が分電盤や配電盤を開けない</li>
                <li>
                  活線測定を当然の前提にせず、停電・ロックアウト可能性を先に検討する
                </li>
                <li>測定場所に適合するCAT区分と定格を確認する</li>
                <li>
                  本体、ジョー、テストリード、絶縁部の損傷を使用前に確認する
                </li>
                <li>
                  負荷電流測定では、測りたい導体1本をジョー中央へ配置する
                </li>
                <li>DC測定ではゼロ調整と極性・方向を確認する</li>
                <li>
                  濡れた場所、結露、粉じん、可燃性雰囲気など使用条件を確認する
                </li>
                <li>測定値が異常でも、その場で無理に端子へ触れない</li>
                <li>測定後は日時、負荷条件、設備番号、外気温を記録する</li>
              </Ul>
              <P>
                焦げ臭い、異音、変色、煙、異常な発熱がある場合は、測定を続けるより、社内の緊急手順と専門業者への連絡を優先してください。
              </P>
            </div>

            <H2 id="failures">よくある失敗例</H2>
            <H3>漏れ電流を普通のクランプメーターで測る</H3>
            <P>
              負荷電流用では微小な漏れ電流を測れない場合があります。漏れ電流用の分解能とフィルター機能を確認します。
            </P>
            <H3>AC/DC両用なら万能だと思う</H3>
            <P>
              AC/DC対応でも、真の実効値、漏れ電流、最大電流、クランプ径、CAT区分が不足することがあります。
            </P>
            <H3>インバーター回路で平均値方式を使う</H3>
            <P>
              歪んだ波形では、平均値方式と真の実効値方式で表示が異なる場合があります。測定値が保全判断へ影響するなら、真の実効値を優先します。
            </P>
            <H3>最大Aだけで選ぶ</H3>
            <P>
              最大電流が大きくても、太い電線が入らない、盤内でジョーを開けない、微小電流を読みにくいという問題が起こります。
            </P>
            <H3>単発測定で異常を断定する</H3>
            <P>
              測定値は、負荷条件、季節、時間帯、運転状態で変わります。相間比較、過去記録、温度画像、定格、メーカー資料を組み合わせます。
            </P>

            <H2 id="checklist">法人購買・設備管理チェックリスト</H2>
            <SectionImage
              src={IMG.checklist}
              alt="法人担当者がクランプメーターと電気工事工具を比較するイメージ"
            />
            <ul className="mt-6 grid gap-3 text-gray-900 md:grid-cols-2">
              {[
                "対象設備はACかDCか",
                "測りたいのは負荷電流か漏れ電流か",
                "インバーター・VFD・スイッチング電源があるか",
                "最大電流と導体外径はどの程度か",
                "必要なCAT区分を満たすか",
                "微弱電流・突入電流・周波数測定が必要か",
                "暗所作業用のバックライトやLEDが必要か",
                "校正・検査成績書を管理するか",
                "全拠点で機種を統一するか",
                "取扱教育、点検周期、電池・テストリード交換を決めているか",
                "ロックアウト、保護具、絶縁工具を一緒に整備するか",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] leading-7"
                >
                  ✓ {item}
                </li>
              ))}
            </ul>

            <H2 id="category-cta">カテゴリから比較する</H2>
            <P>
              デジタルクランプメータ一覧から用途に合う機種を比較し、電気工事工具・絶縁工具も含めて、安全な点検体制を整えてください。
            </P>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {ctas.map((item) => (
                <CategoryCard key={`final-${item.url}`} item={item} />
              ))}
            </div>

            <H2 id="faq">FAQ</H2>
            <div className="mt-6 space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="rounded-xl border border-gray-300 bg-white p-5"
                >
                  <summary className={`cursor-pointer ${cls.faqQ}`}>
                    {item.q}
                  </summary>
                  <p className={`mt-3 ${cls.body}`}>{item.a}</p>
                </details>
              ))}
            </div>

            <H2 id="references">参考情報</H2>
            <ul className="my-4 space-y-3 text-[15px] leading-7 text-gray-900">
              <li>
                <a
                  href="https://www.hioki.com/jp-ja/learning/test-tools/clamp-meter.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4"
                >
                  HIOKI「クランプメーターとは？」
                </a>
              </li>
              <li>
                <a
                  href="https://www.hioki.com/jp-ja/learning/how-to/u-clamp-meters.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4"
                >
                  HIOKI「クランプメーターの使い方」
                </a>
              </li>
              <li>
                <a
                  href="https://www.gennect.net/ja/knowledge/fmi/leakage-current"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4"
                >
                  HIOKI「漏れ電流の測定」
                </a>
              </li>
              <li>
                <a
                  href="https://www.sanwa-meter.co.jp/japan/products/clamp/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4"
                >
                  三和電気計器 クランプメータ製品情報
                </a>
              </li>
              <li>
                <a
                  href="https://www.fluke.com/ja-jp/learn/blog/electrical/what-is-true-rms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4"
                >
                  Fluke「真の実効値とは？」
                </a>
              </li>
              <li>
                <a
                  href="https://www.meti.go.jp/policy/safety_security/industrial_safety/oshirase/2026/05/20260521-2.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4"
                >
                  経済産業省「2026年度夏季の自然災害に備えた電気設備の保安管理の徹底について」
                </a>
              </li>
            </ul>

            <H2 id="summary">まとめ</H2>
            <P>
              デジタルクランプメーターは、最初に「負荷電流か漏れ電流か」「ACかDCか」を分けると選びやすくなります。
            </P>
            <Ul>
              <li>一般AC設備：AC負荷電流用</li>
              <li>バッテリー・EV・太陽光：AC/DC両用</li>
              <li>インバーター：真の実効値</li>
              <li>漏電調査：漏れ電流用</li>
              <li>待機電流：微弱電流用</li>
              <li>幹線：大電流対応＋必要なクランプ径</li>
            </Ul>
            <P>
              さらに、最大電流、クランプ径、CAT区分、校正運用まで確認してください。
            </P>
            <P>
              夏の電気設備点検では、サーモグラフィーで熱を探し、クランプメーターで電流を確認し、必要に応じてマルチメーターや絶縁・接地測定へ進むと、点検の役割を整理しやすくなります。
            </P>
            <P>
              デジタルクランプメータ一覧から用途に合う機種を比較し、電気工事工具・絶縁工具も含めて、安全な点検体制を整えてください。
            </P>

            <section className="mt-12 rounded-2xl border border-gray-300 bg-gray-50 p-6">
              <h2 className="text-xl font-black text-gray-900">関連記事</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/articles/insulated-tool-basics"
                    className="font-bold underline underline-offset-4"
                  >
                    絶縁工具とは？普通の工具との違い・1000V表示の意味
                  </Link>
                </li>
                <li>
                  <Link
                    href="/articles/insulated-tool-set-selection"
                    className="font-bold underline underline-offset-4"
                  >
                    絶縁工具セットの選び方
                  </Link>
                </li>
                <li>
                  <Link
                    href="/articles/worksite-rest-area-heat"
                    className="font-bold underline underline-offset-4"
                  >
                    現場休憩所の熱中症対策
                  </Link>
                </li>
                <li>
                  <Link
                    href="/articles/mechanic-heatstroke-prevention"
                    className="font-bold underline underline-offset-4"
                  >
                    整備工場の熱中症対策
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
