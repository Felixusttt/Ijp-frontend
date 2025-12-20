import { ArrowRight, User } from 'lucide-react';
import type { ProfileSummary } from '@/types';

interface SidebarProps {
  profile: ProfileSummary;
}

export function Sidebar({ profile }: SidebarProps) {
  return (
    <aside className="w-[280px] flex-shrink-0 pt-6 pl-6 pr-4">
      {/* Profile Summary */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-text-muted mb-3">Profile Summary</h3>
        <p className="text-sm text-text-primary leading-relaxed">
          {profile.description}
        </p>
      </div>

      {/* Primary Skills */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-text-muted mb-3">Primary Skills</h3>
        <div className="flex flex-wrap gap-2">
          {profile.primarySkills.map((skill) => (
            <span key={skill} className="skill-chip-primary">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Resume Card */}
      <div className="bg-card rounded-lg p-4 shadow-card flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <User className="w-5 h-5 text-card" strokeWidth={1.5} />
          </div>
          <div>
            <div className="text-sm font-medium text-text-primary">Resume</div>
            <div className="text-xs text-text-muted">Updated : {profile.resumeUpdated}</div>
          </div>
        </div>
        <button className="p-2 hover:bg-muted rounded-full transition-colors">
          <ArrowRight className="w-4 h-4 text-primary" />
        </button>
      </div>
    </aside>
  );
}
