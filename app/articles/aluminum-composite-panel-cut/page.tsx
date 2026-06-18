import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
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

const SLUG = "aluminum-composite-panel-cut";

const gcImageUrl = (id: string) => `/products/${id}.jpg`; // 外部URL禁止

const buildUrl = (base: string, utmContent: string) => {
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=sagyou_navi&utm_medium=referral&utm_campaign=2026_alumi_panel&utm_content=${utmContent}`;
};

const CUT_SERVICE_URL = buildUrl(
  "https://www.trade-sign.com/main/platecut/index.html",
  "cut_service"
);

const ALUMI_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5a2a5eba5.html?view=grid";
const TRUSCO_LIST_URL =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html";

const CUT_SAMPLES = [
  "0001",
  "0002",
  "0003",
  "0004",
  "0005",
  "0006",
  "0007",
  "0008",
];

export const metadata: Metadata = {
  title:
    "アルミ複合板のカット販売とは？指定寸法・角R・穴あけ加工を依頼する前のチェックポイント｜作業用品ナビ",
  description:
    "アルミ複合板を指定寸法でカット販売してほしい方向けに、依頼前に決めるべきサイズ・厚み・色・角R・穴あけ位置・取付方法・枚数・屋内外用途・図面データの有無を解説。看板板材やプレート看板用のアルミ複合板を失敗なく注文するためのチェックリスト付き。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "アルミ複合板のカット販売とは？指定寸法・角R・穴あけ加工を依頼する前のチェックポイント",
    description:
      "アルミ複合板を指定寸法でカット販売してほしい方向けに、依頼前に決めるべきサイズ・厚み・色・角R・穴あけ位置・取付方法・枚数・屋内外用途・図面データの有無を解説。",
    type: "article",
    images: ["/images/articles/aluminum-composite-panel-cut-hero.jpg"],
  },
};

const whiteProducts = [
  {
    id: "059182",
    name: "アルミ複合板 白 3mm 3×6(910×1820) 10枚 カラーエース SC001GS ホワイトツヤ有",
  },
  {
    id: "059181",
    name: "アルミ複合板 白 3mm 3×6(910×1820) バラ売り カラーエース SC001GS ホワイトツヤ有",
  },
  {
    id: "059188",
    name: "アルミ複合板 白 3mm 4×8(1220×2440) 5枚 カラーエース SC001GS ホワイトツヤ有",
  },
  {
    id: "059187",
    name: "アルミ複合板 白 3mm 4×8(1220×2440) バラ売り カラーエース SC001GS ホワイトツヤ有",
  },
];

const colorProducts = [
  {
    id: "059378",
    name: "アルミ複合板 黒 3mm 3×6(910×1820) バラ売り カラーエース C237FF 両面マットブラック",
  },
  {
    id: "059380",
    name: "アルミ複合板 黒 3mm 1×2(1000×2000) バラ売り カラーエース C237FF 両面マットブラック",
  },
  {
    id: "037307",
    name: "アルミ複合板 アルリーダー Yステン 3mm 810×1620 10枚 両面塗装",
  },
  {
    id: "037962",
    name: "アルミ複合板 ハイエースバン ピュアシルバー 3mm 4×8(1220×2440) 5枚 HA-013 両面塗装",
  },
];

const brandProducts = [
  {
    id: "037301",
    name: "アルミ複合板 アルリーダー ホワイト 3mm 4×8(1220×2440) 5枚 両面塗装",
  },
  {
    id: "038002",
    name: "アルミ複合板 アートパネル 不燃 白 3mm 1×2(1000×2000) 2枚 FR-302AK 艶有/艶無",
  },
];

const RELATED: RelatedArticle[] = [
  {
    href: "/articles/parts-case-selection",
    label:
      "パーツケースの選び方｜小物・ネジの整理に効く仕切り・引き出し・連結タイプの使い分け",
  },
  {
    href: "/articles/workbench-tool-organization",
    label:
      "作業台まわりの工具整理術｜工具を探す時間を減らすツールワゴン・収納用品の選び方",
  },
  {
    href: "/articles/toolbag-backpack-selection",
    label:
      "ツールバッグとバックパックどっちが良い？工具の持ち運びを軽くする選び方",
  },
  {
    href: "/articles/ladder-stepladder-difference",
    label:
      "はしごと脚立の違いとは？JIS・SG規格と「天板に乗ってはいけない」理由",
  },
];

const FAQ = [
  {
    q: "アルミ複合板のカット販売とは何ですか？",
    a: "規格サイズの板材を希望寸法にカットして購入できるサービスです。必要に応じて、穴あけ、角R、形状カットなども依頼できる場合があります。",
  },
  {
    q: "アルミ複合板は指定寸法でカットできますか？",
    a: "対応範囲は販売店や加工内容によって異なりますが、指定寸法でのカットに対応しているサービスがあります。依頼時は幅・高さ・枚数をmm単位で整理して伝えるとスムーズです。",
  },
  {
    q: "穴あけ加工は依頼できますか？",
    a: "穴あけ加工に対応しているサービスもあります。四隅穴あけだけでなく指定位置への穴あけが可能な場合もあるため、穴径・位置・取付方法を事前に確認しましょう。",
  },
  {
    q: "角R加工は必要ですか？",
    a: "必須ではありませんが、人が触れる場所、通路沿い、店舗・施設表示、駐車場看板などでは検討するとよいです。見た目がやわらかくなり、プレート看板らしい仕上がりにもなります。",
  },
  {
    q: "アルミ複合板の厚みは何mmがよく使われますか？",
    a: "看板用途では3mm厚がよく使われます。用途・設置場所・強度・取付方法によって適した厚みは変わるため、商品ページや加工業者に確認してください。",
  },
  {
    q: "自分でアルミ複合板をカットできますか？",
    a: "カット自体は可能な場合もありますが、大判サイズ・複数枚・寸法精度が必要な場合は手間がかかります。切断面の仕上がり、安全面、作業時間を考えると、カット済みで依頼したほうがよいケースもあります。",
  },
  {
    q: "ルーターカットはどんなときに必要ですか？",
    a: "円形、文字形状、くり抜き、等身大パネル、複雑な形状など、直線カットでは対応しにくい場合に検討します。IllustratorやCADデータが必要になる場合もあります。",
  },
  {
    q: "図面がなくても依頼できますか？",
    a: "簡単な四角形カットであれば、幅・高さ・枚数を伝えるだけで相談できる場合があります。ただし、穴あけ位置や複雑な形状がある場合は、手書きでもよいので寸法図を用意すると伝わりやすくなります。",
  },
];

const TEN_ITEMS = [
  {
    title: "必要なサイズを決める",
    body: "幅×高さ、仕上がり寸法、単位はmmで統一。複数サイズは一覧表にまとめます。",
  },
  {
    title: "厚みを決める",
    body: "看板用途では3mmがよく使われる。強度・取付方法、既存枠にはめる場合は厚みの許容差も確認。",
  },
  {
    title: "色・表面材を決める",
    body: "白＝看板下地・印刷・シート貼り、黒＝内装・装飾、シルバー/ステン調＝意匠性、不燃タイプ＝内装制限や施設用途で確認。",
  },
  {
    title: "屋内用か屋外用かを決める",
    body: "屋外看板・屋内案内板・仮設表示・工場表示・駐車場看板・内装パネルで条件が変わる。",
  },
  {
    title: "角R加工の有無を決める",
    body: "人が触れる場所、通路沿い、駐車場・フェンス、施設案内、子どもや来客が近づく場所では検討。",
  },
  {
    title: "穴あけ位置を決める",
    body: "四隅穴あけ／指定位置穴あけ、穴径、端からの距離、取付金具との干渉。",
  },
  {
    title: "取付方法を決める",
    body: "ビス止め、結束バンド、フェンス固定、両面テープ、スタンド・枠はめ込み、壁面取付。",
  },
  {
    title: "枚数を決める",
    body: "1枚／複数サイズ／同サイズ大量／現場ごとに違うサイズ。",
  },
  {
    title: "直線カットかルーターカットかを決める",
    body: "四角形は直線カット、円形・くり抜き・文字・等身大パネルはルーター・形状カット。",
  },
  {
    title: "図面・データの有無を確認する",
    body: "手書き寸法図、PDF、Illustrator、CAD/DXF、穴位置図、仕上がりイメージ。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "アルミ複合板のカット販売とは？指定寸法・角R・穴あけ加工を依頼する前のチェックポイント",
  description:
    "アルミ複合板を指定寸法でカット販売してほしい方向けに、依頼前に決めるべきサイズ・厚み・色・角R・穴あけ位置・取付方法・枚数・屋内外用途・図面データの有無を解説。",
  image:
    "https://sagyou-navi.com/images/articles/aluminum-composite-panel-cut-hero.jpg",
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

export default function AluminumCompositePanelCutPage() {
  return (
    <ArticleLayout faq={FAQ} articleJsonLd={articleJsonLd}>
      <Breadcrumb current="アルミ複合板のカット販売" />
      <ArticleHeader
        category="guide"
        readingTime={14}
        title="アルミ複合板のカット販売"
        subtitle="指定寸法・角R・穴あけ加工を依頼する前のチェックポイント"
      />
      <HeroImage
        src="/images/articles/aluminum-composite-panel-cut-hero.jpg"
        alt="アルミ複合板のカット販売を依頼する前に寸法を確認する担当者"
      />

      <ArticleContent>
        <Lead>
          アルミ複合板は、看板、プレート、案内板、工場表示、駐車場看板、施設サイン、内装パネルなどに使われることが多い板材です。軽量で扱いやすく、切断や穴あけなどの加工もしやすいため、看板用の板材としてよく選ばれます。
        </Lead>
        <LeadMuted>
          一方で、実際に注文しようとすると、「何mmで指定すればいいのか」「角Rは付けたほうがいいのか」「穴あけ位置はどう伝えればいいのか」「屋外看板に使うならどの板を選べばいいのか」「図面やデータが必要なのか」と迷うことも少なくありません。
        </LeadMuted>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          アルミ複合板のカット販売を依頼する場合は、単に「このサイズで切ってください」と伝えるだけでなく、取付方法や使用場所まで決めておくことが大切です。この記事では、アルミ複合板のカット販売で依頼できる内容、指定寸法・角R・穴あけ加工の考え方、注文前に確認すべきチェックポイントをわかりやすく解説します。
        </p>

        <div className="my-8 rounded-lg border-2 border-primary/40 bg-primary-light px-5 py-4 text-base leading-relaxed">
          <p className="font-bold text-foreground">
            Q. アルミ複合板のカット販売とは？依頼前に何を決めればいい？
          </p>
          <p className="mt-2 text-foreground">
            <strong>A.</strong>{" "}
            規格サイズの板を希望寸法にカットし、必要に応じて角R加工や穴あけ加工まで依頼できるサービスです。
            依頼前にサイズ・厚み・色・角R・穴あけ位置・取付方法・枚数・屋内外用途・図面データの有無を決めておくと、見積もりや製作がスムーズになります。
          </p>
        </div>

        <div className="my-8 rounded-lg border-l-4 border-blue-500 bg-blue-50 px-5 py-4 text-base leading-relaxed text-foreground">
          <strong>
            結論：アルミ複合板のカット販売は「サイズ」だけでなく「取付方法」まで決めて依頼する。
          </strong>
          <p className="mt-3">
            依頼前に最低限これを確認するとスムーズです。
          </p>
          <ArticleTable
            head={["確認項目", "決める内容"]}
            rows={[
              ["サイズ", "幅×高さ、単位、仕上がり寸法"],
              ["厚み", "3mmを基本に、用途や強度で検討"],
              ["色・表面材", "白、黒、シルバー、不燃、ツヤ有無など"],
              ["角R", "角を丸めるか、R寸法は必要か"],
              ["穴あけ", "穴の数、径、端からの位置"],
              ["取付方法", "ビス止め、フェンス固定、両面テープ、スタンドなど"],
              ["枚数", "1枚、複数枚、大量枚数"],
              ["使用場所", "屋内、屋外、仮設、長期掲示"],
              ["加工方法", "直線カットか、ルーターカット・形状カットか"],
              ["図面・データ", "手書き寸法図、Illustrator、CADデータなど"],
            ]}
          />
          <p className="mt-4 text-muted-foreground">
            サイズだけ決めて注文すると、あとから「穴あけが必要だった」「角を丸めておけばよかった」「取付位置と穴位置が合わない」といった手戻りが起きやすくなります。看板やプレートとして使う場合は、設置場所・取付方法・見た目・安全性まで考えて依頼するのがおすすめです。
          </p>
        </div>

        <div className="my-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          価格・在庫・加工可否・納期・サイズ・仕様は変わる場合があるため、必ず最新の商品ページ・カット販売ページでご確認ください。不燃材・屋外使用・建築用途・安全性に関わる内容は商品仕様と用途条件をご確認ください。穴位置や角R寸法は取付方法・使用環境で変わるため、迷う場合は事前にご相談ください。
        </div>

        <ArticleSection>
          <H2>アルミ複合板のカット販売とは？</H2>
          <ConclusionBox>
            規格サイズの板を希望寸法にカットし、穴あけ・角R・形状カットまで依頼できるサービスです。
          </ConclusionBox>
          <H3>規格サイズのアルミ複合板を希望寸法にカットするサービス</H3>
          <Lead>
            3×6（910×1820mm）、4×8（1220×2440mm）などの規格板を希望サイズへカットします。看板・プレート・案内板・内装パネルなどで使われ、「板材だけ欲しい」場合と「看板として完成させたい」場合で依頼内容が変わります。
          </Lead>
          <H3>指定寸法カット・穴あけ・角R加工まで依頼できる場合がある</H3>
          <Lead>
            指定寸法カット、四隅穴あけ、指定位置の穴あけ、角R加工、両面テープ貼り、形状カット・型抜き・くり抜きなどに対応できる場合があります。直線カットはパネルソー、円形・文字・等身大パネルなどの異形はルーター加工機、と設備を使い分けるのが一般的です。
          </Lead>
          <H3>自分でカットする場合との違い</H3>
          <Lead>
            少量・簡易用途なら市販のカッターでも切れますが、刃をまっすぐ通すのが難しく、切断面にバリ（ささくれ）が出てヤスリがけが必要になり、曲線や複雑形状には向きません。大判サイズ・複数枚・寸法精度が必要な場合は、カット済み納品にすると切断面の仕上がりや安全面、現場作業時間の面で有利です。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>アルミ複合板のカット販売を依頼する前に決める10項目</H2>
          <ConclusionBox>
            サイズ・厚み・色・屋内外・角R・穴あけ・取付方法・枚数・加工方法・図面の10項目を先に決めます。
          </ConclusionBox>
          <ol className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            {TEN_ITEMS.map((item, i) => (
              <li key={item.title}>
                <strong className="text-foreground">
                  {i + 1}. {item.title}
                </strong>
                ：{item.body}
              </li>
            ))}
          </ol>
        </ArticleSection>

        <ArticleSection>
          <H2>指定寸法カットで失敗しないサイズ指定の考え方</H2>
          <ConclusionBox>
            幅・高さ・枚数を表でまとめ、外寸で指定し、大判・複数枚はカット済み納品が便利です。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/aluminum-panel-custom-size-check.jpg"
            alt="アルミ複合板の指定寸法カット用に幅と高さを確認する様子"
          />
          <H3>幅・高さ・枚数を表でまとめる</H3>
          <ArticleTable
            head={["No.", "幅", "高さ", "枚数", "用途"]}
            rows={[
              ["1", "600mm", "450mm", "2枚", "駐車場案内"],
              ["2", "900mm", "600mm", "1枚", "店舗入口サイン"],
              ["3", "300mm", "100mm", "10枚", "棚表示"],
            ]}
          />
          <H3>仕上がり寸法なのか、材料寸法なのかを明確にする</H3>
          <Lead>
            「外寸」で指定し、枠にはめる場合は実測して取付スペースに余裕を持たせます。既存看板の差し替えは現物寸法を確認します。
          </Lead>
          <H3>大判サイズや複数枚はカット済み納品が便利</H3>
          <Lead>
            現場で測って切る手間を減らせ、同じサイズを複数枚そろえやすく、現場の作業時間短縮につながります。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>角R加工はどんなときに必要？</H2>
          <ConclusionBox>
            人が触れる場所・通路沿い・店舗/施設表示では、見た目と安全面から角Rを検討します。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/aluminum-panel-corner-radius-sample.jpg"
            alt="アルミ複合板の角R加工サンプルを確認するイメージ"
          />
          <H3>角Rとは、板の角を丸くする加工</H3>
          <Lead>
            直角の角を丸め、見た目をやわらかくし、角当たりの印象を軽減します。プレート看板らしい仕上がりになります（R寸法は0.5〜5cm程度など指定できる場合があります）。
          </Lead>
          <H3>人が触れる場所・通路沿いでは検討しやすい</H3>
          <Lead>
            施設内表示、店舗入口、駐車場看板、学校・公共施設、工場通路、イベント会場など。
          </Lead>
          <H3>角Rの有無で見た目も変わる</H3>
          <ArticleTable
            head={["仕様", "印象", "向いている用途"]}
            rows={[
              ["角Rなし", "シャープ、コストを抑えやすい", "仮設表示、内装パネル、短期掲示"],
              ["角Rあり", "やわらかい、看板らしい仕上がり", "施設案内、駐車場看板、店舗サイン"],
            ]}
          />
        </ArticleSection>

        <ArticleSection>
          <H2>穴あけ加工を依頼するときのチェックポイント</H2>
          <ConclusionBox>
            四隅か指定位置か、穴径と端からの距離、穴位置図の用意がポイントです。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/aluminum-panel-hole-drilling-position.jpg"
            alt="アルミ複合板の穴あけ位置を確認する看板製作スタッフ"
          />
          <H3>四隅穴あけか、指定位置穴あけかを決める</H3>
          <Lead>
            フェンスへくくりつける不動産看板や駐車場看板などでは四隅穴あけが使いやすく、既存の柱や壁に合わせるなら指定位置穴あけになります。取付金具との位置合わせが重要です。
          </Lead>
          <H3>穴径と端からの距離を伝える</H3>
          <Lead>
            穴径（例：4mm・5mm・6mmなど。Φ＝直径の意味）、端から何mmか、上下左右の基準を明確に。取付ビスや結束バンドに合う穴径かを確認します。
          </Lead>
          <H3>穴位置図があると伝わりやすい</H3>
          <Lead>
            手書きでもよいので「上から○mm、左から○mm」と図にします。複数枚で共通か個別か、表裏・向きも確認します。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>直線カットとルーターカット・形状カットの違い</H2>
          <ConclusionBox>
            四角形は直線カット、円形・くり抜き・文字・等身大パネルはルーターカットで、データ支給が必要な場合があります。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/aluminum-panel-straight-cut-router-cut.jpg"
            alt="アルミ複合板の直線カットとルーターカットの違いを比較するイメージ"
          />
          <H3>四角形なら指定寸法カットで対応しやすい</H3>
          <Lead>
            長方形・正方形・同サイズ複数枚・看板下地・プレート板は直線カット（パネルソー）で短時間に対応できます。
          </Lead>
          <H3>円形・くり抜き・文字形状はルーターカットを検討</H3>
          <Lead>
            丸形サイン、顔出しパネル、等身大パネル、文字形状、切り欠き・くり抜きなどはルーター加工機で精密に仕上げます。
          </Lead>
          <H3>データ支給が必要な場合は事前に確認する</H3>
          <Lead>
            複雑形状はIllustratorやCAD/DXFのカットラインデータが必要になる場合があります。鋭角は機材上カットできない、角Rもカットライン作成が必要、など条件があるため事前に相談すると安心です。
          </Lead>
        </ArticleSection>

        <ArticleSection>
          <H2>用途別に見るアルミ複合板の選び方</H2>
          <ConclusionBox>
            看板・駐車場/不動産・工場/施設・内装・車両/建材で、向いている色や加工が変わります。
          </ConclusionBox>
          <H3>看板・プレート用途</H3>
          <Lead>
            白3mmが使いやすく、シート貼り・印刷の下地に向きます。屋外掲示なら取付方法も確認します。
          </Lead>
          <H3>駐車場・不動産看板</H3>
          <Lead>
            四隅穴あけを検討。フェンス固定なら結束バンドの通しやすさを確認し、角Rで見た目と安全面に配慮します。
          </Lead>
          <H3>工場・施設表示</H3>
          <Lead>
            サイズを統一すると管理しやすく、複数枚は一覧表で依頼。表示内容が変わる場合は差し替え方法も確認します。
          </Lead>
          <H3>内装・装飾用途</H3>
          <Lead>
            黒・シルバー・ステン調なども候補。ツヤ有無を確認し、不燃タイプが必要かを確認します。
          </Lead>
          <H3>車両・リフォーム・建材用途</H3>
          <Lead>
            寸法精度が重要。既存枠や取付スペースを実測し、図面支給があるとスムーズです。
          </Lead>

          <GroupLabel>白3mm（看板下地・表示板）</GroupLabel>
          <ProductGrid items={whiteProducts} cols={2} slug={SLUG} />

          <GroupLabel>黒・シルバー系（内装・装飾・意匠）</GroupLabel>
          <ProductGrid items={colorProducts} cols={2} slug={SLUG} />

          <GroupLabel>不燃・ブランド品（用途条件を確認して選ぶ）</GroupLabel>
          <ProductGrid items={brandProducts} cols={2} slug={SLUG} />

          <p className="mt-8">
            <a
              href={buildUrl(ALUMI_LIST_URL, "list_alumi")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
            >
              アルミ複合板一覧はこちら →
            </a>
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>指定寸法・角R・穴あけまで依頼したいなら「カット販売」へ</H2>
          <ConclusionBox>
            板を買って自分で切るのが大変なら、希望寸法にカットした状態で届くカット販売が便利です。
          </ConclusionBox>
          <Lead>
            「板を買ってから自分で切る」のではなく、指定寸法でカットした状態で納品してほしい場合は、アルミ複合板のカット販売がおすすめです。サインシティ（運営：株式会社トレード）では、希望サイズへのカットに加え、穴あけ、角R、両面テープ貼り、大量カット、円形・文字・等身大パネルなどの形状カットまで相談できます。1枚から大量枚数まで対応し、直線カットはパネルソー、異形はルーター加工機で精密に仕上げます。
          </Lead>
          <LeadMuted>
            複雑な形状・くり抜き・等身大パネルなどは、図面やデータ（手書き寸法図でも可）を用意しておくと見積もりがスムーズです。
          </LeadMuted>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {CUT_SAMPLES.map((n) => (
              <figure
                key={n}
                className="relative aspect-square overflow-hidden rounded-xl bg-primary-light"
              >
                <Image
                  src={`/products/alumiplate-cut${n}.png`}
                  alt="アルミ複合板の指定寸法カット・穴あけ・角R加工の事例"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </figure>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border-2 border-primary bg-primary-light p-6 md:p-8">
            <p className="text-xl font-black text-foreground">
              アルミ複合板カット販売も行っています！
            </p>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              指定寸法カット・角R・穴あけ・形状カットなどの加工もご相談ください。
            </p>
            <a
              href={CUT_SERVICE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
            >
              アルミ複合板カット販売ページへ
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </ArticleSection>

        <ArticleSection>
          <H2>アルミ複合板のカット依頼前チェックリスト</H2>
          <ConclusionBox>
            見積もり前に、サイズから納期まで一覧で押さえると手戻りを防げます。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/aluminum-panel-cut-order-checklist.jpg"
            alt="アルミ複合板カット販売の依頼前チェックリストを確認する担当者"
          />
          <ArticleTable
            head={["確認項目", "決めること", "メモ"]}
            rows={[
              ["サイズ", "幅×高さ、仕上がり寸法", "mm単位で記載"],
              ["厚み", "3mm、その他厚み", "用途・取付方法で確認"],
              ["色", "白、黒、シルバー、不燃など", "表面のツヤ有無も確認"],
              ["使用場所", "屋内・屋外", "雨風・日差しの有無"],
              ["用途", "看板、表示板、内装、建材", "使用目的を伝える"],
              ["角R", "あり・なし、R寸法", "人が触れる場所は検討"],
              ["穴あけ", "穴数、穴径、位置", "端からの距離を指定"],
              ["取付方法", "ビス、結束バンド、両面テープ等", "穴位置と連動"],
              ["枚数", "1枚、複数枚、大量", "サイズ違いも整理"],
              ["加工方法", "直線カット、ルーターカット", "複雑形状は要相談"],
              ["図面・データ", "手書き、PDF、AI、DXF", "穴位置図があると良い"],
              ["納期", "希望納期", "大量・特殊加工は早めに相談"],
            ]}
          />
          <H3>加工内容別の向いている用途</H3>
          <ArticleTable
            head={["加工内容", "向いている用途"]}
            rows={[
              ["指定寸法カット", "看板下地、表示板、内装パネル"],
              ["角R加工", "店舗サイン、施設表示、通路沿いの看板"],
              ["四隅穴あけ", "フェンス固定、駐車場看板、不動産看板"],
              ["指定位置穴あけ", "既存壁面、柱、金具に合わせる場合"],
              ["両面テープ貼り", "室内表示、平滑面への貼り付け"],
              ["ルーターカット", "円形、文字、くり抜き、等身大パネル"],
              ["大量カット", "工場表示、管理プレート、複数現場分"],
            ]}
          />
        </ArticleSection>

        <FaqSection faq={FAQ} />

        <ArticleSection>
          <H2>まとめ</H2>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
            <li>
              ・アルミ複合板のカット販売は、規格サイズの板材を希望寸法にカットして購入できるサービス
            </li>
            <li>
              ・依頼前には、サイズ・厚み・色・使用場所・角R・穴あけ・取付方法・枚数・図面の有無を確認する
            </li>
            <li>
              ・看板や表示板では、取付方法を決めてから穴あけ位置を指定すると失敗しにくい
            </li>
            <li>
              ・人が触れる場所や通路沿いでは角R加工も検討しやすい
            </li>
            <li>
              ・複雑な形状やくり抜きはルーターカット・形状カットの相談が必要
            </li>
            <li>
              ・価格・在庫・加工可否・納期・対応範囲は必ず最新ページで確認する
            </li>
          </ul>
        </ArticleSection>

        <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
          <h2 className="text-2xl font-black text-white">
            アルミ複合板を選ぶ・カット販売を相談する
          </h2>
          <p className="mt-3 text-footer-muted">
            そのまま使える規格板が必要なら商品一覧から、指定寸法・加工込みで欲しいならカット販売ページからご相談ください。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={buildUrl(ALUMI_LIST_URL, "footer_alumi")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover"
            >
              アルミ複合板一覧（Yahoo!）
            </a>
            <a
              href={CUT_SERVICE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
            >
              アルミ複合板カット販売
              <ExternalLink className="h-4 w-4" aria-hidden />
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

        <Disclaimer extra="価格・在庫・加工可否・納期・サイズ・仕様は変わる場合があるため、必ず最新の商品ページ・カット販売ページでご確認ください。" />
      </ArticleContent>
    </ArticleLayout>
  );
}
