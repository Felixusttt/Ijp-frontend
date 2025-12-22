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
  {
    id: '1',
    soId: '32443388',
    title: 'Lead 2 - Software Eng.',
    band: 'Band B2',
    location: 'Bangalore',
    status: null,
    skills: ['Java Script', 'Python', 'React', 'Node.js'],
    description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.',
  },
  {
    id: '2',
    soId: '32443388',
    title: 'Lead 2 - Software Eng.',
    band: 'Band B2',
    location: 'Bangalore',
    status: 'Shortlisted',
    skills: ['Java Script', 'Python', 'React', 'Node.js'],
    description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.',
  },
  {
    id: '3',
    soId: '32443388',
    title: 'Lead 2 - Software Eng.',
    band: 'Band B2',
    location: 'Bangalore',
    status: null,
    skills: ['Java Script', 'Python', 'React', 'Node.js'],
    description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.',
  },
  {
    id: '4',
    soId: '32443388',
    title: 'Lead 2 - Software Eng.',
    band: 'Band B2',
    location: 'Bangalore',
    status: 'Actioned',
    skills: ['Java Script', 'Python', 'React', 'Node.js'],
    description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.',
  },
  {
    id: '5',
    soId: '32443388',
    title: 'Lead 2 - Software Eng.',
    band: 'Band B2',
    location: 'Bangalore',
    status: null,
    skills: ['Java Script', 'Python', 'React', 'Node.js'],
    description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.',
  },
  {
    id: '6',
    soId: '32443388',
    title: 'Lead 2 - Software Eng.',
    band: 'Band B2',
    location: 'Bangalore',
    status: 'Rejected',
    skills: ['Java Script', 'Python', 'React', 'Node.js'],
    description: 'Highly skilled Java Developer with expertise in designing, developing, and maintaining robust Java applications. Proficient in working with modern frameworks, APIs, and databases to deliver scalable software solutions.',
  },
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
