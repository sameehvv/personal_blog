import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const lines = ['$ whoami', 'sameeh', '$ cat role.txt', 'Offensive Security Consultant'];

// Short terminal-style intro. Shown once per browser session, skipped for reduced motion,
// and can be skipped with a click or key press.
export const Splash = ({ onDone }: { onDone: () => void }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < lines.length) {
      const t = setTimeout(() => setCount((c) => c + 1), count === 0 ? 250 : 380);
      return () => clearTimeout(t);
    }
    const t = setTimeout(onDone, 500);
    return () => clearTimeout(t);
  }, [count, onDone]);

  useEffect(() => {
    const skip = () => onDone();
    window.addEventListener('keydown', skip);
    return () => window.removeEventListener('keydown', skip);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onDone}
      role="presentation"
    >
      <div className="w-[min(90vw,420px)] font-mono text-sm sm:text-base">
        {lines.slice(0, count).map((l, i) => (
          <div key={l} className={l.startsWith('$') ? 'text-zinc-500' : 'text-green-400'}>
            {l}
            {i === count - 1 && <span className="ml-0.5 animate-pulse">_</span>}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Splash;
