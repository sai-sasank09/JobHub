export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  description: string;
  requirements: string[];
  salary_range: string;
  posted_at: string;
  company_logo?: string;
}

export interface User {
  id: string;
  email: string;
  full_name: string;
  role: 'employer' | 'job_seeker';
  avatar_url?: string;
}