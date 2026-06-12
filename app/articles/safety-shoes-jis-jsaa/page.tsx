import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { ProductCard } from "@/components/work/product-card";
import { ARTICLES } from "@/lib/articles";
import { buildUrl, STORE_LINKS } from "@/lib/product-links";

const SLUG = "safety-shoes-jis-jsaa";
const YQ = STORE_LINKS.yahoo;

export const metadata: Metadata = {
  title:
    "安全靴・プロテクティブスニーカーの違い｜JIS T8101とJSAA規格の見方｜作業用品ナビ",
  description:
    "安全靴(JIS T8101)とプロテクティブスニーカー(JSAA認定)の違いを、規格の見方・現場別早見表・法人導入チェックリストで整理。A種B種の違いや選定ミスの防ぎ方まで現場で使える形で解説します。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "安全靴・プロテクティブスニーカーの違い｜JIS T8101とJSAA規格の見方",
    description:
      "安全靴(JIS T8101)とプロテクティブスニーカー(JSAA認定)の違いを、規格の見方・現場別早見表・法人導入チェックリストで整理。",
    type: "article",
  },
};

const NB_LACE = [
  {
    id: "155406",
    name: "ニューバランス 安全スニーカー 紐タイプ",
    note: "見た目・フィット感重視。デザイン性も求める店舗・軽作業に。着脱に手間がかかる点は留意。",
  },
  {
    id: "155420",
    name: "ニューバランス 安全スニーカー 紐タイプ（デザイン重視）",
    note: "デザイン性を重視する現場向けの紐タイプ。",
  },
];

const NB_BOA = [
  {
    id: "155335",
    name: "ニューバランス 安全スニーカー BOAタイプ",
    note: "ダイヤルで素早く着脱・フィット調整。脱ぎ履きが多い現場に。",
  },
  {
    id: "155329",
    name: "ニューバランス 安全スニーカー BOAタイプ（サイズ/色違い）",
    note: "BOAタイプのサイズ・カラー候補。",
  },
];

const NB_VELCRO = [
  {
    id: "155361",
    name: "ニューバランス 安全スニーカー 面ファスナータイプ",
    note: "ワンタッチ着脱。手袋着用・着脱頻度が多い現場に。",
  },
  {
    id: "155391",
    name: "ニューバランス 安全スニーカー 面ファスナー（カラー展開）",
    note: "色で部署を分けたい現場に。",
  },
  {
    id: "155376",
    name: "ニューバランス 安全スニーカー 面ファスナー（現場/倉庫用）",
    note: "現場用・倉庫用の面ファスナータイプ。",
  },
];

const TRUSCO_SHOES = [
  {
    id: "236874",
    name: "JIS規格 安全短靴",
    note: "標準的な防護性能をコストを抑えて。S種など適合区分は表示確認。",
  },
  {
    id: "236881",
    name: "JIS規格 安全短靴（候補）",
    note: "一般的な製造・物流現場向けの安全短靴。",
  },
  {
    id: "237205",
    name: "軽量安全短靴",
    note: "軽さを求める一般作業に。必要な作業区分を確認。",
  },
];

const TRUSCO_BOOTS = [
  {
    id: "235355",
    name: "耐油/防水 長靴（水・油まわり）",
    note: "水場・油を扱う床に。耐油・防滑は仕様確認。",
  },
  {
    id: "235356",
    name: "耐油/防水 長靴（候補）",
    note: "水・油まわりの現場向け長靴候補。",
  },
  {
    id: "236857",
    name: "メッシュブーツ",
    note: "通気性を求める現場の足元用品。",
  },
];

const TRUSCO_ACC = [
  {
    id: "235217",
    name: "つま先・甲まわり保護用品",
    note: "既存の靴に追加保護を足したい現場に。靴との相性を確認。",
  },
  {
    id: "234829",
    name: "インソール",
    note: "長時間作業の快適性補助。サイズ・相性を確認。",
  },
];

const CATEGORY_LINKS = [
  {
    label: "保護具 一覧",
    url: `${YQ}caddb8eeb6.html`,
    uc: "cat_ppe",
  },
  {
    label: "工具箱 一覧",
    url: `${YQ}9129bf6abc8.html`,
    uc: "cat_toolbox",
  },
  {
    label: "作業台 一覧",
    url: `${YQ}e2ea8bb6c2c.html`,
    uc: "cat_workbench",
  },
  {
    label: "物品棚 一覧",
    url: `${YQ}caaac9cac3.html`,
    uc: "cat_shelf",
  },
];

const FAQ = [
  {
    q: "安全靴とプロテクティブスニーカーの一番の違いは何ですか？",
    a: "適合する規格です。安全靴はJIS T8101、プロテクティブスニーカーはJSAAの認定基準に合格しています。素材や重さ、想定する作業の重さが異なります。",
  },
  {
    q: "スニーカー型でも安全性能は十分ですか？",
    a: "JSAA A種は安全靴JIS T8101のS種（普通作業用）と同じ試験方法で評価されており、普通作業用相当の性能をクリアしています。ただし耐久性や現場指定の確認は必要です。",
  },
  {
    q: "「安全靴」という商品名なのにJSAA認定と書かれているのはなぜ？",
    a: "「安全靴」が商品名・通称として使われる一方、規格上はJSAA認定のプロスニーカーである場合があるためです。発注時は規格表示を必ず確認してください。",
  },
  {
    q: "プロスニーカーが向かない現場はありますか？",
    a: "油・薬品の多い床や、底の摩耗が激しい過酷な路面では、底の剥がれ・摩耗・甲被の破れなど耐久面で劣る場合があります。こうした現場ではJIS品や耐油タイプが安心です。",
  },
  {
    q: "現場で求められる規格はどう決まりますか？",
    a: "作業内容に応じて事業者が適切な履物を定めるのが基本で、元請けの指定や社内の安全ルールで決まることが多いです。まず現場ルールをご確認ください。",
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
    "安全靴・プロテクティブスニーカーの違い｜JIS T8101とJSAA規格の見方",
  description:
    "安全靴(JIS T8101)とプロテクティブスニーカー(JSAA認定)の違いを、規格の見方・現場別早見表・法人導入チェックリストで整理。",
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

const relatedArticles = ARTICLES.filter(
  (a) => a.slug !== SLUG && a.available
).slice(0, 3);

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
  cols = 3,
}: {
  items: ProductItem[];
  cols?: 2 | 3;
}) {
  const gridClass =
    cols === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

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

export default function SafetyShoesJisJsaaPage() {
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
              <span className="text-foreground">
                安全靴・プロスニーカーの違い
              </span>
            </nav>
          </div>
        </div>

        <section className="bg-card py-12">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-category-compare-bg px-3 py-1 text-sm font-bold text-category-compare">
                比較・違い
              </span>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>約10分で読める</span>
              </div>
            </div>
            <h1 className="text-3xl font-black leading-tight text-foreground sm:text-4xl">
              安全靴・プロテクティブスニーカーの違い
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              JIS T8101とJSAA規格の見方
            </p>
          </div>
        </section>

        <section className="bg-card pb-10">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/safety-shoes-jis-jsaa-hero.jpg"
                alt="安全靴とプロテクティブスニーカーを比較する法人向け作業靴のイメージ"
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
            「安全靴を支給したい」と商品を探すと、見た目はスニーカーなのに“安全靴”と書かれていたり、“プロスニーカー”という別の呼び方が出てきたりして混乱しがちです。これは商品名と規格名のズレが原因です。本記事ではJIS
            T8101とJSAAという2つの規格の見方を整理し、法人担当者・現場責任者・購買担当者が「自社の現場ならどれを選ぶべきか」を判断できるようにまとめました。
          </p>

          <ConclusionBox>
            <strong>結論：</strong>
            「安全靴」はJIS
            T8101に合格した靴、「プロテクティブスニーカー（プロスニーカー）」はJSAAが認定したスニーカー型の作業靴です。違いは“どの規格をクリアしているか”。重い物・厳しい床ならJIS安全靴、軽さや履き心地を優先する軽作業ならJSAA認定品が向きます。商品名の「安全靴」と規格上の「安全靴」がズレることがあるため、選定時は必ず規格表示を確認しましょう。
          </ConclusionBox>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              安全靴とプロテクティブスニーカーの違いは？
            </h2>
            <ConclusionBox>
              一番の違いは「適合している規格」です。JIS
              T8101＝安全靴、JSAA認定＝プロテクティブスニーカー。素材・重さ・想定する作業の重さが変わります。
            </ConclusionBox>
            <p className="text-lg leading-relaxed text-muted-foreground">
              呼び方が複数あって混乱しやすいので、まず用語を整理します。
            </p>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">安全靴</strong>：JISの{" "}
                <strong className="text-foreground">JIS T8101</strong>{" "}
                に合格した靴の一般的な呼び名。つま先に先芯が入っています。
              </li>
              <li>
                <strong className="text-foreground">
                  プロテクティブスニーカー（プロスニーカー）
                </strong>
                ：JSAAが定めた基準を満たした
                <strong className="text-foreground">
                  スニーカー調の作業靴
                </strong>
                。人工皮革・合成皮革製が主流。
              </li>
              <li>
                <strong className="text-foreground">セーフティシューズ</strong>
                ：JIS品もJSAA品も含む一般的な総称。規格名ではありません。
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              「セーフティシューズ」は広いくくり、その中に「JISの安全靴」と「JSAA認定のプロスニーカー」がある、という関係です。
            </p>

            <h3 className="mt-8 text-xl font-bold text-foreground">
              安全靴・プロテクティブスニーカー・セーフティシューズの違い比較表
            </h3>
            <ComparisonTable
              head={[
                "項目",
                "安全靴",
                "プロテクティブスニーカー",
                "セーフティシューズ",
              ]}
              rows={[
                [
                  "根拠となる規格",
                  "JIS T8101",
                  "JSAA認定",
                  "規格名ではない総称",
                ],
                [
                  "認定・制定",
                  "日本産業規格",
                  "日本保安用品協会(JSAA)",
                  "－",
                ],
                ["主な素材", "革・総ゴム など", "人工皮革・合成皮革が主流", "製品による"],
                ["見た目", "革靴調が多い", "スニーカー調", "さまざま"],
                ["重さ", "やや重め", "軽量", "製品による"],
                [
                  "想定作業",
                  "軽〜超重作業まで幅広い",
                  "軽作業中心(A種は普通作業用相当)",
                  "製品による",
                ],
              ]}
              note="区分や性能は製品ごとに異なります。具体的な性能は各商品の規格表示・仕様でご確認ください。"
            />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              ポイントは、
              <strong className="text-foreground">
                「安全靴」という商品名でも規格上はJSAA認定のプロスニーカーであるケースがある
              </strong>
              こと。次章で各規格の見方を掘り下げます。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              JIS T8101とは？安全靴の規格をどう見る？
            </h2>
            <ConclusionBox>
              JIS
              T8101は産業標準化法に基づく日本産業規格。作業の重さに応じて「超重作業用・重作業用・普通作業用・軽作業用」の4区分があり、靴の表示記号で見分けます。
            </ConclusionBox>

            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/jis-jsaa-standard-check.jpg"
                alt="作業靴の規格表示を確認するイメージ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              JIS（日本産業規格）は産業標準化法に基づき制定される国の規格です。作業靴に関わるのが{" "}
              <strong className="text-foreground">JIS T8101（安全靴）</strong>
              。2020年の改定で「超重作業用」が加わり、現在は4区分です。
            </p>

            <h3 className="mt-8 text-xl font-bold text-foreground">
              JIS T8101の作業区分表
            </h3>
            <ComparisonTable
              head={["区分", "記号", "イメージ", "想定する現場の例"]}
              rows={[
                [
                  "超重作業用",
                  "U",
                  "最も高い防護性能",
                  "重量物を扱う製鉄・重工業など",
                ],
                [
                  "重作業用",
                  "H",
                  "高い防護性能",
                  "建設・鉱業・重量物運搬など",
                ],
                [
                  "普通作業用",
                  "S",
                  "標準的な防護性能",
                  "一般的な製造・物流現場など",
                ],
                [
                  "軽作業用",
                  "L",
                  "軽めの防護性能",
                  "比較的軽い荷を扱う作業など",
                ],
              ]}
              note="区分は耐衝撃性などの試験条件で分かれます。実際の適合区分は商品の表示でご確認ください。"
            />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              このほか材料区分（革製＝クラスⅠ、総ゴム・総高分子製＝クラスⅡ）や、耐滑性・耐燃料油性・かかと部の衝撃エネルギー吸収性などの付加的性能が記号で表示されます。靴のJISマークと記号で、クリアした性能が分かります。労働安全衛生規則では作業に応じて事業者が適切な履物を定める旨が示されており、現場で求められる区分は社内ルールや元請け指定で決まることが多いため、
              <strong className="text-foreground">
                まず現場ルールの確認
              </strong>
              が出発点です。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              JSAA規格とは？A種・B種の違いをどう見る？
            </h2>
            <ConclusionBox>
              JSAA認定はプロスニーカーの基準。普通作業用「A種」と軽作業用「B種」の2区分で、A種はJISのS種相当、B種はL種相当の試験で評価されます。
            </ConclusionBox>
            <p className="text-lg leading-relaxed text-muted-foreground">
              JSAA規格は公益社団法人日本保安用品協会が定める
              <strong className="text-foreground">
                プロテクティブスニーカーの認定基準
              </strong>
              です。つま先に先芯を備え、一定の安全性能・耐久性を満たしたスニーカー型作業靴に与えられます。
            </p>

            <h3 className="mt-8 text-xl font-bold text-foreground">
              JSAA A種・B種の違い表
            </h3>
            <ComparisonTable
              head={["区分", "呼称", "試験の基準", "想定する作業"]}
              rows={[
                [
                  "A種",
                  "普通作業用",
                  "安全靴JIS T8101 S種の試験方法で試験",
                  "一般的な作業全般",
                ],
                [
                  "B種",
                  "軽作業用",
                  "安全靴JIS T8101 L種の試験方法で試験",
                  "比較的軽い作業",
                ],
              ]}
              note="A種・B種は試験条件が異なります。詳細はJSAAおよび各商品の表示でご確認ください。"
            />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              重要なのは、
              <strong className="text-foreground">
                JSAA A種はJIS安全靴のS種（普通作業用）と同じ試験方法で評価されている
              </strong>
              こと。「スニーカー型だから安全性能が低い」とは一概に言えません。
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              ただし注意点もあります。プロスニーカーは軽量性・デザイン性に優れる一方、
              <strong className="text-foreground">
                厳しい床・路面では底の剥がれ・摩耗・甲被の破れなど耐久面で劣る場合があります
              </strong>
              。油・薬品・ガレキの多い床や長距離歩行の現場では、耐久性や現場指定を踏まえて選ぶ必要があります。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              「安全靴 スニーカー 違い」で迷ったときの判断基準
            </h2>
            <ConclusionBox>
              「現場が求める防護レベル」と「床・路面の厳しさ」の2軸で考えると整理できます。重い物・厳しい床ならJIS、軽作業で軽さ重視ならJSAAが基本線です。
            </ConclusionBox>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">防護レベル</strong>
                ：扱う物が重い・落下リスクが高いほど、JISの上位区分（S→H→U）が必要。
              </li>
              <li>
                <strong className="text-foreground">床・路面の厳しさ</strong>
                ：油・薬品・ガレキ・長距離歩行など過酷なほど、耐久性の高いJIS品が安心。
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              屋内の軽作業・ピッキング・短距離移動が中心なら、軽くて疲れにくいJSAA認定品が現場満足度を高めやすいのが基本線です。ただし
              <strong className="text-foreground">
                現場の指定や社内ルールが最優先
              </strong>
              。「JIS安全靴のみ可」の現場ではプロスニーカーは使えません。選ぶ前に必ず確認しましょう。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              現場別に見る｜安全靴とプロスニーカーの選び方
            </h2>
            <ConclusionBox>
              現場のタイプごとに「重視すべき性能」が変わります。下の早見表を社内の選定基準のたたき台にしてください。
            </ConclusionBox>

            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/worksite-shoes-selection.jpg"
                alt="倉庫や工場で作業靴を用途別に選ぶイメージ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>

            <h3 className="mt-8 text-xl font-bold text-foreground">
              現場別選び方早見表
            </h3>
            <ComparisonTable
              head={["現場・作業", "向きやすいタイプ", "重視する点"]}
              rows={[
                [
                  "建設・土木・重量物運搬",
                  "JIS安全靴(H・U種)",
                  "高い防護性能・耐久性",
                ],
                [
                  "一般的な製造・組立",
                  "JIS安全靴(S種)／JSAA A種",
                  "バランス・現場指定に従う",
                ],
                [
                  "物流倉庫・ピッキング",
                  "JSAA A種",
                  "軽さ・歩きやすさ",
                ],
                [
                  "店舗バックヤード・軽作業",
                  "JSAA A種・B種",
                  "軽さ・着脱のしやすさ",
                ],
                [
                  "油・水・薬品まわり",
                  "JIS品＋耐油/長靴",
                  "耐久性・耐油・防水",
                ],
                [
                  "長時間の立ち仕事・歩行",
                  "軽量タイプ＋インソール",
                  "疲労軽減・フィット感",
                ],
              ]}
              note="あくまで一般的な目安です。実際の選定は現場ルール・作業内容・商品仕様に基づいて行ってください。"
            />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              現場が複数種類ある会社は、
              <strong className="text-foreground">
                現場区分ごとに支給基準を分ける
              </strong>
              のが現実的です。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              法人でまとめて選ぶときの失敗例
            </h2>
            <ConclusionBox>
              「全現場で1モデルに統一」「見た目だけで選定」「規格未確認で発注」が典型的な失敗。現場区分と規格表示の確認で防げます。
            </ConclusionBox>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  全現場を1モデルに統一
                </strong>
                ：軽作業に最適でも重作業では防護不足。逆に全員重作業用だと軽作業者が「重い」と不満を持ち自前の靴を履く。
              </li>
              <li>
                <strong className="text-foreground">
                  見た目・価格だけで選ぶ
                </strong>
                ：「JIS安全靴指定」の現場で使えなかった。
              </li>
              <li>
                <strong className="text-foreground">
                  規格表示を確認せず発注
                </strong>
                ：商品名「安全靴」を信じたら規格上はJSAA B種で要求に届かなかった。
              </li>
              <li>
                <strong className="text-foreground">耐久性を見落とす</strong>
                ：軽量プロスニーカーを油床で使い、早期に底が剥がれ買い替え増。
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              防ぐコツは{" "}
              <strong className="text-foreground">
                ①現場を区分ごとに整理 → ②各区分に必要な規格・性能を決める →
                ③その規格に合う商品を選ぶ
              </strong>{" "}
              の順。商品起点ではなく現場起点で選ぶのが鉄則です。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              おしゃれさ・履き心地を重視するならニューバランスのプロスニーカーも候補
            </h2>
            <ConclusionBox>
              軽さ・フィット感・デザインを優先したい軽〜普通作業の現場には、JSAA認定のスニーカー型が選択肢。着脱方式（紐・BOA・面ファスナー）で選ぶと現場に合わせやすいです。
            </ConclusionBox>
            <p className="text-lg leading-relaxed text-muted-foreground">
              「支給した安全靴を履いてくれない」悩みは、見た目や履き心地が原因のことが少なくありません。着脱方式で選ぶと現場運用に合わせやすくなります。
            </p>

            <h3 className="mt-8 text-xl font-bold text-foreground">
              紐タイプ（見た目・フィット感重視）
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              しっかり足を固定したい、見た目を重視したい現場向け。着脱に手間がかかるため頻繁な脱ぎ履きには不向きな場合あり。
            </p>
            <ProductGrid items={NB_LACE} cols={2} />

            <h3 className="mt-10 text-xl font-bold text-foreground">
              BOAタイプ（着脱・フィット調整重視）
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              ダイヤルでフィット感を微調整でき素早く着脱可能。脱ぎ履きが多い現場に。
            </p>
            <ProductGrid items={NB_BOA} cols={2} />

            <h3 className="mt-10 text-xl font-bold text-foreground">
              面ファスナータイプ（手袋着用・着脱頻度が多い現場）
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              ワンタッチ着脱で手袋着用時も扱いやすく、カラー展開も豊富。
            </p>
            <ProductGrid items={NB_VELCRO} cols={3} />
            <p className="mt-4 text-sm text-muted-foreground">
              ※サイズ・色・在庫は変動します。適合する規格区分（A種など）は各商品ページの表示でご確認ください。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              コスト・実用性重視ならTRUSCOの安全靴・関連用品も候補
            </h2>
            <ConclusionBox>
              価格・実用性・足元まわりの関連用品まで一括で揃えたいなら、TRUSCOの安全短靴・長靴・インソールなどが選択肢。現場環境（水・油など）に合わせて組み合わせます。
            </ConclusionBox>

            <h3 className="mt-8 text-xl font-bold text-foreground">
              JIS規格品・軽量安全短靴
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              標準的な防護性能を確保しつつコストを抑えたい現場に。必要な作業区分（S種など）を満たすか表示を確認。
            </p>
            <ProductGrid items={TRUSCO_SHOES} cols={3} />

            <h3 className="mt-10 text-xl font-bold text-foreground">
              長靴・メッシュブーツ（水・油まわり）
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              水場や油を扱う床では防水・耐油性のある長靴系が安心。耐油・防滑は商品仕様を確認。
            </p>
            <ProductGrid items={TRUSCO_BOOTS} cols={3} />

            <h3 className="mt-10 text-xl font-bold text-foreground">
              保護用品・インソール（足元の補助）
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              つま先・甲まわりの追加保護や長時間作業の快適性を補助。靴との相性・サイズは要確認。
            </p>
            <ProductGrid items={TRUSCO_ACC} cols={2} />

            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              足元まわりは保護具一覧からまとめて確認できます。
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
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
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              導入前チェックリスト
            </h2>

            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/safety-shoes-purchasing-checklist.jpg"
                alt="法人向けに安全靴を選定するチェックリストのイメージ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>

            <ul className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground">
              {[
                "現場ごとに求められる規格・作業区分を確認したか？（JIS S/H/U、JSAA A/B など）",
                "元請け・社内ルールで指定規格があるか？（「JIS安全靴のみ」等）",
                "床・路面の環境は？（油・水・薬品・ガレキ・長距離歩行の有無）",
                "着脱頻度・手袋着用の有無は？（紐／BOA／面ファスナーの選択）",
                "全現場を1モデルに統一せず、区分ごとに分けているか？",
                "軽量モデルの耐久性が現場環境に合うか確認したか？",
                "サイズ展開（小さい・大きいサイズ、幅広）は足りるか？",
                "必要数量・納期・予算を確認したか？（在庫は変動するため早めに）",
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
              安全靴とプロテクティブスニーカーの違いは、突き詰めると「どの規格に合格しているか」です。
            </p>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                ・<strong className="text-foreground">安全靴＝JIS T8101</strong>
                、
                <strong className="text-foreground">
                  プロスニーカー＝JSAA認定
                </strong>
                。セーフティシューズは両者を含む総称
              </li>
              <li>
                ・JIS T8101は超重(U)・重(H)・普通(S)・軽(L)の4区分。表示記号で性能を確認
              </li>
              <li>
                ・JSAAはA種（S種相当）・B種（L種相当）。A種は普通作業用相当の試験をクリア
              </li>
              <li>
                ・商品名の「安全靴」と規格上の「安全靴」はズレることがある。
                <strong className="text-foreground">
                  規格表示を必ず確認
                </strong>
              </li>
              <li>
                ・軽さ・履き心地重視ならスニーカー型、防護・耐久重視ならJIS品。ただし
                <strong className="text-foreground">現場指定が最優先</strong>
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              安全・規格に関わる部分は、最終的に現場ルール・商品仕様・公式情報（JIS、JSAA）をご確認のうえご判断ください。
            </p>
          </section>

          <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
            <h2 className="text-2xl font-black text-white">
              現場に合う作業靴を探す
            </h2>
            <p className="mt-3 text-footer-muted">
              仕様・在庫・価格は商品ページでご確認ください。
            </p>
            <a
              href={buildUrl(`${YQ}caddb8eeb6.html`, `${SLUG}_cta`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover"
            >
              保護具一覧で仕様・在庫を確認する
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </section>

          {relatedArticles.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-black text-foreground">関連記事</h2>
              <ul className="mt-4 space-y-2">
                {relatedArticles.map((article) => (
                  <li key={article.slug}>
                    <Link
                      href={article.path}
                      className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
                    >
                      {article.shortTitle}
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

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
            （グリーンクロスグループ）｜本記事は一般的な情報提供を目的としたものです。規格・価格・在庫・仕様は変動する場合があり、最新情報は各商品ページおよびJIS・JSAA等の公式情報をご確認ください。安全な使用方法や現場で求められる規格については、社内ルール・元請けの指定・メーカー仕様に従ってください。
          </p>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
