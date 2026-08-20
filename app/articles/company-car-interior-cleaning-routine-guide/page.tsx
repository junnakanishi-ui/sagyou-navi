import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const SLUG = "company-car-interior-cleaning-routine-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const SEO_TITLE =
  "社用車の車内清掃｜営業車・作業車を短時間で掃除するルールと道具【2026年】";
const H1 =
  "社用車の車内清掃を短時間で続けるには？営業車・作業車の砂・ホコリ対策と掃除ルール【2026年版】";
const SHORT_TITLE = "社用車の車内清掃";
const DESCRIPTION =
  "社用車・営業車・作業車の車内清掃を短時間で続ける方法を解説。利用後1〜3分のリセット、週次・月次の清掃範囲、砂・土・シート隙間の掃除、各車両に常備する小型掃除機の選び方まで法人向けに整理します。";
const PUBLISHED = "2026-08-20";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const ctas = productData.ctas;

type ComparisonProduct = (typeof productData.comparisonProducts)[number];

const cleaningLevels = [
  {
    title: "利用後1〜3分のリセット",
    image: "company-car-three-minute-reset.webp",
    imageAlt: "社用車利用後にゴミ・砂・備品を短時間で整えるイメージ",
    purpose: "今日増えた汚れを今日のうちに減らす",
    items: [
      "飲み物の容器・包装・紙くずを持ち帰る",
      "目立つ砂や土だけ吸う",
      "シートに落ちた食べこぼしを吸う",
      "業務で使った書類・備品を戻す",
      "次の人がすぐ乗れる状態にする",
    ],
  },
  {
    title: "週次の標準清掃",
    image: "company-fleet-weekly-cleaning-routine.webp",
    imageAlt: "複数の社用車を週次で順番に清掃・確認するイメージ",
    purpose: "足元・隙間・荷室を業務の流れに組み込む",
    items: [
      "フロアマット",
      "運転席・助手席の足元",
      "シートとセンターコンソールの隙間",
      "ドリンクホルダー",
      "後部座席",
      "荷室・トランク",
    ],
  },
  {
    title: "月次の車両リセット",
    image: "compact-vacuum-storage-company-car.webp",
    imageAlt: "社用車の収納に小型掃除機と清掃用品を整理して常備するイメージ",
    purpose: "見落としやすい箇所と清掃道具をまとめて点検",
    items: [
      "シート下",
      "内窓",
      "ダッシュボード",
      "ドアポケット",
      "荷室の不要物",
      "車載備品の不足",
      "掃除機のダストボックス",
      "フィルターの汚れ",
      "充電状態",
    ],
  },
  {
    title: "専門清掃へ切り替える",
    image: "company-car-deep-cleaning-handoff.webp",
    imageAlt: "日常掃除では対応しにくいシート汚れを確認し専門清掃を検討するイメージ",
    purpose: "日常清掃の限界を超えた汚れは無理に小型掃除機で処理しない",
    items: [
      "シートへ染み込んだ汚れ",
      "強い臭い",
      "大量の水濡れ",
      "衛生面への配慮が必要な汚れ",
      "カビが疑われる状態",
      "長期間放置された汚れ",
    ],
  },
] as const;

const dirtySpots = [
  {
    title: "運転席の足元",
    body: "現場帰りの砂・土が入りやすい場所。目立つ砂を早めに吸うだけでも次回の清掃負担が変わります。",
  },
  {
    title: "フロアマット",
    body: "汚れの量が多い時は、最初から掃除機だけで処理せず車外で砂を落とします。",
  },
  {
    title: "シートレール・シート隙間",
    body: "紙片、砂、お菓子のくずなどが入り込みやすく、細いノズルの有無が効きます。",
  },
  {
    title: "ドリンクホルダー・センターコンソール",
    body: "ブラシノズルや細いノズルがあると掃除しやすい場所です。",
  },
  {
    title: "後部座席",
    body: "複数人で乗る車、来客を乗せる車は週次清掃の対象へ入れます。",
  },
  {
    title: "荷室・トランク",
    body: "作業車・軽バンでは段ボール片、梱包材、砂、現場から持ち込んだ細かなゴミが残りやすくなります。",
  },
] as const;

const sharedVsDedicated = [
  ["車両1〜2台・駐車場所が事務所横", "共用1台でも運用しやすい"],
  ["車両が複数・駐車場所が分散", "各車両またはグループごとに常備を検討"],
  ["現場直行直帰が多い", "小型コードレスを車載しやすい"],
  ["大量の砂・広い荷室", "小型常備＋共用業務用を併用"],
  ["複数台まとめて清掃", "容量・連続運転を重視した共用機も候補"],
] as const;

const mistakes = [
  "月末にまとめて掃除しようとする",
  "清掃担当を「気づいた人」にする",
  "大きな共用掃除機だけ用意する",
  "フロアマットの大量の砂をそのまま小型掃除機で吸う",
  "フィルター・ダストボックスを確認しない",
  "充電式掃除機を高温の車内へ放置する",
  "液体非対応機で液体を吸おうとする",
  "シミ・臭い・水濡れまで小型掃除機で解決しようとする",
] as const;

const checkItems = [
  "利用後にゴミを持ち帰るルールがある",
  "利用後・週次・月次で清掃範囲を分けた",
  "清掃担当または確認者が明確",
  "フロアマットは車外で砂を落とす",
  "シート隙間用ノズルがある",
  "車内常備する掃除機の収納場所を決めた",
  "充電タイミングを決めた",
  "ダストボックスを定期的に空にする",
  "フィルター清掃・交換を確認する",
  "バッテリー製品の保管条件を確認した（高温車内放置を避ける）",
  "液体吸引の可否を確認した（非対応機では液体を吸わない）",
  "荷室・トランクも清掃対象にした",
  "シミ・臭い・水濡れは専門清掃へ切り替える基準がある",
  "共有車でも清掃が属人化していない",
] as const;

const faqs = [
  {
    q: "社用車の車内清掃はどれくらいの頻度がよいですか？",
    a: "車両の利用頻度や現場環境によって異なります。この記事では「利用後の軽いリセット」「週次の標準清掃」「月次の確認」に分ける運用例を紹介しています。",
  },
  {
    q: "社用車は誰が掃除するべきですか？",
    a: "決まった正解はありません。利用後のゴミは利用者、週次は当番、月次は車両管理担当など、作業範囲で分ける方法があります。避けたいのは「誰かがやる」という状態です。",
  },
  {
    q: "小型掃除機は各車両に1台必要ですか？",
    a: "必須ではありません。倉庫や事務所からすぐ掃除機を持ってこられるなら共用でも運用できます。一方、取りに行く手間が清掃を止めているなら車内常備する価値があります。",
  },
  {
    q: "Q8は大量の砂や泥にも向きますか？",
    a: "日常の軽い車内清掃として使う位置づけが適しています。大量の砂は先にマットを車外で払う、広い荷室は大きな掃除機を使うなど、汚れの量に合わせて使い分けます。",
  },
  {
    q: "コードレスと12V式はどちらがよいですか？",
    a: "日常の取り回しや車外・事務所でも使いたいならコードレス。車内専用で長く使い、バッテリー残量を気にしたくない場合は12Vシガーソケット式も候補です。",
  },
] as const;

const relatedArticles = [
  {
    href: "/articles/truck-bed-rain-protection-storage-sheet-guide",
    label: "トラック荷台の雨対策｜工具・資材を濡らさないアルミBOXとトラックシート",
  },
  {
    href: "/articles/commercial-cart-selection-guide",
    label: "業務用台車の選び方｜現場・倉庫・店舗で使い分ける",
  },
  {
    href: "/articles/trusco-steel-cart-selection-guide",
    label: "TRUSCOスチール製台車の選び方｜サイズ・耐荷重・現場別",
  },
] as const;

const tocItems = [
  { id: "key-points", label: "先に要点" },
  { id: "q8-product", label: "Q8｜車内常備の小型掃除機" },
  { id: "daily-reset", label: "日常リセットの考え方" },
  { id: "four-levels", label: "4段階清掃ルール" },
  { id: "cleaning-order", label: "ゴミ→掃除機→拭き" },
  { id: "dirty-spots", label: "汚れやすい6か所" },
  { id: "onboard-vacuum", label: "各車両常備のメリット" },
  { id: "q8-usage", label: "Q8が向く使い方" },
  { id: "selection", label: "車載クリーナーの選び方" },
  { id: "comparison", label: "用途別比較" },
  { id: "shared-vs-dedicated", label: "共用1台 vs 各車両常備" },
  { id: "mistakes", label: "よくある失敗" },
  { id: "checklist", label: "法人チェックリスト" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
] as const;

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
        url: `${SITE_URL}${IMG("company-car-interior-quick-cleaning-hero.webp")}`,
        width: 1600,
        height: 900,
        alt: "社用車の帰庫後に小型掃除機で足元を短時間清掃するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG("company-car-interior-quick-cleaning-hero.webp")}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("company-car-interior-quick-cleaning-hero.webp")}`],
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

function Table({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className={cls.table}>{children}</table>
    </div>
  );
}

function Th({ children }: { children: ReactNode }) {
  return <th className={cls.th}>{children}</th>;
}

function Td({ children }: { children: ReactNode }) {
  return <td className={cls.td}>{children}</td>;
}

function RakutenCta({
  href,
  label,
  dataCta,
  fullWidth = false,
}: {
  href: string;
  label: string;
  dataCta: string;
  fullWidth?: boolean;
}) {
  return (
    <ExtLink
      href={href}
      dataCta={dataCta}
      className={`inline-flex min-h-12 items-center justify-center rounded-xl bg-rose-700 px-5 py-3 text-center text-[15px] font-extrabold text-white transition hover:bg-rose-800 ${fullWidth ? "w-full" : ""}`}
    >
      {label}
    </ExtLink>
  );
}

function ProductTableCell({ product }: { product: ComparisonProduct }) {
  return (
    <ExtLink
      href={product.url}
      className="group flex min-w-[16rem] items-start gap-3 rounded-lg p-1 transition hover:bg-gray-50"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <Image
          src={product.img}
          alt={`${product.short}の商品画像`}
          fill
          sizes="80px"
          className="object-contain p-1.5 transition group-hover:scale-105"
        />
      </span>
      <span className="min-w-0 space-y-1">
        <span className="block text-sm font-bold leading-snug text-gray-900 underline decoration-2 underline-offset-4 group-hover:text-gray-600">
          {product.short}
        </span>
        <span className="block text-xs font-bold text-gray-500">
          型番：{product.model}
        </span>
      </span>
    </ExtLink>
  );
}

function Q8ProductCard() {
  const specs = productData.mainProduct.specs;
  return (
    <article
      id="q8-product"
      className="my-10 scroll-mt-24 overflow-hidden rounded-2xl border-2 border-gray-900 bg-white shadow-sm"
    >
      <div className="border-b border-gray-200 bg-gray-50 px-5 py-3 sm:px-6">
        <p className="text-sm font-bold text-gray-800">
          「掃除機を取りに行く」をなくしたい社用車へ
        </p>
      </div>
      <div className="grid gap-0 md:grid-cols-[280px_1fr]">
        <div className="relative min-h-[240px] bg-gray-50 md:min-h-[320px]">
          <Image
            src={productData.mainProduct.image}
            alt="Compact Vacuum Cleaner(Q8)の商品画像"
            fill
            sizes="(max-width: 768px) 100vw, 280px"
            className="object-contain p-4"
            priority
          />
        </div>
        <div className="p-5 sm:p-6">
          <h2 className="text-2xl font-black leading-snug text-gray-900 sm:text-3xl">
            Compact Vacuum Cleaner(Q8)
          </h2>
          <P>
            折り畳み式・コードレス・USB充電。使わない時に小さくまとめやすく、
            <Mark>車内へ置いて足元やシート隙間の軽いゴミをその場で掃除する</Mark>
            使い方と相性があります。業務用掃除機より「強い吸引」ではなく、
            <strong>収納しやすく、すぐ取り出せること</strong>
            が主な価値です。
          </P>

          <div className="mt-5 rounded-xl bg-gray-50 p-4">
            <p className="font-bold text-gray-900">CRECOTE楽天掲載の主な仕様</p>
            <ul className={`mt-2 ${cls.list}`}>
              <li>サイズ：{specs.size}</li>
              <li>{specs.charge}</li>
              <li>バッテリー容量：{specs.battery}</li>
              <li>ダストボックス：{specs.dustBox}</li>
              <li>重量：{specs.weight}</li>
              <li>折り畳み式・ノズル付属（白・黒・緑）</li>
            </ul>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="font-bold text-gray-900">向く汚れ</p>
              <ul className={`mt-2 ${cls.list}`}>
                <li>運転席足元の少量の砂</li>
                <li>シート隙間の紙くず</li>
                <li>ドリンクホルダー周辺</li>
                <li>後部座席・荷室の軽いゴミ</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900">向かない汚れ</p>
              <ul className={`mt-2 ${cls.list}`}>
                <li>大量の砂・小石</li>
                <li>濡れた泥</li>
                <li>液体（非対応機では吸わない）</li>
                <li>深く染み込んだ汚れ</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <RakutenCta
              href={ctas.q8}
              label="Compact Vacuum Cleaner(Q8)を見る"
              dataCta="top-q8"
            />
            <RakutenCta
              href={ctas.vacuumList}
              label="掃除機一覧を見る"
              dataCta="top-vacuum-list"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function CleaningLevelCard({
  level,
  index,
}: {
  level: (typeof cleaningLevels)[number];
  index: number;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
      <div className="border-b border-gray-200 bg-gray-900 px-5 py-4 text-white sm:px-6">
        <p className="text-sm font-bold text-gray-300">清掃レベル {index + 1}</p>
        <h3 className="mt-1 text-2xl font-black sm:text-3xl">{level.title}</h3>
        <p className="mt-2 text-[15px] leading-7 text-gray-200">{level.purpose}</p>
      </div>
      <Figure src={IMG(level.image)} alt={level.imageAlt} />
      <ul className={`px-5 pb-6 sm:px-6 ${cls.list}`}>
        {level.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function FinalCtaGrid() {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-3">
      <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className={cls.ctaH3}>Compact Vacuum Cleaner(Q8)</p>
        <p className={`mt-2 ${cls.bodySm}`}>
          折り畳み式で車内常備しやすい小型掃除機
        </p>
        <div className="mt-4">
          <RakutenCta
            href={ctas.q8}
            label="Q8の商品ページを見る"
            dataCta="bottom-q8"
            fullWidth
          />
        </div>
      </aside>
      <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className={cls.ctaH3}>掃除機一覧</p>
        <p className={`mt-2 ${cls.bodySm}`}>
          車載・業務用など用途別に候補を比較
        </p>
        <div className="mt-4">
          <RakutenCta
            href={ctas.vacuumList}
            label="掃除機一覧を見る"
            dataCta="bottom-vacuum-list"
            fullWidth
          />
        </div>
      </aside>
      <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className={cls.ctaH3}>TRUSCO掲載品</p>
        <p className={`mt-2 ${cls.bodySm}`}>
          清掃用品・作業用品をまとめて確認
        </p>
        <div className="mt-4">
          <RakutenCta
            href={ctas.trusco}
            label="トラスコ中山掲載商品一覧を見る"
            dataCta="bottom-trusco"
            fullWidth
          />
        </div>
      </aside>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[850px] px-4 pb-16 pt-10 sm:px-6">
        <JsonLd data={articleSchema} />
        <JsonLd data={breadcrumbSchema} />

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

        <p className={`${cls.meta} font-bold`}>社用車・営業車の管理</p>
        <h1 className={cls.h1}>{H1}</h1>
        <div className={`mt-4 flex flex-wrap gap-x-5 gap-y-2 ${cls.meta}`}>
          <span>執筆：作業用品ナビ編集部</span>
          <time dateTime={PUBLISHED}>公開・更新：2026年8月20日</time>
        </div>

        <Figure
          src={IMG("company-car-interior-quick-cleaning-hero.webp")}
          alt="社用車の帰庫後に小型掃除機で足元を短時間清掃するイメージ"
          priority
        />

        <nav
          aria-label="記事内目次"
          className="my-8 rounded-xl border border-gray-200 bg-gray-50 p-5"
        >
          <p className="font-bold text-gray-900">この記事の目次</p>
          <ul className="mt-3 grid gap-2 text-sm leading-7 sm:grid-cols-2">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="underline underline-offset-4">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <P>
          社用車は毎日使うのに、車内清掃は後回しになりやすい仕事です。営業先への移動に使う車、現場へ向かう軽バン、複数人で共有する車両。外装の汚れには気づいても、足元の砂や土、シートの隙間のゴミ、荷室のほこりは少しずつたまっていきます。
        </P>
        <P>
          しかも社用車の掃除は「誰がやるのか」が曖昧になりやすいものです。月末にまとめて大掃除しようとしても、忙しければ延期される。倉庫に大きな掃除機があっても、わざわざ取りに行くのが面倒で使われない。共有車では「次の人がやるだろう」となりがちです。
        </P>
        <P>
          そこで考えたいのが、
          <Mark>毎回完璧に掃除するのではなく、汚れが軽いうちに短時間で戻す仕組み</Mark>
          です。この記事では、社用車・営業車・作業車の車内を清潔に保つために、
          <strong>利用後・週次・月次・専門清掃</strong>
          の4段階に分けた運用方法と、小型掃除機を車内へ常備する考え方を整理します。
        </P>

        <section
          id="key-points"
          className="my-10 scroll-mt-24 rounded-2xl border-2 border-gray-900 bg-gray-50 p-6 sm:p-8"
        >
          <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">先に要点</h2>
          <ul className={`mt-5 ${cls.list}`}>
            <li>
              社用車の清掃は「毎回完璧」より、
              <strong>利用後・週次・月次で範囲を分けたほうが続けやすい</strong>。
            </li>
            <li>
              現場へ行く車は砂・土・小石を持ち込みやすいため、
              <strong>汚れが軽いうちに落とす</strong>。
            </li>
            <li>
              車内清掃は
              <Mark>大きなゴミを出す→掃除機→拭き掃除</Mark>
              の順にすると進めやすい。
            </li>
            <li>
              大きな掃除機を倉庫で共用するだけでなく、
              <strong>小型掃除機を車内へ常備すると「取りに行く手間」を減らせる</strong>。
            </li>
            <li>
              Q8は折り畳み式・コードレス・USB充電で、日常のちょっとした車内清掃に向く。
            </li>
            <li>
              大量の砂、濡れた泥、液体、深いシミ、強い臭いなどは、
              <strong>小型掃除機だけで解決しようとしない</strong>。
            </li>
          </ul>
        </section>

        <Q8ProductCard />

        <H2 id="daily-reset">社用車の車内清掃は「大掃除」より日常リセットを決める</H2>
        <P>
          社用車が汚れること自体は避けにくいものです。建設・設備・保守の車両なら、作業靴についた砂や土が足元へ入ります。営業車でも、紙くず、飲み物の容器、髪の毛、ほこり、食べこぼしは少しずつ増えます。
        </P>
        <P>
          問題は、汚れることより
          <Mark>軽い汚れを長期間ためてしまうこと</Mark>
          です。
        </P>

        <H3>共有車ほど「誰が掃除するか」が曖昧になる</H3>
        <P>
          1人1台で使う車なら、利用者が状態を把握しやすくなります。一方、複数人で共有する社用車では、誰が最後に掃除したか分からない、自分が汚したものではない、次の利用者がいるので時間がない、掃除道具が別の場所にある、といった理由で清掃が先送りされがちです。
        </P>
        <P>
          そこで「きれいにしておいてください」とだけ伝えるのではなく、
          <strong>いつ・誰が・どこまでやるか</strong>
          を分けます。
        </P>

        <H3>毎回完璧にしようとすると続かない</H3>
        <P>
          利用のたびに20分も30分も掃除する運用は現実的ではない会社も多いはずです。反対に「月に1回まとめてやる」だけでは、砂や紙くずが車内に長く残ります。日常清掃としっかり清掃を分けておくと、利用者の負担を抑えながら状態を保ちやすくなります。
        </P>

        <H2 id="four-levels">社用車清掃を4段階に分ける</H2>
        <P>
          ここでは法人車両の運用例として4段階に分けます。車両数、利用頻度、駐車場所、現場環境に合わせて調整してください。
        </P>
        <div className="my-8 space-y-8">
          {cleaningLevels.map((level, index) => (
            <CleaningLevelCard key={level.title} level={level} index={index} />
          ))}
        </div>
        <P>
          小型掃除機を車内へ常備する意味が最も出るのは
          <Mark>利用後1〜3分のリセット</Mark>
          です。週次・月次では範囲を広げ、専門清掃へ切り替える基準もあらかじめ決めておくと、現場の判断がぶれにくくなります。
        </P>

        <H2 id="cleaning-order">車内は「ゴミ→掃除機→拭き」の順に進める</H2>
        <P>
          社用車を短時間で掃除するには順番を決めておくと迷いが減ります。清掃用品メーカーのテラモトも、社用車の車内清掃について「ごみ捨て→掃除機→拭き掃除」の流れを紹介しています。
        </P>

        <H3>1. 先に大きなゴミ・書類・容器を出す</H3>
        <P>
          ペットボトル、空き缶、包装、紙、不要な書類、大きなゴミを先に取り除きます。
        </P>

        <Figure
          src={IMG("work-vehicle-floor-mat-sand-cleaning.webp")}
          alt="作業車のフロアマットの砂や土を車外で落としてから掃除するイメージ"
        />

        <H3>2. フロアマットは車外で砂を落とす</H3>
        <P>
          大量の砂をすべて小型掃除機で吸おうとすると、ダストボックスがすぐにいっぱいになります。可能ならマットを車外へ出し、軽く砂を落としてから残りを吸います。
        </P>

        <Figure
          src={IMG("company-car-seat-gap-vacuum-cleaning.webp")}
          alt="社用車のシートレールや狭い隙間をノズル付き掃除機で清掃するイメージ"
        />

        <H3>3. 掃除機は隙間と足元を優先する</H3>
        <P>
          シートレール、シートとコンソールの間、ペダルまわり、ドアポケット、ドリンクホルダー周辺から優先します。
        </P>

        <H3>4. 最後に拭き掃除</H3>
        <P>
          ほこりや砂を減らしてから、ダッシュボード、ハンドル周辺、ドアハンドル、センターコンソールなどを必要に応じて拭きます。
        </P>

        <H2 id="dirty-spots">営業車・作業車で汚れやすい6か所</H2>
        <div className="my-6 grid gap-4 sm:grid-cols-2">
          {dirtySpots.map((spot) => (
            <article
              key={spot.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-xl font-black text-gray-900">{spot.title}</h3>
              <p className={`mt-2 ${cls.bodySm}`}>{spot.body}</p>
            </article>
          ))}
        </div>

        <H2 id="onboard-vacuum">小型掃除機を「各車両に常備」するメリット</H2>
        <P>
          会社に立派な業務用掃除機があっても、毎日の社用車清掃に使われるとは限りません。理由は単純で、
          <Mark>取りに行くのが面倒だから</Mark>
          です。
        </P>
        <P>
          駐車場から倉庫まで移動し、掃除機を出し、電源を準備し、終わったら戻す。清掃そのものは3分なのに準備と片付けに時間がかかるなら、忙しい日は後回しになります。
        </P>
        <P>
          小型掃除機を車内に置く価値は、吸引力だけではありません。
          <strong>汚れた瞬間に取り出せること</strong>
          です。
        </P>

        <H3>車内常備で確認したいのは収納</H3>
        <ul className={cls.list}>
          <li>本体サイズ</li>
          <li>折り畳めるか</li>
          <li>グローブボックス・荷室などに置けるか</li>
          <li>ノズルをまとめて保管できるか</li>
          <li>充電ケーブルを管理しやすいか</li>
        </ul>

        <H3>すべての車両に1台必要とは限らない</H3>
        <P>
          1〜2台しかなく、駐車場のすぐ横に清掃スペースがある会社なら共用1台でも十分です。車両数が多い、複数拠点、外出頻度が高い、現場直行直帰が多い場合は、車両ごとの常備を検討する余地があります。
        </P>

        <H2 id="q8-usage">折り畳み式 Compact Vacuum Cleaner(Q8) が向く使い方</H2>
        <P>
          Q8は、折り畳んで収納しやすいコードレスの小型掃除機です。今回送客するCRECOTE楽天の商品ページでは、サイズ
          {productData.mainProduct.specs.size}、USB充電（約4時間）、
          {productData.mainProduct.specs.battery}、ダストボックス
          {productData.mainProduct.specs.dustBox}、重量
          {productData.mainProduct.specs.weight}が掲載されています。
        </P>

        <H3>Q8が向くのは「短時間の日常掃除」</H3>
        <P>
          記事でQ8を紹介する理由は、業務用掃除機より強いからではありません。
          <Mark>車内へ収納し、日常の小さな汚れへすぐ使う運用を作りやすいから</Mark>
          です。
        </P>

        <H3>Q8だけで対応しないほうがよいケース</H3>
        <ul className={cls.list}>
          <li>大量の砂・小石</li>
          <li>濡れた泥</li>
          <li>液体（非対応機では吸わない）</li>
          <li>大量のゴミ</li>
          <li>広い床面を長時間掃除</li>
          <li>深く染み込んだ汚れ</li>
        </ul>
        <P>
          こうした清掃では、より大きな車載掃除機、業務用掃除機、別の清掃方法を使い分けます。
        </P>

        <div className="my-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
          <p className="mb-2 text-sm font-bold text-gray-900">
            ⚠ 充電式掃除機の保管に注意
          </p>
          <p className={cls.bodySm}>
            Excel掲載のLB-068の商品ページでも、特に夏場の車内放置を避ける注意が明記されています。Q8も取扱説明書・販売元の保管条件を確認して運用してください。高温の車内へバッテリー製品を長時間放置しないルールを決めておくと安全です。
          </p>
        </div>

        <div className="my-6">
          <RakutenCta
            href={ctas.q8}
            label="Compact Vacuum Cleaner(Q8)の商品ページを見る"
            dataCta="mid-q8"
          />
        </div>

        <H2 id="selection">車載クリーナーは何で選ぶ？</H2>
        <H3>収納性</H3>
        <P>毎日のちょっと掃除なら最重要。どこに置くかを決めてからサイズを見ます。</P>
        <H3>コードレスか12V式か</H3>
        <P>
          コードレスは取り回しやすい。12Vシガーソケット式は充電残量を気にせず使える商品があります。
        </P>
        <H3>ダスト容量</H3>
        <P>
          小型化すると容量も小さくなります。日常の軽い掃除なら小容量でもよい一方、複数台連続清掃なら大きめが向きます。
        </P>
        <H3>ノズル</H3>
        <P>すき間ノズル、ブラシ、延長ホースで清掃範囲が変わります。</P>
        <H3>吸引＋送風</H3>
        <P>
          エアコン吹き出し口や細い隙間では「吹く」機能を使える製品もあります。
        </P>

        <H2 id="comparison">Excel掲載の車載向け掃除機を用途別に比較</H2>
        <P>
          添付Excelには18商品がありましたが、本文では社用車の日常清掃に近い車載向け代表6商品に絞っています。卓上ミニ、HEPA、業務用、屋外ブロワーは別用途のため、掃除機一覧から確認してください。
        </P>
        <Table>
          <thead>
            <tr>
              <Th>商品</Th>
              <Th>電源・特徴</Th>
              <Th>サイズ・重量の目安</Th>
              <Th>向く使い方</Th>
            </tr>
          </thead>
          <tbody>
            {productData.comparisonProducts.map((product) => (
              <tr key={product.id}>
                <Td>
                  <ProductTableCell product={product} />
                </Td>
                <Td>{product.power}</Td>
                <Td>{product.sizeWeight}</Td>
                <Td>
                  {product.id === "q8" ? (
                    <strong>{product.use}</strong>
                  ) : (
                    product.use
                  )}
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
        <p className={cls.bodySm}>※購入時は最新の商品ページを確認してください。</p>

        <H2 id="shared-vs-dedicated">「共用1台」と「各車両に常備」はどちらがよい？</H2>
        <Table>
          <thead>
            <tr>
              <Th>状況</Th>
              <Th>運用案</Th>
            </tr>
          </thead>
          <tbody>
            {sharedVsDedicated.map(([situation, plan]) => (
              <tr key={situation}>
                <Td>{situation}</Td>
                <Td>{plan}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
        <P>
          大切なのは、1台いくらかだけでなく、
          <Mark>実際に社員が取り出して使うか</Mark>
          です。
        </P>

        <H2 id="mistakes">よくある失敗</H2>
        <ul className={cls.list}>
          {mistakes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <H2 id="checklist">法人向け社用車清掃チェックリスト</H2>
        <div className="my-6 rounded-2xl border-2 border-gray-900 bg-white p-6 sm:p-8">
          <ul className="space-y-3">
            {checkItems.map((item) => (
              <li key={item} className="flex gap-3 text-[17px] leading-8 text-gray-900">
                <span
                  aria-hidden
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-gray-900"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <H2 id="faq">よくある質問</H2>
        <div className="space-y-8">
          {faqs.map((item) => (
            <section key={item.q}>
              <h3 className={cls.faqQ}>{item.q}</h3>
              <P>{item.a}</P>
            </section>
          ))}
        </div>

        <H2 id="summary">まとめ｜社用車清掃は「強い掃除機」より「使われる仕組み」を作る</H2>
        <P>
          社用車を清潔に保つために、高価で強力な掃除機を1台用意するだけでは十分とは限りません。重要なのは、いつ掃除するか、誰が掃除するか、どこまで掃除するか、掃除道具をすぐ取り出せるかを決めることです。
        </P>
        <P>
          利用後は1〜3分で今日の汚れだけ戻す。週次で足元や隙間を掃除する。月次で車内全体と清掃道具を確認する。Compact
          Vacuum Cleaner(Q8)のような折り畳み式小型掃除機は、業務用掃除機の代わりではありません。
          <Mark>汚れが軽いうちに、その場ですぐ使うための車載道具</Mark>
          として考えると役割が明確になります。
        </P>

        <section className="my-10 rounded-2xl bg-gray-900 p-7 text-white sm:p-8">
          <h2 className="text-3xl font-black sm:text-4xl">
            社用車に置ける掃除機を確認する
          </h2>
          <p className="mt-4 text-[17px] leading-8 text-gray-100">
            折り畳み式Q8から車載・業務用まで、用途に合う掃除機を比較できます。
          </p>
          <FinalCtaGrid />
        </section>

        <section className="my-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-900">関連記事</p>
          <ul className="mt-3 space-y-2 text-sm leading-7">
            {relatedArticles.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
