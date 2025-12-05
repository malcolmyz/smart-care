"use client";
// app/login/page.tsx
import { useState } from "react";
import styles from "./login.module.css";

export default function LoginPage() {
  const [staffId, setStaffId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles["login-page"]}>
      <div className={styles["login-container"]}>
        <div className={styles.logo}>
          <h1>SmartCARE</h1>
          <p>介護記録システム</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // 画面がリロードされるのを防ぐ
            console.log({ staffId, password });
          }}
        >
          <div className={styles["form-group"]}>
            <input
              type="text"
              placeholder="スタッフID"
              value={staffId}
              onChange={(e) => setStaffId(e.target.value)}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <input
              type="password"
              placeholder="パスワード"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles["login-button"]}>ログイン</button>
        </form>
        <div className={styles["forgot-password"]}>
            <a href="#">パスワードをお忘れですか？</a>
        </div>
      </div>
    </div>
  );
}