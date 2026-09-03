import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const SLUG = "store-flood-countermeasure-bcp-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const SEO_TITLE =
  "店舗の浸水対策｜入口・シャッターの水害対策とBCP【2026年】";
const H1 =
  "店舗の浸水対策｜入口・シャッターを守る水害対策と営業再開までの備え【2026年版】";
const SHORT_TITLE = "店舗の浸水対策と水害BCP";
const DESCRIPTION =
  "店舗の浸水対策を、平時・大雨前・浸水リスク上昇時・営業再開の4フェーズで解説。自動ドア・シャッター・通用口への止水板、吸水土のう、防水書類保管、在庫移動まで、路面店・小売店・飲食店が事前に準備したい水害対策を整理します。";
const PUBLISHED = "2026-09-03";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";
const HERO = "store-flood-preparation-entrance.webp";
const FACTORY_ARTICLE =
  "/articles/factory-warehouse-flood-entry-protection-guide";
const STOCKPILE_ARTICLE = "/articles/business-disaster-stockpile-checklist";

type FeaturedProduct = (typeof productData.featuredProducts)[number];

const byModel = Object.fromEntries(
  productData.featuredProducts.map((p) => [p.model, p])
) as Record<string, FeaturedProduct>;

const MAIN_CTA = productData.cta.main.url;
const SECONDARY_CTAS = productData.cta.secondary;

const phases = [
  {
    n: "01",
    title: "平時",
    body: "ハザード・入口・避難・止水用品を店舗ごとに決める",
  },
  {
    n: "02",
    title: "大雨前",
    body: "在庫・重要書類を移し、入口用品を準備する",
  },
  {
    n: "03",
    title: "浸水リスク上昇",
    body: "安全なうちだけ設置。閉店・避難を優先する",
  },
  {
    n: "04",
    title: "浸水後",
    body: "電気・衛生・商品状態を確認して営業再開を判断する",
  },
] as const;

const entranceRows = [
  {
    place: "正面入口・自動ドア",
    model: "004954",
    note: "初期の軽度浸水向け簡易パネル",
  },
  {
    place: "角・L字の水防ライン",
    model: "004959",
    note: "備えあれ板本体と組み合わせる",
  },
  {
    place: "指定三和製軽量シャッター",
    model: "ESEAT",
    note: "適合条件の事前確認が必須",
  },
  {
    place: "通用口・漏水補完",
    model: "QB125330",
    note: "吸水後約20kg。海水不可",
  },
  {
    place: "コンパクト土のう備蓄",
    model: "722T20",
    note: "吸水後約23kg/枚。海水不可",
  },
  {
    place: "繰り返し守る固定入口",
    model: "MZTR001",
    note: "完全止水ではない。設置適合確認",
  },
  {
    place: "重要書類保護",
    model: "2017",
    note: "試験条件内の防水・耐火性能",
  },
  {
    place: "商品・資材の応急養生",
    model: "TWP7000-3654",
    note: "止水材ではない",
  },
] as const;

const checklistItems = [
  "店舗住所の洪水・内水リスクを確認した",
  "正面入口以外の浸水経路も確認した",
  "自動ドア・シャッター・裏口の寸法を確認した",
  "店舗ごとに使用する止水用品を決めた",
  "商品・重要書類を上げる場所を決めた",
  "平時に試し設置した",
  "設置担当者を決めた",
  "閉店・避難判断者を決めた",
  "吸水後の重量と片付け方法を確認した",
  "使用後の補充ルールを決めた",
  "飲食・食品店舗は営業再開時の衛生手順を確認した",
] as const;

const mistakes = [
  {
    title: "正面入口だけ守る",
    body: "裏口や搬入口から水が入る場合があります。入口単位で役割を分けます。",
  },
  {
    title: "止水用品を防災倉庫の奥に置く",
    body: "豪雨中に取りに行く運用では遅い場合があります。入口近くへ配備します。",
  },
  {
    title: "初めて使うのが本番",
    body: "設置方法と必要人数は平時に確認します。",
  },
  {
    title: "吸水前の軽さだけを見る",
    body: "QB125330は吸水後約20kg、722T20の土No袋は約23kgになります。",
  },
  {
    title: "シャッター用製品を型式確認せず買う",
    body: "eシートは指定された三和製軽量シャッター用です。",
  },
  {
    title: "「完全防水」と思う",
    body: "簡易止水用品の多くは漏水を完全にゼロにするものではありません。",
  },
  {
    title: "閉店判断が遅れる",
    body: "人命確保を商品保護より優先します。",
  },
] as const;

const faqs = [
  {
    q: "店舗の浸水対策は何から始めればよいですか？",
    a: "最初にハザードマップと過去の冠水履歴を確認し、正面入口・シャッター・裏口など水が入りやすい場所を特定します。その後、商品・書類の避難場所、止水用品、閉店判断、避難ルートを決めます。",
  },
  {
    q: "店舗入口には止水板と吸水土のうのどちらがよいですか？",
    a: "水の流入を入口で抑えるなら止水板・パネル、漏水や複数の小さな入口を補完するなら吸水材が使いやすい場合があります。店舗条件によって併用も検討します。",
  },
  {
    q: "シャッター店舗ならeシートを使えますか？",
    a: "すべてのシャッターに使えるわけではありません。三和製の指定軽量シャッター用で、開口や床・レール等の適合条件確認が必要です。",
  },
  {
    q: "備えあれ板は店舗で使えますか？",
    a: "メーカーは商業施設、出入口、シャッター前等を用途として案内しています。ただし初期の軽度浸水向けで、平らな床など使用条件があります。津波・高潮時には設置しません。",
  },
  {
    q: "吸水土のうは普通の土のうより保管しやすいですか？",
    a: "吸水前はコンパクトな製品が多く、店舗バックヤードへ備蓄しやすい点があります。ただし使用後は20kg前後になる製品もあるため、回収・廃棄まで考えて選びます。海水に使えない製品もあります。",
  },
  {
    q: "重要書類の水害対策はどうすればよいですか？",
    a: "高い場所への移動に加え、防水性能を持つ保管用品を使う方法があります。エーコー2017はA4紙の収納に対応し、水深20cm・8時間の防水性能試験を持つ製品です。",
  },
  {
    q: "店舗が浸水した後、すぐ営業再開できますか？",
    a: "電気設備、安全、衛生、商品状態を確認してから判断します。特に食品営業施設は、浸水食品の廃棄や施設・設備の洗浄・消毒等が必要になる場合があります。",
  },
] as const;

const tocItems = [
  { id: "conclusion", label: "30秒結論：4フェーズ" },
  { id: "people-first", label: "人命・避難を優先" },
  { id: "phase1", label: "Phase1｜平時" },
  { id: "phase2", label: "Phase2｜大雨前" },
  { id: "documents", label: "重要書類保護" },
  { id: "entrance-products", label: "入口タイプ別用品" },
  { id: "phase3", label: "Phase3｜浸水リスク上昇" },
  { id: "phase4", label: "Phase4｜浸水後" },
  { id: "kit", label: "店舗水害キット" },
  { id: "checklist", label: "購入前チェックリスト" },
  { id: "mistakes", label: "よくある失敗" },
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
        url: `${SITE_URL}${IMG(HERO)}`,
        width: 1600,
        height: 900,
        alt: "大雨前に店舗入口で浸水対策を準備するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
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

function Caution({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
      <p className="mb-2 text-sm font-bold text-gray-900">⚠ {title}</p>
      <div className={`${cls.bodySm} space-y-2`}>{children}</div>
    </div>
  );
}

function Figure({
  src,
  alt,
  priority = false,
  brighten = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  brighten?: boolean;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={`object-cover${brighten ? " brightness-[1.06]" : ""}`}
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

function CtaAside({
  title,
  text,
  href,
  label,
  dataCta,
}: {
  title: string;
  text: string;
  href: string;
  label: string;
  dataCta: string;
}) {
  return (
    <aside className="my-8 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
      <p className={cls.ctaH3}>{title}</p>
      <p className={`mt-2 ${cls.bodySm}`}>{text}</p>
      <div className="mt-4">
        <RakutenCta href={href} label={label} dataCta={dataCta} />
      </div>
    </aside>
  );
}

function ProductTableCell({ product }: { product: FeaturedProduct }) {
  return (
    <ExtLink
      href={product.listingUrl}
      dataCta={`table-${product.model}`}
      className="group flex min-w-[16rem] items-start gap-3 text-gray-900 no-underline"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <Image
          src={product.image}
          alt={`${product.name}の商品画像`}
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
          型番 {product.model}
        </span>
      </span>
    </ExtLink>
  );
}

function ProductCard({ model }: { model: string }) {
  const product = byModel[model];
  if (!product) return null;

  return (
    <article className="my-8 overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
      <div className="grid gap-0 md:grid-cols-[280px_1fr]">
        <div className="relative min-h-[240px] bg-gray-50 md:min-h-[320px]">
          <Image
            src={product.image}
            alt={`${product.name}の商品画像`}
            fill
            sizes="(max-width: 768px) 100vw, 280px"
            className="object-contain p-4"
          />
        </div>
        <div className="p-5 sm:p-6">
          <p className="mb-1 text-sm font-bold text-gray-800">{product.role}</p>
          <h3 className="text-xl font-extrabold leading-snug text-gray-900 md:text-2xl">
            {product.name}
          </h3>
          <p className={`mt-3 ${cls.bodySm}`}>
            型番 <Mark>{product.model}</Mark>
          </p>

          <div className="mt-5 rounded-xl bg-gray-50 p-4">
            <p className="font-bold text-gray-900">主な仕様の目安</p>
            <ul className={`mt-2 ${cls.list}`}>
              {product.specs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <Caution title="購入前の注意">
            <p>{product.criticalNote}</p>
          </Caution>

          <ExtLink
            href={product.listingUrl}
            dataCta={`product-${product.model}`}
            className="mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-center font-bold text-white hover:bg-gray-700 sm:w-auto"
          >
            商品ページで詳細を確認する
          </ExtLink>
        </div>
      </div>
    </article>
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

        <p className={`${cls.meta} font-bold`}>水害・店舗BCP</p>
        <h1 className={cls.h1}>{H1}</h1>
        <div className={`mt-4 flex flex-wrap gap-x-5 gap-y-2 ${cls.meta}`}>
          <span>執筆：作業用品ナビ編集部</span>
          <time dateTime={PUBLISHED}>公開・更新：2026年9月3日</time>
        </div>

        <Figure
          src={IMG(HERO)}
          alt="大雨前に店舗入口で浸水対策を準備するイメージ"
          priority
        />

        <P>
          台風やゲリラ豪雨で前面道路に水がたまり、自動ドアの下から水が入ってくる。閉店前にシャッターを下ろしたものの、すき間から雨水が店内へ流れ込む。数cmの浸水でも、床に置いた段ボール在庫や電源タップ、販促物が使えなくなる。
        </P>
        <P>
          路面店・小売店・飲食店にとって、水害は「店内が少し濡れる」だけの問題ではありません。
          <Mark>
            お客様と従業員の安全、商品在庫、POS・電気設備、重要書類、営業停止期間
          </Mark>
          まで一度に影響する可能性があります。
        </P>
        <P>
          そのため店舗の浸水対策は、止水板を1枚買って終わりではなく、
          <Mark>
            平時に備える → 大雨前に商品と重要物を移す →
            安全な段階で入口を守る → 危険が迫る前に営業を止める →
            浸水後に安全確認して営業を再開する
          </Mark>
          という流れで考える必要があります。
        </P>
        <P>
          この記事では、店舗運営者向けに浸水対策を
          <strong>店舗水害4フェーズ</strong>
          で整理し、自動ドア・シャッター・通用口など場所別に使いやすい水害対策用品も紹介します。
        </P>

        <nav
          aria-label="目次"
          className="my-8 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6"
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
          className="my-8 scroll-mt-24 rounded-2xl border border-sky-200 bg-sky-50 p-5 sm:p-7"
        >
          <h2 className="text-2xl font-black leading-snug tracking-wide text-gray-900 sm:text-3xl">
            30秒で結論｜店舗の水害対策は「4フェーズ」で決める
          </h2>
          <Figure
            src={IMG("retail-flood-bcp-four-phases.webp")}
            alt="店舗の平時・大雨前・閉店・営業再開を表すイメージ"
          />
          <div className="mt-5 space-y-3">
            {phases.map((phase) => (
              <div
                key={phase.n}
                className="grid gap-2 rounded-xl bg-white p-4 sm:grid-cols-[52px_150px_1fr]"
              >
                <strong className="text-sky-800">{phase.n}</strong>
                <strong className="text-gray-900">{phase.title}</strong>
                <span className={cls.bodySm}>{phase.body}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <RakutenCta
              href={MAIN_CTA}
              label="水害対策アイテム一覧を見る"
              dataCta="hero-main-cta"
            />
          </div>
        </section>

        <H2 id="people-first">
          店舗の浸水対策で最初に守るのは「商品」ではなく人
        </H2>
        <div className="my-6 rounded-lg border-l-4 border-red-500 bg-red-50 p-5">
          <p className="mb-2 text-sm font-bold text-gray-900">
            安全の順番：人命 ＞ 避難 ＞ 事業資産
          </p>
          <p className={cls.bodySm}>
            止水板や吸水土のうは浸水被害を軽減するための備えです。危険が迫っている場合は設置作業を続けず、顧客と従業員の安全確保を優先します。止水作業で避難を遅らせてはいけません。
          </p>
        </div>
        <P>
          店舗では、営業中に大雨が強くなる可能性があります。内閣府の企業BCP資料には、小規模スーパーを想定した水害ケースとして、警報や避難情報を十分に把握しないまま営業を続けた結果、お客様と店員が店内に取り残され、電源設備や在庫も浸水する例が示されています。
        </P>
        <P>
          ここから分かるのは、店舗の水害対策で最も重要なのは、
          <Mark>何cmの止水板を買うか</Mark>
          より先に、
          <Mark>
            いつ営業を止めるか、誰が入口対策を行い、誰が顧客対応をするか
          </Mark>
          を決めることです。
        </P>

        <H2 id="phase1">Phase 1｜平時に「水が入る入口」を店舗図へ書き込む</H2>
        <P>
          まず国土交通省のハザードマップポータル等で、店舗所在地の洪水・内水・高潮などのリスクを確認します。そのうえで店内を歩き、次を確認します。
        </P>
        <ul className={cls.list}>
          <li>正面自動ドア</li>
          <li>シャッター</li>
          <li>従業員通用口</li>
          <li>裏口</li>
          <li>搬入口</li>
          <li>地下階段</li>
          <li>排水溝・側溝の近く</li>
          <li>床が道路側より低い場所</li>
        </ul>
        <P>
          店舗の場合、正面入口だけを守っても、裏口や搬入口から水が回り込むことがあります。
          <Mark>「入口Aには止水パネル」「入口Bには吸水材」</Mark>
          というように、入口単位で使う用品を決めておくと、警報が出てから商品を選ぶ必要がありません。
        </P>
        <H3>大きな工場・倉庫シャッターは既存記事へ</H3>
        <P>
          広い搬入口、SPBBS / SPBES、止水高さや床面条件などを詳しく知りたい場合は、
          <Link
            href={FACTORY_ARTICLE}
            className="font-bold underline underline-offset-4"
          >
            工場・倉庫の浸水対策ガイド
          </Link>
          で詳しく整理しています。本記事では店舗営業の継続に絞ります。
        </P>

        <H2 id="phase2">Phase 2｜大雨前に「床から上げるもの」を決めておく</H2>
        <Figure
          src={IMG("retail-stock-elevation-before-flood.webp")}
          alt="大雨前に店舗の商品や段ボールを高い棚へ移すイメージ"
        />
        <P>
          店舗浸水で被害が拡大しやすいのが、床付近に置いたものです。
        </P>
        <H3>段ボール在庫</H3>
        <P>
          段ボールは水を吸いやすく、外箱だけの浸水でも商品として扱いにくくなる場合があります。
        </P>
        <H3>POS周辺・電源タップ</H3>
        <P>
          床付近の電源タップや配線は浸水時の安全リスクになります。電気設備の対応は店舗や建物のルール、専門担当者の指示を優先してください。
        </P>
        <H3>商品・販促物</H3>
        <P>
          低い棚の在庫、紙製POP、カタログ等は、店舗で想定する浸水条件に応じて高い場所へ移すルールを決めておきます。
        </P>
        <H3>契約書・重要書類</H3>
        <P>
          紙の契約書、許可関係、重要な記録などは、普段から床置きを避け、防水性能のある保管用品を使う方法もあります。
        </P>

        <H2 id="documents">重要書類を水害から守る｜エーコー 2017</H2>
        <Figure
          src={IMG("retail-important-documents-flood-protection.webp")}
          alt="店舗の重要書類やバックアップ媒体を防水保管するイメージ"
        />
        <P>
          エーコーの耐火・防水プロテクターバッグ2017は、A4用紙を収納できるタイプです。公開仕様では、水深
          <Mark>20cmで8時間</Mark>
          の防水性能試験、<Mark>30分耐火</Mark>
          、シリンダー式、内容積
          <Mark>5.75L</Mark>
          とされています。
        </P>
        <P>
          店舗の契約書・重要書類・バックアップ媒体など、
          <Mark>濡らしたくない少量の重要物を一か所にまとめる</Mark>
          用途で比較できます。
        </P>
        <ProductCard model="2017" />

        <H2 id="entrance-products">入口タイプ別の代表用品</H2>
        <P>
          店舗の入口は、自動ドア、シャッター、通用口など条件が分かれます。同じ「止水用品」でも、向く場所と使えない条件が異なります。
        </P>
        <Table>
          <thead>
            <tr>
              <Th>場所・用途</Th>
              <Th>商品</Th>
              <Th>選び方の要点</Th>
            </tr>
          </thead>
          <tbody>
            {entranceRows.map((row) => {
              const product = byModel[row.model];
              return (
                <tr key={row.model}>
                  <Td>
                    <strong>{row.place}</strong>
                  </Td>
                  <Td>
                    {product ? (
                      <ProductTableCell product={product} />
                    ) : (
                      row.model
                    )}
                  </Td>
                  <Td>{row.note}</Td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <H3>正面入口・自動ドア｜備えあれ板で水の流れを変える</H3>
        <Figure
          src={IMG("retail-automatic-door-flood-barrier.webp")}
          alt="路面店の自動ドア前に簡易止水パネルを準備するイメージ"
        />
        <P>
          路面店の正面入口など、平らな床面へ簡易的に水防ラインを作りたい場合に比較しやすいのが、ワニ印の「備えあれ板」です。比較的軽いため、少人数店舗で平時に配備しやすいのが特徴です。
        </P>
        <ProductCard model="004954" />
        <Caution title="備えあれ板は初期の軽度浸水向け">
          <p>
            突起物のない平らなコンクリート・タイル等での使用、強風時の重し・固定、
            <Mark>津波・高潮時には設置しない</Mark>
            ことなどをメーカーが案内しています。
          </p>
        </Caution>
        <H3>角を回り込ませるなら004959</H3>
        <P>
          店舗入口の左右に柱や壁があり、直線だけでは水防ラインを作りにくい場合は、専用コーナーパーツを使う方法があります。本体と組み合わせて、店舗の角や折れた導線へ対応します。
        </P>
        <ProductCard model="004959" />

        <H3>軽量シャッター店舗｜三和製ならeシートの適合を確認</H3>
        <Figure
          src={IMG("retail-shutter-rainwater-protection.webp")}
          alt="軽量シャッター前で雨水侵入対策を準備する店舗イメージ"
        />
        <P>
          店舗シャッターの場合、シャッター下部やガイドレール周辺から水が入ることがあります。
          <strong>eシート ESEAT</strong>
          は、三和シヤッターの指定軽量シャッター用に作られた簡易防水シートです。三和シヤッター公式情報では、約
          <Mark>5～10分</Mark>
          で取り付け、浸水高さ
          <Mark>30cmまで</Mark>
          、コンパクト収納、完全防水商品ではない、とされています。
        </P>
        <ProductCard model="ESEAT" />
        <Caution title="「シャッターがある店なら使える」ではない">
          <p>
            eシートは
            <Mark>三和製の指定軽量シャッター専用</Mark>
            です。シャッターの種類、開口、座板と床のすき間、レール、中柱の有無などで適合条件があります。商品名だけを見て購入せず、店舗のシャッター型式・設置条件を事前確認してください。
          </p>
        </Caution>

        <H3>通用口・裏口・店内側｜クイック防水堤で二段目を作る</H3>
        <P>
          止水板を置いても、わずかな漏水まで完全になくせるとは限りません。そこで、入口の
          <Mark>外側で流入を弱め、内側で漏水を吸収する</Mark>
          二段構成を作る方法があります。橋本クロスのクイック防水堤QB125330は、メーカーが店舗・工場・住宅等での軽微な浸水対策用途を案内している吸水タイプです。
        </P>
        <ProductCard model="QB125330" />
        <Caution title="吸水後は約20kgになる">
          <p>
            保管時は軽くても、使用後は重量物です。「誰が回収するか」「どこで乾燥・廃棄するか」まで平時に決めてください。
            <Mark>海水では使用不可</Mark>
            です。
          </p>
        </Caution>

        <H3>土のうを店舗裏に大量保管できないなら｜土No袋 722T20</H3>
        <P>
          都市部の店舗では、普通の土のうを何十袋も平時から保管するスペースがないことがあります。丸和ケミカルの
          <strong>土No袋 722T20</strong>
          は、箱型の吸水土のう20枚、専用水槽、脱水剤が1セットになった製品です。公開仕様では、吸水時間約3分、吸水後は約
          <Mark>23kg/枚</Mark>
          です。
        </P>
        <ProductCard model="722T20" />
        <Caution title="コンパクト備蓄でも吸水後は重い">
          <p>
            海水では使用できず、吸水後は非常に重くなります。店舗で採用するなら、「設置する人」だけでなく「使用後に片付ける人」まで決めておくのが現実的です。
          </p>
        </Caution>

        <H3>毎年同じ入口が危ないなら｜脱着式アルミ止水板も検討</H3>
        <P>
          過去に何度も前面道路が冠水している店舗や、毎年同じ入口を守る場合は、応急用品だけでなく
          <Mark>繰り返し設置する脱着式止水板</Mark>
          も比較対象です。UACJの「水用心 MZTR001」は、幅2m・高さ550mm・質量14kg・JIS A 4716 Ws-3等級相当のアルミ製脱着式止水板です。
        </P>
        <ProductCard model="MZTR001" />
        <Caution title="完全止水ではない">
          <p>
            事前に磁性板・取付用アタッチメント等の準備が必要で、設置可能な環境か確認する必要があります。メーカーも
            <Mark>完全に止水する製品ではない</Mark>
            としています。
          </p>
        </Caution>

        <H3>店内の商品養生に耐水シートを使う場合の注意</H3>
        <P>
          TRUSCOの耐水UVシート#7000は
          <Mark>入口の止水板ではありません</Mark>
          。ただし、大雨前に一時的に移動した商品や資材を覆う、屋根漏水等から応急養生する、といった用途では比較できます。止水用品と養生用品の役割を混同しないことが重要です。
        </P>
        <ProductCard model="TWP7000-3654" />

        <CtaAside
          title="店舗に合う水害対策用品を見比べる"
          text="入口条件と人員に合わせて、止水パネル・吸水材・書類保護用品をまとめて確認できます。"
          href={MAIN_CTA}
          label="水害対策アイテム一覧を見る"
          dataCta="mid-main-cta"
        />

        <H2 id="phase3">
          Phase 3｜「いつ設置するか」を決めていない備蓄は使えない
        </H2>
        <Figure
          src={IMG("retail-early-closure-heavy-rain.webp")}
          alt="大雨時に安全を優先して店舗を早めに閉店するイメージ"
          brighten
        />
        <P>
          店舗のバックヤードに止水板があっても、誰も組み立てたことがない状態では、急な豪雨時に使えない可能性があります。平時に最低一度は、保管場所から入口へ運ぶ、実際に設置する、必要人数を確認する、所要時間を測る、元へ戻す、ところまで試します。
        </P>
        <H3>多店舗なら写真付きで標準化</H3>
        <P>
          チェーン店や複数拠点では、店舗ごとに「水害対策シート」を1枚作ると運用しやすくなります。
        </P>
        <ul className={cls.list}>
          <li>店舗入口A：備えあれ板3枚</li>
          <li>シャッターB：eシート（適合確認済みの場合）</li>
          <li>裏口C：クイック防水堤4枚</li>
          <li>重要書類：バックヤード上段</li>
          <li>閉店判断者：店長</li>
          <li>設置担当：2名</li>
          <li>避難先：自治体指定場所</li>
        </ul>
        <P>
          商品型番だけでなく、
          <Mark>誰がどこへ設置するか</Mark>
          までセットにします。
        </P>
        <H3>閉店判断を止水作業より後回しにしない</H3>
        <P>
          水害対策用品を持っていると、「まだ入口を守れる」と考えて営業を続けたくなる場合があります。しかし、河川氾濫・高潮・急激な内水氾濫などでは、短時間で状況が変わります。お客様・従業員の避難時間を確保できない状態で、止水作業を続けてはいけません。
        </P>
        <P>
          店舗の水害BCPでは、
          <Mark>商品を守れるか</Mark>
          ではなく、
          <Mark>人が安全に退避できる時間を残せるか</Mark>
          を優先して閉店・避難判断を行います。
        </P>

        <H2 id="phase4">Phase 4｜浸水後は「すぐ営業再開」しない</H2>
        <Figure
          src={IMG("retail-post-flood-reopening-inspection.webp")}
          alt="浸水後に店舗の安全と衛生を確認して営業再開を判断するイメージ"
        />
        <P>
          水が引いたように見えても、店内には別のリスクがあります。
        </P>
        <H3>電気</H3>
        <P>
          水に浸かったコンセント・分電盤・電気機器は、自己判断で通電しない方が安全です。建物管理者・電気担当者等の確認を優先します。
        </P>
        <H3>衛生</H3>
        <P>
          洪水・内水には汚染物が混ざる可能性があります。特に飲食店・食品販売店では、行政も浸水した食品や衛生用品の廃棄、設備の洗浄・消毒、安全な水の確保などを案内しています。
        </P>
        <H3>商品</H3>
        <P>
          外箱だけ濡れたように見える商品でも、販売可否は商品特性や衛生条件に応じて判断します。
        </P>
        <H3>止水用品</H3>
        <P>
          使用した吸水土のう、パネル、シートを洗浄・乾燥・廃棄・補充し、次の大雨に備えます。
        </P>

        <H2 id="kit">店舗の水害備蓄は「入口対策」と「従業員待機」を分ける</H2>
        <P>
          水害対策用品だけを揃えても、停電・断水・交通停止で従業員が店舗に残る可能性があります。店舗のBCPとしては、
          <Mark>入口を守る水害用品</Mark>
          と
          <Mark>従業員の安全・待機用品</Mark>
          を分けて備えます。
        </P>
        <P>
          後者には、蓄電池、簡易トイレ、非常食、毛布、防災セット、テント・間仕切りなどがあります。事業所全体の備蓄については
          <Link
            href={STOCKPILE_ARTICLE}
            className="font-bold underline underline-offset-4"
          >
            事業所の防災備蓄チェックリスト
          </Link>
          も参考になります。
        </P>

        <H3>店舗向け「水害キット」の作り方</H3>
        <div className="my-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "入口用",
              body: "止水パネル / シャッター用シート / 吸水材",
            },
            {
              title: "保護用",
              body: "耐水シート / 重要書類用防水保管",
            },
            {
              title: "設置用品",
              body: "指定された固定用品、養生用品、照明等",
            },
            {
              title: "復旧用",
              body: "清掃用品、保護具、補充用の吸水材",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-5"
            >
              <p className="text-lg font-black text-gray-900">{item.title}</p>
              <p className={`mt-2 ${cls.bodySm}`}>{item.body}</p>
            </div>
          ))}
        </div>
        <Caution title="深い水へ入るための装備と混同しない">
          <p>
            水害時に深い水へ入るための装備を「設置用」と考えないでください。防災ウェーダー等が必要になる場合も、危険な洪水中へ進入する目的ではなく、
            <Mark>安全が確認された復旧作業</Mark>
            で使用条件を確認します。
          </p>
        </Caution>

        <H2 id="checklist">購入前チェックリスト</H2>
        <ul className="my-6 space-y-3">
          {checklistItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-[16px] leading-7 text-gray-900"
            >
              <span
                aria-hidden
                className="mt-1 inline-block h-5 w-5 shrink-0 rounded border border-gray-400"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <H2 id="mistakes">よくある失敗</H2>
        <div className="my-6 space-y-4">
          {mistakes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
            >
              <h3 className="text-xl font-black text-gray-900">{item.title}</h3>
              <p className={`mt-2 ${cls.bodySm}`}>{item.body}</p>
            </div>
          ))}
        </div>

        <H2 id="faq">よくある質問</H2>
        <div className="my-6 space-y-6">
          {faqs.map((item) => (
            <div key={item.q}>
              <h3 className={cls.faqQ}>{item.q}</h3>
              <P>{item.a}</P>
            </div>
          ))}
        </div>

        <H2 id="summary">
          まとめ｜店舗の浸水対策は「入口を守る」だけでなく営業停止・再開まで決める
        </H2>
        <P>
          店舗の水害対策で大切なのは、止水用品を買うことだけではありません。
          <Mark>平時 → 大雨前 → 浸水リスク上昇 → 浸水後</Mark>
          の4フェーズで、誰が判断するか、どこを守るか、何を移動するか、いつ営業を止めるか、どう再開するかまで決める必要があります。
        </P>
        <P>
          入口ごとの商品選びでは、一般入口は備えあれ板、指定軽量シャッターはeシート、通用口・漏水補完はクイック防水堤、コンパクト土のう備蓄は土No袋、繰り返し守る入口は水用心、重要書類は耐火・防水プロテクターというように、
          <Mark>場所と目的で役割を分ける</Mark>
          と考えやすくなります。
        </P>
        <P>
          店舗ごとの入口条件と人員を確認したうえで、まず水害対策用品の全体像を見比べてください。
        </P>

        <aside className="my-8 rounded-3xl bg-gray-900 p-6 text-white sm:p-8">
          <h3 className="text-2xl font-black tracking-wide sm:text-3xl">
            店舗ごとの水害キットを準備する
          </h3>
          <p className="mt-3 text-[16px] leading-[1.9] text-white">
            正面入口・シャッター・裏口・重要書類を分けて、使う用品と担当者を店舗単位で決めておくと緊急時の迷いを減らせます。
          </p>
          <div className="mt-5">
            <RakutenCta
              href={MAIN_CTA}
              label="水害対策アイテム一覧を見る"
              dataCta="summary-main-cta"
            />
          </div>
        </aside>

        <section className="my-10 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-7">
          <h3 className="text-2xl font-black text-gray-900 sm:text-3xl">
            事業継続の関連備蓄
          </h3>
          <p className={`mt-3 ${cls.bodySm}`}>
            入口対策とは別に、停電・断水時の従業員待機用品も店舗BCPの一部として確認してください。
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {SECONDARY_CTAS.map((cta) => (
              <li key={cta.url}>
                <ExtLink
                  href={cta.url}
                  dataCta={`secondary-${cta.label}`}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-3 text-center text-[15px] font-extrabold text-gray-900 transition hover:bg-gray-100"
                >
                  {cta.label}
                </ExtLink>
              </li>
            ))}
          </ul>
          <p className={`mt-6 ${cls.bodySm}`}>
            関連記事：
            <Link
              href={FACTORY_ARTICLE}
              className="font-bold underline underline-offset-4"
            >
              工場・倉庫の浸水対策
            </Link>
            {" ／ "}
            <Link
              href={STOCKPILE_ARTICLE}
              className="font-bold underline underline-offset-4"
            >
              事業所の防災備蓄チェックリスト
            </Link>
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
