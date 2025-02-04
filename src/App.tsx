import React from 'react';
import { Navbar } from './components/Navbar';
import { SearchBar } from './components/SearchBar';
import { JobCard } from './components/JobCard';

const SAMPLE_JOBS = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Full-time' as const,
    description: 'We are looking for an experienced Frontend Developer...',
    requirements: ['5+ years React experience', 'TypeScript', 'CSS-in-JS'],
    salary_range: '$120k - $160k',
    posted_at: '2 days ago',
    company_logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop'
  },
  {
    id: '2',
    title: 'Product Designer',
    company: 'DesignStudio',
    location: 'Remote',
    type: 'Full-time' as const,
    description: 'Join our creative team as a Product Designer...',
    requirements: ['UI/UX Design', 'Figma', 'Design Systems'],
    salary_range: '$90k - $120k',
    posted_at: '1 day ago',
    company_logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&h=100&fit=crop'
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Find Your Dream Job Today
          </h1>
          <p className="text-xl text-indigo-200 mb-8">
            Thousands of jobs from top companies are waiting for you
          </p>
          <SearchBar />
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Featured Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SAMPLE_JOBS.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;