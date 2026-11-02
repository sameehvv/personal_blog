import React from 'react';
import { motion } from "framer-motion";
import { Navbar } from './Navbar';
import { HeaderBlock } from './HeaderBlock';
import { Blog } from './Blog';
import { Certs } from './Certs';
import { Checklist } from './Checklist';
import { HTB } from './HTB';
import { THM } from './THM';
import { DiscordStatusBox } from './DiscordStatusBox';
import { Github } from './Github';
import { Linkedin } from './Linkedin';
import { Twitter } from './Twitter';
import { WhatITest } from './WhatITest';

export const RevealBento = () => {
  return (
    <div className="relative min-h-screen p-3 text-zinc-50 overflow-hidden bg-black">

      <Navbar />

      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.05 }}
        className="relative mx-auto grid max-w-7xl grid-flow-dense gap-4 pt-20 p-3 grid-cols-4 auto-rows-[minmax(96px,auto)] lg:auto-rows-auto lg:grid-cols-8 lg:grid-rows-6"
      >
        <HeaderBlock />
        <Blog />
        <Checklist />
        <HTB />
        <THM />
        <DiscordStatusBox />
        <Github />
        <Linkedin />
        <Twitter />
        <Certs />
        <WhatITest />
      </motion.div>
    </div>
  );
};

export default RevealBento;
