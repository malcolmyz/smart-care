'use client'; 
import { useState } from 'react';
import styles from "@/app/styles/meals.module.css";

export default function MealsPage() {
  const [intakeAmount, setIntakeAmount] = useState('full');

  const intakeOptions = [
    { value: 'full', label: '全量 (10割)' },
    { value: '9', label: '9割' },
    { value: '8', label: '8割' },
    { value: '7', label: '7割' },
    { value: 'half', label: '半分 (5割)' },
    { value: '3', label: '3割' },
    { value: 'small', label: '少量' },
    { value: 'refused', label: '拒否' },
  ];

  return (
    <div className={styles["record-grid"]}>
      <div className={styles["record-form-area"]}>
        <h2>新規食事記録</h2>
        <form id="meal-record-form">
          
          <div className={styles["form-group"]}>
            <label htmlFor="resident-select">利用者名</label>
            <select id="resident-select" required>
              <option value="">選択してください</option>
              <option value="yamada">山田 太郎 (201号室)</option>
              <option value="sato">佐藤 花子 (305号室)</option>
              <option value="tanaka">田中 幸雄 (102号室)</option>
              <option value="yoshida">吉田 恵 (410号室)</option>
            </select>
          </div>

          <div className={styles["input-inline"]}>
            <div className={styles["form-group"]}>
              <label htmlFor="record-date">日付</label>
              <input type="date" id="record-date" defaultValue="2025-12-04" required />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="record-time">時間</label>
              <input type="time" id="record-time" defaultValue="12:30" required />
            </div>
          </div>

          <div className={styles["input-inline"]}>
            <div className={styles["form-group"]}>
              <label htmlFor="meal-type">食事区分</label>
              <select id="meal-type" required>
                <option value="lunch">昼食</option>
                <option value="breakfast">朝食</option>
                <option value="dinner">夕食</option>
                <option value="snack">間食</option>
              </select>
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="meal-details">メニュー/種類</label>
              <input type="text" id="meal-details" placeholder="例: 常食、刻み食、お粥" required />
            </div>
          </div>
          
          <div className={styles["form-group"]}>
            <label>摂取量</label>
            <div className={styles["intake-buttons"]} id="intake-amount">
              {intakeOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={intakeAmount === option.value ? styles.active : ''}
                  onClick={() => setIntakeAmount(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <input type="hidden" id="intake-value" value={intakeAmount} />
          </div>
          
          <div className={styles["form-group"]}>
            <label htmlFor="hydration">水分摂取量 (お茶、水など)</label>
            <input type="text" id="hydration" placeholder="例: 200cc" />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="notes">備考・特記事項 (嚥下の状態、介助の状況など)</label>
            <textarea id="notes" rows={3} placeholder="例: 嚥下状態良好、見守りのみで完食"></textarea>
          </div>
          
          <div className={styles["submit-group"]}>
            <button type="submit">記録を保存</button>
          </div>
        </form>
      </div>

      <div className={styles["recent-records-area"]}>
        <h3>🍚 最新の食事記録 (過去5件)</h3>
        <table className={styles["recent-table"]}>
          <thead>
            <tr>
              <th>時間</th>
              <th>利用者</th>
              <th>区分</th>
              <th>摂取量</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>11:45</td>
              <td>山田 太郎</td>
              <td>間食</td>
              <td className={styles["intake-amount"]}>少量</td>
            </tr>
            <tr>
              <td>09:15</td>
              <td>佐藤 花子</td>
              <td>朝食</td>
              <td className={styles["intake-amount"]}>半分</td>
            </tr>
            <tr>
              <td>08:30</td>
              <td>田中 幸雄</td>
              <td>朝食</td>
              <td className={styles["intake-amount"]}>全量</td>
            </tr>
            <tr>
              <td>08:00</td>
              <td>吉田 恵</td>
              <td>朝食</td>
              <td className={styles["intake-amount"]}>拒否</td>
            </tr>
            <tr>
              <td>昨日 18:30</td>
              <td>山田 太郎</td>
              <td>夕食</td>
              <td className={styles["intake-amount"]}>9割</td>
            </tr>
          </tbody>
        </table>
        <p className={styles["record-note"]}>※履歴をクリックすると詳細を確認できます。</p>
      </div>
    </div>
  );
}
