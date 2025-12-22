import type { Stats, Activity } from '@/types';
import { getStatusColor, getStatusColorActivity } from '@/utils/helpers';

interface RightSidebarProps {
  stats: Stats;
  activities: Activity[];
}



function getStatusLabel(status: Activity['status']): string {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export function RightSidebar({ stats, activities }: RightSidebarProps) {
  return (
    <aside className="w-[260px] flex-shrink-0 pt-6 pr-6 pl-4">
      {/* Stats */}
      <div className="w-[360px] h-[110px] bg-white relative rounded-lg p-5 cursor-pointer shadow-lg overflow-hidden flex justify-around mb-10">
        <div className="text-center">
          <div className="text-2xl font-semibold text-text-primary">{stats.applied}</div>
          <div className="text-sm text-text-muted">Applied</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-secondary " style={{ color: "#01B27C" }}>{stats.shortlisted}</div>
          <div className="text-sm text-text-muted">Shortlisted</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-danger" style={{color:'#FC6A59'}}>{stats.rejected}</div>
          <div className="text-sm text-text-muted">Rejected</div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className='w-[360px] h-[450px] bg-white relative rounded-lg  cursor-pointer shadow-lg overflow-hidden'>
        <div className="flex items-center justify-between pt-5 pl-5 pr-5 mb-4">
          <h3 className="text-base font-medium text-text-primary">Recent Activities</h3>
          <button className="text-sm text-secondary hover:underline">View All</button>
        </div>
        <hr />
        <div className="space-y-4 pb-5 pl-5 pr-5 mt-[53px]">
          {activities.map((activities) => (
            <div key={activities.id} className="flex items-start gap-2 ">
              <div className="leftDot w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0 ml[30px] mr-[10px]" />
              <div className="flex-1 w-[278px] h-[84px] mr-[30px]">
                <p className="font-normal text-base leading-6 font-[Rubik] text-text-primary">
                  Applied job{" "}
                  <span className="font-semibold">
                    "{activities.title} ({activities.soId})"
                  </span>
                </p>


                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium border-none rounded-md p-1 ${getStatusColorActivity(activities)}`}>
                    {getStatusLabel(activities.status)}
                  </span>
                  <span className="text-xs text-text-muted">{activities.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
