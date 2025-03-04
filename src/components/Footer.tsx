import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Dhilip kumar</p>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <p className="flex items-center text-gray-400 text-sm">
              Made with <Heart size={14} className="mx-1 text-red-500" /> in 2025
            </p>
            <p className="text-gray-400 text-xs mt-1">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-indigo-600 hover:bg-indigo-700 p-2 rounded-full transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;