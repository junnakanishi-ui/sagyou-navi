import type { Metadata } from "next";
import type { ReactNode } from "react";
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const slug = "one-person-leveling-rotary-laser-guide";
const siteUrl = "https://www.sagyou-navi.com";
const canonicalUrl = `${siteUrl}/articles/${slug}`;
const imgBase = `/images/articles/${slug}`;
const heroImage = `${imgBase}/one-person-leveling-rotary-laser-hero.jpg`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const title =
  "一人でレベル出しする方法｜ローテーティングレーザー・受光器の使い方と選び方【2026年版】";
const shortTitle = "一人でレベル出しする方法";
const description =
  "外構・基礎・造成・土間コンクリートの高さ出しを一人で行いたい方向けに、ローテーティングレーザーと受光器の使い方を解説。自動整準、デジタル受光器、H/HV、赤・緑の違いや、SOKKIA・TOPCON・タジマ・シンワ・MYZOX・STS・Nikon製品の選び方も比較します。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: shortTitle,
    description,
    url: canonicalUrl,
    siteName: "作業用品ナビ",
    type: "article",
    publishedTime: "2026-08-05",
    modifiedTime: "2026-08-05",
    images: [
      {
        url: `${siteUrl}${heroImage}`,
        width: 1600,
        height: 900,
        alt: "外構現場で一人の作業者がローテーティングレーザーと受光器を使って高さ出しをするイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: shortTitle,
    description,
    images: [`${siteUrl}${heroImage}`],
  },
};

type ProductSpecs = {
  range?: string;
  accuracy?: string;
  leveling?: string;
  slope?: string;
  receiver?: string;
  type?: string;
};

type Product = {
  id: number;
  modelCode: string;
  name: string;
  utmUrl: string;
  shortName: string;
  group: string;
  badge: string;
  useCase: string;
  feature: string;
  check: string;
  specs?: ProductSpecs;
};

type CtaLink = { label: string; url: string; type?: string };

const products = productData.includedProducts as Product[];
const byId = Object.fromEntries(products.map((p) => [p.id, p])) as Record<
  number,
  Product
>;
const ctas = productData.ctas as CtaLink[];

const productImageExists = (id: number) => {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "images",
      "articles",
      slug,
      "products",
      `${id}.webp`
    );
    return fs.existsSync(filePath) && fs.statSync(filePath).size > 500;
  } catch {
    return false;
  }
};

const faqs = [
  {
    q: "オートレベルとローテーティングレーザーはどちらが一人作業向きですか？",
    a: "一般に、一人で複数測点を回る用途は受光器式のローテーティングレーザーが向きます。オートレベルは望遠鏡で標尺を読むため、二人作業が基本になりやすい機器です。要求精度と業務区分に合わせて選んでください。",
  },
  {
    q: "屋外では赤と緑のどちらがよいですか？",
    a: "屋外の明るい環境では受光器を使うため、色だけで決める必要はありません。屋内でも目視するなら緑、受光器中心で費用を抑えるなら赤も候補です。",
  },
  {
    q: "デジタル受光器は必要ですか？",
    a: "測点が多い、差分を記録する、経験の浅い担当者も使う場合に有効です。センターだけを合わせる単純作業なら標準受光器でも対応できます。",
  },
  {
    q: "勾配を出せますか？",
    a: "LP610やRL-H5Aなど、1軸勾配設定に対応する機種があります。水平専用機もあるため、必要勾配と設定範囲を確認してください。",
  },
  {
    q: "本体を移動して続きを測れますか？",
    a: "移動後は同じレーザー面ではなくなります。必ずBMを使って新しい器械高を設定し直します。",
  },
  {
    q: "レーザー墨出し器でも外構の高さ出しはできますか？",
    a: "短距離・受光器対応なら使える場面もありますが、広範囲の高さ管理はローテーティングレーザーの方が用途に合いやすいです。",
  },
];

const summarySteps = [
  "動かない基準点（BM）と目標高を確認する",
  "固い地盤へ三脚を設置する",
  "ローテーティングレーザーを取り付け、電源を入れる",
  "自動整準が完了するまで待つ",
  "受光器をスタッフへ確実に固定する",
  "BMでレーザー面の高さを読み、器械高または基準との差を求める",
  "各測点で受光器を合わせ、切土・盛土・型枠高さを確認する",
  "作業途中と終了時にBMを再測定する",
];

const detailSteps = [
  {
    title: "BMと目標高を決める",
    body: "BM（ベンチマーク）は、現場で高さの基準にする動かない点です。既存構造物の印、基準杭、設計図で指定された高さなどを使用します。BMが曖昧なまま測定を始めると、機械が高精度でも施工高は合いません。BMの位置、基準値、目標高、単位を最初に記録してください。",
  },
  {
    title: "三脚を固い場所へ据える",
    body: "三脚は、測りたい範囲の中央付近で、重機動線・掘削端・盛土・軟弱地盤を避けます。脚の先端を確実に固定し、クランプを締めます。測定範囲が広くても、精度だけを考えれば本体から極端に遠い測点を減らす配置が有利です。",
  },
  {
    title: "本体を取り付けて自動整準を待つ",
    body: "電源を入れると、自動整準範囲内で本体が水平をつくります。回転開始やランプ表示など、機種ごとの整準完了サインを確認してから測定します。急いで整準中に読み始めると、その後の全測点が同じだけずれる可能性があります。",
  },
  {
    title: "受光器をスタッフへ固定する",
    body: "受光器のセンター指標線が読みやすい高さになるようホルダーで固定します。受光器がスタッフ上で滑らないことを確認します。",
  },
  {
    title: "BMでレーザー面の高さを求める",
    body: "BMへスタッフを垂直に立て、受光器を上下させます。中央を示す連続音やセンター表示になった位置で目盛を読みます。デジタル受光器では、センターから何mm高い・低いかを数値で確認でき、受光器を細かく動かす回数を減らしやすくなります。",
  },
  {
    title: "目標高のスタッフ読みに換算する",
    body: "BMでの読みと目標面の高低差から、各測点で合わせるスタッフ読みを求めます。計算例は次の強調ボックスを参照してください。",
  },
  {
    title: "各測点を確認して印を残す",
    body: "受光器の表示に従い、切土・盛土量、型枠天端、砕石高さ、土間仕上がり高などを確認します。測点番号、時刻、読み値、担当者を簡単に記録すると、後で施工ミスを追いやすくなります。",
  },
  {
    title: "途中と終了時にBMへ戻る",
    body: "重機振動、強風、接触、三脚の沈下があった場合は、BMを再測定します。測定終了時にもBMへ戻り、開始時と同じ値か確認してください。",
  },
];

const checkItems = [
  "主用途は外構・基礎・造成・内装のどれか",
  "必要な最大測定範囲",
  "許容できる水平精度",
  "水平だけか、鉛直も必要か",
  "勾配設定が必要か",
  "標準受光器かデジタル受光器か",
  "受光器は何台必要か",
  "三脚・ホルダー・スタッフが揃うか",
  "平面三脚／球面三脚の適合",
  "防塵防水・耐衝撃・対振動",
  "電池方式と予備電池",
  "始業前点検・校正・保管ルール",
];

const relatedArticles = [
  {
    href: "/articles/laser-level-line-count-selection",
    label: "レーザー墨出器は何ライン必要？ライン数・色・受光器・三脚の選び方",
  },
  {
    href: "/articles/long-distance-measuring-tools-selection",
    label: "長い距離を測る道具の選び方｜ウォーキングメジャー・巻尺の使い分け",
  },
  {
    href: "/articles/construction-site-safety-checklist",
    label: "建設現場の安全チェックリスト",
  },
];

const comparisonRows: {
  id: number;
  model: string;
  range: string;
  feature: string;
  receiver: string;
  use: string;
}[] = [
  {
    id: 1,
    model: "SOKKIA LP610",
    range: "直径800m",
    feature: "±1.5mm/30m、1軸勾配、IP66",
    receiver: "LS-100D / LR300系",
    use: "基礎・造成・外構",
  },
  {
    id: 23,
    model: "TOPCON RL-H5A",
    range: "直径800m",
    feature: "±1.5mm/30m、1軸勾配、IP66",
    receiver: "選択式",
    use: "広範囲・造成",
  },
  {
    id: 4,
    model: "MYZOX MJ-600",
    range: "直径600m",
    feature: "自動整準、造成・基礎天端向け",
    receiver: "デジタル／2台セット",
    use: "複数測点",
  },
  {
    id: 9,
    model: "STS-H600",
    range: "直径約600m",
    feature: "±0.38mm/10m、対振動",
    receiver: "付属",
    use: "振動がある現場",
  },
  {
    id: 16,
    model: "タジマ TRL-315H/HD",
    range: "最大直径600m",
    feature: "IP66、標準／デジタル",
    receiver: "選択",
    use: "外構・土木",
  },
  {
    id: 8,
    model: "Nikon LL300N",
    range: "直径500m",
    feature: "±2.2mm/30m、IP66、堅牢",
    receiver: "HL450",
    use: "小規模建設",
  },
  {
    id: 10,
    model: "シンワ H-3",
    range: "仕様確認",
    feature: "水平、赤／緑、IP66",
    receiver: "付属",
    use: "水平出し",
  },
  {
    id: 14,
    model: "シンワ HV-3",
    range: "仕様確認",
    feature: "水平・鉛直、手動傾斜",
    receiver: "付属",
    use: "建築・設備",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: [`${siteUrl}${heroImage}`],
  datePublished: "2026-08-05",
  dateModified: "2026-08-05",
  author: {
    "@type": "Organization",
    name: "作業用品ナビ編集部",
    url: siteUrl,
  },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    url: siteUrl,
  },
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
      name: shortTitle,
      item: canonicalUrl,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
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

function SectionImage({ src, alt }: { src: string; alt: string }) {
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

function CtaGrid({ heading }: { heading?: string }) {
  return (
    <section className="my-8 rounded-2xl border-2 border-orange-300 bg-orange-50 p-5 md:p-6">
      {heading ? (
        <h3 className="mb-4 text-xl font-extrabold text-gray-900">{heading}</h3>
      ) : null}
      <div className="grid gap-3 sm:grid-cols-3">
        {ctas.map((cta) => (
          <a
            key={cta.label}
            href={cta.url}
            target="_blank"
            rel={EXT_REL}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-4 py-3 text-center text-[15px] font-extrabold text-white hover:bg-orange-700"
          >
            {cta.label} →
          </a>
        ))}
      </div>
    </section>
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
  product: Product;
  priority?: boolean;
}) {
  const name = product.shortName || product.name;
  const hasImage = productImageExists(product.id);
  const imageSrc = `${imgBase}/products/${product.id}.webp`;

  return (
    <article className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-5 md:grid-cols-[200px_1fr] md:items-start">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          {hasImage ? (
            <Image
              src={imageSrc}
              alt={`${name}の商品画像`}
              width={400}
              height={400}
              priority={priority}
              className="h-auto w-full object-contain p-3"
            />
          ) : (
            <ImagePending name={name} />
          )}
        </div>
        <div>
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-900">
            {product.badge}
          </span>
          <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
            {name}
          </h3>
          <dl className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            <div>
              <dt className="inline font-bold">向く現場：</dt>
              <dd className="inline">{product.useCase}</dd>
            </div>
            <div>
              <dt className="inline font-bold">特徴：</dt>
              <dd className="inline">{product.feature}</dd>
            </div>
          </dl>
          <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-[15px] font-medium leading-6 text-amber-950">
            <strong>購入前確認：</strong>
            {product.check}
          </p>
          <a
            href={product.utmUrl}
            target="_blank"
            rel={EXT_REL}
            className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-[16px] font-bold text-white hover:bg-orange-700"
          >
            商品ページを見る →
          </a>
        </div>
      </div>
    </article>
  );
}

function ProductStack({
  ids,
  priorityFirst = false,
  wide = false,
}: {
  ids: number[];
  priorityFirst?: boolean;
  wide?: boolean;
}) {
  return (
    <div
      className={`my-6 grid gap-5 ${wide ? "md:mx-[-1rem] lg:mx-[-2rem]" : ""}`}
    >
      {ids.map((id, index) => {
        const product = byId[id];
        if (!product) return null;
        return (
          <ProductCard
            key={id}
            product={product}
            priority={priorityFirst && index === 0}
          />
        );
      })}
    </div>
  );
}

function ProductTableCell({
  product,
  label,
}: {
  product?: Product;
  label: string;
}) {
  if (!product) {
    return <span className="font-bold">{label}</span>;
  }
  const name = product.shortName || product.name;
  const hasImage = productImageExists(product.id);
  return (
    <a
      href={product.utmUrl}
      target="_blank"
      rel={EXT_REL}
      className="group flex min-w-[16rem] items-start gap-3 text-gray-900 no-underline"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        {hasImage ? (
          <Image
            src={`${imgBase}/products/${product.id}.webp`}
            alt={`${name}の商品画像`}
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
          {name}
        </span>
      </span>
    </a>
  );
}

function NumberedSteps({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <ol className="my-6 space-y-4">
      {items.map((step, index) => (
        <li
          key={step.title}
          className="relative rounded-2xl border border-gray-200 bg-white p-5 pl-16 shadow-sm"
        >
          <span
            aria-hidden="true"
            className="absolute left-4 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-sky-700 text-lg font-black text-white"
          >
            {index + 1}
          </span>
          <h3 className="text-lg font-black text-gray-900 sm:text-xl">
            手順{index + 1}：{step.title}
          </h3>
          <p className="mt-2 mb-0 text-[15px] leading-[1.95] tracking-[0.04em] text-gray-900 md:text-[16px]">
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  );
}

function CalcBox() {
  return (
    <aside className="my-6 rounded-2xl border-2 border-amber-400 bg-amber-50 p-5 md:p-6">
      <h3 className="text-xl font-black text-amber-950">計算例｜目標高のスタッフ読み</h3>
      <p className="mt-3 text-[16px] leading-8 text-gray-900">
        例として、BMの標高を
        <Mark>0mm</Mark>
        、BMでのスタッフ読みを
        <Mark>1,200mm</Mark>
        とします。レーザー面はBMより1,200mm上です。
      </p>
      <p className="mt-3 text-[16px] leading-8 text-gray-900">
        仕上がり目標がBMより
        <Mark>150mm</Mark>
        上なら、目標位置でのスタッフ読みは次のようになります。
      </p>
      <p className="mt-4 rounded-xl bg-white px-4 py-3 text-center text-xl font-black tracking-wide text-gray-900 md:text-2xl">
        1,200mm − 150mm ＝ <Mark>1,050mm</Mark>
      </p>
      <p className="mt-3 mb-0 text-[15px] leading-7 text-gray-900">
        各測点でスタッフの1,050mm位置に受光器センターを固定し、受光表示を見れば、現在地が目標面より高いか低いかを判断できます。
      </p>
    </aside>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

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
              <li>一人でレベル出し</li>
            </ol>
          </nav>
        </div>

        <article className="mx-auto max-w-[850px] px-4 pb-16 sm:px-6">
          <header>
            <div className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-bold text-sky-900">
              測量・高さ管理 / 2026年8月5日更新
            </div>
            <h1 className={cls.h1}>{title}</h1>
            <P>
              外構工事で砕石の高さを確認したい。基礎の天端や型枠を合わせたい。造成した地盤が設計高まで仕上がっているか、
              <Mark>一人でレベル出し</Mark>
              したい。こうした場面で使いやすいのが、ローテーティングレーザーや自動整準レベルプレーナーです。
            </P>
            <P>
              本体が水平なレーザー面を360度につくり、離れた場所ではスタッフに取り付けた受光器がレーザーの位置を知らせます。オートレベルのように、機械をのぞく人とスタッフを持つ人の二人を必ずしも配置せず、測る人が受光器を持って現場を回れます。
            </P>
            <P>
              ただし、「自動整準だから置けば終わり」ではありません。基準点の決め方、三脚を置く場所、受光器の固定、据え替え後の再確認を誤ると、すべての測点が同じ方向へずれることがあります。この記事では、
              <strong>一人でレベル出しする具体的な手順</strong>
              を中心に、外構・基礎・造成・土間コンクリートでの使い方、受光器の違い、ローテーティングレーザーと墨出し器の選び分けまで解説します。
            </P>
            <figure className="mt-7 overflow-hidden rounded-2xl border border-gray-200">
              <div className="relative aspect-video">
                <Image
                  src={heroImage}
                  alt="外構現場で一人の作業者がローテーティングレーザーと受光器を使って高さ出しをするイメージ"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>
            </figure>
          </header>

          <CtaGrid heading="まず商品群を確認する" />

          <section className="mt-8 rounded-2xl border-2 border-sky-300 bg-sky-50 p-6 md:p-7">
            <h2 className="text-[23px] font-extrabold text-gray-900">
              一人でレベル出しする方法を先にまとめると
            </h2>
            <p className="mt-3 text-[17px] leading-8 text-gray-900 md:text-[18px]">
              一人でレベル出しする基本手順は、次のとおりです。
            </p>
            <ol className="mt-4 space-y-3">
              {summarySteps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-3 rounded-xl border border-sky-200 bg-white px-4 py-3 text-[15px] leading-7 text-gray-900"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-700 text-sm font-black text-white"
                  >
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 mb-0 text-[16px] leading-8 text-gray-900">
              屋外では、回転するレーザー光を目で追うのではなく、受光器の矢印・ブザー・数値表示で高さを合わせます。測点が多く差分を素早く判断したい場合はデジタル受光器、価格と単純操作を優先する場合は標準受光器が向きます。
            </p>
          </section>

          <H2 id="why-rotary">
            なぜローテーティングレーザーなら一人で高さを確認できるのか
          </H2>
          <P>
            ローテーティングレーザーは、回転するレーザーによって本体の周囲へ水平な基準面をつくります。受光器は、その見えない基準面に対して現在位置が高いか、低いか、中央かを知らせます。
          </P>
          <P>
            オートレベルでは、望遠鏡をのぞく人と標尺を立てる人に役割を分けるのが基本です。一方、回転レーザーでは本体を据えた後、作業者自身がスタッフと受光器を持って測点を移動できます。
          </P>
          <P>一人作業に向く理由は次の3点です。</P>
          <ul className={cls.list}>
            <li>
              レーザー面が360度に広がり、本体を測点ごとに向け直さなくてよい
            </li>
            <li>自動整準機能により、設置後の水平調整が短い</li>
            <li>受光器が上下方向を音と表示で案内する</li>
          </ul>
          <P>
            ただし、自動整準は本体の許容範囲内で働く機能です。三脚の沈下や本体の移動を自動的に帳消しにするものではありません。衝撃検知やハイアラートがある機種でも、異常後はBMを再確認してください。
          </P>

          <H2 id="featured-sets">代表的な一人測定セットを先に比較する</H2>
          <P>
            手順の詳細に入る前に、測点の多さ・測定範囲・デジタル受光器の必要性で候補を絞りやすい3構成を紹介します。本体だけでなく、受光器・ホルダー・三脚まで含めた
            <Mark>一人測定システム</Mark>
            として見てください。
          </P>
          <ProductStack ids={[1, 23, 17]} priorityFirst />

          <H2 id="tools">一人でレベル出しするために必要な道具5点</H2>
          <SectionImage
            src={`${imgBase}/rotary-laser-complete-equipment-set.jpg`}
            alt="ローテーティングレーザー、受光器、ホルダー、スタッフ、三脚の一式"
          />
          <H3>1. 自動整準式のローテーティングレーザー</H3>
          <P>
            広範囲の水平出しが目的なら、H（水平）タイプが基本です。鉛直や壁面方向も使うならHVタイプを検討します。
          </P>
          <H3>2. 受光器</H3>
          <P>
            屋外では必須に近い道具です。標準受光器は矢印とブザー、デジタル受光器は基準との差を数値で表示できる機種があります。
          </P>
          <H3>3. 受光器ホルダー／クランプ</H3>
          <P>
            受光器をスタッフへ固定します。締め付けが甘いと、移動中に位置がずれ、同じ測点でも結果が変わります。
          </P>
          <H3>4. スタッフ・標尺</H3>
          <P>
            受光器の高さを読み取るために使います。先端の摩耗、目盛の単位、伸縮部の固定を確認します。
          </P>
          <H3>5. 適合する三脚</H3>
          <P>
            5/8インチでも、平面タイプと球面タイプがあります。本体の適合を確認し、脚を十分に開いて固い地盤へ固定します。
          </P>

          <H2 id="procedure">一人でレベル出しする手順</H2>
          <SectionImage
            src={`${imgBase}/benchmark-laser-leveling-step.jpg`}
            alt="基準点で受光器を合わせてレーザー面の高さを確認するイメージ"
          />
          <NumberedSteps items={detailSteps} />
          <CalcBox />
          <P>
            標準受光器セットとデジタル受光器セットは、同じ本体でも作業速度と記録のしやすさが変わります。測点の多さで選び分けてください。
          </P>
          <ProductStack ids={[2, 16, 4]} />
          <CtaGrid heading="手順を確認したら候補機種を絞り込む" />

          <H2 id="use-cases">外構・基礎・造成・土間での使い方</H2>
          <SectionImage
            src={`${imgBase}/exterior-grading-height-check.jpg`}
            alt="外構と造成現場で複数の測点を一人で確認するイメージ"
          />
          <H3>外構工事</H3>
          <P>
            駐車場、アプローチ、ブロック基礎、カーポート基礎などの高さ管理に使えます。複数点の高さを一人で確認しやすいため、少人数の外構業者と相性がよい用途です。
          </P>
          <H3>基礎・型枠・天端</H3>
          <P>
            基礎の根切り底、砕石、捨てコン、型枠、天端の高さを同じ基準から確認します。精度が必要な工程ほど、測定開始前後のBMチェックを省かないことが重要です。
          </P>
          <H3>造成・整地</H3>
          <P>
            広い敷地の切土・盛土や地盤高さの確認では、測定範囲の広い機種が使いやすくなります。受光器を2台用意すると、別の作業者や重機側と同時に確認しやすくなります。
          </P>
          <H3>土間コンクリート</H3>
          <P>
            砕石、型枠、仕上がりレベル、排水方向を確認します。水平機だけでは「設計した勾配を自動計算」するわけではありません。勾配設定機能の有無と、現場で必要な勾配範囲を確認してください。
          </P>
          <ProductStack ids={[6, 9, 8]} />

          <H2 id="rotary-vs-line">回転レーザーとレーザー墨出し器の違い</H2>
          <SectionImage
            src={`${imgBase}/rotary-laser-vs-line-laser.jpg`}
            alt="屋外の回転レーザーと室内のフルライン墨出し器を比較するイメージ"
          />
          <div className="my-4 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[720px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>比較項目</th>
                  <th className={cls.th}>ローテーティングレーザー</th>
                  <th className={cls.th}>フルライン・レーザー墨出し器</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={cls.td}>得意な用途</td>
                  <td className={cls.td}>屋外・広範囲の高さ管理</td>
                  <td className={cls.td}>室内の水平線・垂直線・通り</td>
                </tr>
                <tr>
                  <td className={cls.td}>屋外使用</td>
                  <td className={cls.td}>受光器を使って長距離対応</td>
                  <td className={cls.td}>受光器対応でも距離・用途を確認</td>
                </tr>
                <tr>
                  <td className={cls.td}>一人での高さ測定</td>
                  <td className={cls.td}>非常に向く</td>
                  <td className={cls.td}>短距離・見える範囲向け</td>
                </tr>
                <tr>
                  <td className={cls.td}>水平面</td>
                  <td className={cls.td}>360度の基準面</td>
                  <td className={cls.td}>壁や床へ見えるライン</td>
                </tr>
                <tr>
                  <td className={cls.td}>鉛直</td>
                  <td className={cls.td}>HV機のみ</td>
                  <td className={cls.td}>縦ライン・地墨に強い</td>
                </tr>
                <tr>
                  <td className={cls.td}>主な商品例</td>
                  <td className={cls.td}>LP610、RL-H5A、TRL-315H</td>
                  <td className={cls.td}>G-440SR、Xline-E</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            外構・造成・基礎の高さ確認が主目的なら回転レーザー、内装・設備で線を見ながら施工するなら墨出し器が基本です。
          </P>

          <H2 id="receiver-diff">標準受光器とデジタル受光器の違い</H2>
          <SectionImage
            src={`${imgBase}/standard-digital-laser-receiver-comparison.jpg`}
            alt="標準受光器とデジタル受光器の違いを比較するイメージ"
          />
          <div className="my-4 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[680px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>項目</th>
                  <th className={cls.th}>標準受光器</th>
                  <th className={cls.th}>デジタル受光器</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={cls.td}>表示</td>
                  <td className={cls.td}>上下矢印・センター・ブザー</td>
                  <td className={cls.td}>矢印・ブザー＋差分数値</td>
                </tr>
                <tr>
                  <td className={cls.td}>向く現場</td>
                  <td className={cls.td}>測点が少ない、操作を単純化</td>
                  <td className={cls.td}>測点が多い、差分を記録したい</td>
                </tr>
                <tr>
                  <td className={cls.td}>メリット</td>
                  <td className={cls.td}>費用を抑えやすい</td>
                  <td className={cls.td}>受光器を動かす時間を短縮しやすい</td>
                </tr>
                <tr>
                  <td className={cls.td}>商品例</td>
                  <td className={cls.td}>LP610 LR300、TRL-315H</td>
                  <td className={cls.td}>LP610 LS-100D、MJ-600S、TRL-315HD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            デジタル受光器は本体精度を高くする道具ではなく、レーザー面との差を読み取りやすくする道具です。作業点数、記録方法、担当者の習熟度で判断します。
          </P>
          <CtaGrid heading="比較後に一覧で候補を見直す" />

          <H2 id="selection">HとHV、赤と緑、自動整準の選び方</H2>
          <H3>Hタイプ</H3>
          <P>
            水平出しに特化します。外構・基礎・造成で高さだけを管理するなら、機能と費用のバランスを取りやすい選択です。
          </P>
          <H3>HVタイプ</H3>
          <P>
            水平に加えて鉛直出しができます。建築・設備・内装で、壁面方向、通り、鉛直基準も扱うなら向きます。
          </P>
          <H3>赤色と緑色</H3>
          <P>
            緑は人の目に見えやすい傾向がありますが、屋外の長距離測定では受光器を使います。屋外用途では、色だけでなく受光範囲、防塵防水、精度、受光器表示を優先してください。
          </P>
          <H3>自動整準</H3>
          <P>
            設置時間を短縮しますが、許容角度を超えた設置、三脚沈下、接触後の基準ずれは防げません。ハイアラート、衝突検知、対振動モードも比較項目です。
          </P>
          <ProductStack ids={[10, 13, 14, 15, 18, 19]} />

          <H2 id="recommended">用途別のおすすめ構成</H2>
          <H3>外構・基礎で測点が多い</H3>
          <ul className={cls.list}>
            <li>LP610＋LS-100D</li>
            <li>RL-H5A＋デジタル受光器</li>
            <li>TRL-315HD</li>
          </ul>
          <P>
            差分数値を見ながら、複数点を短時間で回りたい構成です。
          </P>
          <H3>広い造成現場</H3>
          <ul className={cls.list}>
            <li>LP610</li>
            <li>RL-H5A</li>
            <li>MJ-600受光器2台セット</li>
          </ul>
          <P>測定範囲と複数受光器の運用を重視します。</P>
          <H3>振動がある現場</H3>
          <ul className={cls.list}>
            <li>STS-H600</li>
          </ul>
          <P>
            対振動機能があっても、始業時・振動後・終了時のBM確認は必要です。
          </P>
          <H3>小規模基礎・型枠</H3>
          <ul className={cls.list}>
            <li>LL300N</li>
            <li>シンワH-3</li>
            <li>TRL-315H</li>
          </ul>
          <P>
            必要距離と精度を満たすなら、過剰な機能を避けて導入できます。
          </P>
          <H3>水平と鉛直を1台で扱う</H3>
          <ul className={cls.list}>
            <li>シンワHV-3</li>
          </ul>
          <P>
            屋外高さ管理だけでなく、鉛直・ポイント・スキャンを使う工程がある場合に比較します。
          </P>
          <H3>室内の見える線が中心</H3>
          <ul className={cls.list}>
            <li>MYZOX G-440SR</li>
            <li>シンワXline-E</li>
          </ul>
          <P>
            回転レーザーではなく、フルライン墨出し器の方が施工イメージに合います。
          </P>

          <H2 id="comparison">主要商品の比較</H2>
          <div className="my-4 -mx-2 overflow-x-auto rounded-2xl border border-gray-300 sm:mx-0 md:max-w-none lg:w-[min(1100px,calc(100vw-3rem))] lg:max-w-none">
            <table className={`min-w-[980px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>機種</th>
                  <th className={cls.th}>測定範囲</th>
                  <th className={cls.th}>精度・特徴</th>
                  <th className={cls.th}>受光器</th>
                  <th className={cls.th}>向く用途</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.model}>
                    <td className={cls.td}>
                      <ProductTableCell
                        product={byId[row.id]}
                        label={row.model}
                      />
                    </td>
                    <td className={cls.td}>{row.range}</td>
                    <td className={cls.td}>{row.feature}</td>
                    <td className={cls.td}>{row.receiver}</td>
                    <td className={cls.td}>{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`${cls.bodySm} text-sm`}>
            ※測定範囲・精度はメーカー公開情報と商品ページの確認時点の目安です。公式HTMLで十分確認できなかった機種は「仕様確認」と記載しています。発注前に最新仕様を再確認してください。
          </p>

          <H2 id="accessories">購入時に本体以外で確認したいもの</H2>
          <P>
            一人測定システムは、本体だけでは完成しません。追加受光器、ホルダー、適合三脚、スタッフの有無をセット表で確認してください。
          </P>
          <H3>三脚</H3>
          <P>
            本体の取付方式が平面か球面か、ねじが5/8インチか確認します。
          </P>
          <H3>受光器ホルダー</H3>
          <P>
            受光器とホルダーは型式適合を確認します。ホルダーなしの商品は、受光器単体でスタッフに固定できません。
          </P>
          <H3>追加受光器</H3>
          <P>
            複数作業者が同時に高さ確認する現場では、追加受光器が本体買い替えより効率改善につながる場合があります。
          </P>
          <H3>スタッフ</H3>
          <P>
            記事掲載商品にはスタッフが含まれていないため、既存品を使うのか別途購入するのか確認が必要です。
          </P>
          <ProductStack ids={[22, 27, 26, 7, 25, 28]} />

          <H2 id="failures">よくある失敗と防ぎ方</H2>
          <SectionImage
            src={`${imgBase}/rotary-laser-safety-recheck.jpg`}
            alt="作業途中にローテーティングレーザーの基準点を再確認するイメージ"
          />
          <H3>自動整準中に測り始める</H3>
          <P>整準完了表示を確認してからBMを測ります。</P>
          <H3>三脚を盛土へ置く</H3>
          <P>固い地盤へ移すか、沈下しない措置を行います。</P>
          <H3>重機が近くを通っても測り続ける</H3>
          <P>振動・接触後はBMを再測定します。</P>
          <H3>受光器がスタッフ上で滑る</H3>
          <P>クランプを締め、測定途中にも位置を点検します。</P>
          <H3>本体だけ購入する</H3>
          <P>
            三脚、受光器、ホルダー、スタッフ、電池、ケースの有無をセット表で確認します。
          </P>
          <H3>赤と緑だけで決める</H3>
          <P>
            屋外では受光器を使うため、測定範囲・精度・防塵防水・受光器表示を先に比較します。
          </P>

          <H2 id="checklist">法人購買チェックリスト</H2>
          <ul className="my-4 space-y-3">
            {checkItems.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] leading-7 text-gray-900"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-gray-400 bg-white text-xs font-bold"
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <H2 id="faq">FAQ</H2>
          <div className="my-6 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <h3 className={cls.faqQ}>Q. {faq.q}</h3>
                <p className={`${cls.bodySm} mb-0`}>A. {faq.a}</p>
              </div>
            ))}
          </div>

          <H2 id="summary">まとめ</H2>
          <P>
            一人でレベル出しを行うために重要なのは、高価な本体を選ぶことだけではありません。
          </P>
          <ul className={cls.list}>
            <li>動かないBMを決める</li>
            <li>三脚を安定させる</li>
            <li>自動整準完了を待つ</li>
            <li>受光器を確実に固定する</li>
            <li>途中と最後にBMへ戻る</li>
            <li>本体・受光器・ホルダー・スタッフ・三脚を一式で揃える</li>
          </ul>
          <P>
            この基本を守ったうえで、測定範囲、精度、勾配、H/HV、標準／デジタル受光器を比較すれば、現場に合った機種を選びやすくなります。
          </P>

          <CtaGrid heading="関連商品をまとめて確認する" />

          <section className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-extrabold text-gray-900">関連記事</h2>
            <ul className="mt-4 space-y-3">
              {relatedArticles.map((article) => (
                <li key={article.href}>
                  <Link
                    href={article.href}
                    className="font-bold text-gray-900 underline underline-offset-4"
                  >
                    {article.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <p className={`${cls.meta} mt-10`}>
            ※商品仕様・在庫・価格は変動します。導入前に各商品ページとメーカー公開情報で最新情報をご確認ください。本記事は施工管理の一般的な考え方を整理したものです。公共測量、成果提出、法令・契約で精度や方法が定められた業務では、仕様書・監督員・有資格者の指示に従ってください。
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
