import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "hand-lifter-vs-hand-pallet";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles/hand-lifter-vs-hand-pallet";

export const metadata: Metadata = {
  title:
    "ハンドリフターとハンドパレットの違いは？手動・電動・高揚程タイプの種類と用途別の使い分け｜作業用品ナビ",
  description:
    "ハンドリフターとハンドパレットの違いを解説。パレットを水平運搬するハンドパレットトラックと、荷物を高く上げるハンドリフター（高揚程型）の違い、手動・電動の使い分け、積載重量や用途別の選び分けを、トラスコ（TRUSCO）製品とあわせて紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "ハンドリフターとハンドパレットの違いは？手動・電動・高揚程タイプの種類と用途別の使い分け",
    description:
      "ハンドリフターとハンドパレットの違いを解説。パレットを水平運搬するハンドパレットトラックと、荷物を高く上げるハンドリフター（高揚程型）の違い、手動・電動の使い分け、積載重量や用途別の選び分けを、トラスコ（TRUSCO）製品とあわせて紹介します。",
    type: "article",
    images: [`${ARTICLE_IMG}/hero.jpg`],
  },
};

const UTM = "utm_source=sagyou_navi";
const productImage = (id: string) => `/products/${id}.jpg`;

function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

const u = (url: string) => buildUrl(url, UTM);

const URL_HANDLIFTER_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E3%83%8F%E3%83%B3%E3%83%89%E3%83%AA%E3%83%95%E3%82%BF%E3%83%BC#CentSrchFilter1";
const URL_HANDPALLET_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E3%83%8F%E3%83%B3%E3%83%89%E3%83%91%E3%83%AC%E3%83%83%E3%83%88&sc_i=shopping-pc-web-result-storesg-h_srch-srchbtn-sgstfrom-result-storesch-h_srch-srchbox&view=grid";
const URL_SAFETYSHOES_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/b0c2c1b4b7.html?b=91&view=grid";
const URL_TRUSCO_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html#sideNaviItems";

const YQ = "?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=";

type Item = {
  id: string;
  name: string;
  col1: string;
  col2: string;
  col3: string;
  url: string;
};

const HAND_PALLETS: Item[] = [
  {
    id: "168793",
    name: "TRUSCO ハンドパレットトラック 1t用 L850×W460mm",
    col1: "1t",
    col2: "L850×W460mm",
    col3: "小回りの利く1tクラス。狭い通路や小型パレット向け",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168793.html",
  },
  {
    id: "168819",
    name: "TRUSCO ハンドパレットトラック 1t用 L1050×W550mm",
    col1: "1t",
    col2: "L1050×W550mm",
    col3: "標準的なパレットに合わせやすい1tクラス",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168819.html",
  },
  {
    id: "168790",
    name: "TRUSCO ハンドパレットトラック 1.5t用 L850×W520mm",
    col1: "1.5t",
    col2: "L850×W520mm",
    col3: "取り回し重視の1.5tクラス",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168790.html",
  },
  {
    id: "168791",
    name: "TRUSCO ハンドパレットトラック 1.5t用 L1050×W550mm",
    col1: "1.5t",
    col2: "L1050×W550mm",
    col3: "汎用性の高い定番サイズの1.5tクラス",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168791.html",
  },
  {
    id: "168792",
    name: "TRUSCO ハンドパレットトラック 1.5t用 L1220×W685mm",
    col1: "1.5t",
    col2: "L1220×W685mm",
    col3: "大型パレットに対応する幅広の1.5tクラス",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168792.html",
  },
  {
    id: "168809",
    name: "TRUSCO ハンドパレットトラック PK付 2t L1150×W540mm",
    col1: "2t",
    col2: "L1150×W540mm",
    col3: "パーキングブレーキ（PK）付の2tクラス",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168809.html",
  },
  {
    id: "168806",
    name: "TRUSCO ハンドパレットトラック 3t用 L1220×W680mm",
    col1: "3t",
    col2: "L1220×W680mm",
    col3: "重量物を運ぶ3tクラス。アース接続不要の手動式",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168806.html",
  },
];

const ELECTRIC_PALLETS: Item[] = [
  {
    id: "213521",
    name: "TRUSCO 電動ハンドパレットトラック E-TRA 1.2t用 1150×540",
    col1: "1.2t（電動）",
    col2: "1150×540mm",
    col3: "走行・昇降を電動アシスト。運搬距離や頻度が多い現場向け",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/213521.html",
  },
  {
    id: "213524",
    name: "TRUSCO 電動ハンドパレットトラック E-TRA 2t用 1220×685",
    col1: "2t（電動）",
    col2: "1220×685mm",
    col3: "重量物の連続運搬を省力化したい現場向け",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/213524.html",
  },
];

const HAND_LIFTERS: Item[] = [
  {
    id: "168565",
    name: "TRUSCO ハンドリフター 手動 80kg 400×720 高揚程型 HLFA-S80W（115-7889）",
    col1: "80kg／高揚程型",
    col2: "400×720mm",
    col3: "軽量物を高く上げたい作業に。テーブル最高高さは商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168565.html",
  },
  {
    id: "168566",
    name: "TRUSCO ハンドリフター 手動 200kg 500×600 高揚程型 HLFA-S200SW（115-7885）",
    col1: "200kg／高揚程型",
    col2: "500×600mm",
    col3: "中量物の昇降・作業台に。テーブル最高高さは商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168566.html",
  },
  {
    id: "168568",
    name: "TRUSCO ハンドリフター 手動 350kg 600×900 高揚程型 HLFA-E350W（115-7891）",
    col1: "350kg／高揚程型",
    col2: "600×900mm",
    col3: "早送り装置付タイプ。テーブル最高高さは商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168568.html",
  },
  {
    id: "168575",
    name: "TRUSCO ハンドリフター 手動 400kg 900×600 低床式 HLF-S400-85L（454-2193）",
    col1: "400kg／低床式",
    col2: "900×600mm",
    col3: "低い位置からすくい上げやすい低床式。昇降高さは商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168575.html",
  },
];

const SAFETY_SHOES: Item[] = [
  {
    id: "155406",
    name: "ニューバランス 安全スニーカー 紐タイプ",
    col1: "安全靴",
    col2: "重量物運搬時の足元保護",
    col3: "サイズ・規格は商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/155406.html",
  },
  {
    id: "155335",
    name: "ニューバランス 安全スニーカー BOAタイプ",
    col1: "安全靴",
    col2: "重量物運搬時の足元保護",
    col3: "サイズ・規格は商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/155335.html",
  },
  {
    id: "155361",
    name: "ニューバランス 安全スニーカー 面ファスナータイプ",
    col1: "安全靴",
    col2: "重量物運搬時の足元保護",
    col3: "サイズ・規格は商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/155361.html",
  },
  {
    id: "155329",
    name: "ニューバランス 安全スニーカー BOAタイプ（色/サイズ違い）",
    col1: "安全靴",
    col2: "重量物運搬時の足元保護",
    col3: "サイズ・規格は商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/155329.html",
  },
];

const CARTS: Item[] = [
  {
    id: "167468",
    name: "TRUSCO 業務用台車 カルティオ 新型 ブラック MPK-780-BK（558-4732）",
    col1: "樹脂台車",
    col2: "小口・軽量物の水平運搬",
    col3: "パレット不要の荷物や少量搬送に",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/167468.html${YQ}`,
  },
  {
    id: "190475",
    name: "TRUSCO 業務用台車 カルティオ 新型 スチールストッパー付 MPK780BKSS（683-2378）",
    col1: "樹脂台車（ストッパー付）",
    col2: "傾斜・停止保持が必要な運搬",
    col3: "スチールストッパー付で停止保持しやすい",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/190475.html${YQ}`,
  },
  {
    id: "216713",
    name: "TRUSCO 樹脂台車 カルティオビッグ 折畳 900×600 ストッパー付 MPK-906-OG-S（436-9963）",
    col1: "大型樹脂台車（折畳）",
    col2: "大きめの荷物の運搬・収納性重視",
    col3: "折りたたみ式で保管しやすい大型タイプ",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/216713.html${YQ}`,
  },
  {
    id: "159750",
    name: "TRUSCO カルティオビッグ 固定ハンドルタイプ ブルー MPK-900-B（408-6694）",
    col1: "大型樹脂台車（固定ハンドル）",
    col2: "安定した押し引きが必要な運搬",
    col3: "固定ハンドルで安定して押しやすい大型タイプ",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/159750.html${YQ}`,
  },
];

const OVERVIEW_ROWS = [
  {
    machine: "ハンドパレットトラック（手動）",
    move: "パレットを少し浮かせて水平運搬",
    load: "1t〜3t",
  },
  {
    machine: "電動ハンドパレットトラック",
    move: "走行・昇降を電動アシストで水平運搬",
    load: "1.2t〜2t",
  },
  {
    machine: "ハンドリフター（高揚程型）",
    move: "荷物を高く持ち上げて昇降・作業台・高所へ",
    load: "80kg〜350kg",
  },
  {
    machine: "ハンドリフター（低床式）",
    move: "低い位置からすくい上げて昇降",
    load: "400kg前後",
  },
];

const SELECT_ROWS = [
  {
    machine: "ハンドパレットトラック（手動）",
    use: "パレット単位の重量物を水平に運ぶ",
    weight: "1t〜3t",
    power: "手動（油圧）",
    site: "倉庫・工場・物流の入出荷",
  },
  {
    machine: "電動ハンドパレットトラック",
    use: "重い荷物を長い距離・高頻度で運ぶ",
    weight: "1.2t〜2t",
    power: "電動アシスト",
    site: "運搬距離が長い倉庫・連続作業",
  },
  {
    machine: "ハンドリフター（高揚程型）",
    use: "荷物を高く上げて昇降・作業台・高所へ",
    weight: "80kg〜350kg",
    power: "手動（足踏み油圧）",
    site: "組立・ピッキング・高所への積込",
  },
  {
    machine: "ハンドリフター（低床式）",
    use: "低い位置の荷物をすくい上げて昇降",
    weight: "400kg前後",
    power: "手動（油圧）",
    site: "低床パレット・重めの荷の昇降",
  },
];

const FAQ_ITEMS = [
  {
    q: "ハンドリフターとハンドパレットの違いは何ですか？",
    a: "ハンドパレット（ハンドパレットトラック）は、パレットを少し浮かせて水平に運ぶための機器で、1t〜3tの重量物運搬に向いています。一方、ハンドリフター（高揚程型・低床式）は、荷物を高く持ち上げて昇降させたり、作業台や高所への積込に使う機器です。名称が似ていますが、「水平に運ぶ」か「高く上げる」かで役割が異なります。",
  },
  {
    q: "ハンドリフトとハンドパレットは同じものですか？",
    a: "「ハンドリフト」は、ハンドパレットトラックやパレットジャッキの通称として使われることが多い言葉です。ただし本記事の「ハンドリフター（高揚程型）」は、荷物を高く上げるタイプを指しており、水平運搬用のハンドパレットトラックとは用途が異なります。呼び方が混同されやすいため、実際の用途（運ぶのか、上げるのか）で機器を選ぶことをおすすめします。",
  },
  {
    q: "手動と電動のハンドパレットトラックはどう使い分けますか？",
    a: "手動タイプは低コストで軽量、資格不要でシンプルに使えます。電動タイプは走行や昇降をアシストするため、運搬距離が長い、運搬頻度が高い、重量物を連続して運ぶといった現場で作業者の負担を軽減しやすくなります。現場の運搬量と頻度から検討してください。",
  },
  {
    q: "ハンドパレットトラックのサイズはどう選びますか？",
    a: "使用するパレットの形状・サイズにフォークの長さ・幅を合わせることが基本です。詳しい選び方は「トラスコのハンドパレット（ハンドリフト）の選び方」の記事で解説していますので、あわせてご確認ください。",
  },
  {
    q: "ハンドリフター（高揚程型）はどんな作業に向いていますか？",
    a: "荷物を高い位置まで持ち上げたい昇降作業、作業台としての使用、高所への荷物の積込などに向いています。テーブルの最高高さや荷重はモデルごとに異なるため、商品ページで確認してください。荷物をのせて上昇したまま移動しないなどの注意点もあります。",
  },
  {
    q: "使用時に資格は必要ですか？注意点はありますか？",
    a: "ハンドパレットトラックやハンドリフターは手動・電動アシストが中心で、フォークリフトのような運転技能講習は基本的に不要です。ただし、積載超過や不安定な積み方、上昇状態での移動などは事故につながります。安全な使い方は「ハンドリフトの注意点」の記事で解説していますので、あわせてご確認ください。",
  },
];

function CTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="my-6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="block w-full rounded-lg bg-gray-900 px-6 py-4 text-center font-bold text-white transition-colors hover:bg-gray-700"
      >
        {children}
      </a>
    </div>
  );
}

function ProductCard({ item }: { item: Item }) {
  return (
    <a
      href={u(item.url)}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-md"
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={productImage(item.id)}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-contain p-2 transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <p className="text-sm font-medium leading-snug text-gray-900">
          {item.name}
        </p>
        <p className="mt-1 text-xs text-gray-600">
          {item.col1}／{item.col2}
        </p>
        <p className="mt-1 flex-1 text-xs leading-relaxed text-gray-600">
          {item.col3}
        </p>
        <span className="mt-2 inline-block rounded bg-gray-900 px-3 py-1 text-center text-sm font-semibold text-white">
          商品ページを見る
        </span>
      </div>
    </a>
  );
}

function ProductGrid({ items }: { items: Item[] }) {
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
      <main className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <span>倉庫・物流</span>
          <span className="mx-1">/</span>
          <span className="text-gray-700">
            ハンドリフターとハンドパレットの違い
          </span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          ハンドリフターとハンドパレットの違いは？手動・電動・高揚程タイプの種類と用途別の使い分け
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月4日／約12分で読めます
        </p>

        <ArticleImg
          src={`${ARTICLE_IMG}/hero.jpg`}
          alt="ハンドリフターとハンドパレットの違いを確認するイメージ"
        />

        <div className="my-8 rounded-lg border border-gray-300 bg-gray-100 p-5 leading-relaxed">
          <p className="mb-2 font-bold">ハンドリフターとハンドパレットの違い（要点）</p>
          <p className={cls.body.replace("mb-4 ", "")}>
            ハンドリフターとハンドパレットは、名称が似ていますが役割が異なります。
            <strong>ハンドパレット（ハンドパレットトラック）</strong>
            は、パレットを少し浮かせて水平に運ぶための機器で、1t〜3tの重量物運搬に向いています。
            <strong>ハンドリフター（高揚程型・低床式）</strong>
            は、荷物を高く持ち上げて昇降させたり、作業台や高所への積込に使う機器です。つまり「水平に運ぶ」ならハンドパレットトラック、「高く上げる」ならハンドリフターと考えると整理しやすくなります。運搬距離や頻度が多い現場では電動ハンドパレットトラックも選択肢になります。
          </p>
        </div>

        <H2>ハンドリフターとハンドパレットは何が違う？</H2>
        <p className={cls.body}>
          どちらもパレットや荷物を扱う荷役機器ですが、根本的な役割が異なります。混同したまま導入すると、「重い荷物を運びたかったのに高く上げるタイプを買ってしまった」といったミスマッチが起こりやすくなります。まずは役割の違いを押さえておきましょう。
        </p>

        <H3>ハンドパレットトラックは「水平に運ぶ」機器</H3>
        <p className={cls.body}>
          ハンドパレットトラック（パレットジャッキ）は、パレットにフォークを差し込み、油圧でわずかに持ち上げて水平に運ぶための機器です。持ち上げるのはあくまで移動のためで、高く上げることは想定していません。1t〜3tの重量物を、少ない力で移動できるのが特長です。
        </p>

        <H3>ハンドリフター（高揚程型）は「高く上げる」機器</H3>
        <p className={cls.body}>
          ハンドリフター（高揚程型）は、足踏み油圧などで荷物を高い位置まで持ち上げ、昇降させたり作業台として使ったりする機器です。荷物を腰の高さまで上げて作業負担を減らしたり、高所への積込を補助したりする用途に向いています。低い位置からすくい上げやすい低床式もあります。
        </p>

        <H3>名称が混同されやすい理由</H3>
        <p className={cls.body}>
          ハンドパレットトラックは「ハンドリフト」「パレットジャッキ」など複数の通称で呼ばれ、メーカーによっても呼び名が異なります。そのため「ハンドリフト」「ハンドリフター」という言葉が、水平運搬用と昇降用のどちらを指しているのか分かりにくくなっています。カタログや商品名だけでなく、「運ぶのか」「上げるのか」という実際の用途で確認することが失敗を防ぐポイントです。
        </p>

        <H2>まず確認したい運搬・昇降機器の早見表</H2>
        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-3 py-2">機器</th>
                <th className="border px-3 py-2">主な動き・役割</th>
                <th className="border px-3 py-2">目安の積載・荷重</th>
              </tr>
            </thead>
            <tbody>
              {OVERVIEW_ROWS.map((row) => (
                <tr key={row.machine}>
                  <td className="border px-3 py-2 font-semibold">
                    {row.machine}
                  </td>
                  <td className="border px-3 py-2">{row.move}</td>
                  <td className="border px-3 py-2">{row.load}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CTA href={u(URL_TRUSCO_LIST)}>
          運搬・昇降機器をまとめて確認する（トラスコ中山一覧）
        </CTA>

        <H2>ハンドパレットトラックは「パレットの水平運搬」に使う</H2>
        <ArticleImg
          src={`${ARTICLE_IMG}/hand-pallet.jpg`}
          alt="ハンドパレットトラックでパレットを水平運搬するイメージ"
        />

        <H3>積載重量（1t〜3t）で選ぶ</H3>
        <p className={cls.body}>
          ハンドパレットトラックは、運ぶ荷物の重さに合わせて1t〜3tクラスから選びます。日常的に扱う荷物の最大重量に余裕を持たせて選ぶことが基本です。停止保持が必要な現場では、パーキングブレーキ（PK）付のタイプも検討できます。
        </p>

        <H3>フォークのサイズはパレットに合わせる</H3>
        <p className={cls.body}>
          フォークの長さ・幅は、使用するパレットの形状・サイズに合わせて選びます。サイズが合わないとすくい上げにくくなるため、詳しい選び方は
          <Link
            href="/articles/trusco-hand-pallet-erabikata"
            className="text-gray-900 underline"
          >
            「トラスコのハンドパレット（ハンドリフト）の選び方」
          </Link>
          の記事もあわせてご確認ください。
        </p>

        <ProductGrid items={HAND_PALLETS} />
        <CTA href={u(URL_HANDPALLET_LIST)}>
          ハンドパレットトラックの一覧を確認する
        </CTA>

        <H2>電動ハンドパレットトラックは「距離・頻度・重量」が多い現場に</H2>
        <ArticleImg
          src={`${ARTICLE_IMG}/electric-pallet.jpg`}
          alt="電動ハンドパレットトラックで重量物を運ぶイメージ"
        />
        <p className={cls.body}>
          電動ハンドパレットトラック（E-TRAなど）は、走行や昇降を電動でアシストする機器です。手動タイプでは負担が大きい「運搬距離が長い」「運搬頻度が高い」「重量物を連続して運ぶ」といった現場で、作業者の負担軽減に役立ちます。導入時は充電・バッテリー管理の運用もあわせて検討してください。
        </p>
        <ProductGrid items={ELECTRIC_PALLETS} />

        <H2>
          ハンドリフター（高揚程型・低床式）は「持ち上げて昇降・作業台」に使う
        </H2>
        <ArticleImg
          src={`${ARTICLE_IMG}/hand-lifter.jpg`}
          alt="ハンドリフター（高揚程型）で荷物を昇降するイメージ"
        />

        <H3>高揚程型は昇降・作業台・高所への積込に</H3>
        <p className={cls.body}>
          高揚程型のハンドリフターは、荷物を高い位置まで持ち上げられるため、昇降作業や作業台としての使用、高所への荷物の積込などに向いています。荷重（80kg〜350kg程度）とテーブル寸法を、扱う荷物に合わせて選びます。テーブルの最高高さはモデルごとに異なるため、商品ページで確認してください。
        </p>

        <H3>低床式は低い位置からすくい上げたいときに</H3>
        <p className={cls.body}>
          低床式は、床に近い低い位置から荷物をすくい上げやすいタイプです。低床パレットや、比較的重めの荷物（400kg前後）を昇降させたい場面で検討できます。
        </p>

        <H3>使用時は上昇状態での移動などに注意</H3>
        <p className={cls.body}>
          ハンドリフターは、荷物をのせて上昇したままの状態で移動しないなど、機種ごとの注意事項があります。安全な使い方の詳細は
          <Link
            href="/articles/hand-lift-precautions"
            className="text-gray-900 underline"
          >
            「ハンドリフトの注意点」
          </Link>
          の記事もあわせてご確認ください。
        </p>

        <ProductGrid items={HAND_LIFTERS} />
        <CTA href={u(URL_HANDLIFTER_LIST)}>
          ハンドリフターの一覧を確認する
        </CTA>

        <H2>どれを選ぶ？用途・重量・高さで選び分ける</H2>
        <ArticleImg
          src={`${ARTICLE_IMG}/comparison.jpg`}
          alt="機器を用途・重量・高さで選び分けるイメージ"
        />
        <p className={cls.body}>
          機器選びは、「運ぶのか・上げるのか」「重量」「動力（手動か電動か）」の3点で整理すると分かりやすくなります。下表を目安に、現場の作業内容に合う機器のカテゴリを絞り込んでください。
        </p>

        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-3 py-2">機器</th>
                <th className="border px-3 py-2">主な用途</th>
                <th className="border px-3 py-2">目安の重量</th>
                <th className="border px-3 py-2">動力</th>
                <th className="border px-3 py-2">向いている現場</th>
              </tr>
            </thead>
            <tbody>
              {SELECT_ROWS.map((row) => (
                <tr key={row.machine}>
                  <td className="border px-3 py-2 font-semibold">
                    {row.machine}
                  </td>
                  <td className="border px-3 py-2">{row.use}</td>
                  <td className="border px-3 py-2">{row.weight}</td>
                  <td className="border px-3 py-2">{row.power}</td>
                  <td className="border px-3 py-2">{row.site}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={cls.body}>
          ハンドパレットトラックの具体的なサイズ選びは
          <Link
            href="/articles/trusco-hand-pallet-erabikata"
            className="text-gray-900 underline"
          >
            選び方の記事
          </Link>
          、安全な使い方は
          <Link
            href="/articles/hand-lift-precautions"
            className="text-gray-900 underline"
          >
            注意点の記事
          </Link>
          で詳しく解説しています。
        </p>

        <H2>一緒に用意したい関連用品（安全靴・運搬台車）</H2>
        <ArticleImg
          src={`${ARTICLE_IMG}/related-items.jpg`}
          alt="安全靴や運搬台車など関連用品を確認するイメージ"
        />

        <H3>重量物の運搬には足元の保護に安全靴</H3>
        <p className={cls.body}>
          重量物を扱う運搬作業では、荷物の落下や機器の下敷きから足元を守る安全靴の着用が基本です。ニューバランスの安全靴は、作業現場でも履きやすいデザインで選ばれています。サイズや規格（先芯の種類など）は商品ページで確認してください。
        </p>
        <ProductGrid items={SAFETY_SHOES} />
        <CTA href={u(URL_SAFETYSHOES_LIST)}>
          ニューバランス安全靴の一覧を確認する
        </CTA>

        <H3>パレット単位でない小口運搬には運搬台車</H3>
        <p className={cls.body}>
          パレットに載せるほどではない小口・軽量物の運搬には、樹脂台車（カルティオなど）が便利です。ハンドパレットトラックと台車を用途で使い分けると、現場全体の運搬効率を高めやすくなります。
        </p>
        <ProductGrid items={CARTS} />

        <H2>よくある質問</H2>
        <div className="mt-4 space-y-6">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q}>
              <p className={cls.faqQ}>Q. {item.q}</p>
              <p className={cls.body.replace("mb-4 ", "")}>A. {item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-gray-300 bg-gray-100 p-6">
          <h2 className={cls.ctaH3}>
            運搬・昇降機器を用途で選び分けて確認する
          </h2>
          <p className={cls.body}>
            「水平に運ぶ」ならハンドパレットトラック、「高く上げる」ならハンドリフター、運搬量が多いなら電動タイプ、というように用途で機器を絞り込むと選びやすくなります。積載重量・サイズ・使用環境を確認しながら検討してください。
          </p>
          <CTA href={u(URL_HANDPALLET_LIST)}>
            1. ハンドパレットトラックの一覧を確認する
          </CTA>
          <CTA href={u(URL_HANDLIFTER_LIST)}>
            2. ハンドリフターの一覧を確認する
          </CTA>
          <CTA href={u(URL_TRUSCO_LIST)}>
            3. トラスコ中山の運搬機器・関連用品をまとめて確認する
          </CTA>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
