import { dashboardActivities } from "@/data/dashboard";


export async function GET() {
  return Response.json(dashboardActivities);
}