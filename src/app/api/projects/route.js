import { dashboardProjects } from "@/data/dashboard";

export async function GET() {
  return Response.json(dashboardProjects);
}

export async function POST(request) {
  const projectData = await request.json();

  const newProject = {
    ...projectData,
    progress: 0,
    status: "Not started",
    tasks: 0,
    completedTasks: 0,
  };

  return Response.json(newProject, {
    status: 201,
  });
}