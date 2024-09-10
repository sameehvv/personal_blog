import React, { useState } from 'react';
import { Block } from './Block';
import { SiHackthebox } from "react-icons/si";

export const HTB = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Block
      className="col-span-4 row-span-1 sm:col-span-4 sm:row-span-1 md:col-span-4 md:row-span-1 lg:col-span-3 lg:row-span-1 flex items-center justify-center p-4 relative group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute flex items-center justify-center transform transition-transform duration-200 ${
          isHovered ? 'translate-x-40' : 'translate-x-0'
        }`}
      >
        <SiHackthebox
          className={`text-lime-400 transition-all duration-200 
            text-4xl sm:text-5xl md:text-6xl lg:text-6xl`}
        />
      </div>
      <div
        className={`absolute transition-opacity duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src="https://www.hackthebox.com/badge/image/440500"
          alt="HackTheBox Badge"
          className={`transition-all duration-200 
            max-w-[200px] max-h-[200px] sm:max-w-[200px] sm:max-h-[200px] 
            md:max-w-[250px] md:max-h-[250px] lg:max-w-[300px] lg:max-h-[300px] 
            w-auto h-auto`}
        />
      </div>
    </Block>
  );
};
