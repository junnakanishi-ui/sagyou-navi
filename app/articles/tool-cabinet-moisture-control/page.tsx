import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "tool-cabinet-moisture-control";
const SITE_URL = "https://sagyou-navi.com";

export const metadata: Metadata = {
  title:
    "工具箱・保管庫の湿気対策｜繰り返し使える除湿石HYPERCUBEと除湿機の使い分け",
  description:
    "工具箱や保管庫、工具キャビネットの湿気対策には、電源不要で繰り返し使える除湿剤が役立つ場合があります。SILENTDRY除湿石HYPERCUBE 800g・1000gの特徴、使い分け、除湿機やスポットエアコンとの違いを、工場・倉庫・精密機器保管向けに解説します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
};

const ARTICLE_IMG = "/images/articles";
const IMG_AFA800 = "/products/afa800.jpg";
const IMG_AFA1000 = "/products/afa1000.jpg";

const URL_AFA800 = "https://item.rakuten.co.jp/crecote-shop/ta046227-afa800/";
const URL_AFA1000 = "https://item.rakuten.co.jp/crecote-shop/ta046226-afa1000/";
const URL_DM10 = "https://item.rakuten.co.jp/crecote-shop/ta053918-dm10/";
const URL_TS23 =
  "https://item.rakuten.co.jp/crecote-shop/ta046545-ts23ecn1dl/";
const URL_IJDCN80W =
  "https://item.rakuten.co.jp/crecote-shop/ta054080-ijdcn80w/";
const URL_IJCGA50 =
  "https://item.rakuten.co.jp/crecote-shop/ta054078-ijcga50/";
const URL_MAC25N = "https://item.rakuten.co.jp/crecote-shop/ta054141-mac25n/";
const URL_TAD22NW =
  "https://item.rakuten.co.jp/crecote-shop/ta054391-tad22nw/";

const UTM =
  "utm_source=sagyou-navi&utm_medium=referral&utm_campaign=tool-cabinet-moisture-control";

function buildUrl(url: string, utm: string): string {
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

function CTA({ url, label }: { url: string; label: string }) {
  return (
    <a
      href={buildUrl(url, UTM)}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="my-4 block w-full rounded-lg bg-gray-900 px-6 py-4 text-center font-bold text-white transition-colors hover:bg-gray-700"
    >
      {label}
    </a>
  );
}

function H2({ children }: { children: ReactNode }) {
  return <h2 className={cls.h2}>{children}</h2>;
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className={cls.h3}>{children}</h3>;
}

const faqs = [
  {
    q: "HYPERCUBEはどんな場所に向いていますか？",
    a: "工具箱、工具キャビネット、保管庫、精密機器や計測機器、カメラなどの光学機器保管に向いています。電源不要で置けるため、限られた保管空間の湿気対策として検討しやすい除湿アイテムです。",
  },
  {
    q: "HYPERCUBE 800gと1000gはどう使い分ければよいですか？",
    a: "中型工具キャビネットや小〜中規模の保管庫には800g、大型工具キャビネットやより大きな保管空間には1000gが候補になります。800gは吸湿量240ml、1000gは吸湿量300mlと案内されています。",
  },
  {
    q: "HYPERCUBEは繰り返し使えますか？",
    a: "電子レンジで加熱して再利用可能と案内されています。使い捨て除湿剤の交換頻度や廃棄物を減らしたい現場にも検討しやすい商品です。",
  },
  {
    q: "倉庫全体の湿気対策にもHYPERCUBEだけで十分ですか？",
    a: "倉庫全体や作業室全体の湿気対策には、HYPERCUBEだけではなく除湿機を検討するのが現実的です。HYPERCUBEは工具箱・保管庫・キャビネットなどの小空間、除湿機は広い空間という使い分けが適しています。",
  },
  {
    q: "工具の錆び防止にはHYPERCUBEだけでよいですか？",
    a: "HYPERCUBEは湿気対策の一つとして役立ちますが、工具の錆び防止を完全に保証するものではありません。使用後の汚れや水分を拭き取る、防錆油を使う、密閉保管する、湿度を確認するなどの対策と組み合わせて考えましょう。",
  },
  {
    q: "スポットエアコンと除湿機は同じ目的で使えますか？",
    a: "目的が異なります。スポットエアコンは作業者や作業箇所を冷やす局所冷房、除湿機は空間の湿気を取る機器です。湿気対策が目的なら除湿機や除湿剤、暑さ対策が目的ならスポットエアコンを検討します。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "選び方ガイド", item: `${SITE_URL}/category/guide` },
    {
      "@type": "ListItem",
      position: 3,
      name: "工具箱・保管庫の湿気対策",
      item: `${SITE_URL}/articles/${SLUG}`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <span>選び方ガイド</span>
          <span className="mx-1">/</span>
          <span className="text-gray-700">工具箱・保管庫の湿気対策</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          工具箱・保管庫の湿気対策｜繰り返し使える除湿石HYPERCUBEと除湿機の使い分け
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年6月30日／約12分で読めます
        </p>

        <img
          src={`${ARTICLE_IMG}/tool-cabinet-moisture-control-hero.jpg`}
          alt="工具箱や保管庫の湿気対策として除湿石を確認するイメージ"
          className="my-6 w-full rounded-lg"
        />

        <div className="my-8 rounded-lg border border-gray-300 bg-gray-100 p-5 leading-relaxed">
          <p className="mb-2 font-bold">工具箱・保管庫の湿気対策の考え方</p>
          <p className={cls.body.replace("mb-4 ", "")}>
            工具箱や保管庫の湿気対策では、まず「保管するもの」「空間の広さ」「電源の有無」「湿度を確認したいか」「繰り返し使いたいか」を確認します。工具キャビネットや精密機器保管のような限られた空間には、電源不要で繰り返し使える除湿石が候補になります。一方、倉庫や作業室など広い空間を除湿したい場合は、除湿機や大型除湿機を併用するのが現実的です。
          </p>
        </div>

        <p className={cls.body}>
          工具や精密機器は、使用中だけでなく保管中の湿気でも錆び・カビ・劣化のリスクがあります。とくに梅雨や夏場、冬の結露、換気しにくい地下倉庫や閉じた保管庫では、湿気がこもりやすく注意が必要です。
        </p>
        <p className={cls.body}>
          こうした湿気対策では、対象や空間によって手段を分けるのが現実的です。工具箱・工具キャビネット・精密機器の保管といった限られた空間には、電源不要で置けるSILENTDRY除湿石HYPERCUBEが便利です。一方で、倉庫全体や作業室全体のように広い空間を対象にする場合は、除湿機や大型除湿機が必要になることもあります。本記事では、HYPERCUBE 800g・1000gの特徴と使い分けを中心に、除湿機・スポットエアコンとの役割の違いまで整理します。
        </p>

        <H2>工具箱・保管庫の湿気対策が必要な理由</H2>

        <H3>工具や金属部品は保管中にも錆びることがある</H3>
        <p className={cls.body}>
          工具や金属部品は、水分、手の汗、油分、空気中の湿気などの影響で錆びやすくなります。工具箱やキャビネットの内部は密閉されている分、湿気がこもることもあります。さらに工場・倉庫・整備工場では、昼夜や季節の温度差によって結露（空気中の水分が冷えた表面で水滴になる現象）が起こりやすく、保管中の錆びの一因になります。
        </p>

        <H3>精密機器・計測器・カメラは湿気に弱い</H3>

        <img
          src={`${ARTICLE_IMG}/precision-equipment-moisture-storage.jpg`}
          alt="計測機器や精密機器の保管で湿気対策をするイメージ"
          className="my-6 w-full rounded-lg"
        />

        <p className={cls.body}>
          計測機器、測定器、カメラ、レンズ、電子部品などは湿気の影響を受けやすく、保管時の湿度管理が品質維持につながります。HYPERCUBEは、精密機器・計測機器・カメラなどの光学機器保管用の除湿剤としても案内されており、防湿庫がない現場の補助的な湿気対策として検討しやすいアイテムです。
        </p>

        <H2>除湿石HYPERCUBEとは</H2>

        <H3>電子レンジで再利用できる除湿石</H3>
        <p className={cls.body}>
          HYPERCUBEは、吸湿後に電子レンジで加熱することで再利用できる除湿アイテムです。電源不要・排水不要で、保管空間に置くだけで使えます。半永久的に繰り返し使えるエコ除湿剤として案内されており、湿度計付きのため保管空間の湿度確認にも使いやすい設計です。
        </p>
        <p className="my-4 text-sm leading-relaxed text-gray-600">
          ※再利用の可否や回数、加熱方法はメーカーの案内に従ってください。使用環境により吸湿の状態は変わります。
        </p>

        <H3>ナノ多孔質シリコン素材で環境にも配慮しやすい</H3>
        <p className={cls.body}>
          本体の材質はナノ多孔質シリコン、カバーはPBT（耐熱性のあるエンジニアリングプラスチック）です。天然素材のシリコンをナノ加工しており、廃棄しても自然に土に戻るエコ素材として案内されています。特許を取得した製品でもあり、使い捨て除湿剤の交換・廃棄を減らしたい現場で検討しやすい点が特徴です。
        </p>

        <H2>HYPERCUBE 800gと1000gの違い</H2>

        <img
          src={`${ARTICLE_IMG}/hypercube-800-1000-comparison.jpg`}
          alt="除湿石HYPERCUBE 800gと1000gを比較するイメージ"
          className="my-6 w-full rounded-lg"
        />

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">項目</th>
                <th className="p-3 text-left">AFA800</th>
                <th className="p-3 text-left">AFA1000</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "商品名",
                  "SILENTDRY 除湿石 HYPERCUBE 800g 湿度計付",
                  "SILENTDRY 除湿石 HYPERCUBE 1000g 湿度計付",
                ],
                ["品番", "AFA800", "AFA1000"],
                [
                  "除湿量",
                  "240ml±10％/サイクル（吸湿量240ml）",
                  "300ml±10％/サイクル（吸湿量300ml）",
                ],
                [
                  "サイズ",
                  "幅122×奥行122×高さ75mm",
                  "幅122×奥行122×高さ88mm",
                ],
                ["質量", "800g", "1000g"],
                [
                  "材質",
                  "本体：ナノ多孔質シリコン／カバー：PBT",
                  "本体：ナノ多孔質シリコン／カバー：PBT",
                ],
                ["付属", "湿度計付き", "湿度計付き"],
                ["想定用途", "中型工具キャビネット向け", "大型工具キャビネット向け"],
                ["商品導線", "楽天商品ページ（下部CTA）", "楽天商品ページ（下部CTA）"],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-gray-300">
                  <th className="bg-gray-100 p-3 text-left align-top font-bold">
                    {row[0]}
                  </th>
                  <td className="p-3 align-top">{row[1]}</td>
                  <td className="p-3 align-top">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={cls.body}>
          中型の工具キャビネットや小〜中規模の保管庫にはAFA800、大型の工具キャビネットやより大きな保管空間にはAFA1000が目安になります。
        </p>

        <H2>HYPERCUBEが向いている保管場所</H2>

        <H3>工具箱・工具キャビネット</H3>

        <img
          src={`${ARTICLE_IMG}/tool-cabinet-dehumidifier-stone.jpg`}
          alt="工具キャビネットに除湿石を置くイメージ"
          className="my-6 w-full rounded-lg"
        />

        <p className={cls.body}>
          スパナ、レンチ、ドライバー、ビット、測定工具などを収納する工具箱・キャビネットの湿気対策に向きます。中型工具キャビネットならAFA800、大型工具キャビネットならAFA1000が目安です。
        </p>

        <H3>精密機器・計測機器・光学機器</H3>
        <p className={cls.body}>
          測定器、検査機器、カメラ、レンズ、治具などの保管にも候補になります。防湿庫がない現場で、保管中の湿度を抑えたい場合の補助対策として検討しやすいアイテムです。
        </p>

        <H3>部品棚・金属部品・予備パーツの保管</H3>
        <p className={cls.body}>
          ネジ、ベアリング、刃物、金型部品、電子部品などの保管にも使えます。ただし、HYPERCUBEは錆びを完全に防ぐものではありません。清掃、防錆油の使用、密閉容器での保管などと組み合わせて、保管環境全体で対策することが大切です。
        </p>

        <CTA
          url={URL_AFA800}
          label="工具箱・保管庫の湿気対策に使える除湿石を確認する（800g）"
        />

        <H2>HYPERCUBEを選ぶメリット</H2>

        <H3>電源不要で工具箱や保管庫に置きやすい</H3>
        <p className={cls.body}>
          コンセント不要、排水不要、運転音もありません。配線や設置工事が不要なため、工具箱やキャビネットのような小さな空間にそのまま置きやすいのが利点です。
        </p>

        <H3>電子レンジで再利用でき、使い捨て削減につながる</H3>
        <p className={cls.body}>
          加熱して繰り返し使えるため、使い捨て除湿剤のように頻繁に買い足す必要を抑えやすく、廃棄物の削減にもつながります。
        </p>

        <H3>湿度計付きで保管状態を確認しやすい</H3>
        <p className={cls.body}>
          本体に湿度計が付いているため、保管空間の湿度を見ながら管理できます。保管庫の点検ルールに「湿度をチェックする」を組み込みやすい点もメリットです。
        </p>

        <H2>HYPERCUBEを使うときの注意点</H2>

        <H3>水や液体に入れない</H3>
        <p className={cls.body}>
          メーカーの注意事項として、次の点が案内されています。
        </p>
        <ul className={cls.list}>
          <li>落としたり、ぶつけたりしない</li>
          <li>除湿石を水やその他の液体に入れない</li>
          <li>油類や消臭剤を加えない</li>
          <li>子どもやペットの手の届かない場所に保管する</li>
          <li>手入れは乾いた柔らかい布で行う</li>
        </ul>

        <H3>広い倉庫全体の除湿には除湿機を検討する</H3>
        <p className={cls.body}>
          HYPERCUBEは工具箱・キャビネット・保管庫などの小空間向けです。倉庫全体や作業室全体、結露が多い室内の湿気を下げたい場合は、除湿機のほうが向いています。「小空間は除湿石、広い空間は除湿機」という使い分けを基本に考えるとよいでしょう。
        </p>

        <H2>除湿石と除湿機の使い分け（用途別早見表）</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">使用場所</th>
                <th className="p-3 text-left">向いている対策</th>
                <th className="p-3 text-left">該当商品</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["工具箱・小型保管庫", "電源不要の除湿石", "HYPERCUBE 800g（AFA800）"],
                ["大型工具キャビネット", "電源不要の除湿石", "HYPERCUBE 1000g（AFA1000）"],
                [
                  "精密機器・カメラ保管",
                  "電源不要の除湿石",
                  "HYPERCUBE 800g／1000g",
                ],
                ["事務所・小部屋", "小型の除湿機", "NAKATOMI DM-10"],
                ["工場・倉庫", "大型除湿機", "IRIS IJCGA50（50L）"],
                [
                  "広い施設・脱衣所・図書館など",
                  "衣類乾燥もできる除湿機",
                  "IRIS IJDCN80W（デシカント式 8L）",
                ],
                [
                  "暑さ対策も必要な作業場",
                  "スポットエアコン・移動式エアコン",
                  "TRUSCO TS23ECN1DL／NAKATOMI MAC-25N／TOYOTOMI TAD22NW",
                ],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-gray-300">
                  <th className="bg-gray-100 p-3 text-left align-top font-bold">
                    {row[0]}
                  </th>
                  <td className="p-3 align-top">{row[1]}</td>
                  <td className="p-3 align-top">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="my-4 text-sm leading-relaxed text-gray-600">
          ※適用範囲・能力は設置環境や面積によって変わります。各商品の仕様・適用床面積は商品ページでご確認ください。
        </p>

        <H2>湿気対策と暑さ対策を一緒に考える現場もある</H2>

        <img
          src={`${ARTICLE_IMG}/spot-air-conditioner-humidity-control-workshop.jpg`}
          alt="作業場でスポットエアコンと除湿対策を併用するイメージ"
          className="my-6 w-full rounded-lg"
        />

        <H3>スポットエアコンは冷風対策、除湿石や除湿機は湿度管理に使い分ける</H3>
        <p className={cls.body}>
          夏場の工場・倉庫ではスポットエアコンを導入することがありますが、湿気や結露の対策には除湿機・除湿剤の考え方が必要です。役割を整理すると、スポットエアコンは作業者や作業箇所を冷やす局所冷房、除湿石は工具箱・保管庫の小空間向け、除湿機は室内・倉庫・施設の湿度管理向け、という使い分けになります。目的が「暑さ」なのか「湿気」なのかで選ぶ機器が変わります。
        </p>

        <H2>購入前に確認したいチェックリスト</H2>
        <ul className="my-6 space-y-2 leading-relaxed">
          {[
            "保管したいものは工具か、精密機器か、部品か",
            "保管空間は工具箱・キャビネット・倉庫のどれか",
            "電源を使える場所か",
            "排水やタンク処理ができるか",
            "湿度計で状態を確認したいか",
            "使い捨てではなく繰り返し使いたいか",
            "水や油、粉じんが直接かからない場所か",
            "落下・衝撃のリスクが少ない場所か",
            "梅雨や冬の結露時期だけ使うのか、通年管理するのか",
            "小空間は除湿石、広い空間は除湿機という使い分けができているか",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="font-bold text-gray-900">☑</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <H2>SILENTDRY 除湿石 HYPERCUBEを確認する</H2>
        <h3 className={cls.h3}>
          工具箱・保管庫の湿気対策に使える除湿石を確認する
        </h3>

        <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <img
            src={IMG_AFA800}
            alt="SILENTDRY除湿石HYPERCUBE 800gの商品画像"
            className="w-full rounded-lg"
          />
          <img
            src={IMG_AFA1000}
            alt="SILENTDRY除湿石HYPERCUBE 1000gの商品画像"
            className="w-full rounded-lg"
          />
        </div>

        <p className={cls.body}>
          工具キャビネットや精密機器保管など、電源を使いにくい小空間の湿気対策には、繰り返し使えるSILENTDRY
          除湿石HYPERCUBEが候補になります。中型工具キャビネットには800g、大型工具キャビネットには1000gを目安に、保管空間や湿度管理のしやすさで選びましょう。
        </p>

        <CTA url={URL_AFA800} label="HYPERCUBE 800gを楽天で確認する" />
        <CTA url={URL_AFA1000} label="HYPERCUBE 1000gを楽天で確認する" />

        <H2>倉庫・作業室全体の湿気対策には除湿機も確認する</H2>

        <img
          src={`${ARTICLE_IMG}/warehouse-dehumidifier-moisture-control.jpg`}
          alt="倉庫で除湿機を使い湿気対策をするイメージ"
          className="my-6 w-full rounded-lg"
        />

        <p className={cls.body}>
          倉庫全体や作業室全体など、広い空間の湿気を下げたい場合は除湿機が現実的です。空間や用途に合わせて、小型の除湿機、衣類乾燥もできる除湿機、業務用の大型除湿機などを検討しましょう。「小空間は除湿石、広い空間は除湿機」が基本の使い分けです。
        </p>

        <CTA
          url={URL_DM10}
          label="事務所・小部屋向け｜NAKATOMI 除湿機 DM-10を確認する"
        />
        <CTA
          url={URL_IJDCN80W}
          label="衣類乾燥もできる｜IRIS 除湿機 IJDCN80W（8L）を確認する"
        />
        <CTA
          url={URL_IJCGA50}
          label="工場・倉庫向け｜IRIS 業務用大型除湿機 IJCGA50（50L）を確認する"
        />

        <H2>暑さ対策が必要な現場はスポットエアコン・移動式エアコンも</H2>
        <p className={cls.body}>
          作業者の暑さ対策が必要な現場では、スポットエアコンや移動式エアコンが別軸の選択肢になります。湿気対策（除湿石・除湿機）とは目的が異なるため、用途に合わせて検討してください。
        </p>

        <CTA
          url={URL_TS23}
          label="局所冷房に｜TRUSCO スポットエアコン TS23ECN1DLを確認する"
        />
        <CTA
          url={URL_MAC25N}
          label="移動式エアコン｜NAKATOMI MAC-25Nを確認する"
        />
        <CTA
          url={URL_TAD22NW}
          label="冷暖対応｜TOYOTOMI スポット冷暖エアコン TAD22NWを確認する"
        />

        <H2>まとめ｜工具箱・保管庫の湿気対策は空間の広さで選ぶ</H2>
        <ul className={cls.list}>
          <li>工具箱やキャビネットには電源不要の除湿石が置きやすい</li>
          <li>中型キャビネットにはAFA800、大型キャビネットにはAFA1000が目安</li>
          <li>精密機器や計測機器の保管にも除湿石が候補になる</li>
          <li>倉庫や作業室全体には除湿機を検討する</li>
          <li>暑さ対策が必要な現場ではスポットエアコンも別軸で検討する</li>
          <li>錆びやカビを完全に防げるわけではないため、清掃・密閉・防錆対策と組み合わせる</li>
        </ul>

        <CTA url={URL_AFA800} label="HYPERCUBE 800gを楽天で確認する" />
        <CTA url={URL_AFA1000} label="HYPERCUBE 1000gを楽天で確認する" />

        <H2>よくある質問（FAQ）</H2>
        <div className="my-6 space-y-4">
          {faqs.map((item, i) => (
            <div key={item.q} className="rounded-lg border border-gray-200 p-4">
              <p className={cls.faqQ}>
                Q{i + 1}. {item.q}
              </p>
              <p className={cls.bodySm}>{item.a}</p>
            </div>
          ))}
        </div>

        <H2>関連記事</H2>
        <ul className={cls.list}>
          <li>
            <Link
              href="/articles/office-disaster-prevention-supplies"
              className="text-gray-900 underline hover:no-underline"
            >
              会社の防災用品リスト｜オフィス・店舗・現場で備えたい備蓄品と選び方
            </Link>
          </li>
          <li>
            <Link
              href="/articles/workwear-heat-protection-clothing"
              className="text-gray-900 underline hover:no-underline"
            >
              現場の暑さ対策は服装から｜冷感インナー・空調服・冷却ベストの選び方
            </Link>
          </li>
        </ul>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
