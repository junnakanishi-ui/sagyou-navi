import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const slug = "pelican-case-size-selection";
const siteUrl = "https://www.sagyou-navi.com";
const canonicalUrl = `${siteUrl}/articles/${slug}`;
const title =
  "ペリカンケースのサイズ選び｜内寸・フォームあり/なし・Airとの違いを比較【2026年版】";
const description =
  "ペリカンケースは外寸ではなく、収納物の実寸とフォームを含む内寸で選びます。小型・キャスター・Air・ラージ・ロングケースの違い、フォームあり/なし、1510と1535 Air、1720と1740の選び分けを法人・現場向けに解説します。";
const heroImagePath = `/images/${slug}/pelican-case-equipment-selection-hero.webp`;
const heroImageAbs = `${siteUrl}${heroImagePath}`;
const UTM = `utm_source=sagyou_navi&utm_medium=article&utm_campaign=${slug}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "article",
    locale: "ja_JP",
    url: canonicalUrl,
    siteName: "作業用品ナビ",
    title,
    description:
      "内寸・フォーム・重量・キャスター・長尺まで、精密機器と現場用品の保護ケース選びを解説。",
    images: [
      {
        url: heroImageAbs,
        width: 1600,
        height: 900,
        alt: "精密機器の寸法を測りながら保護ケースを選ぶ法人担当者",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ペリカンケースのサイズ選び【2026年版】",
    description: "内寸・フォーム有無・Airとの違いを比較",
    images: [heroImageAbs],
  },
};

type ProductLink = { label: string; url: string };
type Product = {
  id: string;
  name: string;
  badge: string;
  series: string;
  external: string;
  internal: string;
  weight: string;
  use: string;
  point: string;
  check: string;
  image: string;
  links: ProductLink[];
};

const products: Product[] = [
  {
    id: "1060",
    name: "PELICAN 1060 マイクロケース",
    badge: "小物・端末",
    series: "Micro",
    external: "238×141×67mm（Excel掲載）",
    internal: "約210×108×57mm",
    weight: "約0.45kg",
    use: "小型測定器、メモリー、端末周辺品、予備部品",
    point: "最小クラスで、ケース自体を工具バッグへ入れたい用途",
    check: "ケーブル端子や突起を含む実寸を測り、蓋側の干渉を確認",
    image: "ta030471-1060bk.webp",
    links: [
      {
        label: "ブラック・楽天市場",
        url: "https://item.rakuten.co.jp/crecote-shop/ta030471-1060bk/",
      },
    ],
  },
  {
    id: "1150",
    name: "PELICAN 1150 スモールケース",
    badge: "小型計測器",
    series: "Protector",
    external: "240×198×109mm",
    internal: "約211×147×95mm",
    weight: "フォームなし約0.73kg／フォーム付き約0.79kg",
    use: "テスター、小型センサー、検査用端末、校正器具",
    point: "フォーム付きとNFを同一サイズで選べる代表的な小型モデル",
    check: "固定レイアウトならフォーム、収納物が変わるならNFを比較",
    image: "ta030521-1150bk.webp",
    links: [
      {
        label: "フォーム付き・楽天市場",
        url: "https://item.rakuten.co.jp/crecote-shop/ta030521-1150bk/",
      },
      {
        label: "フォームなし・楽天市場",
        url: "https://item.rakuten.co.jp/crecote-shop/ta030522-1150nfbk/",
      },
    ],
  },
  {
    id: "1200",
    name: "PELICAN 1200 スモールケース",
    badge: "工具・計測",
    series: "Protector",
    external: "270×246×124mm",
    internal: "約237×181×105mm",
    weight: "フォームなし約1.16kg／フォーム付き約1.25kg",
    use: "クランプメーター、小型カメラ、測定プローブ、交換部品",
    point: "1150より平面寸法に余裕があり、配線類も一緒に収めやすい",
    check: "黒・ODとフォーム有無を混同しない",
    image: "ta030548-1200bk.webp",
    links: [
      {
        label: "黒・フォーム付き",
        url: "https://item.rakuten.co.jp/crecote-shop/ta030548-1200bk/",
      },
      {
        label: "黒・フォームなし",
        url: "https://item.rakuten.co.jp/crecote-shop/ta030549-1200nfbk/",
      },
      {
        label: "OD・フォーム付き",
        url: "https://item.rakuten.co.jp/crecote-shop/ta030551-1200od/",
      },
      {
        label: "OD・フォームなし",
        url: "https://item.rakuten.co.jp/crecote-shop/ta030550-1200nfod/",
      },
    ],
  },
  {
    id: "1400",
    name: "PELICAN 1400 スモールケース",
    badge: "複数機材",
    series: "Protector",
    external: "340×295×152mm",
    internal: "約300×225×132mm",
    weight: "フォームなし約1.8kg／フォーム付き約2.0kg",
    use: "測定器本体とプローブ、撮影機材、通信機器一式",
    point: "小型機器を一式化しやすく、交換フォームもExcelに掲載",
    check: "深さは蓋側と底側に分かれるため、高い突起の位置を確認",
    image: "ta030703-1400bk.webp",
    links: [
      {
        label: "フォーム付き",
        url: "https://item.rakuten.co.jp/crecote-shop/ta030703-1400bk/",
      },
      {
        label: "フォームなし",
        url: "https://item.rakuten.co.jp/crecote-shop/ta030705-1400nfbk/",
      },
      {
        label: "交換フォーム",
        url: "https://item.rakuten.co.jp/crecote-shop/ta030704-1400foam/",
      },
    ],
  },
  {
    id: "1490",
    name: "PELICAN 1490CC1 ノートパソコンケース",
    badge: "PC・薄型機器",
    series: "Protector",
    external: "504×354×119mm",
    internal: "約451×289×105mm",
    weight: "構成により要確認",
    use: "ノートPC、薄型制御端末、書類と周辺機器",
    point: "薄型で面積のある機器を、深すぎる箱に入れず運びたい用途",
    check: "PC本体だけでなくACアダプターと端子の収納方法を確認",
    image: "ta042044-1490cc1.webp",
    links: [
      {
        label: "本体・楽天市場",
        url: "https://item.rakuten.co.jp/crecote-shop/ta042044-1490cc1/",
      },
      {
        label: "1490CC2用交換フォーム",
        url: "https://item.rakuten.co.jp/crecote-shop/ta030796-1490cc2foam/",
      },
    ],
  },
  {
    id: "1510",
    name: "PELICAN 1510 ミディアムケース",
    badge: "キャスター",
    series: "Protector",
    external: "559×351×229mm",
    internal: "約502×279×193mm",
    weight: "フォームなし約5.44kg／フォーム付き約6.17kg",
    use: "複数の計測器、映像機材、出張工具、施工・保守キット",
    point: "キャスター移動と保護性能を重視する中型の基準モデル",
    check: "航空機持込可否は利用する航空会社・便の規定を都度確認",
    image: "ta040604-1510od.webp",
    links: [
      {
        label: "OD・フォーム付き",
        url: "https://item.rakuten.co.jp/crecote-shop/ta040604-1510od/",
      },
      {
        label: "OD・フォームなし",
        url: "https://item.rakuten.co.jp/crecote-shop/ta040603-1510nfod/",
      },
      {
        label: "交換フォーム",
        url: "https://item.rakuten.co.jp/crecote-shop/ta030825-1510foam/",
      },
    ],
  },
  {
    id: "1535",
    name: "PELICAN 1535 Airケース",
    badge: "軽量・キャスター",
    series: "Air",
    external: "約558×355×228mm",
    internal: "約518×284×183mm",
    weight: "フォームなし約3.94kg／フォーム付き約4.53kg",
    use: "出張計測、映像・通信機材、持ち運び頻度が高い機器",
    point: "1510に近い外形でケース重量を抑えたい場合の有力候補",
    check: "軽量化を最優先するか、Protectorの形状・内寸を優先するか比較",
    image: "ta030040-0153500012110.webp",
    links: [
      {
        label: "ブラック・フォームなし",
        url: "https://item.rakuten.co.jp/crecote-shop/ta030040-0153500012110/",
      },
    ],
  },
  {
    id: "1605",
    name: "PELICAN 1605 Airケース",
    badge: "中大型・軽量",
    series: "Air",
    external: "約733×426×232mm",
    internal: "約660×356×213mm",
    weight: "フォームなし約4.21kg／フォーム付き約5.27kg",
    use: "横長の測定器、複数端末、現場導入キット",
    point: "中大型でもケース重量を抑えやすく、フォーム有無を選べる",
    check: "内容物込みの総重量と、車両・棚・ドア開口を確認",
    image: "ta040513-0160500001110.webp",
    links: [
      {
        label: "フォーム付き",
        url: "https://item.rakuten.co.jp/crecote-shop/ta040513-0160500001110/",
      },
      {
        label: "フォームなし",
        url: "https://item.rakuten.co.jp/crecote-shop/ta030044-0160500011110/",
      },
    ],
  },
  {
    id: "1615",
    name: "PELICAN 1615 Airケース",
    badge: "大型・軽量",
    series: "Air",
    external: "約828×467×280mm",
    internal: "約752×394×238mm",
    weight: "フォームなし約6.38kg／フォーム付き約7.98kg",
    use: "大型計測器、複数の保守機材、出張展示・デモ機",
    point: "大きな容量とキャスター移動を両立しながら重量を抑えたい場合",
    check: "交換フォームを別途購入する場合は加工前に配置図を作る",
    image: "ta040517-0161500011110.webp",
    links: [
      {
        label: "ブラック・フォームなし",
        url: "https://item.rakuten.co.jp/crecote-shop/ta040517-0161500011110/",
      },
      {
        label: "交換フォーム",
        url: "https://item.rakuten.co.jp/crecote-shop/ta030978-1615foam/",
      },
    ],
  },
  {
    id: "1637",
    name: "PELICAN 1637 Airケース",
    badge: "深型・軽量",
    series: "Air",
    external: "約676×525×378mm",
    internal: "約595×446×337mm",
    weight: "フォームなし約6.89kg／フォーム付き約8.8kg",
    use: "高さのある機器、複数階層の工具、デモ装置",
    point: "Airシリーズで深さを優先したい用途",
    check: "深いケースは下層の取り出し性も考え、トレーや区画を検討",
    image: "ta040518-0163700001110.webp",
    links: [
      {
        label: "フォーム付き",
        url: "https://item.rakuten.co.jp/crecote-shop/ta040518-0163700001110/?variantId=TA040518",
      },
      {
        label: "フォームなし",
        url: "https://item.rakuten.co.jp/crecote-shop/ta040519-0163700011110/",
      },
    ],
  },
  {
    id: "1620",
    name: "PELICAN 1620 ラージケース",
    badge: "深型・堅牢",
    series: "Protector",
    external: "630×492×352mm",
    internal: "購入前に公式仕様を確認",
    weight: "構成により要確認",
    use: "重量のある測定器、整備・保守ツール、現場装置一式",
    point: "ケース自体の堅牢性と深さを重視する大型用途",
    check: "内容物込み総重量、段差、積み下ろし人数を事前確認",
    image: "ta040619-1620bk.webp",
    links: [
      {
        label: "ブラック・楽天市場",
        url: "https://item.rakuten.co.jp/crecote-shop/ta040619-1620bk/",
      },
    ],
  },
  {
    id: "1720",
    name: "PELICAN 1720 ロングケース",
    badge: "長尺・薄型",
    series: "Protector Long",
    external: "1127×406×155mm",
    internal: "購入前に公式仕様を確認",
    weight: "構成により要確認",
    use: "三脚、測量用ポール、照明スタンド、長尺工具",
    point: "長さを確保しつつ、厚みを抑えたい長尺物向け",
    check: "最長物の端部保護と、斜め配置の可否を実寸で確認",
    image: "ta040522-0172000000110.webp",
    links: [
      {
        label: "ブラック",
        url: "https://item.rakuten.co.jp/crecote-shop/ta040522-0172000000110/",
      },
      {
        label: "OD",
        url: "https://item.rakuten.co.jp/crecote-shop/ta040523-0172000000130/",
      },
    ],
  },
  {
    id: "1740",
    name: "PELICAN 1740 ロングケース",
    badge: "長尺・深型",
    series: "Protector Long",
    external: "1121×409×355mm",
    internal: "約1041×328×308mm",
    weight: "フォームなし約9.98kg／フォーム付き約12.25kg",
    use: "複数の三脚、長尺計測治具、照明・施工部材一式",
    point: "1720より深さが必要な長尺物や複数本の運搬向け",
    check: "ケース単体が大きいため、車両荷室と保管棚を先に採寸",
    image: "ta040653-1740bk.webp",
    links: [
      {
        label: "ブラック",
        url: "https://item.rakuten.co.jp/crecote-shop/ta040653-1740bk/",
      },
      {
        label: "OD",
        url: "https://item.rakuten.co.jp/crecote-shop/ta040657-1740od/",
      },
    ],
  },
  {
    id: "1780",
    name: "PELICAN 1780 ラージケース",
    badge: "特大型",
    series: "Protector",
    external: "1140×643×419mm",
    internal: "購入前に公式仕様を確認",
    weight: "構成により要確認",
    use: "大型装置、展示・デモ一式、複数機材の一括輸送",
    point: "分割できない大型機器を一箱で運ぶ必要がある場合",
    check: "重量物は一箱化より分割運搬が安全・効率的な場合もある",
    image: "ta040660-1780bk.webp",
    links: [
      {
        label: "フォーム付き",
        url: "https://item.rakuten.co.jp/crecote-shop/ta040660-1780bk/",
      },
      {
        label: "フォームなし",
        url: "https://item.rakuten.co.jp/crecote-shop/ta040662-1780nfbk/?variantId=TA040662",
      },
    ],
  },
];

const byId = (id: string) => products.find((p) => p.id === id)!;

const references = [
  {
    name: "Google Search Central「AI Features and Your Website」",
    url: "https://developers.google.com/search/docs/appearance/ai-features",
  },
  {
    name: "Google Search Central「Creating Helpful, Reliable, People-First Content」",
    url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
  },
  {
    name: "Google Search Central「Generative AI optimization guide」",
    url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
  },
  {
    name: "Pelican Products Japan「プロテクターケース」",
    url: "https://www.pelicanproducts.co.jp/products/protector-cases.html",
  },
  {
    name: "Pelican Products Japan「エアケース」",
    url: "https://www.pelicanproducts.co.jp/products/air-cases.html",
  },
  {
    name: "Pelican 1510 Protector Carry-On Case",
    url: "https://www.pelican.com/us/en/product/cases/1510",
  },
  {
    name: "Pelican 1535 Air Carry-On Case",
    url: "https://www.pelican.com/us/en/product/cases/1535",
  },
  {
    name: "Pelican 1605 Air Case",
    url: "https://www.pelican.com/us/en/product/cases/1605",
  },
  {
    name: "Pelican 1615 Air Case",
    url: "https://www.pelican.com/us/en/product/cases/1615",
  },
  {
    name: "Pelican 1637 Air Case",
    url: "https://www.pelican.com/us/en/product/cases/1637",
  },
  {
    name: "Pelican 1740 Protector Long Case",
    url: "https://www.pelican.com/us/en/product/cases/1740",
  },
];

const faq = [
  {
    q: "ペリカンケースは外寸と内寸のどちらで選びますか？",
    a: "収納物が入るかは内寸で判断します。外寸は車両、棚、ドア、宅配・航空規定など、ケース自体を運べるか判断する数字です。両方が必要です。",
  },
  {
    q: "収納物と内寸の間にどれくらい余裕が必要ですか？",
    a: "機器の重量、壊れやすさ、突起、フォーム材、輸送条件で変わり、万能な寸法はありません。各面に必要な緩衝材と取り出し空間を加え、実物で確認してください。",
  },
  {
    q: "NFとは何ですか？",
    a: "Non Foam、つまり標準フォームなしの構成です。独自内装、仕切り、既存バッグを使う場合に向きますが、内容物の固定・緩衝は別途必要です。",
  },
  {
    q: "フォーム付きとフォームなしはどちらがよいですか？",
    a: "収納物が固定ならフォーム付き、内容が頻繁に変わるならNF＋仕切りやオーダー内装が選びやすいです。汚れやレイアウト変更がある場合は交換フォームも確認します。",
  },
  {
    q: "1510と1535 Airの主な違いは何ですか？",
    a: "外形は近いものの、シリーズ、内寸、深さ、ケース重量が異なります。1535 Airは軽量性、1510はProtectorシリーズを重視する場合の候補です。収納物の形と総重量で決めます。",
  },
  {
    q: "AirはProtectorより弱いのですか？",
    a: "メーカーはAirについて、防水・防塵・耐衝撃性能を維持しつつ最大40%軽量化したシリーズとして案内しています。ただしモデルごとの仕様、内寸、使用条件を確認し、単純な優劣ではなく用途で選びます。",
  },
  {
    q: "1720と1740はどう選び分けますか？",
    a: "長さは近いですが、1720は薄型、1740は深型です。三脚やポールを一段で入れるなら1720、複数本や太い治具、付属品までまとめるなら1740を検討します。",
  },
  {
    q: "防水なら水中で必ず壊れませんか？",
    a: "いいえ。規格条件、ケースの状態、正しい閉鎖、Oリングの状態などが前提です。またケース内部の機器がすべての事故で無損傷になる保証ではありません。",
  },
  {
    q: "航空機へ持ち込めますか？",
    a: "メーカーが持込サイズとして案内するモデルでも、航空会社、路線、機材、運賃種別で条件が異なります。利用時点の規定を確認してください。電池・危険物は別の規定があります。",
  },
  {
    q: "交換フォームはいつ必要ですか？",
    a: "収納機器を変更するとき、加工をやり直すとき、フォームが潰れ・破れ・油・汚れ・湿気で劣化したときです。貸出品は点検周期を決めると管理しやすくなります。",
  },
  {
    q: "長尺ケースには何を入れられますか？",
    a: "三脚、測量ポール、照明スタンド、長尺工具、治具などが候補です。最長寸法だけでなく、突起と束ねた最大径、フォーム厚を含めて確認します。",
  },
  {
    q: "大型ケースは一つにまとめる方がよいですか？",
    a: "必ずしもそうではありません。総重量、階段、積み下ろし、現場ごとの使用量によっては、機能単位で複数ケースへ分ける方が安全で効率的です。",
  },
];

const relatedArticles = [
  {
    href: "/articles/parts-case-selection",
    label: "パーツケースの選び方｜小物・ネジの整理に効く仕切り・引き出し・連結タイプの使い分け",
  },
  {
    href: "/articles/toolbag-backpack-selection",
    label:
      "ツールバッグとバックパックどっちが良い？工具の持ち運びを軽くする選び方",
  },
  {
    href: "/articles/laser-level-line-count-selection",
    label: "レーザー墨出器は何ライン必要？ライン数・色・受光器・三脚の選び方",
  },
  {
    href: "/articles/construction-site-safety-checklist",
    label: "建設現場の安全対策チェックリスト｜朝礼前・作業中・片付けまで",
  },
];

function withUtm(url: string) {
  const hashIndex = url.indexOf("#");
  const hash = hashIndex === -1 ? "" : url.slice(hashIndex);
  const base = hashIndex === -1 ? url : url.slice(0, hashIndex);
  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}${UTM}${hash}`;
}

function imgPath(file: string) {
  return `/images/${slug}/products/${file}`;
}

function sectionImg(file: string) {
  return `/images/${slug}/${file}`;
}

function ExternalButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const variantCls =
    variant === "primary"
      ? "bg-orange-600 text-white hover:bg-orange-700"
      : "border border-gray-900 bg-white text-gray-900 hover:bg-amber-50";
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored"
      className={`inline-flex min-h-11 items-center justify-center rounded-xl px-4 py-3 text-center text-[15px] font-black transition ${variantCls}`}
    >
      {children}
    </a>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-gray-50">
        <Image
          src={imgPath(product.image)}
          alt={`${product.name}の商品画像`}
          fill
          className="object-contain p-5"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex flex-wrap gap-2 text-xs font-bold">
          <span className="rounded-full bg-gray-900 px-3 py-1 text-white">
            {product.badge}
          </span>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-gray-900">
            {product.series}
          </span>
        </div>
        <h3 className="text-lg font-black leading-snug text-gray-900">
          {product.name}
        </h3>
        <dl className="grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-2 text-[15px] leading-7 text-gray-900">
          <dt className="font-bold">外寸</dt>
          <dd>{product.external}</dd>
          <dt className="font-bold">内寸</dt>
          <dd>{product.internal}</dd>
          <dt className="font-bold">重量</dt>
          <dd>{product.weight}</dd>
        </dl>
        <p className={`${cls.bodySm} mb-0`}>
          <strong>向く用途：</strong>
          {product.use}
        </p>
        <p className={`${cls.bodySm} mb-0`}>
          <strong>選定ポイント：</strong>
          {product.point}
        </p>
        <p className="rounded-xl bg-amber-50 p-3 text-[15px] leading-7 text-gray-900">
          <strong>購入前確認：</strong>
          {product.check}
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {product.links.map((link, index) => (
            <ExternalButton
              key={link.url}
              href={withUtm(link.url)}
              variant={index === 0 ? "primary" : "secondary"}
            >
              {link.label}
            </ExternalButton>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProductTableCell({ product }: { product: Product }) {
  const primary = product.links[0];
  return (
    <a
      href={withUtm(primary.url)}
      target="_blank"
      rel="nofollow sponsored"
      className="group flex min-w-[16rem] items-start gap-3 rounded-lg p-1 text-gray-900 no-underline transition hover:bg-gray-50"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <Image
          src={imgPath(product.image)}
          alt={`${product.name}の商品画像`}
          fill
          sizes="80px"
          className="object-contain p-1.5"
        />
      </span>
      <span className="min-w-0 space-y-1">
        <span className="block font-black leading-6 group-hover:underline">
          {product.name}
        </span>
        <span className="block text-xs leading-5 text-gray-900">
          {product.series}／{product.badge}
        </span>
      </span>
    </a>
  );
}

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 900px"
        />
      </div>
    </figure>
  );
}

function Mark({ children }: { children: ReactNode }) {
  return <mark className={cls.mark}>{children}</mark>;
}

function P({ children }: { children: ReactNode }) {
  return <p className={cls.body}>{children}</p>;
}

function H2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className={`${cls.h2} scroll-mt-24`}>
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className={cls.h3}>{children}</h3>;
}

function Ul({ children }: { children: ReactNode }) {
  return <ul className={cls.list}>{children}</ul>;
}

function Ol({ children }: { children: ReactNode }) {
  return (
    <ol className="my-4 list-decimal space-y-2 pl-6 leading-[1.95] tracking-[0.04em] text-gray-900">
      {children}
    </ol>
  );
}

function TableWrap({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
      {children}
    </div>
  );
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: [heroImageAbs],
  datePublished: "2026-07-29",
  dateModified: "2026-07-29",
  author: {
    "@type": "Organization",
    name: "作業用品ナビ編集部",
    url: siteUrl,
  },
  publisher: { "@type": "Organization", name: "作業用品ナビ", url: siteUrl },
  mainEntityOfPage: canonicalUrl,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: `${siteUrl}/articles`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ペリカンケースのサイズ選び",
      item: canonicalUrl,
    },
  ],
};

export default function Page() {
  const featured = [byId("1150"), byId("1510"), byId("1535"), byId("1740")];

  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="bg-white text-gray-900">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
          <nav aria-label="パンくず" className="text-sm text-gray-800">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="underline underline-offset-4">
                  ホーム
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/articles" className="underline underline-offset-4">
                  記事一覧
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>ペリカンケースのサイズ選び</li>
            </ol>
          </nav>
        </div>

        <article>
          <header className="border-y border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
              <p className="mb-3 text-sm font-bold text-orange-800">
                精密機器・現場用品の運搬ケース選定
              </p>
              <h1 className={cls.h1}>{title}</h1>
              <div className={`mt-5 flex flex-wrap gap-x-5 gap-y-2 ${cls.meta}`}>
                <span>作業用品ナビ編集部</span>
                <time dateTime="2026-07-29">公開・更新：2026年7月29日</time>
                <span>約22分で読めます</span>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
            <SectionImage
              src={heroImagePath}
              alt="精密機器の寸法を測りながら保護ケースを選ぶ法人担当者"
            />

            <P>
              高価な測定器や検査機器、通信機器、カメラ、保守工具を現場へ持ち出すとき、ケース選びで最も起こりやすい失敗は「外から見た大きさでは入りそうだったのに、内寸が足りなかった」というものです。
            </P>
            <P>
              PELICAN（ペリカン）ケースは小型のMicroから、キャスター付き、軽量なAir、長尺・特大型まで選択肢が多く、同じ型番でもフォーム付き・フォームなし（NF）・色違いがあります。型番一覧だけを見ても、自社の機材にどれが合うかは判断しにくいでしょう。
            </P>
            <P>
              この記事では、精密機器や現場用品を運ぶ法人担当者向けに、収納物の採寸から内寸、フォーム、シリーズ、総重量、搬送動線まで、購入前に確認すべき順番を整理します。
            </P>

            <section className="my-8 rounded-2xl border-2 border-orange-300 bg-orange-50 p-6 sm:p-8">
              <h2 className="text-xl font-black text-gray-900 sm:text-2xl">
                この記事の結論
              </h2>
              <P>
                ペリカンケースは、収納物の長さ・幅・高さを突起やケーブル込みで測り、ケースの
                <Mark>内寸</Mark>
                と蓋側・底側の深さを確認して選びます。機材の配置が固定ならフォーム付き、収納内容が変わるならフォームなし（NF）や仕切り内装を検討します。頻繁に持ち運ぶ中大型ケースはProtectorだけでなくAirも比較し、ケースと中身を合わせた
                <Mark>総重量</Mark>
                、キャスター、車両・棚・ドアの寸法まで確認してください。
              </P>
            </section>

            <nav
              aria-label="目次"
              className="my-10 rounded-2xl border border-gray-300 bg-gray-50 p-6"
            >
              <h2 className="text-lg font-black text-gray-900">目次</h2>
              <ol className="mt-4 grid gap-2 text-[15px] leading-7 text-gray-900 sm:grid-cols-2">
                <li>
                  <a href="#featured" className="underline underline-offset-4">
                    先に見る4つの代表候補
                  </a>
                </li>
                <li>
                  <a href="#inside" className="underline underline-offset-4">
                    1. 外寸ではなく内寸から選ぶ
                  </a>
                </li>
                <li>
                  <a href="#steps" className="underline underline-offset-4">
                    2. 5ステップの選び方
                  </a>
                </li>
                <li>
                  <a href="#series" className="underline underline-offset-4">
                    3. シリーズの違い
                  </a>
                </li>
                <li>
                  <a href="#foam" className="underline underline-offset-4">
                    4. フォーム有無
                  </a>
                </li>
                <li>
                  <a href="#compare" className="underline underline-offset-4">
                    5. 代表モデル比較
                  </a>
                </li>
                <li>
                  <a href="#small" className="underline underline-offset-4">
                    6. 用途・サイズ別候補
                  </a>
                </li>
                <li>
                  <a href="#use" className="underline underline-offset-4">
                    7. 業種・用途別
                  </a>
                </li>
                <li>
                  <a href="#safety" className="underline underline-offset-4">
                    8. 注意点・失敗例
                  </a>
                </li>
                <li>
                  <a href="#faq" className="underline underline-offset-4">
                    9. FAQ
                  </a>
                </li>
              </ol>
            </nav>

            <H2 id="featured">先に見る4つの代表候補</H2>
            <TableWrap>
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>用途</th>
                    <th className={cls.th}>候補</th>
                    <th className={cls.th}>選び分け</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={cls.td}>小型測定器・センサー</td>
                    <td className={cls.td}>
                      <Mark>PELICAN 1150</Mark>
                    </td>
                    <td className={cls.td}>
                      フォーム付きとNFを同じサイズで比較しやすい
                    </td>
                  </tr>
                  <tr>
                    <td className={cls.td}>複数機材・出張工具</td>
                    <td className={cls.td}>
                      <Mark>PELICAN 1510</Mark>
                    </td>
                    <td className={cls.td}>
                      Protectorとキャスターを重視する中型候補
                    </td>
                  </tr>
                  <tr>
                    <td className={cls.td}>同クラスで軽量性重視</td>
                    <td className={cls.td}>
                      <Mark>PELICAN 1535 Air</Mark>
                    </td>
                    <td className={cls.td}>
                      1510に近い外形でケース重量を抑えたい場合
                    </td>
                  </tr>
                  <tr>
                    <td className={cls.td}>三脚・ポール・長尺治具</td>
                    <td className={cls.td}>
                      <Mark>PELICAN 1740</Mark>
                    </td>
                    <td className={cls.td}>長さに加えて深さも必要な場合</td>
                  </tr>
                </tbody>
              </table>
            </TableWrap>
            <div className="my-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <p className={`${cls.bodySm} text-gray-800`}>
              ※商品リンクは楽天市場へ移動します。価格・在庫・仕様はリンク先で最新情報をご確認ください。
            </p>

            <H2 id="inside">
              ペリカンケースのサイズは外寸ではなく内寸から選ぶ
            </H2>
            <SectionImage
              src={sectionImg("hard-case-interior-dimensions-foam-clearance.webp")}
              alt="精密機器とケース内寸、フォームの余裕を確認するイメージ"
            />

            <H3>外寸は「置けるか・運べるか」、内寸は「入るか」を判断する数字</H3>
            <P>
              商品ページに大きく記載される「240×198×109mm」などの数値は、外寸であることがあります。外寸は車両荷室、棚、ドア、宅配サイズなどを判断するために必要ですが、収納物が入るかどうかは
              <Mark>内寸</Mark>
              で決まります。
            </P>
            <P>
              ケースの壁、ラッチ、ハンドル、キャスター、蓋構造があるため、外寸と内寸は同じではありません。特に小型ケースでは数センチの差が大きく、端子やハンドルが当たって蓋を閉じられないことがあります。
            </P>

            <H3>収納物は本体だけでなく突起・付属品込みで測る</H3>
            <P>
              採寸時は、機器本体のカタログ寸法を写すだけでは不十分です。実際に運ぶ状態で次を含めてください。
            </P>
            <Ol>
              <li>ハンドル、ノブ、アンテナ、端子、脚</li>
              <li>外さずに運ぶ保護カバー</li>
              <li>ACアダプター、充電器、ケーブル</li>
              <li>プローブ、センサー、交換部品</li>
              <li>取扱説明書、校正証明書、点検票</li>
              <li>現場で同時に使う工具</li>
            </Ol>
            <P>
              ケーブルを強く曲げる、コネクターへ横荷重をかける、機器同士を重ねる設計は避けます。付属品の区画を分けると、本体へ傷が付くことや、現場で部品が不足することを減らせます。
            </P>

            <H3>高さは「蓋側」と「底側」に分けて考える</H3>
            <P>
              ケースの内寸高さが200mmあっても、蓋側50mm・底側150mmという構成であれば、高さ190mmの機器が常に問題なく収まるとは限りません。上面にノブや端子がある場合、蓋フォームの圧縮や蓋形状との干渉を確認する必要があります。
            </P>
            <P>
              公式製品ページにLid DepthとBottom Depthが掲載されているモデルは、合計高さだけでなく内訳も確認してください。
            </P>

            <H3>フォーム分の余裕は実物配置で確かめる</H3>
            <P>
              フォームの必要厚は、機器の重量、落下方向、突起、壊れやすさ、輸送方法で変わります。全製品に共通する万能な余裕寸法はありません。
            </P>
            <P>
              実務上は、まず収納物の各面にフォームや緩衝材を置ける空間を確保し、重い機器や突出部はより厚く取る設計から検討します。記事上の目安として片側
              <Mark>20〜30mm</Mark>
              程度を仮置きして候補を絞ることはできますが、これはメーカー保証値ではありません。最終的には実物、フォーム材、輸送条件を合わせて確認してください。
            </P>

            <H2 id="steps">5ステップで決めるペリカンケースの選び方</H2>
            <H3>ステップ1：運ぶ物を一式並べる</H3>
            <P>
              本体だけでなく、付属品、予備品、書類まで実際に並べます。現場ごとに中身が変わる場合は、最大構成と最小構成の両方を作ります。
            </P>
            <H3>ステップ2：配置案を上から見て作る</H3>
            <P>
              機器同士を接触させず、取り出す順番も考えます。よく使う部品を上段、重い機器を下段にするのが基本です。ケースを横倒しにする可能性がある場合は、その向きでも内容物が動かないことを確認します。
            </P>
            <H3>ステップ3：必要内寸を計算する</H3>
            <P>
              長さ・幅・高さそれぞれに、緩衝材、区画、指を入れて取り出す空間を加えます。ケーブルを別区画にする場合は、その区画寸法も合算します。
            </P>
            <H3>ステップ4：移動方法からシリーズを絞る</H3>
            <Ul>
              <li>小物を工具バッグ内で保護：Micro、1120〜1200</li>
              <li>小型計測器一式：1300、1400</li>
              <li>薄型PC・制御端末：1490CC1</li>
              <li>キャスター付き中型：1510、1535 Air</li>
              <li>中大型・深型：1605 Air、1615 Air、1637 Air、1620</li>
              <li>長尺：1720、1740</li>
              <li>特大型：1730、1780。ただし分割運搬も比較</li>
            </Ul>
            <H3>ステップ5：フォームと保守方法を決める</H3>
            <P>
              固定配置ならフォーム付き、内容が変わるならNF＋仕切りや別内装を検討します。フォームは汚れ、油、経年、レイアウト変更で交換が必要になるため、交換品の有無と型番も控えておきます。
            </P>

            <H2 id="series">Protector・Air・Micro・Longの違い</H2>
            <SectionImage
              src={sectionImg("protector-air-case-weight-comparison.webp")}
              alt="通常の堅牢ケースと軽量ケースを持ち比べるイメージ"
            />
            <TableWrap>
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>シリーズ</th>
                    <th className={cls.th}>主な特徴</th>
                    <th className={cls.th}>向くケース</th>
                    <th className={cls.th}>注意点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={cls.td}>
                      <strong>Protector</strong>
                    </td>
                    <td className={cls.td}>
                      オリジナルの堅牢な保護ケース。サイズ・内装選択が豊富
                    </td>
                    <td className={cls.td}>
                      精密機器、現場工具、車載、キャスター運搬
                    </td>
                    <td className={cls.td}>
                      中大型ではケース自体の重量も確認
                    </td>
                  </tr>
                  <tr>
                    <td className={cls.td}>
                      <strong>Air</strong>
                    </td>
                    <td className={cls.td}>
                      メーカーは従来モデル比で最大40%軽量化を案内
                    </td>
                    <td className={cls.td}>出張、頻繁な持ち運び、中大型機材</td>
                    <td className={cls.td}>
                      同じ外形でもProtectorと内寸・形状は異なる
                    </td>
                  </tr>
                  <tr>
                    <td className={cls.td}>
                      <strong>Micro</strong>
                    </td>
                    <td className={cls.td}>
                      小物を水・ホコリ・衝撃から保護し、他のバッグへ入れやすい
                    </td>
                    <td className={cls.td}>端末、メモリー、小型部品</td>
                    <td className={cls.td}>
                      大型機器向けProtectorと構造・用途が同一とは限らない
                    </td>
                  </tr>
                  <tr>
                    <td className={cls.td}>
                      <strong>Long</strong>
                    </td>
                    <td className={cls.td}>
                      長さのある収納物へ対応し、キャスター付きモデルが多い
                    </td>
                    <td className={cls.td}>
                      三脚、ポール、照明スタンド、長尺治具
                    </td>
                    <td className={cls.td}>車両・棚・旋回スペースを先に確認</td>
                  </tr>
                </tbody>
              </table>
            </TableWrap>
            <P>
              Pelican Products Japanは、Protectorをオリジナルの保護ケースシリーズとして案内し、Airは従来モデルと比べ最大40%の軽量化を特徴として掲げています。軽い方が常に最適という意味ではありません。収納物に必要な内寸、ケースの形状、重量、移動頻度、予算を合わせて選びます。
            </P>

            <H2 id="foam">フォームあり・フォームなし（NF）・交換フォームの違い</H2>
            <SectionImage
              src={sectionImg("protective-case-foam-vs-divider-layout.webp")}
              alt="フォーム固定と可変仕切りの収納方法を比較するイメージ"
            />
            <H3>フォーム付き：収納物が固定される場合</H3>
            <P>
              フォーム付きは、収納する機器の形に合わせて内装を作りたい場合に向きます。Pick
              N Pluckタイプは細かな切れ目に沿って抜き、機材の輪郭を作れます。
            </P>
            <P>
              加工前に、上面から見た配置図を作り、最初は小さめに抜くことが重要です。一度大きく抜きすぎると元へ戻せません。機器の下に残す厚み、ケース壁との距離、指を入れる取り出し部分も残します。
            </P>
            <H3>フォームなし（NF）：中身が変わる・独自内装を作る場合</H3>
            <P>
              NFはNon
              Foamの意味で、ケース内に標準フォームがない構成です。次の用途に向きます。
            </P>
            <Ul>
              <li>現場ごとに収納物が変わる</li>
              <li>既存のソフトバッグや小箱を入れる</li>
              <li>樹脂トレー、仕切り、オーダー内装を作る</li>
              <li>洗浄しやすい空間を確保したい</li>
            </Ul>
            <P>
              ただし、フォームなしのケースへ精密機器をそのまま入れてよいという意味ではありません。内容物が動かない固定方法と、ケース壁・機器同士の緩衝を別途設計します。
            </P>
            <H3>交換フォーム：レイアウト変更と保守のために使う</H3>
            <P>
              Excelには1300、1400、1485 Air、1490CC2、1510、1615
              Air用の交換フォームが含まれています。機材変更、フォームの破損・汚損、貸出セットの用途変更がある法人は、本体導入時に交換品の型番と調達先を登録しておくと管理しやすくなります。
            </P>

            <H2 id="compare">代表モデルのサイズ比較</H2>
            <P>
              以下は記事内で比較する代表モデルです。Excelタイトルに掲載された外寸と、公式情報で確認できた代表的な内寸を整理しています。仕様、構成、重量は変更される場合があるため、購入時は商品ページとメーカー公式を再確認してください。
            </P>
            <TableWrap>
              <table className={`${cls.table} min-w-[1100px]`}>
                <thead>
                  <tr>
                    <th className={cls.th}>商品</th>
                    <th className={cls.th}>シリーズ</th>
                    <th className={cls.th}>外寸</th>
                    <th className={cls.th}>内寸</th>
                    <th className={cls.th}>重量</th>
                    <th className={cls.th}>向く用途</th>
                    <th className={cls.th}>リンク</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className={cls.td}>
                        <ProductTableCell product={product} />
                      </td>
                      <td className={cls.td}>{product.series}</td>
                      <td className={cls.td}>{product.external}</td>
                      <td className={cls.td}>{product.internal}</td>
                      <td className={cls.td}>{product.weight}</td>
                      <td className={cls.td}>{product.use}</td>
                      <td className={cls.td}>
                        <div className="grid min-w-[10rem] gap-2">
                          {product.links.slice(0, 2).map((link) => (
                            <a
                              key={link.url}
                              href={withUtm(link.url)}
                              target="_blank"
                              rel="nofollow sponsored"
                              className="rounded-lg bg-orange-600 px-3 py-2 text-center text-sm font-black text-white hover:bg-orange-700"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrap>

            <H2 id="small">小型測定器・端末には1060〜1400</H2>
            <SectionImage
              src={sectionImg("small-protective-cases-measuring-devices.webp")}
              alt="小型測定器やセンサーを保護ケースへ収納するイメージ"
            />
            <H3>1060：小物をさらにバッグへ入れる</H3>
            <P>
              1060は、メモリー、端末周辺品、小型部品、コンパクトな測定器を個別に守る用途へ向きます。現場へ持っていく工具バッグの中で、濡らしたくない物や潰したくない物を分けたい場合に使いやすいサイズです。
            </P>
            <H3>1150：フォーム有無を比べやすい小型の基準</H3>
            <P>
              1150は内寸約211×147×95mmで、小型センサー、テスター、校正器具などの候補になります。フォーム付きとフォームなしがExcelにそろっており、収納内容が固定か変動かで選びやすいモデルです。
            </P>
            <H3>1200・1300・1400：付属品を一緒に入れる</H3>
            <P>
              本体に加えてプローブ、充電器、予備電池、書類を入れるなら、平面寸法や深さを一段ずつ増やします。1200は平面に余裕、1300は同じ外形クラスで深さ、1400は機材一式の区画を作りやすい点が選択軸です。
            </P>
            <div className="my-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[byId("1060"), byId("1150"), byId("1200"), byId("1400")].map(
                (product) => (
                  <ProductCard key={product.id} product={product} />
                ),
              )}
            </div>

            <H2 id="pc">PC・薄型機器には1490CC1</H2>
            <P>
              ノートPCや薄型制御端末は、深いケースへ無理に入れるより、面積と厚みが合う専用形状を検討します。1490CC1は外寸504×354×119mmで、PC本体だけでなくACアダプター、マウス、変換端子、書類の区画をどう作るかがポイントです。
            </P>
            <P>
              端子を挿したまま収納しない、液晶面へ付属品を押し付けない、電源ケーブルを強く折らないといった配置を徹底してください。
            </P>
            <div className="my-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <ProductCard product={byId("1490")} />
            </div>

            <H2 id="carry">キャスター付き中型なら1510と1535 Airを比較</H2>
            <SectionImage
              src={sectionImg(
                "rolling-protective-cases-field-service-logistics.webp",
              )}
              alt="キャスター付き保護ケースを車両へ積み込む現場担当者"
            />
            <P>
              1510と1535
              Airは、出張計測、映像機材、通信機器、保守キットで比較されやすい候補です。
            </P>
            <TableWrap>
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>比較項目</th>
                    <th className={cls.th}>1510 Protector</th>
                    <th className={cls.th}>1535 Air</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={cls.td}>外寸</td>
                    <td className={cls.td}>約559×351×229mm</td>
                    <td className={cls.td}>約558×355×228mm</td>
                  </tr>
                  <tr>
                    <td className={cls.td}>内寸</td>
                    <td className={cls.td}>約502×279×193mm</td>
                    <td className={cls.td}>約518×284×183mm</td>
                  </tr>
                  <tr>
                    <td className={cls.td}>フォームなし重量</td>
                    <td className={cls.td}>
                      <Mark>約5.44kg</Mark>
                    </td>
                    <td className={cls.td}>
                      <Mark>約3.94kg</Mark>
                    </td>
                  </tr>
                  <tr>
                    <td className={cls.td}>向く判断</td>
                    <td className={cls.td}>Protectorの形状・実績を優先</td>
                    <td className={cls.td}>
                      持ち運び頻度が高くケース重量を抑えたい
                    </td>
                  </tr>
                  <tr>
                    <td className={cls.td}>注意</td>
                    <td className={cls.td}>中身を入れた総重量を確認</td>
                    <td className={cls.td}>
                      内寸高さなどは1510と同一ではない
                    </td>
                  </tr>
                </tbody>
              </table>
            </TableWrap>
            <P>
              外形は近くても、1535
              Airの方が長さ・幅の内寸に余裕がある一方、内寸高さは1510と異なります。「Airの方が新しく軽いから」とだけ決めず、機器の形状と総重量で選びます。
            </P>
            <P>
              航空機への持込を検討する場合、メーカーが最大持込サイズとして案内していても、航空会社、路線、機材、運賃種別で条件が異なります。必ず利用時点の規定を確認してください。電池・危険物の規定はケース寸法とは別です。
            </P>
            <div className="my-8 grid gap-6 md:grid-cols-2">
              <ProductCard product={byId("1510")} />
              <ProductCard product={byId("1535")} />
            </div>

            <H2 id="large">中大型・深型なら1605・1615・1637・1620</H2>
            <H3>1605 Air：横長の中大型機材</H3>
            <P>
              1605
              Airは内寸約660×356×213mm。横長の測定器や複数端末を並べたい場合に検討しやすく、フォーム付き・なしを選べます。
            </P>
            <H3>1615 Air：大きな容量とキャスター移動</H3>
            <P>
              1615
              Airは内寸約752×394×238mmで、大型計測器や保守機材一式に向きます。交換フォームもExcelにあるため、用途変更やフォーム更新を見込む法人にも候補になります。
            </P>
            <H3>1637 Air：高さのある機器</H3>
            <P>
              1637
              Airは内寸約595×446×337mmで、Airの中でも深さを使いたい場合に向きます。深いケースは下層が見えにくくなるため、重い本体を下、付属品をトレーや別区画へ分けるなど、取り出し性も設計してください。
            </P>
            <H3>1620 Protector：深さと堅牢性を重視</H3>
            <P>
              1620は外寸630×492×352mmのラージケースです。重量のある測定器や現場装置一式を入れる候補ですが、内容物込みで重くなる場合は、階段、車両への積み上げ、二人持ち、台車への載せ替えまで先に決めます。
            </P>
            <div className="my-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[byId("1605"), byId("1615"), byId("1637"), byId("1620")].map(
                (product) => (
                  <ProductCard key={product.id} product={product} />
                ),
              )}
            </div>

            <H2 id="long">長尺物なら1720と1740を比較</H2>
            <SectionImage
              src={sectionImg("long-protective-case-tripods-survey-poles.webp")}
              alt="三脚や測量ポールを長尺保護ケースへ収納するイメージ"
            />
            <TableWrap>
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>比較項目</th>
                    <th className={cls.th}>1720</th>
                    <th className={cls.th}>1740</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={cls.td}>外寸</td>
                    <td className={cls.td}>1127×406×155mm</td>
                    <td className={cls.td}>1121×409×355mm</td>
                  </tr>
                  <tr>
                    <td className={cls.td}>形状</td>
                    <td className={cls.td}>
                      <Mark>長尺・薄型</Mark>
                    </td>
                    <td className={cls.td}>
                      <Mark>長尺・深型</Mark>
                    </td>
                  </tr>
                  <tr>
                    <td className={cls.td}>向く物</td>
                    <td className={cls.td}>
                      三脚、ポール、スタンドなど一段配置
                    </td>
                    <td className={cls.td}>
                      複数本、太い治具、付属品もまとめる
                    </td>
                  </tr>
                  <tr>
                    <td className={cls.td}>購入前確認</td>
                    <td className={cls.td}>最長物の端部保護</td>
                    <td className={cls.td}>車両荷室・棚・積み下ろし重量</td>
                  </tr>
                </tbody>
              </table>
            </TableWrap>
            <P>
              1720は厚みを抑えたい長尺物、1740は同程度の長さで深さが必要な場合に向きます。斜めに配置すれば入るという計算は、フォーム厚や端部保護で成立しなくなることがあります。最長物は直線配置を基準にし、斜め配置は実物で確認します。
            </P>
            <div className="my-8 grid gap-6 md:grid-cols-2">
              <ProductCard product={byId("1720")} />
              <ProductCard product={byId("1740")} />
            </div>

            <H2 id="xlarge">特大型ケースを選ぶ前に分割運搬も比較する</H2>
            <P>
              1780のような特大型ケースは、分割できない装置や、展示・デモ一式をまとめる用途に必要です。一方、ケースへ入るからといって、一箱化が最も安全・効率的とは限りません。
            </P>
            <Ul>
              <li>一人で持ち上げられない</li>
              <li>車両から降ろす際に腰・手指へ負担が集中する</li>
              <li>階段や狭い通路で取り回せない</li>
              <li>一部機材だけ使う現場でも全量を運ぶ</li>
              <li>ケース内の機材同士が重くなり、フォーム設計が難しい</li>
            </Ul>
            <P>
              こうした場合は、機能単位で2ケースへ分け、各ケースの内容物リストを標準化する方が運用しやすくなります。
            </P>
            <div className="my-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <ProductCard product={byId("1780")} />
            </div>

            <H2 id="use">業種・用途別の選び方</H2>
            <H3>測定・検査・品質管理</H3>
            <P>
              校正済み測定器は、衝撃だけでなく、付属プローブの紛失、端子への荷重、異物付着を避ける必要があります。本体と付属品を別区画にし、点検票や校正期限をケース外の管理番号とひも付けます。
            </P>
            <H3>施工・保守・フィールドサービス</H3>
            <P>
              現場で使う順番に合わせて配置します。ケースを開いた直後に点検用品、次に本体、奥に予備品という順番にすると、全部を取り出さずに作業できます。現場ごとに中身が変わるならNFと仕切り内装の相性がよいでしょう。
            </P>
            <H3>映像・通信・イベント</H3>
            <P>
              カメラ、レンズ、送受信機、ケーブル、電源を一式化する場合、ケーブルの硬いコネクターがレンズや液晶へ当たらないように区画を分けます。移動頻度が高い中型以上は、Airによるケース重量削減の効果が大きくなります。
            </P>
            <H3>ノートPC・制御端末</H3>
            <P>
              液晶面への圧力、端子への荷重、ACアダプターの発熱残りに注意します。使用直後に高温の機器を密閉せず、機器メーカーの保管条件も守ってください。
            </P>
            <H3>測量・照明・看板施工の長尺用品</H3>
            <P>
              三脚、測量ポール、照明スタンド、長尺治具は、端部やロックレバーが他の部材へ当たりやすい用品です。長さだけでなく、束ねた際の最大径、突起、付属雲台・クランプを含めて測ります。
            </P>

            <H2 id="safety">防水・防塵・耐衝撃を過信しないための注意点</H2>
            <P>
              Pelicanの代表的なProtectorやAirには、防水・防塵・耐衝撃性能やIP67の記載があるモデルがあります。ただし、規格表示は、すべての使用方法、破損状態、経年劣化、閉め忘れ、極端な衝撃、内容物固有の弱点に対して無条件で無損傷を保証する意味ではありません。
            </P>
            <P>使用前に次を確認してください。</P>
            <Ul>
              <li>Oリングに砂、毛髪、切粉、亀裂、変形がない</li>
              <li>ラッチがすべて確実に閉まる</li>
              <li>ケース本体、ヒンジ、ハンドルに割れがない</li>
              <li>圧力調整バルブ周辺に損傷がない</li>
              <li>フォームが潰れ、油、薬品、湿気で劣化していない</li>
              <li>キャスターと伸縮ハンドルが正常に動く</li>
              <li>内容物が内部で動かない</li>
            </Ul>
            <P>
              濡れた機材を密閉すると、ケースの防水性とは別に内部で結露・腐食・カビが起こり得ます。収納前に乾燥させ、電子機器はメーカー指定の温湿度条件を守ります。
            </P>

            <H2>よくある失敗例</H2>
            <H3>1. 外寸で選ぶ</H3>
            <P>外寸は運搬・保管の数字です。入るかどうかは内寸で確認します。</P>
            <H3>2. 本体だけ測る</H3>
            <P>ケーブル、プローブ、ハンドル、突起、書類まで含めます。</P>
            <H3>3. フォームを一度に抜きすぎる</H3>
            <P>最初は小さく加工し、実物を当てながら広げます。</P>
            <H3>4. 大きいケースを選びすぎる</H3>
            <P>内部の遊び、フォーム量、ケース重量、保管面積が増えます。</P>
            <H3>5. NFを無内装で使う</H3>
            <P>
              NFは自由設計向けです。精密機器を固定しなくてよいという意味ではありません。
            </P>
            <H3>6. キャスターがあれば運べると考える</H3>
            <P>段差、階段、車両積み下ろしでは持ち上げが必要です。</P>
            <H3>7. AirとProtectorの型番だけを置き換える</H3>
            <P>外形が近くても内寸・深さ・重量は同じではありません。</P>
            <H3>8. 輸送規定をケースだけで判断する</H3>
            <P>
              航空会社、宅配会社、バッテリー・危険物の条件は別途確認します。
            </P>

            <H2>法人担当者向け購入前チェックリスト</H2>
            <ul className="my-6 grid gap-3 sm:grid-cols-2">
              {[
                "収納物を付属品・ケーブル・突起込みで採寸した",
                "使用時に外さない部品を含めた",
                "必要なフォーム厚・緩衝材・仕切りを決めた",
                "蓋側と底側の深さを確認した",
                "ケースと収納物の総重量を見積もった",
                "手持ち・キャスター・台車の移動方法を決めた",
                "車両荷室、棚、ドア、エレベーターを採寸した",
                "固定レイアウトか、内容変更があるか決めた",
                "交換フォームの型番と調達方法を控えた",
                "Oリング、ラッチ、バルブ、キャスターの点検担当を決めた",
                "航空・宅配・電池・危険物規定を別途確認した",
                "大型機器は一箱化と分割運搬を比較した",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-gray-300 bg-gray-50 p-4 text-[15px] leading-7 text-gray-900"
                >
                  □ {item}
                </li>
              ))}
            </ul>

            <H2 id="faq">FAQ</H2>
            <div className="my-6 divide-y divide-gray-200 rounded-2xl border border-gray-300">
              {faq.map((item) => (
                <details key={item.q} className="group p-5">
                  <summary className={`${cls.faqQ} cursor-pointer list-none`}>
                    {item.q}
                  </summary>
                  <p className={`${cls.body} mt-3 mb-0`}>{item.a}</p>
                </details>
              ))}
            </div>

            <section className="my-12 rounded-2xl bg-gray-900 p-7 text-white sm:p-8">
              <h2 className="text-2xl font-black sm:text-3xl">まとめ</h2>
              <p className="mt-4 leading-[1.95] tracking-[0.04em]">
                ペリカンケースは、型番や外寸から先に選ぶのではなく、収納物と運搬方法から逆算します。
              </p>
              <ol className="mt-4 list-decimal space-y-2 pl-6 leading-[1.95]">
                <li>収納物を付属品・突起込みで測る</li>
                <li>フォームと取り出し空間を加えて必要内寸を出す</li>
                <li>固定配置ならフォーム付き、内容変更ならNFを比較する</li>
                <li>移動頻度が高い中大型はAirも比較する</li>
                <li>
                  ケースと中身の総重量、キャスター、車両・棚・ドアを確認する
                </li>
                <li>防水・防塵性能を過信せず、Oリングやラッチを点検する</li>
              </ol>
              <p className="mt-4 leading-[1.95] tracking-[0.04em]">
                小型測定器なら1150〜1400、キャスター付き中型なら1510と1535
                Air、深型・大型なら1605・1615・1637・1620、長尺なら1720と1740が比較の起点になります。商品ページではフォーム有無、色、外寸、最新仕様を確認し、自社の実物配置と搬送動線に合うモデルを選んでください。
              </p>
              <a
                href="#compare"
                className="mt-6 inline-flex rounded-xl bg-orange-500 px-5 py-3 font-black text-white hover:bg-orange-600"
              >
                商品比較表をもう一度見る
              </a>
            </section>

            <H2>参考情報</H2>
            <ul className="my-4 space-y-3 text-[15px] leading-7 text-gray-900">
              {references.map((ref) => (
                <li key={ref.url}>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 underline underline-offset-4"
                  >
                    {ref.name}
                  </a>
                </li>
              ))}
            </ul>

            <H2>関連する作業用品の記事</H2>
            <P>
              測定機器、現場工具、収納・運搬用品の選び方は、作業用品ナビの関連記事からも確認できます。
            </P>
            <ul className="my-4 space-y-3 text-[15px] leading-7">
              {relatedArticles.map((article) => (
                <li key={article.href}>
                  <Link
                    href={article.href}
                    className="font-bold text-blue-800 underline underline-offset-4"
                  >
                    {article.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/articles"
              className="mt-2 inline-flex rounded-xl border border-gray-900 px-5 py-3 font-black text-gray-900 hover:bg-amber-50"
            >
              記事一覧を見る
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
