import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sagyou-navi.com"),
  title: "エアブローを自動化する方法｜切粉・切削油の飛散防止と後付けユニット選び",
  description:
    "エアブロー作業をセンサーで自動化し、切粉・切削油の飛散と無駄な圧縮空気を抑える方法を解説。20J-AU・40J-AUの違い、YMS本体への適合、圧力・時間・ノズル設定、導入前チェックまでまとめます。",
  alternates: {
    canonical:
      "https://sagyou-navi.com/articles/air-blow-automation-chip-mist-control",
  },
  openGraph: {
    type: "article",
    title: "エアブローを自動化する方法｜切粉・切削油の飛散防止と後付けユニット選び",
    description:
      "工作機械サイドのエアブローを自動化し、飛散・無駄吹き・作業ばらつきを減らす法人向けガイド。",
    url: "https://sagyou-navi.com/articles/air-blow-automation-chip-mist-control",
    images: [
      "/images/air-blow-automation-chip-mist-control/air-blow-automation-chip-mist-control-hero.jpg",
    ],
  },
};

const UTM = "utm_source=sagyou_navi";
function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}
const R = (slug: string) =>
  buildUrl(`https://item.rakuten.co.jp/crecote-shop/${slug}`, UTM);
const IMG = (file: string) => `/products/${file}`;
const HERO = (file: string) =>
  `/images/air-blow-automation-chip-mist-control/${file}`;

const PAGE_URL =
  "https://sagyou-navi.com/articles/air-blow-automation-chip-mist-control";
const HOME_URL = "https://sagyou-navi.com/";

type Product = {
  id: string;
  code: string;
  short: string;
  name: string;
  image: string;
  url: string;
  group: string;
  spec: string;
  use: string;
  solves: string;
  check: string;
  cta: string;
  featured?: boolean;
};

const products: Product[] = [
  {
    id: "20jau",
    code: "20J-AU",
    short: "淀川電機 自動エアブローユニット 20J-AU",
    name: "淀川電機 エアブロー専用作業台 YMS20J専用オプション 自動エアブローユニット 20J-AU",
    image: "ta053784-20jau.jpg",
    url: R("ta053784-20jau/"),
    group: "YMS20J専用・主力商品",
    spec:
      "YMS20JA／YMS20JB専用、単相100V、適正圧縮空気圧0.15〜0.7MPa、ノズル2本、本体幅460mm",
    use:
      "既設のYMS20JA／Bで、小〜中型ワークのエアブローをセンサー式に後付け自動化したい現場",
    solves:
      "両手でワークを保持し、噴出時間・流量・ノズル位置を標準化しやすくする",
    check:
      "単体では使用不可。YMS20JA／Bへの適合、現行品・後継品、電源、圧縮空気、設置寸法、吸引可能な切削油を確認。",
    cta: "YMS20J用20J-AUを確認する",
    featured: true,
  },
  {
    id: "40jau",
    code: "40J-AU",
    short: "淀川電機 自動エアブローユニット 40J-AU",
    name: "淀川電機 エアブロー専用作業台 YMS40J専用オプション 自動エアブローユニット 40J-AU",
    image: "ta053801-40jau.jpg",
    url: R("ta053801-40jau/"),
    group: "YMS40J専用・主力商品",
    spec:
      "YMS40JA／YMS40JB専用、単相100V、適正圧縮空気圧0.15〜0.7MPa、ノズル2本、本体幅625mm",
    use:
      "既設のYMS40JA／Bで、より広い作業スペースのエアブローを自動化したい現場",
    solves:
      "手作業のばらつき・無駄吹きを抑え、ロボットラインや次工程前へ組み込みやすくする",
    check:
      "単体では使用不可。YMS40JA／Bへの適合、現行品・後継品、設置幅・奥行、電源、圧縮空気、搬入条件を確認。",
    cta: "YMS40J用40J-AUを確認する",
    featured: true,
  },
  {
    id: "jbas481",
    code: "JBA-S481",
    short: "サンハヤト ヨンエーブロー",
    name: "サンハヤト ホコリ飛ばし用エアーブロー ヨンエーブロー JBA-S481",
    image: "ta009009-jbas481.jpg",
    url: R("ta009009-jbas481/"),
    group: "電子機器のスポット清掃",
    spec:
      "不燃性ガスHFC-134a、350ml、逆さ吹き対応、集中・拡散の2Wayノズル",
    use:
      "キーボード、プリンター、センサー部など、少量のホコリを局所的に飛ばす保守作業",
    solves:
      "コンプレッサ配管がない場所で、短時間のスポット清掃を行う",
    check:
      "連続生産工程や大量の切粉・切削油回収の代替ではない。換気、缶の保管、対象機器の電源停止、環境負荷を確認。",
    cta: "スポット清掃用JBA-S481を見る",
  },
  {
    id: "kdcus01",
    code: "KDC-US01",
    short: "コトヒラ 粉体用小型集塵機",
    name: "コトヒラ 粉体用小型集塵機 KDC-US01",
    image: "ta054097-kdcus01.jpg",
    url: R("ta054097-kdcus01/"),
    group: "乾燥粉体の発生源集塵",
    spec:
      "単相100V、処理風量5m³/min、最大静圧2.1kPa、5μm以上を99％以上捕集、風量4段階",
    use:
      "食品・医薬・化粧品等の乾燥粉体を、適合フードとダクトで発生源付近から吸引する作業",
    solves:
      "作業台下へ収めやすい小型機で、乾燥粉体の飛散を発生源近くから捕集する",
    check:
      "可燃性・爆発性粉じん、油、液体、オイルミストは吸引不可。対象粉体、フード、帯電防止ダクト、後継品を確認。",
    cta: "乾燥粉体用KDC-US01を見る",
  },
];

const byId = Object.fromEntries(products.map((product) => [product.id, product]));

const faqs = [
  {
    q: "エアブロー作業はどのように自動化できますか？",
    a: "ワーク検知センサー、固定したエアノズル、流量調整、噴出時間タイマーを組み合わせます。集塵作業台の吸引中にだけ噴出し、ワーク投入・検知・ブロー・取り出しの手順を標準化します。",
  },
  {
    q: "20J-AUと40J-AUは単体で使えますか？",
    a: "使えません。20J-AUはYMS20JA／YMS20JB、40J-AUはYMS40JA／YMS40JB専用のオプションです。その他の機械へは使用できないため、本体銘板を確認してから注文します。",
  },
  {
    q: "20J-AUと40J-AUの違いは何ですか？",
    a: "主な違いは適合するYMS本体と外形寸法です。20J-AUはYMS20J、40J-AUはYMS40J用です。能力の上下だけで選ばず、既設本体の型式で選びます。",
  },
  {
    q: "既設のYMSへ後付けできますか？",
    a: "メーカーはYMS-J型導入後でも別途自動エアブローユニットを購入し、設置できると案内しています。ただし本体の型式、状態、現行仕様、後継品、施工条件を確認してください。",
  },
  {
    q: "必要な圧縮空気圧はどのくらいですか？",
    a: "20J-AU・40J-AUの適正圧縮空気圧は0.15〜0.7MPaです。上限まで上げるのではなく、切粉が取れ、飛散と騒音を抑えられる最低限の設定から試運転します。",
  },
  {
    q: "エアブローの時間は何秒に設定すればよいですか？",
    a: "ワーク形状、穴・溝、切粉量、切削油量、次工程の要求で変わります。メーカー資料では標準タイマー0〜10秒が案内されていますが、最短で再ブローが発生しない時間を現場試験で決めます。",
  },
  {
    q: "エア圧を高くすれば切粉はよく取れますか？",
    a: "必ずしもそうではありません。高圧化は切粉・油の再飛散、騒音、空気消費を増やす場合があります。ノズル距離、角度、先端形状、囲い、吸引方向、噴出時間を先に調整します。",
  },
  {
    q: "ノズルはワークからどのくらい離しますか？",
    a: "一律の距離はありません。対象部へ必要な衝突力が届き、切粉が作業者側へ飛ばず、吸引気流へ入る位置を試験します。ワークごとの標準位置を写真や治具で再現できるようにします。",
  },
  {
    q: "自動エアブローで両手が使えるメリットは何ですか？",
    a: "片手でエアガンを持つ必要がなく、ワークを両手で安定して保持しやすくなります。ただし、挟まれ・落下・鋭利部への接触を防ぐ保持方法と治具は別途検討します。",
  },
  {
    q: "ロボットラインへ組み込めますか？",
    a: "メーカーはロボットライン等への工程組込を用途として案内しています。センサー検出、ロボット可動域、エア・電源配線、非常停止、インターロック、タクトを設備設計者と確認します。",
  },
  {
    q: "透明や光沢のあるワークもセンサーで検知できますか？",
    a: "透過型センサーは様々な色・形状への対応が案内されていますが、実ワークで検出試験が必要です。透明、穴あき、反射、位置ずれ、治具の影響を量産前に確認します。",
  },
  {
    q: "エアブロー作業台は切粉と切削油を回収できますか？",
    a: "YMSは切削油や切削粉が付着したワークのエアブロー時に、飛散ミストと切削粉をまとめて回収する用途です。ただし切削油・洗浄液の引火点や成分によって吸引できないものがあります。",
  },
  {
    q: "引火性の切削油や洗浄液も吸引できますか？",
    a: "一律には吸引できません。メーカー資料では引火点120℃以下の切削油、引火点135℃以下の洗浄液は吸引・使用不可とする注意があります。最新取扱説明書とメーカー確認を優先してください。",
  },
  {
    q: "集塵機を止めたまま自動エアブローしてもよいですか？",
    a: "切粉・ミストを周囲へ飛散させるため避けます。吸引状態、フード内気流、フィルタ・ドレンの状態を確認してからブローし、可能なら運転条件をインターロックします。",
  },
  {
    q: "JBA-S481は自動エアブローユニットの代わりになりますか？",
    a: "なりません。JBA-S481は電子機器などのホコリを短時間に飛ばすエアゾール製品です。連続生産工程の自動化、切粉・切削油の回収、集塵作業台との連動用途とは別です。",
  },
  {
    q: "JBA-S481は可燃性ガスですか？",
    a: "メーカーはHFC-134aを使用した不燃性ダストブロワーとして案内しています。ただし缶の保管、換気、対象機器の停止、噴射による低温、環境負荷などの取扱注意を確認します。",
  },
  {
    q: "KDC-US01は切削油ミストの集塵に使えますか？",
    a: "本記事では推奨しません。KDC-US01は乾燥粉体向けで、油・液体・オイルミスト用のYMSとは用途が異なります。吸引物の状態をメーカーへ伝えて機種を選定します。",
  },
  {
    q: "KDC-US01で可燃性粉じんを吸引できますか？",
    a: "できません。メーカーとオレンジブックは可燃性粉じん・爆発性粉じんの吸引不可と明記しています。粉じん爆発性、静電気、設備適合を専門家と評価してください。",
  },
  {
    q: "エアブローの省エネ効果はどのように測りますか？",
    a: "導入前後で、1個当たり噴出時間、1日処理数、再ブロー率、コンプレッサ負荷、周辺清掃時間を同条件で測ります。メーカーの一般的な省エネ表現だけで固定削減率を設定しません。",
  },
  {
    q: "自動化するとサイクルタイムは必ず短くなりますか？",
    a: "必ずではありません。検知待ち、ワーク投入、治具位置決め、吸引時間、取り出しを含めて測ります。両手保持や工程標準化に価値がある場合もあり、時間だけで評価しません。",
  },
  {
    q: "調整や点検は運転したままできますか？",
    a: "行いません。取扱説明書に従い、元電源を遮断し、誤って投入されない管理を行います。アース、ブレーカー、コード、エア圧を確認してから再起動します。",
  },
  {
    q: "エアブロー時に必要な保護具は何ですか？",
    a: "飛散物に応じて保護眼鏡、フェイスシールド、手袋、作業服、呼吸用保護具、聴覚保護具等をリスクアセスメントで選びます。集塵設備があることだけで保護具不要とは判断しません。",
  },
  {
    q: "20J-AU・40J-AUに後継品はありますか？",
    a: "オレンジブックでは40J-AUに後継品表示があり、商品状態は変わる可能性があります。20J-AUも含め、購入前に現行品、後継型式、在庫、取付互換性を販売店・メーカーへ確認します。",
  },
  {
    q: "購入前にメーカーへ何を伝えればよいですか？",
    a: "YMS本体型式、ワーク寸法・形状、切粉と切削油の種類、1日処理数、希望タクト、電源、圧縮空気、ロボット有無、周囲温度、吸引物の引火点、ノズル変更要望を伝えます。",
  },
];

const references = [
  {
    label: "淀川電機 エアブロー専用作業台YMS",
    url: "https://www.yodogawadenki.co.jp/products/YES/YMS.html",
  },
  {
    label: "淀川電機 エアブロー集塵作業台YMSカタログ",
    url: "https://www.yodogawadenki.co.jp/Catalog/YMS.pdf",
  },
  {
    label: "淀川電機 YMS-J取扱説明書",
    url: "https://www.yodogawadenki.co.jp/Manual/YMS-J.pdf",
  },
  {
    label: "オレンジブック 20J-AU商品情報",
    url: "https://www.orange-book.com/ja/c/products/index.html?itemCd=20JAU+++++++++++++++++++++++++8113",
  },
  {
    label: "オレンジブック 40J-AU商品情報",
    url: "https://www.orange-book.com/ja/c/products/index.html?itemCd=40JAU+++++++++++++++++++++++++8113",
  },
  {
    label: "サンハヤト ヨンエーブロー JBA-S481",
    url: "https://shop.sunhayato.co.jp/products/jba-s481",
  },
  {
    label: "コトヒラ 粉体用小型集塵機 KDC-US01",
    url: "https://www.kotohira.biz/products/small-dust-collector",
  },
  {
    label: "厚生労働省 研削・研磨作業の粉じん・ミスト対策",
    url: "https://anzeninfo.mhlw.go.jp/user/anzen/kag/pdf/taisaku/GrindingPolishing201903.pdf",
  },
  {
    label: "Google Search Central 生成AI検索向け最適化ガイド",
    url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
  },
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "エアブロー作業を自動化するには？切粉・切削油の飛散防止と後付けユニットの選び方",
  description:
    "エアブローの自動化、切粉・切削油の飛散防止、20J-AU・40J-AUの選び方を解説します。",
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  author: { "@type": "Organization", name: "作業用品ナビ編集部" },
  publisher: {
    "@type": "Organization",
    name: "グリーンクロスホールディングス",
  },
  mainEntityOfPage: PAGE_URL,
  image: [
    `${HOME_URL}images/air-blow-automation-chip-mist-control/air-blow-automation-chip-mist-control-hero.jpg`,
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: HOME_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: `${HOME_URL}articles`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "エアブロー自動化と飛散防止",
      item: PAGE_URL,
    },
  ],
};

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-5 mt-12 scroll-mt-24 border-l-4 border-gray-900 pl-3 text-2xl font-bold text-gray-900"
    >
      {children}
    </h2>
  );
}
function H3({ children }: { children: ReactNode }) {
  return <h3 className="mb-3 mt-8 text-xl font-bold text-gray-900">{children}</h3>;
}
function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <section className="my-7 rounded-xl border-2 border-gray-900 bg-gray-50 p-5 shadow-sm">
      <p className="mb-2 text-sm font-bold text-gray-700">結論</p>
      <div className="space-y-3 leading-8 text-gray-800">{children}</div>
    </section>
  );
}
function Caution({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-7 rounded-xl border border-red-300 bg-red-50 p-5">
      <p className="mb-2 font-bold text-red-900">{title}</p>
      <div className="space-y-2 leading-7 text-red-950">{children}</div>
    </aside>
  );
}
function Note({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-7 rounded-xl border border-slate-300 bg-slate-50 p-5">
      <p className="mb-2 font-bold text-slate-900">{title}</p>
      <div className="space-y-2 leading-7 text-slate-800">{children}</div>
    </aside>
  );
}
function Figure({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-7 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        priority={priority}
        className="h-auto w-full"
      />
      <figcaption className="px-4 py-3 text-sm leading-6 text-gray-600">
        {alt}
      </figcaption>
    </figure>
  );
}
function Th({ children }: { children: ReactNode }) {
  return (
    <th className="border border-gray-300 bg-gray-900 px-3 py-3 text-left text-sm font-bold text-white">
      {children}
    </th>
  );
}
function Td({ children }: { children: ReactNode }) {
  return (
    <td className="border border-gray-300 px-3 py-3 align-top text-sm leading-6 text-gray-800">
      {children}
    </td>
  );
}
function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ${
        product.featured
          ? "border-2 border-gray-900"
          : "border border-gray-200"
      }`}
    >
      <div className="relative aspect-[4/3] bg-white p-3">
        <Image
          src={IMG(product.image)}
          alt={`${product.short}の商品画像`}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          priority={priority}
          className="object-contain p-3"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 inline-flex w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
          {product.group}
        </p>
        <h3 className="text-lg font-bold leading-7 text-gray-900">
          {product.short}
        </h3>
        <p className="mt-1 text-sm text-gray-500">型番：{product.code}</p>
        <dl className="mt-4 space-y-3 text-sm leading-6">
          <div>
            <dt className="font-bold text-gray-900">主な仕様</dt>
            <dd className="text-gray-700">{product.spec}</dd>
          </div>
          <div>
            <dt className="font-bold text-gray-900">向く作業</dt>
            <dd className="text-gray-700">{product.use}</dd>
          </div>
          <div>
            <dt className="font-bold text-gray-900">解決したい課題</dt>
            <dd className="text-gray-700">{product.solves}</dd>
          </div>
          <div className="rounded-lg bg-amber-50 p-3">
            <dt className="font-bold text-gray-900">購入前確認</dt>
            <dd className="text-gray-700">{product.check}</dd>
          </div>
        </dl>
        <a
          href={product.url}
          target="_blank"
          rel="nofollow sponsored"
          className="mt-5 inline-flex min-h-12 items-center justify-center rounded-lg bg-gray-900 px-4 py-3 text-center font-bold text-white transition hover:bg-gray-700"
        >
          {product.cta} →
        </a>
      </div>
    </article>
  );
}
function ProductGrid({
  ids,
  priorityFirst = false,
}: {
  ids: string[];
  priorityFirst?: boolean;
}) {
  return (
    <div className="my-7 grid gap-5 md:grid-cols-2">
      {ids.map((id, index) => (
        <ProductCard
          key={id}
          product={byId[id]}
          priority={priorityFirst && index < 2}
        />
      ))}
    </div>
  );
}
function CTA({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center rounded-lg bg-gray-900 px-5 py-3 font-bold text-white transition hover:bg-gray-700"
    >
      {children}
    </a>
  );
}
function ProductCTA({ productId, label }: { productId: string; label: string }) {
  return (
    <a
      href={byId[productId].url}
      target="_blank"
      rel="nofollow sponsored"
      className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-gray-900 bg-white px-5 py-3 font-bold text-gray-900 transition hover:bg-gray-100"
    >
      {label} →
    </a>
  );
}

export default function Page() {
  const mistakes = [
    "20J-AU・40J-AUを単体で使える装置だと思って注文する",
    "YMS20J用とYMS40J用の適合を逆にする",
    "本体の銘板と型式末尾A・Bを確認しない",
    "現行品・後継品・取付互換性を確認しない",
    "コンプレッサ能力と圧力変動を確認しない",
    "圧力を上げるほど切粉が取れると考える",
    "ノズルをワークから離しすぎる",
    "ノズルを作業者や開口部の外へ向ける",
    "集塵機を運転せずに自動ブローする",
    "噴出時間を長くしたまま見直さない",
    "ワーク形状ごとのセンサー検出を試さない",
    "透明・光沢・穴あきワークの検知を量産前に確認しない",
    "両手が空けばワーク保持も安全になると思い込む",
    "ロボットの可動域とノズル・フードの干渉を確認しない",
    "電源線やエアホースをロボット動線へ通す",
    "飛ばした切粉・油の回収先と廃棄方法を決めない",
    "引火点や成分を確認せず切削油・洗浄液を吸引する",
    "可燃性・爆発性粉じんを一般の小型集塵機で吸引する",
    "JBA-S481を連続生産工程の自動ブロー代替にする",
    "KDC-US01で油・液体・オイルミストを吸引する",
    "フィルタ目詰まり・集液・ドレンを点検しない",
    "タイマーや流量の調整時に元電源を切らない",
    "アース、ブレーカー作動、過負荷原因を確認しない",
    "導入前後の噴出時間・再ブロー率・清掃時間を測らない",
    "自動エアブロー導入だけで粉じん・ミスト対策が完了したと判断する",
  ];

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />

        <p className="text-sm font-medium text-gray-600">
          作業用品ナビ編集部｜公開日・更新日：2026年7月22日
        </p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
          エアブロー作業を自動化するには？切粉・切削油の飛散防止と後付けユニットの選び方
        </h1>
        <p className="mt-5 leading-8 text-gray-700">
          加工後のワークへ手持ちエアガンを当てる作業は、作業者ごとに時間・角度・圧力が変わりやすく、切粉や切削油を工作機械の外へ再飛散させる原因にもなります。本記事では、センサー式の自動エアブローと集塵作業台を組み合わせる方法、20J-AU・40J-AUの適合、設定・試運転・効果測定まで整理します。
        </p>

        <Figure
          src={HERO("air-blow-automation-chip-mist-control-hero.jpg")}
          alt="自動エアブローと集塵作業台で切粉や切削油の飛散を抑える金属加工現場"
          priority
        />

        <AnswerBox>
          <p>
            <strong>
              エアブローの自動化は、ワーク検知センサー、位置決めしたノズル、流量調整、噴出時間タイマーを組み合わせ、集塵作業台の吸引中だけ必要量を吹く方法が基本です。
            </strong>
          </p>
          <p>
            淀川電機20J-AUはYMS20JA／B、40J-AUはYMS40JA／B専用で、単体では使用できません。どちらも単相100V、適正圧縮空気圧0.15〜0.7MPa、ノズル2本です。切粉・切削油の飛散対策では、圧力を上げる前にノズル位置、囲い、吸引方向、噴出時間を調整します。
          </p>
        </AnswerBox>

        <div className="flex flex-wrap gap-3">
          <ProductCTA productId="20jau" label="YMS20J用20J-AUを見る" />
          <ProductCTA productId="40jau" label="YMS40J用40J-AUを見る" />
          <CTA href="#comparison">20J-AUと40J-AUを比較する</CTA>
        </div>

        <ProductGrid ids={["20jau", "40jau"]} priorityFirst />

        <Caution title="20J-AU・40J-AUは、YMS本体なしでは使用できません">
          <p>
            20J-AUはYMS20JA／YMS20JB、40J-AUはYMS40JA／YMS40JB専用の後付けオプションです。商品画像だけを見て、独立したエアブロー装置として発注しないでください。購入前に本体銘板、現行品・後継品、電源、圧縮空気、周囲寸法を確認します。
          </p>
        </Caution>

        <nav
          className="my-9 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          aria-label="目次"
        >
          <p className="mb-3 font-bold text-gray-900">この記事の目次</p>
          <ol className="grid gap-2 text-sm leading-6 text-gray-700 sm:grid-cols-2">
            {[
              ["conclusion", "自動化前の4条件"],
              ["problems", "エアブローの課題"],
              ["methods", "4方式の違い"],
              ["mechanism", "自動化の仕組み"],
              ["units", "20J-AU・40J-AUとは"],
              ["comparison", "20J-AUと40J-AU比較"],
              ["capture", "切粉・切削油の飛散防止"],
              ["settings", "ノズル・圧力・時間設定"],
              ["manual-robot", "手作業とロボット"],
              ["kpi", "効果測定KPI"],
              ["aerosol", "JBA-S481の用途"],
              ["powder", "KDC-US01の用途"],
              ["safety", "安全対策"],
              ["deployment", "導入・試運転"],
              ["mistakes", "よくある失敗"],
              ["checklist", "法人チェックリスト"],
              ["faq", "よくある質問"],
              ["summary", "まとめ"],
            ].map(([id, label]) => (
              <li key={id}>
                <a
                  className="underline decoration-gray-400 underline-offset-4 hover:text-black"
                  href={`#${id}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <H2 id="conclusion">結論｜エアブロー自動化は4条件を先に確認する</H2>
        <ol className="space-y-4 pl-6 leading-8 text-gray-700">
          <li>
            <strong>何を除去するか：</strong>
            乾いた切粉、切削油、水分、粉体、電子機器のホコリを分ける。
          </li>
          <li>
            <strong>どこへ回収するか：</strong>
            作業者や工場内へ吹き飛ばさず、囲いと吸引気流へ入れる。
          </li>
          <li>
            <strong>どの本体へ取り付けるか：</strong>
            YMS20JA／Bなら20J-AU、YMS40JA／Bなら40J-AUを選ぶ。
          </li>
          <li>
            <strong>何を標準化するか：</strong>
            ノズル位置、圧力、噴出時間、ワーク位置、センサー検出、点検を記録する。
          </li>
        </ol>
        <p className="mt-5 leading-8 text-gray-700">
          自動化の目的は、ただ作業者の手からエアガンを外すことではありません。必要な場所へ必要な時間だけエアを当て、飛散物を集塵作業台へ回収し、誰が作業しても同じ結果へ近づけることです。
        </p>

        <H2 id="problems">エアブロー作業で起きやすい4つの課題</H2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <Th>症状</Th>
                <Th>主な原因</Th>
                <Th>見直すポイント</Th>
                <Th>導入候補</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>作業者ごとに仕上がりが違う</Td>
                <Td>ノズル角度・距離・時間が一定でない</Td>
                <Td>固定ノズル、ワーク位置、タイマー</Td>
                <Td>20J-AU／40J-AU</Td>
              </tr>
              <tr>
                <Td>片手保持でワークが不安定</Td>
                <Td>片手でエアガンを持っている</Td>
                <Td>両手保持、治具、センサー起動</Td>
                <Td>自動エアブローユニット</Td>
              </tr>
              <tr>
                <Td>切粉・油が周囲へ飛ぶ</Td>
                <Td>開放空間、高圧、吸引不足</Td>
                <Td>囲い、吸引方向、最低必要圧力</Td>
                <Td>YMS集塵作業台との組み合わせ</Td>
              </tr>
              <tr>
                <Td>圧縮空気の使用量が多い</Td>
                <Td>長時間の無駄吹き、再ブロー</Td>
                <Td>タイマー、流量、再ブロー率</Td>
                <Td>センサー式自動化</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <Figure
          src={HERO("manual-vs-automatic-air-blow-workflow.jpg")}
          alt="手持ちエアガン作業とセンサー式自動エアブローを比較するイメージ"
        />

        <H2 id="methods">手持ちエアガン・エアゾール・自動ユニット・集塵作業台の違い</H2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <Th>方式</Th>
                <Th>向く作業</Th>
                <Th>強み</Th>
                <Th>限界・注意</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>手持ちエアガン</Td>
                <Td>形状が頻繁に変わる単発作業</Td>
                <Td>狙う位置を柔軟に変えられる</Td>
                <Td>片手を使い、時間・角度がばらつく</Td>
              </tr>
              <tr>
                <Td>エアゾール式ダストブロワー</Td>
                <Td>電子機器の少量ホコリ除去</Td>
                <Td>コンプレッサがない場所で使える</Td>
                <Td>連続工程・切粉・油回収には不向き</Td>
              </tr>
              <tr>
                <Td>センサー式自動ユニット</Td>
                <Td>繰り返しワーク、両手作業、標準化</Td>
                <Td>流量・時間・ノズル位置を固定</Td>
                <Td>適合本体、検出試験、電源・エアが必要</Td>
              </tr>
              <tr>
                <Td>集塵作業台</Td>
                <Td>切粉・ミストを囲い内で回収</Td>
                <Td>吹き飛ばした異物の回収先をつくる</Td>
                <Td>吸引物・フィルタ・ドレンの適合確認が必要</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-5 leading-8 text-gray-700">
          4方式は競合商品ではなく、目的が異なります。工作機械から取り出したワークを繰り返し処理するなら、集塵作業台と自動ユニットの組み合わせが中心です。電子機器の局所清掃や乾燥粉体の吸引は、別の機器を選びます。
        </p>
        <ProductGrid ids={["jbas481", "kdcus01"]} />
        <Figure
          src={HERO("air-blow-method-comparison-workstation.jpg")}
          alt="エアガン・エアゾール・自動ユニット・集塵作業台の用途を比較するイメージ"
        />

        <H2 id="mechanism">エアブローを自動化する仕組み</H2>
        <H3>ワークを検知して必要な時間だけ噴出する</H3>
        <p className="leading-8 text-gray-700">
          20J-AU・40J-AUは、作業台の吸い込みフード入口に取り付けたセンサーでワーク等を検知し、2本のノズルから自動的にエアを噴出する仕組みです。作業者がトリガーを握り続ける代わりに、センサー位置とタイマーが作業の開始・終了を揃えます。
        </p>
        <H3>ノズルを固定して再現性を高める</H3>
        <p className="leading-8 text-gray-700">
          フレキシブルノズルはワークの穴、溝、ポケット、外周などへ向きを調整できます。ワークごとに位置が変わるなら、治具・ストッパー・写真付き標準書で再現できるようにします。
        </p>
        <H3>流量と時間を分けて調整する</H3>
        <p className="leading-8 text-gray-700">
          流量を増やすことと、噴出時間を長くすることは別の調整です。最初は低い流量・短い時間から始め、除去不足、再ブロー、飛散、騒音、エア使用量を見ながら一項目ずつ変更します。
        </p>

        <H2 id="units">淀川電機20J-AU・40J-AUとは</H2>
        <p className="leading-8 text-gray-700">
          淀川電機のYMSは、工作機械サイドで切削油や切削粉が付着したワークをエアブローし、飛散ミストと切削粉を回収する専用集塵作業台です。20J-AU・40J-AUは、そのYMS-J型へ後付けしてエアブローを自動化する専用オプションです。
        </p>
        <ul className="mt-5 space-y-3 pl-6 leading-8 text-gray-700">
          <li>高精度センサーでワーク・作業者・ロボットを検知</li>
          <li>フレキシブルノズル2本をワークに合わせて位置決め</li>
          <li>スピードコントローラーで流量を調整</li>
          <li>タイマーで噴出時間を設定</li>
          <li>既設YMS-J型へ後付け可能</li>
          <li>手作業の両手化とロボットライン組込の両方を想定</li>
        </ul>
        <Note title="自動ユニットだけでは飛散物を回収できない">
          <p>
            自動ユニットの役割は、エアを決めた位置・時間で噴出することです。飛ばした切粉・切削油を回収するのは適合するYMS本体の囲い・吸引・フィルタ・集液機構です。両方の状態を確認して使います。
          </p>
        </Note>

        <H2 id="comparison">20J-AUと40J-AUの違い</H2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <Th>比較項目</Th>
                <Th>20J-AU</Th>
                <Th>40J-AU</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>適合本体</Td>
                <Td>YMS20JA／YMS20JB</Td>
                <Td>YMS40JA／YMS40JB</Td>
              </tr>
              <tr>
                <Td>電源</Td>
                <Td>単相100V・50/60Hz</Td>
                <Td>単相100V・50/60Hz</Td>
              </tr>
              <tr>
                <Td>適正圧縮空気圧</Td>
                <Td>0.15〜0.7MPa</Td>
                <Td>0.15〜0.7MPa</Td>
              </tr>
              <tr>
                <Td>ノズル</Td>
                <Td>2本</Td>
                <Td>2本</Td>
              </tr>
              <tr>
                <Td>本体寸法</Td>
                <Td>幅460×奥行415×高さ489mm</Td>
                <Td>幅625×奥行515×高さ489mm</Td>
              </tr>
              <tr>
                <Td>質量</Td>
                <Td>9kg</Td>
                <Td>12kg</Td>
              </tr>
              <tr>
                <Td>選び方</Td>
                <Td>既設本体がYMS20Jであること</Td>
                <Td>既設本体がYMS40Jであること</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-5 leading-8 text-gray-700">
          20と40は、処理能力ランキングで選ぶものではありません。既設または同時購入するYMS本体の型式に合わせます。ワークが大きいから40J-AUだけを購入する、という選び方はできません。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ProductCTA productId="20jau" label="20J-AUの商品仕様を見る" />
          <ProductCTA productId="40jau" label="40J-AUの商品仕様を見る" />
        </div>
        <Figure
          src={HERO("yms20-yms40-auto-unit-size-selection.jpg")}
          alt="小型と大型のエアブロー集塵作業台に適合する自動ユニットを確認するイメージ"
        />

        <H2 id="capture">切粉・切削油・オイルミストの飛散を抑える方法</H2>
        <H3>工作機械内で除去できるものは先に除去する</H3>
        <p className="leading-8 text-gray-700">
          大量の切粉や切削油を付けたまま機外へ持ち出すと、作業台側の負荷と飛散量が増えます。工作機械の安全な停止手順に従い、機内で排出・ドレン・切粉処理できる範囲を先に見直します。
        </p>
        <H3>エアの向きと吸引の向きを一致させる</H3>
        <p className="leading-8 text-gray-700">
          ノズルから作業者側へ吹くのではなく、ワーク表面から剥がれた切粉・油滴がフード内の吸引気流へ入る角度をつくります。二方向から吹く場合も、互いにぶつけて開口部へ押し出さないようにします。
        </p>
        <H3>圧力より囲い・距離・時間を先に調整する</H3>
        <p className="leading-8 text-gray-700">
          高圧・長時間のエアブローは、飛散距離、騒音、圧縮空気使用量を増やします。開口部を狭める、ワークを奥へ置く、ノズルを近づける、短いパルスで当てるなど、発生源捕集の考え方で調整します。
        </p>
        <Caution title="切削油・洗浄液の吸引可否を必ず確認">
          <p>
            メーカー資料では、引火点120℃以下の切削油、引火点135℃以下の洗浄液は吸引・使用できない旨が示されています。製品・液剤の仕様は変更される可能性があるため、使用液のSDSと最新取扱説明書をメーカーへ提示して確認してください。
          </p>
        </Caution>
        <Figure
          src={HERO("air-blow-chip-oil-mist-capture-flow.jpg")}
          alt="切粉と切削油ミストを作業者側へ飛ばさず集塵作業台で回収するイメージ"
        />

        <H2 id="settings">ノズル位置・圧力・噴出時間の設定手順</H2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <Th>設定項目</Th>
                <Th>開始条件</Th>
                <Th>不足時の見直し</Th>
                <Th>過剰時の兆候</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>ワーク位置</Td>
                <Td>毎回同じストッパー位置</Td>
                <Td>治具・受け・向きを追加</Td>
                <Td>置き直しが多い</Td>
              </tr>
              <tr>
                <Td>ノズル距離・角度</Td>
                <Td>対象部へ近く、吸引方向へ吹く</Td>
                <Td>穴・溝へ向きを分ける</Td>
                <Td>開口部外へ切粉が飛ぶ</Td>
              </tr>
              <tr>
                <Td>圧力・流量</Td>
                <Td>低めから開始</Td>
                <Td>位置調整後に少しずつ上げる</Td>
                <Td>騒音、油煙、跳ね返り</Td>
              </tr>
              <tr>
                <Td>噴出時間</Td>
                <Td>短時間から開始</Td>
                <Td>再ブロー率を見て延長</Td>
                <Td>除去後も吹き続ける</Td>
              </tr>
              <tr>
                <Td>センサー</Td>
                <Td>全ワークを安定検知</Td>
                <Td>位置・遮光・治具を変更</Td>
                <Td>空打ち、未検知、二重起動</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <ol className="mt-6 space-y-4 pl-6 leading-8 text-gray-700">
          <li>代表ワークと最大・最小ワークを用意する</li>
          <li>元電源を遮断してノズル・センサーを仮位置決めする</li>
          <li>集塵作業台の吸引状態、フィルタ、ドレンを確認する</li>
          <li>低い流量・短い時間で試す</li>
          <li>除去不足と飛散位置を動画・写真で記録する</li>
          <li>一項目ずつ変更して再試験する</li>
          <li>標準値、許容範囲、変更権限を作業標準へ記載する</li>
        </ol>
        <Figure
          src={HERO("air-blow-nozzle-sensor-timer-setting.jpg")}
          alt="ワークに合わせてエアノズル・センサー・噴出時間を調整するイメージ"
        />

        <H2 id="manual-robot">手作業とロボットラインでの使い分け</H2>
        <H3>手作業では「両手が空く」効果を活かす</H3>
        <p className="leading-8 text-gray-700">
          作業者はエアガンを持たず、ワークを両手で保持できます。重量物や鋭利な切粉が付いたワークでは、落下防止治具、手袋の巻き込まれ、姿勢、置き方を別途評価します。センサーへ手を出し入れするだけで起動する場合は、意図しない噴出も想定します。
        </p>
        <H3>ロボットラインではインターロックを設計する</H3>
        <p className="leading-8 text-gray-700">
          ロボットがワークを投入する工程では、ロボット停止位置、センサー検知、集塵運転、エア噴出、取り出しの順序を制御します。電源線・エアホース・ノズルが可動域へ入らないこと、非常停止後の残圧、再起動条件を設備設計者と確認します。
        </p>

        <H2 id="kpi">自動化効果を測るKPIと記録方法</H2>
        <p className="leading-8 text-gray-700">
          「省エネになった」「作業が速くなった」を感覚で評価せず、導入前と同じワーク・処理数で測定します。圧縮空気削減率を固定値で見積もらず、実測値から判断してください。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <Th>KPI</Th>
                <Th>導入前</Th>
                <Th>導入後</Th>
                <Th>見るポイント</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>1個当たり噴出時間</Td>
                <Td>手持ち実測の平均・ばらつき</Td>
                <Td>タイマー設定と実測</Td>
                <Td>無駄吹きと不足</Td>
              </tr>
              <tr>
                <Td>サイクルタイム</Td>
                <Td>取出しから次工程まで</Td>
                <Td>検知待ちを含めて測定</Td>
                <Td>作業全体で短縮したか</Td>
              </tr>
              <tr>
                <Td>再ブロー率</Td>
                <Td>再処理数÷処理数</Td>
                <Td>同じ定義で比較</Td>
                <Td>短すぎる設定の検知</Td>
              </tr>
              <tr>
                <Td>周辺清掃時間</Td>
                <Td>日・週当たり清掃時間</Td>
                <Td>同じ範囲で比較</Td>
                <Td>飛散抑制効果</Td>
              </tr>
              <tr>
                <Td>コンプレッサ負荷</Td>
                <Td>運転時間・電力・圧力</Td>
                <Td>処理数を揃えて比較</Td>
                <Td>工程全体の空気使用</Td>
              </tr>
              <tr>
                <Td>不良・測定エラー</Td>
                <Td>残留切粉起因を分類</Td>
                <Td>同じ検査基準で比較</Td>
                <Td>次工程品質への効果</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <Note title="簡易計算式">
          <p>
            年間噴出時間は「1日処理数 × 1個当たり噴出秒数 × 年間稼働日 ÷ 3,600」で比較できます。ただし、これだけでコンプレッサ電力を直接算出せず、設備全体の負荷・漏れ・他工程の使用を含めて測定してください。
          </p>
        </Note>

        <H2 id="aerosol">JBA-S481が向く作業・向かない作業</H2>
        <p className="leading-8 text-gray-700">
          サンハヤトJBA-S481は、不燃性ガスHFC-134aを使い、逆さ吹きしやすく、集中・拡散を切り替えられるエアゾール式ダストブロワーです。キーボード、プリンター、センサー部など、電子機器の少量ホコリ除去に向きます。
        </p>
        <p className="mt-4 leading-8 text-gray-700">
          一方、切粉・切削油が大量に付着するワークの連続処理、自動化、集塵作業台との連動には向きません。缶を連続使用するコスト、換気、低温噴射、廃缶、HFCの環境負荷も考慮します。
        </p>
        <ProductCTA productId="jbas481" label="JBA-S481の商品ページを見る" />

        <H2 id="powder">KDC-US01が向く粉体集塵・向かない吸引物</H2>
        <p className="leading-8 text-gray-700">
          KDC-US01は、乾燥粉体を適合フードとダクトで発生源付近から吸引する小型集塵機です。単相100V、処理風量5m³/min、最大静圧2.1kPa、風量4段階で、作業台の下へ収めやすい寸法です。
        </p>
        <p className="mt-4 leading-8 text-gray-700">
          YMSのような切削油・オイルミスト回収機ではありません。また、メーカーは可燃性・爆発性粉じんの吸引不可を明記しています。粉体の成分、粒径、湿り、爆発特性、帯電性を確認し、フード形状とダクトを選びます。
        </p>
        <ProductCTA productId="kdcus01" label="KDC-US01の商品ページを見る" />

        <H2 id="safety">エアブロー作業の安全対策</H2>
        <ul className="space-y-3 pl-6 leading-8 text-gray-700">
          <li>圧縮空気を人の身体・衣服・皮膚へ向けない</li>
          <li>切粉の飛散方向へ人を立たせない</li>
          <li>保護眼鏡・フェイスシールド・手袋・呼吸用保護具・聴覚保護具を評価する</li>
          <li>調整・点検時は元電源を遮断し、誤投入を防止する</li>
          <li>アースを取り、コード・ブレーカー・過負荷原因を点検する</li>
          <li>集塵機・フード・フィルタ・ドレンを先に確認する</li>
          <li>切削油・洗浄液のSDS、引火点、吸引可否を確認する</li>
          <li>作業者が気流を遮らない位置で作業する</li>
          <li>フットスイッチ等を使う場合は床面・雰囲気への適合を確認する</li>
          <li>粉じん・ミスト対策は発生源捕集を優先し、全体換気と保護具を組み合わせる</li>
        </ul>
        <Caution title="集塵設備があっても、ばく露や飛散がゼロになるとは限りません">
          <p>
            フード位置、吸引風量、フィルタ目詰まり、ワーク形状、作業者の立ち位置で捕集効果は変わります。試運転時に周囲汚れ、視認できるミスト、作業者の訴え、測定結果を確認し、必要な保護具・換気を残します。
          </p>
        </Caution>

        <H2 id="deployment">導入から試運転・標準化までの手順</H2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <Th>段階</Th>
                <Th>実施内容</Th>
                <Th>記録</Th>
                <Th>合格条件</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>現状測定</Td>
                <Td>処理数、噴出時間、飛散、清掃、再ブローを測る</Td>
                <Td>動画、時間、写真、日報</Td>
                <Td>比較基準が揃う</Td>
              </tr>
              <tr>
                <Td>適合確認</Td>
                <Td>YMS型式、電源、エア、液剤、寸法を確認</Td>
                <Td>銘板写真、SDS、レイアウト</Td>
                <Td>メーカー確認済み</Td>
              </tr>
              <tr>
                <Td>設置</Td>
                <Td>電源遮断、アース、ノズル、センサーを設置</Td>
                <Td>施工記録、点検表</Td>
                <Td>干渉・漏れ・緩みなし</Td>
              </tr>
              <tr>
                <Td>試運転</Td>
                <Td>最小・最大・代表ワークで検知と除去を確認</Td>
                <Td>設定値、結果、変更履歴</Td>
                <Td>未検知・空打ち・外部飛散なし</Td>
              </tr>
              <tr>
                <Td>量産確認</Td>
                <Td>複数作業者・連続処理でKPIを測る</Td>
                <Td>日別KPI、異常記録</Td>
                <Td>品質・安全・タクトを満たす</Td>
              </tr>
              <tr>
                <Td>標準化</Td>
                <Td>設定変更権限、点検、教育、交換基準を決める</Td>
                <Td>作業標準、設備台帳</Td>
                <Td>変更管理ができる</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H2 id="mistakes">よくある選び方・使い方の失敗</H2>
        <ol className="grid gap-3 pl-6 leading-7 text-gray-700 md:grid-cols-2">
          {mistakes.map((item, index) => (
            <li key={item}>
              <span className="font-bold text-gray-900">{index + 1}.</span>{" "}
              {item}
            </li>
          ))}
        </ol>

        <H2 id="checklist">法人購買・設備導入チェックリスト</H2>
        <div className="space-y-7">
          {[
            [
              "ワーク・工程",
              [
                "ワーク寸法・質量・形状",
                "除去する切粉・切削油・水分・粉体",
                "1日処理数・タクト・再ブロー率",
                "手作業・半自動・ロボット",
                "次工程で要求する清浄度",
              ],
            ],
            [
              "本体・適合",
              [
                "YMS20JA/BまたはYMS40JA/Bの銘板",
                "20J-AU／40J-AUの正式型番",
                "単相100V・ブレーカー・コード",
                "圧縮空気0.15〜0.7MPaと供給能力",
                "設置寸法・搬入・保守スペース",
                "現行品・後継品・修理・特注",
              ],
            ],
            [
              "設定・安全",
              [
                "ノズル位置・先端・本数",
                "流量・噴出時間・センサー範囲",
                "集塵運転とのインターロック",
                "切粉・ミストの飛散方向",
                "保護具・立入管理・非常停止",
                "元電源遮断・アース・誤投入防止",
                "吸引禁止物・液剤の引火点",
              ],
            ],
            [
              "運用・効果",
              [
                "標準設定値と変更権限",
                "1個当たり噴出時間",
                "サイクルタイム・再ブロー率",
                "周辺清掃時間・不良率",
                "フィルタ・ドレン・ホース点検",
                "教育・変更管理・定期レビュー",
              ],
            ],
          ].map(([title, items]) => (
            <section
              key={title as string}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-bold text-gray-900">{title as string}</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {(items as string[]).map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-6 text-gray-700"
                  >
                    <span aria-hidden="true">□</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <Figure
          src={HERO("air-blow-automation-inspection-checklist.jpg")}
          alt="設備担当者が自動エアブローの設定・フィルタ・ドレン・点検記録を確認するイメージ"
        />

        <H2 id="faq">エアブロー自動化についてよくある質問</H2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="rounded-xl border border-gray-200 bg-white p-5"
            >
              <summary className="cursor-pointer font-bold text-gray-900">
                {faq.q}
              </summary>
              <p className="mt-3 leading-8 text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>

        <H2 id="references">参考にした一次情報・公式情報</H2>
        <ul className="space-y-3 text-sm leading-6 text-gray-700">
          {references.map((reference) => (
            <li key={reference.url}>
              <a
                href={reference.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4"
              >
                {reference.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm leading-7 text-gray-600">
          関連記事：
          <a
            href="/articles/shujinki-bojin-mask-heiyou"
            className="font-medium underline underline-offset-4"
          >
            集塵機があれば防じんマスクはいらない？工場の粉じん対策と併用方法
          </a>
        </p>

        <H2 id="summary">まとめ｜YMS本体の型式を確認し、最小限のエアで標準化する</H2>
        <p className="leading-8 text-gray-700">
          エアブロー自動化では、最初に除去物と回収方法を決め、YMS本体の型式に適合する20J-AU・40J-AUを選びます。導入後は、圧力を上げる前にノズル位置、囲い、吸引方向、噴出時間を調整し、再ブロー率、周辺清掃時間、コンプレッサ負荷まで測定します。
        </p>
        <div className="mt-7 rounded-xl bg-gray-900 p-6 text-white">
          <p className="text-lg font-bold">
            既設のYMS本体型式から、適合する自動エアブローユニットを確認
          </p>
          <p className="mt-2 leading-7 text-gray-200">
            20J-AU・40J-AUは単体使用できません。本体銘板、電源、圧縮空気、現行品・後継品を確認してから商品ページへ進んでください。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={byId["20jau"].url}
              target="_blank"
              rel="nofollow sponsored"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 py-3 font-bold text-gray-900"
            >
              YMS20J用20J-AUを見る
            </a>
            <a
              href={byId["40jau"].url}
              target="_blank"
              rel="nofollow sponsored"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 py-3 font-bold text-gray-900"
            >
              YMS40J用40J-AUを見る
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
