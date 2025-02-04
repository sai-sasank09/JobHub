import React from 'react';
import { Search, MapPin } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow-md">
        <div className="flex-1 flex items-center border rounded-md px-3 py-2">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Job title or keyword"
            className="ml-2 flex-1 outline-none"
          />
        </div>
        <div className="flex-1 flex items-center border rounded-md px-3 py-2">
          <MapPin className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Location"
            className="ml-2 flex-1 outline-none"
          />
        </div>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Search
        </button>
      </div>
    </div>
  );
}