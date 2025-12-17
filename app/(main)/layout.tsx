import styles from "@/app/styles/main-layout.module.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles["dashboard-page"]}>
      <div className={styles["dashboard-container"]}>
        <div className={styles.sidebar}>
          <h2>SmartCARE</h2>
          <div className={styles["sidebar-menu"]}>
            <a href="#" className={styles.active}>
              🏠 ダッシュボード
            </a>
            <a href="#">📝 記録入力</a>
            <a href="#">📸 見守りカメラ</a>
            <a href="#">🗓️ 記録履歴</a>
            <a href="#">🧑‍💻 利用者管理</a>
            <a href="#">👥 スタッフ管理</a>
            <a href="#">📊 レポート</a>
          </div>
        </div>

        <div className={styles["main-content"]}>
          <div className={styles["header-bar"]}>
            <h1>ダッシュボード</h1>
            <div className={styles["user-profile"]}>
              スタッフA | 権限: 記録可能 |{" "}
              <a href="#" style={{ color: "#3f51b5" }}>
                ログアウト
              </a>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
