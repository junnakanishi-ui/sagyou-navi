import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { ProductCard } from "@/components/work/product-card";
import { ARTICLES } from "@/lib/articles";
import { buildUrl, STORE_LINKS } from "@/lib/product-links";

const SLUG = "caritio-720-780-compare";
const YQ = STORE_LINKS.yahoo;

export const metadata: Metadata = {
  title:
    "カルティオ MPK-720とMPK-780の違いは？新旧サイズ早見表で選ぶ軽量台車｜作業用品ナビ",
  description:
    "カルティオMPK-720とMPK-780の違いを新旧比較表で整理。サイズ・荷重は同じで本質は「軽さ」。用途別早見表・選び方表・導入前チェックリストで現場に合う軽量台車を選べます。",
  alternates: {
    canonical: `https://sagyou-navi.com/articles/${SLUG}`,
  },
  openGraph: {
    title:
      "カルティオ MPK-720とMPK-780の違いは？新旧サイズ早見表で選ぶ軽量台車",
    description:
      "MPK-720とMPK-780の違いを新旧比較表で整理。サイズ・荷重は同じで本質は「軽さ」。用途別早見表で現場に合う軽量台車を選べます。",
    type: "article",
  },
};

const BODY_PRODUCTS = [
  {
    id: "167468",
    name: "カルティオ ブラック（標準）",
    note: "平坦な屋内中心の汎用運搬に。定番カラー。",
  },
  {
    id: "190479",
    name: "カルティオ ブルー（標準）",
    note: "色で部署・用途を分けたい現場に。",
  },
  {
    id: "190475",
    name: "カルティオ ブラック・スチールストッパー付",
    note: "段差や停車作業がある現場へ。耐久性重視。",
  },
  {
    id: "190477",
    name: "カルティオ ブルー・スチールストッパー付",
    note: "停車中の動き出しを確実に止めたい現場に。",
  },
  {
    id: "216701",
    name: "カルティオ オリーブドラブ・樹脂ストッパー付",
    note: "軽い操作感のストッパーが欲しい屋内運用に。",
  },
  {
    id: "216699",
    name: "カルティオ ブルー・樹脂ストッパー付",
    note: "頻繁に停車する屋内運用に。",
  },
];

const TOOLBOX_PRODUCTS = [
  {
    id: "157971",
    name: "工具ボックス（A）",
    note: "工具・部品をまとめて台車に載せ、ワンアクションで現場へ。",
  },
  {
    id: "157957",
    name: "工具ボックス（B）",
    note: "落下・紛失防止。設営/保守の段取りを短縮。",
  },
  {
    id: "158008",
    name: "工具ボックス（C）",
    note: "屋外持ち出しが多い現場に。",
  },
];

const ROUTEVAN_PRODUCTS = [
  {
    id: "160389",
    name: "ルートバン（A）",
    note: "通い箱・コンテナ運搬が多い配送/店舗に。",
  },
  {
    id: "160383",
    name: "ルートバン（B）",
    note: "平台車と用途を分けて併用すると効率的。",
  },
  {
    id: "160394",
    name: "ルートバン（C）",
    note: "荷姿に応じた最適な運搬に。",
  },
];

const CATEGORY_LINKS = [
  {
    label: "運搬台車 一覧",
    url: `${YQ}b1bfc8c2c2.html`,
    uc: "cat_daisya",
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
  {
    label: "保護具 一覧",
    url: `${YQ}caddb8eeb6.html`,
    uc: "cat_ppe",
  },
];

const FAQ = [
  {
    q: "MPK-720とMPK-780の一番の違いは何ですか？",
    a: "質量です。ハンドルがスチール（720）からアルミ（780）になり、自重が8.4kg→6.8kgへ1.6kg軽くなりました。サイズ・荷重・静音性はほぼ同じです。",
  },
  {
    q: "サイズや積載量は変わりましたか？",
    a: "天板780×490mm、均等荷重200kg、キャスター径100mm、騒音値35.5dBは両モデル共通です。運搬性能そのものは変わりません。",
  },
  {
    q: "720のストッパーは780に使えますか？",
    a: "適合型番が異なります。720はMPK-700FB、780はMPK-780-JS／MPK-780-SSです。買い増し・後付けの際は本体の型番に合うものを選んでください。",
  },
  {
    q: "軽くなって耐久性は落ちませんか？",
    a: "ハンドル材質の変更による軽量化で、荷重性能（200kg）は維持されています。走行安定性も確保される設計です。詳細な使用条件は商品ページの仕様をご確認ください。",
  },
  {
    q: "どちらを買えば失敗しませんか？",
    a: "迷ったら780が無難です。軽さは多くの現場でメリットになり、デメリットになる場面が少ないためです。据え置き中心・コスト優先なら720も十分検討に値します。",
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
    "カルティオ MPK-720とMPK-780の違いは？新旧サイズ早見表で選ぶ軽量台車",
  description:
    "カルティオMPK-720とMPK-780の違いを新旧比較表で整理。サイズ・荷重は同じで本質は「軽さ」。",
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

export default function Caritio720780ComparePage() {
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
                カルティオ MPK-720/780 の違い
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
                <span>約8分で読める</span>
              </div>
            </div>
            <h1 className="text-3xl font-black leading-tight text-foreground sm:text-4xl">
              カルティオ MPK-720とMPK-780の違いは？
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              新旧サイズ早見表で選ぶ軽量台車
            </p>
          </div>
        </section>

        <section className="bg-card pb-10">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/kartio-mpk720-mpk780-hero.jpg"
                alt="カルティオの新旧モデルを比較する業務用台車のイメージ"
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
            カルティオの買い替えや増車を検討すると、必ずぶつかるのが「720と780、何が違うのか」という疑問です。型番が近く、見た目もほぼ同じ。スペック表を並べても数字の大半が一致するため、現場の購買担当者ほど判断に迷います。本記事では公式スペックを早見表で整理し、どんな現場ならどちらを選ぶべきかを実務目線でまとめました。
          </p>

          <ConclusionBox>
            <strong>結論：</strong>
            MPK-720とMPK-780はサイズ・荷重（200kg）・静音性（35.5dB）がほぼ同じで、本質的な違いは「軽さ」です。ハンドルがスチール（720）からアルミ（780）に変わり、自重が8.4kg→6.8kgへ1.6kg軽くなりました。持ち運び・積み下ろし・共用が多い現場ほど新型780が向いています。
          </ConclusionBox>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              カルティオ MPK-720 と MPK-780 の違いは？
            </h2>
            <ConclusionBox>
              違いは「質量・ハンドル材質・適合ストッパー」の3点だけ。寸法・荷重・キャスター径・静音性はすべて共通です。
            </ConclusionBox>
            <p className="text-lg leading-relaxed text-muted-foreground">
              まず押さえるべきは、変わったところより変わっていないところのほうが多いという事実です。天板780×490mm、均等荷重200kg、キャスター径100mm、騒音値35.5dB——この核となる部分はMPK-780（2024年1月5日発売）でも一切変わっていません。
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              TRUSCOが掲げたコンセプトは「やっぱり台車は軽い方がいい」。ハンドルをスチールからアルミに変更し、自重を8.4kgから6.8kgへ1.6kg軽量化しました。シリーズ累計60万台という実績を持つ定番モデルの正常進化版です。
            </p>

            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/kartio-size-comparison.jpg"
                alt="台車のサイズやハンドル形状を比較するイメージ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>

            <h3 className="mt-8 text-xl font-bold text-foreground">
              MPK-720とMPK-780 新旧比較表
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-[640px] w-full border-collapse text-left text-base">
                <thead>
                  <tr className="bg-foreground text-brand">
                    <th className="px-4 py-3 font-bold">項目</th>
                    <th className="px-4 py-3 font-bold">MPK-720（従来型）</th>
                    <th className="px-4 py-3 font-bold">
                      MPK-780（新型・2024年〜）
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ["均等荷重", "200kg", "200kg", false],
                    ["長さ", "780mm", "780mm", false],
                    ["幅", "490mm", "490mm", false],
                    ["高さ", "162mm", "162mm", false],
                    ["ハンドル高さ", "900mm", "900mm", false],
                    ["キャスター径", "100mm", "100mm", false],
                    ["騒音値", "35.5dB", "35.5dB", false],
                    ["質量", "8.4kg", "6.8kg（−1.6kg）", true],
                    ["ハンドル材質", "スチール", "アルミ", true],
                    [
                      "適合ストッパー",
                      "MPK-700FB",
                      "MPK-780-JS / MPK-780-SS",
                      true,
                    ],
                  ].map(([k, a, b, hl]) => (
                    <tr
                      key={k as string}
                      className={`border-b border-border ${hl ? "bg-conclusion-bg font-bold text-foreground" : "bg-card"}`}
                    >
                      <td className="px-4 py-3">{k}</td>
                      <td className="px-4 py-3">{a}</td>
                      <td className="px-4 py-3">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              ※スペックは変動する可能性があります。最新値・在庫は各商品ページでご確認ください。
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              MPK-780は何が新しくなった？
            </h2>
            <ConclusionBox>
              ハンドルのアルミ化による1.6kgの軽量化が中心。あわせて走行安定性が見直され、荷物落下防止柵などのオプションにも対応しました。
            </ConclusionBox>
            <p className="text-lg leading-relaxed text-muted-foreground">
              新型780の進化ポイントは大きく3つです。
            </p>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">1. 1.6kgの軽量化</strong>
                ：8.4kg→6.8kg。1日に何十回も持ち上げ・積み下ろしする現場では差が積み重なります。
              </li>
              <li>
                <strong className="text-foreground">
                  2. 走行時の安定性向上
                </strong>
                ：軽さと安定性を両立する設計。「軽い＝頼りない」ではありません。
              </li>
              <li>
                <strong className="text-foreground">3. オプション拡張</strong>
                ：荷物落下防止柵などに対応。崩れやすい荷物を運ぶ現場での運用幅が広がりました。
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              軽い台車が選ばれる理由
            </h2>
            <ConclusionBox>
              軽さは「運搬性能」ではなく「人の負担」と「運用効率」に効きます。積みやすい・運びやすい・共用しやすい、の3つが現場メリットの中心です。
            </ConclusionBox>
            <p className="text-lg leading-relaxed text-muted-foreground">
              「200kg積めるなら本体が1.6kg軽くても関係ないのでは？」と思われがちですが、台車の重さが効くのは荷物を載せていないときです。
            </p>

            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/kartio-lightweight-benefit.jpg"
                alt="軽量台車を営業車に積み込むイメージ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>

            <ul className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  営業車・ルートバンに積みやすい
                </strong>
                ：荷室へ入れる動作が一段ラクに。複数台積む業務で差が出ます。
              </li>
              <li>
                <strong className="text-foreground">
                  持ち運び・階段移動の負担減
                </strong>
                ：エレベーターのない現場やフロア間移動で身体への負担が軽くなります。
              </li>
              <li>
                <strong className="text-foreground">
                  誰でも扱える＝共用しやすい
                </strong>
                ：体力差を問わず扱え、パート・新人・女性スタッフの共用に向きます。
              </li>
              <li>
                <strong className="text-foreground">取り回しの軽快さ</strong>
                ：空台車を片手で寄せる、向きを変える動作がスムーズです。
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              どんな現場ならMPK-780が向いている？
            </h2>
            <ConclusionBox>
              「人が台車を動かす・持ち運ぶ・共用する」頻度が高い現場ほど780向き。配送、店舗、オフィス、学校、イベント設営などが代表例です。
            </ConclusionBox>
            <h3 className="mt-6 text-xl font-bold text-foreground">
              用途別早見表
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-[640px] w-full border-collapse text-left text-base">
                <thead>
                  <tr className="bg-foreground text-brand">
                    <th className="px-4 py-3 font-bold">現場・用途</th>
                    <th className="px-4 py-3 font-bold">向いているモデル</th>
                    <th className="px-4 py-3 font-bold">理由</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    [
                      "配送・ルート営業",
                      "MPK-780",
                      "車への積み下ろし回数が多く軽さが直結",
                    ],
                    [
                      "店舗バックヤード",
                      "MPK-780",
                      "共用が多く、誰でも扱える軽さが有利",
                    ],
                    [
                      "オフィス・備品搬送",
                      "MPK-780",
                      "フロア移動・女性スタッフの利用が多い",
                    ],
                    [
                      "学校・公共施設",
                      "MPK-780",
                      "利用者の体力差が大きく軽量が安全側",
                    ],
                    [
                      "イベント・展示設営",
                      "MPK-780",
                      "持ち運び・台数運用が多い",
                    ],
                    [
                      "工場ライン内の定位置運搬",
                      "MPK-720でも可",
                      "据え置き中心で軽さの恩恵が小さい",
                    ],
                    [
                      "倉庫の固定ルート運搬",
                      "MPK-720でも可",
                      "持ち上げ機会が少なくコスト優先でも可",
                    ],
                  ].map(([a, b, c]) => (
                    <tr key={a} className="border-b border-border bg-card">
                      <td className="px-4 py-3">{a}</td>
                      <td className="px-4 py-3 font-bold text-foreground">
                        {b}
                      </td>
                      <td className="px-4 py-3">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              逆にMPK-720でも十分なケースは？
            </h2>
            <ConclusionBox>
              持ち上げ・運搬移動がほとんどなく、コストや在庫の都合を優先したい場合は720でも実用上の問題はありません。
            </ConclusionBox>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">据え置き中心の運用</strong>
                ：決まったルートで押すだけなら自重差はほぼ気になりません。
              </li>
              <li>
                <strong className="text-foreground">
                  既存設備と型番を揃えたい
                </strong>
                ：720を多数運用しており、ストッパー（MPK-700FB）を共通化したい場合。
              </li>
              <li>
                <strong className="text-foreground">コスト・在庫を優先</strong>
                ：まとまった台数を揃える際、入手性や価格を優先する判断もあり得ます。
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              ストッパー付き・標準タイプはどう選ぶ？
            </h2>
            <ConclusionBox>
              傾斜・段差・不意の動き出しが心配な現場はストッパー付き。平坦な屋内中心なら標準タイプで十分です。ストッパーは型番が新旧で異なる点に注意。
            </ConclusionBox>
            <h3 className="mt-6 text-xl font-bold text-foreground">選び方表</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-[640px] w-full border-collapse text-left text-base">
                <thead>
                  <tr className="bg-foreground text-white">
                    <th className="px-4 py-3 font-bold">着目点</th>
                    <th className="px-4 py-3 font-bold">標準タイプ</th>
                    <th className="px-4 py-3 font-bold">ストッパー付き</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ["主な現場", "平坦な屋内・室内", "傾斜・スロープ・屋外を含む"],
                    ["段差・坂", "少ない", "ある／頻繁"],
                    ["停車中の安全", "通常運用で十分", "動き出しを確実に止めたい"],
                    [
                      "荷役作業",
                      "載せ降ろしが短時間",
                      "停車させて作業する時間が長い",
                    ],
                    ["価格", "抑えめ", "ストッパー分が加算"],
                  ].map(([a, b, c]) => (
                    <tr key={a} className="border-b border-border bg-card">
                      <td className="px-4 py-3 font-bold text-foreground">
                        {a}
                      </td>
                      <td className="px-4 py-3">{b}</td>
                      <td className="px-4 py-3">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              注意点として、ストッパーの適合型番は新旧で異なります。720はMPK-700FB、780はMPK-780-JS（樹脂）／MPK-780-SS（スチール）です。樹脂とスチールは耐久性や操作感が異なるため、使用環境に合わせて選びましょう。具体的な適合・在庫は商品ページで確認できます。
            </p>

            <h3 className="mt-8 text-xl font-bold text-foreground">
              カルティオ本体・ストッパー付きの選択肢
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {BODY_PRODUCTS.map((p) => (
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
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-black text-foreground">
              カルティオと一緒に検討したい関連用品
            </h2>
            <ConclusionBox>
              台車単体ではなく「載せる物・運ぶ物」とセットで考えると、現場の運搬が一気に効率化します。工具ボックスとルートバンが代表的な組み合わせです。
            </ConclusionBox>

            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-primary-light">
              <Image
                src="/images/articles/kartio-toolbox-routevan-related.jpg"
                alt="台車と工具ボックスや小物搬送用品を組み合わせた運用イメージ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </figure>

            <h3 className="mt-8 text-xl font-bold text-foreground">
              工具ボックス
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              工具・部品をまとめてカルティオに載せれば、現場へワンアクションで持ち込めます。落下・紛失を防ぎ、設営・保守の段取りが速くなります。
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TOOLBOX_PRODUCTS.map((p) => (
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

            <h3 className="mt-10 text-xl font-bold text-foreground">
              ルートバン（折りたたみコンテナ運搬車）
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              通い箱・コンテナ運搬が多い配送・店舗で活躍。平台車（カルティオ）と用途を分けて併用すると、荷姿に応じた最適な運搬ができます。
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ROUTEVAN_PRODUCTS.map((p) => (
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

            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              運搬まわりをまとめて見直すなら、カテゴリ一覧もどうぞ。
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
            <ul className="mt-6 space-y-2 text-lg leading-relaxed text-muted-foreground">
              {[
                "台車を持ち上げる・運ぶ場面が多いか？（多い→780）",
                "複数人・体力差のあるスタッフで共用するか？（する→780）",
                "既存の台車・ストッパー型番と揃える必要があるか？（ある→720も検討）",
                "使う現場に傾斜・段差・スロープがあるか？（ある→ストッパー付き）",
                "停車させて荷役作業する時間が長いか？（長い→ストッパー付き）",
                "ストッパーは樹脂／スチールどちらが環境に合うか？",
                "一緒に運ぶ工具・コンテナがあるか？（ある→工具ボックス／ルートバン併用）",
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
              カルティオ MPK-720とMPK-780の違いは、突き詰めると「軽さ」の一点です。
            </p>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-muted-foreground">
              <li>
                ・サイズ・荷重・静音性は共通。違いは質量・ハンドル材質・適合ストッパーの3点
              </li>
              <li>
                ・780は8.4kg→6.8kgへ1.6kg軽量化。「持ち上げる・運ぶ・共用する」現場ほど効く
              </li>
              <li>・据え置き中心・型番統一・コスト優先なら720も依然有力</li>
              <li>・傾斜や停車作業がある現場はストッパー付き（型番は新旧で別）</li>
              <li>
                ・工具ボックス・ルートバンと組み合わせると運搬効率がさらに上がる
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              最終的な仕様・価格・在庫は変動するため、発注前に各商品ページで最新情報をご確認ください。
            </p>
          </section>

          <section className="mt-12 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-10">
            <h2 className="text-2xl font-black text-white">
              軽量台車カルティオを見てみる
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
            （グリーンクロスグループ）｜本記事は一般的な情報提供を目的としたものです。価格・在庫・仕様は変動する場合があり、最新情報は各商品ページをご確認ください。安全な使用方法や使用条件については、メーカーの取扱説明書および仕様に従ってください。
          </p>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
