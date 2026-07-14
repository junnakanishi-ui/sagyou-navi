import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "grand-cart-box-trolley-selection";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/grand-cart-box-trolley-selection-hero.jpg`,
  lidded: `${ARTICLE_IMG}/lidded-vs-open-box-trolley-comparison.jpg`,
  cooler: `${ARTICLE_IMG}/insulated-cooler-box-trolley-worksite.jpg`,
  silent: `${ARTICLE_IMG}/silent-box-trolley-facility-transport.jpg`,
  sideFold: `${ARTICLE_IMG}/side-handle-foldable-platform-cart-comparison.jpg`,
  checklist: `${ARTICLE_IMG}/grand-cart-procurement-checklist.jpg`,
};

export const metadata: Metadata = {
  title:
    "ボックス付き台車の選び方｜蓋付き・保冷・静音・折りたたみタイプの違いを解説｜作業用品ナビ",
  description:
    "ボックス付き台車の選び方を、蓋付き・蓋なし・保冷・静音・サイドハンドル・折りたたみタイプ別に解説。工場、倉庫、清掃、施設管理、食品、イベント現場での小物運搬・荷崩れ防止・保冷品運搬に向くグランカートの選び方を紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "ボックス付き台車の選び方｜蓋付き・保冷・静音・折りたたみタイプの違いを解説",
    description:
      "ボックス付き台車の選び方を、蓋付き・蓋なし・保冷・静音・サイドハンドル・折りたたみタイプ別に解説。工場、倉庫、清掃、施設管理、食品、イベント現場での小物運搬・荷崩れ防止・保冷品運搬に向くグランカートの選び方を紹介します。",
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
// Yahoo signcity-yshop（sc_i / ea= 保持）
const SC_CAT = "shopping-pc-web-category-storeitm-rsltlst-img"; // 軽量作業台・運搬台車
const SC_RES_TITLE = "shopping-pc-web-result-storesch-rsltlst-title"; // ハンドパレット
const YBQ = (id: string, sc: string) =>
  buildUrl(
    `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html?sc_i=${sc}&ea=`,
    UTM
  );

/* ---- 一覧CTA ---- */
// グランカート一覧（楽天検索。先頭の "+" スペースを保持）
const LIST_GRANDCART = buildUrl(
  "https://search.rakuten.co.jp/search/mall/+%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%AB%E3%83%BC%E3%83%88/?sid=426972",
  UTM
);
const LIST_SAGYOUDAI = buildUrl(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E8%BB%BD%E9%87%8F%E4%BD%9C%E6%A5%AD%E5%8F%B0#CentSrchFilter1",
  UTM
); // 軽量作業台一覧
const LIST_DAISHA = buildUrl(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc",
  UTM
); // 運搬台車一覧
const LIST_HANDPAL = buildUrl(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=%E3%83%8F%E3%83%B3%E3%83%89%E3%83%91%E3%83%AC%E3%83%83%E3%83%88&storeid=signcity-yshop&sc_i=shopping-pc-web-result-storesg-h_srch-srchbtn-sgstfrom-result-storesch-h_srch-srchbox",
  UTM
); // ハンドパレット一覧

type Item = { id: string; url: string; name: string };

const productImage = (id: string) => `/products/${id}.jpg`;

/* ---- グランカート（楽天crecote／名称・寸法は要確認・価格非掲載） ---- */
// ボックス付き
const G_TP702THB: Item = {
  id: "ta055752-tp702thb",
  url: R("ta055752-tp702thb/"),
  name: "TRUSCO グランカート 蓋付ハンドトラックボックス付 718×468 TP702THB",
};
const G_TP902THB: Item = {
  id: "ta055788-tp902thb",
  url: R("ta055788-tp902thb/"),
  name: "TRUSCO グランカート 蓋付ハンドトラックボックス付 900×605 TP902THB",
};
const G_TP702THBA: Item = {
  id: "ta055753-tp702thba",
  url: R("ta055753-tp702thba/"),
  name: "TRUSCO グランカート 蓋無ハンドトラックボックス付 718×468 TP702THBA",
};
const G_TP702THBC: Item = {
  id: "ta055754-tp702thbc",
  url: R("ta055754-tp702thbc/"),
  name: "TRUSCO グランカート 保冷ハンドトラックボックス付 718×468 TP702THBC",
};
const G_TPX702THB: Item = {
  id: "ta055801-tpx702thb",
  url: R("ta055801-tpx702thb/"),
  name: "TRUSCO グランカート サイレント 蓋付ハンドトラックボックス付 718×468 TPX702THB",
};
const G_TPX902THB: Item = {
  id: "ta055812-tpx902thb",
  url: R("ta055812-tpx902thb/"),
  name: "TRUSCO グランカート サイレント 蓋付ハンドトラックボックス付 900×605 TPX902THB",
};
const G_TPX702THBA: Item = {
  id: "ta055802-tpx702thba",
  url: R("ta055802-tpx702thba/"),
  name: "TRUSCO グランカート サイレント 蓋無ハンドトラックボックス付 718×468 TPX702THBA",
};
const G_TPX702THBC: Item = {
  id: "ta055803-tpx702thbc",
  url: R("ta055803-tpx702thbc/"),
  name: "TRUSCO グランカート サイレント 保冷ハンドトラックボックス付 718×468 TPX702THBC",
};
// サイドハンドル
const G_TP910: Item = {
  id: "ta055790-tp910",
  url: R("ta055790-tp910/"),
  name: "TRUSCO グランカート サイドハンドル 900×605 TP910",
};
const G_TP710S: Item = {
  id: "ta055757-tp710s",
  url: R("ta055757-tp710s/"),
  name: "TRUSCO グランカート サイドハンドル 718×468 ストッパー付 TP710S",
};
const G_TP810S: Item = {
  id: "ta055773-tp810s",
  url: R("ta055773-tp810s/"),
  name: "TRUSCO グランカート サイドハンドル 800×535 ストッパー付 TP810S",
};
// 折りたたみ・固定
const G_TP701U: Item = {
  id: "ta055747-tp701u",
  url: R("ta055747-tp701u/"),
  name: "TRUSCO グランカート 折りたたみ 718×468 ウレタン車輪 TP701U",
};
const G_TP701: Item = {
  id: "ta055741-tp701",
  url: R("ta055741-tp701/"),
  name: "TRUSCO グランカート 折りたたみ 718×468 TP701",
};
const G_TP702: Item = {
  id: "ta055748-tp702",
  url: R("ta055748-tp702/"),
  name: "TRUSCO グランカート 固定 718×468 TP702",
};

/* ---- 関連（Yahoo） ---- */
const W_TFAEL: Item = {
  id: "161973",
  url: YBQ("161973", SC_CAT),
  name: "TRUSCO 軽量作業台 TFAE型 1200×600×740 TFAEL-1260",
};
const W_BE1275: Item = {
  id: "160785",
  url: YBQ("160785", SC_CAT),
  name: "TRUSCO 軽量作業台 基本タイプ ダークグレー 1200×750×740 BE-1275",
};
const W_HAE: Item = {
  id: "161354",
  url: YBQ("161354", SC_CAT),
  name: "TRUSCO 軽量立ち作業台 上棚付 ホワイト 900×600×1204 HAE-0960YURB W",
};
const D_KARU: Item = {
  id: "167468",
  url: YBQ("167468", SC_CAT),
  name: "TRUSCO 業務用台車 カルティオ 新型 ブラック MPK-780-BK",
};
const D_KARU_STOP: Item = {
  id: "190475",
  url: YBQ("190475", SC_CAT),
  name: "TRUSCO 業務用台車 カルティオ 新型 ブラック ストッパー付 MPK780BKSS",
};
const D_KARU_BIG: Item = {
  id: "216713",
  url: YBQ("216713", SC_CAT),
  name: "TRUSCO 樹脂台車 カルティオビッグ 折畳 900×600 ストッパー付 MPK-906-OG-S",
};
const HP_1050: Item = {
  id: "168791",
  url: YBQ("168791", SC_RES_TITLE),
  name: "TRUSCO ハンドパレットトラック 1.5t L1050×W550mm THPT15-105-55S",
};
const HP_850: Item = {
  id: "168790",
  url: YBQ("168790", SC_RES_TITLE),
  name: "TRUSCO ハンドパレットトラック 1.5t L850×W520mm THPT15-85-52S",
};
const HP_2T: Item = {
  id: "168809",
  url: YBQ("168809", SC_RES_TITLE),
  name: "TRUSCO ハンドパレットトラック PK付 2t L1150×W540mm THP-20-511-PK",
};

const BOX_LID: Item[] = [G_TP702THB, G_TP902THB, G_TP702THBA, G_TPX702THBA];
const BOX_COOLER: Item[] = [G_TP702THBC, G_TPX702THBC];
const BOX_SILENT: Item[] = [
  G_TPX702THB,
  G_TPX902THB,
  G_TPX702THBA,
  G_TPX702THBC,
];
const SIDE_FOLD: Item[] = [
  G_TP910,
  G_TP710S,
  G_TP810S,
  G_TP701U,
  G_TP701,
  G_TP702,
];
const WORKBENCH: Item[] = [W_TFAEL, W_BE1275, W_HAE];
const DAISHA: Item[] = [D_KARU, D_KARU_STOP, D_KARU_BIG];
const HANDPAL: Item[] = [HP_1050, HP_850, HP_2T];

const FAQ_ITEMS = [
  {
    q: "ボックス付き台車はどんな用途に向いていますか？",
    a: "工具・部品・清掃用品・消耗品・備品・保冷品など、小物をまとめて運ぶ用途に向いています。平台車では落ちやすい荷物や、まとめて管理したい荷物に便利です。",
  },
  {
    q: "蓋付きと蓋なしはどちらが便利ですか？",
    a: "ホコリ・飛び出し・中身の見え方を抑えたいなら蓋付き、頻繁に出し入れするなら蓋なしが便利です。清掃・備品運搬は蓋付き、ピッキング・部品補充は蓋なしが候補になります。",
  },
  {
    q: "保冷ボックス付き台車は食品以外にも使えますか？",
    a: "温度変化を抑えたい備品やイベント用品の一時搬送に使いやすい場合があります。ただし厳密な温度管理が必要な場合は、保冷剤・搬送時間・保管条件を確認してください。",
  },
  {
    q: "サイレントタイプはどんな現場に向いていますか？",
    a: "病院・ホテル・オフィス・商業施設・夜間作業など、走行音が気になりやすい現場に向いています。完全に無音になるわけではなく、床面や積載物で音の出方は変わるため、使用環境も確認しましょう。",
  },
  {
    q: "グランカートの折りたたみタイプは何が便利ですか？",
    a: "使わないときに省スペースで保管しやすい点がメリットです。車載・出張作業・店舗バックヤード・狭い倉庫などで使いやすいタイプです。",
  },
  {
    q: "718×468と900×605はどう選べばよいですか？",
    a: "小回りや狭い通路を重視するなら718×468、まとめ運搬や大きめの荷物を載せたいなら900×605が候補です。通路幅・エレベーター・保管場所も確認して選びます。",
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
      name: "ボックス付き台車の選び方",
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
          <span className="text-gray-700">ボックス付き台車の選び方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          ボックス付き台車の選び方｜蓋付き・保冷・静音・折りたたみタイプの違いを解説
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月14日／約14分で読めます
        </p>

        <p className={cls.body}>
          「台車に載せた小物が落ちる」「中身を隠して運びたい」「保冷品を移動させたい」「静かな台車が欲しい」——そんな現場の課題から、ボックス付き台車の選び方を整理します。TRUSCOのグランカートを例に、蓋付き・蓋なし・保冷・サイレント・サイドハンドル・折りたたみタイプの違いを、工場・倉庫・清掃・施設管理・食品搬送の現場目線で解説します。
        </p>

        <ArticleImg
          src={IMG.hero}
          alt="ボックス付きグランカートを工場や倉庫で選ぶイメージ"
        />

        {/* AEO回答ブロック（グレー枠） */}
        <div className="mb-8 rounded-lg border border-gray-300 bg-gray-50 p-5">
          <p className="mb-2 font-bold text-gray-900">結論</p>
          <p className={`mb-2 ${cls.bodySm}`}>
            ボックス付き台車は、工具・部品・清掃用品・小物・保冷品などをまとめて運ぶときに便利な業務用台車です。通常の平台車では小物が落ちやすい、荷物が散らばる、中身を隠したい、ホコリを避けたい、食品や飲料を保冷しながら運びたい、といった現場では、蓋付き・蓋なし・保冷・静音タイプを用途に合わせて選ぶと使いやすくなります。
          </p>
          <p className={cls.bodySm}>
            TRUSCOのグランカートには、ハンドトラックボックス付き（蓋付き・蓋なし・保冷）、サイレント、サイドハンドル、折りたたみタイプなどがあります。荷物の重量・サイズ・通路幅・床面・保管場所を確認したうえで、現場に合うタイプを選びましょう。
          </p>
        </div>

        {/* 上部CTA */}
        <CTA
          href={LIST_GRANDCART}
          title="工具・部品・清掃用品・保冷品をまとめて運びたい方へ"
          body="TRUSCOグランカートのボックス付きタイプなら、蓋付き・蓋なし・保冷・サイレントなど、現場に合わせて選べます（仕様・価格・在庫は商品ページでご確認ください）。"
          label="グランカート一覧を見る"
        />
        <CardGrid items={BOX_LID} />

        <H2>ボックス付き台車とは？どんな現場で便利？</H2>
        <H3>工具・部品・清掃用品・小物をまとめて運べる</H3>
        <p className={cls.body}>
          ボックス付き台車は、荷台にボックスが付いており、工具・部品・清掃用品・消耗品などの小物をまとめて運べます。散らばりやすい荷物の管理に向きます。
        </p>
        <H3>平台車で荷物が落ちる現場に向く</H3>
        <p className={cls.body}>
          平台車では小物が落ちたり荷崩れしたりしやすい場面でも、ボックスに入れることで落下・紛失の対策になります。
        </p>
        <H3>蓋付きなら中身の飛び出し・ホコリ対策に使いやすい</H3>
        <p className={cls.body}>
          蓋付きタイプは、走行中の飛び出しやホコリの付着を抑えたい場面、中身を隠して運びたい場面に使いやすくなります。
        </p>
        <H3>グランカートは業務用台車の選択肢になる</H3>
        <p className={cls.body}>
          TRUSCOのグランカートは、ボックス付き・蓋付き・保冷・サイレント・サイドハンドル・折りたたみなどタイプが豊富で、現場に合わせて選べる業務用台車の選択肢です。
        </p>

        <H2>グランカートの主なタイプ</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：グランカートのタイプ別比較
            </caption>
            <thead>
              <tr>
                <Th>タイプ</Th>
                <Th>向いている用途</Th>
                <Th>主なメリット</Th>
                <Th>注意点</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>蓋付きボックス付</Td>
                <Td>工具・部品・清掃用品・備品搬送</Td>
                <Td>中身の飛び出し・ホコリ対策</Td>
                <Td>頻繁な出し入れでは蓋の開閉が手間になる場合あり</Td>
              </tr>
              <tr>
                <Td>蓋なしボックス付</Td>
                <Td>ピッキング・部品補充・工具移動</Td>
                <Td>出し入れしやすい</Td>
                <Td>飛び出しやホコリには注意</Td>
              </tr>
              <tr>
                <Td>保冷ボックス付</Td>
                <Td>食品・飲料・保冷品</Td>
                <Td>温度変化を抑えた一時搬送に便利</Td>
                <Td>長時間保冷は運用条件の確認が必要</Td>
              </tr>
              <tr>
                <Td>サイレント</Td>
                <Td>病院・ホテル・オフィス・夜間作業</Td>
                <Td>走行音を抑えたい現場向け</Td>
                <Td>床面や積載状態でも音は変わる</Td>
              </tr>
              <tr>
                <Td>サイドハンドル</Td>
                <Td>狭い通路・横方向操作</Td>
                <Td>取り回しを重視したい現場向け</Td>
                <Td>作業動線に合うか確認</Td>
              </tr>
              <tr>
                <Td>折りたたみ</Td>
                <Td>車載・収納・出張作業</Td>
                <Td>省スペースに保管しやすい</Td>
                <Td>常設利用なら通常タイプも比較</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>蓋付きハンドトラックボックス付き</H3>
        <p className={cls.body}>
          飛び出し・ホコリ・中身の見え方を抑えたい現場向け。工具・部品・清掃用品・備品の搬送に使いやすいタイプです。
        </p>
        <H3>蓋なしハンドトラックボックス付き</H3>
        <p className={cls.body}>
          頻繁な出し入れを優先したいピッキングや部品補充向け。蓋の開閉がない分、作業テンポを保ちやすくなります。
        </p>
        <H3>保冷ハンドトラックボックス付き</H3>
        <p className={cls.body}>
          食品・飲料・保冷品の一時搬送向け。温度変化を抑えたい荷物の短距離搬送に使いやすいタイプです。
        </p>
        <H3>サイレントタイプ</H3>
        <p className={cls.body}>
          走行音を抑えたい病院・ホテル・オフィス・夜間作業向け。完全に無音になるわけではありませんが、静かさが求められる場所で候補になります。
        </p>
        <H3>サイドハンドルタイプ</H3>
        <p className={cls.body}>
          横方向の押しやすさ・狭い通路での取り回しを重視する現場向け。ストッパー付きもあります。
        </p>
        <H3>折りたたみタイプ</H3>
        <p className={cls.body}>
          使わないときに省スペースで保管したい現場向け。車載・出張・狭い倉庫で扱いやすいタイプです。
        </p>

        <H2>蓋付き・蓋なしボックス付き台車の違い</H2>
        <ArticleImg
          src={IMG.lidded}
          alt="蓋付き台車と蓋なしボックス付き台車を比較するイメージ"
        />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：蓋付き・蓋なし・保冷・サイレントの使い分け
            </caption>
            <thead>
              <tr>
                <Th>タイプ</Th>
                <Th>向いている場面</Th>
                <Th>注意点</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>蓋付き</Td>
                <Td>ホコリ・飛び出し・中身を隠したい搬送</Td>
                <Td>頻繁な出し入れでは開閉が手間</Td>
              </tr>
              <tr>
                <Td>蓋なし</Td>
                <Td>出し入れが多いピッキング・補充</Td>
                <Td>飛び出し・ホコリに注意</Td>
              </tr>
              <tr>
                <Td>保冷</Td>
                <Td>食品・飲料・保冷品の一時搬送</Td>
                <Td>厳密な温度管理は保証しない</Td>
              </tr>
              <tr>
                <Td>サイレント</Td>
                <Td>病院・ホテル・オフィス・夜間</Td>
                <Td>完全無音ではない・床面で変わる</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>蓋付きはホコリ・雨・飛び出し対策に使いやすい</H3>
        <p className={cls.body}>
          蓋付きは、走行中の飛び出しやホコリの付着を抑えたい場面に向きます。中身を隠して運びたいときにも使いやすいです。
        </p>
        <H3>蓋なしは出し入れのしやすさを重視する現場向け</H3>
        <p className={cls.body}>
          出し入れの頻度が高い作業では、蓋の開閉がない蓋なしタイプの方が作業テンポを保ちやすくなります。
        </p>
        <H3>工具・部品・清掃用品ではどちらが便利？</H3>
        <p className={cls.body}>
          中身を保護・隠したいなら蓋付き、頻繁に取り出すなら蓋なし。清掃・備品搬送は蓋付き、ピッキング・補充は蓋なしが候補になりやすいです。
        </p>
        <H3>蓋付きを選ぶときの注意点</H3>
        <p className={cls.body}>
          頻繁な出し入れがある作業では、蓋の開閉が手間になる場合があります。作業内容に合うか確認しましょう。
        </p>

        <CTA
          href={G_TP702THB.url}
          title="蓋付き・蓋なしグランカートを確認する"
          body="小物の飛び出しやホコリ付着を防ぎたいなら蓋付き、頻繁に出し入れするなら蓋なしタイプが便利です。サイズは718×468・900×605から選べます。"
          label="蓋付きボックス付き（TP702THB）を見る"
        />
        <CardGrid items={BOX_LID} />

        <H2>保冷ボックス付き台車はどんな用途に向く？</H2>
        <ArticleImg
          src={IMG.cooler}
          alt="保冷ボックス付き台車で食品や飲料を運ぶイメージ"
        />
        <H3>食品・飲料・保冷品の一時搬送</H3>
        <p className={cls.body}>
          保冷ボックス付きは、食品・飲料・保冷品を短距離で一時搬送したい場面に向きます。
        </p>
        <H3>厨房・食品工場・イベント会場での移動</H3>
        <p className={cls.body}>
          厨房・食品工場・イベント会場など、温度変化を抑えて運びたい現場で使いやすいタイプです。
        </p>
        <H3>保冷ボックス付きと通常ボックス付きの違い</H3>
        <p className={cls.body}>
          保冷タイプは断熱性のあるボックスで温度変化を抑えやすい構造ですが、通常ボックス付きは常温品の搬送・保護が中心です。用途で選びます。
        </p>
        <H3>温度管理が必要な場合は運用ルールも確認する</H3>
        <p className={cls.body}>
          保冷ボックス付きは一時搬送に便利ですが、厳密な温度管理を保証するものではありません。保冷剤・搬送時間・保管条件などの運用ルールもあわせて確認します。
        </p>

        <Caution>
          保冷ボックス付きタイプは温度変化を抑えた「一時搬送」に向くもので、厳密な温度管理を保証するものではありません。食品・保冷品を扱う場合は、保冷剤・搬送時間・保管条件・衛生管理などの運用ルールを別途確認してください。荷物の重量・サイズ・通路幅・床面・保管場所も事前にご確認ください。
        </Caution>

        <CTA
          href={G_TP702THBC.url}
          title="保冷ボックス付きグランカートを見る"
          body="食品・飲料・保冷品の一時搬送には、保冷ハンドトラックボックス付きタイプも確認しておきましょう（保冷性能・条件は商品ページでご確認ください）。"
          label="保冷ボックス付き（TP702THBC）を見る"
        />
        <CardGrid items={BOX_COOLER} cols="md:grid-cols-2" />

        <H2>サイレントタイプを選びたい現場</H2>
        <ArticleImg
          src={IMG.silent}
          alt="静音タイプのボックス付き台車を施設内で使うイメージ"
        />
        <H3>病院・ホテル・オフィス・商業施設</H3>
        <p className={cls.body}>
          静かさが求められる病院・ホテル・オフィス・商業施設では、走行音を抑えたサイレントタイプが候補になります。
        </p>
        <H3>夜間作業や屋内搬送</H3>
        <p className={cls.body}>
          夜間作業や屋内搬送など、周囲への音を抑えたい場面に向きます。
        </p>
        <H3>走行音のストレスやクレームを減らしたい現場</H3>
        <p className={cls.body}>
          走行音によるストレスやクレームを減らしたい現場で選ばれます。ただし完全に無音になるわけではありません。
        </p>
        <H3>静音性だけでなく荷物量・サイズも確認する</H3>
        <p className={cls.body}>
          静音性だけでなく、積載する荷物量・サイズ・床面の状態もあわせて確認して選びます。
        </p>

        <CTA
          href={G_TPX702THB.url}
          title="サイレントタイプのグランカートを確認する"
          body="病院・ホテル・オフィス・夜間作業など、走行音が気になる場所ではサイレントタイプが候補です。蓋付き・蓋なし・保冷から選べます。"
          label="サイレント蓋付き（TPX702THB）を見る"
        />
        <CardGrid items={BOX_SILENT} />

        <H2>サイズ別｜718×468と900×605の選び方</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：サイズ別の選び方
            </caption>
            <thead>
              <tr>
                <Th>サイズ</Th>
                <Th>向いている現場</Th>
                <Th>選び方の目安</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>718×468</Td>
                <Td>狭い通路・店舗バックヤード・清掃・施設管理</Td>
                <Td>小回り・収納性重視</Td>
              </tr>
              <tr>
                <Td>900×605</Td>
                <Td>倉庫・工場・まとめ運搬・備品搬送</Td>
                <Td>積載量・作業効率重視</Td>
              </tr>
              <tr>
                <Td>折りたたみ 718×468</Td>
                <Td>車載・出張・保管場所が狭い現場</Td>
                <Td>省スペース重視</Td>
              </tr>
              <tr>
                <Td>サイドハンドル 718×468</Td>
                <Td>狭い通路・横方向操作が多い現場</Td>
                <Td>取り回し重視</Td>
              </tr>
              <tr>
                <Td>サイドハンドル 800×535 / 900×605</Td>
                <Td>大きめ荷物を横方向に扱いたい現場</Td>
                <Td>積載量＋操作性重視</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>小回り重視なら718×468クラス</H3>
        <p className={cls.body}>
          狭い通路や店舗バックヤード、清掃・施設管理では、小回りと収納性に優れた718×468クラスが扱いやすくなります。
        </p>
        <H3>まとめ運搬なら900×605クラス</H3>
        <p className={cls.body}>
          倉庫・工場でまとめて運びたい場合は、積載量に余裕のある900×605クラスが向きます。
        </p>
        <H3>狭い通路・エレベーター・バックヤードでの確認ポイント</H3>
        <p className={cls.body}>
          通路幅・エレベーター寸法・バックヤードの広さに入るか、事前に確認します。大型は積載量が増える一方、狭所では取り回しに注意します。
        </p>
        <H3>積載物の大きさと作業人数で選ぶ</H3>
        <p className={cls.body}>
          積む荷物の大きさ・量と、押す人数・作業動線を踏まえてサイズを選びます。
        </p>

        <H2>サイドハンドル・折りたたみタイプの使い分け</H2>
        <ArticleImg
          src={IMG.sideFold}
          alt="サイドハンドル台車と折りたたみ台車を比較するイメージ"
        />
        <H3>サイドハンドルは通路や横押しのしやすさを重視</H3>
        <p className={cls.body}>
          サイドハンドルは横方向に押しやすく、狭い通路や横移動が多い現場で取り回しに向きます。
        </p>
        <H3>ストッパー付きは停止時の安定感を確認したい現場向け</H3>
        <p className={cls.body}>
          傾斜や停止時の動き出しが気になる現場では、ストッパー付きが候補になります。
        </p>
        <H3>折りたたみタイプは車載・収納に便利</H3>
        <p className={cls.body}>
          折りたたみタイプは、使わないときに省スペースで保管でき、車載・出張作業に便利です。
        </p>
        <H3>常設用か持ち運び用かで選ぶ</H3>
        <p className={cls.body}>
          常設で使うなら通常・固定タイプ、持ち運び・収納重視なら折りたたみと、使い方で選びます。
        </p>

        <CTA
          href={LIST_GRANDCART}
          title="サイドハンドル・折りたたみタイプも比較する"
          body="狭い通路や保管スペースを重視する場合は、サイドハンドルや折りたたみタイプも比較しましょう。"
          label="グランカート一覧で比較する"
        />
        <CardGrid items={SIDE_FOLD} />

        <H2>現場別｜グランカートの選び方</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：現場別おすすめタイプ
            </caption>
            <thead>
              <tr>
                <Th>現場</Th>
                <Th>よくある課題</Th>
                <Th>向いているタイプ</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>工場</Td>
                <Td>工具・部品が散らばる</Td>
                <Td>蓋付き・蓋なしボックス付</Td>
              </tr>
              <tr>
                <Td>倉庫</Td>
                <Td>ピッキング品をまとめたい</Td>
                <Td>蓋なし・大型900×605</Td>
              </tr>
              <tr>
                <Td>清掃</Td>
                <Td>清掃用品をまとめて運びたい</Td>
                <Td>蓋付き・サイレント</Td>
              </tr>
              <tr>
                <Td>病院・ホテル</Td>
                <Td>走行音を抑えたい</Td>
                <Td>サイレントタイプ</Td>
              </tr>
              <tr>
                <Td>食品工場</Td>
                <Td>保冷品を運びたい</Td>
                <Td>保冷ボックス付</Td>
              </tr>
              <tr>
                <Td>イベント</Td>
                <Td>飲料・備品をまとめて運びたい</Td>
                <Td>保冷・蓋付き・大型</Td>
              </tr>
              <tr>
                <Td>店舗バックヤード</Td>
                <Td>狭い通路で使いたい</Td>
                <Td>718×468・折りたたみ</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>工場・製造現場</H3>
        <p className={cls.body}>
          工具・部品が散らばりやすい現場では、蓋付き・蓋なしのボックス付きで小物をまとめます。
        </p>
        <H3>倉庫・ピッキング作業</H3>
        <p className={cls.body}>
          出し入れの多いピッキングは蓋なし、まとめ運搬は大型900×605が向きます。
        </p>
        <H3>清掃・施設管理</H3>
        <p className={cls.body}>
          清掃用品をまとめて運ぶなら蓋付き、静かさが必要な施設ではサイレントが候補です。
        </p>
        <H3>食品工場・厨房・イベント運営</H3>
        <p className={cls.body}>
          保冷品の一時搬送は保冷ボックス付き、備品のまとめ運搬は蓋付き・大型が使いやすくなります。
        </p>
        <H3>オフィス・病院・ホテル</H3>
        <p className={cls.body}>
          静かさが求められる場所では、サイレントタイプで走行音を抑えます。
        </p>
        <H3>店舗バックヤード</H3>
        <p className={cls.body}>
          狭い通路では718×468、保管場所が限られるなら折りたたみタイプが扱いやすくなります。
        </p>

        <H2>ボックス付き台車選びでよくある失敗</H2>
        <ol className="mb-4 list-decimal space-y-2 pl-5 leading-[1.95] tracking-[0.04em] text-gray-800">
          <li>
            <span className="font-semibold text-gray-900">
              平台車で小物を運び、荷物が落ちる
            </span>
            ：小物・工具が多い現場はボックス付きで荷崩れ・紛失対策を。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              蓋付きが必要な現場で蓋なしを選ぶ
            </span>
            ：ホコリ・飛び出し・中身の見え方が気になるなら蓋付きを。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              出し入れ重視なのに蓋付きにして作業性が落ちる
            </span>
            ：頻繁に取り出すピッキングは蓋なしが向く場合があります。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              静音性が必要な場所で通常タイプを選ぶ
            </span>
            ：病院・ホテル・夜間はサイレントも比較を。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              保管場所を考えず大型タイプを選ぶ
            </span>
            ：保管・通路の広さを踏まえてサイズ・折りたたみを検討。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              段差・床面・ストッパーの有無を確認しない
            </span>
            ：床面や停止時の安定性に合わせて車輪・ストッパーを確認。
          </li>
        </ol>

        <Caution>
          どの現場にも最適な1タイプがあるわけではありません。運ぶものの重量・サイズ、通路幅・エレベーター寸法、床面の状態、保管場所、静音・保冷の要否を確認したうえで選んでください。商品スペック・寸法・価格・在庫は変わる可能性があるため、最終的には各商品ページでご確認ください。
        </Caution>

        <H2>法人向け｜グランカート発注前チェックリスト</H2>
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
                <Td>運ぶもの</Td>
                <Td>工具・部品・清掃用品・食品・保冷品など</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>蓋の必要性</Td>
                <Td>飛び出し・ホコリ・中身の見え方</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>保冷の必要性</Td>
                <Td>食品・飲料・温度変化を抑えたい荷物か</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>静音性</Td>
                <Td>病院・ホテル・オフィス・夜間作業か</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>サイズ</Td>
                <Td>718×468か900×605か</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>通路幅</Td>
                <Td>エレベーター・通路・バックヤードに入るか</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>保管性</Td>
                <Td>折りたたみが必要か</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>操作性</Td>
                <Td>サイドハンドル・ストッパーの要否</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>台数</Td>
                <Td>拠点ごと・部署ごとに何台必要か</Td>
                <Td>□</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>運ぶものを確認する</H3>
        <p className={cls.body}>
          工具・部品・清掃用品・食品・保冷品のどれを運ぶかで、蓋・保冷の要否が決まります。
        </p>
        <H3>蓋・保冷・静音の必要性を確認する</H3>
        <p className={cls.body}>
          飛び出し・ホコリ対策（蓋）、温度変化対策（保冷）、走行音対策（サイレント）の要否を整理します。
        </p>
        <H3>サイズと通路幅を確認する</H3>
        <p className={cls.body}>
          積載量と、通路・エレベーター・バックヤードの寸法を照らして選びます。
        </p>
        <H3>保管場所・折りたたみ可否を確認する</H3>
        <p className={cls.body}>
          保管スペースが限られるなら折りたたみタイプを検討します。
        </p>
        <H3>複数拠点での標準化を考える</H3>
        <p className={cls.body}>
          複数拠点・部署がある場合は、標準タイプ・台数を決めると調達・管理がしやすくなります。
        </p>

        <H2>あわせて確認したい運搬・作業用品</H2>
        <p className={cls.body}>
          グランカートと同じ現場では、荷物のまとめ作業や運搬効率を高める用品もあわせて検討されます。運搬・作業の動線に合わせてご確認ください。
        </p>
        <H3>軽量作業台</H3>
        <p className={cls.body}>
          部品の仕分け・組立・検品など、台車に載せる前の作業スペースづくりに。上棚付きの立ち作業台もあります。
        </p>
        <CardGrid items={WORKBENCH} cols="md:grid-cols-3" />
        <div className="my-4">
          <ProductLink href={LIST_SAGYOUDAI} name="軽量作業台の一覧を見る" />
        </div>

        <H3>運搬台車（平台車）</H3>
        <p className={cls.body}>
          ボックス不要の大型荷物や、汎用の構内運搬にはカルティオなどの平台車が便利です。折畳・ストッパー付きもあります。
        </p>
        <CardGrid items={DAISHA} cols="md:grid-cols-3" />
        <div className="my-4">
          <ProductLink href={LIST_DAISHA} name="運搬台車一覧を見る" />
        </div>

        <H3>ハンドパレット</H3>
        <p className={cls.body}>
          パレット単位のまとめ運搬には、ハンドパレットトラックが効率的です。積載重量に合わせて選びます。
        </p>
        <CardGrid items={HANDPAL} cols="md:grid-cols-3" />
        <div className="my-4">
          <ProductLink href={LIST_HANDPAL} name="ハンドパレット一覧へ" />
        </div>

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
          まとめ｜グランカートは「荷物の種類・蓋の有無・静音性・保管性」で選ぶ
        </H2>
        <ArticleImg
          src={IMG.checklist}
          alt="法人担当者がグランカートの発注リストを確認するイメージ"
        />
        <p className={cls.body}>
          ボックス付き台車は、荷物の落下防止・ホコリ対策・保冷・静音性・保管性まで考えて選ぶことが大切です。グランカートは、蓋付き・蓋なし・保冷・サイレント・サイドハンドル・折りたたみとタイプが豊富なので、運ぶものの種類、蓋の有無、静音性、サイズ、保管性を基準に、現場に合うタイプを選びましょう。どの現場にも最適な1タイプがあるわけではないため、荷物・通路・床面・保管場所を確認したうえで比較検討してください。
        </p>

        <FinalCTA
          href={LIST_GRANDCART}
          title="工場・倉庫・清掃・施設管理・食品搬送に合うグランカートを確認"
          body="蓋付き・蓋なし・保冷・サイレント・サイドハンドル・折りたたみから、現場に合うタイプを。仕様・価格・在庫は商品ページでご確認ください。"
          label="TRUSCOグランカート一覧を見る"
        />
        <div className="mb-8 grid grid-cols-2 gap-2 md:grid-cols-4">
          <ProductLink href={G_TP702THB.url} name="蓋付き 718×468" />
          <ProductLink href={G_TP702THBC.url} name="保冷 718×468" />
          <ProductLink href={G_TPX702THB.url} name="サイレント蓋付き" />
          <ProductLink href={G_TP701.url} name="折りたたみ 718×468" />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
