"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getProjects,
  getActivities,
  createProject as createProjectRequest,
} from "@/lib/api";

const DashboardContext = createContext(null);

const initialState = {
  projects: [],
  activities: [],
  loading: true,
  error: null,
};

export default function DashboardProvider({ children }) {
  const [state, setState] = useState(initialState);

  async function loadDashboardData() {
    try {
      setState((current) => ({
        ...current,
        loading: true,
        error: null,
      }));

      const [projects, activities] = await Promise.all([
        getProjects(),
        getActivities(),
      ]);

      setState({
        projects,
        activities,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState((current) => ({
        ...current,
        loading: false,
        error: error.message,
      }));
    }
  }

  async function createProject(projectData) {
    const newProject = await createProjectRequest(projectData);

    setState((current) => ({
      ...current,
      projects: [...current.projects, newProject],
    }));

    return newProject;
  }

  useEffect(() => {
    loadDashboardData();
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        projects: state.projects,
        activities: state.activities,
        loading: state.loading,
        error: state.error,
        createProject,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error(
      "useDashboard must be used inside DashboardProvider"
    );
  }

  return context;
}