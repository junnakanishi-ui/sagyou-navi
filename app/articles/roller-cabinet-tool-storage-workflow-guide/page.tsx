import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import fs from "fs";
import path from "path";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const SLUG = "roller-cabinet-tool-storage-workflow-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const ARTICLE_TITLE =
  "工具収納はローラーキャビネットで改善できる？工具箱・ワゴン・作業台との違いと選び方【2026年版】";
const SHORT_TITLE = "工具収納はローラーキャビネットで改善できる？";
const DESCRIPTION =
  "工具が片付かない工場・整備現場向けに、ローラーキャビネットの選び方を解説。工具箱・ワゴン・作業台との違い、引出し構成、仕切板・サイドテーブル・サイドポケットの活用、導入前チェックポイントまで整理します。";
const PUBLISHED = "2026-08-09";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const ctas = productData.ctas;

type CatalogProduct = (typeof productData.products)[number];

const byCode = Object.fromEntries(
  productData.products.map((p) => [p.code, p])
) as Record<string, CatalogProduct>;

function productImageExists(imageFile: string) {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "images",
      "articles",
      SLUG,
      "products",
      imageFile
    );
    return fs.existsSync(filePath) && fs.statSync(filePath).size > 500;
  } catch {
    return false;
  }
}

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: ARTICLE_TITLE,
    description: DESCRIPTION,
    type: "article",
    url: CANONICAL,
    siteName: "作業用品ナビ",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    images: [
      {
        url: `${SITE_URL}${IMG("roller-cabinet-tool-storage-hero.jpg")}`,
        width: 1600,
        height: 900,
        alt: "工場保全部門でローラーキャビネットを使って工具を整理するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ARTICLE_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG("roller-cabinet-tool-storage-hero.jpg")}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("roller-cabinet-tool-storage-hero.jpg")}`],
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Organization",
    name: "作業用品ナビ編集部",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    url: SITE_URL,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: `${SITE_URL}/articles`,
    },
    { "@type": "ListItem", position: 3, name: SHORT_TITLE, item: CANONICAL },
  ],
};

const faqs = [
  {
    q: "ローラーキャビネットは工具箱と何が違いますか？",
    a: "工具箱は持ち運び中心、ローラーキャビネットは整理・施錠・定位置管理中心です。収納の中心を作るならローラーキャビネット、持ち出し用なら工具箱が向きます。",
  },
  {
    q: "ワゴンとどちらを先に買うべきですか？",
    a: "共有工具が散らばって困っているなら、先にローラーキャビネットを検討しやすいです。部品や資材の運搬が課題なら、ワゴンや台車が優先になることもあります。",
  },
  {
    q: "仕切板付きと通常モデルはどちらが良いですか？",
    a: "工具の種類が多く、最初から整理精度を上げたいなら仕切板付きが便利です。まず本体だけ導入し、後からデバイダーやパーティションを追加する考え方もあります。",
  },
  {
    q: "チェスト付きセットは必要ですか？",
    a: "上段に細かい工具をまとめたい、上と下で役割を分けたい場合には選択肢になります。ただし、通常モデルで十分な現場も多いので、まずは収納対象の洗い出しが先です。",
  },
  {
    q: "導入時に気をつける点は？",
    a: "設置場所、通路幅、荷下ろし条件、鍵管理、引出し高さ構成の確認です。買ってから「入らない」「置けない」を避けるため、現場確認を先に行うことが大切です。",
  },
] as const;

const checkItems = [
  "収納したい工具の点数・厚み・長さ・重量を洗い出した",
  "個人用か共用かを決め、鍵管理の要否を確認した",
  "設置場所と通路幅、引き出しを開けたときの動線を確認した",
  "搬入経路・荷下ろし条件（車上渡し等）を確認した",
  "段数だけでなく、50/100/150の引出し高さ構成を確認した",
  "仕切板付きか、後付けデバイダーで運用するかを決めた",
  "工具箱・ワゴン・作業台との役割分担を決めた",
  "棚卸し・戻し場所・ラベル運用のルールを決めた",
] as const;

const comparisonModels: {
  codes: string[];
  feature: string;
  fit: string;
}[] = [
  {
    codes: ["TRC-121R", "TRC-121SR"],
    feature: "4段の基本モデル",
    fit: "小規模保全部門、個人に近い共用収納",
  },
  {
    codes: ["TRC-042R", "TRC-042SR"],
    feature: "6段で中型工具を整理しやすい",
    fit: "一般的な工場保全、整備現場",
  },
  {
    codes: ["TRC-123R"],
    feature: "50・100・150の混成で厚み違いに対応しやすい",
    fit: "工具種類が幅広い現場",
  },
  {
    codes: ["TRC-232R", "TRC-232SR"],
    feature: "7段で分類を細かくしやすい",
    fit: "工具点数が多い現場",
  },
  {
    codes: ["TRC-070R", "TRC-070SR"],
    feature: "100高中心で均質管理しやすい",
    fit: "同サイズ帯の工具が多い現場",
  },
  {
    codes: ["TRC-341R", "TRC-341SR"],
    feature: "8段で細かな定位置管理に向く",
    fit: "5Sを強く進めたい現場",
  },
];

const relatedArticles = [
  {
    href: "/articles/tool-cabinet-moisture-control",
    label: "工具キャビネットの湿気対策｜錆・結露を防ぐ収納管理",
  },
  {
    href: "/articles/milwaukee-packout-selection-guide",
    label: "Milwaukee PACKOUTの選び方｜どれから買う？組み合わせガイド",
  },
  {
    href: "/articles/line-work-tool-wagon-selection",
    label: "ライン作業向けツールワゴンの選び方",
  },
  {
    href: "/articles/trusco-steel-cart-selection-guide",
    label: "TRUSCOスチール台車の選び方",
  },
] as const;

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function ExtLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel={EXT_REL} className={className}>
      {children}
    </a>
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

function Figure({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 850px"
        />
      </div>
    </figure>
  );
}

function ExtButton({
  href,
  children,
  tone = "amber",
}: {
  href: string;
  children: ReactNode;
  tone?: "amber" | "dark" | "rose";
}) {
  const toneClass =
    tone === "dark"
      ? "bg-slate-900 hover:bg-slate-800"
      : tone === "rose"
        ? "bg-rose-700 hover:bg-rose-800"
        : "bg-amber-600 hover:bg-amber-700";
  return (
    <ExtLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-xl px-5 py-3 text-center text-[15px] font-extrabold text-white transition ${toneClass}`}
    >
      {children}
    </ExtLink>
  );
}

function ImagePending({ name }: { name: string }) {
  return (
    <div
      className="flex aspect-square items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 text-center text-sm font-medium text-gray-800"
      role="img"
      aria-label={`${name}の画像準備中`}
    >
      画像準備中
    </div>
  );
}

function ProductCard({
  product,
  priority = false,
}: {
  product: CatalogProduct;
  priority?: boolean;
}) {
  const hasImage = productImageExists(product.imageFile);

  return (
    <article className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-5 md:grid-cols-[180px_1fr] md:items-start">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          {hasImage ? (
            <Image
              src={PROD(product.imageFile)}
              alt={`${product.name}の商品画像`}
              width={400}
              height={400}
              priority={priority}
              className="h-auto w-full object-contain p-3"
            />
          ) : (
            <ImagePending name={product.name} />
          )}
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-950">
              {product.badge}
            </span>
            <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-900">
              {product.code}
            </span>
          </div>
          <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
            {product.name}
          </h3>
          <dl className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            {product.drawers !== "—" ? (
              <div>
                <dt className="inline font-bold">引出し構成：</dt>
                <dd className="inline">{product.drawers}</dd>
              </div>
            ) : null}
            <div>
              <dt className="inline font-bold">用途：</dt>
              <dd className="inline">{product.use}</dd>
            </div>
            <div>
              <dt className="inline font-bold">向く現場：</dt>
              <dd className="inline">{product.fit}</dd>
            </div>
            <div>
              <dt className="inline font-bold">選ぶ理由：</dt>
              <dd className="inline">{product.reason}</dd>
            </div>
          </dl>
          <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-[15px] font-medium leading-6 text-amber-950">
            <strong>購入前確認：</strong>
            {product.check}
          </p>
          <div className="mt-5">
            <ExtButton href={product.url}>商品ページを見る →</ExtButton>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProductTableCell({
  product,
  label,
}: {
  product?: CatalogProduct;
  label: string;
}) {
  if (!product) {
    return <span className="font-bold">{label}</span>;
  }
  const hasImage = productImageExists(product.imageFile);
  return (
    <a
      href={product.url}
      target="_blank"
      rel={EXT_REL}
      className="group flex min-w-[16rem] items-start gap-3 text-gray-900 no-underline"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        {hasImage ? (
          <Image
            src={PROD(product.imageFile)}
            alt={`${product.short}の商品画像`}
            fill
            sizes="80px"
            className="object-contain p-1.5"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-[10px] text-gray-800">
            準備中
          </span>
        )}
      </span>
      <span className="min-w-0">
        <span className="block font-black leading-6 group-hover:underline">
          {label}
        </span>
        <span className="mt-1 block text-xs leading-5 text-gray-900">
          {product.short}
        </span>
      </span>
    </a>
  );
}

function TopCta() {
  return (
    <aside className="my-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 md:p-6">
      <p className="mb-4 text-xl font-extrabold text-gray-900">
        まず見ておきたい一覧
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <ExtButton href={ctas.rollerCabinet.url}>
          {ctas.rollerCabinet.label} →
        </ExtButton>
        <ExtButton href={ctas.toolbox.url} tone="dark">
          {ctas.toolbox.label} →
        </ExtButton>
      </div>
    </aside>
  );
}

function MidCta() {
  return (
    <aside className="my-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 md:p-6">
      <p className="mb-4 text-xl font-extrabold text-gray-900">
        組み合わせで考える関連カテゴリ
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <ExtButton href={ctas.cart.url}>{ctas.cart.label} →</ExtButton>
        <ExtButton href={ctas.workbench.url}>{ctas.workbench.label} →</ExtButton>
      </div>
    </aside>
  );
}

function BottomCta() {
  return (
    <aside className="my-8 rounded-2xl border-2 border-rose-200 bg-rose-50 p-5 md:p-6">
      <p className="mb-4 text-xl font-extrabold text-gray-900">
        関連カテゴリもあわせて見たい方へ
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <ExtButton href={ctas.maintenanceTools.url} tone="rose">
          {ctas.maintenanceTools.label} →
        </ExtButton>
        <ExtButton href={ctas.handTools.url} tone="rose">
          {ctas.handTools.label} →
        </ExtButton>
        <ExtButton href={ctas.trusco.url} tone="dark">
          {ctas.trusco.label} →
        </ExtButton>
      </div>
    </aside>
  );
}

export default function Page() {
  const featuredCabinets = [
    "TRC-121R",
    "TRC-042R",
    "TRC-123R",
    "TRC-232R",
    "TRC-070R",
    "TRC-341R",
  ]
    .map((code) => byCode[code])
    .filter(Boolean);

  const dividerProducts = [
    "TRC-121SR",
    "TRC-042SR",
    "TRC-232SR",
    "TRC-070SR",
    "TRC-341SR",
  ]
    .map((code) => byCode[code])
    .filter(Boolean);

  const accessoryProducts = ["TFRC-STM", "TFRC-STS", "TFRC-SP", "TFRC-DB-H100X295"]
    .map((code) => byCode[code])
    .filter(Boolean);

  const relatedTools = ["ST-350-B", "TBTBAG", "SK3435S"]
    .map((code) => byCode[code])
    .filter(Boolean);

  return (
    <>
      <SiteHeader />
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <main className="bg-white text-gray-900">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
          <nav aria-label="パンくず" className={cls.meta}>
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
              <li>{SHORT_TITLE}</li>
            </ol>
          </nav>
        </div>

        <article className="mx-auto max-w-[850px] px-4 pb-16 sm:px-6">
          <header>
            <div className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-950">
              工具収納・整備現場・5S / 2026年8月9日更新
            </div>
            <h1 className={cls.h1}>{ARTICLE_TITLE}</h1>
            <P>
              工場の保全部門や整備現場では、工具そのものよりも「工具がすぐ出てこない」「人によって戻す場所が違う」「作業台の上に置きっぱなしになる」といった運用の問題が、作業時間のロスや紛失につながりやすくなります。
            </P>
            <P>
              両開きの工具箱で足りていた現場でも、工具点数が増えたり、共有工具が増えたりすると、持ち運び重視の収納だけでは回らなくなります。そうしたときに検討しやすいのが、キャスター付きで引き出し収納ができる
              <strong>ローラーキャビネット</strong>です。
            </P>
            <P>
              ただし、ローラーキャビネットは「大きい工具箱」というだけではありません。工具箱、運搬台車、作業台とは役割が違いますし、引き出し高さや段数、仕切板の有無で使い勝手も大きく変わります。この記事では、TRUSCOのローラーキャビネットを中心に、工具収納の考え方を整理しながら、現場に合う選び方をわかりやすく解説します。
            </P>
          </header>

          <Figure
            src={IMG("roller-cabinet-tool-storage-hero.jpg")}
            alt="工場保全部門でローラーキャビネットを使って工具を整理するイメージ"
            priority
          />

          <section className="my-8 rounded-2xl border-2 border-gray-900 bg-gray-50 p-5 md:p-6">
            <h2 className="mb-4 text-2xl font-black text-gray-900 sm:text-3xl">
              先に結論：ローラーキャビネットが向くのは「共有工具を定位置化したい現場」
            </h2>
            <ul className={cls.list}>
              <li>
                <Mark>大量の工具を整理・施錠・移動したいなら</Mark>
                、収納の中心はローラーキャビネットが向きます。
              </li>
              <li>
                持ち運びは<strong>工具箱</strong>、現場間運搬は
                <strong>ワゴン・台車</strong>、作業面確保は
                <strong>作業台</strong>が得意です。
              </li>
              <li>
                選定では段数より、
                <Mark>50/100/150の引出し高さ構成</Mark>
                を先に確認すると失敗しにくくなります。
              </li>
            </ul>
          </section>

          <TopCta />

          <H2 id="problems">工具収納が片付かない現場で起こりやすい問題</H2>
          <P>
            工具収納が崩れている現場では、次のような問題が起こりがちです。
          </P>
          <ol className="my-4 list-decimal space-y-2 pl-6 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
            <li>同じ工具が複数箇所に散らばり、探す時間が長くなる</li>
            <li>使った人ごとに戻し場所が違い、棚卸しがしにくい</li>
            <li>作業台の上が工具置き場になって作業面が狭くなる</li>
            <li>大きな工具だけ別管理になり、定位置化できない</li>
            <li>鍵管理ができず、共用工具の所在が曖昧になる</li>
          </ol>
          <P>
            これらは、現場に合う収納用品が不足している、あるいは役割分担が曖昧なことが原因になりやすいです。持ち運び用の工具箱だけで共有工具を管理しようとすると、どうしても限界が出ます。
          </P>

          <H2 id="differences">
            ローラーキャビネット・工具箱・ワゴン・作業台の違い
          </H2>
          <Figure
            src={IMG("tool-storage-types-comparison.jpg")}
            alt="工具箱・ワゴン・作業台・ローラーキャビネットの違いを示すイメージ"
          />

          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[720px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>収納タイプ</th>
                  <th className={cls.th}>得意なこと</th>
                  <th className={cls.th}>向く使い方</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={cls.td}>
                    <strong>工具箱</strong>
                  </td>
                  <td className={cls.td}>持ち運び</td>
                  <td className={cls.td}>個人持ちの基本工具を点検に持っていく</td>
                </tr>
                <tr>
                  <td className={cls.td}>
                    <strong>ワゴン・台車</strong>
                  </td>
                  <td className={cls.td}>運搬</td>
                  <td className={cls.td}>部品・治具・消耗品を作業場所へ運ぶ</td>
                </tr>
                <tr>
                  <td className={cls.td}>
                    <strong>作業台</strong>
                  </td>
                  <td className={cls.td}>作業面の確保</td>
                  <td className={cls.td}>加工・組立・整備の作業スペース</td>
                </tr>
                <tr>
                  <td className={cls.td}>
                    <strong>ローラーキャビネット</strong>
                  </td>
                  <td className={cls.td}>整理・施錠・定位置管理</td>
                  <td className={cls.td}>共有工具の中核収納として運用する</td>
                </tr>
              </tbody>
            </table>
          </div>

          <H3>工具箱が向くケース</H3>
          <P>
            両開きや2段タイプの工具箱は、持ち運びやすさが強みです。個人持ちの基本工具を入れて設備点検に持っていく用途には向いています。ただし、工具点数が増えると収まりきらず、中で重なりやすくなります。共有工具の定位置管理にも向きません。
          </P>

          <H3>ワゴンや運搬台車が向くケース</H3>
          <P>
            ワゴンや台車は、部品箱、治具、消耗品、工具をその日の作業場所へ運ぶ用途に向きます。現場をまたいで動く作業が多い場合には有効です。ただし、ワゴンは基本的に“運ぶこと”が中心です。長期保管や施錠、引き出しごとの細かな整理は、ローラーキャビネットほど得意ではありません。
          </P>

          <H3>作業台が向くケース</H3>
          <P>
            作業台は加工や組立のための面を確保するものです。収納機能が付いていても、主目的は作業面です。作業台の天板が工具置き場になっている現場では、収納不足のサインだと考えた方がよいでしょう。
          </P>

          <H3>ローラーキャビネットが向くケース</H3>
          <ul className={cls.list}>
            <li>大量の工具を引き出しごとに整理できる</li>
            <li>キャスター付きでレイアウト変更や移動がしやすい</li>
            <li>鍵付きで共有工具を管理しやすい</li>
            <li>天板を一時作業面として使える</li>
          </ul>
          <P>
            TRUSCOの代表的なローラーキャビネットでは、流通情報ベースで
            <Mark>オールロック式、ラッチ機構、シリンダー錠、ボールスライドレール</Mark>
            などが確認でき、工場や整備現場の共用工具収納として使いやすい仕様です。
          </P>

          <H2 id="how-to-choose">TRUSCOローラーキャビネットの選び方</H2>
          <Figure
            src={IMG("roller-cabinet-drawer-organization.jpg")}
            alt="引き出し内をデバイダーで整理するイメージ"
          />
          <P>
            ローラーキャビネット選びで重要なのは、見た目の大きさよりも
            <Mark>引き出しの高さ構成</Mark>です。
          </P>

          <H3>引き出し高さ 50 / 100 / 150 の考え方</H3>
          <P>
            TRUSCOのローラーキャビネットは主に
            <strong>50・100・150</strong>
            の高さ構成で整理されています。
          </P>
          <ul className={cls.list}>
            <li>
              <Mark>50</Mark>：レンチ、ドライバー、測定具、小物整理向き
            </li>
            <li>
              <Mark>100</Mark>
              ：ソケット、電動工具付属品、中型ハンドツール向き
            </li>
            <li>
              <Mark>150</Mark>
              ：電動工具本体、大きめの治具、厚みのある収納物向き
            </li>
          </ul>
          <P>
            段数だけで選ぶと、薄い引き出しばかりで厚みのある工具が入らないことがあります。まずは収納したい工具の厚みを把握し、その後で段数を見る方が失敗しにくいです。
          </P>

          <H3>4段・6段・7段・8段の選び分け</H3>
          <P>
            代表モデルは次のクラスで見ると選びやすくなります。詳細は比較早見表と商品カードも参照してください。
          </P>
          <ul className={cls.list}>
            <li>
              <strong>4段クラス（TRC-121R / TRC-121SR）</strong>
              ：初めての導入や小規模の共用収納
            </li>
            <li>
              <strong>6段クラス（TRC-042R / TRC-042SR / TRC-123R）</strong>
              ：中型〜やや大型までバランスよく収めたい現場
            </li>
            <li>
              <strong>7段クラス（TRC-232R / TRC-232SR / TRC-070R / TRC-070SR）</strong>
              ：分類を細かくしたい、または100高で均質管理したい現場
            </li>
            <li>
              <strong>8段クラス（TRC-341R / TRC-341SR）</strong>
              ：細かな定位置管理を強く進めたい現場
            </li>
          </ul>

          <div className="my-6 grid gap-5">
            {featuredCabinets.map((product, index) => (
              <ProductCard
                key={product.code}
                product={product}
                priority={index === 0}
              />
            ))}
          </div>

          <H3>仕切板付き・アクセサリー付きの見方</H3>
          <ul className={cls.list}>
            <li>
              <strong>仕切板付き</strong>
              ：導入直後から引き出し内の整理精度を上げやすい
            </li>
            <li>
              <strong>デバイダー</strong>
              ：引き出し内を幅方向・長さ方向で細かく分けたいときに便利
            </li>
            <li>
              <strong>サイドテーブル</strong>
              ：キャビネット横に補助作業面や一時置き場を追加できる
            </li>
            <li>
              <strong>サイドポケット</strong>
              ：スプレー缶やウエス、小物を外側に逃がして使いやすくできる
            </li>
          </ul>
          <P>
            本体だけでなく、運用ルールまで含めて整えると導入効果が出やすくなります。
          </P>

          <H2 id="comparison">代表モデルの比較早見表</H2>
          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[860px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>モデル</th>
                  <th className={cls.th}>特徴</th>
                  <th className={cls.th}>向く現場</th>
                </tr>
              </thead>
              <tbody>
                {comparisonModels.map((row) => {
                  const primary = byCode[row.codes[0]];
                  const label = row.codes.join(" / ");
                  return (
                    <tr key={label}>
                      <td className={cls.td}>
                        <ProductTableCell product={primary} label={label} />
                      </td>
                      <td className={cls.td}>{row.feature}</td>
                      <td className={cls.td}>{row.fit}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <aside className="my-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 md:p-6">
            <p className="mb-4 text-xl font-extrabold text-gray-900">
              代表商品を見たい方はこちら
            </p>
            <ExtButton href={ctas.rollerCabinet.url}>
              {ctas.rollerCabinet.label} →
            </ExtButton>
          </aside>

          <H3>仕切板付きモデルも比較したい場合</H3>
          <div className="my-6 grid gap-5 md:grid-cols-2">
            {dividerProducts.map((product) => (
              <ProductCard key={product.code} product={product} />
            ))}
          </div>

          <H2 id="combination">
            ローラーキャビネットだけで終わらせない。組み合わせで考える
          </H2>
          <Figure
            src={IMG("roller-cabinet-with-workbench.jpg")}
            alt="作業台の横にローラーキャビネットを配置したイメージ"
          />

          <H3>工具箱との組み合わせ</H3>
          <P>
            ローラーキャビネットを母艦にして、日常点検に必要な工具だけを工具箱へ入れて持ち出す運用は相性がよい方法です。全部を持ち歩く必要がなくなり、戻し場所も明確になります。
          </P>
          <div className="my-6 grid gap-5">
            {relatedTools.map((product) => (
              <ProductCard key={product.code} product={product} />
            ))}
          </div>
          <div className="my-4">
            <ExtButton href={ctas.toolbox.url}>{ctas.toolbox.label} →</ExtButton>
          </div>

          <H3>運搬台車との組み合わせ</H3>
          <P>
            大型部品や治具、交換部品を一緒に動かす必要がある現場では、ローラーキャビネットだけでは完結しません。部材を運ぶ役割は台車・ワゴン側に任せた方が、キャビネット本来の収納性を活かせます。
          </P>

          <H3>作業台との組み合わせ</H3>
          <P>
            作業台の近くにローラーキャビネットを置くと、必要工具をすぐ取り出せるようになります。逆に、作業台に引き出し収納まで求めすぎると、作業面と収納面のどちらも中途半端になりやすいです。
          </P>

          <MidCta />

          <H2 id="accessories">周辺アクセサリーで収納精度を上げる</H2>
          <div className="my-6 grid gap-5">
            {accessoryProducts.map((product) => (
              <ProductCard key={product.code} product={product} />
            ))}
          </div>
          <P>
            引き出しを仕切らずに使うと、工具が横に流れて混ざりやすくなります。特に薄い工具や測定具は、デバイダーやパーティションの有無で管理しやすさが大きく変わります。
          </P>

          <H2 id="checklist">導入前に確認したいチェックポイント</H2>
          <Figure
            src={IMG("rolling-tool-cabinet-movement.jpg")}
            alt="ローラーキャビネットを現場内で安全に移動するイメージ"
          />
          <ol className="my-4 list-decimal space-y-3 pl-6 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
            <li>
              <strong>収納したい工具の点数と厚み</strong>
              <br />
              数だけでなく、厚み・長さ・重量を確認します。
            </li>
            <li>
              <strong>個人用か共用か</strong>
              <br />
              共用工具を集約するなら、段数や仕切りも重視したいところです。
            </li>
            <li>
              <strong>設置場所と通路幅</strong>
              <br />
              置き場と動線を先に確認します。
            </li>
            <li>
              <strong>搬入・荷下ろし条件</strong>
              <br />
              大きめのキャビネットは、納品時の荷下ろし条件確認が必要です。
            </li>
            <li>
              <strong>鍵管理と棚卸しルール</strong>
              <br />
              誰が使い、どこへ戻すかまでルール化すると5Sにつながります。
            </li>
          </ol>

          <Figure
            src={IMG("tool-storage-procurement-planning.jpg")}
            alt="購買担当者と現場責任者が工具収納を検討するイメージ"
          />

          <H2 id="failures">よくある失敗</H2>
          <ul className={cls.list}>
            <li>
              <strong>段数だけで決める</strong>
              ：厚みのある工具が入らず、結局別置きになる
            </li>
            <li>
              <strong>工具箱の代替として全部を入れようとする</strong>
              ：持ち出し用途と混ざり、定位置が崩れる
            </li>
            <li>
              <strong>作業台代わりにしすぎる</strong>
              ：天板が物置になり、収納の中核としての役割が薄れる
            </li>
            <li>
              <strong>仕切りを後回しにする</strong>
              ：引き出し内で工具が流れて混ざる
            </li>
            <li>
              <strong>搬入条件を確認しない</strong>
              ：通路・荷下ろしで現場に入れない
            </li>
          </ul>

          <H2 id="buy-check">購入前チェックリスト</H2>
          <ul className="my-4 space-y-2">
            {checkItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[15px] leading-7 text-gray-900"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-amber-700 bg-white text-xs font-bold text-amber-800"
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <H2 id="faq">FAQ</H2>
          <div className="my-6 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-gray-300 bg-white p-5"
              >
                <h3 className={cls.faqQ}>{faq.q}</h3>
                <p className={cls.bodySm}>{faq.a}</p>
              </div>
            ))}
          </div>

          <BottomCta />

          <H2 id="summary">まとめ</H2>
          <Figure
            src={IMG("tool-5s-standardization.jpg")}
            alt="工具の定位置管理が進んだ整備現場のイメージ"
          />
          <P>
            ローラーキャビネットは、単に大きな工具箱ではなく、
            <Mark>
              共有工具を整理し、施錠し、動かし、定位置化するための収納の中核
            </Mark>
            です。
          </P>
          <P>導入の成否は、見た目の大きさよりも、</P>
          <ul className={cls.list}>
            <li>何を入れるか</li>
            <li>どの高さの引き出しが必要か</li>
            <li>工具箱、ワゴン、作業台とどう役割分担するか</li>
            <li>仕切りやアクセサリーでどこまで運用精度を上げるか</li>
          </ul>
          <P>
            で決まります。工具が散らばりやすい現場ほど、収納用品を単体で選ぶより、収納の流れ全体で考えた方が失敗しにくくなります。TRUSCOのローラーキャビネットは、その中心を作りやすい選択肢のひとつです。現場の工具点数と使い方を整理したうえで、合うモデルを比較してみてください。
          </P>

          <TopCta />

          <section className="my-12 rounded-2xl border border-gray-300 bg-gray-50 p-5 md:p-6">
            <h2 className="mb-4 text-2xl font-black text-gray-900">関連記事</h2>
            <ul className="space-y-3">
              {relatedArticles.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[16px] font-bold text-gray-900 underline underline-offset-4 hover:text-amber-800"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
