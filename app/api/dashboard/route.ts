import { NextResponse } from "next/server";

export async function GET() {
  const dashboardData = {
    // 緊急アラート
    alerts: [
      {
        id: 1,
        time: "11:05",
        clientName: "山田 太郎",
        room: "201号室",
        type: "転倒検知",
      },
      {
        id: 2,
        time: "10:45",
        clientName: "佐藤 花子",
        room: "305号室",
        type: "バイタル異常",
        detail: "脈拍低下",
      },
    ],
    // 未完了タスク
    tasks: [
      { id: 1, time: "11:30", content: "服薬確認 (田中様)" },
      { id: 2, time: "12:00", content: "昼食準備 (全体)" },
    ],
    // 利用者サマリー
    clientSummaries: [
      {
        id: 1,
        name: "山田 太郎",
        room: "201",
        lastMeal: "朝食 08:30",
        mealAmount: "全量",
        lastExcretion: "便 10:00",
        excretionDetail: "普通/多",
        notes: "なし",
      },
      {
        id: 2,
        name: "佐藤 花子",
        room: "305",
        lastMeal: "朝食 09:15",
        mealAmount: "半分",
        lastExcretion: "尿 10:30",
        excretionDetail: "淡黄/普",
        notes: "嚥下時にむせあり",
      },
      {
        id: 3,
        name: "田中 幸雄",
        room: "102",
        lastMeal: "間食 10:45",
        mealAmount: "少量",
        lastExcretion: "-",
        excretionDetail: "-",
        notes: "なし",
      },
      {
        id: 4,
        name: "吉田 恵",
        room: "410",
        lastMeal: "朝食 08:00",
        mealAmount: "拒否",
        lastExcretion: "便 08:45",
        excretionDetail: "硬便/少",
        notes: "食欲不振、水分摂取促し",
      },
    ],
  };

  return NextResponse.json(dashboardData);
}
