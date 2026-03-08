// データの型定義
export type Alert = {
  id: number;
  time: string;
  clientName: string;
  room: string;
  type: string;
  detail?: string;
};

export type Task = {
  id: number;
  time: string;
  content: string;
};

export type ClientSummary = {
  id: number;
  name: string;
  room: string;
  lastMeal: string;
  mealAmount: string;
  lastExcretion: string;
  excretionDetail: string;
  notes: string;
};

export type DashboardData = {
  alerts: Alert[];
  tasks: Task[];
  clientSummaries: ClientSummary[];
};