'use client'; 
import { useState } from 'react';
import styles from "@/app/styles/staff-create.module.css";

export default function StaffCreatePage() {
  return (
    <div className={styles.container}>
      <div className={styles["header-bar"]}>
        <h1>スタッフ 新規登録</h1>
        <p>システムにアクセスするための情報を入力してください。</p>
      </div>

      <div className={styles["content-section"]}>
        <h2>👤 基本情報</h2>
        <div className={styles["form-grid"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="name">氏名 *</label>
            <input type="text" id="name" required />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="id">スタッフID（システム自動採番）</label>
            <input type="text" id="id" defaultValue="登録後に確定" readOnly disabled />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="dept">所属部署 *</label>
            <select id="dept" required>
              <option value="">選択してください</option>
              <option>フロア担当</option>
              <option>夜勤専従</option>
              <option>事務・管理</option>
            </select>
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="join_date">入職日 *</label>
            <input type="date" id="join_date" required />
          </div>
          
          <div className={styles["form-group"]}>
            <label htmlFor="phone">内線/連絡先</label>
            <input type="tel" id="phone" placeholder="内線番号や携帯番号など" />
          </div>
        </div>
      </div>

      <div className={styles["content-section"]}>
        <h2>🛡️ システムアクセス・権限設定</h2>
        <div className={styles["form-grid"]}>
          <div className={`${styles["form-group"]} ${styles["form-full"]}`}>
            <label htmlFor="email">ログインメールアドレス *</label>
            <input type="email" id="email" required placeholder="ログインに使用するメールアドレス" />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="level">初期権限レベル *</label>
            <select id="level" required>
              <option value="">選択してください</option>
              <option>一般スタッフ (記録入力のみ)</option>
              <option>リーダー (記録閲覧/編集)</option>
              <option>管理者 (全権限)</option>
            </select>
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="active">アカウントステータス *</label>
            <select id="active" required defaultValue="有効">
              <option>有効</option>
              <option>停止中</option>
            </select>
          </div>
        </div>
      </div>
      
      <button className={styles["btn-register"]}>スタッフ情報を登録し、アカウントを作成</button>
    </div>
  );
}
