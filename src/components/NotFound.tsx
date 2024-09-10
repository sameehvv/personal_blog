import React from 'react';
import { Navbar } from '../components/Navbar';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-20 p-3 text-zinc-900">
      <Navbar />
      <div className="container mx-auto py-8 px-4"></div>
      <div className="flex flex-col items-center justify-center min-h-full text-center">
        <h1 className="text-6xl font-bold text-green-500 mb-6 font-mono">404</h1>
        <h2 className="text-xl sm:text-xl md:text-xl lg:text-2xl font-semibold text-gray-300 mb-4 font-mono ">
          Oops! Page Not Found
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
