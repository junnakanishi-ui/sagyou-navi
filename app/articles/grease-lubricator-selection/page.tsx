import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "grease-lubricator-selection";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/grease-lubricator-maintenance-tools-hero.jpg`,
  types: `${ARTICLE_IMG}/air-electric-grease-lubricator-factory.jpg`,
  capacity: `${ARTICLE_IMG}/manual-handle-grease-lubricator-work.jpg`,
  hose: `${ARTICLE_IMG}/grease-lubricator-high-pressure-hose-selection.jpg`,
  worksite: `${ARTICLE_IMG}/grease-lubricator-construction-machine-maintenance.jpg`,
  checklist: `${ARTICLE_IMG}/grease-lubricator-procurement-maintenance-checklist.jpg`,
};

export const metadata: Metadata = {
  title:
    "グリースルブリケーターの選び方｜手動式・エア式・電動式と容量・ホース長さの確認ポイント｜作業用品ナビ",
  description:
    "グリースルブリケーターの選び方を、手動式・エア式・電動式・ポータブル式の違いから解説。8L/20L、16kg缶、グリースちょう度、吐出圧力、ホース長さ、設備保全・建機整備・車両整備での使い分けまで紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "グリースルブリケーターの選び方｜手動式・エア式・電動式と容量・ホース長さの確認ポイント",
    description:
      "グリースルブリケーターの選び方を、手動式・エア式・電動式・ポータブル式の違いから解説。8L/20L、16kg缶、グリースちょう度、吐出圧力、ホース長さ、設備保全・建機整備・車両整備での使い分けまで紹介します。",
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
  skr66: R("ta041737-skr66/"),
  skr110a50: R("ta041736-skr110a50/"),
  epl100: R("ta041254-epl100/"),
  ftr65g: R("ta041332-ftr65g/"),
  ftk8: R("ta041331-ftk8/"),
  ftk70: R("ta041330-ftk70/"),
  ftk70alt: R("ta007442-ftk70/"),
  hose5m: R("ta036349-ftk705mhose/"),
  hose4m: R("ta036348-ftk704mhose/"),
  hose18: R("ta036343-ftk011/"),
  lubList: buildUrl(
    "https://search.rakuten.co.jp/search/mall/%E3%83%AB%E3%83%96%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%BF%E3%83%BC/?sid=426972",
    UTM
  ),
  toolList: buildUrl(
    "https://item.rakuten.co.jp/crecote-shop/c/0000000185/?l-id=shoptop_shopmenu_categorypage_16_2ndlevel_3",
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

const MANUAL_LUBRICATORS: Prod[] = [
  {
    id: "ta041331-ftk8",
    name: "TRUSCO ハンドルブリケーター 8L FTK8",
    use: "8L・適応ちょう度#0〜#2・ホース1.8m・最大吐出圧9.8MPa・4cc/ストローク（メーカー公表値・要確認）",
    url: URLS.ftk8,
  },
  {
    id: "ta041330-ftk70",
    name: "TRUSCO ハンドルブリケーター 20L FTK70",
    use: "20L/16kg缶対応・最大吐出圧24.5MPa・4cc/ストローク（メーカー公表値・要確認）",
    url: URLS.ftk70,
  },
  {
    id: "ta007442-ftk70",
    name: "TRUSCO ハンドルブリケーター 20L FTK-70（別ページ）",
    use: "上のFTK70と同じ20Lタイプを指す別の商品ページです。購入前に仕様・在庫・価格を見比べてください（同一商品の可能性あり）",
    url: URLS.ftk70alt,
  },
];

const AIR_LUBRICATORS: Prod[] = [
  {
    id: "ta041332-ftr65g",
    name: "TRUSCO エアールブリケーター FTR65G",
    use: "20L/16kg缶対応・ホース3m・吐出圧17.64〜39.69MPa・使用空気圧0.39〜0.88MPa・グリス300cc/min・油1800cc/min・適合ちょう度#1（メーカー公表値・要確認）",
    url: URLS.ftr65g,
  },
  {
    id: "ta041737-skr66",
    name: "ヤマダ ポータブル・ルブリケーター SKR66",
    use: "標準タイプ。作動空気圧0.2〜0.7MPa・吐出量320cc/min・最大吐出圧40MPa・適合ちょう度#00〜#1・使用可グリスNLGI No.1以下（メーカー公表値・要確認）",
    url: URLS.skr66,
  },
  {
    id: "ta041736-skr110a50",
    name: "ヤマダ ポータブル・ルブリケーター SKR110A50",
    use: "16〜18kgペール/角缶収納タイプ。高圧グリースガン・耐油ホース2.5m・チェックバルブ・フォロープレート・エアレギュレーター付属（メーカー公表値・要確認）",
    url: URLS.skr110a50,
  },
];

const ELECTRIC_LUBRICATORS: Prod[] = [
  {
    id: "ta041254-epl100",
    name: "ヤマダ 電動式グリースルブリケータ EPL100",
    use: "エア源がない場所で工作機械などへのグリース給油をしやすくする電動式。仕様はメーカー仕様を確認",
    url: URLS.epl100,
  },
];

const HOSES: Prod[] = [
  {
    id: "ta036343-ftk011",
    name: "TRUSCO FTK-8・70共用 標準高圧ホース 1.8m FTK011",
    use: "FTK-70/FTK-8適合の1.8m標準高圧ホース・両端ねじ径PT1/4（メーカー公表値・要確認）",
    url: URLS.hose18,
  },
  {
    id: "ta036348-ftk704mhose",
    name: "TRUSCO FTK-70用 4m高圧ホース FTK704MHOSE",
    use: "FTK-70用の4m高圧ホース。適合機種はメーカー仕様を確認",
    url: URLS.hose4m,
  },
  {
    id: "ta036349-ftk705mhose",
    name: "TRUSCO FTK-70用 5m高圧ホース FTK705MHOSE",
    use: "FTK-70用の5m高圧ホース。適合機種はメーカー仕様を確認",
    url: URLS.hose5m,
  },
];

const FAQ_ITEMS = [
  {
    q: "ルブリケーターとは何に使う工具ですか？",
    a: "機械・車両・建機・農機などの給脂箇所にグリースを送り込むための給油機です。グリースガンよりも容量が大きく、定期的な設備保全や複数台への給脂作業に向いています。",
  },
  {
    q: "ハンドルブリケーターとエアールブリケーターの違いは何ですか？",
    a: "ハンドルブリケーターは手動でグリースを圧送します。エアールブリケーターはコンプレッサーの圧縮エアで給脂するタイプで、作業量が多い工場や整備場で効率化しやすい場合があります。",
  },
  {
    q: "8Lと20Lはどちらを選べばよいですか？",
    a: "持ち運びや少量給脂を重視するなら8L、建機・車両・設備保全などで給脂量が多い場合は20Lタイプが候補になります。給脂箇所の数、頻度、グリース使用量で選びましょう。",
  },
  {
    q: "エア式と電動式はどちらが良いですか？",
    a: "コンプレッサーがある現場ではエア式が候補になります。エア源がない場所で効率よく給脂したい場合は電動式も選択肢です。電源・エア設備・使用場所を確認して選びます。",
  },
  {
    q: "グリースちょう度はなぜ確認が必要ですか？",
    a: "機器ごとに対応できるグリースの硬さが異なります。対応外のグリースを使うと吐出不良や故障の原因になる可能性があるため、使用するグリースのちょう度と機器の対応範囲を確認しましょう。",
  },
  {
    q: "標準ホースで届かない場合はどうすればよいですか？",
    a: "適合機種を確認したうえで、4mや5mなどの高圧ホースを検討します。大型機械・建機・車両整備では、給脂箇所までの距離やホースの取り回しを事前に確認しましょう。",
  },
  {
    q: "ルブリケーターはどんな現場で使われますか？",
    a: "工場設備の保全、建設機械の整備、フォークリフト・トラックの整備、農機のメンテナンス、製造ラインの定期給脂などで使われます。",
  },
  {
    q: "法人で導入するときは何を一緒に確認すべきですか？",
    a: "本体だけでなく、ホース、グリースガン、カプラ、交換部品、使用するグリースの種類、給脂記録、保管場所、点検周期まで確認すると運用しやすくなります。",
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
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="my-6 w-full rounded-lg"
    />
  );
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
    <td className="border border-gray-300 px-3 py-2 text-sm align-top">
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
      <main className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <span>選び方ガイド</span>
          <span className="mx-1">/</span>
          <span className="text-gray-700">グリースルブリケーターの選び方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          グリースルブリケーターの選び方｜手動式・エア式・電動式と容量・ホース長さの確認ポイント
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月9日／約15分で読めます
        </p>

        <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5 leading-relaxed">
          <p className="mb-3 font-bold">この記事の要点（先に結論）</p>
          <p className={cls.body}>
            グリースルブリケーターは、
            <strong>給脂作業の量・グリース缶の容量・エア源や電源の有無・給脂箇所までの距離</strong>
            で選ぶのが基本です。
          </p>
          <ul className={cls.list}>
            <li>電源やエア源がない現場では、手動式ハンドルブリケーターが候補になります。</li>
            <li>コンプレッサーがある工場や整備場では、エア式ルブリケーターを検討できます。</li>
            <li>エア源がない工場内で効率よく給脂したい場合は、電動式グリースルブリケーターも候補になります。</li>
            <li>16kg缶・20L缶などを使う場合は、缶ごとセットできる容量対応を確認しましょう。</li>
            <li>奥まった給脂箇所や大型機械では、標準ホースで届くか、4m・5mホースが必要かも確認します。</li>
          </ul>
          <p className={cls.body}>
            購入前には、適合グリースちょう度、吐出圧力、吐出量、ホース長さ、付属ガン、交換部品、使用場所を確認することが重要です。高圧でグリースを扱うため、取扱説明書と安全な作業手順に従ってください。
          </p>
        </div>

        <ArticleImg
          src={IMG.hero}
          alt="グリースルブリケーターを現場別に選ぶイメージ"
        />

        <CTA href={URLS.lubList}>
          手動式・エア式・電動式・高圧ホースを、ルブリケーター一覧で確認する
        </CTA>

        <H2>グリースルブリケーターは「作業量」と「動力源」で選ぶ</H2>
        <H3>少量・現場持ち出しなら手動式</H3>
        <p className={cls.body}>
          電源やエア源がない現場、少量〜中量の給脂には、手動式ハンドルブリケーターが候補です。シンプルで持ち出しやすい一方、作業量が多いと負担が大きくなります。
        </p>
        <H3>コンプレッサーがあるならエア式</H3>
        <p className={cls.body}>
          工場や整備場にコンプレッサーがある場合は、エア式ルブリケーターで手動より効率よく給脂できる場合があります。エア源の確保が前提です。
        </p>
        <H3>エア源がない工場では電動式</H3>
        <p className={cls.body}>
          圧縮エアを使えない屋内設備で効率よく給脂したい場合は、電動式グリースルブリケーターが候補です。電源・電動部の管理が必要です。
        </p>
        <H3>ペール缶・16kg缶を使うなら容量対応を確認</H3>
        <p className={cls.body}>
          16kg缶・20L缶・ペール缶をそのまま使いたい場合は、缶ごとセットできる容量対応を確認します。
        </p>
        <H3>給脂箇所が遠い場合はホース長さも重要</H3>
        <p className={cls.body}>
          奥まった給脂箇所や大型機械では、標準ホースで届くか、4m・5mの長尺ホースが必要かを確認します。
        </p>

        <Caution title="⚠️ 高圧グリース取扱いの安全について">
          <p>
            グリースルブリケーターは<strong>高い圧力でグリースを圧送します</strong>
            。取扱説明書を順守し、保護具の着用、作業前後の圧力抜き、ホース・ガン・接続部の損傷確認を行ってください。
            <strong>高圧のグリースを人体・皮膚に向けない</strong>
            こと（高圧噴射は重篤な傷害につながる恐れがあります）。異常や損傷がある場合は使用を中止し、現場・会社の安全ルールに従ってください。
          </p>
        </Caution>

        <H2>手動式・エア式・電動式ルブリケーターの違い</H2>
        <ArticleImg
          src={IMG.types}
          alt="手動式・エア式・電動式ルブリケーターの比較イメージ"
        />
        <p className={cls.body}>
          数値はメーカー公表値です。最終的な仕様は各商品ページでご確認ください。
        </p>

        <H3>手動式ハンドルブリケーター｜電源・エア源がない現場向け</H3>
        <p className={cls.body}>
          電源やエア源がない現場、農機・建機・設備まわりの給脂に向きます。FTK-8は8L、FTK-70は20L/16kg缶対応のため、使用量と持ち運びやすさで選びましょう。
        </p>
        <ProductGrid items={MANUAL_LUBRICATORS} />

        <H3>エア式ルブリケーター｜コンプレッサー設備がある工場・整備場向け</H3>
        <p className={cls.body}>
          コンプレッサーがある場合は、エア式で効率よく給脂できる場合があります。SKRシリーズはエアパワードポンプやフォロープレートを備え、ペール缶単位の給脂に向きます。
        </p>
        <ProductGrid items={AIR_LUBRICATORS} />

        <H3>電動式グリースルブリケーター｜エア源がない工場内に</H3>
        <p className={cls.body}>
          圧縮エアを使えない場所で工作機械・設備にグリース給油したい場合の候補です。電源・電動部の管理を前提にします。
        </p>
        <ProductGrid items={ELECTRIC_LUBRICATORS} />

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>方式</Th>
                <Th>向いている現場</Th>
                <Th>メリット</Th>
                <Th>注意点</Th>
                <Th>商品導線</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>手動式</Td>
                <Td>電源・エア源がない現場</Td>
                <Td>シンプルで使いやすい</Td>
                <Td>作業量が多いと負担が大きい</Td>
                <Td>FTK8、FTK70</Td>
              </tr>
              <tr>
                <Td>エア式</Td>
                <Td>コンプレッサーがある工場・整備場</Td>
                <Td>給脂作業を効率化しやすい</Td>
                <Td>エア源が必要</Td>
                <Td>FTR65G、SKR66、SKR110A50</Td>
              </tr>
              <tr>
                <Td>電動式</Td>
                <Td>エア源がない屋内設備</Td>
                <Td>エアなしで効率化しやすい</Td>
                <Td>電源・電動部の管理が必要</Td>
                <Td>EPL100</Td>
              </tr>
              <tr>
                <Td>ホース延長</Td>
                <Td>大型機械・奥まった給脂箇所</Td>
                <Td>作業範囲を広げやすい</Td>
                <Td>適合機種の確認が必要</Td>
                <Td>FTK011、4m/5mホース</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <CTA href={URLS.ftr65g}>
          コンプレッサーがある整備場向けのエア式ルブリケーターを確認する
        </CTA>

        <H2>容量で選ぶ｜8L・20L・16kg缶の違い</H2>
        <ArticleImg
          src={IMG.capacity}
          alt="8L・20L・16kg缶の容量イメージ"
        />
        <H3>8Lタイプは持ち運びや小規模給脂に向く</H3>
        <p className={cls.body}>
          少量給脂や現場持ち出し、農機・小型設備には8Lが扱いやすい選択肢です。
        </p>
        <H3>20L/16kg缶対応は給脂量が多い現場向け</H3>
        <p className={cls.body}>
          建機・車両整備、設備保全、複数台の給脂には20L/16kg缶対応が向きます。
        </p>
        <H3>ペール缶をそのまま使えるか確認する</H3>
        <p className={cls.body}>
          16〜18kgのペール缶をそのままセットして使いたい場合は、缶収納タイプかを確認します。
        </p>
        <H3>グリース使用量と交換頻度から選ぶ</H3>
        <p className={cls.body}>
          1回あたりの給脂量と交換頻度を踏まえ、容量と缶対応を選びます。
        </p>

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>容量タイプ</Th>
                <Th>向いている現場</Th>
                <Th>商品例</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>8L</Td>
                <Td>少量給脂、現場持ち出し、農機・小型設備</Td>
                <Td>TRUSCO FTK8</Td>
              </tr>
              <tr>
                <Td>20L/16kg缶</Td>
                <Td>建機・車両整備、設備保全、複数台の給脂</Td>
                <Td>TRUSCO FTK70、FTR65G</Td>
              </tr>
              <tr>
                <Td>16〜18kg缶収納</Td>
                <Td>ペール缶単位でのグリース運用</Td>
                <Td>ヤマダ SKR110A50</Td>
              </tr>
              <tr>
                <Td>キャビネット/ポータブル型</Td>
                <Td>工場・整備場での標準運用</Td>
                <Td>ヤマダ SKR66、SKR110A50</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H2>グリースちょう度・吐出圧力・吐出量の見方</H2>
        <H3>グリースちょう度は#0〜#2などを確認する</H3>
        <p className={cls.body}>
          機器ごとに対応できるグリースの硬さ（ちょう度）が異なります。使用するグリースのちょう度と機器の対応範囲を確認します。
        </p>
        <H3>硬いグリースほど対応可否を確認する</H3>
        <p className={cls.body}>
          硬めのグリースは吐出しにくくなる場合があります。対応範囲外のグリースは吐出不良や故障の原因になることがあります。
        </p>
        <H3>吐出圧力は奥まった給脂箇所や抵抗に関係する</H3>
        <p className={cls.body}>
          給脂箇所の抵抗や距離に対して、必要な吐出圧力があるかを確認します。
        </p>
        <H3>吐出量は作業スピードに影響する</H3>
        <p className={cls.body}>
          吐出量（cc/min や cc/ストローク）は作業スピードに関わります。給脂量が多い現場では吐出量も確認します。
        </p>
        <H3>機器・グリース・気温で実際の給脂感は変わる</H3>
        <p className={cls.body}>
          同じ機器でも、グリースの種類や気温で吐出しやすさは変わります。実際の使用条件で確認しましょう。
        </p>

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>確認項目</Th>
                <Th>見るポイント</Th>
                <Th>参考（メーカー公表値・要確認）</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>ちょう度</Td>
                <Td>#0〜#2など対応範囲</Td>
                <Td>FTK8/70=#0〜#2／SKR66=#00〜#1／FTR65G=#1</Td>
              </tr>
              <tr>
                <Td>吐出圧力</Td>
                <Td>給脂箇所の抵抗・距離に対応</Td>
                <Td>FTK8=最大9.8MPa／FTK70=最大24.5MPa／SKR66=最大40MPa／FTR65G=17.64〜39.69MPa</Td>
              </tr>
              <tr>
                <Td>吐出量</Td>
                <Td>作業スピードに影響</Td>
                <Td>SKR66=320cc/min／FTR65G=グリス300cc/min・油1800cc/min／FTK=4cc/ストローク</Td>
              </tr>
              <tr>
                <Td>使用空気圧</Td>
                <Td>エア式で必要</Td>
                <Td>SKR66=0.2〜0.7MPa／FTR65G=0.39〜0.88MPa</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <Caution>
          <p>
            適合グリースちょう度・吐出圧力・吐出量・適合機種・ホースのねじ径などは、必ず各商品ページとメーカー公式情報で確認してください。スペックや付属品・価格は変わる場合があります。対応範囲外のグリースや適合しないホース・機種の組み合わせは、
            <strong>吐出不良・漏れ・故障・事故の原因</strong>
            になることがあります。
          </p>
        </Caution>

        <H2>高圧ホースは標準長で足りるか確認する</H2>
        <ArticleImg
          src={IMG.hose}
          alt="高圧グリースホースの取り回しイメージ"
        />
        <H3>標準1.8mホースで届く作業</H3>
        <p className={cls.body}>
          近い給脂箇所や小型機械では、標準の1.8mホースで届くことが多いです。
        </p>
        <H3>4m・5mホースが必要になる現場</H3>
        <p className={cls.body}>
          奥まった給脂箇所や大型機械では、標準ホースで届かず4m・5mの長尺ホースが必要になる場合があります。
        </p>
        <H3>大型機械・建機・車両整備では取り回しを確認</H3>
        <p className={cls.body}>
          大型機械・建機・車両整備では、給脂箇所までの距離とホースの取り回しを事前に確認します。
        </p>
        <H3>適合機種と両端ねじ径を確認する</H3>
        <p className={cls.body}>
          ホースは適合機種と両端ねじ径の確認が必要です。FTK011は1.8m標準・両端ねじ径PT1/4とされています（要確認）。
        </p>
        <ProductGrid items={HOSES} />

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>ホース長さ</Th>
                <Th>向いている用途</Th>
                <Th>商品導線</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>1.8m（標準）</Td>
                <Td>FTK8/70の交換・近い給脂箇所</Td>
                <Td>FTK011</Td>
              </tr>
              <tr>
                <Td>4m</Td>
                <Td>少し離れた給脂箇所</Td>
                <Td>FTK704MHOSE</Td>
              </tr>
              <tr>
                <Td>5m</Td>
                <Td>大型機械・車両まわり</Td>
                <Td>FTK705MHOSE</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <CTA href={URLS.hose5m}>
          給脂箇所まで届かない場合は、4m・5mの高圧ホースを確認する
        </CTA>

        <H2>現場別・グリースルブリケーターの選び方</H2>
        <ArticleImg
          src={IMG.worksite}
          alt="建機・設備へグリース給油する現場イメージ"
        />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>現場</Th>
                <Th>向いている方式</Th>
                <Th>おすすめ商品</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>工場設備・製造ラインの保全</Td>
                <Td>エア式/電動式</Td>
                <Td>ヤマダ SKR66、EPL100、TRUSCO FTR65G</Td>
              </tr>
              <tr>
                <Td>建機・重機・フォークリフトの整備</Td>
                <Td>大容量＋長尺ホース</Td>
                <Td>TRUSCO FTK70、ヤマダ SKR110A50、4m/5mホース</Td>
              </tr>
              <tr>
                <Td>農機・屋外設備のメンテナンス</Td>
                <Td>手動式</Td>
                <Td>TRUSCO FTK8、FTK70、標準高圧ホース</Td>
              </tr>
              <tr>
                <Td>自動車・トラック整備工場</Td>
                <Td>エア式</Td>
                <Td>TRUSCO FTR65G、ヤマダ SKR66、SKR110A50</Td>
              </tr>
              <tr>
                <Td>エア源がない工場・設備まわり</Td>
                <Td>電動式/手動式</Td>
                <Td>ヤマダ EPL100、TRUSCO FTK8、FTK70</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-4 flex flex-wrap gap-2">
          <ProductLink href={URLS.skr66}>SKR66 を見る</ProductLink>
          <ProductLink href={URLS.epl100}>EPL100 を見る</ProductLink>
          <ProductLink href={URLS.ftk70}>FTK70 を見る</ProductLink>
          <ProductLink href={URLS.skr110a50}>SKR110A50 を見る</ProductLink>
        </div>

        <H2>商品別・おすすめ用途まとめ</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>商品</Th>
                <Th>タイプ</Th>
                <Th>容量・特徴</Th>
                <Th>向いている用途</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>ヤマダ SKR66</Td>
                <Td>エア式ポータブル</Td>
                <Td>標準タイプ</Td>
                <Td>工場・整備場の定期給脂</Td>
              </tr>
              <tr>
                <Td>ヤマダ SKR110A50</Td>
                <Td>エア式ポータブル</Td>
                <Td>16〜18kg缶収納・ホース2.5m</Td>
                <Td>ペール缶単位での給脂</Td>
              </tr>
              <tr>
                <Td>ヤマダ EPL100</Td>
                <Td>電動式</Td>
                <Td>エア源がない場所向け</Td>
                <Td>工場設備・工作機械まわり</Td>
              </tr>
              <tr>
                <Td>TRUSCO FTR65G</Td>
                <Td>エア式</Td>
                <Td>20L/16kg缶対応・ホース3m</Td>
                <Td>コンプレッサーがある整備場</Td>
              </tr>
              <tr>
                <Td>TRUSCO FTK8</Td>
                <Td>手動式</Td>
                <Td>8L</Td>
                <Td>小規模給脂・持ち出し</Td>
              </tr>
              <tr>
                <Td>TRUSCO FTK70</Td>
                <Td>手動式</Td>
                <Td>20L/16kg缶対応</Td>
                <Td>建機・車両・設備保全</Td>
              </tr>
              <tr>
                <Td>FTK011</Td>
                <Td>高圧ホース</Td>
                <Td>1.8m標準・PT1/4</Td>
                <Td>FTK8/70の交換・標準用途</Td>
              </tr>
              <tr>
                <Td>FTK704MHOSE</Td>
                <Td>高圧ホース</Td>
                <Td>4m</Td>
                <Td>少し離れた給脂箇所</Td>
              </tr>
              <tr>
                <Td>FTK705MHOSE</Td>
                <Td>高圧ホース</Td>
                <Td>5m</Td>
                <Td>大型機械・車両まわり</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H2>グリースルブリケーター選びでよくある失敗</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>失敗</Th>
                <Th>対策</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>グリースのちょう度を確認せずに選ぶ</Td>
                <Td>使用グリースのちょう度と機器の対応範囲を確認</Td>
              </tr>
              <tr>
                <Td>電源・エア源の有無を確認していない</Td>
                <Td>現場の動力源に合う方式を選ぶ</Td>
              </tr>
              <tr>
                <Td>手動式で大量給脂を行い作業負担が大きくなる</Td>
                <Td>作業量が多いならエア式/電動式を検討</Td>
              </tr>
              <tr>
                <Td>ホース長さが足りず給脂箇所に届かない</Td>
                <Td>距離を測り、必要なら4m/5mホース</Td>
              </tr>
              <tr>
                <Td>ペール缶・16kg缶に対応していると思い込む</Td>
                <Td>缶容量の対応を確認</Td>
              </tr>
              <tr>
                <Td>吐出圧力だけを見て吐出量・スピードを見ていない</Td>
                <Td>吐出量も確認</Td>
              </tr>
              <tr>
                <Td>給脂箇所の数や頻度を把握せずに選ぶ</Td>
                <Td>給脂箇所数・頻度から容量を決める</Td>
              </tr>
              <tr>
                <Td>ホース・ガン・カプラなど交換部品の確認を忘れる</Td>
                <Td>交換部品・付属品を確認</Td>
              </tr>
              <tr>
                <Td>グリースの種類を混ぜて管理してしまう</Td>
                <Td>種類ごとに管理・記録</Td>
              </tr>
              <tr>
                <Td>給脂量・給脂周期の記録を残していない</Td>
                <Td>給脂記録を残す</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H2>法人向けチェックリスト</H2>
        <ArticleImg
          src={IMG.checklist}
          alt="法人担当者が潤滑管理備品を確認するイメージ"
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
                <Td>給脂対象</Td>
                <Td>機械、建機、車両、農機、設備ラインなど</Td>
              </tr>
              <tr>
                <Td>給脂頻度</Td>
                <Td>毎日、週次、月次、定期点検時など</Td>
              </tr>
              <tr>
                <Td>作業量</Td>
                <Td>給脂箇所の数、1回あたりの給脂量</Td>
              </tr>
              <tr>
                <Td>動力源</Td>
                <Td>手動、エア式、電動式のどれが合うか</Td>
              </tr>
              <tr>
                <Td>グリース容量</Td>
                <Td>8L、20L、16kg缶、ペール缶対応</Td>
              </tr>
              <tr>
                <Td>グリースちょう度</Td>
                <Td>#0、#1、#2など対応範囲</Td>
              </tr>
              <tr>
                <Td>吐出圧力</Td>
                <Td>給脂箇所の抵抗や距離に合うか</Td>
              </tr>
              <tr>
                <Td>吐出量</Td>
                <Td>作業スピードに合うか</Td>
              </tr>
              <tr>
                <Td>ホース長さ</Td>
                <Td>標準、3m、4m、5mで足りるか</Td>
              </tr>
              <tr>
                <Td>付属品</Td>
                <Td>グリースガン、ホース、レギュレーター、フォロープレート</Td>
              </tr>
              <tr>
                <Td>交換部品</Td>
                <Td>ホース、ガン、カプラ、シール類</Td>
              </tr>
              <tr>
                <Td>保管管理</Td>
                <Td>グリースの種類、缶の保管、汚れ防止、点検記録</Td>
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

        <H2>ルブリケーター・手作業工具をまとめて確認</H2>
        <p className={cls.body}>
          グリースルブリケーターは、「給脂作業の量」「動力源（手動/エア/電動）」「グリース缶の容量」「適合ちょう度・吐出圧力・吐出量」「給脂箇所までのホース長さ」から選ぶのがポイントです。高圧でグリースを扱うため、取扱説明書・保護具・圧力抜き・損傷確認など安全な作業手順に従いましょう。手動式・エア式・電動式・高圧ホースを見比べたい場合は、ルブリケーター一覧・手作業工具一覧もあわせてご確認ください。
        </p>
        <FinalCTA href={URLS.lubList}>
          ルブリケーター一覧はこちら（手動式・エア式・電動式・高圧ホース）
        </FinalCTA>
        <FinalCTA href={URLS.toolList}>
          手作業工具一覧はこちら（設備保全・整備の工具をまとめて確認）
        </FinalCTA>
      </main>
      <SiteFooter />
    </>
  );
}
