import type { DashboardData } from "@/app/types/dashboard";

export async function getDashboardData(): Promise<DashboardData> {
  const res = await fetch("http://localhost:3000/api/dashboard", {
    cache: "no-store",
  });
  return res.json();
}