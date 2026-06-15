import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { ProductCard } from "@/components/work/product-card";
import { buildUrl, STORE_LINKS } from "@/lib/product-links";

const SLUG = "kartio-big-offroad";
const YQ = STORE_LINKS.yahoo;

export const metadata: Metadata = {
  title:
    "カルティオビッグ・オフロードとは？悪路・段差に強い大型樹脂台車の使いどころ｜作業用品ナビ",
  description:
    "カルティオビッグ オフロードは悪路・段差に強い大型樹脂台車。ただし均等荷重100kgで、通常のカルティオビッグ400kgとは役割が違います。標準カルティオとの違い、路面別・シチュエーション別の選び方、選定ミス防止まで実務解説。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "カルティオビッグ・オフロードとは？悪路・段差に強い大型樹脂台車の使いどころ",
    description:
      "カルティオビッグ オフロードは悪路・段差に強い大型樹脂台車。ただし均等荷重100kgで、通常のカルティオビッグ400kgとは役割が違います。",
    type: "article",
  },
};

const OFFROAD = [
  {
    id: "159780",
    name: "カルティオビッグ オフロード ブラック MPK-906N-OR-BK",
    note: "屋外・段差・砂利道の搬送に。ノーパンクタイヤ（100kg）。",
  },
  {
    id: "159781",
    name: "カルティオビッグ オフロード オリーブ MPK-906N-OR-OG",
    note: "悪路向け。カラーで使い分けたい現場に。",
  },
];

const BIG_STANDARD = [
  {
    id: "159749",
    name: "カルティオビッグ 固定ハンドル ブラック MPK-900-BK",
    note: "平坦床で重量物を運ぶ定番（400kg）。",
  },
  {
    id: "159750",
    name: "カルティオビッグ 固定ハンドル ブルー MPK-900-B",
    note: "平坦床・重量物向け。色で使い分け。",
  },
  {
    id: "216706",
    name: "カルティオビッグ 固定 ストッパー付 青 MPK-900-B-S",
    note: "停車固定したい重量物現場に。",
  },
  {
    id: "159757",
    name: "カルティオビッグ 折りたたみハンドル ブラック MPK-906-BK",
    note: "使わないとき省スペースに収納（400kg）。",
  },
  {
    id: "216708",
    name: "カルティオビッグ 折畳 ストッパー付 黒 MPK-906-BK-S",
    note: "折りたたみ＋停車固定。",
  },
  {
    id: "216713",
    name: "カルティオビッグ 折畳 ストッパー付 オリーブ MPK-906-OG-S",
    note: "折りたたみ＋停車固定。カラー違い。",
  },
];

const STANDARD = [
  {
    id: "167468",
    name: "カルティオ 新型 ブラック MPK-780-BK",
    note: "屋内の汎用運搬に。軽くて扱いやすい（200kg・6.8kg）。",
  },
  {
    id: "190479",
    name: "カルティオ 新型 ブルー MPK-780-B",
    note: "色で部署・用途を分けたい現場に。",
  },
  {
    id: "190475",
    name: "カルティオ 新型 ブラック スチールストッパー付 MPK780BKSS",
    note: "停車固定したい屋内現場に。",
  },
  {
    id: "190476",
    name: "カルティオ 新型 オリーブ スチールストッパー付 MPK780ODSS",
    note: "停車固定。カラー違い。",
  },
];

const BIG_VARIANTS = [
  {
    id: "216710",
    name: "カルティオビッグフラット 回転 4輪自在 青 MPK-906F2J-B",
    note: "平台車にも手押しにもなる1台2役（400kg）。",
  },
  {
    id: "216714",
    name: "カルティオビッグ 電動センシングアシスト付 黒 MPK-SA906-BK",
    note: "重い荷を長距離・高頻度で運ぶ現場に（300kg）。",
  },
];

const WEEGO = [
  {
    id: "159715",
    name: "カルティオミニ weego 伸縮折りたたみハンドル ピンク WP-2G-P",
    note: "小物運搬、取り回し重視に（100kgクラス）。",
  },
  {
    id: "159718",
    name: "カルティオミニ weego 伸縮折畳みハンドル ブラック WP-2G-BK-JS",
    note: "軽作業・小型用途に。",
  },
];

const CATEGORY_LINKS = [
  {
    label: "運搬台車 一覧",
    url: `${YQ}b1bfc8c2c2.html`,
    uc: "cat_daisya",
  },
];

const RELATED_ARTICLES = [
  {
    slug: "kartio-load-capacity",
    title: "カルティオは何kgまで載せられる？均等荷重200kgの正しい意味",
  },
  {
    slug: "caritio-720-780-compare",
    title: "カルティオ MPK-720とMPK-780の違い｜軽量台車の選び方",
  },
  {
    slug: "trusco-hand-pallet-erabikata",
    title: "トラスコのハンドパレットの選び方｜フォーク長・能力・低床の違い",
  },
];

const FAQ = [
  {
    q: "カルティオビッグ オフロードは何kgまで載せられますか？",
    a: "均等荷重100kgです。「ビッグ」という名前ですが、通常のカルティオビッグ（400kg）より耐荷重は小さいので、重量物用ではなく悪路・段差用と考えてください。",
  },
  {
    q: "通常のカルティオビッグとオフロード、どちらが強いですか？",
    a: "目的が違います。耐荷重なら通常ビッグ（400kg）が上、悪路・段差の走破性ならオフロードが上です。「平坦×重量物」か「悪路×段差」かで選び分けます。",
  },
  {
    q: "オフロードはどんな路面で使えますか？",
    a: "公式では砂利道・草地・砂地・雪道などの悪路で優れた走破性と直進安定性を発揮するとされています。大径前輪とノーパンクタイヤが特徴です。具体的な使用条件は取扱説明書でご確認ください。",
  },
  {
    q: "屋内中心ならどれがいいですか？",
    a: "屋内の平坦床なら、軽くて扱いやすい標準カルティオ（200kg・本体6.8kg）が向くことが多いです。重量物が多いなら通常ビッグ（400kg）も候補です。",
  },
  {
    q: "重い荷物を悪路で運びたいのですが？",
    a: "「重さ」と「悪路」を1台で完璧に満たすモデルは限られます。どちらを優先するか決めるか、運搬経路の段差解消（スロープ等）もあわせて検討すると現実的です。",
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
    "カルティオビッグ・オフロードとは？悪路・段差に強い大型樹脂台車の使いどころ",
  description:
    "カルティオビッグ オフロードは悪路・段差に強い大型樹脂台車。ただし均等荷重100kgで、通常のカルティオビッグ400kgとは役割が違います。",
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

export default function KartioBigOffroadPage() {
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
              <span className="text-foreground">カルティオビッグ オフロード</span>
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
              カルティオビッグ・オフロードとは？
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              悪路・段差に強い大型樹脂台車の使いどころ
            </p>
          </div>
        </section>

        <section className="bg-card pb-10">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/kartio-big-offroad-hero.jpg"
                alt="屋外の悪路でカルティオビッグ オフロードを使う作業者"
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
            「カルティオビッグ オフロード」と聞くと“ビッグ＝大きくて重い物も運べる最強モデル”と思いがちです。ところが実際の耐荷重は100kgで、通常のカルティオビッグ（400kg）より小さい——ここを誤解したまま選ぶと「重量物用に買ったのに容量が足りない」というミスマッチが起こります。本記事ではオフロードの本当の強みと、通常のカルティオビッグ・標準カルティオとの役割の違いを整理し、現場ごとにどれを選ぶべきかを判断できるようにまとめました。
          </p>

          <ConclusionBox>
            <strong>結論：</strong>
            カルティオビッグ オフロードは、前輪に大径車輪を使い段差の乗り越えや砂利・草地・砂地・雪道などの悪路に強い大型樹脂台車です。ただし均等荷重は100kg。「ビッグ」という名前ですが、通常のカルティオビッグ（400kg）より耐荷重は小さく、“重量物向けの最強モデル”ではありません。平坦な床で重い物を運ぶなら通常のビッグ、悪路・段差を越えたいときがオフロードの出番です。選ぶ基準は商品名ではなく「路面・重量・サイズ・収納性」です。
          </ConclusionBox>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              カルティオビッグ・オフロードとは？
            </h2>
            <ConclusionBox>
              悪路・段差での走行に特化した大型樹脂台車です。前輪の大径車輪とノーパンクタイヤで、屋外や段差のある現場で力を発揮します。
            </ConclusionBox>
            <p className="text-lg leading-relaxed text-muted-foreground">
              カルティオビッグ オフロード（MPK-906N-OR）は、樹脂台車「カルティオビッグ」シリーズの中で、屋外・悪路での走行に特化したモデルです。最大の特徴は車輪で、TRUSCO公式では
              <strong className="text-foreground">
                前輪に大径車輪を使用することで走行時の段差乗り越えに優れている
              </strong>
              と案内されています。ノーパンクタイヤも採用しています。
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              公式PDFでは、
              <strong className="text-foreground">
                砂利道・草地・砂地・雪道などの悪路でも優れた走破性と直進安定性を発揮する
              </strong>
              とされています。ここで先に押さえたいのが、
              <strong className="text-foreground">耐荷重は均等荷重100kg</strong>
              だという点。名前は「ビッグ」ですが、重い物をたくさん載せるためのモデルではありません。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              カルティオビッグ オフロードの特徴
            </h2>
            <ConclusionBox>
              「悪路走破性」と引き換えに、車体は大きく重め（19.68kg）、耐荷重は100kgです。屋外・段差に強い代わりに、平坦床での重量物運搬には向きません。
            </ConclusionBox>
            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/kartio-offroad-rough-terrain.jpg"
                alt="段差や砂利道で台車を運ぶイメージ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>
            <ComparisonTable
              head={["項目", "カルティオビッグ オフロード（MPK-906N-OR）"]}
              rows={[
                ["均等荷重", "100kg"],
                ["荷台サイズ", "長さ900 × 幅778mm"],
                ["高さ", "265mm"],
                ["ハンドル高さ", "950mm"],
                ["車輪", "前輪240mm・後輪170mm"],
                ["タイヤ", "ノーパンクタイヤ"],
                ["質量", "19.68kg"],
                ["得意な路面", "段差・砂利・草地・砂地・雪道などの悪路"],
              ]}
              note="スペックは変動する可能性があります。最新値は商品ページでご確認ください。"
            />
            <ul className="mt-6 space-y-3 text-lg leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  1. 大径の前輪で段差・悪路に強い
                </strong>
                ：前輪240mmが段差や凸凹を滑らかに乗り越え、砂利や草地でも沈み込みにくい。直進安定性も確保。
              </li>
              <li>
                <strong className="text-foreground">
                  2. ノーパンクタイヤで屋外でも安心
                </strong>
                ：空気を使わないため鋭利なものでパンクする心配がなく、整備の手間も減る。
              </li>
              <li>
                <strong className="text-foreground">
                  3. 悪路特化の“引き換え”がある
                </strong>
                ：走破性の代わりに車体は大きく（幅778・高さ265mm）、19.68kgと重め。耐荷重も100kgに抑えられている。
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              つまりオフロードは、
              <strong className="text-foreground">
                “重さ”ではなく“走る場所”で価値が出る台車
              </strong>
              です。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              カルティオビッグ オフロード（悪路・段差向け／均等荷重100kg）
            </h3>
            <ProductGrid items={OFFROAD} cols={2} />
            <p className="mt-4 text-sm text-muted-foreground">
              ※悪路・段差向けのモデルです。重量物の運搬には耐荷重を必ずご確認ください。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              通常のカルティオビッグとの違い
            </h2>
            <ConclusionBox>
              役割が真逆に近いです。通常のビッグは「平坦床で重い物（400kg）を運ぶ」、オフロードは「悪路・段差を越える（100kg）」。耐荷重はオフロードのほうが小さい点に注意。
            </ConclusionBox>
            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/kartio-big-vs-offroad.jpg"
                alt="通常のカルティオビッグとオフロードモデルの違いを示すイメージ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              同じ「カルティオビッグ」でも目的が異なります。最も誤解されやすいのが耐荷重です。
            </p>
            <ComparisonTable
              head={[
                "項目",
                "通常のビッグ（固定 MPK-900）",
                "オフロード（MPK-906N-OR）",
              ]}
              rows={[
                ["均等荷重", "400kg", "100kg"],
                ["荷台サイズ", "900 × 620mm", "900 × 778mm"],
                ["質量", "12.2kg", "19.68kg"],
                ["得意な場面", "平坦な床で重量物を運ぶ", "段差・悪路を越える"],
                ["車輪", "標準キャスター", "大径前輪・ノーパンク"],
              ]}
            />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              数字を見ると一目瞭然で、
              <strong className="text-foreground">
                重さを運ぶ力は通常ビッグ（400kg）が4倍
              </strong>
              です。名前から「もっと強そう」と感じますが、耐荷重では通常ビッグのほうが上です。使い分けはシンプルで、
              <strong className="text-foreground">
                平坦床で重い物なら通常ビッグ、屋外・段差・砂利ならオフロード
              </strong>
              。「重い物を悪路で」という場合はどちらを優先するか決める必要があります。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              通常のカルティオビッグ（平坦床・重量物向け／均等荷重400kg）
            </h3>
            <ProductGrid items={BIG_STANDARD} cols={3} />
            <p className="mt-4 text-sm text-muted-foreground">
              ※平坦床での重量物運搬向け。使用条件は取扱説明書をご確認ください。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              標準カルティオとの違い
            </h2>
            <ConclusionBox>
              標準カルティオ（MPK-780）は本体6.8kgと軽く、屋内の一般搬送向け。オフロードは悪路向けで重く大きい。屋内中心なら標準カルティオの軽さ・扱いやすさが魅力です。
            </ConclusionBox>
            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/kartio-standard-indoor-use.jpg"
                alt="屋内の平坦床で標準カルティオを使うイメージ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              「そもそも大型が必要か」という視点も大切です。屋内の平坦床がメインなら、軽くて扱いやすい標準カルティオが向くことも多いです。
            </p>
            <ComparisonTable
              head={["項目", "標準カルティオ（MPK-780）", "ビッグ オフロード"]}
              rows={[
                ["均等荷重", "200kg", "100kg"],
                ["荷台サイズ", "780 × 490mm", "900 × 778mm"],
                ["質量", "6.8kg", "19.68kg"],
                ["得意な場面", "屋内の一般搬送", "屋外・悪路"],
                ["強み", "軽い・取り回しがラク", "段差・悪路に強い"],
              ]}
            />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              標準カルティオは本体6.8kgと非常に軽く、持ち運び・積み下ろし・共用がラク。一方オフロードは19.68kgと約3倍。屋内の平坦床では、オフロードの重さと大きさはむしろ扱いにくさになります。
              <strong className="text-foreground">
                「屋外・悪路を運ぶ必要があるか」
              </strong>
              が分かれ目です。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              標準カルティオ MPK-780（屋内・一般搬送向け／200kg・本体6.8kg）
            </h3>
            <ProductGrid items={STANDARD} cols={2} />
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              どんな現場で使い分ける？シチュエーション別の選び方
            </h2>
            <ConclusionBox>
              「路面」を最初に見て、次に「重量」「サイズ」「収納性」で絞ります。悪路ならオフロード、平坦×重量物なら通常ビッグ、屋内一般なら標準カルティオが基本線です。
            </ConclusionBox>
            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/kartio-selection-situations.jpg"
                alt="現場別に台車を使い分けるイメージ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              路面別の選び方早見表
            </h3>
            <ComparisonTable
              head={["路面・環境", "向きやすいモデル", "理由"]}
              rows={[
                [
                  "屋外・段差・砂利・草地・雪道",
                  "ビッグ オフロード",
                  "大径前輪＋ノーパンクで走破性が高い",
                ],
                [
                  "平坦な屋内床（重量物）",
                  "通常のビッグ（400kg）",
                  "耐荷重に余裕",
                ],
                [
                  "平坦な屋内床（一般搬送）",
                  "標準カルティオ（200kg）",
                  "軽くて扱いやすい",
                ],
                [
                  "平坦な屋内床（軽い小物）",
                  "weego（100kgクラス）",
                  "小回り・コンパクト",
                ],
              ]}
              note="あくまで一般的な目安です。実際の選定は路面・荷物・サイズ・商品仕様に基づいてご判断ください。"
            />
            <h3 className="mt-8 text-xl font-bold text-foreground">
              シチュエーション別早見表
            </h3>
            <ComparisonTable
              head={["シチュエーション", "おすすめの方向性"]}
              rows={[
                [
                  "建設現場・屋外資材置き場で段差を越える",
                  "オフロード一択に近い",
                ],
                [
                  "倉庫内で重いパレット荷を運ぶ",
                  "通常ビッグ（400kg）。電動アシストも候補",
                ],
                [
                  "工場ラインで部品を頻繁に運ぶ",
                  "標準カルティオ（軽さ重視）",
                ],
                [
                  "平台車としても手押しとしても使いたい",
                  "フラット回転タイプ",
                ],
                [
                  "使わないとき省スペースに収納したい",
                  "折りたたみハンドルタイプ",
                ],
                [
                  "重い荷を長距離・高頻度で運ぶ",
                  "電動センシングアシスト付（300kg）",
                ],
              ]}
            />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              「重い荷を悪路で」という欲張りな条件のときは、優先順位を決めるか、運搬経路の整備（段差解消スロープなど）もあわせて検討すると現実的です。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              カルティオビッグ系の種類と違い
            </h2>
            <ConclusionBox>
              ビッグ系は「重量物（400kg）」「悪路（オフロード100kg）」「2役（フラット回転）」「電動（300kg）」と役割が分かれています。耐荷重と用途で選び分けます。
            </ConclusionBox>
            <ComparisonTable
              head={["モデル", "均等荷重", "特徴・向く用途"]}
              rows={[
                [
                  "weego（カルティオミニ）",
                  "100kgクラス",
                  "軽い小物・取り回し最優先。屋内の小規模搬送",
                ],
                [
                  "標準カルティオ MPK-780",
                  "200kg",
                  "屋内の一般搬送。軽くて扱いやすい汎用機",
                ],
                [
                  "ビッグ オフロード",
                  "100kg",
                  "屋外・段差・悪路に特化。大径前輪・ノーパンク",
                ],
                [
                  "ビッグ 固定/折りたたみ",
                  "400kg",
                  "平坦床で重量物。シリーズの主力",
                ],
                [
                  "ビッグフラット 回転",
                  "400kg",
                  "平台車と手押し台車の1台2役",
                ],
                [
                  "ビッグ 電動アシスト付",
                  "300kg",
                  "電動走行で重い荷を長距離・高頻度に",
                ],
              ]}
              note="耐荷重はクラスを含む目安です。各モデルの正確な値・サイズは商品ページでご確認ください。"
            />
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              ここでも分かるのは、
              <strong className="text-foreground">
                オフロードは耐荷重ではシリーズ内で最も小さい部類
              </strong>
              だということ。名前の印象に引きずられず、用途で選びましょう。
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              用途で広がるカルティオビッグ系
            </h3>
            <ProductGrid items={BIG_VARIANTS} cols={2} />
            <h3 className="mt-8 text-xl font-bold text-foreground">
              weego／カルティオミニ（軽い小物・取り回し重視／100kgクラス）
            </h3>
            <ProductGrid items={WEEGO} cols={2} />
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

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              導入前に確認したいチェックポイント
            </h2>
            <ul className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground">
              {[
                "運ぶ場所の路面は？（屋外・段差・砂利か／平坦な屋内か）",
                "運ぶ荷物の最大重量は？（オフロードは100kg、通常ビッグは400kg）",
                "荷物の大きさは荷台に収まるか？",
                "台車自体の重さ・大きさは現場で扱いやすいか？（オフロードは19.68kgと重め）",
                "使わないとき収納スペースは足りるか？（折りたたみの要否）",
                "停車を固定したい場面はあるか？（ストッパー要否）",
                "「重い荷を悪路で」のような両立条件ではないか？（優先順位の整理）",
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
              よくある選定ミス
            </h2>
            <ConclusionBox>
              「名前のビッグで重量物用と誤解」「路面を見ずに選ぶ」「重さと悪路を1台で求める」が典型例。路面→重量→サイズ→収納性の順で見れば防げます。
            </ConclusionBox>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  「ビッグ オフロード＝最強」と誤解
                </strong>
                ：重量物用に買ったが均等荷重100kgで容量不足。重量物なら通常ビッグ（400kg）が正解だった。
              </li>
              <li>
                <strong className="text-foreground">
                  路面を見ずに耐荷重だけで選ぶ
                </strong>
                ：屋外の段差現場に通常ビッグを入れたが段差で進みにくかった。
              </li>
              <li>
                <strong className="text-foreground">
                  重さと悪路を1台で求める
                </strong>
                ：「重い荷を砂利道で」を1台で満たそうとして、どちらも中途半端に。
              </li>
              <li>
                <strong className="text-foreground">
                  台車自体の重さを見落とす
                </strong>
                ：オフロード19.68kgを軽トラへ毎回積み下ろしするのが負担だった。
              </li>
              <li>
                <strong className="text-foreground">
                  収納スペースを考えていない
                </strong>
                ：大型を導入したが置き場所に困り、折りたたみにすればよかった。
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              防ぐコツは{" "}
              <strong className="text-foreground">
                ①路面を確認 → ②荷物の重量・サイズ → ③台車の重さ・収納性 →
                ④優先順位を決めて機種選定
              </strong>{" "}
              の順。商品名ではなく条件で選ぶのが鉄則です。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              課題別に見るおすすめ導線
            </h2>
            <ConclusionBox>
              「悪路を越えたい」ならオフロード、「平坦で重量物」なら通常ビッグ、「屋内一般」なら標準カルティオ、「軽い小物」ならweego。条件に当てはめれば最適機が見えます。
            </ConclusionBox>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  屋外・段差・砂利を越えたい
                </strong>
                ：オフロード（159780 / 159781）
              </li>
              <li>
                <strong className="text-foreground">
                  平坦床で重量物（400kg）
                </strong>
                ：通常ビッグ（159749 / 159750 / 216706 / 159757 / 216708 /
                216713）
              </li>
              <li>
                <strong className="text-foreground">
                  平台車と手押しの2役
                </strong>
                ：フラット回転（216710）
              </li>
              <li>
                <strong className="text-foreground">
                  重い荷を長距離・高頻度
                </strong>
                ：電動アシスト付（216714）
              </li>
              <li>
                <strong className="text-foreground">
                  屋内の一般搬送（軽さ重視）
                </strong>
                ：標準カルティオ（167468 / 190479 / 190475 / 190476）
              </li>
              <li>
                <strong className="text-foreground">
                  軽い小物・取り回し重視
                </strong>
                ：weego（159715 / 159718）
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              最終的な適合は、路面・荷物の重量とサイズ・収納性の組み合わせで決まります。気になるモデルは商品ページの仕様と現場の条件を照らし合わせてご確認ください。
            </p>
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
              カルティオビッグ オフロードは、
              <strong className="text-foreground">
                悪路・段差に強い専用台車
              </strong>
              ですが、耐荷重は100kgです。
            </p>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                ・前輪の大径車輪＋ノーパンクタイヤで、
                <strong className="text-foreground">
                  砂利・草地・砂地・雪道・段差に強い
                </strong>
              </li>
              <li>
                ・均等荷重は
                <strong className="text-foreground">100kg</strong>
                。「ビッグ」でも通常のカルティオビッグ（400kg）より耐荷重は小さい
              </li>
              <li>
                ・
                <strong className="text-foreground">
                  平坦床で重量物なら通常ビッグ
                </strong>
                、
                <strong className="text-foreground">
                  屋内一般なら標準カルティオ
                </strong>
                （軽い・本体6.8kg）が向く
              </li>
              <li>
                ・選ぶ基準は商品名ではなく{" "}
                <strong className="text-foreground">
                  「路面 → 重量 → サイズ → 収納性」
                </strong>{" "}
                の順
              </li>
              <li>
                ・「重い荷を悪路で」は両立しにくい。優先順位を決めて選ぶ
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              名前の印象で選ぶとミスマッチが起こります。現場の条件から逆算すれば、シリーズの中に必ず合う1台が見つかります。耐荷重・仕様・在庫は変動するため、最終的な選定と使用方法は各商品ページの仕様・取扱説明書・使用条件をご確認のうえご判断ください。
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
              href={buildUrl(`${YQ}b1bfc8c2c2.html`, `${SLUG}_cta`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-store-yahoo px-6 py-3 text-sm font-bold text-white transition hover:bg-store-yahoo-hover"
            >
              運搬台車一覧で仕様・在庫を確認する
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
            （グリーンクロスグループ）｜本記事は一般的な情報提供を目的としたものです。耐荷重・価格・在庫・仕様は変動する場合があり、最新情報は各商品ページでご確認ください。安全な使用方法・使用条件については、メーカーの取扱説明書および仕様に従ってください。
          </p>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
