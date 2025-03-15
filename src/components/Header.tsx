import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">Communion</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">
              Home
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">
              Events
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 font-medium">
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;