import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "jobsite-cooler-box-comparison";
const ARTICLE_URL = `https://sagyou-navi.com/articles/${SLUG}`;
const UTM = "utm_source=sagyou_navi";

function appendUtm(url: string, utm: string): string {
  if (!url) return url;
  if (url.includes(utm)) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

type ProductLink = {
  label: string;
  url: string;
  code: string;
};

type Product = {
  key: string;
  displayName: string;
  category: string;
  imageCode: string;
  role: string;
  selection: string;
  sizeInfo: string;
  bestFor: string;
  comparisonType: string;
  links: ProductLink[];
};

const products: Product[] = [
  {
    key: "doreibox",
    displayName:
      "TRUSCO パーソナルクーリングボックス ど冷えもんBOX＋ジャクリポータブル電源セット DHEBOXJE3000BSET",
    category: "現場用クーラーボックス",
    imageCode: "289883",
    role: "現場詰所に据え置いて、飲料を冷やし続けたいときの主力候補。大人数・長時間現場向け。",
    selection: "電源の確保、設置スペース、搬入経路、屋内外の運用方法を確認。",
    sizeInfo: "据え置き型・大容量クラス",
    bestFor: "大人数現場・長時間現場・常設休憩所",
    comparisonType: "電源式・据え置き",
    links: [
      {
        label: "Yahoo!ショッピングで見る",
        url: "https://store.shopping.yahoo.co.jp/signcity-yshop/289883.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        code: "289883",
      },
    ],
  },
  {
    key: "engel20l",
    displayName: "エンゲル プレミアムクーラーバック 20L HD20",
    category: "現場用クーラーボックス",
    imageCode: "203344",
    role: "少人数班や移動班が持ち運びやすい20Lクラス。巡回作業や車載運用向け。",
    selection: "何人分を入れるか、持ち運び回数、保冷剤量、車載スペースを確認。",
    sizeInfo: "20L",
    bestFor: "1〜4人班・移動班・巡回班",
    comparisonType: "ソフトクーラーバッグ",
    links: [
      {
        label: "Yahoo!ショッピングで見る",
        url: "https://store.shopping.yahoo.co.jp/signcity-yshop/203344.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        code: "203344",
      },
    ],
  },
  {
    key: "cooltent1827",
    displayName: "Suiden クーラーテント 1.8m×2.7m SS-TNT-1827-C",
    category: "休憩所・日陰",
    imageCode: "203268",
    role: "クーラーボックスを直射日光から守り、給水・休憩・体調確認をまとめやすい中型休憩拠点。",
    selection: "設置面積、風対策、クーラーボックスとの組み合わせ、導線を確認。",
    sizeInfo: "1.8m×2.7m",
    bestFor: "中規模現場の給水所",
    comparisonType: "日陰づくり",
    links: [
      {
        label: "Yahoo!ショッピングで見る",
        url: "https://store.shopping.yahoo.co.jp/signcity-yshop/203268.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        code: "203268",
      },
    ],
  },
  {
    key: "cooltent1818",
    displayName: "Suiden クーラーテント 1.8m×1.8m SS-TNT-1818-C",
    category: "休憩所・日陰",
    imageCode: "172401",
    role: "狭い現場にも置きやすいコンパクトな日陰拠点。小規模班向け。",
    selection: "少人数用か、休憩椅子やクーラーボックスの配置余地があるかを確認。",
    sizeInfo: "1.8m×1.8m",
    bestFor: "小規模現場・点検班",
    comparisonType: "日陰づくり",
    links: [
      {
        label: "Yahoo!ショッピングで見る",
        url: "https://store.shopping.yahoo.co.jp/signcity-yshop/172401.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        code: "172401",
      },
    ],
  },
  {
    key: "kok-rakuraku",
    displayName: "KOK 集会用テント らくらくテント RT-2X3-Y",
    category: "休憩所・日陰",
    imageCode: "172290",
    role: "広めの日陰を確保し、大型クーラーボックスや保冷材をまとめて運用しやすい。",
    selection: "設営人数、風対策、使用人数、導線を確認。",
    sizeInfo: "W5.31×D3.55×H3.07",
    bestFor: "まとまった人数の休憩所",
    comparisonType: "日陰づくり",
    links: [
      {
        label: "Yahoo!ショッピングで見る",
        url: "https://store.shopping.yahoo.co.jp/signcity-yshop/172290.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        code: "172290",
      },
    ],
  },
  {
    key: "mistfan",
    displayName: "TRUSCO 超音波式ミストファンPRO MF-22",
    category: "送風・ミスト",
    imageCode: "289961",
    role: "給水所の体感温度を下げ、クーラーボックス前の滞在しやすさを高める補完設備。",
    selection: "電源、水補給、床濡れ、周辺機器への飛散を確認。",
    sizeInfo: "据え置き型",
    bestFor: "詰所・休憩所・待機所",
    comparisonType: "休憩所改善",
    links: [
      {
        label: "Yahoo!ショッピングで見る",
        url: "https://store.shopping.yahoo.co.jp/signcity-yshop/289961.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        code: "289961",
      },
    ],
  },
  {
    key: "fan-sf45vs",
    displayName: "スイデン 工場扇 スタンド型 樹脂ハネ45cm 単相100V SF-45VS-1VP2",
    category: "送風",
    imageCode: "172321",
    role: "休憩所やクーラーボックス周辺に風を送り、体感温度を下げやすい定番工場扇。",
    selection: "設置場所、電源、通路との干渉、人数に対する風量を確認。",
    sizeInfo: "45cm羽根",
    bestFor: "現場休憩所・半屋外",
    comparisonType: "休憩所改善",
    links: [
      {
        label: "Yahoo!ショッピングで見る",
        url: "https://store.shopping.yahoo.co.jp/signcity-yshop/172321.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        code: "172321",
      },
    ],
  },
  {
    key: "fan-wall",
    displayName: "TRUSCO 全閉式工場扇 ジェネラルファン 壁掛けタイプ TFBA-45W-BK",
    category: "送風",
    imageCode: "172434",
    role: "壁掛けで床面を使わずに送風したい詰所・倉庫向け。",
    selection: "壁面設置可否、電源位置、首振り範囲を確認。",
    sizeInfo: "45cm羽根・壁掛け",
    bestFor: "倉庫・詰所・屋内給水所",
    comparisonType: "休憩所改善",
    links: [
      {
        label: "Yahoo!ショッピングで見る",
        url: "https://store.shopping.yahoo.co.jp/signcity-yshop/172434.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        code: "172434",
      },
    ],
  },
  {
    key: "fan-df",
    displayName: "TRUSCO 全閉式DCモーター工場扇 ジェネラルファン・ビッグ DFシリーズ",
    category: "送風",
    imageCode: "203284",
    role: "広い休憩所や大人数現場向け。60cm・75cm・105cmのサイズ比較で選びやすい。",
    selection: "必要風量、設置スペース、人数、騒音、移動性を確認。",
    sizeInfo: "60cm / 75cm / 105cm",
    bestFor: "大型休憩所・広い倉庫",
    comparisonType: "大型送風",
    links: [
      {
        label: "60cmを見る",
        url: "https://store.shopping.yahoo.co.jp/signcity-yshop/203297.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        code: "203297",
      },
      {
        label: "75cmを見る",
        url: "https://store.shopping.yahoo.co.jp/signcity-yshop/203298.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        code: "203298",
      },
      {
        label: "105cmを見る",
        url: "https://store.shopping.yahoo.co.jp/signcity-yshop/203284.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        code: "203284",
      },
    ],
  },
  {
    key: "fan-zephir",
    displayName:
      "TRUSCO 全閉式アルミハネ工場扇 ゼフィール トレー付キャスタータイプ TFZPA-45T",
    category: "送風",
    imageCode: "171600",
    role: "移動しながら使いやすく、クーラーボックス脇へ臨時送風拠点を作りやすい。",
    selection: "移動頻度、キャスター固定、転倒防止、通路幅を確認。",
    sizeInfo: "45cm羽根・キャスター付",
    bestFor: "移設の多い現場",
    comparisonType: "休憩所改善",
    links: [
      {
        label: "Yahoo!ショッピングで見る",
        url: "https://store.shopping.yahoo.co.jp/signcity-yshop/171600.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        code: "171600",
      },
    ],
  },
  {
    key: "icecraft",
    displayName: "BURTLE 冷却ベスト アイスクラフト IC101S",
    category: "身体冷却",
    imageCode: "203171",
    role: "冷えた飲料の確保だけでは足りない現場で、作業者側の補助冷却として組み合わせやすい。",
    selection: "サイズ、交換運用、保冷材・バッテリー構成を確認。",
    sizeInfo: "F / XL",
    bestFor: "建設・倉庫・配送",
    comparisonType: "関連商品",
    links: [
      {
        label: "Fサイズを見る",
        url: "https://store.shopping.yahoo.co.jp/signcity-yshop/203170.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        code: "203170",
      },
      {
        label: "XLサイズを見る",
        url: "https://store.shopping.yahoo.co.jp/signcity-yshop/203171.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        code: "203171",
      },
    ],
  },
  {
    key: "smartx",
    displayName: "スリーライク 注水式冷却ベスト SMART-X",
    category: "身体冷却",
    imageCode: "172467",
    role: "注水式で手軽に補助冷却したい現場向け。水分補給導線との相性がよい。",
    selection: "サイズ、注水運用、乾燥時間、洗浄性を確認。",
    sizeInfo: "S / L",
    bestFor: "短〜中時間の屋外作業",
    comparisonType: "関連商品",
    links: [
      {
        label: "Sサイズを見る",
        url: "https://store.shopping.yahoo.co.jp/signcity-yshop/172467.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        code: "172467",
      },
      {
        label: "Lサイズを見る",
        url: "https://store.shopping.yahoo.co.jp/signcity-yshop/203375.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        code: "203375",
      },
    ],
  },
  {
    key: "windyhelmet",
    displayName: "トーヨーセーフティ 送風機内蔵ヘルメット WindyHelmet",
    category: "頭部対策",
    imageCode: "289994",
    role: "頭部対策も合わせて整えたい現場向け。給水と並行して暑熱負荷を下げたいときに。",
    selection: "保護帽規格、色、送風機能、現場ルールを確認。",
    sizeInfo: "クリア / スモーク",
    bestFor: "屋外作業・巡回",
    comparisonType: "関連商品",
    links: [
      {
        label: "クリアを見る",
        url: "https://store.shopping.yahoo.co.jp/signcity-yshop/289994.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        code: "289994",
      },
      {
        label: "スモークを見る",
        url: "https://store.shopping.yahoo.co.jp/signcity-yshop/289996.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        code: "289996",
      },
    ],
  },
  {
    key: "heatkit",
    displayName: "ブレイン 熱中対策キット BR-810",
    category: "補助備品",
    imageCode: "289850",
    role: "クーラーボックス運用とあわせて詰所へ備えたい補助キット。",
    selection: "セット内容、補充頻度、保管場所、使用者を確認。",
    sizeInfo: "キット",
    bestFor: "詰所・車載備品",
    comparisonType: "関連商品",
    links: [
      {
        label: "Yahoo!ショッピングで見る",
        url: "https://store.shopping.yahoo.co.jp/signcity-yshop/289850.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        code: "289850",
      },
    ],
  },
];

const featuredKeys = [
  "doreibox",
  "engel20l",
  "cooltent1827",
  "mistfan",
  "fan-sf45vs",
  "fan-df",
];
const coolerKeys = ["doreibox", "engel20l"];
const stationKeys = [
  "cooltent1818",
  "cooltent1827",
  "kok-rakuraku",
  "mistfan",
  "fan-sf45vs",
  "fan-wall",
  "fan-df",
  "fan-zephir",
];
const relatedKeys = ["icecraft", "smartx", "windyhelmet", "heatkit"];

const faqs = [
  {
    question: "現場用クーラーボックスは何Lを選べばよいですか？",
    answer:
      "1〜4人の移動班なら20L前後でも使いやすい一方、長時間・大人数現場では据え置き型や大型の保冷設備を検討した方が運用しやすいです。人数、飲料本数、補充回数、氷の量で判断します。",
  },
  {
    question: "ソフトクーラーバッグと電源式はどちらが現場向きですか？",
    answer:
      "持ち運びやすさを優先するならソフトクーラーバッグ、冷やし続けたいなら電源式が向いています。移動班か、常設休憩所かで選ぶと失敗しにくいです。",
  },
  {
    question: "クーラーボックスがすぐぬるくなる原因は何ですか？",
    answer:
      "直射日光、車内放置、開け閉めの多さ、氷不足、容量不足が主な原因です。保管用と配布用を分けるだけでも改善しやすくなります。",
  },
  {
    question: "現場用クーラーボックスは1台で足りますか？",
    answer:
      "小規模現場なら足りることもありますが、大人数現場では保管用と配布用に分ける運用が現実的です。",
  },
  {
    question: "氷はどう確保するとよいですか？",
    answer:
      "前日凍結した保冷剤、朝の持ち込み、昼の追加調達先を決める3段構えが実務的です。誰が補充するかも決めてください。",
  },
  {
    question: "日陰やテントは本当に必要ですか？",
    answer:
      "必要です。クーラーボックス自体の温度上昇を抑えやすく、給水しやすい休憩所づくりにもつながります。",
  },
  {
    question: "工場扇やミストファンはクーラーボックス比較記事に関係ありますか？",
    answer:
      "現場用クーラーボックスは単体で選ぶより、設置場所や休憩所環境とセットで考えた方が使いやすさが大きく変わるため、比較検討対象に入れる価値があります。",
  },
  {
    question: "楽天とYahoo!の両方がある場合はどう見せるべきですか？",
    answer:
      "同一カード内に分かりやすい2ボタンを並べると、ユーザーが選びやすくなります。今回は確認できた範囲では主にYahoo!リンク中心でした。",
  },
  {
    question: "現場用クーラーボックスだけで熱中症対策は十分ですか？",
    answer:
      "十分とはいえません。水分・塩分、休憩、日陰、送風、身体冷却、体調確認を組み合わせて運用してください。",
  },
  {
    question: "工場・倉庫でも現場用クーラーボックスは必要ですか？",
    answer:
      "必要になることがあります。特に空調が届きにくい場所や庫外作業、積み込み・荷捌きエリアでは有効です。",
  },
  {
    question: "保冷剤と氷はどちらを優先すべきですか？",
    answer:
      "長時間の安定性なら保冷剤、即効性や追加冷却なら氷が使いやすいです。組み合わせ運用が実務的です。",
  },
  {
    question: "大型設備を買う前に確認すべきことは？",
    answer:
      "電源、設置場所、搬入経路、使用人数、補充担当、現場ごとの運用ルールを確認してください。",
  },
];

const failures = [
  "人数に対してクーラーボックスが小さすぎる",
  "保管用と配布用を分けず、開閉回数が多すぎる",
  "直射日光や高温車内へ置きっぱなしにする",
  "氷や保冷剤の補充担当を決めない",
  "日陰がなく、クーラーボックス自体が熱を持つ",
  "休憩所に風がなく、給水所が使われにくい",
  "詰所常設なのに持ち運び重視の小型品を選んでしまう",
  "移動班なのに据え置き型中心で運用しづらい",
  "温度管理だけ見て、体調確認や身体冷却を見直さない",
  "商品の数を増やし過ぎて、選び方が分かりにくくなる",
  "同じような商品を並べるだけで比較軸を示さない",
  "クーラーボックスに飲料以外を混載して容量を圧迫する",
];

const checklist = [
  ["運用人数", "1〜4人か、5人以上か", "少人数は20L前後も候補。大人数は大型設備も検討"],
  ["作業時間", "半日か終日か", "終日なら補充回数と保冷継続性を重視"],
  ["移動頻度", "持ち運びが多いか", "移動班は軽さと持ち手が重要"],
  ["設置場所", "詰所常設か仮設か", "常設なら据え置き型も選びやすい"],
  ["電源", "100Vやポータブル電源が使えるか", "使えるなら電源式の選択肢が広がる"],
  ["日陰", "テントや屋根下を確保できるか", "直射日光対策は必須"],
  ["送風", "扇風機やミストを併設できるか", "給水所の使いやすさが変わる"],
  ["補充", "氷・保冷剤・飲料の補充担当", "担当と時間を明確化する"],
  ["比較軸", "容量・運搬性・保冷方式・設置性", "商品比較表に反映する"],
  ["関連商品", "身体冷却・備品も必要か", "関連商品の出し過ぎには注意しつつ導線化"],
] as const;

const references = [
  {
    label: "Google Search Central: AI features and your website",
    url: "https://developers.google.com/search/docs/appearance/ai-features?hl=ja",
    note: "AIOを意識しても、可視本文・比較表・独自性など通常のSEO基盤が重要という前提に沿う。",
  },
  {
    label: "Google Search Central: Helpful content",
    url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=ja",
    note: "商品を並べるだけではなく、比較軸・使い分け・実体験に近い判断材料が重要。",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "現場用クーラーボックス比較｜工事・倉庫・屋外作業で失敗しない容量・保冷方式の選び方【2026年】",
  description:
    "現場用クーラーボックスを比較。工事・倉庫・屋外作業で失敗しない容量・保冷方式・日陰・氷確保・送風の考え方まで解説します。",
  datePublished: "2026-07-26",
  dateModified: "2026-07-26",
  mainEntityOfPage: ARTICLE_URL,
  image: [
    `https://sagyou-navi.com/images/${SLUG}/jobsite-cooler-box-hero.jpg`,
  ],
  author: { "@type": "Organization", name: "作業用品ナビ編集部" },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    url: "https://sagyou-navi.com",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "作業用品ナビ",
      item: "https://sagyou-navi.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: "https://sagyou-navi.com/articles",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "現場用クーラーボックス比較",
      item: ARTICLE_URL,
    },
  ],
};

export const metadata: Metadata = {
  title:
    "現場用クーラーボックス比較｜工事・倉庫・屋外作業で失敗しない容量・保冷方式の選び方【2026年】",
  description:
    "現場用クーラーボックスを比較。工事・倉庫・屋外作業での容量選び、氷の確保方法、休憩所づくり、関連商品の選び方まで分かります。",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    url: ARTICLE_URL,
    title:
      "現場用クーラーボックス比較｜工事・倉庫・屋外作業で失敗しない容量・保冷方式の選び方",
    description:
      "現場用クーラーボックス選びを、容量・運搬性・保冷方式・日陰づくりまで含めて比較する記事です。",
    images: [
      {
        url: `/images/${SLUG}/jobsite-cooler-box-hero.jpg`,
        width: 1200,
        height: 675,
        alt: "現場休憩所にクーラーボックスを置いて比較検討するイメージ",
      },
    ],
  },
};

function getProduct(key: string): Product {
  const found = products.find((product) => product.key === key);
  if (!found) throw new Error(`Product not found: ${key}`);
  return found;
}

function Mark({ children }: { children: ReactNode }) {
  return <mark className={cls.mark}>{children}</mark>;
}

function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className={cls.h2}>
      {children}
    </h2>
  );
}

function TableWrap({ children }: { children: ReactNode }) {
  return (
    <div className="my-5 overflow-x-auto rounded-xl border border-gray-300">
      {children}
    </div>
  );
}

function Th({ children }: { children: ReactNode }) {
  return <th className={cls.th}>{children}</th>;
}

function Td({ children }: { children: ReactNode }) {
  return <td className={cls.td}>{children}</td>;
}

function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <section className="my-6 rounded-2xl border-2 border-sky-600 bg-sky-50 p-5 shadow-sm">
      {children}
    </section>
  );
}

function NoteBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-6 rounded-2xl border border-amber-400 bg-amber-50 p-5">
      <p className="font-black text-amber-950">{title}</p>
      <div className="mt-2 space-y-2 text-[15px] leading-[1.95] text-gray-900">
        {children}
      </div>
    </aside>
  );
}

function Figure({ file, alt }: { file: string; alt: string }) {
  return (
    <figure className="my-7 overflow-hidden rounded-2xl border border-gray-300">
      <Image
        src={`/images/${SLUG}/${file}`}
        alt={alt}
        width={1200}
        height={675}
        className="h-auto w-full"
      />
    </figure>
  );
}

function LinkButtons({ links }: { links: ProductLink[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={`${link.code}-${link.label}`}
          href={appendUtm(link.url, UTM)}
          target="_blank"
          rel="nofollow sponsored"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-amber-500 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-amber-600"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-sky-300 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-sky-50/40">
        <Image
          src={`/products/${product.imageCode}.jpg`}
          alt={`${product.displayName}の商品画像`}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-contain p-4"
        />
      </div>
      <div className="space-y-3 p-5">
        <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-950">
          {product.category}
        </span>
        <h3 className="text-lg font-black leading-snug text-gray-900">
          {product.displayName}
        </h3>
        <p className={cls.bodySm}>{product.role}</p>
        <p className="rounded-xl bg-gray-100 p-3 text-[13px] leading-6 text-gray-900">
          <strong>導入前確認：</strong>
          {product.selection}
        </p>
        <p className="text-[13px] leading-6 text-gray-900">
          <strong>サイズ・分類：</strong>
          {product.sizeInfo}
          <br />
          <strong>向く現場：</strong>
          {product.bestFor}
        </p>
        <LinkButtons links={product.links} />
      </div>
    </article>
  );
}

function ImageTableCell({ product }: { product: Product }) {
  return (
    <div className="flex min-w-[220px] items-start gap-3">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-50">
        <Image
          src={`/products/${product.imageCode}.jpg`}
          alt={`${product.displayName}の商品画像`}
          fill
          sizes="80px"
          className="object-contain p-2"
        />
      </div>
      <div>
        <div className="text-xs font-bold text-sky-800">{product.category}</div>
        <div className="font-bold leading-6 text-gray-900">
          {product.displayName}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const featured = featuredKeys.map(getProduct);
  const coolers = coolerKeys.map(getProduct);
  const stations = stationKeys.map(getProduct);
  const related = relatedKeys.map(getProduct);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        <nav aria-label="パンくず" className="mb-5 text-sm text-gray-800">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="underline underline-offset-4">
                作業用品ナビ
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/articles" className="underline underline-offset-4">
                記事一覧
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">現場用クーラーボックス比較</li>
          </ol>
        </nav>

        <header>
          <p className="text-sm font-bold tracking-wide text-sky-800">
            工事・建設・倉庫・屋外作業向け｜容量・保冷方式・日陰・氷確保まで比較
          </p>
          <h1 className={cls.h1}>
            現場用クーラーボックス比較
            <span className="mt-2 block text-xl font-bold sm:text-2xl">
              工事・倉庫・屋外作業で失敗しない容量・保冷方式の選び方【2026年】
            </span>
          </h1>
          <p className={`mt-4 ${cls.meta}`}>
            公開日・最終更新日：2026年7月26日 ｜ 作業用品ナビ編集部
          </p>
        </header>

        <Figure
          file="jobsite-cooler-box-hero.jpg"
          alt="現場休憩所にクーラーボックスを置いて比較検討するイメージ"
        />

        <p className={cls.body}>
          現場用クーラーボックス選びで失敗しやすいのは、
          <strong>
            「容量だけで決める」「持ち運びやすさだけで決める」「設置場所や日陰を考えない」
          </strong>
          の3つです。本当に比較すべきなのは、
          <Mark>容量、保冷方式、運搬性、電源の有無、設置場所、補充運用</Mark>
          です。
        </p>
        <p className={cls.body}>
          このページでは「クーラーボックス 現場用
          比較」で探している人向けに、クーラーボックス本体の違いだけでなく、氷の確保方法、日陰づくり、送風設備、関連商品まで含めて、現場目線で分かりやすく比較します。
        </p>

        <AnswerBox>
          <p className="text-sm font-black text-sky-950">先に結論</p>
          <div className="mt-2 space-y-3 leading-8 text-gray-900">
            <p>
              <strong>
                少人数の移動班なら
                <Mark>20Lクラス</Mark>
                、大人数・長時間現場なら
                <Mark>据え置き型の大容量クラス</Mark>
                が比較の出発点です。
              </strong>
            </p>
            <p>
              ただし、クーラーボックス単体で選ぶのではなく、
              <strong>
                日陰・送風・氷や保冷剤の確保・保管用と配布用の分離
              </strong>
              までセットで考えた方が、実際の使いやすさは大きく変わります。
            </p>
            <p>
              記事前半に、まず見たい商品カードとサイズ比較表を置いているので、急いでいる方はそこから確認してください。
            </p>
          </div>
        </AnswerBox>

        <NoteBox title="この記事の切り口">
          <p>
            前回の「現場の水分補給がぬるい対策」記事とは切り口を変え、今回は
            <strong>購買・選定・比較</strong>
            を主軸にしています。
          </p>
          <p>
            症状対策ではなく、
            <strong>
              現場用クーラーボックスをどう比較し、どの運用に向くか
            </strong>
            を中心にまとめています。
          </p>
        </NoteBox>

        <nav
          aria-label="目次"
          className="my-8 rounded-xl border border-sky-300 bg-sky-50/50 p-5"
        >
          <p className="font-black text-gray-900">目次</p>
          <ol className="mt-3 grid gap-2 text-sm leading-7 sm:grid-cols-2">
            <li>
              <a href="#point" className="underline underline-offset-4">
                1. 比較で先に見るべきポイント
              </a>
            </li>
            <li>
              <a href="#featured" className="underline underline-offset-4">
                2. まず見たい商品
              </a>
            </li>
            <li>
              <a href="#compare" className="underline underline-offset-4">
                3. 現場用クーラーボックス比較表
              </a>
            </li>
            <li>
              <a href="#size" className="underline underline-offset-4">
                4. 容量と人数の目安
              </a>
            </li>
            <li>
              <a href="#ice" className="underline underline-offset-4">
                5. 氷・保冷剤の確保方法
              </a>
            </li>
            <li>
              <a href="#station" className="underline underline-offset-4">
                6. 日陰・送風との組み合わせ
              </a>
            </li>
            <li>
              <a href="#related" className="underline underline-offset-4">
                7. 関連商品
              </a>
            </li>
            <li>
              <a href="#mistakes" className="underline underline-offset-4">
                8. よくある失敗
              </a>
            </li>
            <li>
              <a href="#faq" className="underline underline-offset-4">
                9. FAQ
              </a>
            </li>
          </ol>
        </nav>

        <SectionTitle id="point">比較で先に見るべき5つのポイント</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {(
            [
              [
                "容量",
                "1〜4人か、5人以上か、終日か半日かで必要容量は変わります。",
              ],
              [
                "保冷方式",
                "ソフトクーラーバッグ、電源式、保冷剤中心など比較軸を分けます。",
              ],
              [
                "運搬性",
                "移動班は持ち運びやすさが重要。常設休憩所は設置性を重視。",
              ],
              [
                "設置環境",
                "日陰・送風・電源の有無で、同じ商品でも使いやすさが変わります。",
              ],
              [
                "補充運用",
                "氷・飲料・保冷剤の補充担当が決まっているかも重要です。",
              ],
            ] as const
          ).map(([title, text]) => (
            <article
              key={title}
              className="rounded-xl border border-gray-300 p-5"
            >
              <h3 className="font-black text-gray-900">{title}</h3>
              <p className={`mt-2 ${cls.bodySm}`}>{text}</p>
            </article>
          ))}
        </div>

        <SectionTitle id="featured">まず見たい商品6点</SectionTitle>
        <p className={cls.body}>
          比較の起点になるクーラーボックス本体と、現場で使いやすくするための補完設備を先にまとめました。
        </p>
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.key} product={product} />
          ))}
        </div>

        <SectionTitle id="compare">現場用クーラーボックス比較表</SectionTitle>
        <p className={cls.body}>
          今回の掲載商品の中で、クーラーボックスそのものとして比較の中心になるのは、
          <Mark>据え置き型の大容量クラス</Mark>と、
          <Mark>持ち運びやすい20Lクラス</Mark>
          です。容量だけでなく、保冷方式・運搬性・設置性の違いも合わせて見てください。
        </p>
        <TableWrap>
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>商品</Th>
                <Th>比較タイプ</Th>
                <Th>サイズ・容量</Th>
                <Th>向く現場</Th>
                <Th>選び方のポイント</Th>
                <Th>購入</Th>
              </tr>
            </thead>
            <tbody>
              {coolers.map((product) => (
                <tr key={product.key}>
                  <Td>
                    <ImageTableCell product={product} />
                  </Td>
                  <Td>{product.comparisonType}</Td>
                  <Td>{product.sizeInfo}</Td>
                  <Td>{product.bestFor}</Td>
                  <Td>{product.selection}</Td>
                  <Td>
                    <LinkButtons links={product.links} />
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrap>

        <Figure
          file="cooler-box-size-comparison.jpg"
          alt="現場用クーラーボックスのサイズと使い方を比較するイメージ"
        />

        <TableWrap>
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>比較軸</Th>
                <Th>20Lクラス</Th>
                <Th>大容量・据え置き型</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>向く人数</Td>
                <Td>1〜4人程度</Td>
                <Td>5人以上・大人数現場</Td>
              </tr>
              <tr>
                <Td>向く用途</Td>
                <Td>巡回・移動班・車載</Td>
                <Td>詰所・常設休憩所・長時間現場</Td>
              </tr>
              <tr>
                <Td>強み</Td>
                <Td>持ち運びやすい、扱いやすい</Td>
                <Td>冷やし続けやすい、補充回数を抑えやすい</Td>
              </tr>
              <tr>
                <Td>注意点</Td>
                <Td>大人数には足りにくい</Td>
                <Td>電源・設置スペース・搬入が必要になりやすい</Td>
              </tr>
            </tbody>
          </table>
        </TableWrap>

        <SectionTitle id="size">容量と人数の目安</SectionTitle>
        <p className={cls.body}>
          容量は商品スペックだけでなく、飲料本数、氷・保冷剤、開閉回数、補充回数まで含めて考える必要があります。
        </p>
        <TableWrap>
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>人数・現場タイプ</Th>
                <Th>考え方</Th>
                <Th>おすすめの方向性</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>1〜4人・移動班</Td>
                <Td>持ち運びやすさ重視</Td>
                <Td>20Lクラス＋予備保冷剤</Td>
              </tr>
              <tr>
                <Td>5〜10人・中規模現場</Td>
                <Td>保管用と配布用の分離が必要</Td>
                <Td>中型休憩所＋クーラーボックス複数運用</Td>
              </tr>
              <tr>
                <Td>10人超・長時間現場</Td>
                <Td>冷やし続ける仕組み重視</Td>
                <Td>据え置き型＋テント＋送風</Td>
              </tr>
            </tbody>
          </table>
        </TableWrap>

        <SectionTitle id="ice">氷・保冷剤の確保方法</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          {(
            [
              [
                "前日凍結を基本にする",
                "保冷剤や凍らせた飲料を前日準備し、朝の初期温度を下げます。",
              ],
              [
                "朝の持込量を決める",
                "人数と気温に合わせて、午前中に不足しない量を見込みます。",
              ],
              [
                "追加調達先を決める",
                "コンビニや拠点など、昼前後の補充先を先に決めておきます。",
              ],
              [
                "補充担当を決める",
                "誰が受け取り、誰が補充するかを明確にします。",
              ],
              [
                "飲料用と身体冷却用を分ける",
                "氷の使い道が混ざると不足しやすくなります。",
              ],
              [
                "保管用と配布用を分ける",
                "開閉回数を減らし、保冷効率を上げやすくなります。",
              ],
            ] as const
          ).map(([title, text]) => (
            <article
              key={title}
              className="rounded-xl border border-gray-300 p-5"
            >
              <h3 className="font-black text-gray-900">{title}</h3>
              <p className={`mt-2 ${cls.body}`}>{text}</p>
            </article>
          ))}
        </div>
        <Figure
          file="ice-and-coolant-preparation.jpg"
          alt="現場用クーラーボックスへ入れる氷や保冷剤を準備するイメージ"
        />

        <SectionTitle id="station">
          日陰・送風との組み合わせで使いやすさが変わる
        </SectionTitle>
        <p className={cls.body}>
          現場用クーラーボックスは、単体比較だけでは不十分です。設置場所が暑いと本来の使いやすさを発揮しにくいため、日陰や送風とあわせて考える方が失敗しにくくなります。
        </p>
        <TableWrap>
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>商品</Th>
                <Th>分類</Th>
                <Th>サイズ・分類</Th>
                <Th>役割</Th>
                <Th>購入</Th>
              </tr>
            </thead>
            <tbody>
              {stations.map((product) => (
                <tr key={product.key}>
                  <Td>
                    <ImageTableCell product={product} />
                  </Td>
                  <Td>{product.comparisonType}</Td>
                  <Td>{product.sizeInfo}</Td>
                  <Td>{product.role}</Td>
                  <Td>
                    <LinkButtons links={product.links} />
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrap>
        <Figure
          file="cooler-station-layout.jpg"
          alt="テントと工場扇を組み合わせて現場用クーラーボックスを使いやすくするイメージ"
        />

        <SectionTitle id="related">
          関連商品｜クーラーボックス比較と一緒に見たい商品
        </SectionTitle>
        <p className={cls.body}>
          クーラーボックスが決まったら、現場全体の使いやすさを高める関連商品も絞って確認すると導入判断がしやすくなります。
        </p>
        <Figure
          file="related-cooling-items-selection.jpg"
          alt="現場用クーラーボックスと一緒に検討したい関連商品を比較するイメージ"
        />
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {related.map((product) => (
            <ProductCard key={product.key} product={product} />
          ))}
        </div>

        <SectionTitle id="mistakes">比較時によくある失敗</SectionTitle>
        <ol className="mt-5 grid gap-3 md:grid-cols-2">
          {failures.map((item, index) => (
            <li
              key={item}
              className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-xl border border-gray-300 p-4"
            >
              <span className="font-black text-sky-800">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="leading-7 text-gray-900">{item}</span>
            </li>
          ))}
        </ol>

        <SectionTitle id="checklist">法人担当者向けチェックリスト</SectionTitle>
        <TableWrap>
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>確認項目</Th>
                <Th>見るポイント</Th>
                <Th>判断の目安</Th>
              </tr>
            </thead>
            <tbody>
              {checklist.map(([item, point, guide]) => (
                <tr key={item}>
                  <Td>{item}</Td>
                  <Td>{point}</Td>
                  <Td>{guide}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrap>

        <SectionTitle id="faq">FAQ</SectionTitle>
        <div className="divide-y divide-gray-300 rounded-xl border border-gray-300">
          {faqs.map((faq) => (
            <details key={faq.question} className="p-5">
              <summary className={`cursor-pointer list-none pr-8 ${cls.faqQ}`}>
                {faq.question}
              </summary>
              <p className={`mt-3 ${cls.body}`}>{faq.answer}</p>
            </details>
          ))}
        </div>
        <p className={`mt-4 text-xs ${cls.meta}`}>
          FAQは本文理解を助けるために掲載しています。FAQPage構造化データは実装していません。
        </p>

        <SectionTitle id="references">参考情報</SectionTitle>
        <ul className="space-y-3">
          {references.map((ref) => (
            <li
              key={ref.url}
              className="rounded-xl border border-gray-300 p-4"
            >
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gray-900 underline underline-offset-4"
              >
                {ref.label}
              </a>
              <p className={`mt-1 ${cls.bodySm}`}>{ref.note}</p>
            </li>
          ))}
        </ul>

        <SectionTitle id="summary">
          まとめ｜現場用クーラーボックス比較は「容量」だけで終わらせない
        </SectionTitle>
        <p className={cls.body}>
          現場用クーラーボックスを比較するときは、サイズや価格だけでなく、
          <strong>
            人数・運搬性・保冷方式・設置場所・氷の補充・日陰や送風との組み合わせ
          </strong>
          まで見た方が失敗しにくくなります。
        </p>
        <p className={cls.body}>
          移動班なら
          <Mark>20Lクラス</Mark>
          、常設休憩所なら
          <Mark>据え置き型の大容量クラス</Mark>
          が起点です。そのうえで、テントや工場扇などの補完設備まで含めて選ぶと、現場全体の使いやすさが上がります。
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
