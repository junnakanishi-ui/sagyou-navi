# 工事・イベントの相談につながる記事群

公開・調査日：2026-11-22

## 目的と送客先

作業用品ナビで、用品を買う前に「使う場所・数量・案内文・手配範囲」を整理したい担当者に情報を届ける。現場・会場の相談はGC安全へ、仕様が決まった定型商品の購入はGCセレクトへ分ける。今回はまとめページ1本と詳細記事5本を追加する。

検索ボリューム、広告キーワードプランナー、難易度指標、Search Consoleの実績データは未取得。順位・流入数・問い合わせ数の保証や、数値の推定は行わない。以下は検索結果の内容とサービスとの適合性から選んだ仮説であり、「競合が少ない」と断定するものではない。

## 検索意図の割り当て

- `safety-equipment-planning`：安全保安用品 手配／工事 イベント 安全用品 相談。用途別に各記事へ案内する入口。主CTAは https://gc-anzen.com/ 。
- `construction-safety-supplies-order-checklist`：工事現場 保安用品 一式／保安用品 見積もり 準備／保安用品 手配表。主CTAは https://gc-anzen.com/quote 。日常点検の既存記事とは分け、発注前の不足数と搬入条件を扱う。
- `event-fence-rental-planning`：イベント フェンス レンタル 種類／イベント フェンス 必要枚数／フェンス レンタル 付属品。主CTAは https://gc-anzen.com/events/fence-rental 。商品単価の羅列ではなく、区間・開口・有効幅・ベース・運搬から相談条件を整理。
- `event-queue-guidance-equipment`：イベント 待機列 作り方／最後尾 看板 文言／受付 動線 備品。主CTAは https://gc-anzen.com/events/queue-management 。特定のイベントの参加案内ではなく、運営担当者が区画と表示を準備するための記事。
- `temporary-parking-guidance-signs`：イベント 臨時駐車場 看板／仮設駐車場 誘導用品／イベント 駐車場 満車 看板。主CTAは https://gc-anzen.com/events/parking 。車路に加え、駐車後の歩行・満車・搬入時間帯の表示切替を扱う。
- `custom-construction-sign-order-guide`：工事看板 特注 原稿／工事看板 名入れ 注文／工事看板 校正。主CTAは https://gc-anzen.com/sign-production 。既製SL看板の型式比較とは分け、原稿・設置写真・校正・作業範囲を整理。

## 検索結果で確認したこと

「イベント フェンス レンタル」は、ダスキンレントオール、イベント21、西尾レントオールなどの実際の貸出商品ページが見られ、取引意図が強い。単に商品名を並べるよりも、用途比較や見積もり準備を補う記事として作成する。商品写真・仕様の確認先はGC安全の公式ページ。

待機列の関連検索は、主催者の参加案内、最後尾札の運用、出展者向け手引き等が混在。来場者向けの検索と運営担当者向けの検索を分け、タイトル・導入文で担当者向けと明示する。臨時駐車場の検索では、自治体の個別施設資料や看板製作事例が見られたため、入口だけでなく満車・出口・歩行者案内を扱う準備記事を作成。

工事の一式手配は、用品会社の見積もり窓口やGC安全の現場開設記事が見られる。GC安全の記事本文を転載せず、作業用品ナビでは「担当者間で共有する手配表」「手持ち品からの不足数」「見積もりの条件合わせ」に焦点を絞る。特注看板は製作会社の入稿案内やFAQがあるため、形式の指定を独自に断定せず、現場情報・校正・承認の準備を解説する。

## 内部リンクと検索向け実装

- 6ページを `lib/articles.ts` に登録。記事一覧・トップの新着枠・既存の動的サイトマップへ反映。
- 共通ヘッダーからまとめページへ常設リンク。トップに用途別ガイドとGC安全への相談導線を追加。
- 既存の安全用品レンタル、マラソン、建設現場の安全対策、SL立看板の記事から関連性のある新記事へリンク。
- 新記事同士も、フェンス→待機列→駐車場、工事一式→特注看板など準備の前後でつなぐ。
- ページ固有のtitle・description・canonical・OG・Twitter、ArticleとBreadcrumbListのJSON-LD。公開日と確認日は実際の公開に合わせる。
- FAQは画面に掲載。FAQのリッチリザルトを期待するような説明や、不適切な商品・評価の構造化データは追加しない。
- 法令・管理者の条件・安全性能が関わる事項は、所管の一次情報を参照。一般的な区画用品を車両衝突・群衆圧力を止める設備として紹介しない。
- PC最大幅1200pxの既存レイアウトを継承。本文だけを狭める幅指定や、文章途中の強制改行は追加しない。比較表は横スクロール、写真カードは画面幅に合わせて段数を変更。

## 参照元

- https://gc-anzen.com/ （取扱い・相談範囲・スタッフ写真）
- https://gc-anzen.com/quote （一括見積もり、未確定段階の相談）
- https://gc-anzen.com/site-start （着工前の手配表）
- https://gc-anzen.com/proposal （購入・レンタルを含む段階別の準備）
- https://gc-anzen.com/events/fence-rental （4種類の写真・寸法・用途・部材）
- https://gc-anzen.com/events/queue-management （待機列の用品、使用イメージ）
- https://gc-anzen.com/events/parking （駐車場の用品、使用イメージ）
- https://gc-anzen.com/sign-production （データ未確定からの相談・校正・取付範囲）
- https://www.ktr.mlit.go.jp/road/shihon/road_shihon00000054.html （現場に適用する基準を確認するための参照先。寸法や配置を全国一律に転用していない）
- https://www.keishicho.metro.tokyo.lg.jp/tetsuzuki/kotsu/road_permission.html （道路使用の確認）
- https://www.kensetsu.metro.tokyo.lg.jp/jimusho/ichiken/doro-kasen-kanri/senyo （道路占用の確認）
- https://www.bousai.city.nagaoka.niigata.jp/news/2024/2024-1202-1025-8.html （主催者・施設管理者の混雑対策）
- https://www.npa.go.jp/hakusyo/r08/honbun/html/cc6613000.html （雑踏警備・主催者等との連携）

## 写真とEC商品

`public/images/articles/safety-equipment-planning/` のスタッフ・倉庫写真、フェンス写真、模式図、会場イラストはユーザーの使用許可があるGC安全の公式ページから取得。イラストは実際の事例や安全設計図と誤認しないようキャプションを付ける。

GCセレクトの https://www.gc-select.com/products/1124850038 （BURTLE 7610-47）、https://www.gc-select.com/products/6300046023 （シェアする防災セット）、https://www.gc-select.com/products/1148010208 （安全第一横幕）を2026-11-22に確認。サイズ・在庫は変動するため固定価格や即納保証は掲載しない。防災セットは必要備蓄を網羅するものと説明しない。

## 計測

新しい相談・購入CTAには `utm_source=sagyou_navi`、`utm_medium=referral`、`utm_campaign=記事slug`、`utm_content=設置場所` を付ける。通常のa要素でJavaScriptなしでも遷移可能。

Vercel Analyticsには本番環境のみ `safety_guide_outbound_click` を送る。項目は `article` / `placement` / `destination`（パスのみ）/ `site`。相談メモの入力内容や個人情報は送らず、送信・保存機能も持たせない。

流入先でUTM別の訪問と問い合わせを測れる場合は、GC安全側の成果と合わせて確認する。リンクのクリックは問い合わせ完了ではない。Search Consoleの計測環境が利用可能になったら、表示クエリ、URL別の表示回数・CTR、記事間の意図重複を確認し、実測を基に追記や統合を検討する。自動監視・定期実行は今回設定しない。

## 公開前の確認

TypeScript型チェックと変更TS/TSXのESLintを通過。開発サーバーの全6ページについて、HTTP応答、H1が1つであること、canonical、description、OG画像、Article/BreadcrumbListのJSON-LD、目次の参照先、内部リンクの実在、画像ファイル、サイトマップ収録を確認。

ブラウザではPC1280px、スマートフォン390px・320px、タブレット768pxを確認。全詳細記事の390px表示で横はみ出しなし。相談メモは編集後の内容がクリップボードへコピーされ、FAQが開くことを確認。本文幅はPC1152px、スマートフォン350pxでコンテナに追従。トップの用途別入口からまとめページへ移動できることを確認。
