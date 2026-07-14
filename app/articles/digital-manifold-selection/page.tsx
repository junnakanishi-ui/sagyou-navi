import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "digital-manifold-selection";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

/* 記事画像（未配置のため本文はコメントアウト。配置後に有効化） */
const IMG = {
  hero: `${ARTICLE_IMG}/digital-manifold-hvac-service-hero.jpg`,
  analog: `${ARTICLE_IMG}/analog-vs-digital-manifold-comparison.jpg`,
  scale: `${ARTICLE_IMG}/refrigerant-charging-smart-scale-digital-manifold.jpg`,
  commercial: `${ARTICLE_IMG}/commercial-hvac-refrigeration-digital-manifold.jpg`,
  related: `${ARTICLE_IMG}/hvac-service-tools-cart-safety-shoes.jpg`,
  checklist: `${ARTICLE_IMG}/digital-manifold-procurement-checklist.jpg`,
};

export const metadata: Metadata = {
  title:
    "デジタルマニホールドの選び方｜エアコン修理・冷媒充填・真空引きで確認したい機能を解説｜作業用品ナビ",
  description:
    "デジタルマニホールドの選び方を、エアコン修理・空調設備点検・冷媒充填・真空引きの作業別に解説。アナログマニホールドとの違い、testo 550s・557s・560i自動充填セットの使い分け、整備用工具・運搬台車・安全靴など関連用品も紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "デジタルマニホールドの選び方｜エアコン修理・冷媒充填・真空引きで確認したい機能を解説",
    description:
      "デジタルマニホールドの選び方を、エアコン修理・空調設備点検・冷媒充填・真空引きの作業別に解説。アナログマニホールドとの違い、testo 550s・557s・560i自動充填セットの使い分け、整備用工具・運搬台車・安全靴など関連用品も紹介します。",
    type: "article",
    images: [IMG.hero],
  },
};

/* ============================================================
   URL ヘルパー（UTM は # の前に付与。既存エンコードは再エンコードしない）
   ============================================================ */
const UTM = "utm_source=sagyou_navi";

function buildUrl(url: string, utm: string) {
  if (!url) return url;
  const h = url.indexOf("#");
  const append = (b: string) => `${b}${b.includes("?") ? "&" : "?"}${utm}`;
  if (h === -1) return append(url);
  return `${append(url.slice(0, h))}${url.slice(h)}`;
}

// 楽天 crecote-shop（末尾スラッシュ必須）
const R = (p: string) =>
  buildUrl(`https://item.rakuten.co.jp/crecote-shop/${p}`, UTM);
// Yahoo signcity-yshop（sc_i / ea= 保持：運搬台車）
const SC_CAT = "shopping-pc-web-category-storeitm-rsltlst-img";
const YBQ = (id: string, sc: string) =>
  buildUrl(
    `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html?sc_i=${sc}&ea=`,
    UTM
  );
// Yahoo signcity-yshop（クリーン：安全靴）
const YB = (id: string) =>
  buildUrl(`https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html`, UTM);

/* ---- 一覧CTA ---- */
const LIST_DAISHA = buildUrl(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc",
  UTM
); // 運搬台車一覧
const LIST_SEIBI = buildUrl(
  "https://search.rakuten.co.jp/search/mall/%E6%95%B4%E5%82%99%E7%94%A8/?sid=426972",
  UTM
); // 整備用工具一覧（楽天検索）

type Item = { id: string; url: string; name: string };

const productImage = (id: string) => `/products/${id}.jpg`;

/* ---- TESTO デジタルマニホールド（楽天crecote／名称・付属品は要確認・価格非掲載） ---- */
const M_550S_BASIC: Item = {
  id: "ta030278-0564550155",
  url: R("ta030278-0564550155/"),
  name: "TESTO デジタルマニホールド testo 550s ベーシックセット",
};
const M_550S_SET: Item = {
  id: "ta030279-0564550255",
  url: R("ta030279-0564550255/"),
  name: "TESTO デジタルマニホールド testo 550s セット",
};
const M_557S_SET: Item = {
  id: "ta030280-0564557155",
  url: R("ta030280-0564557155/"),
  name: "TESTO デジタルマニホールド testo 557s セット",
};
const M_560I_SET: Item = {
  id: "ta039887-testo560iset",
  url: R("ta039887-testo560iset/"),
  name: "TESTO スマートスケール testo 560i 自動充填セット",
};
// 同一モデルの別リスティング（在庫・ページ違い。統合可否は要確認）
const M_550S_BASIC_ALT: Item = {
  id: "ta000343-0564550155",
  url: R("ta000343-0564550155/"),
  name: "testo 550s ベーシックセット（別ページ）",
};
const M_550S_SET_ALT: Item = {
  id: "ta000344-0564550255",
  url: R("ta000344-0564550255/"),
  name: "testo 550s セット（別ページ）",
};
const M_557S_SET_ALT: Item = {
  id: "ta000345-0564557155",
  url: R("ta000345-0564557155/"),
  name: "testo 557s セット（別ページ）",
};

/* ---- TONE 整備用工具セット（楽天crecote） ---- */
const T_TSA350SV: Item = {
  id: "ta041904-tsa350sv",
  url: R("ta041904-tsa350sv/"),
  name: "TONE 整備用工具セット 72点 シルバー TSA350",
};
const T_TSS4331BK: Item = {
  id: "ta041933-tss4331bk",
  url: R("ta041933-tss4331bk/"),
  name: "TONE 整備用工具セット マットブラック TSS4331",
};
const T_TSA350BK: Item = {
  id: "ta041903-tsa350bk",
  url: R("ta041903-tsa350bk/"),
  name: "TONE 整備用工具セット 72点 マットブラック TSA350",
};
const T_TSA3120: Item = {
  id: "ta041895-tsa3120",
  url: R("ta041895-tsa3120/"),
  name: "TONE 整備用工具セット 43pcs レッド TSA3120",
};
const T_TSA3331: Item = {
  id: "ta041899-tsa3331",
  url: R("ta041899-tsa3331/"),
  name: "TONE 整備用工具セット オートメカニック用 TSA3331",
};
const T_TSX950BK: Item = {
  id: "ta041951-tsx950bk",
  url: R("ta041951-tsx950bk/"),
  name: "TONE 整備用工具セット 86点 マットブラック TSX950",
};

/* ---- 運搬台車（Yahoo SC_CAT） ---- */
const D_KARU: Item = {
  id: "167468",
  url: YBQ("167468", SC_CAT),
  name: "TRUSCO 業務用台車 カルティオ 新型 ブラック",
};
const D_KARU_STOP: Item = {
  id: "190475",
  url: YBQ("190475", SC_CAT),
  name: "TRUSCO 業務用台車 カルティオ 新型 ブラック スチールストッパー付",
};
const D_KARU_BIG: Item = {
  id: "216713",
  url: YBQ("216713", SC_CAT),
  name: "TRUSCO 樹脂台車 カルティオビッグ",
};

/* ---- ニューバランス安全靴（Yahoo クリーン。型番は要確認） ---- */
const S_NB_A: Item = {
  id: "155406",
  url: YB("155406"),
  name: "ニューバランス 安全靴（型番は商品ページで要確認）",
};
const S_NB_B: Item = {
  id: "155335",
  url: YB("155335"),
  name: "ニューバランス 安全靴（型番は商品ページで要確認）",
};
const S_NB_C: Item = {
  id: "155361",
  url: YB("155361"),
  name: "ニューバランス 安全靴（型番は商品ページで要確認）",
};

const MANIFOLD_MAIN: Item[] = [M_550S_BASIC, M_550S_SET, M_557S_SET, M_560I_SET];
const TONE_TOOLS: Item[] = [
  T_TSA350SV,
  T_TSS4331BK,
  T_TSA350BK,
  T_TSA3120,
  T_TSA3331,
  T_TSX950BK,
];
const DAISHA: Item[] = [D_KARU, D_KARU_STOP, D_KARU_BIG];
const SHOES: Item[] = [S_NB_A, S_NB_B, S_NB_C];

const FAQ_ITEMS = [
  {
    q: "デジタルマニホールドとアナログマニホールドの違いは？",
    a: "デジタルは冷媒圧力や温度を数値で確認しやすく、機種によっては過熱度・過冷却度の計算やアプリ連携に対応します。アナログは針と目盛りで確認するため慣れが必要です。",
  },
  {
    q: "testo 550sと557sはどう違いますか？",
    a: "どちらも空調・冷凍設備点検用のデジタルマニホールドですが、セット内容や機能構成が異なります。基本的な導入なら550s、より多機能な点検や真空引きまで重視するなら557sを比較検討します。細かな付属品・仕様は商品ページで確認してください。",
  },
  {
    q: "冷媒充填にはスマートスケールも必要ですか？",
    a: "充填量を管理したい場合は、マニホールドに加えてスマートスケールも検討すると作業しやすくなります。testo 560i 自動充填セットは充填管理を重視する現場向けです。",
  },
  {
    q: "真空引きにも使えますか？",
    a: "機種や構成によって真空測定・真空引きへの使いやすさが異なります。真空測定対応・ポート構成・ホース構成・付属品を確認してください。",
  },
  {
    q: "空調工事ではほかにどんな工具が必要ですか？",
    a: "デジタルマニホールドのほか、真空ポンプ・冷媒ホース・スマートスケール・整備用工具セット・工具ケース・運搬台車・安全靴などを作業内容に合わせて準備します。",
  },
  {
    q: "デジタルマニホールドは誰でも使えますか？",
    a: "測定工具として扱うことはできますが、冷媒を扱う作業は関連法令・資格・社内手順に従って行う必要があります。作業者の教育と手順確認を前提にしてください。",
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
      name: "デジタルマニホールドの選び方",
      item: `${SITE_URL}/articles/${SLUG}`,
    },
  ],
};

/* ============================================================
   自前コンポーネント（作業用品ナビ・自己完結）
   ============================================================ */
function CTA({
  href,
  title,
  body,
  label,
}: {
  href: string;
  title: string;
  body: string;
  label: string;
}) {
  return (
    <div className="my-8 rounded-lg border border-gray-300 bg-gray-50 p-6">
      <p className={cls.ctaH3}>{title}</p>
      <p className={`mb-4 ${cls.bodySm}`}>{body}</p>
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="inline-block rounded-md bg-gray-900 px-6 py-3 font-bold text-white transition hover:bg-gray-700"
      >
        {label}
      </a>
    </div>
  );
}

function FinalCTA({
  href,
  title,
  body,
  label,
}: {
  href: string;
  title: string;
  body: string;
  label: string;
}) {
  return (
    <div className="my-10 rounded-xl border-2 border-gray-900 bg-gray-50 p-7 text-center">
      <p className="mb-2 text-lg font-bold tracking-wide text-gray-900 sm:text-xl">
        {title}
      </p>
      <p className={`mb-5 ${cls.bodySm}`}>{body}</p>
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="inline-block rounded-md bg-gray-900 px-8 py-4 text-lg font-bold text-white transition hover:bg-gray-700"
      >
        {label}
      </a>
    </div>
  );
}

function ProductLink({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="block rounded-md bg-gray-900 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-gray-700"
    >
      {name}
    </a>
  );
}

function ProductCard({ item }: { item: Item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="group flex flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-sm transition hover:border-gray-900 hover:shadow-lg"
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={productImage(item.id)}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-contain p-3 transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <p className="flex-1 text-xs font-bold leading-snug text-gray-900 sm:text-sm">
          {item.name}
        </p>
        <span className="mt-3 inline-block rounded-lg bg-gray-900 px-3 py-2 text-center text-xs font-bold text-white sm:text-sm">
          商品を見る
        </span>
      </div>
    </a>
  );
}

function CardGrid({ items, cols }: { items: Item[]; cols?: string }) {
  return (
    <div
      className={`my-6 grid grid-cols-2 gap-3 sm:gap-4 ${cols ?? "md:grid-cols-3 lg:grid-cols-4"}`}
    >
      {items.map((it) => (
        <ProductCard key={it.id} item={it} />
      ))}
    </div>
  );
}

function Caution({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-md border border-red-300 bg-red-50 p-4">
      <p className="mb-1 font-bold text-red-700">⚠️ ご確認ください</p>
      <div className={cls.bodySm}>{children}</div>
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
  return (
    <img src={src} alt={alt} loading="lazy" className="my-6 w-full rounded-lg" />
  );
}

function Th({ children }: { children: ReactNode }) {
  return (
    <th className="border border-gray-300 bg-gray-100 px-3 py-2 text-left text-sm font-bold text-gray-900">
      {children}
    </th>
  );
}

function Td({ children }: { children: ReactNode }) {
  return (
    <td className="border border-gray-300 px-3 py-2 align-top text-sm text-gray-700">
      {children}
    </td>
  );
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
        <nav className="mb-4 text-sm text-gray-500" aria-label="パンくず">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <span>選び方ガイド</span>
          <span className="mx-1">/</span>
          <span className="text-gray-700">デジタルマニホールドの選び方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          デジタルマニホールドの選び方｜エアコン修理・冷媒充填・真空引きで確認したい機能を解説
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月14日／約14分で読めます
        </p>

        <p className={cls.body}>
          エアコンや冷凍冷蔵設備の点検・修理で欠かせないデジタルマニホールド。アナログからの買い替えや、testo
          550s・557s・560iの使い分けで迷う方に向けて、役割・確認できること・選ぶポイント・作業工程別の選び方を、空調工事会社や設備管理・法人購買の実務目線で整理します。
        </p>

        <ArticleImg
          src={IMG.hero}
          alt="空調設備点検でデジタルマニホールドを使用するイメージ"
        />

        {/* AEO回答ブロック（グレー枠） */}
        <div className="mb-8 rounded-lg border border-gray-300 bg-gray-50 p-5">
          <p className="mb-2 font-bold text-gray-900">結論</p>
          <p className={`mb-2 ${cls.bodySm}`}>
            デジタルマニホールドは、エアコンや冷凍冷蔵設備の点検・修理で、冷媒圧力や温度を確認し、冷媒充填・真空引き・過熱度/過冷却度の確認を効率化するための測定工具です。アナログより数値を読み取りやすく、温度プローブやアプリ連携、冷媒スケールと組み合わせることで点検作業を効率化しやすくなります。
          </p>
          <p className={cls.bodySm}>
            選ぶときは、対応冷媒・ポート数・真空測定対応・温度測定・過熱度/過冷却度計算・アプリ連携・冷媒充填量管理・付属品の有無を確認します。なお、冷媒を扱う作業は関連法令・資格・社内手順に従って行うことが前提です。
          </p>
        </div>

        <CTA
          href={M_550S_SET.url}
          title="エアコン修理・空調点検・冷媒充填に使うデジタルマニホールドをお探しの方へ"
          body="TESTOの testo 550s・557s セット、スマートスケール testo 560i 自動充填セットを用途に合わせて確認できます（付属品・仕様・価格は商品ページ／メーカー公式でご確認ください）。"
          label="デジタルマニホールド（testo 550s）を見る"
        />
        <CardGrid items={MANIFOLD_MAIN} />

        <H2>デジタルマニホールドとは？何に使う工具？</H2>
        <H3>冷媒圧力・温度を確認する空調/冷凍設備用の測定工具</H3>
        <p className={cls.body}>
          デジタルマニホールドは、冷媒の高圧・低圧や温度を数値で表示し、冷凍サイクルの状態を確認するための測定工具です。空調・冷凍設備の点検や修理で中心的に使われます。
        </p>
        <H3>エアコン修理・冷媒充填・真空引きで使われる</H3>
        <p className={cls.body}>
          冷媒圧力の測定、冷媒充填量の管理、真空引き・気密確認、過熱度・過冷却度の確認など、施工・修理・保守の各工程で活用されます。
        </p>
        <H3>アナログマニホールドとの違い</H3>
        <p className={cls.body}>
          アナログは針と目盛りで読み取りますが、デジタルは数値表示で確認しやすく、機種によっては過熱度・過冷却度の自動計算やアプリ連携・データ記録に対応します。
        </p>
        <H3>冷媒作業は有資格者・社内手順に従う前提</H3>
        <p className={cls.body}>
          冷媒・フロン類の取り扱いは、関連法令・資格・社内手順に従って有資格者・教育を受けた作業者が行うことが前提です。工具があれば誰でも作業できるわけではありません。
        </p>

        <Caution>
          冷媒を扱う作業は、関連法令・資格・社内手順に従い、有資格者・教育を受けた作業者が行うことが前提です。デジタルマニホールドは測定工具であり、これがあれば誰でも冷媒作業をしてよいわけではありません。作業前に社内の手順・安全基準を必ず確認してください。
        </Caution>

        <H2>デジタルマニホールドで確認できること</H2>
        <H3>高圧・低圧の冷媒圧力</H3>
        <p className={cls.body}>
          冷凍サイクルの高圧側・低圧側の圧力を数値で確認できます。
        </p>
        <H3>冷媒温度</H3>
        <p className={cls.body}>
          温度プローブと組み合わせて配管温度などを測定できます（対応は機種・構成により異なります）。
        </p>
        <H3>過熱度・過冷却度</H3>
        <p className={cls.body}>
          過熱度・過冷却度は冷凍サイクルの安定運転に関わる指標とされ、機種によっては圧力と温度から自動計算に対応します。
        </p>
        <H3>真空引き・気密確認</H3>
        <p className={cls.body}>
          真空測定に対応する構成なら、真空引きや気密確認の作業にも使いやすくなります。
        </p>
        <H3>冷媒充填量の管理</H3>
        <p className={cls.body}>
          スマートスケールと組み合わせると、冷媒充填量の管理がしやすくなります。
        </p>
        <H3>作業記録・診断データ</H3>
        <p className={cls.body}>
          アプリ連携・データ記録に対応する機種なら、点検結果の記録・共有がしやすくなります。
        </p>

        <H2>デジタルマニホールドを選ぶときのポイント</H2>
        <H3>対応冷媒を確認する</H3>
        <p className={cls.body}>
          現場で扱う冷媒に対応しているかを、商品ページ・メーカー公式情報で必ず確認します。
        </p>
        <H3>ポート数・ホース構成を確認する</H3>
        <p className={cls.body}>
          2ポート/4ポートなど、作業内容に合うポート数とホース構成を確認します。
        </p>
        <H3>真空測定に使いやすいか確認する</H3>
        <p className={cls.body}>
          真空引きに使うなら、真空測定対応や必要な構成を確認します。
        </p>
        <H3>温度プローブやクランプ温度計との連携を見る</H3>
        <p className={cls.body}>
          温度測定・過熱度/過冷却度確認には、温度プローブやクランプ温度計との連携性を確認します。
        </p>
        <H3>スマホアプリ・データ記録機能を確認する</H3>
        <p className={cls.body}>
          記録・共有を重視するなら、アプリ連携・データ管理機能の有無を確認します。
        </p>
        <H3>セット品・ベーシックセットの付属品を比較する</H3>
        <p className={cls.body}>
          同じ機種でもセット構成で付属品が異なります。追加購入を避けるため、付属品を比較して選びます。
        </p>

        <H2>testo 550s・557s・560iはどう選ぶ？</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：testo 550s・557s・560iの使い分け
            </caption>
            <thead>
              <tr>
                <Th>商品</Th>
                <Th>向いているケース</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>testo 550s ベーシックセット</Td>
                <Td>基本的な冷媒圧力測定・デジタル導入から始めたい</Td>
              </tr>
              <tr>
                <Td>testo 550s セット</Td>
                <Td>温度測定なども含めて現場で使いやすい構成にしたい</Td>
              </tr>
              <tr>
                <Td>testo 557s セット</Td>
                <Td>より多機能な点検・真空引き・診断作業の効率化を重視</Td>
              </tr>
              <tr>
                <Td>testo 560i 自動充填セット</Td>
                <Td>冷媒充填量の管理・自動充填を重視する</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 text-xs leading-relaxed text-gray-500">
          ※細かな付属品・対応冷媒・機能は、商品ページ・メーカー公式情報の確認を前提にしてください。
        </p>
        <H3>testo 550s ベーシックセットが向くケース</H3>
        <p className={cls.body}>
          まずデジタルマニホールドを導入したい、基本的な冷媒圧力測定から始めたい場合の基本セットです。
        </p>
        <H3>testo 550s セットが向くケース</H3>
        <p className={cls.body}>
          温度測定なども含め、現場で使いやすい構成を求める場合に候補になります。
        </p>
        <H3>testo 557s セットが向くケース</H3>
        <p className={cls.body}>
          より多機能な点検、真空引きや診断作業の効率化を重視する場合の候補です。
        </p>
        <H3>testo 560i 自動充填セットを組み合わせたいケース</H3>
        <p className={cls.body}>
          冷媒充填量の管理・自動充填を重視する現場では、スマートスケール testo 560i
          自動充填セットの組み合わせが候補です。
        </p>
        <H3>商品ページで確認したい付属品・仕様</H3>
        <p className={cls.body}>
          ホース・温度プローブ・ケースなどの付属品や対応冷媒は構成で異なります。購入前に商品ページ・メーカー公式情報で確認します。
        </p>

        <CardGrid items={MANIFOLD_MAIN} />
        <p className="mb-2 mt-4 text-sm font-semibold text-gray-900">
          同一モデルの別ページ（在庫・ページ違い）
        </p>
        <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
          <ProductLink
            href={M_550S_BASIC_ALT.url}
            name="testo 550s ベーシックセット（別ページ）"
          />
          <ProductLink
            href={M_550S_SET_ALT.url}
            name="testo 550s セット（別ページ）"
          />
          <ProductLink
            href={M_557S_SET_ALT.url}
            name="testo 557s セット（別ページ）"
          />
        </div>

        <CTA
          href={M_557S_SET.url}
          title="testo 550s・557s のセットを確認する"
          body="まず導入するなら550s、より多機能な点検・真空引き・診断作業まで考えるなら557sも候補です。"
          label="testo 557s セットを見る"
        />

        <H2>作業別｜デジタルマニホールドの選び方</H2>
        <ArticleImg
          src={IMG.commercial}
          alt="業務用エアコンや冷凍設備の点検でデジタルマニホールドを使うイメージ"
        />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：作業別に必要な工具・用品
            </caption>
            <thead>
              <tr>
                <Th>作業</Th>
                <Th>必要になりやすい工具</Th>
                <Th>商品導線</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>ルームエアコン修理</Td>
                <Td>デジタルマニホールド・整備工具</Td>
                <Td>testo 550s・整備用工具</Td>
              </tr>
              <tr>
                <Td>業務用エアコン点検</Td>
                <Td>デジタルマニホールド・温度測定・工具セット</Td>
                <Td>testo 557s・整備用工具</Td>
              </tr>
              <tr>
                <Td>冷媒充填</Td>
                <Td>デジタルマニホールド・スマートスケール</Td>
                <Td>testo 560i</Td>
              </tr>
              <tr>
                <Td>真空引き</Td>
                <Td>デジタルマニホールド・真空ポンプ・ホース</Td>
                <Td>testo 557s</Td>
              </tr>
              <tr>
                <Td>出張修理</Td>
                <Td>工具セット・台車・安全靴</Td>
                <Td>運搬台車・安全靴</Td>
              </tr>
              <tr>
                <Td>機械室・屋上作業</Td>
                <Td>測定工具・安全靴・運搬用品</Td>
                <Td>安全靴・運搬台車</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>ルームエアコン施工・修理</H3>
        <p className={cls.body}>
          基本的な冷媒圧力・温度確認ができる550sクラスが扱いやすく、一般整備工具も併せて準備します。
        </p>
        <H3>業務用エアコンの保守点検</H3>
        <p className={cls.body}>
          多機能な点検・診断を重視するなら557sも候補です。温度測定や記録機能を活用します。
        </p>
        <H3>冷凍冷蔵設備の点検</H3>
        <p className={cls.body}>
          スーパー・食品工場・倉庫などの設備点検で、圧力・温度・過熱度/過冷却度を確認します。
        </p>
        <H3>冷媒充填作業</H3>
        <p className={cls.body}>
          充填量の管理を重視するなら、スマートスケール（560i自動充填セット）の組み合わせが候補です。
        </p>
        <H3>真空引き・気密確認</H3>
        <p className={cls.body}>
          真空測定対応の構成・ホース・真空ポンプを確認します。
        </p>
        <H3>出張修理・フィールドサービス</H3>
        <p className={cls.body}>
          持ち運びを考え、工具セット・運搬台車・安全靴も含めて準備します。
        </p>

        <H2>アナログマニホールドからデジタルへ買い替えるメリット</H2>
        <ArticleImg
          src={IMG.analog}
          alt="アナログマニホールドとデジタルマニホールドを比較するイメージ"
        />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：デジタルマニホールドとアナログマニホールドの違い
            </caption>
            <thead>
              <tr>
                <Th>比較項目</Th>
                <Th>アナログ</Th>
                <Th>デジタル</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>圧力表示</Td>
                <Td>針・目盛りで確認</Td>
                <Td>数値で確認しやすい</Td>
              </tr>
              <tr>
                <Td>温度測定</Td>
                <Td>別計器が必要になりやすい</Td>
                <Td>温度プローブ連携がしやすい</Td>
              </tr>
              <tr>
                <Td>過熱度・過冷却度</Td>
                <Td>手計算・別資料が必要</Td>
                <Td>自動計算対応機種がある</Td>
              </tr>
              <tr>
                <Td>記録</Td>
                <Td>手書き中心</Td>
                <Td>アプリ・データ管理対応機種がある</Td>
              </tr>
              <tr>
                <Td>教育</Td>
                <Td>経験が必要</Td>
                <Td>数値確認で共有しやすい</Td>
              </tr>
              <tr>
                <Td>コスト</Td>
                <Td>比較的導入しやすい</Td>
                <Td>初期費用は高めになりやすい</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>数値を読み取りやすい</H3>
        <p className={cls.body}>
          目盛りの読み取りに比べ、数値表示は確認ミスを減らしやすくなります。
        </p>
        <H3>計算・確認作業を効率化しやすい</H3>
        <p className={cls.body}>
          過熱度・過冷却度の自動計算に対応する機種なら、確認作業を効率化しやすくなります。
        </p>
        <H3>作業記録を残しやすい</H3>
        <p className={cls.body}>
          アプリ連携・データ記録で、点検結果を残し共有しやすくなります。
        </p>
        <H3>若手作業者の教育にも使いやすい</H3>
        <p className={cls.body}>
          数値で状態を共有できるため、教育や引き継ぎに活用しやすくなります。
        </p>
        <H3>注意点：電池・センサー・校正・落下管理</H3>
        <p className={cls.body}>
          電子機器のため、電池残量・センサー・校正・落下による破損の管理が必要です。
        </p>

        <Caution>
          デジタルマニホールドは電子測定機器です。電池残量・センサーの状態・校正（メーカー指定の点検/校正）・落下や衝撃による破損に注意して管理してください。測定値の信頼性は機器の状態に左右されます。校正・保守の方法はメーカー公式情報に従ってください。
        </Caution>

        <H2>冷媒充填ではスマートスケールも確認したい</H2>
        <ArticleImg
          src={IMG.scale}
          alt="冷媒充填でデジタルマニホールドとスマートスケールを使うイメージ"
        />
        <H3>冷媒充填量の管理が重要な理由</H3>
        <p className={cls.body}>
          冷媒の過不足は機器の性能・安全に影響します。適正な充填量の管理が重要です。
        </p>
        <H3>デジタルマニホールドと冷媒スケールの役割の違い</H3>
        <p className={cls.body}>
          マニホールドは圧力・温度の確認、スケールは充填量（重量）の管理と役割が異なります。両者を組み合わせると管理しやすくなります。
        </p>
        <H3>testo 560i 自動充填セットが向く現場</H3>
        <p className={cls.body}>
          充填量の管理・自動充填を重視する現場では、testo 560i
          自動充填セットが候補になります。
        </p>
        <H3>冷媒ボンベ・ホース・工具の管理もあわせて確認する</H3>
        <p className={cls.body}>
          冷媒ボンベ・ホース・関連工具の管理・運搬もあわせて計画します。
        </p>

        <Caution>
          冷媒の放出は避け、関連法令・社内手順に従って適切に管理・回収してください。不適切な充填や冷媒放出は行わないでください。冷媒の種類・充填量・作業手順は、機器の仕様とメーカー公式情報、社内の作業基準に従ってください。
        </Caution>

        <CTA
          href={M_560I_SET.url}
          title="冷媒充填量の管理まで効率化したい方へ"
          body="スマートスケール testo 560i 自動充填セットは、デジタルマニホールドと組み合わせることで冷媒充填作業の管理をしやすくします（構成・対応はメーカー公式でご確認ください）。"
          label="testo 560i 自動充填セットを見る"
        />

        <H2>デジタルマニホールドと一緒に確認したい関連用品</H2>
        <ArticleImg
          src={IMG.related}
          alt="空調工事で使う整備工具・台車・安全靴を準備するイメージ"
        />
        <H3>整備用工具セット</H3>
        <p className={cls.body}>
          空調機まわりの取り外し・締付け・一般整備には、整備用工具セットもあわせて確認しておきましょう。
        </p>
        <CardGrid items={TONE_TOOLS} />
        <div className="my-4">
          <ProductLink href={LIST_SEIBI} name="整備用工具一覧を見る" />
        </div>

        <H3>運搬台車</H3>
        <p className={cls.body}>
          冷媒ボンベ・工具箱・真空ポンプなどを現場へ運ぶ場合は、運搬台車が便利です。
        </p>
        <CardGrid items={DAISHA} cols="md:grid-cols-3" />
        <div className="my-4">
          <ProductLink href={LIST_DAISHA} name="運搬台車一覧を見る" />
        </div>

        <H3>安全靴</H3>
        <p className={cls.body}>
          屋外機まわり・屋上・機械室での作業では、足元の安全対策も重要です。現場に合わせて安全靴も確認しておきましょう。
        </p>
        <CardGrid items={SHOES} cols="md:grid-cols-3" />

        <H3>工具・機材の持ち運びを考えた現場備品</H3>
        <p className={cls.body}>
          出張修理・フィールドサービスでは、工具ケースや台車での運搬、足元の安全まで含めて備品を揃えると効率的です。
        </p>
        <H3>法人購買では標準工具リストを作る</H3>
        <p className={cls.body}>
          複数拠点・複数担当者がいる場合は、標準工具リストを作ると調達・教育がしやすくなります。
        </p>

        <H2>デジタルマニホールド選びでよくある失敗</H2>
        <ol className="mb-4 list-decimal space-y-2 pl-5 leading-[1.95] tracking-[0.04em] text-gray-800">
          <li>
            <span className="font-semibold text-gray-900">
              対応冷媒を確認しない
            </span>
            ：現場で扱う冷媒に対応しているか、商品ページ・メーカー情報で確認します。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              付属品の違いを見ずに買う
            </span>
            ：ベーシックとセット品で付属品が異なり、追加購入が必要になることがあります。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              真空測定・温度測定の使い方を想定しない
            </span>
            ：真空引き・温度測定に使うなら、対応や構成を確認します。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              冷媒スケールを別途考えていない
            </span>
            ：充填量の管理にはスマートスケールも検討します。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              現場移動・機材運搬を考えていない
            </span>
            ：ボンベ・真空ポンプ・工具箱の運搬には台車・安全靴も重要です。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              冷媒作業の資格・法令・社内手順を軽視する
            </span>
            ：冷媒を扱う作業は関連法令・資格・社内ルールに従います。
          </li>
        </ol>

        <H2>法人向け｜空調点検工具の発注前チェックリスト</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：発注前チェックリスト
            </caption>
            <thead>
              <tr>
                <Th>確認項目</Th>
                <Th>チェック内容</Th>
                <Th>確認</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>対応冷媒</Td>
                <Td>現場で扱う冷媒に対応しているか</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>作業内容</Td>
                <Td>点検・修理・充填・真空引きのどれに使うか</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>セット内容</Td>
                <Td>ホース・温度プローブ・ケースなどの付属品</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>記録機能</Td>
                <Td>アプリ連携・データ管理が必要か</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>冷媒充填</Td>
                <Td>スマートスケールも必要か</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>運搬</Td>
                <Td>台車・工具箱・安全靴も必要か</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>管理</Td>
                <Td>校正・電池・保管ルールを決めるか</Td>
                <Td>□</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>作業内容チェック</H3>
        <p className={cls.body}>
          点検・修理・充填・真空引きのどれに使うかを整理すると、必要な機能が絞れます。
        </p>
        <H3>測定機能チェック</H3>
        <p className={cls.body}>
          圧力・温度・過熱度/過冷却度・真空測定・記録機能の要否を確認します。
        </p>
        <H3>付属品チェック</H3>
        <p className={cls.body}>
          ホース・温度プローブ・ケースなど、セット構成の付属品を確認します。
        </p>
        <H3>関連工具チェック</H3>
        <p className={cls.body}>
          整備用工具セット・真空ポンプ・スマートスケールの要否を確認します。
        </p>
        <H3>安全・運搬用品チェック</H3>
        <p className={cls.body}>
          安全靴・運搬台車・工具ケースなど、現場作業と運搬の備品を確認します。
        </p>

        <H2>よくある質問</H2>
        <div className="space-y-5">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q}>
              <h3 className={cls.faqQ}>Q. {item.q}</h3>
              <p className={cls.body}>{item.a}</p>
            </div>
          ))}
        </div>

        <H2>
          まとめ｜デジタルマニホールドは「作業内容・対応冷媒・付属品・冷媒充填管理」で選ぶ
        </H2>
        {/* 画像6 */}
        {/* <img src={IMG.checklist} alt="法人担当者がデジタルマニホールドと空調点検工具を確認するイメージ" className="my-8 w-full rounded-lg" /> */}
        <p className={cls.body}>
          デジタルマニホールドは、作業内容（点検・修理・充填・真空引き）・対応冷媒・付属品・冷媒充填管理の観点で選ぶのが基本です。基本導入なら
          testo 550s、多機能な点検・真空引きなら 557s、充填量管理を重視するなら 560i
          自動充填セットが候補になります。冷媒作業は関連法令・資格・社内手順に従う前提で、整備用工具・運搬台車・安全靴などの関連用品もあわせて準備すると現場作業が安定します。
        </p>

        <FinalCTA
          href={M_550S_SET.url}
          title="デジタルマニホールドと空調工事関連用品をまとめて確認"
          body="testo 550s・557s・560i と、整備用工具・運搬台車・安全靴を用途に合わせて。付属品・仕様・価格は商品ページ／メーカー公式でご確認ください。"
          label="デジタルマニホールド（testo 550s）を見る"
        />
        <div className="mb-8 grid grid-cols-2 gap-2 md:grid-cols-4">
          <ProductLink href={M_550S_BASIC.url} name="testo 550s ベーシック" />
          <ProductLink href={M_557S_SET.url} name="testo 557s セット" />
          <ProductLink href={M_560I_SET.url} name="testo 560i 自動充填" />
          <ProductLink href={LIST_SEIBI} name="整備用工具一覧へ" />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
