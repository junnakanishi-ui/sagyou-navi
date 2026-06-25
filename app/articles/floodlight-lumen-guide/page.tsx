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
  ProductGrid,
  FaqSection,
  RelatedArticles,
  Disclaimer,
  type RelatedArticle,
} from "@/components/article";

const SLUG = "floodlight-lumen-guide";

function buildUrlWithHash(base: string, utmContent: string): string {
  const [path, hash] = base.split("#");
  const sep = path.includes("?") ? "&" : "?";
  const utm =
    `utm_source=sagyou_navi&utm_medium=referral` +
    `&utm_campaign=2026_sagyou&utm_content=${utmContent}`;
  return `${path}${sep}${utm}${hash ? `#${hash}` : ""}`;
}

const CATEGORY = {
  ledFloodlight:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E6%8A%95%E5%85%89%E5%99%A8&view=grid",
  signLight:
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E7%9C%8B%E6%9D%BF%E7%85%A7%E6%98%8E#CentSrchFilter1",
} as const;

const SELF_EC = [
  {
    url: "https://www.trade-sign.com/main/adview/index.html",
    file: "bnr061.jpg",
    label: "LED電装ユニット アドビュー一覧へ",
  },
  {
    url: "https://www.trade-sign.com/main/pollux/index.html",
    file: "bnr131.jpg",
    label: "LED外照灯 ポラックス一覧へ",
  },
  {
    url: "https://www.trade-sign.com/main/viewtron/index.html",
    file: "bnr_viewtron.png",
    label: "屋外サイン用アームスポット ビュートロン一覧へ",
  },
  {
    url: "https://www.trade-sign.com/main/facade-sign/index.html",
    file: "bnr-facade-sign.png",
    label: "LEDファサード看板一覧へ",
  },
] as const;

const categoryHref = (url: string, suffix: string) =>
  buildUrlWithHash(url, `${SLUG}_${suffix}`);
const selfEcHref = (url: string) =>
  buildUrlWithHash(url, `${SLUG}_tradesign`);

export const metadata: Metadata = {
  title:
    "投光器のルーメン目安は？屋外作業・駐車場・工事現場で必要な明るさを解説｜作業用品ナビ",
  description:
    "投光器のルーメン目安を、手元作業・倉庫・屋外作業・駐車場・看板照明など用途別に解説。20W・50Wの違い、ルーメンとワット・ルクスの考え方、照射角度・設置高さ・防水・まぶしさ対策まで、明るさ選びで失敗しないポイントを紹介します。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "投光器のルーメン目安は？屋外作業・駐車場・工事現場で必要な明るさを解説",
    description:
      "20W・50Wの違い、用途別の明るさ目安、ルーメン・ワット・ルクスの考え方を整理します。",
    type: "article",
  },
};

const W20 = [
  {
    id: "222526",
    name: "TRUSCO LED投光器 DELKURO 20W 10m RTLE-210",
    note: "20Wクラス・約2500lm目安。手元・補助照明に",
  },
  {
    id: "222509",
    name: "TRUSCO LED投光器 20W 10m RTL-210",
    note: "20Wのシンプルタイプ。倉庫の一部照明に",
  },
  {
    id: "222517",
    name: "TRUSCO LED投光器 DELKURO 20W 5m アース付 RTLE-205EP",
    note: "アース付。屋外の手元作業にも",
  },
  {
    id: "222522",
    name: "TRUSCO LED投光器 DELKURO スタンドタイプ 20W 5m RTLE-205-S",
    note: "床置きで狭い範囲をしっかり",
  },
  {
    id: "222525",
    name: "TRUSCO LED投光器 DELKURO バイスタイプ 20W 5m RTLE-205-V",
    note: "棚・柱に挟んで固定。省スペース",
  },
  {
    id: "222521",
    name: "TRUSCO LED投光器 DELKURO バイスタイプ 20W 5m アース付 RTLE-205EP-V",
    note: "アース付バイス。足場まわりに",
  },
  {
    id: "222508",
    name: "TRUSCO LED投光器用 20W LED球 RTL-20W",
    note: "対応機種の交換球（要対応確認）",
  },
];

const W50 = [
  {
    id: "222542",
    name: "TRUSCO LED投光器 DELKURO スタンドタイプ 50W 5m RTLE-505-S",
    note: "50Wクラス。広めの作業場に",
  },
  {
    id: "222538",
    name: "TRUSCO LED投光器 DELKURO スタンドタイプ 50W 5m アース付 RTLE-505EP-S",
    note: "アース付。屋外の常用に",
  },
  {
    id: "222546",
    name: "TRUSCO LED投光器 DELKURO 50W 10m RTLE-510",
    note: "約4500〜6500lm目安／IP65・6500K・照射角120°",
  },
  {
    id: "222515",
    name: "TRUSCO LED投光器 50W 10m ポッキン付 RTL-510EP",
    note: "コンセント直挿しで使える50W",
  },
  {
    id: "222513",
    name: "TRUSCO LED投光器用 50W LED球 RTL-50W",
    note: "対応機種の交換球（要対応確認）",
  },
];

const TRIPOD = [
  {
    id: "222519",
    name: "TRUSCO LED投光器 DELKURO 三脚タイプ 1灯 20W 5m アース付 RTLE-205EP-SK",
    note: "高い位置から。小規模現場に",
  },
  {
    id: "222553",
    name: "TRUSCO LED投光器 DELKURO 三脚タイプ 1灯 50W 10m RTLE-510-SK",
    note: "広い現場を上から照らし影を軽減",
  },
  {
    id: "222550",
    name: "TRUSCO LED投光器 DELKURO 三脚タイプ 2灯 50W 10m アース付 RTLE-510EP-SK2",
    note: "2灯で複数方向。夜間工事の主役",
  },
];

const HIGH = [
  {
    id: "222493",
    name: "TRUSCO 投光器 200W RT-205",
    note: "高出力。広い屋外を一気に明るく",
  },
  {
    id: "222495",
    name: "TRUSCO リフレター投光器 300W 防雨プラグ付 RT-300",
    note: "300Wの大光量。仮設の広範囲に",
  },
  {
    id: "222502",
    name: "TRUSCO 調光器付投光器 500W RT-505A",
    note: "500W＋調光。明るさを現場に合わせる",
  },
];

const SIGN = [
  {
    id: "051109",
    name: "看板照明 外照式 ビューフラッド VF80 広角 ホワイト 5000K VF80-W",
    note: "中型看板(H約3〜4.5m)・広角105°",
  },
  {
    id: "051108",
    name: "看板照明 外照式 ビューフラッド VF80 広角 ブラック 5000K VF80-B",
    note: "中型看板・本体ブラック",
  },
  {
    id: "066740",
    name: "看板照明 外照式 ビューフラッド VF40 狭角 ホワイト 5000K VF40NR-W",
    note: "小型看板(H約2〜3.5m)・狭角30°",
  },
  {
    id: "066741",
    name: "看板照明 外照式 ビューフラッド VF40 狭角 ブラック 5000K VF40NR-B",
    note: "小型看板・本体ブラック",
  },
  {
    id: "066744",
    name: "看板照明 外照式 ビューフラッド VF120 広角 ホワイト 5000K VF120-W",
    note: "大型看板(H約4〜5.5m)・広角105°",
  },
  {
    id: "066747",
    name: "看板照明 外照式 ビューフラッド VF120 狭角 ブラック 5000K VF120NR-B",
    note: "大型看板・狭角でしっかり飛ばす",
  },
];

const FAQ = [
  {
    q: "投光器は何ルーメンあればよいですか？",
    a: "手元作業や狭い範囲なら20Wクラス（約2500lm目安）、屋外作業や広い現場なら50Wクラス（約4500〜6500lm目安）が候補です。必要な明るさは照らす範囲・設置高さ・照射角度・作業内容で変わるため、作業面の見やすさで判断します。",
  },
  {
    q: "20Wと50Wの投光器はどう違いますか？",
    a: "20Wクラスは手元作業や補助照明、50Wクラスは屋外作業・駐車場・広めの作業場に向きます。広範囲を照らすなら50Wの三脚タイプや2灯タイプも候補です。",
  },
  {
    q: "ルーメンが高い投光器を選べば失敗しませんか？",
    a: "明るいほどよいとは限りません。狭い場所ではまぶしさの原因になり、1台だけで照らすと影が強くなります。照射角度・設置高さ・台数の分散も確認しましょう。",
  },
  {
    q: "駐車場にはどのくらいの明るさの投光器が向いていますか？",
    a: "広範囲を照らせる50Wクラスや三脚タイプが候補です。あわせて防水性能・コード長・設置位置・光が近隣に漏れすぎないかを確認しましょう。",
  },
  {
    q: "看板照明はルーメンだけで選んでよいですか？",
    a: "看板照明はルーメンだけでなく、看板サイズ・配光角度・色温度・本体色・防水性能・ハレーションの出にくさも重要です。外照式にはビューフラッドのような看板照明用LEDが向いています。",
  },
];

const RELATED_ARTICLES = [
  {
    slug: "led-floodlight-selection",
    title:
      "LED投光器の選び方｜現場・倉庫の作業灯から看板照明まで",
  },
  {
    slug: "board-material-transport-cart",
    title:
      "板物の運搬に便利な台車とは？アルミ複合板・長尺材を安全に運ぶ選び方",
  },
  {
    slug: "kartio-big-offroad",
    title:
      "カルティオビッグ・オフロードとは？悪路・段差に強い大型樹脂台車の使いどころ",
  },
  {
    slug: "warehouse-safety-shoes",
    title:
      "倉庫作業に向く安全靴の選び方｜疲れにくい・滑りにくい・台車作業で安心な靴を解説",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "投光器のルーメン目安は？屋外作業・駐車場・工事現場で必要な明るさを解説",
  description:
    "投光器のルーメン目安を、手元作業・倉庫・屋外作業・駐車場・看板照明など用途別に解説。20W・50Wの違い、ルーメンとワット・ルクスの考え方を整理します。",
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

function SelfEcBanners() {
  return (
    <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {SELF_EC.map((b) => (
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

function AeoBox({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 border-l-4 border-blue-500 bg-blue-50 px-5 py-4 text-sm leading-relaxed text-blue-900">
      {children}
    </div>
  );
}

const LIST_CTA_CLASS =
  "inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover";

export default function FloodlightLumenGuidePage() {
  return (
    <ArticleLayout faq={FAQ} articleJsonLd={articleJsonLd}>
      <Breadcrumb current="投光器のルーメン目安" />
      <ArticleHeader
        category="compare"
        readingTime={10}
        title="投光器のルーメン目安は？"
        subtitle="屋外作業・駐車場・工事現場で必要な明るさを解説"
      />
      <HeroImage
        src="/images/articles/floodlight-lumen-guide-hero.jpg"
        alt="投光器のルーメン目安を確認しながら夜間作業の照明を選ぶイメージ"
      />
      <ArticleContent>
        <AeoBox>
          <p className="mb-1 font-bold">まずは結論（ルーメン目安）</p>
          <p>
            投光器のルーメン目安は、
            <strong>
              手元作業や狭い範囲なら20Wクラス（約2500lm目安）、屋外作業・駐車場・広めの作業場なら50Wクラス（約4500〜6500lm目安）
            </strong>
            、さらに広範囲なら三脚タイプや2灯タイプが候補です。ただし投光器は
            <strong>ルーメンだけで選ぶと失敗</strong>
            します。照らす範囲・設置高さ・照射角度・影・まぶしさ・防水・コード長まで確認しましょう。看板照明では、明るさに加えて色温度・配光・見た目も重要です。
          </p>
        </AeoBox>

        <Lead>
          LED投光器を選ぶときに迷いやすいのが、「何ルーメンあれば足りるのか」という点です。商品ページには20W・50W・4500lm・6500lmなどの表記が並びますが、数字だけを見ても、実際にどれくらい明るいのか、どの現場に合うのかは判断しにくいものです。
        </Lead>
        <LeadMuted>
          しかも、夜間作業・倉庫・駐車場・工事現場・看板照明では、必要な明るさが異なります。明るさが足りなければ作業効率や安全性に影響し、逆に明るすぎるとまぶしさ・影・近隣への光漏れが問題になることもあります。この記事では、投光器のルーメン目安を用途別に整理し、20W・50W・三脚/2灯・看板照明用LEDの選び方をわかりやすく解説します。
        </LeadMuted>

        <WarningBox>
          本記事は一般的な情報提供です。明るさの感じ方は設置条件で変わるため、数値は目安としてご確認ください。屋外可否・防水等級・ルーメン・適合・保証は各商品ページの最新情報をご確認ください。電源を直接配線する固定設置工事は、電気工事士法に基づき電気工事士などの有資格者・専門業者が行う必要があります（コンセントに差して使う範囲は対象外）。
        </WarningBox>

        <ArticleSection>
          <H2>ルーメンとは？ワット数・ルクスとの違い</H2>
          <ConclusionBox>
            ルーメン＝光源が出す光の量、ワット＝消費電力、ルクス＝照らされた面の明るさ。投光器は「ルーメン＋距離＋角度」で考えます。
          </ConclusionBox>
          <LeadMuted>
            <strong className="text-foreground">ルーメン（lm）</strong>
            は、照明器具から出る光の総量を表す単位です。投光器の明るさの目安として「lm」と表記されます。
            <strong className="text-foreground">ワット（W）</strong>
            は明るさそのものではなく消費電力ですが、同じシリーズ内では20Wより50Wの方が明るい傾向があるため、現場ではワット数も選定の目安になります。
            <strong className="text-foreground">ルクス（lx）</strong>
            は、床や作業台など実際に照らされている面の明るさ（照度）で、1平方メートルに1ルーメンの光が届くと1ルクスです。
          </LeadMuted>
          <LeadMuted>
            同じルーメンでも、近くから照らす場合と高い位置から広く照らす場合では、面の明るさ（ルクス）の感じ方が変わります。つまり投光器は「ルーメン＋照らす距離＋照射角度」で考えるのが基本です。なお、作業面の明るさが大切という考え方は法令にも表れており、厚生労働省の事務所衛生基準規則では、作業面の照度基準として一般的な事務作業で300ルクス以上、付随的な事務作業で150ルクス以上が求められています（令和4年12月施行・事務所の基準）。屋外作業に直接適用される数値ではありませんが、「光源のlmだけでなく、作業面がしっかり見えるか」を意識すると失敗を避けやすくなります。
          </LeadMuted>
        </ArticleSection>

        <ArticleSection>
          <H2>用途別｜投光器のルーメン目安</H2>
          <ConclusionBox>
            手元は20W、倉庫は20〜50W、屋外・駐車場・工事現場は50W〜（広ければ三脚/2灯）、看板は専用LED。これが基本の早見表です。
          </ConclusionBox>
          <ArticleTable
            head={["用途", "明るさの考え方", "選び方の目安"]}
            rows={[
              ["手元作業", "狭い範囲をしっかり照らす", "20Wクラス／バイス／補助照明"],
              ["倉庫・作業場", "広がりと影の出にくさ", "20〜50W／スタンド"],
              ["屋外作業", "高ルーメン・広角照射", "50Wクラス／三脚"],
              ["駐車場", "防水・広範囲・設置位置", "50W／三脚・スタンド"],
              ["工事現場", "作業範囲と安全動線", "50W／三脚1灯・2灯"],
              ["看板照明", "色温度・配光も重要", "看板照明用LED（ビューフラッド）"],
            ]}
          />
        </ArticleSection>

        <ArticleSection>
          <H2>手元作業・小範囲なら20Wクラス（約2500lm目安）</H2>
          <ConclusionBox>
            作業台・検品・足場まわりなど、狭い範囲をしっかり照らす用途に。約2500lmが目安です。
          </ConclusionBox>
          <LeadMuted>
            20Wクラスは、作業台まわりや狭い範囲の補助照明に向いています。手元作業・検品・軽作業・倉庫内の一部照明・柱や棚・足場まわりの固定照明などに使いやすい明るさです。三脚を立てるスペースがない場所では、柱や棚に挟めるバイスタイプが便利です。
          </LeadMuted>
          <ProductGrid items={W20} cols={3} slug={SLUG} />
          <div className="mt-6">
            <a
              href={categoryHref(CATEGORY.ledFloodlight, "yahoo")}
              target="_blank"
              rel="nofollow sponsored noopener"
              className={LIST_CTA_CLASS}
            >
              20Wクラスも探せるLED投光器一覧へ
            </a>
          </div>
        </ArticleSection>

        <ArticleSection>
          <H2>屋外作業・広めの作業場なら50Wクラス（約4500〜6500lm目安）</H2>
          <ConclusionBox>
            屋外・夜間工事・駐車場・資材置き場など、広い範囲を明るくしたい現場に。製品により約4500〜6500lmが目安です。
          </ConclusionBox>
          <LeadMuted>
            50Wクラスは、20Wより広い範囲を明るくしたい現場向けです。屋外作業・夜間工事・駐車場・資材置き場・倉庫の荷受け・車両まわり・イベント設営撤去などに使いやすい明るさです。TRUSCO DELKUROの50Wタイプは、流通ページで明るさ約4500〜6500lm（製品により異なる）、保護等級IP65、色温度6500K、照射角120度、ランプ寿命40000時間といった仕様が示されています。具体値は商品ページでご確認ください。
          </LeadMuted>
          <ProductGrid items={W50} cols={3} slug={SLUG} />
          <div className="mt-6">
            <a
              href={categoryHref(CATEGORY.ledFloodlight, "yahoo")}
              target="_blank"
              rel="nofollow sponsored noopener"
              className={LIST_CTA_CLASS}
            >
              50Wクラスも探せるLED投光器一覧へ
            </a>
          </div>
        </ArticleSection>

        <ArticleSection>
          <H2>広範囲を照らすなら三脚タイプ・2灯タイプ</H2>
          <ConclusionBox>
            低い位置は影が出やすい。高い位置から、複数方向から照らすと、同じルーメンでも作業面が見やすくなります。
          </ConclusionBox>
          <LeadMuted>
            広い現場で投光器を低い位置に置くと、資材や人の影が出やすくなります。三脚タイプなら高い位置から照らせるため、作業エリア全体を明るくしやすくなります。1方向だけだと影が強く出る夜間工事や広い資材置き場では、2灯タイプで照射方向を分けると影を減らせます。
          </LeadMuted>
          <ProductGrid items={TRIPOD} cols={3} slug={SLUG} />

          <H3>さらに広範囲・高ルーメンが必要なら（200〜500W）</H3>
          <LeadMuted>
            広いヤードや仮設で一気に照らしたい場合は、200〜500Wクラスの高出力タイプも候補です。明るさを場面で変えたいときは調光器付きが便利です。高出力ほどまぶしさ・光漏れに注意し、設置位置と向きを調整します。
          </LeadMuted>
          <ProductGrid items={HIGH} cols={3} slug={SLUG} />
        </ArticleSection>

        <ArticleSection>
          <H2>ルーメンだけで選ぶと失敗しやすい理由</H2>
          <ConclusionBox>
            「明るいほどよい」は誤解。まぶしさ・影・配光角・防水の4点を外すと、高ルーメンでも使いにくくなります。
          </ConclusionBox>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-lg leading-relaxed text-muted-foreground">
            <li>
              <strong className="text-foreground">まぶしすぎると作業しにくい</strong>
              ：高ルーメンでも目線に近い位置だとグレア（まぶしさ）になります。作業者・通行人に直接光が入らない位置に設置します。
            </li>
            <li>
              <strong className="text-foreground">影が強く出ると手元が見えない</strong>
              ：1台で強く照らすと反対側に濃い影が出ます。手元作業や検品は複数台を分散配置すると影が減ります。
            </li>
            <li>
              <strong className="text-foreground">照射角度が合わないと明るさを活かせない</strong>
              ：同じルーメンでも、広く柔らかい広角と、遠くへ飛ばす狭角では照らし方が違います。
            </li>
            <li>
              <strong className="text-foreground">屋外は防水性能を確認</strong>
              ：屋外では明るさだけでなくIP等級（例：IP65）を確認します。看板用のビューフラッドはIP65や耐振動・耐塩害などに適合した仕様が示されています。
            </li>
          </ol>
        </ArticleSection>

        <ArticleSection>
          <H2>用途別に見る明るさの選び方</H2>
          <ConclusionBox>
            手元・倉庫・屋外/夜間・駐車場で、明るさと配置の勘所をまとめます（商品は上のクラス別グリッドから選べます）。
          </ConclusionBox>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl border border-border bg-card p-4">
              <p className="font-bold text-foreground">手元作業・検品</p>
              <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                20Wクラスを候補に、バイス/スタンドで使いやすく。まぶしさが出ない角度に調整し、作業面に影が出すぎないよう配置します。
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4">
              <p className="font-bold text-foreground">倉庫・作業場</p>
              <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                作業エリアの広さで20W・50Wを選択。移動しながら使うならスタンド、固定するならバイス。荷受け・検品は影の出にくさも重視します。
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4">
              <p className="font-bold text-foreground">屋外作業・夜間工事</p>
              <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                50Wクラスを中心に、広範囲なら三脚、複数方向なら2灯。屋外使用では防水・防塵性能とコード長（5m/10m）を確認します。
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4">
              <p className="font-bold text-foreground">駐車場・車両まわり</p>
              <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                車両動線にケーブルを出さず、高い位置から照らして影を軽減。50Wクラスや三脚を候補に、光が近隣・道路へ漏れすぎないようにします。
              </p>
            </div>
          </div>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            設置タイプ（スタンド・三脚・バイス）ごとの詳しい選び方は、
            <Link
              href="/articles/led-floodlight-selection"
              className="font-bold text-primary hover:underline"
            >
              LED投光器の選び方｜設置タイプ別ガイド
            </Link>
            もあわせてご覧ください。
          </p>
        </ArticleSection>

        <section className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-xl font-black text-foreground">
            用途に合う明るさのLED投光器を探す
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            手元作業には20Wクラス、屋外作業や広めの現場には50Wクラス、広範囲を照らすなら三脚タイプや2灯タイプなど、投光器は用途に合わせて選ぶことが大切です。
          </p>
          <div className="mt-4">
            <a
              href={categoryHref(CATEGORY.ledFloodlight, "yahoo")}
              target="_blank"
              rel="nofollow sponsored noopener"
              className={LIST_CTA_CLASS}
            >
              LED投光器一覧へ
            </a>
          </div>
        </section>

        <ArticleSection>
          <H2>看板照明はルーメンだけで選ばない</H2>
          <ConclusionBox>
            看板は「ルーメン＋看板サイズ＋配光＋色温度＋見た目」。外照式にはサイン専用設計のビューフラッドが向いています。
          </ConclusionBox>
          <LeadMuted>
            店舗や施設の看板を夜間に見せる外照式では、明るさ（ルーメン）だけでなく、看板の高さ・横幅、照射距離、配光（広角・狭角）、色温度、本体色、防水性能、ハレーション（光のにじみ）の出にくさが重要です。ニッケンハードウェアのビューフラッドは、看板の高さに合わせて、VF40＝小型（H約2〜3.5m／約40W）、VF80＝中型（H約3〜4.5m／約75W）、VF120＝大型（H約4〜5.5m／約125W）から選べ、配光は広角約105°・狭角約30°、光色は白色5000K、本体は白/黒。高所・屋外向けにIP65やPSEなどに適合した仕様です。
          </LeadMuted>
          <ProductGrid items={SIGN} cols={3} slug={SLUG} />
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={categoryHref(CATEGORY.signLight, "yahoo")}
              target="_blank"
              rel="nofollow sponsored noopener"
              className={LIST_CTA_CLASS}
            >
              看板照明一覧へ
            </a>
            <a
              href={categoryHref(CATEGORY.ledFloodlight, "yahoo")}
              target="_blank"
              rel="nofollow sponsored noopener"
              className={LIST_CTA_CLASS}
            >
              LED投光器一覧へ
            </a>
          </div>
          <LeadMuted>
            看板の電装・外照・ファサードまで含めて検討するなら、自社の専門ラインアップもあわせてご覧ください。
          </LeadMuted>
          <SelfEcBanners />
          <p className="mt-4 text-sm leading-relaxed text-amber-700">
            ※外照式看板照明の取り付け・電源工事は、電気工事士などの有資格者・専門業者へご依頼ください。
          </p>
        </ArticleSection>

        <ArticleSection>
          <H2>20W・50W・看板照明用LEDの比較</H2>
          <ConclusionBox>
            同じ「LED投光器」でも、20W・50W・看板用は目的が別物。用途で選び分けます。
          </ConclusionBox>
          <ArticleTable
            head={["比較項目", "20Wクラス", "50Wクラス", "看板照明用LED"]}
            rows={[
              ["主な用途", "手元・小範囲・補助", "屋外作業・広めの作業場", "看板・店舗外観"],
              ["向いている場所", "倉庫・作業台・足場", "工事現場・駐車場・資材置場", "店舗・施設・看板面"],
              ["明るさ目安", "約2500lm前後", "約4500〜6500lm", "看板サイズで選定"],
              ["選び方の軸", "近距離の見やすさ", "広範囲の明るさ", "配光・色温度・見た目"],
              ["注意点", "広範囲には不足の場合あり", "まぶしさ・影に注意", "作業用とは目的が違う"],
            ]}
          />
        </ArticleSection>

        <ArticleSection>
          <H2>投光器の明るさ選びチェックリスト</H2>
          <ConclusionBox>
            購入前にこの10項目を確認すれば、「明るすぎ・暗すぎ・使いにくい」の失敗を防げます。
          </ConclusionBox>
          <ArticleTable
            head={["チェック項目", "確認内容"]}
            rows={[
              ["用途", "手元・屋外・駐車場・看板のどれか"],
              ["必要な範囲", "狭い範囲か、広範囲か"],
              ["明るさ", "20W／50W／看板照明用か"],
              ["設置高さ", "床置きか、高い位置からか"],
              ["照射角度", "広く照らすか、遠くへ飛ばすか"],
              ["まぶしさ", "作業者・通行人・近隣に光が入らないか"],
              ["影", "手元・足元に強い影が出ないか"],
              ["屋外対応", "防水・防塵（IP）を確認したか"],
              ["電源", "5m/10mコード・アース付きが必要か"],
              ["看板用途", "色温度・本体色・配光角度を確認したか"],
            ]}
          />
        </ArticleSection>

        <FaqSection faq={FAQ} />

        <ArticleSection>
          <H2>まとめ</H2>
          <LeadMuted>
            投光器のルーメン目安は、照らしたい範囲と用途で変わります。手元や狭い範囲なら20Wクラス（約2500lm目安）、屋外や広めの作業場なら50Wクラス（約4500〜6500lm目安）、さらに広範囲なら三脚や2灯タイプが候補です。ただしルーメンだけで選ぶと失敗しがち。設置高さ・照射角度・まぶしさ・影・防水・コード長も確認し、作業面が十分に見えるかで判断しましょう。看板や店舗外観を照らす場合は、作業用投光器ではなく、看板照明用LED（ビューフラッド）も検討してください。
          </LeadMuted>
        </ArticleSection>

        <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
          <h2 className="text-2xl font-black text-white">
            投光器の明るさで迷ったら、用途別にLED投光器を確認しませんか？
          </h2>
          <p className="mt-3 text-footer-muted">
            20W・50W・三脚タイプ・バイスタイプ・看板照明用LEDなど、投光器は用途で選ぶべき明るさと形状が変わります。作業場所・設置方法・照射範囲・防水性能を確認しながら、現場に合うLED投光器を選びましょう。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={categoryHref(CATEGORY.ledFloodlight, "yahoo")}
              target="_blank"
              rel="nofollow sponsored noopener"
              className={LIST_CTA_CLASS}
            >
              LED投光器一覧へ
            </a>
            <a
              href={categoryHref(CATEGORY.signLight, "yahoo")}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              看板照明一覧へ
            </a>
          </div>
        </section>

        <RelatedArticles items={RELATED} />

        <Disclaimer extra="明るさ（ルーメン）・防水・適合・保証は各商品ページの最新情報をご確認ください。電源工事を伴う設置は電気工事士などの有資格者・専門業者へご依頼ください。" />
      </ArticleContent>
    </ArticleLayout>
  );
}
