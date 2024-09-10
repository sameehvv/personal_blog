import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogsData';

const BlogList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20 p-3 text-zinc-900 bg-black ">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-100 mb-6 font-mono">Blogs</h1>

        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 mb-7 rounded-3xl drop-shadow-lg bg-zinc-950 inset-shadow text-gray-100 outline outline-0 outline-offset-0 hover:outline hover:outline-1 hover:outline-zinc-600 transition-colors duration-300"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', mass: 3, stiffness: 400, damping: 50 }}
              className=" bg-zinc-950 inset-shadow rounded-3xl drop-shadow-lg p-6 outline outline-0 outline-offset-0 hover:outline hover:outline-1 hover:outline-zinc-600 transition-colors duration-300"
            >
              <Link 
                to={`/blogs/${blog.id}`} 
                className="block"
                state={{ title: blog.title }} 
              >
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-100 font-mono">{blog.title}</h2>
                <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg text-green-300 font-mono">By {blog.author} on {blog.date}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
