export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>SmartCARE</h2>
        <div className="sidebar-menu">
          <a href="#" className="active">🏠 ダッシュボード</a>
          <a href="#">📝 記録入力</a>
          <a href="#">📸 見守りカメラ</a>
          <a href="#">🗓️ 記録履歴</a>
          <a href="#">🧑‍💻 利用者管理</a>
          <a href="#">👥 スタッフ管理</a>
          <a href="#">📊 レポート</a>
        </div>
      </div>

      <div className="main-content">
        <div className="header-bar">
          <h1>ダッシュボード</h1>
          <div className="user-profile">
            スタッフA | 権限: 記録可能 | <a href="#" style={{color: '#3f51b5'}}>ログアウト</a>
          </div>
        </div>

        <div className="main-grid">
          <div className="alert-area">
            <h3>🚨 緊急アラート（未対応）</h3>
            <ul className="alert-list">
              <li>
                <span className="alert-time">11:05</span> **山田 太郎** (201号室): **転倒検知**
              </li>
              <li>
                <span className="alert-time">10:45</span> **佐藤 花子** (305号室): **バイタル異常** (脈拍低下)
              </li>
            </ul>

            <h3 className="task-list-title">🔔 本日の未完了タスク</h3>
            <ul className="alert-list">
              <li>
                <span className="alert-time">11:30</span> 服薬確認 (田中様)
              </li>
              <li>
                <span className="alert-time">12:00</span> 昼食準備 (全体)
              </li>
            </ul>
          </div>

          <div className="summary-area">
            <h3>担当利用者 記録サマリー（最新）</h3>
            <table className="summary-table">
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
                <tr>
                  <td>山田 太郎</td>
                  <td>201</td>
                  <td>朝食 08:30</td>
                  <td className="status-meal">全量</td>
                  <td>便 10:00</td>
                  <td className="status-excretion">普通/多</td>
                  <td>なし</td>
                </tr>
                <tr>
                  <td>佐藤 花子</td>
                  <td>305</td>
                  <td>朝食 09:15</td>
                  <td className="status-meal">半分</td>
                  <td>尿 10:30</td>
                  <td className="status-excretion">淡黄/普</td>
                  <td>嚥下時にむせあり</td>
                </tr>
                <tr>
                  <td>田中 幸雄</td>
                  <td>102</td>
                  <td>間食 10:45</td>
                  <td className="status-meal">少量</td>
                  <td>-</td>
                  <td>-</td>
                  <td>なし</td>
                </tr>
                <tr>
                  <td>吉田 恵</td>
                  <td>410</td>
                  <td>朝食 08:00</td>
                  <td className="status-meal">拒否</td>
                  <td>便 08:45</td>
                  <td className="status-excretion">硬便/少</td>
                  <td>食欲不振、水分摂取促し</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  );
}