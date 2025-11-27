"use client";
// app/login/page.tsx
import { useState } from "react";

export default function LoginPage() {
  const [staffId, setStaffId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login-container">
      <div className="logo">
        <h1>SmartCARE</h1>
        <p>介護記録システム</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // 画面がリロードされるのを防ぐ
          console.log({ staffId, password });
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="スタッフID"
            value={staffId}
            onChange={(e) => setStaffId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">ログイン</button>
      </form>
      <div className="forgot-password">
          <a href="#">パスワードをお忘れですか？</a>
      </div>
    </div>
  );
}