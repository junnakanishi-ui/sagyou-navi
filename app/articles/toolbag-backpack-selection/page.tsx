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

const SLUG = "toolbag-backpack-selection";

const gcImageUrl = (id: string) => `/products/${id}.jpg`; // 外部URL禁止

const buildUrl = (base: string, utmContent: string) => {
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=sagyou_navi&utm_medium=referral&utm_campaign=2026_toolbag&utm_content=${utmContent}`;
};

// カテゴリ正式URLが確定したら暫定検索URLから差し替える
const TOOLBAG_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E3%83%84%E3%83%BC%E3%83%AB%E3%83%90%E3%83%83%E3%82%B0&view=grid";
const TRUSCO_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html";

export const metadata: Metadata = {
  title:
    "ツールバッグとバックパックどっちが良い？工具の持ち運びを軽くする選び方｜作業用品ナビ",
  description:
    "ツールバッグと工具用バックパックの違いを、電工・設備点検・屋外作業・イベント設営・出張作業向けに解説。工具の重量、移動距離、両手を空けたいか、出し入れのしやすさ、防水性、キャスター付きの必要性まで、法人現場向けの選び方チェックリスト付きで紹介します。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "ツールバッグとバックパックどっちが良い？工具の持ち運びを軽くする選び方",
    description:
      "ツールバッグと工具用バックパックの違いを、電工・設備点検・屋外作業・イベント設営・出張作業向けに解説。",
    type: "article",
    images: ["/toolbag-backpack-selection-hero.jpg"],
  },
};

const casterBagProducts = [
  {
    id: "163489",
    name: "トラスコ ツールキャリーバッグ キャスター付 ブラック TCB-Z",
  },
];

const toolbagBackpackProducts = [
  { id: "163389", name: "トラスコ デイバッグ ブラック TC-DB-BK" },
  { id: "163394", name: "トラスコ 防水ターポリンデイバッグ OD TDYB-OD" },
];

const toolbagProducts = [
  { id: "163419", name: "トラスコ TOUGH ターポリンツールバッグ ブラック TTBA-BK" },
  { id: "163416", name: "トラスコ ワーカーズツールバッグ ブラック TC-450-BK" },
  { id: "163417", name: "トラスコ ワーカーズツールバッグ ネイビー TC-450-NV" },
  { id: "163415", name: "トラスコ ツールバッグ ベージュ TTB-330Y" },
];

const shoulderToteProducts = [
  { id: "163448", name: "トラスコ ショルダー式ツールバッグ ベージュ TTS-320" },
  { id: "163412", name: "トラスコ ワークトートバッグ ブラック TWT-BK" },
];

const RELATED: RelatedArticle[] = [
  {
    href: "/articles/parts-case-selection",
    label:
      "パーツケースの選び方｜小物・ネジの整理に効く仕切り・引き出し・連結タイプの使い分け",
  },
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
];

const FAQ = [
  {
    q: "ツールバッグとバックパックはどっちが良いですか？",
    a: "移動距離が長く、両手を空けたいならバックパックが向いています。作業場所に置いて工具を頻繁に出し入れするならツールバッグが使いやすいです。重い工具を運ぶ場合はキャスター付きも検討します。",
  },
  {
    q: "電工バッグはどんなものを選べばよいですか？",
    a: "ポケット数、仕切り、開口部の広さ、小物収納、背負いやすさを確認して選びます。ドライバー、ペンチ、ニッパー、テスター、端子などを分けて収納できるタイプが便利です。",
  },
  {
    q: "工具用バックパックはどんな現場に向いていますか？",
    a: "設備点検、施設管理、電工、イベント設営など、建物内や会場内を歩き回る作業に向いています。両手が空くため移動しやすい一方、工具を取り出すには一度下ろす必要がある場合があります。",
  },
  {
    q: "キャスター付きツールバッグはどんなときに便利ですか？",
    a: "電動工具や重い工具をまとめて運ぶ出張作業・工事作業に便利です。ただし、階段や段差、砂利道、狭い通路が多い現場では使いにくい場合があります。",
  },
  {
    q: "屋外作業ではどんなツールバッグが向いていますか？",
    a: "ターポリン素材、防水・防滴仕様、底面補強、ファスナーやロック構造を確認しましょう。雨や泥、粉じんが想定される場合は、商品仕様を必ず確認してください。",
  },
  {
    q: "工具箱とツールバッグはどう使い分けますか？",
    a: "工具箱は保護性や車載保管に向き、ツールバッグは現場への持ち出しや出し入れのしやすさに向いています。車載用は工具箱、現場持ち出しはツールバッグやバックパックと分けると使いやすくなります。",
  },
  {
    q: "ツールバッグに工具を入れすぎても大丈夫ですか？",
    a: "入れすぎると肩や腰への負担が大きくなり、バッグ本体にも負荷がかかります。実際に入れる工具の重量、バッグの耐荷重、持ち運ぶ距離を確認して選びましょう。",
  },
  {
    q: "法人でツールバッグを導入する際の注意点は？",
    a: "職種、工具重量、移動距離、作業環境、保管方法、小物管理のルールを確認してから選びます。全員同じバッグにするより、電工・巡回・屋外・出張作業など用途別に分ける方が失敗しにくいです。",
  },
];

const PROCUREMENT_CHECKLIST = [
  "使用する職種は電工・設備点検・屋外作業・イベント設営のどれか",
  "移動距離は長いか短いか",
  "階段・脚立・屋上・機械室などを移動するか",
  "両手を空ける必要があるか",
  "工具を頻繁に出し入れするか",
  "工具の総重量を確認したか",
  "防水・防滴・撥水などの仕様を確認したか",
  "ポケット数・仕切り・開口部の広さを確認したか",
  "車載保管と現場持ち出しを分けるか",
  "小物部品用のパーツケースを併用するか",
  "価格・在庫・仕様を最新商品ページで確認したか",
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ツールバッグとバックパックどっちが良い？工具の持ち運びを軽くする選び方",
  description:
    "ツールバッグと工具用バックパックの違いを、電工・設備点検・屋外作業・イベント設営・出張作業向けに解説。",
  image: "https://sagyou-navi.com/toolbag-backpack-selection-hero.jpg",
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

export default function ToolbagBackpackSelectionPage() {
  return (
    <ArticleLayout faq={FAQ} articleJsonLd={articleJsonLd}>
      <Breadcrumb current="ツールバッグの選び方" />
      <ArticleHeader
        category="compare"
        readingTime={13}
        title="ツールバッグとバックパックどっちが良い？"
        subtitle="工具の持ち運びを軽くする選び方"
      />
      <HeroImage
        src="/toolbag-backpack-selection-hero.jpg"
        alt="ツールバッグとバックパックを比較して工具の持ち運びを検討する現場担当者"
      />

      <ArticleContent>
        <Lead>
          工具を持ち運ぶとき、従来の工具箱では「重い」「片手がふさがる」「現場内の移動が大変」と感じることがあります。特に電工、設備点検、施設管理、屋外作業、イベント設営、出張作業では、車から作業場所まで距離があったり、階段や脚立まわりを移動したり、複数の部屋や現場を巡回したりすることも少なくありません。
        </Lead>
        <LeadMuted>
          ツールバッグや工具用バックパックは、工具を収納するだけでなく、移動のしやすさ、取り出しやすさ、両手の空けやすさ、現場での作業効率にも関わる用品です。ただし、バックパックが常に正解というわけではなく、工具の重量、移動距離、作業場所、出し入れ頻度によって向き不向きがあります。
        </LeadMuted>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          この記事では、ツールバッグとバックパックの違い、電工バッグ・ショルダー・トート・キャスター付きバッグの使い分け、法人現場で導入する際のチェックポイントを、現場担当者や購買担当者が社内共有しやすい形で整理します。
        </p>

        <div className="my-8 rounded-lg border-2 border-primary/40 bg-primary-light px-5 py-4 text-base leading-relaxed">
          <p className="font-bold text-foreground">
            Q. ツールバッグとバックパック、どっちが良い？
          </p>
          <p className="mt-2 text-foreground">
            <strong>A.</strong>{" "}
            移動距離が長く両手を空けたいならバックパック、作業場所で工具を頻繁に出し入れするならツールバッグ、重い電動工具を運ぶならキャスター付きが基本です。
            1つに絞らず、用途別に分けるのが法人現場では失敗しにくい選び方です。
          </p>
        </div>

        <ConclusionBox>
          <strong>
            結論：工具の持ち運びは「移動距離が長いならバックパック」「出し入れ重視ならツールバッグ」「重量物ならキャスター付き」で選ぶのが基本です。
          </strong>
          <ul className="mt-3 space-y-1">
            <li>・両手を空けて移動したいなら、工具用バックパック・デイバッグが候補</li>
            <li>・工具を頻繁に出し入れするなら、開口部が広いツールバッグが使いやすい</li>
            <li>・電工・設備点検では、ポケット数・仕切り・小物管理が重要</li>
            <li>・屋外作業では、防水・防滴・ターポリン素材・底面の汚れにくさも確認</li>
            <li>・重い電動工具や出張作業では、キャスター付きツールキャリーバッグが候補</li>
            <li>・車載中心なら、バッグ単体ではなく工具箱・パーツケースとの組み合わせも考える</li>
            <li>・法人導入では、収納工具の重量、移動距離、置き場所、現場ルール、耐荷重を確認する</li>
          </ul>
        </ConclusionBox>

        <div className="my-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          商品の仕様・価格・在庫・型番・寸法・耐荷重・材質・防水/防滴/撥水仕様・使用条件は変わる場合があるため、各商品ページで最新情報をご確認ください。防水・防滴・撥水は意味が異なるため、屋外・雨天で使う場合は仕様をご確認ください。工具を入れすぎると身体への負担やバッグ破損の原因になります。実際の工具重量と耐荷重をご確認ください。高所作業や脚立作業でバッグを持つ場合は、現場ルールや安全基準に従ってください。
        </div>

        <ArticleSection>
          <H2>ツールバッグとバックパックはどっちが良い？</H2>
          <ConclusionBox>
            「移動距離」「工具の出し入れ頻度」「工具重量」の3つで選ぶと、形状選びで迷いません。
          </ConclusionBox>
          <ArticleFigure
            src="/toolbag-backpack-type-comparison.jpg"
            alt="ツールバッグ・工具用バックパック・ショルダー・キャスター付きバッグの違いを比較するイメージ"
          />
          <H3>移動距離が長いならバックパックが向きやすい</H3>
          <Lead>
            両肩で背負えるため両手が空き、階段・施設内巡回・イベント会場で動きやすいのが利点です。ただし背負ったままでは工具を取り出しにくく、重すぎる工具には不向きな場合があります。
          </Lead>
          <H3>工具の出し入れが多いならツールバッグが向きやすい</H3>
          <Lead>
            上から中身を見やすく、開口部が広いタイプは工具を探しやすいのが特徴。作業場所に置いて使う、床置き・作業台横で使う現場に向きます。
          </Lead>
          <H3>工具が重いならキャスター付きも検討する</H3>
          <Lead>
            電動工具や大型工具をまとめて運ぶ出張・工事作業では、キャスター付きツールキャリーバッグが候補です。堅牢なハンドル・厚手生地・フルオープン構造のタイプは、重量物を引いて運びつつ出し入れもしやすくなります。ただし段差・階段・砂利道が多い現場では使いにくい場合があり、収納量が多い分の入れすぎにも注意します。
          </Lead>
          <ArticleTable
            head={["タイプ", "向いている現場", "強み", "注意点"]}
            rows={[
              [
                "ツールバッグ",
                "作業場所で工具を出し入れする現場",
                "開口部が広く探しやすい",
                "片手がふさがりやすい",
              ],
              [
                "バックパック",
                "巡回・階段・移動距離が長い現場",
                "両手が空き、移動しやすい",
                "背負ったまま工具は取りにくい",
              ],
              [
                "ショルダー",
                "軽工具・短距離移動",
                "取り回しがよい",
                "片肩に負担が偏りやすい",
              ],
              [
                "トート",
                "倉庫・作業台・軽作業",
                "ざっくり収納しやすい",
                "小物が混ざりやすい",
              ],
              [
                "キャスター付き",
                "重い工具・出張作業",
                "重量物を引いて運べる",
                "段差・階段・悪路に弱い",
              ],
              [
                "工具箱併用",
                "車載・保管",
                "保護性が高い",
                "持ち運びは重くなりやすい",
              ],
            ]}
          />
        </ArticleSection>

        <ArticleSection>
          <H2>工具用バックパックはどんな人に向いている？</H2>
          <ConclusionBox>
            巡回・階段・移動距離が長く、両手を空けたい電工・設備点検・施設管理・イベント設営に向きます。
          </ConclusionBox>
          <ArticleFigure
            src="/tool-backpack-electrical-maintenance.jpg"
            alt="電工・設備点検で工具用バックパックを背負って移動する作業員"
          />
          <H3>電工・設備点検で両手を空けたい人</H3>
          <Lead>
            脚立や階段まわりで移動し、点検先を複数回る作業に向きます。ドライバー・テスター・ペンチ・端子など小物が多い職種ほど、背負えることで移動がラクになります。
          </Lead>
          <H3>施設管理・巡回作業で移動が多い人</H3>
          <Lead>
            建物内を歩き、階段・廊下・屋上・機械室を移動する作業に。工具箱より身軽に動きたいときの選択肢です。
          </Lead>
          <H3>イベント・屋外現場で両手を空けたい人</H3>
          <Lead>
            会場内を移動し、誘導・設営・撤収で両手を使いたい現場に向きます。ツールバッグを置く場所が少ない現場でも便利です。屋外では雨や汚れに備え、防水・ターポリン系の仕様を確認します。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>ツールバッグはどんな人に向いている？</H2>
          <ConclusionBox>
            工具を頻繁に出し入れする、作業場所が比較的固定で車から近い現場に向きます。
          </ConclusionBox>
          <ArticleFigure
            src="/toolbag-open-access-worksite.jpg"
            alt="作業場所でツールバッグから工具を取り出す現場作業員"
          />
          <H3>工具を頻繁に出し入れする人</H3>
          <Lead>
            作業場所にバッグを置き、上から工具を取りたい人向け。ドライバー・レンチ・スパナをすぐ取りたい場面では、フルオープン・大開口タイプが便利です。
          </Lead>
          <H3>倉庫・作業台・車両横で使う人</H3>
          <Lead>
            作業場所が比較的固定で車から近く、床置きして使える現場に向きます。工具箱より軽くしたいときの選択肢です。
          </Lead>
          <H3>屋外作業では素材・底面・汚れに注意</H3>
          <Lead>
            ターポリン素材、底面補強、ファスナーやロック、水・泥・粉じんへの配慮が必要です。雨天使用は仕様を必ず確認します。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>電工バッグ・設備点検バッグは何を見て選ぶ？</H2>
          <ConclusionBox>
            ポケット数・開口部の広さ・小物収納との組み合わせ・重量バランスの4点を確認します。
          </ConclusionBox>
          <H3>ポケット数と仕切り</H3>
          <Lead>
            ドライバー、ペンチ、ニッパー、テスター、圧着工具、絶縁テープ、端子・ビス、小型部品——使う工具の種類だけポケット・仕切りがあると、底に沈んで探す時間を減らせます。
          </Lead>
          <H3>開口部の広さ</H3>
          <Lead>
            工具が見えるか、片手で取り出せるか、フルオープンか、背負った後に取り出しやすいかを確認します。
          </Lead>
          <H3>小物収納との組み合わせ</H3>
          <Lead>
            端子やビスはパーツケースへ、工具はバッグへと分けると混ざりません。書類やタブレットを入れる場合はポケットを確認し、重い工具と小物を分けます。
          </Lead>
          <H3>重量バランスと肩・腰への負担</H3>
          <Lead>
            片肩に偏らないか、背負ったとき重心が下に寄りすぎないか。工具を入れすぎないことが基本で、長時間移動ならバックパック型を検討します。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>現場別｜ツールバッグ・バックパックの選び方早見表</H2>
          <ConclusionBox>
            電工・設備点検・屋外・イベント・倉庫・出張・車載で、向いているタイプは変わります。
          </ConclusionBox>
          <ArticleFigure
            src="/outdoor-event-toolbag-carry.jpg"
            alt="屋外現場やイベント設営で工具バッグを持ち運ぶ作業員"
          />
          <ArticleTable
            head={["現場・職種", "よくある悩み", "向いているタイプ"]}
            rows={[
              [
                "電工・通信工事",
                "小物工具が多い、両手を空けたい",
                "バックパック、電工バッグ、パーツケース併用",
              ],
              [
                "設備点検・施設管理",
                "建物内を巡回する",
                "バックパック、ショルダー、軽量バッグ",
              ],
              [
                "屋外作業・看板施工",
                "工具と部品を現場へ持ち出す",
                "防水ターポリン系、ツールバッグ、工具箱併用",
              ],
              [
                "イベント設営",
                "会場内を歩く、備品が多い",
                "バックパック、トート、ツールバッグ",
              ],
              [
                "倉庫・物流メンテ",
                "作業台・車両横で使う",
                "ツールバッグ、ワークトート",
              ],
              [
                "出張作業",
                "電動工具・大型工具を運ぶ",
                "キャスター付きツールキャリーバッグ",
              ],
              [
                "車載中心",
                "バッグを積みっぱなしにする",
                "工具箱、ツールバッグ、パーツケース併用",
              ],
            ]}
          />
        </ArticleSection>

        <ArticleSection>
          <H2>工具が重いならキャスター付きも検討する</H2>
          <ConclusionBox>
            電動工具や出張作業の重量物は、引いて運べるキャスター付きが第三の選択肢になります。
          </ConclusionBox>
          <ArticleFigure
            src="/caster-tool-carry-bag-heavy-tools.jpg"
            alt="重い工具をキャスター付きツールキャリーバッグで運ぶ出張作業員"
          />
          <Lead>
            電動工具やバッテリー、大型レンチなどをまとめて運ぶと、バックパックでもツールバッグでも肩や腰に負担がかかります。こうした重量物は、堅牢なハンドルと厚手生地、フルオープン構造を備えたキャスター付きツールキャリーバッグなら、引いて運びながら現場で大きく開いて出し入れできます。車から現場入口まで距離がある出張・工事作業に向く一方、段差・階段・砂利道が多い現場では取り回しに注意し、入れすぎないことも大切です。
          </Lead>
          <ProductGrid items={casterBagProducts} cols={2} slug={SLUG} />
        </ArticleSection>

        <ArticleSection>
          <H2>ツールバッグ選びでよくある失敗は？</H2>
          <ConclusionBox>
            容量だけで選ぶ・ポケット不足・取り出しにくい・防水未確認・工具箱との役割分担なし、が典型です。
          </ConclusionBox>
          <H3>容量だけで選んで重くなりすぎる</H3>
          <Lead>
            大容量は便利でも、入れすぎると持ち運びにくくなります。工具を「毎回使うもの」と「予備」に分け、重量物はキャスター付きや工具箱も検討します。
          </Lead>
          <H3>ポケットが少なくて工具が混ざる</H3>
          <Lead>
            ドライバーや小物が底に沈み、作業中に探す時間が増えます。電工・設備点検ではポケット数が効きます。
          </Lead>
          <H3>バックパックに入れた工具が取り出しにくい</H3>
          <Lead>
            背負ったままでは取り出しにくいため、作業場所では下ろして使う前提に。頻繁に使う工具は腰袋・小型ポーチ併用も検討します。
          </Lead>
          <H3>屋外用なのに水・汚れへの確認をしていない</H3>
          <Lead>
            防水・防滴・撥水は意味が異なります。ファスナー部や縫い目も含め、商品仕様で使用条件を確認します。
          </Lead>
          <H3>工具箱・パーツケースとの役割分担がない</H3>
          <Lead>
            バッグ内で小物が混ざり、ビスや端子が見つからなくなります。車載保管と現場持ち出しを分けるのが基本です。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>工具の持ち運びを軽くする収納ルール</H2>
          <ConclusionBox>
            毎日使う工具だけをバッグに入れ、重い工具・小物・用途別にバッグを分けると軽くなります。
          </ConclusionBox>
          <H3>毎日使う工具だけをバッグに入れる</H3>
          <Lead>
            ドライバー、ペンチ、ニッパー、六角レンチ、メジャー、テスター、カッター、絶縁テープなど、毎回使うものだけに絞ります。
          </Lead>
          <H3>重い工具は別管理にする</H3>
          <Lead>
            電動工具、バッテリー、大型レンチ、ハンマー、消耗品箱は別管理にして、メインバッグを軽く保ちます。
          </Lead>
          <H3>小物部品はパーツケースで分ける</H3>
          <Lead>
            ビス・端子・ナット・ワッシャー・結束バンド・予備部品はパーツケースへ。バッグ内で混ざるのを防ぎます。
          </Lead>
          <H3>車載用・現場用・巡回用でバッグを分ける</H3>
          <Lead>
            車載用＝工具箱・大容量バッグ、現場用＝ツールバッグ、巡回用＝バックパック、小物用＝パーツケース。用途で分けると探し物と持ち戻りが減ります。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>おすすめツールバッグ・バックパック（用途別）</H2>
          <ConclusionBox>
            バックパック・ツールバッグ・ショルダー・トートを用途別に分けて選ぶと、法人現場での導入ミスを防げます。
          </ConclusionBox>

          <GroupLabel>バックパック・デイバッグ（巡回・両手フリー）</GroupLabel>
          <ProductGrid items={toolbagBackpackProducts} cols={2} slug={SLUG} />

          <GroupLabel>ツールバッグ（出し入れ重視・屋外）</GroupLabel>
          <ProductGrid items={toolbagProducts} cols={2} slug={SLUG} />

          <GroupLabel>ショルダー・トート（短距離・軽作業）</GroupLabel>
          <ProductGrid items={shoulderToteProducts} cols={2} slug={SLUG} />

          <p className="mt-8">
            <a
              href={buildUrl(TOOLBAG_LIST_URL, "list_toolbag")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
            >
              バックパック・ツールバッグ一覧はこちら →
            </a>
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>法人導入時のチェックリスト</H2>
          <ConclusionBox>
            職種・移動距離・工具重量・作業環境・保管方法・小物管理を確認すると選定ミスを防げます。
          </ConclusionBox>
          <ArticleFigure
            src="/toolbag-backpack-procurement-checklist.jpg"
            alt="ツールバッグと工具用バックパックの法人導入チェックリストを確認する購買担当者"
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
            head={["客層", "重視すべき点", "向いているバッグ"]}
            rows={[
              ["電工", "ポケット数、小物収納、両手が空く", "バックパック、電工バッグ"],
              [
                "設備点検",
                "軽さ、巡回性、書類収納",
                "バックパック、ショルダー",
              ],
              [
                "屋外作業",
                "防水性、汚れにくさ、耐久性",
                "ターポリン系ツールバッグ",
              ],
              [
                "イベント設営",
                "移動性、備品管理、両手が空く",
                "バックパック、トート",
              ],
              [
                "出張修理",
                "大容量、工具保護、移動性",
                "キャスター付きバッグ",
              ],
              [
                "倉庫メンテ",
                "出し入れ、作業台横で使いやすい",
                "ツールバッグ、トート",
              ],
            ]}
          />
        </ArticleSection>

        <FaqSection faq={FAQ} />

        <ArticleSection>
          <H2>まとめ</H2>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
            <li>
              ・移動距離が長いならバックパック、出し入れ重視ならツールバッグ、重量物ならキャスター付きが候補
            </li>
            <li>
              ・電工・設備点検では、ポケット数・小物収納・両手が空くことを重視する
            </li>
            <li>
              ・屋外作業では、防水・防滴・撥水・素材・底面の汚れにくさを確認する
            </li>
            <li>
              ・バッグに工具を入れすぎず、車載用・現場用・巡回用・小物用で分ける
            </li>
            <li>・商品仕様・価格・在庫は各商品ページで最新情報を確認する</li>
          </ul>
        </ArticleSection>

        <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
          <h2 className="text-2xl font-black text-white">
            ツールバッグ・バックパックをまとめて確認する
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={buildUrl(TOOLBAG_LIST_URL, "footer_toolbag")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover"
            >
              バックパック・ツールバッグ一覧
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

        <Disclaimer extra="工具の入れすぎ・耐荷重、防水/防滴/撥水の違い、高所・脚立作業時の現場ルール遵守にご注意ください。" />
      </ArticleContent>
    </ArticleLayout>
  );
}
