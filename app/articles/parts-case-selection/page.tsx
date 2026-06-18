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
  GroupLabel,
  ArticleTable,
  ArticleFigure,
  ProductGrid,
  RelatedArticles,
  Disclaimer,
  FaqSection,
  type RelatedArticle,
} from "@/components/article";

const SLUG = "parts-case-selection";

const gcImageUrl = (id: string) => `/products/${id}.jpg`; // 外部URL禁止

const buildUrl = (base: string, utmContent: string) => {
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=sagyou_navi&utm_medium=referral&utm_campaign=2026_parts_case&utm_content=${utmContent}`;
};

const PARTS_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5d1a1bca5.html";
const TOOLBOX_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/9129bf6abc8.html?view=grid";
const TRUSCO_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html";

export const metadata: Metadata = {
  title:
    "パーツケースの選び方｜小物・ネジの整理に効く仕切り・引き出し・連結タイプの使い分け｜作業用品ナビ",
  description:
    "パーツケースの選び方を、ネジ・ビス・ナット・端子・小物部品の整理に悩む現場担当者向けに解説。仕切り付き、引き出し式、卓上タイプ、連結・スタンドタイプ、工具箱型の違いから、屋外現場・イベント・倉庫・車載作業で探し物を減らす収納チェックリストまで紹介します。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "パーツケースの選び方｜小物・ネジの整理に効く仕切り・引き出し・連結タイプの使い分け",
    description:
      "パーツケースの選び方を、ネジ・ビス・ナット・端子・小物部品の整理に悩む現場担当者向けに解説。",
    type: "article",
    images: ["/images/articles/parts-case-selection-hero.jpg"],
  },
};

// 小物分類（バンラック/マスターBOX）
const PARTS_CASE_BANRACK = [
  { id: "218959", name: "トラスコ バンラックケースC型 4列5段 C-45" },
  { id: "218960", name: "トラスコ バンラックケースC型 4列8段 C-48" },
  { id: "173167", name: "トラスコ バンラックケースA型 4列15段 A-415" },
  { id: "218957", name: "トラスコ バンラックケースC型引出 C-1" },
  { id: "219209", name: "トラスコ バンラックケースD型 3列5段 D-35" },
  { id: "219211", name: "トラスコ バンラックケースD型 6列11段 D-611" },
  { id: "219210", name: "トラスコ マスターBOX D-600" },
  { id: "219275", name: "トラスコ 導電性マスターBOX DD-600N" },
];

// 卓上・準備台（卓上ツールケース/クリアポケット）
const PARTS_CASE_DESKTOP = [
  { id: "261729", name: "トラスコ 卓上ツールケース 6段 T-L1S5" },
  { id: "219995", name: "トラスコ 卓上ツールケース ワイド 6段 DT-L1S5" },
  { id: "219996", name: "トラスコ 卓上ツールケース ワイド 9段 DT-L1S8" },
  { id: "219007", name: "トラスコ クリアポケットボックス CPB-4" },
  {
    id: "219010",
    name: "トラスコ 卓上用クリアポケットスタンドセット CPB-4S",
  },
  {
    id: "219011",
    name: "トラスコ 卓上用クリアポケットスタンドセット 固定金具付 CPB-4SK",
  },
  { id: "228758", name: "トラスコ ツールケース PT-36EN" },
];

// 定位置保管・増設（引出しユニット/コンテナラックケース）
const PARTS_CASE_STORAGE = [
  { id: "221245", name: "トラスコ K型引出しユニット K-43W" },
  { id: "221246", name: "トラスコ K型引出しユニット K-44N" },
  { id: "221247", name: "トラスコ K型引出しユニット K-44W" },
  { id: "227595", name: "トラスコ 引出しユニット本体 MK-66SN-W" },
  { id: "261383", name: "トラスコ コンテナラックケース T302-L" },
  { id: "261385", name: "トラスコ コンテナラックケース T303M-C" },
  { id: "261406", name: "トラスコ コンテナラックケース T608M-C" },
];

const TOOLBOX_PRODUCTS = [
  {
    id: "157957",
    name: "トラスコ ウォーターガードボックス TWG-108（防滴）",
  },
  {
    id: "157971",
    name: "トラスコ スーパーハードボックス TSHB-620（Wロック）",
  },
  { id: "157974", name: "トラスコ プロツールボックス TTB-800" },
  { id: "158008", name: "トラスコ ツールボックス TPC-O53L" },
  { id: "158095", name: "トラスコ アルミケース TACB-50" },
  { id: "157948", name: "トラスコ ステンレス工具箱 TSUS-3026S" },
  { id: "157869", name: "トラスコ 山型ツールボックス Y-280-B" },
];

const RELATED: RelatedArticle[] = [
  {
    href: "/articles/outdoor-work-heatstroke-measures",
    label:
      "外仕事の熱中症対策｜現場・イベント・屋外倉庫で使える暑さ対策グッズと実務チェックリスト",
  },
  {
    href: "/articles/ladder-stepladder-difference",
    label:
      "はしごと脚立の違いとは？JIS・SG規格と「天板に乗ってはいけない」理由",
  },
  {
    href: "/articles/warehouse-summer-workwear",
    label:
      "倉庫作業の夏服装はどう選ぶ？動きやすい作業着・冷却ベスト・空調服と効率化用品の選び方",
  },
  {
    href: "/articles/carutio-cart-guide",
    label:
      "軽量樹脂台車カルティオの選び方｜サイズ・耐荷重・静音・ストッパーの違い",
  },
];

const FAQ = [
  {
    q: "パーツケースは何を基準に選べばよいですか？",
    a: "収納する小物の種類、サイズ、使用頻度、持ち出しの有無で選びます。ネジやビスを細かく分けるなら仕切り付きや多段引き出し、屋外現場へ持ち出すなら工具箱型も候補になります。",
  },
  {
    q: "ネジ収納にはどんなパーツケースがおすすめですか？",
    a: "サイズ別に分けやすい仕切り付きケースや、多段引き出しタイプが向いています。透明引き出しやラベル付きにすると、残量確認や取り違え防止にも役立ちます。",
  },
  {
    q: "小物整理ケースとパーツケースの違いはありますか？",
    a: "一般的な小物整理ケースは文具や雑貨にも使われますが、パーツケースはネジ・ボルト・端子・金具などの作業用小物を分類・保管しやすいように、仕切りや引き出し、見出しカードなどを備えたものが多いです。",
  },
  {
    q: "引き出し式と工具箱型はどちらがよいですか？",
    a: "倉庫や作業台で定位置管理するなら引き出し式、屋外現場やイベント会場へ持ち出すなら工具箱型が向いています。法人現場では、倉庫の親ケースと現場用の持ち出しケースを分けると使いやすくなります。",
  },
  {
    q: "連結タイプのパーツケースはどんな現場に向いていますか？",
    a: "よく使う小物を増やしながら管理したい作業台まわりや、イベント備品・消耗品を見える化したい現場に向いています。設置する場合は、固定方法や安定性も確認しましょう。",
  },
  {
    q: "屋外作業ではどんなパーツケースが使いやすいですか？",
    a: "屋外作業では、持ち運びやすさ、フタやロック、工具との一体管理が重要です。小物を事前に仕分けるパーツケースと、現場へ持ち出す工具箱・ツールボックスを組み合わせると便利です。",
  },
  {
    q: "パーツケースのラベルには何を書けばよいですか？",
    a: "部品名、サイズ、用途、必要に応じて品番や発注先を書くと管理しやすくなります。例として「六角ボルト M6×20」「ステンレスビス 4×25」「イベント設営クリップ」などがあります。",
  },
  {
    q: "法人でパーツケースを導入する際の注意点は？",
    a: "個人ごとに自由に使わせるより、分類ルール、置き場所、ラベル表示、補充ルール、持ち出しルールを決めることが重要です。複数人が使っても迷わない状態を目指しましょう。",
  },
];

const PROCUREMENT_CHECKLIST = [
  "収納する部品の種類を洗い出したか",
  "ネジ・ビス・ナットをサイズ別に分けるルールを決めたか",
  "透明引き出し・ラベル・見出しカードを使えるか",
  "持ち出し用と据え置き用を分けたか",
  "設置場所の幅・奥行・高さを確認したか",
  "作業台・倉庫・車載のどこで使うか決めたか",
  "補充ルール（最低在庫・補充依頼・点検日）を決めたか",
  "複数人で使っても戻す場所がわかるか",
  "屋外作業では工具箱型も併用するか",
  "商品仕様・在庫・価格を最新ページで確認したか",
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "パーツケースの選び方｜小物・ネジの整理に効く仕切り・引き出し・連結タイプの使い分け",
  description:
    "パーツケースの選び方を、ネジ・ビス・ナット・端子・小物部品の整理に悩む現場担当者向けに解説。",
  image: "https://sagyou-navi.com/images/articles/parts-case-selection-hero.jpg",
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

export default function PartsCaseSelectionPage() {
  return (
    <ArticleLayout faq={FAQ} articleJsonLd={articleJsonLd}>
      <Breadcrumb current="パーツケースの選び方" />
      <ArticleHeader
        category="compare"
        readingTime={13}
        title="パーツケースの選び方"
        subtitle="小物・ネジの整理に効く仕切り・引き出し・連結タイプの使い分け"
      />
      <HeroImage
        src="/images/articles/parts-case-selection-hero.jpg"
        alt="パーツケースの選び方としてネジや小物部品を整理する現場担当者"
      />

      <ArticleContent>
        <Lead>
          ネジ、ビス、ナット、端子、金具、予備部品などの小物は、現場ではひとつ足りないだけで作業が止まることがあります。特に屋外作業、イベント設営、倉庫、車載工具管理では、「どこに入れたかわからない」「似た部品を取り違える」「現場に持って行く数が足りない」といった小さなミスが、移動時間や手戻りにつながります。
        </Lead>
        <LeadMuted>
          パーツケースは、小物をきれいに収納するためだけのケースではありません。仕切りの有無、引き出しの数、透明性、持ち運びやすさ、連結・スタンド化、設置場所を考えて選ぶことで、探す時間を減らし、部品の取り違えや在庫切れを防ぎやすくなります。
        </LeadMuted>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          この記事では、パーツケースの選び方を、屋外現場・イベント・倉庫・工場・車載作業でも使いやすいように整理します。単なるおすすめ商品紹介ではなく、現場で「誰でも迷わず取り出せる」収納ルールづくりまで含めて解説します。
        </p>

        <ConclusionBox>
          <strong>
            結論：パーツケースは、収納する小物の「種類・サイズ・使用頻度・持ち出し方」で選ぶのが基本です。
          </strong>
          <ul className="mt-3 space-y-1">
            <li>
              ・ネジ・ビス・ナットなどを細かく分けるなら、仕切り付き・多段引き出しタイプ
            </li>
            <li>・中身をひと目で確認したいなら、透明引き出し・クリアタイプ</li>
            <li>・作業台で仕分けるなら、卓上ツールケース</li>
            <li>
              ・倉庫や現場事務所で定位置管理するなら、バンラックケースや引出しユニット
            </li>
            <li>
              ・屋外現場やイベントへ持ち出すなら、工具箱・ツールボックス型も検討
            </li>
            <li>
              ・連結・スタンドタイプは、よく使う小物を増設しながら管理したい現場に向く
            </li>
            <li>
              ・法人導入では、ラベル表示、補充ルール、置き場所、持ち出し単位まで決めると失敗しにくい
            </li>
          </ul>
        </ConclusionBox>

        <div className="my-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          商品の仕様・価格・在庫・型番・寸法・最大積載量・材質・使用条件は変わる場合があるため、各商品ページで最新情報をご確認ください。屋外使用では防水・防滴・耐候性・ロック構造が商品ごとに異なります。導電性タイプは静電気対策が必要な部品の候補ですが、使用可否は現場条件と商品仕様をご確認ください。パーツケースは安全対策用品そのものではなく、探し物・取り違え・持ち戻りを減らす整理用品です。
        </div>

        <ArticleSection>
          <H2>パーツケースは何を基準に選ぶべき？</H2>
          <ConclusionBox>
            「何を入れるか」「どこで使うか」「誰が使うか」の3点を先に決めると、タイプ選びで迷いません。
          </ConclusionBox>
          <H3>まずは「入れるもの」を整理する</H3>
          <Lead>
            ネジ、ビス、ナット、ワッシャー、端子、金具、結束バンド、クリップ、補修部品、イベント備品、消耗品など。サイズ違い・材質違い・長さ違いが混ざると探しにくくなるため、最初に「分類の単位」を決めます。
          </Lead>
          <H3>次に「使う場所」を決める</H3>
          <Lead>
            倉庫に置く、作業台に置く、車に積む、屋外現場へ持ち出す、イベント会場で使う、工場の保全部品として管理する——置き場所によって、据え置き向き（引き出し・ラック）か持ち出し向き（工具箱型・小型ケース）かが変わります。
          </Lead>
          <H3>「誰が使うか」まで考える</H3>
          <Lead>
            1人専用か、チーム共用か、新人や応援スタッフも使うか、事務所・倉庫・現場間で共有するか。複数人で使うなら、透明引き出しやラベル・見出しカードで「開けなくても中身がわかる」状態にするのが失敗しないコツです。
          </Lead>
          <ArticleTable
            head={["選定軸", "確認すること", "向いているタイプ"]}
            rows={[
              ["部品の種類", "種類が多いか、少ないか", "多段引き出し、仕切り付き"],
              ["部品サイズ", "小さいネジか、やや大きい金具か", "浅型・深型の使い分け"],
              ["使用頻度", "毎日使うか、予備保管か", "卓上、引き出し、ラック"],
              ["持ち出し", "現場へ持って行くか", "工具箱型、ツールケース"],
              ["共有人数", "複数人で使うか", "透明引き出し、ラベル付き"],
              ["増設性", "後から増えるか", "連結・スタンド・引出しユニット"],
            ]}
          />
        </ArticleSection>

        <ArticleSection>
          <H2>ネジ収納に向いているパーツケースは？</H2>
          <ConclusionBox>
            ネジ・ビスは長さ・径・材質で細かく分けられること、透明で残量が見えることが選定の決め手です。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/screws-small-parts-organization.jpg"
            alt="ネジ・ビス・ナットをサイズ別にパーツケースへ整理するイメージ"
          />
          <H3>ネジ・ビスは「細かく分けられる」ことが重要</H3>
          <Lead>
            サイズ違いが混ざると探しにくいため、長さ違い・径違い・材質違いを分けます。仕切り板の枚数や引き出し数、ラベルの貼りやすさが効いてきます。
          </Lead>
          <H3>透明引き出しは中身を確認しやすい</H3>
          <Lead>
            ぱっと見て残量を確認でき、似た部品の取り違えを減らし、補充タイミングも見つけやすくなります。共用現場ほど透明タイプが向きます。
          </Lead>
          <H3>多段タイプは部品点数が多い現場向き</H3>
          <Lead>
            4列15段などの多段は、種類が多い工場・倉庫・保全部門向け。置き場所の幅・奥行・高さを確認し、共用棚にする場合はラベル管理を前提にします。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>仕切り付き・引き出し式・連結タイプの違いは？</H2>
          <ConclusionBox>
            分類なら仕切り付き、定位置管理なら引き出し式、準備・車載なら卓上、増設なら連結、持ち出しなら工具箱型と役割が分かれます。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/parts-case-type-comparison.jpg"
            alt="仕切り付き・引き出し式・卓上・工具箱型パーツケースを比較するイメージ"
          />
          <H3>仕切り付きタイプは、部品サイズに合わせやすい</H3>
          <Lead>
            同じケース内で小分けでき、ネジ・端子・小型金具向け。可動仕切りなら部品サイズに合わせやすく、固定仕切りは分類ルールを決めやすいのが利点です。持ち運ぶ場合は、仕切りがフタに密着して中身が混ざらないかも確認します。
          </Lead>
          <H3>引き出し式は、倉庫・事務所・作業台の定位置管理に向く</H3>
          <Lead>
            大量の部品を分類しやすく、中身が見えるタイプは残量確認が容易。ラベルや見出しカードを活用しやすい反面、持ち運びより据え置き向きです。
          </Lead>
          <H3>卓上タイプは、作業前の仕分けや車載前の準備に向く</H3>
          <Lead>
            作業台に置け、出張・車載前の準備に使いやすいタイプ。よく使う部品を手元で管理できます。導入時は設置場所と収納物の重さ（最大積載量）を確認します。
          </Lead>
          <H3>連結・スタンドタイプは、増やしながら見える化したい現場向き</H3>
          <Lead>
            よく使う部品を増設しながら作業台まわりに並べられます。固定金具付きなら設置安定性も確認でき、イベント備品や消耗品の分類にも向きます。
          </Lead>
          <H3>工具箱型は、屋外現場へ持ち出す作業に向く</H3>
          <Lead>
            工具と小物を一緒に持ち出せ、屋外作業・巡回・イベント設営向き。防滴性・ロック・強度・重量を確認し、入れすぎに注意します。
          </Lead>
          <ArticleTable
            head={["タイプ", "向いている用途", "メリット", "注意点"]}
            rows={[
              [
                "仕切り付きケース",
                "ネジ・端子・小物部品",
                "細かく分類しやすい",
                "部品サイズと仕切り幅を確認",
              ],
              [
                "引き出し式",
                "倉庫・作業台の定位置管理",
                "中身を取り出しやすい",
                "持ち出しには不向きな場合あり",
              ],
              [
                "卓上ツールケース",
                "作業前準備・車載前仕分け",
                "手元で管理しやすい",
                "置き場所と重量を確認",
              ],
              [
                "連結・スタンドタイプ",
                "よく使う小物の増設管理",
                "見える化しやすい",
                "固定方法・設置安定性を確認",
              ],
              [
                "工具箱型",
                "屋外・出張・イベント現場",
                "持ち出しやすい",
                "小物が混ざらない工夫が必要",
              ],
              [
                "ラックケース",
                "複数現場・大量部品管理",
                "大容量で整理しやすい",
                "設置スペースが必要",
              ],
            ]}
          />

          <GroupLabel>小物分類（バンラック・マスターBOX）</GroupLabel>
          <ProductGrid items={PARTS_CASE_BANRACK} cols={2} slug={SLUG} />

          <GroupLabel>卓上・準備台（卓上ツールケース・クリアポケット）</GroupLabel>
          <ProductGrid items={PARTS_CASE_DESKTOP} cols={2} slug={SLUG} />

          <GroupLabel>定位置保管・増設（引出しユニット・コンテナラック）</GroupLabel>
          <ProductGrid items={PARTS_CASE_STORAGE} cols={2} slug={SLUG} />

          <p className="mt-8">
            <a
              href={buildUrl(PARTS_LIST_URL, "list_parts")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
            >
              パーツケース一覧はこちら →
            </a>
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>現場別｜パーツケースの選び方早見表</H2>
          <ConclusionBox>
            屋外施工・イベント・倉庫・工場保全・車載・施設で、向いているタイプは変わります。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/outdoor-work-parts-case-carry.jpg"
            alt="屋外現場へ持ち出すネジや小物部品をパーツケースと工具箱に準備するイメージ"
          />
          <ArticleTable
            head={["現場", "よくある悩み", "向いているタイプ"]}
            rows={[
              [
                "屋外作業・施工現場",
                "ビス・金具の持ち忘れ、工具車両への戻り",
                "工具箱型、卓上ツールケース、持ち出し用ケース",
              ],
              [
                "イベント設営",
                "結束バンド・クリップ・予備ネジが混ざる",
                "クリアポケット、仕切り付き、連結・スタンドタイプ",
              ],
              [
                "倉庫",
                "補修部品・消耗品の在庫場所が不明",
                "多段引き出し、バンラックケース",
              ],
              [
                "工場保全",
                "端子・ネジ・部品の種類が多い",
                "多段引き出し、導電性タイプ、引出しユニット",
              ],
              [
                "車載・巡回作業",
                "車内で小物が散らばる",
                "卓上ツールケース、工具箱型、アルミケース",
              ],
              [
                "店舗・施設管理",
                "少量多品種の備品管理",
                "クリアケース、卓上ケース、小型引き出し",
              ],
            ]}
          />
        </ArticleSection>

        <ArticleSection>
          <H2>パーツケース選びでよくある失敗は？</H2>
          <ConclusionBox>
            「小さすぎ」「仕切り不一致」「不透明」「据え置きと持ち出しの混同」「補充ルール無し」が典型的な失敗です。
          </ConclusionBox>
          <H3>小さすぎて、すぐに入りきらなくなる</H3>
          <Lead>
            初回は今ある部品だけで選びがち。予備部品・追加部品・季節用品まで見込み、増設しやすいタイプを選びます。
          </Lead>
          <H3>仕切りが合わず、部品が混ざる</H3>
          <Lead>
            ネジの長さ違いが混ざる、仕切りが浅いと移動時に混ざる。持ち運び時はフタの密閉性やケース形状も確認します。
          </Lead>
          <H3>透明ではなく、中身確認に時間がかかる</H3>
          <Lead>
            共用現場では中身が見える方が使いやすい一方、ラベルがないと似た部品を間違えます。透明引き出し＋ラベル管理が理想です。
          </Lead>
          <H3>持ち出し用と据え置き用を分けていない</H3>
          <Lead>
            倉庫保管用をそのまま現場へ持って行くと使いにくい。現場持ち出し用は工具箱型や小型ケース、倉庫保管用は引き出し式やラック式と役割を分けます。
          </Lead>
          <H3>補充ルールがなく、空のまま放置される</H3>
          <Lead>
            最低在庫数を決める、最後に使った人が補充依頼する、定期点検日を決める、ラベルに品番や発注先を入れる——この運用があるかで現場の止まりにくさが変わります。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>法人現場では「収納ルール」まで決めると失敗しにくい</H2>
          <ConclusionBox>
            ケース選び以上に、ラベル・置き場所・持ち出しセット・棚卸しの運用ルールが定着を左右します。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/warehouse-parts-case-fixed-storage.jpg"
            alt="倉庫や作業台でパーツケースを定位置管理するイメージ"
          />
          <H3>ラベルは「名称＋サイズ＋用途」で書く</H3>
          <Lead>
            例：六角ボルト M6×20／ステンレスビス 4×25／結束バンド 白 200mm／看板金具 予備／イベント設営クリップ。誰が見ても同じ場所に戻せる粒度にします。
          </Lead>
          <H3>使用頻度で置き場所を分ける</H3>
          <Lead>
            毎日使う＝作業台・車載、週に数回＝倉庫手前、予備部品＝保管棚・引出しユニット、イベント用＝案件ごとのケース。動線の短さが探し物時間を直接減らします。
          </Lead>
          <H3>持ち出しセットを作る</H3>
          <Lead>
            現場ごとの小物セット、イベント設営セット、屋外補修セット、倉庫メンテナンスセット、車載巡回セット。当日必要な分だけ持ち出せば、持ち戻りが減ります。
          </Lead>
          <H3>定期的に棚卸し・補充する</H3>
          <Lead>
            月1回、繁忙期前、イベント前、夏場・台風前など屋外作業が増える前、使い切り後の補充依頼ルール。棚卸し日を決めるだけで「空のまま放置」を防げます。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>パーツケースと工具箱はどう使い分ける？</H2>
          <ConclusionBox>
            パーツケースは「分類して保管する」用品、工具箱は「持ち出して作業する」用品。親ケース×持ち出しケースで運用します。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/parts-case-toolbox-workflow.jpg"
            alt="パーツケースと工具箱を使い分けて現場作業を準備するイメージ"
          />
          <H3>パーツケースは「分類して保管する」用品</H3>
          <Lead>
            小物部品を分け、残量を見て、定位置管理する。倉庫・作業台向きです。
          </Lead>
          <H3>工具箱・ツールボックスは「持ち出して作業する」用品</H3>
          <Lead>
            工具と部品をまとめ、屋外現場へ持って行き、車載管理する。持ち運びやすさと強度を重視します。
          </Lead>
          <H3>現場では「親ケース」と「持ち出しケース」に分けると便利</H3>
          <Lead>
            親ケース＝倉庫・事務所で在庫管理、持ち出しケース＝当日必要な部品だけ持参、工具箱＝工具と現場用小物をまとめる。戻した後に補充する運用まで決めると安定します。
          </Lead>

          <ProductGrid items={TOOLBOX_PRODUCTS} cols={2} slug={SLUG} />

          <p className="mt-8">
            <a
              href={buildUrl(TOOLBOX_LIST_URL, "list_toolbox")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
            >
              工具箱・ツールボックス一覧はこちら →
            </a>
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>パーツケースの選び方｜法人導入チェックリスト</H2>
          <ConclusionBox>
            収納物の洗い出しから、据え置き／持ち出しの分離、補充ルールまでをチェックすると選定ミスを防げます。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/parts-case-procurement-checklist.jpg"
            alt="パーツケースの法人導入チェックリストを確認する購買担当者"
          />
          <ul className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground">
            {PROCUREMENT_CHECKLIST.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true">[ ]</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ArticleTable
            head={["収納物", "選び方"]}
            rows={[
              ["ネジ・ビス", "サイズ別に分けられる仕切り・引き出し"],
              ["ナット・ワッシャー", "小さめ引き出し、多段タイプ"],
              ["端子・電子部品", "仕切り付き、必要に応じて導電性タイプ"],
              ["金具・ブラケット", "深め引き出し、大きめケース"],
              ["結束バンド・クリップ", "透明ケース、スタンドタイプ"],
              ["工具と小物", "工具箱型、ツールケース"],
              ["予備部品", "ラベル付き引き出し、ラックケース"],
            ]}
          />
        </ArticleSection>

        <FaqSection faq={FAQ} />

        <ArticleSection>
          <H2>まとめ</H2>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
            <li>
              ・パーツケースは、収納物の種類・サイズ・使用頻度・持ち出し方で選ぶ
            </li>
            <li>
              ・ネジや小物部品は、仕切り付き・透明引き出し・ラベル管理が重要
            </li>
            <li>
              ・倉庫や作業台では引き出し式、屋外現場やイベントでは工具箱型も検討する
            </li>
            <li>
              ・法人現場では、ケースそのものだけでなく、分類ルール・補充ルール・置き場所まで決める
            </li>
            <li>・商品仕様・価格・在庫は各商品ページで最新情報を確認する</li>
          </ul>
        </ArticleSection>

        <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
          <h2 className="text-2xl font-black text-white">
            パーツケース・工具箱をまとめて確認する
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={buildUrl(PARTS_LIST_URL, "footer_parts")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover"
            >
              パーツケース一覧
            </a>
            <a
              href={buildUrl(TOOLBOX_LIST_URL, "footer_toolbox")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              工具箱・ツールボックス一覧
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

        <RelatedArticles items={RELATED} />

        <Disclaimer />
      </ArticleContent>
    </ArticleLayout>
  );
}
