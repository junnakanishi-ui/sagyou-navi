import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "100v-commercial-pressure-washer-selection";
const UTM = "utm_source=sagyou_navi";
const ARTICLE_URL = `https://sagyou-navi.com/articles/${SLUG}`;

function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;

  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

type ShopLink = {
  shop: "rakuten" | "yahoo";
  url: string;
  label: string;
};

type Machine = {
  code: string;
  short: string;
  formalName: string;
  maker: string;
  category: string;
  img: string;
  voltage: string;
  frequency: string;
  pressure: string;
  flow: string;
  waterSupply: string;
  continuous: string;
  weight: string;
  size: string;
  hose: string;
  use: string;
  check: string;
  links: ShopLink[];
};

type Accessory = {
  code: string;
  short: string;
  formalName: string;
  category: string;
  img: string;
  use: string;
  check: string;
  url: string;
};

const machines: Machine[] = [
  {
    "code": "hd48classic-50",
    "short": "KARCHER HD 4/8 Classic 50Hz",
    "formalName": "KARCHER 業務用冷水高圧洗浄機 HD 4/8 Classic 50Hz 1.520-918.0",
    "maker": "KARCHER",
    "category": "50Hz専用・100V",
    "img": "/products/289633.jpg",
    "voltage": "単相100V",
    "frequency": "50Hz専用",
    "pressure": "8MPa（80bar）",
    "flow": "400L/h（約6.7L/min）",
    "waterSupply": "標準構成の給水方法・自吸可否は商品ページ／取扱説明書で確認",
    "continuous": "メーカー公式ではプロ向け仕様。定格・休止条件は取扱説明書で確認",
    "weight": "14.2kg（アクセサリー除く）",
    "size": "335×320×845mm",
    "hose": "高圧ホース等の同梱内容は販売ページで最終確認",
    "use": "50Hz設備の工場、建築現場、車両洗浄で、持ち運びやすさと水量を重視",
    "check": "使用場所の周波数を設備表示や電力会社情報で確認。60Hz設備では使用しない",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/289633.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで50Hz仕様を確認"
      },
      {
        "shop": "rakuten",
        "url": "https://item.rakuten.co.jp/crecote-shop/ta046428-15209180/",
        "label": "楽天市場で50Hz仕様を確認"
      }
    ]
  },
  {
    "code": "hd48classic-60",
    "short": "KARCHER HD 4/8 Classic 60Hz",
    "formalName": "KARCHER 業務用冷水高圧洗浄機 HD 4/8 Classic 60Hz 1.520-919.0",
    "maker": "KARCHER",
    "category": "60Hz専用・100V",
    "img": "/products/289634.jpg",
    "voltage": "単相100V",
    "frequency": "60Hz専用",
    "pressure": "8MPa（80bar）",
    "flow": "400L/h（約6.7L/min）",
    "waterSupply": "標準構成の給水方法・自吸可否は商品ページ／取扱説明書で確認",
    "continuous": "メーカー公式では家庭用と異なるプロ向けの定格使用時間フリー仕様を案内",
    "weight": "14.2kg（アクセサリー除く）",
    "size": "335×320×845mm",
    "hose": "パワーノズル、600mmランス、標準トリガーガン",
    "use": "60Hz設備の工場、建築現場、車両洗浄で、機動性と耐久性を重視",
    "check": "使用場所の周波数を設備表示や電力会社情報で確認。50Hz設備では使用しない",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/289634.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングで60Hz仕様を確認"
      },
      {
        "shop": "rakuten",
        "url": "https://item.rakuten.co.jp/crecote-shop/ta046429-15209190/",
        "label": "楽天市場で60Hz仕様を確認"
      }
    ]
  },
  {
    "code": "hpwm",
    "short": "TRUSCO 業務用小型高圧洗浄機 HPWM",
    "formalName": "TRUSCO 業務用小型高圧洗浄機 50Hz／60Hz両用タイプ HPWM",
    "maker": "TRUSCO",
    "category": "50Hz／60Hz共用・自吸対応",
    "img": "/products/232363.jpg",
    "voltage": "単相100V",
    "frequency": "50Hz／60Hz共用",
    "pressure": "7MPa",
    "flow": "5.0L/min（50Hz）・5.5L/min（60Hz）",
    "waterSupply": "水道直結／自吸両用",
    "continuous": "連続使用時間2.5時間",
    "weight": "14.5kg",
    "size": "318×304×840mm",
    "hose": "高圧ホース10m、吸水ホース1.5m、ガン、ランス、2種ノズル",
    "use": "複数地域への持ち出し、水道がない場所、工場・ビルメン・災害備蓄",
    "check": "自吸用のバケツ・タンクは付属しない。純正接続部品を使用",
    "links": [
      {
        "shop": "yahoo",
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/232363.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "Yahoo!ショッピングでHPWMを確認"
      }
    ]
  }
];
const accessories: Accessory[] = [
  {
    "code": "hpwmg",
    "short": "HPWM専用ガン HPWMG",
    "formalName": "TRUSCO中山 トラスコ中山 TRUSCO オレンジブック 衛生用品 清掃用品 クリーナー 業務用小型高圧洗浄機 HPWM専用ガン HPWMG 256-9955",
    "category": "交換部品",
    "img": "/products/232364.jpg",
    "use": "HPWMの専用ガン交換・予備部品",
    "check": "HPWM専用品。ほかの本体へ流用できると断定しない",
    "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/232364.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "code": "hpwml",
    "short": "HPWM専用ランス HPWML",
    "formalName": "TRUSCO中山 トラスコ中山 TRUSCO オレンジブック 衛生用品 清掃用品 クリーナー 業務用小型高圧洗浄機 HPWM専用ランス ノズルロック機能付 HPWML 256-9957",
    "category": "交換部品",
    "img": "/products/232366.jpg",
    "use": "ノズルロック機能付き専用ランスの交換",
    "check": "HPWMとの適合、ノズル・ガンとの組み合わせを確認",
    "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/232366.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  },
  {
    "code": "hpwmh10",
    "short": "HPWM専用 高圧ホース10m HPWMH-10",
    "formalName": "TRUSCO中山 トラスコ中山 TRUSCO オレンジブック 衛生用品 清掃用品 クリーナー 業務用小型高圧洗浄機 HPWM専用 高圧ホース10m HPWMH-10 261-9378",
    "category": "交換部品",
    "img": "/products/232365.jpg",
    "use": "HPWMの高圧ホース交換・予備",
    "check": "損傷、折れ、膨らみ、接続部摩耗があるホースを継続使用しない",
    "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/232365.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
  }
];
const faqs = [
  {
    "question": "100Vの業務用高圧洗浄機で工場清掃はできますか？",
    "answer": "小～中規模の床、機械外装、車両、建築資材などの定期洗浄では候補になります。ただし、広大な床面を毎日長時間洗う、油脂を短時間で除去する、複数人で同時使用するといった用途では、200V機、温水機、床洗浄機なども比較してください。"
  },
  {
    "question": "家庭用と業務用の違いは吐出圧力だけですか？",
    "answer": "圧力だけではありません。モーターやポンプの耐久性、連続使用条件、高圧ホース、ガン、部品供給、修理対応、移動・収納性まで確認します。家庭用より圧力が近くても、反復使用を前提とする構造が異なる場合があります。"
  },
  {
    "question": "業務用高圧洗浄機は何MPaあればよいですか？",
    "answer": "必要圧力は汚れと対象面で変わります。本記事の3機種は7～8MPaですが、圧力だけでなく水量、ノズル、洗剤、作業距離、対象面の耐久性を含めて判断します。"
  },
  {
    "question": "吐出圧力と吐出水量はどちらが重要ですか？",
    "answer": "固着汚れを剥がす力には圧力、剥がした汚れを流す効率には水量が影響します。工場床や車両を広く洗う場合は水量も重要です。狭い場所や水使用量を抑えたい場合は、必要以上の水量を選ばない考え方もあります。"
  },
  {
    "question": "50Hzと60Hzを間違えるとどうなりますか？",
    "answer": "専用機は指定周波数以外で使用しないでください。故障や保証対象外につながる可能性があります。地域名だけで決めず、使用現場の設備表示や電力会社情報を確認します。"
  },
  {
    "question": "出張や支店間移動が多い場合はどれが選びやすいですか？",
    "answer": "50Hz／60Hz共用のHPWMは、周波数が異なる地域へ持ち出す運用で誤発注を減らしやすい候補です。ただし、現場ごとの電源容量、給水、排水、保管条件は別途確認してください。"
  },
  {
    "question": "自吸式とは何ですか？",
    "answer": "水道へ直結せず、バケツやタンクなどのため水から吸水する方式です。吸水高さ、ホース、ストレーナー、エア抜き、清潔な水の確保など使用条件があります。"
  },
  {
    "question": "HPWMにはバケツやタンクも付属しますか？",
    "answer": "メーカー公式ではバケツやタンクは付属しないと案内されています。自吸で使う場合は、容量、転倒防止、給水量、異物混入を考えて別途準備してください。"
  },
  {
    "question": "KARCHER HD 4/8 Classicは自吸できますか？",
    "answer": "本記事で確認した標準商品ページだけでは、自吸に必要な構成を断定していません。ため水利用を予定する場合は、対応アクセサリと取扱説明書をメーカー・販売店へ確認してください。"
  },
  {
    "question": "工場床の油汚れも水だけで落ちますか？",
    "answer": "油の種類や固着度によっては、水圧だけでは不十分です。適合する洗剤、温水、事前の油回収、ブラシ洗浄などを組み合わせます。排水へ油や薬品を流せるとは限らないため、工場の排水ルールを確認してください。"
  },
  {
    "question": "塗装された工場床に使えますか？",
    "answer": "塗膜の劣化、ノズル距離、噴射角度によっては剥離や白化を起こす可能性があります。目立たない場所で低い負荷から試し、施工会社や塗料メーカーの清掃条件を確認してください。"
  },
  {
    "question": "食品工場でも使えますか？",
    "answer": "使用区域、飛沫、排水、異物、洗剤、衛生管理計画を確認する必要があります。開放食品や電装品へ直接噴射せず、HACCPチームや品質管理部門のルールを優先してください。"
  },
  {
    "question": "建設機械やトラック洗浄にはどれが向きますか？",
    "answer": "泥を広く流す用途では、水量400L/hのHD 4/8 Classicが比較しやすい候補です。使用地域に合う50Hzまたは60Hzを選び、油脂、電装、シール部、ステッカーへの噴射条件を調整してください。"
  },
  {
    "question": "ビルメンテナンスでは何を確認すべきですか？",
    "answer": "エレベーター・車両への積載、騒音、電源、給水、排水、高圧ホース長、周囲の営業・通行への影響を確認します。全国移動やため水利用が多い場合はHPWMの特徴と合いやすくなります。"
  },
  {
    "question": "高圧ホース10mで足りますか？",
    "answer": "本体を安全に置ける場所から洗浄範囲までの距離、曲がり、障害物を測ります。長さが不足する場合も、適合確認なしに別メーカー品や継ぎ足し部品を使用しないでください。"
  },
  {
    "question": "延長コードを使ってもよいですか？",
    "answer": "電圧降下、発熱、漏電、コード容量不足のリスクがあるため、取扱説明書の条件を優先します。やむを得ず使用する場合は、電気担当者とコード仕様・長さ・防水・接地を確認してください。"
  },
  {
    "question": "高圧洗浄機の水使用量はどのくらいですか？",
    "answer": "HD 4/8 Classicは400L/hなので30分で約200L、HPWMは50Hzで約150L、60Hzで約165Lが目安です。実際の使用量はトリガー操作や作業時間で変わります。"
  },
  {
    "question": "連続使用時間は長い方がよいですか？",
    "answer": "長時間作業では重要ですが、清掃の段取り、給水、排水、休憩、ノズル交換、点検時間も必要です。最大時間まで連続運転する前提ではなく、メーカーの取扱条件に沿って計画します。"
  },
  {
    "question": "温水を入れて使えますか？",
    "answer": "許容給水温度は機種ごとに異なります。HPWMは最高給水温度50℃とされています。HD 4/8 Classicを含め、上限を超える温水や蒸気を供給しないでください。"
  },
  {
    "question": "洗剤はどれでも使えますか？",
    "answer": "ポンプ、シール、対象面、排水処理への適合が必要です。酸・アルカリ・溶剤などを安易に吸わせず、メーカー指定または適合確認済みの洗剤を使います。"
  },
  {
    "question": "ガンやランスは他社製品を流用できますか？",
    "answer": "接続規格や耐圧が合わない可能性があります。HPWMはメーカーが純正接続部品の使用を案内しているため、専用ガン、専用ランス、専用ホースを選ぶのが基本です。"
  },
  {
    "question": "高圧ホースはいつ交換しますか？",
    "answer": "亀裂、膨らみ、折れ、外皮摩耗、接続部の変形・漏れがある場合は使用を中止し、適合する部品へ交換します。針金やテープで補修して継続使用しないでください。"
  },
  {
    "question": "使用後に行うメンテナンスは？",
    "answer": "圧力を抜き、給水を止め、ホースやガンの水を抜き、ノズル詰まり・漏れ・コード・接続部を確認します。凍結、直射日光、薬品蒸気を避けて保管してください。"
  },
  {
    "question": "購入前に最低限確認する項目は？",
    "answer": "用途、対象面、汚れ、圧力、水量、100V電源、50Hz／60Hz、給水方式、排水、使用時間、騒音、ホース長、重量、保管場所、交換部品、修理窓口を確認します。"
  }
];
const failureItems: string[] = [
  "「業務用」という表示だけで選び、使用頻度・連続時間を確認しない",
  "最大圧力だけで比較し、常用圧力と吐出水量を見ない",
  "50Hz専用と60Hz専用を地域名だけで判断して発注する",
  "複数拠点へ持ち回るのに周波数専用機を選ぶ",
  "自吸対応と、タンク付属を同じ意味だと思い込む",
  "水道の流量が足りるか確認しない",
  "排水先を決めず、屋内床を水浸しにする",
  "油・薬品・泥をそのまま排水へ流す",
  "塗床、シール、目地へ至近距離から当て続ける",
  "電装盤、モーター、コンセントへ直接噴射する",
  "ノズルを人、動物、作業者の保護具へ向ける",
  "延長コードの容量・防水・長さを確認しない",
  "凍結や直射日光を避けずに保管する",
  "高圧ホースの膨らみや亀裂をテープで補修する",
  "適合確認なしに他社ガン・ランス・ホースを接続する",
  "洗剤のポンプ・床材・排水への適合を確認しない",
  "作業前の固形物回収をせず、泥を広げる",
  "洗浄後の水切り・乾燥・立入管理を決めていない",
  "洗浄機だけを購入し、予備部品・修理窓口を確認しない",
  "広大な床や重油汚れにも100V冷水機だけで対応しようとする",
  "作業者ごとにノズル距離・角度が異なり、洗浄品質が安定しない",
  "騒音・飛沫・通行人への養生をしない",
  "車両洗浄でベアリング・電装・ラベルへ強く当てる",
  "使用後に圧力を抜かず、ホースを接続したまま保管する",
  "購入後のKPIを決めず、作業時間や水使用量を比較しない"
];
const corporateChecklist: string[][] = [
  [
    "主用途",
    "工場床／機械外装／車両／建築資材／ビルメン",
    "用途を1～2個へ絞る"
  ],
  [
    "汚れ",
    "泥／粉じん／油脂／苔／水垢",
    "洗剤・温水の必要性を判断"
  ],
  [
    "対象面",
    "コンクリート／塗床／金属／車体／外壁",
    "テスト洗浄の要否"
  ],
  [
    "電源",
    "単相100V、コンセント容量、接地",
    "延長コード前提にしない"
  ],
  [
    "周波数",
    "50Hz／60Hz／両用",
    "使用現場ごとに確認"
  ],
  [
    "圧力",
    "常用吐出圧力",
    "高すぎる機種を選ばない"
  ],
  [
    "水量",
    "L/minまたはL/h",
    "洗浄効率と排水量を計算"
  ],
  [
    "給水",
    "水道直結／自吸",
    "水源・タンク・ホースを確認"
  ],
  [
    "排水",
    "排水溝、回収、油水分離、養生",
    "屋内作業で最重要"
  ],
  [
    "連続時間",
    "1回の使用時間・1日の回数",
    "休止・点検を含める"
  ],
  [
    "ホース",
    "必要長さ、曲がり、通路",
    "10mで届くか実測"
  ],
  [
    "移動",
    "本体重量、車輪、車両・階段",
    "一人で搬送できるか"
  ],
  [
    "騒音・飛沫",
    "近隣、営業中、食品・製品",
    "時間帯と養生を決める"
  ],
  [
    "付属品",
    "ガン、ランス、ノズル、吸水部品",
    "不足品を同時発注"
  ],
  [
    "保守",
    "ホース・ガン・ランス・ノズル・修理",
    "純正部品の入手性"
  ],
  [
    "効果測定",
    "作業時間、水量、再洗浄、故障、清掃品質",
    "導入前後で比較"
  ]
];
const referenceSources = [
  {
    "label": "KARCHER HD 4/8 Classic 50Hz 公式",
    "url": "https://www.kaercher.com/jp/professional/high-pressure-cleaners/cold-water-high-pressure-cleaners/compact-class/hd-4-8-classic-50hz-15209180.html",
    "note": "50Hz、100V、400L/h、80bar、寸法・質量など"
  },
  {
    "label": "KARCHER HD 4/8 Classic 60Hz 公式",
    "url": "https://www.kaercher.com/jp/professional/high-pressure-cleaners/cold-water-high-pressure-cleaners/compact-class/hd-4-8-classic-60hz-15209190.html",
    "note": "60Hz、基本スペック、機動性、プロ向け仕様"
  },
  {
    "label": "TRUSCO HPWM オレンジブック公式",
    "url": "https://www.orange-book.com/ja/c/products/index.html?itemCd=HPWM++++++++++++++++++++++++++3100",
    "note": "50Hz／60Hz共用、自吸、水量、圧力、付属品、連続時間"
  },
  {
    "label": "Google Search Central：AI Features and Your Website",
    "url": "https://developers.google.com/search/docs/appearance/ai-features",
    "note": "AI検索でも通常のSEO基盤、テキスト、内部リンク、画像が重要"
  },
  {
    "label": "Google Search documentation updates",
    "url": "https://developers.google.com/search/updates",
    "note": "2026年のFAQリッチリザルト廃止などを確認"
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "業務用高圧洗浄機は100Vで足りる？小型機の選び方と50Hz・60Hz・自吸の違い",
  description:
    "工場・車両・ビルメン向けに、100V業務用高圧洗浄機を圧力、水量、周波数、自吸、連続使用、ホース、排水から比較する実務ガイド。",
  image: [
    `https://sagyou-navi.com/images/${SLUG}/commercial-pressure-washer-factory-hero.jpg`,
  ],
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  mainEntityOfPage: ARTICLE_URL,
  author: {
    "@type": "Organization",
    name: "作業用品ナビ編集部",
  },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    url: "https://sagyou-navi.com/",
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
      item: "https://sagyou-navi.com/",
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
      name: "100V業務用高圧洗浄機の選び方",
      item: ARTICLE_URL,
    },
  ],
};

export const metadata: Metadata = {
  title:
    "業務用高圧洗浄機は100Vで足りる？小型機の選び方と50Hz・60Hz・自吸の違い",
  description:
    "工場・車両・ビルメン向け100V業務用高圧洗浄機を比較。50Hz・60Hzの誤発注防止、自吸、水量、圧力、連続時間、排水、KARCHER HD 4/8 ClassicとTRUSCO HPWMの違いを解説します。",
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    type: "article",
    url: ARTICLE_URL,
    title:
      "業務用高圧洗浄機は100Vで足りる？小型機の選び方",
    description:
      "50Hz・60Hz専用機と全国共用・自吸対応機を、現場用途から比較。",
    images: [
      {
        url: `/images/${SLUG}/commercial-pressure-washer-factory-hero.jpg`,
        width: 1200,
        height: 675,
        alt: "工場で100V業務用高圧洗浄機を使って床や設備外装を清掃するイメージ",
      },
    ],
  },
};

function ShopButton({ link }: { link: ShopLink }) {
  return (
    <a
      href={buildUrl(link.url, UTM)}
      target="_blank"
      rel="nofollow sponsored"
      className="inline-flex min-h-11 items-center justify-center rounded-md bg-gray-900 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-gray-700"
    >
      {link.label}
    </a>
  );
}

function MachineCard({ machine }: { machine: Machine }) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-gray-50">
        <Image
          src={machine.img}
          alt={`${machine.short}の商品画像`}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-contain p-4"
        />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-gray-900">
            {machine.category}
          </span>
          <span className="inline-flex rounded-full border border-gray-300 px-3 py-1 text-xs font-bold text-gray-900">
            {machine.pressure}
          </span>
        </div>
        <h3 className="text-xl font-black leading-snug text-gray-900">
          {machine.short}
        </h3>
        <dl className="grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-2 text-sm">
          <dt className="font-bold text-gray-900">水量</dt>
          <dd>{machine.flow}</dd>
          <dt className="font-bold text-gray-900">給水</dt>
          <dd>{machine.waterSupply}</dd>
          <dt className="font-bold text-gray-900">向く現場</dt>
          <dd>{machine.use}</dd>
        </dl>
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm leading-relaxed text-gray-900">
          <strong>購入前確認：</strong>
          {machine.check}
        </p>
        <div className="grid gap-2">
          {machine.links.map((link) => (
            <ShopButton key={`${machine.code}-${link.shop}`} link={link} />
          ))}
        </div>
        <details className="text-xs text-gray-900">
          <summary className="cursor-pointer font-bold">正式商品名を確認</summary>
          <p className="mt-2 leading-relaxed">{machine.formalName}</p>
        </details>
      </div>
    </article>
  );
}

function AccessoryCard({ item }: { item: Accessory }) {
  return (
    <article className="grid gap-4 rounded-xl border border-gray-200 p-4 sm:grid-cols-[9rem_1fr]">
      <div className="relative aspect-square rounded-lg bg-gray-50">
        <Image
          src={item.img}
          alt={`${item.short}の商品画像`}
          fill
          sizes="144px"
          className="object-contain p-2"
        />
      </div>
      <div>
        <span className="text-xs font-bold text-gray-900">{item.category}</span>
        <h3 className="mt-1 text-lg font-black text-gray-900">{item.short}</h3>
        <p className="mt-2 text-[15px] leading-7 text-gray-900">{item.use}</p>
        <p className="mt-2 text-sm leading-6 text-gray-900">
          <strong>確認：</strong>
          {item.check}
        </p>
        <a
          href={buildUrl(item.url, UTM)}
          target="_blank"
          rel="nofollow sponsored"
          className="mt-3 inline-flex min-h-10 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-bold text-white hover:bg-gray-700"
        >
          交換部品の仕様を見る
        </a>
      </div>
    </article>
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

function Mark({ children }: { children: ReactNode }) {
  return <mark className={cls.mark}>{children}</mark>;
}

function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <section className="my-6 rounded-xl border-2 border-gray-900 bg-amber-50 p-5 shadow-sm">
      <p className="mb-2 text-base font-black text-gray-900">先に結論</p>
      <div className="space-y-3 leading-8 text-gray-900">{children}</div>
    </section>
  );
}

function Caution({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-6 rounded-xl border border-amber-300 bg-amber-50 p-5">
      <p className="font-black text-gray-900">{title}</p>
      <div className="mt-2 space-y-2 text-[15px] leading-7 text-gray-900">
        {children}
      </div>
    </aside>
  );
}

function Figure({ file, alt }: { file: string; alt: string }) {
  return (
    <figure className="my-7 overflow-hidden rounded-2xl border border-gray-200">
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

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-8 text-gray-900 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <nav aria-label="パンくず" className={`mb-5 ${cls.meta}`}>
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
            <li aria-current="page">100V業務用高圧洗浄機</li>
          </ol>
        </nav>

        <header>
          <p className="text-sm font-bold tracking-wide text-gray-900">
            工場・車両・ビルメン向け／50Hz・60Hz・自吸を比較
          </p>
          <h1 className={`mt-3 ${cls.h1}`}>
            業務用高圧洗浄機は100Vで足りる？
            <span className="mt-3 block text-2xl font-black sm:text-3xl">
              小型機の選び方と50Hz・60Hz・自吸の違い
            </span>
          </h1>
          <p className={`mt-4 ${cls.meta}`}>
            公開日・最終更新日：2026年7月23日　｜　作業用品ナビ編集部
          </p>
        </header>

        <Figure
          file="commercial-pressure-washer-factory-hero.jpg"
          alt="工場で100V業務用高圧洗浄機を使って床や設備外装を清掃するイメージ"
        />

        <p className={`${cls.body} text-lg`}>
          業務用高圧洗浄機を探すと、200V機やエンジン式、温水機、家庭用に近い小型機まで混在し、圧力の数字だけでは選びにくくなります。特に100V小型機では、
          <strong>使用地域の周波数、水量、自吸、連続時間、排水</strong>
          を見落とすと、購入後に使えない・洗浄が進まない・屋内が水浸しになるといった失敗につながります。
        </p>

        <AnswerBox>
          <p>
            <strong>
              100V業務用高圧洗浄機は、小～中規模の工場床、設備外装、車両、建築資材、ビルメンテナンスの反復洗浄で有力な選択肢です。
            </strong>
            ただし、広大な床面、重油・グリース、毎日の長時間連続運転では、200V機、温水機、床洗浄機も比較してください。
          </p>
          <p>
            使用場所が固定され、水量と機動性を重視するなら<Mark>KARCHER HD 4/8 Classicの50Hzまたは60Hz</Mark>。複数地域へ持ち出す、水道のない場所でため水を使うなら、<Mark>50Hz／60Hz共用・自吸対応のTRUSCO HPWM</Mark>が比較しやすい候補です。
          </p>
          <p>
            選定順は、用途→対象面→電源と周波数→圧力・水量→給水→排水→連続時間→ホース・交換部品です。
          </p>
        </AnswerBox>

        <nav
          aria-label="記事内目次"
          className="my-8 rounded-xl border border-gray-200 bg-gray-50 p-5"
        >
          <p className="font-bold text-gray-900">この記事の判断順</p>
          <ol className="mt-3 grid gap-2 text-sm leading-7 sm:grid-cols-2">
            <li><a href="#quick-products" className="underline underline-offset-4">1. 3機種を先に比較</a></li>
            <li><a href="#keyword-strategy" className="underline underline-offset-4">2. 狙うべき検索テーマ</a></li>
            <li><a href="#business-or-home" className="underline underline-offset-4">3. 業務用を選ぶ基準</a></li>
            <li><a href="#comparison" className="underline underline-offset-4">4. スペック比較</a></li>
            <li><a href="#frequency" className="underline underline-offset-4">5. 50Hz・60Hz</a></li>
            <li><a href="#water-supply" className="underline underline-offset-4">6. 水道直結・自吸</a></li>
            <li><a href="#worksite" className="underline underline-offset-4">7. 用途別の選び方</a></li>
            <li><a href="#procedure" className="underline underline-offset-4">8. 洗浄手順</a></li>
            <li><a href="#parts" className="underline underline-offset-4">9. 交換部品</a></li>
            <li><a href="#mistakes" className="underline underline-offset-4">10. 失敗例</a></li>
            <li><a href="#checklist" className="underline underline-offset-4">11. 法人チェック</a></li>
            <li><a href="#faq" className="underline underline-offset-4">12. FAQ</a></li>
          </ol>
        </nav>

        <section id="quick-products">
          <h2 className={cls.h2}>
            まず比較したい100V業務用高圧洗浄機3機種
          </h2>
          <p className={cls.body}>
            3機種とも100Vの小型業務用ですが、選び方は「洗浄力の順位」ではありません。使用地域を固定できるか、ため水を使うか、複数拠点へ移動するかで候補が変わります。
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {machines.map((machine) => (
              <MachineCard key={machine.code} machine={machine} />
            ))}
          </div>
        </section>

        <section id="keyword-strategy">
          <h2 className={cls.h2}>
            後発サイトが狙うべきキーワードは「100V・小型・用途・給水」
          </h2>
          <p className={cls.body}>
            「業務用高圧洗浄機」単体は、メーカー、大手モール、ランキング、レンタル会社が強い検索結果です。本記事ではビッグワードをタイトルへ残しながら、購入条件が具体的な複合検索をまとめて獲得します。
          </p>
          <TableWrap>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <Th>キーワード群</Th>
                  <Th>想定する悩み</Th>
                  <Th>記事内の回答</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>業務用高圧洗浄機 100V</Td>
                  <Td>既存コンセントで使える業務機を探す</Td>
                  <Td>100Vで足りる作業・上位方式へ切り替える条件</Td>
                </tr>
                <tr>
                  <Td>業務用高圧洗浄機 小型</Td>
                  <Td>車載、階段、狭い工場、収納を重視</Td>
                  <Td>重量・寸法・車輪・ホースの比較</Td>
                </tr>
                <tr>
                  <Td>高圧洗浄機 50Hz 60Hz 違い</Td>
                  <Td>周波数の誤発注を防ぎたい</Td>
                  <Td>専用機と共用機の選び方</Td>
                </tr>
                <tr>
                  <Td>業務用高圧洗浄機 自吸</Td>
                  <Td>水道がない現場で使いたい</Td>
                  <Td>HPWM、タンク、吸水条件</Td>
                </tr>
                <tr>
                  <Td>工場 高圧洗浄機 100V</Td>
                  <Td>床・設備外装を洗いたい</Td>
                  <Td>油・塗床・排水・水量の注意</Td>
                </tr>
                <tr>
                  <Td>ビルメン 高圧洗浄機 小型</Td>
                  <Td>複数施設へ持ち運びたい</Td>
                  <Td>共用周波数・自吸・騒音・車載</Td>
                </tr>
              </tbody>
            </table>
          </TableWrap>
        </section>

        <section id="business-or-home">
          <h2 className={cls.h2}>
            「業務用」は圧力だけでなく反復使用と保守で判断する
          </h2>
          <p className={cls.body}>
            業務用と家庭用を、最大圧力だけで分けると判断を誤ります。法人利用では、毎週・毎日使うこと、複数人が操作すること、ホースやガンが摩耗すること、故障時に作業が止まることまで考えます。
          </p>
          <TableWrap>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <Th>比較軸</Th>
                  <Th>法人導入で見る理由</Th>
                  <Th>確認方法</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>常用圧力・水量</Td>
                  <Td>洗浄速度と対象面への負荷を左右</Td>
                  <Td>最大値ではなく通常運転値を見る</Td>
                </tr>
                <tr>
                  <Td>モーター・ポンプ</Td>
                  <Td>反復使用、寿命、修理費に影響</Td>
                  <Td>インダクションモーター、金属部品、保護機構</Td>
                </tr>
                <tr>
                  <Td>連続使用</Td>
                  <Td>停止・待機時間を含む作業計画が必要</Td>
                  <Td>取扱説明書とメーカー案内を確認</Td>
                </tr>
                <tr>
                  <Td>ホース・ガン</Td>
                  <Td>踏みつけ、引きずり、接続部摩耗が起きる</Td>
                  <Td>耐久仕様、交換部品、適合品</Td>
                </tr>
                <tr>
                  <Td>修理・部品供給</Td>
                  <Td>故障時の業務停止を短くする</Td>
                  <Td>修理窓口、部品、予備品の購入可否</Td>
                </tr>
              </tbody>
            </table>
          </TableWrap>

          <Caution title="100V小型機から上位方式へ切り替える目安">
            <p>
              広大な床を毎日洗う、重油・グリースを短時間で落とす、複数人が長時間使う、水回収が必要、洗浄と同時に床を乾かしたい場合は、200V機、エンジン式、温水機、床洗浄機、バキューム回収機も比較してください。
            </p>
          </Caution>
        </section>

        <section id="comparison">
          <h2 className={cls.h2}>
            HD 4/8 ClassicとHPWMのスペック比較
          </h2>
          <TableWrap>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <Th>比較項目</Th>
                  <Th>HD 4/8 Classic 50Hz</Th>
                  <Th>HD 4/8 Classic 60Hz</Th>
                  <Th>TRUSCO HPWM</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>電源</Td>
                  <Td>単相100V・50Hz専用</Td>
                  <Td>単相100V・60Hz専用</Td>
                  <Td>単相100V・50/60Hz共用</Td>
                </tr>
                <tr>
                  <Td>常用吐出圧力</Td>
                  <Td>8MPa</Td>
                  <Td>8MPa</Td>
                  <Td>7MPa</Td>
                </tr>
                <tr>
                  <Td>吐出水量</Td>
                  <Td>400L/h（約6.7L/min）</Td>
                  <Td>400L/h（約6.7L/min）</Td>
                  <Td>5.0/5.5L/min</Td>
                </tr>
                <tr>
                  <Td>給水</Td>
                  <Td>標準構成は要確認</Td>
                  <Td>標準構成は要確認</Td>
                  <Td>水道直結・自吸両用</Td>
                </tr>
                <tr>
                  <Td>本体質量</Td>
                  <Td>14.2kg</Td>
                  <Td>14.2kg</Td>
                  <Td>14.5kg</Td>
                </tr>
                <tr>
                  <Td>本体寸法</Td>
                  <Td>335×320×845mm</Td>
                  <Td>335×320×845mm</Td>
                  <Td>318×304×840mm</Td>
                </tr>
                <tr>
                  <Td>向く運用</Td>
                  <Td>50Hz現場固定、水量・車両洗浄</Td>
                  <Td>60Hz現場固定、水量・車両洗浄</Td>
                  <Td>複数地域、自吸、工場・ビルメン</Td>
                </tr>
              </tbody>
            </table>
          </TableWrap>

          <h3 className={cls.h3}>
            30分使用時の水量も排水計画へ入れる
          </h3>
          <p className={`${cls.body} mt-2`}>
            HD 4/8 Classicは<Mark>30分で約200L</Mark>、HPWMは50Hzで約150L、60Hzで約165Lが目安です。屋内工場やビルでは、洗浄力だけでなく、この水をどこへ流すか、水切り・回収・乾燥をどうするかまで決めてください。
          </p>

          <Figure
            file="commercial-pressure-washer-three-model-selection.jpg"
            alt="100V業務用高圧洗浄機を周波数・水量・自吸で比較するイメージ"
          />
        </section>

        <section id="frequency">
          <h2 className={cls.h2}>
            50Hz・60Hzは発注時ではなく使用現場ごとに確認
          </h2>
          <p className={cls.body}>
            HD 4/8 Classicは50Hz専用と60Hz専用が別商品です。会社所在地と使用場所が同じとは限らないため、購買担当者が本社所在地だけで選ばないことが重要です。
          </p>
          <ol className="mt-4 space-y-3 leading-7 text-gray-900">
            <li><strong>1. 実際の使用現場を列挙する：</strong>本社、支店、顧客工場、工事現場、応援先。</li>
            <li><strong>2. 現場の設備表示を確認する：</strong>分電盤、機械銘板、電力会社の案内。</li>
            <li><strong>3. 複数周波数で使うなら共用機を比較する：</strong>HPWMは50Hz／60Hz共用。</li>
            <li><strong>4. 発注書へ周波数を明記する：</strong>「KARCHER HD 4/8 Classic」だけで発注しない。</li>
          </ol>

          <Figure
            file="pressure-washer-frequency-power-check.jpg"
            alt="高圧洗浄機の導入前に分電盤と電源周波数を確認するイメージ"
          />
        </section>

        <section id="water-supply">
          <h2 className={cls.h2}>
            水道直結と自吸は現場の給水条件で使い分ける
          </h2>
          <TableWrap>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <Th>給水方式</Th>
                  <Th>向く現場</Th>
                  <Th>メリット</Th>
                  <Th>注意点</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>水道直結</Td>
                  <Td>工場、洗車場、施設の定位置</Td>
                  <Td>水切れを起こしにくく準備が簡単</Td>
                  <Td>蛇口、流量、接続部品、ホース動線</Td>
                </tr>
                <tr>
                  <Td>自吸</Td>
                  <Td>工事現場、災害備蓄、屋外、離れた設備</Td>
                  <Td>タンク・バケツのため水を利用できる</Td>
                  <Td>容器は別途、吸水高さ、異物、エア抜き、給水量</Td>
                </tr>
              </tbody>
            </table>
          </TableWrap>

          <p className={cls.body}>
            HPWMは水道直結と自吸の両用で、吸水ホース1.5mとストレーナー等が付属します。ただし、バケツやタンクは付属しません。400Lタンクがあっても、30分以上連続で使えば残量管理が必要です。
          </p>

          <Figure
            file="commercial-pressure-washer-self-priming-tank.jpg"
            alt="水道のない現場でタンクから自吸して高圧洗浄する準備イメージ"
          />
        </section>

        <section id="worksite">
          <h2 className={cls.h2}>
            工場・車両・ビルメンで選び方を変える
          </h2>
          <TableWrap>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <Th>現場</Th>
                  <Th>優先する条件</Th>
                  <Th>候補</Th>
                  <Th>導入前確認</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>工場床</Td>
                  <Td>排水、塗床、水量、油回収</Td>
                  <Td>固定周波数ならHD 4/8、移動・自吸ならHPWM</Td>
                  <Td>排水処理、洗剤、滑り、乾燥時間</Td>
                </tr>
                <tr>
                  <Td>機械外装</Td>
                  <Td>ノズル調整、飛沫、電装保護</Td>
                  <Td>3機種とも候補</Td>
                  <Td>電装、軸受、シールへ直接噴射しない</Td>
                </tr>
                <tr>
                  <Td>車両・建機</Td>
                  <Td>水量、車輪、屋外移動</Td>
                  <Td>HD 4/8 Classic</Td>
                  <Td>ラベル、配線、ベアリング、油水分離</Td>
                </tr>
                <tr>
                  <Td>ビルメン</Td>
                  <Td>車載、周波数共用、自吸、騒音</Td>
                  <Td>HPWM</Td>
                  <Td>営業中の動線、排水、エレベーター</Td>
                </tr>
                <tr>
                  <Td>災害備蓄</Td>
                  <Td>ため水、100V、付属品、保管</Td>
                  <Td>HPWM</Td>
                  <Td>発電機との適合、タンク、凍結、定期点検</Td>
                </tr>
              </tbody>
            </table>
          </TableWrap>

          <Figure
            file="factory-floor-and-vehicle-pressure-washing.jpg"
            alt="工場床と業務車両で高圧洗浄機を用途別に使い分けるイメージ"
          />
        </section>

        <section id="procedure">
          <h2 className={cls.h2}>
            高圧洗浄機の効果を安定させる7段階の手順
          </h2>
          <ol className="space-y-4">
            {[
              ["洗浄禁止箇所を決める", "電装、開口部、傷んだ塗膜、シール、製品、通行区域を区分します。"],
              ["固形物と油を先に回収する", "砂、切粉、落ち葉、油だまりを高圧水で広げないよう除去します。"],
              ["排水・養生を準備する", "排水口、回収マット、水切り、立入表示、飛沫養生を設置します。"],
              ["目立たない場所でテストする", "距離を取り、広角・低負荷から開始して対象面の変化を確認します。"],
              ["一定の距離・角度で洗う", "作業者ごとの差を減らし、汚れを排水方向へ送ります。"],
              ["必要に応じて洗剤・ブラシを併用する", "水圧だけで落ちない油脂を、適合確認した方法で処理します。"],
              ["水切り・乾燥・点検を行う", "滑り、再汚染、塗膜損傷、漏れ、ホース損傷を確認します。"],
            ].map(([title, text], index) => (
              <li key={title} className="grid grid-cols-[2.5rem_1fr] gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900">{title}</h3>
                  <p className="mt-1 leading-7 text-gray-900">{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <Caution title="高圧水を使用してはいけない・慎重に扱う場所">
            <p>
              人・動物、通電中の電装、制御盤、コンセント、アスベストや有害粉じんが疑われる場所、傷んだ塗膜、精密軸受、シール、食品・製品、強度不明の目地へ直接噴射しないでください。
            </p>
          </Caution>

          <Figure
            file="pressure-washer-surface-test-drainage.jpg"
            alt="塗装床で試し洗いし排水と飛沫養生を確認するイメージ"
          />
        </section>

        <section id="parts">
          <h2 className={cls.h2}>
            本体と同時に交換部品・予備品も確認
          </h2>
          <p className={cls.body}>
            高圧洗浄機は本体だけでなく、ホース、ガン、ランス、ノズルの損傷で使用できなくなります。HPWMは専用部品の商品ページがExcelに含まれているため、購入時に予備品と保管方法を決めておくと業務停止を短くできます。
          </p>
          <div className="mt-5 grid gap-4">
            {accessories.map((item) => (
              <AccessoryCard key={item.code} item={item} />
            ))}
          </div>

          <Figure
            file="pressure-washer-parts-maintenance-check.jpg"
            alt="業務用高圧洗浄機のガン・ランス・高圧ホースを点検するイメージ"
          />
        </section>

        <section id="mistakes">
          <h2 className={cls.h2}>
            業務用高圧洗浄機でよくある失敗25項目
          </h2>
          <ol className="mt-5 grid gap-3">
            {failureItems.map((item, index) => (
              <li
                key={item}
                className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-lg border border-gray-200 p-4"
              >
                <span className="font-black text-gray-900">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-7 text-gray-900">{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="checklist">
          <h2 className={cls.h2}>
            法人購買・清掃責任者向け導入チェックリスト
          </h2>
          <TableWrap>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <Th>確認項目</Th>
                  <Th>記入内容</Th>
                  <Th>判定ポイント</Th>
                </tr>
              </thead>
              <tbody>
                {corporateChecklist.map(([item, value, point]) => (
                  <tr key={item}>
                    <Td>{item}</Td>
                    <Td>{value}</Td>
                    <Td>{point}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrap>

          <Figure
            file="commercial-pressure-washer-procurement-checklist.jpg"
            alt="法人担当者が業務用高圧洗浄機の周波数・給水・排水・部品を確認するイメージ"
          />
        </section>

        <section id="related-articles">
          <h2 className={cls.h2}>
            関連記事
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <Link
              href="/articles/hose-reel-20m-30m-50m-chigai"
              className="rounded-xl border border-gray-300 p-4 font-bold text-gray-900 hover:bg-gray-50"
            >
              ホースリール20m・30m・50mの違い
            </Link>
            <Link
              href="/articles/drainage-pipe-leak-test-method"
              className="rounded-xl border border-gray-300 p-4 font-bold text-gray-900 hover:bg-gray-50"
            >
              排水管の漏水試験方法
            </Link>
            <Link
              href="/articles/commercial-hand-soap-bulk-selection"
              className="rounded-xl border border-gray-300 p-4 font-bold text-gray-900 hover:bg-gray-50"
            >
              業務用ハンドソープの箱買い選び方
            </Link>
          </div>
        </section>

        <section id="faq">
          <h2 className={cls.h2}>
            100V業務用高圧洗浄機のFAQ
          </h2>
          <div className="divide-y divide-gray-200 rounded-xl border border-gray-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="p-5">
                <summary className="cursor-pointer list-none pr-8 font-bold leading-7 text-gray-900">
                  {faq.question}
                </summary>
                <p className={`${cls.body} mt-3`}>{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className={`mt-4 text-xs leading-6 ${cls.meta}`}>
            FAQは読者とAI検索が可視本文を理解しやすくするために掲載しています。2026年7月時点のGoogle公式変更を踏まえ、FAQPage構造化データは実装していません。
          </p>
        </section>

        <section id="references">
          <h2 className={cls.h2}>
            メーカー公式・Google公式情報
          </h2>
          <ul className="space-y-3">
            {referenceSources.map((source) => (
              <li key={source.url} className="rounded-lg border border-gray-200 p-4">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-gray-900 underline underline-offset-4"
                >
                  {source.label}
                </a>
                <p className="mt-1 text-sm leading-7 text-gray-900">{source.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="summary">
          <h2 className={cls.h2}>
            まとめ：固定現場は周波数専用機、移動・自吸は共用機から比較
          </h2>
          <p className={cls.body}>
            100V業務用高圧洗浄機は、既存電源を使いやすく、車載・保管・持ち運びもしやすい選択肢です。固定現場で水量と機動性を重視するならHD 4/8 Classicの現場周波数に合うモデル、複数地域やため水運用ならHPWMが比較の起点になります。
          </p>
          <p className={`${cls.body} mt-3`}>
            購入前に、圧力だけではなく、水量、周波数、給水、排水、連続時間、ホース、交換部品を一枚のチェック表で確認してください。
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {machines.map((machine) => (
              <a
                key={machine.code}
                href={buildUrl(machine.links[0].url, UTM)}
                target="_blank"
                rel="nofollow sponsored"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-gray-900 px-4 py-3 text-center text-sm font-bold text-white hover:bg-gray-700"
              >
                {machine.short}を見る
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
