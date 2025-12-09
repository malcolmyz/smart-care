'use client'; 
import Link from "next/link";
import styles from "@/app/styles/records.module.css";

export default function RecordsPage() {
  return (
    <div id="content-area">
      <div className={styles["input-menu-grid"]}>
        
        <Link href="/records/meals" className={`${styles["input-menu-card"]} ${styles["card-meal"]}`}>
          <span className={styles.icon}>🍚</span>
          <h2>食事記録</h2>
          <p>利用者様の食事・水分摂取量を記録します。</p>
        </Link>

        <Link href="/records/excretion"
          className={`${styles["input-menu-card"]} ${styles["card-excretion"]}`}
        >
          <span className={styles.icon}>🚽</span>
          <h2>排泄記録</h2>
          <p>排泄（便/尿）の時間、回数、性状などを記録します。</p>
        </Link>

        <div
          className={`${styles["input-menu-card"]} ${styles["card-vital"]}`}
          onClick={() => alert('バイタル記録画面へ遷移')}
        >
          <span className={styles.icon}>🌡️</span>
          <h2>バイタル記録</h2>
          <p>体温、血圧、脈拍、SpO2などの記録を行います。</p>
        </div>
        <div
          className={`${styles["input-menu-card"]} ${styles["card-other"]}`}
          onClick={() => alert('その他記録画面へ遷移')}
        >
          <span className={styles.icon}>✍️</span>
          <h2>その他記録</h2>
          <p>巡視、体位変換、特記事項など、その他の記録を行います。</p>
        </div>
      </div>
    </div>
  );
}
