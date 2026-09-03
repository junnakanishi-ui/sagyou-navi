import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const SLUG = "nichido-super-booster-battery-charger-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const SEO_TITLE =
  "スーパーブースターとは？NB-40～NB-200の違い・選び方【2026年】";
const H1 =
  "スーパーブースターとは？日動工業NB-40・50・60・120・200を12V/24V・セルスタート電流で比較【2026年版】";
const SHORT_TITLE = "スーパーブースター NBシリーズ比較";
const DESCRIPTION =
  "日動工業の急速充電器「スーパーブースター」を比較。NB-40・NB-50・NB-60・NB-120・NB-200について、12V/24V、適合バッテリー容量、充電電流、セルスタート電流、タイマー、重量の違いを整理。普通車・農機・大型農機・トラック・重機でどの型式を選ぶかを解説します。";
const PUBLISHED = "2026-09-03";
const MODIFIED = "2026-09-03";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

type Model = (typeof productData.models)[number];

const models = productData.models;
const byModel = Object.fromEntries(models.map((m) => [m.model, m])) as Record<
  string,
  Model
>;
const mainCta = productData.cta.main;
const secondaryCtas = productData.cta.secondary;

const threeNumbers = [
  {
    n: "01",
    title: "12V / 24V",
    body: "12VだけならNB-40 / 50 / 60。24Vも扱うならNB-120 / 200。",
  },
  {
    n: "02",
    title: "バッテリー容量 Ah",
    body: "26～60Ah、26～80Ah、35～120Ah、50～200Ahの適合範囲で絞る。",
  },
  {
    n: "03",
    title: "セルスタート電流",
    body: "40A / 50A / 60A / 120A / 200A。必要ならその後にタイマー・重量。",
  },
] as const;

const compareRows = [
  {
    model: "NB-40",
    voltage: "12V",
    battery: "26～60Ah",
    continuous: "6A",
    maxCharge: "8A",
    cell: "40A",
    timer: "なし",
    weight: "4.5kg",
  },
  {
    model: "NB-50",
    voltage: "12V",
    battery: "26～80Ah",
    continuous: "10A",
    maxCharge: "15A",
    cell: "50A",
    timer: "なし",
    weight: "6.2kg",
  },
  {
    model: "NB-60",
    voltage: "12V",
    battery: "26～80Ah",
    continuous: "12A",
    maxCharge: "17A",
    cell: "60A",
    timer: "12時間",
    weight: "6.4kg",
  },
  {
    model: "NB-120",
    voltage: "12/24V",
    battery: "35～120Ah",
    continuous: "20A / 10A",
    maxCharge: "30A / 15A",
    cell: "120A",
    timer: "なし",
    weight: "11.5kg",
  },
  {
    model: "NB-200",
    voltage: "12/24V",
    battery: "50～200Ah",
    continuous: "30A / 25A",
    maxCharge: "50A / 40A",
    cell: "200A",
    timer: "12時間",
    weight: "21.7kg",
  },
] as const;

const nb120vs200 = [
  ["対応電圧", "12/24V", "12/24V"],
  ["適合容量", "35～120Ah", "50～200Ah"],
  ["24V連続充電", "10A", "25A"],
  ["24V最大充電", "15A", "40A"],
  ["セルスタート", "120A", "200A"],
  ["タイマー", "なし", "12時間"],
  ["重量", "11.5kg", "21.7kg"],
] as const;

const checklist = [
  "バッテリー電圧：12V / 24V",
  "バッテリー容量Ah",
  "バッテリーの種類",
  "必要な充電電流",
  "セルスタートが必要か",
  "タイマーが必要か",
  "屋内でAC100V電源を確保できるか",
] as const;

const mistakes = [
  {
    title: "型番の数字が大きいほど良いと思う",
    body: "NB-200は高性能ですが21.7kgあり、50～200Ah・大型設備向けです。普通車や小型農機だけなら過剰になる場合があります。",
  },
  {
    title: "24VなのにNB-60を選ぶ",
    body: "NB-40 / 50 / 60は12V専用です。24VならNB-120 / 200を確認します。",
  },
  {
    title: "セルスタートAだけを見る",
    body: "重要なのは電圧 → Ah → 充電電流 → セルスタートの順です。",
  },
  {
    title: "全自動だと思う",
    body: "NBシリーズは過充電防止回路を持つ全自動型ではありません。",
  },
  {
    title: "屋外でそのまま使う",
    body: "屋内型です。雨天や濡れた場所では使わないでください。",
  },
] as const;

const faqs = [
  {
    q: "スーパーブースターとは何ですか？",
    a: "日動工業のNBシリーズとして流通している、急速充電とセルスタート機能を持つバッテリー充電器です。現在の日動公式では「急速充電器 セルスターター付」として掲載されています。",
  },
  {
    q: "NB-40とNB-50の違いは？",
    a: "NB-40は12V・26～60Ah・連続6A・セルスタート40A。NB-50は12V・26～80Ah・連続10A・セルスタート50Aです。",
  },
  {
    q: "NB-50とNB-60の違いは？",
    a: "対応電圧と容量は同じ12V・26～80Ahですが、NB-60は連続12A、セルスタート60A、12時間タイマーを備えます。NB-50は10A・50A・タイマーなしです。",
  },
  {
    q: "24Vバッテリーに使えるスーパーブースターは？",
    a: "今回の掲載機種ではNB-120とNB-200です。NB-40 / 50 / 60は12V専用です。",
  },
  {
    q: "大型農機ならNB-120とNB-200のどちらですか？",
    a: "35～120AhならNB-120が候補です。50～200Ahの大容量、200Aセルスタート、10tトラック・重機クラスまで想定するならNB-200が候補になります。実際の搭載バッテリー仕様を確認してください。",
  },
  {
    q: "セルスタートとは何ですか？",
    a: "弱ったバッテリーでエンジン始動が難しいときに、大電流を供給してセルモーターの始動を補助する機能です。NBシリーズでは各モデルともセルスタートは10秒MAXです。",
  },
  {
    q: "スーパーブースターはジャンプスターターですか？",
    a: "一般的なポータブルジャンプスターターとは異なります。NBシリーズはAC100V電源を使用するバッテリー急速充電器で、セルスタート機能を持ちます。",
  },
  {
    q: "スーパーブースターは全自動充電器ですか？",
    a: "NBシリーズは過充電防止回路を搭載した全自動型ではありません。日動工業にはANBシリーズなど別の自動充電器があります。",
  },
  {
    q: "密閉型バッテリーへ使えますか？",
    a: "日動公式は、密閉型バッテリーへの充電では過充電にならないよう充電電流へ注意するよう案内しています。具体的な適合はバッテリーメーカー仕様と取扱説明書を確認してください。",
  },
  {
    q: "NB-40の商品ページが2つありますが別モデルですか？",
    a: "どちらもNB-40です。記事では1モデルとして扱います。",
  },
] as const;

const relatedArticles = [
  {
    href: "/articles/power-tool-voltage-drop-portable-transformer-guide",
    label: "電動工具の電圧降下対策｜200V→100VとTPT-30BDの使い方",
  },
  {
    href: "/articles/asco-chikudenmaru-kps-0202-complete-guide",
    label: "アスコの蓄電丸 KPS-0202徹底解説",
  },
  {
    href: "/articles/portable-power-solar-charging-worksite-guide",
    label: "屋外現場でポータブル電源を長く使うには？",
  },
  {
    href: "/articles/construction-portable-power-selection",
    label: "工事現場のポータブル電源の選び方",
  },
] as const;

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: H1,
    description: DESCRIPTION,
    type: "article",
    url: CANONICAL,
    siteName: "作業用品ナビ",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    images: [
      {
        url: `${SITE_URL}${IMG("super-booster-battery-charger-workshop.webp")}`,
        width: 1600,
        height: 900,
        alt: "農機や車両のバッテリーを急速充電器で整備するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: DESCRIPTION,
    images: [
      `${SITE_URL}${IMG("super-booster-battery-charger-workshop.webp")}`,
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("super-booster-battery-charger-workshop.webp")}`],
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
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
    { "@type": "Thing", name: "スーパーブースター" },
    { "@type": "Thing", name: "日動工業 NBシリーズ" },
    { "@type": "Thing", name: "急速充電器 セルスターター付" },
  ],
  keywords: [
    "スーパーブースター",
    "日動 スーパーブースター",
    "NB-40",
    "NB-50",
    "NB-60",
    "NB-120",
    "NB-200",
    "セルスタート",
    "農機 バッテリー 充電器",
  ].join(", "),
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
      <figcaption className="border-t border-gray-200 bg-white px-4 py-3 text-sm leading-6 text-gray-900">
        {alt}
      </figcaption>
    </figure>
  );
}

function PrimaryCta({ href, label }: { href: string; label: string }) {
  return (
    <ExtLink
      href={href}
      className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-amber-600 px-5 py-3 text-center text-[15px] font-extrabold text-white transition hover:bg-amber-700 sm:w-auto"
    >
      {label}
    </ExtLink>
  );
}

function ProductTableCell({ product }: { product: Model }) {
  return (
    <ExtLink
      href={product.listingUrl}
      className="group flex min-w-[16rem] items-start gap-3 rounded-lg p-1 no-underline transition hover:bg-gray-50"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <Image
          src={product.image}
          alt={`日動工業 ${product.model}の商品画像`}
          fill
          sizes="80px"
          className="object-contain p-1.5 transition group-hover:scale-105"
        />
      </span>
      <span className="min-w-0 space-y-1">
        <span className="block text-sm font-bold leading-snug text-gray-900 underline decoration-2 underline-offset-4">
          {product.model}
        </span>
        <span className="block text-xs font-bold text-gray-800">
          {product.specs.target}
        </span>
      </span>
    </ExtLink>
  );
}

function ModelCard({
  model,
  badge,
  points,
  priority = false,
}: {
  model: string;
  badge: string;
  points: string[];
  priority?: boolean;
}) {
  const product = byModel[model];
  const s = product.specs;
  return (
    <article className="my-8 overflow-hidden rounded-2xl border-2 border-gray-300 bg-white">
      <div className="grid md:grid-cols-[220px_1fr]">
        <div className="relative aspect-square bg-gray-50 md:aspect-auto md:min-h-[220px]">
          <Image
            src={product.image}
            alt={`日動工業 ${product.model}の商品画像`}
            fill
            priority={priority}
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 220px"
          />
        </div>
        <div className="flex flex-col justify-center p-6">
          <span className="inline-flex w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-950">
            {badge}
          </span>
          <h3 className="mt-3 text-2xl font-black text-gray-900 sm:text-3xl">
            {product.model}
          </h3>
          <p className="mt-2 text-[15px] leading-7 text-gray-900">
            <Mark>{s.voltage}</Mark> / 適合
            <Mark>{s.battery}</Mark> / 連続
            <Mark>{s.continuousCharge}</Mark> / セルスタート
            <Mark>{s.cellStart}</Mark> / タイマー
            <Mark>{s.timer}</Mark> / 質量
            <Mark>{s.weight}</Mark>
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-7 text-gray-900">
            {points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="mt-5">
            <PrimaryCta
              href={product.listingUrl}
              label={`${product.model}の商品ページを見る`}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function FinalCtaBlock() {
  return (
    <section className="my-12 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 md:p-8">
      <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
        スーパーブースターを12V/24V・Ah・セルスタートで比較する
      </h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-900">
        普通車・小型農機ならNB-40 / 50 /
        60。大型農機・大型車の12V/24VならNB-120。50～200Ahや10tトラック・重機クラスならNB-200。必要スペックから型式を絞ってください。
      </p>
      <div className="mt-5">
        <PrimaryCta href={mainCta.url} label={`${mainCta.label}を見る`} />
      </div>
      <h3 className="mt-8 text-xl font-black text-gray-900">関連用品</h3>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {secondaryCtas.map((cta) => (
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

export default function Page() {
  const nb40Alt = byModel["NB-40"].alternateListing;

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
            <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-950">
              車両・農機整備 / バッテリー充電 / 2026年9月3日更新
            </div>
            <h1 className={cls.h1}>{H1}</h1>
            <P>
              農機や作業車をしばらく動かしていなかったら、バッテリーが弱ってエンジンがかからない。整備工場で保管中のバッテリーを充電したいが、いざというときはエンジン始動の補助もできる機器がほしい。
            </P>
            <P>
              こうした用途で使われているのが、日動工業の急速充電器
              <Mark>「スーパーブースター」</Mark>です。
            </P>
            <P>
              流通やオレンジブックでは
              <strong>スーパーブースター40・50・60・120・200</strong>
              という名称で販売されています。一方、2026年現在の日動工業公式サイトではシリーズ全体を「急速充電器
              セルスターター付」として掲載しています。つまり、現在「スーパーブースター」で探している場合も、基本的には日動工業のNBシリーズを指していると考えてよいでしょう。
            </P>
            <P>
              この記事では、<Mark>NB-40 / NB-50 / NB-60 / NB-120 / NB-200</Mark>
              の5モデルについて、12V/24V、適合バッテリー容量、充電電流、セルスタート電流、タイマー、重量から選び方を整理します。
            </P>
            <Figure
              src={IMG("super-booster-battery-charger-workshop.webp")}
              alt="農機や車両のバッテリーを急速充電器で整備するイメージ"
              priority
            />
          </header>

          <section className="mt-8 rounded-2xl border-y-4 border-emerald-700 bg-emerald-50 p-6 md:p-8">
            <H2 id="quick-answer">30秒で結論｜スーパーブースターは3つの数字で選ぶ</H2>
            <P>
              最初に見るべきなのは型番の数字ではありません。次の3項目です。
            </P>
            <div className="my-6 grid gap-4 md:grid-cols-3">
              {threeNumbers.map((item) => (
                <div
                  key={item.n}
                  className="rounded-xl border-2 border-emerald-300 bg-white p-5"
                >
                  <p className="text-sm font-bold text-emerald-800">{item.n}</p>
                  <h3 className="mt-1 text-lg font-black text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-7 text-gray-900">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <P>
              大まかな選び方は、
              <Mark>普通乗用車・小型農機の12V → NB-40 / 50 / 60</Mark>、
              <Mark>大型車・大型農機で12V/24V → NB-120</Mark>、
              <Mark>さらに大容量・10tトラック・重機 → NB-200</Mark>
              です。
            </P>
            <div className="mt-5">
              <PrimaryCta
                href={mainCta.url}
                label="スーパーブースター一覧を見る"
              />
            </div>
          </section>

          <H2 id="what-is">スーパーブースターとは？</H2>
          <P>
            スーパーブースターは、日動工業の
            <Mark>急速充電器＋セルスタート機能</Mark>
            を持つNBシリーズです。AC100V電源を使い、車両・農機などの鉛バッテリーを充電します。そしてバッテリー上がりなどでエンジンを始動しにくいときに、短時間の大電流を供給してセルモーターの始動を補助する機能を持っています。
          </P>
          <H3>充電器とセルスタートを1台で</H3>
          <P>
            家庭向けの小型充電器は「ゆっくり充電する」ことを中心に設計されたものが多い一方、NBシリーズは
            <Mark>保管バッテリーの充電＋緊急時のセルスタート</Mark>
            を1台で行えることが特徴です。日動工業公式も、普通乗用車・農機・大型車などの充電とセルスタート用途を明記しています。
          </P>

          <aside className="my-8 rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
            <h3 className="text-xl font-black text-gray-900">
              全自動充電器ではありません
            </h3>
            <p className="mt-3 text-[16px] leading-8 text-gray-900">
              日動工業はNBシリーズについて
              <Mark>過充電防止回路を搭載していない</Mark>
              と案内しています。急速充電・セルスタートを重視した製品であり、長期放置の維持充電用として扱わないことが重要です。
            </p>
          </aside>

          <H2 id="comparison-table">NB-40・NB-50・NB-60・NB-120・NB-200比較表</H2>
          <Figure
            src={IMG("battery-charger-selection-voltage-capacity.webp")}
            alt="12V・24Vとバッテリー容量から急速充電器を選ぶイメージ"
          />
          <div className="my-6 overflow-x-auto">
            <table className={cls.table}>
              <caption className="mb-3 text-left text-base font-bold text-gray-900">
                スーパーブースター5モデル早見表
              </caption>
              <thead>
                <tr>
                  <th className={cls.th}>型式</th>
                  <th className={cls.th}>電圧</th>
                  <th className={cls.th}>適合容量</th>
                  <th className={cls.th}>連続充電</th>
                  <th className={cls.th}>最大充電</th>
                  <th className={cls.th}>セルスタート</th>
                  <th className={cls.th}>タイマー</th>
                  <th className={cls.th}>質量</th>
                  <th className={cls.th}>商品</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => {
                  const product = byModel[row.model];
                  return (
                    <tr key={row.model}>
                      <th className={cls.th}>{row.model}</th>
                      <td className={cls.td}>{row.voltage}</td>
                      <td className={cls.td}>{row.battery}</td>
                      <td className={cls.td}>{row.continuous}</td>
                      <td className={cls.td}>{row.maxCharge}</td>
                      <td className={cls.td}>
                        <Mark>{row.cell}</Mark>
                      </td>
                      <td className={cls.td}>{row.timer}</td>
                      <td className={cls.td}>{row.weight}</td>
                      <td className={cls.td}>
                        <ProductTableCell product={product} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-sm leading-6 text-gray-900">
            ※NB-120 / NB-200の充電電流は12V / 24Vの順です。セルスタートはいずれも
            <Mark>10秒MAX</Mark>です。
          </p>

          <H2 id="nb40">NB-40｜小型農機・普通車で26～60Ahなら最小クラス</H2>
          <ModelCard
            model="NB-40"
            badge="12V / 26～60Ah / 4.5kg"
            points={[
              "12Vだけでよい",
              "60Ah以下が中心",
              "持ち運びやすさを優先",
              "強力な大型機までは必要ない",
            ]}
            priority
          />
          <P>
            日動工業は普通乗用車・小型農機などの充電、緊急始動を用途として挙げています。NB-40はCRECOTE内に2つの商品ページがありますが、どちらも同じNB-40です。別機種として比較する必要はありません。
          </P>
          {nb40Alt && (
            <P>
              別掲載ページ：
              <ExtLink
                href={nb40Alt.url}
                className="font-bold underline underline-offset-4"
              >
                NB-40（別URL）を見る
              </ExtLink>
            </P>
          )}

          <H2 id="nb50">NB-50｜12V・26～80Ahへ広げたい標準候補</H2>
          <ModelCard
            model="NB-50"
            badge="12V / 26～80Ah / 連続10A"
            points={[
              "NB-40より対応容量と充電電流が一段上",
              "普通乗用車や小型農機を複数扱う",
              "60Ahを超えるバッテリーも想定",
              "タイマー不要なら候補",
            ]}
          />

          <H2 id="nb60">NB-60｜NB-50より充電力・セルスタート・タイマーを重視</H2>
          <ModelCard
            model="NB-60"
            badge="12V / 26～80Ah / タイマー12時間"
            points={[
              "連続充電 10A → 12A",
              "セルスタート 50A → 60A",
              "タイマーなし → 12時間タイマーあり",
              "重量差は約0.2kg",
            ]}
          />
          <P>
            NB-50とNB-60は、どちらも12V・26～80Ah対応なので特に迷いやすい組み合わせです。
            <Mark>
              同じ26～80Ahを扱うが、充電能力・始動補助・タイマーを一段上げたい
            </Mark>
            ならNB-60が選びやすいでしょう。
          </P>

          <H2 id="nb120">NB-120｜大型農機・大型車で12V/24Vを扱うなら</H2>
          <Figure
            src={IMG("large-agricultural-machine-battery-service.webp")}
            alt="大型農機の12V・24Vバッテリーを整備するイメージ"
          />
          <ModelCard
            model="NB-120"
            badge="12/24V / 35～120Ah / 120A"
            points={[
              "大型農機を扱う",
              "24Vバッテリーを充電したい",
              "120Ahまで必要",
              "NB-200ほどの大容量までは不要",
            ]}
          />
          <P>
            日動公式では大型ガソリン車・大型農機、オレンジブックでは大型車・大型農機の始動用途が示されています。
          </P>

          <H2 id="nb200">NB-200｜50～200Ah・200Aセルスタートの大型モデル</H2>
          <Figure
            src={IMG("heavy-truck-battery-charger-service.webp")}
            alt="大型トラックや重機の大容量バッテリーを充電するイメージ"
          />
          <ModelCard
            model="NB-200"
            badge="12/24V / 50～200Ah / 200A"
            points={[
              "大型トラック・重機・大型農機",
              "24Vの大容量バッテリー",
              "120Ahを超えるバッテリー",
              "200Aクラスのセルスタートが必要な現場",
            ]}
          />
          <P>
            オレンジブックでは、始動用途として
            <Mark>10tトラック・重機</Mark>
            が示されています。ただし重量は21.7kg。「最大モデルだから安心」という理由だけで選ぶのではなく、実際のバッテリー容量・車両条件に合わせることが重要です。
          </P>
          <div className="my-6">
            <PrimaryCta
              href={mainCta.url}
              label="スーパーブースター一覧から比較する"
            />
          </div>

          <H2 id="agriculture">農機のバッテリー充電ならどれを選ぶ？</H2>
          <Figure
            src={IMG("small-farm-machine-battery-charging.webp")}
            alt="小型農機の12Vバッテリーを整備するイメージ"
          />
          <P>
            農機と一言でいっても、小型管理機から大型トラクター・コンバインまで条件が違います。
          </P>
          <H3>普通乗用車・小型農機</H3>
          <P>
            日動公式では、NB-40 / NB-50 /
            NB-60を普通乗用車・小型農機向けとして案内しています。
            <Mark>26～60Ah</Mark>ならNB-40、
            <Mark>60Ah超～80Ah</Mark>ならNB-50 /
            NB-60。充電能力とタイマーも重視するならNB-60です。
          </P>
          <H3>大型農機</H3>
          <P>
            大型農機で24Vが必要なら、NB-120またはNB-200へ移ります。
            <Mark>35～120Ah</Mark>ならNB-120、
            <Mark>50～200Ahの大容量</Mark>
            ならNB-200。ここでは「農機の大きさ」だけでなく、
            <Mark>実際に搭載されているバッテリーの電圧とAh</Mark>
            を確認することが最優先です。
          </P>
          <H3>長期間使わない農機のバッテリー</H3>
          <P>
            農機は季節によって長期間使用しない場合があります。そのため「エンジンがかからなくなってから対処」だけでなく、保管バッテリーの定期充電という用途もあります。ただしNBシリーズは
            <Mark>
              過充電防止回路を搭載した全自動充電器ではありません。
            </Mark>
            長期接続して維持充電する製品として扱わないでください。
          </P>

          <H2 id="truck-heavy">トラック・重機の24VならNB-120とNB-200を比較</H2>
          <P>
            24V車両・機械を扱う場合はNB-40 / 50 /
            60は対象外です。NB-120とNB-200を比べます。
          </P>
          <div className="my-6 overflow-x-auto">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>比較</th>
                  <th className={cls.th}>NB-120</th>
                  <th className={cls.th}>NB-200</th>
                </tr>
              </thead>
              <tbody>
                {nb120vs200.map(([label, a, b]) => (
                  <tr key={label}>
                    <th className={cls.th}>{label}</th>
                    <td className={cls.td}>{a}</td>
                    <td className={cls.td}>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50 p-5">
              <h3 className="text-lg font-black text-gray-900">
                NB-120で足りるケース
              </h3>
              <p className="mt-2 text-[15px] leading-7 text-gray-900">
                120Ah以内で、120Aセルスタートで用途を満たす大型農機・車両。
              </p>
            </div>
            <div className="rounded-xl border-2 border-amber-300 bg-amber-50 p-5">
              <h3 className="text-lg font-black text-gray-900">
                NB-200を検討するケース
              </h3>
              <p className="mt-2 text-[15px] leading-7 text-gray-900">
                120Ahを超える大容量や、重機・10tトラックなど、より高い充電・セルスタート能力が必要な場合。
              </p>
            </div>
          </div>

          <H2 id="cell-start">セルスタートとは？</H2>
          <Figure
            src={IMG("battery-cell-start-assist-concept.webp")}
            alt="バッテリー上がり時のセルスタート補助を示す整備イメージ"
          />
          <P>
            セルスタートは、バッテリーが弱ってエンジン始動が困難なときに、充電器側から大電流を供給してセルモーターの始動を補助する機能です。
          </P>
          <H3>ジャンプスターターとの違い</H3>
          <P>
            ポータブル型のジャンプスターターは、本体内部のバッテリーから始動補助電力を供給します。一方、日動NBシリーズは
            <Mark>AC100V電源を使う急速充電器</Mark>
            です。したがって、整備工場・車庫・農機倉庫・工場・屋内の整備スペースなど、100V電源を確保できる場所で使う製品です。
          </P>
          <H3>セルスタートは10秒MAX</H3>
          <P>
            日動公式では各NBシリーズのセルスタート電流を
            <Mark>10秒MAX</Mark>
            として表記しています。長時間セルモーターを回し続ける使い方はしません。
          </P>
          <H3>必ず始動できるわけではない</H3>
          <P>
            オレンジブックも、バッテリーの状態によってはセルスタートできない場合があると注意しています。NB-200では、状態によって約10分の予備充電が必要になる場合もあると案内されています。そのため、
            <Mark>200Aなら必ず一発始動</Mark>
            とは考えないでください。
          </P>

          <H2 id="rapid-vs-auto">
            スーパーブースターと全自動バッテリー充電器は何が違う？
          </H2>
          <Figure
            src={IMG("rapid-vs-automatic-battery-charger.webp")}
            alt="急速充電器と全自動バッテリー充電器の用途の違いを示すイメージ"
          />
          <P>
            購入前に非常に重要なのがここです。日動工業はNBシリーズの公式ページで、
            <Mark>過充電防止回路を搭載していない</Mark>
            と明記しています。
          </P>
          <div className="my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border-2 border-gray-300 bg-white p-5">
              <h3 className="text-lg font-black text-gray-900">
                NBスーパーブースター
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-7 text-gray-900">
                <li>急速充電・高い充電電流</li>
                <li>セルスタート</li>
                <li>整備現場・バッテリー上がり対応</li>
                <li>充電状態を手動で確認する前提</li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-gray-300 bg-white p-5">
              <h3 className="text-lg font-black text-gray-900">全自動充電器</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-7 text-gray-900">
                <li>充電状態を自動監視</li>
                <li>過充電防止リミッター</li>
                <li>例：日動ANB-1224Sなど別シリーズ</li>
                <li>バッテリー状態の自動管理向け</li>
              </ul>
            </div>
          </div>
          <P>
            「とにかく始動力のある業務用急速充電器」が必要なのか、「バッテリー状態を自動管理したい」のかで選ぶカテゴリが変わります。
          </P>
          <H3>密閉型バッテリーは特に注意</H3>
          <P>
            日動公式はNBシリーズについて、密閉型バッテリーを充電する場合、過充電にならないよう充電電流へ注意するよう案内しています。AGM・VRLA・アイドリングストップ車用など、バッテリー種類は多様です。本記事だけで適合を断定せず、
            <Mark>
              充電するバッテリーのメーカー仕様とNBシリーズの取扱説明書を照合
            </Mark>
            してください。
          </P>

          <H2 id="nb50-vs-nb60">NB-50とNB-60で迷ったら？</H2>
          <div className="my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border-2 border-gray-300 bg-white p-5">
              <h3 className="text-lg font-black text-gray-900">NB-50でよい人</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-7 text-gray-900">
                <li>10A連続充電で足りる</li>
                <li>50Aセルスタートで足りる</li>
                <li>タイマー不要</li>
                <li>初期コストを抑えたい</li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50 p-5">
              <h3 className="text-lg font-black text-gray-900">NB-60が向く人</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-7 text-gray-900">
                <li>12A連続充電</li>
                <li>60Aセルスタート</li>
                <li>12時間タイマー</li>
                <li>約0.2kgの重量差より性能を優先</li>
              </ul>
            </div>
          </div>

          <H2 id="nb120-vs-nb200">NB-120とNB-200で迷ったら？</H2>
          <P>
            判断軸はかなり明確です。
            <Mark>バッテリー容量が120Ah以内か、200Ahまで必要か</Mark>
            を最初に見てください。重量差も約10kgあるため、持ち運び頻度が高い現場では無視できません。
          </P>

          <H2 id="checklist">スーパーブースター使用前に確認したい7項目</H2>
          <ul className="my-6 grid gap-2 sm:grid-cols-2">
            {checklist.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] leading-7 text-gray-900"
              >
                <span aria-hidden="true" className="font-bold text-emerald-700">
                  {i + 1}.
                </span>
                {item}
              </li>
            ))}
          </ul>
          <P>
            さらに、取扱説明書を確認し、バッテリー側の充電条件も照合します。
          </P>

          <H2 id="safety">安全に使うための注意</H2>
          <aside className="my-8 rounded-2xl border-2 border-red-300 bg-red-50 p-6">
            <h3 className="text-xl font-black text-gray-900">必須の安全確認</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] leading-8 text-gray-900">
              <li>
                <Mark>屋内型</Mark>
                です。雨天や濡れた場所で使用しないでください。換気された乾燥した場所で使います。
              </li>
              <li>
                鉛バッテリーの充電ではガスが発生する場合があります。
                <Mark>火気・火花のない場所</Mark>で使用します。
              </li>
              <li>
                <Mark>電圧を間違えない</Mark>
                こと。12Vバッテリーへ24V設定で接続するような誤使用は避けます。
              </li>
              <li>
                クリップ接続の極性は、製品取扱説明書と車両・バッテリーの指示に従います。本記事では接続手順の詳細は扱いません。
              </li>
              <li>
                特にタイマーのないNB-40 / NB-50 /
                NB-120は、充電状態を確認せず放置しないことが重要です。タイマー付きモデルでも、過充電防止を自動制御する全自動充電器とは異なります。
              </li>
              <li>
                セルスタートは<Mark>10秒MAX</Mark>
                。始動成功を保証するものではありません。
              </li>
            </ul>
          </aside>

          <H2 id="mistakes">よくある選定ミス</H2>
          <div className="my-6 grid gap-4 sm:grid-cols-2">
            {mistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border-2 border-red-200 bg-red-50 p-5"
              >
                <h3 className="text-lg font-black text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-gray-900">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <H2 id="faq">よくある質問</H2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className={cls.faqQ}>{faq.q}</h3>
                <p className={cls.bodySm}>{faq.a}</p>
              </div>
            ))}
          </div>

          <H2 id="summary">
            まとめ｜スーパーブースターは「数字の大きさ」ではなく12V/24V・Ah・セルスタートで選ぶ
          </H2>
          <Figure
            src={IMG("heavy-battery-charger-workshop-transport.webp")}
            alt="大型急速充電器と整備工具を台車で運ぶイメージ"
          />
          <P>
            日動工業のスーパーブースターを選ぶとき、最初から「NB-60かNB-120か」と型番で考える必要はありません。順番は、
            <Mark>
              1. 12Vか24Vか → 2. バッテリーは何Ahか → 3.
              どれくらいのセルスタート電流が必要か → 4. タイマーは必要か → 5.
              重量・持ち運びを許容できるか
            </Mark>
            です。
          </P>
          <P>
            普通車・小型農機の12VならNB-40 / 50 /
            60。大型農機・大型車の12V/24VならNB-120。50～200Ah、10tトラック・重機クラスまで想定するならNB-200。このように用途から絞れば、必要以上に大きなモデルを選ばずに済みます。
          </P>
          <P>
            またNBシリーズは、急速充電・セルスタートに強い一方で、過充電防止回路を持つ全自動充電器ではありません。
            <Mark>
              「始動力と急速充電を優先する業務用充電器が必要なのか」
            </Mark>
            を確認してから選んでください。
          </P>

          <FinalCtaBlock />

          <section className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-black text-gray-900">関連記事</h2>
            <ul className="mt-4 space-y-3">
              {relatedArticles.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="text-[16px] font-bold text-gray-900 underline underline-offset-4 hover:text-amber-700"
                  >
                    {a.label}
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
