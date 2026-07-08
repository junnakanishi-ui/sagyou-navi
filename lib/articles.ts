export type Article = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: "guide" | "compare" | "howto";
  categoryLabel: string;
  thumbnail: string;
  date: string;
  readTime: string;
  available: boolean;
  path: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "worktable-antistatic-measures",
    title:
      "作業台の静電気対策に必要なもの｜静電防止剤・導電マット・リストストラップの選び方",
    shortTitle: "作業台の静電気対策に必要なもの",
    description:
      "作業台の静電気対策に必要な用品を解説。静電防止剤、導電マット、リストストラップ、静電気除去シート、除電ブラシ、帯電防止バッグなど、工場・作業場・樹脂板加工・電子部品作業で使う静電気対策用品の選び方を紹介します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail: "/images/articles/workbench-static-control-supplies-hero.jpg",
    date: "2026-07-07",
    readTime: "約15分",
    available: true,
    path: "/articles/worktable-antistatic-measures",
  },
  {
    slug: "safety-walkway-setup",
    title:
      "安全通路の作り方｜工場・倉庫・工事現場で使うカラーコーン・コーンカバー・安全用品",
    shortTitle: "安全通路の作り方",
    description:
      "安全通路の作り方を、工場・倉庫・工事現場・駐車場向けに解説。カラーコーン、コーンカバー、安全フェンス、コーンベッド、ゴムポール、合図灯を使い、歩行者通路・立入禁止・車両出入口をわかりやすく区画する方法を紹介します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail: "/images/articles/worksite-safety-walkway-cone-cover-hero.jpg",
    date: "2026-07-06",
    readTime: "約15分",
    available: true,
    path: "/articles/safety-walkway-setup",
  },
  {
    slug: "farm-forest-bear-safety",
    title:
      "農作業・山林作業の熊対策用品｜鈴・ホイッスル・スプレー・電気柵の備え",
    shortTitle: "農作業・山林作業の熊対策用品",
    description:
      "農作業・山林作業・現場巡回で備えたい熊対策用品を解説。熊よけ鈴、電子ホイッスル、強力ライト、熊よけスプレー、忌避剤、電気柵、防獣機器まで、遭遇リスクを下げる備品と現場ルールを法人向けに整理します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail: "/images/articles/farm-forest-work-bear-safety-supplies-hero.jpg",
    date: "2026-07-06",
    readTime: "約15分",
    available: true,
    path: "/articles/farm-forest-bear-safety",
  },
  {
    slug: "worksite-rest-area-heat",
    title:
      "現場休憩所の暑さ対策｜屋外作業でそろえたい日よけ・工場扇・冷却用品",
    shortTitle: "現場休憩所の暑さ対策",
    description:
      "現場休憩所の暑さ対策を、屋外作業向けに解説。日よけテント、工場扇、ポータブル電源、冷温庫、クーラーボックス、製氷機、アイススラリー、応急セットまで、建設現場・イベント・学校行事でそろえたい備品と運用ポイントを紹介します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail: "/images/articles/worksite-rest-area-heat-prevention-hero.jpg",
    date: "2026-07-06",
    readTime: "約14分",
    available: true,
    path: "/articles/worksite-rest-area-heat",
  },
  {
    slug: "outdoor-worksite-portable-power",
    title:
      "屋外現場で使うポータブル電源の選び方｜工場扇・冷温庫・工具・災害時電源に使える業務用電源とは",
    shortTitle: "屋外現場のポータブル電源の選び方",
    description:
      "屋外現場で使うポータブル電源の選び方を解説。工場扇・冷温庫・照明・工具・災害時電源に必要な容量、出力、防水・防塵性能を比較し、蓄電丸・MEIHOポータブルパワーステーション・冷温庫・ポータブルトランスの使い分けを紹介します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail:
      "/images/articles/outdoor-worksite-portable-power-supply-hero.jpg",
    date: "2026-07-07",
    readTime: "約14分",
    available: true,
    path: "/articles/outdoor-worksite-portable-power",
  },
  {
    slug: "commercial-insect-control-selection",
    title:
      "業務用殺虫器・捕虫器の選び方｜屋内・屋外・食品工場・店舗の虫対策に使う機器を比較",
    shortTitle: "業務用殺虫器・捕虫器の選び方",
    description:
      "業務用殺虫器・捕虫器の選び方を、電撃式・粘着式・薬剤蒸散タイプ・噴霧器の違いから解説。食品工場、店舗、倉庫、屋外作業場、現場休憩所など設置場所別に、虫対策用品の選定ポイントと注意点を紹介します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail: "/images/articles/commercial-insect-control-devices-hero.jpg",
    date: "2026-07-08",
    readTime: "約15分",
    available: true,
    path: "/articles/commercial-insect-control-selection",
  },
  {
    slug: "work-light-selection",
    title:
      "作業用ライトの選び方｜ヘッドライト・懐中電灯・ワークランタン・防爆ライトの使い分け",
    shortTitle: "作業用ライトの選び方",
    description:
      "作業用ライトの選び方を、ヘッドライト・懐中電灯・ワークランタン・防爆ライトの違いから解説。夜間作業、設備点検、倉庫、工事現場、防災備蓄など現場別に、明るさ・点灯時間・防水防塵・充電方式の確認ポイントを紹介します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail: "/images/articles/work-lights-selection-hero.jpg",
    date: "2026-07-08",
    readTime: "約14分",
    available: true,
    path: "/articles/work-light-selection",
  },
  {
    slug: "cable-cutter-selection",
    title:
      "ケーブルカッターの選び方｜充電式・油圧式・ラチェット式と圧着工具の使い分け",
    shortTitle: "ケーブルカッターの選び方",
    description:
      "ケーブルカッターの選び方を、充電式・油圧式・AC100Vコード式・ラチェット式の違いから解説。CV線・CVT線・IV線などの切断能力、レースウェイカッター、ケーブルラックカッター、圧着工具の使い分け、法人購買時のチェックリストまで紹介します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail: "/images/articles/electrical-cable-cutter-tools-hero.jpg",
    date: "2026-07-08",
    readTime: "約15分",
    available: true,
    path: "/articles/cable-cutter-selection",
  },
  {
    slug: "magnetic-wall-diy",
    title:
      "マグネットがつく壁を作るには？スチールペーパー・粘着付きマグネットシート・掲示板シートの使い分け",
    shortTitle: "マグネットがつく壁の作り方",
    description:
      "壁にマグネットを付けたいときは、スチールペーパーや掲示板シートを使ってマグネット対応面を作る方法があります。スチールペーパー、粘着付きマグネットシート、強力マグネットシート、車両用・ホワイトボード用・掲示板用の使い分けを法人向けに解説します。",
    category: "compare",
    categoryLabel: "比較",
    thumbnail: "/images/articles/magnetic-wall-steel-paper-installation-hero.jpg",
    date: "2026-07-06",
    readTime: "約14分",
    available: true,
    path: "/articles/magnetic-wall-diy",
  },
  {
    slug: "side-handle-cart-guide",
    title:
      "サイドハンドル台車とは？長尺物・箱物を運びやすいグランカート・板物搬送台車の選び方",
    shortTitle: "サイドハンドル台車の選び方",
    description:
      "サイドハンドル台車とは、台車の横側にハンドルが付いた長尺物・箱物の運搬に便利な台車です。グランカートのサイレントタイプ・通常タイプ、板物搬送台車イタチ、カルティオやバーディワゴンとの使い分けを現場別に解説します。",
    category: "guide",
    categoryLabel: "倉庫・物流",
    thumbnail: "/images/articles/side-handle-cart-guide/hero.jpg",
    date: "2026-07-04",
    readTime: "約13分",
    available: true,
    path: "/articles/side-handle-cart-guide",
  },
  {
    slug: "large-bag-for-construction-waste",
    title:
      "廃材を入れる大きい袋の選び方｜ガラ袋・トン袋・大型土のう・フレコンバッグの使い分け",
    shortTitle: "廃材を入れる大きい袋の選び方",
    description:
      "廃材や土砂を入れる大きい袋の名前は、現場ではフレコンバッグ・トン袋・大型土のう袋などと呼ばれます。ガラ袋との違い、排出口あり・なし、耐候性タイプ、ハンドパレット・台車・作業台との組み合わせまで、現場別にわかりやすく解説します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail: "/images/articles/large-bag-for-construction-waste/hero.jpg",
    date: "2026-07-04",
    readTime: "約14分",
    available: true,
    path: "/articles/large-bag-for-construction-waste",
  },
  {
    slug: "kartio-folding-fixed-selection",
    title:
      "カルティオは折りたたみ・固定どっちを選ぶ？ストッパー付き・ビッグ・ミニの使い分け",
    shortTitle: "カルティオ 折りたたみ・固定の選び方",
    description:
      "カルティオの折りたたみハンドル・固定ハンドル・ストッパー付きの違いを解説。通常カルティオ、カルティオビッグ、カルティオミニweego、オフロード仕様の使い分けを、倉庫・工場・店舗バックヤード・施設管理など現場別にわかりやすく紹介します。",
    category: "guide",
    categoryLabel: "倉庫・物流",
    thumbnail: "/images/articles/kartio-folding-fixed-selection/hero.jpg",
    date: "2026-07-04",
    readTime: "約14分",
    available: true,
    path: "/articles/kartio-folding-fixed-selection",
  },
  {
    slug: "hand-lifter-vs-hand-pallet",
    title:
      "ハンドリフターとハンドパレットの違いは？手動・電動・高揚程タイプの種類と用途別の使い分け",
    shortTitle: "ハンドリフターとハンドパレットの違い",
    description:
      "ハンドリフターとハンドパレットの違いを解説。パレットを水平運搬するハンドパレットトラックと、荷物を高く上げるハンドリフター（高揚程型）の違い、手動・電動の使い分け、積載重量や用途別の選び分けを、トラスコ（TRUSCO）製品とあわせて紹介します。",
    category: "compare",
    categoryLabel: "倉庫・物流",
    thumbnail: "/images/articles/hand-lifter-vs-hand-pallet/hero.jpg",
    date: "2026-07-04",
    readTime: "約12分",
    available: true,
    path: "/articles/hand-lifter-vs-hand-pallet",
  },
  {
    slug: "outdoor-shade-net-selection",
    title:
      "屋外作業場の日よけに使う遮光ネットの選び方｜ハトメ付きネットの固定方法と遮光率を解説",
    shortTitle: "屋外作業場の日よけ遮光ネット",
    description:
      "屋外作業場・資材置き場・仮設ヤードの日よけに使う遮光ネットの選び方を解説。遮光率約95％、85〜90％、80〜85％、65〜75％の違い、黒・シルバーの使い分け、ハトメ付き遮光ネットの固定方法、大判サイズの選び方を紹介します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail:
      "/images/articles/outdoor-shade-net-selection/outdoor-shade-net-hero.jpg",
    date: "2026-07-03",
    readTime: "約14分",
    available: true,
    path: "/articles/outdoor-shade-net-selection",
  },
  {
    slug: "barn-floor-rubber-mat",
    title:
      "牛舎の床の底冷え・滑り対策に使うゴムマットの選び方｜酪農用マットの厚みを比較",
    shortTitle: "牛舎の床の底冷え・滑り対策",
    description:
      "牛舎の床の底冷え・滑り対策に使う酪農用ゴムマットの選び方を解説。15mm・20mm・25mm・30mmの厚み別の違い、牛舎・馬房で確認したい床状態、重量・設置・清掃時の注意点、農作業用ゴムマットや足腰マットとの使い分けも紹介します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail:
      "/images/articles/barn-floor-rubber-mat/barn-floor-rubber-mat-hero.jpg",
    date: "2026-07-03",
    readTime: "約14分",
    available: true,
    path: "/articles/barn-floor-rubber-mat",
  },
  {
    slug: "greenhouse-entrance-mud-control",
    title:
      "ビニールハウス入口のぬかるみ対策｜農作業用ゴムマットで歩きやすい通路を作る方法",
    shortTitle: "ビニールハウス入口のぬかるみ対策",
    description:
      "ビニールハウス入口のぬかるみ対策を解説。雨上がりや梅雨・霜の時期に歩きにくいハウス前通路へ、農作業用ゴムマットを敷くメリット、幅350mm・500mm・700mm、厚み5mm・7mm・10mmの選び方、敷き方の注意点を紹介します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail:
      "/images/articles/greenhouse-entrance-mud-control/greenhouse-entrance-mud-rubber-mat-hero.jpg",
    date: "2026-07-03",
    readTime: "約14分",
    available: true,
    path: "/articles/greenhouse-entrance-mud-control",
  },
  {
    slug: "construction-portable-power-selection",
    title:
      "工事現場のポータブル電源の選び方｜工具・照明・冷温庫・非常用電源に使える容量と出力の目安",
    shortTitle: "工事現場のポータブル電源の選び方",
    description:
      "工事現場や屋外作業でポータブル電源を選ぶときは、使いたい機器の消費電力、起動電力、容量Wh、定格出力W、充電時間、重量、安全性を確認することが重要です。MEIHO MPS1500・MPS2000・MPS3000の違いや、冷温庫・工具・照明・非常用電源としての使い方を解説します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail:
      "/images/articles/construction-portable-power-selection/portable-power-station-construction-site-hero.jpg",
    date: "2026-07-01",
    readTime: "約12分",
    available: true,
    path: "/articles/construction-portable-power-selection",
  },
  {
    slug: "line-work-tool-wagon-selection",
    title:
      "ライン作業の工具置き台に使えるワゴンの選び方｜部品の仮置き・移動作業を効率化",
    shortTitle: "ライン作業の工具置き台ワゴンの選び方",
    description:
      "ライン作業やピッキング作業では、工具・部品・測定具・商品を作業場所の近くに仮置きできるワゴンがあると、移動時間や作業台上の散らかりを減らしやすくなります。工場内運搬や工具置き台に使えるツールワゴンの選び方と、TRUSCOバーディワゴンのサイズ・高さ・段数の選び方を解説します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail:
      "/images/articles/line-work-tool-wagon-selection/line-work-tool-wagon-hero.jpg",
    date: "2026-06-30",
    readTime: "約14分",
    available: true,
    path: "/articles/line-work-tool-wagon-selection",
  },
  {
    slug: "tool-cabinet-moisture-control",
    title:
      "工具箱・保管庫の湿気対策｜繰り返し使える除湿石HYPERCUBEと除湿機の使い分け",
    shortTitle: "工具箱・保管庫の湿気対策",
    description:
      "工具箱や保管庫、工具キャビネットの湿気対策には、電源不要で繰り返し使える除湿剤が役立つ場合があります。SILENTDRY除湿石HYPERCUBE 800g・1000gの特徴、使い分け、除湿機やスポットエアコンとの違いを、工場・倉庫・精密機器保管向けに解説します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail: "/images/articles/tool-cabinet-moisture-control-hero.jpg",
    date: "2026-06-30",
    readTime: "約12分",
    available: true,
    path: "/articles/tool-cabinet-moisture-control",
  },
  {
    slug: "high-precision-platform-scale-selection",
    title:
      "高精度電子台はかりの選び方｜0.1g計量・防水・工場用途に向くVIBRA FMA33K0.1Tを解説",
    shortTitle: "高精度電子台はかりの選び方",
    description:
      "高精度電子台はかりを選ぶときは、ひょう量、最小表示、防塵・防水、清掃性、振動への強さ、風袋引き、外部出力を確認することが重要です。食品工場・化学・粉体・品質管理向けに、VIBRA FMA33K0.1Tの特徴や用途、選び方を解説します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail:
      "/images/articles/high-precision-platform-scale-factory-hero.jpg",
    date: "2026-06-30",
    readTime: "約14分",
    available: true,
    path: "/articles/high-precision-platform-scale-selection",
  },
  {
    slug: "standing-work-anti-fatigue-mat",
    title:
      "立ち仕事の疲労軽減マットの選び方｜工場・レジ・作業場で足腰の負担を減らすには",
    shortTitle: "立ち仕事の疲労軽減マットの選び方",
    description:
      "立ち仕事で足腰が疲れやすい工場、レジ、作業台、製造ラインでは、足元に疲労軽減マットを敷くことで体重負担の分散や底冷え対策に役立つ場合があります。TRUSCO足腰マット、帯電防止タイプ、エラストマットESD-II・STD-IIの違いと選び方を解説します。",
    category: "compare",
    categoryLabel: "比較",
    thumbnail: "/images/standing-work-anti-fatigue-mat-hero.jpg",
    date: "2026-06-27",
    readTime: "約14分",
    available: true,
    path: "/articles/standing-work-anti-fatigue-mat",
  },
  {
    slug: "workwear-heat-protection-clothing",
    title:
      "現場の暑さ対策は服装から｜冷感インナー・空調服・冷却ベストの選び方",
    shortTitle: "現場の暑さ対策は服装から",
    description:
      "現場の暑さ対策は、空調服や冷却ベストだけでなく、作業着の下に着る冷感インナー、アームカバー、ロングタイツ、クールインソールまで組み合わせて考えることが大切です。工事現場・工場・倉庫・屋外作業向けに、熱中症対策衣服の選び方を解説します。",
    category: "compare",
    categoryLabel: "比較",
    thumbnail: "/images/articles/workwear-heat-protection-clothing-hero.jpg",
    date: "2026-06-27",
    readTime: "約14分",
    available: true,
    path: "/articles/workwear-heat-protection-clothing",
  },
  {
    slug: "office-disaster-prevention-supplies",
    title:
      "会社の防災用品リスト｜オフィス・店舗・現場で備えたい備蓄品と選び方",
    shortTitle: "会社の防災用品リスト",
    description:
      "会社や店舗、現場で備える防災用品は、水・食料だけでなく、停電対策、照明、非常用電源、災害用トイレ、持ち出しリュック、備蓄品箱、工具、誘導灯、防犯用品まで用途別に整理することが大切です。総務・購買担当者向けに、職場で必要な防災用品リストと選び方を解説します。",
    category: "compare",
    categoryLabel: "比較",
    thumbnail: "/images/articles/office-disaster-prevention-supplies-hero.jpg",
    date: "2026-06-27",
    readTime: "約14分",
    available: true,
    path: "/articles/office-disaster-prevention-supplies",
  },
  {
    slug: "magnet-sheet-selection",
    title:
      "マグネットシートの選び方｜強力・車両用・印刷用・粘着付き・掲示板用の用途別比較",
    shortTitle: "マグネットシートの選び方",
    description:
      "マグネットシートは、車両表示、店舗POP、工場・倉庫の棚表示、掲示板、ホワイトボード、黒板、反射表示など用途によって選ぶ種類が変わります。強力タイプ、等方性・異方性、印刷用、粘着付き、スチールペーパーの違いと選び方をわかりやすく解説します。",
    category: "compare",
    categoryLabel: "比較",
    thumbnail: "/images/articles/magnet-sheet-selection-hero.jpg",
    date: "2026-06-27",
    readTime: "約13分",
    available: true,
    path: "/articles/magnet-sheet-selection",
  },
  {
    slug: "steel-composite-board-whiteboard",
    title:
      "ホワイトボードに使える板材の選び方｜スチール複合板とアルミ複合板の違いを解説",
    shortTitle: "ホワイトボード板材の選び方",
    description:
      "ホワイトボードや黒板を作る板材を探している方へ、スチール複合板の特徴と選び方を解説します。マグネットが使える理由、CKホワイトボード・ブラックボード・グリーンボードの違い、アルミ複合板との使い分け、オリジナルホワイトボード制作の相談先まで紹介します。",
    category: "compare",
    categoryLabel: "比較",
    thumbnail: "/images/articles/steel-composite-board-whiteboard-hero.jpg",
    date: "2026-06-27",
    readTime: "約13分",
    available: true,
    path: "/articles/steel-composite-board-whiteboard",
  },
  {
    slug: "flexible-container-bag-selection",
    title:
      "フレコンバッグの選び方｜排出口あり・なし、耐候性、用途別の使い分けを解説",
    shortTitle: "フレコンバッグの選び方",
    description:
      "フレコンバッグの選び方を、排出口あり・なし、耐候性、用途別に解説します。大型土のう、ガラ袋、屋外保管、工場・倉庫の資材保管で失敗しないための確認ポイントと、ハンドパレット・運搬台車・作業台など関連用品の選び方も紹介します。",
    category: "compare",
    categoryLabel: "比較",
    thumbnail: "/images/articles/flexible-container-bag-worksite-hero.jpg",
    date: "2026-06-27",
    readTime: "約13分",
    available: true,
    path: "/articles/flexible-container-bag-selection",
  },
  {
    slug: "spot-cooler-rest-area",
    title:
      "スポットクーラーで休憩所を涼しくするには？クーラーテント・工場扇・空調服の使い分け",
    shortTitle: "スポットクーラーで休憩所を涼しく",
    description:
      "スポットクーラーで休憩所を涼しくするには、冷風を逃がさない空間づくりが重要です。クーラーテント、工場扇、冷却ベスト、空調服、らくらくテントの使い分けを、工場・倉庫・現場休憩所向けに解説します。",
    category: "compare",
    categoryLabel: "比較",
    thumbnail: "/images/articles/cooler-tent-spot-cooler-rest-area.jpg",
    date: "2026-06-25",
    readTime: "約13分",
    available: true,
    path: "/articles/spot-cooler-rest-area",
  },
  {
    slug: "outdoor-work-heat-clothing",
    title:
      "屋外作業の暑さ対策は服装から｜冷感インナー・UVカット・遮熱ウェアの選び方",
    shortTitle: "屋外作業の暑さ対策は服装から",
    description:
      "屋外作業の暑さ対策は、冷感インナー・UVカット・遮熱ウェア・冷却ベスト・ヘルメット・インソールなど、身につける用品を作業環境に合わせて選ぶことが大切です。工事現場・倉庫・警備・イベント設営などで使いやすい服装選びと法人導入のポイントを解説します。",
    category: "compare",
    categoryLabel: "比較",
    thumbnail: "/images/articles/outdoor-work-heat-clothing-hero.jpg",
    date: "2026-06-25",
    readTime: "約14分",
    available: true,
    path: "/articles/outdoor-work-heat-clothing",
  },
  {
    slug: "sign-lighting-retrofit",
    title:
      "看板照明を後付けしたいときの選び方｜屋外用LEDライト・投光器の注意点",
    shortTitle: "看板照明の後付け",
    description:
      "看板照明を後付けしたい方向けに、屋外用LEDライト・LED投光器・外照式看板灯の選び方を解説。看板サイズ、明るさ、色温度、広角・狭角、出幅、防水性能、設置場所、越境リスク、ビューフラッド・ビュートロン・アドビュー・ポラックスの使い分けまで紹介します。",
    category: "guide",
    categoryLabel: "看板照明ガイド",
    thumbnail: "/images/articles/sign-lighting-retrofit-hero.jpg",
    date: "2026-06-25",
    readTime: "約13分",
    available: true,
    path: "/articles/sign-lighting-retrofit",
  },
  {
    slug: "floodlight-lumen-guide",
    title:
      "投光器のルーメン目安は？屋外作業・駐車場・工事現場で必要な明るさを解説",
    shortTitle: "投光器のルーメン目安",
    description:
      "投光器のルーメン目安を、手元作業・倉庫・屋外作業・駐車場・看板照明など用途別に解説。20W・50Wの違い、ルーメンとワット・ルクスの考え方、照射角度・設置高さ・防水・まぶしさ対策まで、明るさ選びで失敗しないポイントを紹介します。",
    category: "compare",
    categoryLabel: "比較",
    thumbnail: "/images/articles/floodlight-lumen-guide-hero.jpg",
    date: "2026-06-25",
    readTime: "約10分",
    available: true,
    path: "/articles/floodlight-lumen-guide",
  },
  {
    slug: "led-floodlight-selection",
    title: "LED投光器の選び方｜現場・倉庫の作業灯から看板照明まで",
    shortTitle: "LED投光器の選び方",
    description:
      "現場・倉庫・夜間作業のLED投光器（作業灯）の選び方を、明るさ（W・ルーメン）・配光角・設置タイプ（スタンド/三脚/バイス）・防水IP・電源で解説。TRUSCO DELKUROから外照式看板照明ビューフラッドまで、用途別に紹介します。",
    category: "compare",
    categoryLabel: "比較",
    thumbnail: "/images/articles/night-work-lighting-hero.jpg",
    date: "2026-06-25",
    readTime: "約10分",
    available: true,
    path: "/articles/led-floodlight-selection",
  },
  {
    slug: "board-material-transport-cart",
    title: "板物の運搬に便利な台車とは？アルミ複合板・長尺材を安全に運ぶ選び方",
    shortTitle: "板物の運搬に便利な台車",
    description:
      "アルミ複合板・看板板材・合板・パネル・アルミパイプなどの板物・長尺材を安全に運ぶ方法を解説。板物搬送台車イタチとグランカート サイドハンドルの使い分け、選び方、傷・転倒・腰痛対策、関連するアルミ建材・安全靴まで紹介します。",
    category: "compare",
    categoryLabel: "比較",
    thumbnail: "/images/articles/board-material-transport-cart-hero.jpg",
    date: "2026-06-25",
    readTime: "約9分",
    available: true,
    path: "/articles/board-material-transport-cart",
  },
  {
    slug: "heavy-duty-workbench-guide",
    title:
      "頑丈な作業台の選び方｜業務用で失敗しない耐荷重・天板・用途別の比較ガイド",
    shortTitle: "頑丈な作業台の選び方",
    description:
      "頑丈な作業台を選ぶなら、耐荷重だけでなく軽量・中量・重量の違い、天板材質、バイス作業への対応、固定式・移動式、搬入や運搬動線まで確認することが大切です。工場・倉庫・整備場向けに業務用作業台の選び方と、TRUSCO作業台・ハンドパレット・台車の活用を解説します。",
    category: "guide",
    categoryLabel: "作業台・什器",
    thumbnail: "/記事画像/heavy-duty-workbench-hero.jpg",
    date: "2026-06-21",
    readTime: "約13分",
    available: true,
    path: "/articles/heavy-duty-workbench-guide",
  },
  {
    slug: "helmet-heatstroke-risk",
    title:
      "ヘルメットの熱中症リスクとは？屋外作業・工事現場で外せない保護具の暑さ対策と選び方",
    shortTitle: "ヘルメットの熱中症リスク",
    description:
      "ヘルメットは屋外作業や工事現場で欠かせない保護具ですが、夏場は頭部のムレや熱こもりによる熱中症リスクに注意が必要です。通気孔付き・遮熱・軽量ヘルメットの選び方、防暑タレやインナー、保護メガネ、手袋、冷却ベスト、工場扇との組み合わせまで現場目線で解説します。",
    category: "guide",
    categoryLabel: "保護具・安全衛生",
    thumbnail: "/記事画像/helmet-heatstroke-risk-hero.jpg",
    date: "2026-06-21",
    readTime: "約13分",
    available: true,
    path: "/articles/helmet-heatstroke-risk",
  },
  {
    slug: "warehouse-safety-shoes",
    title:
      "倉庫作業に向く安全靴の選び方｜疲れにくい・滑りにくい・台車作業で安心な靴を解説",
    shortTitle: "倉庫作業の安全靴の選び方",
    description:
      "倉庫作業に安全靴は必要？ピッキング・検品・梱包・入出荷・台車作業など作業内容別に、安全靴・プロテクティブスニーカーの選び方を解説。疲れにくさ・滑りにくさ・先芯・軽量性・法人導入のポイントと、ニューバランス安全靴・TRUSCO製品も紹介します。",
    category: "guide",
    categoryLabel: "保護具・安全衛生",
    thumbnail: "/記事画像/warehouse-safety-shoes-hero.jpg",
    date: "2026-06-21",
    readTime: "約13分",
    available: true,
    path: "/articles/warehouse-safety-shoes",
  },
  {
    slug: "outdoor-work-heat-countermeasure-goods",
    title:
      "建設現場の暑さ対策グッズとは？空調服だけでは足りない酷暑現場の冷却設備と休憩所づくり",
    shortTitle: "建設現場の暑さ対策グッズ",
    description:
      "建設現場や屋外イベントの暑さ対策では、空調服や工場扇だけでなく休憩所を涼しくする設備づくりも重要です。作業中・休憩中・万が一の備えに分けて、空調ウェア・冷却ベスト・工場扇・スポットクーラー・1人用クールダウン設備・応急セットの選び方を解説します。",
    category: "guide",
    categoryLabel: "熱中症・暑さ対策",
    thumbnail: "/記事画像/dohiemon-box-hero.jpg",
    date: "2026-06-21",
    readTime: "約13分",
    available: true,
    path: "/articles/outdoor-work-heat-countermeasure-goods",
  },
  {
    slug: "antistatic-agent-hishicoat-coatron",
    title:
      "ヒシコート・コートロンとは？静電防止剤でホコリ付着・油脂汚れを抑える使い方と選び方",
    shortTitle: "ヒシコート・コートロンと静電防止剤",
    description:
      "ヒシコートA・コートロンなどの静電防止剤の用途・使い方・注意点を看板製作・樹脂板加工の現場向けに解説。ホコリ付着や油脂汚れによる仕上がり不良を防ぐ前処理、まとめ買い、導電マット・リストストラップなど関連する静電気対策用品も紹介します。",
    category: "compare",
    categoryLabel: "看板資材ガイド",
    thumbnail: "/images/articles/antistatic-agent-hishicoat-coatron-hero.jpg",
    date: "2026-06-21",
    readTime: "約13分",
    available: true,
    path: "/articles/antistatic-agent-hishicoat-coatron",
  },
  {
    slug: "hand-lift-precautions",
    title:
      "ハンドリフトの注意点｜事故を防ぐ使い方とハンドパレット・ハンドリフターの選び分け",
    shortTitle: "ハンドリフトの注意点",
    description:
      "ハンドリフト使用時の注意点を、荷崩れ・過積載・足元事故・坂道・段差・急操作など現場目線で解説。ハンドパレットとハンドリフターの違い、台車との使い分け、法人導入時のチェックリストまで整理します。",
    category: "guide",
    categoryLabel: "倉庫・物流",
    thumbnail: "/記事画像/hand-lift-safety-hero.jpg",
    date: "2026-06-21",
    readTime: "約12分",
    available: true,
    path: "/articles/hand-lift-precautions",
  },
  {
    slug: "safety-shoes-replacement",
    title:
      "安全靴の交換時期はいつ？靴底・先芯・破れの見分け方と買い替え目安",
    shortTitle: "安全靴の交換時期",
    description:
      "安全靴の交換時期を、靴底の摩耗・先芯の露出・破れ・靴底の剥がれ・強い衝撃などのチェックポイントから解説。現場責任者・購買担当者向けに、点検チェックリスト、交換ルール、買い替え候補、台車活用による負担軽減まで整理します。",
    category: "guide",
    categoryLabel: "安全靴・作業靴",
    thumbnail: "/images/articles/safety-shoes-replacement-hero.jpg",
    date: "2026-06-18",
    readTime: "15分",
    available: true,
    path: "/articles/safety-shoes-replacement",
  },
  {
    slug: "plastic-chain-vs-cone-bar",
    title:
      "プラチェーンとコーンバーの違い｜駐車場・通路・立入禁止エリアの区画用品はどっちが良い？",
    shortTitle: "プラチェーンとコーンバーの違い",
    description:
      "プラチェーンとコーンバーの違いを、駐車場・通路・工事現場・イベント・立入禁止エリアの用途別に解説。直線区画に向くコーンバー、長距離や曲線導線に向くプラチェーンの選び方、色・長さ・ジョイント・コーンリングの注意点まで法人向けに整理します。",
    category: "compare",
    categoryLabel: "比較・選び方",
    thumbnail: "/images/articles/plastic-chain-cone-bar-selection-hero.jpg",
    date: "2026-06-18",
    readTime: "13分",
    available: true,
    path: "/articles/plastic-chain-vs-cone-bar",
  },
  {
    slug: "construction-work-platform",
    title:
      "建築現場の作業台はどう選ぶ？足場台・踏台・ペケ台・工具置き台の使い分け",
    shortTitle: "建築現場の作業台の選び方",
    description:
      "建築現場で使う作業台の選び方を、足場台・作業用踏台・ペケ台・工具置き台・台車まで整理。人が乗る作業台と材料を置く作業台の違い、高さ・天板寸法・段差対応・収納性のチェックポイントを法人・現場向けに解説します。",
    category: "compare",
    categoryLabel: "比較・選び方",
    thumbnail: "/images/articles/construction-site-work-platform-hero.jpg",
    date: "2026-06-18",
    readTime: "13分",
    available: true,
    path: "/articles/construction-work-platform",
  },
  {
    slug: "color-cone-selection",
    title:
      "カラーコーンの選び方｜駐車場・工事現場・イベントで使うコーン・バー・チェーンの使い分け",
    shortTitle: "カラーコーンの選び方",
    description:
      "カラーコーンの選び方を駐車場・工事現場・イベント会場別に解説。カラーコーン単体でよいケース、コーンバーが必要なケース、プラチェーンが向くケース、表示カバー・重石・反射テープ付きコーンの使い分けを、法人担当者向けにわかりやすく紹介します。",
    category: "compare",
    categoryLabel: "比較・選び方",
    thumbnail: "/images/articles/color-cone-selection-hero.jpg",
    date: "2026-06-18",
    readTime: "14分",
    available: true,
    path: "/articles/color-cone-selection",
  },
  {
    slug: "aluminum-composite-panel-cut",
    title:
      "アルミ複合板のカット販売とは？指定寸法・角R・穴あけ加工を依頼する前のチェックポイント",
    shortTitle: "アルミ複合板のカット販売",
    description:
      "アルミ複合板を指定寸法でカット販売してほしい方向けに、依頼前に決めるべきサイズ・厚み・色・角R・穴あけ位置・取付方法・枚数・屋内外用途・図面データの有無を解説。看板板材やプレート看板用のアルミ複合板を失敗なく注文するためのチェックリスト付き。",
    category: "guide",
    categoryLabel: "看板資材ガイド",
    thumbnail: "/images/articles/aluminum-composite-panel-cut-hero.jpg",
    date: "2026-06-18",
    readTime: "14分",
    available: true,
    path: "/articles/aluminum-composite-panel-cut",
  },
  {
    slug: "workbench-tool-organization",
    title:
      "作業台まわりの工具整理術｜工具を探す時間を減らすツールワゴン・収納用品の選び方",
    shortTitle: "作業台まわりの工具整理術",
    description:
      "作業台まわりに工具が散らかる、必要な工具を探す時間が長い、使った工具が戻らない。そんな工場・倉庫・メンテナンス現場向けに、工具整理の考え方、ツールワゴン・パーツケース・工具箱の使い分け、法人導入時のチェックポイントを解説します。",
    category: "guide",
    categoryLabel: "現場ガイド",
    thumbnail: "/images/articles/workbench-tool-organization-hero.jpg",
    date: "2026-06-18",
    readTime: "14分",
    available: true,
    path: "/articles/workbench-tool-organization",
  },
  {
    slug: "toolbag-backpack-selection",
    title:
      "ツールバッグとバックパックどっちが良い？工具の持ち運びを軽くする選び方",
    shortTitle: "ツールバッグの選び方",
    description:
      "ツールバッグと工具用バックパックの違いを、電工・設備点検・屋外作業・イベント設営・出張作業向けに解説。工具の重量、移動距離、両手を空けたいか、出し入れのしやすさ、防水性、キャスター付きの必要性まで、法人現場向けの選び方チェックリスト付きで紹介します。",
    category: "compare",
    categoryLabel: "比較・選び方",
    thumbnail: "/toolbag-backpack-selection-hero.jpg",
    date: "2026-06-18",
    readTime: "13分",
    available: true,
    path: "/articles/toolbag-backpack-selection",
  },
  {
    slug: "parts-case-selection",
    title:
      "パーツケースの選び方｜小物・ネジの整理に効く仕切り・引き出し・連結タイプの使い分け",
    shortTitle: "パーツケースの選び方",
    description:
      "パーツケースの選び方を、ネジ・ビス・ナット・端子・小物部品の整理に悩む現場担当者向けに解説。仕切り付き、引き出し式、卓上タイプ、連結・スタンドタイプ、工具箱型の違いから、屋外現場・イベント・倉庫・車載作業で探し物を減らす収納チェックリストまで紹介します。",
    category: "compare",
    categoryLabel: "比較・選び方",
    thumbnail: "/images/articles/parts-case-selection-hero.jpg",
    date: "2026-06-18",
    readTime: "13分",
    available: true,
    path: "/articles/parts-case-selection",
  },
  {
    slug: "ladder-stepladder-difference",
    title:
      "はしごと脚立の違いとは？JIS・SG規格と「天板に乗ってはいけない」理由",
    shortTitle: "はしごと脚立の違い",
    description:
      "はしごと脚立の違い、脚立の天板に乗ってはいけない理由、JIS・SG・Aマークの見方を法人現場向けに解説。脚立・はしご・作業用踏台・足場台・手すり付き踏台の使い分けや、倉庫・工場・店舗での選定チェックリストも紹介します。",
    category: "compare",
    categoryLabel: "比較・選び方",
    thumbnail: "/ladder-stepladder-difference-hero.jpg",
    date: "2026-06-18",
    readTime: "13分",
    available: true,
    path: "/articles/ladder-stepladder-difference",
  },
  {
    slug: "warehouse-summer-workwear",
    title:
      "倉庫作業の夏服装はどう選ぶ？動きやすい作業着・冷却ベスト・空調服と効率化用品の選び方",
    shortTitle: "倉庫作業の夏服装",
    description:
      "夏の倉庫作業では、涼しさだけでなく動きやすさ・安全性・汗処理・作業効率を考えた服装選びが重要です。冷感インナー、空調服、冷却ベスト、空調つなぎの使い分けから、台車・ハンドパレット・作業台による負担軽減まで、法人担当者向けに実務チェックリスト付きで解説します。",
    category: "compare",
    categoryLabel: "比較・選び方",
    thumbnail: "/images/articles/warehouse-summer-workwear-hero.jpg",
    date: "2026-06-17",
    readTime: "12分",
    available: true,
    path: "/articles/warehouse-summer-workwear",
  },
  {
    slug: "outdoor-work-heatstroke-measures",
    title:
      "外仕事の熱中症対策｜現場・イベント・屋外倉庫で使える暑さ対策グッズと実務チェックリスト",
    shortTitle: "外仕事の熱中症対策",
    description:
      "外仕事・屋外作業の熱中症対策を、現場・イベント・屋外倉庫向けに解説。WBGT測定、日陰・休憩所づくり、水分・塩分補給、腕時計型アラート、応急セットまで、法人現場で使えるチェックリスト付きで整理します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail: "/images/articles/outdoor-work-heatstroke-measures-hero.jpg",
    date: "2026-06-17",
    readTime: "約12分",
    available: true,
    path: "/articles/outdoor-work-heatstroke-measures",
  },
  {
    slug: "stepladder-height-law",
    title:
      "脚立は2mまで？高所作業の法律と現場で選ぶべき足場台・踏み台の違い",
    shortTitle: "脚立・高所作業の法律",
    description:
      "脚立は2m以上だと法律で禁止？労働安全衛生規則518条の考え方をもとに、脚立・踏み台・作業用踏台・足場台・手すり付き踏台の違いと、法人現場での安全な選び方をわかりやすく解説します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail: "/images/articles/stepladder-height-law-hero.jpg",
    date: "2026-06-12",
    readTime: "約12分",
    available: true,
    path: "/articles/stepladder-height-law",
  },
  {
    slug: "steel-shelf-erabikata",
    title:
      "スチール棚の選び方｜軽量・中量・重量ラックの耐荷重区分と使い分け",
    shortTitle: "スチール棚の選び方",
    description:
      "スチール棚の選び方を軽量・軽中量・中量・重量棚の耐荷重区分から解説。80〜1000kg/段の違い、1段あたり耐荷重と最大積載量の違い、集中荷重の注意、単体型・連結型、現場別の使い分けまで法人向けに整理します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail: "/images/articles/steel-shelf-selection-hero.jpg",
    date: "2026-06-12",
    readTime: "約12分",
    available: true,
    path: "/articles/steel-shelf-erabikata",
  },
  {
    slug: "workbench-erabikata",
    title:
      "軽量作業台と重量作業台の違い｜耐荷重と天板素材で選ぶ用途別ガイド",
    shortTitle: "作業台の選び方",
    description:
      "軽量・中量・重荷重作業台の違いを、耐荷重・天板素材（ポリ化粧/ダップ化粧）・作業内容から整理。現場別早見表・導入失敗例・チェックリストで、自社に合う業務用作業台の選び方を解説します。",
    category: "compare",
    categoryLabel: "比較・違い",
    thumbnail: "/images/articles/workbench-load-capacity-hero.jpg",
    date: "2026-06-12",
    readTime: "約11分",
    available: true,
    path: "/articles/workbench-erabikata",
  },
  {
    slug: "warehouse-heatstroke-taisaku",
    title:
      "倉庫作業の熱中症対策｜工場扇・スポットクーラー・冷却ベストで現場を守る方法",
    shortTitle: "倉庫作業の熱中症対策",
    description:
      "倉庫作業の熱中症対策を、WBGT測定・工場扇・スポットクーラー・冷却ベスト・休憩所整備・2025年義務化対応の観点で解説。ローディングドック・ピッキング・梱包・出荷などエリア別に、法人が準備すべき暑さ対策用品と運用チェックリストを整理します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail: "/images/articles/warehouse-heatstroke-prevention-hero.jpg",
    date: "2026-06-12",
    readTime: "約13分",
    available: true,
    path: "/articles/warehouse-heatstroke-taisaku",
  },
  {
    slug: "kartio-big-offroad",
    title:
      "カルティオビッグ・オフロードとは？悪路・段差に強い大型樹脂台車の使いどころ",
    shortTitle: "カルティオビッグ オフロード",
    description:
      "カルティオビッグ オフロードは悪路・段差に強い大型樹脂台車。ただし均等荷重100kgで、通常のカルティオビッグ400kgとは役割が違います。標準カルティオとの違い、路面別・シチュエーション別の選び方、選定ミス防止まで実務解説。",
    category: "compare",
    categoryLabel: "比較・違い",
    thumbnail: "/images/articles/kartio-big-offroad-hero.jpg",
    date: "2026-06-12",
    readTime: "約10分",
    available: true,
    path: "/articles/kartio-big-offroad",
  },
  {
    slug: "kartio-load-capacity",
    title:
      "カルティオは何kgまで載せられる？均等荷重200kgの正しい意味と過積載のリスク",
    shortTitle: "カルティオの耐荷重",
    description:
      "カルティオの耐荷重は均等荷重200kg。その正しい読み方と、過積載だけでなく偏荷重・高積み・斜面使用といった見落としがちなリスクを実務解説。足りない場合のカルティオビッグ・weegoとの耐荷重比較、導入前チェックリスト付き。",
    category: "howto",
    categoryLabel: "使い方・コツ",
    thumbnail: "/images/articles/kartio-load-capacity-hero.jpg",
    date: "2026-06-12",
    readTime: "約9分",
    available: true,
    path: "/articles/kartio-load-capacity",
  },
  {
    slug: "trusco-hand-pallet-erabikata",
    title:
      "トラスコのハンドパレット（ハンドリフト）の選び方｜フォーク長・能力・低床の違い",
    shortTitle: "ハンドパレットの選び方",
    description:
      "ハンドパレットの選び方を、パレット寸法→フォーク長→能力(1t/1.5t/2t/3t)→低床式→手動/電動→ハンドリフターとの違いの順で実務解説。現場別早見表・選定ミス防止・導入前チェックリスト付き。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail: "/images/articles/trusco-hand-pallet-hero.jpg",
    date: "2026-06-12",
    readTime: "約11分",
    available: true,
    path: "/articles/trusco-hand-pallet-erabikata",
  },
  {
    slug: "safety-shoes-jis-jsaa",
    title:
      "安全靴・プロテクティブスニーカーの違い｜JIS T8101とJSAA規格の見方",
    shortTitle: "安全靴・プロスニーカーの違い",
    description:
      "安全靴(JIS T8101)とプロテクティブスニーカー(JSAA認定)の違いを、規格の見方・現場別早見表・法人導入チェックリストで整理。A種B種の違い、選定ミスの防ぎ方まで、現場で使える作業靴の選び方を解説します。",
    category: "compare",
    categoryLabel: "比較・違い",
    thumbnail: "/images/articles/safety-shoes-jis-jsaa-hero.jpg",
    date: "2026-06-12",
    readTime: "約10分",
    available: true,
    path: "/articles/safety-shoes-jis-jsaa",
  },
  {
    slug: "caritio-720-780-compare",
    title:
      "カルティオ MPK-720とMPK-780の違いは？新旧サイズ早見表で選ぶ軽量台車",
    shortTitle: "カルティオ MPK-720/780 の違い",
    description:
      "カルティオMPK-720とMPK-780の違いを新旧比較表で整理。サイズ・荷重は同じで本質は「軽さ」。用途別早見表・選び方表・導入前チェックリストで、現場に合う軽量台車の選定を支援します。",
    category: "compare",
    categoryLabel: "比較・違い",
    thumbnail: "/images/articles/kartio-mpk720-mpk780-hero.jpg",
    date: "2026-06-12",
    readTime: "約8分",
    available: true,
    path: "/articles/caritio-720-780-compare",
  },
  {
    slug: "carutio-cart-guide",
    title:
      "軽量樹脂台車カルティオの選び方｜サイズ・耐荷重・静音・ストッパーの違い",
    shortTitle: "カルティオ台車の選び方｜サイズ・耐荷重・静音の違い",
    description:
      "トラスコ中山の軽量樹脂台車「カルティオ」を、工場・倉庫・建設現場の担当者向けに解説。サイズ・耐荷重・静音キャスター・ストッパーなど、現場で迷いやすい選定ポイントを整理します。",
    category: "guide",
    categoryLabel: "選び方ガイド",
    thumbnail: "/images/articles/carutio-cart-guide-hero.jpg",
    date: "2026-06-10",
    readTime: "約10分",
    available: true,
    path: "/articles/carutio-cart-guide",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getAvailableArticles(): Article[] {
  return ARTICLES.filter((article) => article.available);
}
