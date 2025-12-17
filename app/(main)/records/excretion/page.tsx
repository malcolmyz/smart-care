'use client'; 
import { useState } from 'react';
import styles from "@/app/styles/excretion.module.css";

export default function RecordsExcretionPage() {
  const [excretionType, setExcretionType] = useState('stool');
  const [excretionCondition, setExcretionCondition] = useState('amount-normal');

  const typeOptions = [
    { value: 'stool', label: '便', className: styles["status-excretion-stool"] },
    { value: 'urine', label: '尿', className: styles["status-excretion-urine"] },
    { value: 'vomit', label: '嘔吐', className: '' },
    { value: 'other', label: 'その他', className: '' },
  ];

  const conditionOptions = [
    { value: 'normal', label: '普通' },
    { value: 'soft', label: '軟便' },
    { value: 'hard', label: '硬便' },
    { value: 'diarrhea', label: '泥状/水様' },
    { value: 'amount-small', label: '少量' },
    { value: 'amount-normal', label: '普通量' },
    { value: 'amount-large', label: '多量' },
  ];

  return (
    <div className={styles["record-grid"]}>
      <div className={styles["record-form-area"]}>
        <h2>新規排泄記録</h2>
        <form id="excretion-record-form">
          
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
              <input type="time" id="record-time" defaultValue="13:00" required />
            </div>
          </div>

          <div className={styles["form-group"]}>
            <label>排泄の種類</label>
            <div className={styles["selection-buttons"]} id="excretion-type">
              {typeOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`${excretionType === option.value ? styles.active : ''} ${option.className}`}
                  onClick={() => setExcretionType(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <input type="hidden" id="type-value" value={excretionType} />
          </div>

          <div className={styles["form-group"]}>
            <label>性状</label>
            <div className={styles["selection-buttons"]} id="excretion-condition">
              {conditionOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={excretionCondition === option.value ? styles.active : ''}
                  onClick={() => setExcretionCondition(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <input type="hidden" id="condition-value" value={excretionCondition} />
          </div>
          
          <div className={styles["form-group"]}>
            <label htmlFor="assistance-type">排泄方法・介助</label>
            <select id="assistance-type" required>
              <option value="toilet">トイレ誘導</option>
              <option value="potty">ポータブルトイレ</option>
              <option value="diaper">おむつ交換</option>
              <option value="urinal">尿器使用</option>
              <option value="self">自立</option>
              <option value="full-assist">全介助</option>
            </select>
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="notes">備考・特記事項 (機嫌、量、色、臭いなど)</label>
            <textarea id="notes" rows={3} placeholder="例: 便器への移動は自立。臭い強め。"></textarea>
          </div>
          
          <div className={styles["submit-group"]}>
            <button type="submit">記録を保存</button>
          </div>
        </form>
      </div>

      <div className={styles["recent-records-area"]}>
        <h3>🚽 最新の排泄記録 (過去5件)</h3>
        <table className={styles["recent-table"]}>
          <thead>
            <tr>
              <th>時間</th>
              <th>利用者</th>
              <th>種類</th>
              <th>性状</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>13:00</td>
              <td>田中 幸雄</td>
              <td className={styles["status-excretion-stool"]}>便</td>
              <td className={styles["excretion-status"]}>硬便/少量</td>
            </tr>
            <tr>
              <td>10:30</td>
              <td>佐藤 花子</td>
              <td className={styles["status-excretion-urine"]}>尿</td>
              <td className={styles["excretion-status"]}>普通量</td>
            </tr>
            <tr>
              <td>10:00</td>
              <td>山田 太郎</td>
              <td className={styles["status-excretion-stool"]}>便</td>
              <td className={styles["excretion-status"]}>普通/多量</td>
            </tr>
            <tr>
              <td>08:45</td>
              <td>吉田 恵</td>
              <td className={styles["status-excretion-stool"]}>便</td>
              <td className={styles["excretion-status"]}>硬便/少量</td>
            </tr>
            <tr>
              <td>07:30</td>
              <td>佐藤 花子</td>
              <td className={styles["status-excretion-urine"]}>尿</td>
              <td className={styles["excretion-status"]}>自立/普通</td>
            </tr>
          </tbody>
        </table>
        <p className={styles["record-note"]}>※履歴をクリックすると詳細を確認できます。</p>
      </div>
    </div>
  );
}
