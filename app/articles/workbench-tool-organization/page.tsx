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

const SLUG = "workbench-tool-organization";

const gcImageUrl = (id: string) => `/products/${id}.jpg`; // 外部URL禁止

const buildUrl = (base: string, utmContent: string) => {
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=sagyou_navi&utm_medium=referral&utm_campaign=2026_workbench_organize&utm_content=${utmContent}`;
};

const WAGON_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c4a1bca5.html?view=grid";
const PARTS_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5d1a1bca5.html";
const TOOLBOX_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/9129bf6abc8.html?view=grid";
const TRUSCO_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html";

export const metadata: Metadata = {
  title:
    "作業台まわりの工具整理術｜工具を探す時間を減らすツールワゴン・収納用品の選び方｜作業用品ナビ",
  description:
    "作業台まわりに工具が散らかる、必要な工具を探す時間が長い、使った工具が戻らない。そんな工場・倉庫・メンテナンス現場向けに、工具整理の考え方、ツールワゴン・パーツケース・工具箱の使い分け、法人導入時のチェックポイントを解説します。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "作業台まわりの工具整理術｜工具を探す時間を減らすツールワゴン・収納用品の選び方",
    description:
      "作業台まわりに工具が散らかる、必要な工具を探す時間が長い、使った工具が戻らない。そんな工場・倉庫・メンテナンス現場向けに、工具整理の考え方、ツールワゴン・パーツケース・工具箱の使い分け、法人導入時のチェックポイントを解説します。",
    type: "article",
    images: ["/workbench-tool-organization-hero.jpg"],
  },
};

// 作業台横・軽量/中量
const WAGON_LIGHT = [
  {
    id: "264694",
    name: "トラスコ ツールワゴンロイヤル 深2浅1 アーセナルグレー TWR-4-DG",
  },
  {
    id: "264684",
    name: "トラスコ ツールワゴンロイヤル 深1浅2 スカイ TWR-221-SB",
  },
  {
    id: "173509",
    name: "トラスコ バーディワゴン 600×400×H600 ウレタン双輪 ホワイト BDW-662D-W",
  },
  {
    id: "218954",
    name: "トラスコ アングル式ツールワゴン BUWF型 3段 BUWF-0",
  },
];

// 引き出し付き（工具＋部品）
const WAGON_DRAWER = [
  {
    id: "261421",
    name: "トラスコ カスタムワゴン 深型1段引出・浅棚板付 ブラック TAC-648ADR-BK",
  },
  {
    id: "173689",
    name: "トラスコ バーディワゴン 600×400 引出付 オレンジ BDW-963V-OROR",
  },
  {
    id: "218955",
    name: "トラスコ アングル式ツールワゴン BUWF型 3段 1段引出付 BUWF-1",
  },
];

// ステンレス（水気・衛生）
const WAGON_STAINLESS = [
  {
    id: "219053",
    name: "トラスコ ステンレスワゴン 304クリーンフェニックス ラック型 600×400 4段 CPE3-R1264",
  },
  {
    id: "219055",
    name: "トラスコ ステンレスワゴン 304クリーンフェニックス ラック型 900×600 4段 CPE3-R1294",
  },
  {
    id: "219056",
    name: "トラスコ ステンレスワゴン 304クリーンフェニックス ラック型 600×400 2段 CPE3-R662",
  },
  {
    id: "219059",
    name: "トラスコ ステンレスワゴン 304クリーンフェニックス ラック型 600×400 3段 CPE3-R763",
  },
  {
    id: "219063",
    name: "トラスコ ステンレスワゴン 304クリーンフェニックス ラック型 750×500 3段 CPE3-R973",
  },
  {
    id: "219121",
    name: "トラスコ ステンレスワゴン クリーンラビット 500×500×H810 3段 CRB-853",
  },
  {
    id: "219105",
    name: "トラスコ ステンレスワゴン クリーンラビット 360×360×H600 2段 CRB-632SU",
  },
];

const PARTS_CASE_PRODUCTS = [
  { id: "218959", name: "トラスコ バンラックケースC型 4列5段 C-45" },
  { id: "173167", name: "トラスコ バンラックケースA型 4列15段 A-415" },
  { id: "218960", name: "トラスコ バンラックケースC型 4列8段 C-48" },
  { id: "261729", name: "トラスコ 卓上ツールケース 6段 T-L1S5" },
];

const TOOLBOX_PRODUCTS = [
  { id: "157957", name: "トラスコ ウォーターガードボックス TWG-108（防滴）" },
  { id: "158095", name: "トラスコ アルミケース TACB-50（軽量）" },
  { id: "157971", name: "トラスコ スーパーハードボックス TSHB-620" },
  { id: "158008", name: "トラスコ ツールボックス（パーツケース系）TPC-O53L" },
];

const CHECKLIST = [
  "作業台の上に常時置いている工具はないか",
  "よく使う工具とたまに使う工具を分けているか",
  "工具の定位置が決まっているか",
  "作業者全員が戻す場所を理解しているか",
  "ネジ・小物部品が混在していないか",
  "工具箱の中身が重なって探しにくくなっていないか",
  "作業台横にツールワゴンを置くスペースがあるか",
  "通路幅や安全面を確認しているか",
  "キャスター・ストッパーの有無を確認しているか",
  "定期的に不要な工具を整理しているか",
];

const RELATED: RelatedArticle[] = [
  {
    href: "/articles/parts-case-selection",
    label:
      "パーツケースの選び方｜小物・ネジの整理に効く仕切り・引き出し・連結タイプの使い分け",
  },
  {
    href: "/articles/toolbag-backpack-selection",
    label:
      "ツールバッグとバックパックどっちが良い？工具の持ち運びを軽くする選び方",
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
];

const FAQ = [
  {
    q: "作業台まわりの工具整理は何から始めればよいですか？",
    a: "まず、工具を「よく使う」「たまに使う」「持ち出す」「小物部品と一緒に使う」に分けます。そのうえで、よく使う工具は作業台横、小物部品はパーツケース、持ち出し工具は工具箱に分けると整理しやすくなります。",
  },
  {
    q: "作業台の上に工具を置いてはいけませんか？",
    a: "一時的に置くのは問題ありませんが、常時置きっぱなしになると作業スペースが狭くなり、工具を探す時間も増えやすくなります。作業台は作業する場所、工具は作業台横や専用収納に置くという分け方がおすすめです。",
  },
  {
    q: "工具箱とツールワゴンはどちらが便利ですか？",
    a: "持ち出しが多いなら工具箱、作業台横で使うならツールワゴンが便利です。工具箱は移動・車載に向き、ツールワゴンは作業中に工具を取り出しやすい点が強みです。",
  },
  {
    q: "ツールワゴンはどんな現場に向いていますか？",
    a: "工場の組立・加工、倉庫の梱包・出荷、設備メンテナンス、施設管理など、作業場所の近くに工具を置きたい現場に向いています。複数の作業台で工具を共有する場合にも便利です。",
  },
  {
    q: "パーツケースは工具整理にも使えますか？",
    a: "ネジ、ナット、端子、ビット、替刃、消耗品などの小物整理に向いています。大型工具には向きませんが、工具と一緒に使う部品を分類することで、探す時間や取り違えを減らしやすくなります。",
  },
  {
    q: "工具が元に戻らない場合はどうすればよいですか？",
    a: "収納用品を増やすだけでは解決しにくいです。工具の定位置、ラベル、戻す担当、点検タイミングを決めることが重要です。使う場所から収納場所が遠い場合は、作業台横にツールワゴンを置く方法もあります。",
  },
  {
    q: "ツールワゴンを選ぶときに注意することはありますか？",
    a: "サイズ、段数、引き出しの有無、最大積載量、キャスター、ストッパー、材質を確認します。通路幅や床面との相性も重要です。耐荷重や仕様は商品ページで最新情報を確認してください。",
  },
  {
    q: "工場の5S活動にも使えますか？",
    a: "はい。工具の定位置管理、見える化、戻しやすい収納づくりは5S活動とも相性が良いです。ただし、用品を導入するだけでなく、運用ルールまで決めることが大切です。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "作業台まわりの工具整理術｜工具を探す時間を減らすツールワゴン・収納用品の選び方",
  description:
    "作業台まわりに工具が散らかる、必要な工具を探す時間が長い、使った工具が戻らない。そんな工場・倉庫・メンテナンス現場向けに、工具整理の考え方、ツールワゴン・パーツケース・工具箱の使い分け、法人導入時のチェックポイントを解説します。",
  image:
    "https://sagyou-navi.com/workbench-tool-organization-hero.jpg",
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

export default function WorkbenchToolOrganizationPage() {
  return (
    <ArticleLayout faq={FAQ} articleJsonLd={articleJsonLd}>
      <Breadcrumb current="作業台まわりの工具整理術" />
      <ArticleHeader
        category="guide"
        readingTime={14}
        title="作業台まわりの工具整理術"
        subtitle="工具を探す時間を減らすツールワゴン・収納用品の選び方"
      />
      <HeroImage
        src="/workbench-tool-organization-hero.jpg"
        alt="作業台まわりの工具整理を見直す工場担当者とツールワゴン"
      />

      <ArticleContent>
        <Lead>
          工場や倉庫、メンテナンス現場では、作業台まわりに工具や部品が集まりやすくなります。最初は「少し置いただけ」のつもりでも、ドライバー、レンチ、測定具、ネジ、端子、手袋、書類などが増えていくと、作業台の上がすぐに散らかってしまいます。
        </Lead>
        <LeadMuted>
          その結果、「必要な工具がすぐ見つからない」「使った人が元に戻さない」「作業者ごとに置き方が違う」「部品と工具が混ざって取り違えそうになる」といった問題が起こりやすくなります。作業台まわりの工具整理で大切なのは、収納用品を増やすことではありません。工具の置き場所を決め、使う場所の近くに配置し、戻しやすい仕組みにすることです。
        </LeadMuted>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          この記事では、作業台まわりの工具整理を進める考え方と、ツールワゴン・パーツケース・工具箱・ツールボックスの使い分けを、工場・倉庫・メンテナンス現場向けにわかりやすく解説します。
        </p>

        <div className="my-8 rounded-lg border-2 border-primary/40 bg-primary-light px-5 py-4 text-base leading-relaxed">
          <p className="font-bold text-foreground">
            Q. 作業台まわりの工具整理は何から始めればいい？
          </p>
          <p className="mt-2 text-foreground">
            <strong>A.</strong>{" "}
            工具を作業台の上に置くのをやめ、使用頻度で「手元」「作業台横」「共有置き場」に分けるのが基本です。
            よく使う工具はツールワゴン、ネジなど小物部品はパーツケース、現場へ持ち出す工具は工具箱に分けると、探す時間や戻し忘れを減らせます。
          </p>
        </div>

        <ConclusionBox>
          <strong>
            結論：作業台まわりの工具整理は「置き場所」より「使う流れ」で決める。
          </strong>
          <p className="mt-3">工具をまず3つに分けます。</p>
          <ul className="mt-2 space-y-1">
            <li>
              ・<strong>よく使う工具</strong> →
              作業台の近くに置き、すぐ取れるように（ツールワゴン、卓上ツールケース）
            </li>
            <li>
              ・<strong>ネジ・端子・小物部品</strong> →
              種類ごとに分け、取り違えを防ぐ（パーツケース、引き出し式ケース）
            </li>
            <li>
              ・<strong>現場へ持ち出す工具</strong> →
              持ち運びやすく、紛失しにくく（工具箱、ツールボックス）
            </li>
          </ul>
          <p className="mt-3">
            作業台の上にすべて置くと作業スペースが狭くなり、探す時間も増えます。固定棚だけでは取りに行く・戻す手間が残ります。その中間として、作業台横に置けて必要に応じて移動できるツールワゴンを使うと、工具整理と作業効率の両方を改善しやすくなります。
          </p>
        </ConclusionBox>

        <div className="my-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          商品の仕様・価格・在庫・型番・寸法・最大積載量・耐荷重・材質・キャスター仕様・納期は変わる場合があるため、各商品ページで最新情報をご確認ください。ツールワゴンの通路設置やキャスター・ストッパーの扱い、積載重量は、現場の安全ルール・社内基準に従ってください。
        </div>

        <ArticleSection>
          <H2>作業台まわりの工具整理でよくある悩み</H2>
          <ConclusionBox>
            散らかる・探す時間が出る・戻らない・人によって置き方が違う、の4つが代表的な悩みです。
          </ConclusionBox>
          <ArticleFigure
            src="/cluttered-workbench-tool-problem.jpg"
            alt="工具や小物部品が散らかった作業台で工具を探す現場担当者"
          />
          <H3>工具が作業台の上に散らかる</H3>
          <Lead>
            作業台が「一時置き場」になり、工具・部品・書類・保護具が混在して作業スペースが狭くなり、効率が落ちます。
          </Lead>
          <H3>必要な工具を探す時間が毎回発生する</H3>
          <Lead>
            工具の住所が決まっていない、似た工具が複数あり取り違えやすい、誰かが持ち出すと所在がわからない——これらが「探すムダ」を生みます。製造ラインでは、工具が定位置にないと探す時間のロスだけでなく、製品への異物混入が疑われる事態にもつながります。
          </Lead>
          <H3>使った工具が元の場所に戻らない</H3>
          <Lead>
            戻す場所が曖昧、作業場所から収納場所が遠い、戻すより作業台に置くほうが楽——という状態だと、工具は戻りません。
          </Lead>
          <H3>作業者ごとに置き方が違う</H3>
          <Lead>
            個人の感覚に任せると、応援者や新人が使いづらくなります。共用工具ほど定位置管理が必要で、5S活動や現場改善のテーマにもなりやすい部分です。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>作業台まわりの工具整理は何から始めればよい？</H2>
          <ConclusionBox>
            使用頻度で分ける → 固定と移動に分ける → 戻しやすさを決める、の順で進めます。
          </ConclusionBox>
          <H3>まずは工具を「使用頻度」で分ける</H3>
          <ArticleTable
            head={["使用頻度", "例", "置き場所"]}
            rows={[
              [
                "毎作業で使う",
                "ドライバー、レンチ、メジャー、カッター",
                "作業台横・手元",
              ],
              [
                "1日に数回使う",
                "測定具、交換部品、補修工具",
                "ツールワゴン・近接棚",
              ],
              ["たまに使う", "専用工具、予備工具", "固定棚・工具箱"],
              [
                "現場へ持ち出す",
                "点検工具、出張作業工具",
                "工具箱・ツールボックス",
              ],
            ]}
          />
          <H3>次に「固定する工具」と「動かす工具」に分ける</H3>
          <Lead>
            固定棚に向くのは使用頻度が低い工具・予備品・重量物。ツールワゴンに向くのは複数の作業台で使う工具・測定具・補修用品。工具箱に向くのは現場持ち出し・車載・点検巡回です。
          </Lead>
          <H3>最後に「戻しやすさ」を決める</H3>
          <Lead>
            ラベルを貼る、引き出しごとに用途を決める、よく使う工具は腰〜胸の高さに置く、小物部品は透明ケース・引き出し式で見える化する、共用工具は置き場所を写真や図で共有する。これらで「戻す」を仕組みにします。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>「3定」と「姿置き」で工具の住所を決める</H2>
          <ConclusionBox>
            整頓の基本は3定（定品・定位置・定量）。さらに姿置き（形跡整頓）を使うと、誰でも一目で戻せて紛失にも気づけます。
          </ConclusionBox>
          <ArticleFigure
            src="/tool-fixed-position-management.jpg"
            alt="工具の定位置を決めて作業台まわりを整理するイメージ"
          />
          <H3>整頓の基本は「3定」</H3>
          <Lead>
            3定とは、定品（そこに置くモノを決める）・定位置（置く場所を決めて表示する）・定量（置く量の上限と下限を決める）の3つです。どこに何がいくつある状態が正常なのかを誰でも分かるようにすると、探すムダ・教えるムダが減ります。
          </Lead>
          <H3>「姿置き（形跡整頓）」で戻し忘れを防ぐ</H3>
          <Lead>
            姿置きは、置き場にあらかじめ工具の形を描いたり型抜きしたりして、使ったものを誰でも迷わず元に戻せるようにする方法です。工具の紛失や、間違った場所に置いたことにすぐ気づける効果があります。ただし形にこだわりすぎると守られなくなるため、高頻度で使う工具を遠い置き場に固定するようなルールは避け、作業性に合わせて決めるのがコツです。
          </Lead>
          <H3>作業台は「作業する場所」、収納場所ではない</H3>
          <Lead>
            作業台の上に収納を増やすと作業面が狭くなります。一時置きと保管場所を分け、作業台の横・下・背面やツールワゴンを活用して、天板を広く保ちます。ラベルは文字だけでなく色分けも有効で、ネジ・端子・小物部品は混在させないのが基本です。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>固定棚・工具箱・ツールワゴンはどう使い分ける？</H2>
          <ConclusionBox>
            固定棚は保管、工具箱は持ち出し、ツールワゴンは「使う場所まで工具を動かせる」のが強みです。
          </ConclusionBox>
          <H3>固定棚は「保管」には強いが、作業中の出し入れには弱い</H3>
          <Lead>
            まとめて保管しやすく重量物や予備品に向きますが、取りに行く時間・戻す手間が発生しやすいのが弱点です。
          </Lead>
          <H3>工具箱は「持ち出し」には強いが、作業台横の整理には工夫が必要</H3>
          <Lead>
            現場移動・車載・点検に向き、ふた付きで紛失防止しやすい一方、中身が重なると探しにくくなるため仕切りや用途分けが必要です。
          </Lead>
          <H3>ツールワゴンは「使う場所まで工具を動かせる」のが強み</H3>
          <Lead>
            作業台横に置け、複数の作業場所を移動でき、引き出し付きなら工具と小物を分けられます。キャスター・ストッパー付きなら移動と固定を両立できます。トレーの組み合わせ（浅型＝小物、深型＝工具）で整理を分けられるタイプもあり、固定棚と工具箱の「中間」を埋める存在です。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>ツールワゴンを選ぶときのポイント</H2>
          <ConclusionBox>
            作業台横に置けるサイズ・段数と深さ・キャスター/ストッパー・引き出し・材質の5点を確認します。
          </ConclusionBox>
          <ArticleFigure
            src="/tool-wagon-next-to-workbench.jpg"
            alt="作業台横にツールワゴンを置いて工具を整理する現場"
          />
          <H3>作業台横に置くならサイズと高さを確認する</H3>
          <Lead>
            作業台の横に置ける幅か、通路をふさがないか、作業台の高さと大きくズレないか、引き出しやトレーが開けやすいかを確認します。
          </Lead>
          <H3>工具の量に合わせて段数・深さを選ぶ</H3>
          <ArticleTable
            head={["収納したいもの", "向いているタイプ"]}
            rows={[
              ["ドライバー、レンチ、小物工具", "浅型トレー、浅引き出し"],
              ["電動工具、補修用品", "深型トレー、深引き出し"],
              ["測定具、部品、消耗品", "引き出し付き、パーツケース併用"],
              ["汚れや水分が気になるもの", "トレータイプ、ステンレスワゴンなど"],
            ]}
          />
          <H3>移動するならキャスター・ストッパーを確認する</H3>
          <Lead>
            床面に合ったキャスターか、ストッパー付きか、段差や溝が多い場所で使わないか、移動中に工具が落ちない構造かを確認します。
          </Lead>
          <H3>工具と部品を一緒に置くなら引き出し付きが便利</H3>
          <Lead>
            ネジ・端子・交換部品を分けられ、使用頻度の高い部品を作業台近くに置け、工具と部品の取り違えを減らせます。
          </Lead>
          <H3>水気・油・衛生面が気になる場所は材質も確認する</H3>
          <Lead>
            一般作業はスチール製、水気や清掃頻度が高い場所はステンレスワゴン、衛生管理が必要な場所は清掃しやすい構造を優先します。
          </Lead>

          <GroupLabel>作業台横・軽量/中量</GroupLabel>
          <ProductGrid items={WAGON_LIGHT} cols={2} slug={SLUG} />

          <GroupLabel>引き出し付き（工具＋部品）</GroupLabel>
          <ProductGrid items={WAGON_DRAWER} cols={2} slug={SLUG} />

          <GroupLabel>ステンレス（水気・衛生）</GroupLabel>
          <ProductGrid items={WAGON_STAINLESS} cols={2} slug={SLUG} />

          <p className="mt-8">
            <a
              href={buildUrl(WAGON_LIST_URL, "list_wagon")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
            >
              ツールワゴン一覧はこちら →
            </a>
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>パーツケースはネジ・小物部品の整理に向いている</H2>
          <ConclusionBox>
            ネジ・端子・消耗品は工具と分け、透明引き出し・見出しカードで見える化すると取り違えと探す時間が減ります。
          </ConclusionBox>
          <ArticleFigure
            src="/parts-case-small-parts-organization.jpg"
            alt="ネジや小物部品をパーツケースで整理する作業台まわり"
          />
          <H3>ネジ・ナット・端子・小物部品は工具と分ける</H3>
          <Lead>
            工具箱にまとめて入れると混在しやすいため、小物は種類・サイズ・用途別に分けます。透明引き出しや見出しカード付きが便利です。
          </Lead>
          <H3>卓上ツールケースは作業台横・棚上に置きやすい</H3>
          <Lead>
            浅型・深型の引き出し構成のものは、作業台まわりの小物工具・部品整理に使いやすく、棚上や作業台横にも置けます。
          </Lead>
          <H3>パーツケースを選ぶときのポイント</H3>
          <ArticleTable
            head={["チェック項目", "見るポイント"]}
            rows={[
              ["引き出し数", "部品点数に対して不足しないか"],
              ["引き出しサイズ", "ネジ・端子・小物工具が入るか"],
              ["透明性", "中身を確認しやすいか"],
              ["見出しカード", "ラベル管理しやすいか"],
              ["設置場所", "卓上、棚、作業台横に置けるか"],
            ]}
          />

          <ProductGrid items={PARTS_CASE_PRODUCTS} cols={2} slug={SLUG} />

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
          <H2>工具箱・ツールボックスは持ち出し工具の整理に向いている</H2>
          <ConclusionBox>
            作業台に置く工具と現場へ持ち出す工具を分けると、持ち出し忘れや紛失を防げます。
          </ConclusionBox>
          <ArticleFigure
            src="/toolbox-field-carry-organization.jpg"
            alt="現場持ち出し用の工具箱に工具を整理するメンテナンス担当者"
          />
          <H3>現場へ持ち出す工具は工具箱にまとめる</H3>
          <Lead>
            車載工具、点検工具、設備メンテナンス工具、出張修理工具、屋外作業工具などをまとめます。
          </Lead>
          <H3>屋外・水気・車載・点検など用途で選ぶ</H3>
          <ArticleTable
            head={["用途", "選び方"]}
            rows={[
              ["屋外・水気がある", "防水性・密閉性を確認"],
              ["軽く持ち運びたい", "アルミケース・樹脂ケース"],
              ["衝撃が気になる", "ハードボックス"],
              ["小物も一緒に持ちたい", "仕切り・パーツケース付き"],
            ]}
          />
          <H3>作業台横の工具と持ち出し工具を分けると管理しやすい</H3>
          <Lead>
            作業台まわりに置く工具（ツールワゴン）と、現場へ持ち出す工具（工具箱）を分けると、どちらも探しやすく、持ち出し忘れも減ります。
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
          <H2>工場・倉庫・メンテナンス現場別の工具整理例</H2>
          <ConclusionBox>
            組立・加工、倉庫・出荷、設備保全、施設管理で、置く工具と収納用品の組み合わせは変わります。
          </ConclusionBox>
          <H3>工場の組立・加工エリア</H3>
          <Lead>
            よく使う工具を作業台横のワゴンへ、測定具は専用段に分け、ネジや治具はパーツケースへ、共用工具は定位置を決めます。
          </Lead>
          <H3>倉庫・出荷場</H3>
          <Lead>
            梱包工具・カッター・メジャー・テープ類を近くに置き、替刃や小物はパーツケースへ。通路をふさがない幅のワゴンを選びます。
          </Lead>
          <H3>設備メンテナンス・保全</H3>
          <Lead>
            巡回工具は工具箱へ、作業場で使う工具はツールワゴンへ、交換部品はパーツケースで分類し、点検後に戻す場所を決めます。
          </Lead>
          <H3>店舗バックヤード・施設管理</H3>
          <Lead>
            少量工具は工具箱、消耗品はパーツケース、複数場所で使うなら小型ワゴン、誰でも戻せるラベル管理を徹底します。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>工具を探す時間を減らすためのチェックリスト</H2>
          <ConclusionBox>
            作業台の上・使用頻度・定位置・共有・小物分離・通路・キャスター・棚卸しを点検します。
          </ConclusionBox>
          <ArticleFigure
            src="/workbench-tool-organization-checklist.jpg"
            alt="作業台まわりの工具整理チェックリストを確認する購買担当者"
          />
          <ul className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true">[ ]</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ArticleTable
            head={["収納用品", "得意なこと", "苦手なこと", "向いている現場"]}
            rows={[
              [
                "固定棚",
                "まとめて保管しやすい",
                "作業場所まで取りに行く手間がある",
                "予備工具、使用頻度が低い工具",
              ],
              [
                "工具箱",
                "持ち出しやすい",
                "中身が重なると探しにくい",
                "点検、出張、車載、屋外作業",
              ],
              [
                "パーツケース",
                "小物を分類しやすい",
                "大型工具には不向き",
                "ネジ、端子、消耗品、補修部品",
              ],
              [
                "ツールワゴン",
                "作業台横に置けて移動できる",
                "通路幅・キャスター確認が必要",
                "工場、倉庫、メンテナンス、組立",
              ],
              [
                "卓上ツールケース",
                "小物工具を手元管理しやすい",
                "作業台上のスペースを使う",
                "小型工具、測定具、部品管理",
              ],
            ]}
          />
        </ArticleSection>

        <FaqSection faq={FAQ} />

        <ArticleSection>
          <H2>まとめ</H2>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
            <li>
              ・作業台まわりの工具整理は、収納用品を増やすだけでなく、工具の使う流れを整理することが大切
            </li>
            <li>
              ・よく使う工具は作業台横、ネジ・小物はパーツケース、持ち出し工具は工具箱に分ける
            </li>
            <li>
              ・整頓の基本は3定（定品・定位置・定量）、戻し忘れ防止には姿置きが有効
            </li>
            <li>
              ・固定棚だけでは取りに行く手間が残るため、使う場所まで動かせるツールワゴンが有効
            </li>
            <li>
              ・法人現場では、ラベル・定位置・補充ルール・戻すルールまで決めると運用しやすい
            </li>
            <li>
              ・商品の仕様・価格・在庫・耐荷重は必ず商品ページで最新情報を確認する
            </li>
          </ul>
        </ArticleSection>

        <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
          <h2 className="text-2xl font-black text-white">
            ツールワゴン・パーツケース・工具箱をまとめて確認する
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={buildUrl(WAGON_LIST_URL, "footer_wagon")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover"
            >
              ツールワゴン一覧
            </a>
            <a
              href={buildUrl(PARTS_LIST_URL, "footer_parts")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
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
