"use client";

import { useId, useState } from "react";

export function ConsultationBrief({ template }: { template: string }) {
  const id = useId();
  const [value, setValue] = useState(template);
  const [status, setStatus] = useState("");
  return <div className="rental-template">
    <label htmlFor={id}>相談メモ（分かるところだけ編集できます）</label>
    <textarea id={id} value={value} rows={12} spellCheck={false} onChange={(event) => {
      setValue(event.target.value); setStatus("");
    }} />
    <div className="rental-template-actions">
      <button className="rental-button rental-button-dark" type="button" onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setStatus("コピーしました。相談先の入力欄やメールに貼り付けてお使いください。");
        } catch {
          setStatus("自動コピーできませんでした。入力欄の文章を選択してコピーしてください。");
        }
      }}>相談メモをコピー</button>
      <span role="status">{status}</span>
    </div>
    <p className="rental-note">この欄は下書き用です。入力内容は送信・保存されません。ページを離れる前にコピーしてください。</p>
  </div>;
}
