'use client'; 
import Link from "next/link";
import styles from "@/app/styles/staff.module.css";

export default function StaffPage() {
  return (
    <div className={styles["management-grid"]}>
      <div className={styles["list-area"]}>
        <h2>スタッフ一覧</h2>
        <table className={styles["staff-table"]}>
          <thead>
            <tr>
              <th>氏名 (職員番号)</th>
              <th>ロール/権限</th>
              <th>所属/部署</th>
              <th>連絡先 (内線)</th>
              <th>資格</th>
              <th>在籍期間</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => alert('佐藤 健太郎のスタッフ詳細画面へ遷移')}>
              <td>佐藤 健太郎 (ID001)</td>
              <td className={styles["status-admin"]}>管理者</td>
              <td>事務・管理</td>
              <td>内線 100</td>
              <td>社会福祉士</td>
              <td>3年6ヶ月</td>
            </tr>
            <tr onClick={() => alert('田中 花子のスタッフ詳細画面へ遷移')}>
              <td>田中 花子 (ID005)</td>
              <td className={styles["status-general"]}>一般スタッフ</td>
              <td>2階フロア</td>
              <td>内線 205</td>
              <td>介護福祉士</td>
              <td>1年1ヶ月</td>
            </tr>
            <tr onClick={() => alert('鈴木 大輔のスタッフ詳細画面へ遷移')}>
              <td>鈴木 大輔 (ID012)</td>
              <td className={styles["status-parttime"]}>パート</td>
              <td>1階フロア</td>
              <td>内線 112</td>
              <td>介護職員初任者研修</td>
              <td>6ヶ月</td>
            </tr>
            <tr onClick={() => alert('山田 恵のスタッフ詳細画面へ遷移')}>
              <td>山田 恵 (ID020)</td>
              <td className={styles["status-general"]}>一般スタッフ</td>
              <td>3階フロア</td>
              <td>内線 301</td>
              <td>看護師</td>
              <td>5年2ヶ月</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles["side-actions-area"]}>
        <div className={styles["action-box"]}>
          <h3>新規スタッフ</h3>
          <Link href="/staff/create" className={styles["new-register-button"]}>
            + 新規スタッフ登録
          </Link>
        </div>

        <div className={styles["action-box"]}>
          <h3>検索・絞り込み</h3>
          <form className={styles["search-form"]}>
            <input type="text" placeholder="氏名、職員番号で検索" />
            <select>
              <option value="">ロールで絞り込み</option>
              <option>管理者</option>
              <option>一般スタッフ</option>
              <option>パート</option>
            </select>
            <select>
              <option value="">所属部署で絞り込み</option>
              <option>2階フロア</option>
              <option>事務・管理</option>
            </select>
            <button
              type="submit"
              className={`${styles["new-register-button"]} ${styles["search-button"]}`}
            >
              検索
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
