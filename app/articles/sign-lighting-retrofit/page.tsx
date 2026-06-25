import type { Metadata } from "next";
import type { ReactNode } from "react";
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
  LeadMuted,
  ArticleTable,
  ArticleFigure,
  ProductGrid,
  FaqSection,
  RelatedArticles,
  Disclaimer,
  type RelatedArticle,
} from "@/components/article";

const SLUG = "sign-lighting-retrofit";

function buildUrlWithHash(base: string, utmContent: string): string {
  const [path, hash] = base.split("#");
  const sep = path.includes("?") ? "&" : "?";
  const utm =
    `utm_source=sagyou_navi&utm_medium=referral` +
    `&utm_campaign=2026_sagyou&utm_content=${utmContent}`;
  return `${path}${sep}${utm}${hash ? `#${hash}` : ""}`;
}

const CATEGORY = {
  signLight:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E7%9C%8B%E6%9D%BF%E7%85%A7%E6%98%8E#CentSrchFilter1",
  ledFloodlight:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E6%8A%95%E5%85%89%E5%99%A8&view=grid",
} as const;

const SELF_EC_BANNERS = [
  {
    url: "https://www.trade-sign.com/main/viewtron/index.html",
    file: "bnr_viewtron.png",
    label: "屋外サイン用アームスポット ビュートロン一覧へ",
  },
  {
    url: "https://www.trade-sign.com/main/adview/index.html",
    file: "bnr061.jpg",
    label: "LED電装ユニット アドビュー一覧へ",
  },
  {
    url: "https://www.trade-sign.com/main/pollux/index.html",
    file: "bnr131.jpg",
    label: "LED外照灯ポラックス一覧へ",
  },
] as const;

const categoryHref = (url: string, suffix: string) =>
  buildUrlWithHash(url, `${SLUG}_${suffix}`);
const selfEcHref = (url: string) => buildUrlWithHash(url, `${SLUG}_tradesign`);

export const metadata: Metadata = {
  title:
    "看板照明を後付けしたいときの選び方｜屋外用LEDライト・投光器の注意点｜作業用品ナビ",
  description:
    "看板照明を後付けしたい方向けに、屋外用LEDライト・LED投光器・外照式看板灯の選び方を解説。看板サイズ、明るさ、色温度、広角・狭角、出幅、防水性能、設置場所、越境リスク、ビューフラッド・ビュートロン・アドビュー・ポラックスの使い分けまで紹介します。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "看板照明を後付けしたいときの選び方｜屋外用LEDライト・投光器の注意点",
    description:
      "既存看板を夜でも見やすくする外照式LED照明の選び方。サイズ・配光・色温度・出幅・防水まで解説します。",
    type: "article",
    images: ["/images/articles/sign-lighting-retrofit-hero.jpg"],
  },
};

const VIEW_FLOOD = [
  {
    id: "051109",
    name: "看板照明 外照式 ビューフラッド VF80 広角 ホワイト 5000K VF80-W",
    note: "中型看板（H約3〜4.5m）向け・広角105°",
  },
  {
    id: "051108",
    name: "看板照明 外照式 ビューフラッド VF80 広角 ブラック 5000K VF80-B",
    note: "中型看板向け・本体ブラック",
  },
  {
    id: "066740",
    name: "看板照明 外照式 ビューフラッド VF40 狭角 ホワイト 5000K VF40NR-W",
    note: "小型看板（H約2〜3.5m）向け・狭角30°",
  },
  {
    id: "066741",
    name: "看板照明 外照式 ビューフラッド VF40 狭角 ブラック 5000K VF40NR-B",
    note: "小型看板向け・本体ブラック",
  },
  {
    id: "066747",
    name: "看板照明 外照式 ビューフラッド VF120 狭角 ブラック 5000K VF120NR-B",
    note: "大型看板（H約4〜5.5m）向け・狭角30°",
  },
  {
    id: "066744",
    name: "看板照明 外照式 ビューフラッド VF120 広角 ホワイト 5000K VF120-W",
    note: "大型看板向け・広角105°",
  },
];

const VIEWTRON = [
  {
    id: "051041",
    name: "看板照明 ビュートロン VT20 Lアーム 昼光色6000K 広角 ホワイト VT20-120C-L",
    note: "一体型アームスポット・Lアーム・昼光色・広角",
  },
  {
    id: "051042",
    name: "看板照明 ビュートロン VT20 Lアーム 昼光色6000K 広角 ブラック VT20-120C-L/BK",
    note: "Lアーム・昼光色・広角・本体ブラック",
  },
  {
    id: "051058",
    name: "看板照明 ビュートロン VT20 SSアーム 電球色2700K 狭角 ホワイト VT20-40W-SS",
    note: "SSアーム・電球色・狭角・あたたかい光色",
  },
  {
    id: "051056",
    name: "看板照明 ビュートロン VT20 SSアーム 電球色2700K 広角 ブラック VT20-120W-SS/BK",
    note: "SSアーム・電球色・広角・本体ブラック",
  },
];

const FAQ = [
  {
    q: "看板照明は後付けできますか？",
    a: "既存看板の構造、取付下地、電源、設置高さなどの条件が合えば、外照式LEDライトを後付けできる場合があります。ただし、高所作業や電気工事が必要な場合は専門業者への相談がおすすめです。",
  },
  {
    q: "看板照明はLED投光器でも代用できますか？",
    a: "一部の用途では使える場合もありますが、看板面をきれいに照らすには、配光角度・色温度・照射距離・本体の見た目まで考える必要があります。店舗看板やファサード看板では、看板照明用LEDライトを検討すると失敗しにくくなります。",
  },
  {
    q: "看板照明は広角と狭角のどちらを選べばよいですか？",
    a: "看板面を広く照らしたい場合は広角、縦長の看板や離れた位置からしっかり照らしたい場合は狭角が候補になります。看板サイズや設置距離に合わせて選びましょう。",
  },
  {
    q: "アームライトの出幅が気になる場合はどうすればよいですか？",
    a: "出幅を抑えたい場合は、アドビューやポラックスのような薄型・低出幅の外照式LED照明を検討するとよいです。アドビューは出幅が最大でも230mmと小さく、配光設計によりまぶしさを抑えやすいことが説明されています。",
  },
  {
    q: "大型看板にはどの照明が向いていますか？",
    a: "大型壁面看板やファサード看板では、1灯の投光器だけでは光ムラが出やすい場合があります。アドビューやポラックスのように、連結や大型サイン対応を前提にした外照式LED照明を検討すると、看板面を均一に照らしやすくなります。",
  },
];

const RELATED_ARTICLES = [
  {
    slug: "led-floodlight-selection",
    title: "LED投光器の選び方｜現場・倉庫の作業灯から看板照明まで",
  },
  {
    slug: "floodlight-lumen-guide",
    title:
      "投光器のルーメン目安は？屋外作業・駐車場・工事現場で必要な明るさを解説",
  },
  {
    slug: "aluminum-composite-panel-cut",
    title:
      "アルミ複合板のカット販売とは？指定寸法・角R・穴あけ加工を依頼する前のチェックポイント",
  },
  {
    slug: "board-material-transport-cart",
    title:
      "板物の運搬に便利な台車とは？アルミ複合板・長尺材を安全に運ぶ選び方",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "看板照明を後付けしたいときの選び方｜屋外用LEDライト・投光器の注意点",
  description:
    "看板照明を後付けしたい方向けに、屋外用LEDライト・LED投光器・外照式看板灯の選び方を解説。看板サイズ、明るさ、色温度、広角・狭角、出幅、防水性能、設置場所、越境リスク、ビューフラッド・ビュートロン・アドビュー・ポラックスの使い分けまで紹介します。",
  datePublished: "2026-06-25",
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

const RELATED: RelatedArticle[] = RELATED_ARTICLES.map((a) => ({
  href: `/articles/${a.slug}`,
  label: a.title,
}));

const LIST_CTA_CLASS =
  "inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover";

function SignLightBannerGrid() {
  return (
    <div className="sign-light-banner-grid my-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
      {SELF_EC_BANNERS.map((b) => (
        <a
          key={b.file}
          href={selfEcHref(b.url)}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="block overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-md"
        >
          <img
            src={`/products/${b.file}`}
            alt={b.label}
            className="h-auto w-full object-cover"
            loading="lazy"
          />
          <p className="px-4 py-3 text-sm font-bold text-foreground">
            {b.label} →
          </p>
        </a>
      ))}
    </div>
  );
}

function WarningBox({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 border-2 border-amber-500 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-900">
      {children}
    </div>
  );
}

export default function SignLightingRetrofitPage() {
  return (
    <ArticleLayout faq={FAQ} articleJsonLd={articleJsonLd}>
      <Breadcrumb current="看板照明の後付け" />
      <ArticleHeader
        category="guide"
        readingTime={13}
        title="看板照明を後付けしたいときの選び方"
        subtitle="屋外用LEDライト・投光器の注意点"
      />
      <HeroImage
        src="/images/articles/sign-lighting-retrofit-hero.jpg"
        alt="既存看板にLED照明を後付けして夜間でも見やすくするイメージ"
      />
      <ArticleContent>
        <Lead>
          夜になると店舗看板が見えにくい、道路から看板が目立たない、既存の看板を活かしたまま明るくしたい——こうした悩みは、看板本体を作り替えなくても、外照式のLEDライトや看板照明を後付けすることで改善できる場合があります。
        </Lead>
        <LeadMuted>
          ただし、看板照明は「明るいLED投光器を付ければよい」という単純なものではありません。看板のサイズ、設置高さ、照射角度、色温度、防水性能、器具の出幅、近隣への光漏れ、道路・隣地への越境などを考えて選ぶ必要があります。この記事では、看板照明を後付けしたい方に向けて、外照式LEDライト・LED投光器・アームスポット・薄型外照灯の選び方と、ビューフラッド、ビュートロン、アドビュー、ポラックスの使い分けをわかりやすく解説します。
        </LeadMuted>

        <ConclusionBox>
          <strong>結論：</strong>
          看板照明を後付けする場合は、看板のサイズ・設置高さ・照射距離・色温度・配光角度・防水性能・器具の出幅を確認して選びます。小〜中型の壁面看板や店舗看板には外照式LED投光器、大型壁面看板やファサード看板には均一に照らしやすいLED外照灯、出幅を抑えたい場合はアドビューのような薄型の外照式LED照明も候補になります。
        </ConclusionBox>

        <WarningBox>
          本記事は一般的な情報提供であり、施工・電気工事に関する助言ではありません。
          <strong>
            電源を直接配線する固定設置工事は、電気工事士法に基づき電気工事士などの有資格者・専門業者が行う必要があります
          </strong>
          （コンセントにプラグを差して使う範囲は対象外）。屋外広告物条例や建築条件の確認が必要な場合は、管轄の自治体や専門業者へご相談ください。商品の仕様・適合・保証は各商品ページでご確認ください。
        </WarningBox>

        <ArticleSection>
          <H2>看板照明の後付けとは？既存看板を夜でも見やすくする方法</H2>
          <ConclusionBox>
            看板本体はそのまま、外照式ライトを追加して夜間の視認性を高める方法です。
          </ConclusionBox>

          <H3>看板本体を残して照明だけ追加する方法</H3>
          <LeadMuted>
            後付け照明は、既存の壁面看板・ファサード看板・自立看板などに、外照式ライトを追加して夜間の視認性を高める方法です。看板の電装（内照式）を一新するのではなく、看板の外側から光を当てる「外照式」で明るさを補うイメージです。
          </LeadMuted>

          <H3>後付けが向いているケース</H3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-lg leading-relaxed text-muted-foreground">
            <li>昼間は見えるが夜になると看板が沈む</li>
            <li>店舗の営業時間が夕方以降にもある</li>
            <li>看板本体は使えるので作り替えたくない</li>
            <li>蛍光灯や古い照明をLED化したい</li>
            <li>看板面にムラが出ている</li>
            <li>アームライトの出幅が気になる</li>
            <li>電気代・交換頻度を抑えたい</li>
          </ul>

          <H3>後付けが難しいケース</H3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-lg leading-relaxed text-muted-foreground">
            <li>電源が確保できない</li>
            <li>取付下地が弱い</li>
            <li>隣地・道路・歩道側へ器具が大きく出る</li>
            <li>高所作業車や足場が必要</li>
            <li>屋外広告物条例や建築条件の確認が必要</li>
          </ul>
        </ArticleSection>

        <ArticleSection>
          <H2>看板照明を後付けするときに最初に確認する7つのポイント</H2>
          <ConclusionBox>
            明るさだけでなく、サイズ・配光・色温度・本体色・出幅・防水・施工性の7点を先に整理すると失敗しにくくなります。
          </ConclusionBox>

          <H3>1）看板のサイズ</H3>
          <LeadMuted>
            看板の高さ・横幅によって必要な照明の種類が変わります。小型看板、中型看板、大型看板では、選ぶ照明器具や照射距離が異なります。ニッケンハードウェアのビューフラッドでは、VF40は看板H寸法2m〜3.5m、VF80は3m〜4.5m、VF120は4m〜5.5mの中型〜大型サイン向けとして紹介されています。
          </LeadMuted>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-lg leading-relaxed text-muted-foreground">
            <li>
              <strong className="text-foreground">VF40</strong>
              ：小型サイン向け
            </li>
            <li>
              <strong className="text-foreground">VF80</strong>
              ：中型サイン向け
            </li>
            <li>
              <strong className="text-foreground">VF120</strong>
              ：大型サイン向け
            </li>
          </ul>

          <H3>2）照射角度：広角か狭角か</H3>
          <ArticleFigure
            src="/images/articles/sign-lighting-wide-narrow-angle.jpg"
            alt="看板照明の広角と狭角の照射イメージ"
          />
          <LeadMuted>
            看板全体をやわらかく照らしたい場合は広角、遠くまでしっかり光を飛ばしたい場合は狭角が候補になります。看板面に近すぎると光ムラが出やすく、複数灯の配置で均一性を調整する方法もあります。
          </LeadMuted>
          <ArticleTable
            head={["配光", "特徴", "向いているケース"]}
            rows={[
              ["広角", "面全体をやわらかく照らす", "横長・面積のある看板"],
              ["狭角", "遠く・縦方向へ光を飛ばす", "縦長看板・離れた設置位置"],
            ]}
          />

          <H3>3）色温度：白色・昼光色・電球色の印象</H3>
          <LeadMuted>
            看板照明では、色温度によって店舗の印象が変わります。ビューフラッドの指定商品は白色5000K、ビュートロンでは昼光色6000K・電球色2700Kの指定商品があるため、店舗の雰囲気に合わせて使い分けられます。
          </LeadMuted>
          <ArticleTable
            head={["色味", "印象", "向いている業種例"]}
            rows={[
              [
                "電球色（2700K前後）",
                "あたたかい、落ち着いた印象",
                "飲食店、旅館、美容室、和風店舗",
              ],
              [
                "白色（5000K前後）",
                "自然で見やすい",
                "クリニック、学習塾、事務所、一般店舗",
              ],
              [
                "昼光色（6000K前後）",
                "くっきり、視認性重視",
                "ロードサイド店舗、駐車場、施設サイン",
              ],
            ]}
          />

          <H3>4）本体色：ブラックかホワイトか</H3>
          <LeadMuted>
            器具本体が目立つ場所に付く場合は、看板枠・壁面・外観との相性を確認します。白壁・白系看板にはホワイト、黒枠・木目・和風外観にはブラックが選ばれやすいです。ビュートロンは白・黒の本体色を選べ、黒は和風やウッド系デザインとも相性がよいと紹介されています。
          </LeadMuted>

          <H3>5）器具の出幅・越境リスク</H3>
          <LeadMuted>
            後付け照明で意外と重要なのが、器具の出幅です。一般的なアームスポットは前面に出幅が必要になり、隣地境界や歩道、道路側への越境、サインデザインへの影響が問題になる場合があります。出幅を抑えたい場合はアドビュー、意匠も含めてアームスポットを選びたい場合はビュートロン、大型サインを均一に照らしたい場合はポラックスが候補になります。
          </LeadMuted>

          <H3>6）防水・防塵・耐久性</H3>
          <LeadMuted>
            屋外看板では、雨・風・粉じん・振動・塩害なども考える必要があります。ビュートロンはPSE、IP65、防水防塵試験、耐振動試験、塩水噴霧試験に適合クリアしていると紹介されています。ビューフラッドでも、IP65・耐振動試験・塩水噴霧試験への適合が示されています。
          </LeadMuted>

          <H3>7）施工性・電源・メンテナンス</H3>
          <LeadMuted>
            後付け照明では、商品代だけでなく施工費・高所作業・配線・交換頻度も考える必要があります。アドビューは、従来のレフ球と比べて消費電力の削減や長寿命による交換施工費の抑制に触れられており、定格寿命40000時間と説明されています。
          </LeadMuted>
        </ArticleSection>

        <ArticleSection>
          <H2>看板照明の後付けに使う主な照明タイプ</H2>
          <ConclusionBox>
            小〜中型看板はビューフラッドやビュートロン、出幅を抑えたいならアドビュー、大型壁面・ファサードはポラックスが候補です。
          </ConclusionBox>
          <ArticleTable
            head={["タイプ", "向いている看板", "特徴", "主な導線"]}
            rows={[
              [
                "LED看板灯・外照式投光器",
                "小〜中型看板",
                "後付けしやすく汎用性が高い",
                "ビューフラッド",
              ],
              [
                "一体型アームスポット",
                "店舗看板・壁面看板",
                "アームと灯具がまとまり施工しやすい",
                "ビュートロン",
              ],
              [
                "薄型外照式LED照明",
                "ファサード・壁面看板",
                "出幅を抑え、ムラを減らしやすい",
                "アドビュー",
              ],
              [
                "LED外照灯",
                "大型壁面・ファサード・自立看板",
                "均一配光・大型対応",
                "ポラックス",
              ],
              [
                "一般LED投光器",
                "作業・仮設・補助照明",
                "看板用としては用途確認が必要",
                "LED投光器一覧",
              ],
            ]}
          />
        </ArticleSection>

        <ArticleSection>
          <H2>ビューフラッド｜小型〜大型看板に使いやすい外照式LED投光器</H2>
          <ConclusionBox>
            店舗正面・ロードサイド・駐車場案内など、小〜中型の外照式看板に使いやすい看板専用LED投光器です。
          </ConclusionBox>

          <H3>こんな看板におすすめ</H3>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-lg leading-relaxed text-muted-foreground">
            <li>店舗正面の壁面看板</li>
            <li>駐車場側の案内看板</li>
            <li>ロードサイド店舗の看板</li>
            <li>小〜中型の外照式看板</li>
            <li>白色5000Kで視認性を重視したい看板</li>
          </ul>

          <H3>選び方</H3>
          <LeadMuted>
            看板の高さに合わせてVF40（小型）・VF80（中型）・VF120（大型）を選び、面を広く照らすなら広角、遠く・縦方向に飛ばすなら狭角。外観に合わせてブラック・ホワイトを選びます。
          </LeadMuted>
          <ProductGrid items={VIEW_FLOOD} cols={3} slug={SLUG} />
          <div className="mt-6">
            <a
              href={categoryHref(CATEGORY.signLight, "yahoo_viewflood")}
              target="_blank"
              rel="nofollow sponsored noopener"
              className={LIST_CTA_CLASS}
            >
              看板照明一覧へ
            </a>
          </div>
        </ArticleSection>

        <ArticleSection>
          <H2>ビュートロン｜一体型アームスポットで後付け施工をシンプルにしたい場合</H2>
          <ConclusionBox>
            ランプ・ホルダ・アームを個別手配せず、組み立て済み・電線通し済みの一体型で施工時間を短縮できます。
          </ConclusionBox>

          <H3>ビュートロンが向いているケース</H3>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-lg leading-relaxed text-muted-foreground">
            <li>アームスポットを後付けしたい</li>
            <li>ランプ・ホルダ・アームの手配を簡単にしたい</li>
            <li>店舗外観に合う白・黒の本体を選びたい</li>
            <li>Lアーム・SSアームなど、設置場所に合わせてアームを選びたい</li>
            <li>サビや屋外耐久性も重視したい</li>
          </ul>
          <LeadMuted>
            ビュートロンは、ランプ・ホルダ・アームを個別に手配する必要がない一体型で、組み立て済み・電線通し済みの状態で箱に入っており、施工時間を短縮できる点が紹介されています。
          </LeadMuted>

          <H3>白・黒、昼光色・電球色、アーム形状の選び方</H3>
          <LeadMuted>
            昼光色6000Kは視認性重視、電球色2700Kはあたたかい印象の店舗向け。Lアームは出幅を出しやすく、SSアームはコンパクトな設置に向きます。配光は広角で面全体、狭角で縦長・遠距離照射が選びやすいです。
          </LeadMuted>
          <ProductGrid items={VIEWTRON} cols={2} slug={SLUG} />
        </ArticleSection>

        <ArticleSection>
          <H2>アドビュー｜出幅を抑えて看板面をムラなく照らしたい場合</H2>
          <ConclusionBox>
            アームライト式と比べ出幅が少なく、配光設計でムラの少ない均一な明るさを確保しやすい外照式LED照明です。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/low-profile-sign-lighting.jpg"
            alt="出幅の少ない外照式LED看板照明のイメージ"
          />

          <H3>アドビューが向いているケース</H3>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-lg leading-relaxed text-muted-foreground">
            <li>アームライトの出幅が気になる</li>
            <li>隣地・道路・歩道側への越境を抑えたい</li>
            <li>ファサード看板をすっきり見せたい</li>
            <li>看板面の光ムラを減らしたい</li>
            <li>電気代やランプ交換頻度も見直したい</li>
          </ul>
          <LeadMuted>
            アドビューは、アームライト式器具と比べて出幅が少なく、隣接する敷地・道路・歩道に越境することが少ないデザインと説明されています。また、LEDとレンズの組み合わせによる配光設計で、一般的な外照式と比べてムラのない均一に近い明るさを確保すると紹介されています。
          </LeadMuted>

          <H3>出幅を抑えたい場合のメリット</H3>
          <LeadMuted>
            出幅が最大でも230mmと小さく、隣地境界や歩道・道路側への越境リスクを抑えやすい設計です。ファサード看板や壁面看板の外観を損ねにくい点も、後付け照明では大きなメリットになります。
          </LeadMuted>

          <H3>光ムラを抑えたい場合のメリット</H3>
          <LeadMuted>
            連結や上下照射で大型サインにも対応しやすく、既存スポット照明の見た目が気になる場合にも提案しやすいラインアップです。定格寿命40000時間と説明されており、ランニングコストの見直しにも向きます。
          </LeadMuted>
        </ArticleSection>

        <ArticleSection>
          <H2>ポラックス｜大型壁面看板・ファサード看板を均一に照らしたい場合</H2>
          <ConclusionBox>
            従来の投光器と比べ突き出し量を抑え、独自の配光制御でムラの少ない照射が可能なLED外照灯シリーズです。
          </ConclusionBox>
          <ArticleFigure
            src="/images/articles/large-sign-led-exterior-lighting.jpg"
            alt="大型壁面看板をLED外照灯で均一に照らすイメージ"
          />

          <H3>ポラックスが向いているケース</H3>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-lg leading-relaxed text-muted-foreground">
            <li>大型壁面看板を照らしたい</li>
            <li>ファサード看板をすっきり照らしたい</li>
            <li>出幅を抑えたい</li>
            <li>ムラの少ない照射を重視したい</li>
            <li>屋上広告塔や大型サインに使いたい</li>
            <li>連結して間口の広いサインに対応したい</li>
          </ul>
          <LeadMuted>
            ポラックスシリーズは、従来の投光器と比べて看板全面への突き出し量を抑えた設計で、独自の配光制御により従来のスポットライト照明と比べてムラの少ない照射が可能と説明されています。
          </LeadMuted>

          <H3>大型壁面・ファサード・自立看板での使い分け</H3>
          <ArticleTable
            head={["シリーズ", "推奨用途"]}
            rows={[
              ["パワーポラックス3", "屋上広告塔・大型壁面看板など"],
              ["ポラックス4", "壁面看板・ファサード照明など"],
              ["ポラックス3", "駐車場サイン・自立サインなど"],
              ["ポラックス3 T型", "駐車場・軒下などの直下照明"],
            ]}
          />

          <H3>出幅と均一配光を重視したい場合</H3>
          <LeadMuted>
            1灯の一般投光器だけでは光ムラが出やすい大型看板では、連結対応を前提にしたポラックスのような外照灯を検討すると、看板面を均一に照らしやすくなります。
          </LeadMuted>
        </ArticleSection>

        <ArticleSection>
          <H2>看板の種類に合わせて外照式LED照明を選ぶ</H2>
          <ConclusionBox>
            ビュートロン・アドビュー・ポラックスは、看板の課題（施工のしやすさ・出幅・大型対応）に応じて使い分けます。
          </ConclusionBox>
          <LeadMuted>
            小型店舗看板から大型壁面看板まで、サインシティではビューフラッド・ビュートロン・アドビュー・ポラックスなど、用途別の看板照明を取り扱っています。以下から各シリーズの詳細をご確認ください。
          </LeadMuted>
          <SignLightBannerGrid />
        </ArticleSection>

        <ArticleSection>
          <H2>看板照明を後付けするときの失敗例</H2>
          <ConclusionBox>
            明るさだけ・器具の出幅・防水・施工条件の見落としが、後付け照明でよくある失敗パターンです。
          </ConclusionBox>

          <H3>明るさだけで選んでしまう</H3>
          <LeadMuted>
            明るいだけでは、看板全体がきれいに見えるとは限りません。配光角度、設置距離、看板面の高さ、複数灯の配置が重要です。作業用投光器の選び方については、
            <Link
              href="/articles/floodlight-lumen-guide"
              className="font-bold text-primary hover:underline"
            >
              投光器のルーメン目安
            </Link>
            の記事も参考にしてください。
          </LeadMuted>

          <H3>光ムラが出る</H3>
          <LeadMuted>
            照明の数が少ない、照射角度が合っていない、看板面との距離が近すぎる場合、明るい部分と暗い部分が目立ちます。
          </LeadMuted>

          <H3>器具が前に出すぎる</H3>
          <LeadMuted>
            看板本体より照明器具が大きく出ると、外観を損ねたり、隣地・道路側への越境が問題になる場合があります。
          </LeadMuted>

          <H3>まぶしさ・ハレーションが出る</H3>
          <LeadMuted>
            光源が見えすぎると、通行人や車両からまぶしく感じる場合があります。看板照明は、看板面を照らしつつ、見る人に直接光が入りにくい設計が重要です。
          </LeadMuted>

          <H3>屋外なのに防水・耐久性を確認していない</H3>
          <LeadMuted>
            屋外看板は雨風を受けるため、防水・防塵・耐振動・耐塩害などの仕様確認が必要です。
          </LeadMuted>

          <H3>施工条件を確認していない</H3>
          <LeadMuted>
            電源、下地、高所作業、足場、看板の構造、配線ルートを確認せずに商品だけ選ぶと、取付時に困る可能性があります。
          </LeadMuted>
        </ArticleSection>

        <ArticleSection>
          <H2>看板照明の後付けで確認したいチェックリスト</H2>
          <ArticleTable
            head={["確認項目", "チェック内容"]}
            rows={[
              ["看板サイズ", "高さ・横幅・厚みを確認したか"],
              [
                "看板種類",
                "壁面・ファサード・自立・ポール・袖看板など",
              ],
              ["取付位置", "上部・下部・左右・壁面・支柱など"],
              ["照射距離", "看板面までの距離が合っているか"],
              ["配光", "広角・狭角のどちらが合うか"],
              ["色温度", "白色・昼光色・電球色の印象が合うか"],
              ["本体色", "壁面・看板枠・外観になじむか"],
              ["出幅", "道路・歩道・隣地側へ出すぎないか"],
              ["防水性能", "屋外設置に対応しているか"],
              ["電源", "電源位置・配線ルートを確認したか"],
              ["施工", "高所作業や足場が必要か"],
              ["メンテナンス", "交換・清掃・点検がしやすいか"],
            ]}
          />
        </ArticleSection>

        <ArticleSection>
          <H2>看板照明の後付けは自分でできる？施工相談が必要なケース</H2>
          <ConclusionBox>
            低所・既存器具の交換なら商品購入で済むことも。高所・新規配線・大型看板は専門業者への相談が安心です。
          </ConclusionBox>

          <H3>商品購入だけで済むケース</H3>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-lg leading-relaxed text-muted-foreground">
            <li>既存器具の交換で仕様が近い</li>
            <li>低所で作業できる</li>
            <li>電源・下地が確認できている</li>
            <li>電気工事の手配ができる</li>
          </ul>

          <H3>専門業者に相談した方がよいケース</H3>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-lg leading-relaxed text-muted-foreground">
            <li>高所看板</li>
            <li>大型壁面看板</li>
            <li>新規配線が必要</li>
            <li>隣地・道路・歩道への出幅が気になる</li>
            <li>照射ムラを避けたい</li>
            <li>看板本体の補修も必要</li>
            <li>電気工事士による作業が必要な場合</li>
          </ul>

          <H3>看板照明の選定・既存看板の見直し・施工相談へつなげる</H3>
          <LeadMuted>
            看板照明を後付けする場合は、商品を選ぶだけでなく、看板のサイズ・設置条件・近隣への影響まで含めて確認することが大切です。サインシティでは看板照明のほか、看板資材・施工相談もあわせてご利用いただけます。
          </LeadMuted>
        </ArticleSection>

        <FaqSection faq={FAQ} />

        <ArticleSection>
          <H2>まとめ</H2>
          <LeadMuted>
            看板照明を後付けする場合は、明るさだけでなく、看板サイズ、照射角度、色温度、出幅、防水性能、施工性まで確認することが重要です。小〜中型看板ならビューフラッド、一体型アームスポットならビュートロン、出幅を抑えたいならアドビュー、大型壁面・ファサード看板ならポラックスも候補にしてください。作業現場向けのLED投光器選びとは異なる視点が必要なので、
            <Link
              href="/articles/led-floodlight-selection"
              className="font-bold text-primary hover:underline"
            >
              LED投光器の選び方
            </Link>
            の記事とあわせて読むと、用途の違いがより明確になります。
          </LeadMuted>
        </ArticleSection>

        <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
          <h2 className="text-2xl font-black text-white">
            看板照明の後付け・LED化なら、サインシティでまとめて確認できます
          </h2>
          <p className="mt-3 text-footer-muted">
            看板照明を後付けする場合は、明るさだけでなく、看板サイズ、照射角度、色温度、出幅、防水性能、設置場所まで確認することが大切です。サインシティでは、ビューフラッド、ビュートロン、アドビュー、ポラックスなど、店舗看板・壁面看板・ファサード看板・大型サインに対応する看板照明を取り扱っています。既存看板を夜でも見やすくしたい方、古い照明をLED化したい方、看板の見え方まで含めて相談したい方は、看板照明一覧をご確認ください。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={categoryHref(CATEGORY.signLight, "yahoo_cta")}
              target="_blank"
              rel="nofollow sponsored noopener"
              className={LIST_CTA_CLASS}
            >
              看板照明一覧へ
            </a>
            <a
              href={selfEcHref("https://www.trade-sign.com/lighting/")}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              サインシティ本店 看板照明へ
            </a>
          </div>
        </section>

        <RelatedArticles items={RELATED} />

        <Disclaimer extra="商品の仕様・価格・在庫・適合・保証は各商品ページの最新情報をご確認ください。電源工事を伴う設置は電気工事士などの有資格者・専門業者へご依頼ください。" />
      </ArticleContent>
    </ArticleLayout>
  );
}
