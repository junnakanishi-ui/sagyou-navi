import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "wet-towel-heatstroke-worksite";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/wet-towel-heatstroke-worksite-hero.jpg`,
  coolingPoints: `${ARTICLE_IMG}/heatstroke-cooling-points-emergency-supplies.jpg`,
  comparison: `${ARTICLE_IMG}/wet-towel-cooling-towel-comparison.jpg`,
  insect: `${ARTICLE_IMG}/cooling-insect-repellent-towel-farm-work.jpg`,
  restArea: `${ARTICLE_IMG}/cooling-gel-ice-machine-rest-area-supplies.jpg`,
  checklist: `${ARTICLE_IMG}/cooling-towel-worksite-procurement-checklist.jpg`,
};

export const metadata: Metadata = {
  title:
    "熱中症対策に濡れタオルは使える？現場での正しい使い方と冷却タオル・瞬間冷却グッズの選び方｜作業用品ナビ",
  description:
    "熱中症対策に濡れタオルは使えるのか、正しい使い方・冷やす場所・現場での注意点を解説。冷却タオル、瞬間冷却パック、ネッククーラー、冷却ジェル、製氷機など、工場・倉庫・建設現場・農作業で備えたい冷却用品も比較します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "熱中症対策に濡れタオルは使える？現場での正しい使い方と冷却タオル・瞬間冷却グッズの選び方",
    description:
      "熱中症対策に濡れタオルは使えるのか、正しい使い方・冷やす場所・現場での注意点を解説。冷却タオル、瞬間冷却パック、ネッククーラー、冷却ジェル、製氷機など、工場・倉庫・建設現場・農作業で備えたい冷却用品も比較します。",
    type: "article",
    images: [IMG.hero],
  },
};

/* ============================================================
   URL ヘルパー（UTM は # の前に付与。既存エンコードは再エンコードしない）
   ============================================================ */
const UTM = "utm_source=sagyou_navi";

function buildUrl(url: string, utm: string = UTM): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

/** gc-select.com（自社Shopify） */
function GC(path: string): string {
  return buildUrl(`https://www.gc-select.com/products/${path}`);
}

/** 楽天 crecote-shop（末尾スラッシュ必須） */
function R(path: string): string {
  return buildUrl(`https://item.rakuten.co.jp/crecote-shop/${path}`);
}

const productImage = (id: string) => `/products/${id}.jpg`;

/* ---- 商品URL（ブリーフ提供20点のみ） ---- */
const P = {
  logosStamp: GC("1179035019"),
  cbaSheeba: GC("1179037044"),
  bioreCase: R("ta046430-469502/"),
  punchcool: GC("1179038031"),
  neckAzarashi: GC("6300092990"),
  backGelpad: GC("6300071990"),
  ecooline: R("ta052094-27107122100os/"),
  rabliss: GC("6300072268"),
  bugoffHoodie: GC("6300023777"),
  bugoffTowelGn: GC("6300023784"),
  bugoffTowelMint: GC("6300023783"),
  bugoffMulti: GC("6300023785"),
  gelmatS: GC("6300089154"),
  gelmatL: GC("6300089610"),
  icemaker: GC("1179040110"),
  slurryMaker: GC("1179040210"),
  firstAidA: GC("1179070000"),
  firstAidB: GC("1179071000"),
  pack48: GC("1179038033"),
  pillow30: R("ta054414-tism320box/"),
};

type Prod = {
  id: string;
  imgId?: string;
  name: string;
  use: string;
  url: string;
  btn?: string;
};

const EARLY_PRODUCTS: Prod[] = [
  {
    id: "1179035019",
    name: "LOGOS 瞬間アイススタンプ・ポケット",
    use: "濡れタオルやハンカチをすぐ冷やしたい場面に",
    url: P.logosStamp,
  },
  {
    id: "1179037044",
    name: "CBAシーバ 330g セット品",
    use: "冷却タオル関連の備品候補",
    url: P.cbaSheeba,
  },
  {
    id: "ta046430-469502",
    name: "花王 ビオレ 冷タオル 無香性 240本入 ケース",
    use: "法人・現場配布向けのケース販売",
    url: P.bioreCase,
  },
  {
    id: "1179038031",
    name: "パンチクール 瞬間冷却パック",
    use: "休憩所・応急対応の備品に",
    url: P.punchcool,
  },
];

const COOLING_POINT_PRODUCTS: Prod[] = [
  {
    id: "6300092990",
    name: "瞬間冷却剤 ネックタイプ ゴマフアザラシ 3個入り",
    use: "首元をすぐ冷やしたいときに",
    url: P.neckAzarashi,
  },
  {
    id: "6300071990",
    name: "背中ひんやり冷却ジェルパッド",
    use: "背中・ベスト内側の冷却に",
    url: P.backGelpad,
  },
  {
    id: "ta052094-27107122100os",
    name: "E-COOLINE ネッククーラー 持続冷却 SX3",
    use: "首元を集中的に冷やしたい作業に",
    url: P.ecooline,
  },
  {
    id: "6300072268",
    name: "RABLISS ネッククーラー 暑さ対策 冷却",
    use: "屋外立ち仕事・軽作業に",
    url: P.rabliss,
  },
];

const COMPARE_PRODUCTS: Prod[] = [
  {
    id: "1179037044",
    name: "CBAシーバ 330g セット品",
    use: "冷却タオル関連の備品候補",
    url: P.cbaSheeba,
  },
  {
    id: "6300023784",
    name: "BUGOFF アイスタオル カモフラグリーン",
    use: "屋外・虫よけ機能付きの冷却タオル",
    url: P.bugoffTowelGn,
  },
  {
    id: "6300092990",
    name: "瞬間冷却剤 ネックタイプ 3個入り",
    use: "首元の応急冷却に",
    url: P.neckAzarashi,
  },
  {
    id: "6300071990",
    name: "背中ひんやり冷却ジェルパッド",
    use: "背中・ベスト内側に",
    url: P.backGelpad,
  },
  {
    id: "6300089154",
    name: "冷却ジェルマット S アイスブルー",
    use: "休憩・仮眠時の身体冷却に",
    url: P.gelmatS,
  },
  {
    id: "1179070000",
    name: "熱中症応急セット",
    use: "救護場所の備えに",
    url: P.firstAidA,
  },
];

const BUGOFF_PRODUCTS: Prod[] = [
  {
    id: "6300023777",
    name: "BUGOFF アイスフーディ カモフラグリーン",
    use: "首・肩まわりの冷却＋屋外作業に",
    url: P.bugoffHoodie,
  },
  {
    id: "6300023784",
    name: "BUGOFF アイスタオル カモフラグリーン",
    use: "屋外作業用の冷却タオル",
    url: P.bugoffTowelGn,
  },
  {
    id: "6300023783",
    name: "BUGOFF アイスタオル ミント",
    use: "屋外作業用の冷却タオル",
    url: P.bugoffTowelMint,
  },
  {
    id: "6300023785",
    name: "BUGOFF マルチタオル ネイビー",
    use: "汎用の冷却タオルとして",
    url: P.bugoffMulti,
  },
];

const REST_PRODUCTS: Prod[] = [
  {
    id: "6300089154",
    name: "冷却ジェルマット S アイスブルー",
    use: "仮眠・休憩所の身体冷却に",
    url: P.gelmatS,
  },
  {
    id: "6300089610",
    name: "冷却ジェルマット L ベージュ",
    use: "広めに使える休憩所向け",
    url: P.gelmatL,
  },
  {
    id: "1179040110",
    name: "高速製氷機",
    use: "氷の確保・氷のう運用に",
    url: P.icemaker,
  },
  {
    id: "1179040210",
    name: "アイススラリーメーカーセット",
    use: "作業前・休憩時のプレクーリングに",
    url: P.slurryMaker,
  },
];

const EMERGENCY_PRODUCTS: Prod[] = [
  {
    id: "1179070000",
    name: "熱中症応急セット（1179070000）",
    use: "救護場所の備えに",
    url: P.firstAidA,
  },
  {
    id: "1179071000",
    name: "熱中症応急セット（1179071000）",
    use: "救護場所の備えに",
    url: P.firstAidB,
  },
  {
    id: "1179038033",
    name: "瞬間冷却パック ギュッと握って冷えてます 48個入",
    use: "まとめ備蓄・現場持ち出しに",
    url: P.pack48,
  },
  {
    id: "ta054414-tism320box",
    name: "TRUSCO ひんやり保冷まくら 30個（まとめ買い）",
    use: "休憩所・仮眠所のまとめ導入に",
    url: P.pillow30,
  },
];

const CATEGORY_LINKS: Prod[] = [
  {
    id: "ta046430-469502",
    name: "使い切り冷タオル（ケース）",
    use: "現場配布・交換用",
    url: P.bioreCase,
  },
  {
    id: "1179038033",
    name: "瞬間冷却パック（48個入）",
    use: "応急・まとめ備蓄",
    url: P.pack48,
  },
  {
    id: "ta052094-27107122100os",
    name: "ネッククーラー",
    use: "首元の集中冷却",
    url: P.ecooline,
  },
  {
    id: "6300089610",
    name: "冷却ジェルマット",
    use: "休憩所・仮眠向け",
    url: P.gelmatL,
  },
  {
    id: "1179040110",
    name: "高速製氷機",
    use: "氷・氷のう運用",
    url: P.icemaker,
  },
  {
    id: "1179040210",
    name: "アイススラリーメーカー",
    use: "プレクーリング",
    url: P.slurryMaker,
  },
];

const FAQ_ITEMS = [
  {
    q: "熱中症対策に濡れタオルは効果がありますか？",
    a: "濡れタオルは、肌に水分を残し、気化熱で体を冷やす補助として使えます。ただし単独で熱中症を防げるものではないため、休憩・水分/塩分補給・WBGT確認・日陰・送風・冷却用品と組み合わせることが大切です。",
  },
  {
    q: "濡れタオルはどこを冷やすとよいですか？",
    a: "首まわり・脇の下・足の付け根など、太い血管が通る場所を冷やすと体を冷やしやすいとされています。環境省資料でも、前頸部の両脇・脇の下・足の付け根の前面などが冷却部位として示されています。",
  },
  {
    q: "乾いたタオルより濡れタオルの方がよいですか？",
    a: "乾いたタオルは汗を拭き取る用途に向きますが、拭き取りすぎると気化熱による冷却が弱くなる場合があります。濡れタオルは肌に水分を残しやすいため、暑さ対策の補助として使いやすい方法です。",
  },
  {
    q: "濡れタオルと冷却タオルの違いは何ですか？",
    a: "濡れタオルは一般的なタオルを水で濡らす方法です。冷却タオルは、濡らして絞って振るなど冷感を得やすい素材・構造のものが多く、現場で繰り返し使いやすい点が違います。",
  },
  {
    q: "現場では濡れタオルを何枚用意すればよいですか？",
    a: "人数・作業時間・休憩回数・交換頻度によります。目安は作業者1人につき最低1枚、長時間・高温環境では交換用を含め2〜3枚、または使い切り冷タオルや瞬間冷却パックの併用が運用しやすくなります。",
  },
  {
    q: "熱中症が疑われるとき、濡れタオルだけで様子を見てもよいですか？",
    a: "意識がない・自力で水分を取れない・症状が改善しない・受け答えがおかしい場合は、濡れタオルで様子を見るのではなく、救急要請や医療機関への受診を優先します。",
  },
];

const RELATED = [
  {
    href: "/articles/outdoor-work-heatstroke-measures",
    label:
      "外仕事の熱中症対策｜現場・イベント・屋外倉庫で使える暑さ対策グッズと実務チェックリスト",
  },
  {
    href: "/articles/worksite-rest-area-heat",
    label: "現場休憩所の暑さ対策｜屋外作業でそろえたい日よけ・工場扇・冷却用品",
  },
  {
    href: "/articles/outdoor-work-heat-countermeasure-goods",
    label:
      "建設現場の暑さ対策グッズとは？空調服だけでは足りない酷暑現場の冷却設備と休憩所づくり",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "作業用品ナビ",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "熱中症対策と濡れタオルの選び方",
      item: `${SITE_URL}/articles/${SLUG}`,
    },
  ],
};

function CTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="my-6">
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="block w-full rounded-lg bg-gray-900 px-6 py-4 text-center font-bold text-white transition-colors hover:bg-gray-700"
      >
        {children}
      </a>
    </div>
  );
}

function FinalCTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="my-6">
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="block w-full rounded-lg bg-gray-900 px-6 py-6 text-center text-lg font-bold text-white shadow-lg transition-colors hover:bg-gray-700"
      >
        {children}
      </a>
    </div>
  );
}

function Caution({
  title = "⚠️ ご確認ください",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="my-6 rounded-lg border border-red-300 bg-red-50 p-5 text-red-900">
      <p className="mb-1 font-semibold">{title}</p>
      <div className={cls.bodySm}>{children}</div>
    </div>
  );
}

function ProductCard({ item }: { item: Prod }) {
  const imgId = item.imgId ?? item.id;
  return (
    <a
      href={item.url}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-sm transition hover:border-gray-400 hover:shadow-lg"
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={productImage(imgId)}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-contain p-3 transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-sm font-bold leading-snug text-gray-900">{item.name}</p>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-600">{item.use}</p>
        <span className="mt-3 inline-block rounded-lg bg-gray-900 px-4 py-2 text-center text-sm font-bold text-white">
          {item.btn ?? "商品ページを見る"}
        </span>
      </div>
    </a>
  );
}

function ProductGrid({
  items,
  cols = "sm:grid-cols-3",
}: {
  items: Prod[];
  cols?: string;
}) {
  return (
    <div className={`my-6 grid grid-cols-2 gap-4 ${cols}`}>
      {items.map((item) => (
        <ProductCard key={`${item.id}-${item.name}`} item={item} />
      ))}
    </div>
  );
}

function H2({ children }: { children: ReactNode }) {
  return <h2 className={cls.h2}>{children}</h2>;
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className={cls.h3}>{children}</h3>;
}

function ArticleImg({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} loading="lazy" className="my-6 w-full rounded-lg" />;
}

function Th({ children }: { children: ReactNode }) {
  return (
    <th className="border border-gray-300 bg-gray-100 px-3 py-2 text-left text-sm font-bold">
      {children}
    </th>
  );
}

function Td({ children }: { children: ReactNode }) {
  return <td className="border border-gray-300 px-3 py-2 text-sm align-top">{children}</td>;
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <span>選び方ガイド</span>
          <span className="mx-1">/</span>
          <span className="text-gray-700">熱中症対策と濡れタオルの選び方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          熱中症対策に濡れタオルは使える？現場での正しい使い方と冷却タオル・瞬間冷却グッズの選び方
        </h1>

        <p className="mb-6 text-sm text-gray-500">公開日：2026年7月13日／約16分で読めます</p>

        <p className={cls.body}>
          「濡れタオルは熱中症対策になるのか」「現場では何を、どれだけ揃えればよいのか」——工場・倉庫・建設現場・農作業・警備・イベント設営などの現場責任者や購買担当の方に向けて、濡れタオルを
          <strong>現場備品としてどう準備・運用するか</strong>
          を軸に、冷却タオル・瞬間冷却パック・ネッククーラー・冷却ジェル・製氷機・アイススラリーの選び方と使い分けまで整理します。
        </p>

        <ArticleImg
          src={IMG.hero}
          alt="現場で濡れタオルや冷却タオルを準備する熱中症対策イメージ"
        />

        <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5">
          <p className="mb-3 font-bold">
            結論：濡れタオルは熱中症対策の補助として使えます。ただし、濡れタオルだけで熱中症を防げるわけではありません。
          </p>
          <p className={cls.body}>
            濡れタオルは、肌に水分を残し、その水分が蒸発するときの気化熱で体を冷やす助けになります。首元や腕、顔まわりを拭いたり、首に巻いたり、風を当てたりすることで、一時的な暑さ対策として使いやすい方法です。
          </p>
          <p className={cls.body}>
            熱中症が疑われる場合は、まず涼しい場所へ移動し、衣服をゆるめ、首・脇の下・足の付け根など太い血管が通る場所を冷やすことが重要とされています。
          </p>
          <p className={cls.body}>
            一方で、濡れタオルは時間が経つとぬるくなり、乾くと冷却感も弱くなります。工場・倉庫・建設現場・農作業などでは、冷却タオル・瞬間冷却パック・ネッククーラー・冷却ジェル・アイススラリー・製氷機・休憩所の送風設備などと組み合わせて、現場全体で備えることが大切です。
          </p>
        </div>

        <H2>熱中症対策に濡れタオルは使える？</H2>
        <H3>濡れタオルは気化熱で体を冷やす補助になる</H3>
        <p className={cls.body}>
          肌に残った水分が蒸発するとき、周囲から熱を奪う「気化熱」が働きます。濡れタオルはこの仕組みで体を冷やす手助けをするため、手軽な暑さ対策の一つとして使えます。
        </p>
        <H3>乾いたタオルと濡れタオルの違い</H3>
        <p className={cls.body}>
          乾いたタオルは汗を拭き取る用途に向きますが、汗を拭き取りすぎると気化熱による冷却は弱くなることがあります。濡れタオルは肌に水分を残しやすいため、暑さ対策の補助として使いやすい方法です。
        </p>
        <H3>濡れタオルだけに頼るのは危険</H3>
        <p className={cls.body}>
          濡れタオルは時間が経つとぬるくなり、乾けば冷却感も落ちます。長時間の現場作業では、これだけに頼らず、休憩・水分/塩分補給・日陰・送風・冷却用品と組み合わせることが前提です。
        </p>
        <H3>現場では「濡れタオル＋冷却用品＋休憩所整備」で考える</H3>
        <p className={cls.body}>
          現場では、個人の濡れタオルに加え、交換用の冷却タオル・瞬間冷却パック、休憩所の冷却ジェル・製氷機・送風といった「環境側の備え」をセットで考えると、暑熱対策が安定します。
        </p>

        <Caution>
          <p>
            濡れタオルは熱中症対策の補助であり、これだけで熱中症を防げるわけではありません。WBGT（暑さ指数）の確認、こまめな休憩、水分・塩分補給、日陰の確保、送風、作業時間の管理、体調不良時の報告体制・救急要請と組み合わせて運用してください。
          </p>
        </Caution>

        <p className="mb-2 mt-8 text-sm font-bold text-gray-900">
          現場ですぐ使える冷却アイテム（一例）
        </p>
        <ProductGrid items={EARLY_PRODUCTS} cols="md:grid-cols-4" />

        <H2>濡れタオルで冷やしやすい場所</H2>
        <ArticleImg
          src={IMG.coolingPoints}
          alt="首や脇を冷やすための冷却用品を準備するイメージ"
        />
        <p className={cls.body}>
          体表の近くに太い血管が通る場所を冷やすと、体を効率よく冷やしやすいとされています。環境省の資料でも、前頸部の両脇・脇の下・足の付け根の前面などが冷却部位として示されています。
        </p>
        <H3>首まわり</H3>
        <p className={cls.body}>
          首の両脇は太い血管が通り、冷やしやすい場所です。濡れタオルやネッククーラーが使いやすい部位です。
        </p>
        <H3>脇の下</H3>
        <p className={cls.body}>
          脇の下も冷却部位として挙げられます。保冷剤や冷却パックを当てやすい場所です。
        </p>
        <H3>足の付け根</H3>
        <p className={cls.body}>
          足の付け根の前面も太い血管が通ります。応急時に冷やす部位として覚えておきます。
        </p>
        <H3>顔・腕・手首まわり</H3>
        <p className={cls.body}>
          顔・腕・手首を濡らして風を当てると、気化熱で涼しさを得やすくなります。
        </p>
        <H3>背中やベスト内側は冷却ジェル・パッドも検討</H3>
        <p className={cls.body}>
          背中やベスト内側など濡れタオルが当てにくい部位は、冷却ジェルパッドやネックタイプの冷却剤も検討できます。
        </p>

        <ProductGrid items={COOLING_POINT_PRODUCTS} cols="md:grid-cols-4" />

        <H2>濡れタオル・冷却タオル・冷タオル・瞬間冷却パックの違い</H2>
        <ArticleImg
          src={IMG.comparison}
          alt="濡れタオルと冷却タオルの違いを比較するイメージ"
        />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：タオル系・冷却用品の違いと向いている場面
            </caption>
            <thead>
              <tr>
                <Th>種類</Th>
                <Th>特徴</Th>
                <Th>向いている場面</Th>
                <Th>注意点</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>普通の濡れタオル</Td>
                <Td>水で濡らして使える</Td>
                <Td>短時間の首元・腕の冷却</Td>
                <Td>ぬるくなる・乾く・衛生管理が必要</Td>
              </tr>
              <tr>
                <Td>冷却タオル</Td>
                <Td>濡らして絞って振るタイプが多い</Td>
                <Td>屋外作業・農作業・警備</Td>
                <Td>再湿潤・保管ルールが必要</Td>
              </tr>
              <tr>
                <Td>使い切り冷タオル</Td>
                <Td>個包装で配布しやすい</Td>
                <Td>イベント・現場配布・法人支給</Td>
                <Td>ランニングコストがかかる</Td>
              </tr>
              <tr>
                <Td>瞬間冷却パック</Td>
                <Td>握る・叩くなどで冷却</Td>
                <Td>応急対応・休憩所・現場持ち出し</Td>
                <Td>使い切りが多い</Td>
              </tr>
              <tr>
                <Td>ネッククーラー</Td>
                <Td>首元を集中的に冷やす</Td>
                <Td>警備・屋外立ち仕事・軽作業</Td>
                <Td>サイズ・冷却時間を確認</Td>
              </tr>
              <tr>
                <Td>冷却ジェルマット</Td>
                <Td>休憩中に体を冷やしやすい</Td>
                <Td>仮眠室・休憩所・車内休憩</Td>
                <Td>作業中でなく休憩向き</Td>
              </tr>
              <tr>
                <Td>製氷機・氷</Td>
                <Td>タオルや氷のうと併用</Td>
                <Td>休憩所・イベント・複数人現場</Td>
                <Td>電源・衛生・補充管理</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-2 mt-8 text-sm font-bold text-gray-900">違いを踏まえて選ぶ（一例）</p>
        <ProductGrid items={COMPARE_PRODUCTS} />

        <H2>現場で濡れタオルを使うときの正しい運用</H2>
        <H3>清潔な水で濡らす</H3>
        <p className={cls.body}>
          肌に当てるものなので、清潔な水で濡らします。汚れた水や使い回しの水は避けます。
        </p>
        <H3>首に巻く場合は締めすぎない</H3>
        <p className={cls.body}>
          首に巻くときは締めすぎないようにし、作業の妨げにならない使い方にします。
        </p>
        <H3>ぬるくなったら再度濡らす・交換する</H3>
        <p className={cls.body}>
          冷却感が落ちたら再度濡らすか交換します。交換用の冷却タオルや瞬間冷却パックを併用すると運用しやすくなります。
        </p>
        <H3>共用せず、個人ごとに管理する</H3>
        <p className={cls.body}>
          衛生面から、タオルは個人ごとに管理するか、使い切りタイプを配布します。
        </p>
        <H3>保管・洗濯・使い捨てのルールを決める</H3>
        <p className={cls.body}>
          洗濯・乾燥・使い捨ての区分を決め、補充や回収の担当も明確にします。
        </p>
        <H3>扇風機・工場扇・送風機の風と組み合わせる</H3>
        <p className={cls.body}>
          濡れた肌に風を当てると気化熱による冷却につながりやすくなります。工場扇や送風機の風と組み合わせると体感改善が期待できます。
        </p>

        <Caution>
          <p>
            タオルの共用は衛生面のリスクがあります。個人配布または使い切りタイプの利用が望ましいです。首に巻く場合は締めすぎず、作業の妨げや引っかかりに注意してください。ぬるくなったタオルを長時間使い続けると冷却効果が落ちるため、再湿潤・交換のルールを決めておきましょう。
          </p>
        </Caution>

        <div className="my-8 rounded-lg border border-gray-300 bg-gray-50 p-6">
          <p className={cls.ctaH3}>現場配布・交換用のタオル系用品もあわせて</p>
          <p className={`${cls.bodySm} mb-4`}>
            濡れタオルを現場で使うなら、交換用の冷却タオルや使い切り冷タオル、瞬間冷却パックも一緒に備えておくと運用しやすくなります。仕様・入数は商品ページでご確認ください。
          </p>
          <CTA href={P.bioreCase}>使い切り冷タオル（ケース）を見る</CTA>
        </div>

        <H2>工事現場・倉庫・農作業・警備での使い分け</H2>
        <H3>工事現場：冷却タオル＋瞬間冷却パック＋応急セット</H3>
        <p className={cls.body}>
          屋外・高温環境が多いため、個人の冷却タオルに加え、瞬間冷却パックと救護用の応急セットを備えます。
        </p>
        <H3>倉庫・物流：冷却タオル＋冷風機・冷風扇＋休憩所備品</H3>
        <p className={cls.body}>
          空調が届きにくい倉庫では、冷却タオルに加え、冷風機・冷風扇や休憩所の冷却備品を組み合わせます。
        </p>
        <H3>農作業・林業：虫よけ冷却タオル＋フーディ＋ミストスプレー</H3>
        <p className={cls.body}>
          虫対策も同時に必要な場面では、虫よけ機能付きの冷却タオルやフーディが使いやすい選択肢です。
        </p>
        <H3>警備・屋外立ち仕事：ネッククーラー＋冷却タオル＋塩分補給</H3>
        <p className={cls.body}>
          長時間の立ち仕事には、首元を冷やすネッククーラーと冷却タオル、塩分補給品を組み合わせます。
        </p>
        <H3>イベント・スポーツ運営：使い切り冷タオル＋製氷機＋氷のう</H3>
        <p className={cls.body}>
          大人数には配布しやすい使い切り冷タオルと、氷を確保できる製氷機・氷のうが運用しやすくなります。
        </p>
        <H3>休憩所・仮眠所：冷却ジェルマット＋製氷機＋アイススラリー</H3>
        <p className={cls.body}>
          休憩中にしっかり体を冷やせるよう、冷却ジェルマット・製氷機・アイススラリーを備えます。
        </p>

        <H2>虫よけ・UV対策も必要な屋外作業では冷却虫よけタオルを検討</H2>
        <ArticleImg
          src={IMG.insect}
          alt="農作業向けに虫よけ冷却タオルを準備するイメージ"
        />
        <H3>農作業・草刈り・林業では虫対策も同時に必要</H3>
        <p className={cls.body}>
          屋外の作業では、暑さと同時に虫対策も課題になります。冷却と虫よけを一体で考えると装備を減らせます。
        </p>
        <H3>冷却・UV・虫よけを一体で考える</H3>
        <p className={cls.body}>
          冷却タオルにUV・虫よけの機能を組み合わせた製品は、屋外作業でまとめて備えやすい選択肢です。
        </p>
        <H3>タオル・フーディ・マルチタオルの使い分け</H3>
        <p className={cls.body}>
          首・肩を覆うフーディ、汎用のマルチタオルなど、作業姿勢や部位に応じて使い分けます。
        </p>

        <ProductGrid items={BUGOFF_PRODUCTS} cols="md:grid-cols-4" />

        <H2>休憩所では濡れタオルだけでなく冷却ジェル・氷・製氷機も備える</H2>
        <ArticleImg
          src={IMG.restArea}
          alt="休憩所で冷却ジェルや製氷機とアイススラリーを準備するイメージ"
        />
        <H3>濡れタオルは作業中の一時冷却に向く</H3>
        <p className={cls.body}>
          濡れタオルは作業中の手軽な一時冷却に向きます。休憩中は、より体をしっかり冷やせる用品と使い分けます。
        </p>
        <H3>休憩中は体をしっかり冷やせる用品を使う</H3>
        <p className={cls.body}>
          休憩所では冷却ジェルマットや氷を使い、深部体温を下げやすい環境をつくります。
        </p>
        <H3>冷却ジェルマットは仮眠・休憩所向き</H3>
        <p className={cls.body}>
          冷却ジェルマットは横になって使いやすく、仮眠室・休憩所に向いています。
        </p>
        <H3>氷・製氷機があると濡れタオルや氷のう運用がしやすい</H3>
        <p className={cls.body}>
          氷を安定して確保できると、濡れタオルの冷却や氷のうの運用がしやすくなります。衛生・電源・補充を管理します。
        </p>
        <H3>アイススラリーは作業前・休憩時のプレクーリングに使いやすい</H3>
        <p className={cls.body}>
          体の内側から冷やすアイススラリーは、作業前・休憩時のプレクーリングの補助として使いやすい選択肢です。
        </p>

        <ProductGrid items={REST_PRODUCTS} cols="md:grid-cols-4" />

        <H2>熱中症が疑われるときの濡れタオルの使い方</H2>
        <H3>まず涼しい場所へ移動する</H3>
        <p className={cls.body}>日陰や冷房の効いた涼しい場所へ移動し、安静にします。</p>
        <H3>衣服をゆるめる</H3>
        <p className={cls.body}>衣服をゆるめて熱を逃がしやすくします。</p>
        <H3>首・脇・足の付け根を冷やす</H3>
        <p className={cls.body}>
          濡れタオル・保冷剤・冷却パックで首の周り・脇の下・足の付け根を冷やします。
        </p>
        <H3>濡れタオルを当てて風を送る</H3>
        <p className={cls.body}>
          濡れタオルを当てて扇いだり送風したりすると、気化熱による冷却につながりやすくなります。
        </p>
        <H3>意識がない・飲めない・改善しない場合は救急要請を優先する</H3>
        <p className={cls.body}>
          意識がない・自力で水分を取れない・受け答えがおかしい・症状が改善しない場合は、濡れタオルで様子を見るのではなく救急要請や医療機関の受診を優先します。
        </p>

        <Caution>
          <p>
            意識がない・自力で水分を取れない・反応がおかしい・症状が改善しない場合は、冷却で様子を見ず、直ちに救急要請や医療機関の受診を優先してください。本記事は一般的な情報であり、医療判断を示すものではありません。職場では、体調不良者を早期に把握・報告する体制と、救護場所・応急セットの準備を整えておきましょう。
          </p>
        </Caution>

        <ProductGrid items={EMERGENCY_PRODUCTS} cols="md:grid-cols-4" />

        <H2>法人・現場で揃えたい冷却用品チェックリスト</H2>
        <p className={cls.body}>
          用途別に、備えたい用品を整理しました。人数・作業時間・休憩回数・交換頻度をもとに必要数を決めると、過不足なく準備できます。
        </p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：現場で揃えたい冷却用品（用途別）
            </caption>
            <thead>
              <tr>
                <Th>用途</Th>
                <Th>備えたい用品</Th>
                <Th>優先度</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>個人配布</Td>
                <Td>冷却タオル・使い切り冷タオル・BUGOFFアイスタオル</Td>
                <Td>高</Td>
              </tr>
              <tr>
                <Td>首元冷却</Td>
                <Td>ネッククーラー・瞬間冷却剤ネックタイプ</Td>
                <Td>高</Td>
              </tr>
              <tr>
                <Td>応急対応</Td>
                <Td>瞬間冷却パック・熱中症応急セット・保冷まくら</Td>
                <Td>高</Td>
              </tr>
              <tr>
                <Td>休憩所</Td>
                <Td>冷却ジェルマット・氷・製氷機</Td>
                <Td>中〜高</Td>
              </tr>
              <tr>
                <Td>屋外・虫対策</Td>
                <Td>BUGOFFフーディ・BUGOFFマルチタオル</Td>
                <Td>中</Td>
              </tr>
              <tr>
                <Td>プレクーリング</Td>
                <Td>アイススラリー・アイススラリーメーカー</Td>
                <Td>中〜高</Td>
              </tr>
              <tr>
                <Td>全体冷却</Td>
                <Td>冷風機・冷風扇・ミストスプレー（本記事では商品リンク未掲載）</Td>
                <Td>現場次第</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H3>よくある失敗</H3>
        <ol className="my-4 list-decimal space-y-2 pl-6 leading-[1.95] tracking-[0.04em] text-gray-800">
          <li>
            濡れタオルだけで熱中症対策になると思い込む（WBGT確認・休憩・補給・日陰・送風とセットで考える）
          </li>
          <li>
            ぬるくなったタオルを長時間使い続ける（再湿潤・交換・併用のルールを決める）
          </li>
          <li>共用タオルにしてしまう（個人配布または使い切りタイプにする）</li>
          <li>首に強く巻きすぎる（締めすぎず、作業の妨げにならない使い方に）</li>
          <li>
            応急処置と日常対策を混同する（普段は冷却タオル、疑い時は冷却＋救急判断＋応急セット）
          </li>
          <li>
            現場ごとの必要数を決めていない（人数・作業時間・休憩回数・交換頻度で算出する）
          </li>
        </ol>

        <H2>まとめ｜濡れタオルは手軽だが、現場では冷却用品を組み合わせて備える</H2>
        <ArticleImg
          src={IMG.checklist}
          alt="法人担当者が冷却タオルや瞬間冷却用品の備品リストを確認するイメージ"
        />
        <p className={cls.body}>
          濡れタオルは手軽で使いやすい暑さ対策の補助ですが、時間が経つとぬるくなり、これだけで熱中症を防げるわけではありません。現場では、冷却タオル・使い切り冷タオル・瞬間冷却パック・ネッククーラー・冷却ジェル・製氷機・アイススラリーを、作業内容や場所に応じて組み合わせ、WBGT確認・休憩・水分/塩分補給・日陰・送風・応急対応とセットで備えることが大切です。
        </p>

        <FinalCTA href={P.firstAidA}>
          熱中症応急セット・冷却用品を確認する
        </FinalCTA>

        <p className="mb-2 mt-8 text-sm font-bold text-gray-900">カテゴリ別の代表アイテム</p>
        <ProductGrid items={CATEGORY_LINKS} />

        <H2>よくある質問</H2>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q}>
              <h3 className={cls.faqQ}>Q. {item.q}</h3>
              <p className={cls.body}>{item.a}</p>
            </div>
          ))}
        </div>

        <H2>関連記事</H2>
        <ul className="my-4 list-disc space-y-2 pl-6">
          {RELATED.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="text-gray-900 underline hover:no-underline">
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
