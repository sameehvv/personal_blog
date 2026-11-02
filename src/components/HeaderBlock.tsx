import React from 'react';
import { Block } from './Block';

export const HeaderBlock = () => (
  <Block className="col-span-4 row-span-2 sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 relative" 
  >
    <img
      src="/images/assets/profile.png"
      alt="avatar"
      className="mb-4 size-14 rounded-full w-15 h-15 sm:w-15 sm:h-15 lg:w-15 lg:h-15"
    />
    <h1 className="text-2xl font-medium leading-tight font-mono text-green-400 ">
      Hey, I'm Sameeh!{" "}
      <span className="text-zinc-400 text-lg font-mono">Offensive Security Consultant. Web, Active Directory and red team assessments.</span>
    </h1>
  </Block>
);


