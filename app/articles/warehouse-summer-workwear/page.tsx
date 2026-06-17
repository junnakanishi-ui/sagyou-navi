import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArticleLayout,
  ArticleContent,
  Breadcrumb,
  ArticleHeader,
  HeroImage,
  ArticleSection,
  ConclusionBox,
  H2,
  H3,
  Lead,
  Note,
  ArticleTable,
  ProductGrid,
  ArticleCTA,
  RelatedArticles,
  Disclaimer,
  FaqSection,
  type ArticleProduct,
  type RelatedArticle,
} from "@/components/article";

const SLUG = "warehouse-summer-workwear";

// 画像はローカルパスのみ。外部URLは使わない。
const gcImageUrl = (id: string) => `/products/${id}.jpg`;

// UTM付与ヘルパー（作業用品ナビ）
const buildUrl = (base: string, utmContent: string) => {
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=sagyou_navi&utm_medium=referral&utm_campaign=2026_summer_workwear&utm_content=${utmContent}`;
};

const HEAT_LIST_URL = buildUrl(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/eab32ec7ce6.html",
  "footer_cta",
);
const CART_LIST_URL = buildUrl(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html",
  "list_cart",
);
const PALLET_LIST_URL = buildUrl(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E3%83%8F%E3%83%B3%E3%83%89%E3%83%91%E3%83%AC%E3%83%83%E3%83%88&storeid=signcity-yshop",
  "list_pallet",
);
const BENCH_LIST_URL = buildUrl(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/e2ea8bb6c2c.html",
  "list_bench",
);
const GC_FAN_URL =
  "https://www.gc-select.com/pages/search-results-page?q=%E5%B7%A5%E5%A0%B4%E6%89%87";

export const metadata: Metadata = {
  title:
    "倉庫作業の夏服装はどう選ぶ？動きやすい作業着・冷却ベスト・空調服と効率化用品の選び方｜作業用品ナビ",
  description:
    "夏の倉庫作業では、涼しさだけでなく動きやすさ・安全性・汗処理・作業効率を考えた服装選びが重要です。冷感インナー、空調服、冷却ベスト、空調つなぎの使い分けから、台車・ハンドパレット・作業台による負担軽減まで、法人担当者向けに実務チェックリスト付きで解説します。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "倉庫作業の夏服装はどう選ぶ？動きやすい作業着・冷却ベスト・空調服と効率化用品の選び方",
    description:
      "倉庫作業の夏服装を、冷感インナー・空調服・冷却ベスト・空調つなぎの使い分けと、台車・ハンドパレット・作業台による負担軽減まで法人向けに整理。",
    type: "article",
    images: ["/images/articles/warehouse-summer-workwear-hero.jpg"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "倉庫作業の夏服装はどう選ぶ？動きやすい作業着・冷却ベスト・空調服と効率化用品の選び方",
  description:
    "夏の倉庫作業では、涼しさだけでなく動きやすさ・安全性・汗処理・作業効率を考えた服装選びが重要です。冷感インナー、空調服、冷却ベスト、空調つなぎの使い分けから、台車・ハンドパレット・作業台による負担軽減まで、法人担当者向けに実務チェックリスト付きで解説します。",
  image: "https://sagyou-navi.com/images/articles/warehouse-summer-workwear-hero.jpg",
  datePublished: "2026-06-17",
  author: {
    "@type": "Organization",
    name: "株式会社トレード",
    url: "https://trade-sign.jp/",
  },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    logo: {
      "@type": "ImageObject",
      url: "https://sagyou-navi.com/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://sagyou-navi.com/articles/${SLUG}`,
  },
};

const apparelProducts: ArticleProduct[] = [
  {
    id: "171778",
    name: "空調風神服ベスト サージグレー S",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/171778.html" },
    note: gcImageUrl("171778"),
  },
  {
    id: "171779",
    name: "空調風神服ベスト ブラック S",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/171779.html" },
    note: gcImageUrl("171779"),
  },
  {
    id: "171713",
    name: "BURTLE 半袖エアーフィット 4071-29-XL ホワイト",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/171713.html" },
    note: gcImageUrl("171713"),
  },
  {
    id: "171722",
    name: "BURTLE 半袖エアーフィット 4071-68-S ミルスグレー",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/171722.html" },
    note: gcImageUrl("171722"),
  },
  {
    id: "171706",
    name: "BURTLE 長袖エアーフィット 4070-68-M ミルスグレー",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/171706.html" },
    note: gcImageUrl("171706"),
  },
  {
    id: "172122",
    name: "おたふく BT パワーストレッチEVO ロングスリーブ JW-726-MEBK-3L",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/172122.html" },
    note: gcImageUrl("172122"),
  },
  {
    id: "172467",
    name: "スリーライク 注水式ベスト BODYCOOL SMART-X（S）",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/172467.html" },
    note: gcImageUrl("172467"),
  },
  {
    id: "203171",
    name: "BURTLE 冷却ベスト アイスクラフト IC101S-35-XL ブラック",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/203171.html" },
    note: gcImageUrl("203171"),
  },
  {
    id: "172536",
    name: "ジーベック クールベスト 空調服制電ベスト XE98014-16-3L",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/172536.html" },
    note: gcImageUrl("172536"),
  },
  {
    id: "172154",
    name: "リンクサス COOLING BLAST ハーネス対応服地 ブルー LL",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/172154.html" },
    note: gcImageUrl("172154"),
  },
  {
    id: "172163",
    name: "リンクサス クールベスト COOLING BLAST ハーネスベストタイプ ネイビー 4L",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/172163.html" },
    note: gcImageUrl("172163"),
  },
  {
    id: "171847",
    name: "AUTO-BI 空調つなぎ服 ネイビーブルー L",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/171847.html" },
    note: gcImageUrl("171847"),
  },
  {
    id: "171994",
    name: "TRUSCO 使い切り空調服 つなぎ 3L",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/171994.html" },
    note: gcImageUrl("171994"),
  },
];

const cartProducts: ArticleProduct[] = [
  {
    id: "167468",
    name: "カルティオ 新型 ブラック MPK-780-BK",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/167468.html" },
    note: gcImageUrl("167468"),
  },
  {
    id: "190475",
    name: "カルティオ 新型 ブラック スチールストッパー付 MPK780BKSS",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/190475.html" },
    note: gcImageUrl("190475"),
  },
  {
    id: "216713",
    name: "カルティオビッグ 折畳 900X600 ストッパー付 オリーブ MPK-906-OG-S",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/216713.html" },
    note: gcImageUrl("216713"),
  },
  {
    id: "159750",
    name: "カルティオビッグ 固定ハンドルタイプ ブルー MPK-900-B",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/159750.html" },
    note: gcImageUrl("159750"),
  },
];

const palletProducts: ArticleProduct[] = [
  {
    id: "168791",
    name: "TRUSCO ハンドパレット THPT15-105-55S",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/168791.html" },
    note: gcImageUrl("168791"),
  },
  {
    id: "168790",
    name: "TRUSCO ハンドパレット THPT15-85-52S",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/168790.html" },
    note: gcImageUrl("168790"),
  },
  {
    id: "168809",
    name: "TRUSCO ハンドパレット THP-20-511-PK（2tクラス）",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/168809.html" },
    note: gcImageUrl("168809"),
  },
  {
    id: "168827",
    name: "TRUSCO 電動ハンドパレット ET12-510SP",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/168827.html" },
    note: gcImageUrl("168827"),
  },
];

const benchProducts: ArticleProduct[] = [
  {
    id: "161973",
    name: "TRUSCO 軽量作業台 TFAEL-1260（間口1200×奥行600×H740 均等300kg）",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/161973.html" },
    note: gcImageUrl("161973"),
  },
  {
    id: "220888",
    name: "TRUSCO 作業台 GWR-0945（中荷重）",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/220888.html" },
    note: gcImageUrl("220888"),
  },
  {
    id: "161782",
    name: "TRUSCO 移動式作業台 STWC-1200",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/161782.html" },
    note: gcImageUrl("161782"),
  },
  {
    id: "161681",
    name: "TRUSCO バイス付作業台 RHW-0960VRS",
    links: { yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/161681.html" },
    note: gcImageUrl("161681"),
  },
];

const FAQ = [
  {
    q: "倉庫作業の夏服装は半袖でも大丈夫ですか？",
    a: "半袖が認められるかは現場ルールによります。軽作業では半袖が動きやすい場合もありますが、荷物や棚との接触、擦り傷、汚れがある現場では長袖インナーやアームカバーを併用した方がよい場合があります。",
  },
  {
    q: "倉庫作業では空調服と冷却ベストのどちらが向いていますか？",
    a: "歩行や軽作業が多い場合は空調服・空調ベスト、暑い場所で身体を冷やしたい場合は冷却ベストが候補です。作業姿勢、バッテリー管理、保管場所、現場ルールを確認して選びます。",
  },
  {
    q: "夏のピッキング作業に向いている服装は？",
    a: "吸汗速乾インナー、動きやすい半袖または長袖インナー、必要に応じて空調ベストが候補です。歩行量が多いため、汗処理とストレッチ性を重視します。",
  },
  {
    q: "荷下ろし作業ではどんな夏服装がよいですか？",
    a: "身体負荷が高いため、吸汗速乾インナー、冷却ベスト、空調服などを検討します。あわせて台車やハンドパレットで手運びの回数を減らすことも重要です。",
  },
  {
    q: "空調つなぎ服は倉庫作業でも使えますか？",
    a: "汚れ作業や全身を覆いたい作業では候補になります。ただし、サイズ、動きやすさ、ファン位置、座り作業との相性を確認してください。",
  },
  {
    q: "夏服装だけで熱中症対策は十分ですか？",
    a: "十分とはいえません。服装は重要ですが、WBGT測定、工場扇、スポットクーラー、休憩、水分・塩分補給、報告体制などと組み合わせる必要があります。",
  },
  {
    q: "倉庫作業の夏服装を法人導入する際の注意点は？",
    a: "サイズ展開、洗い替え、予備数、バッテリー管理、保管場所、洗濯ルール、現場ルールとの整合を確認します。全員同じ装備にするより、作業別に分ける方が失敗しにくいです。",
  },
];

const RELATED: RelatedArticle[] = [
  {
    href: "/articles/warehouse-heatstroke-taisaku",
    label: "倉庫作業の熱中症対策｜工場扇・スポットクーラー・冷却ベストで現場を守る方法",
  },
  {
    href: "/articles/safety-shoes-jis-jsaa",
    label: "安全靴・プロテクティブスニーカーの違い｜JIS T8101とJSAA規格の見方",
  },
  {
    href: "/articles/trusco-hand-pallet-erabikata",
    label: "トラスコのハンドパレット（ハンドリフト）の選び方｜フォーク長・能力・低床の違い",
  },
  {
    href: "/articles/workbench-erabikata",
    label: "軽量作業台と重量作業台の違い｜耐荷重と天板素材で選ぶ用途別ガイド",
  },
];

export default function WarehouseSummerWorkwearPage() {
  return (
    <ArticleLayout faq={FAQ} articleJsonLd={articleJsonLd}>
      <Breadcrumb current="倉庫作業の夏服装" />
      <ArticleHeader
        category="compare"
        readingTime={12}
        title="倉庫作業の夏服装はどう選ぶ？動きやすい作業着・冷却ベスト・空調服と効率化用品の選び方"
        subtitle="冷感インナー・空調服・冷却ベスト・空調つなぎの使い分けと、台車・ハンドパレット・作業台での負担軽減を整理"
      />
      <HeroImage
        src="/images/articles/warehouse-summer-workwear-hero.jpg"
        alt="倉庫作業の夏服装を検討する現場責任者と作業スタッフ"
      />

      <ArticleContent>
        <Lead>
          夏の倉庫作業では、「暑いから薄着にする」だけでは十分ではありません。ピッキングで歩き回る、荷下ろしで汗をかく、梱包台で同じ姿勢が続く、フォークリフトに乗る、冷房の効きにくい出荷場で作業するなど、倉庫内でも作業内容によって必要な服装は変わります。
        </Lead>
        <Lead>
          特に法人現場では、涼しさだけでなく、動きやすさ、肌の保護、汗処理、引っかかりにくさ、洗濯・予備管理、作業効率まで含めて考えることが大切です。この記事では、倉庫作業の夏服装を「冷感インナー・空調服・冷却ベスト・空調つなぎ」の使い分けから、台車・ハンドパレット・作業台を使った作業負担の軽減まで、現場責任者や購買担当者が社内共有しやすい形で整理します。なお、WBGT測定・工場扇・スポットクーラー・休憩所整備まで含めた熱中症対策全体は
          <Link
            href="/articles/warehouse-heatstroke-taisaku"
            className="font-bold text-primary hover:underline"
          >
            倉庫作業の熱中症対策
          </Link>
          の記事もあわせてご確認ください。
        </Lead>

        <ConclusionBox>
          <strong>結論：</strong>
          倉庫作業の夏服装は「涼しさ」だけでなく、「動きやすさ・安全性・汗処理・作業負荷の軽減」で選ぶのがポイントです。
          <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground">
            <li>・ピッキング中心なら、吸汗速乾インナー＋動きやすい半袖・ベスト型の空調服が候補</li>
            <li>・荷下ろし・出荷場など暑さが強い場所では、冷却ベストや空調服を検討</li>
            <li>・粉じん・汚れ・全身作業がある場合は、空調つなぎ服や長袖インナーも選択肢</li>
            <li>・半袖だけで涼しくするより、肌保護・汗処理・引っかかり防止も考える</li>
            <li>・服装だけで身体負荷を下げきれない場合は、台車・ハンドパレット・作業台で作業そのものを軽くする</li>
            <li>・法人導入では、サイズ展開、洗い替え、バッテリー管理、保管場所、現場ルールとの整合を確認する</li>
          </ul>
        </ConclusionBox>

        <ArticleSection>
          <H2>倉庫作業の夏服装は何を重視して選ぶべき？</H2>
          <ConclusionBox>
            倉庫の夏服装は「涼しさ」だけでなく、通気性・吸汗速乾・動きやすさ・安全性・管理しやすさの5点で選ぶと失敗しにくくなります。
          </ConclusionBox>
          <figure className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl bg-primary-light">
            <Image
              src="/images/articles/warehouse-summer-clothing-layer.jpg"
              alt="倉庫作業の夏服装をインナー・作業着・冷却用品に分けて整理するイメージ"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1152px"
            />
          </figure>
          <H3>涼しさだけで選ぶと失敗しやすい</H3>
          <Lead>
            薄着=安全とは限りません。倉庫では荷物・棚・台車・パレットとの接触があり、だぶつく服や肌の露出は引っかかりや擦り傷の原因になります。汗でべたつくと動作が遅くなり、集中力も落ちやすくなります。涼しさと同時に、動作の妨げにならないか、汗を処理できるか、安全に作業できるかを合わせて考えることが大切です。
          </Lead>
          <H3>夏服装で見るべき5つのポイント</H3>
          <ArticleTable
            head={["ポイント", "見るべき内容"]}
            rows={[
              ["通気性・透湿性", "熱や湿気がこもりにくいか"],
              ["吸汗速乾性", "汗をかいても乾きやすいか"],
              ["動きやすさ", "腕上げ・しゃがみ・歩行を妨げないか"],
              ["安全性", "肌保護・引っかかり防止・現場ルールに合うか"],
              ["管理しやすさ", "洗濯、予備、サイズ、バッテリー管理がしやすいか"],
            ]}
          />
          <H3>厚手・保熱しやすい服装は夏場の負担になりやすい</H3>
          <Lead>
            厚生労働省の職場における熱中症予防の考え方では、暑さ指数（WBGT）と身体作業強度をもとにリスクを評価し、通気性・透湿性の低い衣服を着用する場合はWBGT値に着衣補正値を加えて判断することが示されています。つまり、衣服そのものが体感の暑さや熱中症リスクを左右する要素のひとつです。厚手で熱がこもりやすい服や、汗が乾きにくい素材は、夏場の倉庫作業では負担になりやすいといえます。服装はあくまで熱中症対策の一部であり、WBGT測定や休憩、水分・塩分補給などと組み合わせて考えることが前提です。法令対応や社内の安全衛生基準は、厚生労働省などの公式情報と自社ルールをご確認ください。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>倉庫作業では半袖と長袖、どちらがよい？</H2>
          <ConclusionBox>
            半袖・長袖は一律に決めず、作業内容・接触リスク・現場ルールで使い分け、肌保護と暑さ対策を両立させるのが基本です。
          </ConclusionBox>
          <H3>半袖が向くケース</H3>
          <Lead>
            梱包・検品・軽作業など、汚れや接触が少なく、会社ルールで認められている場合は半袖が動きやすいことがあります。冷感インナーやアームカバーと併用すれば、肌保護と涼しさのバランスを取りやすくなります。
          </Lead>
          <H3>長袖が向くケース</H3>
          <Lead>
            棚や荷物との接触が多い、段ボール・パレット・金属部材を扱う、日差しの入るローディングドックで作業する、虫・擦り傷・汚れ対策が必要――こうした場面では長袖（または長袖インナー）が向きます。
          </Lead>
          <H3>おすすめは「肌保護＋暑さ対策」の組み合わせ</H3>
          <Lead>
            現実的には、長袖インナー＋半袖作業着、冷感インナー＋空調ベスト、速乾インナー＋冷却ベストといった組み合わせが扱いやすく、肌を守りながら涼しさを確保できます。最終的には現場ルールに合わせて選びます。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>作業別に見る｜倉庫作業の夏服装早見表</H2>
          <ConclusionBox>
            同じ倉庫でも、ピッキング・梱包・荷下ろし・フォークリフト・冷蔵庫出入り・汚れ作業で適した服装は変わります。
          </ConclusionBox>
          <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
            <Image
              src="/images/articles/warehouse-workwear-by-task.jpg"
              alt="ピッキング・梱包・荷下ろしで夏服装を使い分ける倉庫作業員"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1152px"
            />
          </figure>
          <ArticleTable
            head={["作業内容", "起きやすい課題", "向いている服装・用品"]}
            rows={[
              ["ピッキング", "歩行量が多く汗をかきやすい", "吸汗速乾インナー、半袖エアーフィット、空調ベスト"],
              ["梱包・検品", "同じ姿勢、手元作業、汗のべたつき", "冷感インナー、通気性のよい上着、局所送風"],
              ["荷下ろし・出荷", "身体負荷が高く暑さが強い", "冷却ベスト、空調服、工場扇、台車"],
              ["フォークリフト", "座り姿勢、背中のファン干渉", "ファン位置に注意した空調服、薄手インナー"],
              ["冷蔵・冷凍倉庫との出入り", "温度差、汗冷え", "脱ぎ着しやすい上着、速乾インナー"],
              ["粉じん・汚れ作業", "汚れ、肌露出、全身保護", "空調つなぎ、長袖インナー、現場指定の保護具"],
            ]}
          />
        </ArticleSection>

        <ArticleSection>
          <H2>冷感インナー・空調服・冷却ベストはどう使い分ける？</H2>
          <ConclusionBox>
            冷感インナーを土台に、歩行が多ければ空調ベスト、暑い場所なら冷却ベスト、汚れ・全身作業なら空調つなぎ、と作業で選び分けます。
          </ConclusionBox>
          <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
            <Image
              src="/images/articles/cooling-vest-fan-wear-warehouse.jpg"
              alt="倉庫作業で冷却ベストと空調服を使い分けるイメージ"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1152px"
            />
          </figure>
          <H3>冷感インナーは夏服装の土台</H3>
          <Lead>
            汗処理・肌触り・動きやすさを整える基本装備です。空調服や冷却ベストの下に着ると快適性を上げやすくなります。半袖/長袖エアーフィットやロングスリーブなどが候補です。
          </Lead>
          <H3>空調服・空調ベストは歩行や軽作業の多い倉庫に向く</H3>
          <Lead>
            ベスト型は袖まわりがもたつきにくく、ピッキング・出荷・倉庫内移動に合わせやすいのが利点です。ファンやバッテリーの管理が必要になります。
          </Lead>
          <H3>冷却ベストは暑い場所・負荷の高い作業で検討しやすい</H3>
          <Lead>
            荷下ろし、ローディングドック、出荷場など暑さの強い場所で身体を冷やしたいときに向きます。注水式（水を使う）、ペルチェ式（電気で冷やす）、保冷剤式などタイプ差があり、給水・充電・保冷剤管理の手間が変わります。
          </Lead>
          <H3>空調つなぎ服は汚れ・全身作業のある現場向け</H3>
          <Lead>
            粉じんや汚れがあり、全身を覆う必要がある作業向けです。つなぎは動きやすさとサイズ選びが重要で、ファン付きの場合は座り作業との相性も確認します。
          </Lead>
          <ArticleTable
            head={["種類", "向いている作業", "強み", "注意点"]}
            rows={[
              ["冷感インナー", "ピッキング、梱包、軽作業", "導入しやすく動きやすい", "単体では強い暑さに限界"],
              ["空調ベスト", "歩行・移動が多い作業", "袖が邪魔になりにくい", "バッテリー管理が必要"],
              ["空調つなぎ", "汚れ・全身作業", "全身を覆いやすい", "サイズ選びが重要"],
              ["注水式冷却ベスト", "バッテリー管理を減らしたい現場", "水を活用できる", "給水・乾燥・保管ルールが必要"],
              ["ペルチェ系冷却ベスト", "暑い場所・短時間集中作業", "冷却ポイントを狙いやすい", "対応機器・稼働時間確認が必要"],
            ]}
          />
          <ProductGrid items={apparelProducts} cols={3} slug={SLUG} />
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            商品名・価格・在庫・サイズ・対応バッテリーは仮置きです。導入前に各商品ページで最新情報をご確認ください。
          </p>
          <p className="mt-4">
            <a
              href={buildUrl(
                "https://store.shopping.yahoo.co.jp/signcity-yshop/eab32ec7ce6.html",
                "list_heat",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:underline"
            >
              熱中症対策アイテム一覧へ
            </a>
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>倉庫作業で避けたい夏のNG服装は？</H2>
          <ConclusionBox>
            だぶつき、汗が乾かない素材、過度な肌露出、滑りやすい靴は、暑さ以前に事故や効率低下の原因になります。
          </ConclusionBox>
          <figure className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl bg-primary-light">
            <Image
              src="/images/articles/warehouse-summer-workwear-ng.jpg"
              alt="倉庫作業で避けたい夏の服装例を確認する安全担当者"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1152px"
            />
          </figure>
          <H3>だぶつきすぎる服</H3>
          <Lead>
            台車・棚・機械・パレットに引っかかる可能性があり、作業スピードも落ちやすくなります。
          </Lead>
          <H3>汗を吸って乾きにくい服</H3>
          <Lead>
            べたつき・汗冷え・におい・集中力低下につながります。綿100%が一律に悪いわけではありませんが、汗をかきやすい作業では速乾素材が向く場合があります。
          </Lead>
          <H3>肌露出が多すぎる服</H3>
          <Lead>
            擦り傷・虫・日差し・荷物との接触リスクが高まります。半袖の可否は現場ルールを確認してください。
          </Lead>
          <H3>滑りやすい靴・軽すぎる靴</H3>
          <Lead>
            倉庫床、段ボール粉、荷物の落下などに備え、安全靴やプロテクティブスニーカーを検討します。詳しくは
            <Link
              href="/articles/safety-shoes-jis-jsaa"
              className="font-bold text-primary hover:underline"
            >
              安全靴・プロテクティブスニーカーの違い
            </Link>
            も参考にしてください。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>服装だけでは限界がある｜夏の倉庫作業は作業負荷も下げる</H2>
          <ConclusionBox>
            夏の疲労は服装だけでは下げきれません。運ぶ・持つ・かがむ動作そのものを台車・ハンドパレット・作業台で軽くすると効率を保てます。
          </ConclusionBox>
          <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
            <Image
              src="/images/articles/warehouse-summer-efficiency-tools.jpg"
              alt="夏の倉庫作業で台車とハンドパレットを使って作業負担を減らすイメージ"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1152px"
            />
          </figure>
          <H3>暑さで疲れやすい作業は「運ぶ・持つ・かがむ・待つ」</H3>
          <Lead>
            服装で体感を下げても、重い物を何度も持つ・長い距離を歩く・低い台で前かがみになる作業が続けば、身体負荷は残ります。重い物を持つ回数を減らす、移動距離を短くする、作業台の高さを整える、荷役を機器に任せる――こうした工夫が夏場の効率維持に直結します。
          </Lead>
          <H3>台車はピッキング・補充・出荷準備の歩行負担を減らす</H3>
          <Lead>
            新型カルティオは従来モデルから軽量化された樹脂製運搬車で、自重がおよそ6.8kg、均等荷重200kgクラスとして案内されています。軽く扱いやすいため、暑い時期の「持つ・運ぶ」負担軽減に向きます。傾斜や一時停止が多い場所ではストッパー付き、大きめ荷物のまとめ運搬にはカルティオビッグが候補です。
          </Lead>
          <Lead>台車を比較しやすい代表モデルです。</Lead>
          <ProductGrid items={cartProducts} cols={2} slug={SLUG} />
          <p className="mt-3">
            <a
              href={CART_LIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:underline"
            >
              運搬台車一覧へ
            </a>
          </p>

          <H3>ハンドパレットはパレット単位の移動負担を減らす</H3>
          <Lead>
            手持ちや人力運搬を減らせます。ただしパレット形状によって使用できない場合があるため、フォーク長・幅・最低高さ・パレット寸法の確認が必要です。1.5t・2t・電動タイプを荷重と頻度で使い分けます。
          </Lead>
          <Lead>荷重とフォーク寸法を見比べやすい4点です。</Lead>
          <ProductGrid items={palletProducts} cols={2} slug={SLUG} />
          <p className="mt-3">
            <a
              href={PALLET_LIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:underline"
            >
              ハンドパレット一覧へ
            </a>
          </p>

          <H3>作業台は梱包・検品の姿勢負担を減らす</H3>
          <Lead>
            高さが合わないと前かがみや疲労につながります。軽量作業台・中量作業台・移動式作業台を用途で使い分け、夏場の「無駄なかがみ動作」を減らすことも暑さ対策の一部です。
          </Lead>
          <Lead>高さ・耐荷重・可搬性で選び分ける例です。</Lead>
          <ProductGrid items={benchProducts} cols={2} slug={SLUG} />
          <p className="mt-3">
            <a
              href={BENCH_LIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:underline"
            >
              作業台一覧へ
            </a>
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            環境対策を強化するなら、工場扇や冷風機の併用も有効です。
            <a
              href={GC_FAN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-bold text-primary hover:underline"
            >
              工場扇の一覧へ
            </a>
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>法人導入時のチェックリスト</H2>
          <ConclusionBox>
            導入は「全員同じ装備」より「作業別に分ける」方が失敗しにくく、サイズ・予備・バッテリー・保管・現場ルールの整合が要点です。
          </ConclusionBox>
          <figure className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl bg-primary-light">
            <Image
              src="/images/articles/warehouse-summer-workwear-checklist.jpg"
              alt="倉庫作業の夏服装と作業用品の導入チェックリストを確認する購買担当者"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1152px"
            />
          </figure>
          <h3 className="mt-8 text-xl font-bold text-foreground">服装・冷却用品の導入チェック</h3>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
            {[
              "作業内容ごとに必要な服装を分けたか",
              "半袖・長袖の社内ルールを確認したか",
              "冷感インナーのサイズ展開（男女兼用・女性サイズ含む）を確認したか",
              "空調服のファン位置と作業姿勢（座り作業・ハーネス）が合うか",
              "バッテリーの充電・保管ルールを決めたか",
              "冷却ベストの水・保冷剤・ペルチェ管理を決めたか",
              "洗い替え・予備を含めて必要数量を見積もったか",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true">[ ]</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-xl font-bold text-foreground">作業用品の導入チェック</h3>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
            {[
              "台車の耐荷重・サイズは荷物に合うか",
              "ストッパーの必要性を確認したか",
              "ハンドパレットのフォーク長はパレットに合うか",
              "作業台の高さ・耐荷重・天板材質は作業に合うか",
              "通路幅や保管場所を確認したか",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true">[ ]</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ArticleSection>

        <FaqSection faq={FAQ} />

        <ArticleSection>
          <H2>まとめ</H2>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
            <li>・倉庫作業の夏服装は、涼しさだけでなく動きやすさ・安全性・汗処理・管理しやすさで選ぶ</li>
            <li>・作業別に冷感インナー・空調服・冷却ベスト・空調つなぎを使い分ける</li>
            <li>・服装だけでなく、台車・ハンドパレット・作業台で作業負荷を下げることも夏場の効率維持に役立つ</li>
            <li>・熱中症対策全体は、WBGT測定・工場扇・スポットクーラー・休憩・水分補給・報告体制と組み合わせる</li>
            <li>・商品仕様・価格・在庫は各商品ページで最新情報を確認する</li>
          </ul>
        </ArticleSection>

        <ArticleCTA
          title="倉庫作業の夏服装と熱中症対策アイテムをまとめて確認する"
          description="仕様・在庫・価格は商品ページでご確認ください。"
          buttonLabel="熱中症対策アイテム一覧を見る"
          url={HEAT_LIST_URL}
          slug={SLUG}
        />

        <RelatedArticles items={RELATED} />

        <Note>
          運営：株式会社トレード（
          <a
            href="https://trade-sign.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary hover:underline"
          >
            https://trade-sign.jp/
          </a>
          ）
        </Note>
        <Disclaimer extra="本記事は法的・医療的助言ではありません。熱中症対策・安全衛生は厚生労働省などの公式情報、産業医、所轄の労働基準監督署、社内ルールをご確認ください。商品仕様・価格・在庫・対応バッテリー・使用条件は各商品ページで最新情報をご確認ください。" />
      </ArticleContent>
    </ArticleLayout>
  );
}
