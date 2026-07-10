import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "insulated-tool-basics";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/insulated-tools-basic-guide-hero.jpg`,
  marking: `${ARTICLE_IMG}/insulated-tool-1000v-mark-check.jpg`,
  comparison: `${ARTICLE_IMG}/insulated-tools-vs-ordinary-tools-comparison.jpg`,
  types: `${ARTICLE_IMG}/knipex-electrical-insulated-tools.jpg`,
  inspection: `${ARTICLE_IMG}/control-panel-insulated-tools-maintenance.jpg`,
  checklist: `${ARTICLE_IMG}/insulated-tools-procurement-checklist.jpg`,
};

export const metadata: Metadata = {
  title:
    "絶縁工具とは？普通の工具との違い・1000V表示の意味・使うべき作業を解説｜作業用品ナビ",
  description:
    "絶縁工具とは何かを、普通の工具やゴムグリップ付き工具との違い、1000V表示・VDE・IEC 60900の意味、必要になりやすい作業、単品工具とセットの使い分け、使用時の注意点まで基礎からわかりやすく解説します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "絶縁工具とは？普通の工具との違い・1000V表示の意味・使うべき作業を解説",
    description:
      "絶縁工具とは何かを、普通の工具やゴムグリップ付き工具との違い、1000V表示・VDE・IEC 60900の意味、必要になりやすい作業、単品工具とセットの使い分け、使用時の注意点まで基礎からわかりやすく解説します。",
    type: "article",
    images: [IMG.hero],
  },
};

const UTM = "utm_source=sagyou_navi";

function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) => `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

function R(path: string): string {
  return buildUrl(`https://item.rakuten.co.jp/crecote-shop/${path}`, UTM);
}

const URLS = {
  techEvFull: R("ta041849-tevsetfull/"),
  knipex002120: R("ta040487-002120/"),
  knipex989912: R("ta034163-989912/"),
  truscoSocketSet: R("ta019403-tzsw424s/"),
  ktcZtb311a: R("ta040466-ztb311a/"),
  kleinStripper: R("ta030490-11045ins/"),
  kleinPliers: R("ta035625-d20009neins/"),
  truscoMonkey: R("ta040199-tzmr200/"),
  bahcoPliers: R("ta031571-2678v200/"),
  bahcoMonkey: R("ta033465-8072vlt/"),
  nichifuNh32: R("ta037960-nh32/"),
  boschSocketDriver: R("ta030929-1600a02nf3/"),
  knipexSpanner24: R("ta034130-980024/"),
  truscoSpanner14: R("ta019397-tzss14/"),
  gedorePliersSet: R("ta031477-2309033/"),
  bahcoLongNose: R("ta031440-2223s150/"),
  truscoTap6: R("ta015455-tap6/"),
  kleinLongNose: R("ta031322-2036eins/"),
  toneDriverSet: R("ta036021-eld7/"),
  setTsa350sv: R("ta041904-tsa350sv/"),
  setTss4331bk: R("ta041933-tss4331bk/"),
  setTsa350bk: R("ta041903-tsa350bk/"),
  setTsa3120: R("ta041895-tsa3120/"),
  setTsa3331: R("ta041899-tsa3331/"),
  setTsx950bk: R("ta041951-tsx950bk/"),
  insulatedList: buildUrl(
    "https://search.rakuten.co.jp/search/mall/%E7%B5%B6%E7%B8%81/?sid=426972",
    UTM
  ),
  maintList: buildUrl(
    "https://search.rakuten.co.jp/search/mall/%E6%95%B4%E5%82%99%E7%94%A8/?sid=426972",
    UTM
  ),
  truscoList: buildUrl(
    "https://item.rakuten.co.jp/crecote-shop/c/0000000043/?l-id=shoptop_shopmenu_categorypage_16",
    UTM
  ),
};

const productImage = (id: string) => `/products/${id}.jpg`;

type Prod = {
  id: string;
  imgId?: string;
  name: string;
  use: string;
  url: string;
};

const INSULATED_SETS: Prod[] = [
  {
    id: "ta041849-tevsetfull",
    name: "Tech-EV 絶縁工具セット フル 27点セット TEVSETFULL",
    use: "EV・電気系作業を想定したフルセット。セット内容・絶縁範囲は商品ページで確認（メーカー公表値・要確認）",
    url: URLS.techEvFull,
  },
  {
    id: "ta040487-002120",
    name: "KNIPEX 002120 ツールケース 20点セット",
    use: "電気工事・設備メンテの持ち出し用ケース入りセット。各工具の絶縁範囲を確認（メーカー公表値・要確認）",
    url: URLS.knipex002120,
  },
  {
    id: "ta034163-989912",
    name: "KNIPEX 絶縁工具セット 26点セット 989912",
    use: "VDE絶縁テスト済み工具で構成されたケース入りセットと案内（制御盤・ボルトナット作業を含む／要確認）",
    url: URLS.knipex989912,
  },
  {
    id: "ta040466-ztb311a",
    name: "KTC 絶縁工具セットA ZTB311A",
    use: "電気工事・整備・設備保全向けの国内メーカー絶縁工具セット（セット内容・絶縁範囲はメーカー仕様を確認）",
    url: URLS.ktcZtb311a,
  },
];

const PLIERS_DRIVERS: Prod[] = [
  {
    id: "ta036021-eld7",
    name: "TONE 絶縁ドライバーセット ELD7",
    use: "電気・通信・自動車・太陽光発電などの電気工事向けと説明される絶縁ドライバーセット（要確認）",
    url: URLS.toneDriverSet,
  },
  {
    id: "ta035625-d20009neins",
    name: "KLEIN 強力型絶縁ペンチ 250mm D20009NEINS",
    use: "IEC60900/ASTM F1505を満たす旨記載の絶縁ペンチ（電線のつかみ・曲げ・切断向け／要確認）",
    url: URLS.kleinPliers,
  },
  {
    id: "ta031571-2678v200",
    name: "BAHCO 絶縁ペンチ 2678V200",
    use: "電線のつかみ・曲げ・切断向けの絶縁ペンチ（絶縁範囲・使用条件はメーカー仕様を確認）",
    url: URLS.bahcoPliers,
  },
  {
    id: "ta031477-2309033",
    name: "GEDORE VDE絶縁プライヤーセット 2309033",
    use: "プライヤー・狭所作業向けのVDE絶縁プライヤーセット（構成・絶縁範囲はメーカー仕様を確認）",
    url: URLS.gedorePliersSet,
  },
  {
    id: "ta031440-2223s150",
    name: "BAHCO 絶縁ロングノーズプライヤー 2223S150",
    use: "狭所・奥まった作業向けの絶縁ロングノーズプライヤー（要確認）",
    url: URLS.bahcoLongNose,
  },
  {
    id: "ta031322-2036eins",
    name: "KLEIN 絶縁ロングノーズプライヤー 180mm 2036EINS",
    use: "狭所作業向けの絶縁ロングノーズプライヤー（絶縁範囲はメーカー仕様を確認）",
    url: URLS.kleinLongNose,
  },
];

const STRIPPER: Prod[] = [
  {
    id: "ta030490-11045ins",
    name: "KLEIN 絶縁ケーブルストリッパー 180mm 11045INS",
    use: "単線10〜18AWGの切断・皮むき・ループ加工などに使え、IEC60900・ASTM F1505準拠と掲載（要確認）",
    url: URLS.kleinStripper,
  },
];

const WRENCHES: Prod[] = [
  {
    id: "ta040199-tzmr200",
    name: "TRUSCO 絶縁モンキーレンチ 200mm TZMR200",
    use: "ナット・サイズ可変作業向けの絶縁モンキー（絶縁範囲・使用条件はメーカー仕様を確認）",
    url: URLS.truscoMonkey,
  },
  {
    id: "ta033465-8072vlt",
    name: "BAHCO 1000V完全絶縁仕様モンキーレンチ 255mm 8072VLT",
    use: "1000V完全絶縁仕様とされるモンキーレンチ（適合・使用条件はメーカー仕様を確認）",
    url: URLS.bahcoMonkey,
  },
  {
    id: "ta034130-980024",
    name: "KNIPEX 絶縁片口スパナ 24mm 980024",
    use: "ボルト・ナット作業向けの絶縁片口スパナ（絶縁範囲はメーカー仕様を確認）",
    url: URLS.knipexSpanner24,
  },
  {
    id: "ta019397-tzss14",
    name: "TRUSCO 絶縁片口スパナ 14mm TZSS-14",
    use: "盤内・設備まわりのスパナ作業向け（絶縁範囲はメーカー仕様を確認）",
    url: URLS.truscoSpanner14,
  },
  {
    id: "ta019403-tzsw424s",
    name: "TRUSCO 絶縁ソケットレンチセット 6角 差込角12.7mm TZSW4-24S",
    use: "発泡トレイで員数確認しやすい。※1000V絶縁はハンドル部のみ・ボックス内部は非絶縁・他社互換なし（要確認）",
    url: URLS.truscoSocketSet,
  },
  {
    id: "ta030929-1600a02nf3",
    name: "ボッシュ 絶縁ソケットドライバー 6種セット 1600A02NF3",
    use: "ソケット作業向けの絶縁ソケットドライバーセット（絶縁範囲・付属サイズはメーカー仕様を確認）",
    url: URLS.boschSocketDriver,
  },
];

const CRIMPING: Prod[] = [
  {
    id: "ta037960-nh32",
    name: "ニチフ 手動工具 絶縁被覆付圧着端子・スリーブ用 NH32",
    use: "絶縁被覆付圧着端子・スリーブの圧着用（適合端子はメーカー仕様を確認）",
    url: URLS.nichifuNh32,
  },
  {
    id: "ta015455-tap6",
    name: "TRUSCO 圧着ペンチ 絶縁端子用／接続端子用 TAP-6",
    use: "絶縁端子・接続端子の圧着用（適合・使用方法はメーカー仕様を確認）",
    url: URLS.truscoTap6,
  },
];

const MAINT_SETS: Prod[] = [
  {
    id: "ta041904-tsa350sv",
    name: "TONE 整備用工具セット 72点 シルバー TSA350SV",
    use: "自動車整備の一般作業向け工具セット。電気系統作業とは使い分け（要確認）",
    url: URLS.setTsa350sv,
  },
  {
    id: "ta041903-tsa350bk",
    name: "TONE 整備用工具セット 72点 マットブラック TSA350BK",
    use: "自動車整備の一般作業向け工具セット。電気系統作業とは使い分け（要確認）",
    url: URLS.setTsa350bk,
  },
  {
    id: "ta041951-tsx950bk",
    name: "TONE 整備用工具セット 86点 TSX950BK",
    use: "自動車整備の一般作業向けの大容量セット（要確認）",
    url: URLS.setTsx950bk,
  },
  {
    id: "ta041899-tsa3331",
    name: "TONE 整備用工具セット オートメカニック用 TSA3331",
    use: "オートメカニック向けの整備用工具セット（要確認）",
    url: URLS.setTsa3331,
  },
  {
    id: "ta041895-tsa3120",
    name: "TONE 整備用工具セット 43pcs TSA3120",
    use: "コンパクトな整備用工具セット（要確認）",
    url: URLS.setTsa3120,
  },
  {
    id: "ta041933-tss4331bk",
    name: "TONE 整備用工具セット マットブラック TSS4331BK",
    use: "自動車整備の一般作業向け工具セット（要確認）",
    url: URLS.setTss4331bk,
  },
];

const FAQ_ITEMS = [
  {
    q: "絶縁工具とは何ですか？",
    a: "電気作業時の感電リスクを低減するため、ハンドルや工具の一部に絶縁処理を施し、規格に基づいて試験された工具です。電気工事、制御盤作業、設備保全、EV・HV整備などで使用されます。",
  },
  {
    q: "絶縁工具と普通の工具の違いは？",
    a: "普通の工具は金属部が露出し、絶縁を前提にしていません。絶縁工具は規格に基づき絶縁処理・試験されている点が異なります。IEC 60900・VDE・1000V表示などを確認して選びます。",
  },
  {
    q: "ゴムグリップ付き工具は絶縁工具ですか？",
    a: "いいえ。持ち手が樹脂・ゴム風でも、それは握りやすさや滑り止めのためのグリップで、絶縁を規格で保証したものとは限りません。「ゴムグリップ＝絶縁工具」ではありません。",
  },
  {
    q: "1000V対応ならどんな作業でも安全ですか？",
    a: "いいえ。1000V表示は重要な目安ですが、作業内容・電圧・絶縁範囲・工具の状態・資格・作業手順・保護具の有無を確認する必要があります。絶縁工具だけで安全が保証されるわけではありません。",
  },
  {
    q: "絶縁工具セットは必要ですか？",
    a: "初めて一式そろえる場合や複数人で標準化したい場合はセットが便利です。特定作業の工具だけ足したい場合は単品補充が向きます。導入パターンで判断します。",
  },
  {
    q: "EV整備には絶縁工具が必要ですか？",
    a: "EVやハイブリッド車の高電圧系統に関わる作業では、社内基準・メーカー指定・資格・安全手順に従ったうえで、対応する絶縁工具を準備する必要があります。",
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

function CTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="my-6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noopener noreferrer"
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
        rel="nofollow noopener noreferrer"
        className="block w-full rounded-lg bg-gray-900 px-6 py-6 text-center text-lg font-bold text-white shadow-lg transition-colors hover:bg-gray-700"
      >
        {children}
      </a>
    </div>
  );
}

function ProductCard({ item }: { item: Prod }) {
  const imgId = item.imgId ?? item.id;
  return (
    <a
      href={item.url}
      target="_blank"
      rel="nofollow noopener noreferrer"
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
          商品ページを見る
        </span>
      </div>
    </a>
  );
}

function ProductGrid({ items }: { items: Prod[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <ProductCard key={`${item.id}-${item.name}`} item={item} />
      ))}
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
  return (
    <td className="border border-gray-300 px-3 py-2 text-sm align-top">{children}</td>
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
      <main className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <span>選び方ガイド</span>
          <span className="mx-1">/</span>
          <span className="text-gray-700">絶縁工具とは？</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          絶縁工具とは？普通の工具との違い・1000V表示の意味・使うべき作業を解説
        </h1>

        <p className="mb-6 text-sm text-gray-500">公開日：2026年7月10日／約15分で読めます</p>

        <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5 leading-relaxed">
          <p className="mb-3 font-bold">この記事の要点（先に結論）</p>
          <p className={cls.body}>
            絶縁工具とは、電気作業時の<strong>感電リスクを低減する</strong>
            ため、ハンドルや工具の一部に絶縁処理を施し、規格に基づいて試験された工具です。1000V表示やIEC
            60900・VDEなどの規格表示を確認して選びます。
          </p>
          <p className={cls.body}>
            ただし、絶縁工具を使えば必ず安全という意味ではありません。
            <strong>停電確認、検電、ロックアウト、保護具、作業資格、社内手順</strong>
            と併用する必要があります。絶縁工具は安全対策の一部であり、これらの代わりにはなりません。
          </p>
          <p className={cls.body}>
            また、<strong>ゴムグリップ付き工具と絶縁工具は同じではありません</strong>
            。見た目や樹脂グリップだけで絶縁工具と判断せず、規格表示・刻印・メーカー情報を必ず確認してください。
          </p>
        </div>

        <ArticleImg
          src={IMG.hero}
          alt="絶縁工具と普通の工具を見比べるイメージ"
        />

        <CTA href={URLS.insulatedList}>
          絶縁工具一覧を見る（電気工事・制御盤・設備保全・EV整備向け）
        </CTA>

        <H2>絶縁工具とは？</H2>
        <H3>電気作業時の感電リスクを低減するための工具</H3>
        <p className={cls.body}>
          絶縁工具は、ハンドルや工具の一部に絶縁処理を施し、規格に基づいて試験された工具です。電気作業時の感電・短絡のリスクを低減する目的で使われます。
        </p>
        <H3>普通の工具やゴムグリップ付き工具との違い</H3>
        <p className={cls.body}>
          普通の工具は金属部が露出し、絶縁を前提にしていません。また、持ち手が樹脂・ゴム風でも、それだけでは絶縁工具とはいえません。絶縁工具は規格に基づき絶縁処理・試験されている点が異なります。
        </p>
        <H3>絶縁工具を使えば安全、ではない理由</H3>
        <p className={cls.body}>
          絶縁工具は感電リスクを下げる補助であり、これだけで安全が保証されるわけではありません。停電確認・検電・ロックアウト・保護具・作業資格・社内手順と併用してはじめて意味を持ちます。
        </p>

        <Caution title="⚠️ 電気作業の安全について">
          <p>
            <strong>絶縁工具があれば活線作業でも安心、という意味ではありません</strong>
            。電気作業は、有資格者・教育済みの作業者が、社内手順に従って行うことが前提です。作業前の停電確認・検電・放電・ロックアウト、絶縁手袋などの保護具の着用を省略せず、絶縁工具は安全対策の「一部」として使ってください。通電状態での作業は重大事故につながるおそれがあります。
          </p>
        </Caution>

        <H2>絶縁工具の1000V表示・VDE・IEC 60900とは？</H2>
        <ArticleImg
          src={IMG.marking}
          alt="絶縁工具の規格表示・1000V刻印を確認するイメージ"
        />
        <H3>1000V表示は何を意味する？</H3>
        <p className={cls.body}>
          1000V表示は、AC1000Vなどに対応する絶縁仕様であることを示す目安です。ただし表示だけでどの作業にも使えるわけではなく、作業電圧・作業条件・絶縁範囲を必ず確認します。
        </p>
        <H3>IEC 60900・VDE表示を見る理由</H3>
        <p className={cls.body}>
          IEC 60900は、活線または活線近接の状況で使う絶縁ハンドツールに関する規格で、適合品はAC1000V・DC1500Vまでに対応するとされています（VDEは同等の欧州系の試験・認証）。規格・適合は製品・時期により異なるため、最新のメーカー公式情報で確認してください。
        </p>
        <H3>規格表示がない工具を電気作業で使うリスク</H3>
        <p className={cls.body}>
          規格表示のない工具は、絶縁性能が試験・保証されているとは限りません。電気作業に用いると感電・短絡のリスクがあるため、規格表示・1000V表示を確認して選びます。
        </p>
        <H3>購入時に見るべき表示・刻印・メーカー情報</H3>
        <p className={cls.body}>
          工具本体の刻印・表示（規格名・対応電圧）、メーカーの仕様情報、絶縁範囲を確認します。見た目や価格だけで判断しないようにします。
        </p>

        <Caution title="⚠️ ゴムグリップ付き工具と絶縁工具は別物です">
          <p>
            持ち手が樹脂・ゴム風でも、それは<strong>滑り止めや握りやすさのためのグリップ</strong>
            で、絶縁性能を規格で保証したものとは限りません。「ゴムグリップ＝絶縁工具」ではありません。電気作業には、IEC
            60900・VDEなどの規格表示や1000V表示があり、絶縁試験されている工具を選び、表示・刻印・メーカー情報を必ず確認してください。
          </p>
        </Caution>

        <H2>絶縁工具と普通の工具の違いを比較</H2>
        <ArticleImg
          src={IMG.comparison}
          alt="絶縁工具・樹脂グリップ工具・通常工具を比較するイメージ"
        />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>種類</Th>
                <Th>特徴</Th>
                <Th>電気作業での考え方</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>普通の工具</Td>
                <Td>金属部が露出し、絶縁を前提にしていない</Td>
                <Td>電気作業では感電リスクに注意</Td>
              </tr>
              <tr>
                <Td>樹脂グリップ付き工具</Td>
                <Td>持ち手が樹脂・ゴム風に見える</Td>
                <Td>見た目だけで絶縁工具と判断しない</Td>
              </tr>
              <tr>
                <Td>絶縁工具</Td>
                <Td>規格に基づき絶縁処理・試験された工具</Td>
                <Td>電気作業時のリスク低減に使う</Td>
              </tr>
              <tr>
                <Td>1000V表示付き工具</Td>
                <Td>1000V AC対応などの表示がある</Td>
                <Td>表示・規格・作業条件を必ず確認</Td>
              </tr>
              <tr>
                <Td>通常整備用工具</Td>
                <Td>自動車整備・機械整備用</Td>
                <Td>電気系統作業とは使い分ける</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>樹脂グリップ付き工具との違い</H3>
        <p className={cls.body}>
          樹脂グリップは握りやすさ・滑り止めのためのもので、絶縁を規格で保証したものとは限りません。
        </p>
        <H3>絶縁処理された工具との違い</H3>
        <p className={cls.body}>
          絶縁工具は、規格に基づいて絶縁処理・試験されている点が、見た目が似た工具と異なります。
        </p>
        <H3>絶縁工具セットと単品工具の違い</H3>
        <p className={cls.body}>
          セットは基本工具を一式そろえやすく、単品は不足工具の補充や特定作業に向きます（詳しい使い分けは後述）。
        </p>
        <H3>通常整備用工具との使い分け</H3>
        <p className={cls.body}>
          自動車・機械整備の通常工具は、電気系統作業とは用途が異なります。作業内容に応じて使い分けます。
        </p>

        <H2>絶縁工具が必要になりやすい作業</H2>
        <H3>電気工事</H3>
        <p className={cls.body}>
          配電盤・分電盤・端子台まわりの配線作業などで、絶縁ドライバー・絶縁ペンチが使われます。
        </p>
        <H3>制御盤・分電盤まわりの作業</H3>
        <p className={cls.body}>
          盤内のねじ・端子・ボルト作業で、狭所に合うサイズの絶縁工具を選びます。
        </p>
        <H3>工場設備保全</H3>
        <p className={cls.body}>
          電源設備・制御機器の点検・保全で、設備ごとに必要な絶縁工具を整理します。
        </p>
        <H3>太陽光・蓄電池関連作業</H3>
        <p className={cls.body}>
          太陽光発電・蓄電池まわりの作業も用途の一つです（専用工具が必要な作業は各機器の仕様・手順を確認）。
        </p>
        <H3>EV・HV整備</H3>
        <p className={cls.body}>
          EV・ハイブリッド車の高電圧系統に関わる作業では、メーカー指定・資格・社内基準・安全手順に従い、対応する絶縁工具を準備します。
        </p>
        <H3>一般整備作業では通常工具との使い分けも必要</H3>
        <p className={cls.body}>
          電気系統以外の一般整備では通常工具を使い、電気作業では絶縁工具を使うなど、作業に応じて使い分けます。
        </p>

        <H2>絶縁工具の主な種類</H2>
        <ArticleImg
          src={IMG.types}
          alt="絶縁ドライバー・ペンチ・レンチなど種類を並べたイメージ"
        />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>工具</Th>
                <Th>主な用途</Th>
                <Th>商品導線</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>絶縁ドライバー</Td>
                <Td>端子台、制御盤、電気部品のねじ作業</Td>
                <Td>TONE 絶縁ドライバーセット</Td>
              </tr>
              <tr>
                <Td>絶縁ペンチ</Td>
                <Td>電線の曲げ、保持、切断</Td>
                <Td>KLEIN、BAHCO 絶縁ペンチ</Td>
              </tr>
              <tr>
                <Td>絶縁ストリッパー</Td>
                <Td>電線被覆の剥離</Td>
                <Td>KLEIN 絶縁ケーブルストリッパー</Td>
              </tr>
              <tr>
                <Td>絶縁モンキーレンチ</Td>
                <Td>ナット・ボルト作業</Td>
                <Td>TRUSCO、BAHCO 絶縁モンキーレンチ</Td>
              </tr>
              <tr>
                <Td>絶縁スパナ</Td>
                <Td>決まったサイズの締付け</Td>
                <Td>KNIPEX、TRUSCO 絶縁片口スパナ</Td>
              </tr>
              <tr>
                <Td>絶縁ソケット</Td>
                <Td>配電盤・設備保全の締結作業</Td>
                <Td>TRUSCO 絶縁ソケットレンチセット</Td>
              </tr>
              <tr>
                <Td>圧着工具</Td>
                <Td>絶縁端子・スリーブの圧着</Td>
                <Td>ニチフ、TRUSCO 圧着工具</Td>
              </tr>
              <tr>
                <Td>絶縁工具セット</Td>
                <Td>一式導入・現場管理</Td>
                <Td>Tech-EV、KNIPEX、KTC</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H3>絶縁ドライバー</H3>
        <ProductGrid items={[PLIERS_DRIVERS[0]]} />

        <H3>絶縁ペンチ・絶縁プライヤー</H3>
        <ProductGrid items={PLIERS_DRIVERS.slice(1)} />

        <H3>絶縁ケーブルストリッパー</H3>
        <ProductGrid items={STRIPPER} />

        <H3>絶縁モンキーレンチ・絶縁スパナ・絶縁ソケット</H3>
        <ProductGrid items={WRENCHES} />

        <H3>圧着工具・端子作業用工具</H3>
        <ProductGrid items={CRIMPING} />

        <H3>絶縁工具セット</H3>
        <ProductGrid items={INSULATED_SETS} />

        <CTA href={URLS.insulatedList}>単品の絶縁工具を絶縁工具一覧で探す</CTA>

        <H2>単品で揃える？セットで揃える？導入パターン別の考え方</H2>
        <H3>不足工具の補充なら単品工具</H3>
        <p className={cls.body}>
          すでに基本工具がある場合や、特定作業の工具だけ足したい場合は、単品工具の補充が向きます。
        </p>
        <H3>現場一式を揃えるなら絶縁工具セット</H3>
        <p className={cls.body}>
          これから一式そろえる場合や、複数人・複数拠点で標準化したい場合は、絶縁工具セットが便利です。
        </p>
        <ProductGrid
          items={INSULATED_SETS.filter((p) =>
            ["ta041849-tevsetfull", "ta034163-989912", "ta040466-ztb311a"].includes(p.id)
          )}
        />
        <p className={cls.body}>
          さらにセットを比較したい方は、
          <Link
            href="/articles/insulated-tool-set-selection"
            className="text-gray-900 underline hover:no-underline"
          >
            絶縁工具セットの選び方
          </Link>
          の記事もご覧ください。現場別のセット比較・選定ポイントを詳しく解説しています。
        </p>
        <H3>EV整備・制御盤作業では専用品の組み合わせを確認</H3>
        <p className={cls.body}>
          EV整備や制御盤作業では、必要な種類・サイズの絶縁工具を組み合わせて確認します。高電圧系は資格・社内基準・メーカー指定・安全手順に従います。
        </p>
        <H3>法人購買では保管・管理・点検まで考える</H3>
        <p className={cls.body}>
          法人購買では、ケース・員数管理・使用前点検・破損時の交換基準まで含めて導入を検討します。
        </p>
        <CTA href={URLS.insulatedList}>
          絶縁工具セット・単品を絶縁工具一覧で確認する
        </CTA>

        <H2>絶縁工具の選び方</H2>
        <H3>作業電圧・作業範囲を確認する</H3>
        <p className={cls.body}>
          対象の作業電圧・作業範囲を確認し、それに合う絶縁仕様の工具を選びます。
        </p>
        <H3>規格表示・1000V表示を確認する</H3>
        <p className={cls.body}>
          IEC 60900・VDE・1000V表示など、規格表示・刻印を確認します（規格・適合はメーカー情報で確認）。
        </p>
        <H3>工具の種類とサイズを作業内容に合わせる</H3>
        <p className={cls.body}>
          ねじ・端子・圧着・ボルト・ケーブル加工など、作業に必要な種類・サイズをそろえます。
        </p>
        <H3>収納ケース・管理しやすさを見る</H3>
        <p className={cls.body}>
          持ち出しが多い場合は、ケース・発泡トレー付きだと員数管理・欠品確認がしやすくなります。
        </p>
        <H3>単品補充かセット導入かを決める</H3>
        <p className={cls.body}>
          不足補充なら単品、一式導入・標準化ならセットと、導入パターンで判断します。
        </p>

        <Caution>
          <p>
            <strong>絶縁範囲は製品ごとに異なります</strong>
            。たとえば絶縁ソケットレンチには、1000V絶縁がハンドル部のみで、ボックス（ソケット）内部は絶縁ではない製品や、他社品と互換性がない製品があります。「1000V対応」の表示だけで判断せず、どの部位がどこまで絶縁されているか、使用条件・適合を各商品ページとメーカー公式情報で確認してください。スペックや付属品・価格は変わる場合があります。
          </p>
        </Caution>

        <H2>絶縁工具を使うときの注意点</H2>
        <ArticleImg
          src={IMG.inspection}
          alt="絶縁被覆の傷・割れを点検するイメージ"
        />
        <H3>停電確認・検電・ロックアウトを省略しない</H3>
        <p className={cls.body}>
          絶縁工具を使う場合でも、停電確認・検電・放電・ロックアウトの手順を省略しないことが重要です。
        </p>
        <H3>傷・割れ・汚れがある工具は使わない</H3>
        <p className={cls.body}>
          絶縁被覆に傷・割れ・剥がれ・汚れがある工具は、絶縁性能が低下しているおそれがあるため使用しません。
        </p>
        <H3>濡れた環境や油汚れに注意する</H3>
        <p className={cls.body}>
          濡れた環境や油汚れは絶縁性能や作業安全に影響するため、工具や作業環境の状態を確認します。
        </p>
        <H3>工具だけでなく保護具・作業手順も確認する</H3>
        <p className={cls.body}>
          絶縁手袋などの保護具、作業手順、社内規程とあわせて使うことが前提です。
        </p>
        <H3>有資格者・教育済み作業者が扱う前提にする</H3>
        <p className={cls.body}>
          電気作業は、有資格者・教育済みの作業者が社内手順に従って行うことを前提とします。
        </p>

        <H2>用途別に見る絶縁工具の選び方</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>作業</Th>
                <Th>必要になりやすい工具</Th>
                <Th>注意点</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>電気工事</Td>
                <Td>絶縁ドライバー、絶縁ペンチ、絶縁ストリッパー</Td>
                <Td>作業資格・停電確認が前提</Td>
              </tr>
              <tr>
                <Td>制御盤作業</Td>
                <Td>絶縁ドライバー、絶縁ソケット、絶縁スパナ</Td>
                <Td>狭所作業に合うサイズを選ぶ</Td>
              </tr>
              <tr>
                <Td>工場設備保全</Td>
                <Td>絶縁工具セット、絶縁モンキーレンチ</Td>
                <Td>設備ごとに必要工具を整理</Td>
              </tr>
              <tr>
                <Td>EV・HV整備</Td>
                <Td>絶縁工具セット、絶縁ソケット、絶縁スパナ</Td>
                <Td>高電圧系統の作業手順を確認</Td>
              </tr>
              <tr>
                <Td>通常整備</Td>
                <Td>整備用工具セット</Td>
                <Td>絶縁工具との使い分けが必要</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>電気工事向け</H3>
        <p className={cls.body}>
          絶縁ドライバー・絶縁ペンチ・ストリッパーを中心にそろえます。
        </p>
        <H3>制御盤・設備保全向け</H3>
        <p className={cls.body}>
          盤内のねじ・端子・ボルト作業に対応する絶縁工具を、狭所サイズも含めて確認します。
        </p>
        <H3>EV・HV整備向け</H3>
        <p className={cls.body}>
          高電圧系は資格・社内基準・メーカー指定・安全手順に従い、対応する絶縁工具を準備します。
        </p>
        <H3>通常整備工具と併用するケース</H3>
        <p className={cls.body}>
          電気系統以外の整備は通常工具を使い、電気作業は絶縁工具を使うなど、使い分けます。整備用工具セットもあわせて確認できます。
        </p>
        <ProductGrid items={MAINT_SETS} />
        <CTA href={URLS.maintList}>整備用工具一覧を見る</CTA>

        <H2>絶縁工具を購入する前のチェックリスト</H2>
        <ArticleImg
          src={IMG.checklist}
          alt="法人担当者が絶縁工具の確認項目をチェックするイメージ"
        />
        <H3>現場担当者向けチェックリスト</H3>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>チェック項目</Th>
                <Th>確認内容</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>作業電圧・範囲</Td>
                <Td>対象作業の電圧・範囲を把握したか</Td>
              </tr>
              <tr>
                <Td>規格表示</Td>
                <Td>IEC 60900・VDE・1000V表示・刻印を確認したか</Td>
              </tr>
              <tr>
                <Td>種類・サイズ</Td>
                <Td>作業に必要な工具の種類・サイズがそろうか</Td>
              </tr>
              <tr>
                <Td>状態</Td>
                <Td>傷・割れ・汚れがないか、使用前点検の習慣</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>法人購買担当者向けチェックリスト</H3>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>チェック項目</Th>
                <Th>確認内容</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>導入パターン</Td>
                <Td>単品補充かセット導入かを決めたか</Td>
              </tr>
              <tr>
                <Td>標準化</Td>
                <Td>複数人・複数拠点で同じ構成にするか</Td>
              </tr>
              <tr>
                <Td>関連備品</Td>
                <Td>絶縁手袋・検電器・保護具も確認したか</Td>
              </tr>
              <tr>
                <Td>最終確認</Td>
                <Td>仕様・適合を商品ページ・メーカー情報で確認したか</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>保管・点検担当者向けチェックリスト</H3>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>チェック項目</Th>
                <Th>確認内容</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>保管</Td>
                <Td>ケース・トレーで員数管理できるか</Td>
              </tr>
              <tr>
                <Td>点検</Td>
                <Td>使用前点検（傷・割れ・汚れ）のルールがあるか</Td>
              </tr>
              <tr>
                <Td>交換</Td>
                <Td>破損時の交換基準を決めているか</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H2>よくある質問</H2>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q}>
              <h3 className={cls.faqQ}>Q. {item.q}</h3>
              <p className={cls.body}>{item.a}</p>
            </div>
          ))}
        </div>

        <H2>まとめ｜絶縁工具は「規格・用途・作業手順」とセットで選ぶ</H2>
        <p className={cls.body}>
          絶縁工具とは、電気作業時の感電リスクを低減するため、規格に基づいて絶縁処理・試験された工具です。普通の工具やゴムグリップ付き工具とは異なり、IEC
          60900・VDE・1000V表示などを確認して選びます。ただし、絶縁工具を使えば必ず安全というわけではなく、停電確認・検電・ロックアウト・保護具・作業資格・社内手順と併用する「安全対策の一部」です。作業電圧・規格表示・種類とサイズ・絶縁範囲・保管管理を確認し、単品補充かセット導入かを判断しましょう。電気作業は有資格者・教育済み作業者が社内手順に従って行う前提で進めてください。
        </p>
        <p className={cls.body}>
          セットの比較・現場別の選び方を詳しく知りたい方は、
          <Link
            href="/articles/insulated-tool-set-selection"
            className="text-gray-900 underline hover:no-underline"
          >
            絶縁工具セットの選び方
          </Link>
          もあわせてご覧ください。
        </p>
        <FinalCTA href={URLS.insulatedList}>
          絶縁工具一覧を見る（セット・単品）
        </FinalCTA>
        <FinalCTA href={URLS.truscoList}>トラスコ中山商品一覧を見る</FinalCTA>
      </main>
      <SiteFooter />
    </>
  );
}
