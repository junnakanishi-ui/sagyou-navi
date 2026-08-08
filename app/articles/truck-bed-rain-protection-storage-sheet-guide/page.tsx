import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "truck-bed-rain-protection-storage-sheet-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const ARTICLE_TITLE =
  "トラック荷台の雨対策｜工具・資材を濡らさないアルミBOXとトラックシートの選び方【2026年版】";
const DESCRIPTION =
  "軽トラ・平ボディの荷台で工具や資材を雨から守る方法を解説。アルミ製BOX、トラックシート、ロープ、補修材の役割分担とサイズ選び、雨水がたまる失敗、法人車両での標準化まで実務目線で整理します。";
const PUBLISHED = "2026-08-09";
const CAMPAIGN =
  "utm_source=sagyou_navi&utm_medium=article&utm_campaign=truck_bed_rain_protection";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const ctas = {
  aluminumBox:
    "https://search.rakuten.co.jp/search/mall/%E3%82%A2%E3%83%AB%E3%83%9F%E8%A3%BD%EF%BC%A2%EF%BC%AF%EF%BC%B8/?sid=426972&" +
    CAMPAIGN,
  truckSheet:
    "https://search.rakuten.co.jp/search/mall/%E3%83%88%E3%83%A9%E3%83%83%E3%82%AF%E3%82%B7%E3%83%BC%E3%83%88/?sid=426972&" +
    CAMPAIGN,
  trusco:
    "https://item.rakuten.co.jp/crecote-shop/c/0000000043/?l-id=shoptop_shopmenu_categorypage_16&" +
    CAMPAIGN,
};

const productUrls = {
  bxa135gr: `https://item.rakuten.co.jp/crecote-shop/ta041128-bxa135gr/?${CAMPAIGN}`,
  astro: `https://item.rakuten.co.jp/crecote-shop/ta040679-2003000002027/?${CAMPAIGN}`,
  tskta: `https://item.rakuten.co.jp/crecote-shop/ta018475-tskta/?${CAMPAIGN}`,
  tets2: `https://item.rakuten.co.jp/crecote-shop/ta016107-tets2/?${CAMPAIGN}`,
  tets2f: `https://item.rakuten.co.jp/crecote-shop/ta016108-tets2f/?${CAMPAIGN}`,
  trk8: `https://item.rakuten.co.jp/crecote-shop/ta017977-trk8/?${CAMPAIGN}`,
  trk6: `https://item.rakuten.co.jp/crecote-shop/ta017976-trk6/?${CAMPAIGN}`,
  tsh322gn: `https://item.rakuten.co.jp/crecote-shop/ta018446-tsh322gn/?${CAMPAIGN}`,
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
        url: `${SITE_URL}${IMG("truck-bed-rain-protection-hero.jpg")}`,
        width: 1600,
        height: 900,
        alt: "軽トラックの荷台でアルミ製BOXとトラックシートを使い雨対策している様子",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ARTICLE_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG("truck-bed-rain-protection-hero.jpg")}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("truck-bed-rain-protection-hero.jpg")}`],
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
    q: "軽トラなら「軽トラック用」のシートを買えば、サイズ確認は不要ですか？",
    a: "不要とは言えません。荷台の実寸だけでなく、荷物をどの高さまで積むか、どこからシートを掛けるかで必要寸法が変わります。購入前に普段の積載状態を再現して測る方が確実です。",
  },
  {
    q: "アルミ製BOXなら、雨ざらしでも中身は濡れませんか？",
    a: "商品によります。アルミという材質だけで防水性能は判断できません。今回紹介したアストロプロダクツのピックアップトラックボックスは、メーカーが防滴・防水仕様ではないと明記しています。水濡れ厳禁の物を入れる場合は、各商品の注意事項を確認してください。",
  },
  {
    q: "トラックシートをしっかり縛れば、積荷の固定も兼ねられますか？",
    a: "積荷の養生と固縛は分けて考えます。国土交通省の資料でも、平ボディ車はシート掛けの前または後にロープ等で積荷を固縛するよう説明されています。積荷の重量や形状に応じた適切な固定方法を選んでください。",
  },
  {
    q: "2tトラックなら同じサイズのシートでよいですか？",
    a: "2t用にも、平張、高積、Wキャブ、ロングなどを想定した異なる寸法の商品があります。車格名だけでなく、荷台の長さと積み方を確認してください。",
  },
  {
    q: "トラックシートの中央に水がたまります。どうすればよいですか？",
    a: "荷物の配置やシートの張り方で谷ができていないか確認します。水が流れる方向を作れる掛け方や、積荷配置の見直しを検討します。走行時に不安定になる支えは使わず、安全な固定を優先してください。",
  },
  {
    q: "小さな破れは補修できますか？",
    a: "トラックシート用の補修・補強粘着シートがあります。ただし、広範囲の劣化や大きな裂け、固定部の著しい損傷は交換を検討します。補修後も走行時の安全な養生ができる状態か確認してください。",
  },
  {
    q: "アルインコ BXA065GR・135GR・150GRは何を基準に選べばよいですか？",
    a: "収納したい工具量だけでなく、BOXを置いた後に残したい荷台スペースで選びます。容量は121L、242L、271Lと増えますが、本体幅も大きくなります。荷台実寸を測り、普段の資材が積める余白を残してください。",
  },
] as const;

const tocItems = [
  { id: "quick-guide", label: "困りごと別の使い分け" },
  { id: "five-checks", label: "買う前の5つ確認" },
  { id: "aluminum-box", label: "アルミ製BOXで整理" },
  { id: "truck-sheet", label: "トラックシートで覆う" },
  { id: "sheet-types", label: "軽量シートとエステル帆布" },
  { id: "water-pooling", label: "濡れる・水がたまる原因" },
  { id: "securing", label: "シートは固縛の代わりにならない" },
  { id: "repair", label: "点検・補修" },
  { id: "field-sets", label: "現場別セット例" },
  { id: "fleet", label: "車格別標準セット" },
  { id: "mistakes", label: "ありがちな失敗" },
  { id: "checklist", label: "法人チェックリスト" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
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

function Table({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className={className ? `${cls.table} ${className}` : cls.table}>
        {children}
      </table>
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
  positioning?: string;
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
  positioning,
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
          {positioning && (
            <p className={`mt-2 ${cls.bodySm}`}>
              <span className="font-bold text-gray-900">他製品との位置づけ：</span>
              {positioning}
            </p>
          )}

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

function DualCtaGrid() {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2">
      <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className={cls.ctaH3}>アルミ製BOXをまとめて比較したい場合</p>
        <p className={`mt-2 ${cls.bodySm}`}>
          サイズ・容量・価格帯を一覧から確認できます。
        </p>
        <div className="mt-4">
          <RakutenCta
            href={ctas.aluminumBox}
            label="アルミ製BOX一覧を楽天市場で見る"
            dataCta="mid-aluminum-box-list"
            fullWidth
          />
        </div>
      </aside>
      <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className={cls.ctaH3}>軽トラ・1t・2t・4t用のシートを探す場合</p>
        <p className={`mt-2 ${cls.bodySm}`}>
          車格・寸法の候補を一覧から比較できます。
        </p>
        <div className="mt-4">
          <RakutenCta
            href={ctas.truckSheet}
            label="トラックシート一覧を楽天市場で見る"
            dataCta="mid-truck-sheet-list"
            fullWidth
          />
        </div>
      </aside>
    </div>
  );
}

function FinalCtaGrid() {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-3">
      <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className={cls.ctaH3}>アルミ製BOX一覧</p>
        <p className={`mt-2 ${cls.bodySm}`}>車載収納をサイズから比較する</p>
        <div className="mt-4">
          <RakutenCta
            href={ctas.aluminumBox}
            label="アルミ製BOX一覧を見る"
            dataCta="bottom-aluminum-box-list"
            fullWidth
          />
        </div>
      </aside>
      <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className={cls.ctaH3}>トラックシート一覧</p>
        <p className={`mt-2 ${cls.bodySm}`}>車格・積み方別に候補を探す</p>
        <div className="mt-4">
          <RakutenCta
            href={ctas.truckSheet}
            label="トラックシート一覧を見る"
            dataCta="bottom-truck-sheet-list"
            fullWidth
          />
        </div>
      </aside>
      <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-1">
        <p className={cls.ctaH3}>TRUSCO掲載品</p>
        <p className={`mt-2 ${cls.bodySm}`}>シート・ロープ・補修材などを確認</p>
        <div className="mt-4">
          <RakutenCta
            href={ctas.trusco}
            label="トラスコ中山掲載商品一覧を見る"
            dataCta="bottom-trusco-list"
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
          <span>トラック荷台の雨対策</span>
        </nav>

        <p className={`${cls.meta} font-bold`}>現場車両・運搬</p>
        <h1 className={cls.h1}>{ARTICLE_TITLE}</h1>
        <div className={`mt-4 flex flex-wrap gap-x-5 gap-y-2 ${cls.meta}`}>
          <span>執筆：作業用品ナビ編集部</span>
          <time dateTime={PUBLISHED}>公開・更新：2026年8月9日</time>
        </div>

        <Figure
          src={IMG("truck-bed-rain-protection-hero.jpg")}
          alt="軽トラックの荷台でアルミ製BOXとトラックシートを使い雨対策している様子"
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
          現場へ向かう途中で急に雨が強くなり、軽トラの荷台に積んだ電動工具や段ボールを慌てて養生した。シートを掛けていたのに、現場へ着いたら中央に雨水がたまり、端から水が回っていた。こうした経験がある会社は少なくありません。
        </P>
        <P>
          平ボディや軽トラックは、積み降ろしがしやすい一方、荷台が外気にさらされます。だからといって「大きめのシートを1枚積んでおけばよい」と考えると、使い勝手や安全面で別の問題が出てきます。
        </P>
        <P>
          雨に弱い工具と、荷台全体を覆いたい資材では、向いている対策が違います。さらに、雨よけのシートと積荷を固定するためのロープも役割が同じではありません。
        </P>
        <P>
          この記事では、軽トラから1t・2t・4tクラスまでを想定し、
          <Mark>
            アルミ製BOX、トラックシート、荷締めロープ、シート補修材をどう使い分けるか
          </Mark>
          を現場目線で整理します。
        </P>

        <AnswerBox>
          <p>
            濡らしたくない小物はアルミ製BOX、荷台全体はトラックシート、積荷の固定はロープ等、シートの傷みは点検・補修と役割を分けると選びやすくなります。アルミBOXでも防水仕様とは限らない点に注意してください。
          </p>
        </AnswerBox>

        <H2 id="quick-guide">先に整理｜荷台の困りごとごとに、使う用品は変わる</H2>
        <Table>
          <thead>
            <tr>
              <Th>困っていること</Th>
              <Th>まず検討したい対策</Th>
              <Th>考え方</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>電動工具・測定器・小物を毎日出し入れする</Td>
              <Td>アルミ製BOX・車載BOX</Td>
              <Td>
                荷台全体を毎回めくるより、よく使う物をまとめて収納しやすい
              </Td>
            </tr>
            <tr>
              <Td>木材・資材・段ボールなど荷台全体を雨から守りたい</Td>
              <Td>トラックシート</Td>
              <Td>
                車格だけでなく、荷物の高さと掛け方を含めてサイズを選ぶ
              </Td>
            </tr>
            <tr>
              <Td>走行中の荷ずれ・荷崩れが心配</Td>
              <Td>ロープ・適切な固縛用品</Td>
              <Td>シートとは別に積荷そのものを固定する</Td>
            </tr>
            <tr>
              <Td>シートの擦れや小さな破れが気になる</Td>
              <Td>補修・補強材、必要に応じ交換</Td>
              <Td>小さな傷みの段階で点検し、広がる前に対応する</Td>
            </tr>
          </tbody>
        </Table>
        <P>
          荷台の雨対策は、すべてを一つの用品で解決しようとしない方が運用しやすくなります。
          <Mark>
            濡らしたくない小物はBOX、荷台全体はシート、積荷の固定はロープ等、シートの傷みは点検・補修
          </Mark>
          と役割を分けると、何を買うべきか判断しやすくなります。
        </P>
        <P>
          なお、アルミ製BOXであっても防水仕様とは限りません。収納する物が水濡れ厳禁なら、商品ごとの防滴・防水に関する注意事項まで確認してください。
        </P>
        <DualCtaGrid />

        <H2 id="five-checks">荷台の雨対策用品を買う前に、まず5つ確認する</H2>
        <Figure
          src={IMG("truck-bed-box-vs-sheet-role.jpg")}
          alt="荷台でアルミ製BOXに小物を入れ、資材をトラックシートで覆う役割分担のイメージ"
        />
        <P>
          サイズ表から商品を選ぶ前に、実際の車両と普段の積み方を一度確認しておくと失敗を減らせます。
        </P>

        <H3>1. 荷台の実寸を測る</H3>
        <Figure
          src={IMG("measure-truck-bed-before-buying.jpg")}
          alt="トラック荷台の幅・長さ・あおり高さをメジャーで実測している様子"
        />
        <P>
          「軽トラだから軽トラ用」「2tだから2t用」と車格だけで決めるのは避けたいところです。
        </P>
        <P>
          荷台の幅と長さに加え、あおりの高さ、鳥居の位置、フックの位置、BOXを置く場合の設置スペースも確認します。メーカー側も車種によっては収まらない場合があるため、購入前の実測を案内している製品があります。
        </P>
        <P>
          アルインコの万能アルミボックスBXAも、公式ページで一部の軽トラックには入らない場合があるとして、荷台寸法の事前確認を案内しています。
        </P>

        <H3>2. 「空の荷台」ではなく、荷物を積んだ状態の高さを見る</H3>
        <P>トラックシートで見落としやすいのが高さです。</P>
        <P>
          同じ荷台でも、平らに積むのか、コンテナや資材を高く積むのかで必要なシート寸法は変わります。荷台寸法だけに合わせて買うと、実際に荷物を載せたときに側面まで十分に回らないことがあります。
        </P>
        <P>
          普段の積載で最も高くなる状態を一度作り、どこからどこまでシートを掛けるかまで見ておくと選びやすくなります。
        </P>

        <H3>3. 「絶対に濡らしたくない物」と「シート養生でよい物」を分ける</H3>
        <P>荷台に積む物を一括りにしないことも大切です。</P>
        <P>
          たとえば、電動工具、レーザー測定器、バッテリー、図面や書類と、単管・カラーコーン・養生材では、水濡れに対する許容度が違います。
        </P>
        <P>
          頻繁に使う小物まで毎回シートの下へ入れると、取り出すたびに掛け直す手間が発生します。こうした物は車載BOXへまとめ、かさばる資材はシートで覆う方が、現場では扱いやすいケースがあります。
        </P>

        <H3>4. 1日に何回取り出すかを見る</H3>
        <P>
          収納用品は「入るか」だけでなく「取り出しやすいか」も重要です。
        </P>
        <P>
          朝積んで夕方まで触らない荷物なら全面をしっかり養生できます。一方、現場を移動するたびに工具を取り出す車両では、シートを何度も外す運用は負担になります。
        </P>
        <P>
          荷台の奥にBOXを置くのか、鳥居側に横長BOXを置くのか、開閉時に他の積荷と干渉しないかまで確認しておくと、導入後の使い勝手が変わります。
        </P>

        <H3>5. 雨よけと積荷固定を分けて考える</H3>
        <P>ここは安全面でも重要です。</P>
        <P>
          国土交通省のトラック事業者向け資料では、雨天時には積荷を濡らさないようシートを掛け、走行中にシートが膨らんだり、はがれたりしないよう十分に固定するとしています。そのうえで、平ボディ車ではシート掛けの前または後にロープ等で積荷を固縛するよう示されています。
        </P>
        <P>
          つまり、
          <Mark>
            シートをしっかり掛けることと、積荷そのものを固定することは別の作業
          </Mark>
          です。
        </P>

        <H2 id="aluminum-box">電動工具・測定器・小物はアルミ製BOXで整理する</H2>
        <P>
          軽トラや平ボディで毎日工具を運ぶなら、まず「雨のたびにシートの下へ逃がしている物」がないか見てみてください。
        </P>
        <P>
          インパクトドライバー、充電器、予備バッテリー、測定器、小型工具、消耗品などは、荷台の決まった場所へまとめておくと探す時間を減らせます。BOXに施錠用金具がある製品なら、車両を離れる際の管理もしやすくなります。
        </P>
        <P>
          ただし、アルミという素材だけを見て「防水」と判断しないことが大切です。
        </P>

        <H3>アルインコ BXA-GRは、必要容量に合わせて3サイズから考える</H3>
        <P>
          アルインコのODグリーン色BXA-GRシリーズは、今回取り上げる商品では065・135・150の3サイズがあります。
        </P>
        <Table>
          <thead>
            <tr>
              <Th>型式</Th>
              <Th>最大外寸法</Th>
              <Th>製品重量</Th>
              <Th>最大使用容量</Th>
              <Th>向きやすい使い方</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>BXA065GR</Td>
              <Td>W660×D527×H470mm</Td>
              <Td>約8.5kg</Td>
              <Td>121L</Td>
              <Td>工具を絞って載せたい、荷台スペースを多く残したい</Td>
            </tr>
            <tr>
              <Td>BXA135GR</Td>
              <Td>W1360×D527×H470mm</Td>
              <Td>約15.0kg</Td>
              <Td>242L</Td>
              <Td>軽トラで横長の車載収納を作りたい</Td>
            </tr>
            <tr>
              <Td>BXA150GR</Td>
              <Td>W1510×D527×H470mm</Td>
              <Td>約19.0kg</Td>
              <Td>271L</Td>
              <Td>収納量を優先し、荷台寸法に余裕がある</Td>
            </tr>
          </tbody>
        </Table>
        <P>
          寸法・容量はアルインコ公式の2026年8月確認値です。車種や荷台の架装によって収まり方は変わるため、購入前に実測してください。
        </P>

        <ProductCard
          manufacturer="ALINCO"
          name="万能アルミ製BOX"
          model="BXA135GR"
          image={PROD("ta041128-bxa135gr.jpg")}
          href={productUrls.bxa135gr}
          dataCta="product-bxa135gr"
          ctaLabel="ALINCO BXA135GRの商品ページを見る"
          summary="南京錠を使える金具があるため、車載工具の管理方法を決めやすい製品です。"
          positioning="BXA065GRより容量を確保しながら、BXA150GRほど横幅を取らない中間サイズ。"
          specs={[
            "最大外寸：W1360×D527×H470mm",
            "製品重量：約15.0kg",
            "最大使用容量：242L",
          ]}
          fit={[
            "軽トラで電動工具・小型機器・消耗品をまとめて運ぶ工事会社、設備会社、造園会社など",
          ]}
          checks={[
            "ODグリーンのBXA-GR型には、BOX本体をトラック等へ固定する金具が付属しない",
            "荷台実寸と設置スペースを購入前に測る",
            "防水性能は商品ページの最新注意事項を確認する",
          ]}
        />

        <H3>小さければよい、大きければよいではない</H3>
        <P>
          大容量BOXは便利ですが、荷台を占有します。BOXを大きくしすぎると、長尺材やコンテナを積む場所が減り、かえって使いづらくなることがあります。
        </P>
        <P>
          車載BOXを決める際は、次の順で考えると整理しやすくなります。
        </P>
        <ol className="my-4 list-decimal space-y-2 pl-6 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
          <li>毎日必ず載せる工具を並べる</li>
          <li>それらの収納量を見積もる</li>
          <li>BOXを置いた状態で、残りの荷台に普段の資材が積めるか確認する</li>
          <li>フタを全開にしたとき、鳥居や積荷に当たらないか確認する</li>
          <li>車両への固定方法を決める</li>
        </ol>
        <P>
          「空いている荷台に入る最大BOX」ではなく、「仕事で使う荷台レイアウトの中で邪魔にならないBOX」を選ぶ方が実用的です。
        </P>

        <H3>アルミBOXでも、防滴・防水とは限らない</H3>
        <Caution title="アルミ＝防水ではない">
          <p>
            アストロプロダクツのピックアップトラックボックスは、軽トラックの荷台向けの大型アルミBOXですが、メーカー公式で
            <strong>
              防滴・防水仕様ではなく、雨の中で使用すると水が浸入する恐れがある
            </strong>
            と明記されています。これは購入前に必ず知っておきたい情報です。
          </p>
        </Caution>

        <ProductCard
          manufacturer="アストロプロダクツ"
          name="ピックアップトラックボックス"
          image={PROD("ta040679-2003000002027.jpg")}
          href={productUrls.astro}
          dataCta="product-astro-pickup-box"
          ctaLabel="ピックアップトラックボックスの商品ページを見る"
          summary="荷台上で工具や道具を整理し、カギ付きBOXとして使いたい場合の比較候補です。水濡れ厳禁の機器を「BOXに入れたから大丈夫」と雨ざらしのまま保管する運用には向きません。"
          positioning="軽トラ荷台向け大型工具収納の比較候補。防水性能を前提にしない。"
          specs={[
            "外寸：W1235×D385×H385mm",
            "内寸：W1190×D340×H375mm",
            "荷台接地面：W1220×D370mm",
          ]}
          fit={["荷台上で工具や道具を整理し、カギ付きBOXとして使いたい場合"]}
          checks={[
            "防滴・防水仕様ではない",
            "濡らせない物を入れるなら、車庫保管、追加養生、収納物側の防水ケースなども含めて運用を考える",
          ]}
        />

        <CtaAside
          title="アルミ製BOXをサイズから探す"
          text="BOXをサイズから探したい場合は、アルミ製BOX一覧から比較できます。"
          href={ctas.aluminumBox}
          label="アルミ製BOX一覧を見る"
          dataCta="aside-aluminum-box-list"
        />

        <H2 id="truck-sheet">
          木材・段ボール・資材など荷台全体はトラックシートで覆う
        </H2>
        <P>
          BOXに入らない資材や、荷台全体をまとめて雨から守りたい場合はトラックシートが中心になります。
        </P>
        <P>
          ここで迷いやすいのがサイズです。今回の商品群だけでも、軽トラック、1t、2t、2t平張、2tWキャブ、2tロング、4tと複数があります。
        </P>

        <H3>車格・積み方別のシート早見表</H3>
        <P>
          以下は今回の商品群を「どの車両・積み方を想定した商品か」で整理した表です。
          <Mark>
            最終判断は車両の荷台実寸、荷物高さ、商品ページの最新適合表示を確認してください。
          </Mark>
        </P>
        <Table className="min-w-[720px]">
          <thead>
            <tr>
              <Th>用途の目安</Th>
              <Th>商品</Th>
              <Th>商品名上のサイズ</Th>
              <Th>選定時に見ること</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>軽トラック</Td>
              <Td>TRUSCO TS-KTA</Td>
              <Td>幅1700mm×長さ2.1m</Td>
              <Td>軽量性を重視するか、積荷高さをどこまで覆うか</Td>
            </tr>
            <tr>
              <Td>軽トラック・高積の候補</Td>
              <Td>ユタカメイク YHS-2</Td>
              <Td>210×240cm</Td>
              <Td>
                帆布タイプを使いたいか、積み方に対して長さが足りるか
              </Td>
            </tr>
            <tr>
              <Td>1t</Td>
              <Td>TRUSCO TS-1TA</Td>
              <Td>幅2100mm×長さ3.1m</Td>
              <Td>車両実寸と荷物高さ</Td>
            </tr>
            <tr>
              <Td>2t</Td>
              <Td>TRUSCO TS-2TA</Td>
              <Td>幅2300mm×長さ3.6m</Td>
              <Td>積荷高さ・掛け方</Td>
            </tr>
            <tr>
              <Td>2t・平張</Td>
              <Td>TRUSCO TETS-2-F</Td>
              <Td>幅2450mm×長さ3.5m</Td>
              <Td>高積用と混同しない</Td>
            </tr>
            <tr>
              <Td>2t</Td>
              <Td>TRUSCO TETS-2</Td>
              <Td>幅2900mm×長さ3.6m</Td>
              <Td>厚手エステル帆布を必要とする使用頻度か</Td>
            </tr>
            <tr>
              <Td>2t・Wキャブ</Td>
              <Td>TRUSCO TETS-2-WC</Td>
              <Td>幅2450mm×長さ2.5m</Td>
              <Td>荷台長の短いWキャブ用か</Td>
            </tr>
            <tr>
              <Td>2tロング</Td>
              <Td>TRUSCO TS-2TAL</Td>
              <Td>幅3000mm×長さ4.7m</Td>
              <Td>ロング荷台で必要な被覆範囲</Td>
            </tr>
            <tr>
              <Td>2tロング</Td>
              <Td>TRUSCO TETS-2L</Td>
              <Td>幅3200mm×長さ4.7m</Td>
              <Td>厚手・耐候性と掛け外し作業性のバランス</Td>
            </tr>
            <tr>
              <Td>4t</Td>
              <Td>TRUSCO TETS-4</Td>
              <Td>幅4600mm×長さ6.0m</Td>
              <Td>大判になるため重量・掛け作業も含める</Td>
            </tr>
          </tbody>
        </Table>
        <P>
          同じ「2t用」でも寸法が一つではないことが分かります。車両の呼び方だけで購入せず、平張なのか、高めに積むのか、Wキャブなのか、ロングなのかまで確認する必要があります。
        </P>

        <H3>軽トラで掛け外しが多いなら、シートの軽さも実務上の差になる</H3>
        <P>
          TRUSCOのトラックシートα TS-KTAは、メーカー情報ではポリオレフィン製で、エステル帆布と比べて軽量で持ち運びやすいことが特徴とされています。
        </P>
        <P>
          一日に何度も積み降ろしする軽トラなら、耐久性だけでなく「毎回一人で掛け外しできるか」も選定軸になります。
        </P>

        <ProductCard
          manufacturer="TRUSCO"
          name="トラックシートα"
          model="TS-KTA"
          image={PROD("ta018475-tskta.jpg")}
          href={productUrls.tskta}
          dataCta="product-tskta"
          ctaLabel="TS-KTAの商品ページを見る"
          summary="軽トラック用として設定され、ポリオレフィン製の軽さを生かしやすいタイプです。"
          positioning="掛け外し回数が多い軽トラ向けの代表候補。"
          specs={["商品名上のサイズ：幅1700mm×長さ2.1m", "素材：ポリオレフィン製"]}
          fit={["軽トラで資材を運び、シートの掛け外し回数が多い現場"]}
          checks={[
            "軽トラ用でも、積荷を高く載せる場合は必要な被覆範囲が変わる",
            "商品名の車格だけで決めず、普段の積載状態で確認する",
          ]}
        />

        <H3>長く使う業務車両では、厚手のエステル帆布も候補になる</H3>
        <P>
          掛け外しや走行が多く、シートを日常的に使う2tトラックでは、耐候性や生地の厚みを重視した製品も候補です。
        </P>
        <P>
          TRUSCOのエステルトラックシートTETSシリーズは、流通仕様上、プロ仕様の厚手生地、耐候性、丈夫さを特徴としている製品群です。
        </P>

        <ProductCard
          manufacturer="TRUSCO"
          name="エステルトラックシート"
          model="TETS-2"
          image={PROD("ta016107-tets2.jpg")}
          href={productUrls.tets2}
          dataCta="product-tets2"
          ctaLabel="TETS-2の商品ページを見る"
          summary="軽さだけでなく、生地の耐候性・丈夫さを重視したい場合の比較候補です。"
          positioning="2tで耐候性・丈夫さを重視する代表商品。"
          specs={["商品名上のサイズ：幅2900mm×長さ3.6m"]}
          fit={["2tクラスで、荷物輸送にシートを継続的に使う会社"]}
          checks={[
            "同じ2tでも平張用、Wキャブ、ロング用が別にあります",
            "自社車両の積み方と合う型式か確認してください",
          ]}
        />

        <H3>平張なら「平張用」が選びやすい</H3>
        <P>
          荷物を高く積まず、荷台に沿ってシートを掛ける運用なら、2t平張用として設定されたTETS-2-Fのような製品もあります。
        </P>

        <ProductCard
          manufacturer="TRUSCO"
          name="エステルトラックシート"
          model="TETS-2-F"
          image={PROD("ta016108-tets2f.jpg")}
          href={productUrls.tets2f}
          dataCta="product-tets2f"
          ctaLabel="TETS-2-Fの商品ページを見る"
          summary="2t平ボディで高積みを前提とせず、荷台全体を養生したい場合の候補です。"
          positioning="2t平張運用の代表比較。高積用と混同しない。"
          specs={["商品名上のサイズ：幅2450mm×長さ3.5m"]}
          fit={[
            "2t平ボディで高積みを前提とせず、荷台全体を養生したい場合",
          ]}
          checks={[
            "平張用の寸法は、高く積んだ荷物を側面まで十分に覆うための余裕を前提としていません",
            "普段の最大積載状態で確認してください",
          ]}
        />

        <CtaAside
          title="車格別にトラックシートを探す"
          text="車格別に一覧から探したい場合は、トラックシート一覧も利用できます。"
          href={ctas.truckSheet}
          label="トラックシート一覧を見る"
          dataCta="aside-truck-sheet-list"
        />

        <H2 id="sheet-types">
          軽さ重視のシートと、厚手のエステル帆布はどう使い分ける？
        </H2>
        <P>
          トラックシートは「一番丈夫なものを買えば正解」とも限りません。
        </P>
        <P>
          大判になるほど、掛ける・外す・たたむ・保管する作業が発生します。毎日何度も使う車両なら、作業者が扱える重さであることも重要です。
        </P>

        <H3>掛け外し回数が多いなら、作業性を見る</H3>
        <P>
          午前と午後で現場を移動し、そのたびに資材を出し入れする軽トラでは、シート掛けが面倒になると「近いから今日は掛けなくていいか」という運用になりがちです。
        </P>
        <P>
          このような車両では、軽量タイプを含め、無理なく扱える製品を選ぶ方が継続しやすくなります。
        </P>

        <H3>長距離・常用なら、耐候性と生地の仕様を見る</H3>
        <P>
          一方、シートを掛けたまま走る時間が長い、屋外で使う日数が多い、資材の角との接触が多い場合は、丈夫さや耐候性の比重が高くなります。
        </P>
        <P>
          TETSシリーズのような厚手エステル帆布は、こうした比較の候補になります。ただし、シートが丈夫でも角当たりやばたつきを放置すれば傷みます。生地だけに頼らず、掛け方と点検まで含めて考えます。
        </P>

        <H3>素材名だけで選ばず、実際の商品仕様を見る</H3>
        <P>
          「エステル」「ポリオレフィン」「帆布」などの素材名は比較の入口にはなりますが、実際には厚さ、ハトメ、付属バンド、適合車種、重量などが製品ごとに異なります。
        </P>
        <P>
          同じ素材名だけを見て横並びにせず、
          <Mark>
            自社の掛け外し頻度、走行距離、積荷形状、保管方法
          </Mark>
          に合わせて選ぶ方が失敗を減らせます。
        </P>

        <H2 id="water-pooling">シートを掛けたのに濡れる・水がたまる原因</H2>
        <Figure
          src={IMG("sagging-truck-sheet-rainwater.jpg")}
          alt="トラックシート中央に雨水がたまり、谷ができている様子"
        />
        <P>
          新品のシートでも、掛け方によっては雨水が入りやすくなります。
        </P>

        <H3>シートの中央に「谷」ができている</H3>
        <P>
          荷物と荷物の間に低い部分があると、そこへ雨水が集まります。水がたまるとシートが引っ張られ、ハトメや擦れている部分への負担も増えます。
        </P>
        <P>
          軽トラでは鳥居側を少し高くするなど、水が流れる傾斜を作れる掛け方が有効な場合があります。積荷の形状によっては、シートの下に適切な支えを設けることも検討します。
        </P>
        <P>
          ただし、走行中に動くような不安定な支えを入れるのは避け、積荷・車両の安全を優先してください。
        </P>

        <H3>側面まで回る余裕が足りない</H3>
        <P>
          シートの面積がぎりぎりだと、雨が横から吹き込んだときに端部から水が入りやすくなります。
        </P>
        <P>
          購入前に、上面の幅と長さだけでなく、荷物の高さ分を含めて「どこまで垂らしたいか」を見ておく理由がここにあります。
        </P>

        <H3>荷物の角や突起で同じ場所が擦れている</H3>
        <P>
          シートは、荷物の角と接触する部分から傷むことがあります。
        </P>
        <P>
          国土交通省資料でも、積荷を保護するために当て物をし、積荷へ直接ロープを当てないことなどが示されています。シートについても、毎回同じ角に強く当たる運用なら、保護材や積み方の見直しが必要です。
        </P>

        <H3>ハトメ周辺が傷んでいる</H3>
        <P>
          風でシートがばたつくと、固定点には繰り返し力がかかります。ハトメ周辺の生地が伸びたり、裂け始めたりしていないかを確認します。
        </P>

        <H3>走行風でばたついている</H3>
        <P>
          雨を防げても、走行中に大きく膨らむ掛け方ではシート自体への負担が増えます。
        </P>
        <P>
          国土交通省資料でも、雨天時にシートを掛けるだけでなく、走行中に膨らんだり、はがれたりしないよう十分に固定するよう示されています。
        </P>

        <H2 id="securing">トラックシートは積荷固定の代わりにならない</H2>
        <Figure
          src={IMG("cargo-securing-before-truck-sheet.jpg")}
          alt="トラックシートを掛ける前にロープで積荷を固縛している様子"
        />
        <P>
          荷台用品を選ぶとき、雨対策と安全対策を同じものとして扱わないことが大切です。
        </P>
        <P>
          シートは荷物を覆いますが、それだけで重量物や資材の移動を防ぐための固縛が完了するわけではありません。
        </P>
        <P>
          国土交通省の「トラック事業者編」では、平ボディ車について
          <Mark>
            シート掛けの前または後に、ロープ等で必ず積荷を固縛する
          </Mark>
          よう説明されています。また走行途中に固縛状態を点検することも示されています。
        </P>
        <P>
          荷締め用品は積荷の種類、重量、形状、車両、固定点などに応じて適切なものを選んでください。ロープの太さだけで一律に「この荷物まで固定できる」と判断するのは避けます。
        </P>

        <H3>9mmと12mmのKPトラックロープ</H3>
        <P>今回はユタカメイクのKPトラックロープを2サイズ取り上げます。</P>
        <Table>
          <thead>
            <tr>
              <Th>商品</Th>
              <Th>線径×長さ</Th>
              <Th>用途の考え方</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>TRK-8</Td>
              <Td>9mm×30m</Td>
              <Td>取り回しと必要強度を確認しながら選ぶ</Td>
            </tr>
            <tr>
              <Td>TRK6</Td>
              <Td>12mm×30m</Td>
              <Td>より太いロープが必要な場合の比較候補</Td>
            </tr>
          </tbody>
        </Table>
        <P>
          TRK-8はオレンジブックで、PEとポリエステルの混撚、軽量・強力・作業性の良いロープとして案内されています。TRK6もトラックの荷締め用途として掲載されています。
        </P>
        <P>
          ただし、実際の固縛では積荷条件に応じた安全な方法が必要です。商品ページの引張強度を見ただけで積載物の安全性を決めず、会社の積載・固縛基準に合わせてください。
        </P>

        <ProductCard
          manufacturer="ユタカメイク"
          name="KPトラックロープ"
          model="TRK-8"
          image={PROD("ta017977-trk8.jpg")}
          href={productUrls.trk8}
          dataCta="product-trk8"
          ctaLabel="TRK-8の商品ページを見る"
          summary="シートを「積荷固定の代用品」にするのではなく、積荷の固縛を別工程として考えるための用品候補です。"
          positioning="シートとは別に積荷を固定する用品の例。"
          specs={["仕様の目安：9mm×30m、両端アイ加工"]}
          fit={["シート養生とは別に、積荷の固縛を行う現場"]}
          checks={[
            "積荷の重量・形状・固定方法に対して適切か確認する",
            "ロープ径だけで安全性を断定しない",
          ]}
        />

        <ProductCard
          manufacturer="ユタカメイク"
          name="KPトラックロープ"
          model="TRK6"
          image={PROD("ta017976-trk6.jpg")}
          href={productUrls.trk6}
          dataCta="product-trk6"
          ctaLabel="TRK6の商品ページを見る"
          summary="9mmではなく、より太いロープを比較したい場合の候補です。"
          positioning="径違いの荷締めロープ比較。"
          specs={["仕様の目安：12mm×30m"]}
          fit={["より太いロープが必要な場合の比較候補"]}
          checks={[
            "積荷の重量・形状・固定方法に対して適切か、商品仕様と社内ルールを確認する",
          ]}
        />

        <H2 id="repair">小さな擦れ・破れは、広がる前に点検・補修する</H2>
        <Figure
          src={IMG("truck-sheet-repair-inspection.jpg")}
          alt="トラックシートのハトメ周辺や擦れを点検・補修している様子"
        />
        <P>
          トラックシートは「破れたら交換」だけで管理すると、傷みの発見が遅れます。
        </P>
        <P>
          毎日使う車両なら、シートをたたむときに次の3か所を見るだけでも状態を把握しやすくなります。
        </P>
        <ul className={cls.list}>
          <li>荷物の角が当たる位置</li>
          <li>ハトメ周辺</li>
          <li>折り目や、いつも同じ場所で擦れる部分</li>
        </ul>
        <P>
          小さな擦れや補強したい箇所には、トラックシート用の補修・補強粘着シートという選択肢があります。
        </P>

        <ProductCard
          manufacturer="TRUSCO"
          name="トラックシート補修・補強粘着シート"
          model="TSH-322GN"
          image={PROD("ta018446-tsh322gn.jpg")}
          href={productUrls.tsh322gn}
          dataCta="product-tsh322gn"
          ctaLabel="TSH-322GNの商品ページを見る"
          summary="擦れや小さな損傷への補修・補強を検討するときの候補です。"
          positioning="擦れ・小傷の早期補修例。"
          specs={["サイズ：320mm×2m"]}
          fit={["擦れや小さな損傷への補修・補強を検討するとき"]}
          checks={[
            "大きな裂け、広範囲な劣化、固定部の著しい損傷まで「補修材で延命すればよい」とは限らない",
            "走行時の安全な養生ができない状態ならシート交換を検討する",
            "2026年8月調査時点でオレンジブックには後継品表示があるため、購入時は最新の商品情報を確認する",
          ]}
        />

        <CtaAside
          title="TRUSCO掲載品をまとめて確認する"
          text="トラック関連以外も含め、TRUSCO掲載品をまとめて確認したい場合はこちら。"
          href={ctas.trusco}
          label="トラスコ中山掲載商品一覧を見る"
          dataCta="aside-trusco-list"
        />

        <H2 id="field-sets">現場別に考える荷台セット例</H2>
        <P>
          ここまでの商品を、実際の仕事でどう組み合わせるかを考えてみます。
        </P>
        <Table>
          <thead>
            <tr>
              <Th>現場</Th>
              <Th>BOX</Th>
              <Th>シート</Th>
              <Th>固縛・保守</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>電気・設備の軽トラ</Td>
              <Td>BXA065/135</Td>
              <Td>TS-KTA等</Td>
              <Td>ロープ別途・補修材常備</Td>
            </tr>
            <tr>
              <Td>建設2t平ボディ</Td>
              <Td>必要に応じ</Td>
              <Td>平張/通常/ロングから選定</Td>
              <Td>シート前後に固縛</Td>
            </tr>
            <tr>
              <Td>造園・農業軽トラ</Td>
              <Td>雨に弱い小物のみ</Td>
              <Td>かさばる資材をシート</Td>
              <Td>土汚れと工具を分離</Td>
            </tr>
          </tbody>
        </Table>

        <H3>電気・設備工事の軽トラ</H3>
        <P>
          <strong>よく載る物</strong>
          ：インパクト、測定器、充電器、バッテリー、配管部材、脚立、小型資材。
        </P>
        <P>
          この車両では、濡らしたくない工具をアルミBOXへまとめ、長尺材や段ボールなどBOXに入らない物を軽トラック用シートで覆う構成が考えやすいでしょう。
        </P>
        <ul className={cls.list}>
          <li>車載BOX：BXA065GR / BXA135GRなどを荷台スペースから選ぶ</li>
          <li>荷台シート：TS-KTAなどを実寸・積荷高さに合わせる</li>
          <li>固縛：積荷に合ったロープ・固縛用品を別途用意</li>
          <li>保守：補修材を営業所や倉庫に常備</li>
        </ul>
        <P>
          工具を取り出すたびに全面シートを外さなくてよくなるため、雨対策だけでなく日常の積み降ろしも整理できます。
        </P>

        <H3>建設・資材運搬の2t平ボディ</H3>
        <P>
          <strong>よく載る物</strong>
          ：建材、機器、段ボール、養生材、現場備品。
        </P>
        <P>
          2tでは「2t用」の一言で決めず、平張、高積、Wキャブ、ロングの違いを見ます。
        </P>
        <P>
          荷物を高く積まないならTETS-2-Fのような平張用、通常2t用ならTS-2TAやTETS-2、ロングならTS-2TALやTETS-2Lといった形で、まず積み方から候補を絞ります。
        </P>
        <P>
          シートを掛ける前後に積荷を適切に固縛し、走行途中の点検まで車両ルールに含めます。
        </P>

        <H3>造園・農業の軽トラ</H3>
        <P>
          <strong>よく載る物</strong>
          ：刈払機、手工具、肥料、資材、コンテナ、枝葉、農具。
        </P>
        <P>
          すべてをBOXへ入れる必要はありません。雨に弱い小物だけをBOXへ分け、かさばる資材やコンテナをシートで養生すると荷台を有効に使いやすくなります。
        </P>
        <P>
          土や水分が付く物と電動工具を分けることで、荷台整理もしやすくなります。
        </P>

        <H2 id="fleet">複数車両がある会社は「車格別標準セット」を決める</H2>
        <Figure
          src={IMG("fleet-truck-rain-protection-standardization.jpg")}
          alt="複数台の社用トラックで荷台雨対策の標準セットを台帳管理しているイメージ"
        />
        <P>
          1台だけなら、担当者が自分のシートサイズを覚えていれば回るかもしれません。しかし車両が5台、10台と増えると、「どのシートがどの車だったか」「破れたので同じ物を買いたいが型番が分からない」という問題が起きます。
        </P>
        <P>
          そこで、車両備品を次のように台帳化しておくと交換が楽になります。
        </P>
        <Table>
          <thead>
            <tr>
              <Th>管理項目</Th>
              <Th>記録例</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>車両ID</Td>
              <Td>東京-軽トラ03</Td>
            </tr>
            <tr>
              <Td>車格・仕様</Td>
              <Td>軽トラック／標準荷台</Td>
            </tr>
            <tr>
              <Td>荷台実寸</Td>
              <Td>幅○○mm×長さ○○mm</Td>
            </tr>
            <tr>
              <Td>通常の最大積荷高さ</Td>
              <Td>○○mm</Td>
            </tr>
            <tr>
              <Td>標準シート</Td>
              <Td>TS-KTA など</Td>
            </tr>
            <tr>
              <Td>車載BOX</Td>
              <Td>BXA135GR など</Td>
            </tr>
            <tr>
              <Td>BOX固定方法</Td>
              <Td>社内で決めた方法を記録</Td>
            </tr>
            <tr>
              <Td>固縛用品</Td>
              <Td>使用するロープ・ベルト等</Td>
            </tr>
            <tr>
              <Td>補修材保管場所</Td>
              <Td>倉庫A 棚3</Td>
            </tr>
            <tr>
              <Td>最終点検日</Td>
              <Td>2026-08-01</Td>
            </tr>
          </tbody>
        </Table>
        <P>
          この台帳があると、購買担当者が現場へ「何センチですか？」と毎回聞き直さずに済みます。
        </P>
        <P>
          さらに、同じ車格の車両ではできるだけ標準商品をそろえておくと、予備シートや補修材を共用しやすくなります。
        </P>

        <H2 id="mistakes">ありがちな失敗を、購入前に潰しておく</H2>

        <H3>「軽トラ用」と書いてあるので荷台を測らなかった</H3>
        <P>
          車種・架装・積荷高さによって必要寸法は変わります。BOXも一部車種では収まらない可能性があります。まず実測します。
        </P>

        <H3>大きいシートなら何にでも使えると思った</H3>
        <P>
          余りすぎるシートは固定箇所が増え、ばたつきや取り回しの負担につながります。大きさだけでなく、普段の積み方に合わせます。
        </P>

        <H3>アルミBOXだから完全防水だと思った</H3>
        <P>
          アルミは本体材質であり、防水性能を保証する言葉ではありません。実際にアストロプロダクツの掲載BOXは防滴・防水仕様ではありません。
        </P>

        <H3>BXA-GRにも固定金具が付属すると思った</H3>
        <P>
          アルインコ公式では、BXA-GR型には本体をトラック等へ固定する金具が付属しないと案内されています。固定方法は別途確認します。
        </P>

        <H3>シートを強く縛れば荷物も固定できると思った</H3>
        <P>
          雨よけの養生と積荷の固縛は分けます。平ボディでは、積荷そのものをロープ等で適切に固縛します。
        </P>

        <H3>小さな破れを「まだ使える」と放置した</H3>
        <P>
          雨の日に初めて漏れに気付く前に、角当たりやハトメ周辺を日常点検します。補修で対応できる段階か、交換すべき段階かを判断します。
        </P>

        <H2 id="checklist">法人でそろえる前のチェックリスト</H2>
        <P>
          複数台分をまとめて購入する場合は、発注前にこの項目を確認しておくと返品・買い直しを減らしやすくなります。
        </P>
        <ul className={cls.list}>
          <li>車両ごとに荷台の幅・長さ・あおり高さを測った</li>
          <li>普段の最大積荷高さを確認した</li>
          <li>雨に弱い工具と、シートで養生する資材を分けた</li>
          <li>BOXを置いた後に必要な荷台スペースが残るか確認した</li>
          <li>BOXのフタを開けたときに鳥居や積荷へ干渉しない</li>
          <li>BOXの固定方法を決めた</li>
          <li>BOXの防滴・防水に関する注意事項を確認した</li>
          <li>シートを平張／高積／Wキャブ／ロングから選び分けた</li>
          <li>積荷の固縛用品をシートとは別に用意した</li>
          <li>シートの擦れ・破れを点検する担当・タイミングを決めた</li>
          <li>補修材・予備シートの保管場所を決めた</li>
          <li>車両IDと採用品番を台帳に残した</li>
        </ul>

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

        <H2 id="summary">
          まとめ｜「雨よけ」「収納」「固縛」「保守」を分けると荷台用品を選びやすい
        </H2>
        <P>
          トラック荷台の雨対策では、まず何を濡らしたくないのかを分けることから始めます。
        </P>
        <P>
          電動工具や測定器など頻繁に取り出す小物は車載BOXへ。木材や段ボール、資材など荷台全体は、車格と積荷高さに合うトラックシートで養生します。積荷の安全な固定はシート任せにせず、ロープや適切な固縛用品で別に行います。そしてシートは破れてから慌てるのではなく、擦れやハトメ周辺を日常的に見ておくと交換時期を把握しやすくなります。
        </P>
        <P>
          複数の営業所や車両がある会社なら、車両ごとにバラバラに買うより、荷台寸法と採用品番を記録し、車格別の標準セットを決めておく方が管理も発注も簡単です。
        </P>

        <H3>商品を比較する</H3>
        <FinalCtaGrid />

        <H2>参考情報</H2>
        <ul className={`${cls.list} list-none pl-0`}>
          <li>
            <a
              href="https://www.mlit.go.jp/jidosha/anzen/03safety/resourse/data/truck_honpen2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              国土交通省「トラック事業者編」
            </a>
          </li>
          <li>
            <a
              href="https://alinco.co.jp/housing/product/detail/BXA/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              アルインコ「万能アルミボックス BXA」
            </a>
          </li>
          <li>
            <a
              href="https://www.astro-p.co.jp/i/2003000002027"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              アストロプロダクツ「ピックアップトラックボックス」
            </a>
          </li>
          <li>
            <a
              href="https://www.orange-book.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              TRUSCO オレンジブック.Com（各商品仕様）
            </a>
          </li>
        </ul>

        <H2>関連記事</H2>
        <ul className={cls.list}>
          <li>
            <Link
              href="/articles/tool-cabinet-moisture-control"
              className="font-bold underline underline-offset-4"
            >
              工具キャビネットの湿気対策
            </Link>
          </li>
          <li>
            <Link
              href="/articles/pelican-case-size-selection"
              className="font-bold underline underline-offset-4"
            >
              ペリカンケースのサイズ選び
            </Link>
          </li>
          <li>
            <Link
              href="/articles/milwaukee-packout-selection-guide"
              className="font-bold underline underline-offset-4"
            >
              Milwaukee PACKOUT選び方
            </Link>
          </li>
          <li>
            <Link
              href="/articles/board-material-transport-cart"
              className="font-bold underline underline-offset-4"
            >
              板材運搬台車
            </Link>
          </li>
        </ul>

        <p className={cls.meta}>
          ※商品仕様・在庫・後継品・適合情報は変更される場合があります。購入時はリンク先の商品ページ・メーカー最新情報をご確認ください。
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
