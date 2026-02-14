'use client'; 
import { useState } from 'react';
import styles from "@/app/styles/client-detail.module.css";

export default function ClientDetailPage() {
  const [isEditing, setIsEditing] = useState(false);

  // フォームデータの状態管理
  const [formData, setFormData] = useState({
    name: '山田 太郎',
    room: '201号室',
    id: '1001',
    birth: '1940-05-15',
    contact: '090-xxxx-xxxx (長女 花子)',
    mealType: 'ミキサー食',
    swallow: '時間かかる',
    notes: 'エビ・カニ アレルギーあり。インスリン投与（朝食前）。右麻痺あり。',
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    alert('編集をキャンセルしました。元の状態に戻ります。');
    setIsEditing(false);
  };

  const handleSave = () => {
    alert('変更を保存しました。');
    setIsEditing(false);
  };

  const fieldClassName = isEditing ? styles.editableField : styles.readonlyField;

  return (
    <div className={styles.container}>
      <div className={styles["header-bar"]}>
        <h1>利用者情報: {formData.name} 様</h1>
        <div className={styles["action-buttons"]}>
          {!isEditing && (
            <button className={styles["btn-edit"]} onClick={handleEdit}>
              🖊️ 編集する
            </button>
          )}
          {isEditing && (
            <>
              <button className={styles["btn-cancel"]} onClick={handleCancel}>
                ✖ キャンセル
              </button>
              <button className={styles["btn-save"]} onClick={handleSave}>
                💾 変更を保存
              </button>
            </>
          )}
        </div>
      </div>

      <div className={styles["content-section"]}>
        <h2>🏠 基本情報</h2>
        <div className={styles["form-grid"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="name">氏名</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              readOnly={!isEditing}
              className={fieldClassName}
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="room">居室番号</label>
            <input
              type="text"
              id="room"
              value={formData.room}
              onChange={(e) => setFormData({ ...formData, room: e.target.value })}
              readOnly={!isEditing}
              className={fieldClassName}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="id">利用者ID</label>
            <input
              type="text"
              id="id"
              value={formData.id}
              readOnly
              className={styles.readonlyField}
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="birth">生年月日</label>
            <input
              type="date"
              id="birth"
              value={formData.birth}
              onChange={(e) => setFormData({ ...formData, birth: e.target.value })}
              readOnly={!isEditing}
              className={fieldClassName}
            />
          </div>

          <div className={`${styles["form-group"]} ${styles["form-full"]}`}>
            <label htmlFor="contact">緊急連絡先</label>
            <input
              type="tel"
              id="contact"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              readOnly={!isEditing}
              className={fieldClassName}
            />
          </div>
        </div>
      </div>

      <div className={styles["content-section"]}>
        <h2>⚠️ ケア上の重要設定</h2>
        <div className={styles["form-grid"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="meal_type">食事形態</label>
            <select
              id="meal_type"
              value={formData.mealType}
              onChange={(e) => setFormData({ ...formData, mealType: e.target.value })}
              disabled={!isEditing}
              className={fieldClassName}
            >
              <option>常食</option>
              <option>刻み食</option>
              <option>ミキサー食</option>
            </select>
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="swallow">嚥下状態</label>
            <select
              id="swallow"
              value={formData.swallow}
              onChange={(e) => setFormData({ ...formData, swallow: e.target.value })}
              disabled={!isEditing}
              className={fieldClassName}
            >
              <option>良好</option>
              <option>時間かかる</option>
              <option>むせやすい</option>
            </select>
          </div>

          <div className={`${styles["form-group"]} ${styles["form-full"]}`}>
            <label htmlFor="notes">特記事項・アレルギー（必ず確認）</label>
            <textarea
              id="notes"
              placeholder="アレルギー、特記事項など..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              readOnly={!isEditing}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
