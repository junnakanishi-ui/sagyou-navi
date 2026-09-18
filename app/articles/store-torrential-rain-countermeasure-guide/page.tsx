import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";
import { InstagramEmbed } from "./instagram-embed";

const SLUG = productData.slug;
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const H1 = productData.h1;
const SHORT_TITLE = "店舗の豪雨対策チェックリスト";
const DESCRIPTION =
  "店舗 豪雨対策をテーマに、浸水・休業リスクを減らす事前準備、入口・シャッター別の止水対策、吸水補助、浸水後の足元装備まで整理。危険時は避難優先の運用ルールとチェックリスト付き。";
const PUBLISHED = "2026-09-18";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const HERO = "store-torrential-rain-countermeasure-guide-main.webp";
const EXT_REL = "nofollow sponsored noopener noreferrer";
const RELATED_FLOOD = "/articles/store-flood-countermeasure-bcp-guide";
const RELATED_FACTORY =
  "/articles/factory-warehouse-flood-entry-protection-guide";

type Product = (typeof productData.products)[number];

const byId = Object.fromEntries(
  productData.products.map((p) => [p.id, p])
) as Record<string, Product>;

const CTA = productData.cta;

const faqs = [
  {
    q: "「止水板」ではなく「店舗 豪雨対策」で記事を読む意味はありますか？",
    a: "あります。実際には、どの止水板を買うかより、どの入口に何を置き、いつ設置し、いつ作業をやめるかの方が現場では重要だからです。",
  },
  {
    q: "小さな路面店でも止水板は必要ですか？",
    a: "必要になる可能性があります。特に前面道路の冠水経験がある店舗、入口段差が少ない店舗、自動ドア・シャッターがある店舗では検討価値があります。",
  },
  {
    q: "吸水材だけでは足りませんか？",
    a: "軽微なにじみや補助対策には有効ですが、入口からまとまった水が入る状況では、止水板や簡易防水シートと組み合わせた方が考えやすいです。",
  },
  {
    q: "設置はいつまでに済ませるべきですか？",
    a: "危険が迫る前です。豪雨時の作業は安全第一で、避難や休業判断が必要な段階では作業を続けないことが大切です。",
  },
  {
    q: "まず何を1つ買うべきですか？",
    a: "正面入口対策が課題なら、備えあれ板やストレートタイプの止水板が検討しやすいです。シャッターが課題ならEシート、すき間や軽微な流入が課題ならウォーターバスタープラスも候補になります。",
  },
] as const;

const tocItems = [
  { id: "conclusion", label: "30秒で結論" },
  { id: "why-theme", label: "なぜ「店舗 豪雨対策」か" },
  { id: "people-first", label: "人と営業継続を優先" },
  { id: "before-48h", label: "48時間前〜前日の備え" },
  { id: "day-of", label: "当日の基本行動" },
  { id: "entrance", label: "入口別の選び方" },
  { id: "absorbent", label: "吸水・補助対策" },
  { id: "instagram", label: "動画でイメージ" },
  { id: "boots", label: "浸水後の足元装備" },
  { id: "checklist", label: "チェックリスト" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
] as const;

const entranceRows = [
  {
    place: "正面入口（直線）",
    action: "止水板で正面を守る",
    products: "備えあれ板 / ストレートタイプ",
  },
  {
    place: "変形・カーブ開口部",
    action: "形状に合わせる",
    products: "内カーブ / 外カーブタイプ",
  },
  {
    place: "長い開口部",
    action: "連結・長尺対応",
    products: "ボックスウォール / プラバリア",
  },
  {
    place: "シャッター前",
    action: "専用の簡易防水",
    products: "Eシート",
  },
  {
    place: "軽微なにじみ・補助",
    action: "吸水材を併用",
    products: "ウォーターバスタープラス",
  },
] as const;

export const metadata: Metadata = {
  title: `${H1}｜作業用品ナビ`,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: H1,
    description: DESCRIPTION,
    type: "article",
    url: CANONICAL,
    siteName: "作業用品ナビ",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    images: [
      {
        url: `${SITE_URL}${IMG(HERO)}`,
        width: 1600,
        height: 900,
        alt: "豪雨前に店舗入口で止水板を設置し在庫を高い位置へ移す準備のイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: H1,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG(HERO)}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG(HERO)}`],
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

const faqSchema = {
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
  dataCta,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  dataCta?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel={EXT_REL}
      data-cta={dataCta}
      className={className}
    >
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
    <figure className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-slate-50">
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover brightness-[1.05]"
          sizes="(max-width: 1024px) 100vw, 850px"
        />
      </div>
    </figure>
  );
}

function SafetyBanner() {
  return (
    <aside
      role="note"
      className="my-8 rounded-2xl border-2 border-red-500 bg-red-50 p-5 sm:p-6"
    >
      <p className="mb-2 text-lg font-black tracking-wide text-red-800 sm:text-xl">
        危険時は避難優先
      </p>
      <p className={cls.bodySm}>
        豪雨時の止水作業は、
        <Mark>安全な段階まで</Mark>
        です。危険が迫ったら設置を中断し、来店客と従業員の安全確保を最優先してください。止水板や吸水材は、避難を遅らせるためのものではありません。
      </p>
    </aside>
  );
}

function CtaBlock({
  title,
  text,
  showSecondary = true,
}: {
  title: string;
  text: string;
  showSecondary?: boolean;
}) {
  return (
    <aside className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
      <p className={cls.ctaH3}>{title}</p>
      <p className={`mt-2 ${cls.bodySm}`}>{text}</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <ExtLink
          href={CTA.rakutenStopBoard.url}
          dataCta="cta-rakuten-stopboard"
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-rose-700 px-5 py-3 text-center text-[15px] font-extrabold text-white transition hover:bg-rose-800"
        >
          {CTA.rakutenStopBoard.label}
        </ExtLink>
        <ExtLink
          href={CTA.gcStopBoard.url}
          dataCta="cta-gc-stopboard"
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-800 px-5 py-3 text-center text-[15px] font-extrabold text-white transition hover:bg-blue-900"
        >
          {CTA.gcStopBoard.label}
        </ExtLink>
      </div>
      {showSecondary ? (
        <div className="mt-3">
          <ExtLink
            href={CTA.disasterItems.url}
            dataCta="cta-disaster-items"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 text-center text-[15px] font-extrabold text-blue-900 transition hover:bg-blue-50"
          >
            {CTA.disasterItems.label}
          </ExtLink>
        </div>
      ) : null}
    </aside>
  );
}

function ProductLink({ id }: { id: string }) {
  const product = byId[id];
  if (!product) return null;

  if (product.image) {
    return (
      <ExtLink
        href={product.url}
        dataCta={`product-${product.id}`}
        className="group flex min-w-[16rem] items-start gap-3 text-gray-900 no-underline"
      >
        <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
          <Image
            src={product.image}
            alt={`${product.short}の商品画像`}
            fill
            sizes="80px"
            className="object-contain p-1.5"
          />
        </span>
        <span className="pt-0.5">
          <span className="block font-bold group-hover:underline">
            {product.name}
          </span>
          <span className="mt-1 block text-sm font-bold text-gray-800">
            {product.role}
          </span>
        </span>
      </ExtLink>
    );
  }

  return (
    <ExtLink
      href={product.url}
      dataCta={`product-${product.id}`}
      className="inline-flex min-h-11 items-center justify-center rounded-lg border border-blue-700 bg-white px-4 py-2 text-[15px] font-bold text-blue-800 transition hover:bg-blue-50"
    >
      {product.short}を見る →
    </ExtLink>
  );
}

function ProductCard({ id }: { id: string }) {
  const product = byId[id];
  if (!product) return null;
  const label =
    product.channel === "rakuten"
      ? "楽天市場で詳細を見る →"
      : "自社ECで詳細を見る →";

  return (
    <article className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div
        className={`grid gap-0 ${product.image ? "md:grid-cols-[220px_1fr]" : ""}`}
      >
        {product.image ? (
          <div className="relative min-h-[200px] bg-slate-50 md:min-h-[240px]">
            <Image
              src={product.image}
              alt={`${product.name}の商品画像`}
              fill
              sizes="(max-width: 768px) 100vw, 220px"
              className="object-contain p-4"
            />
          </div>
        ) : null}
        <div className="p-5 sm:p-6">
          <p className="mb-1 text-sm font-bold text-slate-700">{product.role}</p>
          <h3 className="text-xl font-extrabold leading-snug text-gray-900 md:text-2xl">
            {product.name}
          </h3>
          <ExtLink
            href={product.url}
            dataCta={`card-${product.id}`}
            className="mt-4 inline-flex min-h-12 items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-center font-bold text-white hover:bg-slate-700"
          >
            {label}
          </ExtLink>
        </div>
      </div>
    </article>
  );
}

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="my-4 space-y-2 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-[17px] leading-[1.9] tracking-[0.04em] text-gray-900"
        >
          <span
            aria-hidden
            className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-blue-700 text-xs font-bold text-blue-800"
          >
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[850px] px-4 pb-16 pt-10 sm:px-6">
        <JsonLd data={articleSchema} />
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={faqSchema} />

        <nav aria-label="パンくず" className={`mb-5 ${cls.meta}`}>
          <Link href="/" className="underline underline-offset-4">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <Link href="/articles" className="underline underline-offset-4">
            選び方ガイド
          </Link>
          <span className="mx-2">/</span>
          <span>{SHORT_TITLE}</span>
        </nav>

        <p className={`${cls.meta} font-bold text-blue-800`}>
          防災・水害対策 / 店舗運営
        </p>
        <h1 className={cls.h1}>{H1}</h1>
        <div className={`mt-4 flex flex-wrap gap-x-5 gap-y-2 ${cls.meta}`}>
          <span>執筆：作業用品ナビ編集部</span>
          <time dateTime={PUBLISHED}>公開・更新：2026年9月18日</time>
        </div>

        <Figure
          src={IMG(HERO)}
          alt="豪雨前に店舗入口で止水板を設置し在庫を高い位置へ移す準備のイメージ"
          priority
        />

        <P>
          東海エリアを含め、近年は短時間の豪雨や線状降水帯による被害が珍しくありません。店舗や事業所では、数cmの浸水でも、入口から雨水が流れ込み、床置き在庫や電源タップ、レジ周辺、販促物、書類が一気に使えなくなることがあります。
        </P>
        <P>
          特に路面店では、前面道路の冠水、自動ドア・片開きドアの下からの浸水、シャッターのすき間からの流入、従業員通用口・裏口からの回り込みが起こりやすく、
          <Mark>
            「止水板を買うかどうか」より前に、豪雨時に何をいつやるか
          </Mark>
          を決めておくことが重要です。
        </P>
        <P>
          この記事では、<strong>店舗 豪雨対策</strong>
          をテーマに、豪雨の前にやること、当日にやること、入口・シャッター別の対策、使いやすい止水・吸水アイテム、浸水後の安全な作業装備を店舗運営者向けに整理します。
        </P>

        <SafetyBanner />

        <nav
          aria-label="目次"
          className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6"
        >
          <p className="mb-3 text-lg font-black text-gray-900">目次</p>
          <ol className="list-decimal space-y-2 pl-5 text-[16px] font-bold leading-7 text-gray-900">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="underline underline-offset-4">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section
          id="conclusion"
          className="my-8 scroll-mt-24 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-7"
        >
          <h2 className="text-2xl font-black leading-snug tracking-wide text-gray-900 sm:text-3xl">
            30秒で結論｜店舗の豪雨対策は「止める・逃がす・守る・下がる」の4つ
          </h2>
          <Figure
            src={IMG("store-torrential-rain-countermeasure-guide-summary.webp")}
            alt="止める・逃がす・守る・下がるの4つの豪雨対策コンセプト図"
          />
          <P>
            結論から言うと、店舗の豪雨対策は次の4つで考えると整理しやすいです。
          </P>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "1. 止める",
                body: "入口やシャッター前に、止水板・簡易止水パネル・防水シートを使って雨水の侵入を減らす",
              },
              {
                title: "2. 逃がす",
                body: "止めきれない雨水に備え、吸水材や土のう代替品で被害を広げにくくする",
              },
              {
                title: "3. 守る",
                body: "床置き在庫、電源まわり、書類、機器を高い位置へ移し、浸水して困るものを先に守る",
              },
              {
                title: "4. 下がる",
                body: "危険が迫ったら設置作業より避難を優先する。止水作業は安全な段階まで",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-blue-100 bg-white p-4"
              >
                <p className="mb-1 font-black text-blue-900">{item.title}</p>
                <p className={cls.bodySm}>{item.body}</p>
              </div>
            ))}
          </div>
          <CtaBlock
            title="今すぐ商品を見たい方へ"
            text="正面入口・シャッター・長い開口部向けの止水板から確認できます。"
          />
        </section>

        <H2 id="why-theme">
          なぜ「止水板」ではなく「店舗 豪雨対策」で考えるべきなのか
        </H2>
        <P>
          「止水板」は大切です。ただ、店舗運営者が本当に悩んでいるのは、製品名そのものより、どのタイミングで出すのか、入口が複数ある場合どうするのか、シャッターや自動ドアに何を使うのか、少人数のスタッフでどこまで対応するのか、休業判断をいつするのかといった実務です。
        </P>
        <P>
          そのため、<Mark>店舗 豪雨対策</Mark>
          というテーマで整理すると、上流の検索意図に応えながら、結果として止水板や災害対策アイテムへの備えにつなげやすくなります。
        </P>
        <P>
          なお、店舗の浸水対策をフェーズ別により深く見たい場合は、関連記事の
          <Link href={RELATED_FLOOD} className="mx-1 font-bold underline">
            店舗の浸水対策と水害BCP
          </Link>
          もあわせてご覧ください。工場・倉庫の搬入口向けは
          <Link href={RELATED_FACTORY} className="mx-1 font-bold underline">
            工場・倉庫の浸水対策
          </Link>
          があります。
        </P>

        <H2 id="people-first">
          店舗の豪雨対策で最優先なのは「商品」ではなく人と営業継続
        </H2>
        <SafetyBanner />
        <P>
          豪雨のたびに、つい「在庫を守らないと」「機材を避難させないと」と考えがちです。しかし店舗で最優先なのは、来店客の安全、従業員の安全、危険な場所から離れる判断、その後の営業再開を早める備えです。
        </P>
        <P>
          特に気象情報で警戒が高まっている場合は、
          <Mark>「これ以上は作業しない」という基準</Mark>
          を決めておくことが重要です。
        </P>

        <H2 id="before-48h">
          48時間前〜前日にやること｜豪雨前の備えチェックリスト
        </H2>
        <Figure
          src={IMG(
            "store-torrential-rain-countermeasure-guide-hazard-map.webp"
          )}
          alt="店舗の豪雨対策としてハザードマップと役割分担を確認するデスクのイメージ"
        />
        <H3>1. ハザードマップで自店周辺を確認する</H3>
        <P>
          まず確認したいのが、自店所在地の洪水・内水・高潮などのリスクです。店舗前面の道路が冠水しやすいか、過去にどこから水が入ったか、周囲より床が低くないかを把握しておくと、必要な備えが変わります。
        </P>
        <H3>2. 守る場所を入口単位で決める</H3>
        <ul className={cls.list}>
          <li>正面入口：止水板</li>
          <li>シャッター前：防水シートまたは簡易止水</li>
          <li>裏口：吸水材や補助材</li>
          <li>搬入口：長尺タイプの簡易止水</li>
        </ul>
        <H3>3. 床置き在庫・電源・書類の優先順位を決める</H3>
        <Figure
          src={IMG(
            "store-torrential-rain-countermeasure-guide-inventory-move.webp"
          )}
          alt="豪雨前に床置き在庫や重要物を高い棚へ移す店舗バックヤードのイメージ"
        />
        <P>
          豪雨時に被害が出やすいのは、床に近いものです。段ボール在庫、紙製POP・販促物、OA機器や電源タップ、契約書・顧客書類、交換機器・消耗品など、
          <Mark>「何を先に上へ上げるか」</Mark>
          を決めておくと、当日の対応速度が変わります。
        </P>
        <H3>4. 役割分担を決める</H3>
        <ul className={cls.list}>
          <li>Aさん：気象情報の確認</li>
          <li>Bさん：入口対策</li>
          <li>Cさん：在庫移動</li>
          <li>店長：営業継続・休業判断</li>
        </ul>

        <H2 id="day-of">
          当日の基本行動｜店舗豪雨対策は「早めの縮小」で被害を減らす
        </H2>
        <P>
          豪雨当日に重要なのは、ギリギリまで営業することではなく、
          <Mark>被害が小さいうちに動くこと</Mark>
          です。
        </P>
        <H3>1. 雨が強まる前に商品・機器を上げる</H3>
        <P>
          入口対策より先に、被害が大きいものを高い位置へ移します。低い位置の在庫、レジ周辺の備品、タブレット・ルーター・コード類、書類や伝票は優先度が高いです。
        </P>
        <H3>2. 入口近くに止水用品を集める</H3>
        <P>
          倉庫の奥にしまってあると、いざという時に出せません。使う止水板・吸水材・長靴・手袋は、あらかじめ入口近くへ移しておきます。
        </P>
        <H3>3. 設置判断の締切を決める</H3>
        <ul className={cls.list}>
          <li>冠水が始まる前まで</li>
          <li>従業員が安全に作業できる範囲まで</li>
          <li>避難や閉店判断が必要になったら中断</li>
        </ul>

        <H2 id="entrance">入口別｜店舗で使いやすい豪雨対策用品の選び方</H2>
        <Figure
          src={IMG(
            "store-torrential-rain-countermeasure-guide-entrance-barrier.webp"
          )}
          alt="路面店の正面入口に簡易止水板を設置しているイメージ"
        />
        <P>
          ここからは、実際に店舗で使いやすい商品を、入口の形状や用途ごとに整理します。
        </P>

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <th className={cls.th}>場所・課題</th>
                <th className={cls.th}>向いている対策</th>
                <th className={cls.th}>主な商品</th>
              </tr>
            </thead>
            <tbody>
              {entranceRows.map((row) => (
                <tr key={row.place}>
                  <td className={cls.td}>
                    <strong>{row.place}</strong>
                  </td>
                  <td className={cls.td}>{row.action}</td>
                  <td className={cls.td}>{row.products}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H3>正面入口・出入口がまっすぐなら｜備えあれ板 / ストレートタイプ</H3>
        <P>
          もっとも使いやすいのは、正面入口の直線開口部に設置しやすいタイプです。路面店の正面入口、比較的短い開口部、シンプルな構造で扱いやすいものがほしい店舗に向きます。
        </P>
        <ProductCard id="004954" />
        <ProductCard id="6300099082" />
        <P>
          アイリスオーヤマのストレートタイプは、直線部に合わせやすく、店舗入口がまっすぐで見た目にも整理しやすい点が魅力です。
        </P>

        <H3>カーブ・変形開口部なら｜内カーブ / 外カーブタイプ</H3>
        <P>
          商業施設の区画や変形した出入口では、直線タイプだけで対応しづらいことがあります。その場合に検討しやすいのが、内カーブ・外カーブ対応タイプです。
        </P>
        <ProductCard id="6300099083" />
        <ProductCard id="6300099084" />

        <H3>
          間口が長い・仮設的に囲いたいなら｜ボックスウォール / プラバリア
        </H3>
        <P>
          長い開口部、複数連結したい場所、仮設的なバリアを作りたい場所では、ボックスウォールやプラバリアのような簡易止水システムが向いています。
        </P>
        <ProductCard id="6300027727" />
        <div className="my-4 flex flex-wrap gap-3">
          <ProductLink id="6300027728" />
          <ProductLink id="6300027730" />
        </div>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <th className={cls.th}>商品</th>
                <th className={cls.th}>向いている場面</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={cls.td}>
                  <ProductLink id="spbbs" />
                </td>
                <td className={cls.td}>
                  間口の長い出入口。基本セットで導入しやすい
                </td>
              </tr>
              <tr>
                <td className={cls.td}>
                  <ProductLink id="spbes" />
                </td>
                <td className={cls.td}>
                  複数枚構成で伸ばしたい開口部の延長
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <H3>シャッター前なら｜Eシート</H3>
        <Figure
          src={IMG("store-torrential-rain-countermeasure-guide-shutter.webp")}
          alt="店舗シャッター下部に簡易防水シートを設置するイメージ"
        />
        <P>
          店舗によっては、正面入口よりもシャッター部の浸水が怖いケースがあります。特に閉店後の浸水を抑えたい場合は、シャッター前のすき間対策が重要です。
        </P>
        <ProductCard id="eseat" />
        <div className="my-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
          <p className="mb-2 text-sm font-bold text-gray-900">購入前の注意</p>
          <p className={cls.bodySm}>
            Eシートは適合するシャッター条件があります。適合条件や使用条件は商品ページ・メーカー情報を必ず確認してください。完全防水ではありません。
          </p>
        </div>

        <CtaBlock
          title="入口に合う止水板を探す"
          text="直線・カーブ・長尺・シャッター向けまで、用途別に比較できます。"
        />

        <H2 id="absorbent">
          完全に止めきれない場合の補助対策｜吸水材・土のう代替品
        </H2>
        <Figure
          src={IMG(
            "store-torrential-rain-countermeasure-guide-absorbent.webp"
          )}
          alt="店舗入口の敷居沿いに吸水材を置いて軽微な雨水流入を抑えるイメージ"
        />
        <P>
          豪雨対策は「止水板だけ」ですべて解決するわけではありません。入口のすき間、わずかな段差、にじみ出る水への備えとして、吸水材や簡易土のう系を組み合わせると実用性が上がります。
        </P>
        <H3>ウォーターバスタープラス</H3>
        <P>
          小規模店舗で扱いやすく、入口まわりの補助対策に使いやすい商品です。セット数違いで規模に合わせられます。
        </P>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <th className={cls.th}>セット</th>
                <th className={cls.th}>向いている目安</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={cls.td}>
                  <ProductLink id="wbp7s" />
                </td>
                <td className={cls.td}>入口1箇所の補助から始めたい店舗</td>
              </tr>
              <tr>
                <td className={cls.td}>
                  <ProductLink id="wbp14s" />
                </td>
                <td className={cls.td}>正面＋裏口など複数箇所の補助</td>
              </tr>
              <tr>
                <td className={cls.td}>
                  <ProductLink id="wbp21s" />
                </td>
                <td className={cls.td}>間口が広い・予備も含めて備えたい店舗</td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>波止めジョニー / 土のう袋</H3>
        <P>
          より簡易な補助資材として考えやすい商品です。主役というより、止水板や防水シートの
          <Mark>補助</Mark>
          として提案するのが自然です。
        </P>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <th className={cls.th}>商品</th>
                <th className={cls.th}>役割</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={cls.td}>
                  <ProductLink id="ar3831" />
                </td>
                <td className={cls.td}>簡易な補助資材として止水板の補完に</td>
              </tr>
              <tr>
                <td className={cls.td}>
                  <ProductLink id="tdn200p" />
                </td>
                <td className={cls.td}>土のう袋の備蓄・応急対応向け</td>
              </tr>
            </tbody>
          </table>
        </div>

        <H2 id="instagram">
          動画でイメージ｜豪雨時の止水対策の雰囲気を確認する
        </H2>
        <P>
          実際の動きや設置イメージを、短い動画で確認したい方は以下も参考になります。
        </P>
        <InstagramEmbed permalink={productData.instagramPermalink} />

        <H2 id="boots">
          浸水後の確認作業に備える｜長靴・ウェーダーも準備しておく
        </H2>
        <Figure
          src={IMG("store-torrential-rain-countermeasure-guide-boots.webp")}
          alt="浸水後の点検用に長靴とウェーダーを店舗裏口へ準備したイメージ"
        />
        <P>
          浸水後の片付けや確認作業では、足元の安全が重要です。店舗入口や裏口の確認、屋外での片付け、泥水やぬかるみへの対応に、長靴や胴付長靴が役立ちます。
        </P>
        <ProductCard id="1123611001" />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <th className={cls.th}>商品</th>
                <th className={cls.th}>向いている場面</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={cls.td}>
                  <ProductLink id="1123785002m" />
                </td>
                <td className={cls.td}>水位が気になる場所・水たまりの深い場所</td>
              </tr>
              <tr>
                <td className={cls.td}>
                  <ProductLink id="6300062021" />
                </td>
                <td className={cls.td}>より深い浸水後作業・水産現場寄りの装備</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
          <p className="mb-2 text-sm font-bold text-gray-900">安全上の注意</p>
          <p className={cls.bodySm}>
            水位が高い場所や流れのある場所への立ち入りは危険です。装備があっても、危険が残る場合は作業を延期し、自治体・消防などの指示に従ってください。
          </p>
        </div>

        <H2 id="checklist">店舗の豪雨対策チェックリスト</H2>
        <H3>平時にやること</H3>
        <CheckList
          items={[
            "ハザードマップで立地を確認する",
            "浸水しやすい入口を洗い出す",
            "守るべき在庫・機器・書類を決める",
            "止水用品の保管場所を決める",
            "設置担当と休業判断者を決める",
          ]}
        />
        <H3>豪雨予報が出たらやること</H3>
        <CheckList
          items={[
            "止水用品を入口近くへ移す",
            "床置き在庫を上へ移す",
            "書類・機器を保護する",
            "スタッフへ役割を共有する",
            "気象情報と自治体情報を確認する",
          ]}
        />
        <H3>当日にやること</H3>
        <CheckList
          items={[
            "安全なうちに入口対策を行う",
            "シャッター・裏口も確認する",
            "危険が迫ったら作業を打ち切る",
            "来店客と従業員の安全を優先する",
          ]}
        />
        <H3>浸水後にやること</H3>
        <CheckList
          items={[
            "足元装備を整える",
            "安全確認後に点検する",
            "被害箇所を記録する",
            "営業再開前に清掃・衛生・設備確認を行う",
          ]}
        />

        <H2 id="faq">よくある質問</H2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <h3 className={cls.faqQ}>{faq.q}</h3>
              <P>{faq.a}</P>
            </div>
          ))}
        </div>

        <H2 id="summary">
          まとめ｜店舗の豪雨対策は「豪雨前の運用」と「入口別の備え」で差が出る
        </H2>
        <P>
          店舗の豪雨対策は、単に止水板を1枚導入して終わりではありません。豪雨前に何を動かすか、どの入口に何を置くか、誰が判断するか、危険が迫ったらどこでやめるかを決めておくことで、被害と混乱を大きく減らせます。
        </P>
        <P>
          今回紹介した商品群は、正面入口、シャッター、長い開口部、軽微な雨水流入、浸水後作業まで幅広くカバーしやすい構成です。店舗の備えを進めたい方は、以下の一覧もあわせてご確認ください。
        </P>
        <SafetyBanner />
        <CtaBlock
          title="店舗の豪雨対策アイテムを確認する"
          text="止水板一覧と災害対策アイテム一覧から、自店の入口に合う備えを選べます。"
        />
      </main>
      <SiteFooter />
    </>
  );
}
