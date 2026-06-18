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
  GroupLabel,
  ArticleTable,
  ArticleFigure,
  ProductGrid,
  RelatedArticles,
  Disclaimer,
  FaqSection,
  type RelatedArticle,
} from "@/components/article";

const SLUG = "ladder-stepladder-difference";

const gcImageUrl = (id: string) => `/products/${id}.jpg`; // 外部URL禁止・ローカルのみ

const buildUrl = (base: string, utmContent: string) => {
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=sagyou_navi&utm_medium=referral&utm_campaign=2026_ladder_stepladder&utm_content=${utmContent}`;
};

const LADDER_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a44aac2fb47.html?view=grid";
const TRUSCO_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html";
const CART_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html";
const PALLET_SEARCH_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E3%83%8F%E3%83%B3%E3%83%89%E3%83%91%E3%83%AC%E3%83%83%E3%83%88&view=grid";

export const metadata: Metadata = {
  title:
    "はしごと脚立の違いとは？JIS・SG規格と「天板に乗ってはいけない」理由｜作業用品ナビ",
  description:
    "はしごと脚立の違い、脚立の天板に乗ってはいけない理由、JIS・SG・Aマークの見方を法人現場向けに解説。脚立・はしご・作業用踏台・足場台・手すり付き踏台の使い分けや、倉庫・工場・店舗での選定チェックリストも紹介します。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "はしごと脚立の違いとは？JIS・SG規格と「天板に乗ってはいけない」理由",
    description:
      "はしごと脚立の違い、脚立の天板に乗ってはいけない理由、JIS・SG・Aマークの見方を法人現場向けに解説。",
    type: "article",
    images: ["/ladder-stepladder-difference-hero.jpg"],
  },
};

const LADDER_1STEP = [
  {
    id: "157458",
    name: "トラスコ 作業用踏台 1段 TSFC-1625",
    note: "低い棚上作業・足元の安定を重視する現場に。",
  },
  {
    id: "157452",
    name: "トラスコ 高強度タイプ 作業用踏台 1段 TSF-135",
    note: "高強度タイプで荷重に余裕を持たせたい場合に。",
  },
  {
    id: "157532",
    name: "トラスコ アルミ製グレーチング作業用踏台 1段 TSFGR-163",
    note: "水まわり・洗浄性を重視する現場に。",
  },
];

const LADDER_MULTI = [
  {
    id: "157459",
    name: "トラスコ 作業用踏台 2段 TSFC-255",
    note: "繰り返し昇降する棚上作業に。",
  },
  {
    id: "157460",
    name: "トラスコ 作業用踏台 3段 TSFC-3675",
    note: "やや高い位置の作業に。",
  },
  {
    id: "157596",
    name: "トラスコ アルミ製踏台 軽作業用 上枠・脚カバー付 3段 TAU-3",
    note: "上枠・脚カバー付きで軽作業向け。",
  },
  {
    id: "157504",
    name: "トラスコ ローハイシステムステップ アルミ製足踏台 2段 LH-2651A",
    note: "軽量で持ち運びやすい2段タイプ。",
  },
];

const LADDER_HANDRAIL = [
  {
    id: "224760",
    name: "トラスコ アルミ製作業用踏台 3段 階段両手すり付き TSF-369-TR300",
    note: "昇降頻度が高く両手すりで支えたい現場に。",
  },
  {
    id: "157440",
    name: "トラスコ 作業用踏台用 階段片手すりセット TSF-TE16-250",
    note: "既存踏台に片手すりを追加したい場合に。",
  },
  {
    id: "223068",
    name: "トラスコ 踏み台TDAD用 フルセット手すり TDAD-TF-110",
    note: "TDADシリーズ向けの手すりフルセット。",
  },
];

const LADDER_SCAFFOLD = [
  {
    id: "157597",
    name: "トラスコ 手掛り棒付足場台 脚部伸縮あり TDWG910-TE",
    note: "手掛り棒付きで横移動作業に。",
  },
  {
    id: "157602",
    name: "トラスコ 足場台 脚部伸縮式 TDWG-610",
    note: "段差・不陸への対応を重視する現場に。",
  },
];

const LADDER_COMBO = [
  {
    id: "157411",
    name: "トラスコ 天板乗り防止ペイント はしご兼用脚立 PTHK-150",
    note: "天板乗り防止ペイント付き兼用脚立。",
  },
  {
    id: "157413",
    name: "トラスコ 天板乗り防止ペイント はしご兼用脚立 PTHK-210",
    note: "やや高さのある兼用脚立。",
  },
  {
    id: "157419",
    name: "トラスコ はしご兼用脚立 THK-090",
    note: "低い位置の短時間作業向け兼用脚立。",
  },
];

const CART_PRODUCTS = [
  {
    id: "167468",
    name: "トラスコ カルティオ 新型 ブラック MPK-780-BK",
    note: "軽量で扱いやすい。工具箱や梱包材の移動に。",
  },
  {
    id: "190479",
    name: "トラスコ カルティオ 新型 ブルー MPK-780-B",
    note: "色で用途・部署を分けたい現場に。",
  },
  {
    id: "159757",
    name: "トラスコ カルティオビッグ 折りたたみハンドル ブラック MPK-906-BK",
    note: "大きめ荷物の移動に。",
  },
];

const PALLET_PRODUCTS = [
  {
    id: "168791",
    name: "トラスコ ハンドパレットトラック 1.5t用 L1050×W550mm",
    note: "国内標準パレットに合わせやすいサイズ。",
  },
  {
    id: "168792",
    name: "トラスコ ハンドパレットトラック 1.5t用 L1220×W685mm",
    note: "大判パレット向けのワイド＆ロングサイズ。",
  },
  {
    id: "168793",
    name: "トラスコ ハンドパレットトラック 1t用 L850×W460mm",
    note: "軽めの荷・小型パレット中心の現場に。",
  },
];

const CATEGORY_LINKS = [
  {
    label: "はしご・脚立 一覧",
    url: LADDER_LIST_URL,
    uc: "cat_ladder",
  },
  {
    label: "トラスコ中山 一覧",
    url: TRUSCO_LIST_URL,
    uc: "cat_trusco",
  },
];

const RELATED: RelatedArticle[] = [
  {
    href: "/articles/stepladder-height-law",
    label:
      "脚立は2mまで？高所作業の法律と現場で選ぶべき足場台・踏み台の違い",
  },
  {
    href: "/articles/warehouse-heatstroke-taisaku",
    label:
      "倉庫作業の熱中症対策｜工場扇・スポットクーラー・冷却ベストで現場を守る方法",
  },
  {
    href: "/articles/carutio-cart-guide",
    label:
      "軽量樹脂台車カルティオの選び方｜サイズ・耐荷重・静音・ストッパーの違い",
  },
  {
    href: "/articles/trusco-hand-pallet-erabikata",
    label:
      "トラスコのハンドパレット（ハンドリフト）の選び方｜フォーク長・能力・低床の違い",
  },
];

const FAQ = [
  {
    q: "はしごと脚立の違いは何ですか？",
    a: "はしごは主に高い場所へ昇り降りするための道具で、脚立はA字に開いて自立させ、短時間の高所作業に使う道具です。はしご上で作業し続けたり、脚立の天板に乗ったりする使い方は避け、作業内容に合わせて踏台や足場台も検討します。",
  },
  {
    q: "脚立の天板に乗ってはいけない理由は？",
    a: "天板に乗ると身体を支える場所が少なくなり、バランスを崩しやすくなるためです。特に上向き作業、横方向への身の乗り出し、荷物を持った昇降では転倒・転落リスクが高まります。",
  },
  {
    q: "すべての脚立で天板に乗ってはいけないのですか？",
    a: "製品によっては天板に乗れる構造のものもあります。ただし、多くの脚立では天板に乗る・座る・またがる使い方が禁止されています。必ず製品表示と取扱説明書を確認してください。",
  },
  {
    q: "JIS・SG・Aマークは何を見ればよいですか？",
    a: "JISは日本産業規格、SGマークは製品安全協会の安全基準、Aマークは軽金属製品協会はしご脚立部会基準への適合を確認する目安です。ただし、マークだけでなく最大使用質量、天板高さ、使用場所、手すり有無も確認しましょう。",
  },
  {
    q: "脚立と作業用踏台はどう使い分けますか？",
    a: "短時間の軽作業なら脚立が使いやすい場合があります。一方、繰り返し昇降する作業、同じ場所で点検する作業、足元の安定性を重視する作業では、作業用踏台や手すり付き踏台を検討します。",
  },
  {
    q: "足場台はどんな作業に向いていますか？",
    a: "足場台は天板が広く、一定範囲を作業しやすいのが特徴です。壁面・天井付近・棚まわりなど、脚立では身を乗り出しがちな作業に向いています。",
  },
  {
    q: "はしご兼用脚立は便利ですか？",
    a: "便利ですが、脚立状態とはしご状態で注意点が変わります。はしごとして使う場合は立てかけ角度、固定、補助者、裏面使用禁止などを確認してください。",
  },
  {
    q: "法人で導入する場合は何を基準に選ぶべきですか？",
    a: "作業内容、作業高さ、使用頻度、作業者の経験、設置場所、最大使用質量、規格表示、手すり有無、保管場所を確認します。脚立だけでなく、作業用踏台・足場台・手すり付き踏台も候補に入れると選定ミスを防ぎやすくなります。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "はしごと脚立の違いとは？JIS・SG規格と「天板に乗ってはいけない」理由",
  description:
    "はしごと脚立の違い、脚立の天板に乗ってはいけない理由、JIS・SG・Aマークの見方を法人現場向けに解説。",
  image: "https://sagyou-navi.com/ladder-stepladder-difference-hero.jpg",
  datePublished: "2026-06-18",
  author: {
    "@type": "Organization",
    name: "株式会社トレード",
    url: "https://trade-sign.jp/",
  },
  publisher: {
    "@type": "Organization",
    name: "株式会社トレード",
    url: "https://trade-sign.jp/",
  },
};

export default function LadderStepladderDifferencePage() {
  return (
    <ArticleLayout faq={FAQ} articleJsonLd={articleJsonLd}>
      <Breadcrumb current="はしごと脚立の違い" />
      <ArticleHeader
        category="compare"
        readingTime={13}
        title="はしごと脚立の違いとは？"
        subtitle="JIS・SG規格と「天板に乗ってはいけない」理由"
      />
      <HeroImage
        src="/ladder-stepladder-difference-hero.jpg"
        alt="はしごと脚立の違いを確認する日本の倉庫・工場担当者"
      />

      <ArticleContent>
        <Lead>
          はしごと脚立はどちらも高い場所に届くための道具ですが、使い方は同じではありません。はしごは主に昇降のために使う道具で、脚立は自立させて短時間の高所作業に使う道具です。ただし、脚立であっても天板に乗ったり、またがったり、身を乗り出したりすると、バランスを崩して転落するおそれがあります。
        </Lead>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          法人現場では、「届けばよい」「いつも脚立を使っているから大丈夫」ではなく、作業内容に合わせて、はしご、脚立、作業用踏台、足場台、手すり付き踏台を選び分けることが大切です。この記事では、はしごと脚立の違い、JIS・SG・Aマークの見方、脚立の天板に乗ってはいけない理由、現場別の選び方を、購買担当者や安全担当者が社内共有しやすい形で整理します。
        </p>

        <ConclusionBox>
          <strong>
            結論：はしごと脚立の違いは、「昇降用か」「自立して作業する用具か」です。
          </strong>
          <ul className="mt-3 space-y-1">
            <li>・はしごは、原則として高い場所へ昇り降りするための道具</li>
            <li>・脚立は、自立させて短時間の高所作業に使う道具</li>
            <li>
              ・脚立の天板は、多くの製品で乗る・座る・またがる使い方が禁止されている
            </li>
            <li>
              ・天板に乗ると、身体を支える点が少なくなり、バランスを崩しやすい
            </li>
            <li>
              ・長時間作業、横移動がある作業、荷物を持つ作業は、脚立ではなく作業用踏台・足場台・手すり付き踏台を検討する
            </li>
            <li>
              ・法人導入では、JIS・SG・Aマーク、最大使用質量、天板高さ、手すり、設置場所、作業内容を確認する
            </li>
          </ul>
        </ConclusionBox>

        <ArticleSection>
          <H2>はしごと脚立の違いとは？</H2>
          <ConclusionBox>
            はしごは「昇降」のための道具、脚立は「自立して短時間作業する」ための道具という違いを押さえるのが出発点です。
          </ConclusionBox>
          <ArticleFigure
            src="/ladder-stepladder-platform-comparison.jpg"
            alt="はしご・脚立・踏み台・足場台の違いを並べて比較するイメージ"
          />
          <H3>はしごは「昇降」が主な目的</H3>
          <Lead>
            はしごは壁や棚、屋根などに立てかけて使い、原則として高い場所へ昇り降りするための道具です。はしごの上で作業し続けることは想定されておらず、片手に荷物を持って昇降する使い方は危険です。立てかけ角度、上下の固定、補助者の有無、足元の安定が安全のポイントになります。
          </Lead>
          <H3>脚立は「自立して短時間作業する」ための道具</H3>
          <Lead>
            脚立はA字に開いて自立させ、電球交換、棚上作業、点検、軽作業などに使います。ただし、天板に乗る・またがる・身を乗り出す使い方は避けます。使用前に開き止め金具のロックと、設置面の水平・安定を確認します。
          </Lead>
          <H3>はしご兼用脚立は便利だが、使い方の切り替えに注意</H3>
          <Lead>
            脚立としても、はしごとしても使える兼用タイプは便利ですが、状態によって注意点が変わります。はしご状態では立てかけ角度・固定・補助者・裏面使用の可否を確認し、ロックが不十分なまま使わないようにします。
          </Lead>
          <ArticleTable
            head={["種類", "主な用途", "向いている作業", "注意点"]}
            rows={[
              [
                "はしご",
                "昇降",
                "屋根・高所への移動",
                "原則、上で作業し続けない",
              ],
              [
                "脚立",
                "短時間の高所作業",
                "点検、軽作業、棚上作業",
                "天板に乗らない・身を乗り出さない",
              ],
              [
                "はしご兼用脚立",
                "脚立とはしごの兼用",
                "使い分けが必要な現場",
                "状態ごとの使い方を守る",
              ],
              [
                "踏み台",
                "低い場所への昇降",
                "店舗・倉庫の軽作業",
                "作業高さ・安定性を確認",
              ],
              [
                "作業用踏台",
                "安定した足元の確保",
                "工場・倉庫・設備点検",
                "天板寸法・手すり有無を確認",
              ],
              [
                "足場台",
                "広めの作業床",
                "横移動・一定範囲の作業",
                "設置場所・脚部伸縮・手がかりを確認",
              ],
            ]}
          />
        </ArticleSection>

        <ArticleSection>
          <H2>脚立の天板に乗ってはいけない理由は？</H2>
          <ConclusionBox>
            天板に乗ると身体を支える点が少なくなり、上向き・横向き・荷物ありの作業でバランスを崩しやすくなるためです。
          </ConclusionBox>
          <ArticleFigure
            src="/stepladder-top-step-warning.jpg"
            alt="脚立の天板に乗らない安全な使い方を確認する現場担当者"
          />
          <H3>理由1：身体のバランスを崩しやすい</H3>
          <Lead>
            天板は足場として広く見えても、高所で重心が上がり、少しの反動や上向き・横向き作業でバランスを崩しやすくなります。
          </Lead>
          <H3>理由2：身体を支える場所が少なくなる</H3>
          <Lead>
            踏ざんに立つ場合は、天板や上枠に身体を当てて安定させやすいのに対し、天板上では身体を預ける場所が少なくなります。またがり作業も体勢を戻しにくく危険です。
          </Lead>
          <H3>理由3：荷物を持つ・身を乗り出す作業と相性が悪い</H3>
          <Lead>
            片手がふさがる、横方向へ体重が移る、反動のある作業——いずれも天板上では転倒につながりやすい状況です。
          </Lead>
          <H3>天板に乗れる製品もあるが、必ず表示と取扱説明書を確認</H3>
          <Lead>
            「すべての脚立の天板に絶対乗れない」わけではなく、製品によっては天板に乗れる構造のものもあります。一方で、多くの脚立では天板に乗る・座る・またがる使い方が禁止されています。法人現場では安易に天板作業を前提にせず、必ず製品表示と取扱説明書を確認してください。なお、近年はトラスコのPTHKシリーズのように、天板乗りを遠くからでも判別しやすい「天板乗り防止ペイント」仕様の兼用脚立もあります。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>JIS・SG・Aマークは何を見るためのもの？</H2>
          <ConclusionBox>
            JISは製品規格、SGマークは製品安全協会の安全基準、Aマークは軽金属製品協会はしご脚立部会の基準への適合を示す目安です。
          </ConclusionBox>
          <ArticleFigure
            src="/stepladder-standard-label-check.jpg"
            alt="脚立の規格表示や最大使用質量を確認する購買担当者"
          />
          <H3>JIS規格とは？</H3>
          <Lead>
            JIS（日本産業規格）は、製品の品質・安全性・寸法・試験方法などに関わる国の規格です。アルミニウム合金製の脚立・はしごでは「JIS S 1121」が関係し、2024年にも改正されています。
          </Lead>
          <H3>SGマークとは？</H3>
          <Lead>
            SGマークは、製品安全協会の安全基準に適合した製品に付くマークです。脚立・はしごでは「住宅用金属製脚立（CPSA0015）」「住宅用金属製はしご（CPSA0037）」などの基準があり、支柱・踏ざんの強度、脚端部の摩擦抵抗、踏ざん間隔などが定められています。脚立・はしごのSG基準はJIS S 1121の2024年改正に整合する新基準へ更新され、2026年1月から新基準での事務受付が始まっています。
          </Lead>
          <H3>Aマークとは？</H3>
          <Lead>
            Aマークは、軽金属製品協会はしご脚立部会の基準に適合した製品に表示されるマークで、業務用の脚立・足場台などで見かけることがあります。
          </Lead>
          <H3>法人導入ではマークだけでなく使用条件を見る</H3>
          <Lead>
            マークの有無だけでなく、最大使用質量、天板高さ、はしご全長、踏ざん幅、手すりの有無、脚部伸縮、折りたたみ可否、設置寸法、使用場所まで合わせて確認します。
          </Lead>
          <ArticleTable
            head={["表示・項目", "確認する意味"]}
            rows={[
              ["JIS", "製品規格・試験基準の確認（脚立・はしごはJIS S 1121）"],
              ["SGマーク", "製品安全協会の安全基準適合の確認"],
              ["Aマーク", "軽金属製品協会はしご脚立部会基準の確認"],
              ["最大使用質量", "作業者＋装備の重量に合うか"],
              ["天板高さ", "必要な作業高さに合うか"],
              ["天板に乗れるか", "製品表示・取扱説明書で確認"],
              ["手すり有無", "昇降頻度や安全性に関わる"],
              ["脚部伸縮", "段差や不陸への対応可否"],
            ]}
          />
        </ArticleSection>

        <ArticleSection>
          <H2>脚立でよい作業・作業用踏台や足場台を選ぶべき作業</H2>
          <ConclusionBox>
            短時間の軽作業は脚立、繰り返し昇降や横移動・身の乗り出しがある作業は作業用踏台・足場台・手すり付き踏台が候補です。
          </ConclusionBox>
          <ArticleFigure
            src="/work-platform-handrail-selection.jpg"
            alt="脚立ではなく手すり付き作業用踏台を選ぶ現場のイメージ"
          />
          <H3>脚立で対応しやすい作業</H3>
          <Lead>
            短時間の点検、軽い棚上作業、手元が安定していて足元の移動が少ない作業は、脚立が使いやすい場面です。
          </Lead>
          <H3>作業用踏台を検討したい作業</H3>
          <Lead>
            倉庫・工場で繰り返し昇降する、設備点検で同じ場所に何度も上がる、荷物の積み下ろしで足元を安定させたい、手すりを追加したい——こうした作業は作業用踏台が向きます。
          </Lead>
          <H3>足場台を検討したい作業</H3>
          <Lead>
            横方向に少し移動しながら作業する、天井・壁面・棚周辺で一定範囲を作業する、脚立では身を乗り出しがちな作業、段差に脚部伸縮で対応したい場合は足場台が候補です。
          </Lead>
          <H3>手すり付き踏台を検討したい作業</H3>
          <Lead>
            昇降頻度が高い、両手に工具や資料を持ちがち、高齢作業者や不慣れな作業者も使う、社内の安全対策として見える化したい——こうした現場では手すり付き踏台が安心です。
          </Lead>

          <GroupLabel>1段・低めの踏台</GroupLabel>
          <ProductGrid items={LADDER_1STEP} cols={3} slug={SLUG} />

          <GroupLabel>複数段・繰り返し昇降</GroupLabel>
          <ProductGrid items={LADDER_MULTI} cols={2} slug={SLUG} />

          <GroupLabel>手すり付き</GroupLabel>
          <ProductGrid items={LADDER_HANDRAIL} cols={3} slug={SLUG} />

          <GroupLabel>足場台</GroupLabel>
          <ProductGrid items={LADDER_SCAFFOLD} cols={2} slug={SLUG} />

          <GroupLabel>はしご兼用脚立</GroupLabel>
          <ProductGrid items={LADDER_COMBO} cols={3} slug={SLUG} />

          <p className="mt-8">
            <a
              href={buildUrl(LADDER_LIST_URL, "list_ladder")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
            >
              はしご・脚立一覧へ →
            </a>
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>現場別｜はしご・脚立・踏台・足場台の選び方</H2>
          <ConclusionBox>
            同じ「高所の軽作業」でも、倉庫・工場・店舗・建設・物流・オフィスで適した用具は変わります。
          </ConclusionBox>
          <ArticleTable
            head={["現場", "よくある作業", "選び方の目安"]}
            rows={[
              [
                "倉庫",
                "棚上作業、在庫確認、ピッキング補助",
                "脚立、作業用踏台、手すり付き踏台",
              ],
              [
                "工場",
                "設備点検、機械まわりの確認",
                "作業用踏台、手すり付き踏台、足場台",
              ],
              [
                "店舗バックヤード",
                "商品補充、什器上部の整理",
                "踏み台、軽作業用踏台",
              ],
              [
                "建設・内装",
                "壁面・天井付近の作業",
                "足場台、可搬式作業台、必要に応じて高所作業車",
              ],
              [
                "物流・搬入",
                "荷物の積み下ろし、トラック周辺",
                "作業用踏台、足場台、台車",
              ],
              [
                "オフィス・学校",
                "照明・掲示物・収納棚",
                "踏み台、軽量脚立、上枠付き踏台",
              ],
            ]}
          />
        </ArticleSection>

        <ArticleSection>
          <H2>
            脚立作業で荷物を持つなら、台車・ハンドパレットもセットで考える
          </H2>
          <ConclusionBox>
            荷物を持ったまま昇降するとバランスを崩しやすいため、荷物は台車やハンドパレットで作業場所の近くまで運ぶのが安全です。
          </ConclusionBox>
          <ArticleFigure
            src="/ladder-work-material-handling.jpg"
            alt="脚立作業前に台車とハンドパレットで荷物を安全に運ぶ倉庫作業員"
          />
          <H3>手に荷物を持ったまま昇降しない</H3>
          <Lead>
            両手がふさがると3点支持が取りにくく、荷物で視界が遮られて足元確認も遅れます。荷物は台車で作業場所の近くまで運び、昇降時は手を空けるのが基本です。
          </Lead>
          <H3>台車は脚立作業前の荷物移動に使いやすい</H3>
          <Lead>
            工具箱、梱包材、掲示物、部材などの移動には、軽量で扱いやすいカルティオのような台車が向きます。大きめ荷物はカルティオビッグが候補です。
          </Lead>
          <H3>パレット単位の荷物はハンドパレットで移動負担を減らす</H3>
          <Lead>
            重い荷物を人力で持ち上げすぎないよう、パレット品はハンドパレットで運びます。パレット寸法・フォーク長・能力を確認して選びます。
          </Lead>

          <GroupLabel>運搬台車</GroupLabel>
          <Lead>
            脚立作業の前に、工具や部材を作業場所の近くまで運ぶための台車です。
          </Lead>
          <ProductGrid items={CART_PRODUCTS} cols={3} slug={SLUG} />
          <p className="mt-6">
            <a
              href={buildUrl(CART_LIST_URL, "list_cart")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
            >
              運搬台車販売一覧 →
            </a>
          </p>

          <GroupLabel>ハンドパレット</GroupLabel>
          <Lead>
            パレット単位の荷物を、持ち上げずに移動するためのハンドパレットです。
          </Lead>
          <ProductGrid items={PALLET_PRODUCTS} cols={3} slug={SLUG} />
          <p className="mt-6">
            <a
              href={buildUrl(PALLET_SEARCH_URL, "list_pallet")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
            >
              ハンドパレット一覧 →
            </a>
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>法人購買向け｜はしご・脚立選定チェックリスト</H2>
          <ConclusionBox>
            用途・製品・現場の3視点で確認すると選定ミスを防ぎやすく、脚立以外の選択肢も検討しやすくなります。
          </ConclusionBox>
          <ArticleFigure
            src="/ladder-stepladder-procurement-checklist.jpg"
            alt="はしご・脚立・踏台の法人導入チェックリストを確認する購買担当者"
          />
          <h3 className="mt-8 text-xl font-bold text-foreground">用途確認</h3>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
            {[
              "昇降だけか、上で作業するのか",
              "作業時間は短いか、長いか",
              "横移動や身の乗り出しが発生しないか",
              "荷物や工具を持って昇降しないか",
              "作業者の人数・経験にばらつきがあるか",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true">[ ]</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-xl font-bold text-foreground">製品確認</h3>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
            {[
              "JIS・SG・Aマークなどの表示を確認したか",
              "最大使用質量を確認したか",
              "天板高さ・作業高さが合っているか",
              "天板に乗れる製品か、乗れない製品か確認したか",
              "踏ざん幅や設置寸法は現場に合うか",
              "手すり・上枠・脚カバー・ストッパーの有無を確認したか",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true">[ ]</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-xl font-bold text-foreground">現場確認</h3>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
            {[
              "設置面は水平で安定しているか",
              "開き止め金具を確実にロックできるか",
              "通路や出入口をふさがないか",
              "周囲に接触・落下・感電リスクがないか",
              "保管場所を確保できるか",
              "点検・廃棄ルールを決めているか",
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
            <li>
              ・はしごは昇降、脚立は自立して短時間作業する用具として使い分ける
            </li>
            <li>
              ・脚立の天板に乗る・座る・またがる・身を乗り出す使い方は危険
            </li>
            <li>
              ・JIS・SG・Aマークは目安。最大使用質量・天板高さ・取扱説明書・現場ルールも確認する
            </li>
            <li>
              ・脚立で不安な作業は、作業用踏台・足場台・手すり付き踏台を検討する
            </li>
            <li>
              ・荷物を持って昇降しないために、台車やハンドパレットも合わせて活用する
            </li>
            <li>・商品仕様・価格・在庫は各商品ページで最新情報を確認する</li>
          </ul>
        </ArticleSection>

        <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
          <h2 className="text-2xl font-black text-white">
            はしご・脚立・踏台をまとめて確認する
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={buildUrl(LADDER_LIST_URL, "footer_ladder")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover"
            >
              はしご・脚立一覧へ
            </a>
            <a
              href={buildUrl(TRUSCO_LIST_URL, "footer_trusco")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              トラスコ中山一覧
            </a>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORY_LINKS.map((c) => (
            <a
              key={c.uc}
              href={buildUrl(c.url, `${SLUG}_${c.uc}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-bold text-foreground transition hover:border-primary/30 hover:bg-primary-light"
            >
              {c.label}
            </a>
          ))}
        </div>

        <RelatedArticles items={RELATED} />

        <div className="mt-12 rounded-lg border-l-4 border-amber-500 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          本記事は法的助言ではありません。高所作業や労働安全衛生に関する判断は、厚生労働省・所轄の労働基準監督署・製品メーカー・社内安全衛生ルール・専門家にご確認ください。商品の仕様・価格・在庫・型番・最大使用質量・天板高さ・規格表示・使用条件は変更される場合があるため、各商品ページで最新情報をご確認ください。脚立の天板に乗れるかどうかは製品により異なります。必ず製品表示と取扱説明書をご確認ください。
        </div>

        <Disclaimer />
      </ArticleContent>
    </ArticleLayout>
  );
}
