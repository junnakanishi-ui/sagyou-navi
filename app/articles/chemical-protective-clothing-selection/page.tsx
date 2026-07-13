import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "chemical-protective-clothing-selection";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/chemical-protective-clothing-worksite-hero.jpg`,
  cleaning: `${ARTICLE_IMG}/chemical-cleaning-protective-suit-gloves.jpg`,
  comparison: `${ARTICLE_IMG}/chemical-ppe-equipment-comparison.jpg`,
  // gloves: `${ARTICLE_IMG}/chemical-resistant-gloves-selection.jpg`, // 未配置
  doffing: `${ARTICLE_IMG}/chemical-protective-clothing-doffing-disposal.jpg`,
  checklist: `${ARTICLE_IMG}/chemical-ppe-procurement-checklist.jpg`,
};

export const metadata: Metadata = {
  title:
    "化学防護服の選び方｜薬品・洗浄・消毒作業で確認したい防護服・手袋・マスクの組み合わせ｜作業用品ナビ",
  description:
    "化学防護服の選び方を、薬品作業・洗浄作業・消毒作業・廃棄物処理など現場別に解説。防護服だけでなく化学防護手袋・防じんマスク・防毒マスク・保護具の組み合わせ、選定時の注意点、法人向けチェックリストまで整理します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "化学防護服の選び方｜薬品・洗浄・消毒作業で確認したい防護服・手袋・マスクの組み合わせ",
    description:
      "化学防護服の選び方を、薬品作業・洗浄作業・消毒作業・廃棄物処理など現場別に解説。防護服だけでなく化学防護手袋・防じんマスク・防毒マスク・保護具の組み合わせ、選定時の注意点、法人向けチェックリストまで整理します。",
    type: "article",
    images: [IMG.hero],
  },
};

/* ============================================================
   URL ヘルパー（UTM は # の前に付与。既存エンコードは再エンコードしない）
   ============================================================ */
const UTM = "utm_source=sagyou_navi";

function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

/** 楽天 crecote-shop（手袋・マスク・チャップス／末尾スラッシュ必須） */
function R(path: string): string {
  return buildUrl(`https://item.rakuten.co.jp/crecote-shop/${path}`, UTM);
}

/** 楽天 signcity2024（化学防護服／末尾スラッシュ必須） */
function RS(path: string): string {
  return buildUrl(`https://item.rakuten.co.jp/signcity2024/${path}`, UTM);
}

const productImage = (id: string) => `/products/${id}.jpg`;

type Prod = {
  id: string;
  imgId?: string;
  name: string;
  use: string;
  url: string;
};

const SUITS: Prod[] = [
  {
    id: "171686",
    name: "東レ LIVMOA1000AS 化学防護服 M",
    use: "耐水圧スタンダードタイプ・帯電防止加工とされる化学防護服（仕様は商品ページで確認）",
    url: RS("171686/"),
  },
  {
    id: "171687",
    name: "東レ LIVMOA1000AS 化学防護服 L",
    use: "耐水圧スタンダードタイプ・帯電防止加工とされる化学防護服（仕様は商品ページで確認）",
    url: RS("171687/"),
  },
  {
    id: "171688",
    name: "東レ LIVMOA1000AS 化学防護服 XL",
    use: "耐水圧スタンダードタイプ・帯電防止加工とされる化学防護服（仕様は商品ページで確認）",
    url: RS("171688/"),
  },
  {
    id: "171689",
    name: "東レ LIVMOA1000AS 化学防護服 XXL",
    use: "耐水圧スタンダードタイプ・帯電防止加工とされる化学防護服（仕様は商品ページで確認）",
    url: RS("171689/"),
  },
];

const GLOVES: Prod[] = [
  {
    id: "ta003182-554l",
    name: "トワロン アルファテック 15-554 L",
    use: "薬品作業向けの化学防護手袋。適合薬品・接触時間は製品情報で確認",
    url: R("ta003182-554l/"),
  },
  {
    id: "ta006290-d640s",
    name: "ダイローブ640 S",
    use: "薬品の小分け・洗浄作業などで手元防護を検討する際の候補（要確認）",
    url: R("ta006290-d640s/"),
  },
  {
    id: "ta006289-d640m",
    name: "ダイローブ640 M",
    use: "薬品の小分け・洗浄作業などで手元防護を検討する際の候補（要確認）",
    url: R("ta006289-d640m/"),
  },
  {
    id: "ta006287-d640l",
    name: "ダイローブ640 L",
    use: "薬品の小分け・洗浄作業などで手元防護を検討する際の候補（要確認）",
    url: R("ta006287-d640l/"),
  },
  {
    id: "ta006288-d640ll",
    name: "ダイローブ640 LL",
    use: "薬品の小分け・洗浄作業などで手元防護を検討する際の候補（要確認）",
    url: R("ta006288-d640ll/"),
  },
  {
    id: "ta006293-d730l",
    name: "ダイローブ730 L",
    use: "作業内容に応じた厚み・作業性のバランスを確認して選定",
    url: R("ta006293-d730l/"),
  },
  {
    id: "ta006679-dt1nm",
    name: "ダイローブT1-N M（5双入り）",
    use: "複数作業者・交換頻度を想定した備品候補（要確認）",
    url: R("ta006679-dt1nm/"),
  },
  {
    id: "ta006678-dt1nl",
    name: "ダイローブT1-N L（5双入り）",
    use: "複数作業者・交換頻度を想定した備品候補（要確認）",
    url: R("ta006678-dt1nl/"),
  },
  {
    id: "ta003956-77851",
    name: "シゲマツ GL-11-26",
    use: "化学防護手袋。適合薬品・サイズは製品情報で確認",
    url: R("ta003956-77851/"),
  },
  {
    id: "ta003955-77850",
    name: "シゲマツ GL-11-37",
    use: "化学防護手袋。適合薬品・サイズは製品情報で確認",
    url: R("ta003955-77850/"),
  },
];

const MASKS: Prod[] = [
  {
    id: "ta004102-8205ds210",
    name: "3M 使い捨て式防じんマスク 8205 DS2",
    use: "粉じん作業向けの使い捨て式防じんマスク（規格・適用条件は商品ページで確認）",
    url: R("ta004102-8205ds210/"),
  },
  {
    id: "ta004325-8805ds2",
    name: "3M 使い捨て式防じんマスク 8805 DS2 排気弁付き",
    use: "排気弁付きの使い捨て式防じんマスク（規格・適用条件は商品ページで確認）",
    url: R("ta004325-8805ds2/"),
  },
  {
    id: "ta007996-gm70dml",
    name: "シゲマツ 直結式小型防毒マスク GM70D",
    use: "有機溶剤・ガス・蒸気への対策を検討する際の防毒マスク候補（吸収缶・濃度条件は要確認）",
    url: R("ta007996-gm70dml/"),
  },
];

const CHAPS: Prod[] = [
  {
    id: "ta011250-mt536orl",
    name: "MAX Mr.FOREST 防護チャップス オレンジ L",
    use: "刈払機・チェーンソー作業などの脚部保護（化学防護とは用途が異なります）",
    url: R("ta011250-mt536orl/"),
  },
  {
    id: "ta011247-mt536oll",
    name: "MAX Mr.FOREST 防護チャップス オリーブ L",
    use: "刈払機・チェーンソー作業などの脚部保護（化学防護とは用途が異なります）",
    url: R("ta011247-mt536oll/"),
  },
];

const TRUSCO_LIST = buildUrl(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html#sideNaviItems",
  UTM
);

const FAQ_ITEMS = [
  {
    q: "化学防護服と通常の作業服の違いは？",
    a: "化学防護服は薬品・洗浄液・汚染物の付着リスクを減らすための保護具です。目的が通常の作業服やレインウェアと異なるため、作業内容や薬品に応じて選ぶ必要があります。",
  },
  {
    q: "化学防護服は薬品なら何でも防げますか？",
    a: "防げません。薬品名・濃度・接触時間・飛散の有無・作業環境で必要な保護具は変わります。SDS・メーカー情報・社内のリスクアセスメントを確認してください。",
  },
  {
    q: "化学防護手袋はどう選べばよいですか？",
    a: "薬品名・濃度・接触時間・作業性・厚み・サイズを確認します。見た目が似ていても素材で耐薬品性が異なるため、用途に合うものを選びます。",
  },
  {
    q: "防毒マスクも必要ですか？",
    a: "有機溶剤・ガス・蒸気が発生する作業では確認が必要です。粉じんには防じんマスク、ガス・蒸気には防毒マスクなど、リスクに応じて選びます。",
  },
  {
    q: "帯電防止加工はどんな現場で必要ですか？",
    a: "静電気を嫌う現場、粉じんや可燃性物質を扱う可能性がある現場、電子部品・精密機器周辺などで確認したいポイントです。ただし帯電防止加工だけで火災・爆発を防げるわけではなく、現場の安全管理と併用します。",
  },
  {
    q: "化学防護服は暑くなりやすいですか？",
    a: "一般に通常の作業服より熱がこもりやすく、動きにくさも出やすいです。作業時間・休憩・水分補給・交代制・暑熱環境を考慮して運用します。",
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
      name: "化学防護服の選び方",
      item: `${SITE_URL}/articles/${SLUG}`,
    },
  ],
};

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

function ProductCard({ item }: { item: Prod }) {
  const imgId = item.imgId ?? item.id;
  return (
    <a
      href={item.url}
      target="_blank"
      rel="nofollow sponsored noopener"
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
        <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-600">
          {item.use}
        </p>
        <span className="mt-3 inline-block rounded-lg bg-gray-900 px-4 py-2 text-center text-sm font-bold text-white">
          商品ページを見る
        </span>
      </div>
    </a>
  );
}

function ProductGrid({ items }: { items: Prod[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <ProductCard key={`${item.id}-${item.name}`} item={item} />
      ))}
    </div>
  );
}

function ProductItem({ name, note }: { name: string; note?: string }) {
  return (
    <li className="border-b border-gray-100 py-2 text-sm text-gray-700 last:border-0">
      <span className="font-semibold text-gray-900">{name}</span>
      {note ? <span className="ml-2 text-gray-500">{note}</span> : null}
    </li>
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
          <span className="text-gray-700">化学防護服の選び方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          化学防護服の選び方｜薬品・洗浄・消毒作業で確認したい防護服・手袋・マスクの組み合わせ
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月13日／約15分で読めます
        </p>

        <p className={cls.body}>
          「薬品を扱う作業に、どの防護服を用意すればいいのか分からない」「防護服だけで足りるのか、手袋やマスクも要るのか判断できない」——
          法人の安全衛生担当者や現場責任者からよく聞く悩みです。本記事では、薬品作業・洗浄作業・消毒作業・廃棄物処理などの現場別に、化学防護服・化学防護手袋・防じん/防毒マスクをどう組み合わせて選ぶかを、実務目線で整理します。
        </p>

        <ArticleImg
          src={IMG.hero}
          alt="化学防護服と化学防護手袋を着用して作業準備をするイメージ"
        />

        <div className="mb-10 rounded-lg border border-gray-300 bg-gray-50 p-5">
          <p className="mb-2 font-bold text-gray-900">結論</p>
          <p className={cls.bodySm}>
            化学防護服は、薬品・洗浄液・汚染物・粉じんなどが作業者の衣服や皮膚に付着するリスクを減らすための保護具です。ただし、防護服だけで作業者を完全に守れるわけではありません。取り扱う化学物質、液体飛散・粉じん・ミスト・蒸気の有無、作業時間、暑さ、動きやすさを確認し、化学防護手袋・防じんマスク・防毒マスク・保護メガネなどと組み合わせて選ぶことが重要です。SDS（安全データシート）とリスクアセスメント結果、社内手順を確認したうえで選定するのが前提となります。
          </p>
        </div>

        <CTA
          href={SUITS[1].url}
          title="薬品・洗浄・消毒作業向けの化学防護服を確認したい方へ"
          body="東レ LIVMOA1000AS は、耐水圧スタンダードタイプ・帯電防止加工の化学防護服として、M・L・XL・XXL のサイズ展開から選べます（仕様は商品ページでご確認ください）。"
          label="化学防護服（東レ LIVMOA1000AS）を見る"
        />
        <ProductGrid items={SUITS} />

        <H2>化学防護服とは？どんな作業で必要になる？</H2>

        <H3>薬品・洗浄液・汚染物の付着を防ぐための保護具</H3>
        <p className={cls.body}>
          化学防護服は、薬品・洗浄液・汚染物などが作業者の身体や衣服に付着するリスクを減らすことを目的とした保護具です。液体の飛散や汚れの付着を想定した現場で、通常の作業着に代わって着用します。ただし、どんな薬品でも通すことなく防げる万能品ではなく、対象とする物質や飛散の程度に応じて適切なタイプを選ぶ必要があります。
        </p>

        <H3>通常の作業着・レインウェアとの違い</H3>
        <p className={cls.body}>
          レインウェアは主に雨（水）をはじくことを目的としており、薬品や溶剤への耐性を想定していません。化学防護服は、対象物質に対するバリア性を前提に設計されている点が大きく異なります。見た目が似ていても目的が違うため、作業着やレインウェアで代用しないことが基本です。
        </p>

        <H3>防護服だけでなく手袋・マスクとの組み合わせが重要</H3>
        <p className={cls.body}>
          胴体・腕・脚を覆う防護服だけでは、手元の接触や、粉じん・ミスト・蒸気の吸入までは守れません。化学防護では、防護服を単体で考えるのではなく、化学防護手袋・防じんマスク・防毒マスク・保護メガネなどを含めた「組み合わせ（アンサンブル）」として設計する考え方が国際的にも示されています。本記事でも、この組み合わせを軸に選び方を整理します。
        </p>

        <H3>化学物質のリスクアセスメントとSDS確認が前提</H3>
        <p className={cls.body}>
          どの保護具が必要かは、取り扱う化学物質の種類・濃度・作業内容によって変わります。厚生労働省は、化学物質のリスクアセスメント結果に基づくばく露防止措置や、皮膚・眼に障害を与える化学物質を扱う際の適切な保護具使用を求めているとされています。まずはSDS（安全データシート）と社内のリスクアセスメント結果を確認し、そのうえで保護具を選ぶ流れが基本です。
        </p>

        <Caution>
          化学防護服は保護具の一部であり、これだけで作業者を完全に守れるわけではありません。取り扱う薬品名・濃度・接触時間・飛散の有無を
          SDS
          とリスクアセスメントで確認し、工学的対策（局所排気・密閉化など）・作業管理・保護具を組み合わせてください。保護具は「対策が不十分な場合の最後の防衛線」と位置づけられるとされています。
        </Caution>

        <H2>化学防護服が使われやすい現場・作業</H2>
        <ArticleImg
          src={IMG.cleaning}
          alt="薬液洗浄作業で化学防護服と手袋を使うイメージ"
        />

        <H3>工場の薬品取り扱い作業</H3>
        <p className={cls.body}>
          薬品の小分け・移し替え・調合などでは、液体の飛散や手元への接触が起こりやすくなります。作業内容に応じて防護服と化学防護手袋を組み合わせます。
        </p>
        <H3>設備洗浄・薬液洗浄作業</H3>
        <p className={cls.body}>
          設備の薬液洗浄では、洗浄液の飛散や汚染水の付着が想定されます。耐水圧タイプの検討や、袖口から手袋への連続した防護が重要です。
        </p>
        <H3>清掃・除菌・消毒作業</H3>
        <p className={cls.body}>
          消毒液・除菌剤を扱う清掃作業では、薬液の付着やミスト化した薬剤の飛散に備えます。噴霧を伴う場合はマスク類の要否もあわせて確認します。
        </p>
        <H3>塗装・剥離・前処理作業</H3>
        <p className={cls.body}>
          溶剤・剥離剤・粉じん・汚れが混在する作業です。防護服に加え、有機溶剤の蒸気には防毒マスク、粉じんには防じんマスクなど、リスクに応じた呼吸用保護具の確認が必要です。
        </p>
        <H3>産業廃棄物処理・汚染物回収</H3>
        <p className={cls.body}>
          中身が明確でない汚染物を扱う場面では、付着リスクを想定した防護服・手袋を用意し、脱衣・廃棄の手順まで含めて運用します。
        </p>
        <H3>農薬・薬剤散布の補助作業</H3>
        <p className={cls.body}>
          屋外の薬剤散布補助では、液体飛散・汚れ・風向きに注意します。散布条件によってはマスク類の確認も行います。屋外・長時間になりやすいため、暑さ対策も併せて検討します。
        </p>

        <H2>化学防護服を選ぶときの確認ポイント</H2>
        <ArticleImg
          src={IMG.comparison}
          alt="化学防護服・手袋・マスクを比較するイメージ"
        />

        <H3>液体飛散・ミスト・粉じん・蒸気のどれに備えるか</H3>
        <p className={cls.body}>
          まず「何から守りたいか」を整理します。液体飛散なのか、ミストや粉じんなのか、蒸気なのかによって、必要な防護服のタイプも、併用すべきマスク類も変わります。
        </p>
        <H3>耐水圧・液体バリア性を確認する</H3>
        <p className={cls.body}>
          液体の飛散・水しぶきが想定される作業では、耐水圧タイプが選択肢になります。東レ
          LIVMOA1000AS
          は耐水圧スタンダードタイプとされていますが、具体的な適用範囲は商品ページとメーカー情報でご確認ください。
        </p>
        <H3>帯電防止加工が必要な現場か確認する</H3>
        <p className={cls.body}>
          静電気を嫌う現場や粉じんを扱う環境などでは、帯電防止加工の有無が確認ポイントになります。ただし帯電防止加工だけで火災・爆発リスクを防げるわけではないため、現場の安全管理と併用します。
        </p>
        <H3>サイズ展開と動きやすさを確認する</H3>
        <p className={cls.body}>
          小さすぎると破れやすく、大きすぎると引っかかりやすくなります。M・L・XL・XXL
          の展開から、作業姿勢や重ね着を踏まえて選びます。
        </p>
        <H3>使い捨て・短期使用・再使用可否を確認する</H3>
        <p className={cls.body}>
          再使用の可否・洗濯や交換の目安は製品によって異なります。製品情報と社内ルールにもとづき、使い捨てか短期使用かを決めます。
        </p>
        <H3>暑さ・熱こもり・着用時間を考慮する</H3>
        <p className={cls.body}>
          防護服は通常の作業着より熱がこもりやすく、視界・移動・コミュニケーションを制限する場合があるとされています。防護性能を優先しつつ、着用時間・休憩・交代制を計画します。
        </p>

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：化学防護服選びで見るポイント
            </caption>
            <thead>
              <tr>
                <Th>確認項目</Th>
                <Th>見る理由</Th>
                <Th>商品導線の目安</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>耐水圧</Td>
                <Td>液体飛散・水しぶきへの備え</Td>
                <Td>東レ LIVMOA1000AS</Td>
              </tr>
              <tr>
                <Td>帯電防止加工</Td>
                <Td>静電気を嫌う現場で確認</Td>
                <Td>東レ LIVMOA1000AS</Td>
              </tr>
              <tr>
                <Td>サイズ</Td>
                <Td>動きやすさ・破れ防止</Td>
                <Td>M / L / XL / XXL 展開</Td>
              </tr>
              <tr>
                <Td>手袋との接続</Td>
                <Td>袖口からの侵入を防ぐ</Td>
                <Td>化学防護手袋</Td>
              </tr>
              <tr>
                <Td>マスクとの併用</Td>
                <Td>吸入リスクへの対応</Td>
                <Td>防じん・防毒マスク</Td>
              </tr>
              <tr>
                <Td>着用時間</Td>
                <Td>熱こもり・疲労対策</Td>
                <Td>休憩・交代制で管理</Td>
              </tr>
              <tr>
                <Td>廃棄・保管</Td>
                <Td>汚染拡大防止</Td>
                <Td>社内ルール整備</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H2>化学防護手袋の選び方</H2>
        {/* 画像未配置: chemical-resistant-gloves-selection.jpg
        <ArticleImg
          src={IMG.gloves}
          alt="薬品作業に使う化学防護手袋を選ぶイメージ"
        />
        */}

        <H3>薬品名・濃度・接触時間を確認する</H3>
        <p className={cls.body}>
          手袋選びの出発点は、扱う薬品名・濃度・接触時間の確認です。同じ「化学防護手袋」でも、素材によって適合する薬品が異なるため、SDSやメーカー情報と照合します。
        </p>
        <H3>耐薬品性・透過・劣化の考え方</H3>
        <p className={cls.body}>
          手袋の材質は薬品を少しずつ透過したり、時間の経過で劣化したりする場合があります。「破れていない＝安全」とは限らないため、耐薬品性データと交換目安を製品情報で確認します。
        </p>
        <H3>厚手タイプと作業性のバランス</H3>
        <p className={cls.body}>
          厚手ほど防護性は高まりますが、細かい作業はしにくくなります。作業内容に応じて、防護性と作業性のバランスをとります。
        </p>
        <H3>袖口との重ね方・テープ止めの注意</H3>
        <p className={cls.body}>
          防護服の袖口と手袋の間から薬品が入り込まないよう、重ね方やテープ止めを工夫します。腕を上げたときの隙間にも注意します。
        </p>
        <H3>サイズと交換頻度を決める</H3>
        <p className={cls.body}>
          S・M・L・LL
          などのサイズと、作業ごとの交換頻度をあらかじめ決めておくと、現場での判断がぶれません。
        </p>

        <Caution>
          通常の作業手袋は化学防護手袋の代用品ではありません。素材ごとに適合する薬品・耐透過性能が異なるため、扱う薬品名・濃度・接触時間に合った化学防護手袋を選び、劣化・交換の目安は製品情報に従ってください。
        </Caution>

        <CTA
          href={GLOVES[3].url}
          title="防護服とあわせて、手元の薬品対策も確認しましょう"
          body="薬品の小分け・洗浄・廃液処理・清掃作業では、作業内容に合う化学防護手袋を組み合わせることが重要です。素材・サイズは商品ページでご確認ください。"
          label="化学防護手袋を確認する"
        />
        <ProductGrid items={GLOVES} />

        <H2>防じんマスク・防毒マスクは必要？</H2>
        <H3>粉じん作業には防じんマスクを検討する</H3>
        <p className={cls.body}>
          粉じんが発生する作業では、防じんマスク（DS2
          など）の検討が基本です。作業環境と規格に合うものを選びます。
        </p>
        <H3>有機溶剤・ガス・蒸気には防毒マスクの確認が必要</H3>
        <p className={cls.body}>
          有機溶剤の蒸気やガスが発生する作業では、防じんマスクではなく防毒マスクと適切な吸収缶の確認が必要です。対象ガスの種類・濃度条件に応じて選びます。
        </p>
        <H3>防護服・手袋だけでは吸入リスクを防げない</H3>
        <p className={cls.body}>
          防護服と手袋は付着・接触への対策であり、吸入リスクはカバーできません。粉じん・ミスト・蒸気がある場合はマスク類を別途確認します。
        </p>
        <H3>SDSや社内手順に沿って保護具を選ぶ</H3>
        <p className={cls.body}>
          呼吸用保護具の要否と種類は、SDSと社内のリスクアセスメント・作業手順に沿って判断します。迷う場合は安全衛生の担当部門や専門家に確認します。
        </p>

        <CTA
          href={MASKS[0].url}
          title="粉じん・ミスト・蒸気が発生する作業では、マスク類もあわせて確認しましょう"
          body="防護服と手袋だけでは吸入リスクを防げません。作業内容に応じて防じんマスク・防毒マスクを検討します（規格・適用条件は商品ページでご確認ください）。"
          label="防じんマスク・防毒マスクを確認する"
        />
        <ProductGrid items={MASKS} />

        <H2>作業別｜防護服・手袋・マスクの組み合わせ例</H2>
        <p className={cls.body}>
          下表は一般的な考え方の整理です。実際の選定は、扱う薬品と作業環境に応じて
          SDS・リスクアセスメントで判断してください。
        </p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：作業別に必要な化学防護用品（目安）
            </caption>
            <thead>
              <tr>
                <Th>作業</Th>
                <Th>主なリスク</Th>
                <Th>防護服</Th>
                <Th>手袋</Th>
                <Th>マスク類</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>薬品の小分け</Td>
                <Td>液体飛散・手元接触</Td>
                <Td>化学防護服</Td>
                <Td>化学防護手袋</Td>
                <Td>必要に応じて防毒マスク</Td>
              </tr>
              <tr>
                <Td>薬液洗浄</Td>
                <Td>飛散・汚染水付着</Td>
                <Td>耐水圧タイプを検討</Td>
                <Td>耐薬品手袋</Td>
                <Td>ミストがあれば確認</Td>
              </tr>
              <tr>
                <Td>消毒・除菌</Td>
                <Td>薬液付着</Td>
                <Td>化学防護服</Td>
                <Td>化学防護手袋</Td>
                <Td>ミスト・噴霧条件で確認</Td>
              </tr>
              <tr>
                <Td>塗装・剥離</Td>
                <Td>溶剤・粉じん・汚れ</Td>
                <Td>防護服</Td>
                <Td>耐薬品手袋</Td>
                <Td>防毒・防じんの確認</Td>
              </tr>
              <tr>
                <Td>廃棄物処理</Td>
                <Td>汚染物・不明物付着</Td>
                <Td>防護服</Td>
                <Td>化学防護手袋</Td>
                <Td>粉じん・臭気で確認</Td>
              </tr>
              <tr>
                <Td>屋外薬剤作業</Td>
                <Td>液体飛散・汚れ</Td>
                <Td>防護服</Td>
                <Td>化学防護手袋</Td>
                <Td>風向き・散布条件で確認</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H3>薬品の小分け・移し替え作業</H3>
        <p className={cls.body}>
          液体飛散と手元接触が中心です。防護服＋化学防護手袋を基本に、揮発性がある薬品では防毒マスクの要否を確認します。
        </p>
        <H3>薬液洗浄・清掃作業</H3>
        <p className={cls.body}>
          飛散・汚染水の付着に備え、耐水圧タイプを検討します。ミストが出る場合はマスク類も確認します。
        </p>
        <H3>消毒・除菌作業</H3>
        <p className={cls.body}>
          薬液付着への対策が中心。噴霧を伴う場合はミスト吸入への配慮が必要です。
        </p>
        <H3>塗装・剥離・前処理作業</H3>
        <p className={cls.body}>
          溶剤・粉じん・汚れが混在します。防毒・防じんの別を含め、呼吸用保護具の確認が特に重要です。
        </p>
        <H3>廃棄物処理・汚染物回収</H3>
        <p className={cls.body}>
          中身が不明な汚染物に触れる可能性があります。脱衣・廃棄手順まで含めて運用します。
        </p>
        <H3>屋外作業・農薬散布補助</H3>
        <p className={cls.body}>
          液体飛散・汚れに加え、風向き・散布条件・暑さに注意します。屋外・長時間になりやすい点を踏まえて計画します。
        </p>

        <H2>化学防護服の着脱・廃棄で注意したいこと</H2>
        <ArticleImg
          src={IMG.doffing}
          alt="化学防護服の脱衣と廃棄手順を確認するイメージ"
        />

        <H3>着用前に破れ・穴・縫い目・ファスナーを確認する</H3>
        <p className={cls.body}>
          着用前に破れ・穴・縫い目・ファスナーの状態を点検します。損傷があると防護性能が損なわれます。
        </p>
        <H3>脱ぐときに外側へ触れすぎない</H3>
        <p className={cls.body}>
          汚染された外側に触れると二次接触につながります。外側に触れにくい脱ぎ方を手順化します。
        </p>
        <H3>汚染された防護服と未使用品を分ける</H3>
        <p className={cls.body}>
          使用済み・汚染品と未使用品を明確に分け、取り違えを防ぎます。
        </p>
        <H3>再使用可否・廃棄方法は製品情報と社内ルールを確認する</H3>
        <p className={cls.body}>
          再使用の可否や廃棄方法は製品情報と社内ルール・関係法令に従います。
        </p>
        <H3>保管時は湿気・直射日光・薬品付着に注意する</H3>
        <p className={cls.body}>
          保管環境（湿気・直射日光・薬品付着）が劣化を早める場合があります。適切な保管場所を確保します。
        </p>

        <H2>化学防護服を着るときの暑さ・動きにくさ対策</H2>
        <H3>防護性能を優先しつつ着用時間を管理する</H3>
        <p className={cls.body}>
          防護性能を落とさない前提で、着用時間を区切って管理します。暑熱環境では特に重要です。
        </p>
        <H3>休憩・水分補給・交代制を考える</H3>
        <p className={cls.body}>
          こまめな休憩・水分/塩分補給・交代制を計画に組み込みます。体調不良時の報告体制も整えます。
        </p>
        <H3>熱がこもる作業では過保護・不足保護の両方に注意</H3>
        <p className={cls.body}>
          必要以上の重装備は熱ストレスを高め、逆に保護が不足すればばく露リスクが残ります。作業内容に見合った保護レベルを選びます。
        </p>
        <H3>冷却用品は防護服の性能を妨げない範囲で検討する</H3>
        <p className={cls.body}>
          冷却用品を使う場合は、防護服の防護性能や密閉性を妨げない範囲で検討します。
        </p>

        <Caution>
          化学防護服は熱がこもりやすく、長時間着用は熱中症リスクを高めます。冷却用品・休憩・水分補給は補助対策であり、これだけで熱中症を防げるわけではありません。WBGT
          の確認、こまめな休憩、水分・塩分補給、作業時間管理、体調不良時の報告体制・救急要請と併用してください（環境省・厚生労働省の情報も参照されるとよいとされています）。
        </Caution>

        <H2>法人向け｜化学防護用品の備品リスト</H2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <H3>化学防護服</H3>
            <ul className="mb-2">
              <ProductItem
                name="化学防護服 M / L / XL / XXL"
                note="作業姿勢・重ね着で選定"
              />
            </ul>
            <H3>化学防護手袋</H3>
            <ul className="mb-2">
              <ProductItem
                name="化学防護手袋 S / M / L / LL"
                note="薬品・濃度・接触時間で選定"
              />
            </ul>
            <H3>防じんマスク・防毒マスク</H3>
            <ul className="mb-2">
              <ProductItem name="防じんマスク（粉じん用）" />
              <ProductItem name="防毒マスク＋吸収缶（ガス・蒸気用）" />
            </ul>
          </div>
          <div>
            <H3>保護メガネ・フェイスシールド</H3>
            <ul className="mb-2">
              <ProductItem name="保護メガネ" note="飛散・しぶき対策" />
              <ProductItem
                name="フェイスシールド"
                note="顔面全体を守りたい場合"
              />
            </ul>
            <H3>安全靴・ブーツ・腕カバー</H3>
            <ul className="mb-2">
              <ProductItem name="安全靴・耐薬品ブーツ" />
              <ProductItem name="腕カバー" note="袖口の重ね対策" />
            </ul>
            <H3>廃棄袋・表示・保管棚</H3>
            <ul className="mb-2">
              <ProductItem name="廃棄袋・表示ラベル" />
              <ProductItem name="保管棚・着脱手順書・点検記録表" />
            </ul>
          </div>
        </div>

        <ArticleImg
          src={IMG.checklist}
          alt="法人担当者が化学防護用品の備品リストを確認するイメージ"
        />

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：購入前チェックリスト
            </caption>
            <thead>
              <tr>
                <Th>確認項目</Th>
                <Th>確認済み</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>取り扱う化学物質名を確認した</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>SDSを確認した</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>液体飛散・粉じん・ミスト・蒸気の有無を確認した</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>作業時間・作業姿勢・動きやすさを確認した</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>必要サイズを確認した</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>手袋との組み合わせを決めた</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>マスク類・保護メガネ/フェイスシールドの必要性を確認した</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>着脱手順を教育し、廃棄・保管方法を決めた</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>暑さ・休憩・水分補給のルールを決めた</Td>
                <Td>□</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：防護服・手袋・マスクの役割の違い
            </caption>
            <thead>
              <tr>
                <Th>保護具</Th>
                <Th>主に守る部位</Th>
                <Th>役割</Th>
                <Th>注意点</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>化学防護服</Td>
                <Td>胴体・腕・脚</Td>
                <Td>液体飛散・汚れ付着を減らす</Td>
                <Td>薬品すべてに万能ではない</Td>
              </tr>
              <tr>
                <Td>化学防護手袋</Td>
                <Td>手・手首</Td>
                <Td>手元の薬品接触を減らす</Td>
                <Td>薬品名・濃度・接触時間で選ぶ</Td>
              </tr>
              <tr>
                <Td>防じんマスク</Td>
                <Td>呼吸器</Td>
                <Td>粉じん吸入を減らす</Td>
                <Td>ガス・蒸気には別途確認</Td>
              </tr>
              <tr>
                <Td>防毒マスク</Td>
                <Td>呼吸器</Td>
                <Td>ガス・蒸気への対策</Td>
                <Td>吸収缶の種類・濃度条件を確認</Td>
              </tr>
              <tr>
                <Td>保護メガネ</Td>
                <Td>眼</Td>
                <Td>飛散・しぶき対策</Td>
                <Td>顔面全体はフェイスシールドも検討</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-8 rounded-lg border border-gray-300 bg-gray-50 p-5">
          <p className="mb-1 font-bold text-gray-900">
            【用途が異なる防護用品】草刈り・林業・屋外作業の脚部保護
          </p>
          <p className={`mb-4 ${cls.bodySm}`}>
            薬品対策とは別に、刈払機・チェーンソー作業などの脚部保護を確認したい場合は、防護チャップスもあります（化学防護とは目的が異なります）。
          </p>
          <ProductGrid items={CHAPS} />
        </div>

        <H2>よくある失敗</H2>
        <ol className="mb-4 list-decimal space-y-3 pl-5 leading-[1.95] tracking-[0.04em] text-gray-800">
          <li>
            <span className="font-semibold text-gray-900">
              薬品名を確認せず防護服を選ぶ
            </span>
            ：化学防護服は万能ではありません。SDS・社内手順で薬品名・濃度・飛散の有無を確認します。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              通常の作業手袋で代用する
            </span>
            ：手元は薬品に最も触れやすい部位です。用途に合う化学防護手袋を別途確認します。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              防護服だけで吸入リスクまで防げると思う
            </span>
            ：粉じん・ミスト・蒸気がある場合は防じん/防毒マスクを確認します。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              サイズが合わず動きにくい
            </span>
            ：小さすぎは破れ、大きすぎは引っかかりの原因です。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              暑さ・着用時間を考慮しない
            </span>
            ：防護服は熱ストレスや視界・移動・コミュニケーションの制限を生む場合があるとされています。休憩・交代・水分補給を計画します。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              着脱・廃棄ルールがない
            </span>
            ：汚染された外側への接触は二次リスクにつながります。手順とルールを整備します。
          </li>
        </ol>

        <H2>よくある質問</H2>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q}>
              <h3 className={cls.faqQ}>Q. {item.q}</h3>
              <p className={cls.body}>{item.a}</p>
            </div>
          ))}
        </div>

        <H2>
          まとめ｜化学防護服は「作業内容・薬品・手袋・マスク」の組み合わせで選ぶ
        </H2>
        <p className={cls.body}>
          化学防護服は、薬品・洗浄液・汚染物の付着リスクを減らす保護具ですが、単体で作業者を完全に守れるものではありません。扱う薬品・飛散リスク・粉じん/ミスト/蒸気の有無・作業時間・暑さを確認し、化学防護手袋・防じん/防毒マスク・保護メガネと組み合わせて選ぶことが重要です。SDS・リスクアセスメント・社内手順・保護具教育を前提に、作業別に必要な組み合わせを決めていきましょう。
        </p>
        <p className={cls.body}>
          関連記事：
          <Link
            href="/articles/insulated-tool-basics"
            className="text-gray-900 underline hover:no-underline"
          >
            絶縁工具とは？
          </Link>
          ／
          <Link
            href="/articles/solar-pv-tool-set-selection"
            className="text-gray-900 underline hover:no-underline"
          >
            太陽光発電向け工具セットの選び方
          </Link>
        </p>

        <FinalCTA
          href={TRUSCO_LIST}
          title="化学防護用品は「防護服＋手袋＋マスク＋保護メガネ」でまとめて確認"
          body="薬品作業・洗浄作業・消毒作業・廃棄物処理に必要な保護具をまとめて確認できます。仕様・在庫・価格は商品ページでご確認ください。"
          label="トラスコ中山商品一覧を見る"
        />
      </main>
      <SiteFooter />
    </>
  );
}
