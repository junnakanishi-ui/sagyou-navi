import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const slug = "office-air-purifier-room-size";
const siteUrl = "https://www.sagyou-navi.com";
const canonicalUrl = `${siteUrl}/articles/${slug}`;
const title =
  "事務所の空気清浄機は何畳用？広さ・台数・置き場所・加湿機能の選び方【2026年版】";
const description =
  "事務所や会議室、工場・倉庫の休憩室に置く空気清浄機は何畳用を何台選ぶべきか。適用床面積、1台と複数台、置き場所、加湿・モニター機能を10〜38畳の商品比較で解説します。";
const heroImagePath = `/images/${slug}/office-air-purifier-room-size-hero.webp`;
const heroImageAbs = `${siteUrl}${heroImagePath}`;
const UTM = `utm_source=sagyou_navi&utm_medium=article&utm_campaign=${slug}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "article",
    locale: "ja_JP",
    url: canonicalUrl,
    siteName: "作業用品ナビ",
    title,
    description:
      "何畳用を何台選ぶか、適用床面積の意味、配置、加湿の対応畳数、換気との役割分担まで法人向けに整理。",
    images: [
      {
        url: heroImageAbs,
        width: 1600,
        height: 900,
        alt: "事務所の広さに合わせて空気清浄機を比較するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "事務所の空気清浄機は何畳用？【2026年版】",
    description: "広さ・台数・置き場所・加湿機能を法人向けに比較。",
    images: [heroImageAbs],
  },
};

type Product = {
  id: string;
  name: string;
  maker: string;
  model: string;
  airArea: string;
  humidArea: string;
  type: string;
  suitedFor: string;
  check: string;
  image: string;
  url: string;
};

const products: Product[] = [
  {
    id: "aapsh20aw",
    name: "加湿空気清浄機 10畳 AAP-SH20A-W",
    maker: "アイリスオーヤマ",
    model: "AAP-SH20A-W",
    airArea: "10畳（約17㎡）",
    humidArea: "プレハブ洋室7畳／木造和室4畳",
    type: "加湿一体型",
    suitedFor: "小会議室・受付・個室休憩室に置きやすい円柱型",
    check: "1Lタンクの給水頻度と加湿フィルター清掃を確認",
    image: `/images/${slug}/products/ta052385-aapsh20aw.webp`,
    url: "https://item.rakuten.co.jp/crecote-shop/ta052385-aapsh20aw/",
  },
  {
    id: "pmac100",
    name: "空気清浄機 14畳 PMAC-100",
    maker: "アイリスオーヤマ",
    model: "PMAC-100",
    airArea: "14畳（約23㎡）",
    humidArea: "なし",
    type: "単機能・薄型",
    suitedFor: "給水管理を増やしたくない小規模事務所・休憩室向け",
    check: "吸込口を塞がない壁離隔と交換フィルターの入手性を確認",
    image: `/images/${slug}/products/ta053138-pmac100.webp`,
    url: "https://item.rakuten.co.jp/crecote-shop/ta053138-pmac100/",
  },
  {
    id: "pmac100s",
    name: "ホコリセンサー付き 14畳 PMAC-100-S",
    maker: "アイリスオーヤマ",
    model: "PMAC-100-S",
    airArea: "14畳（約23㎡）",
    humidArea: "なし",
    type: "単機能・ホコリセンサー",
    suitedFor: "人の出入りでホコリが舞いやすい受付・小会議室向け",
    check: "センサー表示はCO₂濃度や換気量を示すものではない",
    image: `/images/${slug}/products/ta053139-pmac100s.webp`,
    url: "https://item.rakuten.co.jp/crecote-shop/ta053139-pmac100s/",
  },
  {
    id: "aapsh30ah",
    name: "加湿空気清浄機 16畳 AAP-SH30A-H",
    maker: "アイリスオーヤマ",
    model: "AAP-SH30A-H",
    airArea: "16畳（約26㎡）",
    humidArea: "プレハブ洋室8畳／木造和室5畳",
    type: "加湿一体型",
    suitedFor: "10畳前後の会議室・休憩室で空気清浄に余裕を持たせたい場合",
    check: "空気清浄16畳と加湿8畳は別の適用床面積",
    image: `/images/${slug}/products/ta052386-aapsh30ah.webp`,
    url: "https://item.rakuten.co.jp/crecote-shop/ta052386-aapsh30ah/",
  },
  {
    id: "msapac100",
    name: "モニター空気清浄機 17畳 MSAP-AC100",
    maker: "アイリスオーヤマ",
    model: "MSAP-AC100",
    airArea: "17畳（約28㎡）",
    humidArea: "なし",
    type: "数値モニター付き",
    suitedFor: "清掃・運転ルールをスタッフへ共有しやすい中小会議室向け",
    check: "表示はホコリ濃度レベルで、CO₂や有害ガス測定ではない",
    image: `/images/${slug}/products/ta054156-msapac100.webp`,
    url: "https://item.rakuten.co.jp/crecote-shop/ta054156-msapac100/",
  },
  {
    id: "aapah50aw",
    name: "加湿空気清浄機 23畳 AAP-AH50A-W",
    maker: "アイリスオーヤマ",
    model: "AAP-AH50A-W",
    airArea: "23畳（約38㎡）",
    humidArea: "プレハブ洋室14畳／木造和室8.5畳",
    type: "加湿一体型・大容量タンク",
    suitedFor: "中規模事務所や冬季の乾燥も管理したい休憩室向け",
    check: "3.5Lタンクでも給水・排水・清掃担当を決める",
    image: `/images/${slug}/products/ta053820-aapah50aw.webp`,
    url: "https://item.rakuten.co.jp/crecote-shop/ta053820-aapah50aw/",
  },
  {
    id: "msapdc100",
    name: "モニター空気清浄機 25畳 MSAP-DC100",
    maker: "アイリスオーヤマ",
    model: "MSAP-DC100",
    airArea: "25畳（約41㎡）",
    humidArea: "なし",
    type: "数値モニター付き",
    suitedFor: "中規模オフィス・会議室で汚れの変化を見える化したい場合",
    check: "最大運転音・設置寸法・センサー清掃を確認",
    image: `/images/${slug}/products/ta054157-msapdc100.webp`,
    url: "https://item.rakuten.co.jp/crecote-shop/ta054157-msapdc100/",
  },
  {
    id: "chaa55c",
    name: "サーキュレーター付加湿空気清浄機 25畳 CHA-A55-C",
    maker: "アイリスオーヤマ",
    model: "CHA-A55-C",
    airArea: "25畳（約41㎡）",
    humidArea: "プレハブ洋室14畳／木造和室8.5畳",
    type: "加湿＋サーキュレーター",
    suitedFor: "縦長・家具やパーティションがある空間で空気を動かしたい場合",
    check: "高さ約88cm・重量約12.2kgの設置場所と首振り範囲を確認",
    image: `/images/${slug}/products/ta053871-chaa55c.webp`,
    url: "https://item.rakuten.co.jp/crecote-shop/ta053871-chaa55c/",
  },
  {
    id: "iapa85w",
    name: "単機能空気清浄機 28畳 IAP-A85-W",
    maker: "アイリスオーヤマ",
    model: "IAP-A85-W",
    airArea: "28畳（約46㎡）",
    humidArea: "なし",
    type: "単機能・大風量",
    suitedFor: "給水作業を増やさず、20畳前後の事務所を素早く循環させたい場合",
    check: "交換フィルターIAP-A85FLの保管・交換時期も予算化",
    image: `/images/${slug}/products/ta054076-iapa85w.webp`,
    url: "https://item.rakuten.co.jp/crecote-shop/ta054076-iapa85w/",
  },
  {
    id: "clhb924wt",
    name: "ハイブリッド式空気清浄機 38畳 CL-HB924-WT",
    maker: "ダイニチ工業",
    model: "CL-HB924-WT",
    airArea: "38畳（約63㎡）",
    humidArea: "なし",
    type: "ハイブリッド集じん・大型",
    suitedFor: "広めの事務所・来客スペース・大人数の休憩室を1台で検討する場合",
    check: "本体寸法・重量・最大風量時の音・通路幅を事前確認",
    image: `/images/${slug}/products/ta053873-clhb924wt.webp`,
    url: "https://item.rakuten.co.jp/crecote-shop/ta053873-clhb924wt/",
  },
];

const featuredIds = ["pmac100s", "msapdc100", "iapa85w", "clhb924wt"];

function withUtm(url: string) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}${UTM}`;
}

function ExternalButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const variantCls =
    variant === "primary"
      ? "bg-orange-600 text-white hover:bg-orange-700"
      : "border border-gray-900 bg-white text-gray-900 hover:bg-amber-50";
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored"
      className={`inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-3 text-[15px] font-black transition ${variantCls}`}
    >
      {children}
    </a>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-gray-50">
        <Image
          src={product.image}
          alt={`${product.model}の商品画像`}
          fill
          className="object-contain p-5"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex flex-wrap gap-2 text-xs font-bold">
          <span className="rounded-full bg-gray-900 px-3 py-1 text-white">
            {product.airArea}
          </span>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-gray-900">
            {product.type}
          </span>
        </div>
        <h3 className="text-lg font-black leading-snug text-gray-900">
          {product.name}
        </h3>
        <dl className="space-y-2 text-[15px] leading-7 text-gray-900">
          <div>
            <dt className="font-bold">向く用途</dt>
            <dd>{product.suitedFor}</dd>
          </div>
          <div>
            <dt className="font-bold">導入前確認</dt>
            <dd>{product.check}</dd>
          </div>
        </dl>
        <ExternalButton href={withUtm(product.url)}>
          楽天市場で商品を見る →
        </ExternalButton>
      </div>
    </article>
  );
}

function ProductTableCell({ product }: { product: Product }) {
  return (
    <a
      href={withUtm(product.url)}
      target="_blank"
      rel="nofollow sponsored"
      className="group flex min-w-[16rem] items-start gap-3 rounded-lg p-1 text-gray-900 no-underline transition hover:bg-gray-50"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <Image
          src={product.image}
          alt={`${product.model}の商品画像`}
          fill
          sizes="80px"
          className="object-contain p-1.5"
        />
      </span>
      <span className="min-w-0 space-y-1">
        <span className="block font-black leading-6 group-hover:underline">
          {product.name}
        </span>
        <span className="block text-xs leading-5 text-gray-900">
          {product.maker}／{product.model}
        </span>
      </span>
    </a>
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

function TableWrap({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
      {children}
    </div>
  );
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: [heroImageAbs],
  datePublished: "2026-07-29",
  dateModified: "2026-07-29",
  author: {
    "@type": "Organization",
    name: "作業用品ナビ編集部",
    url: siteUrl,
  },
  publisher: { "@type": "Organization", name: "作業用品ナビ", url: siteUrl },
  mainEntityOfPage: canonicalUrl,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: `${siteUrl}/articles`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "事務所の空気清浄機は何畳用？",
      item: canonicalUrl,
    },
  ],
};

export default function Page() {
  const featuredProducts = products.filter((product) =>
    featuredIds.includes(product.id),
  );

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
              <li>事務所の空気清浄機は何畳用？</li>
            </ol>
          </nav>
        </div>

        <article>
          <header className="border-y border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
              <p className="mb-3 text-sm font-bold text-orange-800">
                法人備品・事務所環境
              </p>
              <h1 className={cls.h1}>{title}</h1>
              <div className={`mt-5 flex flex-wrap gap-x-5 gap-y-2 ${cls.meta}`}>
                <span>作業用品ナビ編集部</span>
                <time dateTime="2026-07-29">公開・更新：2026年7月29日</time>
                <span>約18分で読めます</span>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
            <SectionImage
              src={heroImagePath}
              alt="事務所の広さに合わせて空気清浄機の容量と台数を比較するイメージ"
            />

            <P>
              事務所や会議室、工場・倉庫の休憩室に空気清浄機を置こうとすると、「20畳の部屋には20畳用でよいのか」「大型1台と小型2台のどちらがよいのか」「加湿付きの23畳なら加湿も23畳までなのか」と迷いがちです。
            </P>
            <P>
              空気清浄機の「何畳用」は、部屋に置けば常に完全にきれいになる範囲を示す数字ではありません。日本電機工業会規格JEM1467に基づく適用床面積は、規定の条件で空気の汚れを30分で清浄できる部屋の広さを表す目安です。実際の事務所では、人数、扉の開閉、天井高、パーティション、机や棚による気流の分断まで見て選ぶ必要があります。
            </P>
            <P>
              この記事では、事務所用空気清浄機の選び方を、10〜38畳の商品例、1台と複数台の違い、置き場所、加湿・モニター・サーキュレーター機能、フィルター管理まで含めて整理します。
            </P>

            <section
              aria-labelledby="answer"
              className="my-10 rounded-2xl border-2 border-orange-300 bg-orange-50 p-6 sm:p-8"
            >
              <h2
                id="answer"
                className="text-2xl font-black text-gray-900 sm:text-3xl"
              >
                この記事の結論
              </h2>
              <p className="mt-4 text-[15px] leading-[1.95] tracking-[0.04em] text-gray-900">
                <strong>
                  事務所の空気清浄機は、まず実際の部屋以上の適用床面積を最低条件にし、
                </strong>
                人の出入り、扉の開閉、天井高、パーティション、早く空気を循環させたいかで、次の容量帯または複数台を検討します。加湿付きは、空気清浄と加湿で対応畳数が異なるため別々に確認してください。空気清浄機は
                <Mark>換気の代替ではなく</Mark>、<Mark>CO₂濃度も下げません</Mark>
                。
              </p>
              <ul className="mt-5 grid gap-2 text-[15px] font-medium text-gray-900 sm:grid-cols-2">
                <li className="rounded-lg bg-white p-3 border border-orange-100">
                  6〜8畳：10〜17畳クラス
                </li>
                <li className="rounded-lg bg-white p-3 border border-orange-100">
                  9〜12畳：14〜25畳クラス
                </li>
                <li className="rounded-lg bg-white p-3 border border-orange-100">
                  13〜18畳：17〜28畳クラス
                </li>
                <li className="rounded-lg bg-white p-3 border border-orange-100">
                  19〜25畳：25〜38畳クラス
                </li>
              </ul>
            </section>

            <section aria-labelledby="featured" className="my-12">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-orange-800">
                    広さ別の入口
                  </p>
                  <h2
                    id="featured"
                    className="text-2xl font-black text-gray-900 sm:text-3xl"
                  >
                    最初に確認したい代表4機種
                  </h2>
                </div>
                <p className={`hidden max-w-md md:block ${cls.meta}`}>
                  順位ではなく、14・25・28・38畳の容量帯を比較するための代表例です。
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <p className={`mt-4 ${cls.meta}`}>
                ※商品は「順位」ではなく、広さと運用条件を比較するための例です。販売状況、仕様、交換部品の供給は購入時に商品ページとメーカー情報で再確認してください。
              </p>
            </section>

            <nav
              aria-label="目次"
              className="my-12 rounded-2xl border border-gray-300 bg-gray-50 p-6"
            >
              <h2 className="text-xl font-black text-gray-900">目次</h2>
              <ol className="mt-4 grid gap-2 text-[15px] font-medium text-gray-900 sm:grid-cols-2">
                <li>
                  <a href="#choose-size" className="underline underline-offset-2">
                    1. 何畳用を選ぶべきか
                  </a>
                </li>
                <li>
                  <a href="#meaning" className="underline underline-offset-2">
                    2. 適用床面積の意味
                  </a>
                </li>
                <li>
                  <a href="#quick-table" className="underline underline-offset-2">
                    3. 広さ別早見表
                  </a>
                </li>
                <li>
                  <a href="#one-or-two" className="underline underline-offset-2">
                    4. 大型1台と小型2台
                  </a>
                </li>
                <li>
                  <a href="#placement" className="underline underline-offset-2">
                    5. 置き場所
                  </a>
                </li>
                <li>
                  <a href="#functions" className="underline underline-offset-2">
                    6. 機能の違い
                  </a>
                </li>
                <li>
                  <a href="#comparison" className="underline underline-offset-2">
                    7. 10〜38畳比較
                  </a>
                </li>
                <li>
                  <a href="#rooms" className="underline underline-offset-2">
                    8. 部屋別の選び方
                  </a>
                </li>
                <li>
                  <a href="#limits" className="underline underline-offset-2">
                    9. できること・できないこと
                  </a>
                </li>
                <li>
                  <a href="#maintenance" className="underline underline-offset-2">
                    10. 保守管理
                  </a>
                </li>
                <li>
                  <a href="#mistakes" className="underline underline-offset-2">
                    11. よくある失敗
                  </a>
                </li>
                <li>
                  <a href="#faq" className="underline underline-offset-2">
                    12. FAQ
                  </a>
                </li>
              </ol>
            </nav>

            <section id="choose-size" className="scroll-mt-24">
              <H2>事務所の空気清浄機は何畳用を選ぶべきか</H2>
              <H3>まずは実際の部屋以上を最低条件にする</H3>
              <P>
                最初の基準は、空気清浄機の適用床面積が実際の部屋を下回らないことです。10畳の会議室へ6畳用を置く、25畳の事務所へ14畳用を1台だけ置くと、強運転を続けても空間全体の循環に時間がかかりやすくなります。
              </P>
              <P>
                ただし、部屋と同じ畳数なら常に十分とも限りません。適用床面積は規定条件の目安であり、実際の事務所には人、机、棚、間仕切り、出入口があります。電話や会議が多く最大運転を続けにくい場合も、少し余裕のある容量帯を選ぶ理由になります。
              </P>
              <H3>人の出入り・扉の開閉が多いなら次の容量帯を比較する</H3>
              <P>
                受付、応接室、休憩室、打ち合わせスペースは、人の出入りで花粉やホコリが持ち込まれやすく、扉が開くたびに空気も動きます。部屋ぴったりの適用床面積だけで決めず、次の一段大きい容量帯、または汚れが入りやすい場所へ小型機を追加する方法を比較してください。
              </P>
              <P>
                たとえば実際の広さが12畳なら、14畳用を最低ラインにし、出入りが多い、電話中に強運転を避けたい、短時間で空気を循環させたい場合は16〜25畳の候補まで見る、という考え方です。
              </P>
              <H3>30畳を超える空間は大型1台と複数台を比較する</H3>
              <P>
                広いオープンオフィスでは、38畳用を1台置けば必ず全域へ均一に届くとは限りません。細長い部屋、背の高い棚、パーティション、島型デスクがある場合は、空気の流れが分かれます。
              </P>
              <P>30畳を超える事務所では、次の2案を比較します。</P>
              <Ul>
                <li>
                  38畳クラスの大型機を、吸込口と吹出口を塞がない中央寄りへ置く
                </li>
                <li>
                  17〜25畳クラスを2台に分け、人の多いゾーンと出入口側へ分散する
                </li>
              </Ul>
              <P>
                機器の適用床面積の合計だけでなく、電源、通路、運転音、清掃担当、フィルター在庫まで含めて決めることが重要です。
              </P>
            </section>

            <section id="meaning" className="scroll-mt-24">
              <H2>適用床面積の「何畳」は何を意味するか</H2>
              <SectionImage
                src={`/images/${slug}/office-air-purifier-floor-area-check.webp`}
                alt="事務所の床面積と空気清浄機の適用床面積を確認するイメージ"
              />
              <H3>JEM1467の適用床面積は「30分で清浄できる広さ」</H3>
              <P>
                空気清浄機の適用床面積は、日本電機工業会規格JEM1467に基づく表示です。ダイニチ工業の公式説明では、自然換気回数1回／時の条件で、規定の粉じん濃度を30分で所定濃度まで清浄できる部屋の大きさを基準にしています。
              </P>
              <P>
                つまり、28畳用とは「28畳の空間を規定条件で30分かけて清浄する能力の目安」です。運転直後から部屋全体が同じ状態になることや、花粉・ホコリの発生が続いても常に一定に保てることを保証する数値ではありません。
              </P>
              <H3>畳よりも㎡を優先して確認する</H3>
              <P>
                畳の大きさは表示方法や地域で差があるため、法人導入ではメーカー仕様の㎡表示と実際の床面積を比較します。図面に床面積がある場合は、畳へ換算せず㎡をそのまま使うほうが確実です。
              </P>
              <div className="my-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {(
                  [
                    ["10畳", "約17㎡"],
                    ["14畳", "約23㎡"],
                    ["17畳", "約28㎡"],
                    ["23畳", "約38㎡"],
                    ["25畳", "約41㎡"],
                    ["28畳", "約46㎡"],
                    ["38畳", "約63㎡"],
                  ] as const
                ).map(([tatami, sqm]) => (
                  <div
                    key={tatami}
                    className="rounded-xl border border-gray-300 bg-gray-50 p-4 text-center"
                  >
                    <strong className="block text-lg text-gray-900">
                      {tatami}
                    </strong>
                    <span className="text-sm font-medium text-gray-900">
                      {sqm}
                    </span>
                  </div>
                ))}
              </div>
              <H3>天井高・間仕切り・扉開閉は表示畳数だけでは判断できない</H3>
              <P>
                天井が高い、部屋がL字型、棚やパーティションが多い、出入口が多い、人が一部へ集中する、紙や段ボールが多い、最大風量では音が気になる場合は、単純な畳数の一致より風量・配置・複数台を重視します。
              </P>
            </section>

            <section id="quick-table" className="scroll-mt-24">
              <H2>事務所の広さ別・空気清浄機選定早見表</H2>
              <P>
                次の表は公的基準ではなく、JEM1467の適用床面積を最低条件として、法人空間で余裕を持たせる条件を整理した編集部の実務目安です。
              </P>
              <TableWrap>
                <table className={`min-w-[900px] ${cls.table}`}>
                  <thead>
                    <tr>
                      <th className={cls.th}>実際の部屋</th>
                      <th className={cls.th}>最低条件</th>
                      <th className={cls.th}>余裕を持たせたい条件</th>
                      <th className={cls.th}>候補例</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={`${cls.td} font-bold`}>6〜8畳</td>
                      <td className={cls.td}>10畳以上</td>
                      <td className={cls.td}>
                        来客・扉開閉が多いなら14〜17畳
                      </td>
                      <td className={cls.td}>
                        AAP-SH20A-W、PMAC-100-S、MSAP-AC100
                      </td>
                    </tr>
                    <tr>
                      <td className={`${cls.td} font-bold`}>9〜12畳</td>
                      <td className={cls.td}>14畳以上</td>
                      <td className={cls.td}>
                        会議・休憩利用が多いなら16〜25畳
                      </td>
                      <td className={cls.td}>
                        PMAC-100、AAP-SH30A-H、MSAP-DC100
                      </td>
                    </tr>
                    <tr>
                      <td className={`${cls.td} font-bold`}>13〜18畳</td>
                      <td className={cls.td}>17〜23畳以上</td>
                      <td className={cls.td}>
                        人が多い・短時間清浄なら25〜28畳
                      </td>
                      <td className={cls.td}>
                        AAP-AH50A-W、CHA-A55-C、IAP-A85-W
                      </td>
                    </tr>
                    <tr>
                      <td className={`${cls.td} font-bold`}>19〜25畳</td>
                      <td className={cls.td}>25〜28畳以上</td>
                      <td className={cls.td}>
                        間仕切り・高天井なら28〜38畳または2台
                      </td>
                      <td className={cls.td}>
                        MSAP-DC100、IAP-A85-W、CL-HB924-WT
                      </td>
                    </tr>
                    <tr>
                      <td className={`${cls.td} font-bold`}>26〜35畳</td>
                      <td className={cls.td}>38畳クラスまたは複数台</td>
                      <td className={cls.td}>
                        細長い・分断ありなら17〜25畳を2台
                      </td>
                      <td className={cls.td}>
                        CL-HB924-WT、MSAP-AC100×2、MSAP-DC100×2
                      </td>
                    </tr>
                    <tr>
                      <td className={`${cls.td} font-bold`}>35畳超</td>
                      <td className={cls.td}>複数台または個別設計</td>
                      <td className={cls.td}>ゾーンごとの風量・配置を確認</td>
                      <td className={cls.td}>
                        38畳機＋補助機、専門業者へ相談
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TableWrap>
              <H3>「実面積の2〜3倍」を一律ルールにしない</H3>
              <P>
                短時間で清浄するために実面積の2〜3倍を勧める解説はありますが、法人空間で畳数だけを倍にすると、過大な本体、運転音、設置場所、消費電力、フィルター費用を抱えることがあります。実面積以上を最低条件にし、人流・扉・天井・間仕切りを確認し、次の容量帯または複数台を比較する順番が実務的です。
              </P>
              <Ul>
                <li>実面積以上を最低条件にする</li>
                <li>人流・扉・天井・間仕切りを確認する</li>
                <li>早く循環させたい場合は次の容量帯を見る</li>
                <li>細長い・分断された空間は複数台を比較する</li>
                <li>最大運転音と日常運転の風量を確認する</li>
              </Ul>
            </section>

            <section id="one-or-two" className="scroll-mt-24">
              <H2>大型1台と小型2台はどちらがよいか</H2>
              <SectionImage
                src={`/images/${slug}/one-large-vs-two-small-air-purifiers.webp`}
                alt="大型空気清浄機1台と小型2台の分散配置を比較する事務所"
              />
              <H3>大型1台が向く事務所</H3>
              <Ul>
                <li>正方形に近く、家具やパーティションが少ない</li>
                <li>中央付近へ安全に設置できる</li>
                <li>コンセントと通路を確保できる</li>
                <li>清掃・フィルター管理を1台へ集約したい</li>
                <li>38畳以下で1台の適用床面積に収まる</li>
              </Ul>
              <P>
                大型1台は、管理台数が少なく、フィルター交換日や資産管理を一本化しやすい利点があります。一方、部屋の端へしか置けない場合や、空気の流れが棚で遮られる場合は、表示畳数ほど全域へ届きにくくなることがあります。
              </P>
              <H3>小型2台が向く事務所</H3>
              <Ul>
                <li>細長い、L字型、パーティションで区切られている</li>
                <li>出入口と執務エリアが離れている</li>
                <li>人が集まる場所が2か所ある</li>
                <li>1台を最大運転すると音が気になる</li>
                <li>片方を清掃中でも、もう1台を運転したい</li>
              </Ul>
              <P>
                2台に分けると、汚れの入口と人のいる場所へ近づけやすくなります。ただし、購入費だけでなく、電源コード、清掃、フィルター在庫、運転ルールが2台分になる点も見落とせません。
              </P>
              <TableWrap>
                <table className={`min-w-[720px] ${cls.table}`}>
                  <thead>
                    <tr>
                      <th className={cls.th}>比較項目</th>
                      <th className={cls.th}>大型1台</th>
                      <th className={cls.th}>小型2台</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={`${cls.td} font-bold`}>正方形空間</td>
                      <td className={cls.td}>向く</td>
                      <td className={cls.td}>過剰になることがある</td>
                    </tr>
                    <tr>
                      <td className={`${cls.td} font-bold`}>
                        細長い・分断空間
                      </td>
                      <td className={cls.td}>端部が弱くなりやすい</td>
                      <td className={cls.td}>分散しやすい</td>
                    </tr>
                    <tr>
                      <td className={`${cls.td} font-bold`}>管理負担</td>
                      <td className={cls.td}>少ない</td>
                      <td className={cls.td}>2台分必要</td>
                    </tr>
                    <tr>
                      <td className={`${cls.td} font-bold`}>
                        清掃時の継続性
                      </td>
                      <td className={cls.td}>停止するとゼロ</td>
                      <td className={cls.td}>1台を継続できる</td>
                    </tr>
                    <tr>
                      <td className={`${cls.td} font-bold`}>運転音</td>
                      <td className={cls.td}>1台の強運転へ集中</td>
                      <td className={cls.td}>弱〜中へ分散しやすい</td>
                    </tr>
                  </tbody>
                </table>
              </TableWrap>
            </section>

            <section id="placement" className="scroll-mt-24">
              <H2>置き場所は空気の流れと人のいる場所で決める</H2>
              <SectionImage
                src={`/images/${slug}/office-air-purifier-placement-airflow.webp`}
                alt="吸込口と吹出口を塞がず換気の流れに合わせて空気清浄機を置くイメージ"
              />
              <H3>吸込口・吹出口を塞がない</H3>
              <P>
                壁、棚、カーテン、机で吸込口や吹出口を塞ぐと風量を生かせません。必要な壁離隔は機種で異なるため、取扱説明書を優先してください。
              </P>
              <H3>人がいる場所へ近づける</H3>
              <P>
                厚生労働省の換気補完資料では、特定の感染対策目的でHEPAフィルター付き・毎分5㎥程度以上の可搬式空気清浄機を、人の居場所から10㎡（6畳）程度の範囲内へ置く考え方が示されています。すべての用途へ一律適用する数値ではありませんが、部屋の隅へ置くだけでなく、人のいるゾーンへ近づける配置の参考になります。
              </P>
              <H3>外気の流れと逆らわせない</H3>
              <P>
                窓開けや機械換気と併用する場合は、空気清浄機の吹き出しでよどみを増やさないことが重要です。外気の入口から排気側へ空気が流れるように、向き、サーキュレーター、パーティションを調整します。
              </P>
              <H3>花粉・ホコリの入口と作業者の呼吸域を分けて考える</H3>
              <P>
                花粉を持ち込みやすい入口付近へ1台、長時間滞在する執務エリアへ1台という分散も考えられます。ただし、出入口へ近すぎて外気や扉の風を直接受け続ける場所、通行を妨げる場所は避けます。
              </P>
            </section>

            <section id="functions" className="scroll-mt-24">
              <H2>単機能・加湿・モニター・サーキュレーターの違い</H2>
              <SectionImage
                src={`/images/${slug}/air-purifier-function-types-office.webp`}
                alt="単機能・加湿・モニター・サーキュレーター付き空気清浄機を比較するイメージ"
              />
              <H3>単機能空気清浄機</H3>
              <P>
                給水とタンク洗浄が不要で、複数拠点へ導入しても運用しやすいタイプです。候補はPMAC-100、PMAC-100-S、IAP-A85-W、CL-HB924-WTです。
              </P>
              <H3>加湿空気清浄機</H3>
              <P>
                冬季の乾燥も一台で管理しやすい一方、空気清浄と加湿の適用床面積は別です。AAP-AH50A-Wは空気清浄23畳でも、加湿はプレハブ洋室14畳、木造和室8.5畳が目安です。給水、残水処理、タンク・加湿フィルター清掃を継続できるかで判断します。
              </P>
              <P>
                給水、残水の処理、タンク・加湿フィルターの洗浄が継続できない事業所では、単機能空気清浄機と専用加湿器を分けるほうが管理しやすい場合もあります。候補：AAP-SH20A-W、AAP-SH30A-H、AAP-AH50A-W、CHA-A55-C。
              </P>
              <H3>ホコリセンサー・モニター付き</H3>
              <P>
                人の出入りや清掃後のホコリ濃度レベルを見える化しやすいタイプです。ただし、CO₂濃度、換気量、有害ガス濃度を測る機能ではありません。候補：PMAC-100-S、MSAP-AC100、MSAP-DC100。
              </P>
              <H3>サーキュレーター付き</H3>
              <P>
                縦長の部屋、パーティションのある空間、冷暖房の空気も循環させたい場所で候補になります。首振り範囲や本体高さが通路、棚、書類へ干渉しないか確認してください。候補：CHA-A55-C。
              </P>
            </section>

            <section
              id="comparison"
              aria-labelledby="comparison-title"
              className="my-14 scroll-mt-24"
            >
              <p className="text-sm font-bold text-orange-800">
                商品サムネ付き比較
              </p>
              <h2
                id="comparison-title"
                className="mt-1 text-3xl font-black text-gray-900"
              >
                10〜38畳の事務所向け空気清浄機を比較
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-gray-900">
                スマートフォンでは横へスクロールできます。
                <Mark>空気清浄と加湿の適用床面積を分けて</Mark>
                確認してください。
              </p>
              <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-300">
                <table className={`min-w-[1280px] ${cls.table}`}>
                  <thead>
                    <tr>
                      <th className={cls.th}>商品</th>
                      <th className={cls.th}>空気清浄</th>
                      <th className={cls.th}>加湿</th>
                      <th className={cls.th}>タイプ</th>
                      <th className={cls.th}>向く用途</th>
                      <th className={cls.th}>購入前確認</th>
                      <th className={cls.th}>購入</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="align-top">
                        <td className={cls.td}>
                          <ProductTableCell product={product} />
                        </td>
                        <td className={`${cls.td} font-bold`}>
                          {product.airArea}
                        </td>
                        <td className={cls.td}>{product.humidArea}</td>
                        <td className={cls.td}>{product.type}</td>
                        <td className={cls.td}>{product.suitedFor}</td>
                        <td className={cls.td}>{product.check}</td>
                        <td className={cls.td}>
                          <ExternalButton href={withUtm(product.url)}>
                            楽天市場で見る
                          </ExternalButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={`mt-3 text-xs leading-6 ${cls.meta}`}>
                仕様はメーカー公開情報と添付商品一覧を基に整理しています。色・付属品・在庫・交換部品・保証条件は購入時に確認してください。
              </p>
            </section>

            <section id="rooms" className="scroll-mt-24">
              <H2>部屋別に見る選び方</H2>
              <H3>小会議室・受付・個室休憩室</H3>
              <P>
                6〜10畳程度の閉じた部屋では10〜17畳クラスが候補です。来客が多い受付、扉の開閉が多い会議室なら、14〜17畳へ余裕を持たせると最大運転だけに頼りにくくなります。
              </P>
              <Ul>
                <li>給水を減らす：PMAC-100／PMAC-100-S</li>
                <li>冬の乾燥も扱う：AAP-SH20A-W／AAP-SH30A-H</li>
                <li>汚れの見える化：MSAP-AC100</li>
              </Ul>
              <H3>10〜20畳の中規模事務所</H3>
              <P>
                17〜28畳クラスを比較します。机や棚が多い場合は、1台を壁際へ押し込まず、空気の通り道を確保します。電話が多い事務所では、最大運転音だけでなく日常的な弱・中運転の風量と音も確認してください。
              </P>
              <Ul>
                <li>加湿不要で大風量：IAP-A85-W</li>
                <li>数値モニター：MSAP-DC100</li>
                <li>冬季加湿：AAP-AH50A-W</li>
                <li>空気循環も重視：CHA-A55-C</li>
              </Ul>
              <H3>工場・倉庫の休憩室・更衣室</H3>
              <SectionImage
                src={`/images/${slug}/factory-break-room-air-purifier.webp`}
                alt="工場や倉庫の休憩室に空気清浄機を設置するイメージ"
              />
              <P>
                休憩室や更衣室は、作業服からホコリが持ち込まれ、人が短時間に集中しやすい場所です。床面積だけでなく、休憩のピーク人数、ロッカーや棚による気流の遮断、扉の開閉を確認します。
              </P>
              <P>
                <strong>
                  一般室内用の空気清浄機を、研磨粉、切削粉、溶接ヒューム、有機溶剤蒸気の主対策にしないでください。
                </strong>
                工程側は発生源対策、密閉、局所排気、集じん設備、作業手順、保護具を優先し、空気清浄機は休憩室などの一般環境を補助する機器として位置付けます。
              </P>
              <P>
                休憩室の暑さ対策も同時に見直す場合は、
                <Link
                  href="/articles/spot-cooler-rest-area"
                  className="font-bold text-orange-800 underline underline-offset-2"
                >
                  スポットクーラー・工場扇・休憩所の使い分け
                </Link>
                も確認してください。
              </P>
              <H3>20〜35畳の広い事務所・来客スペース</H3>
              <P>
                空間が一体で気流を作りやすければ28〜38畳クラスの大型1台が候補です。パーティションで分かれている場合は、17〜25畳クラスを2台に分散したほうが、各ゾーンへ近づけられることがあります。
              </P>
              <Ul>
                <li>一体空間・管理を1台へ集約：CL-HB924-WT</li>
                <li>20畳前後で単機能：IAP-A85-W</li>
                <li>分散配置：MSAP-AC100×2、MSAP-DC100×2</li>
              </Ul>
            </section>

            <section id="limits" className="scroll-mt-24">
              <H2>空気清浄機でできること・できないこと</H2>
              <H3>換気の代替にはならない</H3>
              <P>
                厚生労働省は、空気清浄機を換気不足の補完として併用する場合がある一方、窓を閉めて空気清浄機だけを使っても十分な効果は得られないとしています。空気清浄機は室内の空気を循環・ろ過する機器であり、外気を取り入れる換気とは役割が違います。
              </P>
              <H3>CO₂濃度は下げない</H3>
              <P>
                HEPAフィルターなどは浮遊する微粒子を捕集しますが、気体である二酸化炭素を下げる機能ではありません。ホコリモニターが低くても、人数が多く換気不足ならCO₂は上がり得ます。換気設備の点検、窓開け、必要に応じたCO₂センサーで別に管理します。
              </P>
              <H3>強い臭い・有害ガスを安全化する設備ではない</H3>
              <P>
                活性炭フィルターで生活臭を低減できる機種はありますが、臭いが弱くなったことと有害物質濃度が安全になったことは同じではありません。塗料、シンナー、接着剤、薬品、燃焼ガスがある作業場は、SDS、換気、局所排気、作業環境測定、保護具を優先します。
              </P>
              <P>
                作業場の工程臭を扱う場合は、空気清浄機ではなく、
                <Link
                  href="/articles/workshop-odor-control-deodorizer"
                  className="font-bold text-orange-800 underline underline-offset-2"
                >
                  作業場の臭い対策と業務用脱臭機の選び方
                </Link>
                を参照し、対象臭気と安全設備を分けて検討してください。
              </P>
            </section>

            <section id="maintenance" className="scroll-mt-24">
              <H2>フィルター・給水・清掃を法人運用へ落とす</H2>
              <SectionImage
                src={`/images/${slug}/air-purifier-filter-maintenance-checklist.webp`}
                alt="法人担当者が空気清浄機のフィルター交換と加湿タンク清掃を管理するイメージ"
              />
              <H3>本体価格だけでなく交換部品を予算化する</H3>
              <P>
                フィルターが目詰まりすると風量が落ち、運転音や清浄時間に影響します。本体型番、交換フィルター型番、メーカー目安、清掃頻度、設置場所、管理担当、交換日を設備台帳へ記録します。
              </P>
              <P>
                IAP-A85-Wの交換用フィルターIAP-A85FLは、メーカー目安が約1.5年です。ただし、ホコリの多い休憩室、出入口、段ボールを扱う場所では早まることがあります。期間だけでなく、風量低下、汚れ、臭い、取扱説明書の表示を見て判断します。
              </P>
              <H3>加湿付きは給水と衛生管理を担当業務にする</H3>
              <P>
                加湿空気清浄機は、水を入れるだけで終わりではありません。残水を放置せず、タンク、トレー、加湿フィルターを取扱説明書に沿って清掃します。複数拠点へ導入するときは、始業時の給水、終業時の残水処理、週次清掃、消耗品発注を担当表へ入れてください。管理負担が大きい場合は、単機能空気清浄機を選ぶほうが長期運用しやすいことがあります。
              </P>
            </section>

            <section className="my-10 rounded-2xl border border-gray-300 bg-gray-50 p-6 sm:flex sm:items-center sm:gap-6">
              <div className="relative mx-auto h-44 w-44 shrink-0 rounded-xl border border-gray-200 bg-white sm:mx-0">
                <Image
                  src={`/images/${slug}/products/ta052767-iapa85fl.webp`}
                  alt="IAP-A85FL交換フィルターの商品画像"
                  fill
                  className="object-contain p-4"
                  sizes="176px"
                />
              </div>
              <div className="mt-5 sm:mt-0">
                <p className="text-sm font-bold text-orange-800">保守用品</p>
                <h2 className="text-2xl font-black text-gray-900">
                  IRIS 空気清浄機フィルター IAP-A85FL
                </h2>
                <p className="mt-2 text-[15px] leading-7 text-gray-900">
                  IAP-A85を継続運用する法人の予備・定期交換用。メーカーの交換目安は約1.5年ですが、設置環境で前後します。
                </p>
                <div className="mt-4">
                  <ExternalButton
                    href={withUtm(
                      "https://item.rakuten.co.jp/crecote-shop/ta052767-iapa85fl/",
                    )}
                  >
                    楽天市場で交換フィルターを見る →
                  </ExternalButton>
                </div>
              </div>
            </section>

            <section id="mistakes" className="scroll-mt-24">
              <H2>事務所用空気清浄機でよくある失敗</H2>
              <H3>部屋ぴったりの畳数だけで決める</H3>
              <P>
                適用床面積は30分基準の目安です。人流、扉、天井、パーティションを無視すると端まで届きにくくなります。
              </P>
              <H3>1台を部屋の隅へ押し込む</H3>
              <P>
                壁や棚へ密着させると吸込口・吹出口を塞ぐことがあります。本体寸法だけでなく周囲の必要空間も図面へ落とします。
              </P>
              <H3>空気清浄23畳なら加湿も23畳だと思う</H3>
              <P>
                加湿能力は別規格・別条件です。空気清浄23畳でも加湿はプレハブ洋室14畳など小さくなる機種があります。
              </P>
              <H3>汚れモニターをCO₂センサーだと思う</H3>
              <P>
                ホコリ濃度が低くても換気が十分とは限りません。CO₂は別の指標です。
              </P>
              <H3>空気清浄機を置いたので換気を止める</H3>
              <P>
                空気清浄機は外気を取り入れず、CO₂を下げません。換気設備、窓開け、空気の流れを別に管理します。
              </P>
              <H3>フィルターと加湿タンクの担当を決めない</H3>
              <P>
                購入時に担当、頻度、消耗品型番まで決めないと、清掃や給水が止まりやすくなります。
              </P>
            </section>

            <section id="checklist" className="scroll-mt-24">
              <H2>法人購買担当者向けチェックリスト</H2>
              <Ul>
                <li>部屋の床面積を㎡で確認した</li>
                <li>天井高を確認した</li>
                <li>パーティション・棚による気流の分断を確認した</li>
                <li>人数と扉開閉が多い時間帯を確認した</li>
                <li>実面積以上を最低条件にした</li>
                <li>次の容量帯と複数台を比較した</li>
                <li>空気清浄と加湿の適用床面積を別々に確認した</li>
                <li>最大運転音と日常運転音を確認した</li>
                <li>吸込口・吹出口の必要離隔を確認した</li>
                <li>コンセント、コード、転倒、通路を確認した</li>
                <li>給水・タンク洗浄・フィルター清掃の担当を決めた</li>
                <li>交換フィルター型番と発注先を記録した</li>
                <li>換気設備とCO₂管理を別に運用する</li>
                <li>
                  工程粉じん・有害ガスは局所排気・集じん設備を優先する
                </li>
              </Ul>
            </section>

            <section id="faq" className="scroll-mt-24">
              <H2>よくある質問</H2>
              <h3 className={cls.faqQ}>
                20畳の事務所なら20畳用でよいですか？
              </h3>
              <P>
                20畳以上を最低条件にし、扉、人の多さ、天井高、パーティション、運転音を確認します。人の出入りが多い、短時間で循環させたい場合は25〜38畳クラス、または小型2台も比較します。
              </P>
              <h3 className={cls.faqQ}>
                30畳のオフィスは大型1台と小型2台のどちらがよいですか？
              </h3>
              <P>
                正方形に近く中央へ置けるなら38畳クラス1台が管理しやすいです。細長い、L字、パーティションで分かれている場合は17〜25畳クラス2台の分散配置が向くことがあります。
              </P>
              <h3 className={cls.faqQ}>
                適用床面積は実際の部屋の2〜3倍が必要ですか？
              </h3>
              <P>
                必ず2〜3倍という公式ルールではありません。適用床面積は30分基準のため余裕を持たせる考え方はありますが、風量、天井高、形状、配置、運転音を合わせて判断します。
              </P>
              <h3 className={cls.faqQ}>
                加湿空気清浄機の23畳は、加湿も23畳ですか？
              </h3>
              <P>
                いいえ。空気清浄と加湿の適用床面積は別です。AAP-AH50A-Wは空気清浄23畳に対して、加湿はプレハブ洋室14畳、木造和室8.5畳が目安です。
              </P>
              <h3 className={cls.faqQ}>
                ホコリセンサーで換気不足が分かりますか？
              </h3>
              <P>
                分かりません。ホコリセンサーは粒子の状態を検知するもので、CO₂濃度や外気導入量を測るものではありません。
              </P>
              <h3 className={cls.faqQ}>
                空気清浄機を置けば窓を開けなくてよいですか？
              </h3>
              <P>
                空気清浄機は換気の代替ではありません。外気を取り入れずCO₂を下げないため、機械換気や窓開けと役割を分けます。
              </P>
              <h3 className={cls.faqQ}>
                工場の研磨粉や溶接ヒュームにも使えますか？
              </h3>
              <P>
                一般室内用空気清浄機を工程粉じん・ヒューム・有機溶剤の主対策にしないでください。発生源の密閉、局所排気、集じん機、作業手順、保護具を優先します。
              </P>
              <h3 className={cls.faqQ}>
                フィルター交換はどう管理すればよいですか？
              </h3>
              <P>
                本体型番、フィルター型番、メーカー目安、設置日、清掃日、交換日を設備台帳へ記録します。期間だけでなく、風量低下、汚れ、臭い、メーカーのサインを見て交換します。
              </P>
            </section>

            <section id="summary" className="scroll-mt-24">
              <H2>
                まとめ｜何畳用かだけでなく、台数・配置・管理まで決める
              </H2>
              <P>
                事務所の空気清浄機は、実際の床面積以上を最低条件にし、人流、扉、天井高、パーティション、清浄スピード、運転音で余裕を判断します。加湿付きは空気清浄と加湿の畳数を別々に確認し、ホコリモニターとCO₂センサーを混同しないことが重要です。
              </P>
              <Ul>
                <li>6〜8畳：10〜17畳クラス</li>
                <li>9〜12畳：14〜25畳クラス</li>
                <li>13〜18畳：17〜28畳クラス</li>
                <li>19〜25畳：25〜38畳クラス</li>
                <li>26〜35畳：38畳クラスまたは複数台</li>
                <li>35畳超：複数台または業務用設備の個別設計</li>
              </Ul>
              <P>
                空気清浄機は換気を補完する機器であり、換気や工程の集じん設備を代替しません。導入後まで見据えて、フィルター、給水、清掃担当を決めたうえで選んでください。
              </P>
            </section>

            <section
              aria-labelledby="final-cta"
              className="my-14 rounded-3xl bg-gray-950 p-7 text-white sm:p-10"
            >
              <p className="text-sm font-bold text-orange-300">
                広さから候補を確認
              </p>
              <h2 id="final-cta" className="mt-2 text-3xl font-black">
                10〜38畳の空気清浄機を比較する
              </h2>
              <p className="mt-3 max-w-3xl text-[15px] leading-7 text-gray-200">
                部屋の㎡、人流、間仕切り、給水管理の可否を確認してから、対応畳数と機能で候補を絞ってください。
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {featuredProducts.map((product) => (
                  <a
                    key={product.id}
                    href={withUtm(product.url)}
                    target="_blank"
                    rel="nofollow sponsored"
                    className="rounded-xl bg-white p-4 font-bold text-gray-900 transition hover:-translate-y-0.5 hover:bg-orange-50"
                  >
                    <span className="block text-sm text-orange-800">
                      {product.airArea}
                    </span>
                    {product.model}を見る
                  </a>
                ))}
              </div>
            </section>

            <section
              aria-labelledby="references"
              className="my-12 border-t border-gray-200 pt-8"
            >
              <h2
                id="references"
                className="text-2xl font-black text-gray-900"
              >
                参考情報
              </h2>
              <ul className="mt-4 space-y-3 text-[15px] leading-7 text-gray-900">
                <li>
                  <a
                    href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-800 underline underline-offset-2"
                  >
                    Google Search Central：生成AI検索向け公式ガイド
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mhlw.go.jp/content/10900000/000640917.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-800 underline underline-offset-2"
                  >
                    厚生労働省：換気の悪い密閉空間を改善するための換気の方法
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mhlw.go.jp/content/000698868.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-800 underline underline-offset-2"
                  >
                    厚生労働省：冬場の換気と空気清浄機の留意点
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mhlw.go.jp/content/000968526.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-800 underline underline-offset-2"
                  >
                    厚生労働省：効果的な換気のポイント
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.dainichi-net.co.jp/products/air-purifier/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-800 underline underline-offset-2"
                  >
                    ダイニチ工業：空気清浄機・適用床面積の定義
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.irisohyama.co.jp/air-clean/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-800 underline underline-offset-2"
                  >
                    アイリスオーヤマ：空気清浄機総合ページ
                  </a>
                </li>
              </ul>
              <p className="mt-6 rounded-xl bg-gray-50 p-4 text-xs leading-6 text-gray-800">
                編集方針：本記事はメーカー・公的機関の公開情報と添付商品一覧を基に、法人担当者が導入条件を比較できるよう整理したものです。選定早見表は法令・公的基準ではなく、適用床面積を最低条件として運用条件を加えた編集部目安です。商品仕様・在庫・交換部品は購入時に最新情報を確認してください。
              </p>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
