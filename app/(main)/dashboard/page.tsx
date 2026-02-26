import styles from "@/app/styles/dashboard.module.css";
import { Alert, Task, ClientSummary, DashboardData } from "@/app/types/dashboard";

// サーバーサイドでデータ取得
async function getDashboardData(): Promise<DashboardData> {
  const res = await fetch("http://localhost:3000/api/dashboard", {
    cache: "no-store",
  });
  return res.json();
}

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <div className={styles["main-grid"]}>
      <div className={styles["alert-area"]}>
        <h3>🚨 緊急アラート（未対応）</h3>
        <ul className={styles["alert-list"]}>
          {data.alerts.map((alert) => (
            <li key={alert.id}>
              <span className={styles["alert-time"]}>{alert.time}</span>{" "}
              <strong>{alert.clientName}</strong> ({alert.room}):{" "}
              <strong>{alert.type}</strong>
              {alert.detail && ` (${alert.detail})`}
            </li>
          ))}
        </ul>

        <h3 className={styles["task-list-title"]}>🔔 本日の未完了タスク</h3>
        <ul className={styles["alert-list"]}>
          {data.tasks.map((task) => (
            <li key={task.id}>
              <span className={styles["alert-time"]}>{task.time}</span>{" "}
              {task.content}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles["summary-area"]}>
        <h3>担当利用者 記録サマリー（最新）</h3>
        <table className={styles["summary-table"]}>
          <thead>
            <tr>
              <th>氏名</th>
              <th>居室</th>
              <th>最新食事</th>
              <th>摂取量</th>
              <th>最新排泄</th>
              <th>性状/量</th>
              <th>特記事項</th>
            </tr>
          </thead>
          <tbody>
            {data.clientSummaries.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.room}</td>
                <td>{client.lastMeal}</td>
                <td className={styles["status-meal"]}>{client.mealAmount}</td>
                <td>{client.lastExcretion}</td>
                <td className={styles["status-excretion"]}>
                  {client.excretionDetail}
                </td>
                <td>{client.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}