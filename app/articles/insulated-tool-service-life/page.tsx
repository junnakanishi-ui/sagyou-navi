import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "insulated-tool-service-life";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/insulated-tools-expiration-inspection-hero.jpg`,
  replacementSigns: `${ARTICLE_IMG}/insulated-tool-damage-inspection.jpg`,
  preUseInspection: `${ARTICLE_IMG}/insulated-tools-pre-use-checklist.jpg`,
  storage: `${ARTICLE_IMG}/insulated-tools-storage-case-management.jpg`,
  managementLedger: `${ARTICLE_IMG}/insulated-tools-procurement-management-checklist.jpg`,
  replacementChecklist: `${ARTICLE_IMG}/insulated-tools-replacement-selection.jpg`,
};

export const metadata: Metadata = {
  title:
    "絶縁工具に使用期限はある？交換時期・点検基準・買い替え判断をわかりやすく解説｜作業用品ナビ",
  description:
    "絶縁工具の使用期限は一律の年数だけで判断せず、メーカー情報・社内規定・使用頻度・保管環境・傷やひび割れ・被覆剥がれ・表示消えなどの点検結果で交換を判断します。点検基準、管理台帳、単品交換とセット更新の使い分けまで解説します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "絶縁工具に使用期限はある？交換時期・点検基準・買い替え判断をわかりやすく解説",
    description:
      "絶縁工具の使用期限は一律の年数だけで判断せず、メーカー情報・社内規定・使用頻度・保管環境・傷やひび割れ・被覆剥がれ・表示消えなどの点検結果で交換を判断します。点検基準、管理台帳、単品交換とセット更新の使い分けまで解説します。",
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
    name: "Tech-EV 絶縁工具セット フル27点",
    use: "EV・電気系作業向けフルセット。ケース付きで員数管理・点検に便利（セット内容・絶縁範囲は要確認）",
    url: URLS.techEvFull,
  },
  {
    id: "ta040487-002120",
    name: "KNIPEX ツールケース20点セット",
    use: "ケース入りセット。保管・持ち出し・欠品確認に向く（各工具の絶縁範囲は要確認）",
    url: URLS.knipex002120,
  },
  {
    id: "ta034163-989912",
    name: "KNIPEX 絶縁工具セット26点",
    use: "複数工具の一括更新・セット管理向け（構成・絶縁範囲は要確認）",
    url: URLS.knipex989912,
  },
  {
    id: "ta040466-ztb311a",
    name: "KTC 絶縁工具セットA",
    use: "電気工事・整備・設備保全向けの国内メーカーセット（要確認）",
    url: URLS.ktcZtb311a,
  },
];

const DRIVERS_PLIERS: Prod[] = [
  {
    id: "ta036021-eld7",
    name: "TONE 絶縁ドライバーセット ELD7",
    use: "絶縁ドライバーの単品交換・補充向け（絶縁範囲は要確認）",
    url: URLS.toneDriverSet,
  },
  {
    id: "ta035625-d20009neins",
    name: "KLEIN 強力型絶縁ペンチ",
    use: "絶縁ペンチの交換候補（絶縁範囲・使用条件は要確認）",
    url: URLS.kleinPliers,
  },
  {
    id: "ta031571-2678v200",
    name: "BAHCO 絶縁ペンチ",
    use: "絶縁ペンチの交換候補（要確認）",
    url: URLS.bahcoPliers,
  },
  {
    id: "ta031477-2309033",
    name: "GEDORE VDE絶縁プライヤーセット",
    use: "プライヤー類の交換・補充向け（要確認）",
    url: URLS.gedorePliersSet,
  },
  {
    id: "ta031440-2223s150",
    name: "BAHCO 絶縁ロングノーズプライヤー",
    use: "狭所作業用プライヤーの交換候補（要確認）",
    url: URLS.bahcoLongNose,
  },
  {
    id: "ta031322-2036eins",
    name: "KLEIN 絶縁ロングノーズプライヤー",
    use: "狭所作業用プライヤーの交換候補（要確認）",
    url: URLS.kleinLongNose,
  },
];

const WRENCHES_SOCKETS: Prod[] = [
  {
    id: "ta040199-tzmr200",
    name: "TRUSCO 絶縁モンキーレンチ",
    use: "モンキーレンチの交換候補（要確認）",
    url: URLS.truscoMonkey,
  },
  {
    id: "ta033465-8072vlt",
    name: "BAHCO 1000V完全絶縁モンキーレンチ",
    use: "モンキーレンチの交換候補（要確認）",
    url: URLS.bahcoMonkey,
  },
  {
    id: "ta034130-980024",
    name: "KNIPEX 絶縁片口スパナ 24mm",
    use: "スパナの交換候補（要確認）",
    url: URLS.knipexSpanner24,
  },
  {
    id: "ta019397-tzss14",
    name: "TRUSCO 絶縁片口スパナ 14mm",
    use: "スパナの交換候補（要確認）",
    url: URLS.truscoSpanner14,
  },
  {
    id: "ta019403-tzsw424s",
    name: "TRUSCO 絶縁ソケットレンチセット",
    use: "ソケット作業用の交換・更新候補（絶縁範囲は要確認）",
    url: URLS.truscoSocketSet,
  },
  {
    id: "ta030929-1600a02nf3",
    name: "ボッシュ 絶縁ソケットドライバー",
    use: "ソケットドライバーの交換候補（要確認）",
    url: URLS.boschSocketDriver,
  },
];

const CRIMPING_STRIPPER: Prod[] = [
  {
    id: "ta030490-11045ins",
    name: "KLEIN 絶縁ケーブルストリッパー",
    use: "ケーブル加工用工具の交換候補（要確認）",
    url: URLS.kleinStripper,
  },
  {
    id: "ta037960-nh32",
    name: "ニチフ 絶縁被覆付圧着端子・スリーブ用",
    use: "圧着工具の交換候補（適合端子は要確認）",
    url: URLS.nichifuNh32,
  },
  {
    id: "ta015455-tap6",
    name: "TRUSCO 圧着ペンチ 絶縁端子用",
    use: "圧着工具の交換候補（要確認）",
    url: URLS.truscoTap6,
  },
];

const MAINT_SETS: Prod[] = [
  {
    id: "ta041904-tsa350sv",
    name: "TONE 整備用工具セット 72点 シルバー",
    use: "通常整備用（絶縁工具の代用品ではない）。電気作業以外の整備向け",
    url: URLS.setTsa350sv,
  },
  {
    id: "ta041903-tsa350bk",
    name: "TONE 整備用工具セット 72点 マットブラック",
    use: "通常整備用。絶縁工具とは別管理がおすすめ",
    url: URLS.setTsa350bk,
  },
  {
    id: "ta041951-tsx950bk",
    name: "TONE 整備用工具セット 86点",
    use: "通常整備用の大型セット（絶縁工具とは用途が異なる）",
    url: URLS.setTsx950bk,
  },
  {
    id: "ta041899-tsa3331",
    name: "TONE 整備用工具セット オートメカニック用",
    use: "自動車整備向けの通常工具セット",
    url: URLS.setTsa3331,
  },
  {
    id: "ta041895-tsa3120",
    name: "TONE 整備用工具セット 43pcs",
    use: "コンパクトな通常整備用セット",
    url: URLS.setTsa3120,
  },
  {
    id: "ta041933-tss4331bk",
    name: "TONE 整備用工具セット マットブラック",
    use: "通常整備用。絶縁工具と混在させない管理が望ましい",
    url: URLS.setTss4331bk,
  },
];

const FAQ_ITEMS = [
  {
    q: "絶縁工具に使用期限はありますか？",
    a: "すべての製品に共通する一律の使用期限（年数）だけで判断するものではありません。メーカー情報・社内規定・使用頻度・保管環境・使用前点検の結果をもとに、使用を続けるか交換するかを判断します。",
  },
  {
    q: "絶縁工具は何年で交換すべきですか？",
    a: "一律に「何年」とは言い切れません。年数の目安以上に、傷・ひび割れ・被覆剥がれ・表示消えなどの状態を点検して判断することが重要です。メーカーの推奨や社内規定も確認してください。",
  },
  {
    q: "傷が少しある絶縁工具は使えますか？",
    a: "絶縁被覆の傷・ひび割れ・剥がれは絶縁性能低下のおそれがあります。小さな傷でも軽視せず、状態によっては使用を避けて交換を検討してください。判断に迷う場合は無理に使わないことが大切です。",
  },
  {
    q: "1000V表示が消えた工具は使えますか？",
    a: "表示・刻印が消えて仕様が確認できない工具は、絶縁仕様が判別できないため、電気作業での使用は避けて交換を検討します。",
  },
  {
    q: "絶縁工具セットはまとめて買い替えるべきですか？",
    a: "1本だけ劣化なら単品交換、複数工具の劣化や使用履歴が不明な場合はセット更新が検討しやすいです。EV・制御盤・設備保全ではケース付きセットで一式管理すると点検しやすくなります。",
  },
  {
    q: "絶縁工具と通常工具は一緒に保管してよいですか？",
    a: "取り違え防止と傷防止のため、分けて管理することをおすすめします。通常整備用工具は絶縁工具の代用品ではないため、用途で区別して保管・使用してください。",
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
      <main className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <span>選び方ガイド</span>
          <span className="mx-1">/</span>
          <span className="text-gray-700">絶縁工具の使用期限・交換時期</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          絶縁工具に使用期限はある？交換時期・点検基準・買い替え判断をわかりやすく解説
        </h1>

        <p className="mb-6 text-sm text-gray-500">公開日：2026年7月10日／約15分で読めます</p>

        <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5 leading-relaxed">
          <p className="mb-3 font-bold">この記事の要点（先に結論）</p>
          <p className={cls.body}>
            絶縁工具の使用期限は、
            <strong>すべての製品に共通する一律の年数だけで判断するものではありません</strong>
            。メーカーの取扱説明、規格表示、使用頻度、保管環境、工具の傷・ひび割れ・汚れ・被覆剥がれ、使用前点検の結果をもとに、使用を続けるか交換するかを判断します。
          </p>
          <p className={cls.body}>
            絶縁工具は安全対策の一部であり、停電確認・検電・ロックアウト・保護具・作業資格・社内手順の代わりにはなりません。
          </p>
          <p className={cls.body}>
            <strong>傷・ひび割れ・被覆剥がれ・金属部露出・表示消えがある場合は、使用を避けて交換を検討</strong>
            してください。
          </p>
        </div>

        <ArticleImg
          src={IMG.hero}
          alt="絶縁工具の状態を点検して交換を判断するイメージ"
        />

        <CTA href={URLS.insulatedList}>
          絶縁工具一覧を見る（買い替え・単品交換・セット更新）
        </CTA>

        <H2>絶縁工具に使用期限はある？</H2>
        <H3>一律の「何年で交換」とは言い切れない理由</H3>
        <p className={cls.body}>
          絶縁工具は、製品・使用頻度・保管環境によって劣化の進み方が異なるため、「一律で何年」と言い切ることはできません。年数だけでなく状態で判断します。
        </p>
        <H3>メーカー指定・社内規定・使用環境を確認する</H3>
        <p className={cls.body}>
          まずはメーカーの取扱説明・推奨、社内規定、実際の使用環境（頻度・汚れ・温湿度）を確認します。
        </p>
        <H3>使用期限よりも「使用可否の点検」が重要</H3>
        <p className={cls.body}>
          年数の目安以上に、使用前の点検で傷・ひび割れ・被覆剥がれ・表示消えなどを確認し、使用可否を判断することが重要です。
        </p>
        <H3>古い工具を使い続けるリスク</H3>
        <p className={cls.body}>
          劣化した絶縁工具を使い続けると、絶縁性能が低下し、感電・短絡のリスクにつながるおそれがあります。
        </p>
        <p className={cls.body}>
          絶縁工具の基礎（とは？・規格・普通の工具との違い）を知りたい方は、
          <Link
            href="/articles/insulated-tool-basics"
            className="text-gray-900 underline hover:no-underline"
          >
            絶縁工具とは？の解説記事
          </Link>
          もあわせてご覧ください。
        </p>

        <Caution title="⚠️ 「使用期限内なら安全」ではありません">
          <p>
            「○年使えるから大丈夫」「使用期限内なら安全」という判断はできません。
            <strong>絶縁工具があれば活線作業をしてよい、という意味でもありません</strong>
            。電気作業は、有資格者・教育済みの作業者が社内手順に従って行うことが前提です。絶縁工具は安全対策の一部であり、停電確認・検電・放電・ロックアウト・保護具・作業資格・社内手順の代わりにはなりません。使用可否は、年数ではなくメーカー情報・社内規定・使用前点検の結果で判断してください。
          </p>
        </Caution>

        <H2>絶縁工具の交換時期を判断するポイント</H2>
        <ArticleImg
          src={IMG.replacementSigns}
          alt="絶縁被覆の傷・ひび割れ・剥がれを確認するイメージ"
        />
        <p className={cls.body}>次のような状態がある場合は、使用を避けて交換を検討します。</p>
        <H3>絶縁被覆に傷・ひび割れがある</H3>
        <p className={cls.body}>被覆の傷・ひび割れは絶縁性能低下のおそれがあります。</p>
        <H3>被覆が剥がれて金属部が見える</H3>
        <p className={cls.body}>被覆が剥がれて金属部が露出している場合は使用しません。</p>
        <H3>油・薬品・溶剤・熱で変質している</H3>
        <p className={cls.body}>
          油・薬品・溶剤・熱で被覆が変質・べたつき・硬化している場合は交換を検討します。
        </p>
        <H3>焦げ・変色・溶けがある</H3>
        <p className={cls.body}>
          焦げ・変色・溶けは過熱やアーク等の痕跡の可能性があり、使用を避けます。
        </p>
        <H3>1000V表示・規格表示が読めない</H3>
        <p className={cls.body}>
          1000V表示・規格表示・刻印が消えて確認できない場合は、仕様が判別できないため交換を検討します。
        </p>
        <H3>落下・衝撃・過負荷使用の履歴がある</H3>
        <p className={cls.body}>
          落下・強い衝撃・過負荷の履歴がある工具は、外観に問題がなくても点検・交換を検討します。
        </p>
        <H3>先端・刃先・可動部が摩耗している</H3>
        <p className={cls.body}>
          先端・刃先・可動部の摩耗やガタは、作業性・安全性に影響するため確認します。
        </p>

        <H2>絶縁工具の使用前点検チェックリスト</H2>
        <ArticleImg
          src={IMG.preUseInspection}
          alt="使用前点検を行うイメージ"
        />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>点検項目</Th>
                <Th>使い続けてもよい可能性</Th>
                <Th>交換を検討すべき状態</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>絶縁被覆</Td>
                <Td>傷・割れ・剥がれがない</Td>
                <Td>傷、ひび割れ、剥がれ、浮きがある</Td>
              </tr>
              <tr>
                <Td>金属部</Td>
                <Td>変形・破損がない</Td>
                <Td>変形、欠け、著しい摩耗がある</Td>
              </tr>
              <tr>
                <Td>先端・刃先</Td>
                <Td>作業に支障がない</Td>
                <Td>先端が潰れている、刃が欠けている</Td>
              </tr>
              <tr>
                <Td>表示・刻印</Td>
                <Td>1000V表示・規格表示が読める</Td>
                <Td>表示が消えて確認できない</Td>
              </tr>
              <tr>
                <Td>汚れ</Td>
                <Td>軽い汚れで清掃可能</Td>
                <Td>油・薬品・溶剤で変質している</Td>
              </tr>
              <tr>
                <Td>使用履歴</Td>
                <Td>管理台帳で確認できる</Td>
                <Td>購入日・点検履歴が不明</Td>
              </tr>
              <tr>
                <Td>保管状態</Td>
                <Td>専用ケースで保管</Td>
                <Td>工具箱内でぶつかり傷が多い</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>外観の点検</H3>
        <p className={cls.body}>全体の変形・破損・汚れ・サビの有無を確認します。</p>
        <H3>絶縁被覆の点検</H3>
        <p className={cls.body}>被覆の傷・ひび割れ・剥がれ・浮き・べたつきを確認します。</p>
        <H3>可動部・刃先・先端の点検</H3>
        <p className={cls.body}>刃の欠け、先端の潰れ、支点のガタ、可動部の動きを確認します。</p>
        <H3>表示・刻印の点検</H3>
        <p className={cls.body}>1000V表示・規格表示・刻印が読めるかを確認します。</p>
        <H3>保管状態・使用履歴の確認</H3>
        <p className={cls.body}>保管方法、購入日・点検履歴（管理台帳）を確認します。</p>

        <Caution>
          <p>
            使用前点検で一つでも「交換を検討すべき状態」に当てはまる場合は、使用を避けて交換を検討してください。判断に迷う場合は、無理に使わず、メーカー情報・社内規定・有資格者や管理者の判断を優先します。点検は、有資格者・教育済みの作業者が行い、停電確認・検電・保護具などの基本手順とあわせて実施してください。
          </p>
        </Caution>

        <H2>工具別に見る交換判断の目安</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>工具</Th>
                <Th>見るべきポイント</Th>
                <Th>買い替え導線</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>絶縁ドライバー</Td>
                <Td>先端摩耗、軸の被覆、表示消え</Td>
                <Td>TONE 絶縁ドライバーセット</Td>
              </tr>
              <tr>
                <Td>絶縁ペンチ</Td>
                <Td>グリップ被覆、刃の欠け、支点のガタ</Td>
                <Td>KLEIN・BAHCO 絶縁ペンチ</Td>
              </tr>
              <tr>
                <Td>絶縁ケーブルストリッパー</Td>
                <Td>刃部、調整部、被覆</Td>
                <Td>KLEIN 絶縁ケーブルストリッパー</Td>
              </tr>
              <tr>
                <Td>絶縁モンキーレンチ</Td>
                <Td>可動あご、被覆、ガタつき</Td>
                <Td>TRUSCO・BAHCO 絶縁モンキーレンチ</Td>
              </tr>
              <tr>
                <Td>絶縁スパナ</Td>
                <Td>口部の摩耗、被覆剥がれ</Td>
                <Td>KNIPEX・TRUSCO 絶縁片口スパナ</Td>
              </tr>
              <tr>
                <Td>絶縁ソケット</Td>
                <Td>差込部、ソケット部、被覆</Td>
                <Td>TRUSCO 絶縁ソケットレンチセット</Td>
              </tr>
              <tr>
                <Td>圧着工具</Td>
                <Td>圧着部、ラチェット、グリップ</Td>
                <Td>ニチフ・TRUSCO 圧着工具</Td>
              </tr>
              <tr>
                <Td>絶縁工具セット</Td>
                <Td>欠品、複数工具の劣化、履歴不明</Td>
                <Td>Tech-EV・KNIPEX・KTC セット</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H3>絶縁ドライバー</H3>
        <ProductGrid items={[DRIVERS_PLIERS[0]]} />

        <H3>絶縁ペンチ・プライヤー</H3>
        <ProductGrid items={DRIVERS_PLIERS.slice(1)} />

        <H3>絶縁ケーブルストリッパー・圧着工具</H3>
        <ProductGrid items={CRIMPING_STRIPPER} />

        <H3>絶縁モンキーレンチ・スパナ・ソケット</H3>
        <ProductGrid items={WRENCHES_SOCKETS} />

        <H3>絶縁工具セット</H3>
        <ProductGrid items={INSULATED_SETS} />

        <CTA href={URLS.insulatedList}>交換用の絶縁工具を絶縁工具一覧で探す</CTA>

        <H2>絶縁工具を長く安全に使うための保管方法</H2>
        <ArticleImg
          src={IMG.storage}
          alt="絶縁工具を専用ケースで保管するイメージ"
        />
        <H3>直射日光・高温多湿を避ける</H3>
        <p className={cls.body}>
          直射日光・高温多湿は被覆の劣化を早めるおそれがあるため避けます。
        </p>
        <H3>油・薬品・溶剤が付着しないようにする</H3>
        <p className={cls.body}>
          油・薬品・溶剤の付着は被覆の変質につながるため、付着しない環境で保管します。
        </p>
        <H3>工具同士をぶつけない収納にする</H3>
        <p className={cls.body}>
          工具同士がぶつかると被覆に傷がつくため、仕切りやトレーで分けて収納します。
        </p>
        <H3>専用ケースで一式管理する</H3>
        <p className={cls.body}>
          ケース・発泡トレー付きのセットは、傷防止と員数管理・欠品確認がしやすくなります。
        </p>
        <ProductGrid
          items={INSULATED_SETS.filter((p) =>
            ["ta040487-002120", "ta041849-tevsetfull"].includes(p.id)
          )}
        />
        <H3>通常整備工具と分けて管理する</H3>
        <p className={cls.body}>
          通常整備工具と絶縁工具を混在させると取り違えのおそれがあります。分けて管理します。
        </p>

        <H2>単品交換とセット更新はどう使い分ける？</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>状況</Th>
                <Th>推奨対応</Th>
                <Th>商品導線</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>1本だけ傷んでいる</Td>
                <Td>単品工具を交換</Td>
                <Td>絶縁工具単品</Td>
              </tr>
              <tr>
                <Td>複数工具に劣化がある</Td>
                <Td>セット更新を検討</Td>
                <Td>絶縁工具セット</Td>
              </tr>
              <tr>
                <Td>購入日・使用履歴が不明</Td>
                <Td>セットごと更新を検討</Td>
                <Td>絶縁工具セット</Td>
              </tr>
              <tr>
                <Td>EV・制御盤用に一式管理したい</Td>
                <Td>ケース付きセットが便利</Td>
                <Td>Tech-EV・KNIPEXセット</Td>
              </tr>
              <tr>
                <Td>通常整備と電気作業を分けたい</Td>
                <Td>通常工具も別管理</Td>
                <Td>整備用工具一覧</Td>
              </tr>
              <tr>
                <Td>トラスコ品でまとめたい</Td>
                <Td>メーカー・カテゴリで確認</Td>
                <Td>トラスコ中山商品一覧</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>1本だけ劣化した場合は単品交換</H3>
        <p className={cls.body}>1本だけ劣化している場合は、該当工具を単品で交換します。</p>
        <H3>複数工具が古い場合はセット更新</H3>
        <p className={cls.body}>
          複数工具が古い・劣化している場合は、セットでの更新を検討します。
        </p>
        <ProductGrid
          items={INSULATED_SETS.filter((p) =>
            ["ta034163-989912", "ta040466-ztb311a"].includes(p.id)
          )}
        />
        <H3>工具の使用履歴が不明な場合は更新を検討</H3>
        <p className={cls.body}>
          購入日・点検履歴が不明な工具は、安全側に立って更新を検討します。
        </p>
        <H3>EV・制御盤・設備保全ではセット管理がしやすい</H3>
        <p className={cls.body}>
          EV整備・制御盤・設備保全では、ケース付きセットで一式管理すると点検・員数管理がしやすくなります。
        </p>
        <ProductGrid
          items={[
            INSULATED_SETS[0],
            WRENCHES_SOCKETS.find((p) => p.id === "ta019403-tzsw424s")!,
          ]}
        />
        <p className={cls.body}>
          セットの選び方・現場別の比較を詳しく知りたい方は、
          <Link
            href="/articles/insulated-tool-set-selection"
            className="text-gray-900 underline hover:no-underline"
          >
            絶縁工具セットの選び方
          </Link>
          もあわせてご覧ください。
        </p>
        <H3>通常整備用工具との使い分けも重要</H3>
        <p className={cls.body}>
          通常整備用工具は絶縁工具の代用品ではありません。電気作業には絶縁工具、それ以外の整備には通常工具と、用途に応じて使い分けます。
        </p>
        <CTA href={URLS.maintList}>整備用工具一覧を見る</CTA>

        <H2>法人向け｜絶縁工具の管理台帳を作る方法</H2>
        <ArticleImg
          src={IMG.managementLedger}
          alt="絶縁工具の管理台帳を記録するイメージ"
        />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>台帳項目</Th>
                <Th>記録内容</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>工具名・品番</Td>
                <Td>工具の名称・型番・メーカー</Td>
              </tr>
              <tr>
                <Td>購入日</Td>
                <Td>導入・購入年月日</Td>
              </tr>
              <tr>
                <Td>使用者・保管場所</Td>
                <Td>使用者、保管場所・ケース番号</Td>
              </tr>
              <tr>
                <Td>点検日・点検者</Td>
                <Td>点検実施日と点検者</Td>
              </tr>
              <tr>
                <Td>状態</Td>
                <Td>点検結果（良／要注意／交換）</Td>
              </tr>
              <tr>
                <Td>交換予定・廃棄理由</Td>
                <Td>交換予定時期、廃棄した理由</Td>
              </tr>
              <tr>
                <Td>セット欠品確認</Td>
                <Td>セット品の員数・欠品の有無</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>工具名・品番・購入日を記録する</H3>
        <p className={cls.body}>
          工具名・品番・メーカー・購入日を記録し、個体を識別できるようにします。
        </p>
        <H3>使用者・保管場所を決める</H3>
        <p className={cls.body}>使用者・保管場所・ケース番号を決めて、所在を管理します。</p>
        <H3>点検日・点検者・状態を記録する</H3>
        <p className={cls.body}>点検日・点検者・状態（良／要注意／交換）を記録します。</p>
        <H3>交換予定・廃棄理由を残す</H3>
        <p className={cls.body}>交換予定時期や廃棄理由を残し、判断の履歴を共有します。</p>
        <H3>セット品は欠品確認も行う</H3>
        <p className={cls.body}>セット品は員数・欠品を確認し、不足があれば補充・更新します。</p>

        <H2>絶縁工具を使うときに避けたい危険な勘違い</H2>
        <H3>使用期限内なら必ず安全、ではない</H3>
        <p className={cls.body}>
          年数の目安内でも、傷・劣化があれば安全とはいえません。状態の点検が優先です。
        </p>
        <H3>1000V対応ならどんな作業でも使える、ではない</H3>
        <p className={cls.body}>
          1000V表示は目安であり、作業内容・電圧・絶縁範囲・工具の状態を確認する必要があります。
        </p>
        <H3>絶縁工具があれば活線作業してよい、ではない</H3>
        <p className={cls.body}>
          絶縁工具があっても、活線作業を安易に行ってよいわけではありません。停電確認・検電・保護具・作業手順が前提です。
        </p>
        <H3>ゴムグリップ付き工具を絶縁工具と判断しない</H3>
        <p className={cls.body}>
          樹脂・ゴム風のグリップだけでは絶縁工具とはいえません。規格表示・刻印を確認します。
        </p>
        <H3>傷や汚れを軽視しない</H3>
        <p className={cls.body}>
          小さな傷や汚れでも、絶縁性能や作業安全に影響する場合があります。軽視しないことが大切です。
        </p>

        <Caution title="⚠️ 危険な勘違いに注意">
          <p>
            「使用期限内なら必ず安全」「1000V対応ならどんな作業でも使える」「絶縁工具があれば活線作業してよい」は、いずれも
            <strong>誤った判断</strong>
            です。また、
            <strong>
              ゴムグリップ付き工具は絶縁工具ではなく、通常整備用工具は絶縁工具の代用品にもなりません
            </strong>
            。電気作業は有資格者・教育済み作業者が社内手順に従い、停電確認・検電・ロックアウト・保護具とあわせて行うことが前提です。使用可否はメーカー情報・社内規定・使用前点検で判断してください。
          </p>
        </Caution>

        <H2>買い替え時に確認したい絶縁工具の種類</H2>
        <ArticleImg
          src={IMG.replacementChecklist}
          alt="法人担当者が買い替え工具を確認するイメージ"
        />
        <H3>絶縁工具セット</H3>
        <ProductGrid
          items={INSULATED_SETS.filter((p) =>
            ["ta041849-tevsetfull", "ta034163-989912", "ta040466-ztb311a"].includes(p.id)
          )}
        />
        <H3>絶縁ペンチ・プライヤー</H3>
        <ProductGrid items={DRIVERS_PLIERS.slice(1, 3)} />
        <H3>絶縁ケーブルストリッパー</H3>
        <ProductGrid items={[CRIMPING_STRIPPER[0]]} />
        <H3>絶縁モンキーレンチ・スパナ</H3>
        <ProductGrid items={WRENCHES_SOCKETS.slice(0, 4)} />
        <H3>絶縁ソケット・ドライバー</H3>
        <ProductGrid
          items={[
            WRENCHES_SOCKETS[4],
            WRENCHES_SOCKETS[5],
            DRIVERS_PLIERS[0],
          ]}
        />
        <H3>圧着工具</H3>
        <ProductGrid items={CRIMPING_STRIPPER.slice(1)} />
        <H3>通常整備用工具との併用</H3>
        <p className={cls.body}>
          通常整備用工具は絶縁工具の代用品ではなく、電気作業以外の整備に使う別用途の工具です。作業内容に応じて併用します。
        </p>
        <ProductGrid items={MAINT_SETS} />
        <CTA href={URLS.maintList}>整備用工具一覧を見る</CTA>

        <H2>よくある質問</H2>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q}>
              <h3 className={cls.faqQ}>Q. {item.q}</h3>
              <p className={cls.body}>{item.a}</p>
            </div>
          ))}
        </div>

        <H2>まとめ｜絶縁工具の使用期限は「年数」よりも点検・管理・交換判断が重要</H2>
        <p className={cls.body}>
          絶縁工具の使用期限は、一律の年数だけで判断するものではありません。メーカー情報・社内規定・使用頻度・保管環境をふまえ、使用前点検で傷・ひび割れ・被覆剥がれ・金属部露出・表示消え・変質などを確認し、使用可否を判断します。1本だけ劣化なら単品交換、複数劣化や履歴不明ならセット更新を検討し、管理台帳で購入日・点検・状態・交換を記録すると社内の買い替え判断がしやすくなります。絶縁工具は安全対策の一部であり、停電確認・検電・ロックアウト・保護具・作業資格・社内手順の代わりにはなりません。電気作業は有資格者・教育済み作業者が社内手順に従って行う前提で進めてください。
        </p>
        <p className={cls.body}>
          絶縁工具の基礎知識は
          <Link
            href="/articles/insulated-tool-basics"
            className="text-gray-900 underline hover:no-underline"
          >
            絶縁工具とは？
          </Link>
          、セットの選び方は
          <Link
            href="/articles/insulated-tool-set-selection"
            className="text-gray-900 underline hover:no-underline"
          >
            絶縁工具セットの選び方
          </Link>
          もあわせてご覧ください。
        </p>
        <FinalCTA href={URLS.insulatedList}>
          絶縁工具一覧を見る（単品交換・セット更新）
        </FinalCTA>
        <FinalCTA href={URLS.truscoList}>トラスコ中山商品一覧を見る</FinalCTA>
      </main>
      <SiteFooter />
    </>
  );
}
