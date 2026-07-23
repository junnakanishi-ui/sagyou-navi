import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

const SLUG = "hardened-weed-control-sand-bags-installation";
const UTM = "utm_source=sagyou_navi";
const ARTICLE_URL = `https://sagyou-navi.com/articles/${SLUG}`;

function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) => `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

type Product = {
  code: string; short: string; formal: string; category: string; size: string; color: string;
  cure: string; coverage: string; vehicle: string; use: string; check: string; img: string;
  detailImgs: string[]; url: string; label: string;
};
type Related = { code: string; short: string; category: string; use: string; check: string; img: string; links: {url:string;label:string}[] };
const products: Product[] = [
  {
    "code": "171988",
    "short": "IRIS 超固まる防草砂15kg C15-BR",
    "formal": "IRIS 516060 超固まる防草砂15kg C15-BR",
    "category": "駐車場・車両通行向け候補",
    "size": "15kg（容量10L）",
    "color": "ブラウン",
    "cure": "約3日～1週間",
    "coverage": "1㎡あたり約5袋（厚さ5cm）",
    "vehicle": "4t車までをメーカーが案内",
    "use": "駐車場、犬走り、施設外周、資材置き場の小面積、側溝・舗装際の雑草対策",
    "check": "厚さ5cm、下地転圧、均一散水、養生期間、ひび割れ・境界部、車両荷重条件を確認",
    "img": "/products/171988.jpg",
    "detailImgs": [],
    "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/171988.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
    "label": "超固まる防草砂15kgを確認する"
  },
  {
    "code": "171648",
    "short": "IRIS 固まる防草砂10L イエロー 10L-YE",
    "formal": "IRIS 516014 固まる防草砂10L イエロー 10L-YE",
    "category": "歩行部・外周整備向け",
    "size": "10L（質量約11kg）",
    "color": "イエロー",
    "cure": "約24時間",
    "coverage": "1㎡あたり約3～4袋",
    "vehicle": "車両対応の記載は商品ページで要確認",
    "use": "歩道脇、施設外周、仮設事務所周辺、花壇・植栽帯の境界などの小面積",
    "check": "車両用途には安易に使わず、下地・厚さ・散水量・境界処理・排水を確認",
    "img": "/products/171648.jpg",
    "detailImgs": [],
    "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/171648.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
    "label": "10Lイエローを確認する"
  },
  {
    "code": "171647",
    "short": "IRIS 固まる防草砂10L オレンジ 10L-OR",
    "formal": "IRIS 516013 固まる防草砂10L オレンジ 10L-OR",
    "category": "歩行部・外周整備向け",
    "size": "10L（質量約11kg）",
    "color": "オレンジ",
    "cure": "約24時間",
    "coverage": "1㎡あたり約3～4袋",
    "vehicle": "車両対応の記載は商品ページで要確認",
    "use": "歩道脇、施設外周、仮設事務所周辺、花壇・植栽帯の境界などの小面積",
    "check": "車両用途には安易に使わず、下地・厚さ・散水量・境界処理・排水を確認",
    "img": "/products/171647.jpg",
    "detailImgs": [],
    "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/171647.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
    "label": "10Lオレンジを確認する"
  }
];
const relatedProducts: Related[] = [
  {
    "code": "karcher-hd48",
    "short": "KARCHER 業務用冷水高圧洗浄機 HD 4/8 Classic",
    "category": "施工面・周辺清掃",
    "use": "縁石・舗装・排水溝など既存硬質面の泥・汚れを落とし、施工範囲を確認しやすくする",
    "check": "土面を掘り崩す用途ではなく、50Hz/60Hzと電源、排水、周囲への飛散を確認",
    "img": "/products/289633.jpg",
    "links": [
      {
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/289633.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "50Hz仕様を見る"
      },
      {
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/289634.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "60Hz仕様を見る"
      }
    ]
  },
  {
    "code": "289918",
    "short": "KOK HEXEASY 熱中症クールテント 3×6m",
    "category": "夏季施工の休憩所",
    "use": "屋外施工時の日陰・休憩場所の確保",
    "check": "風対策、固定、避難動線、設置スペース、暑熱環境では送風・水分補給等を併用",
    "img": "/products/289918.jpg",
    "links": [
      {
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/289918.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "クールテントを見る"
      }
    ]
  },
  {
    "code": "172321",
    "short": "スイデン 工場扇 スタンド型 SF-45VS-1VP2",
    "category": "夏季施工の送風",
    "use": "休憩所や屋外作業準備エリアの送風補助",
    "check": "防水仕様ではないため雨・散水・漏電に注意し、設置転倒と電源条件を確認",
    "img": "/products/172321.jpg",
    "links": [
      {
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/172321.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "工場扇を見る"
      }
    ]
  },
  {
    "code": "172196",
    "short": "MEIHO ポータブルパワーステーション MPS1500",
    "category": "現場電源",
    "use": "電源が取りにくい現場での送風・充電・小型機器用電源候補",
    "check": "定格出力、起動電力、連続使用時間、雨天・粉じん環境、接続機器を確認",
    "img": "/products/172196.jpg",
    "links": [
      {
        "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/172196.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
        "label": "MPS1500を見る"
      }
    ]
  }
];
const faqs = [
  {
    "q": "固まる防草砂は1㎡に何袋必要ですか？",
    "a": "超固まる防草砂15kg C15-BRは、厚さ5cmで1㎡あたり約5袋がメーカー目安です。10Lのオレンジ・イエローは1㎡あたり約3～4袋が目安です。凹凸や端部を考え、実務上は5～10％程度の予備を別途見込むと不足しにくくなります。"
  },
  {
    "q": "10㎡なら何袋必要ですか？",
    "a": "C15-BRなら約50袋、10Lタイプなら約30～40袋が基準です。広い面積では材料重量と運搬・転圧・散水の負担が大きいため、防草シート＋砂利や舗装工事も比較してください。"
  },
  {
    "q": "防草砂の厚さは何cm必要ですか？",
    "a": "C15-BRは厚さ5cmでの施工がメーカー目安です。薄くすると割れやすくなるため、商品ごとの説明書に従い、均一な厚さを確保してください。"
  },
  {
    "q": "固まる防草砂は駐車場に使えますか？",
    "a": "C15-BRはメーカーが4t車までの駐車場用途を案内しています。ただし下地、転圧、厚さ、排水、車両の旋回・集中荷重などで条件が変わるため、施工条件を必ず確認してください。"
  },
  {
    "q": "10Lのオレンジ・イエローも駐車場に使えますか？",
    "a": "今回確認した公式情報では、10LタイプにC15-BRと同等の車両対応表記は確認できませんでした。歩行部・外周・植栽帯周辺を中心に検討し、車両用途はメーカーへ確認してください。"
  },
  {
    "q": "防草砂を敷く前に除草は必要ですか？",
    "a": "必要です。地上部だけでなく根、地下茎、石、ごみを取り除き、下地を均して締め固めます。雑草や軟弱な土が残ると、盛り上がり・空洞・ひび割れの原因になります。"
  },
  {
    "q": "水はどのくらいかければよいですか？",
    "a": "商品の施工説明に従い、表面だけでなく所定の厚さへ均一に浸透させます。局所的な大量散水は流れ・色むら・表面荒れにつながるため、じょうろ等で複数回に分ける方法が一般的です。"
  },
  {
    "q": "施工後すぐ歩けますか？",
    "a": "10Lタイプは約24時間、C15-BRは約3日～1週間が固化目安です。気温・湿度・散水量で変わるため、十分に硬化するまで立入・車両通行を避けてください。"
  },
  {
    "q": "雨の日に施工できますか？",
    "a": "施工中・養生中の強い雨は材料流出や表面荒れの原因になります。天気予報を確認し、施工説明書が指定する乾燥・養生時間を確保してください。"
  },
  {
    "q": "ひび割れを防ぐには？",
    "a": "除草、下地転圧、均一な厚さ、適切な散水、境界・目地の計画、十分な養生が重要です。レンガや既存舗装との境界は動きが異なるため、無計画な突き付けを避けます。"
  },
  {
    "q": "水たまり対策にも使えますか？",
    "a": "C15-BRは水はけのよさが案内されていますが、排水勾配や下地が悪い場所を材料だけで解決できるとは限りません。先に水の流れと下地を整えてください。"
  },
  {
    "q": "工事現場の仮設事務所周りに向きますか？",
    "a": "小面積の外周、犬走り、フェンス際、歩行部などでは候補です。ただし仮設・借地の場合は原状回復、土地所有者の許可、撤去・廃棄方法を確認してください。"
  },
  {
    "q": "資材置き場全面に使うのはおすすめですか？",
    "a": "広い面積は袋数と施工負担が大きくなります。車両走行、フォークリフト、地盤沈下がある場所では、専門舗装、防草シート＋砕石、コンクリート等との比較が必要です。"
  },
  {
    "q": "防草シートと併用できますか？",
    "a": "固まる防草砂は下地へ直接施工する商品が多く、防草シート上では安定しない場合があります。今回の商品も施工説明書を確認し、独自の併用は避けてください。"
  },
  {
    "q": "施工時に保護具は必要ですか？",
    "a": "セメントや珪砂を含むため、粉じんを吸い込まず皮膚・目へ入れないよう、商品表示・SDSに従って手袋、保護眼鏡、防じんマスク等を使用してください。"
  },
  {
    "q": "色はオレンジとイエローで性能が違いますか？",
    "a": "10Lタイプは主に色の違いです。景観、既存舗装・建物色、汚れの目立ち方で選び、必要袋数や施工条件は商品ページで確認してください。"
  },
  {
    "q": "夏場の打ち水効果はありますか？",
    "a": "C15-BRはメーカーが保水による打ち水効果を案内しています。ただし熱中症対策を保証するものではなく、屋外施工では日陰、休憩、水分・塩分、WBGT管理等を併用してください。"
  },
  {
    "q": "余った防草砂は保管できますか？",
    "a": "未開封でも湿気で固化する可能性があります。雨・地面から離し、乾燥した場所で保管し、開封後は早めに使い切ってください。"
  },
  {
    "q": "固まった防草砂は撤去しやすいですか？",
    "a": "セメント系のため通常の土より撤去・処分の手間がかかります。仮設現場や賃借地では、施工前に原状回復と廃棄区分を確認してください。"
  },
  {
    "q": "商品説明画像はどこに配置すると効果的ですか？",
    "a": "記事冒頭の商品カード直下と、施工方法・必要袋数を説明する章の直前が効果的です。本記事コードでは171988_00001.jpgと171988_00002.jpgを冒頭ギャラリーに配置する想定です。"
  }
];
const failures: string[] = [
  "雑草を刈っただけで根・地下茎を残す",
  "下地を締め固めず、柔らかい土の上へ施工する",
  "施工面積だけで袋数を出し、凹凸・端部・予備を見込まない",
  "C15-BRを厚さ5cm未満で薄く延ばす",
  "散水量が少なく内部まで固まらない",
  "一度に強く水をかけて材料を流す",
  "雨天直前に施工する",
  "硬化前に歩行・車両通行させる",
  "レンガ・舗装との境界を無計画に突き付ける",
  "排水勾配を直さず水たまりへ材料を入れる",
  "車両の旋回・集中荷重を考えない",
  "10Lタイプを車両対応品と決めつける",
  "広い資材置き場へ袋物で施工し、運搬コストが膨らむ",
  "借地・仮設現場で原状回復を確認しない",
  "粉じん・皮膚・目の保護をしない",
  "排水口やマンホールを塞ぐ",
  "既存配管・埋設物の点検口を覆う",
  "必要な養生区画・立入禁止表示を用意しない",
  "施工後のひび割れ・沈下を点検しない",
  "余った袋を雨ざらしにする"
];
const checklist: string[][] = [
  [
    "使用場所",
    "駐車場 / 犬走り / 外周 / フェンス際 / 仮設事務所周り",
    "車両荷重と原状回復の有無"
  ],
  [
    "面積",
    "幅×長さ、開口・排水口を控除",
    "実測し端部を図面化"
  ],
  [
    "商品",
    "C15-BR / 10L-YE / 10L-OR",
    "用途・色・固化時間を確認"
  ],
  [
    "必要袋数",
    "商品目安×面積＋予備",
    "C15-BRは5袋/㎡"
  ],
  [
    "下地",
    "根・石・ごみ・軟弱土を除去",
    "転圧・平坦性を確認"
  ],
  [
    "厚さ",
    "商品指定の均一厚",
    "C15-BRは5cm目安"
  ],
  [
    "排水",
    "勾配・側溝・集水桝",
    "水の逃げ道を塞がない"
  ],
  [
    "境界",
    "舗装・縁石・レンガ・建物際",
    "ひび割れ・動きの差を考慮"
  ],
  [
    "散水",
    "水源・ホース・じょうろ・回数",
    "均一に浸透させる"
  ],
  [
    "天候",
    "施工日・養生日の降雨",
    "強雨・凍結を避ける"
  ],
  [
    "立入管理",
    "歩行・車両の迂回",
    "硬化まで区画する"
  ],
  [
    "安全",
    "手袋・眼鏡・防じん・運搬",
    "15kg袋の腰痛対策"
  ],
  [
    "保管",
    "未使用袋の乾燥保管",
    "パレット上・雨養生"
  ],
  [
    "廃棄",
    "余材・硬化物・袋",
    "自治体・現場ルール確認"
  ],
  [
    "点検",
    "ひび割れ・沈下・雑草・排水",
    "定期補修計画"
  ],
  [
    "承認",
    "所有者・元請・施設管理者",
    "仮設・借地は原状回復確認"
  ]
];
const references = [
  {
    "label": "IRIS 516060 超固まる防草砂15kg（オレンジブック）",
    "url": "https://www.orange-book.com/ja/c/products/index.html?itemCd=C15BR+++++++++++++++++++++++++1256",
    "note": "固化時間、必要袋数、4t車まで、材質等"
  },
  {
    "label": "超硬い固まる防草砂15kg（アイリスプラザ）",
    "url": "https://www.irisplaza.co.jp/index.php?KB=SHOSAI&SID=G890856",
    "note": "厚さ5cm、約5袋/㎡、施工・FAQ"
  },
  {
    "label": "IRIS 516014 固まる防草砂10L イエロー",
    "url": "https://www.orange-book.com/ja/c/products/index.html?itemCd=10LYE+++++++++++++++++++++++++1256",
    "note": "24時間、3～4袋/㎡、材質・質量"
  },
  {
    "label": "IRIS 516013 固まる防草砂10L オレンジ",
    "url": "https://www.orange-book.com/ja/c/products/index.html?itemCd=10LOR+++++++++++++++++++++++++1256",
    "note": "型番・仕様・用途"
  },
  {
    "label": "Google AI features and your website",
    "url": "https://developers.google.com/search/docs/appearance/ai-features",
    "note": "AI検索も通常のSEOベストプラクティスが基盤"
  },
  {
    "label": "Google helpful, reliable, people-first content",
    "url": "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
    "note": "独自性、網羅性、読後の判断完了を重視"
  },
  {
    "label": "Google Search documentation updates",
    "url": "https://developers.google.com/search/updates",
    "note": "2026年の検索表示・構造化データ更新確認"
  }
];

const articleSchema = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "固まる防草砂は何袋必要？厚さ・施工方法・ひび割れ対策を解説",
  description: "IRISの超固まる防草砂15kgと固まる防草砂10Lを、必要袋数、厚さ、固化時間、駐車場・外周用途、施工失敗で比較する実務ガイド。",
  datePublished: "2026-07-23", dateModified: "2026-07-23", mainEntityOfPage: ARTICLE_URL,
  author: {"@type":"Organization",name:"作業用品ナビ編集部"},
  publisher: {"@type":"Organization",name:"作業用品ナビ",url:"https://sagyou-navi.com/"}
};
const breadcrumbSchema = {
  "@context":"https://schema.org","@type":"BreadcrumbList",
  itemListElement:[
    {"@type":"ListItem",position:1,name:"作業用品ナビ",item:"https://sagyou-navi.com/"},
    {"@type":"ListItem",position:2,name:"記事一覧",item:"https://sagyou-navi.com/articles"},
    {"@type":"ListItem",position:3,name:"固まる防草砂の必要袋数と施工方法",item:ARTICLE_URL}
  ]
};

export const metadata: Metadata = {
  title: "固まる防草砂は何袋必要？厚さ・施工方法・ひび割れ対策【工事現場・駐車場】",
  description: "固まる防草砂は1㎡に何袋必要かを商品別に計算。IRIS C15-BR 15kg、10Lイエロー・オレンジの違い、厚さ、施工方法、駐車場、ひび割れ、排水、工事現場周辺での使い方を解説します。",
  alternates:{canonical:ARTICLE_URL},
  openGraph:{type:"article",url:ARTICLE_URL,title:"固まる防草砂は何袋必要？厚さ・施工方法・ひび割れ対策",description:"商品別必要袋数と施工失敗を、リンク付き比較表で確認できます。",images:[{url:`/images/${SLUG}/hardened-weed-control-sand-hero.jpg`,width:1200,height:675,alt:"固まる防草砂を施設外周へ施工するイメージ"}]}
};

function TableWrap({children}:{children:ReactNode}) { return <div className="my-5 overflow-x-auto rounded-xl border border-gray-300">{children}</div>; }
function Th({children}:{children:ReactNode}) { return <th className="whitespace-nowrap border-b border-gray-400 bg-gray-100 px-4 py-3.5 text-left text-base font-bold text-gray-900">{children}</th>; }
function Td({children}:{children:ReactNode}) { return <td className="min-w-32 border-b border-gray-200 px-4 py-3.5 align-top text-[15px] leading-7 text-gray-900">{children}</td>; }
function ShopLink({url,label}:{url:string;label:string}) { return <a href={buildUrl(url,UTM)} target="_blank" rel="nofollow sponsored" className="inline-flex min-h-11 items-center justify-center rounded-md bg-gray-900 px-4 py-3 text-center text-sm font-bold text-white hover:bg-gray-700">{label}</a>; }
function Mark({children}:{children:ReactNode}) { return <mark className="rounded-sm bg-amber-200 px-0.5 font-bold text-gray-900">{children}</mark>; }
function SectionTitle({children, id}:{children:ReactNode; id?: string}) {
  return <h2 id={id} className="mb-5 mt-12 border-l-4 border-gray-900 pl-3 text-2xl font-black leading-snug text-gray-900 sm:text-3xl">{children}</h2>;
}
function Body({children, className=""}:{children:ReactNode; className?: string}) {
  return <p className={`leading-8 text-gray-900 ${className}`.trim()}>{children}</p>;
}
function ProductCard({product}:{product:Product}) {
  return <article className="overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
    <div className="relative aspect-[4/3] bg-gray-50"><Image src={product.img} alt={`${product.short}の商品画像`} fill sizes="(max-width:768px) 100vw, 380px" className="object-contain p-4" /></div>
    <div className="space-y-3 p-5"><span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-gray-900">{product.category}</span><h3 className="text-xl font-black leading-snug text-gray-900">{product.short}</h3>
      <dl className="grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-2 text-[15px] text-gray-900"><dt className="font-bold text-gray-900">容量</dt><dd>{product.size}</dd><dt className="font-bold text-gray-900">色</dt><dd>{product.color}</dd><dt className="font-bold text-gray-900">固化目安</dt><dd><strong>{product.cure}</strong></dd><dt className="font-bold text-gray-900">必要量</dt><dd><Mark>{product.coverage}</Mark></dd><dt className="font-bold text-gray-900">用途</dt><dd>{product.use}</dd></dl>
      <p className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-gray-900"><strong>購入・施工前確認：</strong>{product.check}</p><ShopLink url={product.url} label={product.label} />
    </div>
  </article>;
}
function RelatedCard({product}:{product:Related}) {
 return <article className="overflow-hidden rounded-xl border border-gray-300 bg-white"><div className="relative aspect-[4/3] bg-gray-50"><Image src={product.img} alt={`${product.short}の商品画像`} fill className="object-contain p-4" /></div><div className="space-y-3 p-4"><span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-gray-900">{product.category}</span><h3 className="text-lg font-black text-gray-900">{product.short}</h3><p className="text-[15px] leading-7 text-gray-900">{product.use}</p><p className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-gray-900"><strong>確認：</strong>{product.check}</p><div className="grid gap-2">{product.links.map(link=><ShopLink key={link.url} url={link.url} label={link.label} />)}</div></div></article>
}
function ArticleImage({file,alt}:{file:string;alt:string}) { return <figure className="my-7 overflow-hidden rounded-2xl border border-gray-300"><Image src={`/images/${SLUG}/${file}`} alt={alt} width={1200} height={675} className="h-auto w-full" /></figure>; }

export default function Page() {
  const main=products[0];
  return <><SiteHeader /><main className="mx-auto max-w-4xl px-4 py-8 text-gray-900 sm:px-6">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}} />
    <nav aria-label="パンくず" className="mb-5 text-sm text-gray-800"><ol className="flex flex-wrap gap-2"><li><Link href="/" className="font-bold underline underline-offset-4">作業用品ナビ</Link></li><li>/</li><li><Link href="/articles" className="font-bold underline underline-offset-4">記事一覧</Link></li><li>/</li><li aria-current="page" className="font-bold">固まる防草砂</li></ol></nav>
    <header>
      <p className="text-sm font-bold tracking-wide text-gray-900">必要袋数・厚さ・施工・駐車場・工事現場周辺</p>
      <h1 className="mt-3 text-4xl font-black leading-tight text-gray-900 sm:text-5xl">固まる防草砂は何袋必要？<span className="mt-3 block text-2xl font-black sm:text-3xl">厚さ・施工方法・ひび割れ対策【工事現場・駐車場】</span></h1>
      <p className="mt-4 text-sm font-medium text-gray-800">公開日・最終更新日：2026年7月23日 ｜ 作業用品ナビ編集部</p>
    </header>

    <section className="mt-7 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="space-y-4"><div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-300 bg-gray-50"><Image src={main.img} alt="IRIS超固まる防草砂15kg C15-BRの商品画像" fill priority className="object-contain p-4" /></div><div className="grid gap-4 sm:grid-cols-2">{main.detailImgs.map((src,index)=><div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-300 bg-gray-50"><Image src={src} alt={`超固まる防草砂15kgの商品説明画像${index+1}`} fill className="object-contain p-3" /></div>)}</div></div>
      <div className="rounded-2xl border-2 border-gray-900 bg-amber-50 p-5">
        <p className="text-base font-black text-gray-900">先に結論</p>
        <div className="mt-2 space-y-3 leading-8 text-gray-900">
          <p><Mark>C15-BRは厚さ5cmで1㎡あたり約5袋</Mark>、<Mark>10Lのオレンジ・イエローは1㎡あたり約3～4袋</Mark>が目安です。</p>
          <p><strong>10㎡ならC15-BRで約50袋</strong>となるため、広い資材置き場では<strong>防草シート＋砕石</strong>や<strong>舗装工事</strong>も比較してください。</p>
          <p>商品は「<strong>車両が通るか</strong>」「<strong>歩行部か</strong>」「必要な色」「固化まで待てる時間」で選びます。</p>
        </div>
        <div className="mt-5 grid gap-3"><ShopLink url={main.url} label="超固まる防草砂15kgを見る" /><a href="#product-compare" className="inline-flex min-h-11 items-center justify-center rounded-md border-2 border-gray-900 bg-white px-4 py-3 text-center text-sm font-bold text-gray-900">3商品を比較する</a></div>
      </div>
    </section>

    <Body className="mt-7 text-lg">施設外周、犬走り、<strong>駐車場</strong>、工事現場の仮設事務所周辺では、草刈りを繰り返すよりも地表を固めて維持管理を減らしたい場面があります。ただし、固まる防草砂は薄く撒くだけの商品ではありません。<Mark>下地処理、厚さ、散水、養生、排水</Mark>を誤ると、固まらない・ひび割れる・沈下する原因になります。</Body>

    <nav className="my-8 rounded-xl border border-gray-300 bg-white p-5">
      <p className="text-lg font-black text-gray-900">この記事の判断順</p>
      <ol className="mt-3 grid gap-2 text-[15px] font-medium leading-7 text-gray-900 sm:grid-cols-2">
        <li><a href="#bags" className="font-bold underline underline-offset-4">必要袋数を計算</a></li>
        <li><a href="#product-compare" className="font-bold underline underline-offset-4">3商品を比較</a></li>
        <li><a href="#suitable" className="font-bold underline underline-offset-4">向く場所・向かない場所</a></li>
        <li><a href="#steps" className="font-bold underline underline-offset-4">施工手順</a></li>
        <li><a href="#cracks" className="font-bold underline underline-offset-4">ひび割れ対策</a></li>
        <li><a href="#related" className="font-bold underline underline-offset-4">関連現場用品</a></li>
        <li><a href="#mistakes" className="font-bold underline underline-offset-4">失敗例</a></li>
        <li><a href="#faq" className="font-bold underline underline-offset-4">FAQ</a></li>
      </ol>
    </nav>

    <section id="bags">
      <SectionTitle>固まる防草砂は何袋必要？面積別の早見表</SectionTitle>
      <Body>必要袋数は、<strong>施工面積×メーカー目安</strong>で計算します。凹凸、端部、こぼれを考え、最終発注では<Mark>5～10％程度の予備</Mark>を見込むのが実務的です。</Body>
      <div className="my-5 rounded-xl border border-amber-300 bg-amber-50 p-5">
        <p className="text-lg font-black text-gray-900">必要袋数 ＝ 施工面積（㎡）× 1㎡あたりの袋数</p>
        <p className="mt-2 text-[15px] leading-7 text-gray-900">面積は「<strong>幅（m）×長さ（m）</strong>」で算出。排水桝や既存舗装を除外しつつ、端数は切り上げます。</p>
      </div>
      <TableWrap><table className="w-full border-collapse"><thead><tr><Th>施工面積</Th><Th>C15-BR 15kg<br/><Mark>5袋/㎡</Mark></Th><Th>10Lタイプ<br/><Mark>3～4袋/㎡</Mark></Th><Th>判断</Th></tr></thead><tbody>{[1,3,5,10,20].map(area=><tr key={area}><Td><strong>{area}㎡</strong></Td><Td><strong>約{area*5}袋</strong><br/><span className="text-sm font-medium">予備込み約{Math.ceil(area*5*1.1)}袋</span></Td><Td><strong>約{area*3}～{area*4}袋</strong><br/><span className="text-sm font-medium">予備込み約{Math.ceil(area*3*1.1)}～{Math.ceil(area*4*1.1)}袋</span></Td><Td>{area>=10?<Mark>他工法との費用・施工負担比較を推奨</Mark>:'小面積施工で比較しやすい'}</Td></tr>)}</tbody></table></TableWrap>
      <p className="text-sm font-medium leading-7 text-gray-800">※予備率は作業用品ナビ編集部による実務上の目安です。メーカー指定量ではありません。</p>
      <ArticleImage file="weed-control-sand-area-measurement.jpg" alt="施設外周の施工面積を測り防草砂の袋数を計算するイメージ" />
    </section>

    <section id="product-compare">
      <SectionTitle>IRIS防草砂3商品の違いと商品リンク</SectionTitle>
      <Body>駐車場・車両用途を重視するなら<Mark>C15-BR</Mark>、歩行部や景観色を選びたい小面積では<Mark>10Lのオレンジ・イエロー</Mark>が比較候補です。<strong>車両対応の明記がない商品を、同じ用途だと決めつけない</strong>ことが重要です。</Body>
      <div className="mt-5 grid gap-5 md:grid-cols-2">{products.map(product=><ProductCard key={product.code} product={product} />)}</div>
      <TableWrap><table className="w-full border-collapse"><thead><tr><Th>商品</Th><Th>固化目安</Th><Th>必要量</Th><Th>車両用途</Th><Th>選び方</Th></tr></thead><tbody>{products.map(product=><tr key={product.code}><Td><strong>{product.short}</strong></Td><Td><strong>{product.cure}</strong></Td><Td><Mark>{product.coverage}</Mark></Td><Td><strong>{product.vehicle}</strong></Td><Td>{product.use}</Td></tr>)}</tbody></table></TableWrap>
    </section>

    <section id="suitable">
      <SectionTitle>防草砂が向く場所・別工法を検討したい場所</SectionTitle>
      <TableWrap><table className="w-full border-collapse"><thead><tr><Th>場所</Th><Th>適性</Th><Th>理由・注意</Th></tr></thead><tbody>
      <tr><Td><strong>犬走り・建物外周</strong></Td><Td><Mark>向きやすい</Mark></Td><Td>細長い小面積で草刈りしにくい。排水と基礎際の納まりを確認。</Td></tr>
      <tr><Td><strong>フェンス・側溝際</strong></Td><Td><Mark>向きやすい</Mark></Td><Td>刈払機が使いにくい場所。既存舗装との境界を丁寧に処理。</Td></tr>
      <tr><Td><strong>駐車場</strong></Td><Td><Mark>C15-BRを条件付き検討</Mark></Td><Td>メーカーは<strong>4t車まで</strong>を案内。<strong>厚さ5cm</strong>・下地・旋回荷重・養生を確認。</Td></tr>
      <tr><Td><strong>仮設事務所周辺</strong></Td><Td><strong>条件付き</strong></Td><Td>小面積には使いやすいが、借地・仮設は<strong>原状回復</strong>と所有者承認が必要。</Td></tr>
      <tr><Td><strong>広い資材置き場</strong></Td><Td><Mark>比較が必要</Mark></Td><Td>袋数・重量・工数が大きい。防草シート＋砕石や舗装を比較。</Td></tr>
      <tr><Td><strong>軟弱地盤・沈下箇所</strong></Td><Td><strong>向きにくい</strong></Td><Td>材料だけでは地盤問題を解決できず、割れ・沈下が起きやすい。</Td></tr>
      <tr><Td><strong>頻繁に掘削する場所</strong></Td><Td><strong>向きにくい</strong></Td><Td>配管・埋設物点検や仮設撤去に不向き。</Td></tr>
    </tbody></table></TableWrap>
      <ArticleImage file="weed-control-sand-site-selection.jpg" alt="犬走り・駐車場・資材置き場で防草砂の適性を比較するイメージ" />
    </section>

    <section id="steps">
      <SectionTitle>固まる防草砂の施工方法</SectionTitle>
      <ol className="space-y-5">{([
        {title:'施工範囲を測る', text:<>境界、排水桝、基礎、舗装、埋設物を図面へ入れ、<strong>必要袋数</strong>を計算します。</>},
        {title:'雑草・根・石を除去', text:<>多年草の<strong>根や地下茎</strong>、石、ごみ、軟弱な表土を取り除きます。</>},
        {title:'下地を整正・転圧', text:<>水勾配を確保しながら平らにし、沈下しないよう<strong>締め固め</strong>ます。</>},
        {title:'見切りと厚さを設定', text:<>C15-BRは<Mark>厚さ5cm</Mark>を基準に、高さガイドや型枠で均一厚を確保します。</>},
        {title:'材料を敷き均す', text:<>袋ごとの色差を抑えるため、必要量を確保して均一に広げます。</>},
        {title:'表面を締め固める', text:<>コテや適切な道具で平滑・均一にし、端部を丁寧に押さえます。</>},
        {title:'均一に散水する', text:<>一度に流さず、じょうろ等で<strong>複数回に分けて</strong>所定量を浸透させます。</>},
        {title:'立入を止めて養生', text:<>商品ごとの固化時間と天候を確認し、<Mark>歩行・車両を入れません</Mark>。</>},
        {title:'完成後に点検', text:<>ひび割れ、沈下、排水、境界部、雑草の発生を定期確認します。</>}
      ] as const).map(({title,text},i)=><li key={title} className="grid grid-cols-[2.5rem_1fr] gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-base font-black text-white">{i+1}</span><div><h3 className="text-xl font-black text-gray-900">{title}</h3><p className="mt-1 leading-7 text-gray-900">{text}</p></div></li>)}</ol>
      <ArticleImage file="hardened-weed-sand-installation-steps.jpg" alt="除草・転圧・敷き均し・散水を行う防草砂施工イメージ" />
    </section>

    <section id="cracks">
      <SectionTitle>固まらない・ひび割れる主な原因</SectionTitle>
      <div className="grid gap-4 md:grid-cols-2">{[
        ['厚さ不足','袋数を節約して薄く延ばすと強度が不足します。'],
        ['下地の沈下','柔らかい土や空洞が残ると、上面だけ固まって割れます。'],
        ['散水不足・むら','表面だけ濡れて内部が固まらない原因になります。'],
        ['散水が強すぎる','材料が流れ、表面荒れや色むらが起きます。'],
        ['境界部の動き','舗装・レンガ・縁石と材料の動きが違うと割れやすくなります。'],
        ['養生不足','硬化前の歩行・車両・雨で表面が損傷します。'],
        ['排水不良','水たまりや凍結、地盤軟化で劣化が進みます。'],
        ['用途違い','歩行向け商品を車両部へ使うなど、荷重条件が合っていません。']
      ].map(([title,text])=><article key={title} className="rounded-xl border border-gray-300 bg-white p-5"><h3 className="text-lg font-black text-gray-900">{title}</h3><p className="mt-2 leading-7 text-gray-900">{text}</p></article>)}</div>
    </section>

    <section id="related">
      <SectionTitle>工事現場の施工・休憩を支える関連商品</SectionTitle>
      <Body>Excelの関連商品は28点ありましたが、記事テーマの専門性を守るため、本文では防草砂施工や夏季の屋外作業に関係する<Mark>5SKUだけ</Mark>を掲載しています。冷却ウェア等の残りは別記事へ分離する方がSEO上も送客上も適切です。</Body>
      <div className="mt-5 grid gap-5 md:grid-cols-2">{relatedProducts.map(product=><RelatedCard key={product.code} product={product} />)}</div>
      <ArticleImage file="outdoor-site-ground-maintenance-safety.jpg" alt="工事現場の外周整備と夏季休憩用品を準備するイメージ" />
    </section>

    <section id="mistakes">
      <SectionTitle>防草砂施工でよくある失敗20項目</SectionTitle>
      <ol className="mt-5 grid gap-3 md:grid-cols-2">{failures.map((item,index)=><li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-lg border border-gray-300 bg-white p-4"><span className="text-lg font-black text-gray-900">{String(index+1).padStart(2,'0')}</span><span className="leading-7 font-medium text-gray-900">{item}</span></li>)}</ol>
    </section>

    <section id="checklist">
      <SectionTitle>法人・現場担当者向け施工チェックリスト</SectionTitle>
      <TableWrap><table className="w-full border-collapse"><thead><tr><Th>項目</Th><Th>確認内容</Th><Th>判断ポイント</Th></tr></thead><tbody>{checklist.map(([a,b,c])=><tr key={a}><Td><strong>{a}</strong></Td><Td>{b}</Td><Td><Mark>{c}</Mark></Td></tr>)}</tbody></table></TableWrap>
      <ArticleImage file="weed-control-sand-procurement-checklist.jpg" alt="法人担当者が防草砂の袋数・施工範囲・安全用品を確認するイメージ" />
    </section>

    <section id="faq">
      <SectionTitle>固まる防草砂のFAQ</SectionTitle>
      <div className="divide-y divide-gray-300 rounded-xl border border-gray-300 bg-white">{faqs.map(faq=><details key={faq.q} className="p-5"><summary className="cursor-pointer list-none text-lg font-black leading-7 text-gray-900">{faq.q}</summary><p className="mt-3 leading-8 text-gray-900">{faq.a}</p></details>)}</div>
      <p className="mt-4 text-sm font-medium leading-6 text-gray-800">FAQは可視本文として掲載し、FAQPage構造化データは実装していません。</p>
    </section>

    <section id="references">
      <SectionTitle>参考にした公式情報</SectionTitle>
      <ul className="space-y-3">{references.map(ref=><li key={ref.url} className="rounded-lg border border-gray-300 bg-white p-4"><a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-base font-black text-gray-900 underline underline-offset-4">{ref.label}</a><p className="mt-1 text-[15px] leading-7 text-gray-900">{ref.note}</p></li>)}</ul>
    </section>

    <section className="mt-12 rounded-2xl border border-amber-300 bg-amber-50 p-6">
      <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">まとめ：袋数より先に用途・厚さ・下地を決める</h2>
      <p className="mt-3 leading-8 text-gray-900"><Mark>C15-BRは1㎡あたり約5袋</Mark>、<Mark>10Lタイプは約3～4袋</Mark>が目安です。ただし、必要量だけを計算しても、<strong>下地と厚さが不十分なら固まりません</strong>。車両用途、小面積外周、仮設現場の原状回復などを先に判断し、3商品から選んでください。</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">{products.map(product=><ShopLink key={product.code} url={product.url} label={product.label} />)}</div>
    </section>
  </main><SiteFooter /></>;
}
