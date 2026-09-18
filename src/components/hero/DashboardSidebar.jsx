import {
  BarChart3,
  CalendarDays,
  CheckSquare,
  FolderKanban,
  LayoutDashboard,
  MessageCircle,
  Settings,
  Users,
  Files,
} from "lucide-react";

const mainNavigation = [
  {
    label: "Overview",
    icon: LayoutDashboard,
  },
  {
    label: "Projects",
    icon: FolderKanban,
  },
  {
    label: "Tasks",
    icon: CheckSquare,
  },
  {
    label: "Calendar",
    icon: CalendarDays,
  },
  {
    label: "Team",
    icon: Users,
  },
  {
    label: "Messages",
    icon: MessageCircle,
  },
  {
    label: "Analytics",
    icon: BarChart3,
  },
  {
    label: "Files",
    icon: Files,
  },
];

export default function DashboardSidebar() {
  return (
    <aside className="hidden w-52 shrink-0 border-r border-[var(--border)] bg-[var(--surface)] lg:block">
      <div className="flex h-full flex-col p-3">
        {/* Workspace */}
        <div className="mb-5 px-2">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Workspace
          </p>
        </div>

        {/* Main navigation */}
        <nav aria-label="Workspace navigation">
          <ul className="space-y-1">
            {mainNavigation.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === 0;

              return (
                <li key={item.label}>
                  <div
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-[var(--surface-muted)] text-[var(--primary)]"
                        : "text-[var(--text-secondary)]"
                    }`}
                  >
                    <Icon
                      className="h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />

                    <span>{item.label}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom */}
        <div className="mt-auto border-t border-[var(--border)] pt-3">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-[var(--text-secondary)]">
            <Settings
              className="h-4 w-4 shrink-0"
              aria-hidden="true"
            />

            <span>Settings</span>
          </div>
        </div>
      </div>
    </aside>
  );
}