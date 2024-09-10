import React, { useState } from 'react';
import { Block } from './Block';
import { PiShareFatFill } from "react-icons/pi";

export const Checklist = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Block 
      className="col-span-4 row-span-2 sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2 lg:col-span-3 lg:row-span-2 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Content without hyperlink */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white text-xl font-medium leading-tight font-mono">
        Web Application Testing Notes!
      </div>

      {/* Redirect Icon */}
      <div
        className={`absolute bottom-4 right-4 transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a 
          href="https://zesty-industry-7a0.notion.site/Web-Pentest-1fbddf00cb2e4571a90433b3713984d3" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiShareFatFill className="text-green-400 text-3xl" />
        </a>
      </div>
    </Block>
  );
};

export default Checklist;
