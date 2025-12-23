export interface User {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Opportunity {
  id: string;
  role: string;
  band: string;
  location: string;
  status: string;
  skills: string[];
  description: string;
}

export interface Notification {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  message: string;
  soId: string;
  timestamp: string;
}

export interface Activity {
  id: string;
  title: string;
  soId: string;
  status: string;
  timestamp: string;
}

export interface ProfileSummary {
  description: string;
  primarySkills: string[];
  resumeUpdated: string;
}

export interface Stats {
  applied: number;
  shortlisted: number;
  rejected: number;
}

