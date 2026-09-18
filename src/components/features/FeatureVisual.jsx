import ProjectVisual from "./visuals/ProjectVisual";
import TasksVisual from "./visuals/TasksVisual";
import TeamVisual from "./visuals/TeamVisual";
import AnalyticsVisual from "./visuals/AnalyticsVisual";

export default function FeatureVisual({
  type,
  project,
  team,
  progress,
  status,
}) {
  if (type === "project") {
    return (
      <ProjectVisual
        project={project}
        team={team}
        progress={progress}
        status={status}
      />
    );
  }

  if (type === "tasks") {
    return <TasksVisual />;
  }

  if (type === "team") {
    return <TeamVisual />;
  }

  if (type === "analytics") {
    return <AnalyticsVisual progress={progress} />;
  }

  return null;
}