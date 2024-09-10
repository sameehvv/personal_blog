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

export const RevealBento = () => {
  return (
    <div className="relative min-h-screen p-3 text-zinc-50 overflow-hidden bg-black">

      <Navbar />

      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.05 }}
        className="relative mx-auto grid max-w-7xl grid-flow-dense gap-4 pt-20 p-3 grid-cols-4 [grid-template-rows:repeat(14,minmax(0,1fr))] sm:grid-cols-4 sm:[grid-template-rows:repeat(12,minmax(0,1fr))] md:grid-cols-4 md:grid-cols-4 sm:[grid-template-rows:repeat(12,minmax(0,1fr))] lg:grid-cols-8 lg:grid-rows-6"
      >
        <HeaderBlock />
        <Blog />
        <Certs />
        <Checklist />
        <HTB />
        <THM />
        <DiscordStatusBox />
        <Github />
        <Linkedin />
        <Twitter />
      </motion.div>
    </div>
  );
};

export default RevealBento;
