import React, { useState } from 'react';
import { Block } from './Block';
import { blogs } from '../data/blogsData';
import { ImBooks } from "react-icons/im";
import { Link } from 'react-router-dom';

export const Blog = () => {
  // Get the most recent blog
  const recentBlog = blogs[blogs.length - 1];
  const [hovered, setHovered] = useState(false);

  return (
    <Block 
      className="col-span-4 row-span-2 sm:col-span-4 sm:row-span-2 md:col-span-4 md:row-span-2 lg:col-span-6 lg:row-span-2 relative flex items-center justify-center p-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Recent Blog Display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="absolute top-2 left-0 p-4">
          <h1 className="text-2xl font-medium font-mono text-green-400">
            Recent Blog
          </h1>
        </div>
        <div className="text-center w-full h-full flex items-center justify-center relative">
          <div className="p-4 rounded-lg">
            <p className="text-lg font-mono">{recentBlog.title}</p>
          </div>
        </div>
      </div>

      <div
        className="absolute right-4 bottom-4 flex flex-col items-center"
      >
        {/* Icon and Text with Hover Effect */}
        <div
          className={`transition-transform duration-500 ${hovered ? 'scale-125 opacity-100' : 'scale-0 opacity-0'} 
            text-lg sm:text-lg md:text-xl lg:text-2xl`}
        >
          <ImBooks className="text-white" />
        </div>
        <Link
          to="/blogs"
          className={`transition-transform duration-500 mt-2 flex items-center ${
            hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          } text-sm sm:text-base md:text-md lg:text-lg font-mono text-green-400`}
        >
          View Blogs
        </Link>
      </div>
    </Block>
  );
};