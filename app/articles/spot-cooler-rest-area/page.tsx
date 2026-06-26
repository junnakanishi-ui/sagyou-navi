import type { Metadata } from "next";
import Image from "next/image";
import {
  ArticleLayout,
  ArticleContent,
  Breadcrumb,
  ArticleHeader,
  HeroImage,
  ArticleFigure,
  RelatedArticles,
  Disclaimer,
  FaqSection,
  type FaqItem,
  type RelatedArticle,
} from "@/components/article";

const HERO = "/images/articles/cooler-tent-spot-cooler-rest-area.jpg";

// =====================================================================
// 定数・ヘルパー
// =====================================================================
const SLUG = "spot-cooler-rest-area";
const productImage = (id: string) => `/products/${id}.jpg`;
const yahooUrl = (id: string) =>
  `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html`;
function buildUrl(base: string, utmContent: string): string {
  const [path, hash] = base.split("#");
  const sep = path.includes("?") ? "&" : "?";
  const utm = `utm_source=sagyou_navi&utm_medium=referral&utm_campaign=2026_heatstroke&utm_content=${utmContent}`;
  return `${path}${sep}${utm}${hash ? `#${hash}` : ""}`;
}
const productHref = (id: string) => buildUrl(yahooUrl(id), `${SLUG}_yahoo`);
const categoryHref = (url: string, utm: string) => buildUrl(url, `${SLUG}_${utm}`);

const LIST = {
  coolerTent:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E3%82%AF%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%86%E3%83%B3%E3%83%88#CentSrchFilter1",
  coolVest:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E5%86%B7%E5%8D%B4%E3%83%99%E3%82%B9%E3%83%88#CentSrchFilter1",
  fan: "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E5%B7%A5%E5%A0%B4%E6%89%87#CentSrchFilter1",
  easyTent:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=%E3%82%89%E3%81%8F%E3%82%89%E3%81%8F%E3%83%86%E3%83%B3%E3%83%88&storeid=signcity-yshop",
} as const;

// =====================================================================
// 商品データ（商品名は仮置き＝公開前に各ストアで正式名称を目視確認）
// =====================================================================
type Product = { id: string; name: string; note?: string };

const TENTS: Product[] = [
  {
    id: "172401",
    name: "スイデン クーラーテント 1.8m×1.8m SS-TNT-1818-C",
    note: "少人数・小スペースに。まず試しやすいコンパクト",
  },
  {
    id: "203268",
    name: "Suiden クーラーテント 1.8m×2.7m SS-TNT-1827-C",
    note: "ベンチや簡易椅子を置く細長い休憩所に",
  },
  {
    id: "203269",
    name: "Suiden クーラーテント 1.8m×3.6m SS-TNT-1836-C",
    note: "複数人・長机/ベンチ。仮設の休憩列に",
  },
  {
    id: "203270",
    name: "Suiden クーラーテント 2.4m×2.4m SS-TNT-2424-C",
    note: "正方形で使いやすい広めタイプ。複数人利用に",
  },
];
const FAN_STAND: Product[] = [
  {
    id: "171964",
    name: "アクアシステム 無給油エアモーター式工場扇 スタンド大型 アルミハネ60cm AFG-24NL",
    note: "電源不要のエア駆動。粉じん・防爆配慮の現場に",
  },
  {
    id: "172321",
    name: "スイデン 工場扇 スタンド型 樹脂ハネ45cm 単相100V SF-45VS-1VP2",
    note: "標準的なスタンド型",
  },
  {
    id: "172314",
    name: "スイデン 工場扇 スタンドタイプMS 樹脂ハネ45cm 単相100V SF-45MS-1VP",
    note: "設置場所を変えやすい",
  },
  {
    id: "171599",
    name: "TRUSCO 全閉式アルミハネ工場扇 ゼフィール スタンドタイプ TFZPA-45S",
    note: "全閉式モーターで粉じんに配慮",
  },
];
const FAN_FLOOR: Product[] = [
  {
    id: "171600",
    name: "TRUSCO ゼフィール トレー付キャスタータイプ TFZPA-45T",
    note: "キャスターで移動しやすい",
  },
  {
    id: "203284",
    name: "TRUSCO 全閉式DCモーター工場扇 ジェネラルファン・ビッグ 105cm DF-105",
    note: "大型ハネで広範囲に送風",
  },
  {
    id: "171595",
    name: "TRUSCO ゼフィール 卓上タイプ TFZPA-45A",
    note: "作業台まわりのピンポイント送風に",
  },
  {
    id: "203297",
    name: "TRUSCO ジェネラルファン・ビッグ 60cm DF-60",
    note: "DCモーターで省エネ",
  },
];
const FAN_WALL: Product[] = [
  {
    id: "171601",
    name: "TRUSCO ゼフィール 壁掛けタイプ TFZPA-45W",
    note: "床スペースを使わず設置",
  },
  {
    id: "171594",
    name: "TRUSCO ゼフィール 本体 単相100V TFZPA-45",
    note: "用途に合わせて設置パーツと組合せ",
  },
  {
    id: "172434",
    name: "TRUSCO ジェネラルファン 壁掛けタイプ アルミハネ ブラック TFBA-45W-BK",
    note: "壁面設置で通路を確保",
  },
  {
    id: "171597",
    name: "TRUSCO ゼフィール ハンガータイプ ブラック TFZPA-45H-BK",
    note: "梁・フレームに吊り下げて天井付け",
  },
];
const COOL_VESTS: Product[] = [
  {
    id: "171779",
    name: "空調風神服 クールベスト The tough ブラック",
    note: "ファン付き。風で汗を気化",
  },
  {
    id: "171898",
    name: "バートル ACタクティカルベスト AC1154-35 ブラック",
    note: "空調ベスト本体（ファン・バッテリー別）",
  },
  {
    id: "171906",
    name: "バートル ACタクティカルベスト AC1154-60 アッシュグレー",
    note: "上半身の送風で体感を下げる",
  },
  {
    id: "203171",
    name: "BURTLE 冷却ベスト アイスクラフト IC101S ブラック",
    note: "保冷剤タイプ",
  },
  {
    id: "172464",
    name: "サンコー 冷蔵服3 ネイビー TKCV24FNV",
    note: "ペルチェ式の冷却ウェア",
  },
  {
    id: "172296",
    name: "サンコー ハーネス対応 冷蔵ベスト RZFHTVSBK",
    note: "ハーネス対応。高所作業に",
  },
  {
    id: "203375",
    name: "スリーライク 注水式冷却ベスト SMART-X グレー TL-WICB",
    note: "注水式。気化熱で冷却",
  },
  {
    id: "172034",
    name: "タジマ 清涼ファン 風雅パッド フルセット FP-AA37SEGYF",
    note: "背中のファンパッド",
  },
];
const EASY_TENTS: Product[] = [
  {
    id: "172282",
    name: "KOK 集会用テント らくらくテント 緑 RT-1.5X2-GN (W3.55×D2.67×H2.80)",
    note: "日陰・仮設休憩所のベースに",
  },
  {
    id: "172284",
    name: "KOK 集会用テント らくらくテント 白 RT-1.5X2-W (W3.55×D2.67×H2.80)",
    note: "受付・水分補給所にも",
  },
  {
    id: "172286",
    name: "KOK 集会用テント らくらくテント 青 RT-2X3-B (W5.31×D3.55×H3.07)",
    note: "大型。複数人の屋外休憩に",
  },
  {
    id: "172289",
    name: "KOK 集会用テント らくらくテント 白 RT-2X3-W (W5.31×D3.55×H3.07)",
    note: "大型・白天幕",
  },
];

// =====================================================================
// 小コンポーネント
// =====================================================================
function ProductCard({ id, name, note }: Product) {
  return (
    <a
      href={productHref(id)}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:border-gray-400 hover:shadow-md"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        <Image
          src={productImage(id)}
          alt={name}
          fill
          className="object-contain p-2 transition group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 50vw, 250px"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-sm font-bold leading-snug text-gray-900">{name}</p>
        {note ? (
          <p className="text-xs leading-relaxed text-gray-600">{note}</p>
        ) : null}
        <span className="mt-auto inline-flex w-fit items-center rounded bg-gray-900 px-3 py-1 text-xs font-bold text-white">
          Yahoo!ショッピングで見る →
        </span>
      </div>
    </a>
  );
}
function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {items.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </div>
  );
}
function ListCTA({
  href,
  label,
  utm,
  strong = false,
}: {
  href: string;
  label: string;
  utm: string;
  strong?: boolean;
}) {
  return (
    <a
      href={categoryHref(href, utm)}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={
        strong
          ? "my-3 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-base font-bold text-white transition hover:bg-gray-700"
          : "my-3 inline-flex items-center gap-2 rounded-lg border border-gray-900 px-5 py-3 text-sm font-bold text-gray-900 transition hover:bg-gray-900 hover:text-white"
      }
    >
      {label} →
    </a>
  );
}
function H2Summary({ children }: { children: React.ReactNode }) {
  return (
    <p className="my-3 rounded-md bg-gray-100 px-4 py-3 text-sm leading-relaxed text-gray-700">
      {children}
    </p>
  );
}

// =====================================================================
// メタデータ
// =====================================================================
export const metadata: Metadata = {
  title:
    "スポットクーラーで休憩所を涼しくするには？クーラーテント・工場扇・空調服の使い分け｜作業用品ナビ",
  description:
    "スポットクーラーで休憩所を涼しくするには、冷風を逃がさない空間づくりが重要です。クーラーテント、工場扇、冷却ベスト、空調服、らくらくテントの使い分けを、工場・倉庫・現場休憩所向けに解説します。",
  alternates: {
    canonical: "https://sagyou-navi.com/articles/spot-cooler-rest-area",
  },
  openGraph: {
    title:
      "スポットクーラーで休憩所を涼しくするには？クーラーテント・工場扇・空調服の使い分け",
    description:
      "スポットクーラーで休憩所を涼しくするには、冷風を逃がさない空間づくりが重要です。クーラーテント、工場扇、冷却ベスト、空調服、らくらくテントの使い分けを解説します。",
    type: "article",
    images: [HERO],
  },
};

// =====================================================================
// 構造化データ・FAQ
// =====================================================================
const FAQ: FaqItem[] = [
  {
    q: "スポットクーラーだけで休憩所は涼しくなりますか？",
    a: "スポットクーラーは局所的に冷風を届ける機器のため、広い作業場では冷風が逃げやすい場合があります。休憩所として使う場合は、クーラーテントのように冷風を逃がしにくい空間を作ると、涼しい休憩スペースを作りやすくなります。",
  },
  {
    q: "クーラーテントは屋外でも使えますか？",
    a: "スイデン クーラーテントは屋内用とされています。また、スイデン製スポットエアコン専用で、スポットエアコンは別売です。スポットエアコンは防滴・防水構造ではなく水のかかる場所では使用できないため、設置場所や使用条件を確認したうえで検討してください。",
  },
  {
    q: "工場扇とスポットクーラーは何が違いますか？",
    a: "工場扇は空気を動かして熱気をこもりにくくする送風機器で、温度自体を下げる冷房機器ではありません。スポットクーラーは冷風を局所的に送る機器です。作業場全体の空気循環には工場扇、休憩所を冷やすにはスポットクーラーやクーラーテントを検討すると使い分けやすくなります。",
  },
  {
    q: "クーラーテントのサイズはどう選べばよいですか？",
    a: "同時に休憩する人数、ベンチや長机の有無、設置スペース、出入口の動線で選びます。小規模なら1.8m×1.8m、細長いスペースなら1.8m×2.7mや1.8m×3.6m、広めの休憩所なら2.4m×2.4mが候補になります。",
  },
  {
    q: "休憩所を涼しくすれば熱中症対策は十分ですか？",
    a: "休憩所の整備は重要ですが、それだけで熱中症を防げるわけではありません。WBGT確認、作業時間管理、こまめな休憩、水分・塩分補給、作業中の個人対策と組み合わせることが重要です。",
  },
  {
    q: "屋外の休憩所にはクーラーテントとらくらくテントのどちらが向いていますか？",
    a: "クーラーテントは屋内でスポットエアコンと組み合わせて冷却空間を作る用途、らくらくテントは屋外で日陰や仮設スペースを作る用途に向いています。屋外の日陰づくりなららくらくテント、屋内や屋根下で冷風を活かした休憩スペースを作るならクーラーテントを検討します。",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://sagyou-navi.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: "https://sagyou-navi.com/articles",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "スポットクーラーで休憩所を涼しくするには？",
      item: "https://sagyou-navi.com/articles/spot-cooler-rest-area",
    },
  ],
};

const RELATED: RelatedArticle[] = [
  {
    href: "/articles/outdoor-work-heat-clothing",
    label:
      "屋外作業の暑さ対策は服装から｜冷感インナー・UVカット・遮熱ウェアの選び方",
  },
  {
    href: "/articles/board-material-transport-cart",
    label:
      "板物の運搬に便利な台車とは？アルミ複合板・長尺材を安全に運ぶ選び方",
  },
  {
    href: "/articles/led-floodlight-selection",
    label: "LED投光器の選び方｜現場・倉庫の作業灯から看板照明まで",
  },
  {
    href: "/articles/kartio-big-offroad",
    label:
      "カルティオビッグ・オフロードとは？悪路・段差に強い大型樹脂台車の使いどころ",
  },
];

// =====================================================================
// ページ本体
// =====================================================================
export default function Page() {
  return (
    <ArticleLayout faq={FAQ}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumb current="スポットクーラーで休憩所を涼しくするには？" />
      <ArticleHeader
        category="compare"
        readingTime={13}
        title="スポットクーラーで休憩所を涼しくするには？"
        subtitle="クーラーテント・工場扇・空調服の使い分け"
      />
      <HeroImage
        src={HERO}
        alt="スポットクーラーとクーラーテントで現場休憩所を涼しくするイメージ"
      />

      <ArticleContent>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          冷風を逃がさない休憩所づくりを軸に、クーラーテント・工場扇・冷却ベスト・らくらくテントを使い分けます。
        </p>

        <p className="mb-4 leading-relaxed">
          夏場の工場・倉庫・現場では、作業場所だけでなく休憩所の暑さ対策も重要です。せっかくスポットクーラーを置いても、広い空間ではせっかくの冷風がそのまま逃げてしまい、「思ったほど涼しくならない」と感じることがあります。休憩所を効率よく涼しくするには、冷風を届ける機器と、冷気を逃がしにくい空間づくりをセットで考えるのがポイントです。
        </p>
        <p className="mb-6 leading-relaxed">
          この記事では、スイデン
          クーラーテントを中心に、工場扇・冷却ベスト・空調服・らくらくテントの役割の違いと使い分けを、工場・倉庫・現場の休憩所づくりという実務テーマで整理します。「どれを買えばよいか」ではなく、「現場の課題に合わせてどう組み合わせるか」がわかる内容を目指します。
        </p>

        <div className="mb-6 rounded-md border-l-4 border-blue-500 bg-blue-50 p-4">
          <p className="mb-1 text-sm font-bold text-blue-900">まずは結論</p>
          <p className="text-sm leading-relaxed text-blue-900">
            スポットクーラーで休憩所を涼しくしたい場合は、冷風をそのまま広い空間へ流すのではなく、クーラーテントなどで冷やした空気を逃がしにくい休憩スペースを作る方法が有効です。工場扇は空気を動かす送風対策、空調服や冷却ベストは作業中の個人対策、クーラーテントは休憩時に体を冷やす空間づくりに向いています。ただし、冷却設備だけで熱中症を防げるわけではないため、WBGT確認、休憩、水分・塩分補給、作業時間管理と併用することが重要です。
          </p>
        </div>

        <div className="mb-8 rounded-md border-l-4 border-amber-500 bg-amber-50 p-4">
          <p className="text-xs leading-relaxed text-amber-900">
            <strong>
              冷却設備や暑さ対策用品は熱中症対策の補助です。設置・着用していれば熱中症を防げるという意味ではないため、WBGT確認・休憩・水分塩分補給・作業時間管理と併用することが重要です。
            </strong>{" "}
            なお、スイデン
            クーラーテントは
            <strong>屋内用・スイデン製スポットエアコン専用・スポットエアコンは別売</strong>
            です。スポットエアコンは防滴・防水構造ではなく、水のかかる場所では使用できません。屋外に常設できる万能テントではないため、設置場所・電源・排熱・対応機種を必ず確認してください。商品の仕様・価格・在庫は各商品ページの最新情報をご確認ください。
          </p>
        </div>

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          スポットクーラーで休憩所を涼しくするには「冷風を逃がさない」ことが重要
        </h2>
        <H2Summary>
          スポットクーラーは局所冷却向け。休憩所では「冷やす機器」と「冷気を囲う空間」をセットで考えると効果を感じやすくなります。
        </H2Summary>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          広い作業場ではスポットクーラーの冷風が拡散しやすい
        </h3>
        <p className="mb-4 leading-relaxed">
          スポットクーラーは、人や機械の近くを局所的に冷やすのが得意な機器です。工場・倉庫・作業場「全体」を冷やす用途とは異なり、広い空間に向けて使うと冷風が拡散してしまいます。休憩所に使うなら、冷風が当たる範囲、風向き、排熱の逃がし方、設置場所、電源、動線まで合わせて確認しましょう。
        </p>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          休憩所は「冷やす機器」と「囲う空間」をセットで考える
        </h3>
        <p className="mb-3 leading-relaxed">
          冷風が逃げると、休憩所としての効果を感じにくくなります。そこで、冷風を取り込みやすい空間を作るのが有効です。スイデン
          クーラーテントは、外気ではなくスポットエアコンで冷やした空気を取り込んで循環させることで、素早くテント内を冷やす循環式の構造が特徴とされています。
        </p>
        <ArticleFigure
          src="/images/articles/spot-cooler-exhaust-placement.jpg"
          alt="スポットクーラーの排熱と設置位置を確認する現場のイメージ"
        />
        <ListCTA
          href={LIST.coolerTent}
          label="スポットクーラー テント一覧へ"
          utm="coolertent_list"
          strong
        />

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          クーラーテントとは？スポットクーラーと組み合わせる休憩スペース用品
        </h2>
        <H2Summary>
          スポットエアコンと接続して涼空間を作る商品。前後2か所の入口・循環式・工具不要の組立が特徴です。
        </H2Summary>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          スイデン クーラーテントの特徴
        </h3>
        <p className="mb-3 leading-relaxed">
          スイデン
          クーラーテントは、テントとスポットエアコンを接続して涼しい空間を作るための商品です。入口が前後2か所にあり出入りしやすく、外気ではなく冷やした空気を取り込む循環式で素早くテント内を冷やします。工具不要で、連結されたフレームを広げるだけで組み立てられ、収納も簡単です。用途としては、作業場の熱気対策、現場の休憩スペース、イベント時の熱中症対策などに向くとされています。
        </p>
        <h3 className="mb-2 mt-6 text-lg font-bold">使用前に確認したい注意点</h3>
        <div className="my-3 rounded-md border-l-4 border-amber-500 bg-amber-50 p-4">
          <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-amber-900">
            <li>
              <strong>屋内用</strong>
              です（屋外に常設できる万能テントではありません）
            </li>
            <li>
              <strong>スイデン製スポットエアコン専用</strong>
              です（対応機種を確認）
            </li>
            <li>
              <strong>スポットエアコンは別売</strong>です
            </li>
            <li>
              スポットエアコンは
              <strong>防滴・防水構造ではなく、水のかかる場所では使用できません</strong>
            </li>
            <li>電源・排熱・設置スペース・出入口の動線を事前に確認してください</li>
          </ul>
        </div>

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          クーラーテントのサイズ別選び方
        </h2>
        <H2Summary>
          同時に休む人数・椅子や机の有無・設置スペースで選びます。小規模は1.8m角、広めは2.4m角が目安です。
        </H2Summary>
        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="border border-gray-300 px-3 py-2 text-left">
                  サイズ
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left">
                  型番
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left">
                  向いている使い方
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  1.8m×1.8m
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  SS-TNT-1818-C
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  少人数・小スペース・まず試したい
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  1.8m×2.7m
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  SS-TNT-1827-C
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  ベンチ・簡易椅子を置く細長い休憩所
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  1.8m×3.6m
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  SS-TNT-1836-C
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  複数人・長机/ベンチ・仮設の休憩列
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  2.4m×2.4m
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  SS-TNT-2424-C
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  広めの休憩所・複数人利用
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ProductGrid items={TENTS} />
        <ListCTA
          href={LIST.coolerTent}
          label="迷ったらスポットクーラー テント一覧でサイズを比較する"
          utm="coolertent_list2"
        />

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          スポットクーラー・クーラーテント・工場扇・空調服の使い分け
        </h2>
        <H2Summary>
          「冷やす」「囲う」「動かす」「個人で冷やす」「日陰を作る」。役割が違うので、組み合わせて使います。
        </H2Summary>
        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="border border-gray-300 px-3 py-2 text-left">
                  対策用品
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left">
                  主な役割
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left">
                  向いている場面
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left">
                  注意点
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  スポットクーラー
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  冷風を局所的に届ける
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  作業者の近く・休憩所・機械周辺
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  排熱・電源・風向きの確認
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  クーラーテント
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  冷風を逃がしにくい休憩空間を作る
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  屋内作業場・工場・倉庫・屋根下の休憩所
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  屋内用・対応機種・設置スペース
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  工場扇
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  空気を動かし熱気を逃がす
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  広い作業場・通路・換気補助
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  温度自体を下げる機器ではない
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  冷却ベスト
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  作業中の体幹部を冷やす
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  屋外・移動・高温作業
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  冷却材・バッテリー・作業姿勢
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  空調服
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  衣服内に風を送る
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  屋外・建設・警備・軽作業
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  高温多湿時は休憩・補給と併用
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  らくらくテント
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  日陰・仮設スペースを作る
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  屋外イベント・休憩場所・受付
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  冷房機器ではない（送風・冷却と併用）
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          工場扇は「作業場の空気を動かす」暑さ対策
        </h2>
        <H2Summary>
          工場扇は冷房ではなく送風。熱気のこもり対策・換気補助・空気循環に役立ちます。設置場所でタイプを選びます。
        </H2Summary>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          スポットクーラーと工場扇は役割が違う
        </h3>
        <p className="mb-3 leading-relaxed">
          スポットクーラーは冷風を出す機器、工場扇は空気を動かす機器です。工場扇は温度自体を下げる冷房機器ではありませんが、熱気のこもり対策・換気補助・空気循環に向きます。休憩所を直接冷やすならスポットクーラー＋クーラーテント、広い作業場の空気を動かすなら工場扇、という使い分けが基本です。
        </p>
        <ArticleFigure
          src="/images/articles/spot-cooler-industrial-fan-airflow.jpg"
          alt="スポットクーラーと工場扇を組み合わせた作業場の空気循環イメージ"
        />
        <h3 className="mb-2 mt-6 text-lg font-bold">
          スタンドタイプは設置場所を変えやすい
        </h3>
        <ProductGrid items={FAN_STAND} />
        <h3 className="mb-2 mt-6 text-lg font-bold">
          据え置き・キャスタータイプは広い作業場向け
        </h3>
        <ProductGrid items={FAN_FLOOR} />
        <h3 className="mb-2 mt-6 text-lg font-bold">
          壁掛け・天井付けタイプは床スペースを使いたくない現場向け
        </h3>
        <ProductGrid items={FAN_WALL} />
        <ListCTA href={LIST.fan} label="工場扇一覧へ" utm="fan_list" strong />

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          作業中の個人対策には冷却ベスト・空調服を組み合わせる
        </h2>
        <H2Summary>
          クーラーテントは「休む場所」、冷却ベスト・空調服は「作業中の体」。作業中と休憩中で分けて考えます。
        </H2Summary>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          クーラーテントは休憩時、冷却ベストは作業中の対策
        </h3>
        <p className="mb-3 leading-relaxed">
          クーラーテントが「休む場所」を冷やすのに対し、冷却ベストや空調服は「作業中の体」をサポートします。どちらか一方ではなく、作業中と休憩中で対策を分けると、現場全体の暑さ対策を組み立てやすくなります。高温作業や移動の多い作業では、冷却ベストが選択肢になります。
        </p>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          冷却方式・作業姿勢・ハーネス対応を確認する
        </h3>
        <p className="mb-3 leading-relaxed">
          ファン式（送風）、保冷剤式、ペルチェ式（電気冷却）、注水式（気化熱）など方式が分かれます。電源の有無、保冷剤の交換頻度、高所作業ならハーネス対応か、作業姿勢の妨げにならないかを確認して選びます。
        </p>
        <ArticleFigure
          src="/images/articles/personal-cooling-vest-innerwear-work.jpg"
          alt="作業中に冷却ベストやインナーを着用する屋外作業者のイメージ"
        />
        <ProductGrid items={COOL_VESTS} />
        <div className="my-3 rounded-md border-l-4 border-amber-500 bg-amber-50 p-4">
          <p className="text-xs leading-relaxed text-amber-900">
            冷却ベストや空調服は暑さ対策の補助です。着用していれば熱中症を防げるという意味ではないため、WBGT確認・休憩・水分塩分補給・作業時間管理と併用してください。
          </p>
        </div>
        <ListCTA
          href={LIST.coolVest}
          label="冷却ベスト一覧へ"
          utm="coolvest_list"
        />

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          屋外の仮設休憩所には、らくらくテントも選択肢
        </h2>
        <H2Summary>
          らくらくテントは日陰・仮設スペースづくり。冷房機器ではないので、送風・冷却用品と組み合わせて使います。
        </H2Summary>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          日陰を作るなら、らくらくテントが使いやすい
        </h3>
        <p className="mb-3 leading-relaxed">
          屋外イベント、工事現場、駐車場、搬入口などでは、まず日陰を確保することも大切です。らくらくテントは、休憩所・受付・水分補給所などの仮設スペースのベースとして使いやすい選択肢です。それ自体は冷房機器ではないため、工場扇や冷却用品と組み合わせて使います。
        </p>
        <h3 className="mb-2 mt-6 text-lg font-bold">
          クーラーテントとらくらくテントの違い
        </h3>
        <div className="my-3 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="border border-gray-300 px-3 py-2 text-left">
                  比較項目
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left">
                  クーラーテント
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left">
                  らくらくテント
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  主な目的
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  スポットエアコンと接続して涼空間を作る
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  日陰・仮設スペースを作る
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  向いている場所
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  屋内作業場・工場・倉庫・屋根下
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  屋外イベント・現場休憩所・受付
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  冷却機能
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  スポットエアコンと組み合わせる
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  それ自体は冷房機器ではない
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ProductGrid items={EASY_TENTS} />
        <ListCTA
          href={LIST.easyTent}
          label="らくらくテント一覧へ"
          utm="easytent_list"
          strong
        />

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          現場別｜休憩所の暑さ対策用品の組み合わせ
        </h2>
        <H2Summary>
          現場の環境で最適な組み合わせは変わります。工場・倉庫・屋内・工事現場・イベント・屋根下で整理します。
        </H2Summary>
        <div className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="border border-gray-300 px-3 py-2 text-left">
                  現場
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left">
                  課題
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left">
                  おすすめの組み合わせ
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  工場内の一角
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  熱気がこもる・空調が届かない
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  クーラーテント＋スポットクーラー＋工場扇
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  倉庫・荷捌き場
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  シャッター開放で外気が入る
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  工場扇＋スポットクーラー＋冷却ベスト
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  屋内作業場
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  作業場所が暑く休憩場所も近くに必要
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  クーラーテント＋水分補給用品＋冷却用品
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  工事現場
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  仮設休憩所が暑い
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  らくらくテント＋工場扇＋冷却ベスト
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  イベント設営
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  短時間高負荷・屋外待機
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  らくらくテント＋冷却ベスト＋水分補給用品
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-bold">
                  屋根下・半屋外
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  直射日光は少ないが熱気がこもる
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  工場扇＋スポットクーラー＋休憩スペース整備
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          休憩所づくりで確認したいチェックリスト
        </h2>
        <H2Summary>
          設置環境・電源・排熱・人数・動線・個人対策・補給品・作業管理まで、まとめて確認します。
        </H2Summary>
        <ArticleFigure
          src="/images/articles/precooling-ice-rest-area.jpg"
          alt="休憩所に氷や冷たい飲料を用意する熱中症対策のイメージ"
        />
        <ul className="mb-4 list-disc space-y-2 pl-5 leading-relaxed">
          <li>休憩所を作る場所が屋内・屋根下・屋外のどれに近いか確認する</li>
          <li>スポットクーラーの排熱を逃がせる場所か確認する</li>
          <li>スポットクーラーの電源を確保できるか確認する</li>
          <li>クーラーテントを設置するスペースと出入口の動線を確認する</li>
          <li>同時に休憩する人数に合うテントサイズを選ぶ</li>
          <li>工場扇で作業場全体の空気を動かせるか確認する</li>
          <li>作業中の個人対策として冷却ベストや空調服も検討する</li>
          <li>屋外では日陰づくりとしてらくらくテントも検討する</li>
          <li>水分・塩分補給品、氷、冷たいおしぼりなどを休憩所に置く</li>
          <li>WBGT確認・休憩時間・作業時間管理とセットで運用する</li>
        </ul>
        <ArticleFigure
          src="/images/articles/heatstroke-equipment-procurement-checklist.jpg"
          alt="熱中症対策備品の購入・導入時に確認するチェックリストのイメージ"
        />

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          よくある失敗
        </h2>
        <H2Summary>
          「冷風が逃げる」「工場扇を冷房と誤解」「テントの混同」「作業中の対策不足」「設備頼み」を避けます。
        </H2Summary>
        <ul className="mb-4 list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            <strong>スポットクーラーだけ置いて、冷風が逃げてしまう</strong>
            ：広い空間では冷風が拡散します。休憩所用途なら、冷風を受ける範囲を囲う工夫（クーラーテントなど）を検討します。
          </li>
          <li>
            <strong>工場扇を冷房機器のように考えてしまう</strong>
            ：工場扇は空気を動かす機器で、温度自体は下げません。スポットクーラーやクーラーテントと役割分担します。
          </li>
          <li>
            <strong>屋外用テントとクーラーテントを混同する</strong>
            ：らくらくテントは日陰づくり、クーラーテントはスポットエアコンと組み合わせる屋内用の冷却空間です。用途を分けて選びます。
          </li>
          <li>
            <strong>休憩所だけ整えて、作業中の対策が不足する</strong>
            ：作業中は冷却ベスト・空調服なども検討し、休憩中と作業中で対策を分けます。
          </li>
          <li>
            <strong>熱中症対策を設備だけに頼ってしまう</strong>
            ：設備は補助です。WBGT確認・休憩・水分塩分補給・作業管理と組み合わせます。
          </li>
        </ul>

        <h2 className="mb-2 mt-10 border-l-4 border-gray-900 pl-3 text-xl font-bold">
          まとめ｜休憩所を涼しくするなら、スポットクーラーと空間づくりをセットで考える
        </h2>
        <p className="mb-4 leading-relaxed">
          スポットクーラーで休憩所を涼しくするには、冷風を逃がしにくい空間づくりが重要です。スイデン
          クーラーテントは、スポットエアコンと組み合わせて休憩スペースを作る選択肢（屋内用・対応機種・別売を確認）。工場扇は作業場の空気循環、冷却ベスト・空調服は作業中の個人対策、らくらくテントは屋外の日陰づくりに向きます。休憩所づくりは、設備・用品・作業管理を組み合わせて考えることが大切です。冷却設備だけで熱中症を防げるわけではないため、WBGT確認・休憩・水分塩分補給・作業時間管理と必ず併用してください。
        </p>

        <div className="my-10 rounded-xl border border-gray-900 bg-gray-900 p-6 text-white">
          <p className="mb-2 text-lg font-bold">
            現場の休憩所づくりに必要な暑さ対策用品をまとめて確認する
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-200">
            クーラーテント、工場扇、冷却ベスト、らくらくテントなど、休憩所と作業場の暑さ対策に使える作業用品をまとめて確認できます。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={categoryHref(LIST.coolerTent, "coolertent_final")}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-gray-900 transition hover:bg-gray-200"
            >
              スポットクーラー テント一覧へ →
            </a>
            <a
              href={categoryHref(LIST.fan, "fan_final")}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-gray-900"
            >
              工場扇一覧へ →
            </a>
            <a
              href={categoryHref(LIST.coolVest, "coolvest_final")}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-gray-900"
            >
              冷却ベスト一覧へ →
            </a>
            <a
              href={categoryHref(LIST.easyTent, "easytent_final")}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-gray-900"
            >
              らくらくテント一覧へ →
            </a>
          </div>
        </div>

        <FaqSection faq={FAQ} />
        <RelatedArticles items={RELATED} />
        <Disclaimer extra="冷却設備や暑さ対策用品は熱中症対策の補助であり、設置・着用していれば熱中症を防げるという意味ではありません。体調に不安がある場合は医療機関・産業医にご相談ください。クーラーテントは屋内用・スイデン製スポットエアコン専用・スポットエアコン別売です。" />
      </ArticleContent>
    </ArticleLayout>
  );
}
