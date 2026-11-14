# マラソン大会の運営備品記事：編集・送客メモ

調査日：2026-11-14
記事：/articles/marathon-event-safety-equipment
送客先：https://gc-anzen.com/events/marathon

## 選定した検索意図

中心：「マラソン大会 運営 備品」「マラソン大会 備品 チェックリスト」。補助：「マラソン大会 フェンス レンタル」「マラソン大会 コーン」「マラソン大会 案内看板」。

「マラソン大会 準備」「持ち物」は出場者向けが混ざるため主対象にしない。主催者・実行委員会・運営会社をタイトルと冒頭で明示し、安全保安用品の手配に範囲を絞る。

実施検索：マラソン大会 安全用品 準備／マラソン大会 コース 規制 フェンス レンタル／マラソン大会 運営 備品 チェックリスト／マラソン大会 フェンス コーン 違い／マラソン大会 安全対策 用品 レンタル／引用符付きマラソン大会＋備品＋主催者、コーン＋フェンス＋レンタル。

観察：準備関連は出場者の持ち物PDF・記事が混在。レンタル関連は事業者の商品一覧やサービス紹介が多い。運営担当者向け設営ガイドの競合も存在する。独自性は、会場図の開口・横断場所、付属品、原稿の設置番号、納品地点と撤去担当までをつなぐ実務内容と、確認状況をコピーできるチェックリスト。

検索需要・KD・CPCの定量データやSearch Consoleにはアクセスしていない。「低競合」「必ず上位」とは断定しない。検索順位は地域・環境で異なり、今回の結果をGoogleの固定順位として扱わない。ニーズの具体性と相談先との適合性に基づく優先順位。

参考にした競合：
- https://d-ucom.co.jp/event/type/page/index.php?id=16 — 大会用品レンタル・設営のサービス案内。
- https://event.kasite.net/kstsys/cart/ShowCategoryList.do?category=040908 — 大会用品の商品一覧。
- https://www.kyoto-rentall.com/column/8994 — 設営準備・場所別備品の記事が検索結果に存在（本文取得不可。具体的な記述は根拠に使用しない）。
- https://www.kyoto-rentall.com/column/10007 — 整列用品の比較記事も検索結果に存在。大会規模だけでコーン・フェンスの適否を判断する記述は採用しない。
- https://www.tecnoplan.co.jp/tecrun/flow/index.html — 計測・運営全般の支援。この記事では用品手配に範囲を絞る。

## 掲載内容の根拠

https://gc-anzen.com/events/marathon をcurlで直接取得して本文を確認。検索ツールでは取得不可。
用品レンタル、特注看板、図面・数量未定からの相談、早朝設置・当日撤去の相談を確認。貸出対象・在庫・作業範囲は個別確認。価格、納期、契約条件、必ず対応可能という保証は創作しない。

画像はユーザーによる同サイト画像の利用許可に基づき取得。
- /images/events/scenes/marathon-course-crossing.webp
- /images/events/scenes/marathon-finish-exit.webp
- /images/catalog-spec/1105-0507-10.jpg
- /images/catalog/1491.jpg
- コーン写真は既存 safety-supplies-rental-guide/cone.jpg を再利用（同サイト由来）。
イラストを施工実績・設計図と見せない。主催者の警備・救護判断の代替にしない。

https://www.keishicho.metro.tokyo.lg.jp/tetsuzuki/kotsu/road_permission.html — 東京都の道路使用手続き。地域限定性を明示し、開催地の窓口で確認する。期限・手数料は転記しない。
https://himeji-marathon.jp/wp-content/uploads/2025/04/03-1_Article-reference.pdf — 大会公式のエリア別備品資料。整理方法の参考としてのみ言及。他大会へ数量を外挿しない。グリーンクロスの施工実績とも結び付けない。

## 回遊・計測

記事一覧・サイトマップ登録。安全用品レンタル記事、カラーコーン選び方記事から内部リンク。
本文の案内、用品解説後、看板の説明、手配の相談、まとめ、固定バーから送客先へ。配置別UTMを付与（source=sagyou_navi / medium=referral / campaign=marathon-event-safety-equipment）。
Vercelイベント marathon_outbound_click にarticleとplacementのみを送信。チェックリストの入力内容を送信しない。UTMの到達と実際の問い合わせ成立は別指標。
公開後、Search Consoleで主催者向けクエリの表示・クリック、送客先でUTM流入と相談件数を確認する。現時点では流入増加・順位向上・リード獲得の実績は未計測。
