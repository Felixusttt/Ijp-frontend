import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { RightSidebar } from '@/components/RightSidebar';
import { OpportunityGrid } from '@/components/OpportunityGrid';
import {
  currentUser,
  profileSummary,
  stats,
  opportunities,
  notifications,
  recentActivities,
} from '@/data/mockData';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-main">
      <Navbar user={currentUser} notifications={notifications} />
      
      <div className="flex">
        <Sidebar profile={profileSummary} />
        <OpportunityGrid opportunities={opportunities} />
        <RightSidebar stats={stats} activities={recentActivities} />
      </div>
    </div>
  );
}
