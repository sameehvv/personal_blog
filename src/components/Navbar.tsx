import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const isSubBlogPage = location.pathname.startsWith('/blogs/') && location.pathname !== '/blogs';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 max-w-7xl mx-auto backdrop-blur-md transition-colors duration-300 ${
        isSubBlogPage
          ? 'bg-zinc-900 bg-opacity-80 outline outline-0 outline-offset-0 hover:outline hover:outline-1 hover:outline-zinc-700 inset-shadow-blog'
          : 'bg-zinc-950 bg-opacity-80 outline outline-0 outline-offset-0 hover:outline hover:outline-1 hover:outline-zinc-700 inset-shadow'
      } rounded-3xl mt-4`}
    >
      {/* Centering container */}
      <div className="flex items-center justify-between p-4 text-gray-100">
        <div className="flex-shrink-0">
          <Link to="/" className="hover:text-green-400 font-mono">Home</Link>
        </div>
        
        <div className="flex space-x-4">
          <Link to="/projects" className="hover:text-green-400 font-mono">Projects</Link>
          <Link to="/blogs" className="hover:text-green-400 font-mono">Blogs</Link>
        </div>
      </div>
    </nav>
  );
};