import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "factory-warehouse-flood-entry-protection-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const ARTICLE_TITLE =
  "工場・倉庫の浸水対策｜シャッター・搬入口を守る止水板と土のう代替品の選び方【2026年版】";
const DESCRIPTION =
  "工場・倉庫の浸水対策を、シャッター・搬入口・通用口など水の侵入口から解説。止水板・簡易パネル・吸水土のうを、幅、高さ、床条件、設置人数、保管性で比較し、選び方・備蓄・設置訓練まで実務的に整理します。";
const PUBLISHED = "2026-08-09";
const CAMPAIGN =
  "utm_source=sagyou_navi&utm_medium=article&utm_campaign=factory_warehouse_flood";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const ctas = {
  stopBoards:
    "https://search.rakuten.co.jp/search/mall/%E6%AD%A2%E6%B0%B4%E6%9D%BF/?sid=426972&" +
    CAMPAIGN,
  floodProducts:
    "https://search.rakuten.co.jp/search/mall/%E6%B0%B4%E5%AE%B3/?sid=426972&" +
    CAMPAIGN,
};

const productUrls = {
  spbbs: `https://item.rakuten.co.jp/crecote-shop/ta046512-spbbs/?${CAMPAIGN}`,
  spbes: `https://item.rakuten.co.jp/crecote-shop/ta054368-spbes/?${CAMPAIGN}`,
  wani004954: `https://item.rakuten.co.jp/crecote-shop/ta053757-004954/?${CAMPAIGN}`,
  wani004959: `https://item.rakuten.co.jp/crecote-shop/ta051919-004959/?${CAMPAIGN}`,
  mztr001: `https://item.rakuten.co.jp/crecote-shop/ta054165-mztr001/?${CAMPAIGN}`,
  qb125330: `https://item.rakuten.co.jp/crecote-shop/ta054232-qb125330/?${CAMPAIGN}`,
  t722: `https://item.rakuten.co.jp/crecote-shop/ta053814-722t20/?${CAMPAIGN}`,
  wbp7s: `https://item.rakuten.co.jp/crecote-shop/ta053578-wbp7s/?${CAMPAIGN}`,
  wbp14s: `https://item.rakuten.co.jp/crecote-shop/ta053576-wbp14s/?${CAMPAIGN}`,
  wbp21s: `https://item.rakuten.co.jp/crecote-shop/ta053577-wbp21s/?${CAMPAIGN}`,
};

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
        url: `${SITE_URL}${IMG("factory-warehouse-flood-barrier-hero.webp")}`,
        width: 1600,
        height: 900,
        alt: "工場・倉庫の搬入口で浸水対策用の止水板を平時に設置訓練するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ARTICLE_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG("factory-warehouse-flood-barrier-hero.webp")}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("factory-warehouse-flood-barrier-hero.webp")}`],
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Organization", name: "作業用品ナビ編集部", url: SITE_URL },
  publisher: { "@type": "Organization", name: "作業用品ナビ", url: SITE_URL },
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
    { "@type": "ListItem", position: 3, name: ARTICLE_TITLE, item: CANONICAL },
  ],
};

const faqs = [
  {
    q: "工場の浸水対策は何から始めればよいですか？",
    a: "ハザードマップ、浸水想定区域、敷地の高低差、過去の冠水実績を確認し、想定浸水深と水が入りそうな場所を整理するところから始めます。その後、シャッター・搬入口・通用口など開口部を実測し、止水板や吸水土のうを選びます。",
  },
  {
    q: "止水板と土のうはどちらがよいですか？",
    a: "一律にどちらが優れているとは言えません。土のうは汎用性がありますが、土砂の準備、重量、保管、設置人員が課題になります。止水板は繰り返し使いやすい製品が多い一方、床面や開口幅など設置条件があります。広い入口は止水板、小さな開口部や補完は土のう・吸水土のうという併用も実用的です。",
  },
  {
    q: "吸水土のうと普通の土のうの違いは何ですか？",
    a: "一般的な土のうは袋へ土や砂を入れて使います。吸水土のうは高分子吸水材などが水を吸って膨らむため、使用前はコンパクトに保管しやすいのが特徴です。ただし、吸水後は10〜20kg以上になる商品があり、海水に使えない製品もあります。",
  },
  {
    q: "シャッター前にはどんな止水板が使いやすいですか？",
    a: "広いシャッターでは、必要幅に合わせて連結・延長できる簡易止水板が候補になります。ただし、シャッター前の床に段差やレールがある場合、製品の使用条件に合わない可能性があります。幅だけでなく床面と必要奥行も確認してください。",
  },
  {
    q: "止水高さは何cmを選べばよいですか？",
    a: "ハザードマップや過去の冠水実績から想定する水位を確認し、製品の性能・使用条件と照らして選びます。想定浸水深が製品の対応範囲を大きく上回る場合、簡易止水用品だけに頼らず、建物側の防水や重要設備のかさ上げなども検討します。",
  },
  {
    q: "アスファルトや凹凸のある床でも使えますか？",
    a: "製品によって異なります。「備えあれ板」は突起物のない平らなコンクリート・タイル等、「水用心 MZTR001」はコンクリートかつ平らな地面が使用条件として案内されています。床面条件は購入前に製品ごとの取扱情報で確認してください。",
  },
  {
    q: "何人で設置できる製品を選べばよいですか？",
    a: "夜間・休日など、最も人が少ない時間帯でも確保できる人数を基準にします。SPBBSはオレンジブック掲載情報で、約1.6mを2名で設置した場合、約2分が目安とされています。自社でも平時に試し設置し、実測時間を記録すると運用しやすくなります。",
  },
  {
    q: "吸水土のうは海水にも使えますか？",
    a: "製品によります。橋本クロス QB125330と丸和ケミカル 722-T20は、メーカー商品情報で海水使用不可とされています。沿岸部では、洪水・内水と高潮・津波を分けて想定してください。",
  },
  {
    q: "津波や高潮にも止水板を設置すべきですか？",
    a: "危険が迫っている状況で設置作業を続けるべきではありません。また、製品によって対象災害が異なります。「備えあれ板」は使用条件として津波・高潮発生時には設置しないよう案内されています。自治体の避難情報と製品の使用条件に従い、人命を優先してください。",
  },
  {
    q: "止水板はどこに保管すればよいですか？",
    a: "守る入口に近く、浸水する前に安全に取り出せる場所が適しています。地下や別棟など、豪雨時にアクセスしにくい場所は避け、入口番号と製品を対応させて保管すると設置時の取り違えを減らせます。",
  },
] as const;

const tocItems = [
  { id: "start", label: "何から始める？" },
  { id: "whole-building", label: "入口をふさぐだけでは足りない" },
  { id: "six-checks", label: "入口水防6点チェック" },
  { id: "types", label: "方式の使い分け" },
  { id: "wide-opening", label: "広いシャッター・搬入口" },
  { id: "folding-panel", label: "折り畳みパネル" },
  { id: "aluminum", label: "アルミ脱着式" },
  { id: "absorbent", label: "吸水土のう" },
  { id: "comparison", label: "一覧比較" },
  { id: "examples", label: "現場別4ケース" },
  { id: "mistakes", label: "よくある失敗7つ" },
  { id: "checklist", label: "法人チェックリスト" },
  { id: "timing", label: "設置タイミング" },
  { id: "shop-cta", label: "水害対策用品まとめ" },
  { id: "summary", label: "まとめ" },
  { id: "faq", label: "よくある質問" },
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

function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-gray-900 bg-gray-50 p-5">
      <p className="mb-2 text-sm font-bold text-gray-900">短くまとめると</p>
      <div className={`${cls.bodySm} space-y-3`}>{children}</div>
    </div>
  );
}

function Caution({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
      <p className="mb-2 text-sm font-bold text-gray-900">⚠ {title}</p>
      <div className={cls.bodySm}>{children}</div>
    </div>
  );
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

type ProductCardProps = {
  name: string;
  model?: string;
  manufacturer?: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  summary: string;
  specs?: string[];
  fit: string[];
  checks: string[];
  variants?: { label: string; url: string; dataCta: string }[];
  hideImage?: boolean;
  ctaLabel?: string;
  dataCta?: string;
};

function ProductCard({
  name,
  model,
  manufacturer,
  image,
  imageAlt,
  href,
  summary,
  specs = [],
  fit,
  checks,
  variants,
  hideImage = false,
  ctaLabel = "商品ページで詳細を確認する",
  dataCta,
}: ProductCardProps) {
  const showImage = !hideImage && image;

  return (
    <article className="my-8 overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
      <div className={showImage ? "grid gap-0 md:grid-cols-[280px_1fr]" : ""}>
        {showImage && (
          <div className="relative min-h-[240px] bg-gray-50 md:min-h-[320px]">
            <Image
              src={image}
              alt={imageAlt ?? `${name}の商品画像`}
              fill
              sizes="(max-width: 768px) 100vw, 280px"
              className="object-contain p-4"
            />
          </div>
        )}
        <div className="p-5 sm:p-6">
          {manufacturer && (
            <p className="mb-1 text-sm font-bold text-gray-800">{manufacturer}</p>
          )}
          <h3 className="text-xl font-extrabold leading-snug text-gray-900 md:text-2xl">
            {name}
            {model ? ` ${model}` : ""}
          </h3>
          <p className={`mt-3 ${cls.bodySm}`}>{summary}</p>

          {specs.length > 0 && (
            <div className="mt-5 rounded-xl bg-gray-50 p-4">
              <p className="font-bold text-gray-900">主な仕様の目安</p>
              <ul className={`mt-2 ${cls.list}`}>
                {specs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="font-bold text-gray-900">向く現場</p>
              <ul className={`mt-2 ${cls.list}`}>
                {fit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900">購入前に確認</p>
              <ul className={`mt-2 ${cls.list}`}>
                {checks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {variants ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {variants.map((variant) => (
                <ExtLink
                  key={variant.label}
                  href={variant.url}
                  dataCta={variant.dataCta}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-300 px-4 py-3 font-bold text-gray-900 hover:bg-gray-50"
                >
                  {variant.label}を見る
                </ExtLink>
              ))}
            </div>
          ) : href ? (
            <ExtLink
              href={href}
              dataCta={dataCta}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-center font-bold text-white hover:bg-gray-700 sm:w-auto"
            >
              {ctaLabel}
            </ExtLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function CompactProductLink({
  name,
  model,
  summary,
  href,
  dataCta,
}: {
  name: string;
  model: string;
  summary: string;
  href: string;
  dataCta: string;
}) {
  return (
    <div className="my-6 rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-5">
      <p className="text-sm font-bold text-gray-800">関連部材</p>
      <h3 className="mt-1 text-lg font-extrabold text-gray-900">
        {name} {model}
      </h3>
      <p className={`mt-2 ${cls.bodySm}`}>{summary}</p>
      <ExtLink
        href={href}
        dataCta={dataCta}
        className="mt-3 inline-flex min-h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-gray-900 hover:bg-gray-100"
      >
        {model}の商品ページを見る
      </ExtLink>
    </div>
  );
}

function CtaCardGrid() {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2">
      <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className={cls.ctaH3}>止水板を比較する</p>
        <p className={`mt-2 ${cls.bodySm}`}>
          サイズ・方式・価格帯を一覧から確認できます。
        </p>
        <div className="mt-4">
          <RakutenCta
            href={ctas.stopBoards}
            label="止水板一覧を楽天市場で見る"
            dataCta="bottom-stop-board-list"
            fullWidth
          />
        </div>
      </aside>
      <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className={cls.ctaH3}>水害対策全体を確認する</p>
        <p className={`mt-2 ${cls.bodySm}`}>
          吸水用品、復旧・避難用品なども含めて確認したい場合はこちら。
        </p>
        <div className="mt-4">
          <RakutenCta
            href={ctas.floodProducts}
            label="水害対策商品一覧を見る"
            dataCta="bottom-flood-product-list"
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
          <span>工場・倉庫の浸水対策</span>
        </nav>

        <p className={`${cls.meta} font-bold`}>水害・BCP対策</p>
        <h1 className={cls.h1}>{ARTICLE_TITLE}</h1>
        <div className={`mt-4 flex flex-wrap gap-x-5 gap-y-2 ${cls.meta}`}>
          <span>執筆：作業用品ナビ編集部</span>
          <time dateTime={PUBLISHED}>公開・更新：2026年8月9日</time>
        </div>

        <Figure
          src={IMG("factory-warehouse-flood-barrier-hero.webp")}
          alt="工場・倉庫の搬入口で浸水対策用の止水板を平時に設置訓練するイメージ"
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
          短時間の大雨で前面道路が冠水し、シャッターのすき間から水が入る。搬入口のスロープを伝って倉庫内へ水が流れ込む。通用口から入った数センチの水で、床置きの資材や電気機器が使えなくなる。
        </P>
        <P>
          工場や倉庫の水害は、川があふれるような大規模な洪水だけで起こるとは限りません。排水が追いつかない豪雨や敷地内の勾配、側溝からのあふれなどによって、建物の入口が浸水の起点になることがあります。
        </P>
        <P>
          そこで備えたいのが、止水板や水害防止パネル、吸水土のうといった浸水対策用品です。ただし、どの製品でも入口に置けばよいわけではありません。開口部の幅、床の状態、想定する水位、設置できる人数、雨が迫ってから準備に使える時間によって、向く方式は変わります。
        </P>
        <P>
          このページでは、工場・倉庫のシャッターや搬入口を中心に、浸水対策用品をどう選び、どのように備蓄・運用するかを整理します。
        </P>

        <Caution title="安全上の注意">
          <P>
            止水板や吸水土のうは、建物の浸水被害を<strong>軽減するための備え</strong>です。あらゆる水害を完全に防げるものではありません。製品ごとの使用条件を守り、河川氾濫、高潮、津波など危険が迫っているときは、設置作業を続けず避難と人命確保を優先してください。
          </P>
        </Caution>

        <H2 id="start">工場・倉庫の浸水対策は何から始める？</H2>
        <P>
          最初に行うのは、止水板を選ぶことではありません。まずハザードマップ、浸水想定区域、敷地の高低差、過去の冠水実績を確認し、
          <Mark>「どこから水が入りそうか」「どの程度の浸水を想定するか」</Mark>
          を決めます。
        </P>
        <P>そのうえで、シャッター・搬入口・通用口などの開口部ごとに、次の条件を確認します。</P>
        <ul className={cls.list}>
          <li>開口部の有効幅</li>
          <li>守りたい高さ</li>
          <li>床面の材質、段差、凹凸、勾配</li>
          <li>設置できる人数</li>
          <li>設置に使える時間</li>
          <li>保管場所から設置場所までの距離</li>
        </ul>
        <P>
          幅が決まった開口部を繰り返し守るなら脱着式の止水板、広い範囲を連結して塞ぎたいなら簡易パネル、複数の入口や漏水部を補完するなら吸水土のうが候補になります。
        </P>
        <P>
          そして購入後は、雨のない日に一度組み立てます。「誰が」「どの警戒段階で」「どの入口から」設置するかまで決めて初めて、緊急時に使える備えになります。
        </P>
        <AnswerBox>
          <P>
            最初にハザードマップや過去の冠水実績から想定浸水深を確認し、シャッター・搬入口・通用口など水が入りやすい開口部を特定します。そのうえで、開口幅、床面、設置人数、設置時間、保管場所を基準に止水板や吸水土のうを選び、購入後は平時に試し設置を行い、「誰が・いつ・どこへ設置するか」まで決めておきます。
          </P>
        </AnswerBox>
        <CtaAside
          title="まず止水板の種類を見比べたい場合"
          text="開口幅や設置方式のイメージがまだ固まっていない場合は、止水板の一覧を見ながら方式を把握すると選びやすくなります。"
          href={ctas.stopBoards}
          label="止水板一覧を楽天市場で見る"
          dataCta="top-stop-board-list"
        />
        <ProductCard
          manufacturer="積水テクノ成型"
          name="簡易止水板 プラバリア 基本セット"
          model="SPBBS"
          image={PROD("ta046512-spbbs.jpg")}
          imageAlt="積水の連結式簡易止水板プラバリア基本セット"
          href={productUrls.spbbs}
          dataCta="product-spbbs"
          summary="樹脂製パネルを連結して水防ラインをつくる簡易止水板です。基本セットの止水幅は約1.6m、止水高さは50cm。オレンジブック掲載情報では、約1.6mを2名で設置する場合の設置時間は約2分とされています。"
          specs={[
            "止水幅 約1.6m",
            "止水高さ 50cm",
            "質量 13.9kg",
            "約1.6mを2名で設置した場合、約2分（公開商品情報）",
          ]}
          fit={[
            "工場・倉庫のシャッター前",
            "車両が出入りする搬入口",
            "土のうを大量に積む人員を確保しにくい事業所",
            "毎年の豪雨期に繰り返し使用したい施設",
          ]}
          checks={[
            "実際の開口幅を現場で測っているか",
            "本体の奥行935mmを確保できるか",
            "保管場所から入口まで2名で運べるか",
            "基本セットだけで幅が足りるか（不足時はSPBESが必要）",
          ]}
          ctaLabel="プラバリア 基本セット SPBBSの商品ページを見る"
        />
        <P>
          長い間口には延長セットSPBESを追加できます。延長セット1つで止水幅を約0.8m広げられますが、
          <strong>SPBESだけでは使用できず、基本セットSPBBSが必要</strong>です。
        </P>

        <H2 id="whole-building">工場・倉庫の浸水対策は「入口をふさぐ」だけでは足りない</H2>
        <P>
          止水板は有効な選択肢ですが、入口だけを見て水害対策を終えると、思わぬところで被害が広がることがあります。
        </P>
        <Figure
          src={IMG("warehouse-water-entry-risk-points.webp")}
          alt="倉庫のシャッター・側溝・敷地勾配など水が入りやすい場所を確認するイメージ"
        />
        <P>
          国土交通省・経済産業省の「建築物における電気設備の浸水対策ガイドライン」では、浸水想定区域やハザードマップ、地形、過去の浸水実績などを踏まえて想定浸水深を設定し、建物への浸水防止、電気設備のかさ上げ、防水区画、排水などを総合的に考える考え方が示されています。
        </P>
        <P>工場・倉庫で確認したい場所は、少なくとも次の4つです。</P>
        <Table>
          <thead>
            <tr>
              <Th>確認場所</Th>
              <Th>起こりやすい問題</Th>
              <Th>主な備え</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>シャッター・搬入口</Td>
              <Td>開口が広く、水がまとまって入りやすい</Td>
              <Td>止水板、簡易パネル、排水確認</Td>
            </tr>
            <tr>
              <Td>通用口・勝手口</Td>
              <Td>見落とされやすく、少量の水でも室内へ広がる</Td>
              <Td>脱着式止水板、吸水土のう</Td>
            </tr>
            <tr>
              <Td>受変電設備・分電盤周辺</Td>
              <Td>浸水すると操業復旧に大きく影響する</Td>
              <Td>かさ上げ、防水区画、入口止水</Td>
            </tr>
            <tr>
              <Td>在庫・原材料の床置き</Td>
              <Td>数cmの浸水でも廃棄や品質事故につながる</Td>
              <Td>ラック化、パレット・棚への移動</Td>
            </tr>
          </tbody>
        </Table>
        <P>
          入口の水防は、こうした対策の一部です。止水板を選ぶときも、「水を一滴も入れない」という発想より、
          <Mark>重要設備や在庫が被害を受けるまでの時間を稼ぎ、浸水量を減らす</Mark>
          という考え方で計画した方が現実的です。
        </P>
        <H3>人が設置する製品は、担当とタイミングまで決める</H3>
        <P>
          止水板や土のうは、自動で入口を守ってくれる設備ではありません。倉庫の奥に積んであるだけでは、雨が強くなってから出して運ぶ時間が足りないことがあります。
        </P>
        <P>
          国交省のガイドラインでも、土のうや止水板のように人的対応が必要な対策は、洪水等の発生時に使う物的・人的資源や対応方針をあらかじめ関係者で調整しておくことが望ましいとされています。
        </P>
        <P>
          「警戒レベルが上がったら」「敷地前の側溝がこの水位になったら」「前面道路の冠水が始まる前に」など、自社で設置開始の判断基準を決めておきましょう。
        </P>

        <H2 id="six-checks">購入前に確認したい「入口水防6点チェック」</H2>
        <Figure
          src={IMG("loading-entrance-flood-barrier-measurement.webp")}
          alt="工場の搬入口で幅や床面の状態を確認して止水板導入を検討するイメージ"
        />
        <P>
          製品カタログでは、止水高さや本体サイズが目立ちます。しかし、法人で導入する場合はスペックだけでは足りません。次の6項目を開口部ごとに整理すると、購入後のミスマッチを減らせます。
        </P>
        <H3>1. 想定浸水深</H3>
        <P>
          最初に「何cmを止めたいか」を決めます。ハザードマップの浸水深だけでなく、過去に敷地前の道路がどこまで冠水したか、側溝があふれたことがあるか、近隣事業所に浸水履歴がないかも確認します。
        </P>
        <P>
          ただし、想定浸水深が大きいからといって、簡易止水板を高く積めば安全になるわけではありません。製品ごとに対応できる高さや使用条件があります。想定規模が製品の範囲を大きく超える場合は、建築的な防水、設備の移設・かさ上げ、専門業者への相談も必要です。
        </P>
        <H3>2. 開口部の幅と形状</H3>
        <P>
          「シャッター幅3m」と図面に書かれていても、その数字だけで購入しない方が安全です。実際に止水板を置く位置で、柱間、レール、巾木、壁の出っ張りなどを含めて有効幅を測ります。広い搬入口では、基本セットに延長パネルを追加できる方式が扱いやすい場合があります。
        </P>
        <P>
          建物の角を回り込んで水防ラインをつくりたい場合は、直線だけでなくコーナー部材が用意されているかも確認します。
        </P>
        <H3>3. 床面の平坦性・段差・勾配</H3>
        <P>
          止水板は、床面との接触部が重要です。コンクリートの目地、アスファルトの荒れ、排水溝のグレーチング、シャッターレール、勾配変化などがあると、製品の想定通りに設置できないことがあります。
        </P>
        <P>
          たとえば「備えあれ板」は、オレンジブックの使用条件として、コンクリートやタイルなど突起物のない平面での使用が案内されています。「水用心 MZTR001」も、コンクリートかつ平らな地面が条件です。
        </P>
        <P>
          製品を選ぶ前に、スマートフォンで入口の床を正面・斜めから撮影し、寸法と一緒に残しておくと社内比較もしやすくなります。
        </P>
        <H3>4. 設置できる人数と時間</H3>
        <P>
          台風が近づく平日日中と、夜間・休日のゲリラ豪雨では、現場にいる人数が違います。普段5人で対応できる工場でも、休日は守衛と当番者しかいないことがあります。必要人数は「最大で集められる人数」ではなく、
          <Mark>最も人が少ない時間帯でも対応できる人数</Mark>
          を基準に考えるのが安全です。
        </P>
        <H3>5. 保管場所から設置場所までの動線</H3>
        <P>
          止水用品は、入口に近いほど使いやすくなります。地下倉庫、2階の防災備蓄庫、別棟などに置くと、豪雨時に運び出すこと自体が危険になる場合があります。保管時はコンパクトでも、設置時には長さや重量が増す製品もあるため、扉、階段、台車ルートまで確認します。
        </P>
        <H3>6. 使用後の再利用・廃棄</H3>
        <P>
          樹脂製の止水板は、使用後に洗浄・乾燥して再利用できる製品があります。一方、吸水土のうは、水を吸うと10〜20kg以上になる商品もあります。購入時には、使用前の軽さだけでなく、使用後に誰が回収するか、どこで乾燥・脱水するか、補充が必要かまで決めておきます。
        </P>

        <H2 id="types">止水板・簡易パネル・吸水土のうはどう使い分ける？</H2>
        <P>代表的な方式を大きく分けると、次のようになります。</P>
        <Table>
          <thead>
            <tr>
              <Th>方式</Th>
              <Th>向く場面</Th>
              <Th>強み</Th>
              <Th>事前に確認したいこと</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>連結式簡易止水板</Td>
              <Td>広いシャッター、搬入口</Td>
              <Td>幅を増やしやすい、繰り返し使いやすい</Td>
              <Td>必要奥行、連結数、保管スペース</Td>
            </tr>
            <tr>
              <Td>折り畳み水害防止パネル</Td>
              <Td>通用口、角を含む水防ライン</Td>
              <Td>軽量、工具不要、形を変えやすい</Td>
              <Td>平坦な床、風対策、想定する浸水規模</Td>
            </tr>
            <tr>
              <Td>脱着式アルミ止水板</Td>
              <Td>決まった幅の入口</Td>
              <Td>薄型で繰り返し設置しやすい</Td>
              <Td>事前取付、建具との適合、床条件</Td>
            </tr>
            <tr>
              <Td>吸水土のう・防水堤</Td>
              <Td>複数入口、補助止水</Td>
              <Td>保管時に省スペース、必要時に展開しやすい</Td>
              <Td>吸水用の水、吸水後重量、海水可否、処理</Td>
            </tr>
          </tbody>
        </Table>
        <P>
          通常の土のうが悪いという意味ではありません。砂や土を確保でき、設置要員も十分にいる現場では、今も実用的な手段です。
        </P>
        <P>
          ただ、広い工場で数十袋を短時間に並べる、使わない土砂を長期間保管する、撤去・処分する、といった負担が課題なら、簡易止水板や吸水式の備蓄用品を比較する価値があります。
        </P>

        <H2 id="wide-opening">広いシャッター・搬入口には連結式の簡易止水板</H2>
        <Figure
          src={IMG("modular-flood-barrier-wide-shutter.webp")}
          alt="広い倉庫シャッター前に連結式の簡易止水パネルを設置するイメージ"
        />
        <P>
          物流倉庫や工場の搬入口では、3m、5m、さらに長い間口を守りたいケースがあります。このような場所では、幅を連結で増やせる方式が使いやすくなります。
        </P>
        <H3>積水 プラバリア SPBBS＋SPBES</H3>
        <P>
          基本セットSPBBSは止水幅約1.6m。延長セットSPBESは約0.8mずつ止水幅を延長できます。たとえば「入口が約3.2mだから延長を2つ」と机上だけで決めるのではなく、パネルの設置位置、壁際の納まり、角度、周辺設備との干渉を含めて確認してください。
        </P>
        <Table>
          <thead>
            <tr>
              <Th>商品</Th>
              <Th>役割</Th>
              <Th>止水幅の目安</Th>
              <Th>止水高さ</Th>
              <Th>質量</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>SPBBS 基本セット</Td>
              <Td>水防ラインの土台</Td>
              <Td>約1.6m</Td>
              <Td>50cm</Td>
              <Td>13.9kg</Td>
            </tr>
            <tr>
              <Td>SPBES 延長セット</Td>
              <Td>基本セットを延長</Td>
              <Td>約0.8m追加</Td>
              <Td>50cm</Td>
              <Td>5.3kg</Td>
            </tr>
          </tbody>
        </Table>
        <p className={cls.meta}>
          ※数値は2026年8月時点のオレンジブック掲載情報。設置条件と最新仕様は購入時に商品ページ・メーカー情報を確認してください。
        </p>
        <ProductCard
          manufacturer="積水テクノ成型"
          name="簡易止水板 プラバリア 延長セット"
          model="SPBES"
          image={PROD("ta054368-spbes.jpg")}
          imageAlt="積水プラバリア延長セット"
          href={productUrls.spbes}
          dataCta="product-spbes"
          summary="基本セットSPBBSへ追加して止水幅を約0.8mずつ延長する部材です。長いシャッターや搬入口で必要幅に近づけるために使います。"
          specs={["延長止水幅 約0.8m", "止水高さ 50cm", "質量 5.3kg"]}
          fit={["SPBBSの止水幅を広げたい入口", "大型搬入口・シャッター"]}
          checks={[
            "延長セット単体では使用不可",
            "基本セットSPBBSが必須",
            "壁際の納まり・設置位置を現場確認",
          ]}
          ctaLabel="プラバリア 延長セット SPBESの商品ページを見る"
        />
        <H3>「止水高さ50cm」だけで判断しない</H3>
        <P>
          SPBBSは止水高さ50cmですが、法人導入では高さと同じくらい
          <Mark>設置奥行</Mark>
          も重要です。本体奥行は935mmなので、シャッター前に荷物や車止めがある、通路が狭い、といった場所では事前確認が必要です。
        </P>
        <P>
          止水板を立てる場所をテープで床にマーキングし、日常のフォークリフト動線や避難動線と干渉しないかまで見ておくと、緊急時の迷いが減ります。
        </P>

        <H2 id="folding-panel">角を含む入口や導水には折り畳み水害防止パネル</H2>
        <P>
          建物の外周が一直線とは限りません。柱を避けたい、壁の角を回したい、入口を完全に閉じるのではなく側溝方向へ水を誘導したい、といった場面では、角度を付けられるパネルが候補になります。
        </P>
        <ProductCard
          manufacturer="日大工業"
          name="ワニ印 水害防止パネル 備えあれ板 3枚"
          model="004954"
          image={PROD("ta053757-004954.jpg")}
          imageAlt="折り畳み式の水害防止パネル備えあれ板"
          href={productUrls.wani004954}
          dataCta="product-004954"
          summary="3枚セットで、1枚あたり約2.3kg。工具なしでジョイントでき、折り畳んで保管できます。出入口やシャッター前に使えるほか、水を排水溝側へ誘導する使い方も想定されています。"
          specs={["1枚 幅0.7m × 高さ500mm", "1枚 約2.3kg", "3枚セット", "折り畳み・再利用可能"]}
          fit={[
            "通用口やエントランス",
            "一人あたりの持ち運び負担を抑えたい場所",
            "直線だけでなく角度を付けたい場所",
            "使用後に洗って繰り返し備えたい事業所",
          ]}
          checks={[
            "初期の軽度浸水を想定した商品",
            "突起のない平らなコンクリート・タイル等で使用",
            "強風時の重し・固定を検討",
            "津波・高潮発生時には設置しない",
          ]}
          ctaLabel="備えあれ板 004954の商品ページを見る"
        />
        <Caution title="備えあれ板の使用条件">
          <P>
            メーカー商品情報では、初期の軽度な浸水を想定した製品で、条件により漏水する場合があるとされています。設置場所は、コンクリートやタイルなど突起物のない平面が前提です。また、強風時は重しや固定が推奨されています。さらに、
            <strong>津波・高潮発生時には設置しない</strong>
            ことが使用条件として明記されています。
          </P>
        </Caution>
        <H3>角をつくるならコーナーパーツ 004959</H3>
        <P>
          備えあれ板には専用のコーナーパーツがあります。オレンジブック掲載情報では、出隅120度まで、入隅135度まで対応します。本体を何枚買うかだけでなく、「入口の左右で壁が折れている」「柱を避けてL字にしたい」といった現場では、コーナー部材を含めた配置図を先に作っておきましょう。
        </P>
        <CompactProductLink
          name="ワニ印 備えあれ板 コーナーパーツ"
          model="004959"
          summary="備えあれ板本体と組み合わせ、建物の角や折れた水防ラインへ対応する専用部材です。出隅120度まで、入隅135度まで対応します。"
          href={productUrls.wani004959}
          dataCta="product-004959"
        />

        <H2 id="aluminum">決まった開口部を繰り返し守るならアルミ脱着式も候補</H2>
        <P>毎回同じ通用口や入口に設置するなら、脱着式のアルミ止水板も比較対象になります。</P>
        <ProductCard
          manufacturer="UACJ"
          name="アルミ止水板 水用心 脱着式"
          model="MZTR001"
          image={PROD("ta054165-mztr001.jpg")}
          imageAlt="UACJアルミ止水板水用心"
          href={productUrls.mztr001}
          dataCta="product-mztr001"
          summary="幅2m、高さ550mm、質量14kgのアルミ製止水板です。オレンジブック掲載情報ではJIS A 4716のWs-3等級相当とされています。磁性板や取付用アタッチメントが付属するため、建具側の条件を含めて適合確認が必要です。"
          specs={[
            "幅 2m",
            "高さ 550mm",
            "奥行 33mm",
            "質量 14kg",
            "JIS A 4716 Ws-3等級相当（公開商品情報）",
          ]}
          fit={[
            "毎回守る入口が決まっている",
            "開口幅が製品条件に合う",
            "平時にアタッチメント等を準備できる",
            "樹脂パネルを前方へ広く展開するスペースが取りにくい",
          ]}
          checks={[
            "磁性板・取付用アタッチメントの施工条件",
            "コンクリートかつ平らな地面が使用条件",
            "実際の開口幅・建具との干渉",
          ]}
          ctaLabel="UACJ 水用心 MZTR001の商品ページを見る"
        />

        <H2 id="absorbent">止水板だけでなく吸水土のうを備える意味</H2>
        <Figure
          src={IMG("water-absorbing-sandbags-flood-stock.webp")}
          alt="工場の水害対策として吸水土のうを準備するイメージ"
        />
        <P>
          「止水板を買えば吸水土のうはいらない」とは限りません。工場・倉庫には、正面シャッター以外にも勝手口、機械室、屋外盤周辺、別棟入口など複数の弱点があります。主な搬入口は止水板で守り、残る小さな開口部や漏水の補完に吸水土のうを回すと、限られた予算でも水防ラインを広げやすくなります。
        </P>
        <ProductCard
          manufacturer="萩原工業"
          name="ウォーターバスタープラス"
          model="WBPシリーズ"
          image={PROD("ta053578-wbp7s.jpg")}
          imageAlt="萩原 ウォーターバスタープラス WBPシリーズ"
          summary="吸水土のう・止水シート・シート製容器を組み合わせ、高さ約20cmの土のう壁をつくるセットです。WBP7S、WBP14S、WBP21Sのラインナップがあります。オレンジブック掲載情報では、吸水時間は約1.5分、吸水後重量は約10kgです。"
          specs={[
            "高さ約20cmの土のう壁を形成",
            "吸水時間 約1.5分",
            "吸水後重量 約10kg/袋",
          ]}
          fit={[
            "止水板の下端や端部の補完",
            "複数入口や長いライン",
            "分散備蓄したい事業所",
          ]}
          checks={[
            "セット内容・止水シート寸法はモデルごとに異なる",
            "商品名だけで必要数を決めず各ページの最新セット内容を確認",
            "吸水後の回収人員を考える",
          ]}
          variants={[
            { label: "WBP7S", url: productUrls.wbp7s, dataCta: "product-wbp7s" },
            { label: "WBP14S", url: productUrls.wbp14s, dataCta: "product-wbp14s" },
            { label: "WBP21S", url: productUrls.wbp21s, dataCta: "product-wbp21s" },
          ]}
        />
        <ProductCard
          manufacturer="橋本クロス"
          name="クイック防水堤"
          model="QB125330"
          image={PROD("ta054232-qb125330.jpg")}
          imageAlt="橋本クロス クイック防水堤 QB125330"
          href={productUrls.qb125330}
          dataCta="product-qb125330"
          summary="20枚入りの吸水式防水堤です。吸水ポリマーが水を吸い、オレンジブック掲載情報では約5分で吸水、吸水後は1枚約20kgになります。保管時に土や砂を用意しなくてよい一方、使用時は吸水させる工程があります。"
          specs={[
            "20枚入り",
            "吸水時間 約5分",
            "吸水後 約20kg/枚",
            "吸水後厚さ 約100〜110mm",
          ]}
          fit={["複数入口の補完", "省スペース備蓄"]}
          checks={["海水では使用不可", "吸水させる場所・運搬手順", "使用後の処理"]}
          ctaLabel="クイック防水堤 QB125330の商品ページを見る"
        />
        <ProductCard
          manufacturer="丸和ケミカル"
          name="土No袋 箱型水槽付20枚セット"
          model="722-T20"
          image={PROD("ta053814-722t20.jpg")}
          imageAlt="丸和ケミカル 土No袋 箱型水槽付20枚セット"
          href={productUrls.t722}
          dataCta="product-722t20"
          summary="吸水土のう20枚に、膨らませるための専用水槽と脱水剤までまとめたセットです。防災倉庫に「必要なものを一式で置きたい」事業所では管理しやすい構成です。"
          specs={[
            "土No袋20枚＋脱水剤20個＋専用水槽1個",
            "吸水時間 約3分",
            "吸水後 約23kg/枚",
            "吸水後厚さ 約200mm",
          ]}
          fit={["必要資材を一式で管理したい拠点", "複数開口部の備蓄"]}
          checks={["海水では使用不可", "吸水後の重量", "脱水・撤去手順"]}
          ctaLabel="土No袋 722-T20の商品ページを見る"
        />

        <H2 id="comparison">一覧で比較：どの方式が自社に合う？</H2>
        <Table>
          <thead>
            <tr>
              <Th>商品・シリーズ</Th>
              <Th>方式</Th>
              <Th>高さ/止水高さの目安</Th>
              <Th>重量の目安</Th>
              <Th>向く場面</Th>
              <Th>特に確認したいこと</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>積水 プラバリア SPBBS</Td>
              <Td>連結式樹脂止水板</Td>
              <Td>50cm</Td>
              <Td>13.9kg/基本セット</Td>
              <Td>広い搬入口・シャッター</Td>
              <Td>奥行、必要幅、2名設置体制</Td>
            </tr>
            <tr>
              <Td>積水 SPBES</Td>
              <Td>延長セット</Td>
              <Td>50cm</Td>
              <Td>5.3kg</Td>
              <Td>SPBBSの幅延長</Td>
              <Td>基本セットが必須</Td>
            </tr>
            <tr>
              <Td>備えあれ板 004954</Td>
              <Td>折り畳みパネル</Td>
              <Td>50cm</Td>
              <Td>2.3kg/枚</Td>
              <Td>通用口、角度配置</Td>
              <Td>平滑床、風、軽度浸水想定</Td>
            </tr>
            <tr>
              <Td>備えあれ板 004959</Td>
              <Td>コーナー部材</Td>
              <Td>50cm</Td>
              <Td>2kg</Td>
              <Td>L字・角を含む配置</Td>
              <Td>本体との組み合わせ</Td>
            </tr>
            <tr>
              <Td>UACJ 水用心 MZTR001</Td>
              <Td>脱着式アルミ</Td>
              <Td>55cm</Td>
              <Td>14kg</Td>
              <Td>固定幅の入口</Td>
              <Td>取付、平らなコンクリート床</Td>
            </tr>
            <tr>
              <Td>WBPシリーズ</Td>
              <Td>吸水土のう＋シート</Td>
              <Td>約20cmの壁</Td>
              <Td>吸水後約10kg/袋</Td>
              <Td>補助・複数入口</Td>
              <Td>セット内容、回収方法</Td>
            </tr>
            <tr>
              <Td>QB125330</Td>
              <Td>吸水式防水堤</Td>
              <Td>吸水後厚さ約10〜11cm</Td>
              <Td>吸水後約20kg/枚</Td>
              <Td>備蓄・補完</Td>
              <Td>海水不可、吸水工程</Td>
            </tr>
            <tr>
              <Td>722-T20</Td>
              <Td>吸水土のう＋水槽</Td>
              <Td>吸水後厚さ約20cm</Td>
              <Td>吸水後約23kg/枚</Td>
              <Td>一式備蓄</Td>
              <Td>海水不可、撤去人員</Td>
            </tr>
          </tbody>
        </Table>
        <p className={cls.meta}>
          ※2026年8月時点のメーカー・オレンジブック公開情報をもとに整理。止水性能は設置条件に左右されます。「高さ」は製品外形や形成する壁の目安であり、すべてが同じ試験条件による止水性能値ではありません。購入前に各製品の最新仕様・使用条件を確認してください。
        </p>
        <CtaAside
          title="止水板をまとめて比較する"
          text="個別商品を決める前に、方式・サイズを広く見たい場合はこちらから比較できます。"
          href={ctas.stopBoards}
          label="止水板一覧を楽天市場で見る"
          dataCta="mid-stop-board-list"
        />

        <H2 id="examples">現場別：どの組み合わせが使いやすい？</H2>
        <H3>ケース1：通用口・小〜中間口を守りたい</H3>
        <P>
          毎回同じ場所を守るなら、開口幅に適合する脱着式アルミ止水板が候補です。設備工事やアタッチメントの準備が難しい場合は、折り畳みパネルや吸水土のうも比較します。
        </P>
        <ul className={cls.list}>
          <li>日常通行を邪魔しない保管方法か</li>
          <li>1〜2名で設置できるか</li>
          <li>扉が外開き・内開きのどちらか</li>
          <li>床に段差や見切り材がないか</li>
        </ul>
        <H3>ケース2：大型シャッター・搬入口を守りたい</H3>
        <P>
          長い間口では、土のうを何十袋も運ぶ負担が大きくなります。SPBBS＋SPBESのように、必要幅に合わせて連結する方式を比較しやすい場面です。ただし、広い入口ほど「奥行」が問題になります。フォークリフトの充電設備、パレット、車止めなどがある場合は、止水板を置くスペースを平時から空けておく必要があります。
        </P>
        <H3>ケース3：柱・角を回り込んで水を誘導したい</H3>
        <P>
          備えあれ板＋コーナーパーツのように、直線以外のレイアウトを作れる方式が候補です。入口を完全に塞ぐだけでなく、排水溝や低い側へ水を誘導できる場合があります。ただし、排水先の能力を超えれば別の場所であふれるため、排水経路全体を確認してください。
        </P>
        <H3>ケース4：複数の開口部を限られた予算で備えたい</H3>
        <P>
          最も被害が大きくなりそうな搬入口には繰り返し使える止水板を置き、勝手口や小さな開口部には吸水土のうを分散備蓄する考え方があります。すべての入口へ同じ製品を置くより、
          <Mark>重要度と浸水リスクで優先順位を付ける</Mark>
          方が、現実的なBCPになります。
        </P>

        <H2 id="mistakes">よくある失敗：購入したのに水害時に使えない7つのパターン</H2>
        <ol className={`${cls.list} list-decimal`}>
          <li>
            <strong>一度も試し設置していない</strong> — 説明書を防災倉庫に入れたままでは、緊急時に組み立て方で迷います。納品後の検収時に、そのまま試し設置まで行うのがおすすめです。
          </li>
          <li>
            <strong>図面寸法だけで購入した</strong> — シャッターレール、柱、巾木、設備配管などで有効幅は変わります。実際に止水板を置く位置で実測します。
          </li>
          <li>
            <strong>床面を見ていなかった</strong> — 平らなコンクリートを前提とする製品を、凹凸の大きいアスファルトやグレーチング上へ置こうとしても、想定通りに設置できないことがあります。
          </li>
          <li>
            <strong>延長セットだけを購入した</strong> — SPBESは延長用です。基本セットSPBBSがなければ、水防ラインとして使用できません。セット品とオプション品を商品名だけで判断しないようにします。
          </li>
          <li>
            <strong>吸水土のうならどんな水でも使えると思った</strong> — QB125330や722-T20は、メーカー情報で海水使用不可とされています。沿岸部では高潮・津波を含む想定災害を分けて選定してください。
          </li>
          <li>
            <strong>雨が強くなってから設置を始めた</strong> — 水位が上がってから重いパネルや土のうを運ぶのは危険です。予報・警報、敷地前の水位、勤務体制を踏まえて、余裕を持って設置を始める基準を決めます。
          </li>
          <li>
            <strong>使用後の復旧を考えていない</strong> — 使用後の止水板は洗浄・乾燥、吸水土のうは回収・処理が必要です。使い切った備蓄は補充しなければ、次の豪雨に間に合いません。
          </li>
        </ol>

        <H2 id="checklist">法人で購入する前のチェックリスト</H2>
        <Figure
          src={IMG("flood-control-equipment-storage-warehouse.webp")}
          alt="止水板や吸水土のうを入口別に整理して保管する工場の防災備蓄イメージ"
        />
        <div className="my-6 grid gap-2 sm:grid-cols-2">
          {[
            "ハザードマップと浸水想定区域を確認した",
            "過去の道路冠水・敷地内浸水履歴を確認した",
            "守る入口に優先順位を付けた",
            "各開口部の有効幅を実測した",
            "想定する止水高さを決めた",
            "床面の材質、凹凸、段差、勾配を確認した",
            "製品を広げる奥行を確保できる",
            "夜間・休日を含めた設置人数を確認した",
            "保管場所から設置場所まで運搬できる",
            "設置開始の判断基準を決めた",
            "年1回以上、平時に試し設置する",
            "使用後の洗浄・乾燥・脱水・廃棄方法を決めた",
            "重要在庫・電気設備のかさ上げも検討した",
            "危険時は止水作業より避難を優先するルールを共有した",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-gray-200 px-4 py-3 text-[15px] leading-7 text-gray-900"
            >
              □ {item}
            </div>
          ))}
        </div>
        <H3>「入口ごとの管理表」を作ると迷いにくい</H3>
        <P>
          複数拠点で導入する場合は、商品名だけで在庫管理せず、入口単位で管理します。
        </P>
        <Table>
          <thead>
            <tr>
              <Th>管理項目</Th>
              <Th>記入例</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>場所</Td>
              <Td>第1倉庫 南側搬入口</Td>
            </tr>
            <tr>
              <Td>開口幅</Td>
              <Td>実測 3,180mm</Td>
            </tr>
            <tr>
              <Td>製品</Td>
              <Td>SPBBS＋SPBES×2 など</Td>
            </tr>
            <tr>
              <Td>保管場所</Td>
              <Td>搬入口右側 防災ラックA</Td>
            </tr>
            <tr>
              <Td>担当</Td>
              <Td>夜勤班長＋守衛</Td>
            </tr>
            <tr>
              <Td>設置開始</Td>
              <Td>社内水防基準レベル2</Td>
            </tr>
            <tr>
              <Td>試し設置日</Td>
              <Td>2026/06/15</Td>
            </tr>
            <tr>
              <Td>次回点検</Td>
              <Td>2027/05</Td>
            </tr>
          </tbody>
        </Table>
        <P>この表を製品の近くにも置いておくと、担当者が変わっても引き継ぎやすくなります。</P>

        <H2 id="timing">台風・大雨の前に決める設置タイミング</H2>
        <Figure
          src={IMG("factory-flood-barrier-dry-run-training.webp")}
          alt="大雨前に工場スタッフが止水用品の設置訓練を行うイメージ"
        />
        <P>
          止水用品は「いつ出すか」が重要です。発動基準は地域・施設によって変わるため、全国共通で「○mmの雨なら必ず設置」とは決められません。自社のハザードマップ、過去の浸水履歴、前面道路や側溝の状況、自治体の避難情報、気象情報を組み合わせて社内基準を作ります。
        </P>
        <div className="my-6 space-y-3">
          {[
            ["平時", "入口実測、製品ラベル、試し設置、担当者教育を行う。"],
            [
              "大雨の可能性が高まった段階",
              "止水板を保管棚の前へ出す。パーツ・工具・吸水土のうの在庫を確認する。床置きの重要物を上げる。",
            ],
            [
              "社内基準の設置段階",
              "安全に作業できるうちに入口へ設置する。設置後に写真を撮り、責任者へ共有する。",
            ],
            [
              "危険が迫った段階",
              "止水作業を続けず、人命・避難を優先する。",
            ],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-xl border-l-4 border-gray-900 bg-gray-50 p-4"
            >
              <p className="font-bold text-gray-900">{title}</p>
              <p className={`mt-1 ${cls.bodySm}`}>{body}</p>
            </div>
          ))}
        </div>
        <P>
          止水板の導入目的は、従業員を危険な場所に残すことではありません。短時間で準備を終えられる仕組みを平時につくり、危険になる前に現場を離れられる状態にしておくことが大切です。
        </P>

        <H2 id="shop-cta">水害対策用品をまとめて確認する</H2>
        <P>
          今回紹介した止水板・吸水土のう以外にも、水害時にはウェーダー、救助・避難用品、排水・復旧用品などが必要になる場合があります。「建物へ水を入れにくくする備え」と「浸水した後の安全な対応」は分けて考え、必要なものを拠点ごとに整理してください。
        </P>
        <CtaCardGrid />

        <H2 id="summary">まとめ｜製品スペックより「現場で設置できるか」で選ぶ</H2>
        <P>
          工場・倉庫の浸水対策で、止水板の高さや材質だけを比較しても、自社に合う製品は決まりません。シャッター・搬入口・通用口ごとに、
          <Mark>想定浸水深、開口幅、床面、設置人数、設置時間、保管動線</Mark>
          を確認し、その条件に合う方式を選びます。
        </P>
        <P>
          広い搬入口なら連結式の簡易止水板、角を含む配置なら折り畳みパネル、決まった入口を繰り返し守るなら脱着式アルミ、複数箇所の補完には吸水土のうというように、役割を分けると整理しやすくなります。
        </P>
        <P>
          そして、購入したら一度組み立てます。豪雨当日に説明書を開くのではなく、平時に「誰が・いつ・どこへ・何分で設置するか」を確認しておくことが、実際に使える水害対策につながります。入口の水防だけでなく、
          <Link
            href="/articles/business-disaster-stockpile-checklist"
            className="font-bold underline underline-offset-4"
          >
            食料・水・電源など事業所全体の防災備蓄
          </Link>
          もあわせて整理しておくと、BCP全体がつながりやすくなります。
        </P>

        <H2 id="faq">よくある質問</H2>
        <div className="my-6 divide-y divide-gray-200 rounded-2xl border border-gray-200">
          {faqs.map((faq) => (
            <details key={faq.q} className="group p-5">
              <summary className={`${cls.faqQ} cursor-pointer list-none`}>
                <span className="mr-2 text-gray-900">Q.</span>
                {faq.q}
              </summary>
              <p className={`mt-3 pl-7 ${cls.bodySm}`}>{faq.a}</p>
            </details>
          ))}
        </div>

        <H2>参考にした主な公的・メーカー情報</H2>
        <ul className={`${cls.list} list-none pl-0`}>
          <li>
            <a
              href="https://www.mlit.go.jp/common/001355104.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              国土交通省・経済産業省「建築物における電気設備の浸水対策ガイドライン」
            </a>
          </li>
          <li>
            <a
              href="https://www.chusho.meti.go.jp/pamflet/hakusyo/2019/2019/html/b3_2_2_2.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              中小企業庁「自然災害に対する備えの状況」
            </a>
          </li>
          <li>TRUSCO オレンジブック（各掲載商品の2026年8月時点公開情報）</li>
        </ul>

        <H2>関連記事</H2>
        <ul className={cls.list}>
          <li>
            <Link
              href="/articles/business-disaster-stockpile-checklist"
              className="font-bold underline underline-offset-4"
            >
              事業所の防災備蓄チェックリスト｜72時間・帰宅困難者対策・BCP対応の完全ガイド【2026年】
            </Link>
          </li>
          <li>
            <Link
              href="/articles/office-disaster-prevention-supplies"
              className="font-bold underline underline-offset-4"
            >
              会社の防災用品リスト｜オフィス・店舗・現場で備えたい備蓄品と選び方
            </Link>
          </li>
        </ul>

        <p className={cls.meta}>
          ※商品仕様、在庫、セット内容、使用条件は変更される場合があります。購入時はリンク先の商品ページ・メーカーの最新情報をご確認ください。
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
