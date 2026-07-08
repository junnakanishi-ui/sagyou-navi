import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "work-light-selection";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/work-lights-selection-hero.jpg`,
  headlamp: `${ARTICLE_IMG}/headlamp-hands-free-night-work.jpg`,
  flashlight: `${ARTICLE_IMG}/handheld-flashlight-inspection-work.jpg`,
  lantern: `${ARTICLE_IMG}/rechargeable-work-lantern-site-lighting.jpg`,
  explosion: `${ARTICLE_IMG}/explosion-proof-light-inspection.jpg`,
  checklist: `${ARTICLE_IMG}/work-light-procurement-checklist.jpg`,
};

export const metadata: Metadata = {
  title:
    "作業用ライトの選び方｜ヘッドライト・懐中電灯・ワークランタン・防爆ライトの使い分け｜作業用品ナビ",
  description:
    "作業用ライトの選び方を、ヘッドライト・懐中電灯・ワークランタン・防爆ライトの違いから解説。夜間作業、設備点検、倉庫、工事現場、防災備蓄など現場別に、明るさ・点灯時間・防水防塵・充電方式の確認ポイントを紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "作業用ライトの選び方｜ヘッドライト・懐中電灯・ワークランタン・防爆ライトの使い分け",
    description:
      "作業用ライトの選び方を、ヘッドライト・懐中電灯・ワークランタン・防爆ライトの違いから解説。夜間作業、設備点検、倉庫、工事現場、防災備蓄など現場別に、明るさ・点灯時間・防水防塵・充電方式の確認ポイントを紹介します。",
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

function R(path: string): string {
  return buildUrl(`https://item.rakuten.co.jp/crecote-shop/${path}`, UTM);
}

const URLS = {
  h7r: R("ta003059-502122/"),
  h15r: R("ta003060-502123/"),
  h19rCore: R("ta003061-502124/"),
  hf8r: R("ta003071-502802/"),
  h19rSig: R("ta003066-502198/"),
  gzbh10: R("ta008316-gzbh10/"),
  hl380n: R("ta008594-hl380n/"),
  hm65r: R("ta008670-hm65r/"),
  p7r: R("ta003065-502181/"),
  al100n: R("ta004781-al100n/"),
  exl182r: R("ta007073-exl182r/"),
  hl338l: R("ta008593-hl338l/"),
  batwl27: R("ta005150-batwl27/"),
  batwl50: R("ta005151-batwl50/"),
  ez37c3: R("ta007093-ez37c3/"),
  hl30: R("ta008592-hl30/"),
  lwk10: R("ta009979-lwk10/"),
  list: R("c/0000000465/"),
};

type Prod = {
  id: string;
  imgId?: string;
  name: string;
  use: string;
  url: string;
};

const HEADLAMPS_OUTDOOR: Prod[] = [
  {
    id: "ta003059-502122",
    name: "Ledlenser H7R Core 502122",
    use: "最大1000lm／IP67（メーカー公表値・要確認）",
    url: URLS.h7r,
  },
  {
    id: "ta003060-502123",
    name: "Ledlenser H15R Core 502123",
    use: "最大2500lm／IP67（メーカー公表値・要確認）",
    url: URLS.h15r,
  },
  {
    id: "ta003061-502124",
    name: "Ledlenser H19R Core 502124",
    use: "最大3500lm／IP68（メーカー公表値・要確認）",
    url: URLS.h19rCore,
  },
  {
    id: "ta003066-502198",
    name: "Ledlenser H19R Signature 502198",
    use: "最大4000lm／IP68（メーカー公表値・要確認）",
    url: URLS.h19rSig,
  },
];

const HEADLAMPS_INSPECTION: Prod[] = [
  {
    id: "ta003071-502802",
    name: "Ledlenser HF8R Work 502802",
    use: "最大1600lm／IP68／CRI80・アダプティブライトビーム（メーカー公表値・要確認）",
    url: URLS.hf8r,
  },
  {
    id: "ta008670-hm65r",
    name: "FENIX HM65R",
    use: "設備点検向けヘッドライト。詳細な明るさ・点灯時間はメーカー仕様を確認",
    url: URLS.hm65r,
  },
];

const HEADLAMPS_SIMPLE: Prod[] = [
  {
    id: "ta008594-hl380n",
    name: "TRUSCO LEDヘッドランプ HL-380N",
    use: "最大30lm／単4形乾電池式／IPX4（メーカー公表値・要確認）",
    url: URLS.hl380n,
  },
];

const FLASHLIGHTS: Prod[] = [
  {
    id: "ta003065-502181",
    name: "Ledlenser P7R Core 502181",
    use: "最大1400lm／IP68の充電式ハンディライト（メーカー公表値・要確認）",
    url: URLS.p7r,
  },
  {
    id: "ta004781-al100n",
    name: "TRUSCO アルミLEDライト AL-100N",
    use: "最大80lm／IPX4／乾電池式（メーカー公表値・要確認）",
    url: URLS.al100n,
  },
  {
    id: "ta008593-hl338l",
    name: "TRUSCO LEDスタンド付ハンディライト HL-338L",
    use: "スタンドで立てて使えるハンディライト。詳細仕様はメーカー仕様を確認",
    url: URLS.hl338l,
  },
  {
    id: "ta007073-exl182r",
    name: "島田 防爆型LED携帯電灯 EXL182R",
    use: "防爆型／IP68／充電式（使用可否は危険区域区分・防爆仕様・社内基準の確認が前提）",
    url: URLS.exl182r,
  },
];

const LANTERNS: Prod[] = [
  {
    id: "ta005150-batwl27",
    name: "日動 充電式LEDワークランタン BAT-WL27",
    use: "1800lm（メーカー公表値・要確認）",
    url: URLS.batwl27,
  },
  {
    id: "ta005151-batwl50",
    name: "日動 充電式LEDワークランタン50W BAT-WL50",
    use: "4000lm（メーカー公表値・要確認）",
    url: URLS.batwl50,
  },
  {
    id: "ta007093-ez37c3",
    name: "Panasonic 工事用充電LEDマルチ投光器 EZ37C3",
    use: "14.4V・18V・21.6Vの電動工具用電池に対応（メーカー公表値・要確認。対応電池は要確認）",
    url: URLS.ez37c3,
  },
  {
    id: "ta008592-hl30",
    name: "TRUSCO 3ウェイLEDランタン HL-30",
    use: "3通りの使い方ができるLEDランタン（メーカー公表値・要確認）",
    url: URLS.hl30,
  },
  {
    id: "ta009979-lwk10",
    name: "ハタヤ 充電式LEDケイ・ライト LWK-10",
    use: "700lm／連続点灯約6時間／IP44の屋外用（メーカー公表値・要確認）",
    url: URLS.lwk10,
  },
];

const EXPLOSION: Prod[] = [
  {
    id: "ta008316-gzbh10",
    name: "GENTOS 防爆LEDヘッドライト GANZ BH10 GZ-BH10",
    use: "約200lm／IP65準拠。防爆構造電気機械器具型式検定合格番号・Exマーキングが公開されています（使用可否は危険区域区分・使用条件の確認が前提）",
    url: URLS.gzbh10,
  },
  {
    id: "ta007073-exl182r",
    name: "島田 防爆型LED携帯電灯 EXL182R",
    use: "防爆型／IP68／充電式（使用可否は危険区域区分・防爆仕様・社内基準の確認が前提）",
    url: URLS.exl182r,
  },
];

const FAQ_ITEMS = [
  {
    q: "作業用ライトはヘッドライトと懐中電灯のどちらを選ぶべきですか？",
    a: "両手を使う作業ならヘッドライト、点検や巡回で確認したい場所を照らすなら懐中電灯が向いています。現場では両方を用意すると使い分けしやすくなります。",
  },
  {
    q: "夜間作業用のヘッドライトは何ルーメンが目安ですか？",
    a: "作業内容によって異なります。手元作業中心なら明るすぎないモデル、屋外や広範囲の確認が必要なら高出力モデルを検討します。ルーメンだけでなく、照射距離・照射範囲・点灯時間も確認しましょう。",
  },
  {
    q: "ワークランタンはどんな現場に向いていますか？",
    a: "作業場所全体を照らしたい場合に向いています。夜間作業、仮設作業、倉庫の暗所、災害時の拠点照明などで使いやすいライトです。",
  },
  {
    q: "充電式と乾電池式はどちらが良いですか？",
    a: "日常的に使うなら充電式、災害備蓄や長期保管では乾電池式も便利です。法人で使う場合は、充電場所や予備電池の管理方法もあわせて決めると運用しやすくなります。",
  },
  {
    q: "防爆ライトは普通のLEDライトと何が違いますか？",
    a: "防爆ライトは、可燃性ガスや粉じんなど爆発の危険がある場所で使うための構造・認証を備えたライトです。危険場所では一般的なLEDライトを代用せず、使用環境に合う防爆仕様・使用条件を確認する必要があります。",
  },
  {
    q: "ヘッドライトだけあれば夜間作業はできますか？",
    a: "作業者の手元照明にはヘッドライトが便利ですが、作業場所全体を照らすにはワークランタンや投光器も必要になることがあります。個人用ライトと拠点照明を分けて考えるのがおすすめです。",
  },
  {
    q: "IP67やIP68とは何ですか？",
    a: "防じん・防水性能を示す保護等級です。屋外作業や粉じんの多い現場では、使用環境に合わせてIP等級を確認しましょう。",
  },
  {
    q: "工具バッテリー式の投光器はどんな場合に便利ですか？",
    a: "同じメーカーの電動工具バッテリーをすでに使っている現場では、バッテリーを使い回せるため管理しやすい場合があります。対応する電池の種類は事前に確認しましょう。",
  },
];

const RELATED = [
  {
    href: "/articles/outdoor-worksite-portable-power",
    label:
      "屋外現場で使うポータブル電源の選び方｜工場扇・冷温庫・工具・災害時電源に使える業務用電源とは",
  },
  {
    href: "/articles/led-floodlight-selection",
    label: "LED投光器の選び方｜現場・倉庫の作業灯から看板照明まで",
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
    <div className="my-6">
      <a
        href={u(href)}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="block w-full rounded-lg bg-gray-900 px-6 py-4 text-center font-bold text-white transition-colors hover:bg-gray-700"
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
        href={u(href)}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="block w-full rounded-lg bg-gray-900 px-6 py-6 text-center text-lg font-bold text-white shadow-lg transition-colors hover:bg-gray-700"
      >
        {children}
      </a>
    </div>
  );
}

function Caution({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-red-300 bg-red-50 p-5 text-red-900">
      <p className="mb-1 font-semibold">⚠️ ご確認ください</p>
      <div className={cls.bodySm}>{children}</div>
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
        <ProductCard key={`${item.id}-${item.name}`} item={item} />
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

function Th({ children }: { children: ReactNode }) {
  return (
    <th className="border border-gray-300 bg-gray-100 px-3 py-2 text-left text-sm font-bold">
      {children}
    </th>
  );
}

function Td({ children }: { children: ReactNode }) {
  return (
    <td className="border border-gray-300 px-3 py-2 text-sm align-top">
      {children}
    </td>
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
          <span className="text-gray-700">作業用ライトの選び方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          作業用ライトの選び方｜ヘッドライト・懐中電灯・ワークランタン・防爆ライトの使い分け
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月8日／約14分で読めます
        </p>

        <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5 leading-relaxed">
          <p className="mb-3 font-bold">この記事の要点（先に結論）</p>
          <p className={cls.body}>
            作業用ライトは、<strong>作業姿勢と照らしたい範囲</strong>
            で選ぶのが基本です。
          </p>
          <ul className={cls.list}>
            <li>両手を使う作業には、ヘッドライトが向いています。</li>
            <li>点検・巡回・一時確認には、懐中電灯やハンディライトが使いやすいです。</li>
            <li>作業場所全体を照らしたい場合は、ワークランタンや投光器が便利です。</li>
            <li>
              可燃性ガス・粉じんなどの危険場所では、一般ライトではなく防爆対応ライトの仕様・使用条件を確認する必要があります。
            </li>
          </ul>
          <p className={cls.body}>
            明るさ（ルーメン）だけで選ぶのではなく、照射範囲、点灯時間、防水防塵性能、充電方式、ヘルメット装着のしやすさ、現場の安全基準をあわせて確認しましょう。
          </p>
        </div>

        <ArticleImg
          src={IMG.hero}
          alt="作業用ライトを現場別に選ぶイメージ"
        />

        <CTA href={URLS.list}>
          夜間作業・点検・停電対策に使う作業用ライトを、工事・照明用品一覧で確認する
        </CTA>

        <H2>作業用ライトは「どこを・どう照らすか」で選ぶ</H2>
        <p className={cls.body}>
          作業用ライトは種類が多く、明るさの数字だけを比べても現場に合うとは限りません。まずは「両手を空けたいのか」「一点を確認したいのか」「周囲を面で照らしたいのか」「危険場所か」で大きく方向性を決めると選びやすくなります。
        </p>

        <H3>両手作業ならヘッドライト</H3>
        <p className={cls.body}>
          配管・天井裏・床下・設備点検など、両手を使いながら手元を照らしたい作業に向いています。頭の動きに追従して照らせるのが利点です。
        </p>
        <H3>点検・巡回なら懐中電灯</H3>
        <p className={cls.body}>
          確認したい場所をピンポイントで照らしたい、警備巡回や車両・機械の確認などに使いやすいタイプです。
        </p>
        <H3>作業場所全体ならワークランタン・投光器</H3>
        <p className={cls.body}>
          仮設作業や夜間工事、倉庫の暗所補助など、範囲を面で照らしたい場面に向いています。据え置き・吊り下げで使えるものが便利です。
        </p>
        <H3>危険場所では防爆ライトを確認する</H3>
        <p className={cls.body}>
          可燃性ガス・粉じんなどの危険場所では、明るさだけで選ばず、防爆対応ライトの仕様・使用条件・社内基準・関係法令を確認する必要があります。
        </p>

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>用途</Th>
                <Th>向いているライト</Th>
                <Th>主な商品例</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>両手で作業したい</Td>
                <Td>ヘッドライト</Td>
                <Td>Ledlenser H7R Core / H15R Core / H19R Core など</Td>
              </tr>
              <tr>
                <Td>点検・巡回</Td>
                <Td>懐中電灯・ハンディライト</Td>
                <Td>Ledlenser P7R Core / TRUSCO AL-100N など</Td>
              </tr>
              <tr>
                <Td>作業場所を照らす</Td>
                <Td>ワークランタン・投光器</Td>
                <Td>日動 BAT-WL27 / BAT-WL50 / Panasonic EZ37C3 など</Td>
              </tr>
              <tr>
                <Td>危険場所</Td>
                <Td>防爆ライト</Td>
                <Td>GENTOS GZ-BH10 / 島田 EXL182R など</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H2>ヘッドライト・懐中電灯・ワークランタンの違い</H2>
        <ArticleImg
          src={IMG.headlamp}
          alt="ヘッドライトで両手を使って夜間作業するイメージ"
        />
        <H3>ヘッドライトは「手元作業」と「移動しながらの作業」に強い</H3>
        <p className={cls.body}>
          頭に装着するため両手が空き、視線の方向を照らせます。手元作業や移動を伴う点検で使いやすいタイプです。
        </p>
        <H3>懐中電灯は「確認したい場所をピンポイントで照らす」のに便利</H3>
        <p className={cls.body}>
          手に持って狙った場所を照らせるため、巡回・確認・一時的な点検に向きます。据えて使えるスタンド付きもあります。
        </p>
        <H3>ワークランタンは「周囲を面で照らす」用途に向いている</H3>
        <p className={cls.body}>
          広い範囲をやわらかく照らせるため、作業エリア全体や休憩所、災害時の拠点照明などに向きます。
        </p>
        <H3>現場では1種類だけでなく組み合わせると使いやすい</H3>
        <p className={cls.body}>
          個人用（ヘッドライト・懐中電灯）と拠点照明（ランタン・投光器）を分けてそろえると、作業の効率と安全性を確保しやすくなります。
        </p>

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>種類</Th>
                <Th>照らし方</Th>
                <Th>向いている用途</Th>
                <Th>装着・設置</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>ヘッドライト</Td>
                <Td>視線方向を手元中心に</Td>
                <Td>両手作業・移動しながらの点検</Td>
                <Td>ヘルメット・頭部に装着</Td>
              </tr>
              <tr>
                <Td>懐中電灯・ハンディライト</Td>
                <Td>ピンポイント（スポット寄り）</Td>
                <Td>巡回・確認・一時点検</Td>
                <Td>手持ち・スタンド</Td>
              </tr>
              <tr>
                <Td>ワークランタン</Td>
                <Td>面（ワイド）</Td>
                <Td>作業エリア・休憩所・拠点照明</Td>
                <Td>据置・吊り下げ</Td>
              </tr>
              <tr>
                <Td>投光器</Td>
                <Td>広範囲を強く</Td>
                <Td>夜間の仮設照明・広い現場</Td>
                <Td>据置・三脚・工具電池式など</Td>
              </tr>
              <tr>
                <Td>防爆ライト</Td>
                <Td>用途に応じる</Td>
                <Td>危険場所（ガス・粉じん）</Td>
                <Td>要・防爆仕様と使用条件の確認</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H2>作業用ライトを選ぶときの7つの確認ポイント</H2>
        <H3>明るさ｜ルーメンだけでなく用途で見る</H3>
        <p className={cls.body}>
          手元作業中心なら明るすぎると近距離がまぶしく感じることがあります。広範囲の確認や屋外では高出力が有利です。用途に対して過不足のない明るさを選びましょう。
        </p>
        <H3>照射距離｜遠くを見るか、手元を見るか</H3>
        <p className={cls.body}>
          遠方を確認したいのか、手元を見るのかで必要な照射距離は変わります。
        </p>
        <H3>照射範囲｜スポット・ワイド・面照射の違い</H3>
        <p className={cls.body}>
          一点を狙うスポット、広めのワイド、面で照らすタイプがあります。作業内容に合う配光を選びます。
        </p>
        <H3>点灯時間｜高出力ほど電池消費も考える</H3>
        <p className={cls.body}>
          最大出力で使い続けると点灯時間は短くなりがちです。1回の作業時間に足りるかを確認しましょう。
        </p>
        <H3>電源方式｜充電式・乾電池式・工具バッテリー式</H3>
        <p className={cls.body}>
          日常使いは充電式、備蓄・長期保管は乾電池式も便利です。同メーカーの電動工具電池を使い回せる投光器もあります。
        </p>
        <H3>防水防塵｜屋外・粉じん環境ではIP等級を確認</H3>
        <p className={cls.body}>
          屋外や粉じんの多い現場では、使用環境に合わせてIP等級を確認します。IP67・IP68などは防じん・防水性能の目安です。
        </p>
        <H3>装着・設置方法｜ヘルメット、手持ち、吊り下げ、スタンド</H3>
        <p className={cls.body}>
          ヘルメットへの装着しやすさ、吊り下げ・スタンド・マグネットなど、現場での固定方法も確認しましょう。
        </p>

        <Caution>
          <p>
            スペック（明るさ・点灯時間・IP等級など）や価格は変わる場合があります。導入前に各商品ページとメーカー公式情報で最新の仕様・使用条件を確認してください。ライトの導入だけで現場の安全が確保できるわけではなく、
            <strong>作業手順・照明計画・社内の安全ルールとあわせて</strong>
            運用することが大切です。
          </p>
        </Caution>

        <H2>用途別に見るおすすめの作業用ライト</H2>
        <p className={cls.body}>
          ここからは、代表的な現場用途ごとに商品を紹介します。数値はメーカー公表値で、最終的な仕様は各商品ページでご確認ください。
        </p>

        <H3>夜間工事・屋外作業には高出力ヘッドライト</H3>
        <p className={cls.body}>
          明るさと防塵防水を重視したい屋外・夜間の現場向けです。用途に対して過剰にならない範囲で出力を選びましょう。
        </p>
        <ProductGrid items={HEADLAMPS_OUTDOOR} />

        <CTA href={URLS.h15r}>
          両手作業向けの高出力ヘッドライト（Ledlenser Hシリーズ）を確認する
        </CTA>

        <H3>長時間の設備点検には見やすさ重視のヘッドライト</H3>
        <p className={cls.body}>
          長時間の点検では、明るさに加えて見やすさ（演色性）や配光の調整機能が役立つ場合があります。
        </p>
        <ProductGrid items={HEADLAMPS_INSPECTION} />

        <H3>軽作業・備蓄用にはシンプルなヘッドランプ</H3>
        <p className={cls.body}>
          軽作業・簡易点検・備蓄用には、乾電池式のシンプルなヘッドランプが扱いやすい選択肢です。
        </p>
        <ProductGrid items={HEADLAMPS_SIMPLE} />

        <H2>点検・巡回に使いやすい懐中電灯・ハンディライト</H2>
        <ArticleImg
          src={IMG.flashlight}
          alt="懐中電灯で設備点検を行うイメージ"
        />
        <H3>高出力で広く使える充電式ハンディライト</H3>
        <ProductGrid items={[FLASHLIGHTS[0]]} />
        <H3>乾電池式で備蓄しやすいアルミLEDライト</H3>
        <ProductGrid items={[FLASHLIGHTS[1]]} />
        <H3>暗所で立てて使えるスタンド付ハンディライト</H3>
        <ProductGrid items={[FLASHLIGHTS[2]]} />
        <H3>危険場所の点検には防爆型LED携帯電灯</H3>
        <p className={cls.body}>
          危険場所での点検には、一般のライトではなく防爆型を確認します（詳しくは後述の防爆章を参照）。
        </p>
        <ProductGrid items={[FLASHLIGHTS[3]]} />

        <H2>作業場所全体を照らすならワークランタン・投光器</H2>
        <ArticleImg
          src={IMG.lantern}
          alt="充電式ワークランタンで作業場所を照らすイメージ"
        />
        <H3>充電式ワークランタンは仮設照明・夜間作業に便利</H3>
        <ProductGrid items={LANTERNS.slice(0, 2)} />
        <H3>工具バッテリーを使い回すならマルチ投光器</H3>
        <ProductGrid items={[LANTERNS[2]]} />
        <H3>防災備蓄・簡易照明には3ウェイLEDランタン</H3>
        <ProductGrid items={[LANTERNS[3]]} />
        <H3>屋外・防雨用途には充電式LEDケイ・ライト</H3>
        <ProductGrid items={[LANTERNS[4]]} />

        <p className={cls.body}>
          ワークランタンや投光器を屋外・仮設で使う場合、電源の確保も課題になります。工場扇や冷温庫とあわせて電源を検討したいときは、
          <Link
            href="/articles/outdoor-worksite-portable-power"
            className="text-gray-900 underline hover:no-underline"
          >
            屋外現場で使うポータブル電源の選び方
          </Link>
          もあわせて確認してください。
        </p>

        <CTA href={URLS.batwl50}>
          作業場所を面で照らす充電式ワークランタン・投光器を確認する
        </CTA>

        <H2>危険場所では防爆ライトを選ぶ</H2>
        <ArticleImg
          src={IMG.explosion}
          alt="防爆ライトを使う危険場所の点検イメージ"
        />
        <H3>防爆ライトが必要になる現場</H3>
        <p className={cls.body}>
          化学工場、塗装ブース、石油・ガス関連設備、粉じんが発生する工場、タンク・配管まわりの点検など、可燃性ガスや粉じんが存在し得る危険場所が対象です。どの区域が該当するかは、現場の危険区域区分にもとづいて確認します。
        </p>
        <H3>普通のLEDライトを代用しない</H3>
        <p className={cls.body}>
          危険場所では、明るさや価格を理由に一般的なLEDライトを代用してはいけません。用途に合う防爆仕様のライトを選び、使用条件を守って運用します。
        </p>
        <H3>防爆ヘッドライトと防爆懐中電灯の使い分け</H3>
        <p className={cls.body}>
          両手を使う点検作業では防爆ヘッドライト、手持ちで一点を確認する場合は防爆携帯電灯、というように作業姿勢で使い分けます。
        </p>
        <H3>購入前に確認したい表示・使用条件</H3>
        <p className={cls.body}>
          型式検定合格番号やExマーキング、対応するガス・粉じんの種類、使用温度範囲などの表示・使用条件を確認します。判断に迷う場合は、社内の安全管理部門やメーカーに確認してください。
        </p>

        <ProductGrid items={EXPLOSION} />

        <Caution>
          <p>
            防爆ライトは、可燃性ガス・粉じんなど爆発の危険がある場所で使うための構造・認証を備えた製品です。使用可否は、
            <strong>
              現場の危険区域区分、必要な防爆構造・認証（型式検定合格番号・Exマーキング）、対応するガス／粉じんの種類、使用条件、社内の安全基準、関係法令（労働安全衛生法に基づく型式検定など）
            </strong>
            を確認したうえで判断してください。一般的なLEDライトを危険場所で代用することはできません。適合の判断に迷う場合は、社内の安全管理部門・メーカー・専門機関に確認しましょう。
          </p>
        </Caution>

        <CTA href={URLS.gzbh10}>
          危険場所向けの防爆対応ライト（GENTOS GZ-BH10・島田 EXL182R）を確認する
        </CTA>

        <H2>現場別・作業用ライトの組み合わせ例</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>現場</Th>
                <Th>個人用ライト</Th>
                <Th>拠点・エリア照明</Th>
                <Th>確認ポイント</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>建設現場・夜間工事</Td>
                <Td>高出力ヘッドライト</Td>
                <Td>ワークランタン・投光器</Td>
                <Td>明るさ・点灯時間・IP等級</Td>
              </tr>
              <tr>
                <Td>工場・倉庫の点検作業</Td>
                <Td>ヘッドライト＋懐中電灯</Td>
                <Td>スタンド付ライト・ランタン</Td>
                <Td>配光・据置しやすさ</Td>
              </tr>
              <tr>
                <Td>警備・巡回</Td>
                <Td>充電式ハンディライト</Td>
                <Td>—</Td>
                <Td>携帯性・点灯時間</Td>
              </tr>
              <tr>
                <Td>設備保全・配管点検</Td>
                <Td>見やすさ重視ヘッドライト</Td>
                <Td>スタンド付ライト</Td>
                <Td>演色性・手元の見やすさ</Td>
              </tr>
              <tr>
                <Td>農業・林業・屋外作業</Td>
                <Td>ヘッドライト</Td>
                <Td>充電式ランタン</Td>
                <Td>防水防塵・点灯時間</Td>
              </tr>
              <tr>
                <Td>災害備蓄・停電対策</Td>
                <Td>乾電池式ライト</Td>
                <Td>3ウェイランタン・充電式ランタン</Td>
                <Td>保管性・電源方式・予備電池</Td>
              </tr>
              <tr>
                <Td>危険場所・防爆エリア</Td>
                <Td>防爆ヘッドライト・防爆携帯電灯</Td>
                <Td>—</Td>
                <Td>危険区域区分・防爆仕様・使用条件</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H2>法人で作業用ライトをそろえるときのチェックリスト</H2>
        <ArticleImg
          src={IMG.checklist}
          alt="法人担当者が備品リストを確認するイメージ"
        />
        <H3>作業者用・班長用・拠点照明を分けて考える</H3>
        <p className={cls.body}>
          全員に同じライトを配るのではなく、役割ごとに必要な明るさ・タイプを整理すると無駄が減ります。
        </p>
        <H3>充電管理・予備電池・保管場所を決める</H3>
        <p className={cls.body}>
          充電式は充電場所と充電ルール、乾電池式は予備電池の在庫と保管場所を決めておきましょう。
        </p>
        <H3>現場別に必要数を見積もる</H3>
        <p className={cls.body}>
          現場ごとの作業人数・作業時間・照らす範囲から必要数を見積もります。
        </p>
        <H3>定期点検と買い替え基準を決める</H3>
        <p className={cls.body}>
          点灯確認・バッテリー劣化・破損の点検周期と、買い替えの基準を決めておくと運用が安定します。
        </p>

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>確認項目</Th>
                <Th>チェック内容</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>作業姿勢</Td>
                <Td>両手作業か、手持ち確認か、据置照明か</Td>
              </tr>
              <tr>
                <Td>照らす範囲</Td>
                <Td>手元、遠方、周囲全体のどれを照らすか</Td>
              </tr>
              <tr>
                <Td>明るさ</Td>
                <Td>必要なルーメン数を用途別に確認</Td>
              </tr>
              <tr>
                <Td>点灯時間</Td>
                <Td>1回の作業時間に足りるか</Td>
              </tr>
              <tr>
                <Td>電源方式</Td>
                <Td>充電式、乾電池式、工具バッテリー式</Td>
              </tr>
              <tr>
                <Td>防水防塵</Td>
                <Td>屋外・粉じん・水濡れ環境に合うか</Td>
              </tr>
              <tr>
                <Td>装着性</Td>
                <Td>ヘルメットや帽子に装着しやすいか</Td>
              </tr>
              <tr>
                <Td>設置性</Td>
                <Td>吊り下げ、スタンド、マグネット、床置きが必要か</Td>
              </tr>
              <tr>
                <Td>防爆対応</Td>
                <Td>危険場所で使う場合、防爆仕様・使用条件を確認したか</Td>
              </tr>
              <tr>
                <Td>法人管理</Td>
                <Td>予備機、充電場所、保管場所、点検周期を決めたか</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H2>よくある失敗</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>失敗</Th>
                <Th>対策</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>ルーメンだけで選び、手元がまぶしすぎる</Td>
                <Td>用途に合う明るさ・配光を選ぶ</Td>
              </tr>
              <tr>
                <Td>点灯時間を確認せず作業途中で電池切れ</Td>
                <Td>作業時間に対する点灯時間を確認</Td>
              </tr>
              <tr>
                <Td>屋外作業なのに防水防塵を見ていない</Td>
                <Td>IP等級と使用環境を確認</Td>
              </tr>
              <tr>
                <Td>ヘルメット装着のしやすさを確認していない</Td>
                <Td>装着方法・固定具を確認</Td>
              </tr>
              <tr>
                <Td>ランタンが必要な場面でヘッドライトだけ用意</Td>
                <Td>個人用と拠点照明を分ける</Td>
              </tr>
              <tr>
                <Td>防爆エリアで一般ライトを使おうとする</Td>
                <Td>防爆仕様・危険区域区分・使用条件を確認</Td>
              </tr>
              <tr>
                <Td>充電式の保管・充電ルールが未定</Td>
                <Td>充電場所・保管ルールを決める</Td>
              </tr>
              <tr>
                <Td>作業者用と拠点照明用を分けていない</Td>
                <Td>役割別に選定</Td>
              </tr>
              <tr>
                <Td>予備電池・充電ケーブルが未準備</Td>
                <Td>予備の在庫・保管を用意</Td>
              </tr>
              <tr>
                <Td>購買担当だけで選び現場と合わない</Td>
                <Td>現場の使い勝手も確認して選ぶ</Td>
              </tr>
            </tbody>
          </table>
        </div>

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

        <H2>作業用ライトを探すなら工事・照明用品一覧も確認</H2>
        <p className={cls.body}>
          作業用ライトは「作業姿勢」「照らしたい範囲」「危険場所かどうか」から絞り込み、明るさ・点灯時間・防水防塵・電源方式・装着方法をあわせて確認するのが失敗しないコツです。ヘッドライト・懐中電灯・ワークランタン・投光器・防爆ライトを一覧で見比べたい場合は、工事・照明用品一覧もあわせてご確認ください。
        </p>
        <FinalCTA href={URLS.list}>
          ヘッドライト・懐中電灯・ワークランタン・防爆ライトをまとめて、トラスコ中山・工事・照明用品一覧で確認する
        </FinalCTA>
      </main>
      <SiteFooter />
    </>
  );
}
