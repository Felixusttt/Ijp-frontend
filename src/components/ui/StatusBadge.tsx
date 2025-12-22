import React from 'react';
import { Opportunity } from '../../types';
import { getStatusColor } from '../../utils/helpers';
 
interface StatusBadgeProps {
 opportunity: Opportunity;
}
 
const StatusBadge: React.FC<StatusBadgeProps> = ({ opportunity }) => {
 return (
   <span
     className={`px-3 py-1 rounded-md font-rubik ${getStatusColor(opportunity)}`}
     style={{ fontSize: '14px', lineHeight: '17px', letterSpacing: '0px' }}
   >
     {opportunity.status}
   </span>
 );
};
 
export default StatusBadge;
 
 
 
 