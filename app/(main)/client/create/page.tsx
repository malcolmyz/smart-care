'use client'; 
import styles from "@/app/styles/client-create.module.css";

export default function ClientCreatePage() {
  return (
    <div className={styles.container}>
      <div className={styles["header-bar"]}>
        <h1>利用者 新規登録</h1>
        <p>必須項目（*）を入力後、登録ボタンを押してください。</p>
      </div>

      <div className={styles["content-section"]}>
        <h2>🏠 基本情報</h2>
        <div className={styles["form-grid"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="name">氏名 *</label>
            <input type="text" id="name" required />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="room">居室番号 *</label>
            <input type="text" id="room" required />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="birth">生年月日 *</label>
            <input type="date" id="birth" required />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="id">利用者ID（システム自動採番）</label>
            <input type="text" id="id" defaultValue="登録後に確定" readOnly disabled />
          </div>
        </div>
      </div>

      <div className={styles["content-section"]}>
        <h2>⚠️ ケア上の重要設定</h2>
        <div className={styles["form-grid"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="meal_type">食事形態 *</label>
            <select id="meal_type" required>
              <option value="">選択してください</option>
              <option>常食</option>
              <option>刻み食</option>
              <option>ミキサー食</option>
            </select>
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="swallow">嚥下状態 *</label>
            <select id="swallow" required>
              <option value="">選択してください</option>
              <option>良好</option>
              <option>時間かかる</option>
              <option>むせやすい</option>
            </select>
          </div>
          
          <div className={`${styles["form-group"]} ${styles["form-full"]}`}>
            <label htmlFor="contact">緊急連絡先 *</label>
            <input type="tel" id="contact" placeholder="例: 090-xxxx-xxxx (続柄)" required />
          </div>

          <div className={`${styles["form-group"]} ${styles["form-full"]}`}>
            <label htmlFor="notes">特記事項・アレルギー</label>
            <textarea id="notes" placeholder="アレルギー、特記事項、リスク情報などを入力してください。"></textarea>
          </div>
        </div>
      </div>
      
      <button className={styles["btn-register"]}>利用者情報を登録する</button>
    </div>
  );
}
