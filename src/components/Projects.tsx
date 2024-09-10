import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-20 p-3 text-zinc-900">
      <Navbar />
      <div className="container mx-auto py-8 px-4 max-w-5xl">
        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-100 mb-6 font-mono">
          No Projects Here...
        </h1>
        <div className="bg-black rounded-lg p-6 text-gray-100">
          <p className="text-lg sm:text-lg md:text-lg lg:text-xl mb-6 font-mono">
            I haven’t added any projects yet. Check back later, or explore other sections.
          </p>
          <Link 
            to="/" 
            className="text-green-400 text-lg sm:text-lg md:text-lg lg:text-xl font-mono"
          >
            Return to the home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
