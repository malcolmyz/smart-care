'use client'; 
import { useState } from 'react';
import styles from "@/app/styles/staff-detail.module.css";

export default function StaffDetailPage() {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: '田中 健太',
    id: 'STAFF005',
    dept: 'フロア担当',
    joinDate: '2020-09-01',
    email: 'tanaka@careconnect.jp',
    phone: '内線305',
    level: '管理者 (全権限)',
    active: '有効',
  });

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    alert('編集をキャンセルしました。元の状態に戻ります。');
    setIsEditing(false);
  };

  const handleSave = () => {
    alert('変更を保存しました。');
    setIsEditing(false);
  };

  const handleResetPassword = () => {
    alert('パスワードリセットメールを送信しました。');
  };

  const inputStyle = {
    backgroundColor: isEditing ? '#fff' : '#f9f9f9',
  };

  return (
    <div className={styles.container}>
      <div className={styles["header-bar"]}>
        <h1>スタッフ情報: {formData.name}</h1>
        <div className={styles["action-buttons"]}>
          <button className={styles["btn-reset-pass"]} onClick={handleResetPassword}>
            🔑 パスワードリセット
          </button>
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
        <h2>🧑‍💻 基本情報</h2>
        <div className={styles["form-grid"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="name">氏名</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              readOnly={!isEditing}
              style={inputStyle}
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="id">スタッフID</label>
            <input
              type="text"
              id="id"
              value={formData.id}
              readOnly
              style={{ backgroundColor: '#f9f9f9' }}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="dept">所属部署</label>
            <select
              id="dept"
              value={formData.dept}
              onChange={(e) => setFormData({ ...formData, dept: e.target.value })}
              disabled={!isEditing}
              style={inputStyle}
            >
              <option>フロア担当</option>
              <option>夜勤専従</option>
            </select>
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="join_date">入職日</label>
            <input
              type="date"
              id="join_date"
              value={formData.joinDate}
              onChange={(e) => setFormData({ ...formData, joinDate: e.target.value })}
              readOnly={!isEditing}
              style={inputStyle}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="email">ログインメールアドレス</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              readOnly={!isEditing}
              style={inputStyle}
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="phone">内線/連絡先</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              readOnly={!isEditing}
              style={inputStyle}
            />
          </div>
        </div>
      </div>

      <div className={styles["content-section"]}>
        <h2>🛡️ 権限設定</h2>
        <div className={styles["form-grid"]}>
          <div className={styles["form-group"]}>
            <label>現在の権限</label>
            <div className={styles["permission-display"]}>管理者 (ADMIN)</div>
          </div>
          <div className={styles["form-group"]}>
            <label>アカウントステータス</label>
            <div className={styles["permission-display"]} style={{ color: '#5cb85c' }}>
              有効
            </div>
          </div>

          <div className={`${styles["form-group"]} ${styles["form-full"]}`}>
            <label htmlFor="level">権限レベルの変更</label>
            <select
              id="level"
              value={formData.level}
              onChange={(e) => setFormData({ ...formData, level: e.target.value })}
              disabled={!isEditing}
              style={inputStyle}
            >
              <option>一般スタッフ (記録入力のみ)</option>
              <option>リーダー (記録閲覧/編集)</option>
              <option>管理者 (全権限)</option>
            </select>
          </div>
          <div className={`${styles["form-group"]} ${styles["form-full"]}`}>
            <label htmlFor="active">アカウントの有効/無効</label>
            <select
              id="active"
              value={formData.active}
              onChange={(e) => setFormData({ ...formData, active: e.target.value })}
              disabled={!isEditing}
              style={inputStyle}
            >
              <option>有効</option>
              <option>停止中（退職・休職時）</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}