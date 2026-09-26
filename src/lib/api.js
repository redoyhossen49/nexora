async function apiRequest(url, options = {}) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error("Something went wrong. Please try again.");
  }

  return response.json();
}

export function getProjects() {
  return apiRequest("/api/projects");
}

export function getActivities() {
  return apiRequest("/api/activities");
}

export function createProject(projectData) {
  return apiRequest("/api/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectData),
  });
}