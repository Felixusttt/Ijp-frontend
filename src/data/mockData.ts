import type { User, Opportunity, Notification, Activity, ProfileSummary, Stats } from '@/types';

export const currentUser: User = {
  id: '1',
  name: 'Sarah Anderson',
  role: 'Lead Developer',
  avatar: '/assets/user-avatar.png',
};

export const profileSummary: ProfileSummary = {
  description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.',
  primarySkills: ['Visual Basic', 'Java', '.NET'],
  resumeUpdated: '6 months ago',
};

export const stats: Stats = {
  applied: 4,
  shortlisted: 3,
  rejected: 1,
};


export const opportunities: Opportunity[] = [
  { id: '83924853', role: 'Level 2 - Software Engineer', band: 'B3', location: 'Bangalore', skills: ['Java', 'Script', 'Python', 'c#'], status: 'Shortlisted',description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.', },
  { id: '83924854', role: 'Level 2 - Software Engineer', band: 'B3', location: 'Bangalore', skills: ['Java Script', 'Python', 'c#' ,'React', 'Node.js'], status: 'Shortlisted',description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.', },
  { id: '83924855', role: 'Level 2 - Software Engineer', band: 'B3', location: 'Bangalore', skills: ['Java Script', 'Python'], status: 'Shortlisted',description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.', },
  { id: '83924856', role: 'Level 2 - Software Engineer', band: 'B3', location: 'Bangalore', skills: ['Java Script', 'Python', 'c#', 'TypeScript', 'Angular', 'Vue.js'], status: 'Shortlisted',description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.', },
  { id: '83924857', role: 'Level 2 - Software Engineer', band: 'B3', location: 'Bangalore', skills: ['Java Script', 'Python', 'c#', 'Docker'], status: 'Shortlisted',description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.', },
  { id: '83924858', role: 'Level 2 - Software Engineer', band: 'B3', location: 'Bangalore', skills: ['Java Script', 'Python', 'c#'], status: 'Actioned',description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.', },
  { id: '83924859', role: 'Level 2 - Software Engineer', band: 'B3', location: 'Bangalore', skills: ['Java Script', 'Python', 'c#', 'Kubernetes', 'AWS', 'Azure', 'Git'], status: null as any,description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.', },
  { id: '83924860', role: 'Level 2 - Software Engineer', band: 'B3', location: 'Bangalore', skills: ['Java'], status: 'Shortlisted',description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.', },
  { id: '83924861', role: 'Level 2 - Software Engineer', band: 'B3', location: 'Bangalore', skills: ['Java Script', 'Python', 'c#', 'MongoDB', 'PostgreSQL'], status: 'Rejected',description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.', },
];

export const notifications: Notification[] = [
  {
    id: '1',
    user: {
      name: 'Zamira Peterson',
      avatar: '/assets/user-avatar.png',
    },
    message: 'has applied for the',
    soId: 'SO 32443388',
    timestamp: '2 min ago',
  },
  {
    id: '2',
    user: {
      name: 'John Smith',
      avatar: '/assets/user-avatar.png',
    },
    message: 'has applied for the',
    soId: 'SO 32443389',
    timestamp: '15 min ago',
  },
  {
    id: '3',
    user: {
      name: 'Emily Davis',
      avatar: '/assets/user-avatar.png',
    },
    message: 'has applied for the',
    soId: 'SO 32443390',
    timestamp: '1 hour ago',
  },
];

export const recentActivities: Activity[] = [
  {
    id: '1',
    title: 'Java Developer I - A1',
    soId: 'SO#292567',
    status: 'Shortlisted',
    timestamp: '12 hrs ago',
  },
  {
    id: '2',
    title: 'Java Developer I - A1',
    soId: 'SO#292567',
    status: 'Actioned',
    timestamp: 'Yesterday',
  },
  {
    id: '3',
    title: 'Java Developer I - A1',
    soId: 'SO#292567',
    status: 'Rejected',
    timestamp: '3 days ago',
  },
];
