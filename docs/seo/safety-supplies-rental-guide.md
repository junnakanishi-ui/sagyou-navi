# 安全用品レンタル記事：制作・計測メモ

調査・制作日：2026-11-10
記事：/articles/safety-supplies-rental-guide
送客先：https://gc-anzen.com/rental

## キーワード選定

主軸は「安全用品 レンタル 短期」。同じ検索意図の「安全用品 レンタル 料金」「保安用品 レンタル 見積もり」「安全用品 レンタル 購入 比較」を一つの記事で扱う。

実施した検索：安全用品 レンタル／安全用品 レンタル 短期 購入 比較／安全用品 レンタル 費用 見積もり／工事 保安用品 レンタル 短期 必要なもの／カラーコーン レンタル 購入 どっち／引用符付きの安全用品・保安用品＋レンタル＋短期・見積もり・購入。

観察した検索結果は事業者のカテゴリー・商品ページが中心。短期利用の料金条件、配送回収、付属品、購入判断をまとめて比較できる実務記事を入口にする。大手の一覧ページと「安全用品 レンタル」単独で正面競合するより、具体的な手配上の疑問を満たす方針。これは検索意図からの編集上の判断であり、低競合・検索需要・順位を数値で実証したものではない。

検索ボリューム・CPC・KD・Search Consoleデータにはアクセスしていない。検索順位は地域・時点・検索環境で変わるため、今回の結果をGoogleの固定順位として扱わない。後発でも必ず上位を取れるとは保証しない。

参照した事業者ページ：
- https://www.gc-select.com/pages/rental-lp — 期間・数量などを明示した別窓口のLP。条件・価格をgc-anzen.comの契約条件として転記しない。
- https://www.saftec.co.jp/products-searchs/rental/rental11 — コーンのレンタル商品一覧。単品・カテゴリーの取引意図が強い。
- https://www.nishio-rent.co.jp/rentall/product/setup/setup_general/karakon/ — 商品仕様・料金・搬入出などの条件を掲載。
- https://www.ed-rent.co.jp/collarcone.html — 少量注文でも運搬費が重要になることを確認。
- https://scchoan.com/news/shiga-color-cone-rental-or-purchase — 地域＋購入比較の競合例。全国の一律価格・日数で結論を出さない。
- https://www.nihonsafety.com/topics/faqs/5326 — 個別見積もりへの誘導。
- https://www.brust.jp/レンタル事業部/ — 商品代と輸送コストを合わせた案内。

## 公式ページの事実確認

https://gc-anzen.com/rental のHTMLを直接取得して確認（検索ツールでは取得できなかったためcurlを使用）。
- コーン、フェンス・バリケード、工事看板、矢印板、保安灯、投光器などの取扱い相談を掲載。
- 価格は機種・数量・期間・納品場所・配送回収・設置操作などの条件で個別見積もり。
- 短期・1品の相談を受け付けるが、全品1日から貸出可能とは書かない。
- 品名・数量が未定でも相談可能。購入とレンタルを同時に相談可能。
- 画像はユーザーから利用許可あり。画像の出典を記事に明示。
- #lineup、#price、#rental-planner のアンカーを確認。記事内の用品カードは /rental#lineup へ遷移。

## 記事の独自価値と回遊

用品6分類と付属品の確認点／日程・課金対象の分離／総額の確認表／買う・借りるの判断／3現場の準備例／コーンとバーの数え方／編集・コピー可能な依頼文。
金額や効果、使用実績は創作しない。規制の設置基準や設置間隔を独断で示さない。

関連記事 color-cone-types-sizes、color-cone-selection、safety-walkway-setup から内部リンク。記事一覧とサイトマップには lib/articles.ts 経由で登録。

## デザイン

既存800/850pxの本文コンテナを記事ルート内で最大1200pxへ拡張。本文の段落は約40em、通常17px／PC18px、行間1.95。新記事は商品カードPC3列・中間2列・スマートフォン1列。比較表だけ横スクロール可能。
「2026年の唯一の推奨幅」があるわけではない。W3CのCJK行長への配慮を参考に、画像・表の幅と長文の行幅を分離する設計判断。
参考：https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html
参考：https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=ja

## 計測

全レンタル導線に utm_source=sagyou_navi、utm_medium=referral、utm_campaign=safety-supplies-rental-guide、utm_content=配置名 を付与。
配置：intro / product_* / product_image_* / cost / checklist / summary / sticky / source / equipment_source。
Vercel Analyticsには rental_outbound_click（article、placementのみ）を送信する実装。依頼文の入力値を送信しない。計測がブロックされても通常のaリンクは有効。

本番でのイベント集計可否はVercel契約・設定・ブラウザの計測制限に依存し、ダッシュボードの受信確認は別途必要。送客先GA4がUTMを記録していればキャンペーン単位で流入を識別可能。実アクセス増加は未計測。
公開後はSearch Consoleで対象URLの表示回数・クエリ・クリック、送客先のUTM流入、導線別クリックを確認。検索意図の重複する薄い記事を増やさず、表示された商品別クエリを次の記事候補にする。
