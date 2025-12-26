import styles from "@/app/styles/under-construction.module.css";
import Link from "next/link";

export default function UnderConstructionPage() {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <div className={styles["icon"]}>🚧</div>
        <h1 className={styles["title"]}>ただいま開発中です</h1>
        <p className={styles["description"]}>
          このページは現在準備中です。
          <br />
          もうしばらくお待ちください。
        </p>
        <Link href="/dashboard" className={styles["back-button"]}>
          ダッシュボードに戻る
        </Link>
      </div>
    </div>
  );
}
