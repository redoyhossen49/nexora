import { dashboardActivities, dashboardProjects } from "@/data/dashboard"
import { createContext, useContext, useState } from "react"

const DashboardContext=createContext(null)

export default function DashboardProvider({children}) {
    const [projects,setProjects]=useState(dashboardProjects)
    const [activities, setActivities] = useState(dashboardActivities);
  return (
    <DashboardContext.Provider
     value={{projects,setProjects,activities,setActivities}}
    >
        {children}
      
    </DashboardContext.Provider>
  )
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