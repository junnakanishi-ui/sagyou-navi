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

const SLUG = "compact-thermal-camera-flir-c5-c3x-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const META_TITLE =
  "コンパクトサーモグラフィカメラ比較｜FLIR C5・C3-Xの違い【2026年】";
const H1 =
  "コンパクトサーモグラフィカメラの選び方｜FLIR C5・C3-Xの違いと設備点検での使い分け【2026年版】";
const SHORT_TITLE = "コンパクトサーモグラフィカメラの選び方";
const DESCRIPTION =
  "コンパクトサーモグラフィカメラを設備点検・電気点検・建物診断に使いたい方向けに、FLIR C5（89401-0202）とC3-X（90501-0201）を徹底比較。160×120と128×96の違い、400℃/300℃、MSX、Wi-Fi、FLIR Ignite、1-Touch Level/Span、IP54、放射率の注意点まで購入前に知りたい情報を整理します。";
const PUBLISHED = "2026-09-02";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const { c5Primary, c5Alt, c3x, ctas } = productData;

const comparisonRows = [
  ["Wi-Fiモデル型式", "90501-0201", "89401-0202"],
  ["赤外線解像度", "128×96", "160×120"],
  ["熱画素数", "12,288", "19,200"],
  ["測定温度範囲", "-20～300℃", "-20～400℃"],
  ["温度分解能", "<0.07℃", "<0.07℃"],
  ["空間分解能", "7.9 mrad/pixel", "6.3 mrad/pixel"],
  ["可視カメラ", "5MP", "5MP"],
  ["MSX", "対応", "対応"],
  ["ピクチャーインピクチャー", "対応", "対応"],
  ["1-Touch Level/Span", "—", "対応"],
  ["デジタルズーム", "—", "対応"],
  ["USB映像ストリーミング", "—", "対応"],
  ["Wi-Fi / FLIR Ignite", "対応", "対応"],
  ["保護等級", "IP54", "IP54"],
  ["落下試験", "2m", "2m"],
  ["本体サイズ", "約138×84×24mm", "約138×84×24mm"],
  ["バッテリー稼働", "約4時間", "約4時間"],
] as const;

const decisionQuestions = [
  {
    q: "Q1. 300℃を超える対象を測る？",
    yes: "はい → C5",
    body: "C3-Xの測定上限は300℃。C5は400℃までです。高温設備や、300℃を超える可能性がある対象を日常的に見るなら、この時点でC5が有力になります。",
  },
  {
    q: "Q2. 小さな異常箇所を少しでも見分けやすくしたい？",
    yes: "はい → C5",
    body: "C3-Xは128×96、C5は160×120。熱画素数ではC3-Xが12,288、C5が19,200で、C5は約1.56倍です。",
  },
  {
    q: "Q3. 点検中に注目部分の温度差を素早く強調したい？",
    yes: "はい → C5",
    body: "C5は1-Touch Level/Spanに対応します。画面内の注目箇所に合わせて温度表示レンジを詰めやすく、異常箇所の視認性を調整しやすいのが特徴です。",
  },
  {
    q: "Q4. USBストリーミングやデジタルズームを使う？",
    yes: "はい → C5",
    body: "C5には、C3-XにはないデジタルズームやUSB映像ストリーミングがあります。",
  },
  {
    q: "Q5. 日常の基本点検が中心で、300℃以内で足りる？",
    yes: "はい → C3-X",
    body: "128×96、MSX、5MP可視カメラ、Wi-Fi、Igniteまで備えているため、日常的な電気・機械・建物点検ならC3-Xで十分なケースがあります。",
  },
] as const;

const useCases = [
  {
    title: "1. 分電盤・端子・ヒューズ",
    body: "サーモグラフィは、電気設備の異常発熱を探す用途で広く使われます。周囲と比較して温度が高い端子やヒューズを面で探せるため、一次スクリーニングに向きます。ただし、通電設備の点検ではサーモグラフィを使うことと電気安全は別です。必要な資格、離隔、安全手順、PPEを優先してください。",
    image: "thermal-camera-electrical-panel-inspection.webp",
    alt: "サーモグラフィカメラで分電盤の異常発熱を非接触確認するイメージ",
  },
  {
    title: "2. モーター・軸受・機械設備",
    body: "モーター、ベアリング、駆動部なども、普段と異なる温度上昇を見つけることで点検の手掛かりになります。大切なのは、一回の絶対温度だけで判定するのではなく、正常時の状態と比較することです。",
    image: "thermal-camera-motor-bearing-inspection.webp",
    alt: "モーターと軸受の温度分布をサーモグラフィで確認するイメージ",
  },
  {
    title: "3. 配管・空調・HVAC",
    body: "C5やC3-Xは、FLIR公式でも配管問題やHVAC、建物メンテナンス用途が想定されています。配管の温度分布、空調吹出口周辺、断熱状態など、目視だけでは分かりにくい温度差を探す補助になります。",
    image: "thermal-camera-hvac-pipe-inspection.webp",
    alt: "空調配管やHVAC設備の温度ムラをサーモグラフィで確認するイメージ",
  },
  {
    title: "4. 建物診断",
    body: "断熱不良、温度ムラ、漏水などによって壁や天井の表面温度に差が生じる場合、サーモグラフィでその兆候を見つけられることがあります。ただし、壁の中を直接透視しているわけではありません。見ているのは壁表面の温度分布です。",
    image: "thermal-camera-building-surface-diagnosis.webp",
    alt: "サーモグラフィで壁面の表面温度差を確認する建物診断イメージ",
  },
] as const;

const checkItems = [
  "測定対象は300℃以内か",
  "400℃まで必要か",
  "128×96で十分か",
  "160×120が必要か",
  "小さな端子・部品を見ることが多いか",
  "MSXを使いたい",
  "Wi-Fi / Igniteを使いたい",
  "1-Touch Level/Spanが必要か",
  "デジタルズームが必要か",
  "USB映像ストリーミングが必要か",
  "IP54 / 2m落下性能で現場条件を満たすか",
  "反射性の高い金属を測る機会が多いか",
  "撮影後の記録・共有フローを決めているか",
] as const;

const faqs = [
  {
    q: "コンパクトサーモグラフィカメラとは何ですか？",
    a: "ポケットや小型ケースへ入れて持ち運べるサーモグラフィカメラです。対象物が放射する赤外線を検出し、表面温度の分布を熱画像として表示します。",
  },
  {
    q: "FLIR C5とC3-Xはどちらがおすすめですか？",
    a: "基本的な設備・電気・建物点検で300℃以内ならC3-Xが候補です。160×120の解像度、400℃までの測定、1-Touch Level/Span、デジタルズームなどを重視するならC5が向きます。",
  },
  {
    q: "FLIR C5の型式89401-0202とは何ですか？",
    a: "Wi-Fi機能付きFLIR C5のメーカーPart Numberです。楽天商品タイトルでは894010202とハイフンなしで表記される場合があります。",
  },
  {
    q: "FLIR C3-Xの型式90501-0201とは何ですか？",
    a: "Wi-Fi機能付きC3-XのメーカーPart Numberです。",
  },
  {
    q: "C5は160×120、C3-Xは128×96ですが大きな差ですか？",
    a: "熱画素数ではC5が19,200、C3-Xが12,288で、C5は約1.56倍です。小さな対象や細かな温度分布を見るときに差が出やすくなります。ただし測定品質は距離・放射率・対象サイズなどにも左右されます。",
  },
  {
    q: "C5とC3-XはWi-Fiに対応していますか？",
    a: "今回紹介する89401-0202 / 90501-0201はWi-Fiモデルです。FLIR Igniteとのクラウド連携に対応します。",
  },
  {
    q: "サーモグラフィで壁の中は見えますか？",
    a: "直接透視することはできません。壁内部の状態によって表面に温度差が生じた場合、その表面温度差を捉えられることがあります。",
  },
  {
    q: "光沢のある金属を正確に測れますか？",
    a: "反射性の高い低放射率表面は測定が難しくなる場合があります。放射率や反射温度を理解したうえで測定する必要があります。",
  },
  {
    q: "C8が出たのでC5は旧型ですか？",
    a: "2026年9月時点でC5とC3-XもFLIR公式Cxシリーズに掲載されています。C8は新しい上位モデルですが、C5/C3-Xも用途別の現行選択肢です。",
  },
] as const;

const relatedArticles = [
  {
    href: "/articles/digital-clamp-meter-selection",
    label: "デジタルクランプメーターの選び方",
  },
  {
    href: "/articles/digital-manifold-selection",
    label: "デジタルマニホールドの選び方",
  },
  {
    href: "/articles/black-globe-wbgt-meter-selection-guide",
    label: "黒球式熱中症指数計の選び方",
  },
] as const;

type ProductRef = {
  short: string;
  name: string;
  manufacturerPartNumber: string;
  image: string;
  url: string;
  badge?: string;
  role?: string;
  note?: string;
};

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: META_TITLE,
    description: DESCRIPTION,
    type: "article",
    url: CANONICAL,
    siteName: "作業用品ナビ",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    images: [
      {
        url: `${SITE_URL}${IMG("compact-thermal-camera-facility-inspection.webp")}`,
        width: 1600,
        height: 900,
        alt: "設備保全担当者がコンパクトサーモグラフィカメラで機械設備を点検するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG("compact-thermal-camera-facility-inspection.webp")}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("compact-thermal-camera-facility-inspection.webp")}`],
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
  about: [
    {
      "@type": "Product",
      name: "FLIR C5",
      model: "89401-0202",
      brand: { "@type": "Brand", name: "FLIR" },
      sameAs: [c5Primary.url],
    },
    {
      "@type": "Product",
      name: "FLIR C3-X",
      model: "90501-0201",
      brand: { "@type": "Brand", name: "FLIR" },
      sameAs: [c3x.url],
    },
  ],
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

function PrimaryCta({ href, label }: { href: string; label: string }) {
  return (
    <ExtLink
      href={href}
      className="inline-flex min-h-12 items-center justify-center rounded-xl bg-amber-600 px-5 py-3 text-center text-[16px] font-extrabold text-white hover:bg-amber-700"
    >
      {label} →
    </ExtLink>
  );
}

function PartBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-md bg-gray-900 px-2.5 py-1 text-xs font-bold tracking-wide text-white">
      {children}
    </span>
  );
}

function DecisionCard({
  label,
  title,
  partNumber,
  points,
  href,
  ctaLabel,
}: {
  label: string;
  title: string;
  partNumber: string;
  points: string[];
  href: string;
  ctaLabel: string;
}) {
  return (
    <article className="rounded-2xl border-2 border-gray-300 bg-white p-5 shadow-sm">
      <p className="text-sm font-bold text-emerald-800">{label}</p>
      <h3 className="mt-2 text-2xl font-black text-gray-900">{title}</h3>
      <div className="mt-2">
        <PartBadge>P/N {partNumber}</PartBadge>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] leading-7 text-gray-900">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="mt-5">
        <ExtLink
          href={href}
          className="font-bold text-orange-700 underline decoration-2 underline-offset-4"
        >
          {ctaLabel}
        </ExtLink>
      </div>
    </article>
  );
}

function ProductTableCell({ product }: { product: ProductRef }) {
  const hasImage = productImageExists(product.image);
  return (
    <ExtLink
      href={product.url}
      className="group flex min-w-[16rem] items-start gap-3 rounded-lg p-1 no-underline transition hover:bg-gray-50"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        {hasImage ? (
          <Image
            src={PROD(product.image)}
            alt={`${product.short}の商品画像`}
            fill
            sizes="80px"
            className="object-contain p-1.5 transition group-hover:scale-105"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-[10px] text-gray-800">
            準備中
          </span>
        )}
      </span>
      <span className="min-w-0 space-y-1">
        <span className="block text-sm font-bold leading-snug text-gray-900 underline decoration-2 underline-offset-4">
          {product.short}
        </span>
        <span className="block text-xs font-bold text-gray-800">
          <PartBadge>P/N {product.manufacturerPartNumber}</PartBadge>
        </span>
      </span>
    </ExtLink>
  );
}

function ProductCard({
  product,
  priority = false,
  specs,
  note,
}: {
  product: ProductRef;
  priority?: boolean;
  specs: { label: string; value: string }[];
  note?: string;
}) {
  const hasImage = productImageExists(product.image);
  return (
    <article className="rounded-2xl border-2 border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-5 md:grid-cols-[180px_1fr] md:items-start">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          {hasImage ? (
            <Image
              src={PROD(product.image)}
              alt={`${product.name}の商品画像`}
              width={360}
              height={360}
              priority={priority}
              className="h-auto w-full object-contain p-3"
            />
          ) : (
            <div className="flex aspect-square items-center justify-center text-sm font-medium text-gray-800">
              画像準備中
            </div>
          )}
        </div>
        <div>
          {product.badge ? (
            <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-950">
              {product.badge}
            </span>
          ) : null}
          <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
            {product.name}
          </h3>
          <div className="mt-2">
            <PartBadge>P/N {product.manufacturerPartNumber}</PartBadge>
          </div>
          {product.role ? (
            <p className="mt-3 text-[15px] leading-7 text-gray-900">
              {product.role}
            </p>
          ) : null}
          <dl className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            {specs.map((row) => (
              <div key={row.label}>
                <dt className="inline font-bold">{row.label}：</dt>
                <dd className="inline">
                  <Mark>{row.value}</Mark>
                </dd>
              </div>
            ))}
          </dl>
          {note ? (
            <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-[14px] leading-6 text-gray-900">
              {note}
            </p>
          ) : null}
          <div className="mt-5">
            <PrimaryCta
              href={product.url}
              label={`${product.short} ${product.manufacturerPartNumber}を見る`}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function MainCtaBlock({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={
        compact
          ? "my-8 rounded-2xl border-2 border-gray-900 bg-gray-950 p-6 text-white md:p-8"
          : "my-10 rounded-2xl border-2 border-gray-900 bg-gray-950 p-6 text-white md:p-8"
      }
    >
      <h2 className="text-2xl font-black sm:text-3xl">
        コンパクトサーモグラフィカメラを比較する
      </h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-100">
        FLIR C5・C3-Xを含むサーモグラフィカメラを一覧で確認し、用途と型式から選べます。
      </p>
      <div className="mt-5">
        <ExtLink
          href={ctas.main.url}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-amber-500 px-5 py-3 text-[16px] font-extrabold text-gray-950 hover:bg-amber-400"
        >
          {ctas.main.label} →
        </ExtLink>
      </div>
    </section>
  );
}

function FinalCtaBlock() {
  return (
    <section className="my-12 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 md:p-8">
      <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
        コンパクトサーモグラフィカメラをまとめて比較
      </h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-900">
        解像度・測定温度上限・Ignite連携まで、購入前に型式（89401-0202 /
        90501-0201）を確認して選んでください。
      </p>
      <div className="mt-5">
        <PrimaryCta href={ctas.main.url} label={ctas.main.label} />
      </div>
      <h3 className="mt-8 text-xl font-black text-gray-900">関連用品</h3>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {ctas.secondary.map((cta) => (
          <ExtLink
            key={cta.label}
            href={cta.url}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border-2 border-gray-900 bg-white px-4 py-3 text-center text-[15px] font-extrabold text-gray-900 hover:bg-gray-100"
          >
            {cta.label} →
          </ExtLink>
        ))}
      </div>
    </section>
  );
}

const c5Specs = [
  { label: "赤外線解像度", value: "160×120" },
  { label: "熱画素数", value: "19,200" },
  { label: "測定温度範囲", value: "-20～400℃" },
  { label: "温度分解能", value: "<0.07℃" },
  { label: "可視カメラ", value: "5MP" },
  { label: "特徴", value: "MSX / 1-Touch / ズーム / USB streaming" },
  { label: "保護", value: "IP54 / 2m落下" },
  { label: "バッテリー", value: "約4時間" },
];

const c3xSpecs = [
  { label: "赤外線解像度", value: "128×96" },
  { label: "熱画素数", value: "12,288" },
  { label: "測定温度範囲", value: "-20～300℃" },
  { label: "温度分解能", value: "<0.07℃" },
  { label: "可視カメラ", value: "5MP" },
  { label: "特徴", value: "MSX / Wi-Fi / FLIR Ignite" },
  { label: "保護", value: "IP54 / 2m落下" },
  { label: "バッテリー", value: "約4時間" },
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <main className="bg-white text-gray-900">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
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
              測定・計測 / 設備保全 / {PUBLISHED}更新
            </div>
            <h1 className={cls.h1}>{H1}</h1>
            <P>
              分電盤の端子、モーター、配管、空調設備、建物の断熱状態などを点検するとき、「触らずに温度差を面で見たい」という場面があります。そこで使われるのが、
              <Mark>コンパクトサーモグラフィカメラ</Mark>
              です。
            </P>
            <P>
              大型の業務用サーモグラフィに比べて持ち運びやすく、日常点検へ持ち込みやすい一方、機種によって赤外線解像度、測定温度範囲、表示補助、画像転送機能が異なります。特にFLIRのポケット型を検討していると、C5とC3-Xの違い、160×120と128×96の実務差、300℃で足りるか、型式
              <Mark>89401-0202</Mark>と<Mark>90501-0201</Mark>
              の意味、C8登場後もC5/C3-Xを選んでよいか——といった疑問が出てきます。
            </P>
            <P>
              この記事では、2026年9月時点のFLIR公式情報と商品ページを照合し、
              <Mark>
                コンパクトサーモグラフィカメラを選ぶときに本当に見るべきポイント
              </Mark>
              を、FLIR C5とC3-Xを中心に整理します。
            </P>
            <Figure
              src={IMG("compact-thermal-camera-facility-inspection.webp")}
              alt="設備保全担当者がコンパクトサーモグラフィカメラで機械設備を点検するイメージ"
              priority
            />
          </header>

          <section className="my-10 rounded-2xl border-y-4 border-emerald-700 bg-emerald-50 p-6 md:p-8">
            <H2>30秒で結論｜C5とC3-Xはどちらを選ぶ？</H2>
            <p className="mb-5 text-[17px] leading-8 text-gray-900">
              迷ったら、次のように考えると分かりやすいです。
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <DecisionCard
                label="基本点検・300℃以内"
                title="FLIR C3-X"
                partNumber="90501-0201"
                points={[
                  "電気・機械・建物の基本点検が中心",
                  "128×96 / MSX / Wi-Fi / Ignite",
                  "ポケットサイズの導入機を探している",
                ]}
                href={c3x.url}
                ctaLabel="C3-X 90501-0201を見る"
              />
              <DecisionCard
                label="高解像度・400℃・1-Touch"
                title="FLIR C5"
                partNumber="89401-0202"
                points={[
                  "160×120で細かな温度分布を見たい",
                  "400℃まで測定したい",
                  "1-Touch / ズーム / USB streamingも使いたい",
                ]}
                href={c5Primary.url}
                ctaLabel="C5 89401-0202を見る"
              />
            </div>
            <p className="mt-6 text-[17px] leading-8 text-gray-900">
              大まかには、
              <Mark>基本点検中心ならC3-X。解像度・400℃・表示調整機能まで求めるならC5。</Mark>
            </p>
            <div className="mt-6">
              <PrimaryCta href={ctas.main.url} label={ctas.main.label} />
            </div>
          </section>

          <section>
            <H2 id="what-is">コンパクトサーモグラフィカメラとは？</H2>
            <P>
              サーモグラフィカメラは、対象物から放出される赤外線エネルギーを検出し、温度分布を画像として表示する機器です。赤外線温度計が「一点」の温度を見るのに対し、サーモグラフィカメラは
              <Mark>面全体の温度差を可視化できる</Mark>
              のが大きな違いです。
            </P>
            <P>
              例えば分電盤なら、端子を一つずつ温度計で測らなくても、画面内で周囲より温度が高い場所を探しやすくなります。
            </P>
            <H3>コンパクト型のメリット</H3>
            <P>
              FLIR C5 / C3-Xは、いずれも約138×84×24mmのポケット型です。重量も約0.19kgクラス。そのため、工場内巡回、建物内階ごとの点検、電気工事・空調点検への携行、設備担当者の日常点検バッグへの常備に向いています。
            </P>
            <P>
              高性能な大型サーモグラフィを必要なときだけ持ち出すのではなく、
              <Mark>
                日常点検で温度差を見つける一次スクリーニングツールとして使いやすい
              </Mark>
              のがコンパクト型の強みです。
            </P>
            <Figure
              src={IMG("compact-thermal-camera-selection-concept.webp")}
              alt="コンパクトサーモグラフィカメラを用途と必要性能で選ぶイメージ"
            />
          </section>

          <section>
            <H2 id="decision">5問で分かる｜C5とC3-Xの選び方</H2>
            <div className="space-y-6">
              {decisionQuestions.map((item) => (
                <article
                  key={item.q}
                  className="rounded-2xl border border-gray-300 bg-white p-5"
                >
                  <h3 className="text-xl font-black text-gray-900">{item.q}</h3>
                  <p className="mt-2 text-[16px] font-bold text-emerald-900">
                    {item.yes}
                  </p>
                  <p className="mt-2 text-[16px] leading-7 text-gray-900">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <MainCtaBlock />

          <section>
            <H2 id="compare">FLIR C5とC3-Xを比較</H2>
            <P>
              購入判断に必要な差を一覧で確認します。一番大きい違いは、
              <Mark>解像度・測定上限温度・表示・解析を助ける機能</Mark>
              の3つです。
            </P>
            <div className="my-6 overflow-x-auto">
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>項目</th>
                    <th className={cls.th}>
                      <ProductTableCell product={c3x} />
                    </th>
                    <th className={cls.th}>
                      <ProductTableCell product={c5Primary} />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([label, c3xVal, c5Val]) => (
                    <tr key={label}>
                      <th className={`${cls.th} font-bold`}>{label}</th>
                      <td className={cls.td}>{c3xVal}</td>
                      <td className={cls.td}>{c5Val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <H2 id="c5">FLIR C5 89401-0202とは？</H2>
            <P>
              FLIR C5は、Cxシリーズのポケット型サーモグラフィカメラです。今回のExcelには、同じC5
              Wi-Fiモデルが2つの商品URLで掲載されていますが、メーカーのPart
              Numberはどちらも<Mark>89401-0202</Mark>です。つまり、2種類のC5ではありません。
            </P>
            <P>
              C5の強みは熱画素数が多いだけでなく、
              <Mark>
                400℃まで測れる / 1-Touch Level/Span / デジタルズーム / USB映像ストリーミング
              </Mark>
              といった点にもあります。
            </P>
            <ProductCard
              product={c5Primary}
              priority
              specs={c5Specs}
              note="電気設備の端子やヒューズなど、対象が細かい現場では「画面上で異常部を見つけやすいか」が点検効率に関わります。"
            />
          </section>

          <section>
            <H2 id="c3x">FLIR C3-X 90501-0201とは？</H2>
            <P>
              C3-XもFLIR Cxシリーズのコンパクトサーモグラフィカメラです。Wi-Fi付きモデルのメーカーPart
              Numberは<Mark>90501-0201</Mark>
              です。楽天商品タイトルでは905010201のようにハイフンなしで表示される場合があります。
            </P>
            <P>
              C3-Xは、C5の機能を単純に削っただけではなく、
              <Mark>300℃以内の基本点検をポケットサイズで効率化するモデル</Mark>
              と考える方が分かりやすいです。
            </P>
            <ProductCard product={c3x} specs={c3xSpecs} />
          </section>

          <section>
            <H2 id="resolution">160×120と128×96は実務で何が違う？</H2>
            <P>
              スペック表を見ると「32ピクセル違うだけでは？」と思うかもしれません。実際には縦横の差を掛けるため、
              <Mark>C3-X：128×96 = 12,288画素 / C5：160×120 = 19,200画素</Mark>
              となり、C5の熱画素数はC3-Xの約1.56倍です。
            </P>
            <H3>小さな端子・接続部を見る</H3>
            <P>
              分電盤や制御盤では、画面内に複数の端子やケーブルが入ります。熱画素数が多い方が、同じ画角内の細かな温度分布を表現しやすくなります。
            </P>
            <H3>画素数だけで測定精度が決まるわけではない</H3>
            <P>
              160×120なら128×96より常に正確、という意味ではありません。対象物の大きさ、距離、放射率、周囲からの反射、視野角などでも測定条件は変わります。
            </P>
          </section>

          <section>
            <H2 id="use-cases">
              コンパクトサーモグラフィが活躍する4つの点検
            </H2>
            <div className="grid gap-5 sm:grid-cols-2">
              {useCases.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-2xl border border-gray-300 bg-white"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={IMG(item.image)}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-black text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-7 text-gray-900">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <H2 id="msx">MSXとは？C5 / C3-X共通の重要機能</H2>
            <P>
              C5とC3-Xには、FLIRのMSXが搭載されています。MSXは、可視画像の輪郭情報を熱画像へ重ねることで、対象物の位置や形状を分かりやすくする機能です。分電盤では、熱画像だけだと「どの端子の温度が高いのか」を判断しにくい場合がありますが、MSXを使うとスイッチや端子などの輪郭が重なり、異常箇所を後から確認しやすくなります。
            </P>
          </section>

          <section>
            <H2 id="ignite">FLIR IgniteとWi-Fiは何に使う？</H2>
            <P>
              C5とC3-XのWi-Fiモデルは、FLIR Igniteクラウドとの連携に対応します。現場で撮影した熱画像をWi-Fi経由でIgniteへアップロードし、複数現場の画像を整理・バックアップしたうえで、点検結果を社内や顧客へ共有する流れへつなげられます。
            </P>
            <P>
              サーモグラフィを単なる「温度を見るカメラ」として使うだけでなく、
              <Mark>撮る → 残す → 比較する → 共有する</Mark>
              までつなげると、設備保全ツールとしての価値が上がります。
            </P>
            <Figure
              src={IMG("thermal-inspection-cloud-report-workflow.webp")}
              alt="サーモグラフィ点検画像をPCで整理し報告書作成へつなげるイメージ"
            />
          </section>

          <section>
            <H2 id="duplicate">同じC5 89401-0202が2商品ページあるのはなぜ？</H2>
            <P>
              今回のExcelには、FLIR C5 Wi-Fiが2つのCRECOTE商品URLで掲載されています。商品タイトルの表記には多少違いがありますが、メーカー型式はどちらも
              <Mark>89401-0202</Mark>
              です。そのため、記事内では2機種として比較しません。
            </P>
            <div className="mt-4">
              <PrimaryCta
                href={c5Alt.url}
                label="FLIR C5 89401-0202の別掲載ページを見る"
              />
            </div>
          </section>

          <section className="rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
            <H2 id="surface-temp">
              コンパクトでも注意｜サーモグラフィは表面温度を測る
            </H2>
            <P>
              サーモグラフィは便利ですが、画面に表示された色をそのまま「内部温度」と考えるのは危険です。
            </P>
            <H3>壁の中を直接見ているわけではない</H3>
            <P>
              サーマルカメラは、壁の向こう側を映画のように透視しません。壁内部の異常によって表面温度に差が出れば、その差を捉えられることがあります。つまり、
              <Mark>内部を直接見るのではなく、表面へ現れた温度変化を見る</Mark>
              という理解が重要です。
            </P>
            <H3>放射率で温度表示は変わる</H3>
            <P>
              温度測定では放射率も重要です。マットな塗装面などは比較的測りやすい一方、磨かれたアルミ、銅、ステンレス、鏡面金属など反射性の高い表面では、周囲の熱が映り込み、表示温度へ影響する場合があります。
            </P>
            <P>
              「色が違う＝必ず故障」ではありません。異常判定では、同種設備との比較、過去画像との比較、負荷条件、放射率、周囲温度などを合わせて考える必要があります。
            </P>
            <Figure
              src={IMG("thermal-camera-reflective-metal-emissivity.webp")}
              alt="光沢金属と塗装面で放射率の違いを確認するイメージ"
            />
          </section>

          <section>
            <H2 id="c8">2026年にC8が出た今でもC5 / C3-Xを選んでよい？</H2>
            <P>
              2026年現在、FLIR Cxシリーズには新しいC8があります。C8は
              <Mark>320×240 / 最大450℃ / NETD &lt;50mK</Mark>
              など、C5よりさらに上位の性能を持ちます。
            </P>
            <P>
              ただし2026年9月時点でもFLIR公式Cxシリーズには、C3-X、C5、C8、Cx5が並んでいます。重要なのは、
              <Mark>最新モデルを買うことではなく、必要な点検性能に合うモデルを選ぶこと</Mark>
              です。
            </P>
            <ul className={cls.list}>
              <li>300℃以内の基本点検ならC3-X</li>
              <li>400℃まで・160×120・1-Touchを求めるならC5</li>
              <li>さらに高解像度が必要ならC8</li>
            </ul>
          </section>

          <section>
            <H2 id="checklist">C5 / C3-X購入前チェックリスト</H2>
            <ul className="my-4 grid gap-2 sm:grid-cols-2">
              {checkItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[16px] leading-7 text-gray-900"
                >
                  <span aria-hidden="true" className="mt-1 text-emerald-700">
                    □
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <H2 id="faq">よくある質問</H2>
            <div className="space-y-8">
              {faqs.map((item) => (
                <article key={item.q}>
                  <h3 className={cls.faqQ}>{item.q}</h3>
                  <p className={cls.bodySm}>{item.a}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <H2 id="summary">まとめ｜コンパクトサーモグラフィは「温度上限」だけで選ばない</H2>
            <P>
              FLIR C5とC3-Xは、どちらもポケットサイズで、MSX、5MP可視カメラ、Wi-Fi、FLIR
              Ignite、IP54、2m落下試験、約4時間バッテリーを持つ現場向けコンパクトサーモグラフィカメラです。
            </P>
            <P>
              違いは、<Mark>C3-X：128×96 / 300℃ / 基本点検</Mark>
              に対し、
              <Mark>
                C5：160×120 / 400℃ / 1-Touch Level/Span / ズーム / USB streaming
              </Mark>
              というところにあります。
            </P>
            <P>
              「何℃まで測れるか」だけでなく、どの大きさの異常を見たいか、どのくらい頻繁に使うか、撮った画像をどう記録・共有するかまで考えることが重要です。
            </P>
          </section>

          <FinalCtaBlock />

          <section className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-xl font-black text-gray-900">関連記事</h2>
            <ul className="mt-4 space-y-2">
              {relatedArticles.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-semibold text-gray-900 underline decoration-2 underline-offset-4"
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
