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

const SLUG = "cable-rack-cutting-hydraulic-tool-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const SEO_TITLE =
  "ケーブルラック切断工具の選び方｜専用カッター・油圧マルチで加工を効率化【2026年】";
const H1 =
  "ケーブルラックの切断を効率化するには？専用カッターとコードレス電動油圧式圧着工具の選び方【2026年版】";
const SHORT_TITLE = "ケーブルラック切断工具の選び方";
const DESCRIPTION =
  "ケーブルラックの親桁を現場で切断するとき、バンドソー・切削工具・専用ラックカッターをどう使い分けるかを解説。QR/SR、バリ・切り粉、コードレス電動油圧式圧着工具とアタッチメントの組み合わせまで電気工事向けに整理します。";
const PUBLISHED = "2026-08-28";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener";

type MainProduct = (typeof productData.mainProducts)[number];
type RelatedProduct = (typeof productData.relatedProducts)[number];

const [rac100, crc70, ev250dl] = productData.mainProducts as MainProduct[];
const relatedProducts = productData.relatedProducts as RelatedProduct[];
const primaryCtas = productData.ctas.primary;
const secondaryCtas = productData.ctas.secondary;

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: SEO_TITLE,
    description: DESCRIPTION,
    type: "article",
    url: CANONICAL,
    siteName: "作業用品ナビ",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    images: [
      {
        url: `${SITE_URL}${IMG("cable-rack-cutting-electrical-work-hero.webp")}`,
        width: 1600,
        height: 900,
        alt: "工場の電気工事現場でケーブルラックを現場合わせで加工するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SHORT_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG("cable-rack-cutting-electrical-work-hero.webp")}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("cable-rack-cutting-electrical-work-hero.webp")}`],
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

const keyPoints = [
  "電線用のケーブルカッターと、ケーブルラック親桁を切る専用カッターは別物です。",
  "まず確認するのは「QRかSRか」「幅」「材質」「板厚」「対応する本体」です。",
  "バンドソーは切断対象の自由度が高く、専用ラックカッターは対象が合えば同じ加工を繰り返しやすいという違いがあります。",
  "CACTUS RAC-100は標準でQR・SD-QRに対応し、SR・SD-SRはオプション刃で対応するラックカッターです。",
  "CRC-70はSRタイプ向けで、3.9kgの軽量・コンパクトな構成です。",
  "EV-250DLは14〜250mm²のコードレス電動油圧式圧着工具ですが、RAC-100・CRC-70等のアタッチメントにも対応します。",
  "すでに圧着器を使う会社なら「圧着工具を1作業だけに使う」ではなく、アタッチメントを含めた現場工具構成で考える価値があります。",
];

const cuttingMethodRows = [
  {
    method: "バンドソー",
    target: "ケーブルラック以外の材料も含めて切る現場",
    versatility: "高い（電線管など複数対象）",
    finish: "切断面・バリは現場条件次第",
    dust: "切り粉の管理が必要",
    fit: "汎用切断を1台でまとめたい",
    common: "他の充電工具と別系統",
  },
  {
    method: "グラインダー等の切削工具",
    target: "対象材・現場条件で使う場合",
    versatility: "中〜高（用途は広い）",
    finish: "バリ・仕上げ工程が増えやすい",
    dust: "火花・切り粉・周囲養生が課題",
    fit: "既存工具で対応したい",
    common: "圧着工具とは別",
  },
  {
    method: "専用ケーブルラックカッター",
    target: "QR/SR等、型式が決まったラックの反復加工",
    versatility: "低い（対象ラックに限定）",
    finish: "メーカー公表の仕上げ特性を確認",
    dust: "専用刃による加工。切り粉は回収計画を",
    fit: "同じラックを何度も加工する",
    common: "対応油圧工具本体と共通化可能",
  },
];

const rackCompareRows = [
  { label: "標準対象", rac: "QR / SD-QR", crc: "ネグロスSRタイプ" },
  { label: "オプション", rac: "SR / SD-SR（替刃）", crc: "—" },
  { label: "対応幅", rac: "100mm / 70mm", crc: "SR70mm向け" },
  { label: "質量", rac: "6.7kg", crc: "3.9kg" },
  {
    label: "適合工具",
    rac: "EV-250DL / EV-250Hi / SH-250M",
    crc: "EV-250DL / EV-250Hi",
  },
];

const workflowSteps = [
  { step: "1", title: "ラックの位置を出す", body: "ルート・支持位置・加工寸法を確認。" },
  {
    step: "2",
    title: "ケーブルラックを切断・加工する",
    body: "現場条件に合うラックカッターやバンドソー等を使用。",
  },
  {
    step: "3",
    title: "ラックを設置する",
    body: "支持材・ボルト等を使いながら施工。",
  },
  {
    step: "4",
    title: "ケーブルを敷設する",
    body: "幹線・配線をラック上へ収める。",
  },
  {
    step: "5",
    title: "端末処理・圧着する",
    body: "圧着端子・スリーブ・ダイスを確認し、適合工具で圧着。",
  },
  {
    step: "6",
    title: "工具・端材を回収する",
    body: "切断片、替刃、ダイス、電池、充電器を整理。",
  },
];

const purchaseChecks = [
  { no: "1", title: "ラック型式", body: "QRかSRか。" },
  { no: "2", title: "寸法", body: "70mm、100mmなど。" },
  { no: "3", title: "材質・表面処理", body: "メーカーが対応を明示している材料か。" },
  { no: "4", title: "対応本体", body: "アタッチメントが使用できる油圧工具は何か。" },
  { no: "5", title: "アタッチメント互換", body: "同じメーカーでも全機種共通とは限りません。" },
  { no: "6", title: "重量", body: "ラックカッターだけでなく、油圧本体と組み合わせた実作業重量を考えます。" },
  {
    no: "7",
    title: "バッテリー・充電器・ケース",
    body: "「18Vなら何でも使える」とは判断しません。電池・充電器はメーカーの適合を確認してください。",
  },
];

const diagnosisItems = [
  {
    no: "1",
    question: "切りたいのは電線ですか、ケーブルラックですか？",
    answer: "電線ならケーブルカッター。ラック親桁ならラック対応工具。",
    hint: "検索でケーブルカッターばかり出ても、ラック加工は別の工具体系です。",
  },
  {
    no: "2",
    question: "QR / SR / 材質 / 寸法は決まっていますか？",
    answer: "決まっているほど専用カッターを選びやすくなります。",
    hint: "ラック幅だけでなく型式と替刃の組み合わせまで確認します。",
  },
  {
    no: "3",
    question: "バリ・切り粉・後処理をどこまで減らしたいですか？",
    answer: "切断時間だけでなく後処理時間も比較します。",
    hint: "「切る時間」だけではなく、清掃・バリ処理・端材回収まで含めて判断します。",
  },
  {
    no: "4",
    question: "すでにコードレス油圧圧着工具を持っていますか？",
    answer: "適合本体ならアタッチメント追加で済む可能性があります。",
    hint: "RAC-100 / CRC-70はメーカー適合工具が明示されています。",
  },
  {
    no: "5",
    question: "同じ現場で圧着・切断・穴あけもしますか？",
    answer: "複数工程があるほど、マルチ工具の価値を判断しやすくなります。",
    hint: "圧着器を買うのではなく、油圧作業をまとめるベース工具として見る視点です。",
  },
];

const failures = [
  {
    title: "電線用ケーブルカッターでラックを切ろうとする",
    body: "対象物が違います。",
  },
  {
    title: "QRとSRを確認せず工具を発注する",
    body: "ラック幅だけではなく型式まで確認します。",
  },
  {
    title: "アタッチメントだけ買って本体が合わない",
    body: "RAC-100 / CRC-70はメーカー適合工具が明示されています。",
  },
  {
    title: "「同じ18Vだから使える」とバッテリーを流用する",
    body: "電圧表示だけで互換判断しません。",
  },
  {
    title: "最大能力が大きい工具を買えば全部使えると思う",
    body: "EV-325系など、別クラスの工具にはラックカッターの互換条件が異なります。",
  },
  {
    title: "周辺用品を増やしすぎる",
    body: "現場用品を何でも載せると、必要なラックカッターが見つけにくくなります。",
  },
];

const checkItems = [
  "ラックメーカーを確認した",
  "QR / SRを確認した",
  "幅を確認した",
  "材質・表面処理を確認した",
  "工具能力の範囲内",
  "アタッチメントの対応本体を確認した",
  "圧着範囲を確認した",
  "ダイス構成を確認した",
  "電池・充電器の適合を確認した",
  "予備電池・充電計画を決めた",
  "現場までの搬入方法を決めた",
  "ケース・工具箱を用意した",
  "耐切創手袋を準備した",
  "安全靴を確認した",
  "十分な現場照明がある",
  "切断片・端材の回収方法を決めた",
];

const faqs = [
  {
    q: "ケーブルラックは普通のケーブルカッターで切れますか？",
    a: "電線用のケーブルカッターとは対象が異なります。ラック親桁は、ラックに対応した専用カッターやバンドソーなど、メーカーが対象材を明示している工具を選びます。",
  },
  {
    q: "RAC-100とCRC-70は何が違いますか？",
    a: "RAC-100は標準でQR・SD-QRに対応し、オプション刃でSR・SD-SRにも対応します。CRC-70はSRタイプ向けで、メーカー公表質量3.9kgの軽量な構成です。",
  },
  {
    q: "EV-250DLだけでケーブルラックを切れますか？",
    a: "EV-250DL本体だけでラックを切るのではありません。RAC-100やCRC-70など、メーカーが適合を案内しているアタッチメントを装着して使用します。",
  },
  {
    q: "EV-250DLは圧着工具ですか？",
    a: "はい。メーカー公式では14〜250mm²のコードレス電動油圧式圧着工具です。250mm²圧着約12秒、18V 5.0Ah使用時に約130回圧着を目安として案内しています。",
  },
  {
    q: "バンドソーとラックカッターはどちらを選べばよいですか？",
    a: "複数種類の材料を切るならバンドソーの汎用性が活きます。同じラックを繰り返し加工し、対応する油圧工具を保有しているなら専用ラックカッターも有力です。",
  },
];

function productImageExists(file: string) {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "images",
      "articles",
      SLUG,
      "products",
      file
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

function Figure({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 850px"
        />
      </div>
    </figure>
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
    <a
      href={href}
      target="_blank"
      rel={EXT_REL}
      className={className}
    >
      {children}
    </a>
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

function MainProductCard({
  product,
  priority = false,
}: {
  product: MainProduct;
  priority?: boolean;
}) {
  const hasImage = productImageExists(product.imageFile);
  return (
    <article className="rounded-2xl border-2 border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-5 md:grid-cols-[200px_1fr] md:items-start">
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
            <div className="flex aspect-square items-center justify-center text-sm font-medium text-gray-800">
              画像準備中
            </div>
          )}
        </div>
        <div>
          <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-950">
            {product.badge}
          </span>
          <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
            {product.name}
          </h3>
          <dl className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key}>
                <dt className="inline font-bold">
                  {key === "standardTarget"
                    ? "標準対象"
                    : key === "optionalTarget"
                      ? "オプション"
                      : key === "target"
                        ? "対象"
                        : key === "width"
                          ? "対応幅"
                          : key === "weight"
                            ? "質量"
                            : key === "size"
                              ? "サイズ"
                              : key === "compatibleTools"
                                ? "適合工具"
                                : key === "crimpRange"
                                  ? "圧着範囲"
                                  : key === "motorVoltage"
                                    ? "電源"
                                    : key === "output"
                                      ? "公称出力"
                                      : key === "crimpTime250"
                                        ? "250mm²圧着"
                                        : key === "workCount250"
                                          ? "作業可能回数"
                                          : key === "head"
                                            ? "ヘッド"
                                            : key}
                  ：
                </dt>
                <dd className="inline">
                  {Array.isArray(value) ? value.join(" / ") : value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 flex flex-wrap gap-3">
            <ExtLink
              href={product.manufacturerUrl}
              className="text-[15px] font-bold text-gray-900 underline underline-offset-4"
            >
              メーカー公式情報
            </ExtLink>
            <PrimaryCta href={product.salesUrl} label="関連工具を探す" />
          </div>
        </div>
      </div>
    </article>
  );
}

function RelatedProductLink({ product }: { product: RelatedProduct }) {
  const hasImage = productImageExists(product.imageFile);
  return (
    <li>
      <ExtLink
        href={product.url}
        className="group flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 no-underline hover:border-gray-400"
      >
        <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
          {hasImage ? (
            <Image
              src={PROD(product.imageFile)}
              alt={`${product.name}の商品画像`}
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
          <span className="block font-black leading-6 text-gray-900 group-hover:underline">
            {product.name}
          </span>
          <span className="mt-1 block text-[14px] leading-6 text-gray-900">
            {product.role}
          </span>
        </span>
      </ExtLink>
    </li>
  );
}

function PrimaryCtaBlock({ heading }: { heading: string }) {
  return (
    <section className="my-10 rounded-2xl border-2 border-gray-900 bg-gray-950 p-6 text-white md:p-8">
      <h2 className="text-2xl font-black sm:text-3xl">{heading}</h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-100">
        ケーブルラック加工と圧着・切断をまとめて見直すなら、まず主役工具の一覧から候補を確認します。
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        {primaryCtas.map((cta) => (
          <ExtLink
            key={cta.label}
            href={cta.url}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-amber-500 px-5 py-3 text-[16px] font-extrabold text-gray-950 hover:bg-amber-400"
          >
            {cta.label} →
          </ExtLink>
        ))}
      </div>
    </section>
  );
}

function DiagnosisSection() {
  return (
    <section
      id="diagnosis"
      className="my-14 scroll-mt-24 rounded-2xl border-4 border-emerald-700 bg-gradient-to-b from-emerald-50 to-white p-6 md:p-8"
    >
      <p className="text-sm font-bold uppercase tracking-wider text-emerald-800">
        この記事の最重要コンテンツ
      </p>
      <h2 className="mt-2 text-3xl font-black leading-snug text-gray-900 sm:text-4xl">
        現場加工5問診断
      </h2>
      <P>
        次の5問で工具構成を考えると整理しやすくなります。自動計算はしません。読みながら、自社の現場条件に当てはめてください。
      </P>
      <div className="mt-6 space-y-0 divide-y-2 divide-emerald-200 border-y-2 border-emerald-200">
        {diagnosisItems.map((item) => (
          <article
            key={item.no}
            className="grid gap-4 py-6 sm:grid-cols-[56px_1fr]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-xl font-black text-white sm:h-14 sm:w-14 sm:text-2xl">
              {item.no}
            </div>
            <div>
              <h3 className="text-xl font-black text-gray-900 sm:text-2xl">
                Q{item.no}. {item.question}
              </h3>
              <p className="mt-2 text-[17px] font-bold leading-8 text-gray-900">
                → {item.answer}
              </p>
              <p className="mt-2 text-[15px] leading-7 text-gray-900">
                {item.hint}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCtaBlock() {
  return (
    <section className="my-12 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 md:p-8">
      <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
        主役工具・現場一式を探す
      </h2>
      <h3 className="mt-6 text-xl font-black text-gray-900">主役工具</h3>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {primaryCtas.map((cta) => (
          <PrimaryCta key={cta.label} href={cta.url} label={cta.label} />
        ))}
      </div>
      <h3 className="mt-8 text-xl font-black text-gray-900">
        電気工事現場の周辺用品
      </h3>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {secondaryCtas.map((cta) => (
          <div key={cta.label}>
            <ExtLink
              href={cta.url}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border-2 border-gray-900 bg-white px-4 py-3 text-center text-[15px] font-extrabold text-gray-900 hover:bg-gray-100"
            >
              {cta.label} →
            </ExtLink>
            {"note" in cta && cta.note ? (
              <p className="mt-2 text-[13px] leading-5 text-gray-900">
                ※ {cta.note}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

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
              電気工事・ケーブルラック施工 / {PUBLISHED}更新
            </div>
            <h1 className={cls.h1}>{H1}</h1>
            <P>
              電気工事でケーブルラックを施工していると、現場合わせで親桁を切断する場面があります。
            </P>
            <P>
              ラックを搬入したあとに寸法を合わせたい。設備の位置変更で途中だけ切り詰めたい。既設設備を避けながら延長したい。こうした時に困るのが、
              <Mark>「何で切るのが一番早く、後処理まで少なくできるか」</Mark>
              です。
            </P>
            <P>
              ケーブルラックは電線ではありません。CV線やCVT線を切るケーブルカッターと、ラックの親桁を加工する工具は、同じ「切る」作業でも選び方が違います。
            </P>
            <P>
              この記事では、
              <strong>ケーブルラックを切断する工具の選び方</strong>
              を中心に、専用ラックカッターとコードレス電動油圧式圧着工具をどう組み合わせると現場を効率化しやすいか整理します。
            </P>
            <Figure
              src={IMG("cable-rack-cutting-electrical-work-hero.webp")}
              alt="工場の電気工事現場でケーブルラックを現場合わせで加工するイメージ"
            />
          </header>

          <section
            id="key-points"
            className="my-10 rounded-2xl border-y-4 border-emerald-700 bg-emerald-50 p-6 md:p-8"
          >
            <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
              先に要点
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[17px] leading-8 text-gray-900">
              {keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          <PrimaryCtaBlock heading="電設工事用の切断・圧着工具を探す" />

          <H2 id="wire-vs-rack">ケーブルラック切断は「電線を切る工具」と分けて考える</H2>
          <P>
            「ケーブルラックを切る工具を探しているのに、検索するとケーブルカッターばかり出てくる」ということがあります。理由は、「ケーブル」という言葉が共通しているからです。
          </P>
          <P>
            しかし、電線を切るケーブルカッターと、ラックの親桁を切るケーブルラックカッターは用途が違います。
          </P>
          <H3>ケーブルカッターは電線・ケーブルを切る</H3>
          <P>
            一般的なケーブルカッターは、CV、CVT、VVRなどの電力ケーブルを切るために使います。切断能力は、ケーブル外径、線種、導体断面積などで確認します。
          </P>
          <P>
            電線の切断工具について詳しく比較したい場合は、
            <Link
              href="/articles/cable-cutter-selection"
              className="font-bold underline underline-offset-4"
            >
              ケーブルカッターの選び方
            </Link>
            へ役割を分けます。
          </P>
          <H3>ケーブルラックカッターは親桁の加工</H3>
          <P>
            ケーブルラックカッターは、ラックの親桁を専用刃で加工する工具です。購入前に見るべきなのは、ラックの種類、親桁寸法、材質、適合する刃、適合する油圧工具本体です。
          </P>
          <P>
            <Mark>「ケーブルが切れるからラックも切れる」という選び方はしません。</Mark>
          </P>

          <H2 id="methods">ケーブルラックを切る主な方法を比較</H2>
          <P>現場での切断方法は一つではありません。絶対順位は付けず、現場条件で比較します。</P>
          <Figure
            src={IMG("cable-rack-cutting-methods.webp")}
            alt="ケーブルラックの切断方法を現場条件で比較するイメージ"
          />
          <H3>バンドソー</H3>
          <P>
            2026年にはPanasonicからケーブルラック100mm親桁も切断できる充電バンドソー127が登場しています。バンドソーの強みは、ケーブルラック以外にも電線管など複数の対象物へ使えることです。
          </P>
          <H3>グラインダーなどの切削工具</H3>
          <P>
            切断対象や現場条件によってはグラインダー系の工具を使う場合もあります。ただし、火花、切り粉、周囲養生、仕上げなどまで含めて考える必要があります。
          </P>
          <H3>専用ケーブルラックカッター</H3>
          <P>
            対象ラックが決まっていて、同じ加工を何度も行う場合には専用ラックカッターが候補になります。CACTUSのRAC-100は、メーカーが「QRのバリなし切断」を特長として案内しています。
          </P>
          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[880px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>方法</th>
                  <th className={cls.th}>向く対象</th>
                  <th className={cls.th}>汎用性</th>
                  <th className={cls.th}>後処理</th>
                  <th className={cls.th}>切り粉・火花</th>
                  <th className={cls.th}>導入向き</th>
                  <th className={cls.th}>既存工具との共通化</th>
                </tr>
              </thead>
              <tbody>
                {cuttingMethodRows.map((row) => (
                  <tr key={row.method}>
                    <td className={`${cls.td} font-black`}>{row.method}</td>
                    <td className={cls.td}>{row.target}</td>
                    <td className={cls.td}>{row.versatility}</td>
                    <td className={cls.td}>{row.finish}</td>
                    <td className={cls.td}>{row.dust}</td>
                    <td className={cls.td}>{row.fit}</td>
                    <td className={cls.td}>{row.common}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H2 id="rack-fit">専用ラックカッターが向くのはこんな現場</H2>
          <H3>同じラックを繰り返し加工する</H3>
          <P>
            大型工場、倉庫、商業施設、設備更新など、長い距離で同じケーブルラックを施工する現場では、親桁加工の回数が増えます。加工回数が増えるほど、切断・バリ処理・切り粉の回収・次の材料のセットまで含めた1回あたりの作業時間が効いてきます。
          </P>
          <H3>切断後の仕上げ工程を減らしたい</H3>
          <P>
            RAC-100はメーカー公式で「QRのバリなし切断」と案内されています。切断後に毎回大きな手直しが必要な方法と比べ、専用工具で後工程を減らせるなら、トータルの施工時間で判断できます。
          </P>
          <H3>既に油圧工具を保有している</H3>
          <P>
            専用ラックカッターだけを見ると高価に感じる場合があります。しかし、既に対応する油圧工具を保有している会社なら、
            <Mark>本体を共通化してアタッチメントを追加する</Mark>
            という考え方ができます。
          </P>
          <Figure
            src={IMG("hydraulic-cable-rack-cutting.webp")}
            alt="油圧式の専用工具でケーブルラック親桁を加工するイメージ"
          />
          <Figure
            src={IMG("cable-rack-profile-selection.webp")}
            alt="異なる形状のケーブルラック親桁を確認して工具を選ぶイメージ"
          />

          <H2 id="rac-crc">RAC-100とCRC-70で見るケーブルラックカッターの選び方</H2>
          <P>
            QR用とSR用は同じ刃ではありません。
            <Mark>「100mmも70mmも切れる」とだけ覚えるのではなく、ラック型式と替刃の組み合わせを確認します。</Mark>
          </P>
          <div className="my-6 space-y-5">
            <MainProductCard product={rac100} priority />
            <MainProductCard product={crc70} />
          </div>
          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[640px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>比較項目</th>
                  <th className={cls.th}>RAC-100</th>
                  <th className={cls.th}>CRC-70</th>
                </tr>
              </thead>
              <tbody>
                {rackCompareRows.map((row) => (
                  <tr key={row.label}>
                    <td className={`${cls.td} font-bold`}>{row.label}</td>
                    <td className={cls.td}>{row.rac}</td>
                    <td className={cls.td}>{row.crc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <H3>「大きい方を買えば全部できる」とは限らない</H3>
          <P>
            電設工具は、最大能力だけで選ぶとミスマッチが起きます。普段使うラック型式、加工頻度、持ち運ぶ距離、高所へ持ち上げるか、対応本体を見ます。工具の価格だけではなく、現場で毎回扱う重量も選定条件です。
          </P>
          <div className="my-6">
            <PrimaryCta
              href={primaryCtas[1].url}
              label="ケーブルカッター一覧から関連工具を確認する"
            />
          </div>

          <H2 id="ev250dl">コードレス電動油圧式圧着工具を「圧着専用」にしない</H2>
          <P>
            ケーブルラックカッターと一緒に確認したいのが、コードレス電動油圧式圧着工具です。代表例としてCACTUS EV-250DLを見ると、本来の用途は圧着ですが、多数のアタッチメントに対応しています。
          </P>
          <Figure
            src={IMG("cordless-hydraulic-crimping-electrical-work.webp")}
            alt="太い電力ケーブルの端末をコードレス油圧工具で圧着するイメージ"
          />
          <MainProductCard product={ev250dl} />
          <P>
            太い電線の圧着を手作業から電動化する判断については、
            <Link
              href="/articles/electrical-crimping-work-efficiency-guide"
              className="font-bold underline underline-offset-4"
            >
              電線の圧着作業を効率化する判断基準
            </Link>
            で詳しく解説しています。
          </P>
          <H3>本体を共通化して作業を増やす</H3>
          <P>
            EV-250DLはメーカーの適合表で、RAC-100、CRC-70、ケーブルカッター、全ネジカッター、鉄筋カッター、T形圧縮、ノックアウトパンチ、レースウェイカッターなど多くのアタッチメントに対応しています。
          </P>
          <P>
            <Mark>圧着器を買う</Mark>
            ではなく、
            <Mark>電気工事の油圧作業をまとめるベース工具を持つ</Mark>
            という見方ができます。EV-250DL本体だけでラックを切るのではなく、適合アタッチメントを装着して使用します。
          </P>
          <Figure
            src={IMG("electrical-hydraulic-multi-tool-system.webp")}
            alt="油圧工具本体と複数の加工アタッチメントを整理して現場へ持ち込むイメージ"
          />
          <div className="my-6">
            <PrimaryCta
              href={primaryCtas[0].url}
              label="コードレス電動油圧式圧着工具一覧を見る"
            />
          </div>

          <H2 id="workflow">ラック切断と圧着を「1日の作業フロー」で見る</H2>
          <P>
            工具選定を商品単体だけで考えると、「高い」「重い」という比較で終わってしまいます。電気工事の1日の流れで考えます。
          </P>
          <div className="my-6 space-y-4">
            {workflowSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-bold text-gray-800">工程 {item.step}</p>
                <h3 className="mt-1 text-xl font-black text-gray-900">{item.title}</h3>
                <p className={`mt-2 mb-0 ${cls.bodySm}`}>{item.body}</p>
              </article>
            ))}
          </div>

          <H2 id="purchase-check">購入前に確認したい7項目</H2>
          <div className="my-6 space-y-4">
            {purchaseChecks.map((item) => (
              <article key={item.no} className="rounded-xl border border-gray-200 p-4">
                <h3 className="text-lg font-black text-gray-900">
                  {item.no}. {item.title}
                </h3>
                <p className={`mt-2 mb-0 ${cls.bodySm}`}>{item.body}</p>
              </article>
            ))}
          </div>
          <p className={`${cls.bodySm} rounded-lg border border-amber-300 bg-amber-50 p-4`}>
            <ExtLink href={secondaryCtas[1].url} className="font-bold underline">
              急速充電器一覧を見る
            </ExtLink>
            （使用工具への適合確認が必要です）
          </p>

          <DiagnosisSection />

          <H2 id="related-products">一緒に持ち込みやすい現場用品</H2>
          <P>
            ラック切断・油圧工具と相性が良いのは、主に
            <Mark>収納・搬送・位置出し</Mark>
            です。工具箱・L-BOXX・バッグ等を、主役工具を現場へ持ち込む文脈で整理します。
          </P>
          <Figure
            src={IMG("electrical-tools-jobsite-transport.webp")}
            alt="電設工具・ダイス・替刃・保護具をケースに整理して搬入するイメージ"
          />
          <ul className="my-6 space-y-3">
            {relatedProducts.map((product) => (
              <RelatedProductLink key={product.imageFile} product={product} />
            ))}
          </ul>

          <H2 id="safety">切断工具だけでなく保護具もセットで考える</H2>
          <P>
            メーカー取扱説明書でも、切断後の端面に触れないよう注意されています。専用カッターでバリを抑えられても、金属材料の端面を扱う作業であることは変わりません。
          </P>
          <Figure
            src={IMG("cable-rack-cut-edge-safety.webp")}
            alt="ケーブルラック切断後の端材を耐切創手袋で安全に回収するイメージ"
          />
          <ul className={cls.list}>
            <li>耐切創手袋</li>
            <li>安全靴</li>
            <li>現場照明</li>
            <li>端材回収</li>
          </ul>
          <div className="my-6 flex flex-wrap gap-3">
            <PrimaryCta href={secondaryCtas[0].url} label="耐切創手袋一覧を見る" />
            <PrimaryCta href={secondaryCtas[7].url} label="安全靴一覧を見る" />
            <PrimaryCta href={secondaryCtas[2].url} label="工事・照明用品一覧を見る" />
          </div>

          <H2 id="failures">よくある失敗</H2>
          <div className="my-6 space-y-4">
            {failures.map((item) => (
              <article key={item.title} className="rounded-xl border border-red-200 bg-red-50 p-4">
                <h3 className="text-lg font-black text-gray-900">{item.title}</h3>
                <p className={`mt-2 mb-0 ${cls.bodySm}`}>{item.body}</p>
              </article>
            ))}
          </div>

          <H2 id="checklist">法人導入チェックリスト</H2>
          <ul className="my-6 space-y-3">
            {checkItems.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-[15px] leading-7 text-gray-900 shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 border-emerald-700 text-sm font-black text-emerald-800"
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <H2 id="faq">よくある質問</H2>
          <div className="my-6 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <h3 className={cls.faqQ}>Q. {faq.q}</h3>
                <p className={`mb-0 ${cls.bodySm}`}>A. {faq.a}</p>
              </div>
            ))}
          </div>

          <H2 id="summary">まとめ｜ラック切断は「切れる工具」ではなく、後処理と本体共通化まで見る</H2>
          <P>
            ケーブルラックの切断工具は、単純に「切れるか」だけで選ぶものではありません。ラック型式、寸法、材質、切断後の仕上げ、切り粉・端材、工具重量、対応本体、現場で他に行う作業を確認します。
          </P>
          <P>
            すでにコードレス電動油圧式圧着工具を使っているなら、ラックカッター等のアタッチメントを追加し、
            <Mark>圧着・切断・加工を1つの油圧工具システムとして考える</Mark>
            方法があります。一方で、ラック以外の材料も頻繁に切るならバンドソー等の汎用工具が向く場合があります。
          </P>
          <P>
            「この現場では何を何回加工するか」から逆算すると、購入後に使われる工具を選びやすくなります。
          </P>

          <FinalCtaBlock />

          <section className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-xl font-black text-gray-900">関連記事</h2>
            <ul className="mt-3 space-y-2 text-[16px] leading-7">
              <li>
                <Link
                  href="/articles/cable-cutter-selection"
                  className="font-bold underline underline-offset-4"
                >
                  ケーブルカッターの選び方｜充電式・油圧式・ラチェット式と圧着工具の使い分け
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/electrical-crimping-work-efficiency-guide"
                  className="font-bold underline underline-offset-4"
                >
                  電線の圧着作業を効率化するには？手動工具から充電式圧着器へ切り替える判断基準
                </Link>
              </li>
            </ul>
          </section>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
