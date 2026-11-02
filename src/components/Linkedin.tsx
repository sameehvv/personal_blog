import React from 'react';
import { Block } from './Block';
import { SiLinkedin } from "react-icons/si";

export const Linkedin = () => (
  <Block 
    className="col-span-2 row-span-1 sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1 p-4 relative flex items-center justify-center"
  >
    <a 
      href="https://linkedin.com/in/sameehvv" 
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center text-3xl text-white"
    >
      <SiLinkedin className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-zinc-100 " />
    </a>
  </Block>
);
