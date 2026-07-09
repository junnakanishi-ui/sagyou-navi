import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "bicycle-maintenance-tool-set-selection";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/bicycle-maintenance-tool-set-hero.jpg`,
  weraSets: `${ARTICLE_IMG}/wera-bicycle-tool-set-comparison.jpg`,
  torque: `${ARTICLE_IMG}/bicycle-torque-wrench-maintenance.jpg`,
  chainTireAir: `${ARTICLE_IMG}/bicycle-chain-tire-air-maintenance-tools.jpg`,
  screwRepair: `${ARTICLE_IMG}/bicycle-stripped-screw-repair-tools.jpg`,
  checklist: `${ARTICLE_IMG}/corporate-bicycle-maintenance-tool-checklist.jpg`,
};

export const metadata: Metadata = {
  title:
    "自転車メンテナンス工具セットの選び方｜携帯用・トルク管理・チェーン整備・空気入れまで解説｜作業用品ナビ",
  description:
    "自転車メンテナンス工具セットの選び方を、携帯用工具、作業場用工具、トルクレンチ、チェーンカッター、タイヤレバー、電動空気入れ、ネジ外し工具まで用途別に解説。自転車店・レンタサイクル・施設管理の法人備品にも使える工具リストを紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "自転車メンテナンス工具セットの選び方｜携帯用・トルク管理・チェーン整備・空気入れまで解説",
    description:
      "自転車メンテナンス工具セットの選び方を、携帯用工具、作業場用工具、トルクレンチ、チェーンカッター、タイヤレバー、電動空気入れ、ネジ外し工具まで用途別に解説。自転車店・レンタサイクル・施設管理の法人備品にも使える工具リストを紹介します。",
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
  weraSet1: R("ta029843-004170/"),
  weraSet2: R("ta029844-004171/"),
  weraSet3: R("ta029845-004172/"),
  weraSet3alt: R("ta000101-004172/"),
  weraSet9: R("ta029846-004177/"),
  weraSet3A: R("ta029848-004183/"),
  weraTorque1: R("ta032003-343968/"),
  weraSafeTorque: R("ta021165-075850/"),
  weraTireLever: R("ta029847-004182/"),
  ch140: R("ta047306-ch140/"),
  ch360: R("ta047310-ch360/"),
  airPump: R("hw-139/"),
  dh085: R("ta023036-dh08515bn/"),
  dh135: R("ta023037-dh13515bn/"),
  pds03: R("ta038507-pds03/"),
  pds02: R("ta038506-pds02/"),
  dxz09: R("ta035934-dxz09/"),
  bikeToolList: buildUrl(
    "https://search.rakuten.co.jp/search/mall/%E8%87%AA%E8%BB%A2%E8%BB%8A+%E5%B7%A5%E5%85%B7/?sid=426972",
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

const WERA_SETS: Prod[] = [
  {
    id: "ta029843-004170",
    name: "Wera 自転車セット1 004170",
    use: "14点のコンパクト工具セット（ミニラチェット・延長・タイヤレバー含む／メーカー公表値・要確認）",
    url: URLS.weraSet1,
  },
  {
    id: "ta029844-004171",
    name: "Wera 自転車セット2 004171",
    use: "13点セット（89mmロングビット＋Kraftformビットハンドル／メーカー公表値・要確認）",
    url: URLS.weraSet2,
  },
  {
    id: "ta029845-004172",
    name: "Wera 自転車セット3 004172",
    use: "41点の自転車用ねじ回し工具セット（Take it easy tool finder・タイヤレバー含む／メーカー公表値・要確認）",
    url: URLS.weraSet3,
  },
  {
    id: "ta000101-004172",
    name: "Wera 自転車セット3 004172（別ページ）",
    use: "上のセット3（004172）と同じ商品を指す別の商品ページです。購入前に仕様・在庫・価格を見比べてください（同一商品の可能性あり）",
    url: URLS.weraSet3alt,
  },
  {
    id: "ta029848-004183",
    name: "Wera 自転車メンテナンスセット3A 004183",
    use: "チェーン工具付き（チェーンリベッター＋ファスナー、シングルスピード〜12速チェーン対応／メーカー公表値・要確認）",
    url: URLS.weraSet3A,
  },
  {
    id: "ta029846-004177",
    name: "Wera 自転車セット9 004177",
    use: '10点のZyklop Miniセット（1/4"ソケット直接装着・65Nm以上に耐えるミニラチェット・6°戻り角／メーカー公表値・要確認）',
    url: URLS.weraSet9,
  },
];

const TORQUE_TOOLS: Prod[] = [
  {
    id: "ta032003-343968",
    name: "Wera 自転車セット トルク1 343968",
    use: "2.5〜25Nm対応の自転車用トルク工具セット（メーカー公表値・要確認）",
    url: URLS.weraTorque1,
  },
  {
    id: "ta021165-075850",
    name: "Wera 7515/7 差替式クラフトフォーム セーフトルクドライバー 自転車用セット1 075850",
    use: "2.0/3.0/4.0/5.0/6.0Nmの5段階トルク設定＋Torque Lock（低トルク帯の締付管理向け／メーカー公表値・要確認）",
    url: URLS.weraSafeTorque,
  },
  {
    id: "ta023036-dh08515bn",
    name: "TOP モンキ形デジタルトルクレンチ 17〜85N・m DH08515BN",
    use: "調整範囲17〜85N・m（大きめのナット・車両/設備まわり／メーカー公表値・要確認）",
    url: URLS.dh085,
  },
  {
    id: "ta023037-dh13515bn",
    name: "TOP モンキ形デジタルトルクレンチ 27〜135N・m DH13515BN",
    use: "調整範囲27〜135N・m（さらに高トルクの締付・戻しトルク測定／メーカー公表値・要確認）",
    url: URLS.dh135,
  },
];

const CHAIN_TIRE_AIR: Prod[] = [
  {
    id: "ta047306-ch140",
    name: "ハタヤ チェーンカッター 3/8 自転車チェーン専用型 CH140",
    use: "JIS35シングルチェーン・自転車/伝導機器等（メーカー公表値・要確認）",
    url: URLS.ch140,
  },
  {
    id: "ta047310-ch360",
    name: "ハタヤ チェーンカッター 3/8〜5/8 チェーン兼用型 CH360",
    use: "3/8〜5/8兼用・JIS35/40/50シングルローラーチェーン対応（メーカー公表値・要確認）",
    url: URLS.ch360,
  },
  {
    id: "ta029847-004182",
    name: "Wera 自転車用タイヤレバーセット 004182",
    use: "グラスファイバー強化プラのタイヤレバー＋4-in-1ビット（軽量・省スペース／メーカー公表値・要確認）",
    url: URLS.weraTireLever,
  },
  {
    id: "hw-139",
    name: "CYCLAMI 電動空気入れ ブラック HW-139",
    use: "500mAhバッテリー・約1.5時間充電・圧力計付きのコンパクト電動空気入れ（対応バルブ・設定圧はメーカー仕様を確認）",
    url: URLS.airPump,
  },
];

const SCREW_REPAIR: Prod[] = [
  {
    id: "ta038507-pds03",
    name: "ENGINEER ネジザウルスセット PDS03",
    use: "潰れたトラス/皿/六角穴付きボルトの取り外しに対応（自転車・バイク・農機具等／メーカー公表値・要確認）",
    url: URLS.pds03,
  },
  {
    id: "ta038506-pds02",
    name: "ENGINEER ネジザウルスセットL PDS02",
    use: "ネジザウルスのセット（構成・対応はメーカー仕様を確認）",
    url: URLS.pds02,
  },
  {
    id: "ta035934-dxz09",
    name: "ENGINEER 合体工具 8点セット DXZ09",
    use: "8点セット（潰れたプラス/六角穴付きボルト、狭所・壁際／メーカー公表値・要確認）",
    url: URLS.dxz09,
  },
];

const FAQ_ITEMS = [
  {
    q: "自転車メンテナンス工具セットは何を基準に選べばいいですか？",
    a: "作業内容、管理台数、持ち運びの有無、トルク管理の必要性で選びます。簡易調整なら携帯工具、作業場での整備ならビット・ソケットがそろった工具セット、カーボンパーツやE-Bikeを扱うならトルク工具も確認しましょう。",
  },
  {
    q: "自転車整備にトルクレンチは必要ですか？",
    a: "ステム、シートポスト、ハンドルまわり、カーボンパーツなどは締付トルクの管理が重要です。メーカー指定トルクがある部品では、トルクレンチやトルクドライバーの使用を検討しましょう。",
  },
  {
    q: "Wera自転車セット1とセット3の違いは何ですか？",
    a: "セット1は携帯しやすいコンパクト構成、セット3は41点構成で作業場や巡回点検にも使いやすいセットです。出先の簡易調整中心ならセット1、複数台の整備や作業場利用ならセット3を検討できます。",
  },
  {
    q: "チェーン交換にはどの工具が必要ですか？",
    a: "チェーンカッターやチェーンリベッターが必要です。チェーンの種類や速度数、ピン規格に合う工具を選びます。Wera 3Aのようなチェーン工具付きセットや、ハタヤのチェーンカッターを作業内容に合わせて確認しましょう。",
  },
  {
    q: "電動空気入れは法人の自転車管理に向いていますか？",
    a: "複数台の空気圧を定期的に点検する場合は、作業時間の短縮に役立つ場合があります。対応バルブ、設定圧、バッテリー容量、充電時間、付属ノズルを確認して選びましょう。",
  },
  {
    q: "なめたネジがある自転車にはどう対応すればよいですか？",
    a: "無理に回すと状態が悪化することがあります。ネジザウルスのようなネジ外し工具や六角穴付きボルト対応工具を確認し、難しい場合は専門整備に回す判断も必要です。",
  },
  {
    q: "自転車工具は個人用と法人用で選び方が違いますか？",
    a: "法人では、管理台数、点検頻度、作業者のスキル、工具の保管場所、点検記録、拠点ごとの工具統一が重要です。個人用よりも、工具構成の標準化と紛失防止を重視すると運用しやすくなります。",
  },
  {
    q: "自転車工具アイテムをまとめて探すには？",
    a: "自転車工具アイテム一覧から、携帯工具、トルクレンチ、チェーンカッター、タイヤレバー、空気入れ、ネジ外し工具などをまとめて確認できます。",
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
          <span className="text-gray-700">自転車メンテナンス工具セットの選び方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          自転車メンテナンス工具セットの選び方｜携帯用・トルク管理・チェーン整備・空気入れまで解説
        </h1>

        <p className="mb-6 text-sm text-gray-500">公開日：2026年7月9日／約15分で読めます</p>

        <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5 leading-relaxed">
          <p className="mb-3 font-bold">この記事の要点（先に結論）</p>
          <p className={cls.body}>
            自転車メンテナンス工具セットは、
            <strong>点検する自転車の台数・作業内容・持ち運びの有無・トルク管理の必要性</strong>
            で選ぶのが基本です。
          </p>
          <ul className={cls.list}>
            <li>出先や巡回点検には、コンパクトな携帯用工具セットが向いています。</li>
            <li>作業場で組立・調整・修理まで行うなら、ラチェット・ビット・ソケットがそろった工具セットを確認します。</li>
            <li>カーボンパーツやステム、シートポストなどの締付には、トルクレンチやトルクドライバーを検討します。</li>
            <li>チェーン交換やタイヤ交換を行う場合は、チェーンカッターやタイヤレバーも必要です。</li>
            <li>複数台を管理する法人では、電動空気入れやネジトラブル対応工具も備品化すると点検作業を効率化しやすくなります。</li>
          </ul>
          <p className={cls.body}>
            購入前には、対応するねじ規格、トルク範囲、携帯性、作業場での使いやすさ、交換部品、保管方法を確認しましょう。
          </p>
        </div>

        <ArticleImg
          src={IMG.hero}
          alt="自転車メンテナンス工具セットを法人・現場で選ぶイメージ"
        />

        <CTA href={URLS.bikeToolList}>
          Wera工具セット・トルクレンチ・チェーンカッター・電動空気入れを、自転車工具アイテム一覧で確認する
        </CTA>

        <H2>自転車工具セットは「作業内容」と「管理台数」で選ぶ</H2>
        <H3>出先の簡易調整なら携帯工具セット</H3>
        <p className={cls.body}>
          巡回点検や出先での簡易調整には、持ち運びやすいコンパクトな携帯用工具セットが向いています。
        </p>
        <H3>店舗・作業場で整備するならビット・ソケット構成を確認</H3>
        <p className={cls.body}>
          作業場で組立・調整・修理まで行うなら、ラチェット・ビット・ソケットがそろった構成を確認します。
        </p>
        <H3>カーボンパーツやE-Bikeにはトルク管理が重要</H3>
        <p className={cls.body}>
          カーボンパーツやE-Bike、ステム・シートポストなどは締めすぎを避けるため、トルクレンチ・トルクドライバーでの管理が重要です。
        </p>
        <H3>チェーン・タイヤ・空気圧まで見るなら専用工具も必要</H3>
        <p className={cls.body}>
          チェーン交換・タイヤ交換・空気圧点検まで行うなら、チェーンカッター、タイヤレバー、電動空気入れなどの専用工具も確認します。
        </p>
        <H3>法人管理では工具の標準化と保管ルールも大切</H3>
        <p className={cls.body}>
          複数拠点・複数台を管理する場合は、工具構成の標準化、保管場所、点検記録のルールづくりも重要です。
        </p>

        <Caution title="⚠️ トルク管理・安全に関わる整備について">
          <p>
            ステム・シートポスト・ハンドルまわり・カーボンパーツ・E-Bikeなどは締めすぎに注意が必要です。
            <strong>自転車メーカー・部品メーカーの指定トルクを確認</strong>
            し、トルクレンチ・トルクドライバーで管理してください。また、ブレーキ・駆動系・電動アシスト機構など
            <strong>安全に直結する整備は、無理に自己判断せず、専門整備・有資格者・専門担当者に確認</strong>
            しましょう。1つの工具セットだけですべての自転車整備に対応できるわけではありません。
          </p>
        </Caution>

        <H2>自転車メンテナンスで必要になる工具の種類</H2>
        <H3>六角・Torx・プラスビット</H3>
        <p className={cls.body}>
          自転車の多くのねじは六角（ヘックス）やTorx、プラスに対応します。必要なサイズがそろっているかを確認します。
        </p>
        <H3>ラチェット・ビットホルダー・ソケット</H3>
        <p className={cls.body}>
          作業効率を上げるなら、ラチェットやビットホルダー、ソケットがあると便利です。
        </p>
        <H3>トルクレンチ・トルクドライバー</H3>
        <p className={cls.body}>
          締付トルクの管理が必要な箇所には、トルクレンチ・トルクドライバーを使います。
        </p>
        <H3>チェーンカッター</H3>
        <p className={cls.body}>
          チェーン交換やピン抜きにはチェーンカッター（チェーンリベッター）が必要です。
        </p>
        <H3>タイヤレバー</H3>
        <p className={cls.body}>タイヤ・チューブ交換にはタイヤレバーが基本工具になります。</p>
        <H3>空気入れ・空気圧計</H3>
        <p className={cls.body}>
          空気圧点検には空気入れと圧力計が必要です。複数台なら電動空気入れも候補です。
        </p>
        <H3>なめたネジ・固着ネジの救出工具</H3>
        <p className={cls.body}>
          古い車両やサビたネジ、なめた六角穴付きボルトに備えるネジ外し工具もあると安心です。
        </p>

        <H2>Wera自転車工具セットの違い</H2>
        <ArticleImg
          src={IMG.weraSets}
          alt="Wera自転車工具セットの比較イメージ"
        />
        <p className={cls.body}>
          数値・セット内容はメーカー公表値です。最終的な構成は各商品ページでご確認ください。
        </p>

        <H3>Wera 自転車セット1｜携帯しやすい基本セット</H3>
        <p className={cls.body}>
          出先の簡易調整や巡回点検に。14点のコンパクト構成で、ミニラチェット・延長・タイヤレバーを含み、ロードバイク・MTB・E-Bikeで一般的なボルト形状に対応するとされています。
        </p>
        <H3>Wera 自転車セット2｜長めのビットで作業しやすいセット</H3>
        <p className={cls.body}>
          89mmロングビットとKraftformビットハンドルを含む13点セットとされ、奥まったねじや握りやすさを重視したい作業に向きます。
        </p>
        <H3>Wera 自転車セット3｜作業場・巡回点検に使いやすい41点セット</H3>
        <p className={cls.body}>
          41点構成で、ロードバイク・MTB・E-Bikeでよく使われるねじ規格に対応。色分けでサイズを探しやすいTake it easy tool finderやタイヤレバーも含み、作業場での整備や複数台の巡回点検に向きます。
        </p>
        <H3>Wera 自転車メンテナンスセット3A｜チェーン工具付き</H3>
        <p className={cls.body}>
          チェーン作業まで含めたい場合の候補。チェーンリベッターとチェーンファスナーを含み、シングルスピード〜12速チェーンに対応するとされています。
        </p>
        <H3>Wera 自転車セット9｜ミニラチェット中心のコンパクトセット</H3>
        <p className={cls.body}>
          10点のZyklop Miniセットで、1/4インチソケットの直接装着に対応。65Nm以上に耐えるミニラチェットや6°の小さな戻り角が特徴とされ、ラチェット作業のしやすさを重視したい場合に向きます。
        </p>

        <ProductGrid items={WERA_SETS} />

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>用途</Th>
                <Th>向いている工具</Th>
                <Th>商品導線</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>出先の簡易調整</Td>
                <Td>コンパクト工具セット</Td>
                <Td>Wera 自転車セット1</Td>
              </tr>
              <tr>
                <Td>握りやすさ重視</Td>
                <Td>ロングビット付きセット</Td>
                <Td>Wera 自転車セット2</Td>
              </tr>
              <tr>
                <Td>作業場での整備</Td>
                <Td>41点工具セット</Td>
                <Td>Wera 自転車セット3</Td>
              </tr>
              <tr>
                <Td>チェーン整備まで含める</Td>
                <Td>チェーン工具付きセット</Td>
                <Td>Wera メンテナンスセット3A</Td>
              </tr>
              <tr>
                <Td>ラチェット中心で使いたい</Td>
                <Td>ミニラチェットセット</Td>
                <Td>Wera 自転車セット9</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <CTA href={URLS.weraSet3}>
          作業場・巡回点検に使いやすいWera 自転車セット3（41点）を確認する
        </CTA>

        <H2>トルク管理が必要な自転車整備には専用工具を選ぶ</H2>
        <ArticleImg src={IMG.torque} alt="トルクレンチ・トルクドライバーのイメージ" />
        <H3>低トルク帯にはWeraトルク工具</H3>
        <p className={cls.body}>
          ステム、シートポスト、ハンドル周辺など、締めすぎを避けたい箇所ではトルク管理工具が重要です。Bicycle Set Torque 1は2.5〜25Nm対応、7515/7 Safe-Torque Speed Bicycle 1は2.0〜6.0Nmの選択式トルク設定（5段階＋Torque Lock）に対応するとされています。
        </p>
        <H3>高トルク帯にはデジタルトルクレンチも確認</H3>
        <p className={cls.body}>
          大きめのナットや、車両・機械まわりのトルク管理まで行う場合は、モンキ形デジタルトルクレンチも候補です。ただし自転車専用の低トルク工具とは用途が異なるため、作業対象と必要トルクを確認して選びます。
        </p>

        <ProductGrid items={TORQUE_TOOLS} />

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>工具</Th>
                <Th>トルク範囲</Th>
                <Th>向いている作業</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>Wera 7515/7</Td>
                <Td>2.0〜6.0Nm</Td>
                <Td>ステム・シートポスト・アクセサリー類の低トルク管理</Td>
              </tr>
              <tr>
                <Td>Wera Bicycle Set Torque 1</Td>
                <Td>2.5〜25Nm</Td>
                <Td>自転車整備全般のトルク管理</Td>
              </tr>
              <tr>
                <Td>TOP DH08515BN</Td>
                <Td>17〜85N・m</Td>
                <Td>大きめのナット、車両・設備まわり</Td>
              </tr>
              <tr>
                <Td>TOP DH13515BN</Td>
                <Td>27〜135N・m</Td>
                <Td>さらに高トルクの締付・戻しトルク測定</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <Caution>
          <p>
            トルク値は、必ず<strong>自転車メーカー・部品メーカーの指定トルク</strong>
            に従ってください。とくにカーボンパーツやE-Bikeでは締めすぎが破損・脱落につながる恐れがあります。工具のトルク範囲・精度・校正状態はメーカー仕様と取扱説明書で確認し、自転車用の低トルク工具と車両・設備向けの高トルク工具を用途に応じて使い分けましょう。
          </p>
        </Caution>

        <H2>チェーン・タイヤ・空気圧管理に必要な工具</H2>
        <ArticleImg
          src={IMG.chainTireAir}
          alt="チェーンカッター・タイヤレバー・電動空気入れのイメージ"
        />
        <H3>チェーン整備にはチェーンカッター</H3>
        <p className={cls.body}>
          チェーン交換やピン抜きにはチェーンカッターが必要です。チェーンの種類・速度数・ピン規格に合う工具を選びます。
        </p>
        <H3>タイヤ交換にはタイヤレバー</H3>
        <p className={cls.body}>
          タイヤ・チューブ交換にはタイヤレバーが基本工具です。WeraのBicycle Set 15は、グラスファイバー強化プラスチックのタイヤレバーと4-in-1ビットを組み合わせた軽量・省スペースの構成とされています。
        </p>
        <H3>日常点検には電動空気入れ</H3>
        <p className={cls.body}>
          複数台の空気圧点検の手間を減らしたい場合の候補です。対応バルブ・設定圧・バッテリー・充電時間・付属ノズルを確認しましょう。
        </p>

        <ProductGrid items={CHAIN_TIRE_AIR} />

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>作業</Th>
                <Th>工具</Th>
                <Th>確認ポイント</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>チェーン交換・ピン抜き</Td>
                <Td>ハタヤ CH-140／CH-360</Td>
                <Td>チェーン種類・速度数・ピン規格</Td>
              </tr>
              <tr>
                <Td>タイヤ・チューブ交換</Td>
                <Td>Wera タイヤレバーセット</Td>
                <Td>タイヤ・リムを傷つけにくいか</Td>
              </tr>
              <tr>
                <Td>空気圧点検</Td>
                <Td>CYCLAMI HW-139</Td>
                <Td>対応バルブ・設定圧・充電時間</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <CTA href={URLS.airPump}>
          複数台の空気圧点検には、圧力計付きの電動空気入れを確認する
        </CTA>

        <H2>なめたネジ・固着ネジに備える修理工具</H2>
        <ArticleImg
          src={IMG.screwRepair}
          alt="なめたネジ・固着ネジの救出工具のイメージ"
        />
        <H3>ネジザウルスセットはトラブル対応用に便利</H3>
        <p className={cls.body}>
          古いボルトやサビたネジ、なめた六角穴付きボルトに悩むことがあります。PDS-03は潰れたトラスネジ・皿ネジ・六角穴付きボルトの取り外しに対応し、自転車・バイク・農機具などのメンテナンス用途が案内されています。
        </p>
        <H3>合体工具セットは狭所・壁際・奥まったネジに</H3>
        <p className={cls.body}>
          DXZ-09は、潰れたプラスネジや六角穴付きボルトの取り外し、狭く奥まった場所、コーナーや壁際での作業に使える8点セットとして案内されています。
        </p>

        <ProductGrid items={SCREW_REPAIR} />

        <Caution>
          <p>
            なめたネジ・固着ネジを無理に回すと、状態が悪化することがあります。ネジ外し工具でも取り外しが難しい場合は、部品や車体を傷める前に専門整備に相談する判断も必要です。ブレーキ・駆動系・電動アシスト機構など安全に関わる箇所は、
            <strong>無理に自己判断せず専門担当者に確認</strong>してください。
          </p>
        </Caution>

        <H2>現場別・法人別おすすめ工具構成</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>現場・用途</Th>
                <Th>必要になりやすい工具</Th>
                <Th>商品例</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>自転車店・サイクルショップ</Td>
                <Td>作業場用セット、トルク工具、チェーン工具</Td>
                <Td>Wera セット3A、Torque 1</Td>
              </tr>
              <tr>
                <Td>レンタサイクル・シェアサイクル</Td>
                <Td>携帯工具、電動空気入れ、タイヤレバー、ネジ救出</Td>
                <Td>Wera セット1/9、HW-139、PDS03</Td>
              </tr>
              <tr>
                <Td>学校・工場・施設管理</Td>
                <Td>簡易調整、空気入れ、ネジトラブル対応</Td>
                <Td>Wera セット2、HW-139、PDS02</Td>
              </tr>
              <tr>
                <Td>配送会社・警備会社</Td>
                <Td>日常点検、タイヤ・チェーン・空気圧管理</Td>
                <Td>Wera セット3、CH-140、HW-139</Td>
              </tr>
              <tr>
                <Td>E-Bike・電動アシスト保守</Td>
                <Td>トルク管理、Torx/六角、ネジトラブル対応</Td>
                <Td>Wera Torque 1、7515/7、DXZ09</Td>
              </tr>
              <tr>
                <Td>個人事業主・小規模整備</Td>
                <Td>基本セット＋必要な専用工具</Td>
                <Td>Wera セット3、タイヤレバー、CH-140</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-4 flex flex-wrap gap-2">
          <ProductLink href={URLS.weraSet3A}>Wera セット3A を見る</ProductLink>
          <ProductLink href={URLS.weraTorque1}>Wera トルク1 を見る</ProductLink>
          <ProductLink href={URLS.ch140}>ハタヤ CH-140 を見る</ProductLink>
          <ProductLink href={URLS.pds03}>ネジザウルスセット を見る</ProductLink>
        </div>

        <H2>自転車工具選びでよくある失敗</H2>
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
                <Td>携帯用工具だけで本格整備まで行おうとする</Td>
                <Td>作業場用のセットも用意する</Td>
              </tr>
              <tr>
                <Td>トルク管理が必要な箇所を感覚で締めてしまう</Td>
                <Td>指定トルクをトルク工具で管理</Td>
              </tr>
              <tr>
                <Td>必要なTorxや六角サイズがセットに入っていない</Td>
                <Td>対応サイズを事前に確認</Td>
              </tr>
              <tr>
                <Td>E-Bikeやカーボンパーツの締付トルクを確認しない</Td>
                <Td>メーカー指定トルクを確認</Td>
              </tr>
              <tr>
                <Td>チェーン工具がないままチェーン交換をしようとする</Td>
                <Td>対応チェーンのチェーンカッターを用意</Td>
              </tr>
              <tr>
                <Td>タイヤレバーや空気入れを備品化していない</Td>
                <Td>点検用に備品化する</Td>
              </tr>
              <tr>
                <Td>電動空気入れの対応バルブや圧力を確認しない</Td>
                <Td>対応バルブ・設定圧を確認</Td>
              </tr>
              <tr>
                <Td>なめたネジ・固着ネジ対応工具がなく作業が止まる</Td>
                <Td>ネジ外し工具を備える</Td>
              </tr>
              <tr>
                <Td>複数拠点で工具構成がバラバラで管理しにくい</Td>
                <Td>工具構成を標準化する</Td>
              </tr>
              <tr>
                <Td>作業後の点検記録・工具保管ルールがない</Td>
                <Td>記録・保管ルールを決める</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H2>法人向けチェックリスト</H2>
        <ArticleImg
          src={IMG.checklist}
          alt="法人担当者が自転車工具の備品リストを確認するイメージ"
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
                <Td>管理台数</Td>
                <Td>何台の自転車を点検・整備するか</Td>
              </tr>
              <tr>
                <Td>自転車の種類</Td>
                <Td>一般車、ロードバイク、MTB、E-Bike、電動アシストなど</Td>
              </tr>
              <tr>
                <Td>作業範囲</Td>
                <Td>簡易調整、タイヤ交換、チェーン交換、トルク管理、ネジ救出</Td>
              </tr>
              <tr>
                <Td>携帯性</Td>
                <Td>巡回点検・出先修理があるか</Td>
              </tr>
              <tr>
                <Td>ねじ規格</Td>
                <Td>六角、Torx、プラス、ソケットの必要サイズ</Td>
              </tr>
              <tr>
                <Td>トルク管理</Td>
                <Td>低トルク・高トルクの範囲を確認したか</Td>
              </tr>
              <tr>
                <Td>タイヤ整備</Td>
                <Td>タイヤレバー、空気入れ、空気圧計があるか</Td>
              </tr>
              <tr>
                <Td>チェーン整備</Td>
                <Td>チェーンカッター、対応チェーンサイズを確認したか</Td>
              </tr>
              <tr>
                <Td>トラブル対応</Td>
                <Td>なめたネジ、固着ネジ対応工具があるか</Td>
              </tr>
              <tr>
                <Td>保管方法</Td>
                <Td>工具ケース、拠点別管理、紛失防止</Td>
              </tr>
              <tr>
                <Td>点検記録</Td>
                <Td>空気圧、締付、交換履歴、作業者名を記録するか</Td>
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

        <H2>自転車メンテナンス工具をまとめて確認</H2>
        <p className={cls.body}>
          自転車メンテナンス工具は、「作業内容」「管理台数」「携帯性」「トルク管理の要否」「チェーン・タイヤ・空気圧・ネジトラブルへの対応」から選ぶのがポイントです。トルク管理はメーカー指定トルクに従い、ブレーキ・駆動系・電動アシストなど安全に関わる整備は専門担当者に確認しましょう。携帯工具・作業場用セット・トルク工具・チェーン/タイヤ/空気圧工具・ネジ外し工具を見比べたい場合は、自転車工具アイテム一覧もあわせてご確認ください。
        </p>
        <FinalCTA href={URLS.bikeToolList}>
          自転車工具アイテム一覧はこちら（携帯工具・トルク・チェーン・タイヤ・空気入れ・ネジ外し）
        </FinalCTA>
      </main>
      <SiteFooter />
    </>
  );
}
