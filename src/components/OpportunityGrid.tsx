import { useState } from 'react';
import { Grid3X3, List } from 'lucide-react';
import { OpportunityCard } from './OpportunityCard';
import type { Opportunity } from '@/types';
import excelIcon from '@/assets/excel-icon.png';

interface OpportunityGridProps {
  opportunities: Opportunity[];
}

export function OpportunityGrid({ opportunities }: OpportunityGridProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hideApplied, setHideApplied] = useState(false);

  return (
    <div className="flex flex-col py-6 px-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-text-primary">Recommended Opportunities</h2>

        <div className="flex items-center gap-4">
          {/* Hide Applied Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-muted">Hide Applied Jobs</span>
            <button
  onClick={() => setHideApplied(!hideApplied)}
  className={`relative w-16 h-6 rounded-full border-2 transition-colors flex items-center justify-center
    ${hideApplied ? 'bg-primary border-gray-800' : 'bg-white border-gray-400'}`}
>
  <span
    className={`absolute left-1 top-0.3 w-4 h-4 rounded-full bg-gray-400 transition-transform
      ${hideApplied ? 'translate-x-9' : 'translate-x-0'}`}
  />
  <span
    className={`text-xs font-semibold transition-colors
      ${hideApplied ? 'text-white' : 'text-gray-400'}`}
  >
    {hideApplied ? 'Yes' : 'No'}
  </span>
</button>
          </div>

          {/* Export Excel */}
          <button className="p-2 hover:bg-muted rounded transition-colors">
            <img src={excelIcon} alt="Export to Excel" className="w-5 h-5" />
          </button>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 border border-border-light rounded">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 transition-colors ${
                viewMode === 'grid' ? 'bg-muted' : 'hover:bg-muted'
              }`}
            >
              <Grid3X3 className="w-4 h-4 text-text-muted" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 transition-colors ${
                viewMode === 'list' ? 'bg-muted' : 'hover:bg-muted'
              }`}
            >
              <List className="w-4 h-4 text-text-muted" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-5">
        {opportunities.map((opportunity) => (
          <OpportunityCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </div>

    </div>
  );
}
