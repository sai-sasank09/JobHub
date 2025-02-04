import React from 'react';
import { Menu, Search, User } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">JobHub</span>
          </div>
          
          <div className="hidden sm:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Find Jobs</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Companies</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Post a Job</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Sign In
            </button>
          </div>

          <div className="flex items-center sm:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}