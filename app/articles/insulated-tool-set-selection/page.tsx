import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "insulated-tool-set-selection";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/insulated-tool-set-electrical-work-hero.jpg`,
  comparison: `${ARTICLE_IMG}/insulated-tools-vs-regular-tools-comparison.jpg`,
  controlPanel: `${ARTICLE_IMG}/control-panel-insulated-screwdriver-work.jpg`,
  evMaintenance: `${ARTICLE_IMG}/ev-maintenance-insulated-tool-set.jpg`,
  cableTools: `${ARTICLE_IMG}/insulated-cable-stripping-crimping-tools.jpg`,
  checklist: `${ARTICLE_IMG}/insulated-tools-procurement-checklist.jpg`,
};

export const metadata: Metadata = {
  title:
    "絶縁工具セットの選び方｜電気工事・制御盤作業・EV整備で必要な工具一覧｜作業用品ナビ",
  description:
    "絶縁工具セットの選び方を、電気工事・制御盤作業・設備保全・EV整備などの現場別に解説。1000V対応、IEC60900、ドライバー・ペンチ・レンチ・圧着工具の使い分け、購入前の確認ポイント、法人向け備品チェックリストまで整理します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "絶縁工具セットの選び方｜電気工事・制御盤作業・EV整備で必要な工具一覧",
    description:
      "絶縁工具セットの選び方を、電気工事・制御盤作業・設備保全・EV整備などの現場別に解説。1000V対応、IEC60900、ドライバー・ペンチ・レンチ・圧着工具の使い分け、購入前の確認ポイント、法人向け備品チェックリストまで整理します。",
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
  bahcoPliers: R("ta031571-2678v200/"),
  truscoMonkey: R("ta040199-tzmr200/"),
  bahcoMonkey: R("ta033465-8072vlt/"),
  knipexSpanner24: R("ta034130-980024/"),
  truscoSpanner14: R("ta019397-tzss14/"),
  nichifuNh32: R("ta037960-nh32/"),
  truscoTap6: R("ta015455-tap6/"),
  boschSocketDriver: R("ta030929-1600a02nf3/"),
  toneDriverSet: R("ta036021-eld7/"),
  gedorePliersSet: R("ta031477-2309033/"),
  bahcoLongNose: R("ta031440-2223s150/"),
  kleinLongNose: R("ta031322-2036eins/"),
  insulatedList: buildUrl(
    "https://search.rakuten.co.jp/search/mall/%E7%B5%B6%E7%B8%81/?sid=426972",
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
    id: "ta019403-tzsw424s",
    name: "TRUSCO 絶縁ソケットレンチセット 6角 差込角12.7mm TZSW4-24S",
    use: "発泡トレイで員数確認しやすい。※1000V絶縁はハンドル部のみ・ボックス内部は非絶縁・他社互換なし（要確認）",
    url: URLS.truscoSocketSet,
  },
  {
    id: "ta040466-ztb311a",
    name: "KTC 絶縁工具セットA ZTB311A",
    use: "電気工事・整備・設備保全向けの国内メーカー絶縁工具セット（セット内容・絶縁範囲はメーカー仕様を確認）",
    url: URLS.ktcZtb311a,
  },
];

const STRIPPER_PLIERS: Prod[] = [
  {
    id: "ta030490-11045ins",
    name: "KLEIN 絶縁ケーブルストリッパー 180mm 11045INS",
    use: "単線10〜18AWGの切断・皮むき・ループ加工などに使え、IEC60900・ASTM F1505準拠と掲載（要確認）",
    url: URLS.kleinStripper,
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

const PLIERS_DRIVERS: Prod[] = [
  {
    id: "ta036021-eld7",
    name: "TONE 絶縁ドライバーセット ELD7",
    use: "電気・通信・自動車・太陽光発電などの電気工事向けと説明される絶縁ドライバーセット（要確認）",
    url: URLS.toneDriverSet,
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

const FAQ_ITEMS = [
  {
    q: "絶縁工具とは何ですか？",
    a: "感電や短絡のリスクに配慮が必要な電気関連作業で使うため、グリップや軸部などに絶縁処理が施された工具です。電気工事、制御盤作業、設備保全、EV・ハイブリッド車整備などで使用されます。",
  },
  {
    q: "絶縁工具と普通の工具は何が違いますか？",
    a: "普通の工具は金属部が露出したものが多く、電気関連作業では感電・短絡のリスクがあります。絶縁工具は、絶縁被覆や耐電圧試験、IEC60900/VDEなどの規格対応を確認して選ぶ点が異なります。",
  },
  {
    q: "1000V対応の絶縁工具ならどの作業にも使えますか？",
    a: "いいえ。1000V対応は重要な目安ですが、作業内容、電圧、絶縁範囲、工具の状態、資格、作業手順、保護具の有無を確認する必要があります。絶縁工具だけで安全が保証されるわけではありません。",
  },
  {
    q: "絶縁工具セットと単品工具はどちらを買うべきですか？",
    a: "初めて揃える場合や複数人で標準化したい場合はセットが便利です。圧着・ケーブルストリップ・特定サイズのスパナ作業など用途が明確な場合は、単品工具を追加すると現場に合いやすくなります。",
  },
  {
    q: "EV整備には絶縁工具が必要ですか？",
    a: "EVやハイブリッド車の高電圧系統に関わる作業では、社内基準・メーカー指定・資格・安全手順に従ったうえで、対応する絶縁工具を準備する必要があります。フルセットやドライバー・レンチ・ペンチ類が候補になります。",
  },
  {
    q: "絶縁ドライバーはどんな作業に使いますか？",
    a: "端子台、制御盤、分電盤、電気機器のねじ締め・取り外しなどに使用されます。TONEの絶縁ドライバーセットは、電気・通信・自動車・太陽光発電などの電気工事作業向けとして説明されています。",
  },
  {
    q: "絶縁工具は使用前に何を確認すべきですか？",
    a: "絶縁被覆の傷・割れ・剥がれ、工具本体の破損、汚れ、濡れ、絶縁範囲、規格表示を確認します。異常がある場合は使用を避け、交換を検討します。",
  },
  {
    q: "絶縁工具だけでなく一緒に確認すべき備品はありますか？",
    a: "絶縁手袋、検電器、絶縁マット、絶縁用保護具、防具、ロックアウト用品、作業標識、保管ケースなども合わせて確認すると、現場の安全管理に役立ちます。",
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

function ProductLink({ href, children }: { href: string; children?: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="inline-block rounded-md bg-gray-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-gray-700"
    >
      {children ?? "商品ページを見る"}
    </a>
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
          <span className="text-gray-700">絶縁工具セットの選び方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          絶縁工具セットの選び方｜電気工事・制御盤作業・EV整備で必要な工具一覧
        </h1>

        <p className="mb-6 text-sm text-gray-500">公開日：2026年7月9日／約15分で読めます</p>

        <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5 leading-relaxed">
          <p className="mb-3 font-bold">この記事の要点（先に結論）</p>
          <p className={cls.body}>
            絶縁工具セットは、電気工事・制御盤作業・設備保全・EV整備など、
            <strong>感電や短絡リスクに配慮が必要な作業</strong>
            で使う工具を一式揃えたい場合に検討されます。選ぶ際は、1000V絶縁仕様やIEC60900/VDEなどの規格、セット内容、絶縁範囲、作業に必要な工具の種類、持ち運びや員数管理のしやすさを確認することが大切です。
          </p>
          <p className={cls.body}>
            ただし、絶縁工具は作業を安全にするための
            <strong>補助的な工具</strong>
            であり、停電確認・検電・絶縁手袋などの保護具・有資格者による作業手順の代わりにはなりません。制御盤や配電盤、EV・蓄電池まわりの作業では、作業内容に合わせて絶縁ドライバー、絶縁ペンチ、絶縁レンチ、絶縁ソケット、ケーブルストリッパー、圧着工具を組み合わせて揃えるのが基本です。
          </p>
        </div>

        <ArticleImg
          src={IMG.hero}
          alt="電気工事や制御盤作業で使う絶縁工具セットを確認するイメージ"
        />

        <CTA href={URLS.insulatedList}>
          電気工事・設備保全・EV整備向けの絶縁工具を、絶縁工具一覧で確認する
        </CTA>

        <H2>絶縁工具とは？普通の工具との違い</H2>
        <ArticleImg
          src={IMG.comparison}
          alt="絶縁工具と通常工具の違いを比較するイメージ"
        />
        <H3>絶縁工具は感電・短絡リスクに配慮した作業用工具</H3>
        <p className={cls.body}>
          絶縁工具は、グリップや軸部などに絶縁処理が施され、感電や短絡のリスクに配慮が必要な電気関連作業で使う工具です。電気工事、制御盤作業、設備保全、EV・ハイブリッド車整備などで使用されます。
        </p>
        <H3>通常工具との違いは「絶縁被覆」「規格」「耐電圧試験」</H3>
        <p className={cls.body}>
          通常工具は金属部が露出したものが多く、電気関連作業では感電・短絡のリスクがあります。絶縁工具は、絶縁被覆や耐電圧試験、IEC60900/VDEなどの規格対応を確認して選ぶ点が異なります。
        </p>
        <H3>1000V絶縁仕様・IEC60900・VDEとは何か</H3>
        <p className={cls.body}>
          IEC60900は、活線または活線近接の状況で使う絶縁ハンドツールに関する規格で、適合品はAC1000V・DC1500Vまでに対応するとされています（VDEは同等の欧州系の試験・認証）。ただし規格や適合は製品・時期により異なるため、最新の公的情報・メーカー公式情報で確認してください。
        </p>
        <H3>絶縁工具があっても停電確認・検電・保護具は省略できない</H3>
        <p className={cls.body}>
          絶縁工具は感電リスクを下げるための補助であり、作業手順や保護具の代わりにはなりません。停電・検電・放電・ロックアウトの確認、絶縁手袋などの保護具、有資格者による作業が前提です。
        </p>

        <Caution title="⚠️ 電気作業の安全・法令について">
          <p>
            低圧・高圧の活線作業や活線近接作業には、労働安全衛生規則などに基づく絶縁用保護具・防具・活線作業用器具の使用や、作業者の資格・作業手順が求められます。
            <strong>絶縁工具があれば活線作業が安全になるわけではありません</strong>
            。作業前の停電・検電・放電・ロックアウト、絶縁手袋等の保護具の着用、有資格者による作業、社内規程・メーカー情報の確認を前提に進めてください。通電状態での作業は重大事故につながるおそれがあります。
          </p>
        </Caution>

        <H2>絶縁工具セットが必要になりやすい現場</H2>
        <ArticleImg
          src={IMG.controlPanel}
          alt="制御盤作業で絶縁ドライバーを使用するイメージ"
        />
        <H3>電気工事・配電盤・分電盤作業</H3>
        <p className={cls.body}>
          配電盤・分電盤・端子台まわりのねじ締めや配線作業で、絶縁ドライバーや絶縁ペンチが使われます。
        </p>
        <H3>工場の制御盤・設備保全</H3>
        <p className={cls.body}>
          制御盤・電源設備の点検・保全では、盤内のねじ・端子・ボルト作業に対応する絶縁工具を確認します。
        </p>
        <H3>EV・ハイブリッド車・蓄電池まわりの整備</H3>
        <ArticleImg
          src={IMG.evMaintenance}
          alt="EV整備で絶縁工具セットを準備するイメージ"
        />
        <p className={cls.body}>
          EV・ハイブリッド車の高電圧系統に関わる作業では、メーカー指定・資格・社内基準・安全手順に従ったうえで、対応する絶縁工具を準備します。
        </p>
        <H3>太陽光発電・非常用電源・電源設備</H3>
        <p className={cls.body}>
          太陽光発電や非常用電源、蓄電池まわりの作業も用途の一つです（専用工具が必要な作業は各機器の仕様・手順を確認）。太陽光発電のMC4コネクタ施工やPVケーブル加工に特化した工具選びは、
          <Link href="/articles/solar-pv-tool-set-selection" className="text-gray-900 underline hover:no-underline">
            太陽光発電用工具セットの選び方
          </Link>
          をあわせてご確認ください。本記事は絶縁工具全般、同記事は太陽光施工専用の工具を扱います。
        </p>
        <H3>通信設備・端子台・ケーブル加工</H3>
        <p className={cls.body}>
          端子台まわりのねじ作業や、ケーブルの被覆むき・圧着では、絶縁ドライバー・ストリッパー・圧着工具を使い分けます。電設一般のケーブル切断・圧着工具については、
          <Link href="/articles/cable-cutter-selection" className="text-gray-900 underline hover:no-underline">
            ケーブルカッターの選び方
          </Link>
          も参考にしてください。
        </p>

        <H2>絶縁工具セットと単品工具はどう使い分ける？</H2>
        <H3>初めて揃えるならセットで基本工具をまとめる</H3>
        <p className={cls.body}>
          これから揃える場合は、ドライバー・ペンチ・レンチなどの基本工具がまとまったセットが便利です。
        </p>
        <H3>作業内容が決まっているなら単品工具を追加する</H3>
        <p className={cls.body}>
          圧着、ケーブルストリップ、特定サイズのスパナ作業など、用途が明確なら単品工具を追加すると現場に合わせやすくなります。
        </p>
        <H3>複数人・複数拠点なら同じセットで標準化する</H3>
        <p className={cls.body}>
          複数人・複数拠点では、同じセットで統一すると教育・在庫・員数管理がしやすくなります。
        </p>
        <H3>工具の紛失防止にはケース・トレー付きセットが便利</H3>
        <p className={cls.body}>
          ケースや発泡トレー付きのセットは、持ち出し時の員数管理や欠品チェックがしやすくなります。
        </p>

        <CTA href={URLS.insulatedList}>
          セット・単品をまとめて、絶縁工具一覧で確認する
        </CTA>

        <H2>現場別・必要になりやすい絶縁工具一覧</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>現場</Th>
                <Th>必要になりやすい工具</Th>
                <Th>補足</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>電気工事向け</Td>
                <Td>絶縁ドライバー、絶縁ペンチ、ストリッパー、圧着工具</Td>
                <Td>配電盤・分電盤・端子台作業</Td>
              </tr>
              <tr>
                <Td>制御盤・配電盤向け</Td>
                <Td>絶縁ドライバー、絶縁スパナ、ソケット</Td>
                <Td>盤内のねじ・端子・ボルト作業</Td>
              </tr>
              <tr>
                <Td>EV整備・蓄電池向け</Td>
                <Td>フルセット、絶縁ドライバー/レンチ/ペンチ</Td>
                <Td>高電圧系は資格・社内基準・手順に従う</Td>
              </tr>
              <tr>
                <Td>圧着端子・ケーブル加工</Td>
                <Td>ストリッパー、圧着工具</Td>
                <Td>端子・スリーブに合う工具を選ぶ</Td>
              </tr>
              <tr>
                <Td>ボルト・ナット作業</Td>
                <Td>絶縁モンキー、片口スパナ、ソケット</Td>
                <Td>絶縁範囲・差込角を確認</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>電気工事向けの基本工具</H3>
        <p className={cls.body}>
          絶縁ドライバー・絶縁ペンチを中心に、ストリッパー・圧着工具を作業に応じて追加します。
        </p>
        <H3>制御盤・配電盤作業向けの工具</H3>
        <p className={cls.body}>
          盤内のねじ・端子・ボルト作業に対応する絶縁ドライバー・スパナ・ソケットを確認します。
        </p>
        <H3>EV整備・蓄電池作業向けの工具</H3>
        <p className={cls.body}>
          高電圧系に関わる作業は、資格・社内基準・メーカー指定・安全手順に従い、対応する絶縁工具を準備します。フルセットの活用も候補です。
        </p>
        <H3>圧着端子・ケーブル加工向けの工具</H3>
        <p className={cls.body}>
          絶縁被覆付端子・スリーブの圧着や被覆むきには、対応する圧着工具・ストリッパーを選びます。
        </p>
        <H3>ボルト・ナット作業向けのレンチ・ソケット</H3>
        <p className={cls.body}>
          ナット・ボルト作業には絶縁モンキー・片口スパナ・ソケットを、絶縁範囲と差込角を確認して選びます。
        </p>

        <H2>絶縁工具セットの選び方</H2>
        <H3>対応電圧・規格を確認する</H3>
        <p className={cls.body}>
          1000V絶縁仕様やIEC60900/VDEなどの規格表示を確認します。規格・適合は最新のメーカー情報で確認してください。
        </p>
        <H3>セット内容が作業に合っているか確認する</H3>
        <p className={cls.body}>
          自分の作業（ねじ・端子・圧着・ボルト・ケーブル加工）に必要な工具が入っているかを確認します。
        </p>
        <H3>ドライバー・ペンチ・スパナ・ソケットのバランスを見る</H3>
        <p className={cls.body}>
          セット内の工具の種類・サイズが偏っていないか、よく使うサイズが含まれるかを確認します。
        </p>
        <H3>絶縁範囲を確認する</H3>
        <p className={cls.body}>
          絶縁範囲は製品ごとに異なります。ハンドル部のみ絶縁で、先端やボックス内部は絶縁でない製品もあるため、どこまで絶縁されているかを必ず確認します。
        </p>
        <H3>ケースの有無・持ち運び・員数管理のしやすさを見る</H3>
        <p className={cls.body}>
          持ち出しが多い現場では、ケース・発泡トレー付きだと員数管理・欠品確認がしやすくなります。
        </p>
        <H3>破損時に単品で追加しやすいか確認する</H3>
        <p className={cls.body}>
          絶縁被覆の破損時に単品で補充できるか、入手性も確認しておくと運用が安定します。
        </p>

        <Caution>
          <p>
            <strong>絶縁範囲は製品ごとに異なります</strong>
            。たとえば絶縁ソケットレンチには、1000V絶縁がハンドル部のみで、ボックス（ソケット）内部は絶縁ではない製品や、他社品と互換性がない製品があります。「1000V対応」の表示だけで判断せず、どの部位がどこまで絶縁されているか、使用条件・適合を各商品ページとメーカー公式情報で確認してください。スペックや付属品・価格は変わる場合があります。
          </p>
        </Caution>

        <H2>作業別に見る絶縁工具の使い分け</H2>
        <ArticleImg
          src={IMG.cableTools}
          alt="絶縁ケーブルストリッパーと圧着工具のイメージ"
        />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>作業内容</Th>
                <Th>必要になりやすい工具</Th>
                <Th>対象商品</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>電線被覆のストリップ</Td>
                <Td>絶縁ケーブルストリッパー</Td>
                <Td>KLEIN 11045INS</Td>
              </tr>
              <tr>
                <Td>電線のつかみ・曲げ・切断</Td>
                <Td>絶縁ペンチ</Td>
                <Td>KLEIN D20009NEINS／BAHCO 2678V200</Td>
              </tr>
              <tr>
                <Td>ナット作業・サイズ可変</Td>
                <Td>絶縁モンキーレンチ</Td>
                <Td>TRUSCO TZMR200／BAHCO 8072VLT</Td>
              </tr>
              <tr>
                <Td>絶縁被覆付端子・スリーブの圧着</Td>
                <Td>圧着工具</Td>
                <Td>ニチフ NH32／TRUSCO TAP-6</Td>
              </tr>
              <tr>
                <Td>ソケット作業</Td>
                <Td>絶縁ソケットドライバー</Td>
                <Td>ボッシュ 1600A02NF3</Td>
              </tr>
              <tr>
                <Td>スパナ作業</Td>
                <Td>絶縁片口スパナ</Td>
                <Td>KNIPEX 980024／TRUSCO TZSS-14</Td>
              </tr>
              <tr>
                <Td>プライヤー・狭所作業</Td>
                <Td>絶縁プライヤー／ロングノーズ</Td>
                <Td>GEDORE 2309033／BAHCO 2223S150／KLEIN 2036EINS</Td>
              </tr>
              <tr>
                <Td>端子台・盤内ねじ作業</Td>
                <Td>絶縁ドライバー</Td>
                <Td>TONE ELD7</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>ねじ締め・端子台作業には絶縁ドライバー</H3>
        <ProductGrid items={[PLIERS_DRIVERS[0]]} />
        <H3>電線のつかみ・曲げ・切断には絶縁ペンチ</H3>
        <ProductGrid items={STRIPPER_PLIERS.slice(1)} />
        <H3>被覆むきには絶縁ケーブルストリッパー</H3>
        <ProductGrid items={[STRIPPER_PLIERS[0]]} />
        <H3>端子圧着には圧着工具</H3>
        <ProductGrid items={CRIMPING} />
        <H3>ナット・ボルト作業には絶縁レンチ・スパナ・ソケット</H3>
        <ProductGrid items={WRENCHES} />
        <H3>狭所作業にはロングノーズプライヤー</H3>
        <ProductGrid items={PLIERS_DRIVERS.slice(1)} />

        <H2>今回確認したい絶縁工具セット・単品工具</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>商品</Th>
                <Th>向いている用途</Th>
                <Th>確認ポイント</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>Tech-EV 絶縁工具セット フル 27点</Td>
                <Td>EV・HV整備、電気設備作業、一式揃えたい現場</Td>
                <Td>セット内容・絶縁範囲を確認</Td>
              </tr>
              <tr>
                <Td>KNIPEX 002120 ツールケース 20点</Td>
                <Td>電気工事・設備メンテの持ち出し用</Td>
                <Td>ケース入り。各工具の絶縁範囲を確認</Td>
              </tr>
              <tr>
                <Td>KNIPEX 絶縁工具セット 26点 989912</Td>
                <Td>電気設備工事・制御盤・ボルトナット作業</Td>
                <Td>VDE絶縁テスト済み工具で構成と案内</Td>
              </tr>
              <tr>
                <Td>TRUSCO 絶縁ソケットレンチセット TZSW4-24S</Td>
                <Td>ボルト・ナット作業、設備メンテ</Td>
                <Td>1000V絶縁はハンドル部のみ・ボックス内部は非絶縁・他社互換なし</Td>
              </tr>
              <tr>
                <Td>KTC 絶縁工具セットA ZTB311A</Td>
                <Td>電気工事・整備・設備保全</Td>
                <Td>国内メーカーで揃えたい現場向け</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H3>フルセットで揃えたい場合</H3>
        <ProductGrid items={[INSULATED_SETS[0], INSULATED_SETS[4]]} />

        <H3>EV・電気設備向けに揃えたい場合</H3>
        <ProductGrid items={[INSULATED_SETS[0], INSULATED_SETS[1]]} />

        <H3>制御盤・盤内作業向けに追加したい工具</H3>
        <ProductGrid items={[INSULATED_SETS[2], PLIERS_DRIVERS[0]]} />

        <H3>ケーブル加工・圧着作業向けに追加したい工具</H3>
        <ProductGrid items={[STRIPPER_PLIERS[0], ...CRIMPING]} />

        <H3>ボルト・ナット作業向けに追加したい工具</H3>
        <ProductGrid items={[INSULATED_SETS[3], WRENCHES[0], WRENCHES[1]]} />

        <CTA href={URLS.insulatedList}>
          用途に合う絶縁工具を、絶縁工具一覧で確認する
        </CTA>

        <H2>絶縁工具選びでよくある失敗</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>失敗</Th>
                <Th>なぜ問題か</Th>
                <Th>対策</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>1000V対応だけを見て絶縁範囲を確認していない</Td>
                <Td>作業内容や絶縁部位に合わない可能性</Td>
                <Td>対応電圧・規格・絶縁範囲を確認</Td>
              </tr>
              <tr>
                <Td>通常工具と混在させて使う</Td>
                <Td>絶縁工具の意味が薄れる</Td>
                <Td>絶縁工具用ケースで分けて管理</Td>
              </tr>
              <tr>
                <Td>被覆の傷や割れを見落とす</Td>
                <Td>絶縁性能低下のおそれ</Td>
                <Td>使用前点検をチェックリスト化</Td>
              </tr>
              <tr>
                <Td>作業に必要な圧着・ストリップ工具が不足</Td>
                <Td>端子・ケーブル作業ができない</Td>
                <Td>作業別に単品追加</Td>
              </tr>
              <tr>
                <Td>ケース管理ができず欠品に気づかない</Td>
                <Td>現場で作業が止まる</Td>
                <Td>トレー付きセットで員数管理</Td>
              </tr>
              <tr>
                <Td>EV整備用なのに工具構成を確認していない</Td>
                <Td>高電圧系作業に必要な工具が不足の可能性</Td>
                <Td>EV向けセット・社内基準を確認</Td>
              </tr>
              <tr>
                <Td>絶縁手袋・検電器・防具を別管理にしている</Td>
                <Td>工具だけでは作業管理が不十分</Td>
                <Td>保護具・測定器も併せて確認</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H2>法人担当者向け・絶縁工具の購入前チェックリスト</H2>
        <ArticleImg
          src={IMG.checklist}
          alt="法人担当者が絶縁工具の備品リストを確認するイメージ"
        />
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
                <Td>作業内容</Td>
                <Td>電気工事、制御盤、EV整備、蓄電池、設備保全のどれか</Td>
              </tr>
              <tr>
                <Td>作業電圧・資格</Td>
                <Td>作業電圧・社内規程・作業資格を確認したか</Td>
              </tr>
              <tr>
                <Td>規格</Td>
                <Td>1000V絶縁仕様・IEC60900/VDEなどを確認したか</Td>
              </tr>
              <tr>
                <Td>絶縁範囲</Td>
                <Td>どの部位がどこまで絶縁されているか確認したか</Td>
              </tr>
              <tr>
                <Td>工具種類・員数</Td>
                <Td>ドライバー・ペンチ・レンチ・スパナ・ソケット・圧着の必要数</Td>
              </tr>
              <tr>
                <Td>単品追加</Td>
                <Td>セットで足りない工具を単品追加できるか</Td>
              </tr>
              <tr>
                <Td>ケース・員数管理</Td>
                <Td>持ち出し用ケース・トレーで員数管理できるか</Td>
              </tr>
              <tr>
                <Td>使用前点検</Td>
                <Td>被覆の傷・割れなどの点検ルールを決めているか</Td>
              </tr>
              <tr>
                <Td>交換基準</Td>
                <Td>破損時の交換基準を決めているか</Td>
              </tr>
              <tr>
                <Td>関連備品</Td>
                <Td>絶縁手袋・検電器・絶縁マット・防具も確認したか</Td>
              </tr>
              <tr>
                <Td>最終確認</Td>
                <Td>仕様・適合を商品ページ・メーカー情報で確認したか</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <Caution title="⚠️ EV・高電圧作業の注意">
          <p>
            EV・ハイブリッド車の高電圧系統に関わる作業は、感電など重大な危険を伴います。
            <strong>メーカー指定の手順、作業資格、社内基準、安全手順に従い</strong>
            、対応する絶縁工具・保護具を用いてください。工具がそろっていても、有資格者による作業・停電/検電・保護具の併用が前提です。判断に迷う作業は、専門の担当者や有資格者に確認してください。
          </p>
        </Caution>

        <H2>絶縁工具に関するFAQ</H2>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q}>
              <h3 className={cls.faqQ}>Q. {item.q}</h3>
              <p className={cls.body}>{item.a}</p>
            </div>
          ))}
        </div>

        <H2>絶縁工具一覧から現場に合う商品を確認する</H2>
        <p className={cls.body}>
          絶縁工具は、作業内容・対応電圧・規格・絶縁範囲・保管方法を確認して選ぶことが大切です。まずセットで基本工具を揃え、圧着・ケーブル加工・スパナ・ソケットなど作業に応じて単品を追加し、ケース・員数管理・使用前点検のルールを整えると、現場で使いやすくなります。ただし絶縁工具は補助であり、停電確認・検電・保護具・有資格者による作業手順の代わりにはなりません。電気工事・制御盤作業・EV整備・設備保全に必要な工具をまとめて確認したい方は、以下の一覧ページをご覧ください。
        </p>
        <FinalCTA href={URLS.insulatedList}>
          絶縁工具一覧を見る（電気工事・制御盤・EV整備・設備保全向け）
        </FinalCTA>
        <FinalCTA href={URLS.truscoList}>
          トラスコ中山商品一覧を見る
        </FinalCTA>
      </main>
      <SiteFooter />
    </>
  );
}
