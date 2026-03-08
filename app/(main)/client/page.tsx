'use client'; 
import styles from "@/app/styles/client.module.css";
import Link from "next/link";
export default function ClientPage() {
  return (
    <div className={styles["management-grid"]}>
      <div className={styles["list-area"]}>
        <h2>利用者一覧</h2>
        <table className={styles["resident-table"]}>
          <thead>
            <tr>
              <th>氏名 (居室)</th>
              <th>要介護度</th>
              <th>主担当</th>
              <th>特記事項</th>
              <th>最新バイタル</th>
              <th>入居日</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => alert('山田 太郎 様の詳細画面へ遷移')}>
              <td>山田 太郎 (201)</td>
              <td>要介護3</td>
              <td>佐藤</td>
              <td className={styles["status-alert"]}>🚨 誤嚥リスクあり</td>
              <td className={styles["status-normal"]}>体温 36.5℃</td>
              <td>2022/04/01</td>
            </tr>
            <tr onClick={() => alert('佐藤 花子 様の詳細画面へ遷移')}>
              <td>佐藤 花子 (305)</td>
              <td>要介護5</td>
              <td>田中</td>
              <td className={styles["status-caution"]}>💊 薬剤アレルギー</td>
              <td className={styles["status-alert"]}>血圧 145/95</td>
              <td>2023/11/20</td>
            </tr>
            <tr onClick={() => alert('田中 幸雄 様の詳細画面へ遷移')}>
              <td>田中 幸雄 (102)</td>
              <td>要介護2</td>
              <td>鈴木</td>
              <td>嚥下状態良好</td>
              <td className={styles["status-normal"]}>脈拍 78</td>
              <td>2024/05/15</td>
            </tr>
            <tr onClick={() => alert('吉田 恵 様の詳細画面へ遷移')}>
              <td>吉田 恵 (410)</td>
              <td>要支援2</td>
              <td>佐藤</td>
              <td>特になし</td>
              <td className={styles["status-normal"]}>SpO2 98%</td>
              <td>2025/01/05</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles["side-actions-area"]}>
        <div className={styles["action-box"]}>
          <h3>新規登録</h3>
          <Link href="/client/register" className={styles["new-register-button"]}>
            + 新規利用者登録
          </Link>
        </div>

        <div className={styles["action-box"]}>
          <h3>検索・絞り込み</h3>
          <form className={styles["search-form"]}>
            <input type="text" placeholder="氏名、居室番号で検索" />
            <select>
              <option value="">要介護度で絞り込み</option>
              <option>要介護1</option>
              <option>要介護3</option>
            </select>
            <select>
              <option value="">担当スタッフで絞り込み</option>
              <option>佐藤</option>
              <option>田中</option>
            </select>
            <button 
              type="submit" 
              className={styles["new-register-button"]} 
              style={{ backgroundColor: '#3f51b5', marginTop: '10px' }}
            >
              検索
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
