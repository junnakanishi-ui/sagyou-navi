import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

const SLUG = "commercial-insect-control-selection";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/commercial-insect-control-devices-hero.jpg`,
  types: `${ARTICLE_IMG}/electric-insect-killer-worksite.jpg`,
  adhesive: `${ARTICLE_IMG}/adhesive-insect-trap-food-factory.jpg`,
  entrance: `${ARTICLE_IMG}/entrance-insect-control-prevention.jpg`,
  sprayer: `${ARTICLE_IMG}/sprayer-insect-control-facility-exterior.jpg`,
  checklist: `${ARTICLE_IMG}/insect-control-procurement-checklist.jpg`,
};

export const metadata: Metadata = {
  title:
    "業務用殺虫器・捕虫器の選び方｜屋内・屋外・食品工場・店舗の虫対策に使う機器を比較｜作業用品ナビ",
  description:
    "業務用殺虫器・捕虫器の選び方を、電撃式・粘着式・薬剤蒸散タイプ・噴霧器の違いから解説。食品工場、店舗、倉庫、屋外作業場、現場休憩所など設置場所別に、虫対策用品の選定ポイントと注意点を紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "業務用殺虫器・捕虫器の選び方｜屋内・屋外・食品工場・店舗の虫対策に使う機器を比較",
    description:
      "業務用殺虫器・捕虫器の選び方を、電撃式・粘着式・薬剤蒸散タイプ・噴霧器の違いから解説。食品工場、店舗、倉庫、屋外作業場、現場休憩所など設置場所別に、虫対策用品の選定ポイントと注意点を紹介します。",
    type: "article",
    images: [IMG.hero],
  },
};

/* =========================================================
   URL ヘルパー（buildUrl は両サイト共通。UTM は # の前に付与）
   ========================================================= */
const UTM = "utm_source=sagyou_navi";

function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) => `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

function R(path: string): string {
  return buildUrl(`https://item.rakuten.co.jp/crecote-shop/${path}`, UTM);
}

function YB(id: string): string {
  return buildUrl(`https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html`, UTM);
}

const URLS = {
  gk1200y: R("ta054027-gk1200y/"),
  gk6200z: R("ta054028-gk6200z/"),
  ds708: R("ta053919-ds708/"),
  dgk1p: R("ta052564-dgk1p/"),
  ct102s: R("ta052549-ct102s/"),
  ct061: R("ta052548-ct061/"),
  mpx2000kdxa: R("ta052947-mpx2000kdxa/"),
  mpx2000tdxa: R("ta052948-mpx2000tdxa/"),
  mpx2000k: R("ta052946-mpx2000k/"),
  vapeCartridge: R("ta052146-432855/"),
  vapeSet: R("ta052148-432879/"),
  vapeTSet: R("ta052147-432862/"),
  sprayer5l: R("ta051193-6005/"),
  sprayer10l: R("ta051194-6006/"),
  kumonosu: YB("203322"),
  fumakiraPremium: YB("171740"),
  suzumebachi: YB("203321"),
  tousatsu: YB("203393"),
  mushikorori: YB("203324"),
  pgGuard: YB("171733"),
  katoriSenko: YB("203389"),
  tousatsu2pack: YB("203394"),
  listSearch: buildUrl(
    "https://search.rakuten.co.jp/search/mall/%E6%AE%BA%E8%99%AB/?sid=426972",
    UTM
  ),
};

const productImage = (id: string) => `/products/${id}.jpg`;

type Prod = {
  id: string;
  imgId?: string;
  name: string;
  use: string;
  url: string;
};

const ELECTRIC_KILLERS: Prod[] = [
  {
    id: "ta054027-gk1200y",
    name: "SURE 電撃殺虫器 屋内用 GK1200Y",
    use: "屋内用の電撃殺虫器。有効面積・設置条件はメーカー仕様を確認",
    url: URLS.gk1200y,
  },
  {
    id: "ta054028-gk6200z",
    name: "SURE 電撃殺虫器 屋外用 GK6200Z",
    use: "屋外用の電撃殺虫器。屋外設置条件・電源はメーカー仕様を確認",
    url: URLS.gk6200z,
  },
  {
    id: "ta053919-ds708",
    name: "大進 電撃殺虫器ムシコロ DS-708",
    use: "有効面積90〜130㎡・消費電力20W（メーカー公表値・要確認）",
    url: URLS.ds708,
  },
  {
    id: "ta052564-dgk1p",
    name: "ハタヤ 業務用電撃！蚊チッと DGK-1P",
    use: "UV光源で虫を誘引し高電圧で駆除する業務用タイプ（メーカー公表値・要確認）",
    url: URLS.dgk1p,
  },
];

const ADHESIVE_TRAPS: Prod[] = [
  {
    id: "ta052549-ct102s",
    name: "ピオニー クリーントラップスター CT-102S",
    use: "粘着式・有効面積40〜50㎡・AC100V・壁掛け型・捕虫ランプ10W（メーカー公表値・要確認）",
    url: URLS.ct102s,
  },
  {
    id: "ta052548-ct061",
    name: "ピオニー クリーントラップミニ CT-061",
    use: "粘着式・有効面積20㎡・壁掛け/据え置き両対応の小型タイプ（メーカー公表値・要確認）",
    url: URLS.ct061,
  },
  {
    id: "ta052947-mpx2000kdxa",
    name: "朝日 ムシポン MPX-2000K-DXA",
    use: "100V・20Wランプ・有効面積30〜50㎡の横型（メーカー公表値・要確認）",
    url: URLS.mpx2000kdxa,
  },
  {
    id: "ta052948-mpx2000tdxa",
    name: "朝日 ムシポン MPX-2000T-DXA",
    use: "100V・20Wランプ・有効面積30〜50㎡の縦型 壁付目隠しタイプ（メーカー公表値・要確認）",
    url: URLS.mpx2000tdxa,
  },
  {
    id: "ta052946-mpx2000k",
    name: "朝日 ムシポン MPX-2000K（20W よこ型/壁付型）",
    use: "工場・厨房・バックヤード向けの粘着式捕虫器。仕様はメーカー仕様を確認",
    url: URLS.mpx2000k,
  },
];

const VAPE_PRODUCTS: Prod[] = [
  {
    id: "ta052148-432879",
    name: "フマキラー ウルトラベープPRO1.8 セット",
    use: "薬剤カートリッジ式の殺虫・忌避タイプ。新カートリッジで効力1.8倍、屋外でも殺虫忌避効果とされる（メーカー公表値・要確認）",
    url: URLS.vapeSet,
  },
  {
    id: "ta052147-432862",
    name: "フマキラー ウルトラベープPRO1.8 Tセット",
    use: "ウルトラベープPRO1.8のセット構成違い。内容はメーカー仕様・商品ページを確認",
    url: URLS.vapeTSet,
  },
  {
    id: "ta052146-432855",
    name: "フマキラー ウルトラベープPRO1.8 カートリッジ",
    use: "ウルトラベープPRO1.8用の交換カートリッジ。適合・使用方法はメーカー仕様を確認",
    url: URLS.vapeCartridge,
  },
];

const SPRAYERS: Prod[] = [
  {
    id: "ta051193-6005",
    name: "GS 噴霧器 5L半自動タイプ 6005",
    use: "5L・ノズル350mm・ホース0.9m・質量1.5kg（メーカー公表値・要確認）",
    url: URLS.sprayer5l,
  },
  {
    id: "ta051194-6006",
    name: "GS 噴霧器 10L半自動タイプ 6006",
    use: "10L・ノズル490mm・ホース1.2m・質量2.1kg（メーカー公表値・要確認）",
    url: URLS.sprayer10l,
  },
];

const INSECTICIDES: Prod[] = [
  {
    id: "203322",
    name: "アース 業務用虫ブロック クモの巣 窓・ガラス",
    use: "窓・ガラスまわりのクモの巣対策。使用場所・ラベルを確認",
    url: URLS.kumonosu,
  },
  {
    id: "171740",
    name: "フマキラー 殺虫忌避スプレー プレミアム550ml",
    use: "忌避スプレー。使用場所・対象害虫・ラベルを確認",
    url: URLS.fumakiraPremium,
  },
  {
    id: "203321",
    name: "アース スズメバチマグナムジェットプロ 550ml",
    use: "ハチ用スプレー。巣・大量発生時は専門業者への相談を検討",
    url: URLS.suzumebachi,
  },
  {
    id: "203393",
    name: "フマキラー 凍殺ジェット300ml",
    use: "凍殺タイプの殺虫剤。使用場所・ラベルを確認",
    url: URLS.tousatsu,
  },
  {
    id: "203324",
    name: "アース 虫コロリアース粉剤550g",
    use: "粉剤タイプの不快害虫対策。使用場所・ラベルを確認",
    url: URLS.mushikorori,
  },
  {
    id: "171733",
    name: "フマキラー PGガード",
    use: "不快害虫対策。使用場所・ラベルを確認",
    url: URLS.pgGuard,
  },
  {
    id: "203389",
    name: "フマキラー ジャンボ蚊とり線香50巻缶",
    use: "屋外作業場・現場休憩所などでの蚊対策。火気・換気に注意",
    url: URLS.katoriSenko,
  },
  {
    id: "203394",
    name: "フマキラー 凍殺ジェット300ml 2本パック",
    use: "凍殺ジェットの2本パック。使用場所・ラベルを確認",
    url: URLS.tousatsu2pack,
  },
];

const FAQ_ITEMS = [
  {
    q: "業務用殺虫器は電撃式と粘着式のどちらがよいですか？",
    a: "屋外や作業場まわりの飛来虫対策には電撃式が候補になります。食品工場・厨房・店舗・病院など、虫の死骸や破片の飛散を避けたい場所では粘着式捕虫器が向いている場合があります。",
  },
  {
    q: "食品工場では電撃殺虫器を使えますか？",
    a: "食品工場では、虫の飛散や異物混入リスクに配慮する必要があります。電撃式を使う場合でも設置場所に注意し、製造ラインや食品・包装資材の近くでは粘着式捕虫器を中心に検討するのが一般的です。",
  },
  {
    q: "屋外で使う殺虫器は何を確認すべきですか？",
    a: "屋外対応の有無、雨のかかり方、電源、設置高さ、周辺への誘引、清掃しやすさを確認します。屋内用を屋外で使わないよう注意が必要です。",
  },
  {
    q: "捕虫器はどこに設置するとよいですか？",
    a: "出入口・搬入口・窓まわり・バックヤードなど虫の侵入経路を確認し、屋外から屋内へ虫を誘引しない位置に設置します。食品や商品に近すぎる場所は避け、点検しやすい場所を選びます。",
  },
  {
    q: "殺虫器だけで虫対策は十分ですか？",
    a: "十分とはいえません。殺虫器や捕虫器は対策の一部です。清掃、ゴミ管理、排水まわりの管理、侵入経路の封鎖、発生源対策、薬剤管理、捕虫記録と組み合わせることが重要です。",
  },
  {
    q: "ウルトラベープのような薬剤蒸散タイプはどこに向いていますか？",
    a: "出入口、前室、屋外休憩所、建物外周など、虫の侵入を抑えたい場所で候補になります。食品や人の動線、薬剤使用ルール、換気条件を確認して設置しましょう。",
  },
  {
    q: "噴霧器は殺虫剤散布に使えますか？",
    a: "使用する薬剤や用途に合う場合は使えます。ただし、薬剤ラベルの使用方法、希釈倍率、保護具、周辺への飛散防止、使用後の洗浄・保管を必ず確認してください。",
  },
  {
    q: "ハチ対策用品は現場で常備したほうがよいですか？",
    a: "屋外作業や資材置き場では、ハチ用スプレーを備えておくと初期対応に役立つ場合があります。ただし、巣がある場合や大量発生時は無理に対応せず、専門業者への相談を検討しましょう。",
  },
  {
    q: "捕虫器のランプや捕虫紙は交換が必要ですか？",
    a: "必要です。ランプや捕虫紙の性能が落ちると捕獲効率が下がる場合があります。交換時期を管理し、点検日や交換日を記録しておくと法人運用しやすくなります。",
  },
  {
    q: "法人で複数拠点に導入する場合の注意点は？",
    a: "機種・交換ランプ・捕虫紙・カートリッジをできるだけ統一すると、在庫管理や交換作業がしやすくなります。設置場所ごとの虫の種類や面積に合わせて、機種を分けることも重要です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

function CTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="my-4 block w-full rounded-md bg-gray-900 px-6 py-4 text-center font-bold text-white transition hover:bg-gray-700"
    >
      {children}
    </a>
  );
}

function FinalCTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="my-6 block w-full rounded-lg bg-gray-900 px-8 py-5 text-center text-lg font-bold text-white transition hover:bg-gray-700"
    >
      {children}
    </a>
  );
}

function ProductCard({ item }: { item: Prod }) {
  const imgId = item.imgId ?? item.id;
  return (
    <a
      href={item.url}
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
        <ProductCard key={`${item.id}-${item.name}`} item={item} />
      ))}
    </div>
  );
}

function ProductThumbLink({
  id,
  href,
  label,
}: {
  id: string;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-200 bg-white p-2 shadow-sm transition hover:border-gray-400 hover:shadow-md"
    >
      <img
        src={productImage(id)}
        alt={label}
        loading="lazy"
        className="h-14 w-14 shrink-0 object-contain"
      />
      <span className="rounded-md bg-gray-900 px-3 py-1.5 text-xs font-bold text-white">
        {label}
      </span>
    </a>
  );
}

function Caution({
  title = "⚠️ ご確認ください",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-6 rounded-md border border-red-300 bg-red-50 p-4">
      <p className="mb-2 font-bold text-red-800">{title}</p>
      <div className="space-y-2 text-sm leading-relaxed text-gray-800">{children}</div>
    </aside>
  );
}

function Th({ children }: { children: ReactNode }) {
  return (
    <th className="border border-gray-300 bg-gray-100 px-3 py-2 text-left text-sm font-bold">
      {children}
    </th>
  );
}

function Td({ children }: { children: ReactNode }) {
  return <td className="border border-gray-300 px-3 py-2 text-sm align-top">{children}</td>;
}

function ArticleImg({ src, alt }: { src: string; alt: string }) {
  return (
    <img src={src} alt={alt} loading="lazy" className="my-6 w-full rounded-lg" />
  );
}

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
          <span className="text-gray-700">業務用殺虫器・捕虫器の選び方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <article className="leading-relaxed text-gray-900">
          <h1 className="mb-6 text-3xl font-bold leading-snug">
            業務用殺虫器・捕虫器の選び方｜屋内・屋外・食品工場・店舗の虫対策に使う機器を比較
          </h1>

          <p className="mb-6 text-sm text-gray-500">公開日：2026年7月8日／約15分で読めます</p>

          <ArticleImg
            src={IMG.hero}
            alt="業務用殺虫器・捕虫器を現場別に選ぶイメージ"
          />

          <section className="my-6 rounded-md border border-gray-300 bg-gray-50 p-5">
            <p className="mb-3 font-bold">この記事の要点（先に結論）</p>
            <p className="mb-3">
              業務用の殺虫器・捕虫器は、<strong>設置場所と管理目的</strong>で選ぶのが基本です。
            </p>
            <ul className="mb-3 list-disc space-y-1 pl-6">
              <li>屋外や作業場まわりで蚊・飛来虫を減らしたい場合は、屋外対応の電撃殺虫器が候補になります。</li>
              <li>食品工場・店舗・厨房・病院など、虫の死骸や破片の飛散を避けたい場所では、粘着式捕虫器を検討します。</li>
              <li>出入口や前室からの侵入対策には、薬剤蒸散タイプや忌避用品を組み合わせる方法があります。</li>
              <li>敷地まわり・植栽・資材置き場などでは、殺虫剤散布用の噴霧器やスプレー類も選択肢になります。</li>
            </ul>
            <p>
              ただし、殺虫器だけで虫対策が完了するわけではありません。清掃、侵入経路の封鎖、発生源対策、設置位置の見直し、薬剤管理、捕虫記録などと組み合わせて考えることが重要です。
            </p>
          </section>

          <CTA href={URLS.listSearch}>
            業務用の殺虫器・捕虫器・殺虫剤を、殺虫アイテム一覧で確認する
          </CTA>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            業務用殺虫器・捕虫器は「設置場所」と「虫対策の目的」で選ぶ
          </h2>
          <h3 className="mt-8 mb-3 text-xl font-bold">屋外の蚊・飛来虫対策には屋外対応の電撃殺虫器</h3>
          <p className="mb-4">
            屋外作業場・倉庫外周・現場休憩所などで蚊や飛来虫が気になる場合は、屋外対応の電撃殺虫器が候補になります。屋内用・屋外用の別、電源、設置場所を確認しましょう。
          </p>
          <h3 className="mt-8 mb-3 text-xl font-bold">食品工場・店舗では粘着式捕虫器を検討する</h3>
          <p className="mb-4">
            虫の死骸や破片の飛散、異物混入を避けたい食品工場・店舗・厨房・病院では、捕虫テープで捕獲する粘着式捕虫器が向いている場合があります。
          </p>
          <h3 className="mt-8 mb-3 text-xl font-bold">出入口・前室では侵入防止対策も重要</h3>
          <p className="mb-4">
            扉の開閉が多い出入口・前室では、捕獲だけでなく侵入を抑える薬剤蒸散タイプや忌避用品を組み合わせる方法があります。
          </p>
          <h3 className="mt-8 mb-3 text-xl font-bold">敷地まわり・植栽・資材置き場では殺虫剤や噴霧器も候補</h3>
          <p className="mb-4">
            外周部・植栽・資材置き場に薬剤を散布する場合は、噴霧器やスプレー類も選択肢になります。使用する薬剤のラベルと使用条件を必ず確認します。
          </p>
          <h3 className="mt-8 mb-3 text-xl font-bold">殺虫器だけでなく、清掃・点検・記録と組み合わせる</h3>
          <p className="mb-4">
            殺虫器や捕虫器は虫対策の一部です。清掃、ゴミ・排水まわりの管理、侵入経路の封鎖、発生源対策、設置位置の見直し、捕虫記録などとあわせて考えることが重要です。
          </p>

          <Caution>
            <p>
              殺虫器・捕虫器を設置しても、それだけで虫対策が完了するわけではありません。清掃・発生源対策・侵入経路の封鎖・設置位置の見直し・薬剤管理・捕虫記録を組み合わせた総合的な防除（IPMの考え方）が重要です。とくに食品を扱う施設では、
              <strong>殺虫剤を使う際に食品や添加物を汚染しないよう注意し</strong>
              、ねずみ・昆虫の定期的な調査とあわせて管理してください。
            </p>
          </Caution>

          <CTA href={URLS.listSearch}>
            電撃殺虫器・粘着式捕虫器・薬剤蒸散タイプ・噴霧器を、殺虫アイテム一覧で確認する
          </CTA>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            殺虫器・捕虫器の種類と違い
          </h2>
          <ArticleImg
            src={IMG.types}
            alt="屋外作業場や倉庫まわりで電撃殺虫器を使うイメージ"
          />
          <p className="mb-4">数値はメーカー公表値です。最終的な仕様は各商品ページでご確認ください。</p>

          <h3 className="mt-8 mb-3 text-xl font-bold">電撃殺虫器｜屋外・作業場・倉庫まわりの飛来虫対策に</h3>
          <p className="mb-4">
            屋外作業場や倉庫まわり、現場休憩所などで蚊や飛来虫が気になる場合の候補です。屋内用・屋外用、設置場所、電源、使用できる環境を確認して選びましょう。
          </p>
          <ProductGrid items={ELECTRIC_KILLERS} />

          <h3 className="mt-8 mb-3 text-xl font-bold">粘着式捕虫器｜食品工場・店舗・厨房・病院に向きやすい</h3>
          <p className="mb-4">
            食品工場や厨房、店舗バックヤードでは、捕獲後の飛散や異物混入リスクにも配慮が必要です。粘着式は捕虫テープで捕獲するため、食品・包装資材・商品まわりで使いやすい場合があります。
          </p>
          <ProductGrid items={ADHESIVE_TRAPS} />

          <h3 className="mt-8 mb-3 text-xl font-bold">薬剤蒸散・忌避タイプ｜出入口や前室の侵入対策に</h3>
          <p className="mb-4">
            扉の開閉が多い出入口や前室では、捕虫器だけでなく侵入を抑える薬剤蒸散タイプを検討する方法もあります。食品や人の動線、薬剤使用ルールを確認したうえで設置しましょう。
          </p>
          <ProductGrid items={VAPE_PRODUCTS} />

          <h3 className="mt-8 mb-3 text-xl font-bold">噴霧器｜敷地まわり・植栽・資材置き場の薬剤散布に</h3>
          <p className="mb-4">
            植栽・資材置き場・外周部などに薬剤を散布する場合は、噴霧器を使うと一定範囲に散布しやすくなります。使用する薬剤のラベル、希釈方法、保護具、周辺への飛散防止を必ず確認しましょう。
          </p>
          <ProductGrid items={SPRAYERS} />

          <Caution>
            <p>
              殺虫剤・忌避剤・噴霧器を使う場合は、
              <strong>
                使用ラベルの記載事項・使用場所・対象害虫・希釈倍率・保護具・周辺への飛散防止・保管方法
              </strong>
              を必ず確認してください。食品工場・厨房・店舗・病院では、食品や商品、包装資材への薬剤汚染・異物混入・死骸の飛散に配慮が必要です。噴霧器には、使用できない薬剤を入れないよう適合を確認しましょう。
            </p>
          </Caution>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            電撃式と粘着式はどちらを選ぶべき？
          </h2>
          <ArticleImg
            src={IMG.adhesive}
            alt="食品工場や店舗で粘着式捕虫器を設置するイメージ"
          />
          <h3 className="mt-8 mb-3 text-xl font-bold">電撃式は屋外・作業場まわりの飛来虫対策に使いやすい</h3>
          <p className="mb-4">
            屋外や作業場まわりで飛来虫を誘引して駆除したい場合に向きます。音・死骸の飛散・設置環境を確認します。
          </p>
          <h3 className="mt-8 mb-3 text-xl font-bold">粘着式は虫の飛散や異物混入を避けたい場所に向く</h3>
          <p className="mb-4">
            捕獲した虫が飛散しにくいため、食品・商品・包装資材の近くで使いやすい場合があります。
          </p>
          <h3 className="mt-8 mb-3 text-xl font-bold">食品工場・厨房では捕虫記録とメンテナンスもしやすい機種を選ぶ</h3>
          <p className="mb-4">
            捕虫数の記録、捕虫紙・ランプの交換など、衛生管理の運用がしやすい機種を選ぶと管理が安定します。
          </p>
          <h3 className="mt-8 mb-3 text-xl font-bold">屋外から屋内へ虫を誘引しない設置位置が重要</h3>
          <p className="mb-4">
            出入口の内側すぐや屋外に向けた設置は、かえって虫を屋内へ誘引してしまう場合があります。設置位置に注意します。
          </p>
          <h3 className="mt-8 mb-3 text-xl font-bold">虫の種類・設置高さ・光の見え方も確認する</h3>
          <p className="mb-4">
            対象の虫、設置高さ、光の見え方（外からどう見えるか）も確認して設置場所を決めます。
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <Th>種類</Th>
                  <Th>向いている場所</Th>
                  <Th>メリット</Th>
                  <Th>注意点</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>電撃殺虫器</Td>
                  <Td>屋外、倉庫外周、作業場、現場休憩所</Td>
                  <Td>飛来虫を誘引して駆除しやすい</Td>
                  <Td>音・死骸の飛散・設置環境を確認</Td>
                </tr>
                <tr>
                  <Td>粘着式捕虫器</Td>
                  <Td>食品工場、店舗、厨房、病院、バックヤード</Td>
                  <Td>捕獲した虫が飛散しにくく、記録管理しやすい</Td>
                  <Td>捕虫紙・ランプ交換が必要</Td>
                </tr>
                <tr>
                  <Td>薬剤蒸散タイプ</Td>
                  <Td>出入口、前室、屋外動線</Td>
                  <Td>侵入防止対策に使いやすい</Td>
                  <Td>食品・人の動線・薬剤使用ルールを確認</Td>
                </tr>
                <tr>
                  <Td>噴霧器＋殺虫剤</Td>
                  <Td>敷地まわり、植栽、資材置き場</Td>
                  <Td>広めの範囲に散布しやすい</Td>
                  <Td>薬剤ラベル、飛散、保護具を確認</Td>
                </tr>
              </tbody>
            </table>
          </div>

          <CTA href={URLS.ct102s}>
            食品工場・店舗向けの粘着式捕虫器を確認する
          </CTA>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            設置場所別・おすすめの虫対策アイテム
          </h2>
          <ArticleImg
            src={IMG.entrance}
            alt="出入口の虫の侵入対策イメージ"
          />
          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <Th>設置場所</Th>
                  <Th>おすすめの方式</Th>
                  <Th>主なアイテム例</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>食品工場・食品加工場</Td>
                  <Td>粘着式中心</Td>
                  <Td>ピオニー CT-102S、ムシポン MPX-2000K-DXA／MPX-2000T-DXA</Td>
                </tr>
                <tr>
                  <Td>飲食店・店舗・バックヤード</Td>
                  <Td>小型・目隠し・壁付</Td>
                  <Td>ピオニー CT-061／CT-102S、ムシポン MPX-2000K</Td>
                </tr>
                <tr>
                  <Td>倉庫・工場・作業場</Td>
                  <Td>電撃＋粘着の使い分け</Td>
                  <Td>SURE GK1200Y、大進 DS-708、ハタヤ DGK-1P、ムシポン MPX-2000K-DXA</Td>
                </tr>
                <tr>
                  <Td>屋外作業場・現場休憩所・資材置き場</Td>
                  <Td>屋外電撃＋忌避</Td>
                  <Td>SURE GK6200Z、ハタヤ DGK-1P、ウルトラベープPRO1.8、蚊取り線香</Td>
                </tr>
                <tr>
                  <Td>植栽・外周・敷地まわり</Td>
                  <Td>噴霧器＋殺虫剤</Td>
                  <Td>GS 噴霧器 5L／10L、クモの巣対策・忌避スプレー・粉剤</Td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-8 mb-3 text-xl font-bold">食品工場・食品加工場</h3>
          <p className="mb-4">
            虫を捕るだけでなく、異物混入防止・捕虫記録・ランプ交換・捕虫紙交換の管理が重要です。電撃式よりも粘着式捕虫器を中心に検討すると運用しやすい場合があります。
          </p>
          <div className="my-3 flex flex-wrap gap-2">
            <ProductThumbLink id="ta052549-ct102s" href={URLS.ct102s} label="ピオニー CT-102S" />
            <ProductThumbLink id="ta052947-mpx2000kdxa" href={URLS.mpx2000kdxa} label="ムシポン MPX-2000K-DXA" />
            <ProductThumbLink id="ta052948-mpx2000tdxa" href={URLS.mpx2000tdxa} label="ムシポン MPX-2000T-DXA" />
          </div>

          <h3 className="mt-8 mb-3 text-xl font-bold">飲食店・店舗・バックヤード</h3>
          <p className="mb-4">
            見た目・設置スペース・捕虫紙の見えにくさ・メンテナンス性も重要です。小型・目隠しタイプなら、来客動線に近い場所でも使いやすくなります。
          </p>
          <div className="my-3 flex flex-wrap gap-2">
            <ProductThumbLink id="ta052548-ct061" href={URLS.ct061} label="ピオニー CT-061" />
            <ProductThumbLink id="ta052549-ct102s" href={URLS.ct102s} label="ピオニー CT-102S" />
            <ProductThumbLink id="ta052946-mpx2000k" href={URLS.mpx2000k} label="ムシポン MPX-2000K" />
          </div>

          <h3 className="mt-8 mb-3 text-xl font-bold">倉庫・工場・作業場</h3>
          <p className="mb-4">
            シャッター・出入口・搬入口から虫が入りやすくなります。電撃殺虫器や粘着式捕虫器を、虫の侵入経路や作業動線を見ながら配置しましょう。
          </p>
          <div className="my-3 flex flex-wrap gap-2">
            <ProductThumbLink id="ta054027-gk1200y" href={URLS.gk1200y} label="SURE GK1200Y" />
            <ProductThumbLink id="ta053919-ds708" href={URLS.ds708} label="大進 DS-708" />
            <ProductThumbLink id="ta052564-dgk1p" href={URLS.dgk1p} label="ハタヤ DGK-1P" />
            <ProductThumbLink id="ta052947-mpx2000kdxa" href={URLS.mpx2000kdxa} label="ムシポン MPX-2000K-DXA" />
          </div>

          <h3 className="mt-8 mb-3 text-xl font-bold">屋外作業場・現場休憩所・資材置き場</h3>
          <p className="mb-4">
            屋外対応の有無、雨のかかり方、電源確保、設置高さ、周囲への誘引を確認しましょう。現場休憩所や資材置き場では、電撃殺虫器・忌避用品・蚊取り線香などを組み合わせる方法もあります。現場休憩所全体の暑さ・環境対策は、あわせて
            <Link href="/articles/worksite-rest-area-heat" className="text-blue-700 underline">
              現場休憩所の暑さ対策
            </Link>
            も参考にしてください。
          </p>
          <div className="my-3 flex flex-wrap gap-2">
            <ProductThumbLink id="ta054028-gk6200z" href={URLS.gk6200z} label="SURE GK6200Z（屋外用）" />
            <ProductThumbLink id="ta052564-dgk1p" href={URLS.dgk1p} label="ハタヤ DGK-1P" />
            <ProductThumbLink id="ta052148-432879" href={URLS.vapeSet} label="ウルトラベープPRO1.8" />
            <ProductThumbLink id="203389" href={URLS.katoriSenko} label="ジャンボ蚊とり線香" />
          </div>

          <h3 className="mt-8 mb-3 text-xl font-bold">植栽・外周・敷地まわり</h3>
          <p className="mb-4">
            建物周辺・植栽・資材置き場は虫の発生源になりやすい場所です。薬剤を使う場合は、対象害虫、使用場所、希釈、散布量、周辺への飛散防止を確認し、噴霧器やスプレーを使い分けましょう。
          </p>
          <div className="my-3 flex flex-wrap gap-2">
            <ProductThumbLink id="ta051193-6005" href={URLS.sprayer5l} label="GS 噴霧器 5L" />
            <ProductThumbLink id="ta051194-6006" href={URLS.sprayer10l} label="GS 噴霧器 10L" />
            <ProductThumbLink id="203322" href={URLS.kumonosu} label="クモの巣対策スプレー" />
            <ProductThumbLink id="203324" href={URLS.mushikorori} label="虫コロリアース粉剤" />
          </div>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            虫の種類別に見る対策用品の選び方
          </h2>
          <ArticleImg
            src={IMG.sprayer}
            alt="施設外周で噴霧器を準備するイメージ"
          />
          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <Th>虫の種類</Th>
                  <Th>主な対策用品</Th>
                  <Th>補足</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>蚊・ユスリカ・飛来虫</Td>
                  <Td>電撃殺虫器、ウルトラベープPRO1.8、蚊取り線香</Td>
                  <Td>屋外は屋外対応の有無・電源を確認</Td>
                </tr>
                <tr>
                  <Td>コバエ・小型飛翔虫</Td>
                  <Td>粘着式捕虫器、出入口対策</Td>
                  <Td>飛散・異物混入を避けたい場所に</Td>
                </tr>
                <tr>
                  <Td>クモ・クモの巣</Td>
                  <Td>クモの巣対策スプレー</Td>
                  <Td>窓・ガラスまわりに</Td>
                </tr>
                <tr>
                  <Td>スズメバチ・ハチ</Td>
                  <Td>ハチ用スプレー（初期対応の備え）</Td>
                  <Td>巣・大量発生時は専門業者へ相談</Td>
                </tr>
                <tr>
                  <Td>ムカデ・不快害虫</Td>
                  <Td>粉剤、凍殺ジェット、PGガード</Td>
                  <Td>使用場所・ラベルを確認</Td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-8 mb-3 text-xl font-bold">蚊・ユスリカ・飛来虫</h3>
          <p className="mb-4">電撃殺虫器、薬剤蒸散タイプ、蚊取り線香などが候補です。</p>
          <div className="my-3 flex flex-wrap gap-2">
            <ProductThumbLink id="ta052148-432879" href={URLS.vapeSet} label="ウルトラベープPRO1.8" />
            <ProductThumbLink id="203389" href={URLS.katoriSenko} label="ジャンボ蚊とり線香" />
          </div>

          <h3 className="mt-8 mb-3 text-xl font-bold">コバエ・小型飛翔虫</h3>
          <p className="mb-4">
            飛散や異物混入を避けたい場所では、粘着式捕虫器と出入口対策の組み合わせが候補です。
          </p>

          <h3 className="mt-8 mb-3 text-xl font-bold">クモ・クモの巣</h3>
          <div className="my-3 flex flex-wrap gap-2">
            <ProductThumbLink id="203322" href={URLS.kumonosu} label="アース 業務用虫ブロック クモの巣" />
          </div>

          <h3 className="mt-8 mb-3 text-xl font-bold">スズメバチ・ハチ</h3>
          <div className="my-3 flex flex-wrap gap-2">
            <ProductThumbLink id="203321" href={URLS.suzumebachi} label="スズメバチマグナムジェットプロ" />
          </div>
          <Caution title="⚠️ ハチ対応の注意">
            <p>
              屋外作業や資材置き場では、ハチ用スプレーを備えておくと初期対応に役立つ場合があります。ただし、
              <strong>巣がある場合や大量発生時は、無理に自社で対応せず、専門業者への相談を検討</strong>
              してください。刺傷はアナフィラキシーなど重篤な症状につながることがあるため、体調に異常があれば速やかに医療機関へ相談してください。
            </p>
          </Caution>

          <h3 className="mt-8 mb-3 text-xl font-bold">ムカデ・不快害虫</h3>
          <ProductGrid items={INSECTICIDES.filter((p) => ["203324", "203393", "203394", "171733", "171740"].includes(p.id))} />

          <CTA href={URLS.listSearch}>
            虫の種類に合わせた殺虫剤・忌避用品も、殺虫アイテム一覧で確認する
          </CTA>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            業務用殺虫器を選ぶときの7つの確認ポイント
          </h2>
          <h3 className="mt-8 mb-3 text-xl font-bold">屋内用・屋外用の違い</h3>
          <p className="mb-4">
            屋外で使う場合は、屋外使用に対応しているか、雨や湿気、電源、設置場所を確認します。屋内用を屋外で使わないよう注意します。
          </p>
          <h3 className="mt-8 mb-3 text-xl font-bold">電撃式・粘着式・薬剤式の違い</h3>
          <p className="mb-4">
            食品・商品・人の動線に近い場所では、虫の死骸や破片の飛散にも配慮します。
          </p>
          <h3 className="mt-8 mb-3 text-xl font-bold">有効面積</h3>
          <p className="mb-4">
            小規模店舗、バックヤード、工場、倉庫など、対象面積に合わせて選びます。
          </p>
          <h3 className="mt-8 mb-3 text-xl font-bold">設置方法</h3>
          <p className="mb-4">
            壁付け、吊り下げ、据え置き、屋外設置など、設置条件を確認します。
          </p>
          <h3 className="mt-8 mb-3 text-xl font-bold">ランプ・捕虫紙・カートリッジ交換</h3>
          <p className="mb-4">
            本体価格だけでなく、交換品の管理コストも確認します。
          </p>
          <h3 className="mt-8 mb-3 text-xl font-bold">食品・薬剤・人の動線</h3>
          <p className="mb-4">
            食品工場や飲食店では、薬剤使用・設置位置・衛生管理記録が重要です。
          </p>
          <h3 className="mt-8 mb-3 text-xl font-bold">季節前の準備</h3>
          <p className="mb-4">
            春〜夏前に、設置・ランプ交換・捕虫紙交換・在庫補充を行うと安定します。
          </p>

          <p className="mt-8 mb-3 font-bold">交換品・メンテナンス管理の目安</p>
          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <Th>機器タイプ</Th>
                  <Th>主な交換品</Th>
                  <Th>管理・記録項目</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>電撃殺虫器</Td>
                  <Td>誘引ランプ、清掃</Td>
                  <Td>点検日、清掃日、ランプ交換日</Td>
                </tr>
                <tr>
                  <Td>粘着式捕虫器</Td>
                  <Td>捕虫紙、捕虫ランプ</Td>
                  <Td>捕虫数、捕虫紙交換日、ランプ交換日</Td>
                </tr>
                <tr>
                  <Td>薬剤蒸散タイプ</Td>
                  <Td>薬剤カートリッジ、電池</Td>
                  <Td>カートリッジ交換日、使用場所</Td>
                </tr>
                <tr>
                  <Td>噴霧器</Td>
                  <Td>ノズル・パッキン等、使用薬剤</Td>
                  <Td>使用薬剤・希釈・散布日、洗浄・保管</Td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 text-sm text-gray-600">
            ※交換時期・適合品はメーカー仕様・商品ページで確認してください。
          </p>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            よくある失敗
          </h2>
          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <Th>失敗</Th>
                  <Th>対策</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>屋外に屋内用殺虫器を設置してしまう</Td>
                  <Td>屋外対応の有無・設置条件を確認</Td>
                </tr>
                <tr>
                  <Td>食品工場で電撃式を選び、虫の飛散リスクを見落とす</Td>
                  <Td>食品まわりは粘着式中心に検討</Td>
                </tr>
                <tr>
                  <Td>捕虫器を入口の奥に置き、虫を屋内へ誘引してしまう</Td>
                  <Td>誘引しない設置位置を選ぶ</Td>
                </tr>
                <tr>
                  <Td>有効面積だけで選び、設置位置を考えていない</Td>
                  <Td>侵入経路・動線から位置を決める</Td>
                </tr>
                <tr>
                  <Td>捕虫紙・ランプ・カートリッジの交換管理を決めていない</Td>
                  <Td>交換時期・記録を決める</Td>
                </tr>
                <tr>
                  <Td>薬剤を食品や商品に近い場所で不用意に使う</Td>
                  <Td>使用場所・ラベル・飛散防止を確認</Td>
                </tr>
                <tr>
                  <Td>噴霧器で使用できない薬剤を入れてしまう</Td>
                  <Td>薬剤と噴霧器の適合を確認</Td>
                </tr>
                <tr>
                  <Td>ハチや大量発生に自社だけで対応しようとする</Td>
                  <Td>巣・大量発生は専門業者へ相談</Td>
                </tr>
                <tr>
                  <Td>殺虫器を置いただけで清掃・発生源対策をしない</Td>
                  <Td>清掃・侵入経路対策と組み合わせる</Td>
                </tr>
                <tr>
                  <Td>複数拠点で機種や交換品を統一していない</Td>
                  <Td>できる範囲で機種・交換品を統一</Td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            法人導入前チェックリスト
          </h2>
          <ArticleImg
            src={IMG.checklist}
            alt="法人担当者が点検リストを確認するイメージ"
          />
          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <Th>チェック項目</Th>
                  <Th>確認内容</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>設置場所</Td>
                  <Td>屋内、屋外、出入口、厨房、倉庫、休憩所など</Td>
                </tr>
                <tr>
                  <Td>対象害虫</Td>
                  <Td>蚊、コバエ、ユスリカ、ハチ、クモ、不快害虫など</Td>
                </tr>
                <tr>
                  <Td>方式</Td>
                  <Td>電撃式、粘着式、薬剤蒸散、スプレー、噴霧器</Td>
                </tr>
                <tr>
                  <Td>食品・商品への影響</Td>
                  <Td>異物混入、薬剤飛散、死骸の飛散を避ける必要があるか</Td>
                </tr>
                <tr>
                  <Td>有効面積</Td>
                  <Td>対象エリアに対して能力が足りるか</Td>
                </tr>
                <tr>
                  <Td>設置方法</Td>
                  <Td>壁付け、吊り下げ、据え置き、屋外設置</Td>
                </tr>
                <tr>
                  <Td>電源</Td>
                  <Td>100V、電池式、屋外電源、コード長</Td>
                </tr>
                <tr>
                  <Td>交換品</Td>
                  <Td>ランプ、捕虫紙、カートリッジ、電池</Td>
                </tr>
                <tr>
                  <Td>記録管理</Td>
                  <Td>捕虫数、交換日、点検日、薬剤使用記録</Td>
                </tr>
                <tr>
                  <Td>安全管理</Td>
                  <Td>薬剤ラベル、保護具、保管場所、周辺への飛散防止</Td>
                </tr>
                <tr>
                  <Td>季節対応</Td>
                  <Td>春〜夏前の設置、秋以降の保管・清掃</Td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            よくある質問
          </h2>
          <div className="space-y-6">
            {FAQ_ITEMS.map((item) => (
              <div key={item.q}>
                <h3 className="mb-2 text-lg font-bold">Q. {item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 mb-4 border-l-4 border-gray-900 pl-3 text-2xl font-bold">
            業務用殺虫器・捕虫器を探すなら殺虫アイテム一覧も確認
          </h2>
          <p className="mb-4">
            業務用の殺虫器・捕虫器は「設置場所」「対象の虫」「食品・商品への影響」「有効面積」「電源・設置方法」「交換品と記録管理」から絞り込むのが選定のコツです。殺虫器を置くだけで完了とせず、清掃・侵入経路対策・発生源対策・薬剤管理・捕虫記録と組み合わせて運用しましょう。電撃殺虫器・粘着式捕虫器・薬剤蒸散タイプ・噴霧器・殺虫剤を見比べたい場合は、殺虫アイテム一覧もあわせてご確認ください。
          </p>
          <FinalCTA href={URLS.listSearch}>
            業務用の殺虫器・捕虫器・殺虫剤をまとめて、殺虫アイテム一覧で確認する
          </FinalCTA>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
