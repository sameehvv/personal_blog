import React, { useState } from 'react';
import { Block } from './Block';
import { SiTryhackme } from "react-icons/si";

export const THM = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Block
      className="col-span-4 row-span-1 sm:col-span-4 sm:row-span-1 md:col-span-4 md:row-span-1 lg:col-span-4 lg:row-span-1 flex items-center justify-center p-4 relative group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`absolute flex items-center justify-center transform transition-transform duration-200 ${
          isHovered ? 'translate-x-40' : 'translate-x-0'
        }`}
      >
        <SiTryhackme
          className={`text-red-500 transition-all duration-200 
            text-4xl sm:text-5xl md:text-6xl lg:text-6xl`} 
        />
      </div>
      <div
        className={`transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <img
          src="https://tryhackme-badges.s3.amazonaws.com/Sameeh.png"
          alt="TryHackMe Badge"
          className={`transition-all duration-200 
            max-w-[250px] max-h-[250px] sm:max-w-[300px] sm:max-h-[300px] 
            md:max-w-[350px] md:max-h-[350px] lg:max-w-[400px] lg:max-h-[400px] 
            w-auto h-auto`}
        />
      </div>
    </Block>
  );
};
