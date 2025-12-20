import { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import type { Opportunity } from '@/types';

interface OpportunityCardProps {
  opportunity: Opportunity;
}

function getStatusColor(status: Opportunity['status']): string {
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

function getStatusLabel(status: Opportunity['status']): string {
  if (!status) return '';
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const displayedSkills = opportunity.skills.slice(0, 2);
  const remainingSkills = opportunity.skills.length - 2;

  return (
    <div
      className={`rounded-lg p-5 cursor-pointer transition-all duration-300 ease-out ${
        isHovered ? 'bg-[#4A4A4A] shadow-card-hover' : 'bg-card shadow-card'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* SO ID */}
      <div className={`font-medium mb-3 ${isHovered ? 'text-white' : 'text-secondary'}`}>
        SO#{opportunity.soId}
      </div>

      {/* Title */}
      <h3 className={`text-base font-medium mb-1 ${isHovered ? 'text-white' : 'text-text-primary'}`}>
        {opportunity.title}
      </h3>

      {/* Band */}
      <div className={`text-sm mb-1 ${isHovered ? 'text-white/80' : 'text-text-muted'}`}>
        {opportunity.band}
      </div>

      {/* Location */}
      <div className={`flex items-center gap-1 text-sm mb-4 ${isHovered ? 'text-white/80' : 'text-text-muted'}`}>
        <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
        {opportunity.location}
      </div>

      {isHovered ? (
        <>
          {/* Description - Shown on Hover */}
          <p className="text-sm text-white/90 leading-relaxed mb-4">
            {opportunity.description}
          </p>

          {/* View in Detail Link - Shown on Hover */}
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-white hover:underline"
          >
            View in Detail
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </>
      ) : (
        <>
          {/* Status Badge */}
          {opportunity.status && (
            <div className="mb-4">
              <span className={`text-sm font-medium ${getStatusColor(opportunity.status)}`}>
                {getStatusLabel(opportunity.status)}
              </span>
            </div>
          )}

          {/* Skills */}
          <div className="flex items-center gap-2 flex-wrap">
            {displayedSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm rounded-full border border-border-light bg-card text-text-primary"
              >
                {skill}
              </span>
            ))}
            {remainingSkills > 0 && (
              <span className="px-3 py-1 text-sm rounded-full border border-border-light bg-card text-text-primary">
                +{remainingSkills}
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
}
