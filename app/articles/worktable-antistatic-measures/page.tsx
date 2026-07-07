import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "worktable-antistatic-measures";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/workbench-static-control-supplies-hero.jpg`,
  agent: `${ARTICLE_IMG}/antistatic-agent-plastic-panel-prep.jpg`,
  mat: `${ARTICLE_IMG}/conductive-mat-wrist-strap-workbench.jpg`,
  brush: `${ARTICLE_IMG}/antistatic-brush-dust-removal.jpg`,
  packing: `${ARTICLE_IMG}/antistatic-bags-esd-packaging.jpg`,
  checklist: `${ARTICLE_IMG}/antistatic-agent-purchasing-checklist.jpg`,
};

export const metadata: Metadata = {
  title:
    "作業台の静電気対策に必要なもの｜静電防止剤・導電マット・リストストラップの選び方｜作業用品ナビ",
  description:
    "作業台の静電気対策に必要な用品を解説。静電防止剤、導電マット、リストストラップ、静電気除去シート、除電ブラシ、帯電防止バッグなど、工場・作業場・樹脂板加工・電子部品作業で使う静電気対策用品の選び方を紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "作業台の静電気対策に必要なもの｜静電防止剤・導電マット・リストストラップの選び方",
    description:
      "作業台の静電気対策に必要な用品を解説。静電防止剤、導電マット、リストストラップ、静電気除去シート、除電ブラシ、帯電防止バッグなど、工場・作業場・樹脂板加工・電子部品作業で使う静電気対策用品の選び方を紹介します。",
    type: "article",
    images: [IMG.hero],
  },
};

const UTM = "utm_source=sagyou_navi";
const productImage = (id: string) => `/products/${id}.jpg`;

function buildUrl(url: string, utm: string = UTM): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

const u = (url: string) => buildUrl(url);

const Y = (id: string) =>
  `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=`;

const URL_ANTISTATIC_AGENT_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/c0c5c5c5cb.html";
const URL_ANTISTATIC_GOODS_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/20cbc55c55c.html?b=61&view=grid";

type Prod = {
  id: string;
  imgId?: string;
  name: string;
  use: string;
  url: string;
};

const ANTISTATIC_AGENTS: Prod[] = [
  {
    id: "009345",
    name: "ヒシコートA 塗布式静電防止剤 1L（三菱ケミカルインフラテック）",
    use: "アルミ複合板・樹脂板・プレート看板の前処理／フィルム貼り前のホコリ付着対策（単品）",
    url: Y("009345"),
  },
  {
    id: "009344",
    name: "10本入 ヒシコートA 塗布式静電防止剤 1L",
    use: "複数作業台・複数人作業でヒシコートAを継続使用する現場（まとめ買い）",
    url: Y("009344"),
  },
  {
    id: "073884",
    name: "コートロン COATRON 帯電防止剤 1L（タキロンシーアイ）",
    use: "PVC・PET・PP・PE・ABSなど樹脂素材の樹脂板加工・帯電防止用途（単品）",
    url: Y("073884"),
  },
  {
    id: "073885",
    name: "6本入 コートロン COATRON 帯電防止剤 1L",
    use: "継続使用・複数拠点でコートロンを使う現場（まとめ買い）",
    url: Y("073885"),
  },
];

const MAT_GROUND: Prod[] = [
  {
    id: "163349",
    name: "導電マット CDM2333",
    use: "作業台上・床面の静電気対策（アース接続とセットで運用）",
    url: Y("163349"),
  },
  {
    id: "163364",
    name: "導電性作業チェア DC-10BK",
    use: "作業者の椅子からの帯電対策（床・マットのアース系統とあわせて確認）",
    url: Y("163364"),
  },
  {
    id: "163301",
    name: "グラウンドコード ASP30",
    use: "マット・機器のアース接続（接続先・接続方法を社内基準で確認）",
    url: Y("163301"),
  },
  {
    id: "163303",
    name: "導電マット接続アース線 GW0.1",
    use: "導電マットの接地接続（マット側端子との適合を確認）",
    url: Y("163303"),
  },
];

const WORKER_ITEMS: Prod[] = [
  {
    id: "163373",
    name: "エレブレイク フード付つなぎ服",
    use: "衣服からの帯電対策（帯電防止服）／作業者ごとの支給・管理ルールを決める",
    url: Y("163373"),
  },
  {
    id: "163368",
    name: "静電気除去アームカバー SDA",
    use: "腕からの帯電対策（手元・腕を使う作業）",
    url: Y("163368"),
  },
  {
    id: "163288",
    name: "リストストラップバンド SEWS-A",
    use: "手元の帯電対策（バンド）／アースターミナルとセットで管理",
    url: Y("163288"),
  },
  {
    id: "163289",
    name: "リストストラップ 金属アレルギー対応 WS-A-MS",
    use: "金属アレルギーに配慮した手元対策",
    url: Y("163289"),
  },
  {
    id: "163291",
    name: "リストストラップ WS-A",
    use: "手元の帯電対策（標準）／アースターミナルとセットで管理",
    url: Y("163291"),
  },
  {
    id: "163293",
    name: "アースターミナル WS-ET",
    use: "リストストラップの接地接続（リストストラップとセットで運用）",
    url: Y("163293"),
  },
];

const FACILITY_ITEMS: Prod[] = [
  {
    id: "163321",
    name: "静電気除去シート 抗菌スパークガードマグネット",
    use: "扉まわり・設備入口・共有部分で触れて除電",
    url: Y("163321"),
  },
  {
    id: "163337",
    name: "帯電防止防炎フィルムシート 防炎UVカット防虫タイプ",
    use: "作業区画の間仕切り（防炎・UVカット・防虫）",
    url: Y("163337"),
  },
  {
    id: "163333",
    name: "帯電防止防炎フィルムシート 防炎薄手タイプ",
    use: "作業区画の間仕切り（防炎・薄手）",
    url: Y("163333"),
  },
  {
    id: "163343",
    name: "静電気除去シート SD50100",
    use: "触れて除電するシート（作業エリアの共有部分）",
    url: Y("163343"),
  },
];

const BRUSH_ITEMS: Prod[] = [
  {
    id: "163276",
    name: "静電ブラシ BAS180",
    use: "樹脂板・製品表面・フィルム貼り前・梱包前のホコリ除去",
    url: Y("163276"),
  },
  {
    id: "163281",
    name: "除電ブラシ ソフト 木柄タイプ Mサイズ TJB-SM",
    use: "傷を抑えたいデリケートな表面の清掃",
    url: Y("163281"),
  },
  {
    id: "163284",
    name: "導電性ダスター刷毛 TDPB-56",
    use: "細部・すき間のホコリ除去",
    url: Y("163284"),
  },
];

const PACKING_ITEMS: Prod[] = [
  {
    id: "163306",
    name: "帯電防止バッグ TAD-2030",
    use: "電子部品・小物部品・製品の梱包前後の保管",
    url: Y("163306"),
  },
  {
    id: "163311",
    name: "クリーンルーム用ESDテープ CET5050",
    use: "固定・表示・導電補助（クリーンルーム対応）",
    url: Y("163311"),
  },
  {
    id: "163313",
    name: "銅箔テープ TCD3520N",
    use: "導電補助・アース補助",
    url: Y("163313"),
  },
];

const OVERVIEW_ROWS = [
  { area: "樹脂板・作業台表面", items: "ヒシコートA、コートロン" },
  { area: "作業台・床", items: "導電マット、アース線" },
  { area: "作業者", items: "リストストラップ、アームカバー、帯電防止服" },
  { area: "入口・設備", items: "静電気除去シート、抗菌スパークガードマグネット" },
  { area: "清掃・仕上げ", items: "静電ブラシ、除電ブラシ、導電性ダスター刷毛" },
  { area: "梱包・保管", items: "帯電防止バッグ、ESDテープ" },
  { area: "間仕切り・カバー", items: "帯電防止防炎フィルムシート" },
];

const CHECKLIST = [
  "静電気が気になる場所は作業台表面・床・作業者・梱包のどこか確認したか",
  "樹脂板やフィルム貼り前のホコリ対策に静電防止剤を検討したか",
  "使用する素材に静電防止剤が適合するか確認したか",
  "火気・換気・保護具・SDS確認のルールを決めたか",
  "導電マットとアース接続をセットで確認したか",
  "作業者用にリストストラップや帯電防止用品を検討したか",
  "仕上げ・清掃用に除電ブラシを用意したか",
  "梱包・保管用に帯電防止バッグやESDテープを確認したか",
  "単品導入か、まとめ買いかを決めたか",
  "静電防止剤一覧・静電気対策用品一覧を確認したか",
];

const FAQ_ITEMS = [
  {
    q: "作業台の静電気対策では何を用意すればよいですか？",
    a: "静電気が発生している場所を作業台表面・床・作業者・工具・梱包材に分けて考えると、必要な用品を整理しやすくなります。樹脂板やフィルム貼り前のホコリ付着には静電防止剤、作業者や電子部品の帯電には導電マットやリストストラップ、仕上げのホコリ除去には除電ブラシなどを組み合わせて検討します。静電気対策用品一覧からまとめて確認できます。",
  },
  {
    q: "ヒシコートAやコートロンは作業台の静電気対策に使えますか？",
    a: "ヒシコートA・コートロンは塗布式の静電防止剤で、樹脂板やアルミ複合板などの表面処理・前処理に使いやすい用品の一つです。ただし作業者や電子部品のESD対策には、導電マット・アース線・リストストラップなどの併用も確認してください。使用前には素材適合・換気・保護具・SDSの確認が必要です。",
  },
  {
    q: "導電マットは置くだけでよいですか？",
    a: "導電マットは置くだけでなく、アース線・グラウンドコードで接地までつなげて運用することが前提です。接続方法や接続先は社内基準に沿って確認してください。",
  },
  {
    q: "リストストラップはどんな作業に向いていますか？",
    a: "電子部品や精密作業、作業台上での部品取り扱いなど、作業者の手元の帯電を抑えたい作業に向いています。アースターミナルとセットで管理することが前提です。金属アレルギーに配慮したタイプもあります。",
  },
  {
    q: "除電ブラシはどんなときに使いますか？",
    a: "樹脂板・製品表面・フィルム貼り前・梱包前など、静電気で付着したホコリを除去したいときに使います。傷を抑えたい表面にはソフトタイプ、細部には導電性ダスター刷毛など、対象に合わせて使い分けます。",
  },
  {
    q: "静電防止剤と静電気対策用品はどう使い分けますか？",
    a: "静電防止剤は主に表面処理・前処理向け、導電マットやリストストラップは作業者・床・機器のESD対策向けと考えると整理しやすくなります。どちらか一方で完結するものではないため、現場の状況に合わせて組み合わせを検討してください。静電防止剤一覧・静電気対策用品一覧からそれぞれ確認できます。",
  },
];

const RELATED = [
  {
    href: "/articles/antistatic-agent-hishicoat-coatron",
    label:
      "ヒシコート・コートロンとは？静電防止剤でホコリ付着・油脂汚れを抑える使い方と選び方",
  },
];

function CTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="my-6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="block w-full rounded-md bg-gray-900 px-6 py-4 text-center text-base font-bold text-white transition-colors hover:bg-gray-700"
      >
        {children}
      </a>
    </div>
  );
}

function FinalCTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="my-6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="block w-full rounded-lg bg-gray-900 px-6 py-6 text-center text-lg font-bold text-white shadow-lg transition-colors hover:bg-gray-700"
      >
        {children}
      </a>
    </div>
  );
}

function ProductCard({ item }: { item: Prod }) {
  const imgId = item.imgId ?? item.id;
  return (
    <a
      href={u(item.url)}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-sm transition hover:border-gray-400 hover:shadow-lg"
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={productImage(imgId)}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-contain p-3 transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-sm font-bold leading-snug text-gray-900">{item.name}</p>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-600">{item.use}</p>
        <span className="mt-3 inline-block rounded-lg bg-gray-900 px-4 py-2 text-center text-sm font-bold text-white">
          商品ページを見る
        </span>
      </div>
    </a>
  );
}

function ProductGrid({ items }: { items: Prod[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

function H2({ children }: { children: ReactNode }) {
  return <h2 className={cls.h2}>{children}</h2>;
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className={cls.h3}>{children}</h3>;
}

function ArticleImg({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="my-6 w-full rounded-lg"
    />
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <span>選び方ガイド</span>
          <span className="mx-1">/</span>
          <span className="text-gray-700">作業台の静電気対策</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          作業台の静電気対策に必要なもの｜静電防止剤・導電マット・リストストラップの選び方
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月7日／約15分で読めます
        </p>

        <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5 leading-relaxed">
          <p className={cls.body}>
            作業台の静電気対策では、作業台表面・床・作業者・工具・梱包材のどこで静電気が発生しているかを分けて考えることが重要です。樹脂板やフィルム貼り前のホコリ付着には静電防止剤、電子部品や作業者の帯電対策には導電マットやリストストラップ、仕上げ時のホコリ除去には除電ブラシなどを組み合わせて検討します。ヒシコートA・コートロンのような塗布式静電防止剤は、作業台まわりの表面処理や樹脂板加工の前処理に使いやすい一方、作業者や電子部品のESD対策では、導電マット・アース線・リストストラップなどの併用も確認しましょう。
          </p>
        </div>

        <ArticleImg
          src={IMG.hero}
          alt="作業台の静電気対策用品を確認するイメージ"
        />

        <H2>作業台の静電気対策は「表面・床・作業者・工具・梱包」で分ける</H2>

        <H3>樹脂板やフィルム貼りではホコリ付着が問題になりやすい</H3>
        <p className={cls.body}>
          樹脂板・フィルム・シート材は静電気を帯びやすく、周囲のホコリを引き寄せてしまいます。貼り込み時にゴミを噛み込むと、気泡や仕上がり不良の原因になり、看板製作や樹脂板加工では歩留まりに直結します。こうした表面のホコリ付着を抑えたい場面では、塗布式の静電防止剤（ヒシコートA・コートロン）を前処理として検討しやすくなります。
        </p>

        <H3>電子部品や精密作業ではESD対策も必要になる</H3>
        <p className={cls.body}>
          電子部品や精密部品を扱う作業では、作業者自身が帯電したり、作業台や椅子から放電したりすることが問題になります。この場合は表面処理だけでは足りず、導電マット・リストストラップ・アース線などを組み合わせ、帯電した電荷を安全に逃がす経路を確保することが必要です。
        </p>

        <H3>作業台だけでなく周辺環境も見る</H3>
        <p className={cls.body}>
          静電気対策は作業台の上だけで完結するものではありません。床、椅子、作業服、梱包材、保管袋、間仕切りシートなど、作業台の周辺まで含めて、どこで静電気が発生・蓄積しているかを見渡すことが、抜け漏れのない対策につながります。
        </p>

        <H2>まず確認したい作業台まわりの静電気対策用品リスト</H2>
        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">対策する場所</th>
                <th className="border border-gray-200 px-3 py-2">主な用品</th>
              </tr>
            </thead>
            <tbody>
              {OVERVIEW_ROWS.map((row) => (
                <tr key={row.area} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-semibold">
                    {row.area}
                  </td>
                  <td className="border border-gray-200 px-3 py-2">{row.items}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CTA href={u(URL_ANTISTATIC_GOODS_LIST)}>
          作業台まわりの静電気対策用品をまとめて確認する
        </CTA>

        <H2>樹脂板・フィルム貼り前のホコリ対策には静電防止剤を使う</H2>

        <ArticleImg
          src={IMG.agent}
          alt="樹脂板やフィルム貼り前に静電防止剤で前処理するイメージ"
        />

        <p className={cls.body}>
          塗布式の静電防止剤は、樹脂板や作業台の表面に塗ることで帯電を抑え、ホコリの付着を軽減する前処理用品です。ヒシコートAとコートロンの詳しい違いや基本的な使い方は
          <Link
            href="/articles/antistatic-agent-hishicoat-coatron"
            className="text-gray-900 underline hover:no-underline"
          >
            別記事
          </Link>
          で解説していますので、ここでは「作業台の表面処理・樹脂板加工の前処理用品」という観点で整理します。
        </p>

        <H3>ヒシコートAは看板製作・樹脂板加工の前処理に検討しやすい</H3>
        <p className={cls.body}>
          ヒシコートAは、アルミ複合板や樹脂板、フィルム貼り前、プレート看板などで、表面のホコリ付着を抑えたい現場で検討しやすい静電防止剤です。複数の作業台や複数人での作業でまとまった量を使う場合は、10本入もあわせて検討できます。
        </p>

        <H3>コートロンは樹脂板加工・帯電防止用途で検討しやすい</H3>
        <p className={cls.body}>
          コートロンは、PVC・PET・PP・PE・ABSといった樹脂素材を扱う樹脂板加工や帯電防止用途で検討しやすい帯電防止剤です。継続的に使う現場や複数拠点での使用では、6本入もあわせて検討できます。
        </p>

        <H3>使用前には素材適合・換気・SDS確認が必要</H3>
        <p className={cls.body}>
          静電防止剤は素材によって適合が異なります。火気厳禁・換気・保護具の着用を守り、使用前にSDS（安全データシート）を確認してください。特にアクリル板はクラック（ひび割れ）が生じる場合があるため、本番の前に目立たない箇所で試し塗りを行い、素材への影響を確認することをおすすめします。
        </p>

        <ProductGrid items={ANTISTATIC_AGENTS} />

        <p className={cls.body}>
          <a
            href={u(URL_ANTISTATIC_AGENT_LIST)}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-gray-900 underline hover:no-underline"
          >
            静電防止剤一覧を見る
          </a>
        </p>
        <CTA href={u(URL_ANTISTATIC_AGENT_LIST)}>
          樹脂板・作業台表面のホコリ対策に静電防止剤を確認する
        </CTA>

        <H2>作業台・床の静電気対策には導電マットとアース接続を確認する</H2>

        <ArticleImg
          src={IMG.mat}
          alt="導電マットとリストストラップを作業台に設置するイメージ"
        />

        <H3>導電マットは作業台・床面の対策に使う</H3>
        <p className={cls.body}>
          導電マットは、作業台の上や床面に敷くことで、部品組立や精密作業時の静電気対策として使える用品です。作業者が触れる面や部品を置く面の帯電を抑える役割があります。
        </p>

        <H3>アース線・グラウンドコードもセットで考える</H3>
        <p className={cls.body}>
          導電マットは、置くだけで対策が完了するものではありません。グラウンドコードや接続アース線で接地までつなげてはじめて、帯電した電荷を逃がす経路が確保されます。接続方法・接続先は社内基準に沿って確認してください。
        </p>

        <ProductGrid items={MAT_GROUND} />

        <H2>作業者の帯電対策にはリストストラップ・アームカバー・帯電防止服を使う</H2>

        <H3>手元作業ではリストストラップを検討する</H3>
        <p className={cls.body}>
          リストストラップは、電子部品や精密作業、作業台上での部品取り扱いなど、手元の帯電を抑えたい作業で使いやすい用品です。単体では機能せず、アースターミナルとセットで接地して管理することが前提です。金属アレルギーに配慮したタイプもあるため、作業者に合わせて選べます。
        </p>

        <H3>腕や衣服からの帯電も確認する</H3>
        <p className={cls.body}>
          手元だけでなく、腕や衣服からの帯電も確認しておきたいポイントです。静電気除去アームカバーや帯電防止服（つなぎ服）を、作業内容や作業者ごとの支給ルールに合わせて検討してください。
        </p>

        <ProductGrid items={WORKER_ITEMS} />

        <H2>入口・設備・間仕切りには静電気除去シートや帯電防止フィルムを使う</H2>

        <H3>触れる場所の対策には静電気除去シート</H3>
        <p className={cls.body}>
          扉まわりや設備の入口、作業エリアの共有部分など、多くの人が触れる場所には、静電気除去シートや抗菌スパークガードマグネットを設置することで、触れて除電する導線を作れます。
        </p>

        <H3>間仕切り・カバーには帯電防止防炎フィルムシート</H3>
        <p className={cls.body}>
          作業区画を仕切りたい場合や、防炎が求められる場所では、帯電防止防炎フィルムシートが検討候補になります。UVカット・防虫タイプや薄手タイプがあり、設置場所の条件に合わせて選べます。
        </p>

        <ProductGrid items={FACILITY_ITEMS} />

        <H2>仕上げ・清掃時のホコリ対策には除電ブラシを使う</H2>

        <ArticleImg
          src={IMG.brush}
          alt="除電ブラシで作業台や樹脂板のホコリを除去するイメージ"
        />

        <H3>表面のホコリ除去には静電ブラシ</H3>
        <p className={cls.body}>
          静電ブラシは、樹脂板や製品表面、フィルム貼り前、梱包前など、静電気で付着したホコリを除去したい場面で使いやすい用品です。仕上げや前処理の清掃に取り入れやすくなります。
        </p>

        <H3>傷を抑えたい清掃にはソフトタイプも検討</H3>
        <p className={cls.body}>
          傷を抑えたいデリケートな表面には、木柄のソフトタイプの除電ブラシ、細部やすき間には導電性ダスター刷毛など、対象に合わせて使い分けると清掃品質を保ちやすくなります。
        </p>

        <ProductGrid items={BRUSH_ITEMS} />

        <H2>梱包・保管時の静電気対策には帯電防止バッグやESDテープを使う</H2>

        <ArticleImg
          src={IMG.packing}
          alt="帯電防止バッグやESDテープで部品を梱包するイメージ"
        />

        <H3>部品・製品の保管には帯電防止バッグ</H3>
        <p className={cls.body}>
          電子部品や小物部品、静電気を避けたい製品の保管・梱包前後の管理には、帯電防止バッグが使えます。作業台での対策と保管時の対策を分けて考えることで、工程全体での抜け漏れを減らせます。
        </p>

        <H3>固定・表示・導電補助にはESDテープや銅箔テープ</H3>
        <p className={cls.body}>
          クリーンルーム用ESDテープや銅箔テープは、固定・表示・導電補助といった作業環境の補助用品として活用できます。使用環境の基準に適合するかを確認して選んでください。
        </p>

        <ProductGrid items={PACKING_ITEMS} />

        <H2>作業台の静電気対策でよくある失敗</H2>

        <H3>静電防止剤だけで作業者・床の対策までできると思ってしまう</H3>
        <p className={cls.body}>
          塗布式の静電防止剤は表面処理には有効ですが、作業者の帯電や床からの放電までカバーするものではありません。ESD対策が必要な工程では、導電マットやリストストラップなどの併用を確認しましょう。
        </p>

        <H3>導電マットを置くだけでアース接続を確認していない</H3>
        <p className={cls.body}>
          導電マットを敷いても、接地までつながっていなければ帯電を逃がせません。グラウンドコードや接続アース線での接地を必ず確認してください。
        </p>

        <H3>除電ブラシと通常の清掃用品を使い分けていない</H3>
        <p className={cls.body}>
          通常の乾いた布や刷毛では、かえって静電気を発生させてホコリを寄せることがあります。ホコリ除去には除電ブラシや導電性ダスター刷毛を使い分けましょう。
        </p>

        <H3>梱包・保管時の静電気対策を忘れる</H3>
        <p className={cls.body}>
          作業台での対策に注力するあまり、梱包・保管時の対策を見落とすことがあります。帯電防止バッグやESDテープまで含めて、工程全体で検討してください。
        </p>

        <H2>作業台の静電気対策チェックリスト</H2>

        <ArticleImg
          src={IMG.checklist}
          alt="法人担当者が静電気対策用品の備品リストを確認するイメージ"
        />

        <ul className={cls.list}>
          {CHECKLIST.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <H2>よくある質問</H2>
        <div className="mt-4 space-y-6">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q}>
              <p className={cls.faqQ}>Q. {item.q}</p>
              <p className={cls.body}>A. {item.a}</p>
            </div>
          ))}
        </div>

        <H2>関連記事</H2>
        <ul className={cls.list}>
          {RELATED.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="text-gray-900 underline hover:no-underline">
                {r.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-lg border border-gray-300 bg-gray-50 p-6">
          <h2 className={cls.ctaH3}>
            作業台の静電気対策用品を用途別に確認する
          </h2>
          <p className={cls.body}>
            静電防止剤・導電マット・リストストラップ・除電ブラシ・帯電防止バッグは、それぞれ対策する場所が異なります。現場の状況に合わせて、素材適合・アース接続・SDS・社内基準を確認しながら組み合わせを検討してください。
          </p>
          <FinalCTA href={u(URL_ANTISTATIC_AGENT_LIST)}>
            1. 樹脂板・作業台表面のホコリ対策に静電防止剤を確認する
          </FinalCTA>
          <FinalCTA href={u(URL_ANTISTATIC_GOODS_LIST)}>
            2. 作業台・床・作業者まわりの静電気対策用品を確認する
          </FinalCTA>
          <FinalCTA href={u(URL_ANTISTATIC_GOODS_LIST)}>
            3. 仕上げ・清掃・梱包まで含めた静電気対策用品をまとめて確認する
          </FinalCTA>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
