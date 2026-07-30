// ============================================================
// 作業用品ナビ / articles/trusco-steel-cart-selection-guide
// 「トラスコ 鋼鉄製運搬車 選び方」ブランド×意思決定クラスタ（自己完結page.tsx）
// ============================================================
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "trusco-steel-cart-selection-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const TITLE =
  "トラスコ 鋼鉄製運搬車の選び方｜SH・OH・PH型の違い、天板サイズ・キャスター・Lストッパーで失敗しない【2026年】";
const DESCRIPTION =
  "トラスコ中山の鋼鉄製運搬車（業務用スチール台車）の選び方を、SH型/OH型/PH型の違い、天板サイズ・均等荷重、キャスター種類（プレス・鋳物・ウレタン・エア・導電性）、Lストッパー、片袖2段/折りたたみ/1トン積みなど特殊タイプまで徹底解説。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    locale: "ja_JP",
    url: CANONICAL,
    siteName: "作業用品ナビ",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/articles/trusco-cart/hero.jpg`,
        width: 1280,
        height: 720,
        alt: "工場で使用されるトラスコ 鋼鉄製運搬車のイメージ",
      },
    ],
  },
};

// ---- URL helpers -------------------------------------------
const UTM = "utm_source=sagyou_navi";
function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const h = url.indexOf("#");
  const append = (b: string): string =>
    `${b}${b.includes("?") ? "&" : "?"}${utm}`;
  if (h === -1) return append(url);
  return `${append(url.slice(0, h))}${url.slice(h)}`;
}
const YB = (u: string) => buildUrl(u, UTM);
const RAW = (u: string) => buildUrl(u, UTM);

// ---- CTA（指定URL） ----------------------------------------
const CTA_MAIN = {
  label: "トラスコ 鋼鉄製運搬車一覧はこちら",
  href: RAW(
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E9%8B%BC%E9%89%84%E8%A3%BD%E9%81%8B%E6%90%AC%E8%BB%8A#CentSrchFilter1",
  ),
};
const CTA_SUB = [
  {
    label: "工具一覧",
    href: RAW(
      "https://search.rakuten.co.jp/search/mall/%E5%B7%A5%E5%85%B7/?sid=426972",
    ),
  },
  {
    label: "運搬台車一覧",
    href: RAW(
      "https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc&prom=1&b=31&view=grid",
    ),
  },
];

// ---- UI atoms ----------------------------------------------
function CategoryBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center rounded bg-gray-900 px-2 py-0.5 text-xs font-bold text-white">
      {children}
    </span>
  );
}
function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-gray-900 bg-gray-50 p-5 text-[15px] leading-[1.95] tracking-[0.04em] text-gray-900">
      {children}
    </div>
  );
}
function Caution({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5">
      <p className="mb-1 text-sm font-bold text-gray-900">⚠ {title}</p>
      <div className={cls.bodySm}>{children}</div>
    </div>
  );
}
function CardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
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
function Mark({ children }: { children: ReactNode }) {
  return <mark className={cls.mark}>{children}</mark>;
}
function ArticleImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-6">
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={720}
        priority={priority}
        className="h-auto w-full rounded-lg border border-gray-200"
        sizes="(max-width: 768px) 100vw, 768px"
      />
      <figcaption className={`mt-2 text-center ${cls.meta}`}>{alt}</figcaption>
    </figure>
  );
}

// ---- Shop button / cards -----------------------------------
function ShopButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored"
      className="inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-xs font-bold text-white hover:bg-gray-700"
    >
      {label}
    </a>
  );
}
function ShopLinks({ links }: { links: { label: string; href: string }[] }) {
  if (!links || links.length === 0) {
    return (
      <span className="inline-flex items-center rounded-md border border-dashed border-gray-400 px-3 py-2 text-xs text-gray-800">
        掲載準備中
      </span>
    );
  }
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((l) => (
        <ShopButton key={l.href} href={l.href} label={l.label} />
      ))}
    </div>
  );
}
function ProductCard({
  img,
  name,
  badge,
  feature,
  use,
  links,
}: {
  img: string;
  name: string;
  badge: string;
  feature: string;
  use: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-md bg-gray-50">
        <Image
          src={`/products/${img}`}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 50vw, 300px"
        />
      </div>
      <CategoryBadge>{badge}</CategoryBadge>
      <h3 className="mt-2 text-base font-black leading-snug text-gray-900">
        {name}
      </h3>
      <p className={`mt-1 ${cls.bodySm}`}>
        <span className="font-bold">特徴：</span>
        {feature}
      </p>
      <p className={`mt-1 ${cls.bodySm}`}>
        <span className="font-bold">向く現場：</span>
        {use}
      </p>
      <p className={`mt-1 ${cls.meta}`}>
        ※価格・在庫・均等荷重・寸法・キャスター仕様は各商品ページで要確認（車上渡し・組立式）
      </p>
      <div className="mt-3">
        <ShopLinks links={links} />
      </div>
    </div>
  );
}

// ---- CTA blocks --------------------------------------------
function MainCta() {
  return (
    <div className="my-8 rounded-xl border-2 border-gray-900 bg-gray-50 p-6 text-center">
      <p className={cls.ctaH3}>トラスコ 鋼鉄製運搬車をまとめて探す</p>
      <p className={cls.meta}>
        SH型・OH型・PH型・折りたたみ・特殊タイプまで幅広くラインナップ。
      </p>
      <a
        href={CTA_MAIN.href}
        target="_blank"
        rel="nofollow sponsored"
        className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-bold text-white hover:bg-gray-700"
      >
        {CTA_MAIN.label} ›
      </a>
    </div>
  );
}
function FinalCta() {
  return (
    <div className="my-8 rounded-xl border-2 border-gray-900 bg-gray-50 p-6 text-center">
      <p className="mb-2 text-xl font-black tracking-wide text-gray-900 sm:text-2xl">
        現場に合う鋼鉄製運搬車を見つけよう
      </p>
      <p className={cls.meta}>
        まずは天板サイズと均等荷重から。工具・他の運搬台車もあわせてチェック。
      </p>
      <a
        href={CTA_MAIN.href}
        target="_blank"
        rel="nofollow sponsored"
        className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-bold text-white hover:bg-gray-700"
      >
        {CTA_MAIN.label} ›
      </a>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {CTA_SUB.map((c) => (
          <a
            key={c.href}
            href={c.href}
            target="_blank"
            rel="nofollow sponsored"
            className="inline-flex items-center rounded-md border border-gray-900 bg-white px-4 py-2 text-xs font-bold text-gray-900 hover:bg-gray-100"
          >
            {c.label} ›
          </a>
        ))}
      </div>
    </div>
  );
}

// ---- FAQ data ----------------------------------------------
const FAQ = [
  {
    q: "トラスコの鋼鉄製運搬車と樹脂台車はどちらが良いですか？",
    a: "重量物を頻繁に運ぶプロの現場は鋼鉄製、軽量物・住宅内・音を抑えたい場所は樹脂台車（カルティオ等）が向きます。鋼鉄製は荷台がスチール製で頑丈・耐久性が高く、キャスターも大径のプレス車・鋳物車輪などから選べます。均等荷重や運ぶ物の重さ・使用頻度で選び分けます。",
  },
  {
    q: "SH型・OH型・PH型の違いは何ですか？",
    a: "いずれもトラスコの鋼鉄製運搬車のシリーズ名です。おおまかにSH型は標準的な業務用ラインナップの中心、OH型は頑丈な鋳物キャスターを標準としたヘビィデューティ寄り、PH型は特殊形状（折りたたみ・片袖2段・空気入タイヤなど）が多い傾向です。品番の末尾記号（R＝ハンドル側自在、SS＝Lストッパー付、E＝導電性、AC＝エアキャスター、NU＝ウレタン等）で仕様が細かく分岐します。正確な違いは各商品ページの仕様をご確認ください。",
  },
  {
    q: "品番の記号（SS・R・E・AC・NU・GN）は何を意味しますか？",
    a: "SS＝ロックストッパー（Lストッパー）付、R＝ハンドル側自在キャスター、E＝導電性キャスター（ESD対策）、AC＝エアキャスター（空気入）、NU＝Φ100/150/200のウレタン車、GN＝ボディカラー緑、Fの前など数字は天板サイズやシリーズ番号を表します。例：SH-2NSSは「SH型・900×600・プレス車・Lストッパー付」の意味になります。",
  },
  {
    q: "天板サイズはどう選べばいいですか？",
    a: "運ぶ物の最大サイズ＋通路幅・保管場所を基準に選びます。目安として、800×450は小物・軽量向け、900×600は中量・汎用、1200×600/1200×750は長尺物・多点数、1400×750は大型物や2段運用の土台に適します。狭い通路や段差の多い現場は小さめを、広い工場や倉庫は大きめを選びます。",
  },
  {
    q: "均等荷重は何を見ればいいですか？",
    a: "均等荷重は「台車本体の許容荷重」と「Lストッパー使用時の許容荷重」の2通りが表記されます。運ぶ物の総重量に対して、余裕（1.3〜1.5倍程度）を持ったものを選ぶのが安全です。トラスコの鋼鉄製運搬車には、SH-2NSS（400kg級）〜SH10-2S（1トン）まで幅広い荷重ラインナップがあります。",
  },
  {
    q: "キャスターの種類はどれを選べば良いですか？",
    a: "床面と用途で選びます。プレス車は標準・軽快、鋳物車輪は頑丈で振動吸収に優れ重荷重に強い、ウレタン車は静音・耐油・耐摩耗、エアキャスター（空気入タイヤ）は路面の段差・振動を吸収、導電性キャスターは静電気を逃がす（電子部品・危険物取り扱い）、ダーコキャスターは高強度・重荷重向け。屋内平坦床＝プレス/ウレタン、屋外や段差＝エア、精密工場＝ウレタン/導電、と使い分けます。",
  },
  {
    q: "「ハンドル側自在」タイプ（品番にR）のメリットは？",
    a: "ハンドル側のキャスター2輪が自在キャスターになっているタイプです。重量物を積んだ状態でも回転半径が小さくなり、狭い通路や複雑な動線でも取り回しがしやすくなります。品番末尾に「R」が付いているものが該当します。反面、直進安定性は標準（ハンドル側固定）タイプの方が優れる傾向です。",
  },
  {
    q: "Lストッパー（ロックストッパー）とはどんな機能ですか？",
    a: "床面に押し付けてロックする、スチール製のフロアロック機構です。内蔵スプリングで床面を押さえるため、ロック時に台車が持ち上がらず、重い荷物を載せたまま停車できるのが特長です。品番末尾に「SS」が付くものはLストッパー付仕様です。傾斜面や振動のある場所で荷崩れを防ぐのに有効です。",
  },
  {
    q: "折りたたみタイプはどんな用途に向きますか？",
    a: "使用しないときに省スペースで保管したい現場、車載して現場間を移動する使い方に向きます。トラスコの折りたたみ式（PHO型）はハンドルが折りたためる仕様で、鋼鉄製ながらコンパクトに収納できます。頻繁に折りたたむ用途では、標準タイプに比べ耐久性の低下に配慮した使い方が必要です。",
  },
  {
    q: "片袖2段型・両袖2段型・前方トビラ・三面パネルはどう使う？",
    a: "片袖2段型は上段の袖付き荷台で部品仕分けや組立作業をしながら移動、両袖2段型は両側に袖があり整理・仕分け重視、前方トビラは前面が扉状で長尺物のズレ防止、三面パネルは荷崩れ防止に囲いを持たせたい場合に選びます。作業内容（運搬だけか、作業しながらか）で使い分けます。",
  },
  {
    q: "導電性キャスター（品番にE）はどんな現場で使いますか？",
    a: "電子部品工場・半導体工場・危険物取扱い場所など、静電気を逃がす必要がある現場で使います。品番末尾「E」または「ESD」表記が導電性キャスター仕様です。静電気による部品破損や着火リスクを抑える目的で導入されます。",
  },
  {
    q: "エアキャスター（AC）・空気入タイヤ（AR）はどう違う？",
    a: "エアキャスター（AC）は小径〜中径の空気入りキャスターで、通常のプレス車より段差や振動をよく吸収します。空気入タイヤ（ARなど）はさらに大径（Φ223など）の車輪で、屋外の未舗装路や大きな段差にも対応します。屋外・段差・振動吸収を重視するなら空気入タイプが有力です。",
  },
  {
    q: "鋼鉄製運搬車は組立が必要ですか？",
    a: "多くのモデルが「組立式」で、購入時はハンドルとキャスターを本体（荷台）に取り付ける形になります。組立にはスパナ等の工具が必要です。また車体が重いため、多くの場合「車上渡し」（トラック上での引き渡し）となり、荷降ろしに人員またはフォークリフト等が必要になる場合があります。詳細は各商品ページをご確認ください。",
  },
  {
    q: "1トン積みモデル（SH10）と通常モデルの違いは？",
    a: "SH10-2S・SH10-2DSは均等荷重1トン級の重荷重用モデルで、フレーム・ハンドル・キャスターを強化した仕様です。工場・倉庫・物流の大型物運搬向けで、通常モデル（400〜600kg級）と比べて剛性と耐久性が高い一方、価格・重量も大きくなります。運ぶ物の重量と使用頻度で選び分けます。",
  },
  {
    q: "鋼鉄製運搬車の耐用年数・メンテナンスは？",
    a: "使用環境と頻度によりますが、キャスターとストッパーが消耗部品です。定期的にキャスターの回転・摩耗・軸のガタ、ストッパーのバネの働き、フレームのゆがみを点検し、消耗品は交換（取替キャスター品番はメーカー資料に記載）してください。屋外・水気・薬品環境では錆にも注意します。",
  },
  {
    q: "台車の安全な使い方の基本は？",
    a: "均等荷重を守り、重心が高くなる積み方は避けます。ストッパーを掛けてから積み下ろしを行い、押す（前進）ときは前方を見る、下り坂・傾斜面では加速に注意、他の作業者との接触を避ける、といった基本の徹底が労災防止につながります。",
  },
  {
    q: "SS付き（Lストッパー付）と付いていないモデル、どちらを選ぶ？",
    a: "傾斜面・振動のある現場、荷を載せたまま停車したい現場ではLストッパー付（SS）を選ぶのが安全です。完全平坦な屋内で頻繁に発進停止する軽用途なら、ストッパーなしでも運用可能です。安全側で選ぶならSS付をおすすめします。",
  },
  {
    q: "運搬車と一緒に検討すると良いものは？",
    a: "作業効率と安全のためには、工具（積み下ろし・組立用のスパナ等）、他の運搬台車（軽量作業用の樹脂台車・キャリー）、荷崩れ防止のロープ・ストレッチフィルム、フォークリフト・パレット、ヘルメット・安全靴などの保護具が挙げられます。この記事末尾の「工具」「運搬台車」の一覧もあわせてご覧ください。",
  },
];

// ---- JSON-LD -----------------------------------------------
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
  author: { "@type": "Organization", name: "作業用品ナビ編集部" },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    logo: {
      "@type": "ImageObject",
      url: "https://www.sagyou-navi.com/logo.png",
    },
  },
  datePublished: "2026-07-16",
  dateModified: "2026-07-30",
};
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://www.sagyou-navi.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: "https://www.sagyou-navi.com/articles",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "トラスコ 鋼鉄製運搬車の選び方",
      item: CANONICAL,
    },
  ],
};
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ============================================================
export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <nav className={`mb-4 ${cls.meta}`} aria-label="パンくず">
          <a href="https://www.sagyou-navi.com/" className="hover:underline">
            ホーム
          </a>{" "}
          ／{" "}
          <a
            href="https://www.sagyou-navi.com/articles"
            className="hover:underline"
          >
            記事一覧
          </a>{" "}
          ／{" "}
          <span className="text-gray-900">トラスコ 鋼鉄製運搬車の選び方</span>
        </nav>

        <CategoryBadge>運搬台車・鋼鉄製</CategoryBadge>
        <h1 className={cls.h1}>{TITLE}</h1>
        <p className={cls.body}>
          「トラスコの鋼鉄製運搬車、種類が多くて選べない…」——SH型/OH型/PH型、天板サイズ、キャスター、Lストッパー、片袖2段や折りたたみ、1トン積みまで、選択肢が豊富すぎて迷いやすいのが正直なところ。この記事では、トラスコ中山の
          <strong>業務用スチール台車</strong>を、
          <Mark>天板サイズ → 均等荷重 → キャスター → ハンドル/ストッパー → 特殊タイプ</Mark>
          の5ステップで選ぶ方法を、品番の記号（SS/R/E/AC/NU/GN）の意味とあわせて徹底解説します。
        </p>
        <p className={cls.meta}>最終更新：2026年7月30日</p>

        <ArticleImage
          src="/articles/trusco-cart/hero.jpg"
          alt="工場で使用されるトラスコ 鋼鉄製運搬車のイメージ"
          priority
        />

        {/* ============ H2-1 結論 ============ */}
        <h2 className={cls.h2}>
          【結論】鋼鉄製運搬車の選び方は「天板サイズ→荷重→キャスター→ハンドル/ストッパー→特殊」の5ステップ
        </h2>
        <AnswerBox>
          <p>
            トラスコの鋼鉄製運搬車は、
            <strong>
              ①天板サイズ（800×450／900×600／1200×600/750／1400×750）
            </strong>
            →<strong>②均等荷重</strong>→
            <strong>③キャスター種類</strong>
            （プレス／鋳物／ウレタン／エア／導電性）→
            <strong>④ハンドル形状とストッパー</strong>
            （固定/自在＝R、Lストッパー＝SS）→
            <strong>⑤特殊タイプ</strong>
            （片袖2段／折りたたみ／1トン／前方トビラ／三面パネル／6輪）の5ステップで選ぶと、失敗しません。品番の記号を読めば仕様がひと目で分かります（例：
            <Mark>SH-2NSS</Mark>
            ＝SH型・900×600・プレス車・Lストッパー付）。
          </p>
        </AnswerBox>
        <MainCta />

        <p className={cls.body}>
          まずは“最初の一台”に選ばれやすい定番モデルから。下のボタンから各商品ページで均等荷重・寸法・在庫を確認できます。
        </p>
        <CardGrid>
          <ProductCard
            img="218024.jpg"
            name="TRUSCO SH-2NSS（900×600・Φ150プレス車・Lストッパー付）"
            badge="定番・SH型"
            feature="標準サイズ・プレス車・Lストッパー付のオールラウンダー"
            use="工場・倉庫の汎用運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218024.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="217341.jpg"
            name="TRUSCO OH-2SS（900×600・Φ150鋳物車輪・Lストッパー付）"
            badge="定番・OH型"
            feature="頑丈な鋳物車輪で重荷重・振動吸収に強い"
            use="重量物・ヘビィデューティな現場"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/217341.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="217386.jpg"
            name="TRUSCO PH-22SS（900×600・片袖2段型・プレス車・LS付）"
            badge="作業台一体"
            feature="袖付き上段で組立作業しながら移動"
            use="組立ライン・部品仕分け"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/217386.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="217392.jpg"
            name="TRUSCO PHO-2SS（折りたたみ式・900×600・Φ150プレス車・LS付）"
            badge="折りたたみ"
            feature="ハンドル折りたたみで省スペース保管"
            use="車載・現場間移動・倉庫保管"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/217392.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
        </CardGrid>

        {/* ============ H2-2 品番の読み方 ============ */}
        <h2 className={cls.h2}>
          品番の記号を読み解く：SS / R / E / AC / NU / GN の意味
        </h2>
        <p className={cls.body}>
          トラスコ鋼鉄製運搬車の品番は、シリーズ記号＋サイズ数字＋オプション記号の組み合わせで構成されています。この記号を読むと、仕様がひと目で分かります。
        </p>
        <Table>
          <thead>
            <tr>
              <Th>記号</Th>
              <Th>意味</Th>
              <Th>例</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>SH / OH / PH</Td>
              <Td>
                シリーズ名（SHは標準業務用、OHは頑丈系、PHは特殊/折りたたみ系）
              </Td>
              <Td>SH-2NSS ／ OH-2SS ／ PHO-2SS</Td>
            </tr>
            <tr>
              <Td>数字（1L/2/3等）</Td>
              <Td>
                天板サイズ（1L＝大型1400×750、2＝中型900×600、3＝小型800×450
                等）
              </Td>
              <Td>SH-1LN…／SH-2N…／SH-3N…</Td>
            </tr>
            <tr>
              <Td>SS</Td>
              <Td>Lストッパー（ロックストッパー）付</Td>
              <Td>SH-2NSS</Td>
            </tr>
            <tr>
              <Td>R</Td>
              <Td>ハンドル側自在キャスター（狭所での取り回し重視）</Td>
              <Td>SH-2R ／ PH-22RSS</Td>
            </tr>
            <tr>
              <Td>E / ES</Td>
              <Td>導電性キャスター（ESD対策）</Td>
              <Td>SH-2NESS</Td>
            </tr>
            <tr>
              <Td>AC</Td>
              <Td>エアキャスター（空気入・振動吸収）</Td>
              <Td>SH-2NAC</Td>
            </tr>
            <tr>
              <Td>NU</Td>
              <Td>ウレタン車（静音・耐油・耐摩耗）</Td>
              <Td>SH2-NUSS</Td>
            </tr>
            <tr>
              <Td>AR</Td>
              <Td>空気入タイヤ（大径・段差に強い）</Td>
              <Td>PH-2-ARSS ／ OHN-2ARS</Td>
            </tr>
            <tr>
              <Td>GN</Td>
              <Td>ボディカラー緑</Td>
              <Td>SH-2N(GN)</Td>
            </tr>
          </tbody>
        </Table>
        <p className={cls.meta}>
          ※上記は代表的な記号の目安です。厳密な仕様は各商品ページ・メーカー資料でご確認ください。
        </p>

        {/* ============ H2-3 天板サイズ ============ */}
        <h2 className={cls.h2}>
          【STEP1】天板サイズで選ぶ（800×450／900×600／1200／1400×750）
        </h2>
        <p className={cls.body}>
          運ぶ物の最大サイズ＋通路幅・保管場所を基準に、天板サイズを最初に決めます。狭い通路や段差の多い現場は小さめ、広い工場や倉庫は大きめが基本です。
        </p>
        <Table>
          <thead>
            <tr>
              <Th>天板サイズ（mm）</Th>
              <Th>品番の数字</Th>
              <Th>向く用途</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>
                <Mark>800×450</Mark>
              </Td>
              <Td>「3」（例：SH-3N）</Td>
              <Td>小物・軽量物、通路が狭い現場、片手作業</Td>
            </tr>
            <tr>
              <Td>
                <Mark>900×600</Mark>
              </Td>
              <Td>「2」（例：SH-2N）</Td>
              <Td>中量・汎用。工場・倉庫の標準サイズ</Td>
            </tr>
            <tr>
              <Td>1200×600</Td>
              <Td>「2L」（例：SH-2LN）</Td>
              <Td>長尺物・箱物を運びたい場合</Td>
            </tr>
            <tr>
              <Td>1200×750</Td>
              <Td>「1」（例：SH-1N）</Td>
              <Td>大型物・多点数の運搬</Td>
            </tr>
            <tr>
              <Td>1400×750</Td>
              <Td>「1L」（例：SH-1LN）</Td>
              <Td>大型物、2段運用の土台、物流大量運搬</Td>
            </tr>
          </tbody>
        </Table>
        <CardGrid>
          <ProductCard
            img="160164.jpg"
            name="TRUSCO SH-3系（800×450・小型/狭所向け）"
            badge="天板 800×450"
            feature="小物・軽量物、狭い通路。SH-3N/SH-3C/SH-3R/SH-3NSS等"
            use="狭所・小物運搬"
            links={[
              {
                label: "品番 160164",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/160164.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
              {
                label: "品番 160165",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/160165.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
              {
                label: "品番 160172",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/160172.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
              {
                label: "品番 160170",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/160170.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
              {
                label: "品番 160169",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/160169.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
              {
                label: "品番 218032",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218032.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="160126.jpg"
            name="TRUSCO SH-2L系（1200×600・長尺物向け）"
            badge="天板 1200×600"
            feature="長尺物・箱物を運びたいときの中間サイズ"
            use="長尺・箱物運搬"
            links={[
              {
                label: "品番 160126",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/160126.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
              {
                label: "品番 218020",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218020.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
              {
                label: "品番 160166",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/160166.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="218011.jpg"
            name="TRUSCO SH-1/SH-1L系（1200×750〜1400×750・大型）"
            badge="天板 1200×750/1400×750"
            feature="大型物・多点数運搬、2段運用の土台にも"
            use="工場・倉庫の大物運搬"
            links={[
              {
                label: "品番 218011",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218011.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
              {
                label: "品番 160168",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/160168.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
              {
                label: "品番 218007",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218007.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="160188.jpg"
            name="TRUSCO SH-NU-GN系 固定ハンドル・ウレタン車（緑ボディ）"
            badge="標準・緑ボディ"
            feature="ウレタン車・緑ボディの固定ハンドル汎用モデル"
            use="屋内平坦床の静音運搬"
            links={[
              {
                label: "品番 160188",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/160188.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
              {
                label: "品番 160187",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/160187.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
              {
                label: "品番 160189",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/160189.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="160180.jpg"
            name="TRUSCO SH-1NE-GN 固定ハンドル・導電性キャスター（緑）"
            badge="標準・導電性"
            feature="導電性キャスターの1200×750大型モデル"
            use="電子部品・帯電対策の必要な現場"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/160180.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="160129.jpg"
            name="TRUSCO OH-23P（三面パネル・OH型）"
            badge="OH型・三面パネル"
            feature="荷崩れ防止の三面パネル付きOH型"
            use="箱物・荷崩れ心配のある物"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/160129.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
        </CardGrid>

        {/* ============ H2-4 キャスター ============ */}
        <h2 className={cls.h2}>
          【STEP2/3】均等荷重とキャスター種類で選ぶ（プレス／鋳物／ウレタン／エア／導電性）
        </h2>
        <p className={cls.body}>
          運ぶ物の総重量を基準に、余裕をもった均等荷重のモデルを選び、床面と用途に合ったキャスターを選択します。
        </p>
        <Table>
          <thead>
            <tr>
              <Th>キャスター種類</Th>
              <Th>特徴</Th>
              <Th>向く現場</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>プレス車（標準）</Td>
              <Td>スチール製で軽快、コスパ良好</Td>
              <Td>屋内平坦床の標準用途</Td>
            </tr>
            <tr>
              <Td>鋳物車輪（OH型標準）</Td>
              <Td>頑丈で振動吸収に優れ、重荷重に強い</Td>
              <Td>重量物・ヘビィデューティな現場</Td>
            </tr>
            <tr>
              <Td>ウレタン車（NU）</Td>
              <Td>静音・耐油・耐摩耗、床を傷めにくい</Td>
              <Td>精密工場・食品・音を抑えたい現場</Td>
            </tr>
            <tr>
              <Td>エアキャスター（AC）／空気入タイヤ（AR）</Td>
              <Td>路面の段差・振動を吸収</Td>
              <Td>屋外・未舗装・段差のある現場</Td>
            </tr>
            <tr>
              <Td>導電性キャスター（E / ES）</Td>
              <Td>静電気を逃がす（ESD対策）</Td>
              <Td>電子部品・半導体・危険物取扱い</Td>
            </tr>
            <tr>
              <Td>ダーコキャスター（D）</Td>
              <Td>高強度・重荷重対応</Td>
              <Td>1トン級の大型物運搬</Td>
            </tr>
          </tbody>
        </Table>
        <p className={cls.body}>
          床が滑らかで音を抑えたい屋内なら
          <Mark>ウレタン</Mark>
          、屋外・段差なら
          <Mark>エアキャスター</Mark>
          、電子部品工場なら
          <Mark>導電性</Mark>
          、超重量物なら
          <Mark>ダーコ</Mark>
          、が定石です。
        </p>
        <CardGrid>
          <ProductCard
            img="218033.jpg"
            name="TRUSCO SH3-NUSS（800×450・Φ100ウレタン車・LS付）"
            badge="ウレタン車"
            feature="小型・静音・耐油/耐摩耗"
            use="精密工場・食品・音を抑えたい現場"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218033.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="218025.jpg"
            name="TRUSCO SH2-NUSS（900×600・Φ150ウレタン車・LS付）"
            badge="ウレタン車"
            feature="標準サイズの静音ウレタン仕様"
            use="事務所・精密現場の中量運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218025.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="218012.jpg"
            name="TRUSCO SH1-NUSS（1200×750・Φ200ウレタン車・LS付）"
            badge="ウレタン車"
            feature="大型・大径ウレタンで静かに運搬"
            use="広い工場の静音大物運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218012.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
        </CardGrid>
        <CardGrid>
          <ProductCard
            img="218030.jpg"
            name="TRUSCO SH-3NACSS（800×450・Φ100エアキャスター・LS付）"
            badge="エアキャスター"
            feature="小型の空気入で段差を吸収"
            use="屋外・段差のある小物運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218030.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="218029.jpg"
            name="TRUSCO SH-3NAC 800×450・エアキャスター（緑）"
            badge="エアキャスター"
            feature="ストッパーなしの800×450エア仕様"
            use="屋外・小物の軽快な運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218029.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="218021.jpg"
            name="TRUSCO SH-2NAC 900×600・エアキャスター（緑）"
            badge="エアキャスター"
            feature="標準サイズのエアキャスター緑ボディ"
            use="屋外・振動を嫌う運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218021.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="218017.jpg"
            name="TRUSCO SH-2LNAC 1200×600・エアキャスター（緑）"
            badge="エアキャスター"
            feature="長尺物向けサイズのエアキャスター"
            use="屋外・長尺物運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218017.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="217388.jpg"
            name="TRUSCO PH-2-ARSS 900×600・プレス製空気入タイヤ・LS付"
            badge="空気入タイヤ（大径）"
            feature="大径タイヤで大きな段差にも対応"
            use="未舗装路・屋外現場"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/217388.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="217348.jpg"
            name="TRUSCO OHN-2ARS 900×600・Φ223空気入タイヤ・鋳物金具・ストッパー付"
            badge="空気入タイヤ（大径）"
            feature="鋳物金具＋Φ223大径タイヤの頑丈仕様"
            use="屋外・段差の激しい現場"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/217348.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
        </CardGrid>
        <CardGrid>
          <ProductCard
            img="218031.jpg"
            name="TRUSCO SH-3NESS（800×450・導電性・LS付）"
            badge="導電性・E"
            feature="800×450の導電性キャスター仕様"
            use="電子部品・帯電対策の小型運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218031.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="218023.jpg"
            name="TRUSCO SH-2NESS（900×600・導電性・LS付）"
            badge="導電性・E"
            feature="標準サイズの導電性モデル"
            use="電子部品工場の汎用運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218023.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="218019.jpg"
            name="TRUSCO SH-2LNESS（1200×600・導電性・LS付）"
            badge="導電性・E"
            feature="長尺物向けの導電性モデル"
            use="電子部品・長尺物運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218019.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="218010.jpg"
            name="TRUSCO SH-1NESS（1200×750・導電性・LS付）"
            badge="導電性・E"
            feature="大型サイズの導電性モデル"
            use="大物・電子部品現場"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218010.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="218006.jpg"
            name="TRUSCO SH-1LNESS（1400×750・導電性・LS付）"
            badge="導電性・E"
            feature="1400×750の導電性大型モデル"
            use="超大型・電子部品現場"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218006.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
        </CardGrid>
        <CardGrid>
          <ProductCard
            img="217343.jpg"
            name="TRUSCO OH-3SS（800×450・Φ100鋳物車輪・LS付）"
            badge="鋳物車輪"
            feature="小型の鋳物車輪モデル"
            use="小物でも重量のある物の運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/217343.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="217350.jpg"
            name="TRUSCO OHN-2S（900×600・Φ150鋳物車輪・ストッパー付）"
            badge="鋳物車輪"
            feature="標準サイズの鋳物・ストッパー付"
            use="汎用の重量物運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/217350.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="217349.jpg"
            name="TRUSCO OHN-2LS（1200×600・Φ150鋳物車輪・ストッパー付）"
            badge="鋳物車輪"
            feature="長尺物向け鋳物モデル"
            use="長尺重量物の運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/217349.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="217334.jpg"
            name="TRUSCO OH-1LSS（1400×750・Φ200鋳物車輪・LS付）"
            badge="鋳物車輪"
            feature="大型・大径鋳物車輪のヘビィデューティ"
            use="大型重量物・物流"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/217334.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
        </CardGrid>

        {/* ============ H2-5 ハンドル/ストッパー ============ */}
        <h2 className={cls.h2}>
          【STEP4】ハンドル形状とLストッパー（SS）で選ぶ
        </h2>
        <p className={cls.body}>
          <strong>ハンドル形状</strong>
          は「固定ハンドル（標準）」と「ハンドル側自在（R）」の2種類。狭所での取り回しを重視するなら
          <Mark>R付き</Mark>
          、直進安定性を重視するなら固定を選びます。
          <strong>Lストッパー（SS）</strong>
          は床面に押し付けてロックする機構で、傾斜面や振動のある場所での荷崩れ・不意の移動を防ぎます。安全側で選ぶなら
          <Mark>SS付き</Mark>が基本です。
        </p>
        <Caution title="ロックストッパー（Lストッパー）のポイント">
          <p>
            Lストッパーは
            <strong>内蔵スプリングで床面を押し付けてロックする</strong>
            方式で、ロック時に台車が持ち上がらず、重い荷物を載せたまま停車できるのが特長です。約40kgの力で床面を押さえるため、傾斜面や振動のある場所でも荷崩れを抑えます。運搬中は必ず解除し、走行しないでください。
          </p>
        </Caution>
        <CardGrid>
          <ProductCard
            img="218028.jpg"
            name="TRUSCO SH-3CS（800×450・ハンドル側自在車輪・Φ100プレス車・LS付）"
            badge="ハンドル側自在"
            feature="小型で狭所の取り回し重視"
            use="狭い通路・複雑な動線"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218028.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="218034.jpg"
            name="TRUSCO SH-3RSS（800×450・ハンドル側自在車・LS付）"
            badge="ハンドル側自在"
            feature="800×450のR付き仕様"
            use="小物・狭所での取り回し"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218034.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="218026.jpg"
            name="TRUSCO SH-2RSS（900×600・ハンドル側自在車・LS付）"
            badge="ハンドル側自在"
            feature="標準サイズのR付き仕様"
            use="狭所・組立ライン"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218026.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="218013.jpg"
            name="TRUSCO SH-1RSS（1200×750・ハンドル側自在車・LS付）"
            badge="ハンドル側自在"
            feature="大型サイズのR付き仕様"
            use="大物でも狭所の取り回しが必要な現場"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218013.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
        </CardGrid>

        {/* ============ H2-6 特殊タイプ ============ */}
        <h2 className={cls.h2}>
          【STEP5】特殊タイプで選ぶ（片袖2段／折りたたみ／1トン／前方トビラ／三面パネル／6輪）
        </h2>
        <p className={cls.body}>
          運搬だけでなく、作業しながら移動したい／省スペース保管したい／重量物専用など、用途に合わせて特殊タイプが用意されています。
        </p>
        <ArticleImage
          src="/articles/trusco-cart/features.jpg"
          alt="片袖2段・折りたたみ・1トン積みなど、特殊タイプの運搬車のイメージ"
        />

        <h3 className={cls.h3}>
          ◎ 片袖2段型（PH-32／PH-22 系）＝作業しながら移動したい
        </h3>
        <p className={cls.body}>
          上段の袖付き荷台で組立作業や部品仕分けをしながら移動できます。上段荷台は取り外し可能。ハンドル側自在タイプ（PH-22RSS等）はさらに取り回しがラクになります。
        </p>
        <CardGrid>
          <ProductCard
            img="217390.jpg"
            name="TRUSCO PH-32RSS（800×450・片袖2段・ハンドル側自在・LS付）"
            badge="片袖2段"
            feature="小型・R付きで取り回し良好"
            use="狭所での組立・仕分け"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/217390.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="217391.jpg"
            name="TRUSCO PH-32SS（800×450・片袖2段・プレス車・LS付）"
            badge="片袖2段"
            feature="小型・固定ハンドルの片袖2段"
            use="小物の作業一体運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/217391.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="160137.jpg"
            name="TRUSCO PH-32（800×450・片袖2段タイプ）"
            badge="片袖2段"
            feature="ストッパーなしの片袖2段"
            use="屋内平坦床の作業一体運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/160137.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="217385.jpg"
            name="TRUSCO PH-22RSS（900×600・片袖2段・ハンドル側自在・LS付）"
            badge="片袖2段"
            feature="標準サイズ・R付きの片袖2段"
            use="組立ライン・部品仕分け"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/217385.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
        </CardGrid>

        <h3 className={cls.h3}>◎ 折りたたみタイプ（PHO 系）＝省スペース・車載</h3>
        <p className={cls.body}>
          使わないときにコンパクトに畳めるハンドル折りたたみ式です。車載・現場間移動・倉庫保管に向きます。
        </p>
        <CardGrid>
          <ProductCard
            img="217393.jpg"
            name="TRUSCO PHO-3SS（折りたたみ式・800×450・Φ100プレス車・LS付）"
            badge="折りたたみ"
            feature="小型の折りたたみ式"
            use="車載・省スペース保管の小物運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/217393.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="160142.jpg"
            name="TRUSCO PHO-2（折りたたみハンドルタイプ・900×600）"
            badge="折りたたみ"
            feature="ストッパーなしの折りたたみ標準"
            use="屋内での省スペース保管"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/160142.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
        </CardGrid>

        <h3 className={cls.h3}>◎ 1トン積み（SH10 系）＝超重量物・物流</h3>
        <p className={cls.body}>
          均等荷重1トン級の重荷重専用モデル。フレーム・ハンドル・キャスターを強化した仕様です。工場・倉庫の大型物運搬向け。
        </p>
        <CardGrid>
          <ProductCard
            img="218000.jpg"
            name="TRUSCO SH10-2DS（1トン・900×600・ダーコキャスター・ストッパー付）"
            badge="1トン積み"
            feature="ダーコキャスター採用の重荷重専用"
            use="工場・倉庫の超重量物運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218000.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="218001.jpg"
            name="TRUSCO SH10-2S（1トン・900×600・緑・ストッパー付）"
            badge="1トン積み"
            feature="1トン級の重荷重モデル（緑ボディ）"
            use="超重量物・物流の大量運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/218001.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
        </CardGrid>

        <h3 className={cls.h3}>
          ◎ 前方トビラ／三面パネル＝荷崩れ防止・長尺物
        </h3>
        <p className={cls.body}>
          前面が扉状で長尺物のズレを防ぐ「前方トビラ」、三方に囲いを持たせた「三面パネル」は、荷崩れの心配がある物の運搬に向きます。
        </p>
        <CardGrid>
          <ProductCard
            img="217347.jpg"
            name="TRUSCO OHN-24PS（900×600・前方トビラ・ストッパー付）"
            badge="前方トビラ"
            feature="前面の扉で長尺物のズレを防止"
            use="長尺物・荷崩れ防止"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/217347.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="217338.jpg"
            name="TRUSCO OH-24PSS（900×600・前方トビラ・LS付）"
            badge="前方トビラ"
            feature="LS付きの前方トビラモデル"
            use="長尺物・傾斜面での運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/217338.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="217346.jpg"
            name="TRUSCO OHN-23PS（900×600・三面パネル・ストッパー付）"
            badge="三面パネル"
            feature="三方の囲いで荷崩れを防止"
            use="箱物・雑多な小物運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/217346.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="217337.jpg"
            name="TRUSCO OH-23PSS（900×600・三面パネル・LS付）"
            badge="三面パネル"
            feature="LS付きの三面パネルモデル"
            use="傾斜面での荷崩れ心配のある運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/217337.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
        </CardGrid>

        <h3 className={cls.h3}>◎ 6輪・両袖2段・全キャスター自在＝特殊用途</h3>
        <p className={cls.body}>
          中央にもキャスターを追加した6輪タイプ（旋回性向上）、両側に袖を持つ両袖2段型、全キャスターが自在のタイプ（PHT）など、特殊用途向けもラインナップされています。
        </p>
        <CardGrid>
          <ProductCard
            img="217384.jpg"
            name="TRUSCO PH-1L-6SS（1400×750・プレス6輪車・LS付）"
            badge="6輪車"
            feature="中央にキャスターを追加した6輪で旋回性向上"
            use="大型物の細かい取り回し"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/217384.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="217333.jpg"
            name="TRUSCO OH-1L2W-6SS（1400×750・両袖2段型・鋳物6輪車・LS付）"
            badge="両袖2段・6輪"
            feature="両袖2段＋6輪の高機能モデル"
            use="大型組立・重量物運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/217333.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="160148.jpg"
            name="TRUSCO PHT-9060H-150（900×600・キャスター自在タイプ）"
            badge="全キャスター自在"
            feature="4輪すべて自在で全方向に動ける"
            use="狭所・複雑な動線"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/160148.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
        </CardGrid>

        <h3 className={cls.h3}>◎ 小型タイプ＝軽量物・省スペース</h3>
        <p className={cls.body}>
          より小さい天板の小型タイプ。軽量物の運搬や、より狭い場所での取り回しに向きます。
        </p>
        <CardGrid>
          <ProductCard
            img="160146.jpg"
            name="TRUSCO PH-4530（小型タイプ）"
            badge="小型"
            feature="より小さい天板の小型タイプ"
            use="狭所での軽量物運搬"
            links={[
              {
                label: "Yahoo!ショッピングで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/160146.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
        </CardGrid>

        {/* ============ H2-7 用途別おすすめ ============ */}
        <h2 className={cls.h2}>
          用途別おすすめの選び方（工場・倉庫・物流・電子部品・屋外）
        </h2>
        <Table>
          <thead>
            <tr>
              <Th>用途・現場</Th>
              <Th>おすすめの組み合わせ</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>工場（一般組立）</Td>
              <Td>SH型 900×600・プレス車 or ウレタン車・Lストッパー付</Td>
            </tr>
            <tr>
              <Td>倉庫（重量物・多点数）</Td>
              <Td>
                SH型 1200×750〜1400×750・鋳物車輪・Lストッパー付／必要なら1トン積み
              </Td>
            </tr>
            <tr>
              <Td>物流・大量運搬</Td>
              <Td>SH10-2S / SH10-2DS（1トン積み）・ダーコキャスター</Td>
            </tr>
            <tr>
              <Td>電子部品・半導体工場</Td>
              <Td>導電性キャスター（E/ES）モデル・ウレタン系検討</Td>
            </tr>
            <tr>
              <Td>屋外・未舗装・段差</Td>
              <Td>エアキャスター（AC）／空気入タイヤ（AR）モデル</Td>
            </tr>
            <tr>
              <Td>狭所・取り回し重視</Td>
              <Td>ハンドル側自在（R）付き／小型 800×450</Td>
            </tr>
            <tr>
              <Td>作業しながら運搬</Td>
              <Td>片袖2段（PH-32/PH-22）／両袖2段（OH-1L2W-6SS）</Td>
            </tr>
            <tr>
              <Td>車載・省スペース保管</Td>
              <Td>折りたたみ式（PHO-2 / PHO-2SS / PHO-3SS）</Td>
            </tr>
            <tr>
              <Td>長尺物・荷崩れ心配</Td>
              <Td>
                前方トビラ（OH-24PSS / OHN-24PS）／三面パネル（OH-23PSS /
                OHN-23PS）
              </Td>
            </tr>
          </tbody>
        </Table>

        {/* ============ H2-8 導入時の注意 ============ */}
        <h2 className={cls.h2}>
          導入時の注意点（組立式・車上渡し・均等荷重・安全）
        </h2>
        <Caution title="購入・搬入時に確認したいこと">
          <p>
            鋼鉄製運搬車は多くが「
            <strong>組立式</strong>
            」で、ハンドル・キャスターの取付けが必要です。また車体が重いため「
            <strong>車上渡し</strong>
            」（トラック上での引き渡し）となり、
            <strong>荷降ろしに人員またはフォークリフト等</strong>
            が必要な場合があります。搬入経路（エレベーター寸法・段差・通路幅）も事前確認を。
          </p>
        </Caution>
        <Caution title="安全に使うための基本">
          <p>
            ①均等荷重を守り、重心が高くなる積み方を避ける／②積み下ろし時は必ずストッパーを掛ける／③押す（前進）ときは前方を見る／④下り坂・傾斜面での加速に注意／⑤他の作業者との接触・巻き込みに注意。定期点検（キャスターの摩耗・ストッパー・フレームのゆがみ）で長く安全に使えます。
          </p>
        </Caution>

        {/* ============ H2-9 まとめ ============ */}
        <h2 className={cls.h2}>まとめ｜品番を読み解けば、迷わず選べる</h2>
        <p className={cls.body}>
          トラスコ鋼鉄製運搬車の選び方は、
          <Mark>①天板サイズ→②均等荷重→③キャスター→④ハンドル/ストッパー→⑤特殊タイプ</Mark>
          の5ステップ。品番の記号（SS/R/E/AC/NU/GN）を読み解けば、豊富なラインナップの中から自分の現場に合う一台がすぐ見つかります。予算・使用頻度・現場の床面・運ぶ物の重さから逆算して、最適なモデルを選びましょう。
        </p>
        <FinalCta />

        {/* ============ H2-10 FAQ ============ */}
        <h2 className={cls.h2}>よくある質問（FAQ）</h2>
        <div className="my-6 space-y-3">
          {FAQ.map((f, i) => (
            <details
              key={i}
              className="rounded-lg border border-gray-200 bg-white p-4"
            >
              <summary className={`cursor-pointer ${cls.faqQ}`}>{f.q}</summary>
              <p className={`mt-2 ${cls.bodySm}`}>{f.a}</p>
            </details>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
