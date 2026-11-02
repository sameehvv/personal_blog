import React from 'react';
import { Block } from './Block';
import { SiGithub } from "react-icons/si";

export const Github = () => (
  <Block 
    className="col-span-2 row-span-1 sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1 flex items-center justify-center p-4 relative"
  >
    <a 
      href="https://github.com/sameehvv" 
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center text-3xl text-white"
    >
      <SiGithub className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-zinc-100" />
    </a>
  </Block>
);
