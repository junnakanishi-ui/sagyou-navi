import type { Metadata } from "next";
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
  LeadMuted,
  ArticleTable,
  ArticleFigure,
  CheckList,
  ProductGrid,
  RelatedArticles,
  Disclaimer,
  FaqSection,
  type ArticleProduct,
  type RelatedArticle,
} from "@/components/article";

const SLUG = "safety-shoes-replacement";

const buildUrl = (base: string, utmContent: string) => {
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=sagyou_navi&utm_medium=referral&utm_campaign=2026_safety_shoes&utm_content=${utmContent}`;
};

// 日本語クエリを含む一覧URLはエンコード済み文字列をそのまま定数化（再エンコード禁止）
const SAFETY_SHOES_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E5%AE%89%E5%85%A8%E9%9D%B4&b=151&view=grid";
const NB_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/b0c2c1b4b7.html?b=91&view=grid";
const CART_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html";
const PROACTIVE_LIST =
  "https://www.gc-select.com/pages/search-results-page?q=%E3%83%97%E3%83%AD%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96";
const PROTECTIVE_LIST =
  "https://www.gc-select.com/pages/search-results-page?q=%E3%83%97%E3%83%AD%E3%83%86%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96%E3%82%B9%E3%83%8B%E3%83%BC%E3%82%AB%E3%83%BC";

const yahooLink = (id: string) =>
  `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html`;

const yahooProduct = (id: string, name: string): ArticleProduct => ({
  id,
  name,
  links: { yahoo: yahooLink(id) },
});

const gcProduct = (id: string, name: string): ArticleProduct => ({
  id,
  name,
  links: { gcSelect: `https://www.gc-select.com/products/${id}` },
});

const nbProducts: ArticleProduct[] = [
  yahooProduct("155406", "ニューバランス 安全靴（プロスニーカー）"),
  yahooProduct("155335", "ニューバランス 安全靴（プロスニーカー）"),
  yahooProduct("155361", "ニューバランス 安全靴（プロスニーカー）"),
  yahooProduct("155329", "ニューバランス 安全靴（プロスニーカー）"),
  yahooProduct("155391", "ニューバランス 安全靴（プロスニーカー）"),
  yahooProduct("155376", "ニューバランス 安全靴（プロスニーカー）"),
  yahooProduct("155420", "ニューバランス 安全靴（プロスニーカー）"),
];

const truscoProducts: ArticleProduct[] = [
  yahooProduct("235217", "トラスコ プロテクティブスニーカー／関連用品"),
  yahooProduct("235355", "トラスコ プロテクティブスニーカー／関連用品"),
  yahooProduct("234829", "トラスコ プロテクティブスニーカー／関連用品"),
  yahooProduct("235356", "トラスコ プロテクティブスニーカー／関連用品"),
  yahooProduct("236857", "トラスコ プロテクティブスニーカー／関連用品"),
  yahooProduct("236874", "トラスコ プロテクティブスニーカー／関連用品"),
  yahooProduct("236881", "トラスコ プロテクティブスニーカー／関連用品"),
  yahooProduct("237205", "トラスコ プロテクティブスニーカー／関連用品"),
];

const proactiveProducts: ArticleProduct[] = [
  gcProduct("1123038220", "プロアクティブスニーカー SX3層底F SL12RE"),
  gcProduct("1123061240", "プロアクティブスニーカー NS911 黒/赤"),
  gcProduct("1123063240", "プロアクティブスニーカー NS922 黒"),
  gcProduct("1123062240", "プロアクティブスニーカー NS918 黒/赤"),
];

const cartProducts: ArticleProduct[] = [
  yahooProduct("167468", "トラスコ カルティオ 新型 ブラック MPK-780-BK"),
  yahooProduct(
    "190475",
    "トラスコ カルティオ 新型 ブラック スチールストッパー付 MPK780BKSS",
  ),
  yahooProduct(
    "216713",
    "トラスコ カルティオビッグ 折畳 900×600 ストッパー付 オリーブ MPK-906-OG-S",
  ),
  yahooProduct(
    "159750",
    "トラスコ カルティオビッグ 固定ハンドルタイプ ブルー MPK-900-B",
  ),
];

export const metadata: Metadata = {
  title:
    "安全靴の交換時期はいつ？靴底・先芯・破れの見分け方と買い替え目安｜作業用品ナビ",
  description:
    "安全靴の交換時期を、靴底の摩耗・先芯の露出・破れ・靴底の剥がれ・強い衝撃などのチェックポイントから解説。現場責任者・購買担当者向けに、点検チェックリスト、交換ルール、買い替え候補、台車活用による負担軽減まで整理します。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "安全靴の交換時期はいつ？靴底・先芯・破れの見分け方と買い替え目安",
    description:
      "安全靴の交換時期を、靴底の摩耗・先芯の露出・破れ・強い衝撃などのチェックポイントから解説。現場責任者・購買担当者向けに点検チェックリストと交換ルールを整理します。",
    type: "article",
    images: ["/images/articles/safety-shoes-replacement-hero.jpg"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "安全靴の交換時期はいつ？靴底・先芯・破れの見分け方と買い替え目安",
  description:
    "安全靴の交換時期を、靴底の摩耗・先芯の露出・破れ・靴底の剥がれ・強い衝撃などのチェックポイントから解説。現場責任者・購買担当者向けに、点検チェックリスト、交換ルール、買い替え候補、台車活用による負担軽減まで整理します。",
  image:
    "https://sagyou-navi.com/images/articles/safety-shoes-replacement-hero.jpg",
  datePublished: "2026-06-18",
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

const INSPECTION_CHECKLIST = [
  "先芯が露出していないか",
  "つま先部分に大きなへこみや衝撃跡がないか",
  "靴底の凹凸が極端に減っていないか（残厚2mmを目安に）",
  "靴底が剥がれていないか",
  "靴底に割れや深い亀裂がないか（ポリウレタン底は手で曲げて確認）",
  "甲被や縫い目が破れていないか",
  "かかとがつぶれていないか",
  "靴紐・面ファスナー・チャックが正常に使えるか",
  "足が靴の中で動きすぎないか",
  "滑りやすい、疲れやすいなどの違和感がないか",
  "作業環境に合った規格・性能か",
];

const FAQ = [
  {
    q: "安全靴は何ヶ月で交換すればよいですか？",
    a: "一律の期限はありません。寿命は一般に1〜3年が目安ですが、使用頻度や作業環境で大きく変わります。期間より、先芯露出・靴底摩耗・剥がれ・割れ・破れ・衝撃などの状態で判断するのが実務的です。",
  },
  {
    q: "安全靴の靴底が少し減っただけでも交換すべきですか？",
    a: "少しの摩耗なら直ちに交換とは限りませんが、踏付け部の凹凸残厚が2mmを下回る、スリップサインが摩滅するなど耐滑性能が落ちている場合は、滑りやすく危険なため交換を検討します。",
  },
  {
    q: "先芯が見えていなければまだ使えますか？",
    a: "先芯露出がなくても、靴底の摩耗・剥がれ・割れ、甲被の破れ、かかとのつぶれ、強い衝撃の有無などを合わせて確認します。複数のサインが出ていれば交換を検討してください。",
  },
  {
    q: "一度つま先に重い物を落とした安全靴は交換した方がよいですか？",
    a: "はい、検討してください。外観に変形がなくても、先芯の強度が低下しているおそれがあります。メーカーも、強い衝撃を受けたものは交換・廃棄を推奨しています。",
  },
  {
    q: "プロテクティブスニーカーも安全靴と同じように点検が必要ですか？",
    a: "必要です。軽量・デザイン性に強みがある一方、使用環境によっては底の剥がれ・摩耗・甲被の破れなど耐久面で劣る場合があるため、摩耗チェックを習慣化しましょう。",
  },
  {
    q: "法人で安全靴を支給する場合、交換ルールはどう作ればよいですか？",
    a: "支給日・使用開始日を記録し、月1回など定期点検のタイミングを決め、交換サインを写真付きで共有し、サイズ別に予備在庫を持ち、現場ごとに交換頻度の目安を見直すと管理しやすくなります。",
  },
  {
    q: "安全靴を長持ちさせるにはどうすればよいですか？",
    a: "メーカーが想定した使用環境・使用方法を守り、定期的な清掃・適切な保管（直射日光を避ける）を行い、ポリウレタン底は着用前に手で曲げて点検します。劣化が見られたら早めに交換します。",
  },
];

const RELATED: RelatedArticle[] = [
  {
    href: "/articles/safety-shoes-jis-jsaa",
    label: "安全靴・プロスニーカーの違い",
  },
  {
    href: "/articles/trusco-hand-pallet-erabikata",
    label: "ハンドパレットの選び方",
  },
  {
    href: "/articles/toolbag-backpack-selection",
    label: "ツールバッグの選び方",
  },
  {
    href: "/articles/carutio-cart-guide",
    label: "カルティオ台車の選び方",
  },
];

export default function SafetyShoesReplacementPage() {
  return (
    <ArticleLayout faq={FAQ} articleJsonLd={articleJsonLd}>
      <Breadcrumb current="安全靴の交換時期" />
      <ArticleHeader
        category="guide"
        readingTime={15}
        title="安全靴の交換時期"
        subtitle="靴底・先芯・破れの見分け方と買い替え目安"
      />
      <HeroImage
        src="/images/articles/safety-shoes-replacement-hero.jpg"
        alt="安全靴の交換時期を確認する現場責任者"
      />

      <ArticleContent>
        <Lead>
          安全靴は、見た目がまだ履けそうでも、靴底の摩耗や先芯まわりの破れ、靴底の剥がれ、かかとのつぶれなどが進むと、本来の安全性や歩きやすさが低下することがあります。
        </Lead>
        <LeadMuted>
          特に、工場・倉庫・建設現場・物流現場では、毎日の歩行、台車作業、重量物の扱い、水や油のある床面などにより、安全靴の傷み方も変わります。そのため、安全靴の交換時期は「何ヶ月使ったか」だけでなく、靴の状態・作業環境・使用頻度で判断することが大切です。
        </LeadMuted>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          この記事では、安全靴の交換サイン、現場で使える点検チェックリスト、法人での交換ルール作り、買い替え時に検討したい安全靴・プロテクティブスニーカー・運搬台車まで整理します。
        </p>

        <div className="my-8 rounded-lg border-2 border-primary/40 bg-primary-light px-5 py-4 text-base leading-relaxed">
          <p className="font-bold text-foreground">
            Q. 安全靴は何ヶ月で交換すればいい？
          </p>
          <p className="mt-2 text-foreground">
            <strong>A.</strong>{" "}
            一律の期限はありません。寿命は一般に1〜3年が目安ですが、使用頻度・作業環境で大きく変わります。期間より「状態」で判断するのが実務的で、先芯の露出・靴底の摩耗（踏付け部の凹凸残厚2mm目安）・剥がれ・割れ・甲被の破れ・かかとのつぶれ・強い衝撃のいずれかがあれば交換を検討します。
          </p>
        </div>

        <div className="my-8 rounded-lg border-l-4 border-blue-500 bg-blue-50 px-5 py-4 text-base leading-relaxed text-foreground">
          <strong>
            結論：安全靴は&quot;期間&quot;だけでなく&quot;状態&quot;で交換判断する。
          </strong>
          <ArticleTable
            head={["チェック箇所", "交換を検討すべき状態"]}
            rows={[
              ["先芯まわり", "先芯が露出している、強い衝撃を受けた"],
              [
                "靴底",
                "凹凸が減って滑りやすい（残厚2mm目安）、割れ・剥がれがある",
              ],
              ["甲被", "破れ、縫い目のほつれ、穴あきがある"],
              ["かかと", "つぶれ、変形、脱げやすさがある"],
              ["靴紐・面ファスナー", "正常に締められない"],
              ["履き心地", "足が動く、かかとが浮く、疲れやすくなった"],
              [
                "作業環境",
                "油・水・熱・屋外・重量物で劣化が早い",
              ],
            ]}
          />
          <p className="mt-4 text-base leading-relaxed">
            一度でも大きな衝撃を受けた安全靴は、外観だけで判断せず交換を検討します。作業環境が厳しい現場では、定期点検と予備在庫の準備が重要です。
          </p>
        </div>

        <div className="my-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          この記事は一般的な安全靴の点検・交換に関する情報です。安全靴の交換時期は、商品の状態・作業環境・使用頻度・メーカーの情報・社内ルールをもとにご判断ください。作業現場で規格の指定がある場合は、JIS・JSAA・社内規定・現場責任者の指示に従ってください。一度でも強い衝撃や圧迫を受けた安全靴は、外観に異常がなくても先芯の強度が低下しているおそれがあります。商品の仕様・価格・在庫は商品ページで最新情報をご確認ください。
        </div>

        <ArticleSection>
          <H2>安全靴の交換時期に「一律の正解」はある？</H2>
          <ConclusionBox>
            寿命は一般に1〜3年が目安ですが、まず期間より状態を見て判断します。
          </ConclusionBox>
          <H3>何ヶ月で交換より、まず状態を見る</H3>
          <Lead>
            安全靴の寿命は一般に1〜3年程度が目安とされますが、使用頻度や作業環境によって劣化スピードが大きく変わります。毎日使う物流・倉庫・建設現場と、週に数回だけ使う施設管理では、同じ期間でも傷み方が違います。「1000円1か月」といった金額ベースの目安が使われることもありますが、実際は靴の性能・作業環境・使い方で大きく変わるため、期間や金額だけで決めず状態で判断するのが実務的です。
          </Lead>
          <H3>使用頻度・作業環境で劣化スピードは変わる</H3>
          <Lead>
            重量物の扱い、長い歩行距離、台車作業、水・油・熱のある床面、屋外の紫外線などは、靴底や甲被の劣化を早めます。同じ製品でも、現場によって交換時期は前後します。
          </Lead>
          <H3>メーカーが示す交換サインを基準にする</H3>
          <Lead>
            メーカー資料では、先芯露出、靴底剥がれ、靴底割れ、著しい靴底摩耗、甲革の破れ、強い衝撃を受けた場合などが交換目安として挙げられています。特に一度つま先に強い衝撃や圧迫を受けた場合、外観に変形がなくても先芯の強度が低下しているおそれがあるため、速やかな交換が推奨されています。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>安全靴を交換すべき7つのサイン</H2>
          <ConclusionBox>
            先芯露出・靴底摩耗・剥がれ・割れ・甲被破れ・かかとつぶれ・強い衝撃の7つが交換サインです。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/safety-shoes-wear-check-points.jpg"
            alt="安全靴の靴底摩耗や先芯まわりを点検するイメージ"
          />
          <H3>1. 先芯が露出している</H3>
          <Lead>
            先芯が見えている状態は、甲被が破れて保護構造に影響が出ている可能性があります。先芯が露出すると先芯自体がずれやすくなり危険なため、
            <strong className="text-foreground">即交換候補</strong>
            です。
          </Lead>
          <H3>2. 靴底の溝が減って滑りやすい</H3>
          <Lead>
            靴底の凹凸が減ると、床面で滑りやすくなります。メーカーでは、踏付け部の凹凸残厚が2mmを下回ったら交換目安とする例や、靴底のスリップサイン3カ所のうち2カ所が摩滅したら交換目安とする「見える化」の例があります。倉庫・工場・厨房・雨天の屋外作業では特に重要です。
          </Lead>
          <ArticleFigure
            src="/images/articles/safety-shoes-sole-wear-peeling.jpg"
            alt="安全靴の靴底摩耗と剥がれを確認する様子"
          />
          <H3>3. 靴底が剥がれている</H3>
          <Lead>
            靴底の剥がれは、歩行時のつまずきや転倒につながる可能性があります。甲被と靴底の接合部が破れると、歩行時に足が前後に動きやすくなり、靴ずれや疲労にもつながるため、速やかな交換が推奨されています。
          </Lead>
          <H3>4. 靴底に割れ・深い亀裂がある</H3>
          <Lead>
            靴底の割れは、水・油の侵入や踏み抜きリスクにも関係します。発泡ポリウレタン底の場合は、加水分解によるひび割れや剥がれに注意が必要で、着用前に手で曲げてみて亀裂が生じないか確認することがすすめられています。紫外線でも硬化・割れが進むため、定期点検が大切です。
          </Lead>
          <H3>5. 甲被や縫い目が破れている</H3>
          <Lead>
            破れが広がるとフィット感が落ち、靴の中で足が動きやすくなります。水や油が侵入しやすくなり、衛生面でも問題が出ます。
          </Lead>
          <H3>6. かかとがつぶれている・脱げやすい</H3>
          <Lead>
            かかとがつぶれると歩行が不安定になり、疲労やつまずきの原因になります。歩行時にかかとが脱げるような破れは交換のサインです。
          </Lead>
          <H3>7. 一度でも大きな衝撃を受けた</H3>
          <Lead>
            外観に異常がなくても、先芯内部に変形やひび割れが生じている可能性があります。一度つま先に強い衝撃や圧迫を受けた安全靴は、安全基準を保てていないおそれがあるため、外観で判断せず交換・廃棄を検討します。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>安全靴の交換時期を現場別に考える</H2>
          <ConclusionBox>
            倉庫・建設・工場・店舗・屋外で、劣化しやすい箇所と注意点が変わります。
          </ConclusionBox>
          <H3>倉庫・物流現場｜歩行距離と靴底摩耗に注意</H3>
          <Lead>
            歩行距離が長く、台車作業や往復が多いため、靴底の摩耗が早く進みやすい現場です。滑りやすさ（耐滑性能の低下）に注意します。
          </Lead>
          <H3>建設・土木現場｜先芯まわりと靴底の破損に注意</H3>
          <Lead>
            重量物の扱いや落下リスクがあり、先芯への衝撃、靴底の割れ・踏み抜きに注意します。
          </Lead>
          <H3>工場・製造現場｜油・水・滑りやすい床に注意</H3>
          <Lead>
            油・水・薬品のある床では、靴底の劣化や耐滑性能の低下が起こりやすく、底の状態をこまめに確認します。
          </Lead>
          <H3>店舗バックヤード・施設管理｜動きやすさと見た目も重要</H3>
          <Lead>
            比較的軽作業でも、長時間の立ち・歩きで疲労がたまります。動きやすさやデザイン性も選定要素になります。
          </Lead>
          <H3>屋外作業｜雨・泥・紫外線・熱による劣化に注意</H3>
          <Lead>
            雨・泥・紫外線・熱は、甲被やポリウレタン底の劣化を早めます。屋外中心の現場では、保管時の直射日光にも注意します。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>
            JIS安全靴とJSAAプロテクティブスニーカーで交換判断は違う？
          </H2>
          <ConclusionBox>
            規格は違いますが、交換サイン（摩耗・剥がれ・先芯・衝撃）の考え方は共通です。
          </ConclusionBox>
          <H3>安全靴はJIS T 8101に合格した作業用履物</H3>
          <Lead>
            JIS T 8101の安全靴は、つま先を保護する機能を持つ靴で、甲被は革製・総ゴム製・総高分子材料製に限られ、軽作業用から超重作業用までの作業区分があります。
          </Lead>
          <H3>プロテクティブスニーカーはJSAA規格の作業靴</H3>
          <Lead>
            JSAA規格のプロテクティブスニーカーは、つま先保護性能を持つスニーカー調の作業靴で、普通作業用A種と軽作業用B種があります。JSAAはJISを基に作られた規格で、普通作業〜軽作業に適した靴を認定する規格とされています。
          </Lead>
          <H3>軽くて動きやすい靴ほど、摩耗チェックを習慣化する</H3>
          <Lead>
            プロテクティブスニーカーは軽量・デザイン性に強みがある一方、使用環境によっては底の剥がれ・摩耗・甲被の破れなど耐久面で劣る場合があると注意されています。軽快な靴ほど、点検を習慣化することが大切です。
          </Lead>
          <H3>現場指定がある場合はJIS・JSAA・社内ルールを確認する</H3>
          <Lead>
            作業内容によっては、必要な規格や作業区分が現場で指定されている場合があります。買い替え時は、JIS・JSAA・社内規定・現場責任者の指示を確認します。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>法人で安全靴の交換ルールを作る方法</H2>
          <ConclusionBox>
            支給日記録・定期点検・写真共有・予備在庫・現場別頻度の見直しで、属人化を防ぎます。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/safety-shoes-replacement-checklist-office.jpg"
            alt="安全靴の交換チェックリストを確認する購買担当者"
          />
          <H3>支給日・使用開始日を記録する</H3>
          <Lead>
            誰にいつ支給したかを記録すると、交換時期の目安管理や予算計画が立てやすくなります。
          </Lead>
          <H3>月1回など定期点検のタイミングを決める</H3>
          <Lead>
            点検のタイミングを決めておくと、撤廃基準を超えた靴の使用を防ぎやすくなります。長年使用した靴は見た目に問題がなくても安全性能が低下していることがあるため、定期点検が重要です。
          </Lead>
          <H3>交換サインを写真付きで共有する</H3>
          <Lead>
            先芯露出・靴底摩耗・剥がれなどの交換サインを写真付きで共有すると、現場ごとの判断のばらつきを減らせます。
          </Lead>
          <H3>予備在庫をサイズ別に用意する</H3>
          <Lead>
            交換が必要になったときにすぐ渡せるよう、よく出るサイズを中心に予備在庫を持つと、危険な靴を履き続ける期間を減らせます。
          </Lead>
          <H3>現場ごとに交換頻度の目安を見直す</H3>
          <Lead>
            倉庫・建設・工場・屋外など、現場ごとに劣化スピードは違います。実際の交換実績をもとに、現場別の交換頻度の目安を見直します。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>安全靴の点検チェックリスト</H2>
          <ConclusionBox>
            先芯・靴底・甲被・かかと・留具・フィット・規格適合を、現場で目視と手触りで点検します。
          </ConclusionBox>
          <CheckList items={INSPECTION_CHECKLIST} />
        </ArticleSection>

        <ArticleSection>
          <H2>買い替え時に選びたい安全靴・プロテクティブスニーカー</H2>
          <ConclusionBox>
            履き心地重視はニューバランス、法人導入はトラスコ、黒系はgcプロアクティブ、と課題別に選びます。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/protective-sneaker-selection-workplace.jpg"
            alt="安全靴とプロテクティブスニーカーを現場用途別に選ぶイメージ"
          />
          <H3>履き心地・デザイン性も重視するならニューバランス安全靴</H3>
          <Lead>
            現場で履く靴にも見た目や履き心地を求める層に向きます。普段のスニーカーに近い履き心地を重視する現場、若手スタッフにも支給しやすい作業靴、通気性や軽快さを重視したい現場、見た目も重視したい店舗バックヤードなどに向いています。
          </Lead>
          <ProductGrid items={nbProducts} cols={3} slug={SLUG} />
          <div className="mt-6">
            <a
              href={buildUrl(NB_LIST, "list_nb")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover"
            >
              ニューバランス安全靴一覧へ
            </a>
          </div>

          <H3>法人で導入しやすいトラスコ中山製品</H3>
          <Lead>
            価格と導入しやすさを重視する現場向けです。複数足まとめて導入したい、倉庫・工場・現場スタッフ用に揃えたい、サイズ展開を見ながら選びたい、靴本体だけでなく甲プロテクターなど周辺用品も検討したい場合に向きます。安全靴本体と周辺用品（甲プロテクター等）が混在する場合は、各商品ページで種別を確認し、用途を正しく整理してください。
          </Lead>
          <ProductGrid items={truscoProducts} cols={3} slug={SLUG} />
          <div className="mt-6">
            <a
              href={buildUrl(SAFETY_SHOES_LIST, "list_safety")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover"
            >
              安全靴一覧へ
            </a>
          </div>

          <H3>黒系・現場になじみやすいプロアクティブスニーカー</H3>
          <Lead>
            黒系・赤黒系など、制服に合わせたい現場・黒系で揃えたい現場向けです。
          </Lead>
          <ProductGrid items={proactiveProducts} cols={2} slug={SLUG} />
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={buildUrl(PROACTIVE_LIST, "list_proactive")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-store-gc-select px-6 py-3 text-sm font-bold text-white transition hover:bg-store-gc-select-hover"
            >
              プロアクティブスニーカー（ブラック）一覧へ
            </a>
            <a
              href={buildUrl(PROTECTIVE_LIST, "list_protective")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-bold text-foreground transition hover:border-primary/30"
            >
              プロテクティブスニーカー（ホワイト・コンバース）一覧へ
            </a>
          </div>
        </ArticleSection>

        <ArticleSection>
          <H2>
            安全靴の摩耗や疲労を減らすなら、台車の活用もセットで考える
          </H2>
          <ConclusionBox>
            手運びを減らせば歩行負担と靴底への負荷を下げられ、靴も長持ちしやすくなります。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/platform-cart-reduces-footwear-wear.jpg"
            alt="運搬台車を使い安全靴への負担を減らす倉庫作業のイメージ"
          />
          <Lead>
            安全靴の交換頻度が高い現場では、靴だけでなく作業動線も見直しましょう。倉庫・物流・工場では、重い荷物を手持ちで運ぶ、歩行距離が長い、何度も往復することで、靴底の摩耗や作業者の疲労が増えます。重い荷物を手持ちで運ぶ回数が多い場合は、運搬台車を活用することで、歩行時の負担や靴底への負荷を減らしやすくなります。
          </Lead>
          <ProductGrid items={cartProducts} cols={2} slug={SLUG} />
          <div className="mt-6">
            <a
              href={buildUrl(CART_LIST, "list_cart")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover"
            >
              運搬台車一覧へ
            </a>
          </div>
        </ArticleSection>

        <FaqSection faq={FAQ} />

        <ArticleSection>
          <H2>まとめ</H2>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
            <li>
              ・安全靴の交換時期は「期間」だけでなく「状態」で判断する（寿命の目安は1〜3年だが環境で変動）
            </li>
            <li>
              ・先芯露出・靴底摩耗（残厚2mm目安）・剥がれ・割れ・甲被破れ・かかとつぶれ・強い衝撃が交換サイン
            </li>
            <li>
              ・一度でも強い衝撃を受けたら外観無事でも交換を検討する
            </li>
            <li>
              ・法人では支給日記録・定期点検・写真共有・予備在庫・現場別頻度の見直しでルール化する
            </li>
            <li>
              ・買い替えは現場課題で選び分け（ニューバランス／トラスコ／プロアクティブ）、台車で足元負担も減らす
            </li>
            <li>
              ・規格や交換判断は、メーカー情報・JIS/JSAA・社内ルール・現場責任者の指示も確認する
            </li>
          </ul>
        </ArticleSection>

        <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
          <h2 className="text-2xl font-black text-white">
            安全靴・台車をまとめて確認する
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={buildUrl(SAFETY_SHOES_LIST, "footer_safety")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover"
            >
              安全靴一覧
            </a>
            <a
              href={buildUrl(NB_LIST, "footer_nb")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover"
            >
              ニューバランス安全靴一覧
            </a>
            <a
              href={buildUrl(CART_LIST, "footer_cart")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              運搬台車一覧
            </a>
          </div>
        </section>

        <RelatedArticles items={RELATED} />

        <Disclaimer extra="安全靴の交換時期は、商品の状態・作業環境・使用頻度・メーカーの情報・社内ルールをもとにご判断ください。作業現場で規格の指定がある場合は、JIS・JSAA・社内規定・現場責任者の指示に従ってください。一度でも強い衝撃や圧迫を受けた安全靴は、外観に異常がなくても先芯の強度が低下しているおそれがあります。" />
      </ArticleContent>
    </ArticleLayout>
  );
}
