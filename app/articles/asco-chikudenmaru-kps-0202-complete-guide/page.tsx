import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const SLUG = "asco-chikudenmaru-kps-0202-complete-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const ARTICLE_TITLE =
  "アスコの蓄電丸 KPS-0202とは？IP65・2160Wh・使い方・ソーラー充電まで徹底解説【2026年版】";
const META_TITLE =
  "アスコの蓄電丸 KPS-0202とは？仕様・IP65・使い方を徹底解説【2026年】";
const SHORT_TITLE = "アスコの蓄電丸 KPS-0202徹底解説";
const DESCRIPTION =
  "アスコのポータブル電源「蓄電丸 KPS-0202」を徹底解説。定格2160Wh・2000W、使用中IP65、IK09、UPS、最大5台並列、ソーラー最大800W、Wi-Fi、低温時の制限、充電しながら使用する際の1500W制限、長期保管方法まで取扱説明書をもとに網羅します。";
const PUBLISHED = "2026-08-31";
const MODIFIED = "2026-08-31";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener";

const PRODUCT_URL = productData.mainProduct.url;
const SOLAR_URL = productData.supportProduct.url;
const SOLAR_INTERNAL =
  "/articles/portable-power-solar-charging-worksite-guide";

const ASCO_OFFICIAL =
  "https://ascoosk.co.jp/service/portable_powersupply/";
const GREEN_CROSS = "https://www.gc-select.com/products/1135910220";
const CRECOTE_SOURCE = "https://item.rakuten.co.jp/crecote-shop/kps-0202/";

const quickSpecs = [
  ["定格容量", "2160Wh（2000Whクラス）"],
  ["定格出力", "2000W（0～45℃）"],
  ["バッテリー", "リン酸鉄リチウムイオン（LFP）"],
  ["サイクル寿命", "2000回後80%以上（25℃）"],
  ["防塵・防水", "IP65（使用中）"],
  ["耐衝撃", "IK09"],
  ["UPS", "切替10ms以下"],
  ["重量 / サイズ", "約41kg / L649×W431×H452mm"],
] as const;

const fullSpecRows = [
  ["メーカー", "株式会社アスコ"],
  ["商品名", "PORTABLE POWER SUPPLY 蓄電丸"],
  ["型式", "KPS-0202"],
  ["発売", "2025年3月"],
  ["定格容量", "2160Wh"],
  ["販売上の容量表現", "2000Whクラス"],
  ["定格出力", "2000W（セル温度0～45℃）"],
  ["低温時出力", "-20～0℃：1000W以下"],
  ["最大効率", "95%以上"],
  ["充電時間", "約3時間（25℃条件）"],
  ["バッテリー", "リン酸鉄リチウムイオン（LFP）"],
  ["サイクル寿命", "2000回後、容量80%以上（25℃条件）"],
  ["防塵・防水", "IP65"],
  ["耐衝撃", "IK09"],
  ["UPS", "切替10ms以下"],
  ["AC出力", "AC100V×2"],
  ["USB", "USB-A×1、USB-C×1"],
  ["USB最大出力", "18W"],
  ["PV入力", "12～60V、15A以下"],
  ["最大PV入力", "800W"],
  ["並列運転", "最大5台"],
  ["重量", "約41kg"],
  ["サイズ", "L649×W431×H452mm"],
  ["消火システム", "エアゾール式2個、酸素遮断"],
  ["作動条件", "内部温度180℃以上"],
  ["Wi-Fi", "本機ローカルWi-Fi（KPS-0202_XXXX）"],
] as const;

const runtimeRows = [
  { load: "100W", hours: "約21.6時間" },
  { load: "240W", hours: "約9時間" },
  { load: "500W", hours: "約4.32時間" },
  { load: "1000W", hours: "約2.16時間" },
  { load: "1500W", hours: "約1.44時間" },
  { load: "2000W", hours: "約1.08時間" },
] as const;

const chargeWhileUseRows = [
  { load: "600W以下", charge: "最大900W" },
  { load: "600～1050W", charge: "450W" },
  { load: "1050～1300W", charge: "200W" },
  { load: "1300～1500W", charge: "充電できない" },
  {
    load: "1500W超",
    charge: "AC出力を遮断し、充電を900Wで再開",
  },
] as const;

const buyChecklist = [
  "KPS-0202本体である",
  "必要な機器の定格消費電力を確認",
  "起動電力を確認",
  "同時使用する機器の合計負荷を確認",
  "2000Wで足りる",
  "約41kgを運搬できる",
  "設置場所が水平",
  "排吸気を塞がない",
  "IP65を水没対応と誤解していない",
  "必要ならソーラーパネル",
  "必要なら並列コード",
  "必要なら3～5台用拡張コネクター",
  "UPS接続機器との適合",
  "低温環境での出力制限",
  "長期保管時の点検担当",
] as const;

const useChecklist = [
  "濡れたプラグを接続しない",
  "出力時は防水カバーを閉じる",
  "クリップを確実に締める",
  "アースを使用して充電",
  "吸排気口を塞がない",
  "フィルターを定期確認",
  "低残量になったら早めに充電",
  "長期保管時は50%以上を目安",
  "2か月ごとに補充電",
  "異常表示時は取扱説明書を確認",
  "消火システム作動後は再使用しない",
] as const;

const faqs = [
  {
    q: "蓄電丸のメーカーはどこですか？",
    a: "株式会社アスコです。正式名称は「PORTABLE POWER SUPPLY 蓄電丸」、型式はKPS-0202です。",
  },
  {
    q: "「畜電丸 アスコ」で検索しました。同じ商品ですか？",
    a: "「畜電丸」は誤表記で、正式名称は「蓄電丸」です。KPS-0202という型式で確認すると確実です。",
  },
  {
    q: "容量は2000Whですか、2160Whですか？",
    a: "販売ページでは2000Whクラスとして紹介されていますが、アスコの取扱説明書・仕様書の定格容量は2160Whです。",
  },
  {
    q: "定格出力は何Wですか？",
    a: "0～45℃の条件で2000Wです。低温時は出力制限があります。",
  },
  {
    q: "雨の中でも使用できますか？",
    a: "メーカーは「使用中でもIP65」を特徴としています。ただし水没対応ではなく、濡れたプラグを挿さない、防水カバーを閉じる等、取扱説明書の条件を守る必要があります。",
  },
  {
    q: "IP65なら水に沈めても大丈夫ですか？",
    a: "いいえ。IP65は水没を示す等級ではありません。",
  },
  {
    q: "充電時間は？",
    a: "AC充電は環境温度25℃の条件で約3時間が目安です。",
  },
  {
    q: "ソーラー充電できますか？",
    a: "可能です。PV入力は12～60V、15A以下、最大800Wです。",
  },
  {
    q: "ACとソーラーを同時に充電できますか？",
    a: "メーカー取説では対応し、同時使用時はソーラー充電を優先すると案内しています。",
  },
  {
    q: "ソーラーパネルを2枚使えますか？",
    a: "取扱説明書では、指定条件内で2枚を直列接続する方法が案内されています。使用パネルと電圧条件を確認してください。",
  },
  {
    q: "充電しながら機器を使えますか？",
    a: "可能ですが、取扱説明書では充電中に機器を使う場合の最大出力は1500Wとされています。負荷によって充電効率も低下します。",
  },
  {
    q: "最大5台並列とは？",
    a: "2台は専用並列コード、3～5台は拡張コネクターを使用してシステムを拡張できます。必要な接続方法は販売店へ確認してください。",
  },
  {
    q: "UPSとして使えますか？",
    a: "UPS機能を備え、切替時間は10ms以下とされています。ただし接続機器側の許容条件と、用途の信頼性要件を確認してください。",
  },
  {
    q: "Wi-Fiで会社から遠隔監視できますか？",
    a: "取扱説明書では、本体付近でKPS-0202のWi-Fiへ接続し、ローカルページから状態を見る方式です。クラウド遠隔監視サービスとは異なります。",
  },
  {
    q: "冬の現場でも使えますか？",
    a: "低温環境では制限があります。セル温度-20～0℃では出力1000W以下、-20℃以下では出力・充電不可とされています。AC接続による自動加熱機能があります。",
  },
  {
    q: "長期保管はどうすればよいですか？",
    a: "電源をOFFにし、なるべく50%以上の残量を維持し、2か月ごとに補充電するようメーカーが案内しています。",
  },
  {
    q: "消火システムが作動した後も使えますか？",
    a: "使えません。メーカーは作動後の本機再使用不可としています。",
  },
  {
    q: "重量は？",
    a: "約41kgです。伸縮ハンドルとキャスターがありますが、階段や車両への積み下ろしは運搬計画が必要です。",
  },
] as const;

const relatedArticles = [
  {
    href: SOLAR_INTERNAL,
    label:
      "屋外現場でポータブル電源を長く使うには？充電切れ対策と200Wソーラーパネルの運用",
  },
  {
    href: "/articles/construction-portable-power-selection",
    label: "工事現場のポータブル電源の選び方｜容量・出力・用途別の目安",
  },
  {
    href: "/articles/outdoor-worksite-portable-power",
    label: "屋外現場で使うポータブル電源の選び方｜電源方式と防水・防塵",
  },
  {
    href: "/articles/business-disaster-stockpile-checklist",
    label: "事業所の防災備蓄チェックリスト｜72時間・BCP対応",
  },
] as const;

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: ARTICLE_TITLE,
    description: DESCRIPTION,
    type: "article",
    url: CANONICAL,
    siteName: "作業用品ナビ",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    images: [
      {
        url: `${SITE_URL}${IMG("chikudenmaru-worksite-power-concept.webp")}`,
        width: 1600,
        height: 900,
        alt: "雨天の工事現場でポータブル電源を活用する屋外電源のイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: DESCRIPTION,
    images: [
      `${SITE_URL}${IMG("chikudenmaru-worksite-power-concept.webp")}`,
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("chikudenmaru-worksite-power-concept.webp")}`],
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
  about: {
    "@type": "Product",
    name: "PORTABLE POWER SUPPLY 蓄電丸",
    model: "KPS-0202",
    brand: {
      "@type": "Brand",
      name: "アスコ",
    },
    sameAs: [ASCO_OFFICIAL, GREEN_CROSS, CRECOTE_SOURCE],
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

function ExtButton({
  href,
  children,
  tone = "amber",
}: {
  href: string;
  children: ReactNode;
  tone?: "amber" | "dark" | "outline";
}) {
  const toneClass =
    tone === "dark"
      ? "bg-slate-900 hover:bg-slate-800 text-white"
      : tone === "outline"
        ? "border-2 border-slate-900 bg-white text-slate-900 hover:bg-slate-50"
        : "bg-amber-600 hover:bg-amber-700 text-white";
  return (
    <ExtLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-xl px-5 py-3 text-center text-[15px] font-extrabold transition ${toneClass}`}
    >
      {children}
    </ExtLink>
  );
}

function Warning({
  title = "注意",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-6 rounded-xl border-2 border-red-500 bg-red-50 p-5">
      <p className="text-base font-black text-red-950">{title}</p>
      <div className="mt-2 text-[16px] leading-8 text-red-950">{children}</div>
    </aside>
  );
}

function Info({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-6 rounded-xl border-2 border-emerald-700 bg-emerald-50 p-5">
      <p className="text-base font-black text-emerald-950">{title}</p>
      <div className="mt-2 text-[16px] leading-8 text-emerald-950">
        {children}
      </div>
    </aside>
  );
}

function SpecMeaning({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-gray-300 bg-white p-5">
      <p className="text-sm font-bold text-gray-900">{label}</p>
      <p className="mt-2 text-[16px] leading-8 text-gray-900">{children}</p>
    </div>
  );
}

function Checklist({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: readonly string[];
}) {
  return (
    <section
      aria-labelledby={id}
      className="my-8 rounded-2xl border border-gray-300 bg-white p-5 sm:p-7"
    >
      <h3 id={id} className="text-2xl font-black text-gray-900 sm:text-3xl">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-[16px] leading-8 text-gray-900"
          >
            <span
              aria-hidden
              className="mt-1.5 inline-block h-4 w-4 shrink-0 rounded border-2 border-slate-800"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProductCard() {
  return (
    <aside
      aria-labelledby="main-product"
      className="my-10 border-2 border-amber-400 bg-amber-50 p-5 sm:p-7"
    >
      <p className="text-sm font-bold text-amber-950">
        本記事の解説対象｜株式会社アスコ
      </p>
      <div className="mt-4 grid gap-6 sm:grid-cols-[220px_1fr] sm:items-start">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <Image
            src={PROD("kps-0202.jpg")}
            alt="PORTABLE POWER SUPPLY 蓄電丸 KPS-0202の商品画像"
            width={600}
            height={600}
            priority
            className="h-auto w-full object-contain p-3"
          />
        </div>
        <div>
          <h2
            id="main-product"
            className="text-2xl font-black leading-snug text-gray-900 sm:text-3xl"
          >
            PORTABLE POWER SUPPLY 蓄電丸
          </h2>
          <p className="mt-2 text-[15px] font-bold text-gray-900">
            型式：KPS-0202 ／ 発売：2025年3月
          </p>
          <p className="mt-3 text-[16px] leading-8 text-gray-900">
            定格容量
            <Mark>2160Wh</Mark>
            （2000Whクラス）、定格出力
            <Mark>2000W</Mark>
            、使用中
            <Mark>IP65</Mark>
            、
            <Mark>IK09</Mark>
            、UPS切替
            <Mark>10ms以下</Mark>
            。現場・屋外・BCP向けのポータブル蓄電池です。
          </p>
          <div className="mt-5">
            <ExtButton href={PRODUCT_URL}>
              蓄電丸 KPS-0202の最新価格・在庫を見る →
            </ExtButton>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <SiteHeader />
      <main className="bg-white">
        <article className="mx-auto max-w-[850px] px-4 pb-16 pt-10 sm:px-6">
          <nav aria-label="パンくず" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-900">
              <li>
                <Link href="/" className="underline underline-offset-2">
                  ホーム
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/articles" className="underline underline-offset-2">
                  記事一覧
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-bold">{SHORT_TITLE}</li>
            </ol>
          </nav>

          <p className="mb-3 text-sm font-bold text-emerald-800">
            ポータブル電源・現場電源｜商品完全ガイド
          </p>
          <h1 className={cls.h1}>{ARTICLE_TITLE}</h1>
          <p className={cls.meta}>
            公開日：{PUBLISHED.replace(/-/g, "/")} ／ 更新日：
            {MODIFIED.replace(/-/g, "/")} ／ 読了目安：約25分
          </p>

          <Figure
            src={IMG("chikudenmaru-worksite-power-concept.webp")}
            alt="雨天の工事現場でポータブル電源を活用する屋外電源のイメージ"
            priority
          />

          <P>
            「蓄電丸って、普通のポータブル電源と何が違うのか」「アスコのKPS-0202を調べているけれど、2000Whと2160Whの両方が出てくる」「“完全防水”と書かれているが、本当に雨の中で使えるのか」——
            <strong>株式会社アスコ</strong>
            のポータブル電源
            <strong>蓄電丸（KPS-0202）</strong>
            について検索すると、メーカー公式、ニュース記事、レンタル会社、ECサイトなど複数の情報が出てきます。一方で、購入前に知りたい仕様から、実際に使う時の注意、長期保管、低温時の動作、Wi-Fi、UPS、ソーラー充電までを1ページで確認できる情報はまだ多くありません。
          </P>
          <P>
            そこでこの記事では、株式会社アスコの公式製品情報、KPS-0202の取扱説明書・仕様書、公開プレスリリース、Green
            Crossの商品情報などを照合し、
            <Mark>
              「蓄電丸について調べるなら、まずここを見れば全体が分かる」
            </Mark>
            状態を目指して整理します。
          </P>

          <section
            aria-labelledby="keypoints"
            className="my-8 border-y-4 border-emerald-800 bg-emerald-50 px-5 py-6 sm:px-7"
          >
            <h2
              id="keypoints"
              className="text-2xl font-black text-gray-900 sm:text-3xl"
            >
              先に結論｜蓄電丸 KPS-0202とは？
            </h2>
            <P>
              <strong>蓄電丸（KPS-0202）</strong>
              は、株式会社アスコが販売する、工事現場・屋外作業・災害時などを想定したポータブル蓄電池です。
            </P>
            <ul className={cls.list}>
              <li>
                2000Whクラス、取扱説明書上の定格容量は
                <Mark>2160Wh</Mark>
              </li>
              <li>
                定格出力
                <Mark>2000W</Mark>
              </li>
              <li>リン酸鉄リチウムイオン（LFP）</li>
              <li>約2000回の充放電後も容量80%以上を想定</li>
              <li>
                <Mark>使用中でもIP65</Mark>
                の防塵・防水性能
              </li>
              <li>
                <Mark>IK09</Mark>
                の耐衝撃保護等級
              </li>
              <li>
                UPS切替時間
                <Mark>10ms以下</Mark>
              </li>
              <li>AC100V×2、USB-A×1、USB-C×1（USB最大18W）</li>
              <li>
                ソーラー入力最大
                <Mark>800W</Mark>
                、AC＋ソーラー同時充電対応
              </li>
              <li>最大5台の並列運転に対応</li>
              <li>エアゾール式消火システムを2個内蔵</li>
              <li>本体約41kg、伸縮ハンドル・キャスター付き</li>
              <li>近距離Wi-Fiで本体状態をスマートフォンから確認可能</li>
            </ul>
            <P>
              メーカーは特に、
              <Mark>電源を使用している状態でもIP65を維持する点</Mark>
              を特徴として訴求しています。2025年のプレスでは「業界初」と案内されていましたが、これは
              <Mark>2025年当時のメーカー調べ</Mark>
              に基づく表現です。2026年現在も業界唯一とは断定しません。
            </P>
            <div className="mt-5">
              <ExtButton href={PRODUCT_URL}>
                蓄電丸 KPS-0202の最新価格・在庫を見る →
              </ExtButton>
            </div>
          </section>

          <ProductCard />

          <H2 id="typo">
            「畜電丸 アスコ」で検索した方へ｜正式名称は「蓄電丸」
          </H2>
          <P>
            検索時に「畜電丸 アスコ」と入力して、このページへ来た方もいるかもしれません。
          </P>
          <P>
            正式な商品名は、
            <Mark>PORTABLE POWER SUPPLY 蓄電丸</Mark>
            です。型式は
            <Mark>KPS-0202</Mark>
            です。
          </P>
          <P>
            「畜電丸」は正式表記ではありません。実際に一部の第三者サイトで「畜電丸」という表記例がありますが、メーカーである株式会社アスコの公式表記は一貫して
            <strong>「蓄電丸」</strong>
            です。今後、仕様書・取扱説明書・オプション品を探す場合は、「蓄電丸」「アスコ
            蓄電丸」「蓄電丸 KPS-0202」「KPS-0202」で確認すると情報を見つけやすくなります。
          </P>

          <H2 id="maker">蓄電丸は株式会社アスコのポータブル電源</H2>
          <P>
            蓄電丸を開発・販売しているのは、兵庫県伊丹市に本社を置く
            <strong>株式会社アスコ</strong>
            です。アスコは道路工事などで使用する高輝度LED表示機や保安製品などを手掛ける企業で、蓄電丸も一般家庭だけを主対象とするポータブル電源というより、
            <Mark>
              作業現場・屋外・災害・イベント等を強く意識した製品
            </Mark>
            として展開されています。
          </P>
          <P>
            2025年3月に発売され、2025年にはアスコ自身が「電源使用中でもIP65」のポータブル電源としてプレス発表しています。
          </P>

          <H2 id="specs">蓄電丸 KPS-0202の仕様一覧</H2>
          <P>まずスペックをまとめます。</P>
          <div className="my-6 overflow-x-auto rounded-xl border border-gray-300">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>項目</th>
                  <th className={cls.th}>KPS-0202</th>
                </tr>
              </thead>
              <tbody>
                {fullSpecRows.map(([label, value]) => (
                  <tr key={label}>
                    <td className={`${cls.td} font-bold`}>{label}</td>
                    <td className={cls.td}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            ※製品仕様は変更される可能性があるため、購入時は最新のメーカー資料・商品ページを確認してください。
          </P>

          <div className="my-8 grid gap-3 sm:grid-cols-2">
            {quickSpecs.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[7.5rem_1fr] gap-2 border-b border-gray-200 py-3"
              >
                <span className="text-[15px] font-bold text-gray-900">
                  {label}
                </span>
                <strong className="text-[15px] text-gray-900">{value}</strong>
              </div>
            ))}
          </div>

          <div className="my-8 grid gap-4 sm:grid-cols-2">
            <SpecMeaning label="What it means｜容量">
              定格2160Whは「蓄えられる電力量」。販売上の2000Whクラス表現との差は表記の違いです。
            </SpecMeaning>
            <SpecMeaning label="What it means｜出力">
              定格出力2000Wは「一度に出せる電力」。低温時や充電しながらの使用では制限があります。
            </SpecMeaning>
            <SpecMeaning label="What it means｜IP65">
              粉じん・噴流に対する侵入保護等級。水没OKや「どんな雨でも無条件」ではありません。
            </SpecMeaning>
            <SpecMeaning label="What it means｜Wi-Fi">
              本体付近のローカル接続。クラウド経由の遠隔監視サービスではありません。
            </SpecMeaning>
          </div>

          <div className="my-8">
            <ExtButton href={PRODUCT_URL}>
              最新価格・在庫を見る →
            </ExtButton>
          </div>

          <H2 id="wh-gap">「2000Wh」と「2160Wh」はどちらが正しい？</H2>
          <P>
            蓄電丸を調べると、<strong>2000Wh</strong>と
            <strong>2160Wh</strong>
            の両方が出てきます。これは検索者が迷いやすい部分です。
          </P>
          <P>
            楽天やGreen
            Crossなど販売ページでは「2000Wh」の大容量バッテリーとして紹介されています。一方、アスコの取扱説明書・仕様表では、
            <Mark>定格容量 2160Wh</Mark>
            と記載されています。
          </P>
          <Info title="本記事の整理">
            <Mark>
              「2000Whクラスのポータブル電源で、取扱説明書上の定格容量は2160Wh」
            </Mark>
            と整理します。スペック比較をする場合は2160Whを基準にし、商品カテゴリーや訴求上は2000Whクラスと理解するのが分かりやすいでしょう。
          </Info>

          <H2 id="ip65">最大の特徴｜「電源使用中でもIP65」とは？</H2>
          <Figure
            src={IMG("ip65-worksite-dust-rain-power-supply.webp")}
            alt="粉じんと雨のある屋外現場で防塵防水性能が求められる電源機器のイメージ"
          />
          <P>
            蓄電丸で最も特徴的なのがIP65です。メーカーは2025年の発表で、
            <Mark>
              電源使用中でもIP65の防塵・防水性能を備えるポータブル電源
            </Mark>
            として訴求しています（
            <Mark>2025年当時のメーカー調べ</Mark>
            ）。
          </P>

          <H3>IP65の「6」と「5」</H3>
          <P>
            IPコードは、2026年現在のJIS C 60529 / IEC
            60529で定義される、筐体の侵入保護性能を示すコードです。最初の数字は固形物・粉じんに対する保護、2つ目の数字は水に対する保護です。IP65では、防塵側：6／防水側：5の組み合わせです。
          </P>

          <H3>「完全防水」＝水没してよい、ではない</H3>
          <P>
            アスコは商品訴求として「IP65完全防水仕様」という表現を使っています。ただし、
            <Mark>IP65は水中使用や水没を意味する等級ではありません。</Mark>
            ここは購入前に必ず理解しておきたい点です。
          </P>
          <Warning title="取扱説明書上の重要条件">
            <ul className="list-disc space-y-1 pl-5">
              <li>濡れたプラグを出力ポートに挿し込まない</li>
              <li>出力使用時は透明カバーを閉じる</li>
              <li>3つのクリップを締めて密閉状態にする</li>
              <li>本体を水平に置く</li>
              <li>排気・吸気部分を塞がない</li>
            </ul>
          </Warning>
          <P>
            つまり、
            <Mark>
              「雨天・粉じん環境を考慮したIP65」ではあるが、接続部まで何をしてもよいわけではない
            </Mark>
            ということです。
          </P>

          <H2 id="why-ip65">なぜ工事現場でIP65が大きな意味を持つのか</H2>
          <P>
            一般的な屋内利用なら、ポータブル電源が直接雨へさらされる場面はそれほど多くありません。工事現場では違います。急な雨、土・砂・粉じん、屋外イベント、仮設電源、設備点検、河川・道路周辺、災害復旧など、電源機器にとって厳しい環境があります。
          </P>
          <P>
            そのため蓄電丸は、単純に「2160Whある」ことより、
            <Mark>
              現場へ持ち出す前提でIP65 / IK09まで持たせている
            </Mark>
            点に商品価値があります。
          </P>

          <H2 id="ik09">IK09とは？耐衝撃性能も現場向け</H2>
          <P>
            蓄電丸はIP65だけでなく、<Mark>IK09</Mark>
            にも対応しています。IKコードはIEC
            62262で定められる、機器筐体の外部からの機械的衝撃に対する保護等級です。IK09は
            <Mark>10J</Mark>
            の衝撃エネルギーに対応する等級です。
          </P>
          <Warning title="IK09の読み方">
            IK09だから落としてよい、転倒させてよいという意味ではありません。取扱説明書・安全ルールに従い、落下・転倒を避けて使用してください。
          </Warning>

          <H2 id="runtime">2160Wh・2000Wで何が使える？</H2>
          <Figure
            src={IMG("portable-power-capacity-output-worksite.webp")}
            alt="ポータブル電源で照明・PC・工具充電器へ給電するイメージ"
          />
          <P>
            ポータブル電源では、<strong>Wh（容量）</strong>と
            <strong>W（出力）</strong>
            を混同しないことが重要です。2160Whはどれくらい電気を蓄えられるか、2000Wは一度にどの程度の負荷へ出力できるかです。蓄電丸はこの2つが、
            <Mark>定格容量2160Wh / 定格出力2000W</Mark>
            という構成です。
          </P>

          <H3>使用時間の概算</H3>
          <P>
            単純な理論計算では、
            <Mark>使用時間 ≒ 2160Wh ÷ 消費電力W</Mark>
            で考えられます。
          </P>
          <div className="my-6 overflow-x-auto rounded-xl border border-gray-300">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>負荷</th>
                  <th className={cls.th}>理論上の単純計算</th>
                </tr>
              </thead>
              <tbody>
                {runtimeRows.map((row) => (
                  <tr key={row.load}>
                    <td className={cls.td}>{row.load}</td>
                    <td className={cls.td}>{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Warning title="実使用は短くなる">
            これは変換損失・待機電力・温度・バッテリー保護・機器の起動電力などを無視した理論値です。
            <Mark>実際の連続使用時間は短くなります。</Mark>
            特にモーター・コンプレッサー・冷却機器・電動工具などは、起動時に定格以上の電力を必要とする場合があります。
          </Warning>
          <P>
            購入前には、①通常消費電力 ②起動電力 ③同時に使う機器
            ④使用時間を確認してください。
          </P>

          <H3>現場では「何Wh」より使用機器を先に決める</H3>
          <P>
            例えば工事現場で使うなら、LED投光器、電動工具用充電器、ノートPC、タブレット、スマートフォン、通信機器、計測器、スポットクーラーなどが候補になります。「2000Wだから全部同時に使える」ではなく、
            <Mark>合計負荷と起動電力が出力条件に収まるか</Mark>
            を確認します。
          </P>

          <H2 id="lfp">リン酸鉄リチウムイオンと約2000サイクル</H2>
          <P>
            蓄電丸はリン酸鉄リチウムイオン（LFP）を採用しています。取扱説明書では、
            <Mark>2000回の充放電後、バッテリー容量80%以上</Mark>
            をサイクル寿命の目安として記載しています（環境温度25℃条件）。メーカーは「1日1回の使用で5年以上」という表現でも紹介しています。
          </P>
          <P>
            ただし、バッテリー寿命は使用温度、充放電負荷、長期保管、残量ゼロでの放置、保管温度などでも変わります。「2000回使えば必ず同じ性能」という意味ではありません。
          </P>

          <H2 id="storage">実は重要｜蓄電丸は長期保管ルールがある</H2>
          <Figure
            src={IMG("portable-battery-storage-maintenance.webp")}
            alt="防災備蓄用ポータブル蓄電池を定期点検するイメージ"
          />
          <P>
            防災備蓄としてポータブル電源を買い、
            <strong>倉庫へ入れたまま数年間触らない</strong>
            という運用は避ける必要があります。取扱説明書では長期保管について、本体電源をOFF、なるべくバッテリー残量
            <Mark>50%以上</Mark>
            を保つ、
            <Mark>2か月ごとに補充電</Mark>
            するよう案内されています。
          </P>
          <Warning title="空放置はNG">
            残量が空のまま長期間放置すると、バッテリーが使用できなくなる可能性があるとされています。防災用途で導入する法人ほど、
            <Mark>購入することより点検ルールを決めること</Mark>
            が重要です。
          </Warning>

          <H2 id="fire">エアゾール式消火システムを内蔵</H2>
          <P>
            蓄電丸には、エアゾール式消火装置が2個搭載されています。仕様は、エアゾール式：2個／消火方式：酸素遮断／作動条件：内部温度
            <Mark>180℃以上</Mark>
            です。万一の内部異常時に、火災リスクを抑えるための安全設計です。
          </P>
          <H3>作動後は再使用できない</H3>
          <Warning title="再使用禁止">
            メーカーは、
            <Mark>消火システムが作動した場合、本機は再使用不可</Mark>
            と明記しています。また、消火システムがあるから「絶対に火災が起きない」という意味でもありません。通常のリチウムイオンバッテリー製品と同様、取扱説明書に沿った設置・充電・保管が必要です。
          </Warning>

          <H2 id="charge">蓄電丸の充電時間は約3時間</H2>
          <P>
            AC100Vからの充電時間は、
            <Mark>約3時間</Mark>
            が目安です（環境温度25℃）。AC入力は100VAC±10%、入力電流10A以下です。実際の充電時間は、残量・温度・同時使用などで変わります。
          </P>

          <H2 id="solar">ソーラー充電も可能｜最大PV入力800W</H2>
          <Figure
            src={IMG("portable-power-solar-charging-construction-site.webp")}
            alt="電源のない屋外現場でソーラーパネルから蓄電池を充電するイメージ"
          />
          <P>
            蓄電丸はソーラー充電にも対応しています。本体側PV入力は、入力電圧：
            <Mark>12～60V</Mark>
            、入力電流：
            <Mark>15A以下</Mark>
            、最大充電パワー：
            <Mark>800W</Mark>
            です。メーカー指定のソーラーパネルを利用します。
          </P>

          <H3>専用200Wソーラーパネル</H3>
          <div className="my-6 grid gap-5 rounded-2xl border border-gray-300 bg-white p-5 sm:grid-cols-[180px_1fr] sm:p-6">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
              <Image
                src={PROD("sfm-200.jpg")}
                alt="蓄電丸向け200Wソーラーパネルの商品画像"
                width={400}
                height={400}
                className="h-auto w-full object-contain p-3"
              />
            </div>
            <div>
              <p className="text-[16px] leading-8 text-gray-900">
                主な仕様は、200W／幅1170×奥行780×高さ35mm／重量9.5kg／動作電圧18V／動作電流11.11Aです。
              </p>
              <div className="mt-4">
                <ExtButton href={SOLAR_URL} tone="outline">
                  蓄電丸向け200Wソーラーパネルを見る →
                </ExtButton>
              </div>
            </div>
          </div>

          <H3>1枚なら「200W ÷ 2160Wh」で10.8時間では？</H3>
          <P>
            単純計算なら約10.8時間ですが、実際にはそう単純ではありません。アスコの公開資料では、200Wパネル1枚でフル充電まで
            <Mark>約14.2時間</Mark>
            という参考値が掲載されています。さらに現場では、日射・天候・影・パネル角度・温度で発電量が変わります。「14.2時間で必ず満充電」とは考えないでください。
          </P>

          <H3>ソーラーパネルは2枚直列にも対応</H3>
          <P>
            取扱説明書では、指定条件内でソーラーパネル2枚を直列接続する方法も記載されています。重要なのは、
            <Mark>PV入力12～60V、最大800W</Mark>
            という本体条件を超えないことです。自己判断で他社パネルや接続方式を選ばず、メーカー指定・仕様を確認してください。
          </P>

          <H3>ACとソーラーは同時に充電できる</H3>
          <P>
            蓄電丸は、
            <Mark>AC充電＋ソーラー充電</Mark>
            の同時利用に対応しています。同時充電時は、メーカー説明ではソーラー充電を優先してAC電力を節約します。
          </P>
          <P>
            蓄電丸を屋外現場でソーラー補充する考え方は、こちらの記事で詳しく整理しています。
          </P>
          <p className="mb-6 text-[17px] leading-[1.95] text-gray-900">
            <Link
              href={SOLAR_INTERNAL}
              className="font-bold underline underline-offset-4"
            >
              関連：屋外現場でポータブル電源を長く使うには？充電切れ対策と200Wソーラーパネルの運用
            </Link>
          </p>

          <H2 id="charge-while-use">
            充電しながら使える？通常時2000Wと同じではない
          </H2>
          <P>
            ここは購入前にかなり重要です。取扱説明書では、AC充電しながらAC出力する場合、バッテリーからではなく家庭用電源から出力する仕様とされています。その際、接続機器の消費電力によって充電効率が変わります。
          </P>
          <div className="my-6 overflow-x-auto rounded-xl border border-gray-300">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>接続機器の消費電力</th>
                  <th className={cls.th}>充電側の目安</th>
                </tr>
              </thead>
              <tbody>
                {chargeWhileUseRows.map((row) => (
                  <tr key={row.load}>
                    <td className={cls.td}>{row.load}</td>
                    <td className={cls.td}>{row.charge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Warning title="最大1500W">
            取扱説明書では、
            <Mark>
              充電しながら電気機器を使用する場合の最大出力は1500W
            </Mark>
            とされています。通常時の定格出力2000Wと混同しないようにしてください。
          </Warning>

          <H2 id="parallel">最大5台まで並列運転できる</H2>
          <Figure
            src={IMG("parallel-portable-power-systems-concept.webp")}
            alt="複数のポータブル蓄電池を使って電源容量を拡張する概念イメージ"
          />
          <P>
            蓄電丸は必要電力量に応じ、最大5台まで並列運転できます。
          </P>
          <ul className={cls.list}>
            <li>
              <strong>2台</strong>：専用並列運転コードが必要
            </li>
            <li>
              <strong>3～5台</strong>
              ：専用拡張コネクターが必要で、受注生産扱いの案内があります
            </li>
          </ul>
          <P>
            大規模な災害時バックアップ、商業施設、複数機器を使う現場などで拡張性を持たせるための機能です。
          </P>
          <Warning title="並列の注意">
            「台数を増やせば1つのACコンセントから何Wでも出る」ではありません。並列運転では総容量・システム出力を拡張できますが、各ACソケットには製品側の出力条件があります。使いたい機器の消費電力・接続方法・並列構成は、導入前にアスコまたは販売店へ確認してください。
          </Warning>

          <H2 id="ups">UPS機能｜切替10ms以下</H2>
          <Figure
            src={IMG("portable-power-bcp-emergency-office.webp")}
            alt="停電時の事業所BCPでポータブル蓄電池から通信機器へ給電するイメージ"
          />
          <P>
            蓄電丸にはUPS機能もあります。取扱説明書・仕様書では、
            <Mark>運転切り換え時間10ms以下</Mark>
            と記載されています。停電が発生した際に、接続機器への電源をバックアップする用途を想定できます。
          </P>
          <H3>ただしミッションクリティカル用途は個別確認</H3>
          <Warning title="用途制限">
            取扱説明書では、本製品は医療機器・宇宙機器など、極めて高い安全性・信頼性を必要とする用途を目的として開発したものではないとしています。「UPS対応だから、どんな重要機器でも必ず使える」と判断しないでください。接続機器側が10msの切替に対応できるかも含め、用途ごとに確認が必要です。
          </Warning>

          <H2 id="wifi">
            Wi-Fi機能｜スマホで状態確認できるが「クラウド遠隔監視」ではない
          </H2>
          <P>
            アスコ公式は、Wi-Fiでスマートフォンから本機の状態を確認できると案内しています。ここだけ見ると、「会社から遠隔監視できるのか」と思うかもしれません。
          </P>
          <P>
            取扱説明書を見ると、仕組みが分かります。スマートフォンのWi-Fiから、
            <Mark>KPS-0202_XXXX</Mark>
            という本機のネットワークへ接続。その後、本機のローカルホームページへアクセスして、一部データを確認する方式です。
          </P>
          <Info title="Wi-Fiの実態">
            <Mark>
              蓄電丸本体の近くでWi-Fi接続して状態を見る機能
            </Mark>
            です。クラウド経由で遠隔地から監視するIoTサービスとは別物です。この違いは購入前に理解しておくとよいでしょう。
          </Info>

          <H2 id="cold">寒冷地で使える？低温時は出力が変わる</H2>
          <Figure
            src={IMG("cold-weather-portable-battery-worksite.webp")}
            alt="冬の屋外現場でポータブル電源の低温対策を確認するイメージ"
          />
          <P>
            蓄電丸は低温対策も特徴の一つです。アスコ公式では「バッテリー加熱システム搭載」と案内しています。取扱説明書ではさらに具体的に、次のとおりです。
          </P>
          <ul className={cls.list}>
            <li>
              <strong>バッテリーセル温度 -20～0℃</strong>
              ：バッテリー寿命保護のため、
              <Mark>出力1000W以下へ制限</Mark>
            </li>
            <li>
              <strong>-20℃以下</strong>：
              <Mark>出力・充電不可</Mark>
            </li>
            <li>
              <strong>0℃以下</strong>
              ：充電不可。AC充電ケーブルへ接続すると自動加熱し、0℃まで上昇すると充電を開始
            </li>
          </ul>
          <P>
            環境温度によっては、加熱に
            <Mark>約100～120分以上</Mark>
            かかる場合があるとされています。「-20℃でも2000Wをそのまま使える」という意味ではありません。
          </P>

          <H2 id="monitor">モニターで残量と使用可能時間を確認</H2>
          <P>
            本体前面のモニターでは、バッテリー残量、使用可能時間、充電 /
            放電パワー、AC出力状態、ソーラー充電、AC充電、警告などを確認できます。現場では「残り何％か」だけでなく、
            <Mark>今の負荷ならあとどの程度使えるか</Mark>
            を確認しやすいのが利点です。
          </P>
          <P>
            なお、メーカー資料では
            <Mark>
              40W未満の低負荷ではSOCを正しく読み取れない場合がある
            </Mark>
            と注意があります。残量表示は絶対値ではなく、運用判断の参考として使います。
          </P>

          <H2 id="maintenance">日常メンテナンス｜吸気フィルターも確認</H2>
          <P>
            取扱説明書では、吸気口フィルターを定期的に清掃するよう案内されています。汚れた場合はフィルターを取り外し、軽く流水で洗い、
            <Mark>十分乾かしてから使用</Mark>
            します。IP65対応だからメンテナンス不要というわけではありません。粉じんの多い現場ほど、吸排気とフィルター確認を点検項目へ入れておくと安心です。
          </P>

          <H2 id="good-for">蓄電丸が向く用途</H2>
          <div className="my-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "工事現場",
                "IP65・IK09、2000W、キャスター・ハンドルという構成が現場向け。",
              ],
              [
                "設備保全",
                "一時的に商用電源が取れない場所での電源確保。",
              ],
              ["屋外イベント", "照明・PC・通信等の仮設電源。"],
              ["災害・BCP", "停電時の電源バックアップ。"],
              ["仮設事務所", "PC、通信機器、照明等。"],
              [
                "商業施設",
                "非常時の電源確保や、並列運転を利用した拡張。",
              ],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-xl border border-emerald-700 bg-emerald-50 p-5"
              >
                <p className="text-lg font-black text-emerald-950">{title}</p>
                <p className="mt-2 text-[16px] leading-8 text-emerald-950">
                  {body}
                </p>
              </div>
            ))}
          </div>

          <H2 id="not-ideal">蓄電丸が向かない・要検討のケース</H2>
          <div className="my-6 grid gap-4">
            {[
              [
                "41kgを頻繁に階段で持ち運ぶ",
                "キャスターはありますが、本体は約41kgです。段差・階段・車両への積み下ろし方法を考えておく必要があります。",
              ],
              [
                "単体で2000Wを大きく超える機器",
                "並列や別電源を検討します。",
              ],
              [
                "水没する可能性がある",
                "IP65は水没対応ではありません。",
              ],
              [
                "長年、完全放置する防災備蓄",
                "2か月ごとの補充電が推奨されています。",
              ],
              [
                "医療など極めて高い信頼性を要求する用途",
                "用途適合性を個別に判断してください。",
              ],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-xl border border-amber-500 bg-amber-50 p-5"
              >
                <p className="text-lg font-black text-amber-950">{title}</p>
                <p className="mt-2 text-[16px] leading-8 text-amber-950">
                  {body}
                </p>
              </div>
            ))}
          </div>

          <H2 id="price">蓄電丸の価格はいくら？</H2>
          <P>
            2025年のアスコ公式プレス発表では、
            <Mark>希望小売価格 660,000円（税込）</Mark>
            と案内されていました。その後、販売店や時期によって価格は変わります。
          </P>
          <P>
            Green
            Cross-selectでは2026年8月末時点で別の販売価格表示も確認できます。楽天市場のCRECOTEでは価格が動的に変わる可能性があるため、最新の販売価格・在庫・送料等は商品ページで確認してください。
          </P>
          <div className="my-8 rounded-2xl border-2 border-amber-400 bg-amber-50 p-6">
            <p className="text-lg font-black text-gray-900">
              最新の販売価格は商品ページで確認
            </p>
            <p className="mt-2 text-[16px] leading-8 text-gray-900">
              本記事では現在価格を固定しません。在庫状況も含め、購入前に最新情報をご確認ください。
            </p>
            <div className="mt-5">
              <ExtButton href={PRODUCT_URL}>
                蓄電丸 KPS-0202の最新価格・在庫を見る →
              </ExtButton>
            </div>
          </div>

          <Checklist
            id="buy-check"
            title="購入前チェックリスト"
            items={buyChecklist}
          />
          <Checklist
            id="use-check"
            title="使用・保管チェックリスト"
            items={useChecklist}
          />

          <H2 id="faq">よくある質問</H2>
          <div className="my-6 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="rounded-xl border border-gray-300 bg-white p-5"
              >
                <summary className={`${cls.faqQ} cursor-pointer list-none`}>
                  {faq.q}
                </summary>
                <p className="mt-3 text-[16px] leading-8 text-gray-900">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <H2 id="summary">
            まとめ｜蓄電丸は「2160Whのポータブル電源」だけではない
          </H2>
          <P>
            蓄電丸 KPS-0202をスペックだけで見ると、
            <Mark>2160Wh / 2000W / LFP</Mark>
            という大型ポータブル電源です。しかし、この商品の特徴は容量だけではありません。
          </P>
          <ul className={cls.list}>
            <li>使用中でもIP65</li>
            <li>IK09</li>
            <li>最大5台並列</li>
            <li>UPS 10ms以下</li>
            <li>ソーラー最大800W</li>
            <li>AC＋ソーラー同時充電</li>
            <li>Wi-Fiローカル状態確認</li>
            <li>低温時のバッテリー加熱</li>
            <li>エアゾール式消火システム</li>
            <li>現場移動を考えたキャスター・ハンドル</li>
          </ul>
          <P>
            まで含めて、
            <Mark>雨・粉じん・屋外運用を想定した現場向けの設計</Mark>
            になっています。
          </P>
          <P>
            一方で、IP65は水没対応ではない、充電しながら使う時は最大1500W、低温時には出力制限、長期保管は2か月ごとの補充電、41kgある——といった、購入前に知るべき条件もあります。蓄電丸を検討する場合は「2000Whあるから」だけでなく、
            <Mark>
              使用環境・負荷・充電方法・保管ルールまで含めて導入判断する
            </Mark>
            ことをおすすめします。
          </P>

          <section className="my-10 rounded-2xl bg-slate-950 p-6 text-white md:p-8">
            <h3 className="text-2xl font-black tracking-wide md:text-3xl">
              蓄電丸 KPS-0202を確認する
            </h3>
            <p className="mt-3 text-[16px] leading-8 text-slate-100">
              仕様・在庫・最新価格は販売ページで確認できます。ソーラー運用の考え方は関連記事もあわせてどうぞ。
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ExtButton href={PRODUCT_URL}>
                最新価格・在庫を見る →
              </ExtButton>
              <Link
                href={SOLAR_INTERNAL}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-white px-5 py-3 text-center text-[15px] font-extrabold text-white transition hover:bg-white/10"
              >
                ソーラー充電の運用記事へ →
              </Link>
            </div>
          </section>

          <H2 id="related">関連記事</H2>
          <ul className="my-4 space-y-3">
            {relatedArticles.map((article) => (
              <li key={article.href}>
                <Link
                  href={article.href}
                  className="text-[16px] font-bold text-gray-900 underline underline-offset-4"
                >
                  {article.label}
                </Link>
              </li>
            ))}
          </ul>

          <section className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-xl font-black text-gray-900">参考情報</h2>
            <ul className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900">
              <li>
                <a
                  href={ASCO_OFFICIAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  株式会社アスコ｜ポータブル電源 蓄電丸
                </a>
              </li>
              <li>
                <a
                  href="https://winslab.sakura.ne.jp/wp/wp-content/uploads/2025/01/M_KPS-0202_JP20250107.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  KPS-0202 取扱説明書（PDF）
                </a>
              </li>
              <li>
                <a
                  href={GREEN_CROSS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  Green Cross-select｜蓄電丸 商品ページ
                </a>
              </li>
              <li>
                <a
                  href="https://www.atpress.ne.jp/news/445538"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  アスコ プレスリリース（2025年）
                </a>
              </li>
              <li>
                <a
                  href="https://www.jet.or.jp/examination/dust/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  JET｜IPコード（防塵・防水）解説
                </a>
              </li>
            </ul>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
