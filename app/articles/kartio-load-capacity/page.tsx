import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { ProductCard } from "@/components/work/product-card";
import { buildUrl, STORE_LINKS } from "@/lib/product-links";

const SLUG = "kartio-load-capacity";
const YQ = STORE_LINKS.yahoo;

export const metadata: Metadata = {
  title:
    "カルティオは何kgまで載せられる？均等荷重200kgの正しい意味と過積載のリスク｜作業用品ナビ",
  description:
    "カルティオの耐荷重は均等荷重200kg。その正しい読み方と、過積載だけでなく偏荷重・高積み・斜面使用といったリスクを実務解説。カルティオビッグ・weegoとの耐荷重比較、導入前チェックリスト付き。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "カルティオは何kgまで載せられる？均等荷重200kgの正しい意味と過積載のリスク",
    description:
      "均等荷重200kgの正しい読み方と、偏荷重・高積み・斜面使用などのリスクを実務解説。カルティオビッグ・weegoとの比較付き。",
    type: "article",
  },
};

const STANDARD = [
  {
    id: "167468",
    name: "カルティオ 新型 ブラック MPK-780-BK",
    note: "平坦な屋内中心の汎用運搬に。定番カラー。",
  },
  {
    id: "190479",
    name: "カルティオ 新型 ブルー MPK-780-B",
    note: "色で部署・用途を分けたい現場に。",
  },
];

const STOPPER = [
  {
    id: "190475",
    name: "カルティオ 新型 ブラック スチールストッパー付 MPK780BKSS",
    note: "停車中の動き出しを抑えたい現場に。",
  },
  {
    id: "190476",
    name: "カルティオ 新型 オリーブ スチールストッパー付 MPK780ODSS",
    note: "停車固定したい現場に。カラーで使い分け。",
  },
];

const BIG = [
  {
    id: "159749",
    name: "カルティオビッグ 固定ハンドル ブラック MPK-900-BK",
    note: "重量物・大きい荷を運ぶ現場に（400kgクラス）。",
  },
  {
    id: "216708",
    name: "カルティオビッグ 折畳 900×600 ストッパー付 黒 MPK-906-BK-S",
    note: "折りたためて保管しやすい。停車固定も。",
  },
];

const WEEGO = [
  {
    id: "159715",
    name: "カルティオミニ weego 伸縮折りたたみハンドル ピンク WP-2G-P",
    note: "軽い荷・小物の運搬、取り回し重視に（100kgクラス）。",
  },
  {
    id: "159718",
    name: "カルティオミニ weego 伸縮折畳みハンドル ブラック WP-2G-BK-JS",
    note: "軽作業・小型用途に。落ち着いたカラー。",
  },
];

const SAFETY_SHOES = [
  {
    id: "155406",
    name: "安全スニーカー 紐タイプ",
    note: "見た目・フィット感重視。",
  },
  {
    id: "155335",
    name: "安全スニーカー BOAタイプ",
    note: "素早い着脱・フィット調整。",
  },
  {
    id: "155361",
    name: "安全スニーカー 面ファスナータイプ",
    note: "手袋着用・着脱頻度が多い現場に。",
  },
  {
    id: "155329",
    name: "安全スニーカー BOAタイプ（色/サイズ違い）",
    note: "BOAタイプの候補。",
  },
];

const CATEGORY_LINKS = [
  {
    label: "運搬台車 一覧",
    url: `${YQ}b1bfc8c2c2.html`,
    uc: "cat_daisya",
  },
  {
    label: "トラスコ中山 一覧",
    url: `${YQ}a5c8a5e9a5.html`,
    uc: "cat_trusco",
  },
];

const RELATED_ARTICLES = [
  {
    slug: "caritio-720-780-compare",
    title: "カルティオ MPK-720とMPK-780の違い｜軽量台車の選び方",
  },
  {
    slug: "trusco-hand-pallet-erabikata",
    title: "トラスコのハンドパレットの選び方｜フォーク長・能力・低床の違い",
  },
  {
    slug: "safety-shoes-jis-jsaa",
    title: "安全靴・プロスニーカーの違い｜JIS T8101とJSAA規格の見方",
  },
];

const FAQ = [
  {
    q: "カルティオは何kgまで載せられますか？",
    a: "新型カルティオ MPK-780は均等荷重200kgです。ただし「均等に平らに載せたとき」の上限で、偏った載せ方や高積みでは数値以内でも不安定になります。",
  },
  {
    q: "「均等荷重」とはどういう意味ですか？",
    a: "荷台全体に荷物を均一に分散させて載せたときに支えられる重さのことです。片寄せ・一点集中で載せると、同じ総重量でも局所的な負担が大きくなります。",
  },
  {
    q: "200kgを少しだけ超えても大丈夫ですか？",
    a: "均等荷重以内で使うのが基本です。超える場合は、より耐荷重の大きいカルティオビッグ（400kgクラス）などの検討をおすすめします。具体的な可否は取扱説明書・使用条件をご確認ください。",
  },
  {
    q: "過積載以外に注意することはありますか？",
    a: "偏荷重（片寄り）、高積み（腰の高さ以上）、斜面・坂・凸凹での使用、急旋回などが案内されています。重さだけでなく載せ方・使う場所にも注意が必要です。",
  },
  {
    q: "カルティオで足りないときはどうすればいい？",
    a: "重量物・大きい荷ならカルティオビッグ（400kgクラス）、逆に軽い小物中心で取り回し重視ならweego（100kgクラス）が候補です。運ぶ荷物に合わせて選び分けてください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "カルティオは何kgまで載せられる？均等荷重200kgの正しい意味と過積載のリスク",
  description:
    "カルティオの耐荷重は均等荷重200kg。その正しい読み方と、過積載だけでなく偏荷重・高積み・斜面使用といったリスクを実務解説。",
  datePublished: "2026-06-12",
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

type ProductItem = {
  id: string;
  name: string;
  note: string;
};

function yahooProductUrl(id: string) {
  return `${YQ}${id}.html`;
}

function ConclusionBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 border-2 border-conclusion-border bg-conclusion-bg px-5 py-4 text-base leading-relaxed text-foreground">
      {children}
    </div>
  );
}

function ProductGrid({
  items,
  cols = 2,
}: {
  items: ProductItem[];
  cols?: 2 | 3;
}) {
  const gridClass =
    cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`mt-6 grid gap-4 ${gridClass}`}>
      {items.map((p) => (
        <ProductCard
          key={p.id}
          name={p.name}
          imageId={p.id}
          links={{ yahoo: yahooProductUrl(p.id) }}
          utmContent={`${SLUG}_${p.id}`}
          note={p.note}
        />
      ))}
    </div>
  );
}

function ComparisonTable({
  head,
  rows,
  note,
}: {
  head: string[];
  rows: string[][];
  note?: string;
}) {
  return (
    <>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-[640px] w-full border-collapse text-left text-base">
          <thead>
            <tr className="bg-foreground text-brand">
              {head.map((h) => (
                <th key={h} className="px-4 py-3 font-bold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-border bg-card">
                {r.map((c, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3 ${j === 0 ? "font-bold text-foreground" : ""}`}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <p className="mt-4 text-sm text-muted-foreground">{note}</p>
      )}
    </>
  );
}

export default function KartioLoadCapacityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <SiteHeader />

      <main className="flex-1">
        <div className="border-b border-border bg-card py-3">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                トップ
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/articles" className="hover:text-primary">
                記事一覧
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground">カルティオの耐荷重</span>
            </nav>
          </div>
        </div>

        <section className="bg-card py-12">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-category-howto-bg px-3 py-1 text-sm font-bold text-accent-amber-foreground">
                使い方・コツ
              </span>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>約9分で読める</span>
              </div>
            </div>
            <h1 className="text-3xl font-black leading-tight text-foreground sm:text-4xl">
              カルティオは何kgまで載せられる？
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              均等荷重200kgの正しい意味と過積載のリスク
            </p>
          </div>
        </section>

        <section className="bg-card pb-10">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/kartio-load-capacity-hero.jpg"
                alt="倉庫でカルティオ台車の積載イメージを確認する担当者"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            「カルティオって何kgまで載せていいの？」という質問はとても多いのですが、答えの「200kg」をどう読むかを知らないと、スペック内でも事故が起きます。本記事ではカルティオの耐荷重200kgの正しい意味を整理したうえで、過積載だけでなく偏荷重・高積み・斜面使用といった見落としがちなリスク、そして「自社の現場で200kgは足りるのか」までを実務目線でまとめました。
          </p>

          <ConclusionBox>
            <strong>結論：</strong>
            カルティオ（新型MPK-780）の耐荷重は「均等荷重200kg」です。ただしこれは荷物を平らに均等に載せたときの値で、200kgまでなら何でも安全という意味ではありません。荷物が片寄る「偏荷重」、高く積む「高積み」、斜面での使用なども事故につながります。200kgで足りないならカルティオビッグ（400kgクラス）、軽作業・小型用途ならweego（100kgクラス）が候補です。
          </ConclusionBox>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              カルティオの耐荷重は何kg？
            </h2>
            <ConclusionBox>
              新型カルティオ MPK-780の耐荷重は「均等荷重200kg」。荷台サイズは780×490mm、本体質量は6.8kgです。
            </ConclusionBox>
            <p className="text-lg leading-relaxed text-muted-foreground">
              まず基本スペックを押さえます。TRUSCO公式によると、新型カルティオ
              MPK-780は次のとおりです。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              カルティオ耐荷重の基本比較表
            </h3>
            <ComparisonTable
              head={["項目", "新型カルティオ MPK-780"]}
              rows={[
                ["耐荷重", "均等荷重 200kg"],
                ["荷台サイズ", "780 × 490mm"],
                ["本体質量", "6.8kg"],
                ["軽量化", "従来8.4kg → 6.8kg（1.6kg軽量化）"],
                ["特長", "耐荷重200kgクラスの台車では最軽量（TRUSCO公表）"],
              ]}
              note="スペックは変動する可能性があります。最新値は各商品ページでご確認ください。"
            />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              新型は従来から1.6kg軽くなり、
              <strong className="text-foreground">
                耐荷重200kgクラスでは最軽量
              </strong>
              とされています（TRUSCO公式プレスリリース）。大事なのは「200kg」という数字より、それが
              <strong className="text-foreground">
                「均等荷重」200kgである
              </strong>
              という点です。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              「均等荷重200kg」とはどういう意味？
            </h2>
            <ConclusionBox>
              均等荷重とは「荷台全体に荷物を平らに、均等に載せたときに支えられる重さ」のこと。同じ200kgでも、片寄って載せたり一点に集中させたりすると、実質的な負担は大きくなります。
            </ConclusionBox>
            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/kartio-even-load-concept.jpg"
                alt="台車に荷物を均等に載せるイメージ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              「均等荷重200kg」は、
              <strong className="text-foreground">
                荷台の上に重さが均一に分散した状態で200kgまで
              </strong>
              、という意味です。逆に言えば、「どんな載せ方でも200kgなら大丈夫」を保証するものではありません。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              均等荷重200kgの読み方表
            </h3>
            <ComparisonTable
              head={["載せ方", "イメージ", "注意点"]}
              rows={[
                ["均等に平らに載せる", "◎ 想定された使い方", "200kg以内が目安"],
                [
                  "片側・端に寄せて載せる（偏荷重）",
                  "△ 負担が偏る",
                  "数値以内でも不安定・破損リスク",
                ],
                [
                  "一点に集中して載せる",
                  "△ 局所に荷重集中",
                  "荷台や車輪に過度な負担",
                ],
                [
                  "高く積み上げる（高積み）",
                  "△ 重心が上がる",
                  "転倒・荷崩れリスク",
                ],
              ]}
            />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              「均等荷重」は
              <strong className="text-foreground">
                “正しく載せたときの上限”
              </strong>
              を示しているのであって、載せ方が悪ければ200kg未満でもトラブルは起こり得ます。数値だけでなく「どう載せるか」までセットで考えるのが、台車を安全に長く使うコツです。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              過積載だけではない｜カルティオで注意したい5つのリスク
            </h2>
            <ConclusionBox>
              リスクは「重さオーバー」だけではありません。偏荷重・高積み・斜面使用・急旋回など、使い方に関わる注意点も同じくらい重要です。
            </ConclusionBox>
            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/kartio-overload-risk.jpg"
                alt="台車の過積載や偏荷重の危険を示すイメージ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              TRUSCOの取扱説明書では安全に使うための注意が案内されています。これを5つに整理しました。
            </p>
            <ul className="mt-4 space-y-3 text-lg leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  1. 過積載（均等荷重オーバー）
                </strong>
                ：200kgを超えて載せること。本体や車輪に想定以上の負担。均等荷重以内で使うのが基本です。
              </li>
              <li>
                <strong className="text-foreground">
                  2. 偏荷重（荷物の片寄り）
                </strong>
                ：重い荷を片側・端に寄せること。総重量が200kg未満でも一部に負担が集中。偏りのある載せ方を避けます。
              </li>
              <li>
                <strong className="text-foreground">
                  3. 高積み（積み上げすぎ）
                </strong>
                ：腰の高さ以上に積むと重心が上がり転倒・荷崩れの危険。腰の高さ以上に積み上げないのが目安です。
              </li>
              <li>
                <strong className="text-foreground">
                  4. 斜面・凸凹での使用
                </strong>
                ：斜面・坂道・凸凹のある地面は滑走や転倒につながります。これらでの使用を避けます。
              </li>
              <li>
                <strong className="text-foreground">
                  5. 急旋回・乱暴な操作
                </strong>
                ：急に向きを変えると荷崩れや横転を招きます。急旋回せずゆっくり扱います。
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              これらは「当たり前」に見えて、忙しい現場ほど起こりがちです。安全な使い方は最終的に商品の取扱説明書・使用条件に従い、社内の運用ルールとあわせて確認してください。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              カルティオが選ばれる理由｜軽量台車のメリット
            </h2>
            <ConclusionBox>
              カルティオの強みは「軽さ」。本体6.8kgで200kgクラス最軽量とされ、持ち運び・積み下ろし・共用がラクなことが現場で支持される理由です。
            </ConclusionBox>
            <p className="text-lg leading-relaxed text-muted-foreground">
              正しく使えばカルティオは非常に扱いやすい台車です。最大の魅力は軽さで、本体6.8kgは
              <strong className="text-foreground">
                耐荷重200kgクラスで最軽量
              </strong>
              とされています。軽さは荷物を運ぶ性能ではなく「人の負担」に効きます。
            </p>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>営業車・ルートバンへの積み下ろしがラク</li>
              <li>階段やフロア間の持ち運びの負担が軽い</li>
              <li>体力差を問わず誰でも扱え、共用しやすい</li>
              <li>空台車の取り回し（寄せる・向きを変える）が軽快</li>
            </ul>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              標準カルティオ（均等荷重200kg・汎用）
            </h3>
            <ProductGrid items={STANDARD} cols={2} />
            <p className="mt-4 text-sm text-muted-foreground">
              ※平坦な屋内での標準的な運搬向け。使用条件は取扱説明書をご確認ください。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              200kgで足りる？足りない？現場別の判断基準
            </h2>
            <ConclusionBox>
              「運ぶ荷物の最大重量」と「載せ方・現場環境」で判断します。平坦な屋内で200kg以内を均等に運ぶならカルティオで十分。重量物や偏りやすい荷ならビッグ、軽作業・小型用途ならweegoが向きます。
            </ConclusionBox>
            <h3 className="mt-6 text-xl font-bold text-foreground">
              用途別の選び方早見表
            </h3>
            <ComparisonTable
              head={["現場・運ぶもの", "向きやすいモデル", "理由"]}
              rows={[
                [
                  "平坦な屋内・200kg以内を均等に",
                  "標準カルティオ",
                  "軽くて扱いやすく汎用的",
                ],
                [
                  "ストッパーで停車を固定したい",
                  "カルティオ ストッパー付",
                  "停車中の動き出しを抑える",
                ],
                [
                  "重量物・200kgを超える荷",
                  "カルティオビッグ（400kgクラス）",
                  "余裕のある耐荷重",
                ],
                ["大きい荷・かさばる荷", "カルティオビッグ", "荷台が大きい"],
                [
                  "軽い荷・小型・取り回し最優先",
                  "weego（100kgクラス）",
                  "小回り・コンパクト",
                ],
                [
                  "段差・坂・屋外が多い",
                  "用途に応じ要検討",
                  "カルティオは平坦・屋内が前提",
                ],
              ]}
              note="あくまで一般的な目安です。実際の選定は運ぶ荷物・載せ方・現場環境・商品仕様に基づいてご判断ください。"
            />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              ポイントは
              <strong className="text-foreground">
                「最大荷重」と「載せ方の安定性」の両方
              </strong>
              を見ること。200kg以内でも偏りやすい荷・かさばる荷なら、荷台の大きいビッグのほうが安定することもあります。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              カルティオ ストッパー付き（停車を固定したい現場）
            </h3>
            <ProductGrid items={STOPPER} cols={2} />
            <p className="mt-4 text-sm text-muted-foreground">
              ※傾斜のある場所での使用可否は取扱説明書・使用条件をご確認ください。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              カルティオ・カルティオビッグ・weegoの耐荷重比較
            </h2>
            <ConclusionBox>
              同じカルティオシリーズでも耐荷重クラスが違います。標準=200kg、ビッグ=400kgクラス、weego=100kgクラス。運ぶ重さと用途で選び分けます。
            </ConclusionBox>
            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/kartio-series-comparison.jpg"
                alt="カルティオ・カルティオビッグ・weegoのサイズ感比較イメージ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>
            <ComparisonTable
              head={["モデル", "耐荷重クラス", "向く用途"]}
              rows={[
                [
                  "weego（カルティオミニ）",
                  "均等荷重100kgクラス",
                  "軽い荷・小型・取り回し重視。オフィス・店舗の小物運搬",
                ],
                [
                  "標準カルティオ",
                  "均等荷重200kg",
                  "一般的な屋内運搬の汎用機",
                ],
                [
                  "カルティオビッグ",
                  "均等荷重400kgクラス",
                  "重量物・大きい荷。製造・倉庫の主力運搬",
                ],
              ]}
              note="耐荷重はクラスの目安です。各モデルの正確な値・サイズは商品ページでご確認ください。"
            />
            <h3 className="mt-8 text-xl font-bold text-foreground">
              カルティオビッグ（均等荷重400kgクラス・重量物/大きい荷）
            </h3>
            <ProductGrid items={BIG} cols={2} />
            <h3 className="mt-8 text-xl font-bold text-foreground">
              weego／カルティオミニ（均等荷重100kgクラス・軽作業/小型）
            </h3>
            <ProductGrid items={WEEGO} cols={2} />
            <p className="mt-4 text-sm text-muted-foreground">
              ※耐荷重・サイズが用途に合うか商品ページでご確認ください。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              法人導入でよくある失敗例
            </h2>
            <ConclusionBox>
              「数値だけ見て選ぶ」「載せ方を周知しない」「全部1モデルで統一」が典型的な失敗。耐荷重の意味と現場の運用までセットで考えると防げます。
            </ConclusionBox>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  「200kg」だけで判断
                </strong>
                ：偏りやすい荷で、数値以内でも不安定だった。
              </li>
              <li>
                <strong className="text-foreground">載せ方を周知しない</strong>
                ：均等荷重の意味が共有されず、高積み・偏荷重が常態化。
              </li>
              <li>
                <strong className="text-foreground">
                  全現場を標準で統一
                </strong>
                ：重量物現場で能力不足、軽作業現場で大きすぎ、と両方で不満。
              </li>
              <li>
                <strong className="text-foreground">
                  使用環境を考慮しない
                </strong>
                ：段差・坂で平坦前提の台車を使い、扱いにくさやリスクが発生。
              </li>
              <li>
                <strong className="text-foreground">
                  ストッパー要否を検討しない
                </strong>
                ：停車固定が必要な現場で後から買い直し。
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              防ぐコツは{" "}
              <strong className="text-foreground">
                ①運ぶ荷物の重さ・形・載せ方 → ②現場環境（平坦/段差/坂） →
                ③耐荷重クラスとストッパー要否 → ④載せ方のルール周知
              </strong>{" "}
              の順。機種選びと使い方の周知は両輪です。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              課題別に見るおすすめ導線
            </h2>
            <ConclusionBox>
              「重さ」「載せ方の安定」「停車固定」「取り回し」のどれを優先するかで選びます。迷ったら標準カルティオ、重いならビッグ、軽い小物ならweegoが基本です。
            </ConclusionBox>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">まず汎用で使いたい</strong>
                ：標準カルティオ（167468 / 190479）
              </li>
              <li>
                <strong className="text-foreground">
                  停車を確実に固定したい
                </strong>
                ：カルティオ ストッパー付（190475 / 190476）
              </li>
              <li>
                <strong className="text-foreground">
                  200kgでは足りない・大きい荷
                </strong>
                ：カルティオビッグ 400kgクラス（159749 / 216708）
              </li>
              <li>
                <strong className="text-foreground">
                  軽い荷・小型・取り回し重視
                </strong>
                ：weego 100kgクラス（159715 / 159718）
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
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
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              運搬作業では足元の安全も大切です。重い荷を扱う現場では、つま先を守る安全靴・プロスニーカーもあわせて見直しておくと安心です。
            </p>
            <h3 className="mt-6 text-xl font-bold text-foreground">
              あわせて検討したい安全靴・プロスニーカー
            </h3>
            <ProductGrid items={SAFETY_SHOES} cols={2} />
            <p className="mt-4 text-sm text-muted-foreground">
              ※規格区分（JIS/JSAA）や適合は商品ページでご確認ください。
              <Link
                href="/articles/safety-shoes-jis-jsaa"
                className="ml-1 font-bold text-primary hover:underline"
              >
                安全靴の選び方はこちら
              </Link>
              。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              導入前チェックリスト
            </h2>
            <ul className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground">
              {[
                "運ぶ荷物の最大重量は何kgか？（200kg以内か）",
                "荷物は均等に載せられる形か？（偏りやすくないか）",
                "高く積み上げる必要はないか？（腰の高さ以上にならないか）",
                "使う場所は平坦な屋内か？（段差・坂・凸凹はないか）",
                "停車を固定したい場面はあるか？（ストッパー要否）",
                "200kgで足りない／大きすぎる場合、ビッグ・weegoを検討したか？",
                "現場に均等荷重の意味・載せ方のルールを周知できるか？",
                "必要台数・納期・予算を確認したか？（在庫は変動するため早めに）",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden="true">☑️</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              よくある質問（FAQ）
            </h2>
            <div className="mt-6 space-y-3">
              {FAQ.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-border bg-card"
                >
                  <summary className="cursor-pointer list-none px-6 py-4 font-bold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {f.q}
                      <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-open:rotate-90" />
                    </span>
                  </summary>
                  <div className="border-t border-border px-6 py-4 text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">まとめ</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              「カルティオは200kgまで載せられる」は事実ですが、正しくは
              <strong className="text-foreground">「均等荷重200kg」</strong>
              です。
            </p>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                ・均等荷重は“平らに均等に載せたとき”の上限。載せ方が悪ければ数値以内でもリスクがある
              </li>
              <li>
                ・注意すべきは過積載だけでなく、
                <strong className="text-foreground">
                  偏荷重・高積み・斜面使用・急旋回
                </strong>
                も
              </li>
              <li>
                ・軽さ（本体6.8kg・200kgクラス最軽量）が現場で支持される理由
              </li>
              <li>
                ・足りないならカルティオビッグ（400kgクラス）、軽作業・小型ならweego（100kgクラス）
              </li>
              <li>・機種選びと「載せ方のルール周知」はセットで考える</li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              耐荷重・仕様・在庫は変動するため、最終的な選定と使用方法は各商品ページの仕様・取扱説明書・使用条件、社内の運用ルールをご確認のうえご判断ください。
            </p>
          </section>

          <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
            <h2 className="text-2xl font-black text-white">
              カルティオシリーズを見比べる
            </h2>
            <p className="mt-3 text-footer-muted">
              仕様・在庫・価格は商品ページでご確認ください。
            </p>
            <a
              href={buildUrl(yahooProductUrl("167468"), `${SLUG}_cta`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover"
            >
              商品ページで仕様・在庫を確認する
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-black text-foreground">関連記事</h2>
            <ul className="mt-4 space-y-2">
              {RELATED_ARTICLES.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
                  >
                    {article.title}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-10 text-center">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-bold text-foreground transition hover:border-primary/30"
            >
              記事一覧に戻る
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-12 border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground">
            運営：
            <a
              href="https://trade-sign.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:underline"
            >
              株式会社トレード
            </a>
            （グリーンクロスグループ）｜本記事は一般的な情報提供を目的としたものです。耐荷重・価格・在庫・仕様は変動する場合があり、最新情報は各商品ページでご確認ください。安全な使用方法・使用条件については、メーカーの取扱説明書および仕様、社内の運用ルールに従ってください。
          </p>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
