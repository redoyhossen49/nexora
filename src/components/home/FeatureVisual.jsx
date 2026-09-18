import {
  CheckCircle2,
  Circle,
  Clock3,
  MessageCircle,
  Users,
} from "lucide-react";

const taskColumns = [
  {
    title: "To do",
    count: 3,
    tasks: ["Research competitors", "Create wireframes", "Write project brief"],
  },
  {
    title: "In progress",
    count: 2,
    tasks: ["Build homepage", "Review mobile flow"],
  },
  {
    title: "Done",
    count: 4,
    tasks: ["Project setup", "Design system", "User research", "Team planning"],
  },
];

function ProjectVisual({ project, team, progress, status }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-[var(--text-muted)]">
            PROJECT
          </p>

          <h4 className="mt-1 text-base font-semibold text-[var(--text-primary)]">
            {project}
          </h4>

          <p className="mt-1 text-xs text-[var(--text-secondary)]">
            {team}
          </p>
        </div>

        <span className="rounded-full bg-[var(--surface-muted)] px-2.5 py-1 text-xs font-medium text-[var(--primary)]">
          {status}
        </span>
      </div>

      <div className="mt-7">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-[var(--text-secondary)]">
            Project progress
          </span>

          <span className="text-xs font-semibold text-[var(--text-primary)]">
            {progress}%
          </span>
        </div>

        <div className="mt-2 h-2 overflow-hidden rounded-full bg-[var(--surface-muted)]">
          <div
            className="h-full rounded-full bg-[var(--primary)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-7 grid grid-cols-3 gap-3 border-t border-[var(--border)] pt-5">
        <div>
          <p className="text-xs text-[var(--text-muted)]">Tasks</p>
          <p className="mt-1 text-base font-semibold text-[var(--text-primary)]">
            24
          </p>
        </div>

        <div>
          <p className="text-xs text-[var(--text-muted)]">Completed</p>
          <p className="mt-1 text-base font-semibold text-[var(--text-primary)]">
            18
          </p>
        </div>

        <div>
          <p className="text-xs text-[var(--text-muted)]">Members</p>
          <p className="mt-1 text-base font-semibold text-[var(--text-primary)]">
            6
          </p>
        </div>
      </div>
    </div>
  );
}

function TasksVisual() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm sm:p-5">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
        <div>
          <p className="text-xs font-medium text-[var(--text-muted)]">
            TASK BOARD
          </p>

          <h4 className="mt-1 text-base font-semibold text-[var(--text-primary)]">
            Mobile App
          </h4>
        </div>

        <span className="text-xs text-[var(--text-secondary)]">
          9 tasks
        </span>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {taskColumns.map((column) => (
          <div
            key={column.title}
            className="rounded-xl bg-[var(--surface-muted)] p-3"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-[var(--text-primary)]">
                {column.title}
              </p>

              <span className="text-[11px] text-[var(--text-muted)]">
                {column.count}
              </span>
            </div>

            <div className="mt-3 space-y-2">
              {column.tasks.map((task) => (
                <div
                  key={task}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3"
                >
                  <p className="text-xs leading-5 text-[var(--text-secondary)]">
                    {task}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamVisual() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm sm:p-6">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">
        <div>
          <p className="text-xs font-medium text-[var(--text-muted)]">
            TEAM ACTIVITY
          </p>

          <h4 className="mt-1 text-base font-semibold text-[var(--text-primary)]">
            Marketing Campaign
          </h4>
        </div>

        <Users
          className="h-5 w-5 text-[var(--primary)]"
          aria-hidden="true"
        />
      </div>

      <div className="mt-5 space-y-5">
        <Activity
          icon={CheckCircle2}
          name="Sarah Chen"
          action="completed"
          target="Campaign brief"
          time="12 min ago"
        />

        <Activity
          icon={MessageCircle}
          name="Alex Morgan"
          action="commented on"
          target="Social media plan"
          time="38 min ago"
        />

        <Activity
          icon={Clock3}
          name="Maya Patel"
          action="updated"
          target="Launch deadline"
          time="1 hr ago"
        />
      </div>
    </div>
  );
}

function Activity({ icon: Icon, name, action, target, time }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-muted)]">
        <Icon
          className="h-4 w-4 text-[var(--primary)]"
          aria-hidden="true"
        />
      </div>

      <div className="min-w-0">
        <p className="text-sm leading-5 text-[var(--text-secondary)]">
          <span className="font-semibold text-[var(--text-primary)]">
            {name}
          </span>{" "}
          {action}{" "}
          <span className="font-medium text-[var(--text-primary)]">
            {target}
          </span>
        </p>

        <p className="mt-1 text-xs text-[var(--text-muted)]">
          {time}
        </p>
      </div>
    </div>
  );
}

function AnalyticsVisual({ progress }) {
  const bars = [42, 58, 51, 72, 64, 86, progress];

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm sm:p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-[var(--text-muted)]">
            PROJECT ANALYTICS
          </p>

          <h4 className="mt-1 text-base font-semibold text-[var(--text-primary)]">
            Product Launch
          </h4>
        </div>

        <div className="text-right">
          <p className="text-xs text-[var(--text-muted)]">
            Completion
          </p>

          <p className="mt-1 text-lg font-semibold text-[var(--primary)]">
            {progress}%
          </p>
        </div>
      </div>

      <div className="mt-8 flex h-40 items-end gap-2 border-b border-[var(--border)]">
        {bars.map((value, index) => (
          <div
            key={index}
            className="flex-1 rounded-t-md bg-[var(--primary)] opacity-80"
            style={{ height: `${value}%` }}
          />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div>
          <p className="text-xs text-[var(--text-muted)]">Completed</p>
          <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
            86
          </p>
        </div>

        <div>
          <p className="text-xs text-[var(--text-muted)]">In progress</p>
          <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
            18
          </p>
        </div>

        <div>
          <p className="text-xs text-[var(--text-muted)]">At risk</p>
          <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
            4
          </p>
        </div>
      </div>
    </div>
  );
}

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