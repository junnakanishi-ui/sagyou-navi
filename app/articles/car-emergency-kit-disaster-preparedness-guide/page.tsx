import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const SLUG = "car-emergency-kit-disaster-preparedness-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const SEO_TITLE =
  "車の防災グッズで必要なもの｜車載セット・常備品・置きっぱなしNG品【2026年】";
const H1 =
  "車の防災グッズは何を常備する？地震・大雪・立ち往生に備える車載リストと「置きっぱなしNG」品【2026年版】";
const SHORT_TITLE = "車の防災グッズで必要なもの";
const DESCRIPTION =
  "車に常備する防災グッズは何が必要？地震・大雪・立ち往生・水没など4つの場面から、脱出ハンマー、簡易トイレ、ブランケット、非常食などを整理。車載防災セット3種の違い、真夏の車内へ置きっぱなしにしない物、社用車の備えまで解説します。";
const PUBLISHED = "2026-08-31";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";
const HERO = "car-disaster-emergency-kit-hero.webp";

const DISASTER_CTA = productData.ctas.disaster;
const SECURITY_CTA = productData.ctas.security;

type MainProduct = (typeof productData.mainProducts)[number];
type RelatedProduct = (typeof productData.relatedProducts)[number];

const kits = productData.mainProducts.slice(0, 3) as MainProduct[];
const millet = productData.mainProducts[3] as MainProduct;
const related = productData.relatedProducts as RelatedProduct[];

const JAF_TEMP =
  "https://jaf.or.jp/common/safety-drive/car-learning/user-test/temperature/summer";
const JAF_WINDOW =
  "https://jaf.or.jp/common/safety-drive/car-learning/user-test/disaster/window";
const NITE_BATTERY =
  "https://www.nite.go.jp/jiko/chuikanki/poster/kaden/20240712.html";
const MLIT_SNOW =
  "https://wwwtb.mlit.go.jp/chugoku/00001_02600.html";
const CABINET_CAR_SLEEP =
  "https://www.bousai.go.jp/kohou/kouhoubousai/r04/106/news_15.html";

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
        alt: "車のトランクに防災セット・ブランケット・携帯トイレ等を整理して備えるイメージ",
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

const tocItems = [
  { id: "key-points", label: "30秒で分かる要点" },
  { id: "why-car", label: "家だけで十分？3つの理由" },
  { id: "four-scenes", label: "まず4つの場面を想定する" },
  { id: "ten-categories", label: "最低限載せたい10カテゴリ" },
  { id: "compare-kits", label: "まず車に1セット入れるなら" },
  { id: "three-zones", label: "3ゾーンで分ける" },
  { id: "summer-heat", label: "真夏の車内温度" },
  { id: "millet", label: "車載用ミレービスケット" },
  { id: "water-food", label: "セットだけで水・食料は揃う？" },
  { id: "snow", label: "大雪・立ち往生の追加装備" },
  { id: "company-fleet", label: "社用車の標準化" },
  { id: "related", label: "足りない役割だけ追加" },
  { id: "mistakes", label: "よくある失敗" },
  { id: "checklist", label: "車載防災チェックリスト" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
] as const;

const scenes = [
  {
    n: "1",
    title: "車からすぐ脱出しなければならない",
    image: "car-emergency-hammer-accessible-storage.webp",
    imageAlt: "脱出ハンマーを運転席からすぐ取れる安全な場所へ固定するイメージ",
    lead: "水没、事故、ドアが開かない状況などでは、車内で過ごすための用品より先に脱出です。",
    needs: [
      "脱出用ハンマー",
      "シートベルトカッター機能等",
      "ライト",
      "危険を知らせる合図",
    ],
    note: (
      <>
        JAFの
        <a
          href={JAF_WINDOW}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline underline-offset-2"
        >
          窓割りテスト
        </a>
        では、スマートフォンや車のキー、ヘッドレストなどでは窓を割れず、テストした脱出用ハンマーでは一部のサイドガラスを割ることができました。ただし、フロントガラスや一部車種のサイドガラスに使われる合わせガラスは、脱出用ハンマーでも割れない場合があります。重要なのは、
        <Mark>自分の車のガラス仕様と脱出方法を事前に確認すること</Mark>
        です。
      </>
    ),
    place:
      "運転席ドアポケット、センターコンソール周辺、専用固定ホルダーなど、衝突時に飛散しない方法で、すぐ取れる位置を考えます。",
  },
  {
    n: "2",
    title: "渋滞・雪・道路寸断で立ち往生する",
    image: "vehicle-snow-stranding-emergency-supplies.webp",
    imageAlt: "大雪の立ち往生に備えて毛布・水・携帯トイレ等を積むイメージ",
    lead: "数十分なら我慢できても、数時間になると困るものが変わります。",
    needs: ["トイレ", "水分", "空腹", "寒さ", "情報"],
    note: (
      <>
        特に携帯トイレは「近くのコンビニへ行けばよい」が通用しない状況で役立ちます。大雪なら、さらに毛布・防寒具・手袋・スコップ・タイヤチェーン等を季節に応じて追加します。
      </>
    ),
    place: "荷室へまとめておき、必要時にすぐ取り出せる手前側へ。",
  },
  {
    n: "3",
    title: "やむを得ず車内で一時待機する",
    image: "temporary-car-wait-disaster-preparedness.webp",
    imageAlt: "災害時の一時的な車内待機でブランケットや水を使用するイメージ",
    lead: "車は雨風をしのげる一方、長時間の車中滞在には別のリスクもあります。",
    needs: [
      "簡易トイレ",
      "ブランケット",
      "エアマット",
      "水",
      "非常食",
      "ライト",
    ],
    note: (
      <>
        内閣府は車中泊について、エコノミークラス症候群や排気ガスによる一酸化炭素中毒などへの注意を案内しています。夏は熱中症も大きな問題です。したがって、
        <Mark>
          「車に防災グッズを積む＝車中泊を積極的に選ぶ」ではありません
        </Mark>
        。自治体の避難情報や災害状況を優先し、やむを得ず一時的に車内へとどまる時の備えとして考えます。
      </>
    ),
    place: "ブランケット・マット・トイレは荷室。水・食料は保管条件を確認のうえ。",
  },
  {
    n: "4",
    title: "車を離れて安全な場所へ避難する",
    image: "car-emergency-supplies-storage-zones.webp",
    imageAlt: "運転席・荷室・持ち出しバッグに防災用品を役割別に配置するイメージ",
    lead: "道路が危険、浸水が進む、避難場所へ移動する必要がある。この時は「車にたくさん積んである」だけでは足りません。",
    needs: ["小型リュック", "巾着", "防水バッグ"],
    note: (
      <>
        つまり、車載防災では、
        <Mark>車内で使う物と、車から持ち出す物を分ける</Mark>
        ことも大切です。
      </>
    ),
    place: "持ち出し袋は荷室の手前側へ。必要品をまとめてすぐ持てる状態に。",
  },
] as const;

const categories = [
  ["脱出ハンマー", "水没・閉じ込めからの脱出", "運転席から届く位置"],
  ["LED信号灯・ライト", "夜間・故障・危険表示", "すぐ取れる位置"],
  ["携帯トイレ", "立ち往生・長時間待機", "車内または荷室"],
  ["水", "飲料・体調維持", "保管条件確認のうえ荷室"],
  ["非常食", "長時間待機", "車載保管条件を確認"],
  ["ブランケット", "寒さ対策", "荷室"],
  ["ホイッスル", "助けを求める", "持ち出せる位置"],
  ["マスク・衛生用品", "衛生・粉じん等", "セット内または荷室"],
  ["救急用品", "軽微なけがの応急対応", "取り出しやすい場所"],
  ["持ち出し袋", "車を離れる避難", "荷室の手前側"],
] as const;

const zones = [
  {
    id: "A",
    title: "ZONE A｜運転席から届く場所",
    body: "ここには、数秒で必要になる物を置きます。",
    items: [
      "脱出ハンマー",
      "小型ライト",
      "ホイッスル",
      "必要に応じて反射・合図用品",
    ],
    tip: "重要なのは「車に積んであるか」ではなく、手が届くかです。",
  },
  {
    id: "B",
    title: "ZONE B｜トランク・荷室",
    body: "数分後〜数時間後に必要になる物です。",
    items: [
      "防災セット",
      "携帯トイレ",
      "ブランケット",
      "エアマット",
      "保存食",
      "水",
      "防寒具",
      "季節装備",
      "持ち出し袋",
    ],
    tip: "重い物は走行中に動かないよう固定・収納します。",
  },
  {
    id: "C",
    title: "ZONE C｜高温時は置きっぱなしにしない物",
    body: "防災に役立つ物でも、車載常備に向かない場合があります。",
    items: [
      "リチウムイオン電池を使うモバイルバッテリー等",
      "高温保管に弱いスプレー缶・食品・飲料",
      "メーカーが高温保管を禁じる製品",
    ],
    tip: "通勤バッグで持ち歩く、出発時に積むなど、製品の保管条件に合わせます。",
  },
] as const;

const mistakes = [
  {
    title: "家に防災バッグがあるから車は何も積まない",
    body: "外出中に自宅へ戻れない可能性があります。",
  },
  {
    title: "脱出ハンマーをトランクへ入れる",
    body: "水没・ドアが開かない状況では取りに行けない可能性があります。",
  },
  {
    title: "13点セットなら全部揃っていると思う",
    body: "今回の主役セットも水・食料は別途確認が必要です。",
  },
  {
    title: "モバイルバッテリーを一年中車内へ置く",
    body: "高温になる夏の車内はリチウムイオン電池に不向きです。",
  },
  {
    title: "長期保存食なら何でも車載できると思う",
    body: "賞味期限と保管温度は別です。",
  },
  {
    title: "車中泊すれば避難所へ行かなくてよいと思う",
    body: "災害状況と自治体の避難情報を優先します。車中泊には熱中症、エコノミークラス症候群、一酸化炭素中毒等のリスクがあります。",
  },
] as const;

const checklistGroups = [
  {
    title: "運転席",
    items: [
      "脱出ハンマーが手の届く位置",
      "ライト・合図用品",
      "飛散しないよう固定",
    ],
  },
  {
    title: "荷室",
    items: [
      "携帯トイレ",
      "ブランケット",
      "非常食",
      "飲料水",
      "マスク・衛生用品",
      "救急用品",
      "持ち出し袋",
    ],
  },
  {
    title: "保管条件",
    items: [
      "夏の高温を確認",
      "モバイルバッテリーを置きっぱなしにしていない",
      "食品の保管温度を確認",
      "直射日光を避けている",
    ],
  },
  {
    title: "冬",
    items: ["毛布・防寒着", "冬用タイヤ", "チェーン", "スコップ", "手袋"],
  },
  {
    title: "定期点検",
    items: [
      "食品期限",
      "水の期限",
      "トイレの期限",
      "電池",
      "LED点灯",
      "乗車人数と数量",
    ],
  },
] as const;

const faqs = [
  {
    q: "車に最低限何を積んでおけばいいですか？",
    a: "まずは脱出ハンマー、携帯トイレ、ライト・合図用品、ブランケット、水、非常食を優先します。車載防災セットを土台にして、入っていない物を追加すると揃えやすくなります。",
  },
  {
    q: "防災セットはトランクに置けばいいですか？",
    a: "多くの用品は荷室で構いませんが、脱出ハンマーのように瞬時に必要な物は運転席から手の届く位置に置きます。",
  },
  {
    q: "モバイルバッテリーを車に置きっぱなしにしていいですか？",
    a: "NITEはリチウムイオン電池を使うモバイルバッテリー等を真夏の車内など高温の場所へ放置しないよう注意しています。製品の保管条件に従ってください。",
  },
  {
    q: "非常食は車に置いても大丈夫ですか？",
    a: "商品によります。「5年保存」だけでは車載適性は判断できません。今回紹介する車載用ミレービスケットは商品ページに車内保存温度の記載がありますが、最新の注意事項も合わせて確認してください。",
  },
  {
    q: "ABO-990、ABO-95、ABO-98は何が違いますか？",
    a: "ABO-990はブランケット・エアマット・トイレ・脱出ハンマーで車内待機に強く、ABO-95はLED信号灯・トイレ・給水補助等、ABO-98はさらに脱出ハンマーや救急用品まで広く含む構成です。",
  },
  {
    q: "車載防災セットだけで水・食料まで足りますか？",
    a: "今回の3セットには水・非常食が標準で含まれていません。別途追加する必要があります。",
  },
  {
    q: "社用車にも防災グッズは必要ですか？",
    a: "勤務中に被災すると自宅備蓄を使えないため、営業車・現場車などにも車両単位で最低限を配置する考え方があります。数量と期限管理を会社で標準化すると運用しやすくなります。",
  },
  {
    q: "大雪の時は何を追加すればいいですか？",
    a: "水・食料・毛布などに加え、地域や天候に応じて冬用タイヤ、チェーン、スコップ、防寒具、手袋等を準備します。不要不急の外出を避けることが前提です。",
  },
] as const;

const relatedArticles = [
  {
    href: "/articles/business-disaster-stockpile-checklist",
    label: "事業所の防災備蓄チェックリスト｜BCP・帰宅困難者対策",
  },
  {
    href: "/articles/company-flood-stockpile-sandbag-guide",
    label: "会社・工場の水害対策備蓄と土のうの選び方",
  },
  {
    href: "/articles/company-car-interior-cleaning-routine-guide",
    label: "社用車の車内清掃を短時間で続けるルール",
  },
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

function DisasterCta({
  label,
  dataCta,
  note,
}: {
  label: string;
  dataCta: string;
  note?: string;
}) {
  return (
    <aside className="my-10 overflow-hidden rounded-2xl border-2 border-gray-900 bg-gray-50 p-6 sm:p-7">
      {note ? <p className={`${cls.bodySm} mb-3 font-bold`}>{note}</p> : null}
      <ExtLink
        href={DISASTER_CTA}
        dataCta={dataCta}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-center text-[15px] font-extrabold text-white transition hover:bg-orange-700 sm:w-auto"
      >
        {label}
      </ExtLink>
    </aside>
  );
}

function KitCard({ product }: { product: MainProduct }) {
  const contents =
    "contents" in product.specs && Array.isArray(product.specs.contents)
      ? product.specs.contents
      : [];
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white">
      <div className="relative aspect-square bg-gray-50">
        <Image
          src={product.image}
          alt={`${product.name}の商品画像`}
          fill
          sizes="(max-width: 768px) 100vw, 280px"
          className="object-contain p-4"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-bold text-orange-700">{product.role}</p>
        <h3 className="mt-1 text-xl font-black leading-snug text-gray-900">
          {product.short}
        </h3>
        <p className="mt-1 text-sm font-bold text-gray-900">{product.name}</p>
        <ul className="mt-3 flex-1 list-disc space-y-1 pl-5 text-[15px] leading-7 text-gray-900">
          {contents.slice(0, 5).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ExtLink
          href={product.url}
          dataCta={`kit-${product.id}`}
          className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-orange-700"
        >
          {product.short}を見る
        </ExtLink>
      </div>
    </article>
  );
}

function RelatedCard({ product }: { product: RelatedProduct }) {
  return (
    <ExtLink
      href={product.url}
      dataCta={`related-${product.id}`}
      className="group flex gap-4 rounded-2xl border border-gray-300 bg-white p-4 transition hover:border-orange-500"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <Image
          src={product.image}
          alt={`${product.short}の商品画像`}
          fill
          sizes="80px"
          className="object-contain p-1.5 transition group-hover:scale-105"
        />
      </span>
      <span className="min-w-0">
        <span className="block text-base font-black text-gray-900 underline decoration-2 underline-offset-4">
          {product.short}
        </span>
        <span className="mt-1 block text-sm leading-6 text-gray-900">
          {product.role}
        </span>
      </span>
    </ExtLink>
  );
}

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <SiteHeader />
      <main className="bg-white">
        <article className="mx-auto max-w-[850px] px-4 pb-16 pt-8 sm:px-6">
          <nav aria-label="パンくず" className={`${cls.meta} mb-6`}>
            <Link href="/" className="underline-offset-2 hover:underline">
              作業用品ナビ
            </Link>
            <span className="mx-2">/</span>
            <Link href="/articles" className="underline-offset-2 hover:underline">
              記事一覧
            </Link>
            <span className="mx-2">/</span>
            <span>{SHORT_TITLE}</span>
          </nav>

          <p className="mb-3 text-sm font-bold tracking-wide text-emerald-800">
            防災・車載備蓄
          </p>
          <h1 className={cls.h1}>{H1}</h1>
          <p className={`${cls.meta} mb-8`}>
            公開日：{PUBLISHED.replace(/-/g, "/")} ｜ 読了目安：約22分
          </p>

          <Figure
            src={IMG(HERO)}
            alt="車のトランクに防災セット・ブランケット・携帯トイレ等を整理して備えるイメージ"
            priority
          />

          <P>
            防災グッズを見直す時、多くの人が最初に考えるのは「家に何を備蓄するか」ではないでしょうか。
          </P>
          <P>水、非常食、簡易トイレ、ライト、持ち出し袋。</P>
          <P>もちろん自宅の備えは重要です。</P>
          <P>
            しかし、災害が起きるのは家にいる時とは限りません。
          </P>
          <P>
            通勤中、営業先へ向かう途中、子どもの送迎、買い物、旅行。車で移動している時間が長い人ほど、
            <Mark>被災した瞬間に自宅の防災バッグへ戻れない</Mark>
            可能性があります。
          </P>
          <P>
            大雪なら道路で立ち往生することがあります。地震や道路寸断で長時間その場から動けなくなることもあります。水害などでは、車からすぐ脱出しなければならない場面も考えられます。
          </P>
          <P>
            だから防災は、
            <Mark>
              「家に1セット」だけで終わらせず、車にも最低限を分けておく
            </Mark>
            という考え方が役立ちます。
          </P>
          <P>
            ただし、車は真夏には非常に高温になります。防災用品なら何でも積みっぱなしでよいわけではありません。
          </P>
          <P>
            この記事では、車に必要な防災グッズを、
            <Mark>4つの災害場面 × 3つの保管場所</Mark>
            に分け、何をどこへ置くべきか整理します。
          </P>

          <nav
            aria-label="目次"
            className="my-10 rounded-2xl border border-gray-300 bg-gray-50 p-5 sm:p-6"
          >
            <p className="mb-3 text-lg font-black text-gray-900">目次</p>
            <ol className="space-y-2 text-[15px] leading-7 text-gray-900">
              {tocItems.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="font-bold underline-offset-2 hover:underline"
                  >
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <H2 id="key-points">30秒で分かる｜車に載せたい防災グッズ</H2>
          <ul className={cls.list}>
            <li>
              自宅の防災用品とは別に、<strong>最低限を車にも分けておく</strong>。
            </li>
            <li>
              最優先は
              <Mark>「脱出」「トイレ」「保温」「合図」「水・食料」</Mark>。
            </li>
            <li>
              脱出ハンマーはトランクの奥ではなく、
              <strong>運転席からすぐ手が届く場所</strong>へ。
            </li>
            <li>
              車載防災セットは「10点」「13点」という数ではなく、
              <strong>中身の役割で選ぶ</strong>。
            </li>
            <li>
              真夏の車内は非常に高温になるため、モバイルバッテリーなど
              <strong>高温保管に不向きな物を置きっぱなしにしない</strong>。
            </li>
            <li>
              非常食も「5年保存」だけでなく、
              <strong>車載保管を想定した温度条件</strong>まで確認する。
            </li>
          </ul>

          <DisasterCta
            label="災害対策品一覧を見る"
            dataCta="disaster-top"
            note="まず車に防災セットを1つ入れるところから始める"
          />

          <H2 id="why-car">防災グッズは家だけで十分？車にも分けたい3つの理由</H2>
          <Figure
            src={IMG("home-and-car-disaster-supplies-distributed.webp")}
            alt="自宅の防災備蓄と車載防災セットを分けて準備するイメージ"
          />

          <H3>1. 災害時に自宅へ戻れるとは限らない</H3>
          <P>
            家に十分な備蓄があっても、外出先から道路が通れなければ使えません。
          </P>
          <P>
            車通勤、営業、点検、配送など、日中を車で過ごす時間が長い人にとっては、車も「備蓄を分けておく場所」の一つになります。
          </P>
          <P>
            これは自宅備蓄を減らしてよいという意味ではありません。
            <Mark>
              家の備えに加えて、車で被災した時の最低限を別に持つ
            </Mark>
            という考え方です。
          </P>

          <H3>2. 大雪では実際に車内で待つ状況が起こる</H3>
          <P>
            国土交通省は大雪注意喚起でも、やむを得ず車で外出する場合には、水や食料を準備し、車両が立ち往生に巻き込まれた場合へ備えるよう案内しています。
          </P>
          <P>
            別の道路管理者の案内でも、毛布・手袋・防寒具・スコップなどの携行が挙げられています。
          </P>
          <P>
            「豪雪地帯だけの話」ではありません。普段雪が少ない地域でも、突然の降雪で道路が止まることがあります。
          </P>

          <H3>3. 車なら置ける防災用品がある</H3>
          <P>
            毎日持ち歩く防災ポーチには容量の限界があります。一方、トランクや荷室なら、簡易トイレ・ブランケット・エアマット・給水用バッグなど、少しかさばる物も置けます。
          </P>
          <P>
            「全部をリュックへ詰める」より、
            <Mark>家・普段のバッグ・車で役割を分ける</Mark>
            ほうが現実的です。
          </P>

          <H2 id="four-scenes">まず4つの場面を想定する</H2>
          <P>
            車載防災用品は、商品一覧から選び始めるより、困る場面から考えたほうが不足に気づきやすくなります。
          </P>

          {scenes.map((scene) => (
            <section
              key={scene.n}
              className="my-10 border-b border-gray-200 pb-10 last:border-b-0"
            >
              <div className="mb-4 flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-lg font-black text-white">
                  {scene.n}
                </span>
                <div>
                  <p className="text-sm font-bold tracking-wide text-emerald-800">
                    SCENE {scene.n}
                  </p>
                  <h3 className="mt-1 text-2xl font-black leading-snug text-gray-900 sm:text-3xl">
                    {scene.title}
                  </h3>
                </div>
              </div>
              <Figure src={IMG(scene.image)} alt={scene.imageAlt} />
              <P>{scene.lead}</P>
              <ul className={cls.list}>
                {scene.needs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <P>{scene.note}</P>
              <aside className="mt-4 rounded-xl border-l-4 border-emerald-800 bg-emerald-50 px-4 py-3">
                <p className={`${cls.bodySm} mb-0`}>
                  <strong>置き場所：</strong>
                  {scene.place}
                </p>
              </aside>
            </section>
          ))}

          <H2 id="ten-categories">車に最低限載せたい10カテゴリ</H2>
          <Table>
            <thead>
              <tr>
                <Th>カテゴリ</Th>
                <Th>役割</Th>
                <Th>置き場所の考え方</Th>
              </tr>
            </thead>
            <tbody>
              {categories.map(([cat, role, place]) => (
                <tr key={cat}>
                  <Td>
                    <strong>{cat}</strong>
                  </Td>
                  <Td>{role}</Td>
                  <Td>{place}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
          <P>
            この10種類を全部バラで買う必要はありません。最初は車載防災セットを1つ入れ、
            <Mark>足りない水・食料・季節用品を後から追加する</Mark>
            方法のほうが簡単です。
          </P>

          <H2 id="compare-kits">まず車に1セット入れるなら｜3つの車載セットを比較</H2>
          <P>
            「点数が多いほど良い」ではありません。脱出・トイレ・合図・保温／休息・衛生／小物の役割で比べます。
          </P>

          <div className="my-8 grid gap-5 md:grid-cols-3">
            {kits.map((kit) => (
              <KitCard key={kit.id} product={kit} />
            ))}
          </div>

          <H3>ABO-990｜車内待機と脱出をコンパクトに</H3>
          <P>
            <strong>車載用防災4点セット ABO-990</strong>
            は、リバーシブルアルミブランケット、緊急トイレ10回分、エアマット、車脱出用ハンマーをまとめたセットです（防災士監修）。
          </P>
          <P>
            「4点しかない」と見るより、
            <Mark>
              寒さ・トイレ・休息・脱出という大きな4つの困りごとを押さえている
            </Mark>
            と見るほうが分かりやすい商品です。車内待機の快適性を少しでも上げたい人、コンパクトに最低限から始めたい人に向きます。
          </P>

          <H3>ABO-95｜信号灯・トイレ・給水補助をまとめる</H3>
          <P>
            <strong>ドライブ緊急セット10点 ABO-95</strong>
            は、マグネット付LED信号灯、携帯トイレ4回分、3Lポリバケツ、ホイッスル、タオル、マスク、ゴミ袋、コップ、ティッシュ等をまとめています。
          </P>
          <P>
            「車外へ危険を知らせる」「トイレへ対応する」「水を運ぶ」といった、ドライブ中の緊急対応に寄せた構成です。
          </P>

          <H3>ABO-98｜脱出ハンマーまで含めて広くカバー</H3>
          <P>
            <strong>ドライブ緊急セット13点 ABO-98</strong>
            は、ABO-95系の構成に加え、車脱出用ハンマー、携帯トイレ8回分、救急絆創膏、万能ナイフなどを含みます。
          </P>
          <P>
            「まず1箱で、脱出・合図・トイレ・衛生を広めに揃えたい」場合に比較しやすいセットです。
          </P>

          <H3>3セットを役割で比べる</H3>
          <Table>
            <thead>
              <tr>
                <Th>商品</Th>
                <Th>脱出</Th>
                <Th>トイレ</Th>
                <Th>合図</Th>
                <Th>保温・休息</Th>
                <Th>衛生・小物</Th>
              </tr>
            </thead>
            <tbody>
              {kits.map((kit) => (
                <tr key={kit.id}>
                  <Td>
                    <ExtLink
                      href={kit.url}
                      className="group flex min-w-[14rem] items-start gap-3 rounded-lg p-1 transition hover:bg-gray-50"
                    >
                      <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
                        <Image
                          src={kit.image}
                          alt={`${kit.short}の商品画像`}
                          fill
                          sizes="64px"
                          className="object-contain p-1"
                        />
                      </span>
                      <span className="text-sm font-bold underline decoration-2 underline-offset-4">
                        {kit.short}
                      </span>
                    </ExtLink>
                  </Td>
                  <Td>{kit.escape}</Td>
                  <Td>{kit.toilet}</Td>
                  <Td>{kit.signal}</Td>
                  <Td>{kit.warmth}</Td>
                  <Td>{kit.hygiene}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
          <P>
            「13点だから一番良い」ではありません。寒さ・休息を重視するならABO-990に強みがあり、ドライブ緊急対応を広く揃えるならABO-98が比較しやすい、という違いです。
          </P>

          <H2 id="three-zones">
            「運転席」「トランク」「車に置かない」の3ゾーンで分ける
          </H2>
          <div className="my-8 grid gap-4">
            {zones.map((zone) => (
              <section
                key={zone.id}
                className="rounded-2xl border border-gray-300 bg-white p-5 sm:p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-black text-white">
                    {zone.id}
                  </span>
                  <h3 className="text-xl font-black text-gray-900 sm:text-2xl">
                    {zone.title}
                  </h3>
                </div>
                <P>{zone.body}</P>
                <ul className={cls.list}>
                  {zone.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className={`${cls.bodySm} mb-0 font-bold`}>{zone.tip}</p>
              </section>
            ))}
          </div>
          <P>
            代表例が
            <Mark>リチウムイオン電池を使うモバイルバッテリー等</Mark>
            です。NITEは、モバイルバッテリーなどリチウムイオン電池搭載製品を、真夏の車内や直射日光が当たる高温場所へ放置しないよう
            <a
              href={NITE_BATTERY}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-2"
            >
              注意喚起
            </a>
            しています。「災害でスマホ充電が必要だから、モバイルバッテリーを1年中車へ置く」という運用には注意が必要です。
          </P>

          <H2 id="summer-heat">真夏の車内は何℃になる？</H2>
          <Figure
            src={IMG("hot-car-battery-storage-warning.webp")}
            alt="真夏の高温車内にモバイルバッテリー等を放置しないことを示すイメージ"
          />
          <P>
            JAFの
            <a
              href={JAF_TEMP}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-2"
            >
              ユーザーテスト
            </a>
            では、炎天下の黒い車で、車内最高
            <Mark>57℃</Mark>、ダッシュボード最高
            <Mark>79℃</Mark>
            まで上昇しました。サンシェードを装着した車でも、車内最高50℃でした。
          </P>
          <P>
            つまり、車載防災では、
            <Mark>
              「長期保存できる」≠「夏の車内へ置きっぱなしにできる」
            </Mark>
            と考えたほうが安全です。食品、飲料、電池、スプレー缶などは、商品ごとの保管温度・注意事項を確認します。
          </P>

          <H2 id="millet">
            車載用ミレービスケット｜非常食は「賞味期限＋車内温度」で選ぶ
          </H2>
          <article className="my-8 overflow-hidden rounded-2xl border-2 border-gray-900 bg-white">
            <div className="grid gap-0 md:grid-cols-[260px_1fr]">
              <div className="relative min-h-[220px] bg-gray-50 md:min-h-full">
                <Image
                  src={millet.image}
                  alt={`${millet.name}の商品画像`}
                  fill
                  sizes="(max-width: 768px) 100vw, 260px"
                  className="object-contain p-4"
                />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-sm font-bold text-orange-700">{millet.role}</p>
                <h3 className="mt-1 text-2xl font-black leading-snug text-gray-900">
                  {millet.name}
                </h3>
                <ul className={`${cls.list} mb-4`}>
                  <li>
                    製造から
                    <Mark>5年</Mark>
                    保存
                  </li>
                  <li>
                    <Mark>100g×12缶</Mark>
                  </li>
                  <li>
                    1缶100gあたり
                    <Mark>437kcal</Mark>
                  </li>
                  <li>
                    商品ページ記載：最高80℃～最低-30℃まで車内保存可能
                  </li>
                </ul>
                <P>
                  車の防災用食品で重要なのは、
                  <Mark>
                    賞味期限が長いかだけでなく、車内の温度変化を想定しているか
                  </Mark>
                  です。
                </P>
                <ExtLink
                  href={millet.url}
                  dataCta="millet"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-orange-700"
                >
                  車載用ミレービスケットを見る
                </ExtLink>
              </div>
            </div>
          </article>

          <H3>保管表記は最新情報を確認</H3>
          <P>
            同じ商品ページの注意欄には「直射日光、高温多湿を避けて保存」とも記載されています。そのため、実際の保管では最新の商品ページ・メーカーの保管指示を優先してください。「80℃対応」という数字だけでダッシュボードへ置く、といった使い方はしません。
          </P>

          <H2 id="water-food">防災セット1つだけで水・食料まで全部揃う？</H2>
          <P>
            今回のABO-990、ABO-95、ABO-98は、それぞれ役立つセットですが、
            <Mark>水・食料が標準で入っていません</Mark>
            。ここは購入前に気づきたいポイントです。
          </P>
          <P>
            防災セットを買うと「これで全部揃った」と感じやすいのですが、商品によって役割は異なります。
          </P>
          <H3>追加確認したいもの</H3>
          <ul className={cls.list}>
            <li>飲料水</li>
            <li>非常食</li>
            <li>常用薬</li>
            <li>季節の防寒・暑さ対策</li>
            <li>スマホの電源確保（高温車内への常備は製品条件を確認）</li>
            <li>乳幼児・高齢者・女性向け用品</li>
            <li>ペット用品</li>
          </ul>
          <P>
            水についても、
            <strong>車内へ長期常備するなら製品ごとの保管条件を確認</strong>
            してください。
          </P>

          <DisasterCta
            label="災害対策品一覧から水・非常食を確認する"
            dataCta="disaster-mid"
          />

          <H2 id="snow">大雪・立ち往生では「通常の防災セット＋冬装備」</H2>
          <P>
            冬に雪道を走る場合、車載防災セットだけでは不十分です。国土交通省は、大雪時にやむを得ず外出する場合、冬用タイヤ・タイヤチェーン・スコップ・砂・水・食料などを準備するよう
            <a
              href={MLIT_SNOW}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-2"
            >
              呼びかけています
            </a>
            。道路管理者の案内では、毛布、手袋、防寒具等も挙げられています。
          </P>

          <H3>雪で車が埋まった時は一酸化炭素中毒にも注意</H3>
          <P>
            雪でマフラーがふさがれた状態でエンジンをかけ続けると、排気ガスによる一酸化炭素中毒の危険があります。北海道開発局は、原則エンジンを切ること、やむを得ずエンジンを使う時は排気管出口を確実に大気へ開放することなどを案内しています。
          </P>
          <P>
            ブランケットや防寒具は、単なる快適グッズではなく、エンジンに頼りすぎず体温を守るためにも重要です。
          </P>
          <aside className="my-6 rounded-xl border border-amber-400 bg-amber-50 p-5">
            <p className={`${cls.bodySm} mb-0`}>
              車中滞在では、
              <Mark>熱中症・エコノミークラス症候群・一酸化炭素中毒</Mark>
              に注意してください（
              <a
                href={CABINET_CAR_SLEEP}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-2"
              >
                内閣府の車中泊注意
              </a>
              ）。やむを得ない一時待機の備えとして考え、自治体の避難情報を優先します。
            </p>
          </aside>

          <H2 id="company-fleet">社用車なら「1台1セット＋半年点検」にする</H2>
          <Figure
            src={IMG("company-fleet-emergency-kit-inspection.webp")}
            alt="社用車の防災セットを総務・安全担当者が定期点検するイメージ"
          />
          <P>
            車載防災は個人だけの話ではありません。営業車、現場車、点検車、配送車。仕事中に災害が起きれば、社員が自宅の防災用品を使えない可能性があります。
          </P>
          <P>
            法人なら、個人判断にせず、
            <Mark>車両装備として標準化</Mark>
            すると管理しやすくなります。
          </P>

          <H3>社用車で決めたいこと</H3>
          <ul className={cls.list}>
            <li>1台に何セット置くか</li>
            <li>乗車人数に対してトイレは何回分か</li>
            <li>脱出ハンマーの固定場所</li>
            <li>水・食料の有無</li>
            <li>季節品の追加</li>
            <li>期限確認の担当者</li>
            <li>使用後の補充方法</li>
          </ul>

          <H3>半年ごとの車両点検に入れる</H3>
          <P>
            春・秋など年2回、非常食の期限・水の期限・トイレの期限・電池・LED点灯・ブランケット・ハンマー固定を確認します。「防災の日だけ思い出す」より、車検・安全点検・タイヤ交換等と組み合わせた方が運用しやすくなります。
          </P>

          <H2 id="related">関連商品は「足りない役割」だけ追加する</H2>
          <P>
            Excelには28商品ありますが、すべてを車へ載せる必要はありません。商品を増やすのではなく、
            <Mark>自分のセットに何が足りないか</Mark>
            で追加します。
          </P>
          <div className="my-8 grid gap-4 sm:grid-cols-2">
            {related.map((product) => (
              <RelatedCard key={product.id} product={product} />
            ))}
          </div>

          <H2 id="mistakes">よくある失敗</H2>
          <div className="my-6 space-y-4">
            {mistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-300 px-5 py-4"
              >
                <h3 className="text-lg font-black text-gray-900 sm:text-xl">
                  {item.title}
                </h3>
                <p className={`${cls.bodySm} mb-0 mt-2`}>{item.body}</p>
              </div>
            ))}
          </div>

          <H2 id="checklist">車載防災チェックリスト</H2>
          <div className="my-8 space-y-6">
            {checklistGroups.map((group) => (
              <section key={group.title}>
                <h3 className="mb-3 text-xl font-black text-gray-900">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[17px] leading-[1.95] text-gray-900"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 inline-block h-4 w-4 shrink-0 rounded border-2 border-gray-900"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <H2 id="faq">よくある質問</H2>
          <div className="my-6 space-y-8">
            {faqs.map((item) => (
              <section key={item.q}>
                <h3 className={cls.faqQ}>{item.q}</h3>
                <P>{item.a}</P>
              </section>
            ))}
          </div>

          <H2 id="summary">
            まとめ｜防災用品は「家にあるか」ではなく「被災した場所で使えるか」
          </H2>
          <P>
            防災グッズを十分に買っていても、災害発生時にその場所へ行けなければ使えません。だから、家・普段のバッグ・車へ役割を分けて備えるという考え方があります。
          </P>
          <P>
            車では特に、
            <Mark>脱出・トイレ・保温・合図・水・食料</Mark>
            を優先します。
          </P>
          <P>
            最初から完璧に全部揃える必要はありません。まず車載防災セットを1つ入れ、中身を確認し、足りない水・非常食・季節用品を追加する。そのうえで、真夏の高温に弱い物を置きっぱなしにせず、半年に一度点検する。ここまでできれば、車の備えはかなり現実的になります。
          </P>

          <aside className="my-10 rounded-2xl bg-gray-900 p-6 text-white sm:p-8">
            <h3 className="mb-3 text-2xl font-black tracking-wide sm:text-3xl">
              車の備えをまとめて見直す
            </h3>
            <p className="mb-5 text-[16px] leading-7">
              車載防災セット・水・非常食など、災害対策品をまとめて確認できます。
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ExtLink
                href={DISASTER_CTA}
                dataCta="disaster-bottom"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-center text-[15px] font-extrabold text-white transition hover:bg-orange-500"
              >
                災害対策品一覧を見る
              </ExtLink>
              <ExtLink
                href={SECURITY_CTA}
                dataCta="security-bottom"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-white px-5 py-3 text-center text-[15px] font-extrabold text-white transition hover:bg-white hover:text-gray-900"
              >
                防犯用品一覧を見る
              </ExtLink>
            </div>
          </aside>

          <section className="mt-12 border-t border-gray-300 pt-8">
            <h2 className="mb-4 text-xl font-black text-gray-900">関連記事</h2>
            <ul className="space-y-3">
              {relatedArticles.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[16px] font-bold text-gray-900 underline underline-offset-4"
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
