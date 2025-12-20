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
      className="relative rounded-lg p-5 cursor-pointer bg-card shadow-card overflow-hidden"
      style={{
        borderLeft: isHovered ? '4px solid #006E74' : '4px solid transparent',
        transition: 'border-left-color 300ms ease-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default State Content */}
      <div
        className="flex flex-col"
        style={{
          opacity: isHovered ? 0 : 1,
          visibility: isHovered ? 'hidden' : 'visible',
          transition: 'opacity 300ms ease-out, visibility 300ms ease-out',
          position: isHovered ? 'absolute' : 'relative',
          top: 0,
          left: 0,
          right: 0,
          padding: isHovered ? '20px' : 0
        }}
      >
        {/* SO ID - Default State */}
        <div className="text-secondary text-lg font-normal mb-4">
          SO#{opportunity.soId}
        </div>

        {/* Title */}
        <h3 className="text-base font-medium text-text-primary mb-1">
          {opportunity.title}
        </h3>

        {/* Band */}
        <div className="text-sm text-text-muted mb-1">
          {opportunity.band}
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-sm text-text-muted mb-4">
          <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
          {opportunity.location}
        </div>

        {/* Status Badge */}
        {opportunity.status && (
          <div className="mb-4">
            <span className={`text-sm font-normal ${getStatusColor(opportunity.status)}`}>
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
      </div>

      {/* Hover State Content */}
      <div
        className="flex flex-col"
        style={{
          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? 'visible' : 'hidden',
          transition: 'opacity 300ms ease-out, visibility 300ms ease-out',
          position: isHovered ? 'relative' : 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: isHovered ? 0 : '20px'
        }}
      >
        {/* SO ID - Hover State */}
        <div className="text-primary text-lg font-normal mb-4">
          SO#{opportunity.soId}
        </div>

        {/* Description - Shown on Hover */}
        <p className="text-sm text-text-primary leading-[22px] mb-4">
          {opportunity.description}
        </p>

        {/* View in Detail Link - Shown on Hover */}
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
        >
          View in Detail
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
