import React from 'react';
import { MapPin, Clock, BriefcaseIcon } from 'lucide-react';
import type { Job } from '../types';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon className="mr-1.5 h-4 w-4" />
            {job.company}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <MapPin className="mr-1.5 h-4 w-4" />
            {job.location}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Clock className="mr-1.5 h-4 w-4" />
            {job.posted_at}
          </div>
        </div>
        {job.company_logo && (
          <img
            src={job.company_logo}
            alt={`${job.company} logo`}
            className="h-12 w-12 rounded-full"
          />
        )}
      </div>
      <div className="mt-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
          {job.type}
        </span>
        <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
          {job.salary_range}
        </span>
      </div>
      <div className="mt-4">
        <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
}