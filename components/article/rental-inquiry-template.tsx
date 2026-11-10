"use client";

import { useState } from "react";

const TEMPLATE = `安全用品レンタルの相談をお願いします。
・用途／工事・イベントの内容：
・納品先住所／搬入場所：
・希望納品日／使用開始日：
・使用終了日／希望回収日：
・用品名・仕様・数量（未定の項目は「相談」）：
・コーンバー／重し／ベース／連結部材の要否：
・昼間／夜間、屋内／屋外、電源の有無：
・搬入車両・時間帯・荷下ろしの制限：
・設置・撤去の希望と担当：
・購入も比較したい品目：
・延長・破損・紛失時の条件も教えてください。
配送・回収・付属品を含む総額でのお見積もりを希望します。`;

export function RentalInquiryTemplate() {
  const [value, setValue] = useState(TEMPLATE);
  const [message, setMessage] = useState("");
  return (
    <div className="rental-template">
      <label htmlFor="rental-inquiry">見積もり相談用テンプレート（編集できます）</label>
      <textarea id="rental-inquiry" value={value} rows={15}
        onChange={(event) => { setValue(event.target.value); setMessage(""); }} />
      <div className="rental-template-actions">
        <button type="button" className="rental-button rental-button-dark" onClick={async () => {
          try {
            await navigator.clipboard.writeText(value);
            setMessage("コピーしました。相談先のフォームやメールに貼り付けてください。");
          } catch {
            setMessage("コピーできませんでした。入力欄の文章を選択してコピーしてください。");
          }
        }}>依頼文をコピーする</button>
        <span role="status" aria-live="polite">{message}</span>
      </div>
      <p className="rental-note">入力内容はこのページから送信・保存されません。ページを離れる前にコピーしてください。</p>
    </div>
  );
}
