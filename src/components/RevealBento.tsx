import React, { useCallback, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { Splash } from './Splash';
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

const shouldSkipSplash = () => {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
    return sessionStorage.getItem('splashSeen') === '1';
  } catch {
    return false;
  }
};

export const RevealBento = () => {
  const [booted, setBooted] = useState(shouldSkipSplash);
  const finish = useCallback(() => {
    try {
      sessionStorage.setItem('splashSeen', '1');
    } catch {}
    setBooted(true);
  }, []);

  return (
    <div className="relative min-h-screen p-3 text-zinc-50 overflow-hidden bg-black">

      <AnimatePresence>{!booted && <Splash onDone={finish} />}</AnimatePresence>

      <Navbar />

      <motion.div
        initial="initial"
        animate={booted ? "animate" : "initial"}
        transition={{ staggerChildren: 0.05 }}
        className="relative mx-auto grid max-w-7xl grid-flow-dense gap-4 pt-20 p-3 grid-cols-4 auto-rows-[minmax(104px,auto)] lg:grid-cols-8"
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
