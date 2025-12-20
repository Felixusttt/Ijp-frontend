import type { Stats, Activity } from '@/types';

interface RightSidebarProps {
  stats: Stats;
  activities: Activity[];
}

function getStatusColor(status: Activity['status']): string {
  switch (status) {
    case 'shortlisted':
      return 'text-success';
    case 'actioned':
      return 'text-warning';
    case 'rejected':
      return 'text-danger';
    default:
      return 'text-text-muted';
  }
}

function getStatusLabel(status: Activity['status']): string {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export function RightSidebar({ stats, activities }: RightSidebarProps) {
  return (
    <aside className="w-[260px] flex-shrink-0 pt-6 pr-6 pl-4">
      {/* Stats */}
      <div className="flex items-center justify-between mb-8">
        <div className="text-center">
          <div className="text-2xl font-semibold text-text-primary">{stats.applied}</div>
          <div className="text-sm text-text-muted">Applied</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-secondary">{stats.shortlisted}</div>
          <div className="text-sm text-text-muted">Shortlisted</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-danger">{stats.rejected}</div>
          <div className="text-sm text-text-muted">Rejected</div>
        </div>
      </div>

      {/* Recent Activities */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-medium text-text-primary">Recent Activities</h3>
          <button className="text-sm text-secondary hover:underline">View All</button>
        </div>

        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-text-primary leading-relaxed">
                  Applied job "{activity.title} ({activity.soId})"
                </p>
                <div className="flex items-center justify-between mt-1">
                  <span className={`text-sm font-medium ${getStatusColor(activity.status)}`}>
                    {getStatusLabel(activity.status)}
                  </span>
                  <span className="text-xs text-text-muted">{activity.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
