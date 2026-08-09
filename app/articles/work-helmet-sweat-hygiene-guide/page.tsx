import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const SLUG = "work-helmet-sweat-hygiene-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const ARTICLE_TITLE =
  "作業用ヘルメットの汗・蒸れ対策｜汗が目に入る・臭い・ベタつきを減らすインナーの選び方【2026年版】";
const SHORT_TITLE = "作業用ヘルメットの汗・蒸れ対策";
const DESCRIPTION =
  "作業用ヘルメットの汗・蒸れ・臭いが気になる現場向けに、汗取りバンド、吸汗速乾インナー、消臭タイプ、使い捨て衛生キャップ、冷感インナーの違いを解説。高通気ヘルメットへの切り替え判断や法人支給の選び方まで整理します。";
const PUBLISHED = "2026-08-09";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const ctas = productData.ctas;

type CatalogProduct = (typeof productData.products)[number];

const byId = Object.fromEntries(
  productData.products.map((p) => [p.id, p])
) as Record<string, CatalogProduct>;

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
        url: `${SITE_URL}${IMG("work-helmet-sweat-control-hero.jpg")}`,
        width: 1600,
        height: 900,
        alt: "夏の作業現場でヘルメットの汗や蒸れ対策を行う作業者",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ARTICLE_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG("work-helmet-sweat-control-hero.jpg")}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("work-helmet-sweat-control-hero.jpg")}`],
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
    q: "ヘルメットの汗が目に入るときは何を選べばよいですか？",
    a: "額に取り付ける汗取りバンドや汗取りパッドが最も直接的です。頭全体も汗をかく場合は、吸汗速乾インナーとの併用を検討します。",
  },
  {
    q: "ヘルメットインナーは毎日洗った方がよいですか？",
    a: "洗濯可能な製品は、汗や皮脂が残らないよう使用状況に応じて洗濯し、完全に乾かしてから使います。具体的な洗濯方法は製品表示・メーカー指示に従ってください。",
  },
  {
    q: "臭い対策は消臭タイプだけで十分ですか？",
    a: "消臭機能だけでなく、汗を残さないこと、洗濯・乾燥・交換を回すことが重要です。ヘルメット内装側の汚れも確認します。",
  },
  {
    q: "共用ヘルメットには何が向きますか？",
    a: "短時間の来客や複数人利用では、不織布や紙の使い捨てインナーが管理しやすい場合があります。冷却目的のインナーとは別用途です。",
  },
  {
    q: "冷感インナーと汗取りインナーは同じですか？",
    a: "役割が違います。冷感タイプは暑さの不快感を和らげること、汗取りは汗を受けることが主目的です。",
  },
  {
    q: "高通気ヘルメットへ替えた方がよいのはどんな場合ですか？",
    a: "吸汗速乾インナーを使っても内部の蒸れや熱こもりが強い場合、ヘルメット本体の通気性がボトルネックの可能性があります。必要な保護性能と適合を確認したうえで、高通気・送風タイプを検討します。",
  },
] as const;

const checkItems = [
  "額の汗、頭全体の蒸れ、臭い、衛生のどれが一番の課題か",
  "個人支給か共用備品か",
  "洗濯・乾燥・交換を誰が管理するか",
  "使用中の保護帽とインナーが適合するか",
  "夏季だけ冷感タイプへ切り替えるか",
  "高通気ヘルメットへの更新が必要か",
  "来客用は使い捨て衛生インナーに分けるか",
] as const;

const relatedArticles = [
  {
    href: "/articles/helmet-heatstroke-risk",
    label: "ヘルメットの熱中症リスクとは？屋外作業での暑さ対策と選び方",
  },
  {
    href: "/articles/workwear-heat-protection-clothing",
    label: "屋外作業の暑さ対策｜身につける冷感・遮熱ウェアの選び方",
  },
  {
    href: "/articles/workwear-heat-measures-procurement-guide",
    label: "作業服の暑さ対策｜法人調達で失敗しない選び方",
  },
  {
    href: "/articles/factory-breakroom-locker-room-odor-control",
    label: "工場の休憩室・更衣室の臭い対策｜用品の選び方",
  },
] as const;

const worryCompare = [
  ["汗が額から目に入る", "汗取りバンド・汗取りパッド", "額の汗を局所的に止めたい"],
  ["頭全体がベタつく・蒸れる", "吸汗速乾インナー", "汗を広く吸って乾かしたい"],
  ["臭い・皮脂汚れが気になる", "消臭・洗えるインナー", "毎日使う個人支給品"],
  ["共用ヘルメットを清潔に使いたい", "不織布・紙の使い捨てインナー", "来客・短期作業・共用備品"],
  ["夏場の不快感が強い", "冷感インナー", "暑い時期の着用快適性を上げたい"],
  ["インナーを替えても蒸れる", "高通気・送風ヘルメット", "本体側から通気性を見直したい"],
] as const;

const typeCompare = [
  ["汗取りバンド/パッド", "額の汗を受ける", "汗が目に入る", "頭全体の蒸れは別途対策"],
  ["吸汗速乾インナー", "汗を広く吸い乾きやすくする", "頭全体のベタつき", "臭い・衛生は運用も必要"],
  ["消臭・洗えるインナー", "臭い・皮脂を管理しやすくする", "個人支給の毎日使用", "共用品には不向きな場合あり"],
  ["使い捨て衛生インナー", "頭部との接触を分ける", "共用・来客", "冷却用品ではない"],
  ["冷感インナー", "着用時の暑さ・不快感を和らげる", "夏場の屋外など", "汗が目に入る悩みの直接解決にはならない場合あり"],
  ["高通気・送風ヘルメット", "本体側の通気性を上げる", "インナーで改善しない蒸れ", "保護性能・現場規定の適合確認が必須"],
] as const;

const corpCompare = [
  ["額の汗が多い", "汗取りバンド/パッド", "吸汗速乾インナー"],
  ["頭全体が蒸れる", "吸汗速乾インナー", "高通気ヘルメット"],
  ["臭いが残りやすい", "消臭・洗えるインナー", "交換用内装"],
  ["共用・来客用", "使い捨て衛生インナー", "共用ヘルメットの分離管理"],
  ["夏季屋外", "冷感インナー", "空調服・冷却ベスト"],
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
  tone?: "amber" | "dark" | "emerald";
}) {
  const toneClass =
    tone === "dark"
      ? "bg-slate-900 hover:bg-slate-800"
      : tone === "emerald"
        ? "bg-emerald-700 hover:bg-emerald-800"
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

function CtaBox({
  heading,
  children,
}: {
  heading?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 md:p-6">
      {heading ? (
        <p className="mb-4 text-xl font-extrabold text-gray-900">{heading}</p>
      ) : null}
      <div className="flex flex-wrap gap-3">{children}</div>
    </aside>
  );
}

function ProductCard({
  id,
  priority = false,
}: {
  id: string;
  priority?: boolean;
}) {
  const product = byId[id];
  if (!product) return null;

  return (
    <article className="my-6 rounded-2xl border border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-5 md:grid-cols-[200px_1fr] md:items-start">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          <Image
            src={PROD(product.imageFile)}
            alt={`${product.name}の商品画像`}
            width={400}
            height={400}
            priority={priority}
            className="h-auto w-full object-contain p-3"
          />
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-950">
              {product.badge}
            </span>
            <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-900">
              {product.id}
            </span>
          </div>
          <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
            {product.name}
          </h3>
          <dl className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            <div>
              <dt className="inline font-bold">解決する悩み：</dt>
              <dd className="inline">{product.problem}</dd>
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
            <strong>注意点：</strong>
            {product.check}
          </p>
          <div className="mt-5">
            <ExtButton href={product.url}>商品ページで詳細を確認する →</ExtButton>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProductTableCell({ id }: { id: string }) {
  const product = byId[id];
  if (!product) return <span>—</span>;
  return (
    <ExtLink
      href={product.url}
      className="group flex min-w-[16rem] items-start gap-3 no-underline"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
        <Image
          src={PROD(product.imageFile)}
          alt={`${product.name}の商品画像`}
          fill
          sizes="80px"
          className="object-contain p-1.5"
        />
      </span>
      <span className="min-w-0">
        <span className="block font-bold text-gray-900 group-hover:underline">
          {product.name}
        </span>
        <span className="mt-1 block text-[13px] leading-5 text-gray-900">
          {product.badge}
        </span>
      </span>
    </ExtLink>
  );
}

export default function Page() {
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
              作業用ヘルメット / 汗・蒸れ・衛生 / 2026年8月9日更新
            </div>
            <h1 className={cls.h1}>{ARTICLE_TITLE}</h1>
            <P>
              夏場の現場でヘルメットを長時間かぶっていると、額から流れた汗が目に入る、髪や頭皮が蒸れる、内装が汗で湿る、翌日に臭いが残る――といった不快感が出てきます。
            </P>
            <P>
              「とにかく涼しいインナーを選べばいい」と思いがちですが、実際には困りごとによって選ぶ用品は変わります。額の汗を止めたい人と、頭全体のベタつきを減らしたい人、共用ヘルメットを衛生的に使いたい現場では、必要なものが同じとは限りません。
            </P>
            <P>
              この記事では、作業用ヘルメットの汗・蒸れ対策を、
              <Mark>
                汗が目に入る／頭全体が蒸れる／臭いが気になる／共用品を清潔にしたい
              </Mark>
              という4つの悩みに分けて整理します。ヘルメットインナー、汗取りバンド、使い捨てインナー、高通気ヘルメットまで、現場でどう使い分けるかを解説します。
            </P>
            <aside className="my-6 rounded-xl border border-gray-300 bg-gray-50 p-4 text-[15px] leading-7 text-gray-900">
              <strong>注意：</strong>
              保護帽は安全性能が規格で定められた保護具です。インナーや付属品を使用するときは、使用する保護帽の取扱説明書やメーカーの適合条件を確認し、着用状態や安全性能を損なわない範囲で使用してください。
            </aside>
            <Figure
              src={IMG("work-helmet-sweat-control-hero.jpg")}
              alt="夏の作業現場でヘルメットの汗や蒸れ対策を行う作業者"
              priority
            />
          </header>

          <H2 id="quick-answer">
            先に結論：ヘルメットの汗対策は「どこが困っているか」で選ぶ
          </H2>
          <P>
            ヘルメット周りの対策用品は、役割を次のように分けると選びやすくなります。
          </P>

          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[720px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>困りごと</th>
                  <th className={cls.th}>まず検討したい用品</th>
                  <th className={cls.th}>向いている使い方</th>
                </tr>
              </thead>
              <tbody>
                {worryCompare.map(([a, b, c]) => (
                  <tr key={a}>
                    <td className={cls.td}>
                      <strong>{a}</strong>
                    </td>
                    <td className={cls.td}>{b}</td>
                    <td className={cls.td}>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <section className="mt-8 rounded-2xl border-2 border-amber-400 bg-slate-950 p-6 text-white md:p-8">
            <p className="text-sm font-bold text-amber-300">悩み→用品の答え</p>
            <ul className="mt-4 space-y-3 text-[16px] leading-8 md:text-[17px]">
              <li>
                額から汗が目に入るなら
                <strong className="text-amber-300">汗取りバンド／パッド</strong>
              </li>
              <li>
                頭全体のベタつきには
                <strong className="text-amber-300">吸汗速乾インナー</strong>
              </li>
              <li>
                臭い・皮脂には
                <strong className="text-amber-300">
                  洗える消臭インナーと内装メンテナンス
                </strong>
              </li>
              <li>
                共用品には
                <strong className="text-amber-300">使い捨て不織布／紙インナー</strong>
              </li>
              <li>
                インナーだけで改善しないなら
                <strong className="text-amber-300">
                  高通気・送風タイプのヘルメット本体
                </strong>
                を検討
              </li>
            </ul>
          </section>

          <CtaBox heading="ヘルメットインナーをまとめて比較したい方へ">
            <ExtButton href={ctas.innerList.url} tone="emerald">
              {ctas.innerList.label} →
            </ExtButton>
            <ExtButton href={ctas.helmetList.url} tone="dark">
              {ctas.helmetList.label} →
            </ExtButton>
          </CtaBox>

          <H2 id="four-problems">
            作業用ヘルメットの汗対策で起こりやすい4つの困りごと
          </H2>
          <H3>1. 額の汗が目に入る</H3>
          <P>
            額から流れた汗が目に入ると、視界がぼやけたり、思わず手で顔を拭いたりします。高所、工具使用中、運転・誘導中など、手を離したくない場面では小さな不快感が作業の邪魔になります。
          </P>
          <P>
            この悩みは、頭全体を冷やすより
            <Mark>額で汗を受ける</Mark>
            方が直接的です。汗取りバンドや貼り付け式パッドが向きます。
          </P>
          <Figure
            src={IMG("helmet-forehead-sweat-pad.jpg")}
            alt="ヘルメットの額部分に汗取りパッドを装着するイメージ"
          />

          <H2 id="forehead-sweat">汗が目に入るなら額の汗を止める</H2>
          <P>
            汗が目に入ることが主な悩みなら、いきなり大型の冷却用品へ行くより、まず汗の流れを止める方が費用も運用もシンプルです。
          </P>
          <ProductCard id="SRSWB" priority />
          <ProductCard id="AP002" />
          <ProductCard id="THCA01" />
          <CtaBox>
            <ExtButton href={ctas.innerList.url}>
              汗取り・インナー用品を一覧で見る →
            </ExtButton>
          </CtaBox>

          <H2 id="quick-dry">頭全体の蒸れ・ベタつきには吸汗速乾インナー</H2>
          <P>
            額だけでなく、頭頂部や側頭部まで汗で湿る場合は、汗取りバンドだけでは足りません。ヘルメットと頭部の間に薄手のインナーを入れ、汗を広く受ける方が使いやすくなります。
          </P>
          <Figure
            src={IMG("helmet-quick-dry-inner-cap.jpg")}
            alt="吸汗速乾インナーキャップを着用してヘルメットをかぶる作業者"
          />

          <H3>「厚ければ快適」とは限らない</H3>
          <P>
            クッション性の高い厚手インナーは快適そうに見えますが、作業用保護帽ではフィットを変える可能性があります。選ぶときは、対応するヘルメットや装着方法を確認し、無理に厚いものを挟まないことが前提です。
          </P>

          <H3>吸汗速乾タイプは毎日使う人に向く</H3>
          <P>
            汗を吸うだけの綿素材は、濡れた後に乾きにくいことがあります。毎日長時間かぶる人には、吸汗速乾素材やメッシュ構造など、湿気を溜めにくいタイプが扱いやすくなります。
          </P>
          <ProductCard id="QUICKDRY" />
          <ProductCard id="INNERCAP" />
          <ProductCard id="HALF" />

          <H3>「夏だけ」ではなく、発汗量が多い現場でも有効</H3>
          <P>
            屋外だけでなく、工場内、物流倉庫、設備保全などでも、動作量が多い作業ではヘルメット内が湿りやすくなります。季節だけでなく、作業強度で選ぶと支給品を決めやすくなります。
          </P>

          <H2 id="odor">臭いが気になるなら洗濯・乾燥・交換まで考える</H2>
          <P>
            ヘルメットの臭いは、インナーを付けただけでは完全には解決しません。汗や皮脂を受けたインナーを湿ったまま放置すると、翌日の着用感も悪くなります。
          </P>
          <Figure
            src={IMG("helmet-inner-wash-dry-rotation.jpg")}
            alt="ヘルメットインナーを洗濯して乾燥し交換する運用イメージ"
          />

          <H3>個人支給では洗える・交換できるものが扱いやすい</H3>
          <P>
            毎日同じ人が使うなら、取り外して洗えるインナーや汗止めクロスの方が管理しやすくなります。メーカー製の汗止めクロスにも、取り外して洗濯・交換できる製品があります。
          </P>
          <ProductCard id="G235" />
          <ProductCard id="ALLSEASON" />

          <H3>洗い替えを用意する</H3>
          <P>
            「1枚を毎日使い続ける」より、洗濯・乾燥中でも交換できるように運用する方が実務的です。法人支給では、誰が洗うのか、交換時期をどう判断するのかまで決めておくと、せっかく支給した用品が使われなくなるのを防げます。
          </P>

          <H3>ヘルメット本体の内装も確認する</H3>
          <P>
            汗を受けるのはインナーだけではありません。ヘッドバンドや内装側に汚れが残ることもあります。取り外し可能な内装は、メーカーの説明に従って手入れ・交換します。安全用品なので、自己判断で丸洗い・加工するのではなく、取扱説明書に沿った管理が基本です。
          </P>

          <H2 id="hygiene">共用・来客用ヘルメットは衛生用インナーを分ける</H2>
          <P>
            同じヘルメットを複数人で使う現場では、冷感よりも衛生管理が優先になるケースがあります。
          </P>
          <P>
            たとえば、工場見学者、短期入場者、応援作業者、来客向けヘルメットでは、個人用の洗えるインナーを毎回管理するより、使い捨ての不織布・紙インナーの方が運用しやすい場合があります。
          </P>
          <Figure
            src={IMG("shared-helmet-hygiene-inner.jpg")}
            alt="来客用ヘルメットと使い捨てインナーを準備するイメージ"
          />

          <H3>使い捨てタイプが向く場面</H3>
          <ul className={cls.list}>
            <li>来客用ヘルメット</li>
            <li>工場見学</li>
            <li>短期スタッフ</li>
            <li>複数人で共用する備品</li>
            <li>洗濯設備を用意しづらい現場</li>
          </ul>
          <ProductCard id="IPH-B100" />
          <ProductCard id="THDC-120" />
          <ProductCard id="THIK-120" />
          <P>
            これらは冷却用品ではありません。暑さ対策用品と同じ棚にあっても、役割は
            <Mark>衛生</Mark>
            です。ここを分けて考えると、法人購買で無駄が出にくくなります。
          </P>

          <H2 id="cooling">暑さが強い日は冷感タイプを追加する</H2>
          <P>
            汗や蒸れの不快感が中心なら、吸汗速乾で十分なこともあります。一方、直射日光の下や夏場の屋外作業では、「汗を処理する」だけでなく、着用時の冷感を補いたいケースがあります。
          </P>

          <H3>冷感タイプは方式が違う</H3>
          <H3>放射冷却・遮熱系</H3>
          <ProductCard id="RADICOOL" />
          <ProductCard id="TITAN" />
          <P>屋外で日差しの影響が大きい場面で検討しやすいタイプです。</P>

          <H3>濡らして使う・気化冷却系</H3>
          <ProductCard id="COOLCORE" />
          <ProductCard id="AQUA" />
          <P>
            水分を利用するタイプは、再度濡らして使える運用がしやすい反面、湿った状態が不快にならないか、交換・乾燥場所を用意できるかも確認します。
          </P>

          <H3>ジェル・保冷系</H3>
          <ProductCard id="ATAMANZOKU" />
          <P>
            短時間に冷たさを感じたい場面で選びやすい一方、冷却効果の持続時間や交換運用を考えておく必要があります。
          </P>

          <H3>冷感と汗取りは同じではない</H3>
          <ul className={cls.list}>
            <li>
              <strong>汗取り：</strong>汗を受けることが目的
            </li>
            <li>
              <strong>吸汗速乾：</strong>汗を広く吸い、乾きやすくする
            </li>
            <li>
              <strong>冷感：</strong>着用時の暑さ・不快感を和らげる
            </li>
            <li>
              <strong>衛生：</strong>共用品と頭部の接触を分ける
            </li>
          </ul>
          <P>
            1種類ですべてを解決しようとせず、現場の困りごとに合わせて選びます。
          </P>
          <CtaBox heading="冷感タイプもまとめて見たい方へ">
            <ExtButton href={ctas.coolGoods.url}>{ctas.coolGoods.label} →</ExtButton>
            <ExtButton href={ctas.innerList.url} tone="emerald">
              {ctas.innerList.label} →
            </ExtButton>
          </CtaBox>

          <H2 id="helmet-body">
            インナーを替えても蒸れるならヘルメット本体を見直す
          </H2>
          <P>
            インナーを薄くしても、吸汗速乾素材にしても、ヘルメット内部の熱こもりが強い場合があります。そうしたときは、インナーだけを買い続けるより、ヘルメット本体の通気性を見直した方がよいケースがあります。
          </P>
          <Figure
            src={IMG("ventilated-safety-helmet-comparison.jpg")}
            alt="一般的な作業用ヘルメットと高通気タイプを比較するイメージ"
          />

          <H3>高通気タイプ</H3>
          <ProductCard id="DPM1820" />

          <H3>遮熱・通気孔付き</H3>
          <ProductCard id="RYOBO" />

          <H3>送風機内蔵タイプ</H3>
          <ProductCard id="WINDY" />

          <CtaBox heading="ヘルメット本体も比較したい方へ">
            <ExtButton href={ctas.helmetList.url} tone="dark">
              {ctas.helmetList.label} →
            </ExtButton>
          </CtaBox>

          <H2 id="type-compare">用品タイプ別の比較表</H2>
          <P>
            同じ「ヘルメットインナー」でも役割は違います。購入前にタイプを確認すると、迷いが減ります。
          </P>
          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[860px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>用品タイプ</th>
                  <th className={cls.th}>主な役割</th>
                  <th className={cls.th}>向く悩み</th>
                  <th className={cls.th}>注意点</th>
                </tr>
              </thead>
              <tbody>
                {typeCompare.map(([a, b, c, d]) => (
                  <tr key={a}>
                    <td className={cls.td}>
                      <strong>{a}</strong>
                    </td>
                    <td className={cls.td}>{b}</td>
                    <td className={cls.td}>{c}</td>
                    <td className={cls.td}>{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[820px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>悩み</th>
                  <th className={cls.th}>代表商品例</th>
                  <th className={cls.th}>もう1候補</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={cls.td}>
                    <strong>汗が目に入る</strong>
                  </td>
                  <td className={cls.td}>
                    <ProductTableCell id="SRSWB" />
                  </td>
                  <td className={cls.td}>
                    <ProductTableCell id="AP002" />
                  </td>
                </tr>
                <tr>
                  <td className={cls.td}>
                    <strong>頭全体の蒸れ</strong>
                  </td>
                  <td className={cls.td}>
                    <ProductTableCell id="QUICKDRY" />
                  </td>
                  <td className={cls.td}>
                    <ProductTableCell id="INNERCAP" />
                  </td>
                </tr>
                <tr>
                  <td className={cls.td}>
                    <strong>臭い</strong>
                  </td>
                  <td className={cls.td}>
                    <ProductTableCell id="G235" />
                  </td>
                  <td className={cls.td}>
                    <ProductTableCell id="ALLSEASON" />
                  </td>
                </tr>
                <tr>
                  <td className={cls.td}>
                    <strong>共用衛生</strong>
                  </td>
                  <td className={cls.td}>
                    <ProductTableCell id="IPH-B100" />
                  </td>
                  <td className={cls.td}>
                    <ProductTableCell id="THIK-120" />
                  </td>
                </tr>
                <tr>
                  <td className={cls.td}>
                    <strong>本体見直し</strong>
                  </td>
                  <td className={cls.td}>
                    <ProductTableCell id="DPM1820" />
                  </td>
                  <td className={cls.td}>
                    <ProductTableCell id="WINDY" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <H2 id="corporate">
            法人支給は「全員に同じ1品」より悩み別に標準化する
          </H2>
          <P>
            現場全員へ同じヘルメットインナーを配ると、使う人と使わない人が分かれやすくなります。作業内容に応じて支給パターンを分けた方が運用しやすくなります。
          </P>
          <Figure
            src={IMG("helmet-inner-procurement-standardization.jpg")}
            alt="法人担当者が作業者の悩み別にヘルメットインナーを選ぶイメージ"
          />

          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[720px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>現場の悩み</th>
                  <th className={cls.th}>標準支給候補</th>
                  <th className={cls.th}>追加候補</th>
                </tr>
              </thead>
              <tbody>
                {corpCompare.map(([a, b, c]) => (
                  <tr key={a}>
                    <td className={cls.td}>
                      <strong>{a}</strong>
                    </td>
                    <td className={cls.td}>{b}</td>
                    <td className={cls.td}>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>「個人用」と「共用」を分ける</H3>
          <P>
            個人用は洗えるもの、共用は使い捨て、というように支給ロジックを分けると、衛生管理がシンプルになります。
          </P>

          <H3>季節品と通年品を分ける</H3>
          <P>
            吸汗速乾・消臭は通年、冷感系は夏季、と分けると在庫管理もしやすくなります。
          </P>

          <H2 id="whole-body">ヘルメットだけで暑いなら全身側も見直す</H2>
          <P>
            この記事の主題は汗・蒸れ対策ですが、頭部だけを快適にしても、身体全体が暑ければ作業中の負担感は残ります。関連カテゴリとして、次の用品も組み合わせやすいです。
          </P>
          <CtaBox heading="頭部以外の快適性もあわせて確認">
            <ExtButton href={ctas.fanWear.url}>{ctas.fanWear.label} →</ExtButton>
            <ExtButton href={ctas.coolingVest.url}>
              {ctas.coolingVest.label} →
            </ExtButton>
            <ExtButton href={ctas.coolGoods.url} tone="dark">
              {ctas.coolGoods.label} →
            </ExtButton>
          </CtaBox>

          <H2 id="mistakes">よくある失敗</H2>
          <H3>「冷たい＝汗が目に入らない」と考える</H3>
          <P>
            冷感インナーを付けても、額から流れる汗自体を止められるとは限りません。目に入る汗が悩みなら、汗取りバンドやパッドの方が直接的です。
          </P>

          <H3>濡れたインナーをそのまま翌日も使う</H3>
          <P>
            濡れたまま保管すると着用感も臭いも悪化しやすくなります。洗濯・乾燥・交換の運用まで決めます。
          </P>

          <H3>共用品と個人用品を同じように管理する</H3>
          <P>
            共用品は誰が使ったかわからなくなりやすいため、使い捨てインナーや交換ルールを別にした方が衛生的です。
          </P>

          <H3>厚いものを無理に入れる</H3>
          <P>
            保護帽は正しい着用状態が前提です。厚いインナーや適合しない付属品を無理に入れないようにし、メーカーの取扱説明書・適合情報を確認してください。
          </P>

          <H3>インナーだけで蒸れを解決し続けようとする</H3>
          <P>
            毎年夏になるたび冷感インナーを追加しても、ヘルメット本体の通気性がボトルネックなら改善は限定的です。高通気タイプへの更新も選択肢です。
          </P>

          <H2 id="checklist">法人購買担当向けチェックリスト</H2>
          <ul className="my-6 space-y-3">
            {checkItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 text-[16px] leading-7 text-gray-900"
              >
                <span
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-gray-400"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <H2 id="faq">よくある質問</H2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className={cls.faqQ}>{faq.q}</h3>
                <P>{faq.a}</P>
              </div>
            ))}
          </div>

          <H2 id="summary">まとめ：汗対策用品は「冷たさ」ではなく悩みから選ぶ</H2>
          <P>
            作業用ヘルメットの汗・蒸れ対策では、単に一番冷たそうなインナーを選ぶより、何に困っているかを先に整理した方が失敗しにくくなります。
          </P>
          <ul className={cls.list}>
            <li>
              <strong>汗が目に入る</strong> → 汗取りバンド・パッド
            </li>
            <li>
              <strong>頭全体が蒸れる</strong> → 吸汗速乾インナー
            </li>
            <li>
              <strong>臭い</strong> → 消臭・洗えるインナー＋乾燥・交換
            </li>
            <li>
              <strong>共用品</strong> → 不織布・紙の衛生インナー
            </li>
            <li>
              <strong>夏場の不快感</strong> → 冷感タイプ
            </li>
            <li>
              <strong>インナーで足りない</strong> → 高通気・送風ヘルメット
            </li>
          </ul>
          <P>
            同じ「ヘルメットインナー」でも役割はかなり違います。作業者の悩みと運用方法を合わせて選ぶことが、快適性と使いやすさの両方につながります。
          </P>

          <CtaBox heading="関連商品をまとめて確認">
            <ExtButton href={ctas.innerList.url} tone="emerald">
              {ctas.innerList.label} →
            </ExtButton>
            <ExtButton href={ctas.helmetList.url} tone="dark">
              {ctas.helmetList.label} →
            </ExtButton>
            <ExtButton href={ctas.heatItems.url}>
              {ctas.heatItems.label} →
            </ExtButton>
          </CtaBox>

          <section className="mt-14 border-t border-gray-200 pt-10">
            <h2 className={cls.h2}>関連記事</h2>
            <ul className="my-4 space-y-3">
              {relatedArticles.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-bold text-gray-900 underline underline-offset-4"
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
